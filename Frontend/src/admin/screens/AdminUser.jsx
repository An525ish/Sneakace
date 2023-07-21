import { Box, Button } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridAddIcon, GridRowEditStopReasons, GridRowModes, GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { tokens } from "../theme";
import { mockDataContacts } from "../data/mockData";
import Header from "../components/Header";
import { useTheme } from "@mui/material";
import Sidebar from "../utils/Sidebar"
import "../admin.css"
import { fetchApi } from '../../utils/api'
import { useEffect, useState } from "react";

const AdminUser = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);

  const [userData, setUserData] = useState('')
  const [rows, setRows] = useState(userData);
  const [rowModesModel, setRowModesModel] = useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut)
      event.defaultMuiPrevented = true;
  }


  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };




  const columns = [
    { field: "id", headerName: "ID", flex: 0 },
    // { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 2,
      cellClassName: "name-column--cell",
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 2,
      cellClassName: "name-column--cell",
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 2,
      editable: true,
    },
    {
      field: "city",
      headerName: "City",
      flex: 2,
      editable: true,
    },
    {
      field: "state",
      headerName: "State",
      flex: 2,
      editable: true,
    },
    {
      field: "zipcode",
      headerName: "Zip Code",
      flex: 2,
      editable: true,
    },
    {
      field: "country",
      headerName: "Country",
      flex: 2,
      editable: true,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 2,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['user', 'Admin'],
    }, {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        } return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  useEffect(() => {
    fetchAllUsers()
  }, [])

  const fetchAllUsers = async () => {
    const { data } = await fetchApi('/users')
    setUserData(data)
  }

  return (
    <div className="admin">
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        {/* <Topbar setIsSidebar={setIsSidebar} /> */}

        <Box m="20px">
          <Header
            title="Users"
            subtitle="List of Users for Future Reference"
          />
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
              rows={userData}
              columns={columns}
              editMode="row"
              rowModesModel={rowModesModel}
              onRowModesModelChange={handleRowModesModelChange}
              onRowEditStop={handleRowEditStop}
              processRowUpdate={processRowUpdate}
              components={{ Toolbar: GridToolbar }}
              slotProps={{
                toolbar: { setRows, setRowModesModel },
              }}
            />
          </Box>
        </Box>
      </main>
    </div>


  );
};

export default AdminUser;
