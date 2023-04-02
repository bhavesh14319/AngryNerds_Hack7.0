import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { create, Provider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom"
import { inputLabelClasses } from "@mui/material/InputLabel";
import axios from "axios";




export default function SignInSide() {
  const navigate = useNavigate();
  const [aadhar,setAadhar]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let body ={
      username:aadhar,
      password:password
    }

    const options = {
      method: 'POST',
      url: 'http://localhost:3000/api/user/v1/auth/login',
      data: body
    };

    axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
        sessionStorage.setItem("current_user", JSON.stringify(response.data.data.user));
        navigate("/home")
    })
    .catch(function (error) {
        console.error(error);
    });

  };

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", alignItems: "center", justifyContent: "center" }}>
      {/* <Provider ={}> */}
      {/* <Grid container component="main" sx={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:"10px"}}> */}
      <Grid item xs={10} sm={8} md={5} component={Paper} elevation={6} sx={{ maxWidth: "60vh", backgroundColor: "#d8f5de" }}>
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
          <Avatar sx={{ m: 1, bgcolor: "#379237" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ fontWeight: "600", fontSize: "35px", color: "#379237" }} >
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Aadhar Number"
              label="Aadhar Number"
              name="Aadhar Number"
              autoComplete="Aadhar Number"
              value={aadhar}
              onChange={(e)=>setAadhar(e.target.value)}
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
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
    
            <Button
              // color='secondary'
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, background: "#0a410a", '&:hover': {
                  backgroundColor: "#379237",
                },
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link  variant="body2" sx={{ color: "#717171", textDecoration: "none" }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={()=>navigate("/signup")} variant="body2" sx={{ color: "#717171", textDecoration: "none",'&:hover': {
                  cursor: "pointer",
                }, }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      {/* </Grid> */}
      {/* </Provider> */}
    </div>
  );
}