/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { origionalPlan } from "../Interfaces/origionalPlan";
import { Plan } from "../Interfaces/plan";
import { Semester } from "../Interfaces/semester";
import { InsertSemesterModal } from "./InsertSemester";
import { SemesterTable } from "./SemesterTable";

//Funciton to display a plan on the screen
export function DisplayPlan({
    plan
}: //editPlan,
//deletePlan
{
    plan: Plan[];
    //editPlan: (name: string, newPlan: Plan) => void;
    //deletePlan: (name: string) => void;
}): JSX.Element {
    const [show, setShow] = useState<boolean>(false);

    const [visible, setVisible] = useState<boolean>(false);
    const [semesters, setSemesters] = useState<Semester[]>([]);
    const trueVisible = () => setVisible(true);
    const falseVisible = () => setVisible(false);

    function changeShow(): void {
        setShow(!visible);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function clearSem(planID: number, semYear: number, semSeas: string): void {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const a = 1;
    }
    function deleteSemester(semesterId: string): void {
        origionalPlan.semesters.splice(
            origionalPlan.semesters.findIndex(
                (sem: Semester): boolean => sem.id === semesterId
            ),
            1
        );
    }
    function courseAdder(newCourse: Course, semID: string): void {
        const ind = origionalPlan.semesters.findIndex(
            (sem: Semester): boolean => sem.id === semID
        );
        origionalPlan.semesters[ind].classes = [
            ...origionalPlan.semesters[ind].classes,
            newCourse
        ];
    }
    function delCourseFunct(code: string, semID: string): void {
        const ind = origionalPlan.semesters.findIndex(
            (sem: Semester): boolean => sem.id === semID
        );
        origionalPlan.semesters[ind].classes.splice(
            origionalPlan.semesters[ind].classes.findIndex(
                (clas: Course): boolean => clas.code === code
            ),
            1
        );
    }
    function editCourseFunct(
        oldCourse: Course,
        newCourse: Course,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        semID: string
    ): void {
        oldCourse = newCourse;
    }
    function moveCourse(
        courseToMove: Course,
        fromSemester: Semester,
        toSemester: Semester
    ): void {
        fromSemester.classes.splice(
            fromSemester.classes.findIndex(
                (clas: Course): boolean => clas === courseToMove
            ),
            1
        );
        toSemester.classes = [...toSemester.classes, courseToMove];
    }
    function moveCourseToPool(
        courseToMove: Course,
        fromSemester: Semester
    ): void {
        fromSemester.classes.splice(
            fromSemester.classes.findIndex(
                (clas: Course): boolean => clas === courseToMove
            ),
            1
        );
    }
    function addSemester(newSemester: Semester) {
        const exists = semesters.find(
            (semester: Semester): boolean =>
                semester.season === newSemester.season &&
                semester.year === semester.year
        );
        if (exists === undefined) {
            setSemesters([...semesters, newSemester]);
        }
    }
    return (
        <Container>
            <Row>
                <Col>
                    {plan.map((plan: Plan) => (
                        <>
                            <h1>{plan.name}</h1>
                            <Button
                                data-testid="ViewPlanButton"
                                onClick={changeShow}
                            >
                                View Plan
                            </Button>
                            {show && (
                                <Col>
                                    <Button
                                        onClick={trueVisible}
                                        data-testid="add_semester_button"
                                    >
                                        Add Semester 1
                                    </Button>
                                    <InsertSemesterModal
                                        showModal={visible}
                                        closeModal={falseVisible}
                                        semester={addSemester}
                                    ></InsertSemesterModal>
                                    <SemesterTable
                                        plan={plan}
                                        semesters={semesters}
                                        clearSem={clearSem}
                                        deleteSemester={deleteSemester}
                                        courseAdder={courseAdder}
                                        delCourseFunct={delCourseFunct}
                                        editCourseFunct={editCourseFunct}
                                        moveCourse={moveCourse}
                                        moveCourseToPool={moveCourseToPool}
                                    ></SemesterTable>
                                </Col>
                            )}
                        </>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}
