import { render, screen, clean } from "@testing-library/react";
import Tasks from "../components/tasks";

test("should render taks component", () => {
  render(<Tasks />);
  const taskElement = screen.getByTestId("tasks");
  expect(taskElement).toBeInTheDocument();
  expect(taskElement).toHaveTextContent("Tasks List");
});
