import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { Navigate, Route, Routes } from "react-router-dom"
import { useDispatch } from 'react-redux'

import Navbar from '../../../components/navbar/Navbar'
import Profile from '../../Profile/Profile'
import useSocket from '../../../hooks/use-socket.js'
import { ticketsActions } from '../../../store/tickets-slice'
import Admins from '../Admins/Admins'
import Tickets from '../Tickets/Tickets'
import useHttp from '../../../hooks/use-http'
const SuperAdminHome = () =>
{
  const { newChangeOnTickets, joinRoom } = useSocket();
  const dispatch = useDispatch();
  const {
    isLoading: isLoadingSearch,
    sendRequest: search,
  } = useHttp();
  joinRoom();
  useEffect(() =>
  {
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
  }, [dispatch, newChangeOnTickets])
  const handleSearch = ({ ticketId }) =>
  {
    const getResponse = ({ message, data }) =>
    {
      if (message === "success")
      {
        data.ticketId = data._id;
        dispatch(ticketsActions.openTicket(data))
      }
    };
    search(
      {
        url: `searchForTicket/${ticketId.slice(1)}`,
        method: "GET",
      },
      getResponse
    );
  }
  return (
    <>
      <Navbar handleSearch={handleSearch} isLoadingSearch={isLoadingSearch} />
      <Box
        component="main"
        sx={{ flexGrow: 2, pt: 10 }}
      >
        <Routes>
          <Route path="/*" element={<Tickets />} />
          <Route path="profile" element={<Profile />} />
          <Route path="admins/*" element={<Admins />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>

      </Box>
    </>
  )
}

export default SuperAdminHome