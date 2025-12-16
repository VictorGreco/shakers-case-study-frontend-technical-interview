'use client'
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, Card, CardContent, Chip } from '@mui/material';
import styled from 'styled-components';
import { IEnhancedPosition } from '../_types/IEnhancedPosition';
import { IProjectLeader } from '../_types/IProjectLeader';
import { IOrganization } from '../_types/IOrganization';
import { ISkill } from '../_types/ISkill';
import { ISpecialtie } from '../_types/ISpecialtie';
import { useState } from 'react';
import CheckIcon from '../Icons/CheckIcon/CheckIcon';

export const StyledTitle= styled(Typography)(({ theme }) => ({
  fontSize: '18px!important',
  fontWeight: 400,
  color: '#033028',
  lineHeight: '26px',
  marginTop: '40px',
  marginBottom: '10px'
}));

export const StyledTitle2= styled(Typography)(({ theme }) => ({
  fontSize: '20px!important',
  fontWeight: 400,
  color: '#181B1A',
  lineHeight: '140%',
  letterSpacing: 'Opx',
  marginTop: '30px'
}));

export const StyledSubtytle= styled(Typography)(({ theme }) => ({
  fontSize: '16px!important',
  fontWeight: 400,
  color: '#555E5C',
  lineHeight: '22px',
  letterSpacing: 'Opx',
}));

export const CompanyText= styled(Typography)(({ theme }) => ({
  fontSize: '16px!important',
  fontWeight: 400,
  color: '#181B1A',
  lineHeight: '22px',
  letterSpacing: 'Opx',
  marginLeft: '10px',
}));

const CompanyAvatar = styled(Avatar)(({ theme }) => ({
  width: '24px',
  height: '24px',
}))

const ProjectLeaderAvatar = styled(Avatar)(({ theme }) => ({
  width: '252px',
  height: '252px',
}))

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '20px',
  width: '100%',
  boxShadow: 'none',
  marginTop: '20px',
}))

export const CustomTag = styled(Chip)(({ theme }) => ({
  backgroundColor: '#EDF7F6',
  color: '#181B1A',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: 400,
  width: 'fit-content',
  marginBottom: '10px',
  border: 'none',
  padding: '5px',
}));

interface EnhancedPositions {
    id: number;
    title: string;
    skills: ISkill[];
    specialties: ISpecialtie[];
    referralBonus: number;
}

interface DetailsBottomSectionProps {
  projectLeader: IProjectLeader;
  positions: EnhancedPositions[];
  organization: IOrganization;
}

export default function DetailsBottomSection({ projectLeader, positions, organization}: DetailsBottomSectionProps) {
    const [appliedState, setAppliedState] = useState(false);
    const handleAplicationClickButton= (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAppliedState(true)
    }
        const handleRemoveAplicationClickButton= (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAppliedState(false)
    }
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <StyledTitle sx={{ color: 'text.primary'}}>
                <span>Responsable</span>
            </StyledTitle>
                <Card sx={{ minWidth: 275, maxWidth: 300 }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', marginBottom: '10px' }}>
                            <CompanyAvatar src={organization.logo} variant="rounded" />
                            <CompanyText gutterBottom sx={{ color: 'text.secondary' }}>
                                {organization.name}
                            </CompanyText>
                        </Box>
                        <Box>
                            <ProjectLeaderAvatar src={''} variant="rounded" />                  
                             <StyledTitle2 gutterBottom sx={{ color: 'text.secondary' }}>
                                {`${projectLeader.name} ${projectLeader.lastName}`}
                            </StyledTitle2>
                            <StyledSubtytle gutterBottom sx={{ color: 'text.secondary' }}>
                               Project Owner
                            </StyledSubtytle>
                        </Box>
                    </CardContent>
                </Card>
        </Box>
        <Box sx={{ flexGrow: 5, display: 'flex', flexDirection: 'column' }}>
            <StyledTitle sx={{ color: 'text.primary'}}>
                <span>Equipo</span>
            </StyledTitle>
            {
                positions.map((position, index) => {
                    return (
                    <Card key={index} sx={{ minWidth: 275, maxWidth: 300 }}>
                    <CardContent>
                        <Box>
                                <CustomTag sx={{ display: appliedState ? 'flex' : 'none' }}
                                icon={<CheckIcon />}
                                    label='Aplicado'
                                    variant="outlined"
                                    />
                        
                             <StyledTitle2 gutterBottom sx={{ color: 'text.secondary', margin: '0 0 10px 0!important' }}>
                                {position.title}
                            </StyledTitle2>
                            <StyledSubtytle gutterBottom sx={{ color: 'text.secondary' }}>
                               {position.skills.map((skill) => skill.name).join(', ')}
                            </StyledSubtytle>
                            {
                                //TODO: Keep tracking of aplication in the persistance layer.
                                appliedState ? 
                                <StyledButton variant="outlined" color="error" size="medium" onClick={(e) => handleRemoveAplicationClickButton(e)}>
                                    Retirar Candidatura
                                </StyledButton>:                             
                                <StyledButton sx={{   backgroundColor: '#F0FF3D',
  color: '#181B1A', }} variant="contained" size="medium" onClick={(e) => handleAplicationClickButton(e)}>
                                    Aplicar
                                </StyledButton>
                            }

                        </Box>
                    </CardContent>
                </Card>
                    )
                })
            }
        </Box>
     
    </Box>
  );
}