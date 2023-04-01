import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "../../components/navbar/Navbar";
import { Container, Divider, Stack, Typography } from "@mui/material";

import SchemeCard from "./SchemeCard";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Governmnet() {
  const data = [
    {
      src: "https://img.jagranjosh.com/imported/images/E/GK/PM-Kisan-Samman-Nidhi-Yojana%202020.jpg",
      title: "PM-KISAAN SAMMAN (NEW)" ,
      text: "An initiative of the Government wherein 120 million small and marginal farmers of India with less than two hectares of landholding will get up to Rs. 6,000 per year as income support.",
      href: "https://www.pmkisan.gov.in/",
    },
    {
      src: "https://kj1bcdn.b-cdn.net/media/8898/pmfby.jpg",
      title: "Fasal Bima Yojna",
      text: "It is an actuarial premium based scheme where farmer has to pay maximum premium of 2 percent for Kharif, 1.5 percent for Rabi food & oilseed crops and 5 percent for annual commercial",
      href: "https://pmfby.gov.in/",
    },
    {
      src: "https://img.jagranjosh.com/imported/images/E/Articles/kisan-credit-card.jpg",
      title: "Kisan Credit Card",
      text: "It is a scheme that provides farmers with timely access to credit. Kisan Credit Card scheme was introduced in 1998 to provide short-term formal credit to the farmers",
      href: "https://krishijagran.com/news/how-to-apply-for-kisan-credit-card-online-check-step-by-step-process/",
    },
    {
      src: "https://www.yojanagyan.in/wp-content/uploads/2020/02/download-2-200x114.jpg",
      title: "Pashu Kisan Credit Card",
      text: "For the growth and development of animal husbandry sector in India, the Government has launched ‘Pashu Kisan Credit Card’ for livestock farmers.",
      href: "https://www.nscsindia.org/pashu-kisan-credit-card/",
    },
    {
      src: "https://1.bp.blogspot.com/-8mJAWJPd8_k/W3-6NuchCdI/AAAAAAAAT7k/l6w1Pvkgh4MDPnO_R0WMrIuMjAqxZU0UgCK4BGAYYCw/s1600/Paramparagat%2BKrishi%2BVikas%2BYojana.png",
      title: "Paramparagat Krishi Vikas",
      text: "Paramparagat Krishi Vikas Yojana is implemented with the aim to promote organic cultivation in India. To improve soil health as well as organic",
      href: "https://krishijagran.com/agriculture-world/how-farmers-can-get-rs-50000-per-hectare-for-organic-farming-under-paramparagat-krishi-vikas-yojana/",
    },
    {
      src: "https://static.vikaspedia.in/media/images_en/agriculture/policies-and-schemes/crops-related/PMKSY.jpg",
      title: "Pradhan Krishi Sinchai",
      text: "Pradhan Mantri Krishi Sinchai Yojana was launched on 1 July 2015 with the motto ‘Har Khet Ko Paani’ to provide end-to end solutions in irrigation supply chain",
      href: "http://pmksy.gov.in/",
    },
    {
      src: "https://miro.medium.com/proxy/1*KvsGWcD0y59vYqvIX13aqQ.jpeg",
      title: "National Agriculture Market",
      text: "National Agriculture Market gives an e-marketing platform at the national level and support creation of infrastructure to enable e-marketing.",
      href: "https://www.enam.gov.in/web/",
    },
    {
      src: "https://nenow.in/wp-content/uploads/2020/02/Representative-photo.-Image-credit-www.freshersgroup.com_-1140x570.png",
      title: "Soil Health Card Scheme",
      text: "Soil health card scheme was launched in the year 2015 in order to help the State Governments to issue Soil Health Cards to farmers of India. The Soil Health Cards",
      href: "https://soilhealth.dac.gov.in/",
    },
  ];

  return (
    <>
      <Navbar />

      <Divider sx={{height:"5px", fontSize:"50px", width:"15px"}}/>
      <div style={{ width: "100%", backgroundColor: "#D8F5DE" }}>
        <Container
          sx={{ m: "1 0", width: "100% !important", maxWidth: "100%" }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            mb={5}
            pt={5}
          >
            <Typography variant="h4" sx={{ color: "#0A410A" }}>
              Government Schemes For 
              <Typography variant="h3" sx={{ color: "#379237" }}>Farmer's Benefits</Typography>
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {data.map((item, index) => {
              return (
                <>
                  <Grid item xs={12} sm={6} xl={4} key={index}>
                    <SchemeCard data={item} />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      </div>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </>
  );
}
