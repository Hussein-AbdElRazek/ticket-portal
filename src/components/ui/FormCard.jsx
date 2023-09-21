import { Box, Typography } from '@mui/material'

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
            <Typography sx={{
                "@media (min-width:900px)": {
                    display: "none",
                },
            }} color="rgb(202,116,65)" variant='h4'>
                Ticket Portal
            </Typography>
            {children}
        </Box>
    )
}

export default FormCard