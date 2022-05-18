import React, { useState } from "react";
import "./App.css";
import { Plan } from "./Interfaces/plan";
import { AddPlan } from "./components/AddPlan";
import { Button } from "react-bootstrap";
import { DisplayPlan } from "./components/DisplayPlan";
import { Course } from "./Interfaces/course";
import { CoursePool } from "./components/CoursePoolModal";
import { AddCourseFromPool } from "./components/AddCourseFromPool";

function App(): JSX.Element {
    const [show, setShow] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [plans, setPlans] = useState<Plan[]>([]);
    const [coursePool, setCoursePool] = useState<Course[]>([]);
    const showModal = () => setShow(true);
    const dontShow = () => setShow(false);
    const falseVisible = () => setVisible(false);

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
                    <p className="introduction">
                        Here you will be able to create a custom degree plan for
                        yourself. Press Edit Semester to add the classes you are
                        currently in or have previously taken, and then press
                        add semester to get started creating your full degree
                        plan!
                    </p>
                </div>
                <div>
                    <CoursePool
                        closeModal={falseVisible}
                        coursePool={coursePool}
                        setCoursePool={setCoursePool}
                    ></CoursePool>
                    <AddCourseFromPool
                        plans={plans}
                        setPlans={setPlans}
                        coursePool={coursePool}
                    ></AddCourseFromPool>
                </div>
                <div>
                    <Button
                        data-testid="createPlanButton"
                        className="plan"
                        onClick={changeVisibilty}
                    >
                        Create Plan
                    </Button>
                </div>
                {visible && (
                    <DisplayPlan
                        plans={plans}
                        setPlans={setPlans}
                    ></DisplayPlan>
                )}
                <AddPlan close={dontShow} plan={addPlan} show={show}></AddPlan>
            </div>
        </>
    );
}

export default App;
