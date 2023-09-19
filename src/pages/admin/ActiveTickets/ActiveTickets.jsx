import React, { useEffect, useState } from 'react'
import TicketsList from '../../../components/tickets/TicketsList'
import useHttp from '../../../hooks/use-http'
import { useDispatch, useSelector } from 'react-redux';
import { ticketsActions } from '../../../store/tickets-slice';
import AdminTicketPanel from '../../../components/tickets/AdminTicketPanel';
const Tickets = () =>
{
    const dispatch = useDispatch();
    const {
        sendRequest: getActiveTickets,
        isLoading: isLoadingGetActiveTickets
    } = useHttp();
    const {
        sendRequest: answerTicket,
        isLoading: isLoadingAnswerTicket
    } = useHttp();
    const [pagesSize, setPagesSize] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() =>
    {
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
            getActiveTickets(
                {
                    url: `getAllActiveTickets?page=${currentPage}&size=10`,
                    method: "GET",
                },
                getResponse
            );
        }
    }, [currentPage])
    const ticketId = useSelector(state => state.tickets.openedTicket.ticketId)
    const handleAnswerTicket = (values, { resetForm }) =>
    {
        const submitData = {
            answer: values.message
        }
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                submitData.createdAt = new Date();
                submitData._id = new Date();
                dispatch(ticketsActions.addAnswerToTicket(submitData))
                resetForm();
            }
        };

        answerTicket(
            {
                url: `sendAnswerOnTicket/${ticketId}`,
                method: "PATCH",
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
                isLoadingGetTickets={isLoadingGetActiveTickets}
                currentPage={currentPage}
                pagesSize={pagesSize}
                setCurrentPage={setCurrentPage}
                title="All Active Tickets"
            />
            <AdminTicketPanel placeholder="Type your reply" onSubmit={handleAnswerTicket} isLoading={isLoadingAnswerTicket} />
        </>

    )
}

export default Tickets
