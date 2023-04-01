import React from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import Equipments from "./pages/Equipments/Equipments";
import Landing from "../src/pages/Landing/Landing";
import { ChakraProvider } from "@chakra-ui/react";
import Government from "./pages/Schemes/Governmnet";

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
            <Route path="/landing" element={<Landing />} />
            <Route path="/governmnet" element={<Government />} />
          </Routes>
        </BrowserRouter>
      // </ChakraProvider>
    // </ThemeProvider>
  );
}

export default App;
