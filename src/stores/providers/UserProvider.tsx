'use client'
import { useQuery, QueryClient } from "@tanstack/react-query"; 
import { UserContext, DEFAULT_USER, type User } from "@/stores/contexts/UserContext"
import { getUser } from "@/requests/private";

type Props = {
    children: string | React.ReactNode | React.JSX.Element | React.JSX.Element[];
}

const UserInfoKey = ["user info"]

const UserProvider = ( {children}: Props ) => {

  const {data, isLoading} = useQuery({
    queryKey: UserInfoKey,
    queryFn: getUser,
    retry: false,
  })

  const queryClient = new QueryClient()

  const user = data ? {...DEFAULT_USER, ...data.data.user, isLogin: true}  : DEFAULT_USER

  const updateUser = (localUser: User | null) => {
    queryClient.setQueryData(UserInfoKey, {
      ...user,
      ...localUser,
    })
  }

  return (
    <UserContext.Provider 
      value={{
        user, 
        updateUser,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider


