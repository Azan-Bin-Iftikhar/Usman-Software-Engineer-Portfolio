import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Link as ScrollLink } from "react-scroll";

const Footer: React.FC = () => (
  <Box sx={{ py: 4, borderTop: 1, borderColor: "divider" }}>
    <Container>
      <Stack spacing={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight={700}>
              Usman Tanoli
            </Typography>
            <Typography color="text.secondary">
              Frontend developer building scalable and performance-focused web
              interfaces.
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton
              href="https://github.com/Azan-Bin-Iftikhar"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/usman-tanoli-49435a325"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton href="mailto:tanoliusman2919@gmail.com">
              <EmailIcon />
            </IconButton>
          </Stack>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography color="text.secondary">
            © 2026 Usman Tanoli. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {[
              "home",
              "about",
              "skills",
              "projects",
              "experience",
              "contact",
            ].map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth
                duration={600}
                offset={-88}
              >
                <Button size="small" color="inherit">
                  {section}
                </Button>
              </ScrollLink>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
