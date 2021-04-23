import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Typography,
    Paper,
} from '@material-ui/core'

import { validationAuthRegister } from './utils/validation'
import useStyles, { AuthVariantEnum } from './utils/style'
import { RegisterFormType } from '../../type/form'
import useRegister from '../../hooks/useRegister'

const Register = () => {
    const { isLoading, errors, createUser } = useRegister()

    const classes = useStyles({
        variant: AuthVariantEnum.register,
    })
    const formik = useFormik<RegisterFormType>({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: validationAuthRegister,
        onSubmit: (values) => {
            createUser(values)
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
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={formik.handleSubmit}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Username"
                                    autoFocus
                                    error={
                                        formik.touched.username &&
                                        Boolean(formik.errors.username)
                                    }
                                    helperText={
                                        formik.touched.username &&
                                        formik.errors.username
                                    }
                                />
                            </Grid>
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
                                <Link to="/login" className={classes.link}>
                                    Already have an account? Sign in
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

export default Register
