import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Iconify from "../iconify/Iconify";
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    console.log("navigate");
    //   navigate('/dashboard', { replace: true });
  };
  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <FormControlLabel
          control={<Checkbox name="remember" />}
          label="Remember me"
        />

        <Link variant="subtitle2" underline="hover" sx={{ cursor: "pointer" }}>
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Sign In
      </LoadingButton>
    </>
  );
};

export default LoginForm;
