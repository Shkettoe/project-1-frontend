export interface Profile {
    email?: string,
    first_name?: string,
    last_name?: string
}

export interface Password {
    current_password: string,
    password: string,
    confirm_password: string
}