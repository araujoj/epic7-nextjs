import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { getHeroInfo } from "../../src/utils/api";

const Hero: NextPage = () => {
  const router = useRouter();
  const id = router.pathname;
  const { data, isLoading, isSuccess } = useQuery(["info"], () =>
    getHeroInfo(id)
  );

  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Character
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          textAlign: "center",
          fontStyle: "italic",
          color: "text.secondary",
          mb: 3,
        }}
      >
        This page is a WIP and will feature a full character page.
      </Typography>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <CircularProgress />
          <Typography variant="h4" sx={{ textAlign: "center", ml: 3 }}>
            Loading...
          </Typography>
        </Box>
      ) : isSuccess && data ? (
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          {data.name}
        </Typography>
      ) : (
        <Typography color="error" variant="h4" sx={{ textAlign: "center" }}>
          An error has occured!
        </Typography>
      )}
    </Container>
  );
};

export default Hero;
