import styled from 'styled-components';
import { Box, Typography, Chip } from '@mui/material';

// --- Styled Components ---

// 2. Main Card Container
export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  border: '1px solid #e0e0e0',
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  position: 'relative',
  cursor: 'pointer',
  transition: 'box-shadow 0.3s',
  marginBottom: '40px',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  '@media only screen and (max-width: 728px)': {
    flexDirection: 'column',
  },
}));

// 3. Left Section (Logo and Brand Name)
export const LogoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: '5px',
  flexShrink: 0,
  margin: '20px',
  '@media only screen and (max-width: 728px)': {
    marginRight: '15px',
    margin: '0px',

  },
}));

export const BrandNameText = styled(Typography)({
  fontSize: '0.75rem',
  color: '#757575',
  margin: '15px 13px',

});

// 4. Middle Section (Details)
export const DetailsSection = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0px 5px 0 10px',
  margin: '20px',
  '@media only screen and (max-width: 728px)': {
    flexDirection: 'row',
    padding: '0',
    margin: '20px 10px 20px 5px'
  },
}));

export const TitleText = styled(Typography)({
  fontSize: '18px',
  lineHeight: '26px',
  font: 'GT Planar',
  color: '#181B1A',
  marginBottom: '4px',
});

export const MetadataText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: '#0B5A4C', // Dark green color for metadata
  marginBottom: '5px',
  '& span': {
    color: '#757575', // Separator color
    margin: '0 4px',
  },

}));

export const TechStackContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  '@media only screen and (max-width: 728px)': {
    flexDirection: 'row',
    padding: '0',
    margin: '  0 20px 20px 20px'
  },
});

// 5. Tech Tag Chip
export const TechTagChip = styled(Chip)(({ theme }) => ({
  height: 24,
  fontSize: '0.75rem',
  borderRadius: '6px',
  backgroundColor: '#F4F5F5',
  color: '#424242',
  border: 0,
  '& .MuiChip-icon': {
    fontSize: '12px',
    color: '#181B1A',
  },
}));

// 6. Right Section (Arrow)
export const ArrowSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 30,
  flexShrink: 0,
  padding: '0 0 0 10px',
  'border-left': '1px solid #e0e0e0',
  margin: '0 15px 0 0',
  '@media only screen and (max-width: 728px)': {
    display: 'none',
  },
}));

export const ArrowIcon = styled(Box)({
  width: 0,
  height: 0,
  borderTop: '6px solid transparent',
  borderBottom: '6px solid transparent',
  borderLeft: '6px solid #1b5e20', // Dark green arrow
});