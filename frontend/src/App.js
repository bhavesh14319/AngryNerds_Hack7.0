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
import Admin from "./pages/Admin/Admin";
import Random from "./pages/Random/Random";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#d8f5de",
    },
  },
});

const App = () => {
  return (
    <>
      <Admin />
    </>
  );
}

export default App;
