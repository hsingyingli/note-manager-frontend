'use client'
import { useContext} from 'react'
import { UserContext } from '@/stores/contexts/UserContext'

export default function Home() {
  const {user, isLoading} = useContext(UserContext)
  return (
    <div>
      {isLoading.toString()}
      <div>username: {user.username}</div>
    </div>
  )
}
