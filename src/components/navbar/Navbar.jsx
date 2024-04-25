import "./navbar.css"
import { AppBar, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Header = styled(AppBar)`
  background: #000
`;

const Tabs = styled(Link)`
  font-size: 20px;
  margin-right: 25px;
  color: #fff;
  text-decoration: none
`

const Navbar = () => {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">MERN Stack</Tabs>
          <Tabs to="/allusers">All Users</Tabs>
          <Tabs to="/addusers">Add Users</Tabs>
        </Toolbar>
      </Header>
    </>
  );
};

export default Navbar;
