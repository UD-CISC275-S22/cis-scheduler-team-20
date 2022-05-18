import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { Plan } from "../Interfaces/plan";
import { Semester } from "../Interfaces/semester";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function AddCourseFromPool({
    coursePool,
    plans,
    setPlans
}: {
    coursePool: Course[];
    plans: Plan[];
    setPlans: React.Dispatch<React.SetStateAction<Plan[]>>;
}): JSX.Element {
    const [course, setCourse] = useState<Course>({
        code: "",
        name: "",
        descr: "",
        credits: "",
        preReq: [""],
        restrict: "",
        breadth: "",
        typ: ""
    });
    const [courseName, setCourseName] = useState<string>();
    const [planName, setPlanName] = useState<string>();
    const [semName, setSemName] = useState<string>();
    function updateCourse(event: ChangeEvent): void {
        const ind = coursePool.findIndex(
            (cours: Course): boolean => cours.code === event.target.value
        );
        setCourse(coursePool[ind]);
        setCourseName(event.target.value);
    }
    function updatePlan(event: ChangeEvent): void {
        const ind = plans.findIndex(
            (pln: Plan): boolean => pln.name === event.target.value
        );
        setPlanName(plans[ind].name);
    }
    function updateSemName(event: ChangeEvent): void {
        const ind = plans.findIndex(
            (pln: Plan): boolean => pln.name === planName
        );
        const inde = plans[ind].semesters.findIndex(
            (sem: Semester): boolean => sem.id === event.target.value
        );
        setSemName(plans[ind].semesters[inde].id);
    }
    function courseFromPool(clss: Course): void {
        const ind = plans.findIndex(
            (pln: Plan): boolean => pln.name === planName
        );
        const pln = plans[ind];
        const pln2 = {
            id: pln.id,
            name: pln.name,
            semesters: pln.semesters.map(
                (sem: Semester): Semester =>
                    sem.id === semName
                        ? { ...sem, classes: [...sem.classes, clss] }
                        : sem
            ),
            vis: pln.vis
        };
        setPlans(
            plans.map(
                (plan: Plan): Plan => (plan.name === planName ? pln2 : plan)
            )
        );
    }
    return (
        <div>
            <select value={courseName} onChange={updateCourse}>
                {coursePool.map((course: Course) => (
                    <option key={course.code} value={course.code}>
                        {course.code}
                    </option>
                ))}
            </select>
            <select value={planName} onChange={updatePlan}>
                {plans.map((pln: Plan) => (
                    <option key={pln.name} value={pln.name}>
                        {pln.name}
                    </option>
                ))}
            </select>
            <select value={semName} onChange={updateSemName}>
                {plans
                    .find((pln: Plan): boolean => pln.name === planName)
                    ?.semesters.map((sem: Semester) => (
                        <option key={sem.id} value={sem.id}>
                            {sem.id}
                        </option>
                    ))}
            </select>
            <Button onClick={() => courseFromPool(course)}>
                Add From Pool
            </Button>
        </div>
    );
}
