import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles(() => ({
    container: {
        padding: '15px 0'
    }
}))


const Page = ({ title, Component }) => {
    const classes = useStyles()

    return (
        <>
            <Typography variant="h3">
                {title}
            </Typography>
            <Component />
        </>
    )
}

export default Page