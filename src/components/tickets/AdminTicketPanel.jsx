import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MessageForm from './MessageForm';
import Message from './Message';
import useSocket from '../../hooks/use-socket';
import { ticketsActions } from '../../store/tickets-slice';

const AdminTicketPanel = (props) =>
{
    const { onSubmit, isLoading, placeholder } = props
    let ticket = useSelector((state) => state.tickets.openedTicket);
    const isTicketOpen = useSelector((state) => state.tickets.isTicketOpen);
    const dispatch = useDispatch();
    const { markTicketStatus } = useSocket();
    
    let ticketData = {
        ticketId: ticket.ticketId,
    }
    const handleMarkAsTaken = () =>
    {
        ticketData.status = "markAsTaken";
        markTicketStatus(ticketData)
        ticketData.isTaken = true;
        dispatch(ticketsActions.updateTicket(ticketData))
    }
    const handleMarkAsClosed = () =>
    {
        ticketData.status = "markAsClosed";
        markTicketStatus(ticketData)
        dispatch(ticketsActions.deleteTicket(ticket.ticketId))
        dispatch(ticketsActions.closeTicket())
    }
    return (
        <Box
            sx={{
                position: "absolute",
                right: 0,
                bottom: 0,
                top: 0,
                width: "calc(100% - 500px)",
                height: "calc(100% - 145.5px)",
                overflowY: "auto",
                marginBottom: "80px",
                marginTop: "110px",
                paddingBottom: "20px"
            }}
        >
            {isTicketOpen ? (
                <>
                    <Box
                        sx={{
                            width: "100%",
                            height: "50px",
                            position: "fixed",
                            top: "60px",
                            zIndex: 9,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {!ticket?.isTaken ? (
                            <Button onClick={handleMarkAsTaken}> Mark as taken</Button>
                        ) : (
                            <Typography mx={1}>Taken</Typography>
                        )}
                        <Button onClick={handleMarkAsClosed}>Close ticket</Button>

                    </Box>
                    <Message
                        type="send"
                        message={ticket.ticketContent}
                        createdAt={ticket.createdAt}
                        ticketId={ticket.ticketId}
                    />
                    {ticket.ticketAnswers?.map(ele => (
                        <Message
                            key={ele._id}
                            type="received"
                            message={ele.answer}
                            createdAt={ele.createdAt}
                        />
                    ))}
                    <MessageForm placeholder={placeholder} onSubmit={onSubmit} isLoading={isLoading} />
                </>

            ) :
                (
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Typography >
                            Click ticket to see details
                        </Typography>
                    </Box>
                )
            }
        </Box>
    )
}

export default AdminTicketPanel