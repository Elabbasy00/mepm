import { Box, Container, Typography } from "@mui/joy";
import React from "react";
import SectionTitle from "../section-title/SectionTitle";

function HomeAbout() {
  return (
    <Box sx={{ bgcolor: "background.level1", py: 3, mb: 3 }}>
      <Container>
        <SectionTitle title="WHO ARE WE" mb={1} />

        <Typography sx={{ letterSpacing: 1, lineHeight: 1.9 }} level="body-md">
          MEPM Consultants is a consulting, training, and research institution
          specializing in productivity and quality improvement through people.{" "}
          Founded in Kuwait, MEPM Consultants has been working together with our
          clients from various industries in aligning their people and processes
          to compete through high speed, excellent quality and low cost. We are
          committed to serve our clients with integrity, honesty and openness.
        </Typography>
      </Container>
    </Box>
  );
}

export default HomeAbout;
