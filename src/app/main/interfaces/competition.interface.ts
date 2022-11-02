import { Area } from "./area.interface";
import { CurrentSeason } from "./current-season.interface";

export interface Competition {
    id: number;
    area: Area;
    name: string;
    code: string;
    type: string;
    emblem: string;
    plan: string;
    currentSeason: CurrentSeason;
    numberOfAvailableSeasons: number;
    lastUpdated: Date;
}