import *  as Yup from 'yup';

export const createAdminValidationSchema = Yup.object({
    email: Yup.string()
        .email("Enter a valid e-mail")
        .required("Required"),
    userName: Yup.string()
        .required("Required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    confirmPassword: Yup.string()
        .required("Required")
        .min(8, "Password must be at least 8 characters")
        .oneOf([Yup.ref("password"), null], "Didn't match password"),
});