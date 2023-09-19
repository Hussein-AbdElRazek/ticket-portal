import { Box, Typography } from '@mui/material'
import React, { useCallback, useRef } from 'react'
import Ticket from './Ticket'
import AddTicketBtn from './AddTicketBtn'
import LoadingSpinner from '../ui/LoadingSpinner'
import { useSelector } from 'react-redux'

const TicketsList = (props) =>
{
    const {
        tickets,
        isLoadingGetTickets,
        currentPage,
        pagesSize,
        setCurrentPage,
        title
    } = props;
    const role = useSelector(state => state.auth.role);
    //for handle pagination
    const observer = useRef();
    const lastTicketRef = useCallback((node) =>
    {
        if (isLoadingGetTickets) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries =>
        {
            if (entries[0].isIntersecting)
            {
                if (currentPage < pagesSize) setCurrentPage(prev => prev + 1)
            }
        })
        if (node) observer.current.observe(node);
    }, [isLoadingGetTickets, currentPage, pagesSize, setCurrentPage])
    return (
        <Box
            sx={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "500px",
                borderRight: "1px solid rgba(0, 0, 0, 0.12)",
                height: role === "user" ?
                    "calc(100% - 125.5px)" : "calc(100% - 60px)",
                overflowY: "auto",
                marginBottom: role === "user" ?
                    "80px" : 0,
                marginTop: "60px"
            }}
        >
            <Typography variant="h6" m="16px" color="primary" >{title}</Typography>
            {tickets.map((ticket, index) => (
                <Ticket
                    key={ticket.ticketId}
                    ticket={ticket}
                    lastTicketRef={index + 1 === tickets.length ? lastTicketRef : null}
                />
            ))}
            {isLoadingGetTickets && <LoadingSpinner />}
            {role === "user" && (
                <AddTicketBtn />
            )}
        </Box>
    )
}

export default TicketsList