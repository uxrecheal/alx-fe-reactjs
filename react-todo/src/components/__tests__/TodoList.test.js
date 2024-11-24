import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders TodoList component", () => {
    render(<TodoList />);
    // Check if the heading is rendered
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    // Check initial todo items
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add Todo");

    // Simulate user input and add a new todo
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    // Verify the new todo is added
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("can toggle a todo's completion status", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // Simulate clicking on the todo to toggle completion
    fireEvent.click(todo);

    // Verify that the todo is crossed out (completed)
    expect(todo).toHaveStyle("text-decoration: line-through");

    // Click again to toggle back to uncompleted
    fireEvent.click(todo);

    // Verify that the todo is not crossed out
    expect(todo).toHaveStyle("text-decoration: none");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = screen.getByText("Delete");

    // Simulate clicking the delete button
    fireEvent.click(deleteButton);

    // Verify the todo is removed
    expect(todo).not.toBeInTheDocument();
  });
});
