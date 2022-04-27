/* eslint-disable react/jsx-key */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Plan } from "../Interfaces/plan";

export function DisplayPlan({
    plan
}: //editPlan,
//deletePlan
{
    plan: Plan[];
    //editPlan: (name: string, newPlan: Plan) => void;
    //deletePlan: (name: string) => void;
}): JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    {plan.map((plan: Plan) => (
                        <header>{plan.name}</header>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}
