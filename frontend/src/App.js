import React from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import Equipments from "./pages/Equipments/Equipments";
import { ChakraProvider } from "@chakra-ui/react";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#d8f5de",
    },
  },
});

function App() {
  return (
    // <ThemeProvider theme={theme}>
      // <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products" element={<Equipments />} />
          </Routes>
        </BrowserRouter>
      // </ChakraProvider>
    // </ThemeProvider>
  );
}

export default App;
