import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { EditCourseModal } from "./EditCourseInModal";

//This handles the buttons to add a course to any given semester of the active course(or so I beleive, little bug happening)

export interface EditButtonProp {
    semester: Semester;
    course: Course;
    courseEditor: (courseID: string, newCourse: Course, semID: string) => void;
}

export function EditCourseButton({
    semester,
    course,
    courseEditor
}: EditButtonProp): JSX.Element {
    //states for handling the modal window
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleShowEditCourseModal = () => setShowModal(true);
    const handleCloseEditCourseModal = () => setShowModal(false);

    return (
        <div>
            <Button
                style={{ backgroundColor: "yellow", color: "black" }}
                onClick={handleShowEditCourseModal}
            >
                Edit
            </Button>
            <EditCourseModal
                showModal={showModal}
                semester={semester}
                course={course}
                closeModal={handleCloseEditCourseModal}
                courseEditor={courseEditor}
            ></EditCourseModal>
        </div>
    );
}
