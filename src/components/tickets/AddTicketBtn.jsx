import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ticketsActions } from '../../store/tickets-slice';

const AddTicketBtn = () =>
{
    const dispatch = useDispatch();
    const handleOpenNewTicket = () =>
    {
        dispatch(ticketsActions.openNewTicket());
    }
    return (
        <Button
            fullWidth
            variant='contained'
            sx={{
                py: "20px",
                position: "fixed",
                left: 0,
                bottom: 0,
                width: "500px",
            }}
            onClick={handleOpenNewTicket}
        >
            New Ticket
        </Button>
    )
}

export default AddTicketBtn