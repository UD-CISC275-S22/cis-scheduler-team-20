import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Plan } from "../Interfaces/plan";

//Adds a semester to a specific plan
export function InsertSemesterModal({
    showModal,
    closeModal,
    planName,
    plans,
    setPlans
}: {
    showModal: boolean;
    closeModal: () => void;
    planName: string;
    plans: Plan[];
    setPlans: React.Dispatch<React.SetStateAction<Plan[]>>;
}): JSX.Element {
    const [year, setYear] = useState<number>(2022);
    const [season, setSeason] = useState<string>("Fall");
    function addSem(yr: number, seas: string): void {
        const ind = plans.findIndex(
            (pln: Plan): boolean => pln.name === planName
        );
        const pln = plans[ind];
        pln.semesters = [
            ...pln.semesters,
            {
                id: "" + seas + yr,
                year: yr,
                season: seas,
                classes: [...pln.semesters[0].classes],
                credits: 3
            }
        ];
        setPlans(
            plans.map(
                (plan: Plan): Plan => (plan.name === planName ? pln : plan)
            )
        );
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
                    onClick={() => addSem(year, season)}
                >
                    Add Semester
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
