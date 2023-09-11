import *  as Yup from 'yup';
const mobileNumberRegExp = /^(\+201|01|00201)[0125][0-9]{8}$/;

export const editProfileValidationSchema = Yup.object({
    userFirstName: Yup.string()
        .required("Required"),
    userLastName: Yup.string()
        .required("Required"),
    mobileNumber: Yup.string()
        .matches(mobileNumberRegExp, "Mobile Number is not valid")
        .required("Required"),
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