import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation'

interface Page {
    name: string;
    path: string;
}

interface INavMenu {
  pages: Page[];
}

export default function NavMenu({ pages }: INavMenu) {
    const pathname = usePathname();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages
            ?.filter(({ path }) => pathname !== path)
            ?.map(({ name, path}) => (
            <Typography
                key={name}
                variant="h6"
                noWrap
                component="a"
                href={path}
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '26px',
                    textDecoration: 'none',
                    color: '#0D0D0D',
                    marginLeft: '100px', 
                }}
                >
                {name}
            </Typography>
        ))}
        </Box>
    );
}