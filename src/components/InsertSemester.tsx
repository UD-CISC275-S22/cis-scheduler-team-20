import React, { useState } from "react";
import { origionalPlan } from "../Interfaces/origionalPlan";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";

//Adds a semester to a specific plan
export function InsertSemesterModal({
    showModal,
    closeModal,
    semester
}: {
    semester: (newSemester: Semester) => void;
    showModal: boolean;
    closeModal: () => void;
}): JSX.Element {
    const [year, setYear] = useState<number>(2022);
    const [season, setSeason] = useState<string>("Fall");
    const [id, setId] = useState<string>(" ");
    function addSem(): void {
        semester({
            id: id,
            year: year,
            season: season,
            classes: [],
            credits: 0
        });
        closeModal();
    }
    return (
        <Modal show={showModal} onHide={closeModal} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add Semester</Modal.Title>
            </Modal.Header>
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
                <Button
                    data-testid="closeSemesterButton"
                    variant="secondary"
                    onClick={closeModal}
                >
                    Close
                </Button>
                <Button
                    data-testid="saveSemesterButton"
                    variant="primarmy"
                    onClick={addSem}
                >
                    Add Semester
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
