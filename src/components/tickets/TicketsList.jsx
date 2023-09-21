import { Box, Typography } from '@mui/material'
import React, { useCallback, useRef } from 'react'
import Ticket from './Ticket'
import AddTicketBtn from './AddTicketBtn'
import LoadingSpinner from '../ui/LoadingSpinner'
import { useSelector } from 'react-redux'
import TabsBar from '../TabsBar'

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
    //for tabs super admin
    const tabs = [
        { value: 0, label: "Active Tickets", to: "/" },
        { value: 1, label: "Closed Tickets", to: "/closed" },
    ];
    const tabsMap = {
        "/": 0,
        "/closed": 1,
    };
    return (
        <Box
            sx={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "500px",
                maxWidth:"100%",
                borderRight: "1px solid rgba(0, 0, 0, 0.12)",
                height: role === "user" ?
                    "calc(100% - 125.5px)" : "calc(100% - 60px)",
                overflowY: "auto",
                marginBottom: role === "user" ?
                    "80px" : 0,
                marginTop: "60px"
            }}
        >
            {role==="superAdmin" &&(
                <TabsBar
                    tabs={tabs}
                    tabsMap={tabsMap}
                />
            )}
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