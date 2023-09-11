import React, { useEffect, useState } from 'react'
import TicketsList from '../../../components/tickets/TicketsList'
import useHttp from '../../../hooks/use-http'
import { useDispatch, useSelector } from 'react-redux';
import { ticketsActions } from '../../../store/tickets-slice';
import TicketPanel from '../../../components/tickets/TicketPanel';
const Tickets = () =>
{
    const dispatch = useDispatch();
    const {
        sendRequest: getUserTickets,
        isLoading: isLoadingGetUserTickets
    } = useHttp();
    const {
        sendRequest: sendTicket,
        isLoading: isLoadingSendTicket
    } = useHttp();
    const [pagesSize, setPagesSize] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() =>
    {
        console.log("useEffect get data")
        const getResponse = ({ message, data, numOfPages }) =>
        {
            if (message === "success")
            {
                dispatch(ticketsActions.mergeTickets(data.map(ele => ({ ...ele, ticketId: ele._id }))))
                if (numOfPages !== pagesSize) setPagesSize(numOfPages)
            }
        };
        if (currentPage <= pagesSize)
        {
            getUserTickets(
                {
                    url: `getUserTickets?page=${currentPage}&size=10`,
                    method: "GET",
                },
                getResponse
            );
        }
    }, [currentPage])

    const userData = useSelector(state => state.auth.userData);

    const handleSendTicket = (values) =>
    {
        const submitData = {
            customerFirstName: userData.userFirstName,
            customerLastName: userData.userLastName,
            ticketContent: values.message
        }
        const getResponse = ({ message, ticketId }) =>
        {
            if (message === "success")
            {
                submitData.ticketId = ticketId;
                submitData.createdAt = new Date();
                dispatch(ticketsActions.addNewTicket(submitData))
                dispatch(ticketsActions.closeNewTicket())
            }
        };

        sendTicket(
            {
                url: `sendTicket`,
                method: "POST",
                body: submitData
            },
            getResponse
        );
    }
    const tickets = useSelector((state) => state.tickets.tickets);
    return (
        <>
            <TicketsList
                tickets={tickets}
                isLoadingGetTickets={isLoadingGetUserTickets}
                currentPage={currentPage}
                pagesSize={pagesSize}
                setCurrentPage={setCurrentPage}
                title="All Tickets"
            />
            <TicketPanel onSubmit={handleSendTicket} isLoading={isLoadingSendTicket} />
        </>

    )
}

export default Tickets
