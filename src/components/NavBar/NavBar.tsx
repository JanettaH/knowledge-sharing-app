import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/logo.png";
import Link from "@mui/material/Link";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <AppBar position="relative" color="inherit">
      <Toolbar>
        <Link href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <div className="NavLinks">
          <Link href="/" className="Links" underline="none" color="black">
            Home
          </Link>
          <Link href="/tools" className="Links" underline="none" color="black">
            Tools
          </Link>
          <Link
            href="/rewards"
            className="Links"
            underline="none"
            color="black"
          >
            Rewards
          </Link>
          <Link
            href="/resources"
            className="Links"
            underline="none"
            color="black"
          >
            Resources
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
