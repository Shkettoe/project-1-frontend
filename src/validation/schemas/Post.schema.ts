import * as yup from 'yup'

export const PostSchema = yup.object().shape({
    content: yup.string().required()
})