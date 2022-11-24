import* as yup from "yup";

export const userSchema = 
yup.object().shape({
    phone: yup.number().required(),
    email: yup.string().email().required(),
    pincode: yup.number().required(),
    addressOne: yup.string().required(),
    addressTwo: yup.string(),
    state: yup.string().required(),
    planType: yup.string().required(),
})

export const amtSchema = 
yup.object().shape({
    amount: yup.number().required().min(10)
})

export const decSchema = 
yup.object().shape({
    declarationOne: yup.boolean().oneOf([true]),
    declarationTwo: yup.boolean().oneOf([true]),
    declarationThree: yup.boolean().oneOf([true]),
    declarationFour: yup.boolean().oneOf([true])
    
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
