import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../hooks/use-http';
import { ticketsActions } from '../../store/tickets-slice';
import TicketsList from './TicketsList';

const GetTicketsList = (props) =>
{
    const { url, title } = props;
    const dispatch = useDispatch();
    const {
        sendRequest: getActiveTickets,
        isLoading: isLoadingGetActiveTickets
    } = useHttp();

    const [pagesSize, setPagesSize] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    //TODO handle that it when u in active page 2 and
    // go to close it first get close 2 then 1 
    useEffect(() =>
    {
        setCurrentPage(1);
        dispatch(ticketsActions.emptyTickets());
    }, [url, dispatch])
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
                    url: `${url}?page=${currentPage}&size=10`,
                    method: "GET",
                },
                getResponse
            );
        }
    }, [currentPage, url])

    const tickets = useSelector((state) => state.tickets.tickets);

    return (
        <TicketsList
            tickets={tickets}
            isLoadingGetTickets={isLoadingGetActiveTickets}
            currentPage={currentPage}
            pagesSize={pagesSize}
            setCurrentPage={setCurrentPage}
            title={title}
        />
    )
}

export default GetTicketsList