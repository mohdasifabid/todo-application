import { Box, Typography, Button, AppBar, Toolbar } from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              do-do
            </Typography>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Button variant="outlined" color="info" href="/login">
                Login
              </Button>
              <Button variant="contained" color="info">
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "4rem",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Organize your work and life, finally
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Become focused, organized, and calm with Todoist. The world’s #1
              task manager and to-do list app.
            </Typography>
            <Button variant="contained" sx={{ mt: 4 }}>
              Start For Free
            </Button>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
