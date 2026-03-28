export const validateFormData = (email,password) => {

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
if (!emailRegex) {
    return 'Email Id is not valid'
}
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
if (!passwordRegex) {
    return 'Password is not valid'
}

return null
}