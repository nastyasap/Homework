import axios from "axios";

// const instance = axios.create({
//     baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
// })

// export const requestApi = instance.post({success: true})
export const requestApi = (success: boolean) => axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success})