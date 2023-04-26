import User from '../models/User.js'

const create = (body) => {
    return User.create(body);
}

const findAll = ()  => User.find()

const findById = (id) => {}

export default {create, findAll, findById}