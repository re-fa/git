let btnShow = document.querySelector("#showWindowBTN");
let infoWin = document.querySelector("#windowInfoTask");
let cancelTask = document.querySelector("#cancelTask");
let inputTask = document.querySelector("#taskTitle");
let addTask = document.querySelector("#addTask");
let container = document.querySelector("#containerTasks");
let count = document.querySelector("#count");
let countTask = 0;
let checkedTask = 0;
let otherTask = 0;

btnShow.onclick = function () {
  infoWin.classList.add("show");
};

function countT() {
  if (countTask == 0) {
    count.innerHTML = `No Tasks`;
  } else {
    count.innerHTML = `You have <span id="count-span">${countTask}</span> Tasks <br>
  <span id="checkedCount">${checkedTask}</span> is Completed, and <span id="otherCount">${otherTask}</span> Remaining`;
    if (otherTask == 0) {
      count.innerHTML = `<span id="checkedCount">All Completed! 🎉</span>`;
    }
  }
}

addTask.onclick = function () {
  let inputValue = inputTask.value;
  if (inputValue === "") {
    inputTask.classList.add("border-red");
  } else {
    let createDiv = document.createElement("div");
    let createSpan = document.createElement("span");
    let createInput = document.createElement("input");
    let createX = document.createElement("span");

    createX.textContent = "×";
    createX.classList.add("x-task");

    createInput.type = "checkbox";

    createDiv.classList.add("task");
    createSpan.classList.add("taskContent");
    createInput.classList.add("check");

    createSpan.textContent = inputValue;

    createDiv.appendChild(createX);
    createDiv.appendChild(createInput);
    createDiv.appendChild(createSpan);

    container.appendChild(createDiv);

    createInput.onchange = function () {
      if (createInput.checked) {
        createSpan.style.textDecoration = "line-through";
        createSpan.style.color = "gray";
        checkedTask++;
        otherTask--;
        countT();
      } else {
        createSpan.style.textDecoration = "none";
        createSpan.style.color = "black";
        checkedTask--;
        otherTask++;
        countT();
      }
    };
    countTask++;
    otherTask++;
    infoWin.classList.remove("show");
    inputTask.classList.remove("border-red");
    inputTask.value = "";
    countT();
    createX.onclick = function () {
      container.removeChild(createDiv);
      countTask--;
      otherTask--;
      checkedTask--;
      countT();
    };
  }
};

cancelTask.onclick = function () {
  infoWin.classList.remove("show");
  inputTask.classList.remove("border-red");
  inputTask.value = "";
};
