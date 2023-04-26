import bcrypt from 'bcrypt'

import authService from '../services/auth.service.js'

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await authService.findByUsername(username);

        if (!user) return res.status(400).send({ message: "Username or password do not match!" })

        const ispasswordValid = await bcrypt.compare(password, user.password);

        if (!ispasswordValid) return res.status(400).send({ message: "Username or password do not match!" })

        const token = authService.generateToken(user._id);
        res.send({ token })
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export { login }