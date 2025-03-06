import { useState } from "react";
import { Box, Fab, Typography, Paper, List, ListItem, ListItemText, TextField, Button, Tooltip } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I help?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const toggleChat = () => setOpen(!open);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "Thank you! We'll assist you shortly.", sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <Box sx={{ position: "absolute", bottom: 20, right: 20 }}>
      {/* Floating Chat Button */}
      <Tooltip title="Chat Support">
        <Fab color="primary" onClick={toggleChat} sx={{ backgroundColor: open ? "#DC2626" : "#2563EB", "&:hover": { backgroundColor: open ? "#B91C1C" : "#1E40AF" } }}>
          {open ? <CloseIcon /> : <ChatIcon />}
        </Fab>
      </Tooltip>

      {/* Chat Window */}
      {open && (
        <Paper elevation={3} sx={{ position: "absolute", bottom: 70, right: 0, width: 300, p: 2, borderRadius: 2, backgroundColor: "#F8FAFC" }}>
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold", mb: 1, textAlign: "center" }}>Chat Support</Typography>
          
          {/* Quick Actions */}
          <List sx={{ mb: 2, backgroundColor: "#E2E8F0", borderRadius: 1 }}>
            <ListItem button onClick={() => setMessages([...messages, { text: "I need help with my booking.", sender: "user" }])}>
              <ListItemText primary="📅 Check Booking" />
            </ListItem>
            <ListItem button onClick={() => setMessages([...messages, { text: "I need technical support.", sender: "user" }])}>
              <ListItemText primary="🛠️ Talk to Support" />
            </ListItem>
          </List>

          {/* Chat Messages */}
          <Paper sx={{ maxHeight: 200, overflowY: "auto", p: 1, backgroundColor: "#FFFFFF", borderRadius: 1 }}>
            {messages.map((msg, index) => (
              <Typography key={index} sx={{ textAlign: msg.sender === "user" ? "right" : "left", fontSize: "0.9rem", backgroundColor: msg.sender === "user" ? "#D1FAE5" : "#E5E7EB", p: 1, borderRadius: 1, mb: 0.5 }}>
                {msg.text}
              </Typography>
            ))}
          </Paper>

          {/* Message Input */}
          <Box sx={{ display: "flex", mt: 2 }}>
            <TextField size="small" fullWidth variant="outlined" placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} />
            <Button variant="contained" color="primary" sx={{ ml: 1 }} onClick={handleSendMessage}>
              <SendIcon />
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default FloatingChat;
