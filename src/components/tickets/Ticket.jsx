import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
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
    return (
        <Card
            square
            variant="none"
            sx={{
                height: "80px",
                maxWidth: "100%",
                borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            }}
            ref={lastTicketRef}
        >
            <CardActionArea onClick={handleOpenTicket}>
                <CardContent
                    sx={{
                        height: "70px",
                        width: "460px",
                        overflow: "hidden",
                        // backgroundColor:"grey"
                    }}
                >
                    <Typography><SpanBold>Ticket ID: #</SpanBold>{ticketId}</Typography>
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