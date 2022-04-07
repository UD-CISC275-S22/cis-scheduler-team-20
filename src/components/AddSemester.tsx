import React from "react";
import { Button } from "react-bootstrap";

export function AddSemester(): JSX.Element {
    return (
        <div>
            <Button onClick={() => console.log("Added Semester")}>
                Add Semester
            </Button>
        </div>
    );
}
