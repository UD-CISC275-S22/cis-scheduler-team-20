import React, { ReactElement, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import course_data from "../data/catalog.json";
//import { Classes } from "../Interfaces/catalog";

export function AddSemester(): JSX.Element {
    const [semesters, setSemesters] = useState<ReactElement[]>([]);
    const [delnum, setDelNum] = useState<number>(0);
    const [indnum, setIndNum] = useState<number>(0);
    const [semesterNum, setSemesterNum] = useState<number>(0);
    const [courseNum, setCourseNum] = useState<number>(0);
    const [year, setYear] = useState<number>(2022);
    function deleteSemester(index: number): void {
        setSemesters(semesters.splice(index, 1));
        setDelNum(delnum + 1);
    }
    function deleteCourse(tableId: string, rowId: string): void {
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
        setIndNum(indnum + 1);
        setSemesters([
            ...semesters,
            // eslint-disable-next-line react/jsx-key
            <div>
                <html>
                    <table id={"semester-table" + semesterNum}>
                        <thead>
                            <select>
                                <option>Summer</option>
                                <option>Fall</option>
                                <option>Winter</option>
                                <option>Spring</option>
                            </select>
                            <span contentEditable>2022</span>
                        </thead>
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
                                    {Object.entries(course_data).map(
                                        ([cours, info]) => (
                                            <option
                                                key={cours}
                                                value={info.code}
                                            >
                                                {info.code}
                                            </option>
                                        )
                                    )}
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
                    <Button onClick={() => deleteSemester(indnum)}>
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
