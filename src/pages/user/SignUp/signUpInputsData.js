export const signUpInputs = [
    {
        control: "input",
        type: "text",
        name: "userFirstName",
        label: "First Name",
        size: "small",
        gridColumn:6,
    },
    {
        control: "input",
        type: "text",
        name: "userLastName",
        label: "Last Name",
        size: "small",
        gridColumn: 6
    },
    {
        control: "input",
        type: "text",
        name: "mobileNumber",
        label: "Mobile Number",
        size: "small",
    },
    {
        control: "input",
        type: "email",
        name: "email",
        label: "Email",
        size: "small",

    },
    {
        control: "input",
        type: "text",
        name: "userName",
        label: "User Name",
        size: "small",
    },

    {
        control: "input",
        type: "password",
        name: "password",
        label: "Password", 
        size: "small",
    },
    {
        control: "input",
        type: "password",
        name: "confirmPassword",
        label: "Confirm Password",
        size: "small",
    },
];

export const signUpInitialValues = {
    userFirstName: "",
    userLastName: "",
    mobileNumber: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: ""
}