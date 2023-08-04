import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

const EventCard = ({ name, tags, imageUrl }) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {tags.map((tag) => (
              <Chip label={tag} size="small" />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventCard;
