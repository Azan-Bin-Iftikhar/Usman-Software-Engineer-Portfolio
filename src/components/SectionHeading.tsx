import React from "react";
import { Box, Chip, Typography } from "@mui/material";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, description }) => (
  <Box sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: 6 }}>
    <Chip label={eyebrow} color="primary" sx={{ mb: 2 }} />
    <Typography variant="h3" gutterBottom>
      {title}
    </Typography>
    <Typography sx={{ color: "text.secondary" }}>{description}</Typography>
  </Box>
);

export default SectionHeading;