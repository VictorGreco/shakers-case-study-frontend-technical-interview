'use client'

import Box from '@mui/material/Box';
import JobCard from './JobCard';
import { IEnhancedProject } from '../_types/IEnhancedProject';
import JobCardMobile from './JobCardMobile';

export interface IProjectProps {
project: IEnhancedProject;
key?: number | string;
}

export default function ProjectItem ({ project }: IProjectProps) {
    return (
    <Box onClick={() => window.location.href = `/projects/details/${project.id}`}>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <JobCard project={project}/>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>
            <JobCardMobile project={project}/>
        </Box>
    </Box>

    );
}