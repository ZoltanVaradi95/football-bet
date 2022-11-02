import { Competition } from "./competition.interface";
import { Match } from "./match.interface";

export interface MatchesBase {
    count: number;
    filters: any;
    competitions: Competition[];
    matches:Match[];
}