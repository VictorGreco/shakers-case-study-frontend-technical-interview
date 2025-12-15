import Box from '@mui/material/Box';
import ProjectItem from '../ProjectItem/ProjectItem';
import { getCategories, getProjects, getSkills, getSubcategories } from '@/app/_lib/dataFetching';

import { IProject } from '../_types/IProject';
import { ICategory } from '../_types/ICategory';
import { ISubcategory } from '../_types/ISubcategory';
import { ISkill } from '../_types/ISkill';
import { IEnhancedProject } from '../_types/IEnhancedProject';

export default async function ProjectList() {
  const allProjects = await getProjects();
  const allCategories = await getCategories();
  const allSubCategories = await getSubcategories();
  const allSkills = await getSkills();

  const enhancedProjectsData: IEnhancedProject[] = allProjects.map((item: IProject) => {

    const positionsData = item.positions.map((position) => {
        return {
            ...position,
            skills: position.skills.map((skillId) => {
                const { id, name } = allSkills.filter((skill: ISkill) => skill.id === skillId)[0];
                return {id, name};
            })
        }
    })
    return {
        ...item,
        category: allCategories.filter((category: ICategory) => category.id === item.category)[0]?.name,
        subcategory: allSubCategories.filter((subcategory: ISubcategory) => subcategory.id === item.subcategory)[0]?.name,
        positions: positionsData
    };
  })

    return (
        <Box sx={{ flexGrow: 1 }}>
            {
                enhancedProjectsData.map((project: IEnhancedProject) => {
                    return <ProjectItem key={project.id} project={project} />
                })
            }
        </Box>
    );
}