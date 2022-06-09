import * as yup from 'yup'

export const ProfileSchema = yup.object().shape({
    email: yup.string().email().notRequired(),
    first_name: yup.string().notRequired(),
    last_name: yup.string().notRequired()
})