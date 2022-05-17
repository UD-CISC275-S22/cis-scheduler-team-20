import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Course } from "../Interfaces/course";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function AddToCoursePool({
    closeModal,
    coursePool,
    setCoursePool
}: {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
    coursePool: Course[];
    setCoursePool: React.Dispatch<React.SetStateAction<Course[]>>;
}): JSX.Element {
    const specialCharacters = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

    const [newCourse, setNewCourse] = useState<Course>({
        code: "test",
        name: "",
        descr: "",
        credits: "",
        preReq: "",
        restrict: "",
        breadth: "",
        typ: ""
    });

    //All the useStates that maps each element after the user looks up their class in the modal
    const [codeBox, setCodeBox] = useState<string>("");
    const [nameBox, setNameBox] = useState<string>("");
    const [descrBox, setDescrBox] = useState<string>("");
    const [creditBox, setCreditBox] = useState<string>("");
    const [reqBox, setReqBox] = useState<string>("");
    //const [reqsList, newPre] = useState<string[]>([]);

    function checkCodeField() {
        //checks if the input inside the code enter box is correct
        const code = codeBox.substring(0, 4);
        return (
            nameBox !== "" &&
            creditBox !== "" &&
            !isNaN(Number(creditBox)) &&
            descrBox !== "" &&
            codeBox.length === 7 &&
            !specialCharacters.test(code) &&
            !isNaN(Number(code))
        );
    }

    function updateCodeBox(event: ChangeEvent) {
        //updates the code state
        const newCode = {
            ...newCourse,
            code: event.target.value
        };
        setNewCourse(newCode);
        setCodeBox(event.target.value);
    }

    function updateName(event: ChangeEvent) {
        //updates the name state
        if (event.target.value != "") {
            const newName = {
                ...newCourse,
                name: event.target.value
            };
            setNewCourse(newName);
        }
        setNameBox(event.target.value);
    }

    function updateCredits(event: ChangeEvent) {
        //updates the credits state
        if (!isNaN(Number(event.target.value))) {
            if (Number(event.target.value) > 0) {
                const newCredits = {
                    ...newCourse,
                    credits: event.target.value.toString()
                };
                setNewCourse(newCredits);
            }
        }
        setCreditBox(event.target.value);
    }

    function updateRequirements(event: ChangeEvent) {
        //This is genuienly a users decicion if more requirements to a course is added, we provide them with the actual amount in the first place
        if (event.target.value != "") {
            setReqBox(event.target.value);
        }
    }

    function updateDescription(event: ChangeEvent) {
        //state setter for the course description
        if (event.target.value !== "") {
            const newDesc = {
                ...newCourse,
                description: event.target.value
            };
            setNewCourse(newDesc);
        }
        setDescrBox(event.target.value);
    }

    function addCourse() {
        //adds the new course to the proper semeste
        setCoursePool([...coursePool, newCourse]);
    }
    return (
        <div>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Enter Course Code Here: </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="For Exp. CISC275"
                            value={codeBox}
                            onChange={updateCodeBox}
                            data-testid="add_course_department"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Course Name Here: </Form.Label>
                        <Form.Control
                            type="text"
                            value={nameBox}
                            onChange={updateName}
                            data-testid="add_course_name"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Course Credits Here: </Form.Label>
                        <Form.Control
                            type="text"
                            value={creditBox}
                            onChange={updateCredits}
                            data-testid="add_course_credits"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Course Description Here: </Form.Label>
                        <Form.Control
                            type="text"
                            value={descrBox}
                            onChange={updateDescription}
                            data-testid="add_course_description"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Enter Prerequisites Here: </Form.Label>
                        <Form.Control
                            type="text"
                            value={reqBox}
                            onChange={updateRequirements}
                            data-testid="add_course_prereq"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button
                        variant="secondary"
                        onClick={() => closeModal(false)}
                    >
                        Close
                    </Button>
                </Col>
                <Col>
                    <Button
                        //disabled={!checkCodeField()}
                        onClick={addCourse}
                        data-testid="saveCourseButton"
                    >
                        Add Course
                    </Button>
                    <div>{!checkCodeField() && <div></div>}</div>
                </Col>
            </Row>
        </div>
    );
}
