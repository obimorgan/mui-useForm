import { Input } from '@material-ui/core';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignup } from '../interface';

const theme = createTheme()

export const SignUp: React.FC = () => {
    const { register, control, handleSubmit, watch, formState: { errors } } = useForm<ISignup>()
    const onSubmit: SubmitHandler<ISignup> = async (data) => {
        try {
            let response = await fetch(`http://localhost:3001/user/register`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'content-type': 'application/json'}
            })
            if (response.ok) {
                console.log("Registered new user!")
            }
                else { throw new Error("Registrtation failed")}
            } catch (error) {
                console.log(error)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <CssBaseline>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                    }}>
                        <Typography component='h1' variant='h3'>
                            Signup
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{mt: 3}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Input
                                        required fullWidth
                                        margin="dense"
                                        id="firstname"
                                        placeholder="Firstname"
                                        autoComplete="firstname"
                                        autoFocus
                                        {...register('first_name', {required: true})}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Input
                                        required fullWidth
                                        margin="dense"
                                        id="surname"
                                        placeholder="Surname"
                                        autoComplete="surname"
                                        autoFocus
                                        {...register('last_name', {required: true})}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Input
                                        required fullWidth
                                        id="email"
                                        placeholder="Email Address"
                                        autoComplete="email"
                                        defaultValue="john@smith.com"
                                        {...register('email', {required: true})}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Input
                                        required fullWidth
                                        placeholder="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        {...register('password', {required: true})}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/signin" variant="body2">
                                   Dont't have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </CssBaseline>
            </Container>
        </ThemeProvider>
    )
}
