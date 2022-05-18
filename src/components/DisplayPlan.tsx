import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { Plan } from "../Interfaces/plan";
import { Semester } from "../Interfaces/semester";
import { SemesterTable } from "./SemesterTable";

//Funciton to display a plan on the screen
export function DisplayPlan({
    plans,
    setPlans
}: {
    plans: Plan[];
    setPlans: React.Dispatch<React.SetStateAction<Plan[]>>;
}): JSX.Element {
    function changeShow(pln: Plan): void {
        const newPln = { ...pln, vis: !pln.vis };
        setPlans(
            plans.map(
                (plan: Plan): Plan => (plan.name === pln.name ? newPln : plan)
            )
        );
    }

    function clearSem(
        planName: string,
        semYear: number,
        semSeas: string
    ): void {
        const ind = plans.findIndex(
            (plan: Plan): boolean => plan.name === planName
        );
        const pln = plans[ind];
        const inde = pln.semesters.findIndex(
            (sem: Semester): boolean =>
                sem.year === semYear && sem.season === semSeas
        );
        pln.semesters[inde].classes = [];
        setPlans(plans.splice(ind, 1, pln));
    }

    function deleteSemester(semesterId: string): void {
        const ind = plans.findIndex(
            (plan: Plan): boolean =>
                plan.semesters.findIndex(
                    (sem: Semester): boolean => sem.id === semesterId
                ) !== -1
        );
        const pln = plans[ind];
        pln.semesters.splice(
            pln.semesters.findIndex(
                (sem: Semester): boolean => sem.id === semesterId
            ),
            1
        );
        setPlans(plans.splice(ind, 1, pln));
    }
    function courseAdder(newCourse: Course, semID: string): void {
        const ind = plans.findIndex(
            (plan: Plan): boolean =>
                plan.semesters.findIndex(
                    (sem: Semester): boolean => sem.id === semID
                ) !== -1
        );
        const pln = plans[ind];
        const inde = pln.semesters.findIndex(
            (sem: Semester): boolean => sem.id === semID
        );
        const sm = pln.semesters[inde];
        sm.classes = [...sm.classes, newCourse];
        pln.semesters.splice(inde, 1, sm);
        setPlans(plans.splice(ind, 1, pln));
    }
    function delCourseFunct(code: string, semID: string): void {
        const ind = plans.findIndex(
            (plan: Plan): boolean =>
                plan.semesters.findIndex(
                    (sem: Semester): boolean => sem.id === semID
                ) !== -1
        );
        const pln = plans[ind];
        const inde = pln.semesters.findIndex(
            (sem: Semester): boolean => sem.id === semID
        );
        const sm = pln.semesters[inde];
        sm.classes.splice(
            sm.classes.findIndex((clas: Course): boolean => clas.code === code),
            1
        );
        pln.semesters.splice(ind, 1, sm);
        setPlans(plans.splice(ind, 1, pln));
    }
    function editCourseFunct(
        courseID: string,
        newCourse: Course,
        semID: string
    ): void {
        const ind = plans.findIndex(
            (plan: Plan): boolean =>
                plan.semesters.findIndex(
                    (sem: Semester): boolean => sem.id === semID
                ) !== -1
        );
        const pln = plans[ind];
        const inde = pln.semesters.findIndex(
            (sem: Semester): boolean => sem.id === semID
        );
        const sm = pln.semesters[inde];
        const nsm = {
            ...sm,
            classes: sm.classes.map(
                (cours: Course): Course =>
                    cours.code === courseID ? newCourse : cours
            )
        };
        const newEdit = {
            ...pln,
            semesters: pln.semesters.map(
                (semestr: Semester): Semester =>
                    semestr.id === semID ? nsm : semestr
            )
        };
        setPlans(
            plans.map(
                (plan: Plan): Plan => (plan.name === pln.name ? newEdit : plan)
            )
        );
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
    return (
        <Container>
            <Row>
                <Col>
                    {plans.map((plan: Plan) => (
                        <>
                            <h1>{plan.name}</h1>
                            <Button
                                data-testid="ViewPlanButton"
                                onClick={() => changeShow(plan)}
                            >
                                View Plan
                            </Button>
                            {plan.vis && (
                                <Col>
                                    <SemesterTable
                                        plan={plan}
                                        plans={plans}
                                        setPlans={setPlans}
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
