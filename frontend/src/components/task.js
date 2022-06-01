import { useState, useEffect } from "react";
import "../css/test.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/400.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

function Task() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [textValue, setTextValue] = useState("");
  const numbersPattern = /[0-9]/;
  const signsPattern = /[$&+,:;=?@#|'<>.^*()%!-]/;
  const [open, setOpen] = useState(true);

  const handleChange = (event) => {
    setTextValue(event.target.value);
    setName(event.target.value);
  };

  const checkValidation = () => {
    return !textValue
      ? "You can't enter an empty task"
      : numbersPattern.test(textValue)
      ? "You can't use numbers"
      : signsPattern.test(textValue)
      ? "You can't use special characters"
      : "";
  };

  const expendTask = (task) => {
    console.log(task);
    return <div>task.description</div>;
  };

  const handleExpendClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    (async () => {
      try {
        // const res = await fetch("http://localhost:8000/tasks");
        const res = await fetch("http://127.0.0.1:8000/api/todo");
        const content = await res.json();

        setTasks(content);
      } catch (err) {
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
        name,
      }),
    });

    const task = await res.json();

    setTasks([...tasks, task]);
  };

  const update = async (id, checked) => {
    await fetch(`http://127.0.0.1:8000/api/todo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        complete: checked,
      }),
    });
  };

  const del = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await fetch(`http://127.0.0.1:8000/api/todo/${id}`, {
        method: "DELETE",
      });

      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  return (
    <div data-testid="task-1" className="todo-container">
      <div className="card">
        <Typography
          variant="h2"
          className="title"
          component="div"
          color="blue"
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
              error={checkValidation() ? true : false}
              // className={checkValidation() ? true : false}
              id="outlined-error-helper-text"
              label="Task"
              placeholder="Add new task"
              helperText={checkValidation()}
              onChange={handleChange}
              value={textValue}
              multiline
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            size="small"
            disabled={checkValidation() ? true : false}>
            Add
          </Button>
        </form>

        <ul className="">
          {tasks.map((task) => {
            console.log(task);
            return (
              <li className="">
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    value=""
                    aria-label="..."
                    defaultChecked={task.complete}
                    // onChange={(e) => update(task.id, e.target.checked)}
                    onChange={(e) => update(task.title, e.target.checked)}
                  />
                  {task.title}
                  {/* {task.description} */}

                  <IconButton aria-label="delete" size="small">
                    <ExpandCircleDownIcon
                      fontSize="inherit"
                      color="secondary"
                      onClick={() => expendTask(task)}
                    />
                  </IconButton>

                  {/* <ListItemButton onClick={handleExpendClick}>
                    <ListItemIcon>
                      <ExpandCircleDownIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton> */}
                </div>
                <a
                  href="#!"
                  data-mdb-toggle="tooltip"
                  title="Remove item"
                  onClick={(e) => del(task.id)}>
                  <i className=""></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Task;
