import * as z from "zod"

const passwordRegexPattern = /^[0-9a-zA-Z]{8,12}$/;


export const passwordValidation = z.string().regex(passwordRegexPattern, {
    message: 'Password must be 8~12 characters. Only accept 1~9, a-z and A-Z are accepted'
  })

export const emailValidation = z.string().min(1, { 
    message: "This field has to be filled." }
  ).email("This is not a valid email.")


