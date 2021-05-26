import "./App.css";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { db } from "./firebase_config";
import firebase from "firebase";
import TaskListItem from "./task.js";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, settaskInput] = useState("");

  useEffect(() => {
    getTasks();
  }, []); //blank on first run

  function getTasks() {
    db.collection("tasks").onSnapshot(function (querySnapshot) {
      setTasks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          task: doc.data().task,
          occurring: doc.data().occurring,
        }))
      );
    });
  }

  function addTask(e) {
    e.preventDefault();

    db.collection("tasks").add({
      occurring: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      task: taskInput,
    });

    settaskInput("");
  }

  return (
    <div className="App">
      <div class="snowflakes" aria-hidden="true">
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1>Lwandile's🧾</h1>
        <form>
          <TextField
            id="standard-basic"
            label="Add a Task "
            value={taskInput}
            style={{
              width: "90vw",
              maxWidth: "500px",
            }}
            onChange={(e) => {
              settaskInput(e.target.value);
            }}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={addTask}
            color="primary"
          >
            Save
          </Button>
        </form>
        <div
          style={{
            width: "90vw",
            maxWidth: "500px",
          }}
        >
          {tasks.map((task) => (
            <TaskListItem
              task={task.task}
              occuring={task.occurring}
              id={task.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
