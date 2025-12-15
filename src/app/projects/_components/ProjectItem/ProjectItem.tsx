'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import { IProject } from '../_types/IProject';
import JobCard from './JobCard';

export interface IProjectItem {
project: IProject;
key: number | string;
}

export default function ProjectItem ({ project }: IProjectItem) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <JobCard project={project}/>
        </Box>
    );
}