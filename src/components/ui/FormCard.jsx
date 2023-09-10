import { Box } from '@mui/material'

const FormCard = ({children}) =>
{
    return (
        <Box
            sx={{
                width: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "white",
                px: 15,
            }}
        >
            {children}
        </Box>
    )
}

export default FormCard