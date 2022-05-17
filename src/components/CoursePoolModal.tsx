import { Course } from "../Interfaces/course";
import React, { useState } from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { AddToCoursePool } from "./AddToCoursePool";

export function CoursePool({
    closeModal,
    coursePool,
    setCoursePool
}: {
    closeModal: () => void;
    coursePool: Course[];
    setCoursePool: React.Dispatch<React.SetStateAction<Course[]>>;
}): JSX.Element {
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleShowAddCourseModal = () => setShowModal(true);

    return (
        <div>
            <Button
                data-testid="addCourseButton"
                style={{ backgroundColor: "green" }}
                onClick={handleShowAddCourseModal}
            >
                Add Course To Pool
            </Button>
            <Modal show={showModal} onHide={closeModal} animation={false}>
                <ModalHeader closeButton>
                    <ModalTitle>Add a Course to Pool</ModalTitle>
                </ModalHeader>
                <Modal.Body>
                    <AddToCoursePool
                        closeModal={setShowModal}
                        coursePool={coursePool}
                        setCoursePool={setCoursePool}
                    ></AddToCoursePool>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </div>
    );
}
