import { Container, Typography } from '@mui/material'
import { NextPage } from 'next'

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
        </Container>
    )
}

export default Journal
