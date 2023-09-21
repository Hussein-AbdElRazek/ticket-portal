
export const profileDataAdminsInputs = [
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

]
export const profileDataGeneralInputs = [
    {
        control: "input",
        type: "text",
        name: "userFirstName",
        label: "First Name",
        disabled: true,
        size: "small",
        gridColumn: 6,
    },
    {
        control: "input",
        type: "text",
        name: "userLastName",
        label: "Last Name",
        disabled: true,
        size: "small",
        gridColumn: 6
    },
    {
        control: "input",
        type: "text",
        name: "mobileNumber",
        label: "Mobile Number",
        disabled: true,
        size: "small",
    },

]
export const changePasswordDataInputs = [
    {
        control: "input",
        type: "password",
        name: "oldPassword",
        label: "Old Password",
    },
    {
        control: "input",
        type: "password",
        name: "password",
        label: "New Password",
    },
    {
        control: "input",
        type: "password",
        name: "confirmPassword",
        label: "Confirm New Password",
    },
]

export const profileInitialValues = {
    userFirstName: "",
    userLastName: "",
    mobileNumber: "",
    userName: "",
    email: "",
}
export const changePasswordInitialValues = {
    oldPassword: "",
    password: "",
    confirmPassword: "",
}