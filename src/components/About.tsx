import React from "react";
import { Box, Container, Paper, Stack, Typography, Chip } from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import SectionHeading from "./SectionHeading";

const About: React.FC = () => (
  <Container id="about" sx={{ py: { xs: 8, md: 12 } }}>
    <SectionHeading
      eyebrow="About"
      title="Professional summary and education"
      description="Frontend developer focused on scalable React applications, clean interfaces, and real product outcomes."
    />
    <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" } }}>
      <Paper sx={{ p: { xs: 3, md: 4 } }}>
        <Stack spacing={2.5}>
          <Chip label="What I do" sx={{ width: "fit-content" }} />
          <Typography variant="h5" fontWeight={700}>
            Software Engineering student with 4.0 CGPA and hands-on frontend experience.
          </Typography>
          <Typography color="text.secondary">
            I have 9 months of professional frontend development experience, with a strong focus on React.js, Redux Toolkit, and scalable enterprise interfaces. I enjoy building modern web applications that are responsive, maintainable, and fast.
          </Typography>
          <Typography color="text.secondary">
            I am currently pursuing BS Software Engineering at Abbottabad University of Science and Technology, with expected graduation in 2027. I also completed a React JS certification course from Udemy (Reference Number: 0004).
          </Typography>
        </Stack>
      </Paper>
      <Stack spacing={3}>
        {[
          {
            icon: <PersonRoundedIcon color="primary" />,
            title: "React and Redux",
            text: "Hands-on experience building reusable UI components and state-driven apps.",
          },
          {
            icon: <DesignServicesRoundedIcon color="primary" />,
            title: "Enterprise UI delivery",
            text: "Built dashboard interfaces and campaign tracking workflows for production use.",
          },
          {
            icon: <SpeedRoundedIcon color="primary" />,
            title: "Performance and responsiveness",
            text: "Optimized layouts and API-driven pages for better UX across devices.",
          },
        ].map((item) => (
          <Paper key={item.title} sx={{ p: 3, display: "flex", gap: 2, alignItems: "flex-start" }}>
            <Box sx={{ mt: 0.5 }}>{item.icon}</Box>
            <Box>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                {item.title}
              </Typography>
              <Typography color="text.secondary">{item.text}</Typography>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  </Container>
);

export default About;