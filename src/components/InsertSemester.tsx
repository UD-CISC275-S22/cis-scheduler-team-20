import React, { useState } from "react";
//import { Semester } from "../Interfaces/semester";
import { AddSemester } from "./AddSemester";
import { Button, Col, Form, Modal, ModalTitle, Row } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

//Adds a semester to a specific plan
export function InsertSemesterModal({
    showModal,
    closeModal
}: {
    showModal: boolean;
    closeModal: () => void;
}): JSX.Element {
    const [year, setYear] = useState<number>(2022);
    const [season, setSeason] = useState<string>("Fall");

    return (
        <Modal show={showModal} onHide={closeModal} animation={false}>
            <ModalHeader closeButton>
                <ModalTitle>Add Semester</ModalTitle>
            </ModalHeader>
            <Modal.Body>
                <Form.Group controlId="formYear" as={Row}>
                    <Form.Label column sm={3}>
                        Year:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={year}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setYear(parseInt(event.target.value) || 0)}
                        ></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group controlId="formSeason">
                    <Form.Label column sm={3}>
                        Season:
                    </Form.Label>
                    <Col>
                        <Form.Select
                            value={season}
                            onChange={(
                                event: React.ChangeEvent<HTMLSelectElement>
                            ) => setSeason(event.target.value)}
                        >
                            <option value="Fall">Fall</option>
                            <option value="Spring">Spring</option>
                            <option value="Winter">Winter</option>
                            <option value="Summer">Summer</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
                <Button variant="primarmy" onClick={AddSemester}>
                    Add Semester
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
