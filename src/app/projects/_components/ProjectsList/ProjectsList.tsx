import Box from '@mui/material/Box';
import ProjectItem from '../ProjectItem/ProjectItem';
import { getProjects } from '@/app/_lib/dataFetching';

import { IProject } from '../_types/IProject';

export default async function ProjectList() {
  const allProjects = await getProjects();

    return (
        <Box sx={{ flexGrow: 1 }}>
            {
                allProjects.map((project: IProject) => {
                    return <ProjectItem key={project.id} project={project} />
                })
            }
        </Box>
    );
}