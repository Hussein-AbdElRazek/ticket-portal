import *  as Yup from 'yup';

export const loginValidationSchema = Yup.object({
    userName: Yup.string()
        .required("Required"),
    password: Yup.string()
        .min(0, "Password must be at least 8 characters")
        .required("Required"),
});