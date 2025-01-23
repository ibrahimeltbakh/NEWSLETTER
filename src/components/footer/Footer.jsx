import { Stack, Box, Grid2 } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
const Footer = () => {
  const Item = styled(Paper)(() => ({
    backgroundColor: "transparent",
    color: "#fff",
    textAlign: "center",
    fontFamily: "MaryToddW00-Light",
  }));
  return (
    <Grid2 container spacing={1}>
      <Grid2 size={{ xs: 12, sm: 6, md: 2 }} textAlign={"center"}>
        <h3>NEWSLETTER</h3>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <Stack textAlign={"center"} spacing={2} color={"#888"}>
          <Stack
            direction={"row"}
            spacing={1}
            fontSize={"15px"}
            justifyContent={"center"}
            sx={{
              "& .MuiPaper-elevation1": {
                color: "#888",
              },
            }}>
            <Item>Privacy Policy</Item>
            <Item>Terms of Service</Item>
            <Item>Copyright Policy</Item>
            <Item>Data Policy</Item>
            <Item>Accessibility Help</Item>
          </Stack>
          <Box sx={{ color: "#888" }}>
            © 2023 Newsletter, All rights reserved
          </Box>
        </Stack>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
        <Stack spacing={2}>
          <Item>Politics</Item>
          <Item>World</Item>
          <Item>Economy</Item>
          <Item>Science & Tech</Item>
          <Item>Business</Item>
        </Stack>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
        <Stack spacing={2}>
          <Item>Travel</Item>
          <Item>Climate</Item>
          <Item>Lifestyle</Item>
          <Item>Food</Item>
          <Item>Sports</Item>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default Footer;
