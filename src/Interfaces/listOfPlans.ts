import { Plan } from "./plan";
import { origionalPlan } from "./origionalPlan";

const listOfPlans: Plan[] = [
    origionalPlan,
    {
        name: "Plan 2",
        id: 1,
        semesters: [
            {
                id: "0",
                season: "Fall",
                year: 2020,
                classes: [
                    {
                        code: "MATH241",
                        name: "Discrete Mathematics",
                        descr: "Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, but intended primarily for majors and minors in computer science or mathematics.",
                        credits: "3",
                        preReq: "",
                        restrict: "",
                        breadth:
                            "University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology",
                        typ: "Fall and Spring"
                    },
                    {
                        code: "ENGL110",
                        name: "English Writing",
                        descr: "Object oriented software design and development through use of an object oriented programming language. Topics include team programming, design patterns, graphical user interfaces, software engineering tools (e.g., integrated development environments, version control, build management, bug tracking, automated testing).",
                        credits: "3",
                        preReq: "Minimum grade of C- in CISC 181 and CISC 220.",
                        restrict: "",
                        breadth: "University: ; A&S: ",
                        typ: "Fall and Spring"
                    }
                ],
                credits: 6
            }
        ]
    }
];

export { listOfPlans };
