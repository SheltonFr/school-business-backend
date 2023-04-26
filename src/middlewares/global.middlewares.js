import mongoose from "mongoose";
import userService from "../services/user.service'.js";

export const validId = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: "Invalid Id!" })

    req.id = id;
    next();
}