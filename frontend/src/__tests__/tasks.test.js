import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Tasks from "../components/tasks";

afterEach(() => {
  cleanup();
});

test("should render tasks component", () => {
  render(<Tasks />);
  const taskElement = screen.getByTestId("tasks");
  expect(taskElement).toBeInTheDocument();
  expect(taskElement).toHaveTextContent("Tasks List");
});

test("matches snapshot", () => {
  const tree = renderer.create().toJSON();
  expect(tree).toMatchSnapshot();
});
