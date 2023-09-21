import { createSlice } from '@reduxjs/toolkit';
import { mergeToUnique } from '../helpers/mergeToUnique';


const initialTicketsState = {
    tickets: [],
    openedTicket: {},
    isTicketOpen: false,
    isNewTicket: false
}

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: initialTicketsState,
    reducers: {
        mergeTickets(state, action)
        {
            state.tickets = mergeToUnique(state.tickets, action.payload)
        },
        openTicket(state, action)
        {
            state.openedTicket = action.payload;
            state.isTicketOpen = true;
        },
        closeTicket(state)
        {
            state.openedTicket = {};
            state.isTicketOpen = false;
        },
        openNewTicket(state)
        {
            state.openedTicket = {};
            state.isTicketOpen = false;
            state.isNewTicket = true;
        },
        closeNewTicket(state)
        {
            state.isNewTicket = false;
        },
        addNewTicket(state, action)
        {
            state.tickets.unshift(action.payload);
        },
        addAnswerToTicket(state, action)
        {
            state.openedTicket.ticketAnswers.push(action.payload)
            state.tickets.forEach(ele =>
            {
                if (ele.ticketId === state.openedTicket.ticketId)
                {
                    ele.ticketAnswers.push(action.payload)
                }
            })
        },
        updateTicket(state, action)
        {
            console.log("update")
            if (state.openedTicket.ticketId === action.payload.ticketId)
            {
                state.openedTicket = { ...state.openedTicket, ...action.payload }
            }
            state.tickets = state.tickets.map(ele =>
            {
                if (ele.ticketId === action.payload.ticketId)
                {
                    console.log("found")
                    ele = { ...ele, ...action.payload }
                    console.log("ele", ele)
                }
                return ele;
            })
        },
        deleteTicket(state, action)
        {
            state.tickets = state.tickets.filter(ele =>
                ele.ticketId !== action.payload
            )
        },
        emptyTickets(state)
        {
            state.tickets = [];
            state.openedTicket={};
            state.isTicketOpen=false;
            state.isNewTicket=false;
        },

    }
})


export const ticketsActions = ticketsSlice.actions

export default ticketsSlice.reducer;