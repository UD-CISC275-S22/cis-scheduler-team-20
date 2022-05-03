import React, { useState } from "react";
import { Course } from "../Interfaces/course";
//import course_data from "../data/catalog.json";
import { Button, Col, Form, Row } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

interface addCourseProp {
    semesterID: string;
    courseAdder: (newCourse: Course, ID: string) => void;
    closeModal: () => void;
}

export function AddCoursetoSemester({
    semesterID,
    courseAdder,
    closeModal
}: addCourseProp): JSX.Element {
    //To start out gotta make sure they don't add any special characters
    const specialCharacters = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

    const [newCourse, setNewCourse] = useState<Course>({
        code: "",
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
        if (event.target.value.length === 7) {
            const code = event.target.value.substring(0, 4);
            if (!specialCharacters.test(code.toString())) {
                const newCode = {
                    ...newCourse,
                    courseCode: code
                };
                setNewCourse(newCode);
            }
        }
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

    /*function remReq(courseName: string) {
        //state setter for the course name
        const rem = newCourse.preReq.filter(
            (aCourse: string): boolean => aCourse !== courseName
        );
        const fixCourse = { ...newCourse, prereqs: [...rem] };
        setNewCourse(fixCourse);
        newPre([...rem]);
    }

    function isValidCode(): boolean {
        //checks if the course code is a valid string for a course, i.e., CISC275
        if (reqBox.length === 7) {
            const dept = reqBox.substring(0, 4);
            const code = reqBox.substring(4);
            if (!specialCharacters.test(dept) && !isNaN(Number(code))) {
                return true;
            }
        }
        return false;
    }*/

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
        courseAdder(newCourse, semesterID);
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
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Col>
                <Col>
                    <Button
                        //disabled={!checkCodeField()}
                        onClick={addCourse}
                        data-testid="add_course_button"
                    >
                        Add Course
                    </Button>
                    <div>
                        {!checkCodeField() && <div>Please Fill All Fields</div>}
                    </div>
                </Col>
            </Row>
        </div>
    );
}
