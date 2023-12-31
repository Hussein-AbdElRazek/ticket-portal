import { useState, useCallback, } from "react";
import { useSnackbar } from "notistack";
import { trimObject } from "../helpers/trimObject";
import {  useSelector } from "react-redux/es/hooks/useSelector";
const useHttp = () =>
{
    const [isLoading, setIsLoading] = useState(false);
    const { enqueueSnackbar: popMessage } = useSnackbar();
    const token = useSelector((state) => state.auth.token)
    const sendRequest = useCallback(async (requestConfig, applyData) =>
    {
        setIsLoading(true);
        try
        {
            const response =
                await fetch(`https://ticket-portal.onrender.com/${requestConfig.url}`, {
                    method: requestConfig.method ? requestConfig.method : "GET",
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        "Content-Type": "application/json",
                    },
                    body: requestConfig.body ?
                        JSON.stringify(trimObject(requestConfig.body)) :
                        null
                });
            const data = await response.json();
            applyData(data);
            if (!response.ok)
            {
                throw new Error(data.message)
            }
            let message = data.message;
            if (message)
            {
                message = message.toLowerCase();
                if (message.includes("success")) { popMessage(message, { variant: "success" }) }
                else { popMessage(message) }
            }
        } catch (error)
        {
            setIsLoading(false)
            popMessage(error.message || "Something went wrong", { variant: "error" })
        }
        setIsLoading(false)
    }, [popMessage, token])
    return {
        isLoading,
        sendRequest,
    }
}

export default useHttp;