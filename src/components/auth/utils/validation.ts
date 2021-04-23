import * as yup from 'yup'
import { AuthVariantEnum } from './style'

const validationAuth = (variant: AuthVariantEnum) =>
    yup.object({
        username:
            variant === 'register'
                ? yup
                      .string()
                      .min(
                          6,
                          'Username should be of minimum 6 characters length'
                      )
                      .required('Username is required')
                : yup.string(),
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    })
export default validationAuth

export const validationAuthLogin = validationAuth(AuthVariantEnum.login)
export const validationAuthRegister = validationAuth(AuthVariantEnum.register)
