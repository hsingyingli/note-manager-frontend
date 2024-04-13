'use client'

import { createContext } from "react";

type User = {
  username: string,
  email: string,
  isLogin: Boolean,
}


interface UserContextInterface {
  user: User, 
  updateUser: (user: User | null) => void
  isLoading: boolean
}

export const DEFAULT_USER: User = {
  username: '',
  email: '',
  isLogin: false,
}

const initialContext: UserContextInterface = {
  user: DEFAULT_USER,
  updateUser: (user) => {},
  isLoading: true
}


export const UserContext = createContext<UserContextInterface>(initialContext)

export type {
  User
}
