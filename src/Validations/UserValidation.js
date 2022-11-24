import* as yup from "yup";
export const userSchema = yup.object().shape({
    phone: yup.number().required(),
    email: yup.string().email().required(),
    pincode: yup.number().required(),
    addressOne: yup.string().required(),
    addressTwo: yup.string(),
    state: yup.string().required(),
    
})



//     amount: yup.number().required(),  .test('len', 'Must be exactly 6 characters', val => val.toString().length === 6)
//     declarationOne: yup.boolean()
//     .oneOf([true], "You must accept the terms and conditions"),
//     declarationTwo: yup.boolean()
//     .oneOf([true], "You must accept the terms and conditions"),
//     declarationThree: yup.boolean()
//     .oneOf([true], "You must accept the terms and conditions"),
//     declarationFour: yup.boolean()
//     .oneOf([true], "You must accept the terms and conditions")
