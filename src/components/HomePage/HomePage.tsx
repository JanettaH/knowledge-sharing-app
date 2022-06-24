import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "./logo.png";
import "./HomePage.css";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit">Team 6</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" color="inherit">
        <Toolbar>
          <img src={logo} className="App-logo" alt="logo" />

          <Typography variant="h6" color="inherit" noWrap></Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome to your one-stop shop for all the knowledge in Accenture.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Ever felt lost looking for an information on an internal process?
              Blah blah blah
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" style={{ background: "#A100FF" }}>
                Search
              </Button>
              <Button
                variant="outlined"
                style={{ color: "#A100FF", borderColor: "#A100FF" }}
              >
                See all articles
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Share knowledge - earn points!
                    </Typography>
                    <Typography>
                      You will gain points for each piece of knowledge you
                      share. Collect your points & redeem them against a
                      fabulous list of prizes!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{ color: "#A100FF" }}>
                      Explore Rewards
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        {/*       <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography> */}
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Accenture - Sharing is caring
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};
