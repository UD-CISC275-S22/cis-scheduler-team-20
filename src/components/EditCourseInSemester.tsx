import React, { useState } from "react";
import { Course } from "../Interfaces/course";
import { Button, Col, Form, Row } from "react-bootstrap";

//fix issue with swappin plans not fixing the selected

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export interface addCourseToSemesterProp {
    semID: string;
    course: Course;
    courseEditor: (courseID: string, newCourse: Course, semID: string) => void;
    closeModal: () => void;
}

export function EditCourseInSemester({
    semID,
    course,
    courseEditor,
    closeModal
}: addCourseToSemesterProp): JSX.Element {
    //for making sure text contains no specail characters or numbers
    const specialChars = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~1234567890]/;
    const [reqsList, newReq] = useState<string[]>([...course.preReq]);

    //state holding the new course to be added
    const oldCourse = {
        code: course.code,
        credits: course.credits,
        descr: course.descr,
        name: course.name,
        preReq: course.preReq,
        restrict: course.restrict,
        breadth: course.breadth,
        typ: course.typ
    };
    const [newCourse, updateCourse] = useState<Course>({
        code: course.code,
        credits: course.credits,
        descr: course.descr,
        name: course.name,
        preReq: course.preReq,
        restrict: course.restrict,
        breadth: course.breadth,
        typ: course.typ
    });

    //states holding the values in each of the boxes
    const [codeBox, changeCode] = useState<string>(course.code);
    const [credsBox, changeCreds] = useState<string>(String(course.credits));
    const [reqsBox, changeReqs] = useState<string>("");
    const [fillsReqsBox, changeFillsReqs] = useState<string>("");
    const [fillsDegBox, changeFillsDeg] = useState<string>("");
    const [descBox, changeDesc] = useState<string>(course.descr);
    const [nameBox, changeName] = useState<string>(course.name);

    function updateCode(event: ChangeEvent) {
        //updates the code fields in the new course
        const newCode = {
            ...newCourse,
            code: event.target.value
        };
        updateCourse(newCode);
        changeCode(event.target.value);
    }
    function updateName(event: ChangeEvent) {
        const newName = {
            ...newCourse,
            name: event.target.value
        };
        updateCourse(newName);
        changeName(event.target.value);
    }

    function updateCreds(event: ChangeEvent) {
        //updates the credits of the course to be added
        const newCreds = {
            ...newCourse,
            credits: event.target.value
        };
        updateCourse(newCreds);
        changeCreds(event.target.value);
    }

    function updateReqs(event: ChangeEvent) {
        //updates the text in the prerequisite box
        const newReqs = {
            ...newCourse,
            reqs: event.target.value
        };
        updateCourse(newReqs);
        changeReqs(event.target.value);
    }

    function updateFillsReqs(event: ChangeEvent) {
        //updates the fullfills reqs for box
        changeFillsReqs(event.target.value);
    }

    function updateFillsDeg(event: ChangeEvent) {
        //updates the fulfills degree requirements
        changeFillsDeg(event.target.value);
    }

    function addReq() {
        const course = reqsBox;
        if (reqsBox.length == 7 && !specialChars.test(course)) {
            const addReq = {
                ...newCourse,
                prereqs: [...newCourse.preReq, reqsBox]
            };
            console.log(addReq); //debug genius here >:3
        }
    }

    function remReq(courseName: string) {
        //state setter for the course name
        const rem = newCourse.preReq.filter(
            (aCourse: string): boolean => aCourse !== courseName
        );
        const fixCourse = { ...newCourse, prereqs: [...rem] };
        updateCourse(fixCourse);
        newReq([...rem]);
    }

    function updateDesc(event: ChangeEvent) {
        //state setter for the course description
        if (event.target.value !== "") {
            const newDesc = {
                ...newCourse,
                description: event.target.value
            };
            updateCourse(newDesc);
        }
        changeDesc(event.target.value);
    }

    function resetCourse() {
        updateCourse(oldCourse);
        changeCode(oldCourse.code);
        changeName(oldCourse.name);
        changeCreds(oldCourse.credits);
        changeDesc(oldCourse.descr);
    }
    function addCourse() {
        courseEditor(course.code, newCourse, semID);
        closeModal();
    }

    return (
        <div>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Change Course Code Here:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Course Code"
                            value={codeBox}
                            onChange={updateCode}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Change Course Name Here:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Course Name"
                            value={nameBox}
                            onChange={updateName}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Change Course Credits here:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Number of Credits"
                            value={credsBox}
                            onChange={updateCreds}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Change Course Description here:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Course Description"
                            value={descBox}
                            onChange={updateDesc}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Enter Prerequisites Here:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Prerequisite Here"
                            value={reqsBox}
                            onChange={updateReqs}
                        />
                    </Form.Group>
                    <Button onClick={addReq}>Add This Prerequisite</Button>
                    {reqsList.map(
                        (aReq: string): JSX.Element => (
                            <li key={aReq} style={{ margin: "5px" }}>
                                <span style={{ textAlign: "center" }}>
                                    {aReq + " "}
                                </span>
                                <Button onClick={() => remReq(aReq)}>
                                    Remove Prerequisite
                                </Button>
                            </li>
                        )
                    )}
                    <Form.Group>
                        <Form.Label>Enter Degree Requirement Here:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Degree Requirement"
                            value={fillsDegBox}
                            onChange={updateFillsDeg}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Postrequisites Here:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Postrequisites"
                            value={fillsReqsBox}
                            onChange={updateFillsReqs}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <hr />
            <hr />
            <Row>
                <Col>
                    <Button variant="secondary" onClick={closeModal}>
                        Cancel
                    </Button>
                </Col>
                <Col>
                    <Button onClick={addCourse}>Save</Button>
                </Col>
                <Col>
                    <Button onClick={resetCourse} data-testid="resetToDefault">
                        Reset To Original
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
