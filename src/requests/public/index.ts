import axios from "@/requests/axios";

export type LoginUserParam = {
  email: string,
  password: string,
}

export const loginUser = ({ email, password }: LoginUserParam) => axios({
  url: '/api/v1/user/login',
  method: 'POST', 
  withCredentials: true,
  data: {email, password}
})

export type RegisterUserParam = {
  username: string, 
  email: string,
  password: string,
}

export const registerUser = ({ username, email, password }: RegisterUserParam) => axios({
  url: '/api/v1/user',
  method: 'POST',
  data: {username, email, password}
})

export const logoutUser = () => axios({
  url: '/api/v1/user/logout',
  method: 'POST', 
  withCredentials: true,
})


