import { useContext } from "react";
import { IconButton, SxProps, Theme } from "@mui/material";
import {//hehe
  Star as StarIcon,
  StarBorderOutlined as StarOutlinedIcon,
} from "@mui/icons-material";
import CollectionContext from "../../CollectionContext";

interface RouteStarButtonProps {
  routeId: string;
}

const RouteStarButton = ({ routeId }: RouteStarButtonProps) => {
  const { savedEtas, setCollectionDrawerRoute } = useContext(CollectionContext);

  return (
    <IconButton
      sx={buttonSx}
      size="small"
      onClick={() => {
        const targetRouteId = `${routeId.toUpperCase()}`;
        setCollectionDrawerRoute(targetRouteId);
      }}
    >
      {savedEtas.includes(routeId) ? <StarIcon /> : <StarOutlinedIcon />}
    </IconButton>
  );
};

export default RouteStarButton;

const buttonSx: SxProps<Theme> = {
  color: (theme) =>
    theme.palette.getContrastText(theme.palette.background.default),
  flexDirection: "column",
  justifyContent: "center",
  "& > .MuiButton-label": {
    flexDirection: "column",
    justifyContent: "center",
  },
  "& > .MuiButton-startIcon": {
    margin: 0,
  },
};
