import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../HomePage/HomePage.css";
import toolsGrid1 from "../../assets/toolspage-grid1.jpg";
import toolsGrid2 from "../../assets/toolspage-grid2.jpg";
import toolsGrid3 from "../../assets/toolspage-grid3.jpg";
import toolsGrid4 from "../../assets/toolspage-grid4.jpg";

const theme = createTheme();

function ToolsPage() {
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
            <Grid item xs={6}>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                  style={{ fontWeight: 600 }}
                >
                  Explore different tools to share your knowledge with your
                  peers
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  We know everyone's got their own preferred style of learning
                  and sharing knowledge, therefore, we've got tools to suit
                  everyone's style!
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                image={toolsGrid1}
                alt="women on zoom"
                className="img"
              />
            </Grid>
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
                image={toolsGrid4}
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
                  style={{ fontWeight: 600 }}
                >
                  Note Taking
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  At Accenture, we offer you a selection of note-taking tools to
                  suit your needs!
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
                  Screen/Audio Recording
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Strapped for time & don't fancy typing up your notes? We've
                  got you! Share an audio or video snippets of your knowledge.
                  Here are some resources: Camtasia, QuickTime Player, etc.
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={6}>
              <CardMedia component="img" image={toolsGrid2} alt="recording" />
            </Grid>

            <Grid
              container
              spacing={2}
              alignItems="center"
              style={{ paddingTop: "100px" }}
            >
              <Grid item xs={6}>
                <CardMedia component="img" image={toolsGrid3} alt="robot" />
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
                    Automation
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
                    Did you know that there are various MS Teams plugins that
                    can help you create, share & update knowledge articles
                    easily? Here is a few: blah, blah.
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

export default ToolsPage;
