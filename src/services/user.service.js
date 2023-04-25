import User from '../models/User.js'

const create = (body) => {
    return User.create(body);
}

export default {create}