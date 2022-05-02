import React, { useState } from "react";
import "./App.css";
import { AddSemester } from "./components/AddSemester";
//import { AddFormSemester } from "./components/AddFormSemester";
import { Plan } from "./Interfaces/plan";
import { AddPlan } from "./components/AddPlan";
import { Button } from "react-bootstrap";
import { DisplayPlan } from "./components/DisplayPlan";
import { AddSemesterToPlan } from "./components/AddSemesterToPlan";

function App(): JSX.Element {
    const [show, setShow] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [plans, setPlans] = useState<Plan[]>([]);
    const showModal = () => setShow(true);
    const dontShow = () => setShow(false);

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
                <AddSemesterToPlan></AddSemesterToPlan>
                <AddPlan close={dontShow} plan={addPlan} show={show}></AddPlan>
            </div>
        </>
    );
}

export default App;
