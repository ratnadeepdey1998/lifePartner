import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Videos from "../../src/m1.mp4";
import "../pricing.css";

function Pricing() {
  const [loggedInUserId, setLoggedInUserId] = useState("");
  const [prcTempFormDataMember, setPrcTempFormDataMember] = useState({
    member: "",
  });
  const newUser = { member: prcTempFormDataMember.member };
  const [allUsersData, setAllUsersData] = useState([]);

  const PricingList = styled("ul")({
    margin: 0,
    padding: 0,
    listStyle: "none",
  });

  const tiers = [
    {
      freee: "free",
      title: "Free",
      price: "0",
      description: [
        "10 users included",
        "2 GB of storage",
        "Help center access",
        "Email support",
      ],
      buttonText: "Get started",
      buttonVariant: "outlined",
    },
    {
      freee: "pro",
      title: "Pro",
      subheader: "Most popular",
      price: "15",
      description: [
        "20 users included",
        "10 GB of storage",
        "Help center access",
        "Priority email support",
      ],
      buttonText: "Get started",  
      buttonVariant: "contained",
    },
    {
      freee: "enterprise",
      title: "Enterprise",
      price: "30",
      description: [
        "50 users included",
        "30 GB of storage",
        "Help center access",
        "Phone & email support",
      ],
      buttonText: "Get started",
      buttonVariant: "outlined",
    },
  ];

  useEffect(() => {
    if (allUsersData.length > 0) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      let userData = allUsersData.find((user) => user.id == loggedInUser);
      console.log("Initial userData=====", userData);
      // console.log("loggedInUser=====", loggedInUser);

      if (userData != undefined && userData.hasOwnProperty("id")) {
        let tempUserData = { ...userData };
        tempUserData = {
          ...tempUserData,
          member: prcTempFormDataMember.member,
        };
        userData = tempUserData;
        console.log("Updated userData-=-=-=-=-:", userData);
        // const newArray = allUsersData.map((item) => {
        //   if (item.id === userData.id) {
        //     return userData; // Replace with the new object
        //   }
        //   return item; // Keep the original object
        // });
        // console.log("newArray=======",newArray)
        // newArray.forEach(item=>{
        //   let id = item.id
          fetch(`http://localhost:3001/users/${userData.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("New user created:", data);
              // setAllUsersData(data)
            })
            .catch((error) => {
              console.error("Error creating user:", error);
            });
        // })

      }
    }
    // console.log("=-=-=allUsersData======", allUsersData);
  }, [allUsersData]);

  const handleClick = (buttonText, e) => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("data-------------------------", data);
        setAllUsersData(data);
      });

    let prcTempFormData = { ...prcTempFormDataMember };
    if (buttonText == "free") {
      alert("Free..");
      if (prcTempFormData != "") {
        prcTempFormData = { ...prcTempFormData, member: "Free" };
        // console.log("prcTempFormData if", prcTempFormData);
        const loggedInUser = localStorage.getItem("loggedInUser");
        // console.log("=-=-=======", allUsersData);
        // const userData = userLogin.find((user) => user.email === email.value);
        // setLoggedInUserId(userName);
      } else {
        prcTempFormData = { ...prcTempFormData, member: "Pro" };
      }
    }
    if (buttonText == "pro") {
      alert("Pro..");
      if (prcTempFormData != "") {
        prcTempFormData = { ...prcTempFormData, member: "Pro" };
        console.log("prcTempFormData if", prcTempFormData);
      } else {
        prcTempFormData = { ...prcTempFormData, member: "Free" };
        console.error("prcTempFormData else", prcTempFormData);
      }
    }
    if (buttonText == "enterprise") {
      alert("Enterprise..");
      if (prcTempFormData != "") {
        prcTempFormData = { ...prcTempFormData, member: "Enterprise" };
        // console.log("prcTempFormData if", prcTempFormData);
      } else {
        prcTempFormData = { ...prcTempFormData, member: "Free" };
        console.error("prcTempFormData else", prcTempFormData);
      }
    }
    setPrcTempFormDataMember(prcTempFormData);
  };

  useEffect(() => {
    document.getElementById("pricing").style.color = "#c82a2a";
    // console.log("loggedInUserId===useEffect---", loggedInUserId);
    // console.log("=-=-=allUsersData======", allUsersData);
  });
  // console.log("loggedInUserId===useEffect-----", loggedInUserId);

  return (
    <div className="App">
      <div className="pricing">
        {/* Video Start */}
        <div id="heroSection" className="hero">
          <video id="#video" muted autoPlay={"autoplay"} loop src={Videos} />

          <div className="getQuote">
            <h1>
              Elevate your Business with CANGEO's Digital Marketing Solutions
            </h1>
            <a href="#contact">
              <button className="btn"> Get Quote</button>
            </a>
          </div>
        </div>

        {/* Video End*/}
        <div className="pricingtop">
          <Container maxWidth="md" component="main">
            <Grid
              container
              spacing={5}
              alignItems="flex-end"
              style={{ marginBottom: "40px" }}
            >
              {tiers.map((tier) => (
                <Grid
                  item
                  key={tier.title}
                  xs={12}
                  sm={tier.title === "Enterprise" ? 12 : 6}
                  md={4}
                >
                  <Card className="cardhover">
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: "center" }}
                      action={tier.title === "Pro" ? <StarIcon /> : null}
                      subheaderTypographyProps={{
                        align: "center",
                      }}
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === "light"
                            ? theme.palette.grey[200]
                            : theme.palette.grey[700],
                      }}
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "baseline",
                          mb: 2,
                        }}
                      >
                        <Typography
                          component="h2"
                          variant="h3"
                          color="text.primary"
                        >
                          ${tier.price}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          /mo
                        </Typography>
                      </Box>
                      <PricingList>
                        {tier.description.map((line) => (
                          <Typography
                            component="li"
                            variant="subtitle1"
                            align="center"
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                      </PricingList>
                    </CardContent>
                    <CardActions>
                      <Button
                        // onClick={tier.freee}
                        // onClick={() => {
                        //   {tier.freee}
                        // }}
                        onClick={() => handleClick(tier.freee)}
                        fullWidth
                        variant={tier.buttonVariant}
                      >
                        {tier.buttonText}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
