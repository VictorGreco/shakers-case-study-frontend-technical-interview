import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IFaq } from '../_types/IFaq';
import styled from 'styled-components';

interface CustomAccordionProps {
  faqs: IFaq[];
}

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  border: '2px solid #EDF7F6',
  marginBottom: '10px',
  '&.Mui-expanded': {
    backgroundColor: '#EDF7F6',
  }
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  minHeight: '0px',
  margin: '0px!important',
  '&.content': {
    margin: '0px!important',

  }
}));

export const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
  fontSize: '12px!important',
  fontWeight: 400,
  color: '#181B1A',
  lineHeight: '16px',
  letterSpacing: 'Opx',

}));

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  fontSize: '12px!important',
  fontWeight: 400,
  color: '#555E5C',
  lineHeight: '16px',
  letterSpacing: 'Opx',
}));

export default function CustomAccordion({ faqs }: CustomAccordionProps) {
  return (
    <div>
      {
        faqs.map(({ question, answer }, index) => {
          return (
            <StyledAccordion key={`${question}-${index}`}>
              <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <StyledTypographyTitle >{question}</StyledTypographyTitle>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                {answer}
              </StyledAccordionDetails>
            </StyledAccordion>
          );
        })
      }
    </div>
  );
}
