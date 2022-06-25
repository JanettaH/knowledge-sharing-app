import React from "react";
import Button from "@mui/material/Button";
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
import grid2picture from "../../assets/homescreen-grid-2.jpg";
import grid3picture from "../../assets/homescreen-grid-3.jpg";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PeopleIcon from '@mui/icons-material/People';
import { TextField } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit">Team 6</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar/>
      <main>
        {/* Hero unit */}
        <Box className="main">
          <Grid container spacing={2} alignItems="center" style={{"paddingBottom" : "100px"}}>
            <Grid item xs={6}>
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
                  <Button variant="contained" style={{ background: "#31004d" }}>
                    Search
                  </Button>
                  <Button
                    variant="outlined"
                    style={{ color: "#31004d", borderColor: "#31004d" }}
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
                    className="img"
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

          <Grid container spacing={2} alignItems="center" style={{"paddingTop" : "100px"}}>
          <Grid item xs={6}>
            <CardMedia
                    component="img"
                    image={grid2picture}
                    alt="people cheering"
                  />
            </Grid>
            <Grid item xs={6}>
              <Container maxWidth="sm" className="GridContainer">
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Share knowledge - earn points!
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  You will gain points for each piece of knowledge you
                      share. Collect your points & redeem them against a
                      fabulous list of prizes!
                </Typography>

                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button variant="contained" style={{ background: "#31004d" }}>
                    Explore Rewards
                  </Button>
                </Stack>
             </Container>
            </Grid>
            
          </Grid>

          <Grid container spacing={2} alignItems="center" style={{"paddingTop" : "100px"}}>
          
            <Grid item xs={6}>
              <Container maxWidth="sm" className="GridContainer">
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Sharing knowledge has never been easier!
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  We have tested & identified the best tools for efficient knowledge sharing, so you can easily get up and running!
                </Typography>

                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button variant="contained" style={{ background: "#31004d" }}>
                    Explore Tools
                  </Button>
                </Stack>
             </Container>
            </Grid>
            <Grid item xs={6}>
            <CardMedia
                    component="img"
                    image={grid3picture}
                    alt="people sharing knowledge"
                  />
            </Grid>
          </Grid>
        </Box>

        <Box className="feedback-form">
            <Typography
             variant="h4"
             align="center"
             color="text.primary"
             paragraph>Got Feedback?</Typography>
            <Typography
             variant="h6"
             align="center"
             color="text.secondary"
             paragraph>We'd love to hear it!</Typography>
            <Grid container spacing={6} className="form-fields">
              <Grid item>
                <TextField id="standard-basic" label="Name" variant="standard" />
              </Grid>
              <Grid item>
                <TextField id="standard-basic" label="Email" variant="standard" />
              </Grid>
            </Grid>
            <Grid container className="form-fields" style={{"paddingTop" : "25px"}}>
              <Grid item>
              <TextField id="standard-basic" label="Your Message" variant="standard" multiline={true}/>
              </Grid>
            </Grid>
            <Button variant="contained" style={{ background: "#31004d", marginTop: "20px" }}>Submit</Button>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 3 }} component="footer">
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
