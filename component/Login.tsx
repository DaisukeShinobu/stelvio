import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithGoogle } from "../auth/GoogleAuthProvider";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../firebase";



function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        stelvio inc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      user && router.push("/home");
    });
    return () => unSub();
  }, [router]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ログイン
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Button
                onClick={signInWithGoogle}
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 0, mb: 2 }}
              >
                <GoogleIcon />　 Googleでログイン
              </Button>
              ─────────　または　─────────
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="メールアドレスを入力してください"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="パスワードを入力してください"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="パスワードを表示する"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ログインする
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  パスワードをお忘れの場合
                </Link>
              </Grid>
            </Grid>
            <Grid item>
                <Link href="#" variant="body2">
                  {"アカウントを新規作成する場合はこちら"}
                </Link>
              </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}