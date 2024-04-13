"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { emailValidation, passwordValidation, usernameValidation } from "@/lib/validation"
import { RegisterUserParam } from "@/requests/public"
import React from "react"

const formSchema = z.object({
  username: usernameValidation,
  email: emailValidation,
  password: passwordValidation,
  confirm: passwordValidation}).refine((data) => data.password === data.confirm, {
        message: "Passwords don't match",
        path: ["confirm"],
    })

interface Props {
  handleOnRegister: (value: RegisterUserParam) => Promise<void>
  disabled: boolean
}

const RegisterForm: React.FC<Props> = ({handleOnRegister, disabled}) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirm: '',
    },
  })

  function onSubmit({ username, email, password }: z.infer<typeof formSchema>) {
    handleOnRegister({ username, email, password })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Enter Password Again!
              </FormDescription>
            </FormItem>
          )}
        />
        <Button disabled={disabled} type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default RegisterForm 
