import * as React from "react";
import Avatar from "@mui/joy/Avatar";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

import Typography from "@mui/joy/Typography";
import { ClientsType } from "@/types/ClientTypes";

export default function ClientCard({ item }: { item: ClientsType }) {
  return (
    <Card
      sx={{
        maxWidth: "100%",

        background: "transparent",
      }}
      variant="plain"
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar
          src={item.image}
          sx={{ "--Avatar-size": "7rem", objectFit: "cover" }}
        />

        {/* <Typography level="title-lg" fontFamily="cursive">
          {item.name}
        </Typography> */}
      </CardContent>
    </Card>
  );
}
