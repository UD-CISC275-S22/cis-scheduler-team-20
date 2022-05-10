import React, { useState } from "react";
import "./App.css";
//import { AddCourseButton } from "./components/AddCourseButton";
//import { AddSemester } from "./components/AddSemester";
//import { AddFormSemester } from "./components/AddFormSemester";
import { Plan } from "./Interfaces/plan";
import { AddPlan } from "./components/AddPlan";
import { Button } from "react-bootstrap";
import { DisplayPlan } from "./components/DisplayPlan";
//import { InsertSemesterModal } from "./components/InsertSemester";
//import { SemesterTable } from "./components/SemesterTable";
//import { origionalPlan } from "./Interfaces/origionalPlan";
//import { Course } from "./Interfaces/course";
//import { Semester } from "./Interfaces/semester";

function App(): JSX.Element {
    const [show, setShow] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [plans, setPlans] = useState<Plan[]>([]);
    const showModal = () => setShow(true);
    const dontShow = () => setShow(false);

    function changeVisibilty(): void {
        setVisible(true);
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
                    <Button
                        data-testid="createPlanButton"
                        className="plan"
                        onClick={changeVisibilty}
                    >
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
                {/*<p className="semester_title">Fall (year) Semester</p>*/}
                {visible && (
                    <DisplayPlan
                        plans={plans}
                        setPlans={setPlans}
                    ></DisplayPlan>
                )}
                {/*<AddSemester></AddSemester>*/}
                <AddPlan close={dontShow} plan={addPlan} show={show}></AddPlan>
            </div>
        </>
    );
}

export default App;
