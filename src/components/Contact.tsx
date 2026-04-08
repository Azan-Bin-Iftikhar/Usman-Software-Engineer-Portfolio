import React from "react";
import { Container, Typography, TextField, Button, Box, Paper, Stack, Chip } from "@mui/material";
import { useForm, type SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import SectionHeading from "./SectionHeading";

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormInputs>();
  const contactEmail =
    (import.meta.env.VITE_CONTACT_RECIPIENT_EMAIL as string | undefined) ||
    "tanoliusman2919@gmail.com";

  const buildTemplateParams = (data: ContactFormInputs) => ({
    ...data,
    to_email: contactEmail,
  });

  const sendWithMailtoFallback = (data: ContactFormInputs) => {
    const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey =
      (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined) ||
      (import.meta.env.VITE_EMAILJS_USER_ID as string | undefined);

    if (!serviceId || !templateId || !publicKey) {
      sendWithMailtoFallback(data);
      reset();
      return;
    }

    const templateParams = buildTemplateParams(data);

    emailjs
      .send(serviceId, templateId, templateParams as unknown as Record<string, unknown>, publicKey)
      .then(() => {
        alert("Message sent!");
        reset();
      })
      .catch(() => alert("Could not send the message right now."));
  };

  return (
    <Container id="contact" sx={{ py: { xs: 8, md: 12 } }}>
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something useful"
        description="For frontend roles, freelance opportunities, or project collaboration, you can reach me directly using the details below."
      />
      <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", lg: "0.9fr 1.1fr" } }}>
        <Stack spacing={2}>
          {[
            ["Phone", "+92 342 5611227"],
            ["Email", contactEmail],
            ["LinkedIn", "linkedin.com/in/usman-tanoli-49435a325"],
            ["Location", "Remote / Pakistan"],
            ["Availability", "Open for freelance and full-time roles"],
          ].map(([label, value]) => (
            <Paper key={label} sx={{ p: 3 }}>
              <Chip label={label} size="small" sx={{ mb: 1 }} />
              <Typography variant="h6" fontWeight={700}>
                {value}
              </Typography>
            </Paper>
          ))}
        </Stack>
        <Paper sx={{ p: { xs: 3, md: 4 } }}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField label="Name" {...register("name")} required fullWidth />
            <TextField label="Email" type="email" {...register("email")} required fullWidth />
            <TextField
              label="Message"
              multiline
              rows={5}
              {...register("message")}
              required
              fullWidth
            />
            <Button type="submit" variant="contained" size="large">
              Send Message
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Contact;
