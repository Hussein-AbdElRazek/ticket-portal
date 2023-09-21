import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';

const Navbar = (props) =>
{
    const { handleSearch, isLoadingSearch } = props;
    const navigate = useNavigate();
    const role = useSelector(state => state.auth.role)
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
                zIndex: 9999,
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
            {role === "superAdmin" && (
                <SearchBar handleSearch={handleSearch} isLoadingSearch={isLoadingSearch} />
            )}
            <Box
                sx={{ p: 2 }}
            >
                {role === "superAdmin" && (
                    <Button onClick={() => { navigate("admins") }}>Admins</Button>
                )}
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