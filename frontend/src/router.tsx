import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Rooms from "./pages/Rooms";
import Customers from "./pages/Customers";
import Payments from "./pages/Payments";
import Employees from "./pages/Employees";
import Housekeeping from "./pages/Housekeeping";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/bookings", element: <Bookings /> },
      { path: "/rooms", element: <Rooms /> },
      { path: "/customers", element: <Customers /> },
      { path: "/payments", element: <Payments /> },
      { path: "/employees", element: <Employees /> },
      { path: "/housekeeping", element: <Housekeeping /> },
    ],
  },
]);

export default router;
