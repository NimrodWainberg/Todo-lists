import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Task from "../components/task";

afterEach(() => {
  cleanup();
});

test("should render task component", () => {
  render(<Task />);
  const taskElement = screen.getByTestId("task");
  expect(taskElement).toBeInTheDocument();
});

test("should render good task component", () => {
  const task = { title: "unique", description: "test" };
  render(<Task task={task} />);
  const taskElement = screen.getByTestId("task");
  expect(taskElement).toBeInTheDocument();
  expect(taskElement).toHaveTextContent(task.title);
  // expect(taskElement).toContainHtml("<div>");
  // expect(taskElement).not.toContainHtml("<div>");
});

test("matches snapshot", () => {
  const task = { title: "unique", description: "test" };
  const tree = renderer.create(<Task task={task} />).toJSON();
  expect(tree).toMatchSnapshot();
});
