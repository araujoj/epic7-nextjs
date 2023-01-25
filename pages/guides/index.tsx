import { Container, Typography } from '@mui/material'
import { NextPage } from 'next'

const Guides: NextPage = () => {
    return (
        <Container>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
                Guides
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
                This page is a WIP and will feature a list of guides for anything related to the
                game.
            </Typography>
        </Container>
    )
}

export default Guides
