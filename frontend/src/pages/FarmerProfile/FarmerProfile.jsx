import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ProductsCaraousel from "./ProductsCaraousel";

function FarmerProfile() {
  return (
    <>
      <Navbar />
      <div
        className="profile_container"
        style={{
          display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          flexDirection: "row",
          margin: "0 200px",
        }}
      >
        <div
          className="profile_image"
          style={{
            flex: 1,
            padding: "30px",
            border: "1px solid grey",
            borderRadius: "1rem",
            marginTop: "40px ",
            height:"400px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              pt: 4,
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 156, height: 156, mb: 2 }}
            />
            <Typography varinat="h2" fontSize={30} sx={{ mb: 3 }}>
              Anika Visser
            </Typography>
            <Button variant="contained" component="label" fullWidth>
              Upload Profile Image
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Box>
        </div>
        <div
          className="profile_details"
          style={{ flex: 3, padding: "20px 50px " }}
        >
          {/*
          <Typography variant="h4">Profile</Typography>
          <Typography variant="h6">The information can be edited</Typography>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="Phone Number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="Aadhar Number"
                label="Aadhar Number"
                name="Aadhar Number"
                autoComplete="Aadhar Number"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Location (City)
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Loaction (City)"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Jalandhar</MenuItem>
                  <MenuItem value={20}>Rajkot</MenuItem>
                  <MenuItem value={30}>Thane</MenuItem>
                  <MenuItem value={30}>Thane</MenuItem>
                  <MenuItem value={30}>Thane</MenuItem>
                  <MenuItem value={30}>Thane</MenuItem>
                  <MenuItem value={30}>Thane</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Loaction (City)"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Maharsathra</MenuItem>
                  <MenuItem value={20}>Gujarat</MenuItem>
                  <MenuItem value={30}>Thane</MenuItem>
                  <MenuItem value={30}>Thane</MenuItem>
                  <MenuItem value={30}>Thane</MenuItem>
                  <MenuItem value={30}>Thane</MenuItem>
                  <MenuItem value={30}>Thane</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>*/}
          <Box sx={{mt:5}}> 
          <Typography variant="h5" align="center" color='#379237'>Product's For Sale</Typography>
            <Grid item xs={12}>
              <ProductsCaraousel />
            </Grid>
          </Box>
          <Box sx={{mt:5}}> 
          <Typography variant="h5" align="center" color='#379237'>Product's For Rent</Typography>
            <Grid item xs={12}>
              <ProductsCaraousel />
            </Grid>
          </Box>
        </div>
      </div>
      {/* <Box sx={{display:"flex" , justifyContent:"center"}}>
        <Button variant="contained" >
          Save details
        </Button>
      </Box> */}
    </>
  );
}

export default FarmerProfile;
