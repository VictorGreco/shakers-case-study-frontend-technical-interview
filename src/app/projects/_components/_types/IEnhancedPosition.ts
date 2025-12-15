import { ISkill } from "./ISkill";

export interface IEnhancedPosition {
    id: number;
    title: string;
    skills: ISkill[];
    specialties: number[];
    referralBonus: number;
}