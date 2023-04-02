import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ShowProductCard() {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 10, borderRadius: 3 ,animationName:  'square-in-center',animationDuration: '2s' }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7yC1wjNCpIJtuu7vCkKsrZD8Bd4x-BvtojMKCnKvlg&usqp=CAU&ec=48665699"
        title="green iguana"
      />
      <CardContent sx={{ backgroundColor: "#d8f5de" }}>
        <Typography
          sx={{
            color: "#0A410A"
          }}
          align="center"
          gutterBottom
          variant="h6"
        >
          Tractor
        </Typography>
        <Typography
          sx={{ color: "#0A410A" }}
          variant="h6"
          color="text.secondary"
        >
          Category
        </Typography>
        <Typography
          sx={{ color: "#0A410A" }}
          variant="body2"
          color="text.secondary"
        >
          Price : Rs.45000
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
          sx={{ backgroundColor: "#379237" ,
          ":hover": {
            bgcolor: "#0A410A",
            color: "white",
          },}}
          variant="contained"
          size="small"
          fullWidth
        >
          Rent Now
        </Button>
      </CardActions>
    </Card>
  );
}
