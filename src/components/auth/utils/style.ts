import { makeStyles } from '@material-ui/core/styles'

export enum AuthVariantEnum {
    login = 'login',
    register = 'register',
}

const useStyles = makeStyles((theme) => ({
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: ({ variant }: { variant: AuthVariantEnum }) =>
            variant === 'login' ? '#29b297' : '#27509e',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: ({ variant }: { variant: AuthVariantEnum }) =>
            variant === 'login' ? '#29b297' : '#27509e',
    },
    link: {
        textDecoration: 'none',
    },
    root: {
        overflow: 'hidden',
        height: '100vh',
    },
    error: {
        marginTop: '25px',
        color: '#e94a54',
    },
}))

export default useStyles
