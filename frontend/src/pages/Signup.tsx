import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setMessage("");
    try {
      const response = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setMessage("User registered! You can now login.");
      } else {
        setMessage("Registration failed.");
      }
    } catch (err) {
      setMessage("Server error, try again later.");
    }
  };

  return (
    <Box  sx={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        width: "100vw",
        backgroundColor: "#F1F5F9",
        

      }}>
      <Paper sx={{ p: 4, width: 300 }}>
        <Typography variant="h5" gutterBottom>Sign Up</Typography>
        <TextField fullWidth name="username" label="Username" onChange={handleChange} margin="normal" />
        <TextField fullWidth name="password" label="Password" type="password" onChange={handleChange} margin="normal" />
        {message && <Typography>{message}</Typography>}
        <Button fullWidth variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>Sign Up</Button>
        <Typography sx={{ mt: 2 }}>
          Already have an account? <Button onClick={() => navigate("/login")}>Login</Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signup;
