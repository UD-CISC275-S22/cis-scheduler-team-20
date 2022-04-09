import React, { ReactElement, useState } from "react";
import { Button } from "react-bootstrap";

export function AddSemester(): JSX.Element {
    const [semesters, setSemesters] = useState<ReactElement[]>([]);
    function insertSemester(): void {
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
                            <td>Cisc108</td>
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
                </html>
            </div>
        ]);
    }
    return (
        <div>
            <Button onClick={insertSemester}>Add Semester</Button>
            {semesters.map((semester: ReactElement) => semester)}
        </div>
    );
    1;
}
