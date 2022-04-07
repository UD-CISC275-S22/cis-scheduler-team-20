import React from "react";
import "./App.css";
import { AddSemester } from "./components/AddSemester";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    className="logo"
                    src="https://fanapeel.com/wp-content/uploads/logo_-university-of-delaware-fightin-blue-hens-ud.png"
                    alt="a UD logo"
                />
                Welcome To The UD Degree Plan Scheduler
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <span>Ethan Stipes</span>
                <span> Tommy Ashfield </span>
                <span>Harrison Littlepage</span>
            </p>
            <AddSemester></AddSemester>
            <p className="semester_title">Fall (year) Semester</p>
        </div>
    );
}

export default App;
