import { Score } from "./score.interface";
import { Scorer } from "./scorer.interface";
import { Team } from "./team.interface";

export interface Goal {
    minute: number;
    injuryTime?: number;
    type: string;
    team: Team;
    scorer: Scorer;
    assist: Scorer;
    score: Score;
}