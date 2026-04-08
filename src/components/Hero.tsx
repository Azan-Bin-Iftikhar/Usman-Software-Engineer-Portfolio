import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  Chip,
  Avatar,
  Paper,
} from "@mui/material";
import Usman from "../assets/Usman.jpeg";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const Hero: React.FC = () => <HeroContent />;

const HeroContent: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "auto", md: "calc(100vh - 76px)" },
        py: { xs: 10, md: 14 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 20%, rgba(15, 118, 110, 0.18), transparent 24%), radial-gradient(circle at 80% 30%, rgba(217, 119, 6, 0.18), transparent 22%), radial-gradient(circle at 60% 80%, rgba(15, 118, 110, 0.08), transparent 20%)",
          pointerEvents: "none",
        }}
      />
      <Container sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" },
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Stack spacing={3}>
              <Chip
                label="Frontend Developer"
                color="primary"
                sx={{ width: "fit-content" }}
              />
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "3rem", md: "4.8rem" },
                    lineHeight: 0.95,
                  }}
                >
                  Frontend Developer
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mt: 3,
                    maxWidth: 720,
                    color: "text.secondary",
                    fontWeight: 500,
                  }}
                >
                  I am USMAN, a Software Engineering student with a 4.0 CGPA and 9 months of frontend development experience building modern, high-performance web interfaces.
                </Typography>
              </Box>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  href="#projects"
                  endIcon={<LaunchRoundedIcon />}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#contact"
                  endIcon={<ArrowDownwardRoundedIcon />}
                >
                  Start a Project
                </Button>
              </Stack>
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                <Button
                  startIcon={<GitHubIcon />}
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  variant="text"
                >
                  GitHub
                </Button>
                <Button
                  startIcon={<LinkedInIcon />}
                  href="https://linkedin.com/in/usman-tanoli-49435a325"
                  target="_blank"
                  rel="noreferrer"
                  variant="text"
                >
                  LinkedIn
                </Button>
                <Button
                  startIcon={<MailOutlineRoundedIcon />}
                  href="mailto:tanoliusman2919@gmail.com"
                  variant="text"
                >
                  Email
                </Button>
              </Stack>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Paper
              elevation={8}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 6,
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, rgba(9, 18, 33, 0.94), rgba(15, 23, 42, 0.72))"
                    : "linear-gradient(145deg, rgba(255,255,255,0.88), rgba(255,255,255,0.54))",
              }}
            >
              <Stack spacing={3} alignItems="center" textAlign="center">
                <Avatar
                  src={Usman}
                  sizes="39"
                  alt="Usman Tanoli"
                  sx={{
                    width: 160,
                    height: 160,
                    border: "6px solid rgba(15, 118, 110, 0.18)",
                  }}
                />
                <Box>
                  <Typography variant="h5" fontWeight={700}>
                    Usman Tanoli
                  </Typography>
                  <Typography color="text.secondary">
                    React Developer | UI Craft | Product Thinking
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <Paper sx={{ p: 2 }}>
                    <Typography
                      variant="h4"
                      fontWeight={700}
                      color="primary.main"
                    >
                      9
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      months professional experience
                    </Typography>
                  </Paper>
                  <Paper sx={{ p: 2 }}>
                    <Typography
                      variant="h4"
                      fontWeight={700}
                      color="secondary.main"
                    >
                      4.0
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      CGPA in Software Engineering
                    </Typography>
                  </Paper>
                </Box>
              </Stack>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
