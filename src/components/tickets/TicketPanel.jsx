import { Box, IconButton, Typography } from '@mui/material';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';

import MessageForm from './MessageForm';
import Message from './Message';
import { ticketsActions } from '../../store/tickets-slice';

const TicketPanel = (props) =>
{
    const { onSubmit, isLoading, placeholder } = props;
    const dispatch = useDispatch();
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
                overflowX: "auto",
                marginBottom: "80px",
                marginTop: "60px",
                "@media (max-width:890px)": {
                    width: "100%",
                    zIndex: 9999,
                    backgroundColor: "white",
                    height: "calc(100% - 60px)",
                    display: isTicketOpen || isNewTicket ? "block" : "none"
                },
            }}
        >
            {isTicketOpen ? (
                <>
                    <Box
                        sx={{  width:"100%", textAlign:"right",}}
                    >
                        <IconButton
                            sx={{ m: 1}}
                            onClick={() => dispatch(ticketsActions.closeTicket())}>
                            <CloseIcon />
                        </IconButton>
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
                </>

            ) : isNewTicket ? (
                <>
                        <Box
                            sx={{ width: "100%", textAlign: "right", }}
                        >
                            <IconButton
                                sx={{ m: 1 }}
                                onClick={() => dispatch(ticketsActions.closeNewTicket())}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                <MessageForm
                    placeholder={placeholder}
                    onSubmit={onSubmit}
                    isLoading={isLoading}
                />
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

export default TicketPanel