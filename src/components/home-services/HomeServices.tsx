import { services } from "@/utils/data";
import { Box, Button, Container, Grid, Typography } from "@mui/joy";
import React from "react";
import ServicesCard from "../cards/ServicesCard";
import SectionTitle from "../section-title/SectionTitle";

function HomeServices() {
  return (
    <Container sx={{ overflow: "hidden" }}>
      <SectionTitle title="Our Services" my={4} textAlign="center" />
      <Grid container spacing={2}>
        {services.map((item) => (
          <Grid xs={12} sm={6} md={4} key={item.id}>
            <ServicesCard item={item} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <Button>View All</Button>
      </Box>
    </Container>
  );
}

export default HomeServices;
