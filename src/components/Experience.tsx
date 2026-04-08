import React from "react";
import { Box, Container, Paper, Stack, Typography, Chip } from "@mui/material";
import type { ExperienceItem } from "../types";
import SectionHeading from "./SectionHeading";

const experience: ExperienceItem[] = [
  {
    id: 1,
    title: "Frontend Developer (Internship)",
    company: "PublisherHub",
    period: "3 Months",
    summary: "Contributed to frontend features for product-facing pages and internal workflows.",
    achievements: [
      "Developed UI components using React.js",
      "Integrated REST APIs into frontend modules",
      "Improved responsiveness across different screen sizes",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "PublisherHub",
    period: "6 Months",
    summary: "Worked on affiliate platform features, dashboard modules, and cross-team integrations.",
    achievements: [
      "Worked on Affiliate Network System",
      "Built dashboards and campaign tracking systems",
      "Collaborated closely with backend team",
      "Optimized UI performance and component rendering",
    ],
  },
];

const Experience: React.FC = () => (
  <Container id="experience" sx={{ py: { xs: 8, md: 12 } }}>
    <SectionHeading
      eyebrow="Experience"
      title="Work experience"
      description="Hands-on frontend development experience in React.js, API integration, dashboard systems, and performance-focused UI delivery."
    />
    <Stack spacing={3} sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          left: { xs: 12, md: 22 },
          top: 10,
          bottom: 10,
          width: 2,
          bgcolor: "primary.main",
          opacity: 0.2,
        }}
      />
      {experience.map((item) => (
        <Paper key={item.id} sx={{ p: { xs: 3, md: 4 }, position: "relative", ml: { xs: 3, md: 6 } }}>
          <Box
            sx={{
              position: "absolute",
              left: { xs: -18, md: -28 },
              top: 28,
              width: 16,
              height: 16,
              borderRadius: "50%",
              bgcolor: "primary.main",
              boxShadow: "0 0 0 6px rgba(15, 118, 110, 0.12)",
            }}
          />
          <Stack spacing={1.5}>
            <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
              <Box>
                <Typography variant="h5" fontWeight={700}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.company}</Typography>
              </Box>
              <Chip label={item.period} variant="outlined" />
            </Box>
            <Typography color="text.secondary">{item.summary}</Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
              {item.achievements.map((achievement) => (
                <Box component="li" key={achievement} sx={{ mb: 1 }}>
                  {achievement}
                </Box>
              ))}
            </Box>
          </Stack>
        </Paper>
      ))}
    </Stack>
  </Container>
);

export default Experience;