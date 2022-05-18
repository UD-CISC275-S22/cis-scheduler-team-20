import React, { useState } from "react";
import { Form, Modal, Row, Button, Col } from "react-bootstrap";
import { Plan } from "../Interfaces/plan";

//Creates and adds a new plan
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
        plan({
            name: name,
            id: 0,
            semesters: [
                {
                    id: "Fall2020",
                    season: "Fall",
                    year: 2020,
                    classes: [
                        {
                            code: "CISC108",
                            name: "Introduction to Computer Science I",
                            descr: "Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, but intended primarily for majors and minors in computer science or mathematics.",
                            credits: "3",
                            preReq: [],
                            restrict: "",
                            breadth:
                                "University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology",
                            typ: "Fall and Spring"
                        },
                        {
                            code: "CISC 275",
                            name: "Introduction to Software Engineering",
                            descr: "Object oriented software design and development through use of an object oriented programming language. Topics include team programming, design patterns, graphical user interfaces, software engineering tools (e.g., integrated development environments, version control, build management, bug tracking, automated testing).",
                            credits: "3",
                            preReq: [
                                "Minimum grade of C- in CISC 181",
                                "CISC 220"
                            ],
                            restrict: "",
                            breadth: "University: ; A&S: ",
                            typ: "Fall and Spring"
                        }
                    ],
                    credits: 6
                }
            ],
            vis: false
        });
        close();
    }

    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>New Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {}
                <Form.Group
                    data-testid="planNameInputBox"
                    controlId="myGroup-1"
                    as={Row}
                >
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
                <Button data-testid="SavePlanButton" onClick={save}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
