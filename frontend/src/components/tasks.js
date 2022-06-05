import { useState, useEffect } from "react";
import "../css/tasks.css";
import Task from "./task.js";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/400.css";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

function Tasks() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const numbersPattern = /[0-9]/;
  const signsPattern = /[$&+,:;=?@#|'<>.^*()%!-]/;
  // toast.error("ERROR, Please try again later");
  // toast.success("SUCCESS");
  // toast.info("INFO");
  // toast.warn("WARNING");

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionValue(event.target.value);
    setName(event.target.value);
  };

  const checkTitleValidation = () => {
    const titleArr = tasks.map((t) => t.title);
    return !titleValue
      ? "You can't enter an empty title"
      : numbersPattern.test(titleValue)
      ? "You can't use numbers"
      : signsPattern.test(titleValue)
      ? "You can't use special characters"
      : titleArr.includes(titleValue)
      ? "You already have a task with the same title"
      : "";
  };

  const checkDescriptionValidation = () => {
    return !descriptionValue
      ? "You can't enter an empty description"
      : numbersPattern.test(descriptionValue)
      ? "You can't use numbers"
      : signsPattern.test(descriptionValue)
      ? "You can't use special characters"
      : "";
  };

  const successToast = () => {
    toast("Task added", {
      className: "success-custom",
      draggable: true,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    (async () => {
      try {
        // const res = await fetch("http://localhost:8000/tasks");
        const res = await fetch("http://127.0.0.1:8000/api/todo");
        const content = await res.json();

        setTasks(content);
      } catch (err) {
        toast.error("API ERROR", {
          className: "error-toast",
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
        });
        console.log(err);
        return <div> Can't reach the server</div>;
      }
    })();
  }, []);

  const create = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleValue.toString(),
        description: descriptionValue.toString(),
      }),
    });

    const task = await res.json();

    setTasks([...tasks, task]);
  };

  const update = async (id, checked) => {
    await fetch(`http://127.0.0.1:8000/api/todo${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        complete: checked,
      }),
    });
  };

  const del = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await fetch(`http://127.0.0.1:8000/api/todo${id}`, {
          method: "DELETE",
        });
      } catch (err) {}

      setTasks(tasks.filter((t) => t.title !== id));
    }
  };

  return (
    <div data-testid="tasks" className="todo-container">
      <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
      <div className="card">
        <Typography
          variant="h2"
          className="title"
          component="div"
          color="#000066"
          gutterBottom>
          Tasks List
        </Typography>
        <form className="" onSubmit={create}>
          <div className="">
            {/* <input
              type="text"
              id="form3"
              className="form-control form-control-lg"
              onChange={(e) => setName(e.target.value)}
            /> */}

            <TextField
              error={checkTitleValidation() ? true : false}
              // className={checkTitleValidation() ? true : false}
              id="outlined-error-helper-text"
              label="Title"
              placeholder="Add new task"
              helperText={checkTitleValidation()}
              onChange={handleTitleChange}
              value={titleValue}
            />
            <TextField
              error={checkDescriptionValidation() ? true : false}
              // className={checkTitleValidation() ? true : false}
              id="outlined-error-helper-text"
              label="Description"
              placeholder="Add new task"
              helperText={checkDescriptionValidation()}
              onChange={handleDescriptionChange}
              value={descriptionValue}
              multiline
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            size="small"
            disabled={
              checkTitleValidation()
                ? true
                : checkDescriptionValidation()
                ? true
                : false
            }
            onClick={successToast}>
            Add
          </Button>
        </form>

        <ul className="">
          {tasks.map((task) => {
            console.log(task);
            return (
              <li className="">
                <List className="">
                  {/* <input
                    className=""
                    type="checkbox"
                    value=""
                    aria-label="..."
                    defaultChecked={task.complete}
                    // onChange={(e) => update(task.id, e.target.checked)}
                    onChange={(e) => update(task.title, e.target.checked)}
                  /> */}
                  <div className="align-items">
                    <Task task={task} />
                    <IconButton>
                      <DeleteIcon
                        color="error"
                        onClick={(e) => del(task.title)}
                      />
                    </IconButton>
                  </div>
                  {/* <IconButton aria-label="delete" size="small">
                    <ExpandCircleDownIcon
                      fontSize="inherit"
                      color="secondary"
                      onClick={expendTask(task)}
                    />
                  </IconButton> */}
                </List>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
