import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Typography,
    Paper,
} from '@material-ui/core'
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined'

import { validationAuthLogin } from './utils/validation'
import useStyles, { AuthVariantEnum } from './utils/style'
import useLogin from '../../hooks/useLogin'
import { LoginFormType } from '../../type/form'

const Login = () => {
    const { isLoading, errors, userAuthorization } = useLogin()

    const classes = useStyles({
        variant: AuthVariantEnum.login,
    })
    const formik = useFormik<LoginFormType>({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationAuthLogin,
        onSubmit: (values) => {
            userAuthorization(values)
        },
    })
    return (
        <Grid container component="main" className={classes.root}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                lg={8}
                className={classes.image}
            />
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} lg={4} component={Paper} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOpenOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={formik.handleSubmit}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    name="email"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Email Address"
                                    error={
                                        formik.touched.email &&
                                        Boolean(formik.errors.email)
                                    }
                                    helperText={
                                        formik.touched.email &&
                                        formik.errors.email
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    name="password"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    error={
                                        formik.touched.password &&
                                        Boolean(formik.errors.password)
                                    }
                                    helperText={
                                        formik.touched.password &&
                                        formik.errors.password
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Button
                            disabled={isLoading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/register" className={classes.link}>
                                    Already don't have an account? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                    {errors && (
                        <Typography className={classes.error} variant={'body1'}>
                            {errors}
                        </Typography>
                    )}
                </div>
            </Grid>
        </Grid>
    )
}

export default Login
