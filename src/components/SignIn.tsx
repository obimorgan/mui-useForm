import { Input } from '@material-ui/core';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILogin } from '../interface';
import { useNavigate } from 'react-router-dom'

const theme = createTheme()

export const SignIn: React.FC = () => {
  const navigate = useNavigate()
  const { register, control, handleSubmit, watch, formState: { errors } } = useForm<ILogin>()
  const onSubmit: SubmitHandler<ILogin> = async (data) => {
  const usersInput = watch('email')
        try {
            let response = await fetch(`http://localhost:3001/user/login`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'content-type': 'application/json'}
            })
            if (response.ok) {
              console.log("Signed in successfully!")
              navigate('/')
            }
                else { throw new Error("Signing in failed")}
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
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{mt: 3}}>
                            <Grid container spacing={2}>
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
                                Sign In
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                    Don't have an account? Sign up
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
