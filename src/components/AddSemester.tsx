import React, { ReactElement, useState } from "react";
import { Button } from "react-bootstrap";

export function AddSemester(): JSX.Element {
    const [semesters, setSemesters] = useState<ReactElement[]>([]);
    const [num, setNum] = useState<number>(0);
    const courses = ["CISC108", "EGGG101", "MATH241", "ENGL110"];
    function deleteCourse(rowId: string): void {
        setNum(num + 1);
        const delRow: HTMLTableRowElement = document.getElementById(
            rowId
        ) as HTMLTableRowElement;
        if (delRow !== null) {
            delRow.parentNode.removeChild(delRow);
        }
    }
    function insertSemester(): void {
        setNum(num + 1);
        setSemesters([
            ...semesters,
            // eslint-disable-next-line react/jsx-key
            <div>
                <html>
                    <table id="myTable">
                        <tr>
                            <th>Course</th>
                            <th>Full Name</th>
                            <th>Credits</th>
                            <th>Taken/Not Taken</th>
                        </tr>
                        <tr id={"tr" + num}>
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
                            <td>
                                <Button onClick={() => deleteCourse(num)}>
                                    Delete Course
                                </Button>
                            </td>
                        </tr>
                        <tr id={"tr" + num}>
                            <td>
                                <select>
                                    {courses.map((cours: string) => (
                                        <option key={cours} value={cours}>
                                            {cours}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>Calc and Analytics A</td>
                            <td>3</td>
                            <td>Not Taken</td>
                            <td>
                                <Button onClick={() => deleteCourse("tr2")}>
                                    Delete Course
                                </Button>
                            </td>
                        </tr>
                        <tr id={"tr" + num}>
                            <td>
                                <select>
                                    {courses.map((cours: string) => (
                                        <option key={cours} value={cours}>
                                            {cours}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>College English</td>
                            <td>3</td>
                            <td>Not Taken</td>
                            <td>
                                <Button onClick={() => deleteCourse("tr2")}>
                                    Delete Course
                                </Button>
                            </td>
                        </tr>
                        <tr id={"tr" + num}>
                            <td>
                                <select>
                                    {courses.map((cours: string) => (
                                        <option key={cours} value={cours}>
                                            {cours}
                                        </option>
                                    ))}
                                </select>
                                )
                            </td>
                            <td>N/A</td>
                            <td>3</td>
                            <td>Not Taken</td>
                            <td>
                                <Button onClick={() => deleteCourse("tr3")}>
                                    Delete Course
                                </Button>
                            </td>
                        </tr>
                        <tr id={"tr" + num}>
                            <td>
                                <select>
                                    {courses.map((cours: string) => (
                                        <option key={cours} value={cours}>
                                            {cours}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>Introduction to Engineering</td>
                            <td>3</td>
                            <td>Not Taken</td>
                            <td>
                                <Button onClick={() => deleteCourse("tr4")}>
                                    Delete Course
                                </Button>
                            </td>
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
