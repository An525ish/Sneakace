import { useState, useEffect } from 'react'
import axios from 'axios';
import { Box, Container } from '@mui/material';
import Sidebar from '../utils/Sidebar';
import "../admin.css"
import Header from '../components/Header';
import { DataGrid, GridActionsCellItem, GridRowModes, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import "../admin.css"
import { fetchApi } from '../../utils/api';


function Products() {

    const [isSidebar, setIsSidebar] = useState(true);
    const [EditIsOpen, setEditIsOpen] = useState(false);
    const [ProductData, setProductData] = useState('')
    const [rows, setRows] = useState(ProductData);
    const [rowModesModel, setRowModesModel] = useState({});
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);



    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };



    const handleDeleteClick = (id) => () => {
        setRows(rows.filter((row) => row.id !== id));
    };





    const columns = [
        { field: "id", headerName: "ID", flex: 0 },
        // { field: "registrarId", headerName: "Registrar ID" },
        {
            field: "firstName",
            headerName: "Product  Name",
            flex: 2,
            cellClassName: "name-column--cell",
            
        },

        {
            field: "category",
            headerName: "Category",
            flex: 2,
            
        },
        {
            field: "price",
            headerName: "Price",
            flex: 2,
            
        },
        {
            field: "stock",
            headerName: "Stock",
            flex: 2,
            
        },
        {
            field: "saleCount",
            headerName: "Sales Count",
            flex: 2,
            
        },
        {
            field: "discount",
            headerName: "Discount",
            flex: 2,
            
        },
        {
            field: "rrating",
            headerName: "Rating",
            flex: 2,
            
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        // onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        // onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];
    useEffect(() => {
        fetchAllProducts();
    }, [])

    const fetchAllProducts = async () => {
        const data = await axios.get('https://dummyjson.com/products')
        setProductData(data.data.products);
        console.log(data.data.products);
    }

    return (

        <div className="admin">
            <Sidebar isSidebar={isSidebar} />
            <div className="content">

                <Box m="20px">
                    <Header title="Products List" />

                    <Box
                        m="40px 0 0 0"
                        height="75vh"
                        sx={{
                            "& .MuiDataGrid-root": {
                                border: "none",
                            },
                            "& .MuiDataGrid-cell": {
                                borderBottom: "none",
                            },
                            "& .name-column--cell": {
                                color: colors.greenAccent[300],
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: colors.blueAccent[700],
                                borderBottom: "none",
                            },
                            "& .MuiDataGrid-virtualScroller": {
                                backgroundColor: colors.primary[400],
                            },
                            "& .MuiDataGrid-footerContainer": {
                                borderTop: "none",
                                backgroundColor: colors.blueAccent[700],
                            },
                            "& .MuiCheckbox-root": {
                                color: `${colors.greenAccent[200]} !important`,
                            },
                            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                                color: `${colors.grey[100]} !important`,
                            },
                        }}
                    >
                        <DataGrid
                            rows={ProductData}
                            columns={columns}
                            rowModesModel={rowModesModel}
                            components={{ Toolbar: GridToolbar }}
                            slotProps={{
                                toolbar: { setRows, setRowModesModel },
                            }}
                        />
                    </Box>
                </Box>
            </div>
        </div>



    )
}

export default Products