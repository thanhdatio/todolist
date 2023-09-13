const toolsForm = TOOLS_SCREEN.querySelector(".js-tool-list__form");
const toolsCounter = toolsForm.querySelector(".js-form__counter");
const toolsInput = toolsForm.querySelector("input");
const toolsList = TOOLS_SCREEN.querySelector(".js-tools-list__list");

const TOOLS_KEY = "tools";

let tools = [];

function saveTools() {
  localStorage.setItem(TOOLS_KEY, JSON.stringify(tools));
}

//function updateCounter() {
//  const toolsCount = String(tools.length).padStart(2, "0");

//  const checkedTools = toDos.filter((toDo) => toDo.isChecked === true);
//  const checkedCount = String(checkedToDos.length).padStart(2, "0");

//  toDoCounter.innerText = `${checkedCount}/${toDoCount} Xong`;
//}

/*function deleteTodo(event) {
  const li = event.target.parentElement;

  fadeOut(li, { isAfterIn: true }); // Is always after fading in
  setTimeout(() => {
    li.remove();
  }, TRANSITION_DURATION);

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();

  updateCounter();
}
*/
/*function showTools(newTools) {
  const li = document.createElement("li");
  li.id = newTools.id;
  li.classList.add("list__tools");

  const span = document.createElement("span");
  span.innerText = newToDo.text;

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";

  deleteButton.addEventListener(CLICK_EVENT, deleteTodo);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const toDo = toDos[toDos.findIndex((toDo) => toDo.id === parseInt(li.id))];
  if (toDo.isChecked) {
    checkbox.checked = true;
    span.classList.add(CHECKED_CLASSNAME);
  }

  checkbox.addEventListener(CLICK_EVENT, function () {
    span.classList.toggle(CHECKED_CLASSNAME);

    toDo.isChecked = !toDo.isChecked;

    updateCounter();
    saveToDos();
  });

  li.appendChild(deleteButton);
  li.appendChild(checkbox);
  li.appendChild(span);

  toDoList.appendChild(li);
  li.classList.add(HIDDEN_CLASSNAME);
  setTimeout(() => {
    fadeIn(li, { isAfterOut: true }); // true removes .hidden
  }, 10);

  updateCounter();
}
*/
/*
function handleToDoSubmit(event) {
  event.preventDefault();

  const toDoText = toDoInput.value;
  toDoForm.reset();

  const toDo = {
    id: Date.now(),
    text: toDoText,
  };
  toDos.push(toDo);
  showToDo(toDo);
  saveToDos();
}

function showSavedToDos() {
  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;

    parsedToDos.forEach((toDo) => {
      showToDo(toDo);
    });

    updateCounter();
  }
}

setTimeout(() => {
  updateDate(new Date(), { isToDoDate: true }); // In time.js
}, 1000);

showSavedToDos();

toDoForm.addEventListener("submit", handleToDoSubmit);
*/
