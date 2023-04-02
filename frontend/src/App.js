import React from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import Landing from "../src/pages/Landing/Landing";
// import { ChakraProvider } from "@chakra-ui/react";
import Government from "./pages/Schemes/Governmnet";

import SignUp from "./pages/Login/SignUp";
import Admin from "./pages/Admin/Admin";
import Orders from "./pages/Dashboard/Order";
import Equipments from "./pages/Equipments/Equipments";
import FarmerProfile from"./pages/Help/FarmerProfile/FarmerProfile"
import AddProducts from "./pages/AddProducts/AddProduct"

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
    <BrowserRouter>
    <Routes>
     
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/home" element={<Equipments />} />
        <Route path="/profile" element={<FarmerProfile />} />
        <Route path="/addProduct" element = {<AddProducts/>}/>
      
    </Routes>
    </BrowserRouter>
    // <Login />
    // </ChakraProvider>
  );
}

export default App;
