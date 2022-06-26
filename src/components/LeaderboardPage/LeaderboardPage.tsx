import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../HomePage/HomePage.css";
import { DataGrid } from "@mui/x-data-grid";

const theme = createTheme();

function Leaderboard() {
  const columns = [
    { field: "_id", hide: true },
    { field: "points", headerName: "Points", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
  ];

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://knowledge-app-backend.herokuapp.com/employees")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box className="main" style={{ paddingBottom: "4rem" }}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            style={{ paddingBottom: "50px" }}
          >
            <Grid item xs>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  style={{ fontWeight: 600, paddingTop: "3rem" }}
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
                  Life is more fun with a little competition! Check out how
                  Accenture Knowledge Wizards are doing - can you beat the #1
                  score?
                </Typography>
              </Container>
            </Grid>
          </Grid>
          <Container component="main" maxWidth="lg">
            <Box className="leaderboard">
              <DataGrid
                initialState={{
                  sorting: {
                    sortModel: [{ field: "points", sort: "desc" }],
                  },
                }}
                autoHeight
                sx={{
                  height: "500px",
                  marginLeft: "30px",
                  marginRight: "30px",
                }}
                rows={data}
                columns={columns}
                getRowId={(row) => row._id}
              />
            </Box>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default Leaderboard;
