export const createAdminInputs = [
    {
        control: "input",
        type: "email",
        name: "email",
        label: "Email",
    },
    {
        control: "input",
        type: "text",
        name: "userName",
        label: "User Name",
    },
    {
        control: "input",
        type: "password",
        name: "password",
        label: "Password",
    },
    {
        control: "input",
        type: "password",
        name: "confirmPassword",
        label: "Confirm Password",
        
    },
];

export const createAdminInitialValues = {
    email: "",
    userName: "",
    password: "",
    confirmPassword: ""
}