import React, { useState } from "react";
import "./App.css";
//import { AddCourseButton } from "./components/AddCourseButton";
import { AddSemester } from "./components/AddSemester";
import { AddFormSemester } from "./components/AddFormSemester";
import { Plan } from "./Interfaces/plan";
import { AddPlan } from "./components/AddPlan";
import { Button } from "react-bootstrap";
import { DisplayPlan } from "./components/DisplayPlan";
import { InsertSemesterModal } from "./components/InsertSemester";

function App(): JSX.Element {
    const [show, setShow] = useState<boolean>(false);
    const [plans, setPlans] = useState<Plan[]>([]);
    const showModal = () => setShow(true);
    const dontShow = () => setShow(false);

    // State that handles add semester modal
    const [showTheModal, setShowModal] = useState<boolean>(false);

    //These are for opening and closing the insert modal
    const handleShowInsertSemesterModal = () => setShowModal(true);
    const handleCloseInsertSemesterModal = () => setShowModal(false);

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
                    <Button className="plan" onClick={showModal}>
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
                <DisplayPlan plan={plans}></DisplayPlan>
                <AddSemester></AddSemester>
                <AddFormSemester></AddFormSemester>
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
            </div>
        </>
    );
}

export default App;
