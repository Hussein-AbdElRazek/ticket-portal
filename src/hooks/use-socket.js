import io from "socket.io-client";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

const useSocket = () =>
{
    const token = useSelector(state => state.auth.token)
    const socket = (io.connect(`https://ticket-portal.onrender.com/?token=${token}`))
    const [newChangeOnTickets, setNewChangeOnTickets] = useState(null)
    useEffect(() =>
    {
        console.log("listenToMark useEffect")

        socket.on("marked", (res) =>
        {
            console.log("listenToMark something happen", res)
            setNewChangeOnTickets(res)
        })
    }, [socket])

    const joinRoom = () =>
    {
        console.log("joinRoom useEffect")

        socket.emit("joinRoom", {}, (res) =>
        {
            console.log("res", res);
        })
    }
    const markTicketStatus = (data) =>
    {
        socket.emit("markTicketStatus", data, (res) =>
        {
            console.log("res", res)
        })
    }
    return {
        markTicketStatus,
        newChangeOnTickets,
        joinRoom
    }
}
export default useSocket;