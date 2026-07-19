let tasks = [];

export function addTask(text) {
  tasks.push({ text: text, done: false });
}

export function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
}

export function deleteTask(index) {
  tasks.splice(index, 1);
}

export function getTasks() {
  return tasks;
}
