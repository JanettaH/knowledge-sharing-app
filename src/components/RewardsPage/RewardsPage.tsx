import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../HomePage/HomePage.css";
import rewardsGrid1 from "../../assets/rewardspage-grid1.jpg";
import rewardsGrid2 from "../../assets/rewardspage-grid2.jpg";
import rewardsGrid3 from "../../assets/rewardspage-grid3.jpg";

const theme = createTheme();

function RewardsPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box className="main">
          <Grid
            container
            spacing={2}
            alignItems="center"
            style={{ paddingBottom: "100px" }}
          >
            <Grid item xs>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                  style={{ paddingTop: "3rem", fontWeight: 600 }}
                >
                  Rewards
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  You will be awarded 10 points for every knowledge article you
                  share. The points can be redeemed against the below items.
                </Typography>
              </Container>
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <CardMedia component="img" image={rewardsGrid1} alt="coffee" />
            </Grid>
            <Grid item xs={6}>
              <Container maxWidth="sm" className="GridContainer">
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                  style={{ fontWeight: 600 }}
                >
                  50 points
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Coffee is on us! Contact your supervisor for the voucher.
                </Typography>
              </Container>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            alignItems="center"
            style={{ paddingTop: "100px" }}
          >
            <Grid item xs={6}>
              <Container maxWidth="sm" className="GridContainer">
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                  style={{ fontWeight: 600 }}
                >
                  150 points
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Ever had burning questions for senior management? Well, now
                  it's your time to shine - schedule a 1-on-1 with a senior
                  partner of your choice.
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                image={rewardsGrid2}
                alt="women talking"
              />
            </Grid>

            <Grid
              container
              spacing={2}
              alignItems="center"
              style={{ paddingTop: "100px" }}
            >
              <Grid item xs={6}>
                <CardMedia
                  component="img"
                  image={rewardsGrid3}
                  alt="beach vacation"
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
                    style={{ fontWeight: 600 }}
                  >
                    450 points
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
                    Extra day vacation! And who wouldn't like that?!
                  </Typography>
                </Container>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default RewardsPage;
