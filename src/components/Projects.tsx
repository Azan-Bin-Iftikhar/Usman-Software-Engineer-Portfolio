import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CardActions,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import { projects } from "../data/project";

const Projects: React.FC = () => (
  <Container id="projects" sx={{ py: { xs: 8, md: 12 } }}>
    <Stack spacing={1.5} alignItems="center" sx={{ mb: 6, textAlign: "center" }}>
      <Chip label="Selected Work" color="primary" />
      <Typography variant="h3">Projects</Typography>
      <Typography sx={{ maxWidth: 700, color: "text.secondary" }}>
        A concise set of product-focused builds that show UI craft, responsive layouts, and practical component structure.
      </Typography>
    </Stack>
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" },
      }}
    >
      {projects.map((project) => (
        <motion.div key={project.id} whileHover={{ y: -10 }} transition={{ duration: 0.25 }}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <CardMedia component="img" height="220" image={project.image} alt={project.title} />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom fontWeight={700}>
                {project.title}
              </Typography>
              <Typography color="text.secondary">{project.description}</Typography>
              <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                {project.tech.map((tech) => (
                  <Chip key={tech} label={tech} size="small" />
                ))}
              </Box>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button size="small" href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </Button>
              <Button size="small" href={project.demo} target="_blank" rel="noreferrer">
                View
              </Button>
            </CardActions>
          </Card>
        </motion.div>
      ))}
    </Box>
  </Container>
);

export default Projects;
