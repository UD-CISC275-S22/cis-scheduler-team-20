import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { AddCourseModal } from "./CourseModal";

interface AddButtonProp {
    semester: Semester;
    courseAdder: (newCourse: Course, semID: string) => void;
}

export function AddCourseButton({
    semester,
    courseAdder
}: AddButtonProp): JSX.Element {
    //states for handling the modal window
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleShowAddCourseModal = () => setShowModal(true);
    const handleCloseAddCourseModal = () => setShowModal(false);

    return (
        <div>
            <Button background-color="green" onClick={handleShowAddCourseModal}>
                Add New Course
            </Button>
            <AddCourseModal
                showModal={showModal}
                semester={semester}
                closeModal={handleCloseAddCourseModal}
                courseAdder={courseAdder}
            ></AddCourseModal>
        </div>
    );
}
