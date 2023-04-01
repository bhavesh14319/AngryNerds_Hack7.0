import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import bg_Signup from '../../assets/images/bg_img.jpg'
import { Image } from "@chakra-ui/react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [uploadedImages, setUploadedImages] = React.useState([]);
  const [imageLimit, setImageLimit] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
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
          // swal.fire({
          //   title: "",
          //   text: "Only Five Images Can Be Uploaded",
          //   icon: "info",
          //   background: "#f2f2f2",
          //   backdrop: "rgba(34, 34, 34, 0.4);",
          //   customClass: {
          //     title: `${modalClasses.modalCard__heading}`,
          //     htmlContainer: `${modalClasses.modalCard__msg}`,
          //     actions: `${modalClasses.modalCard__options} `,
          //     cancelButton: `${modalClasses.modalCard_btn} ${modalClasses.modalCard_btn_neg}`,
          //     confirmButton: `${modalClasses.modalCard_btn} ${modalClasses.modalCard_btn_pos}`,
          //   },
          // });

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
    <ThemeProvider theme={theme}>
      <div style={{backgroundImage:'url("https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&w=1600")' ,height:'100vh'}}>
        <Container style={{backgroundColor:"#D8F5DE" , mt:'0 !important' ,border:'1px solid grey'}} component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
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
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
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
                <Grid item xs={12} alignItems={"center"}>
                  {/* <Button variant="contained" component="label" sx={{width:'100%'}}>
                  Upload
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton> */}
                  <div
                  // className={style.dSInputDiv}
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
                        // value={images}
                        autoComplete="none"
                        onChange={(e) => {
                          // let imgArray = images;
                          // imgArray.push(e.target.files);
                          // setImages(imgArray);
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
                {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </div>
    </ThemeProvider>
  );
}
