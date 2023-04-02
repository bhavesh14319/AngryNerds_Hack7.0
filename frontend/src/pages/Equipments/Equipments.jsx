import React, { useEffect, useState } from "react";
import ShowProductCard from "./ShowProductCard";
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import "../../styles/equipmentspage.css";
import "./Slider.css";
import DatePicker from "./DatePicker";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";

function Equipments() {
  const allRanges = document.querySelectorAll(".range-wrap");
  allRanges.forEach((wrap) => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");
    range.addEventListener("input", () => {
      setBubble(range, bubble);
    });
    setBubble(range, bubble);
  });

  function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;

    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  }


  const [user, setUser] = useState();

  const [products, setProducts] = useState();


  const [isFilter, setIsFilter] = useState(false);

  const [categoryFilter, setCategoryFilter] = useState({
    category: "",
    products: [],
  });


  const [buyFilter, setBuyFilter] = useState({
    type: "",
    products: [],
  });






  const getProducts = async () => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/api/products/v1/allProducts',
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setProducts(response?.data?.data?.products);
      })
      .catch(function (error) {
        console.error(error);
      });

    console.log(products);
  }



  const getCategoryProducts = () => {
    let categoryProducts = products?.filter((product) => product?.category === categoryFilter?.category)

    if (categoryProducts) {
      setCategoryFilter({ ...categoryFilter, products: categoryProducts });
    }



  }

  useEffect(() => {
    console.log(categoryFilter?.products);
  }, [categoryFilter.products])

  useEffect(() => {
    // alert(categoryFilter.category);
    if (categoryFilter.category == "Default") {
      setIsFilter(false);
    } else {
      setIsFilter(true);
      getCategoryProducts();
    }
  }, [categoryFilter.category])



  const getBuyCategoryProducts = ()=>{
    let categoryBuyProducts;
    if(buyFilter.type==="BUY"){
      categoryBuyProducts = products?.filter((product) => product?.onRent == false)
    }else{
      categoryBuyProducts = products?.filter((product) => product?.onRent == true)
    }
  
    if (categoryBuyProducts) {
      setBuyFilter({ ...buyFilter, products: categoryBuyProducts });
    }
  }

  useEffect(() => {
    console.log(buyFilter.products);
  }, [buyFilter.products])


  useEffect(() => {

    if (buyFilter.type == "All") {
      setIsFilter(false);
    } else {
      setIsFilter(true);
      getBuyCategoryProducts();
    }
  }, [buyFilter.type])


  useEffect(()=>{
    if(isFilter==false){
      setCategoryFilter({...categoryFilter,category:"Default"})
    }
  },[isFilter])
  useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem("current_user"));
    if (data) {
      setUser(data);
      getProducts();
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className="equipments_page">
        <div className="filters_equipment">
          <Box
            alignItems={"center"}
            sx={{
              backgroundColor: "#379237",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: "2rem",
              borderTopRightRadius: "2rem",
            }}
          >
            <Typography color={"white"} variant="h5">
              Product Filters
            </Typography>
          </Box>
          <Container
            sx={{
              border: "1px solid black",
              pb: 4,
              borderBottomLeftRadius: "2rem",
              borderBottomRightRadius: "2rem",
              boxShadow: 10,
            }}
          >
            <FormControl fullWidth sx={{ my: 3 }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="category"
                label="Category"
                onChange={(e) => { setCategoryFilter({ ...categoryFilter, [e.target.name]: e.target.value }) }}
              >
                <MenuItem value={"Default"}>Default</MenuItem>
                <MenuItem value={"Tool"}>Tool</MenuItem>
                <MenuItem value={"Fertilizers"}>Fertilizers</MenuItem>
                <MenuItem value={"Vehicles"}>Vehicles</MenuItem>
                <MenuItem value={"Animal"}>Animal</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ mb: 3 }} fullWidth>
              <InputLabel id="demo-simple-select-label">Buy/Rent</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                name="type"
                label="Brands"
                onChange={(e) => { setBuyFilter({ ...buyFilter, [e.target.name]: e.target.value }) }}
              >
                <MenuItem value={"ALL"}>ALL</MenuItem>
                <MenuItem value={"BUY"}>FOR BUY</MenuItem>
                <MenuItem value={"RENT"}>FOR RENT</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ mb: 3 }} fullWidth>
              <InputLabel id="demo-simple-select-label">
                Available For
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
          </Container>
        </div>
        <div className="products_grid">
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          ><>
              {!isFilter &&  products?.map((product) => {
                return <Grid item xs={4}>
                  <ShowProductCard product={product} />
                </Grid>
              })}


              {isFilter && categoryFilter.category !== "Default" && categoryFilter?.products?.map((product) => {
                return <Grid item xs={4}>
                  <ShowProductCard product={product} />
                </Grid>
              })}


              {isFilter && buyFilter.category !== "ALL" && buyFilter?.products?.map((product) => {
                return <Grid item xs={4}>
                  <ShowProductCard product={product} />
                </Grid>
              })}
            </>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Equipments;