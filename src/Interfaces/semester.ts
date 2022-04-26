import { Course } from "./course";

//A baseline for all semesters
export interface Semester {
    //The id is created whenever a new semester is added so we can tweak specific semesters
    id: string;
    //The year of the semester
    year: number;
    //The season of the semester
    season: string;
    //An array of all the courses inside the semester
    classes: Course[];
    //Gonna try n work with this as the sum/total number of credits at the end
    credits: number;
}
