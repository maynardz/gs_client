import React from "react";
import "./Appbar.scss";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import Logo from "../../../assets/brand_assets/Logos/RGB/White/PNG/GreeneStreet_WordmarkTagline_RGB_White.png";

// const pages = [ 'About', 'Shop', 'Locations', 'Jobs', 'Become a Patient' ]

const Appbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    console.log(event.currentTarget);
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="static">
        <Container maxWidth="none">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img className="nav-logo" src={Logo} />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem>
                  <Typography textAlign="center">
                    <Link to="/about" style={{textDecoration: 'none', color: '#425030'}}>About</Link>
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    <Link to="/shop/wv/crosslanes" style={{textDecoration: 'none', color: '#425030'}}>Shop - Cross Lanes</Link>
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    <Link to="/shop/wv/kanawha" style={{textDecoration: 'none', color: '#425030'}}>Shop - Kanawha</Link>
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    <Link to="/locations" style={{textDecoration: 'none', color: '#425030'}}>Locations</Link>
                  </Typography>
                </MenuItem>
                {/* <MenuItem>
                  <Typography textAlign="center">
                    <Link to="/jobs" style={{textDecoration: 'none', color: '#425030'}}>Jobs</Link>
                  </Typography>
                </MenuItem> */}
                <MenuItem>
                  <Typography textAlign="center">
                    <Link to="/become-a-patient" style={{textDecoration: 'none', color: '#425030'}}>Become a Patient</Link>
                  </Typography>
                </MenuItem>
                
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img className="nav-logo" src={Logo} />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", mb: ".5em" }}
                component="a"
                href="/about"
              >
                <Typography
                  textAlign="center"
                  sx={{ fontFamily: "untitledSans_regular" }}
                >
                  About
                </Typography>
              </Button>

              <Box sx={{ flexGrow: 0 }}>
                <Button
                  onClick={handleOpenUserMenu}
                  sx={{ my: 2, color: "white" }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: "untitledSans_regular" }}
                  >
                    Shop
                  </Typography>
                </Button>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      paddingLeft: ".5em",
                      fontFamily: "untitledSans_regular",
                    }}
                  >
                    West Virginia
                  </p>
                  <MenuItem
                    onClick={handleCloseUserMenu}
                    component="a"
                    href="/shop/wv/crosslanes"
                  >
                    <Typography textAlign="center">Cross Lanes</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseUserMenu}
                    component="a"
                    href="/shop/wv/kanawha"
                  >
                    <Typography textAlign="center">Kanawha</Typography>
                  </MenuItem>
                </Menu>
              </Box>

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                component="a"
                href="/locations"
              >
                <Typography
                  textAlign="center"
                  sx={{ fontFamily: "untitledSans_regular" }}
                >
                  Locations
                </Typography>
              </Button>

              {/* <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                component="a"
                href="/jobs"
              >
                <Typography
                  textAlign="center"
                  sx={{ fontFamily: "untitledSans_regular" }}
                >
                  Jobs
                </Typography>
              </Button> */}

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                component="a"
                href="/become-a-patient"
              >
                <Typography
                  textAlign="center"
                  sx={{ fontFamily: "untitledSans_regular" }}
                >
                  Become a Patient
                </Typography>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Appbar;
