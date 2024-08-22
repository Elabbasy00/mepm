import { Typography } from "@mui/joy";
import React from "react";

function SectionTitle({
  title,
  ...props
}: {
  title: string;
  [key: string]: any;
}) {
  return (
    <Typography
      level="h1"
      textColor="primary.solidHoverBg"
      fontWeight="xl"
      fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 2rem)"
      {...props}
    >
      {title}
    </Typography>
  );
}

export default SectionTitle;
