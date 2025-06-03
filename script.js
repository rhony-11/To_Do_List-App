function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "task-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.onclick = () => li.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", li.firstChild.textContent);
    if (newText !== null && newText.trim() !== "") {
      li.firstChild.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";
  deleteBtn.onclick = () => li.remove();

  buttonContainer.appendChild(completeBtn);
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);

  li.appendChild(buttonContainer);
  taskList.appendChild(li);
  taskInput.value = "";
}
