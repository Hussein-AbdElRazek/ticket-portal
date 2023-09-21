import React, { useEffect, useState } from 'react'
import AdminsListUi from './AdminsListUi'
import useHttp from '../../../hooks/use-http';

const AdminsList = () =>
{
    const {
        isLoading: isLoadingGetAdmins,
        sendRequest: getAdmins
    } = useHttp();

    const {
        isLoading: isLoadingDeleteAdmin,
        sendRequest: deleteAdmin,
    } = useHttp();

    // i use indexing of pages from zero to handle pagination with data grid
    // and i use in api currentPage + 1 because index from 1
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [totalNumberOfItems, setTotalNumberOfItems] = useState(0);

    const [admins, setAdmins] = useState([]);

    //get all Admin from data base
    useEffect(() =>
    {
        const getResponse = ({ message, data, numOfPages, totalNumOfItems, numOfItems }) =>
        {
            if (message === "success")
            {
                data = data.map((admin) => ({ ...admin, id: admin._id, _id: undefined, __v: undefined, }))
                setAdmins(data)

                if (numOfPages !== totalPages) setTotalPages(numOfPages)
                if (totalNumOfItems !== totalNumberOfItems) setTotalNumberOfItems(totalNumOfItems)
                if (pageSize !== numOfItems) setPageSize(numOfItems)
            }
        };
        if (currentPage < totalPages)
        {
            getAdmins(
                {
                    url: `getAllAdmins?page=${currentPage + 1}&limit=10`,
                    method: "GET",
                },
                getResponse
            );
        }
    }, [currentPage])

    const handleDeleteAdmin = (adminId) =>
    {
        const getResponse = ({ message }) =>
        {
            if (message === "success")
            {
                setAdmins((prev) => prev.length ? prev.filter(ele => ele.id !== adminId) : [])
            }
        };
        deleteAdmin(
            {
                url: `deleteAdmin`,
                method: "DELETE",
                body: { adminId: adminId }
            },
            getResponse
        );
    }
    return (
        <AdminsListUi
            rows={admins}
            isLoading={isLoadingGetAdmins}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
            totalNumberOfItems={totalNumberOfItems}
            handleDeleteAdmin={handleDeleteAdmin}
            isLoadingDeleteAdmin={isLoadingDeleteAdmin}
        />
    )
}

export default AdminsList