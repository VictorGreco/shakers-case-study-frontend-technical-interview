import Typography from '@mui/material/Typography';
import styled from "styled-components";

const styledTypography = styled(Typography)`

`

export default function Logo() {
    return (
    <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '26px',
            textDecoration: 'none',
            color: '#0D0D0D'
        }}
        >
        Buscar Proyectos
    </Typography>
    )
}