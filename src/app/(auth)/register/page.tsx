'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import RegisterForm from "./_components/Form"
import { useMutation } from '@tanstack/react-query'
import { RegisterUserParam, registerUser } from "@/requests/public"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'

const RegisterPage = () => {

  const router = useRouter()
  const { toast } = useToast()
  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast({
        description: "Register Successfully",
        duration: 5000,
      })
      router.push("/login")
    },
    onError: ()=> {
      toast({
        variant: "destructive",
        title: "Register Failed.",
        description: "Uh oh! Something went wrong.",
        duration: 5000,
      })
    }
  })

  const handleOnRegister = async (value: RegisterUserParam) => mutate(value)

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <CardContent>
        <RegisterForm 
          handleOnRegister={handleOnRegister}
          disabled={isPending}
        />
      </CardContent>
    </Card>
  )
}

export default RegisterPage 
