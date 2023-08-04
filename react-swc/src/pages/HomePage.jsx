import React from "react";
import Countdown from "../components/Countdown";
import { Link } from "react-router-dom";
import AvatarComponent from "../components/AvatarComponent"; // Assuming the path is correct
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Jumbotron from "../components/Jumbotron";
import Box from "@mui/material/Box";

import avatar1 from "../images/avatar1.jpeg";
import avatar2 from "../images/avatar2.jpeg";
import avatar3 from "../images/avatar3.jpeg";

const HomePage = () => {
  return (
    <>
      <Box sx={{ height: "400px" }}>
        <Jumbotron />
      </Box>
      <div style={{ marginBottom: "80px" }}>
        <Countdown targetDate={"2023-10-10"} />
      </div>

      <div style={{ marginBottom: "1px" }}>
        {/* Keynote Speakers Title */}
        <Typography variant="h4" align="center" gutterBottom>
          Keynote Speakers
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          marginBottom: "80px",
          padding: "20px", // Adjust the padding to give some space around the avatars
        }}
      >
        <AvatarComponent
          alt="David Solomon"
          src={avatar1}
          name="David Solomon"
          subtitle="The Future of AI in Goldman Sachs"
          style={{ width: "400px", height: "400px" }} // Adjust the width and height to make the avatars bigger
        />

        <AvatarComponent
          alt="Tim Cook"
          src={avatar2}
          name="Tim Cook"
          subtitle="Pact Technology and the Apple Card"
          style={{ width: "400px", height: "400px" }} // Adjust the width and height to make the avatars bigger
        />

        <AvatarComponent
          alt="Cindy Baker"
          src={avatar3}
          name="Cindy Baker"
          subtitle="Advancements in Machine Learning"
          style={{ width: "400px", height: "400px" }} // Adjust the width and height to make the avatars bigger
        />
      </div>

      <div style={{ marginBottom: "1px" }}>
        {/* Event Overview */}
        <Typography variant="h4" align="center" gutterBottom>
          Event Overview
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "stretch",
          marginTop: "1px",
        }}
      >
            <Link to="/events/?whitepaperpresentations" style={{ textDecoration: "none" }}>
        <Card
          style={{
            flex: "1",
            textAlign: "center",
            width: "400px", // Set a fixed width for the card
            height: "150px",
            margin: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0044A0", // Change the card background color
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              style={{ color: "white", fontWeight: "bold" }}
            >
              White Paper Presentation
            </Typography>
          </CardContent>
        </Card>
              </Link>

            <Link to="/events/?techtalks" style={{ textDecoration: "none" }}>
        <Card
          style={{
            flex: "1",
            textAlign: "center",
            width: "400px", // Set a fixed width for the card
            height: "150px", // Set a fixed height for the card
            margin: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#002c69", // Change the card background color
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Tech Talks
            </Typography>
          </CardContent>
        </Card>
              </Link>

              <Link to="/events/?trainings" style={{ textDecoration: "none" }}>
        <Card
          style={{
            flex: "1",
            textAlign: "center",
            width: "400px", // Set a fixed width for the card
            height: "150px",
            margin: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFC726", // Change the card background color
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Trainings
            </Typography>
          </CardContent>
        </Card>
              </Link>
      </div>
    </>
  );
};

export default HomePage;
