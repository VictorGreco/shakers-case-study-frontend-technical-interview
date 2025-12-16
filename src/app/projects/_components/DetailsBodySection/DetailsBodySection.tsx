'use client'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import styled from 'styled-components';

import { IFaq } from '../_types/IFaq';
import CustomAccordion from '../CustomAccordion/CustomAccordion';

export const StyledTitle= styled(Typography)(({ theme }) => ({
  fontSize: '18px!important',
  fontWeight: 400,
  color: '#033028',
  lineHeight: '26px',
  marginTop: '40px',
  marginBottom: '10px'
}));

export const StyledSubTitle= styled(Typography)(({ theme }) => ({
  fontSize: '16px!important',
  fontWeight: 400,
  color: '#033028',
  lineHeight: '22px',
  letterSpacing: 'Opx',
  marginTop: '30px',
  marginBottom: '10px'
}));

export const ParagraphText= styled(Typography)(({ theme }) => ({
  fontSize: '14px!important',
  fontWeight: 400,
  color: '#555E5C',
  lineHeight: '20px',
  letterSpacing: 'Opx',
}));

interface DetailsBodySectionProps {
  description: string;
  goals: string[];
  faqs: IFaq[];
}

export default function DetailsBodySection({ description, goals, faqs}: DetailsBodySectionProps) {

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Box>
        <StyledTitle sx={{ color: 'text.primary'}}>
          <span>Descripción del proyecto</span>
        </StyledTitle>
        <ParagraphText>{description}</ParagraphText>
      </Box>
      <Box>
        <StyledSubTitle sx={{ color: 'text.primary' }}>
            ¿Cuáles son los objetivos y tareas a realizar?
        </StyledSubTitle>
        <ParagraphText>{goals.join(' ')}</ParagraphText>
       </Box>
        <Box>
            <StyledTitle sx={{ color: 'text.primary'}}>
            <span>Preguntas Frecuentes</span>
            </StyledTitle>
            <CustomAccordion faqs={faqs}/>
      </Box>
     
    </Box>
  );
}