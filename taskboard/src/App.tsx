import { Route, Routes } from "react-router-dom";
import { useAuth } from "./components/AuthContext";
import { Navbar } from "./components/NavBar";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import Box from '@mui/material/Box';
import { HomePage } from "./pages/HomePage";
import { Typography } from "@mui/material";

export const App = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <Box sx={{ p: 3 }}>
        <Typography>{user?.email}</Typography>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Box>
    </>
  );
};
