'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation'  // Usage: App router
import LeftArrowIcon from '../Icons/LeftArrowIcon/LeftArrowIcon';
import styled from 'styled-components';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
export const IconButton = styled(Box)(({ theme }) => ({
  color: '#033028',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: 400,
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: '12px!important',
  fontWeight: 400,
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '12px!important',
  fontWeight: 400,
}));

export default function CustomBreadcrumbs({ title }: { title: string }) {

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', marginBottom: '30px' } }}>

      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <IconButton onClick={() => window.location.href = '/projects'}>
            <LeftArrowIcon /> Atrás
          </IconButton>
          <StyledLink underline="hover" color="inherit" href="/">
            Buscador Proyectos
          </StyledLink>
          <StyledTypography sx={{ color: 'text.primary' }}>{title}</StyledTypography>
        </Breadcrumbs>
      </div>
    </Box>
  );
}