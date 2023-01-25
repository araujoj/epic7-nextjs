import { Box, Typography } from '@mui/material'

type TabPanelProps = {
    children?: React.ReactNode
    index: number
    value: number
}

export default function TabPanel({ ...props }: TabPanelProps) {
    return (
        <Box hidden={props.value !== props.index} id={`tabpanel-${props.index}`}>
            {props.value === props.index && (
                <Box sx={{ p: 2 }}>
                    <Typography>{props.children}</Typography>
                </Box>
            )}
        </Box>
    )
}
