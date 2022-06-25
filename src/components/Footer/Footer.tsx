import { Box, Link, Typography } from "@mui/material";
export const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 3 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Accenture - Sharing is caring
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit">Team 6</Link> {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};
