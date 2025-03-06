import { useBookingStore } from "../store/bookingStore";
import { Box, Typography, Paper, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "customer", headerName: "Customer", width: 150 },
  { field: "room", headerName: "Room", width: 100 },
  { field: "checkIn", headerName: "Check-in Date", width: 150 },
  { field: "checkOut", headerName: "Check-out Date", width: 150 },
  { field: "status", headerName: "Status", width: 130 },
];

const Bookings = () => {
  const { bookings, addBooking } = useBookingStore();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Bookings</Typography>
      <Paper sx={{ height: 400, width: "100%", p: 2 }}>
        <DataGrid rows={bookings} columns={columns} pageSizeOptions={[5]} />
      </Paper>
      <Button
        onClick={() => addBooking({ id: bookings.length + 1, customer: "Alice", room: "305", checkIn: "2025-03-15", checkOut: "2025-03-18", status: "Pending" })}
      >
        Add Test Booking
      </Button>
    </Box>
  );
};

export default Bookings;
