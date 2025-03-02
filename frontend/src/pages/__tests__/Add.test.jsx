import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Add from "../Add";

describe("Add Page (Simple Test)", () => {
  test("renders 'Add New Book' heading", () => {
    render(
      <MemoryRouter>
        <Add />
      </MemoryRouter>
    );
    expect(screen.getByText("Add New Book")).toBeInTheDocument();
  });

  test("typing in the title field updates its value", () => {
    render(
      <MemoryRouter>
        <Add />
      </MemoryRouter>
    );
    const titleInput = screen.getByPlaceholderText("title");
    fireEvent.change(titleInput, { target: { value: "My Simple Title" } });
    expect(titleInput.value).toBe("My Simple Title");
  });
});

