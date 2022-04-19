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
    function alternateDeleteCourse(tableID: string): void {
        const table = document.getElementById(tableID) as HTMLTableElement;
        const rows = table.getElementsByTagName("tr");
        const rowCount = rows.length;
        table.deleteRow(rowCount - 1);
    }
    function insertClass(semesterID: string): void {
        setCourseNum(courseNum + 1);
        const table = document.getElementById(semesterID) as HTMLTableElement;
        const newRow = document.getElementById("a0") as HTMLTableRowElement;
        const clone = newRow.cloneNode(true) as HTMLTableRowElement;
        clone.id = "a" + courseNum;
        table.appendChild(clone);
    }
    function insertSemester(): void {
        setCourseNum(courseNum + 1);
        setSemesterNum(semesterNum + 1);
        setNum(num + 1);
        setSemesters([
            ...semesters,
            // eslint-disable-next-line react/jsx-key
            <div>
                <html>
                    <table id={"semester-table" + semesterNum}>
                        <tr>
                            <td>
                                <Button
                                    onClick={() =>
                                        insertClass(
                                            "semester-table" + semesterNum
                                        )
                                    }
                                >
                                    Add Class
                                </Button>
                            </td>
                            <td>
                                <Button
                                    onClick={() =>
                                        alternateDeleteCourse(
                                            "semester-table" + semesterNum
                                        )
                                    }
                                >
                                    Delete course
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <th>Course</th>
                            <th>Full Name</th>
                            <th>Credits</th>
                            <th>Taken/Not Taken</th>
                        </tr>
                        <tr id={"a" + courseNum}>
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
        <>
            <div>
                {semesters.map((semester: ReactElement) => semester)}
                <Button onClick={insertSemester}>Add Semester</Button>
            </div>
        </>
    );
    1;
}
