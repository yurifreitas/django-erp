import { Box, Typography, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const customers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+1234567890" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+9876543210" },
];

const columns: GridColDef[] = [
  { field: "name", headerName: "Customer Name", width: 200 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "phone", headerName: "Phone", width: 150 },
];

const Customers = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Customers</Typography>
      <Paper sx={{ height: 400, width: "100%", p: 2 }}>
        <DataGrid rows={customers} columns={columns} pageSizeOptions={[5]} />
      </Paper>
    </Box>
  );
};

export default Customers;
