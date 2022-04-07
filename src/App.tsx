import React from "react";
import "./App.css";
import { AddSemester } from "./components/AddSemester";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Welcome To The UD Scheduler</header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <span>Ethan Stipes</span>
                <span> Tommy Ashfield </span>
                <span>Harrison Littlepage</span>
            </p>
            <AddSemester></AddSemester>
        </div>
    );
}

export default App;
