import { Winner } from "./winner.interface";

export interface CurrentSeason {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday?: number;
    winner?: Winner;
}