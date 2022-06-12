import * as yup from 'yup'

export const PasswordSchema = yup.object().shape({
    current_password: yup.string().min(8).max(32).required(),
    password: yup.string().min(8).max(32).required(),
    confirm_password: yup.string().oneOf([yup.ref("password"), null]).required()
})