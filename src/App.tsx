import React, { useState } from "react";
import "./App.css";
//import { AddCourseButton } from "./components/AddCourseButton";
import { AddSemester } from "./components/AddSemester";
//import { AddFormSemester } from "./components/AddFormSemester";
import { Plan } from "./Interfaces/plan";
import { AddPlan } from "./components/AddPlan";
import { Button } from "react-bootstrap";
import { DisplayPlan } from "./components/DisplayPlan";
import { InsertSemesterModal } from "./components/InsertSemester";
import { SemesterTable } from "./components/SemesterTable";
import { origionalPlan } from "./Interfaces/origionalPlan";
import { Course } from "./Interfaces/course";
import { Semester } from "./Interfaces/semester";

function App(): JSX.Element {
    const [show, setShow] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [plans, setPlans] = useState<Plan[]>([]);
    const showModal = () => setShow(true);
    const dontShow = () => setShow(false);

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

    // State that handles add semester modal
    const [showTheModal, setShowModal] = useState<boolean>(false);

    //These are for opening and closing the insert modal
    const handleShowInsertSemesterModal = () => setShowModal(true);
    const handleCloseInsertSemesterModal = () => setShowModal(false);

    function changeVisibilty(): void {
        setVisible(!visible);
        showModal();
    }

    function addPlan(newPlan: Plan) {
        const existing = plans.find(
            (plan: Plan): boolean => plan.name === newPlan.name
        );
        if (existing === undefined) {
            setPlans([...plans, newPlan]);
        }
    }
    return (
        <>
            <div className="App">
                <div>
                    <header className="App-header">
                        <img
                            className="logo"
                            src="https://fanapeel.com/wp-content/uploads/logo_-university-of-delaware-fightin-blue-hens-ud.png"
                            alt="a UD logo"
                        />
                        Welcome To The UDegree Plan
                    </header>
                </div>
                <div>
                    <Button className="plan" onClick={changeVisibilty}>
                        Create Plan
                    </Button>
                    <p className="introduction">
                        Here you will be able to create a custom degree plan for
                        yourself. Press Edit Semester to add the classes you are
                        currently in or have previously taken, and then press
                        add semester to get started creating your full degree
                        plan!
                    </p>
                </div>
                <p className="semester_title">Fall (year) Semester</p>
                {visible && <DisplayPlan plan={plans}></DisplayPlan>}
                <AddSemester></AddSemester>
                <AddPlan close={dontShow} plan={addPlan} show={show}></AddPlan>

                <Button
                    onClick={handleShowInsertSemesterModal}
                    data-testid="add_semester_button"
                >
                    Add Semester 1
                </Button>
                <InsertSemesterModal
                    showModal={showTheModal}
                    closeModal={handleCloseInsertSemesterModal}
                ></InsertSemesterModal>
                <SemesterTable
                    plan={origionalPlan}
                    clearSem={clearSem}
                    deleteSemester={deleteSemester}
                    courseAdder={courseAdder}
                    delCourseFunct={delCourseFunct}
                    editCourseFunct={editCourseFunct}
                    moveCourse={moveCourse}
                    moveCourseToPool={moveCourseToPool}
                ></SemesterTable>
            </div>
        </>
    );
}

export default App;
