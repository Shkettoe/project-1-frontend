import * as yup from 'yup'

export const RegisterSchema = yup.object().shape({
    email: yup.string().email().required(),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    password: yup.string().min(8).max(32).required(),
    confirm_password: yup.string().oneOf([yup.ref("password"), null]).required()
})