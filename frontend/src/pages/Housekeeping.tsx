import { Box, Typography, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const housekeepingTasks = [
  { id: 1, room: "101", status: "Pending", assignedTo: "Charlie", date: "2025-03-07" },
  { id: 2, room: "205", status: "Completed", assignedTo: "Alice", date: "2025-03-06" },
];

const columns: GridColDef[] = [
  { field: "room", headerName: "Room", width: 100 },
  { field: "status", headerName: "Status", width: 150 },
  { field: "assignedTo", headerName: "Assigned To", width: 200 },
  { field: "date", headerName: "Scheduled Date", width: 150 },
];

const Housekeeping = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Housekeeping & Maintenance</Typography>
      <Paper sx={{ height: 400, width: "100%", p: 2 }}>
        <DataGrid rows={housekeepingTasks} columns={columns} pageSizeOptions={[5]} />
      </Paper>
    </Box>
  );
};

export default Housekeeping;
