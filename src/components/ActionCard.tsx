import { Card, CardActionArea, CardContent, styled, Typography } from '@mui/material'
import Link from 'next/link'

const CardBase = styled(Card)(({ theme }) => ({
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
        minWidth: 300,
        minHeight: 100,
    },
}))

type ActionCardProps = {
    text: string
    url: string
}

export default function ActionCard({ ...props }: ActionCardProps): JSX.Element {
    return (
        <Link href={props.url} style={{ textDecoration: 'none' }}>
            <CardBase>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6" sx={{ textAlign: 'center' }}>
                            {props.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </CardBase>
        </Link>
    )
}
