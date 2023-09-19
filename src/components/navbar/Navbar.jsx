import { Box, IconButton, Paper, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) =>
{
    const navigate = useNavigate();
    return (
        <Paper
            variant="outlined"
            sx={{
                position: "fixed",
                width: "100%",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "white",
                zIndex: 999,
                borderRadius: 0,
            }}>

            <Typography
                variant="h5"
                noWrap
                component="div"
                color="primary"
                sx={{ cursor: "pointer", p: 2 }}
                onClick={() => navigate("/")}
            >
                Ticket Portal
            </Typography>
            <Box
                sx={{ p: 2 }}
            >
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={() => { navigate("profile") }}
                    color="primary"
                >
                    <AccountCircle />
                </IconButton>
            </Box>

        </Paper>
    )
}

export default Navbar