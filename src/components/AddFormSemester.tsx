import { origionalPlan } from "../Interfaces/origionalPlan";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";
import { Course } from "../Interfaces/course";
//Should Add a Semester to the Semester Array
export function AddFormSemester(): JSX.Element {
    const [semNum, setSemNum] = useState<number>(1);
    const [season, setSeason] = useState<string>("Fall");
    const [year, setYear] = useState<number>(2022);
    const years = [
        2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033,
        2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045,
        2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057,
        2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069,
        2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081,
        2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093,
        2094, 2095, 2096, 2097, 2098, 2099, 2100
    ];
    function addFormSem(): void {
        origionalPlan.semesters = [
            ...origionalPlan.semesters,
            {
                id: "" + semNum,
                season: season,
                year: year,
                classes: [
                    {
                        code: "CISC108",
                        name: "Introduction to Computer Science I",
                        descr: "Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, but intended primarily for majors and minors in computer science or mathematics.",
                        credits: "3",
                        preReq: "",
                        restrict: "",
                        breadth:
                            "University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology",
                        typ: "Fall and Spring"
                    },
                    {
                        code: "CISC 275",
                        name: "Introduction to Software Engineering",
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
        ];
        setSemNum(semNum + 1);
        console.log("Added Semester");
    }
    function updateSeason(event: React.ChangeEvent<HTMLSelectElement>) {
        setSeason(event.target.value);
    }
    function updateYear(event: React.ChangeEvent<HTMLSelectElement>) {
        setYear(parseInt(event.target.value));
    }
    return (
        <div>
            <select value={season} onChange={updateSeason}>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
            </select>
            <select value={year} onChange={updateYear}>
                {years.map((yr: number) => (
                    <option key={yr} value={yr}>
                        {yr}
                    </option>
                ))}
            </select>
            <Button onClick={addFormSem}>Add Semester</Button>
            <div>
                {origionalPlan.semesters.map((sem: Semester) => (
                    <Form.Group
                        key={sem.season + sem.year}
                        style={{ border: "1px solid black" }}
                    >
                        <Row>
                            <Col>
                                <h3>{sem.season + " " + sem.year}</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5>{"Class Code"}</h5>
                            </Col>
                            <Col>
                                <h5>{"Class Name"}</h5>
                            </Col>
                            <Col>
                                <h5>{"Credits"}</h5>
                            </Col>
                        </Row>
                        {sem.classes.map((cls: Course) => (
                            <Row key={cls.code}>
                                <Col>{cls.code}</Col>
                                <Col>{cls.name}</Col>
                                <Col>{cls.credits}</Col>
                            </Row>
                        ))}
                    </Form.Group>
                ))}
            </div>
        </div>
    );
}
