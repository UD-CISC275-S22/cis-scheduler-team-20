import React from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";
//Button to clear the entire semester
interface clearSemesterProp {
    PlanID: number;
    thisSem: Semester;
    clearFunct: (planID: number, semYear: number, semSeas: string) => void;
}

export function ClearSemesterButton({
    PlanID,
    thisSem,
    clearFunct
}: clearSemesterProp) {
    return (
        <div>
            <Button
                disabled={thisSem.classes.length <= 0}
                onClick={() => clearFunct(PlanID, thisSem.year, thisSem.season)}
                data-testid="clearSemesterButton"
            >
                Clear This Semester
            </Button>
        </div>
    );
}
