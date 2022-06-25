import CssBaseline from "@mui/material/CssBaseline";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  Button,
  FormControlLabel,
  InputBase,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

export const ResourcesPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [radioValue, setRadioValue] = useState("Content");

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "35ch",
      },
    },
  }));

  const dummyListForDemo = [
    {
      title: "How to request funding for external training?",
      team: "Human Resources",
    },
    { title: "How to renew my ID Badge?", team: "Marketing" },
    {
      title: "How to init Java project with Accenture configurations?",
      team: "IT",
    },
    {
      title: "How to get approval for innovation projects?",
      team: "Accounting and Finance",
    },
    {
      title: "How to init Go project with Accenture configurations?",
      team: "Research and Development",
    },
    { title: "How to set up development laptop?", team: "Production" },
    { title: "How to reset password?", team: "Services" },
    {
      title: "How to init React project with Accenture configurations?",
      team: "Administration",
    },
  ];

  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        <Box className="main" style={{ paddingBottom: "12rem" }}>
          <Container component="main" maxWidth="lg">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                style={{ fontWeight: 600 }}
              >
                Knowledge Articles
              </Typography>
              <br />
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  autoFocus
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </Search>
              <br />
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e) => setRadioValue(e.target.value)}
                >
                  <FormControlLabel
                    value="Team/Department"
                    control={<Radio style={{ color: "#31004d" }} />}
                    label="Team/Department"
                    checked={radioValue === "Team/Department"}
                  />
                  <FormControlLabel
                    value="Content"
                    control={<Radio style={{ color: "#31004d" }} />}
                    label="Content"
                    checked={radioValue === "Content"}
                  />
                </RadioGroup>
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                style={{ background: "#31004d", marginBottom: "4rem" }}
                sx={{ mt: 3, mb: 2 }}
              >
                Search
              </Button>
              {radioValue === "Content" && (
                <div>
                  <Typography
                    component="h1"
                    variant="h5"
                    style={{ fontWeight: 600 }}
                  >
                    Latest knowledge
                  </Typography>

                  <ul>
                    {dummyListForDemo
                      .filter(({ title }) =>
                        title.match(new RegExp(searchValue, "i"))
                      )
                      .map(({ title }) => (
                        <li key={title}> {title} </li>
                      ))}
                  </ul>
                </div>
              )}

              {radioValue === "Team/Department" && (
                <div>
                  <Typography
                    component="h1"
                    variant="h5"
                    style={{ fontWeight: 600 }}
                  >
                    Recently viewed teams/departments
                  </Typography>
                  <ul>
                    {dummyListForDemo
                      .filter(({ team }) =>
                        team.match(new RegExp(searchValue, "i"))
                      )
                      .map(({ team }) => (
                        <li key={team}> {team} </li>
                      ))}
                  </ul>
                </div>
              )}
            </Box>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
};
