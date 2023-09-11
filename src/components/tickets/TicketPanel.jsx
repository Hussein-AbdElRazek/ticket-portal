import { Box, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import MessageForm from './MessageForm';
import Message from './Message';

const TicketPanel = (props) =>
{
    const { onSubmit, isLoading } = props
    const ticket = useSelector((state) => state.tickets.openedTicket);
    const isTicketOpen = useSelector((state) => state.tickets.isTicketOpen);
    const isNewTicket = useSelector((state) => state.tickets.isNewTicket);
    return (
        <Box
            sx={{
                position: "absolute",
                right: 0,
                bottom: 0,
                top: 0,
                width: "calc(100% - 500px)",
                height: "calc(100% - 125.5px)",
                overflowY: "auto",
                marginBottom: "80px",
                marginTop: "60px"
            }}
        >
            {isTicketOpen ? (
                <>
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
                </>

            ) : isNewTicket ? (
                <MessageForm onSubmit={onSubmit} isLoading={isLoading} />
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

export default TicketPanel