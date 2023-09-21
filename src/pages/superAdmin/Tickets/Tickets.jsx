import React from 'react'
import AdminTicketPanel from '../../../components/tickets/AdminTicketPanel'
import GetTicketsList from '../../../components/tickets/GetTicketsList'
import { Route, Routes } from 'react-router-dom'
import useHttp from '../../../hooks/use-http'
import { useDispatch } from 'react-redux'
import { ticketsActions } from '../../../store/tickets-slice'

const Tickets = () =>
{
    const {
        isLoading: isLoadingDeleteTicket,
        sendRequest: deleteTicket,
    } = useHttp();
    const dispatch = useDispatch();
    const handleDeleteTicket = (ticketId) =>
    {
        const getResponse = ({ message }) =>
        {
            if (message === "success")
            {
                dispatch(ticketsActions.deleteTicket(ticketId))
                dispatch(ticketsActions.closeTicket())
            }
        };
        deleteTicket(
            {
                url: `deleteSpecificTicket/${ticketId}`,
                method: "DELETE",
            },
            getResponse
        );
    }
    return (
        <>
            <Routes>
                <Route
                    index
                    element={
                        <><GetTicketsList
                            url="getAllActiveTickets"
                            title="All Active Tickets"
                        />
                            <AdminTicketPanel
                                handleDelete={handleDeleteTicket}
                                isLoadingDeleteTicket={isLoadingDeleteTicket}
                            />

                        </>

                    }
                />
                <Route
                    path="/closed"
                    element={
                        <>
                            <GetTicketsList
                                url="getAllClosedTickets"
                                title="All Closed Tickets"
                            />
                            <AdminTicketPanel
                                handleDelete={handleDeleteTicket}
                                isLoadingDeleteTicket={isLoadingDeleteTicket}
                            />

                        </>

                    }
                />
            </Routes>
        </>
    )
}

export default Tickets