"use client";
import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
  styled,
} from "@mui/joy";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdEmail, MdPhone, MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const BottomIcon = styled(ListItem)(({ theme }) => ({
  fontSize: "1.2rem",
  transition: "all 0.3s linear",
  ":hover": { color: theme.palette.primary.solidBg },
  border: "0.1px dashed",

  borderRadius: "50%",
  margin: "0 5px",
}));

const FooterInfo = styled(ListItem)(({ theme }) => ({
  color: "#fff",
  h4: {
    color: "#fff",
  },
}));

const FooterLink = styled(ListItem)(({ theme }) => ({
  fontSize: "1.2rem",
  transition: "color 0.3s linear",
  ":hover": { color: theme.palette.primary.solidBg },
}));

function Footer() {
  return (
    <Container sx={{ mt: 8 }}>
      <Box component="footer" sx={{ overflow: "hidden" }}>
        <Divider />
        <Grid container spacing={3} mt={4} mb={4}>
          <Grid lg={4} md={6} xs={12}>
            <Link href="/">
              <Typography
                sx={{ letterSpacing: "6px" }}
                level="title-lg"
                textColor="warning.solidBg"
              >
                MEPM
              </Typography>
              {/* <Image
                src={"/logo/Logo-2.svg"}
                alt="hewar logo"
                width={150}
                height={50}
              /> */}
            </Link>
            <Typography level="body-md" textColor="neutral.400" mt={2}>
              MEPM Consultants is a consulting, training, and research
              institution specializing in productivity and quality improvement
              through people.
            </Typography>
          </Grid>
          <Grid lg={3} md={6} xs={12}>
            <Typography level="h4" textColor="primary.solidBg">
              Pages
            </Typography>
            <List
              orientation="vertical"
              variant="outlined"
              size="md"
              sx={{
                border: "none",
                fontWeight: "bold",
                "--ListItem-paddingY": "0.1rem",
                "--ListItem-paddingX": "0rem",
              }}
            >
              <FooterLink>
                <Link href="/">Home</Link>
              </FooterLink>
              <FooterLink>
                <Link href="/about">About US</Link>
              </FooterLink>

              <FooterLink>
                <Link href="/contact">Contact Us</Link>
              </FooterLink>

              <FooterLink>
                <Link href="/services">Services</Link>
              </FooterLink>
            </List>
          </Grid>
          <Grid lg={5} md={6} xs={12}>
            <Card
              color="primary"
              variant="solid"
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <List aria-labelledby="contact-list">
                <FooterInfo>
                  <MdEmail />
                  <Typography level="h4">am@mepmcc.com</Typography>
                </FooterInfo>
                <FooterInfo>
                  <MdPhone />
                  <Typography level="h4">+965 22209308</Typography>
                </FooterInfo>
                {/* <FooterInfo>
                  <MdLocationPin />

                  <Typography level="h4">Saudi Arabia, Madinah </Typography>
                </FooterInfo> */}
              </List>
            </Card>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={2} mt={3} mb={2}>
          <Grid xs={6}>Copyright © {new Date().getFullYear()} MEPM Inc. </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Footer;
