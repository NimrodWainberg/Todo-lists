import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Tasks from "../components/tasks";
import EditTask from "../components/editTask";

afterEach(() => {
  cleanup();
});

test("should render editTask component when true is passed", () => {
  render(<EditTask isOpen={true} />);
  const editTask = screen.getByTestId("editTask");
  expect(editTask).toBeInTheDocument();
});

test("on initial render, the update button should be enabled", () => {
  render(<EditTask isOpen={true} />);
  expect(screen.getByRole("button", { name: /update/i })).toBeEnabled();
});

test("on initial render, the cancel button should be enabled", () => {
  render(<EditTask isOpen={true} />);
  expect(screen.getByRole("button", { name: /cancel/i })).toBeEnabled();
});

test("on initial render, the description field sould be empty", () => {
  render(<EditTask isOpen={true} />);
  expect(
    screen.getByRole("textbox", { name: /new description/i })
  ).toBeEmptyDOMElement();
});

test("matches snapshot", () => {
  const tree = renderer.create().toJSON();
  expect(tree).toMatchSnapshot();
});

// test("on initial render, the add button should be enabled", () => {
//   render(<EditTask isOpen={true} />);
//   expect(screen.getByRole("button", { name: /add/i })).toBeDisabled();
// });
