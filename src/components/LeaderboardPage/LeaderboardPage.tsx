import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../HomePage/HomePage.css";
import NavBar from "../NavBar/NavBar";
import {DataGrid} from "@mui/x-data-grid";

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

function Leaderboard() {

    const columns = [
        { field: '_id', hide:true},
        { field: 'points', headerName: "Points", flex: 1},
        { field: 'name', headerName: "Name", flex: 1},
        { field: 'email', headerName: "Email", flex: 1}
    ]

    const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    // const updateData = async () => {
        fetch("/employees")
      .then((res) => res.json())
      .then((data) => setData(data));
    // }
    // updateData();
  }, []);



    return (
        <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar/>
      <main>
        {/* Hero unit */}
        <Box className="main">
          <Grid container spacing={2} alignItems="center" style={{"paddingBottom" : "50px"}}>
            <Grid item xs>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Leaderboard 
                </Typography>
                
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                Life is more fun with a little competition!
                Check out how Accenture Knowledge Wizards are doing - can you beat the #1 score?
                </Typography>
             </Container>
            </Grid>
          </Grid>

          <Box className="leaderboard">
            <DataGrid initialState={{
                    sorting: {
                        sortModel: [{field: 'points', sort: 'desc'}]
                    }
                }} autoHeight sx={{height: "500px", marginLeft: "30px", marginRight: "30px"}} rows={data} columns={columns} getRowId={(row) => row._id} />
          </Box>

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
    )
}

export default Leaderboard;
