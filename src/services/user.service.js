import User from '../models/User.js'

const create = (body) => {
    return User.create(body);
}

const findAll = () => User.find()

const findById = (id) => User.findById(id)

const update = (id, name, username, password, phone) =>
    User.findOneAndUpdate({ _id: id }, { name, username, password, phone })


export default { create, findAll, findById, update }