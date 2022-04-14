import React from "react";
import "./App.css";
import { AddClass } from "./components/AddClass";
import { AddSemester } from "./components/AddSemester";

function App(): JSX.Element {
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
                <div style={{ border: "4px darkblue" }}>
                    <p className="introduction">
                        Here you will be able to create a custom degree plan for
                        yourself. Press Edit Semester to add the classes you are
                        currently in or have previously taken, and then press
                        add semester to get started creating your full degree
                        plan!
                    </p>
                </div>
                <p className="semester_title">Fall (year) Semester</p>
                <AddSemester></AddSemester>
                <AddClass></AddClass>
            </div>
        </>
    );
}

export default App;
