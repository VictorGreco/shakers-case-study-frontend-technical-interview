import { IBudget } from "./IBudget";
import { IFaq } from "./IFaq";
import { IOrganization } from "./IOrganization";
import { IPosition } from "./IPosition";
import { IProjectLeader } from "./IProjectLeader";

export interface IProject {
    id: number;
    title: string;
    organization: IOrganization;
    projectLeader: IProjectLeader;
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
    positions: IPosition[];
    totalApplicationsAmount: number;
    publishedAt: string;
}
