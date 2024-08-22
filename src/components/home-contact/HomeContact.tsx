"use client";

import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
  styled,
} from "@mui/joy";

import Image from "next/image";
import React from "react";
import { IoPhonePortrait, IoLogoWhatsapp } from "react-icons/io5";
// import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const InfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",

  alignItems: "flex-start",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

const IconsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 10,
  marginTop: 15,
  svg: {
    fontSize: "22px",
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  display: "block",
  margin: " 20px 0",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const FormControlWrapper = styled(FormControl)(({ theme }) => ({
  marginBottom: 10,
}));

const Label = styled(FormLabel)(({ theme }) => ({
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1.1em",
  marginBottom: 8,
}));

interface ContactUsData {
  name: string;
  email: string;
  phone_number: string;
  service: string | null;
}

function ContactUs() {
  const [data, setData] = React.useState<ContactUsData>({
    name: "",
    email: "",
    phone_number: "",
    service: "",
  });
  const [erros, setErrors] = React.useState<any>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Box
        sx={{
          position: "relative",
          bgcolor: "primary.solidBg",
          borderRadius: "20px",
          mt: 6,
          py: 4,
          px: 8,
          mb: 2,
        }}
      >
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <InfoWrapper>
              <ImageWrapper>
                <Image
                  src="/contact-us.png"
                  width={400}
                  height={400}
                  // fill
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt="contact us"
                />
              </ImageWrapper>
              <Typography level="h3" textColor={"#fff"} fontWeight={800}>
                Contact Us
              </Typography>
              <Typography level="body-md" textColor={"#fff"}>
                We are happy to serve you better by contacting us
              </Typography>
              <IconsWrapper>
                <IconButton
                  variant="soft"
                  color="primary"
                  href="tel:+96522209308"
                  component="a"
                  target="_blank"
                >
                  <IoPhonePortrait />
                </IconButton>
                <IconButton
                  variant="soft"
                  color="primary"
                  href="https://api.whatsapp.com/send?phone=+96597170105"
                  component="a"
                  target="_blank"
                >
                  <IoLogoWhatsapp />
                </IconButton>
                <IconButton
                  variant="soft"
                  color="primary"
                  component="a"
                  href="mailto:am@mepmcc.com"
                  target="_blank"
                >
                  <MdEmail />
                </IconButton>
              </IconsWrapper>
            </InfoWrapper>
          </Grid>
          <Grid xs={12} md={6}>
            <Box component="form">
              <FormControlWrapper
                color="neutral"
                size="lg"
                required
                error={erros?.extra?.fields?.name}
              >
                <Label>Full Name</Label>
                <Input
                  variant="soft"
                  placeholder="Full Name"
                  name="name"
                  value={data.name}
                  onChange={onChange}
                />
                <FormHelperText
                  sx={{ fontWeight: "bold", color: "danger.softBg" }}
                >
                  {erros?.extra?.fields?.name}
                </FormHelperText>
              </FormControlWrapper>
              <FormControlWrapper
                color="neutral"
                size="lg"
                required
                error={erros?.extra?.fields?.email}
              >
                <Label>Email Address</Label>
                <Input
                  variant="soft"
                  placeholder="Email Address"
                  name="email"
                  value={data.email}
                  onChange={onChange}
                />
                <FormHelperText
                  sx={{ fontWeight: "bold", color: "danger.softBg" }}
                >
                  {erros?.extra?.fields?.email}
                </FormHelperText>
              </FormControlWrapper>
              <FormControlWrapper
                color="neutral"
                size="lg"
                required
                error={erros?.extra?.fields?.phone_number}
              >
                <Label>Phone Number</Label>
                <Input
                  variant="soft"
                  placeholder="Phone Number"
                  name="phone_number"
                  value={data.phone_number}
                  onChange={onChange}
                />
                <FormHelperText
                  sx={{ fontWeight: "bold", color: "danger.softBg" }}
                >
                  {erros?.extra?.fields?.phone_number}
                </FormHelperText>
              </FormControlWrapper>

              <Label>Message</Label>

              <Textarea
                required
                placeholder="Message"
                variant="soft"
                size="lg"
                name="service"
                minRows={4}
              ></Textarea>
              <Box sx={{ my: 2 }}></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ContactUs;
