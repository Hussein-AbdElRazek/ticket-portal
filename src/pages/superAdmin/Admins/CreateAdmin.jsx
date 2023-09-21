import React from 'react'
import CreateAdminUi from './CreateAdminUi'
import useHttp from '../../../hooks/use-http';

const CreateAdmin = () =>
{
    const {
        sendRequest: createAdmin,
        isLoading: isLoadingCreateAdmin
    } = useHttp();
    const handleCreateAdmin = (values, {resetForm}) =>
    {

        const getResponse = ({ message }) =>
        {
            if (message === "success")
            {
                resetForm()
            }
        };

        createAdmin(
            {
                url: `createAdmin`,
                method: "POST",
                body: { ...values, confirmPassword: undefined }
            },
            getResponse
        );
    }
    return (
        <CreateAdminUi 
            handleCreateAdmin={handleCreateAdmin}
            isLoadingCreateAdmin={isLoadingCreateAdmin}
        />
    )
}

export default CreateAdmin