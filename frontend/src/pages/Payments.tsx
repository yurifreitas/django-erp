import { Box, Typography, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const payments = [
  { id: 1, customer: "John Doe", amount: "$200", status: "Paid", date: "2025-03-07" },
  { id: 2, customer: "Jane Smith", amount: "$400", status: "Pending", date: "2025-03-08" },
];

const columns: GridColDef[] = [
  { field: "customer", headerName: "Customer", width: 200 },
  { field: "amount", headerName: "Amount", width: 120 },
  { field: "status", headerName: "Status", width: 120 },
  { field: "date", headerName: "Payment Date", width: 150 },
];

const Payments = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Payments</Typography>
      <Paper sx={{ height: 400, width: "100%", p: 2 }}>
        <DataGrid rows={payments} columns={columns} pageSizeOptions={[5]} />
      </Paper>
    </Box>
  );
};

export default Payments;
