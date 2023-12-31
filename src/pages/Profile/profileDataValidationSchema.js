import *  as Yup from 'yup';

export const editProfileValidationSchema = Yup.object({
    userName: Yup.string()
        .required("Required"),
    email: Yup.string()
        .email("Enter a valid e-mail")
        .required("Required"),
});

export const changePasswordValidationSchema = Yup.object({
    
    oldPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    confirmPassword: Yup.string()
        .required("Required")
        .min(8, "Password must be at least 8 characters")
        .oneOf([Yup.ref("password"), null], "Didn't match password"),
});