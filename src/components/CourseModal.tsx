import React from "react";
import { Modal, ModalTitle } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { AddCoursetoSemester } from "./AddCoursetoSemester";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";

//holds the modal and brings up the AddCourseToSemester UI in a pop-up window
//

export function AddCourseModal({
    showModal,
    semester,
    closeModal,
    courseAdder
}: {
    showModal: boolean;
    semester: Semester;
    closeModal: () => void;
    courseAdder: (newCourse: Course, semID: string) => void;
}): JSX.Element {
    return (
        <Modal show={showModal} onHide={closeModal} animation={false}>
            <ModalHeader closeButton>
                <ModalTitle>
                    Add a Course to {semester.season} {semester.year}
                </ModalTitle>
            </ModalHeader>
            <Modal.Body>
                <AddCoursetoSemester
                    semesterID={semester.id}
                    courseAdder={courseAdder}
                    closeModal={closeModal}
                ></AddCoursetoSemester>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
}
