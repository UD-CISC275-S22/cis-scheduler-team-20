import React, { ReactElement, useState } from "react";
import { Button, Form } from "react-bootstrap";

export function AddSemester(): JSX.Element {
    const [semesters, setSemesters] = useState<ReactElement[]>([]);
    const [num, setNum] = useState<number>(-1);
    const courses = ["CISC108", "EGGG101", "MATH241", "ENGL110"];
    const [course, setCourse] = useState<string>(courses[0]);
    function changeCourse(event: React.ChangeEvent<HTMLSelectElement>): string {
        setCourse(event.target.value);
        return event.target.value;
    }
    function insertSemester(): void {
        setNum(num + 1);
        setSemesters([
            ...semesters,
            // eslint-disable-next-line react/jsx-key
            <div>
                <html>
                    <table>
                        <tr>
                            <th>Course</th>
                            <th>Full Name</th>
                            <th>Credits</th>
                            <th>Taken/Not Taken</th>
                        </tr>
                        <tr>
                            <td>
                                <select>
                                    {courses.map((cours: string) => (
                                        <option key={cours} value={cours}>
                                            {cours}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>Introduction to Computer Programming</td>
                            <td>3</td>
                            <td>Not Taken</td>
                        </tr>
                        <tr>
                            <td>Math241</td>
                            <td>Calc and Analytics A</td>
                            <td>3</td>
                            <td>Not Taken</td>
                        </tr>
                        <tr>
                            <td>Eng110</td>
                            <td>College English</td>
                            <td>3</td>
                            <td>Not Taken</td>
                        </tr>
                        <tr>
                            <td>Hist requirement(1/2)</td>
                            <td>N/A</td>
                            <td>3</td>
                            <td>Not Taken</td>
                        </tr>
                        <tr>
                            <td>EGGG101</td>
                            <td>Introduction to Engineering</td>
                            <td>3</td>
                            <td>Not Taken</td>
                        </tr>
                    </table>
                    <Button
                        onClick={() =>
                            setSemesters(
                                semesters.filter(
                                    (semester: ReactElement): boolean =>
                                        semesters[num] !== semester
                                )
                            )
                        }
                    >
                        Delete
                    </Button>
                </html>
            </div>
        ]);
    }
    return (
        <div>
            {semesters.map((semester: ReactElement) => semester)}
            <Button onClick={insertSemester}>Add Semester</Button>
        </div>
    );
    1;
}
