import {
  AppBar,
  Box,
  Container,
  Link as MuiLink,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    console.log("click");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ paddingBlock: "10px" }}>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ flexGrow: 1 }}
          >
            <MuiLink
              component={RouterLink}
              to="/"
              color="inherit"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="h6">Quiz app</Typography>
            </MuiLink>
            <Box>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={logoutHandler}>Log out</MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Container>
      </AppBar>
    </Box>
  );
};
