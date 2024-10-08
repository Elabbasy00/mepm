"use client";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import { typographyClasses } from "@mui/joy/Typography";
import Image from "next/image";

export default function TwoSidedLayout({
  children,
  reversed,
  img,
}: React.PropsWithChildren<{ reversed?: boolean; img: string }>) {
  return (
    <Container
      sx={(theme) => ({
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        flexDirection: reversed ? "column-reverse" : "column",
        alignItems: "center",
        py: 7,
        gap: 4,
        [theme.breakpoints.up(834)]: {
          flexDirection: "row",
          gap: 6,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          maxWidth: "50ch",
          textAlign: "center",
          flexShrink: 999,
          [theme.breakpoints.up(834)]: {
            minWidth: 420,
            alignItems: "flex-start",
            textAlign: "initial",
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: "balance",
          },
        })}
      >
        {children}
      </Box>
      <AspectRatio
        ratio={600 / 520}
        variant="outlined"
        maxHeight={300}
        sx={(theme) => ({
          minWidth: 300,
          alignSelf: "stretch",
          [theme.breakpoints.up(834)]: {
            alignSelf: "initial",
            flexGrow: 1,
            "--AspectRatio-maxHeight": "520px",
            "--AspectRatio-minHeight": "400px",
          },
          borderRadius: "sm",
          bgcolor: "background.level2",
          flexBasis: "50%",
        })}
      >
        <Image
          fill
          quality="100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={img}
          alt=""
        />
      </AspectRatio>
    </Container>
  );
}
