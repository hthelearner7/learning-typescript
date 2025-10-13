// The ! operator in TypeScript is officially known as the Non-null assertion operator. It is used to assert that its preceding expression is not null or undefined.
// const testBtn = document.querySelector<HTMLButtonElement>('.test-btn')!;
// const testBtn = document.querySelector(".test-btn")! as HTMLButtonElement;
// console.log(testBtn);
// testBtn?.addEventListener("click", function (): void {
//     alert("btn clicked");
//     testBtn.disabled = true;
//     testBtn.innerText = "disabled";
// });

const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const tasksList = document.querySelector<HTMLUListElement>(".list");

type Task = {
    description: string;
    isCompleted: boolean;
};

let tasks: Task[] = loadTasks();

function loadTasks(): Task[] {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
}

// pre-loading tasks list
tasks.forEach(function (task: Task) {
    renderTask(task);
});

// Update tasks in localStorage
function updateStorage(): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTask(task: Task): void {
    const taskElement = document.createElement("li");
    taskElement.textContent = task.description;
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.checked = task.isCompleted;
    taskCheckbox.addEventListener("change", () => {
        task.isCompleted = !task.isCompleted;
        updateStorage();
    });

    taskElement.appendChild(taskCheckbox);
    tasksList?.appendChild(taskElement);
}
const createTask = function (event: SubmitEvent) {
    event.preventDefault();
    const taskDescription = formInput?.value;
    if (taskDescription) {
        const task: Task = { description: taskDescription, isCompleted: false };
        tasks.push(task);

        formInput.value = "";
        updateStorage();
        // render tasks
        renderTask(task);
    } else {
        alert("please add task desciption");
    }
};

taskForm?.addEventListener("submit", createTask);
