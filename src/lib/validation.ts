import * as z from "zod"

const passwordRegexPattern = /^[0-9a-zA-Z]{8,12}$/;
const usernameRegexPattern = /^[0-9a-zA-Z]{6,18}/;

export const usernameValidation = z.string().regex(usernameRegexPattern, {
  message: 'Username must be 6~18 characters. Only accept 1~9, a-z and A-Z are accepted'
})

export const passwordValidation = z.string().regex(passwordRegexPattern, {
    message: 'Password must be 8~12 characters. Only accept 1~9, a-z and A-Z are accepted'
  })

export const emailValidation = z.string().min(1, { 
    message: "This field has to be filled." }
  ).email("This is not a valid email.")


