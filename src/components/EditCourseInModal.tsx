import React from "react";
import { Modal } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
//import { EditCourseInSemester } from "./EditCourseInSemester";

//holds the modal and brings up the AddCourseToSemester UI in a pop-up window

export function EditCourseModal({
    showModal,
    semester,
    course,
    closeModal
}: {
    showModal: boolean;
    semester: Semester;
    course: Course;
    closeModal: () => void;
    courseEditor: (oldCourse: Course, newCourse: Course, semID: string) => void;
}): JSX.Element {
    return (
        <Modal show={showModal} onHide={closeModal} animation={false} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    Edit Course {course.code} in {semester.year}
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
}
