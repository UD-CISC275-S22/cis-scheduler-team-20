import React, { ReactElement, useState } from "react";
import { Button } from "react-bootstrap";

export function AddSemester(): JSX.Element {
    const [semesters, setSemesters] = useState<ReactElement[]>([]);
    const [num, setNum] = useState<number>(-1);
    const [semesterNum, setSemesterNum] = useState<number>(0);
    const [courseNum, setCourseNum] = useState<number>(0);
    const courses = ["CISC108", "EGGG101", "MATH241", "ENGL110"];
    function deleteCourse(tableId: string, rowId: string): void {
        setNum(num + 1);
        const delRow: HTMLTableRowElement = document.getElementById(
            rowId
        ) as HTMLTableRowElement;
        const table: HTMLTableElement = document.getElementById(
            tableId
        ) as HTMLTableElement;
        if (delRow !== null) {
            table.removeChild(delRow);
        }
    }
    function insertClass(): void {
        const table = document.getElementById(
            "semester-table"
        ) as HTMLTableElement;
        const newRow = document.getElementById(
            "rowToClone"
        ) as HTMLTableRowElement;
        const clone = newRow.cloneNode(true);
        //clone.ID ="newID";
        table.appendChild(clone);
    }
    function insertSemester(): void {
        setCourseNum(courseNum + 1);
        setNum(num + 1);
        setSemesterNum(semesterNum + 1);
        setSemesters([
            ...semesters,
            // eslint-disable-next-line react/jsx-key
            <div>
                <html>
                    <table id={"semester-table" + semesterNum}>
                        <tr>
                            <td>
                                <Button onClick={insertClass}>Add Class</Button>
                            </td>
                        </tr>
                        <tr>
                            <th>Course</th>
                            <th>Full Name</th>
                            <th>Credits</th>
                            <th>Taken/Not Taken</th>
                        </tr>
<<<<<<< HEAD
                        <tr id="rowToClone">
=======
                        <tr id={"a" + courseNum}>
>>>>>>> 39ae58b084b3af7d22602e84621fc3492aa665cb
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
                                <Button
                                    onClick={() =>
                                        deleteCourse(
                                            "semester-table" + semesterNum,
                                            "a" + courseNum
                                        )
                                    }
                                >
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
