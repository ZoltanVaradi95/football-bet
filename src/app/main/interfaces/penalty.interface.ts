import { Score } from "./score.interface";
import { Scorer } from "./scorer.interface";
import { Team } from "./team.interface";

export interface Penalty {
    player: Scorer;
    team: Team;
    scored: boolean;
    score: Score;
}
