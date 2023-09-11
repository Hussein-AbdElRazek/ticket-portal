import { createSlice } from '@reduxjs/toolkit';
import { mergeToUnique } from '../helpers/mergeToUnique';


const initialTicketsState = {
    tickets: [],
    openedTicket: {},
    isTicketOpen:false,
    isNewTicket:false
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
            state.openedTicket=action.payload;
            state.isTicketOpen=true;
        },
        closeTicket(state)
        {
            state.openedTicket={};
            state.isTicketOpen=false;
        },
        openNewTicket(state)
        {
            state.openedTicket = {};
            state.isTicketOpen = false;
            state.isNewTicket =true;
        },
        closeNewTicket(state)
        {
            state.isNewTicket =false;
        },
        addNewTicket(state, action){
            state.tickets.unshift(action.payload);
        }

    }
})


export const ticketsActions = ticketsSlice.actions

export default ticketsSlice.reducer;