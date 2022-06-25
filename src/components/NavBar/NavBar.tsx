import AppBar from "@mui/material/AppBar";
 import Toolbar from "@mui/material/Toolbar";
 import logo from "../../assets/logo.png"
 import Link from "@mui/material/Link";
 import "./NavBar.css";

 function NavBar() {

     return (
         <AppBar position="relative" color="inherit">
         <Toolbar>
           <img src={logo} className="App-logo" alt="logo" />
           <div className="NavLinks"> 
               <Link href="/" className="Links" underline="none" color="black">Home</Link>
               <Link href="/tools" className="Links" underline="none" color="black">Tools</Link>
               <Link href="/rewards" className="Links" underline="none" color="black">Rewards</Link>
               <Link href="/resources" className="Links" underline="none" color="black">Resources</Link>
               <Link href="/leaderboard" className="Links" underline="none" color="black">Leaderboard</Link>
           </div>
         </Toolbar>
       </AppBar>
     )
 }

export default NavBar;
