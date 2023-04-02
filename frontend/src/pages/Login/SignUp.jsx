import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { inputLabelClasses } from "@mui/material/InputLabel";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,

} from "@mui/material";
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
// import bg_Signup from '../../assets/images/bg_img.jpg'
// import { Image } from "@chakra-ui/react";
import { useState } from "react";

import axios from "axios";
// const theme = createTheme();

export default function SignUp() {
  const [uploadedImages, setUploadedImages] = React.useState([]);
  const [imageLimit, setImageLimit] = React.useState(false);
  const [state,setState] = useState({
    "first_name":"",
    "last_name":"",
    "phone":"",
    "password":"",
    "location":""
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({...state,[name]:value});
  }
  const handelImageChange = () => {

  }
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('first_name',state.first_name);
    formData.append('last_name',state.last_name);
    formData.append('phone',state.phone);
    formData.append('location',state.location);
    formData.append('image',uploadedImages[0]);
    const options = {
      method: 'POST',
      url: 'http://localhost:3000/api/user/v1/auth/signup',
      data: formData
    };

    axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
        // sessionStorage.setItem("current_user", response.data.data.user);
        navigate("/login")
    })
    .catch(function (error) {
        console.error(error);
    });

  };

  const handleUploadImages = (files) => {
    const uploaded = [...uploadedImages];
    let limitExceeded = false;

    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === 5) {
          setImageLimit(true);
        }
        if (uploaded.length > 5) {

          setImageLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });

    if (!limitExceeded) {
      setUploadedImages(uploaded);
    }
  };

  return (

    <div style={{ display: "flex", width: "100%", height: "100vh", alignItems: "center", justifyContent: "center" }}>
      <Grid item xs={10} sm={8} md={5} component={Paper} elevation={6} sx={{ maxWidth: "60vh", backgroundColor: "#d8f5de" }} maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: "10px"

          }}
        >
          <Avatar sx={{ m: 0.5, bgcolor: "#379237" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ fontWeight: "600", fontSize: "35px", color: "#379237" }} >
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
       
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={handleChange}
                  value={state.first_name}
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
                    input: { color: ' #0a410a' }, "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#379237"
                      }
                    },
                    "& .MuiInputLabel-root": { color: 'green' },
                    "& .MuiFilledInput-input": { color: "#379237" }
                  }}
                />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  onChange={handleChange}
                  value={state.last_name}
                  name="last_name"
                  autoComplete="family-name"
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
                    input: { color: ' #0a410a' }, "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#379237"
                      }
                    },
                    "& .MuiInputLabel-root": { color: 'green' },
                    "& .MuiFilledInput-input": { color: "#379237" }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  value={state.phone}
                  onChange={handleChange}
                  label="Phone Number"
                  name="phone"
                  autoComplete="Phone Number"
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
                    input: { color: ' #0a410a' }, "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#379237"
                      }
                    },
                    "& .MuiInputLabel-root": { color: 'green' },
                    "& .MuiFilledInput-input": { color: "#379237" }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={state.password}
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
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
                    input: { color: ' #0a410a' }, "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#379237"
                      }
                    },
                    "& .MuiInputLabel-root": { color: 'green' },
                    "& .MuiFilledInput-input": { color: "#379237" }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label"
                      sx={{
                        "& .MuiFormLabel-root": {
                            color: 'red'
                        },
                        "& .MuiFormLabel-root.Mui-focused": {
                            color: 'orange'
                        }
                    }}
                  
                    >
                    Location (City)
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="location"
                    value={state.location? state.location : "select city"}
                    label="Loaction (City)"
                    onChange={(e)=>{setState({...state,[e.target.name]:e.target.value})}}
                  >
                    <MenuItem value={"Jalandhar"}>Jalandhar</MenuItem>
                    <MenuItem value={"Rajkot"}>Rajkot</MenuItem>
                    <MenuItem value={"Thane"}>Thane</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} alignItems={"center"}>
                <div
                >
                  <Typography textAlign={"center"} variant="h5">
                    Uplaod Aadhar Card :
                  </Typography>
                  <div
                    className="upload-image"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <input
                      style={{ paddingLeft: "2rem" }}
                      type="file"
                      autoComplete="none"
                      onChange={(e) => {
                        const chosenImages = Array.prototype.slice.call(
                          e.target.files
                        );
                        handleUploadImages(chosenImages);
                      }}
                      // className={style.dInput}
                      placeholder="Upload images"
                      accept="image/png, image/jpeg"
                      multiple
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{
                mt: 3, mb: 2, background: "#0a410a", '&:hover': {
                  backgroundColor: "#379237",
                },
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={()=>navigate("/login")} variant="body2" sx={{ color: "#717171", textDecoration: "none",'&:hover': {
                  cursor: "pointer",
                }, }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Grid>
    </div>
  );
}
