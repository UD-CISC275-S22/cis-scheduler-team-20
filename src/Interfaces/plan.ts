import { Semester } from "./semester";

export interface Plan {
    //Give each plan a different number id to access easier
    id: number;
    //An array of the semesters within the plan
    semesters: Semester[];
    //The users name for the plan
    name: string;
}
