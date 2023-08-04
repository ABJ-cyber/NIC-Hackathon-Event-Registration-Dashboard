import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CountdownCard = ({ remaining, unit }) => {
  return (
    <Paper
      sx={{
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">{remaining}</Typography>
      <Typography variant="subtitle2">{unit}</Typography>
    </Paper>
  );
};

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={3}>
        <CountdownCard remaining={timeLeft.days} unit={"Days"} />
      </Grid>
      <Grid item xs={6} sm={3}>
        <CountdownCard remaining={timeLeft.hours} unit={"Hours"} />
      </Grid>
      <Grid item xs={6} sm={3}>
        <CountdownCard remaining={timeLeft.minutes} unit={"Minutes"} />
      </Grid>
      <Grid item xs={6} sm={3}>
        <CountdownCard remaining={timeLeft.seconds} unit={"Seconds"} />
      </Grid>
    </Grid>
  );
};

export default Countdown;
