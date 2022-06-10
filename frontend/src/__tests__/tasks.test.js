import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

test("on initial render, the add button should be disabled", () => {
  render(<Tasks />);
  expect(screen.getByRole("button", { name: /add/i })).toBeDisabled();
});

test("if title is empty, the add button should be disabled", () => {
  render(<Tasks />);
  userEvent.type(
    screen.getByPlaceholderText(/Add new task description/i),
    "description text"
  );

  expect(screen.getByRole("button", { name: /add/i })).toBeDisabled();
});

test("if description is empty, the add button should be disabled", () => {
  render(<Tasks />);
  userEvent.type(
    screen.getByRole("textbox", { name: /Title Description/i }),
    "Title text"
  );

  expect(screen.getByRole("button", { name: /add/i })).toBeDisabled();
});

test("if title contains numbers, the add button should be disabled", () => {
  render(<Tasks />);
  userEvent.type(
    screen.getByRole("textbox", { name: /Title Description/i }),
    "Title 1"
  );
  userEvent.type(
    screen.getByPlaceholderText(/Add new task description/i),
    "description text"
  );

  expect(screen.getByRole("button", { name: /add/i })).toBeDisabled();
});

test("if title contains special characters, the add button should be disabled", () => {
  render(<Tasks />);
  userEvent.type(
    screen.getByRole("textbox", { name: /Title Description/i }),
    "Title @"
  );
  userEvent.type(
    screen.getByPlaceholderText(/Add new task description/i),
    "description text"
  );

  expect(screen.getByRole("button", { name: /add/i })).toBeDisabled();
});

test("if description contains numbers, the add button should be disabled", () => {
  render(<Tasks />);
  userEvent.type(
    screen.getByRole("textbox", { name: /Title Description/i }),
    "Title"
  );
  userEvent.type(
    screen.getByPlaceholderText(/Add new task description/i),
    "description text 1"
  );

  expect(screen.getByRole("button", { name: /add/i })).toBeDisabled();
});

test("if description contains special characters, the add button should be disabled", () => {
  render(<Tasks />);
  userEvent.type(
    screen.getByRole("textbox", { name: /Title Description/i }),
    "Title"
  );
  userEvent.type(
    screen.getByPlaceholderText(/Add new task description/i),
    "description text @"
  );

  expect(screen.getByRole("button", { name: /add/i })).toBeDisabled();
});

test("if title and description without numbers or special characters entered, the add button should be enabled", () => {
  render(<Tasks />);
  userEvent.type(
    screen.getByRole("textbox", { name: /Title Description/i }),
    "Title text"
  );
  userEvent.type(
    screen.getByPlaceholderText(/Add new task description/i),
    "description text"
  );

  expect(screen.getByRole("button", { name: /add/i })).toBeEnabled();
});
