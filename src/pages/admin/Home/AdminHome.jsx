import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { Route, Routes } from "react-router-dom"

import Navbar from '../../../components/navbar/Navbar'
import ActiveTickets from '../../admin/ActiveTickets/ActiveTickets'
import Profile from '../../Profile/Profile'
import useSocket from '../../../hooks/use-socket.js'
import { useDispatch } from 'react-redux'
import { ticketsActions } from '../../../store/tickets-slice'
const AdminHome = () =>
{
  const { newChangeOnTickets, joinRoom } = useSocket();
  const dispatch = useDispatch();
  console.log("home rednder")
  joinRoom();
  useEffect(() =>
  {
    console.log("useEf home")
    if (newChangeOnTickets?.ticketId)
    {
      if (newChangeOnTickets.ticketStatus === "taken")
      {
        newChangeOnTickets.isTaken = true;
        dispatch(ticketsActions.updateTicket(newChangeOnTickets))
      } else if (newChangeOnTickets.ticketStatus === "closed")
      {
        dispatch(ticketsActions.deleteTicket(newChangeOnTickets.ticketId))
        dispatch(ticketsActions.closeTicket(newChangeOnTickets.ticketId))
      }
    }
  }, [dispatch,newChangeOnTickets])
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{ flexGrow: 2, pt: 10 }}
      >
        <Routes>
          <Route index element={<ActiveTickets />} />
          <Route path="profile" element={<Profile />} />
        </Routes>

      </Box>
    </>
  )
}

export default AdminHome