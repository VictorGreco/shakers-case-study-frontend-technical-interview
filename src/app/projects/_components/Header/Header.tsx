'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import ChatIcon from '../ChatIcon/ChatIcon';
import BellIcon from '../BellIcon/BellIcon';
import styled from "styled-components";
import Logo from '../Logo/Logo';
import NavMenuSm from '../NavMenuSm/NavMenuSm';
import NavMenu from '../NavMenu/NavMenu';
import MenuAvatar from '../MenuAvatar/MenuAvatar';

const StyledAppBar = styled(AppBar)`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  gap: 12px;
  background: #FFFFFF!important;
  border-bottom: 1px solid #E4E7E7;

  @media only screen and (max-width: 728px) {
    height: 68px;
    padding: 0px;
    box-shadow: inset 0px -35px 28px -50px gray!important;
  }
`;

const pages = [{
  name: 'Buscar Proyectos',
  path: '/projects'
}];

export default function Header() {

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <NavMenuSm pages={pages}/>
          <NavMenu pages={pages}/>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <ChatIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="error">
                  <BellIcon/>
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="error">
                <MenuAvatar src="/avatars/1d5766a31435f01f120138dc9f4299f1841ab568.jpg" />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}