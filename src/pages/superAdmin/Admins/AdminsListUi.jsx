import
{
    DeleteOutlined as DeleteIcon,
} from '@mui/icons-material';
import { CircularProgress, IconButton } from '@mui/material';
import
{
    DataGrid,
} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';


const AdminsListUi = (props) =>
{
    const {
        rows,
        isLoading,
        currentPage,
        setCurrentPage,
        pageSize,
        setPageSize,
        totalNumberOfItems,
        handleDeleteAdmin,
        isLoadingDeleteAdmin,
    } = props;

    const columns = [
        {
            field: 'userName',
            headerName: 'User Name',
            minWidth: 200,
            flex: 2,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'email',
            headerName: 'Email',
            minWidth: 300,
            flex: 3,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'delete',
            headerName: 'Delete',
            minWidth: 100,
            flex: 1,
            renderCell: ({ id, isLoadingDeleteAdmin }) =>
            ((!!isLoadingDeleteAdmin) ? (
                <CircularProgress />
            ) : (
                <IconButton
                    onClick={() => handleDeleteAdmin(id)}
                    disabled={isLoadingDeleteAdmin}
                >
                    <DeleteIcon color='error' />
                </IconButton>))
        },

    ];
    //handlePagination
    const [rowCountState, setRowCountState] = useState(totalNumberOfItems);
    useEffect(() =>
    {
        setRowCountState((prevRowCountState) =>
            totalNumberOfItems !== undefined ? totalNumberOfItems : prevRowCountState,
        );
    }, [totalNumberOfItems, setRowCountState]);
    const handlePaginationModelChange = (params) =>
    {
        setCurrentPage(params.page)
        setPageSize(params.pageSize)
    }
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            loading={isLoading || isLoadingDeleteAdmin}

            initialState={{
                pagination: {
                    paginationModel: { pageSize: 10, page: 0 },
                },
            }}
            pagination
            paginationMode="server"
            page={currentPage}
            pageSize={pageSize}
            pageSizeOptions={[10]}
            rowCount={rowCountState}
            rowsPerPageOptions={[10]}
            onPaginationModelChange={handlePaginationModelChange}
            sx={{ height: "400px",maxWidth:"95%", width: "800px", margin: "auto", mt:2 }}
        />
    )
}

export default AdminsListUi