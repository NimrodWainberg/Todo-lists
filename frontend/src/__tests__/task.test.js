import { render, screen, clean } from "@testing-library/react";
import Task from "../components/task";

test("should render task component", () => {
  render(<Task />);
  const taskElement = screen.getByTestId("task-1");
  expect(taskElement).toBeInTheDocument();
  expect(taskElement).toHaveTextContent("Tasks List");
});
