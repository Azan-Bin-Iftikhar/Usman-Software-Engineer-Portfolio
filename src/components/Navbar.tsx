import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  Box,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as ScrollLink } from "react-scroll";
import logoImage from "../assets/Usman Tanoli logo with laptop icon.png";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const theme = useTheme();
  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        backdropFilter: "blur(16px)",
        borderBottom: 1,
        borderColor: "divider",
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(7, 17, 31, 0.72)"
            : "rgba(255,255,255,0.72)",
      }}
    >
      <Toolbar sx={{ minHeight: 76 }}>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: -1, flexGrow: 1 }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 0.3 }}>
            Usman Tanoli
          </Typography>
          <Box
            component="img"
            src={logoImage}
            alt="Usman Tanoli logo"
            sx={{ width: 50, height: 50, objectFit: "contain", mb: 1.5 }}
          />
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {sections.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth
              duration={600}
              offset={-88}
              spy
            >
              <Button
                color="inherit"
                sx={{
                  fontWeight: 600,
                  color: "text.secondary",
                  textTransform: "capitalize",
                }}
              >
                {section}
              </Button>
            </ScrollLink>
          ))}
        </Box>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
