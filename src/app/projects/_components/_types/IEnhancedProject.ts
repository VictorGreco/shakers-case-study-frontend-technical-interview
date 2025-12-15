import { IBudget } from "./IBudget";
import { IEnhancedPosition } from "./IEnhancedPosition";
import { IFaq } from "./IFaq";
import { IOrganization } from "./IOrganization";
import { IProjectLeader } from "./IProjectLeader";

export interface IEnhancedProject {
    id: number;
    title: string;
    organization: IOrganization[];
    projectLeader: IProjectLeader[];
    category: number;
    subcategory: number;
    startDate: string;
    budget: IBudget;
    totalHours: number;
    description: string;
    goals: string[];
    faqs: IFaq[];
    status: string;
    creationDate: string;
    positions: IEnhancedPosition[];
    totalApplicationsAmount: number;
    publishedAt: string;
}
