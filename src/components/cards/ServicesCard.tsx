import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

import Typography from "@mui/joy/Typography";
import Image from "next/image";
import { ServicesType } from "@/types/ServicesTypes";
import { CardActions } from "@mui/joy";
import MuiLink from "@mui/joy/Link";
import Link from "next/link";

export default function ServicesCard({ item }: { item: ServicesType }) {
  return (
    <Card variant="plain" sx={{ bgcolor: "transparent" }}>
      <AspectRatio minHeight="200px" maxHeight="200px">
        <Image src={item?.image} loading="lazy" fill alt="" />
      </AspectRatio>
      <div>
        <Typography level="title-lg">{item.title}</Typography>
        {/* <Typography level="body-sm">April 24 to May 02, 2021</Typography> */}
      </div>
      <CardContent orientation="vertical">
        <Typography level="body-xs">{item.desc}</Typography>
      </CardContent>
      <CardActions buttonFlex="1">
        <Button size="sm" variant="soft">
          <Link href={item.slug}>Read More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
