import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: ['Noto Sans', 'sans-serif'].join(','),
    },
})

export default theme;
