import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, CircularProgress } from "@mui/material";
import { COLORS, PAGES, TIERS } from "../../src/utils/constants";
import ActionCard from "../../src/components/ActionCard";
import TierList from "../../src/components/Tierlist";
import { useQuery } from "@tanstack/react-query";
import { getTierlist } from "../../src/utils/api";
import { useState } from "react";

const Tierlist: NextPage = () => {
  const [tierlist, setTierlist] = useState<string>("");
  const { data, isLoading, isSuccess } = useQuery(["tierlist"], () =>
    getTierlist(tierlist)
  );

  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Tier List
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
        This page is a WIP and will feature a tier list of the best playable
        characters for each aspect of the game.
      </Typography>
      {isLoading ? (
        <Box>
          <CircularProgress />
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Loading...
          </Typography>
        </Box>
      ) : isSuccess && data ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
            }}
          >
            {PAGES.map((page, index) => (
              <ActionCard
                key={index}
                text={page.title}
                url={"tierlist/" + page.path}
              />
            ))}
          </Box>
          <Box>
            {TIERS.map((tier, index) => (
              <TierList
                key={index}
                list={data.slice(0, 10)}
                tier={tier}
                color={COLORS[index]}
              />
            ))}
          </Box>
        </>
      ) : (
        <Typography color="error" variant="h4" sx={{ textAlign: "center" }}>
          An error has occured!
        </Typography>
      )}
    </Container>
  );
};

export default Tierlist;
