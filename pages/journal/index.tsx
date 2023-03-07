import { Container, Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import ActionCard from '../../src/components/ActionCard'

const Journal: NextPage = () => {
    return (
        <Container>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
                Journal
            </Typography>
            <Typography
                variant="subtitle2"
                sx={{
                    textAlign: 'center',
                    fontStyle: 'italic',
                    color: 'text.secondary',
                    mb: 3,
                }}
            >
                This page is a WIP and will feature an encyclopedic journal where users can look up
                information about all of the items in the game.
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ActionCard text="Artifacts" url="#" />
                </Grid>
                <Grid item xs={4}>
                    <ActionCard text="Materials" url="#" />
                </Grid>
                <Grid item xs={4}>
                    <ActionCard text="Pets" url="#" />
                </Grid>
                <Grid item xs={4}>
                    <ActionCard text="Card" url="#" />
                </Grid>
                <Grid item xs={4}>
                    <ActionCard text="Card" url="#" />
                </Grid>
                <Grid item xs={4}>
                    <ActionCard text="Card" url="#" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Journal
