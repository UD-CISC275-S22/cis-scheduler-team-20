import React from "react";
import { Modal, ModalTitle } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { EditCourseInSemester } from "./EditCourseInSemester";
//import { EditCourseInSemester } from "./EditCourseInSemester";

//holds the modal and brings up the AddCourseToSemester UI in a modal window

export function EditCourseModal({
    showModal,
    semester,
    course,
    closeModal,
    courseEditor
}: {
    showModal: boolean;
    semester: Semester;
    course: Course;
    closeModal: () => void;
    courseEditor: (courseID: string, newCourse: Course, semID: string) => void;
}): JSX.Element {
    return (
        <Modal show={showModal} onHide={closeModal} animation={false} size="lg">
            <Modal.Header closeButton>
                <ModalTitle>
                    Edit Course {course.code} in {semester.season}{" "}
                    {semester.year}
                </ModalTitle>
            </Modal.Header>
            <Modal.Body>
                <EditCourseInSemester
                    semID={semester.id}
                    course={course}
                    courseEditor={courseEditor}
                    closeModal={closeModal}
                ></EditCourseInSemester>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
}
