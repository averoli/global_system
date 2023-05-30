import React from "react";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
        height: "100vh",
      }}
    >
      <Grid container sx={{ flex: "1 1 auto" }}>
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: "center",
            backgroundImage: `url(assets/auth-illustration.png)`,
            backgroundSize: "cover",
            color: "white",
            display: "flex",
            justifyContent: 'center',
            "& img": {
              maxWidth: "100%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "58px",
              lineHeight: "81px",
              mb: 1,
            }}
          >
            LOGO
          </Typography>
          <Typography
            align="left"
            color="inherit"
            sx={{
              fontSize: "96px",
              lineHeight: "144px",
              mb: 1,
            }}
            variant="h1"
          >
            Get your queris solved.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: "fixed",
              top: 0,
              width: "100%",
            }}
          >
            <Box
              href="/"
              sx={{
                display: "inline-flex",
                height: 32,
                width: 32,
              }}
            ></Box>
          </Box>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
