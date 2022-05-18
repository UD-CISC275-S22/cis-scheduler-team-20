import React, { useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Course } from "../Interfaces/course";
//import { Plan } from "../Interfaces/plan";
import { Semester } from "../Interfaces/semester";
import { DeleteCourseButton } from "./DeleteCourseButton";
import { EditCourseButton } from "./EditCourseButton";
//import { MoveCourseButton } from "./MoveCourseButton";

//Creates the course table inside the semesters
export function CourseTable({
    semester,
    delCourseFunct,
    editCourseFunct
}: {
    semester: Semester;
    delCourseFunct: (code: string, semID: string) => void;
    editCourseFunct: (
        courseID: string,
        newCourse: Course,
        semID: string
    ) => void;
    moveCourse: (
        courseToMove: Course,
        fromSemester: Semester,
        toSemester: Semester
    ) => void;
    moveCourseToPool: (courseToMove: Course, fromSemester: Semester) => void;
}): JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    function toggleVis(): void {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <div>
                <hr></hr>
                <h4 onClick={toggleVis} style={{ cursor: "pointer" }}>
                    Semester: {semester.season} {semester.year}
                </h4>
            </div>
            {isVisible && (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Credits</th>
                            <th>Course Title</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {semester.classes.map((course: Course) => (
                            <tr key={course.code}>
                                <th>{course.code}</th>
                                <th>{course.credits}</th>
                                <th>{course.name}</th>
                                <th>
                                    <Row sm={3}>
                                        <Col>
                                            <EditCourseButton
                                                semester={semester}
                                                course={course}
                                                courseEditor={editCourseFunct}
                                            ></EditCourseButton>
                                        </Col>
                                        <Col>
                                            <DeleteCourseButton
                                                course={course}
                                                semester={semester}
                                                delFunct={delCourseFunct}
                                            ></DeleteCourseButton>
                                        </Col>
                                    </Row>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
}
