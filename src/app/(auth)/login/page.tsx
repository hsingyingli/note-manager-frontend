'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LoginForm from "./_components/Form"

import { useToast } from "@/components/ui/use-toast"
import { useMutation } from '@tanstack/react-query'
import { LoginUserParam, loginUser } from "@/requests/public"

const LoginPage = () => {
  const { toast } = useToast()
  const { mutate, isPending} = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast({
        description: "Login Successfully",
        duration: 5000,
      })
      window.location.href = "/"
    },
    onError: ()=> {
      toast({
        variant: "destructive",
        title: "Login Failed.",
        description: "Uh oh! Something went wrong.",
        duration: 5000,
      })
    }
  })

  const handleOnLogin = async (value: LoginUserParam) => mutate(value)
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm 
          disabled={isPending} 
          handleOnLogin={handleOnLogin}
        />
      </CardContent>
    </Card>
  )
}

export default LoginPage
