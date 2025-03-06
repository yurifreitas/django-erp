import { Box, Typography, Paper, Grid } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PieChart, Pie, Cell } from "recharts";

const rooms = [
  { id: 1, number: "101", type: "Deluxe", price: 120, status: "Available" },
  { id: 2, number: "102", type: "Suite", price: 200, status: "Occupied" },
];

const roomTypes = [
  { name: "Deluxe", value: 30 },
  { name: "Suite", value: 20 },
  { name: "Standard", value: 50 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const columns: GridColDef[] = [
  { field: "number", headerName: "Room Number", width: 150 },
  { field: "type", headerName: "Type", width: 150 },
  { field: "price", headerName: "Price/Night ($)", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
];

const Rooms = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Rooms</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Room Distribution</Typography>
            <PieChart width={300} height={300}>
              <Pie data={roomTypes} dataKey="value" outerRadius={100}>
                {roomTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ height: 400, width: "100%", p: 2 }}>
            <DataGrid rows={rooms} columns={columns} pageSizeOptions={[5]} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Rooms;
