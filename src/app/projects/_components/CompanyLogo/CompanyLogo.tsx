import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

export const LogoPlaceholder = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '5px',
  backgroundColor: '#ffeb3b',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '5px',
  // Placeholder for the 'S' logo
  '&::before': {
    content: '"S"',
    color: 'black',
    fontSize: '4rem',
    fontWeight: 'bold',
    lineHeight: 1,
  },
  '@media only screen and (max-width: 728px)': {
    width: 48,
    height: 48,
    fontSize: '2rem',
    '&::before': {
      fontSize: '2rem',
    },
  },
}));

interface CompanyLogoComponentProps {
  src: string;
}

const CompanyLogo = ({ src }: CompanyLogoComponentProps) => {

  if (true) {
    return (<LogoPlaceholder />)
  }
};

export default CompanyLogo;
