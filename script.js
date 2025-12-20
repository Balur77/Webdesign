const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const filterAll = document.getElementById("filterAll");
const filterCompleted = document.getElementById("filterCompleted");
const filterUncompleted = document.getElementById("filterUncompleted");

const burgerBtn = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");

let tasks = [];
let currentFilter = "all";

if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    renderTasks();
}

addTaskBtn.onclick = () => {
    if (!taskInput.value.trim()) return;

    tasks.push({
        id: Date.now(),
        text: taskInput.value,
        completed: false
    });

    taskInput.value = "";
    saveTasks();
    renderTasks();
};

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    let filtered = tasks;
    if (currentFilter === "completed") filtered = tasks.filter(t => t.completed);
    if (currentFilter === "uncompleted") filtered = tasks.filter(t => !t.completed);

    filtered.forEach(task => {
        const li = document.createElement("li");
        if (task.completed) li.classList.add("completed");

        const span = document.createElement("span");
        span.textContent = task.text;
        span.onclick = () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        };

        const btn = document.createElement("button");
        btn.textContent = "Удалить";
        btn.onclick = () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks();
        };

        li.append(span, btn);
        taskList.appendChild(li);
    });
}

/* ===== FILTERS ===== */
filterAll.onclick = () => {
    currentFilter = "all";
    setActive(filterAll);
    renderTasks();
};

filterCompleted.onclick = () => {
    currentFilter = "completed";
    setActive(filterCompleted);
    renderTasks();
};

filterUncompleted.onclick = () => {
    currentFilter = "uncompleted";
    setActive(filterUncompleted);
    renderTasks();
};

function setActive(btn) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

/* ===== BURGER ===== */
burgerBtn.onclick = () => {
    navLinks.classList.toggle("active");
};

document.querySelectorAll(".nav-links a").forEach(link => {
    link.onclick = () => navLinks.classList.remove("active");
});
