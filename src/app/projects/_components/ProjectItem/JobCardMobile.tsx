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
} from './JobCard.styles';
import ReferralBannerComponent from '../ReferralBanner/ReferralBanner';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import { IProjectProps } from './ProjectItem';
import { onlyUnique } from '@/app/_lib/arrayUtils';

const JobCardMobile = ({ project }: IProjectProps) => {
    const techStack = project.positions
        .map((position) => position.skills)
        .reduce((acc, curr) => [...curr, ...acc], [])
        .map((skill) => skill.name)
        .filter(onlyUnique);
    const { hourFrom, hourTo, total } = project.budget;
    const getBudgetString = hourFrom && hourTo ? `${hourFrom}-${hourTo}`: `${total}` ;
    const metadata = [project.category, project.subcategory, `${getBudgetString} €`, `${project.totalHours}h/month`];
    const filteredMetadata = metadata.filter((item) => !!item);

    const formattedMetadata = filteredMetadata.map((item, index) => (
        <React.Fragment key={index}>
            {item}
            {index < filteredMetadata.length - 1 && <Box component="span">|</Box>}
        </React.Fragment>
    ));

  return (
    <Box sx={{ margin: 'auto' }}>
      <ReferralBannerComponent positions={project.positions} />

      {/* Main Card */}
      <CardContainer>
        {/* Left Section: Logo and Brand Name */}


        {/* Middle Section: Details */}
        <DetailsSection>
          <LogoSection>
          {/* In a real app, this would be an <img> tag or a Next.js <Image> component */}
          <CompanyLogo src={ project.organization[0].logo }/>
          <BrandNameText variant="caption">{project.organization[0].name.split("").slice(0, 10).join("")}</BrandNameText>
        </LogoSection>
          <Box>
            <TitleText variant="h6">{project.title}</TitleText>
            <MetadataText variant="body2">{formattedMetadata}</MetadataText>
          </Box>

          {/* Tech Stack Chips */}

        </DetailsSection>
                  <TechStackContainer>
            {techStack.map((skillName) => (
              <TechTagChip
                key={skillName}
                label={skillName}
                variant="outlined"
              />
            ))}
          </TechStackContainer>
      </CardContainer>
      
    </Box>
  );
};

export default JobCardMobile;
