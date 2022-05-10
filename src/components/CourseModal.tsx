import React from "react";
import { Modal } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { AddCoursetoSemester } from "./AddCourseToSemester";
//holds the modal and brings up the AddCourseToSemester UI in a pop-up window
//Wee

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
            <Modal.Header closeButton>
                <Modal.Title>
                    Add a Course to {semester.season} {semester.year}
                </Modal.Title>
            </Modal.Header>
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
