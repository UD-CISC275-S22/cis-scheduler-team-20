//A baseline for all the courses

export interface Course {
    code: string;
    name: string;
    descr: string;
    credits: string;
    preReq: string[];
    restrict: string;
    breadth: string;
    typ: string;
}