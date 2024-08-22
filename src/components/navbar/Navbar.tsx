"use client";
import Box from "@mui/joy/Box";
import React from "react";

import { Badge, IconButton, styled, Typography } from "@mui/joy";

import Image from "next/image";
import ActiveLink from "../active-link/ActiveLink";

import Link from "next/link";
import { MdHome, MdMenu } from "react-icons/md";

const Header = styled(Box)(({ theme }) => ({
  gap: 1,
  border: "none",
  background: "transparent",
  boxShadow: theme.shadow.md,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  zIndex: 1100,
  width: "100%",
}));

const HeaderWrapper = styled(Box)(({ theme }) => ({
  gap: 1,
  border: "none",
  display: "flex",
  flexDirection: "row",
  color: "#fffff",
  justifyContent: "space-between",

  alignItems: "center",
  gridColumn: "1 / -1",
  overflow: "hidden",
  zIndex: 1100,
  width: "100%",
  // position: "absolute",
}));

const Logo = styled(Image)(({ theme }) => ({
  width: 60,
  height: 60,
  objectFit: "contain",
  [theme.breakpoints.down("md")]: {
    width: 60,
    height: 60,
  },
}));

function Navbar() {
  return (
    <Header
      sx={{ px: { xs: 2, md: 4 }, py: 3 }}
      component="header"
      className="Header"
    >
      <HeaderWrapper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexGrow: { md: 0, sm: 1 },
          }}
        >
          <Link href="/">
            <Typography
              sx={{ letterSpacing: "6px" }}
              level="title-lg"
              textColor="warning.solidBg"
            >
              MEPM
            </Typography>
            {/* <Logo
              src="/logo/croped-logo.png"
              width={60}
              height={60}
              alt="Kaffo Logo"
            /> */}
          </Link>
        </Box>
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <ActiveLink href="/" name="Home" />
          <ActiveLink href="/about" name="About Us" />
          <ActiveLink href="/services" name="Services" />
          <ActiveLink href="/contact" name="Contact Us" />
          {/* <ActiveLink href="/blogs" name="blog" /> */}
        </Box>

        {/* <Box
          sx={{ display: { sm: "flex", xs: "none" }, gap: 1, margin: "0 10px" }}
        >
          Hi
        </Box> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: { sm: "none", xs: "flex" },
              flexDirection: "row",
              gap: 1,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <IconButton color="primary" variant="soft" size="md">
              <MdMenu />
            </IconButton>
          </Box>
        </Box>
      </HeaderWrapper>
    </Header>
  );
}

export default Navbar;
