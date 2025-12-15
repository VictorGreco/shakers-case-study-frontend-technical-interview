import React from 'react';
import { Box } from '@mui/material';
import {
  TechTag,
  CardContainer,
  LogoSection,
  BrandNameText,
  DetailsSection,
  TitleText,
  MetadataText,
  TechStackContainer,
  TechTagChip,
  ArrowSection,
  ArrowIcon,
} from './JobCard.styles';
import { IProject } from '../_types/IProject';
import ReferralBannerComponent from '../ReferralBanner/ReferralBanner';
import CompanyLogo from '../CompanyLogo/CompanyLogo';


// Mock icon component for demonstration. In a real app, this would be a proper icon library.
const MockIcon = ({ iconName }: { iconName: string }) => {
  let iconText = '';
  switch (iconName.toLowerCase()) {
    case 'react':
      iconText = '⚛️';
      break;
    case 'gitlab':
      iconText = '🦊';
      break;
    case 'next.js':
      iconText = '▲';
      break;
    case 'figma':
      iconText = '🎨';
      break;
    default:
      iconText = '⚙️';
  }
  return <Box component="span" sx={{ mr: 0.5 }}>{iconText}</Box>;
};

const JobCard = ({ project }: IProject) => {
    const techStack = [{
        name: 'react',
        iconName: 'react'
    }]
    const metadata = ["Desarrollo de apps", "educacion", "25-35 €"];
  // Helper to format metadata with separators
  const formattedMetadata = metadata.map((item, index) => (
    <React.Fragment key={index}>
      {item}
      {index < metadata.length - 1 && <Box component="span">|</Box>}
    </React.Fragment>
  ));

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto' }}>
      <ReferralBannerComponent positions={project.positions} />

      {/* Main Card */}
      <CardContainer>
        {/* Left Section: Logo and Brand Name */}
        <LogoSection>
          {/* In a real app, this would be an <img> tag or a Next.js <Image> component */}
          <CompanyLogo src={ project.organization.logo }/>
          <BrandNameText variant="caption">Japy brand</BrandNameText>
        </LogoSection>

        {/* Middle Section: Details */}
        <DetailsSection>
          <Box>
            <TitleText variant="h6">Test title</TitleText>
            <MetadataText variant="body2">{formattedMetadata}</MetadataText>
          </Box>

          {/* Tech Stack Chips */}
          <TechStackContainer>
            {techStack.map((tech: TechTag) => (
              <TechTagChip
                key={tech.name}
                label={tech.name}
                icon={<MockIcon iconName={tech.iconName} />}
                variant="outlined"
              />
            ))}
          </TechStackContainer>
        </DetailsSection>

        {/* Right Section: Arrow */}
        <ArrowSection>
          <ArrowIcon />
        </ArrowSection>
      </CardContainer>
    </Box>
  );
};

export default JobCard;
