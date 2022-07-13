import * as React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ColorModeContext from "../../contexts/ColorModeContext";

export default function DarkModeButton({ open }) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
      }}
      onClick={colorMode.toggleColorMode}
    >
      <ListItemIcon
        sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center" }}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </ListItemIcon>
      <ListItemText
        primary={theme.palette.mode === "dark" ? "Dark mode" : "Light mode"}
        sx={{ opacity: open ? 1 : 0 }}
      />
    </ListItemButton>
  );
}
