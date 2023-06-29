import { request } from '../utilities/api'

const usersURL = '/auth/'

const createUser = (user) => request('POST', `${usersURL}/register`, user)
const loginUser = (credentials) => request('POST', `${usersURL}/login`, credentials)

export default {
    createUser,
    loginUser
}