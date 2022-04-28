/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Plan } from "../Interfaces/plan";
import { AddFormSemester } from "./AddFormSemester";

export function DisplayPlan({
    plan
}: //editPlan,
//deletePlan
{
    plan: Plan[];
    //editPlan: (name: string, newPlan: Plan) => void;
    //deletePlan: (name: string) => void;
}): JSX.Element {
    const [show, setShow] = useState<boolean>(false);

    function changeShow(): void {
        setShow(!show);
    }
    return (
        <Container>
            <Row>
                <Col>
                    {plan.map((plan: Plan) => (
                        <h1>{plan.name}</h1>
                    ))}
                </Col>
            </Row>
            <Button onClick={changeShow}>View Plan</Button>
            <Row>
                {show && (
                    <Col>
                        <AddFormSemester></AddFormSemester>
                    </Col>
                )}
            </Row>
        </Container>
    );
}
