import { render, screen, clean } from "@testing-library/react";
import Task from "../components/task";

test("should render task component", () => {
  render(<Task />);
  const taskElement = screen.getByTestId("task");
  expect(taskElement).toBeInTheDocument();
});
