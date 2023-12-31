import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ticketsActions } from '../../store/tickets-slice';
import SpanBold from '../ui/SpanBold';

const Ticket = (props) =>
{
    const { ticket, lastTicketRef } = props;
    const { ticketId, ticketContent } = ticket;
    const dispatch = useDispatch()
    const handleOpenTicket = () =>
    {
        dispatch(ticketsActions.openTicket(ticket))
    }
    const role = useSelector(state => state.auth.role);
    return (
        <Card
            square
            variant="none"
            sx={{
                height: "80px",
                maxWidth: "100%",
                borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                position: "relative",
            }}
            ref={lastTicketRef}
        >
            {role !== "user" && (
                <Box
                    sx={{
                        width: "100px",
                        height: "100%",
                        position: "absolute",
                        right: 0,
                    }}
                >
                    <SpanBold>
                        Status:
                    </SpanBold>
                    {ticket.isHighPriority && (
                        <Typography >
                            High priority
                        </Typography>
                    )}
                    {ticket.isTaken && (
                        <Typography>Taken</Typography>
                    )}
                </Box>
            )}
            <CardActionArea onClick={handleOpenTicket}>
                <CardContent
                    sx={{
                        height: "70px",
                        width: "350px",
                        "@media (max-width:500px)": {
                            width: "calc(100% - 150px)",
                        },
                        overflow: "hidden",
                    }}
                >
                    <Typography sx={{
                        "@media (max-width:500px)": {
                            display:"none"
                        },
                    }}><SpanBold>Ticket ID: </SpanBold>#{ticketId}</Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <SpanBold>Ticket Content: </SpanBold>{ticketContent}
                    </Typography>

                </CardContent>
            </CardActionArea>


        </Card>
    );
};

export default Ticket