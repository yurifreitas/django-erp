import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FloatingChat from "./components/FloatingChat";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh", backgroundColor: "#F1F5F9" }}>
      {/* Sidebar fixed at 240px width */}
      <Sidebar />

      {/* Main Content: Takes the remaining space, scrolls only vertically */}
      <Box 
        component="main" 
        sx={{
          flexGrow: 1, 
          p: 3, 
          overflowY: "auto", // Only vertical scrolling
          overflowX: "hidden", // No horizontal scrolling
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Box>

      {/* Floating Chat stays fixed */}
      <FloatingChat />
    </Box>
  );
};

export default App;
