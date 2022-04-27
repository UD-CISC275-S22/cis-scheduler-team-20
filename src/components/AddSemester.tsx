import React, { ReactElement, useState } from "react";
import { Button } from "react-bootstrap";
import course_data from "../data/catalog.json";
//import { origionalPlan } from "../Interfaces/origionalPlan";
//import { Classes } from "../Interfaces/catalog";

export function AddSemester(): JSX.Element {
    const [semesters, setSemesters] = useState<ReactElement[]>([]);
    const [delnum, setDelNum] = useState<number>(0);
    const [indnum, setIndNum] = useState<number>(0);
    const [semesterNum, setSemesterNum] = useState<number>(0);
    const [courseNum, setCourseNum] = useState<number>(0);
    const years = [
        2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033,
        2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045,
        2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057,
        2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069,
        2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081,
        2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093,
        2094, 2095, 2096, 2097, 2098, 2099, 2100
    ];
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
                    <div>
                        <select>
                            <option>Summer</option>
                            <option>Fall</option>
                            <option>Winter</option>
                            <option>Spring</option>
                        </select>
                        <select>
                            {years.map((year: number) => (
                                <option key={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                    <table id={"semester-table" + semesterNum}>
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
                    <Button
                        onClick={() =>
                            insertClass("semester-table" + semesterNum)
                        }
                    >
                        Add Class
                    </Button>
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
