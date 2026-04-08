import React from "react";
import { Container, Typography, LinearProgress, Box, Chip, Stack, Paper } from "@mui/material";
import type { Skill } from "../types";

const skills: Skill[] = [
  { name: "React.js", level: 92 },
  { name: "JavaScript", level: 88 },
  { name: "HTML / CSS", level: 90 },
  { name: "Tailwind CSS", level: 84 },
  { name: "Material UI", level: 90 },
  { name: "Redux Toolkit", level: 86 },
  { name: "Node.js", level: 76 },
  { name: "Nest.js", level: 70 },
  { name: "MySQL / PostgreSQL", level: 74 },
  { name: "Git & GitHub", level: 85 },
  { name: "JIRA", level: 72 },
  { name: "Swagger", level: 74 },
];

const Skills: React.FC = () => (
  <Container id="skills" sx={{ py: { xs: 8, md: 12 } }}>
    <Stack spacing={1.5} alignItems="center" sx={{ mb: 6, textAlign: "center" }}>
      <Chip label="Capabilities" color="secondary" />
      <Typography variant="h3">Skills</Typography>
      <Typography sx={{ maxWidth: 680, color: "text.secondary" }}>
        Core frontend stack and collaboration tools used to ship production-ready applications.
      </Typography>
    </Stack>
    <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" } }}>
      {skills.map((skill, idx) => (
        <Paper key={idx} sx={{ p: 2.5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography fontWeight={700}>{skill.name}</Typography>
            <Typography color="text.secondary">{skill.level}%</Typography>
          </Box>
          <LinearProgress variant="determinate" value={skill.level} sx={{ height: 10, borderRadius: 999 }} />
        </Paper>
      ))}
    </Box>
  </Container>
);

export default Skills;
