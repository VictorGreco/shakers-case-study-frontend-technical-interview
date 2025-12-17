import { Box } from '@mui/material';
import CustomBreadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { IProject } from '../_types/IProject';
import { getIndustries, getProjectDetails, getSkills, getSpecialties } from '@/app/_lib/dataFetching';
import DetailsTopSection from '../DetailTopSection/DetailsTopSection';
import { ISpecialtie } from '../_types/ISpecialtie';
import { IIndustry } from '../_types/IIndustry';
import DetailsBodySection from '../DetailsBodySection/DetailsBodySection';
import DetailsBottomSection from '../DetailsBottomSection/DetailsBottomSection';


export default async function ProjectDetails({ id }: { id: string }) {
    const speicaltiesCatalog = await getSpecialties();
    const skilsCatalog = await getSkills();
    const industriesCatalog: IIndustry[] = await getIndustries();

    const projectDetails = await getProjectDetails(id);

    const { title, positions, startDate, totalHours, totalApplicationsAmount, budget, organization, description, goals, faqs, projectLeader }: IProject = projectDetails;

    const enhancedPositions = positions.map((position) => {
        const specialties = position.specialties.map((specialtie) => {
            const { id, name } = speicaltiesCatalog.filter((item: ISpecialtie) => item.id === specialtie)[0];
            return { id, name }
        })
        const skills = position.skills.map((skill) => {
            const { id, name } = skilsCatalog.filter((item: ISpecialtie) => item.id === skill)[0];
            return { id, name }
        })
        return {
            ...position,
            specialties,
            skills
        };
    })

    const enhancedIndustry = industriesCatalog.filter((industry: IIndustry) => industry.id === organization[0].industry)[0];

    const enhancedBudget = budget.hourFrom && budget.hourTo ?
        `${(budget.hourTo + budget.hourFrom) / 2 * totalHours}` :
        `${budget.total}`;

    return (
        <Box sx={{ width: '100%' }}>
            <CustomBreadcrumbs title={title} />
            <DetailsTopSection
                title={title}
                subtitle={enhancedPositions[0].specialties[0].name}
                startDate={startDate}
                totalHours={totalHours}
                budget={enhancedBudget}
                totalApplicationsAmount={totalApplicationsAmount}
                industryName={enhancedIndustry.name}
            />
            <DetailsBodySection description={description} goals={goals} faqs={faqs} />
            <DetailsBottomSection projectLeader={projectLeader[0]} positions={enhancedPositions} organization={organization[0]} />

        </Box>
    );
}