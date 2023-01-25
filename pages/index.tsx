import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import {
    Avatar,
    Card,
    CardActionArea,
    CardContent,
    Divider,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Paper,
    styled,
} from '@mui/material'
import Link from 'next/link'

const MainCardBase = styled(Card)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 12,
    [theme.breakpoints.down('md')]: {
        minWidth: 150,
        minHeight: 75,
    },
    [theme.breakpoints.up('md')]: {
        minWidth: 200,
        minHeight: 100,
    },
    [theme.breakpoints.up('lg')]: {
        minWidth: 300,
        minHeight: 150,
    },
}))

const SmallCardBase = styled(Card)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 12,
    [theme.breakpoints.down('md')]: {
        minWidth: 100,
        minHeight: 50,
    },
    [theme.breakpoints.up('md')]: {
        minWidth: 150,
        minHeight: 75,
    },
    [theme.breakpoints.up('lg')]: {
        minWidth: 200,
        minHeight: 100,
    },
}))

type BoxProps = {
    title: string
    url: string
}

const MainBox = ({ ...props }: BoxProps): JSX.Element => {
    return (
        <Link href={props.url} style={{ textDecoration: 'none' }}>
            <MainCardBase>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h3" sx={{ textAlign: 'center' }}>
                            {props.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </MainCardBase>
        </Link>
    )
}

const SmallBox = ({ ...props }: BoxProps): JSX.Element => {
    return (
        <Link href={props.url} style={{ textDecoration: 'none' }}>
            <SmallCardBase>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h4" sx={{ textAlign: 'center' }}>
                            {props.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </SmallCardBase>
        </Link>
    )
}

const Home: NextPage = () => {
    return (
        <Container maxWidth="xl">
            <Grid container mt={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <MainBox title="Tierlist" url="/tierlist" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MainBox title="Guides" url="/guides" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MainBox title="Tools" url="/tools" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MainBox title="Heroes" url="/heroes" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MainBox title="Journal" url="/journal" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MainBox title="Updates" url="/updates" />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <SmallBox title="Hunts" url="/hunts" />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <SmallBox title="Expeditions" url="/expeditions" />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <SmallBox title="Abyss" url="/abyss" />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <SmallBox title="Trials" url="/trials" />
                </Grid>
            </Grid>
            <Paper sx={{ margin: 2 }}>
                <List>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar />
                        </ListItemAvatar>
                        <ListItemText primary="Event 1" secondary="Duration 00:00:00" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar />
                        </ListItemAvatar>
                        <ListItemText primary="Event 2" secondary="Duration 00:00:00" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar />
                        </ListItemAvatar>
                        <ListItemText primary="Event 3" secondary="Duration 00:00:00" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar />
                        </ListItemAvatar>
                        <ListItemText primary="Event 4" secondary="Duration 00:00:00" />
                    </ListItemButton>
                </List>
            </Paper>
        </Container>
    )
}

export default Home
