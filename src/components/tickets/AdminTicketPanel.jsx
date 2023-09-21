import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MessageForm from './MessageForm';
import Message from './Message';
import useSocket from '../../hooks/use-socket';
import { ticketsActions } from '../../store/tickets-slice';
import { LoadingButton } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
const AdminTicketPanel = (props) =>
{
    const { onSubmit, isLoading, placeholder, handleDelete, isLoadingDeleteTicket } = props
    let ticket = useSelector((state) => state.tickets.openedTicket);
    const isTicketOpen = useSelector((state) => state.tickets.isTicketOpen);
    const dispatch = useDispatch();
    const { markTicketStatus, markAsHighPriority } = useSocket();
    const role = useSelector(state => state.auth.role)
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
    const handleMarkAsHighPriority = () =>
    {
        markAsHighPriority(ticketData)
        ticketData.isHighPriority = true;
        dispatch(ticketsActions.updateTicket(ticketData))

    }
    const isClosed = ticket?.ticketStatus === "closed";
    return (
        <Box
            sx={{
                position: "absolute",
                right: 0,
                bottom: 0,
                top: 0,
                width: "calc(100% - 501px)",
                height: "calc(100% - 145.5px)",
                overflowY: "auto",
                marginBottom: "80px",
                marginTop: "60px",
                paddingBottom: "20px",
                backgroundColor: "white",
                "@media (max-width:890px)": {
                    width: "100%",
                    zIndex: 9999,
                    backgroundColor: "white",
                    height: "calc(100% - 60px)",
                    display: isTicketOpen ? "block" : "none"
                },
            }}
        >

            {isTicketOpen ? (
                <>
                    <Box
                        sx={{
                            width: "calc(100% - 500px)",
                            height: "70px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: "white",
                            "@media (max-width:890px)": {
                                width: "100%",
                                zIndex: 99,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex", alignItems: "center",
                            }}
                        >
                            {!ticket?.isTaken ?
                                (!isClosed && role === "admin") && (<Button onClick={handleMarkAsTaken}>Mark as taken</Button>)
                                : (
                                    <Typography mx={1}>Taken</Typography>
                                )}
                            {role === "superAdmin" && (
                                !ticket?.isHighPriority && !isClosed && (
                                    <Button onClick={handleMarkAsHighPriority}>
                                        Mark as high priority
                                    </Button>
                                )
                            )}
                            {ticket?.isHighPriority && (
                                <Typography mx={1}>High priority</Typography>

                            )}
                            {!isClosed ? (
                                (role === "admin" && (
                                    <Button onClick={handleMarkAsClosed}>Close ticket</Button>
                                ))
                            ) : (
                                <Typography mx={1}>Closed</Typography>

                            )}
                            {role === "superAdmin" && (
                                <LoadingButton
                                    loading={isLoadingDeleteTicket}
                                    onClick={() => handleDelete(ticket.ticketId)}
                                    color="error">
                                    Delete
                                </LoadingButton>
                            )}
                        </Box>

                        <Box
                            sx={{ p: 1 }}
                        >
                            <IconButton
                                onClick={() => dispatch(ticketsActions.closeTicket())}>
                                <CloseIcon />
                            </IconButton>
                        </Box>

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
                        {(!isClosed && role === "admin") && (
                            <MessageForm placeholder={placeholder} onSubmit={onSubmit} isLoading={isLoading} />
                        )}

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
                            zIndex: 99,
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