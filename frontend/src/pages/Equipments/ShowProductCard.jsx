import React,{useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Swal from 'sweetalert2'
import axios from "axios";

export default function ShowProductCard({ product }) {
  const [user, setUser] = React.useState();

  const createOrder = async () => {
    // e.preventDefault();
    let body = {
      seller_id: product.owner_id,
      buyer_id:user._id,
      product_id:product._id
    }

    const options = {
      method: 'POST',
      url: 'http://localhost:3000/api/user/v1/createOrder',
      data: body
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        Swal.fire({
          title: 'Order Placed',
          text: 'Order placed successfully🔥',
          icon: 'succcess',
          confirmButtonText: 'Cool'
        })
      })
      .catch(function (error) {
        console.error(error);
      });


  }

  React.useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem("current_user"));
    if (data) {
      setUser(data);
    }
  }, [])


  return (
    <Card sx={{ maxWidth: 345, boxShadow: 10, borderRadius: 3, paddingTop: 0 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={product.Images ? product.Images[0] : ""}
        title="Product Image"
      />
      <CardContent sx={{ backgroundColor: "#d8f5de" }}>
        <Typography
          sx={{
            color: "#0A410A"
          }}
          align="center"
          gutterBottom
          variant="h4"
        >
          {product.productName}
        </Typography>
        <Typography
          sx={{ color: "#0A410A" }}
          variant="h6"
          color="text.secondary"
        >
          <div style={{ display: "flex" }}> Category: &nbsp; <h4>{product.category}</h4></div>
          <div style={{ display: "flex" }}> Available On:&nbsp; <h4>{product.onRent ? " Rent" : " Sell"}</h4></div>
        </Typography>
        <Typography
          sx={{ color: "#0A410A" }}
          variant="h6"
          color="text.secondary"
        >
          Price : Rs.{product.price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 1.5,
          backgroundColor: "#d8f5de",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#379237",
            ":hover": {
              bgcolor: "#0A410A",
              color: "white",
            },
          }}
          variant="contained"
          size="small"
          fullWidth
          onClick={createOrder}
        >
          Rent Now
        </Button>
      </CardActions>
    </Card>
  );
}