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
import { inputLabelClasses } from "@mui/material/InputLabel";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function AddProduct() {
  return (
    <div>
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
            marginTop: "152px ",
            height: "400px",
            backgroundColor: "#D8F5DE",
            boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
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
              
            <CloudUploadIcon sx={{ width: 156, height: 156, mb: 2 ,p:2,borderStyle: 'dashed'}}/>
            <Typography varinat="h2" fontSize={30} sx={{ mb: 3 }}>
              Product Name
            </Typography>
            <Button
              variant="contained"
              component="label"
              fullWidth
              sx={{backgroundColor:"#0A410A",'&:hover': {
                backgroundColor: "#379237"}}}
            >
              Upload Product Image
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Box>
        </div>
        <div
          className="profile_details"
          style={{ flex: 3, padding: "20px 50px " }}
        >
          <Typography variant="h4" style={{color:"#379237"}}>ADD Product</Typography>
          <Typography variant="h6" style={{color:"#379237"}}>Add Product Details</Typography>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item xs={12}>
              <TextField
                autoComplete="product-name"
                name="product-name"
                required
                fullWidth
                id="product-name"
                label="Product Name"
                autoFocus
                InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "#0a410a",
                      [`&.${inputLabelClasses.shrink}`]: {
                        // set the color of the label when shrinked (usually when the TextField is focused)
                        color: "#0a410a"
                      }
                    }
                  }}
                  sx={{
                     input: { color: ' #0a410a' } , "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#379237"
                      }
                    },
                    "& .MuiInputLabel-root": {color: 'green'},
                    "& .MuiFilledInput-input": {color:"#379237"}
                  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="Price"
                label="Product Price (₹)"
                name="Price"
                autoComplete="Price"
                InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "#0a410a",
                      [`&.${inputLabelClasses.shrink}`]: {
                        // set the color of the label when shrinked (usually when the TextField is focused)
                        color: "#0a410a"
                      }
                    }
                  }}
                  sx={{
                     input: { color: ' #0a410a' } , "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#379237"
                      }
                    },
                    "& .MuiInputLabel-root": {color: 'green'},
                    "& .MuiFilledInput-input": {color:"#379237"}
                  }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ my: 3 }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Category"
                  // onChange={handleChange}
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "#0a410a",
                      [`&.${inputLabelClasses.shrink}`]: {
                        // set the color of the label when shrinked (usually when the TextField is focused)
                        color: "#0a410a"
                      }
                    }
                  }}
                  sx={{
                     input: { color: ' #0a410a' } , "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#379237"
                      }
                    },
                    "& .MuiInputLabel-root": {color: 'green'},
                    "& .MuiFilledInput-input": {color:"#379237"}
                  }}
                >
                  <MenuItem value={"Tractor"}>Tractor</MenuItem>
                  <MenuItem value={"Tool"}>Tool</MenuItem>
                  <MenuItem value={"Fertilizers"}>Fertilizers</MenuItem>
                  <MenuItem value={"Vehicles"}>Vehicles</MenuItem>
                  <MenuItem value={"Animal"}>Animal</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ mb: 3 }} fullWidth>
                <InputLabel id="demo-simple-select-label">Buy/Rent</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Brands"
                  // onChange={handleChange}
                >
                  <MenuItem value={"BUy "}>FOR BUY</MenuItem>
                  <MenuItem value={"RENT"}>FOR RENT</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
            <FormControl sx={{ mb: 3 }} fullWidth>
              <InputLabel id="demo-simple-select-label">
                Duration
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Brands"
                // onChange={handleChange}
              >
                <MenuItem value={"1 to 5 days "}>1 to 5 days</MenuItem>
                <MenuItem value={"5 to 10 days"}>5 to 10 days</MenuItem>
                <MenuItem value={"10 to 15 days"}>10 to 15 days</MenuItem>
                <MenuItem value={"15 to 20 days"}>15 to 20 days</MenuItem>
                <MenuItem value={"1 month"}>1month</MenuItem>
              </Select>
            </FormControl>
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
            <Button variant="contained" fullWidth sx={{marginTop:'20px' , marginLeft:"20px",backgroundColor:"#0A410A",'&:hover': {
                  backgroundColor: "#379237"}}}>Uplaod Products</Button>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
