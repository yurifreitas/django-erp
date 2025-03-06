import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HotelIcon from "@mui/icons-material/Hotel";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import PeopleIcon from "@mui/icons-material/People";
import PaymentIcon from "@mui/icons-material/Payment";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const sidebarItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Bookings", icon: <EventSeatIcon />, path: "/bookings" },
  { text: "Rooms", icon: <HotelIcon />, path: "/rooms" },
  { text: "Customers", icon: <PeopleIcon />, path: "/customers" },
  { text: "Payments", icon: <PaymentIcon />, path: "/payments" },
  { text: "Employees", icon: <EngineeringIcon />, path: "/employees" },
  { text: "Housekeeping", icon: <CleaningServicesIcon />, path: "/housekeeping" },
];

const Sidebar = () => {
  const location = useLocation(); // Get current route

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: '20vw',
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: '20vw',
          backgroundColor: "#1E293B",
          color: "#fff",
        },
      }}
    >
      <Toolbar sx={{ bgcolor: "#334155", p: 2 }}>
        <Typography variant="h6" sx={{ color: "white", textAlign: "center", width: "100%" }}>
          Hotel ERP
        </Typography>
      </Toolbar>
      <List>
        {sidebarItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            sx={{
              color: "#CBD5E1",
              "&:hover": { backgroundColor: "#475569" },
              backgroundColor: location.pathname === item.path ? "#475569" : "inherit",
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
