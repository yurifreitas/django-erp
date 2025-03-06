import { Box, Typography, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const employees = [
  { id: 1, name: "Alice Johnson", role: "Admin", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", role: "Receptionist", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", role: "Housekeeping", email: "charlie@example.com" },
];

const columns: GridColDef[] = [
  { field: "name", headerName: "Employee Name", width: 200 },
  { field: "role", headerName: "Role", width: 150 },
  { field: "email", headerName: "Email", width: 250 },
];

const Employees = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Employees</Typography>
      <Paper sx={{ height: 400, width: "100%", p: 2 }}>
        <DataGrid rows={employees} columns={columns} pageSizeOptions={[5]} />
      </Paper>
    </Box>
  );
};

export default Employees;
