import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import RegisterForm from "./_components/Form"

const RegisterPage = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <CardContent>
        <RegisterForm/>
      </CardContent>
    </Card>
  )
}

export default RegisterPage 
