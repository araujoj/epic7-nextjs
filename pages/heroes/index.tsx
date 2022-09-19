import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { getHeroList } from "../../src/utils/api";
import {
  Avatar,
  Box,
  ButtonBase,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  styled,
} from "@mui/material";
import Link from "next/link";
import star from "../../public/assets/images/star.png";
import { ATTRIBUTES, ROLES } from "../../src/utils/constants";

const SmallAvatar = styled(Avatar)(() => ({
  width: 25,
  height: 25,
  margin: 0,
}));

const Star = styled(Avatar)(() => ({
  width: 20,
  height: 20,
  margin: 0,
  marginRight: -5,
}));

const HeroLink = styled(Link)(() => ({
  textDecoration: "none",
}));

const Heroes: NextPage = () => {
  const { data, isLoading, isSuccess } = useQuery(["list"], getHeroList);

  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Characters
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
        This page is a WIP and will feature all the playable characters in the
        game and provide info about each one.
      </Typography>
      <Box>
        {isLoading ? (
          <Box>
            <CircularProgress />
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Loading...
            </Typography>
          </Box>
        ) : isSuccess && data ? (
          <Grid container spacing={2}>
            {data.map((hero) => (
              <Grid key={hero.id} item xs={3}>
                <HeroLink href={`/heroes/${hero._id}`}>
                  <ButtonBase>
                    <Card
                      sx={{
                        minWidth: 250,
                        minHeight: 100,
                        backgroundImage: `url(${hero.assets.image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPositionY: "30%",
                      }}
                    >
                      <Box sx={{}}>
                        <CardContent
                          sx={{
                            padding: 0,
                            minHeight: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexFlow: "row",
                              flexGrow: 1,
                              justifyContent: "space-between",
                              marginTop: 0.5,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                marginLeft: 0.5,
                              }}
                            >
                              <SmallAvatar
                                src={ROLES[hero.role].src}
                                alt={hero.role}
                              />
                              <SmallAvatar
                                src={ATTRIBUTES[hero.attribute].src}
                                alt={hero.attribute}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                mr: 1,
                              }}
                            >
                              {[...Array(hero.rarity)].map((_, index) => (
                                <Star
                                  key={index}
                                  src={star.src}
                                  variant="square"
                                />
                              ))}
                            </Box>
                          </Box>
                          <Typography
                            variant="button"
                            fontSize={18}
                            sx={{
                              marginRight: 0.5,
                              position: "absolute",
                              bottom: 0,
                              right: 0,
                              marginTop: 20,
                              fontWeight: "700",
                              "-webkit-text-stroke": "1px black",
                            }}
                          >
                            {hero.name}
                          </Typography>
                        </CardContent>
                      </Box>
                    </Card>
                  </ButtonBase>
                </HeroLink>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography color="error" variant="h4" sx={{ textAlign: "center" }}>
            An error has occured!
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Heroes;
