import React from "react";
import LoginForm from "../../components/login";

import Iconify from "../../components/iconify/Iconify";
import {
  Link,
  Container,
  Typography,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import Layout from "../../layouts/auth/Layout";

const LoginPage = () => {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Login to you account
        </Typography>

        <Typography variant="body2" sx={{ mb: 5 }}>
          Don’t have an account? {""}
          <Link variant="subtitle2">Get started</Link>
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button fullWidth size="large" color="inherit" variant="outlined">
            <Iconify
              icon="eva:google-fill"
              color="primary"
              width={22}
              height={22}
            />
          </Button>

          {/* <Button fullWidth size="large" color="inherit" variant="outlined">
            <Iconify
              icon="eva:facebook-fill"
              color="#1877F2"
              width={22}
              height={22}
            />
          </Button>

          <Button fullWidth size="large" color="inherit" variant="outlined">
            <Iconify
              icon="eva:twitter-fill"
              color="#1C9CEA"
              width={22}
              height={22}
            />
          </Button> */}
        </Stack>

        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            OR
          </Typography>
        </Divider>

        <LoginForm />
      </Container>
    </Layout>
  );
};

export default LoginPage;
