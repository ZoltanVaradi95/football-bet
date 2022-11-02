import { Status } from "../enums/status.enum";
import { Area } from "./area.interface";
import { Competition } from "./competition.interface";
import { Goal } from "./goal.interface";
import { Odds } from "./odds.interface";
import { Penalty } from "./penalty.interface";
import { Referee } from "./refree.interface";
import { Score } from "./score.interface";
import { Season } from "./season.interface";
import { Team } from "./team.interface";

export interface Match {
    area: Area;
    competition: Competition;
    season: Season;
    id: number;
    utcDate: Date;
    status: Status;
    minute: string;
    injuryTime: number;
    attendance?: number;
    venue: string;
    matchday: number;
    stage: string;
    group?: any;
    lastUpdated: Date;
    homeTeam: Team;
    awayTeam: Team;
    score: Score;
    goals: Goal[];
    penalties: Penalty[];
    bookings: any[];
    substitutions: any[];
    odds: Odds;
    referees: Referee[];
}