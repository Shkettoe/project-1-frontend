import * as yup from 'yup'

export const ProfileSchema = yup.object().shape({
    email: yup.string().email(),
    first_name: yup.string(),
    last_name: yup.string()
})