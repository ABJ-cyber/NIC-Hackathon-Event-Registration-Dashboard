import React from "react";
import Box from "@mui/material/Box";
import EventCard from "../components/events/EventCard";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const eventsData = [
  {
    name: "Keynote Address",
    date: "2023-08-20",
    time: "10:00 AM",
    location: "Main Hall",
    description:
      "Join us for the inspiring keynote address from industry leaders.",
    tags: ["Keynote", "Inspiration", "Leadership"],
    speakers: [
      {
        name: "John Doe",
        bio: "CEO, Acme Corp",
        image: "https://example.com/speakers/john-doe.jpg",
      },
      {
        name: "Jane Smith",
        bio: "CTO, XYZ Inc",
        image: "https://example.com/speakers/jane-smith.jpg",
      },
    ],
    image: "https://example.com/events/keynote.jpg",
    lms_link: "https://example.com/lms/keynote",
  },
  {
    name: "Panel Discussion: Future of Technology",
    date: "2023-08-21",
    time: "2:00 PM",
    location: "Conference Room A",
    description:
      "A panel discussion on the latest trends and innovations in technology.",
    tags: ["Technology", "Innovation", "Panel"],
    speakers: [
      {
        name: "Michael Brown",
        bio: "VP of Engineering, Tech Co.",
        image: "https://example.com/speakers/michael-brown.jpg",
      },
      {
        name: "Emily Johnson",
        bio: "AI Researcher, Future Labs",
        image: "https://example.com/speakers/emily-johnson.jpg",
      },
      {
        name: "Alex Lee",
        bio: "Blockchain Expert, Crypto Inc.",
        image: "https://example.com/speakers/alex-lee.jpg",
      },
    ],
    image: "https://example.com/events/panel-discussion.jpg",
    lms_link: "https://example.com/lms/panel-discussion",
  },
  {
    name: "Workshop: Web Development Basics",
    date: "2023-08-22",
    time: "9:30 AM",
    location: "Workshop Room B",
    description:
      "A hands-on workshop for beginners to learn web development fundamentals.",
    tags: ["Workshop", "Web Development", "Beginners"],
    speakers: [
      {
        name: "Sarah Adams",
        bio: "Frontend Developer, Code Masters",
        image: "https://example.com/speakers/sarah-adams.jpg",
      },
    ],
    image: "https://example.com/events/workshop-web-development.jpg",
    lms_link: "https://example.com/lms/web-dev-workshop",
  },
  {
    name: "Workshop: Web Development Basics",
    date: "2023-08-22",
    time: "9:30 AM",
    location: "Workshop Room B",
    description:
      "A hands-on workshop for beginners to learn web development fundamentals.",
    tags: ["Workshop", "Web Development", "Beginners"],
    speakers: [
      {
        name: "Sarah Adams",
        bio: "Frontend Developer, Code Masters",
        image: "https://example.com/speakers/sarah-adams.jpg",
      },
    ],
    image: "https://example.com/events/workshop-web-development.jpg",
    lms_link: "https://example.com/lms/web-dev-workshop",
  },
  {
    name: "Workshop: Web Development Basics",
    date: "2023-08-22",
    time: "9:30 AM",
    location: "Workshop Room B",
    description:
      "A hands-on workshop for beginners to learn web development fundamentals.",
    tags: ["Workshop", "Web Development", "Beginners"],
    speakers: [
      {
        name: "Sarah Adams",
        bio: "Frontend Developer, Code Masters",
        image: "https://example.com/speakers/sarah-adams.jpg",
      },
    ],
    image: "https://example.com/events/workshop-web-development.jpg",
    lms_link: "https://example.com/lms/web-dev-workshop",
  },
  {
    name: "Workshop: Web Development Basics",
    date: "2023-08-22",
    time: "9:30 AM",
    location: "Workshop Room B",
    description:
      "A hands-on workshop for beginners to learn web development fundamentals.",
    tags: ["Workshop", "Web Development", "Beginners"],
    speakers: [
      {
        name: "Sarah Adams",
        bio: "Frontend Developer, Code Masters",
        image: "https://example.com/speakers/sarah-adams.jpg",
      },
    ],
    image: "https://example.com/events/workshop-web-development.jpg",
    lms_link: "https://example.com/lms/web-dev-workshop",
  },
  {
    name: "Workshop: Web Development Basics",
    date: "2023-08-22",
    time: "9:30 AM",
    location: "Workshop Room B",
    description:
      "A hands-on workshop for beginners to learn web development fundamentals.",
    tags: ["Workshop", "Web Development", "Beginners"],
    speakers: [
      {
        name: "Sarah Adams",
        bio: "Frontend Developer, Code Masters",
        image: "https://example.com/speakers/sarah-adams.jpg",
      },
    ],
    image: "https://example.com/events/workshop-web-development.jpg",
    lms_link: "https://example.com/lms/web-dev-workshop",
  },
  {
    name: "Workshop: Web Development Basics",
    date: "2023-08-22",
    time: "9:30 AM",
    location: "Workshop Room B",
    description:
      "A hands-on workshop for beginners to learn web development fundamentals.",
    tags: ["Workshop", "Web Development", "Beginners"],
    speakers: [
      {
        name: "Sarah Adams",
        bio: "Frontend Developer, Code Masters",
        image: "https://example.com/speakers/sarah-adams.jpg",
      },
    ],
    image: "https://example.com/events/workshop-web-development.jpg",
    lms_link: "https://example.com/lms/web-dev-workshop",
  },
  {
    name: "Workshop: Web Development Basics",
    date: "2023-08-22",
    time: "9:30 AM",
    location: "Workshop Room B",
    description:
      "A hands-on workshop for beginners to learn web development fundamentals.",
    tags: ["Workshop", "Web Development", "Beginners"],
    speakers: [
      {
        name: "Sarah Adams",
        bio: "Frontend Developer, Code Masters",
        image: "https://example.com/speakers/sarah-adams.jpg",
      },
    ],
    image: "https://example.com/events/workshop-web-development.jpg",
    lms_link: "https://example.com/lms/web-dev-workshop",
  },
];

const EventsPage = () => {
  return (
    <Box>
      <Grid container spacing={2} columns={3} columnGap={3} rowGap={3}>
        {eventsData.map((event) => (
          <EventCard
            name={event.name}
            tags={event.tags}
            imageUrl={event.image}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default EventsPage;
