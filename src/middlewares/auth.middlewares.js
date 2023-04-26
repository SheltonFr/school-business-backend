import dotenv from 'dotenv'
import Jwt from 'jsonwebtoken'
import userService from '../services/user.service.js'
dotenv.config();

export const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) return res.sendStatus(401)

        // verifica se existe a estrutura "bearer token"
        const parts = authorization.split(" ")
        if (parts.lenght !== 2) return res.sendStatus(401)

        const [schema, token] = parts;
        if (schema !== "Bearer") return res.sendStatus(401)

        //Validação do token
        Jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
            if (err) return res.status(401).send({ message: "Invalid Token" })

            const user = await userService.findById(decoded.id);
            if (!user) return res.status(401).send({ message: "Invalid Token" })

            req.userId = user._id
            next();
        })
    } catch (e) { 
        return res.sendStatus(500).send({ message: e.message });
    }
}