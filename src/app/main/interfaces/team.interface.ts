import { Coach } from "./coach.interface";

export interface Team {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    coach: Coach;
    leagueRank: number;
    formation: string;
    lineup: any[];
    bench: any[];
}