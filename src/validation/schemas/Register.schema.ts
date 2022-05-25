import * as yup from 'yup'

export const RegisterSchema = yup.object().shape({
    email: yup.string().email().required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    password: yup.string().min(8).max(32).required(),
    confirm_password: yup.string().oneOf([yup.ref("password"), null]).required()
})