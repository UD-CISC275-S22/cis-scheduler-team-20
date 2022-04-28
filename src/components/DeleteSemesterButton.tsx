import React from "react";
import { Button } from "react-bootstrap";
//Deletes the semester from the page
export function DeleteSemesterButton({
    semesterId,
    deleteSemester
}: {
    planId: number;
    semesterId: string;
    deleteSemester: (semesterId: string) => void;
}): JSX.Element {
    return (
        <div>
            <Button variant="danger" onClick={() => deleteSemester(semesterId)}>
                Delete Semester
            </Button>
        </div>
    );
}
