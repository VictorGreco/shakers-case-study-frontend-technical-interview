'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box, Chip } from '@mui/material';
import styled from 'styled-components';
import { formatDateToDDMMYYYY } from '@/app/_lib/dateUtils';
import CalendarIcon from '../Icons/CalendarIcon/CalendarIcon';
import ClockIcon from '../Icons/ClockIcon/ClockIcon';
import EuroIcon from '../Icons/EuroIcon/EuroIcon';
import PeopleIcon from '../Icons/PeopleIcon/PeopleIcon';

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

export const StyledTypography= styled(Typography)(({ theme }) => ({
  fontSize: '12px!important',
  fontWeight: 400,
}));

export const StyledTitle= styled(Typography)(({ theme }) => ({
  fontSize: '24px!important',
  fontWeight: 400,
  color: '#ffffff',
  lineHeight: '140%',
  marginBottom: '10px',
}));

export const StyledSubTitle= styled(Typography)(({ theme }) => ({
  fontSize: '18px!important',
  fontWeight: 400,
  color: '#ffffff',
  lineHeight: '26px',
  letterSpacing: 'Opx',
  marginBottom: '5px',
}));

export const StyledBox= styled(Box)(({ theme }) => ({
  backgroundColor: '#033028',
  borderRadius: '6px',
  color: '#ffffff',
  padding: '30px',
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

export const TechTagChip = styled(Chip)(({ theme }) => ({
  height: 24,
  fontSize: '12px',
  borderRadius: '6px',
  backgroundColor: '#FFFFFF',
  color: '#181B1A',
  border: 0,
  padding: '15px 10px',
  '& .MuiChip-icon': {
    fontSize: '12px',
    color: '#181B1A',
  },
}));

interface DetailsTopSectionProps {
  title: string;
  subtitle: string;
  startDate: string;
  totalHours: number;
  budget: string;
  totalApplicationsAmount: number;
  industryName: string;
}

export const CustomTag = styled(Chip)(({ theme }) => ({
  backgroundColor: '#EDF7F6',
  color: '#181B1A',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: 400,
  width: 'fit-content',
  marginBottom: '10px',
}));


export default function DetailsTopSection({ title, subtitle, startDate, totalHours, budget, totalApplicationsAmount, industryName }: DetailsTopSectionProps) {

  return (
    <StyledBox sx={{ flexGrow: 1, display: { xs: 'flex', flexDirection: 'column' } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <StyledTitle sx={{ color: 'text.primary'}}>
          <span>{title}</span>
        </StyledTitle>
        <CustomTag
          label={industryName}
          variant="outlined"
          />
      </Box>
        <StyledSubTitle sx={{ color: 'text.primary' }}>{subtitle}</StyledSubTitle>
          {/* Tech Stack Chips */}
          <TechStackContainer>
            <TechTagChip
               icon={<CalendarIcon />}
                label={`Inicio: ${formatDateToDDMMYYYY(startDate)}`}
                variant="outlined"
              />
              <TechTagChip
                icon={<ClockIcon />}
                label={`${totalHours} horas`}
                variant="outlined"
              />
              <TechTagChip
                icon={<EuroIcon />}
                label={`${budget} € (Estimado)`}
                variant="outlined"
              />
              <TechTagChip
                icon={<PeopleIcon />}
                label={`${totalApplicationsAmount} Talentos`}
                variant="outlined"
              />
          </TechStackContainer>
     
    </StyledBox>
  );
}