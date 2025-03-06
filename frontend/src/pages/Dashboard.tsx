import { Box, Typography, Grid, Paper } from "@mui/material";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const occupancyData = [
  { name: "Occupied", value: 60 },
  { name: "Available", value: 40 },
];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 7000 },
  { month: "Mar", revenue: 6000 },
];

const COLORS = ["#0088FE", "#FFBB28"];

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Hotel ERP Dashboard</Typography>
      <Grid container spacing={3}>
        {/* Occupancy Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Room Occupancy</Typography>
            <PieChart width={300} height={300}>
              <Pie data={occupancyData} dataKey="value" outerRadius={100}>
                {occupancyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </Paper>
        </Grid>
        
        {/* Revenue Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Monthly Revenue</Typography>
            <BarChart width={300} height={300} data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
