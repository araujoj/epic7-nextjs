import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          marginTop: 3,
          marginBottom: 3,
          width: "100%",
          height: 500,
          bgcolor: "primary.main",
        }}
      />
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Welcome to this website!
      </Typography>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        This site is
      </Typography>
    </Container>
  );
};

export default Home;
