"use client";
import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Password is required");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Login
      </Typography>
      <TextField
        error={!!emailError}
        margin="normal"
        label="Email"
        name="email"
        type="email"
        required={true}
        helperText={emailError}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        error={!!passwordError}
        margin="normal"
        label="Password"
        name="password"
        type="password"
        required={true}
        helperText={passwordError}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button
          variant="contained"
          type="submit"
          onClick={handleLogin}
          disabled={!email || !password}
        >
          Login
        </Button>
        <Button variant="outlined" disabled={!email || !password}>
          Login as Guest
        </Button>
      </Box>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Not a User? <Link href="/signup">Create an account</Link>
      </Typography>
    </Box>
  );
}

export default LoginForm;
