import userService from "../services/user.service.js"

const create = async (req, res) => {

    try {
        const { name, username, password, phone } = req.body;

        if (!name || !username || !password || !phone) {
            return res.status(400).send({ message: "Submit all fields to registration" })
        }


        const user = await userService.create(req.body)

        if (!user) {
            return res.status(400).send({ message: "Error creating user" })
        }

        return res.status(201).send({
            message: "User created successfully",
            user: {
                id: user._id,
                name,
                username,
                phone
            }
        })

    } catch (error) {
        return res.status(400).send({ message: error.message })
    }

}

const findAll = async (req, res) => {
    const users = await userService.findAll();

    if (users.length === 0) {
        return res.status(400).send({ message: "There are not registered users!" })
    }

    return res.status(200).send({ users })
}

const findById = async (req, res) => {

    try {
        const user = req.user;
        return res.send({ user })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}
export default { create, findAll, findById }