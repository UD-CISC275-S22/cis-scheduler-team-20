import React from "react";
import { Modal, ModalTitle } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { AddCourseToSemester } from "./AddCourseToSemester";
<<<<<<< HEAD
=======

>>>>>>> 35a46dbf14a0b287775f92ca1b96032eed31ce79

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
