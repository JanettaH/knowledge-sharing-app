import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./HomePage.css";
import NavBar from "../NavBar/NavBar";
import grid1picture from "../../assets/homescreen-grid-1.jpg";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PeopleIcon from '@mui/icons-material/People';

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
      <NavBar/>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >


          <Grid container spacing={2} alignItems="center" style={{"paddingBottom" : "100px"}}>
            <Grid item xs={6}>
              <Container maxWidth="sm" className="GridContainer">
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
            </Grid>
            <Grid item xs={6}>
            <CardMedia
                    component="img"
                    image={grid1picture}
                    alt="people collaborating"
                  />
            </Grid>
          </Grid>
          
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs>
              <div className="icon">
                <AccessTimeIcon fontSize="large"></AccessTimeIcon>
              </div> 
              <Typography
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
                >Time Saving
                </Typography>
                <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
                > sdrhdfhdfgdfgdfgdfgdfg

                </Typography>
            </Grid>
            <Grid item xs>
              <div className="icon">
                <CelebrationIcon fontSize="large"></CelebrationIcon>
              </div>
              <Typography
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
                 >Easy to implement
                  </Typography>
                  <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
                > sdrhdfhdfgdfgdfgdfgdfg

                </Typography>
            </Grid>
            <Grid item xs>
              <div className="icon">
                <PeopleIcon fontSize="large"></PeopleIcon>
              </div>
              <Typography
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
              >Inclusive
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
                > sdrhdfhdfgdfgdfgdfgdfg

                </Typography>
            </Grid>
          </Grid>
          {/* <Container maxWidth="sm">
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

          </Container> */}






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
