import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface Courses {
    name: string;
    course_name: string;
    credits: string;
    taken: boolean;
}

const classes: Courses[] = [
    {
        name: "Cisc108",
        course_name: "Introduction to Computer Science",
        credits: "3",
        taken: false
    },
    {
        name: "Math241",
        course_name: "Calculus and Analytics A",
        credits: "4",
        taken: false
    },
    {
        name: "Eng110",
        course_name: "College English",
        credits: "3",
        taken: false
    },
    {
        name: "EGG101",
        course_name: "Introduction to Engineering",
        credits: "3",
        taken: false
    },
    {
        name: "Hist requirement(1/2)",
        course_name: "N/A",
        credits: "1-3",
        taken: false
    }
];

export function FirstTable(): JSX.Element {
    const [data] = useState<Courses[]>(classes);
    const firstTable = classes.map(
        (course: Courses): Courses => ({ ...course })
    );
    console.log(firstTable);
    return (
        <div className="columns">
            {" "}
            <Container>
                <Row>
                    <Col>
                        <p>first</p>
                    </Col>
                    <Col>
                        <div className="DefaultTable">
                            <p>Second</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
