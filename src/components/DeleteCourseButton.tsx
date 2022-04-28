import React from "react";
import { Button } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";

interface DelCourseProp {
    semester: Semester;
    course: Course;
    delFunct: (courseCode: string, semID: string) => void;
}

export function DeleteCourseButton({
    semester,
    course,
    delFunct
}: DelCourseProp): JSX.Element {
    //button to delete the selected course from the plan
    return (
        <div>
            <Button
                variant="danger"
                onClick={() => delFunct(course.code, semester.id)}
            >
                Delete
            </Button>
        </div>
    );
}
