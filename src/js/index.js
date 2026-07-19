import { addTask, toggleTask, deleteTask, getTasks } from "./todoStore.js";
import { renderTasks } from "./render.js";

const input = document.querySelector("taskInput");
const addBtn = document.querySelector("addBtn");
const list = document.querySelector("taskList");

function update() {
  renderTasks(getTasks(), list, handleToggle, handleDelete);
}

function handleToggle(index) {
  toggleTask(index);
  update();
}

function handleDelete(index) {
  deleteTask(index);
  update();
}

addBtn.addEventListener("click", () => {
  addTask(input.value);
  input.value = "";
  update();
});
