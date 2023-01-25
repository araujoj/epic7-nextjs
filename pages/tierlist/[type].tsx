import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Box, CircularProgress } from '@mui/material'
import { COLORS, TIERS } from '../../src/utils/constants'
import TierList from '../../src/components/Tierlist'
import { useQuery } from '@tanstack/react-query'
import { getHeroList } from '../../src/utils/api'
import { useRouter } from 'next/router'

const titleCase = (title: string) => {
    if (title.includes('-')) {
        const words = title.split('-')
        words.forEach((word) => {
            word.charAt(0).toUpperCase() + word.substring(1)
        })
        return words
    }
    return title.charAt(0).toUpperCase() + title.substring(1)
}

const Tierlist: NextPage = () => {
    const { data, isLoading, isSuccess } = useQuery(['list'], getHeroList)
    const router = useRouter()
    const type = Array.isArray(router.query.type) ? router.query.type[0] : router.query.type

    return (
        <Container>
            <Typography variant="h1" sx={{ textAlign: 'center' }}>
                {type && titleCase(type)}
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
                This page is a WIP and will feature a tier list of the best playable characters for
                each aspect of the game.
            </Typography>
            {isLoading ? (
                <Box>
                    <CircularProgress />
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>
                        Loading...
                    </Typography>
                </Box>
            ) : isSuccess && data ? (
                <Box>
                    {TIERS.map((tier, index) => (
                        <TierList
                            key={index}
                            list={data.slice(0, 10)}
                            tier={tier}
                            color={COLORS[index]}
                        />
                    ))}
                </Box>
            ) : (
                <Typography color="error" variant="h4" sx={{ textAlign: 'center' }}>
                    An error has occured!
                </Typography>
            )}
        </Container>
    )
}

export default Tierlist
