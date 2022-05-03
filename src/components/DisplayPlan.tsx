/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Plan } from "../Interfaces/plan";
import { InsertSemesterModal } from "./InsertSemester";

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

    const [visible, setVisible] = useState<boolean>(false);

    const trueVisible = () => setVisible(true);
    const falseVisible = () => setVisible(false);

    function changeShow(): void {
        setShow(!visible);
    }
    return (
        <Container>
            <Row>
                <Col>
                    {plan.map((plan: Plan) => (
                        <>
                            <h1>{plan.name}</h1>
                            <Button onClick={changeShow}>View Plan</Button>
                            {show && (
                                <Col>
                                    <Button
                                        onClick={trueVisible}
                                        data-testid="add_semester_button"
                                    >
                                        Add Semester 1
                                    </Button>
                                    <InsertSemesterModal
                                        showModal={visible}
                                        closeModal={falseVisible}
                                    ></InsertSemesterModal>
                                </Col>
                            )}
                        </>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}
