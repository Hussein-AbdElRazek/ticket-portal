import React from 'react'
import Tickets from '../Tickets/Tickets'
import Navbar from '../../../components/navbar/Navbar'
import { Box } from '@mui/material'
import { Route, Routes } from "react-router-dom"
import Profile from '../../Profile/Profile'

const Home = () =>
{
    return (
        <>
            <Navbar />
            <Box
                component="main"
                sx={{ flexGrow: 2, pt: 10 }}
            >
                <Routes>
                    <Route index element={<Tickets />} />
                    <Route path="profile" element={<Profile />} />
                </Routes>

            </Box>
        </>
    )
}

export default Home