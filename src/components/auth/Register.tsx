import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'

import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { validationAuthRegister } from './some/validation'
import useStyles from './some/style'
import { Paper } from '@material-ui/core'

const Register = () => {
    const classes = useStyles({
        variant: 'register',
    })
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: validationAuthRegister,
        onSubmit: (values) => {
            console.log(values)
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
                </div>
            </Grid>
        </Grid>
    )
}

export default Register
