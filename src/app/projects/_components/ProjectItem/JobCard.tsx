import React from 'react';
import { Box } from '@mui/material';
import {
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
import ReferralBannerComponent from '../ReferralBanner/ReferralBanner';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import { IProjectProps } from './ProjectItem';
import { onlyUnique } from '@/app/_lib/arrayUtils';


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

const JobCard = ({ project }: IProjectProps) => {
    const techStack = project.positions
        .map((position) => position.skills)
        .reduce((acc, curr) => [...curr, ...acc], [])
        .filter(onlyUnique);
    console.log(techStack);
    const { hourFrom, hourTo, total } = project.budget;
    const getBudgetString = hourFrom && hourTo ? `${hourFrom}-${hourTo}`: `${total}` ;
    const metadata = [project.category, project.subcategory, `${getBudgetString} €`];
    const filteredMetadata = metadata.filter((item) => !!item);

    const formattedMetadata = filteredMetadata.map((item, index) => (
        <React.Fragment key={index}>
            {item}
            {index < filteredMetadata.length - 1 && <Box component="span">|</Box>}
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
          <CompanyLogo src={ project.organization[0].logo }/>
          <BrandNameText variant="caption">{project.organization[0].name.split("").slice(0, 10).join("")}</BrandNameText>
        </LogoSection>

        {/* Middle Section: Details */}
        <DetailsSection>
          <Box>
            <TitleText variant="h6">{project.title}</TitleText>
            <MetadataText variant="body2">{formattedMetadata}</MetadataText>
          </Box>

          {/* Tech Stack Chips */}
          <TechStackContainer>
            {techStack.map((tech: string) => (
              <TechTagChip
                key={tech}
                label={tech}
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
