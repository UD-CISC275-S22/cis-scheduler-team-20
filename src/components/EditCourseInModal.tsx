import React from "react";
import { Modal, ModalTitle } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
//import { EditCourseInSemester } from "./EditCourseInSemester";

//holds the modal and brings up the AddCourseToSemester UI in a modal window

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
            <ModalHeader closeButton>
                <ModalTitle>
                    Edit Course {course.code} in {semester.year}
                </ModalTitle>
            </ModalHeader>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
}
