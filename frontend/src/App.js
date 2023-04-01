import React from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import Equipments from "./pages/Equipments/Equipments";
import Landing from "../src/pages/Landing/Landing";
// import { ChakraProvider } from "@chakra-ui/react";
import Government from "./pages/Schemes/Governmnet";
import FarmerProfile from "./pages/Help/FarmerProfile/FarmerProfile";
import SignUp from "./pages/Login/SignUp";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#d8f5de",
    },
  },
});

function App() {
  return (
    // <ChakraProvider>
    <Routes>
      <BrowserRouter>
        <Route path="/" element={<Landing />} />
      </BrowserRouter>
    </Routes>
    // <Login />
    // </ChakraProvider>
  );
}

export default App;
