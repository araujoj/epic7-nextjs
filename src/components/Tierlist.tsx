import { Box, Card, Typography } from "@mui/material";
import { Hero } from "../utils/types";
import Icon from "./Icon";

// Temporary imports for testing
import assassin from "../../public/assets/images/roles/assassin.webp";
import knight from "../../public/assets/images/roles/knight.webp";
import mage from "../../public/assets/images/roles/mage.webp";
import manauser from "../../public/assets/images/roles/manauser.webp";
import ranger from "../../public/assets/images/roles/ranger.webp";
import warrior from "../../public/assets/images/roles/warrior.webp";

import dark from "../../public/assets/images/elements/dark.webp";
import wind from "../../public/assets/images/elements/earth.webp";
import fire from "../../public/assets/images/elements/fire.webp";
import ice from "../../public/assets/images/elements/ice.webp";
import light from "../../public/assets/images/elements/light.webp";
import { StaticImageData } from "next/image";

const Roles: { [string: string]: StaticImageData } = {
  assassin,
  knight,
  mage,
  manauser,
  ranger,
  warrior,
};

const Attributes: { [string: string]: StaticImageData } = {
  dark,
  wind,
  fire,
  ice,
  light,
};

type TierListProps = {
  list: Hero[];
  tier: string;
  color: string;
};

export default function TierList({
  list,
  tier,
  color,
}: TierListProps): JSX.Element {
  return (
    <Card
      sx={{
        margin: 2,
        display: "flex",
      }}
    >
      <Box
        sx={{
          minWidth: 150,
          minHeight: "100%",
          bgcolor: color,
          color: "common.black",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ margin: "auto" }}>
          {tier}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            alignContent: "center",
            margin: 1,
          }}
        >
          {list.map((hero, index) => (
            <Icon
              key={index}
              roleIcon={Roles[hero.role]}
              elementIcon={Attributes[hero.attribute]}
              heroIcon={hero.assets.icon}
              hero={hero}
            />
          ))}
        </Box>
      </Box>
    </Card>
  );
}
