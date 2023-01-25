import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Box, CircularProgress, Tab, Tabs } from '@mui/material'
import { COLORS, PAGES, TIERS } from '../../src/utils/constants'
import ActionCard from '../../src/components/ActionCard'
import TierList from '../../src/components/Tierlist'
import { useQuery } from '@tanstack/react-query'
import { getHeroList, getTierlist } from '../../src/utils/api'
import { useState } from 'react'
import TabPanel from '../../src/components/TabPanel'

const Tierlist: NextPage = () => {
    const [tierlist, setTierlist] = useState<string>('')
    const [value, setValue] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const { data, isLoading, isSuccess } = useQuery(['list'], getHeroList)

    return (
        <Container>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
                Tier List
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
                <>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Arena" />
                            <Tab label="World Arena" />
                            <Tab label="Guild Wars" />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        {TIERS.map((tier, index) => (
                            <TierList
                                key={index}
                                list={data?.slice(0, 10)}
                                tier={tier}
                                color={COLORS[index]}
                            />
                        ))}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        {TIERS.map((tier, index) => (
                            <TierList
                                key={index}
                                list={data?.slice(0, 10)}
                                tier={tier}
                                color={COLORS[index]}
                            />
                        ))}
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        {TIERS.map((tier, index) => (
                            <TierList
                                key={index}
                                list={data?.slice(0, 10)}
                                tier={tier}
                                color={COLORS[index]}
                            />
                        ))}
                    </TabPanel>
                </>
            ) : (
                <Typography color="error" variant="h4" sx={{ textAlign: 'center' }}>
                    An error has occured!
                </Typography>
            )}
        </Container>
    )
}

export default Tierlist
