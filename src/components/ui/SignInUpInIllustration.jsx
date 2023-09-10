import { Box, useTheme, Typography } from "@mui/material"

import img from '../../assets/signInUp.jpg'
const SignInUpInIllustration = () =>
{
  const theme = useTheme();
  return (
    <Box sx={{
      display: "none",
      [theme.breakpoints.up('md')]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "60vw",
        minHeight: "100vh",
        backgroundColor: "rgb(255,252,245)",
        borderLeft: "1px solid rgb(202,116,65)"
      }
    }}>
      <Box sx={{ width: "100%", textAlign: "center", }}>
        <Typography color="rgb(202,116,65)" variant='h3'>
          Ticket Portal
        </Typography>
        <img src={img} alt="Background" style={{ width: "90%", }} />
      </Box>
    </Box>
  )
}

export default SignInUpInIllustration