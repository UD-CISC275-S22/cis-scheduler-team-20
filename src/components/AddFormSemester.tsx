import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";
import { Course } from "../Interfaces/course";
import { listOfPlans } from "../Interfaces/listOfPlans";
import { Plan } from "../Interfaces/plan";
//Should Add a Semester to the Semester Array
export function AddFormSemester(): JSX.Element {
    return (
        <div>
            <div>
                {listOfPlans.map((pln: Plan) =>
                    pln.semesters.map((sem: Semester) => (
                        <Form.Group
                            key={sem.season + sem.year}
                            style={{
                                border: "1px solid black",
                                backgroundColor: "LightBlue"
                            }}
                        >
                            <Row>
                                <Col>
                                    <h3>{sem.season + " " + sem.year}</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>{"Class Code"}</h5>
                                </Col>
                                <Col>
                                    <h5>{"Class Name"}</h5>
                                </Col>
                                <Col>
                                    <h5>{"Credits"}</h5>
                                </Col>
                            </Row>
                            {sem.classes.map((cls: Course) => (
                                <Row key={cls.code}>
                                    <Col>{cls.code}</Col>
                                    <Col>{cls.name}</Col>
                                    <Col>{cls.credits}</Col>
                                </Row>
                            ))}
                        </Form.Group>
                    ))
                )}
            </div>
        </div>
    );
}
