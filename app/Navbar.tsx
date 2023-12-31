import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export function Navbar() {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          do-do
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button variant="outlined" color="info">
            Login
          </Button>
          <Button variant="contained" color="info">
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
