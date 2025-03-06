import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError("");
    try {
      const response = await fetch("http://localhost:8000/api/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        login(data.access); // Save JWT token
        navigate("/"); // Redirect to dashboard
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Server error, try again later.");
    }
  };

  return (
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        width: "100vw",
        backgroundColor: "#F1F5F9",
        

      }}
    >
      <Paper 
        elevation={5}
        sx={{ 
          p: 4, 
          width: 360, 
          textAlign: "center", 
          borderRadius: 3, 
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#1E293B" }}>
          Welcome Back!
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#64748B" }}>
          Please login to continue.
        </Typography>

        <TextField 
          fullWidth 
          name="username" 
          label="Username" 
          onChange={handleChange} 
          margin="normal" 
          variant="outlined"
        />
        <TextField 
          fullWidth 
          name="password" 
          label="Password" 
          type="password" 
          onChange={handleChange} 
          margin="normal" 
          variant="outlined"
        />

        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}

        <Button 
          fullWidth 
          variant="contained" 
          color="primary" 
          onClick={handleSubmit} 
          sx={{ mt: 3, py: 1.5, fontSize: "1rem", fontWeight: "bold" }}
        >
          Login
        </Button>

        <Typography sx={{ mt: 2, color: "#64748B" }}>
          Don't have an account? 
          <Button 
            onClick={() => navigate("/signup")}
            sx={{ fontWeight: "bold", textTransform: "none", ml: 1 }}
          >
            Sign Up
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
