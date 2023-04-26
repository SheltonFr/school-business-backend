import User from '../models/User.js'
import Jwt from 'jsonwebtoken'

const findByUsername = (username) => User.findOne({ username: username }).select('+password');

const generateToken = (id) => Jwt.sign({id: id}, process.env.SECRET_JWT, {expiresIn: "24h"}) // expirar em 24h

export default {findByUsername, generateToken}