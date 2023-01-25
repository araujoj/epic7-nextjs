import { Avatar, Badge, Box, styled, Tooltip } from '@mui/material'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Hero } from '../utils/types'

const CharacterAvatar = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    border: `2px solid ${theme.palette.background.paper}`,
    [theme.breakpoints.down('md')]: {
        width: 50,
        height: 50,
    },
    [theme.breakpoints.up('md')]: {
        width: 75,
        height: 75,
    },
    [theme.breakpoints.up('lg')]: {
        width: 100,
        height: 100,
    },
}))

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    border: `2px solid ${theme.palette.background.paper}`,
    [theme.breakpoints.down('md')]: {
        width: 15,
        height: 15,
    },
    [theme.breakpoints.up('md')]: {
        width: 20,
        height: 20,
    },
    [theme.breakpoints.up('lg')]: {
        width: 25,
        height: 25,
    },
}))
interface IconProps {
    roleIcon: StaticImageData
    elementIcon: StaticImageData
    heroIcon: string
    hero: Hero
}

export default function Icon(props: IconProps) {
    return (
        <Box sx={{ margin: 1 }}>
            <Tooltip title={props.hero.name}>
                <Link href={`/heroes/${props.hero.id}`}>
                    <Badge
                        badgeContent={<SmallAvatar src={props.roleIcon.src} />}
                        overlap="circular"
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <Badge
                            badgeContent={<SmallAvatar src={props.elementIcon.src} />}
                            overlap="circular"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <CharacterAvatar src={props.heroIcon} />
                        </Badge>
                    </Badge>
                </Link>
            </Tooltip>
        </Box>
    )
}
