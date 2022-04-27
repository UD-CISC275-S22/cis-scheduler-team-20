/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { Form, Modal, Row, Button, Col } from "react-bootstrap";
import { Plan } from "../Interfaces/plan";

export function AddPlan({
    close,
    plan,
    show
}: {
    close: () => void;
    plan: (newPlan: Plan) => void;
    show: boolean;
}) {
    const [name, setName] = useState<string>("");

    function save() {
        plan({ name: name, id: 0, semesters: [] });
        close();
    }

    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>New Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {}
                <Form.Group controlId="myGroup-1" as={Row}>
                    <Form.Label column sm={3}>
                        Plan Name:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={close}>Close</Button>
                <Button onClick={save}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}
