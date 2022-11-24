import* as yup from "yup";
export const userSchema = yup.object().shape({
    phone: yup.string().required(),
    email: yup.string().email().required(),

})