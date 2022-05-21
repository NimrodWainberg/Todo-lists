import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:8000/tasks");
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

    const response = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
      }),
    });

    const task = await response.json();

    setTasks([...tasks, task]);
  };

  const update = async (id, checked) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        complete: checked,
      }),
    });
  };

  const del = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await fetch(`http://localhost:8000/tasks/${id}`, {
        method: "DELETE",
      });

      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  return <div className="App"></div>;
}

export default App;
