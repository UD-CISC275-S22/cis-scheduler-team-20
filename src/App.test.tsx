import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders the course name somewhere", () => {
    render(<App />);
    const linkElement = screen.getByText(/CISC275/i);
    expect(linkElement).toBeInTheDocument();
});

describe("App Component Tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("Create plan button exists", () => {
        const createPlanButton = screen.getByTestId("createPlanButton");
        expect(createPlanButton !== null);
    });
    test("Create Plan button works", () => {
        const createPlanButton = screen.getByTestId("createPlanButton");
        createPlanButton.click();
        const savePlanButton = screen.getByTestId("SavePlanButton");
        expect(savePlanButton !== null);
    });
    test("Create Plan button creates a plan", () => {
        const createPlanButton = screen.getByTestId("createPlanButton");
        createPlanButton.click();
        const savePlanButton = screen.getByTestId("SavePlanButton");
        savePlanButton.click();
        const viewPlanButton = screen.getByTestId("ViewPlanButton");
        expect(viewPlanButton !== null);
    });
    test("Create Plan button and View Plan Button display a plan with a name", () => {
        const createPlanButton = screen.getByTestId("createPlanButton");
        createPlanButton.click();
        const planName = screen.getByTestId("planNameInputBox");
        userEvent.type(planName, "Plan1");
        const savePlanButton = screen.getByTestId("SavePlanButton");
        savePlanButton.click();
        expect(screen.queryAllByText(/Plan1/i).length === 3);
    });
    test("View plan shows a semester", () => {
        const createPlanButton = screen.getByTestId("createPlanButton");
        createPlanButton.click();
        const savePlanButton = screen.getByTestId("SavePlanButton");
        savePlanButton.click();
        const viewPlanButton = screen.getByTestId("ViewPlanButton");
        viewPlanButton.click();
        const clearSemesterButton = screen.getByTestId("clearSemesterButton");
        expect(clearSemesterButton !== null);
    });
    test("Add semester button exists and modal shows up", () => {
        const createPlanButton = screen.getByTestId("createPlanButton");
        createPlanButton.click();
        const savePlanButton = screen.getByTestId("SavePlanButton");
        savePlanButton.click();
        const viewPlanButton = screen.getByTestId("ViewPlanButton");
        viewPlanButton.click();
        const clearSemesterButton = screen.getByTestId("clearSemesterButton");
        expect(clearSemesterButton !== null);
        const addSemesterButton = screen.getByTestId("addSemesterButton");
        expect(addSemesterButton !== null);
        addSemesterButton.click();
        const saveSemesterButton = screen.getByTestId("saveSemesterButton");
        expect(saveSemesterButton !== null);
    });
    test("Add semester button creates a new semester", () => {
        const createPlanButton = screen.getByTestId("createPlanButton");
        createPlanButton.click();
        const savePlanButton = screen.getByTestId("SavePlanButton");
        savePlanButton.click();
        const viewPlanButton = screen.getByTestId("ViewPlanButton");
        viewPlanButton.click();
        const clearSemesterButton = screen.getByTestId("clearSemesterButton");
        expect(clearSemesterButton !== null);
        const addSemesterButton = screen.getByTestId("addSemesterButton");
        expect(addSemesterButton !== null);
        addSemesterButton.click();
        const saveSemesterButton = screen.getByTestId("saveSemesterButton");
        expect(saveSemesterButton !== null);
        saveSemesterButton.click();
        const closeSemesterButton = screen.getByTestId("closeSemesterButton");
        closeSemesterButton.click();
        const numOfClearSemesterButtons = screen.queryAllByTestId(
            "clearSemesterButton"
        );
        expect(numOfClearSemesterButtons.length === 2);
    });
    test("Add course button modal shows up", () => {
        const createPlanButton = screen.getByTestId("createPlanButton");
        createPlanButton.click();
        const savePlanButton = screen.getByTestId("SavePlanButton");
        savePlanButton.click();
        const viewPlanButton = screen.getByTestId("ViewPlanButton");
        viewPlanButton.click();
        const addCourseButton = screen.getByTestId("addCourseButton");
        expect(addCourseButton !== null);
        addCourseButton.click();
        const saveCourseButton = screen.getByTestId("saveCourseButton");
        expect(saveCourseButton !== null);
    });
});
