export function renderTasks(tasks, listElement, onToggle, onDelete) {
  listElement.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.done) {
      li.classList.add("done");
    }

    li.addEventListener("click", () => onToggle(index));

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", () => onDelete(index));

    li.appendChild(delBtn);
    listElement.appendChild(li);
  });
}
