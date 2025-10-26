import { useEffect, useState } from "react";
import type { Task } from "./types";
import List from "./List";
import Form from "./Form";

function Component() {
    function loadTasks(): Task[] {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    }
    const [tasks, setTasks] = useState<Task[]>(loadTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    const addTask = (taskDescription: string): void => {
        let task: Task = {
            id: "task-" + tasks.length,
            description: taskDescription,
            isCompleted: false,
        };
        setTasks([...tasks, task]);
    };
    const handleToggle = (id: string) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task
            )
        );
    };

    return (
        <div>
            <Form addTask={addTask} />
            <List tasks={tasks} handleToggle={handleToggle} />
        </div>
    );
}
export default Component;
