import { useDispatch, useSelector } from 'react-redux';

import { ticketsActions } from '../../../store/tickets-slice';
import AdminTicketPanel from '../../../components/tickets/AdminTicketPanel';
import GetTicketsList from '../../../components/tickets/GetTicketsList';
import useHttp from '../../../hooks/use-http'

const Tickets = () =>
{
    const dispatch = useDispatch();

    const {
        sendRequest: answerTicket,
        isLoading: isLoadingAnswerTicket
    } = useHttp();

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
    return (
        <>
            <GetTicketsList
                url="getAllActiveTickets"
                title="All Active Tickets"
            />
            <AdminTicketPanel placeholder="Type your reply" onSubmit={handleAnswerTicket} isLoading={isLoadingAnswerTicket} />
        </>

    )
}

export default Tickets
