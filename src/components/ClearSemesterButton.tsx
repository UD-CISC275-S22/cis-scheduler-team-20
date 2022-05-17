import React from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";
//Button to clear the entire semester
interface clearSemesterProp {
    PlanName: string;
    thisSem: Semester;
    clearFunct: (planName: string, semYear: number, semSeas: string) => void;
}

export function ClearSemesterButton({
    PlanName,
    thisSem,
    clearFunct
}: clearSemesterProp) {
    return (
        <div>
            <Button
                disabled={thisSem.classes.length <= 0}
                onClick={() =>
                    clearFunct(PlanName, thisSem.year, thisSem.season)
                }
                data-testid="clearSemesterButton"
            >
                Clear This Semester
            </Button>
        </div>
    );
}
