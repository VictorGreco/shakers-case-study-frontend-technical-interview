import React from 'react';
import styled from 'styled-components';
import { Box, Typography, Chip, useTheme } from '@mui/material';

// --- Interfaces ---

export interface TechTag {
  name: string;
  // In a real application, this would be a React.ReactNode for an icon,
  // but for simplicity and to avoid external dependencies, we'll use a simple string for the icon name.
  iconName: string;
}

// --- Styled Components ---

// 2. Main Card Container
export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  border: '1px solid #e0e0e0',
  borderRadius: '5px',
  padding: '10px',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  position: 'relative',
  cursor: 'pointer',
  transition: 'box-shadow 0.3s',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
}));

// 3. Left Section (Logo and Brand Name)
export const LogoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: '5px',
  flexShrink: 0,
}));

export const LogoPlaceholder = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '5px',
  backgroundColor: '#673ab7', // Purple color from the image
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '5px',
  // Placeholder for the 'J' logo
  '&::before': {
    content: '"J"',
    color: '#ffeb3b', // Yellow color
    fontSize: '4rem',
    fontWeight: 'bold',
    lineHeight: 1,
  },
}));

export const BrandNameText = styled(Typography)({
  fontSize: '0.75rem',
  color: '#757575',
});

// 4. Middle Section (Details)
export const DetailsSection = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingRight: '5px',
}));

export const TitleText = styled(Typography)({
  fontSize: '1.1rem',
  fontWeight: 600,
  marginBottom: '4px',
});

export const MetadataText = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: '#1b5e20', // Dark green color for metadata
  marginBottom:'5px',
  '& span': {
    color: '#757575', // Separator color
    margin: '0 4px',
  },
}));

export const TechStackContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
});

// 5. Tech Tag Chip
export const TechTagChip = styled(Chip)(({ theme }) => ({
  height: 24,
  fontSize: '0.75rem',
  backgroundColor: '#f5f5f5',
  color: '#424242',
  '& .MuiChip-icon': {
    fontSize: '1rem',
    color: '#424242',
  },
}));

// 6. Right Section (Arrow)
export const ArrowSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 30,
  flexShrink: 0,
}));

export const ArrowIcon = styled(Box)({
  width: 0,
  height: 0,
  borderTop: '6px solid transparent',
  borderBottom: '6px solid transparent',
  borderLeft: '6px solid #1b5e20', // Dark green arrow
});