import { PartTime } from "./time.interface";

export interface Score {
    winner: string;
    duration: string;
    fullTime: PartTime;
    halfTime: PartTime;
}