import React from "react";
import TwoSidedLayout from "../two-sided-layout/TwoSidedLayout";
import { Button, Typography } from "@mui/joy";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

function Hero() {
  return (
    <TwoSidedLayout img="/hero.jpg">
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        Middle East Project Management
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Advices, Research, Training, Studies{" "}
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        MEPM Consultants is a consulting, training, and research institution
        specializing in productivity and quality improvement through people.
      </Typography>
      <Button
        component={Link}
        href="/contact"
        size="lg"
        endDecorator={<IoArrowForward fontSize="xl" />}
      >
        Contact Us
      </Button>
    </TwoSidedLayout>
  );
}

export default Hero;
