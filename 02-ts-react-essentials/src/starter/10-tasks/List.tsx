import type { Task } from "./types";

type ListProps = {
    tasks: Task[];
    handleToggle: (id: string) => void;
};

const List = (props: ListProps) => {
    const { tasks } = props;
    return (
        <div>
            <h2>List of Tasks</h2>
            <ol className="list">
                {tasks.map((task) => (
                    <li key={task.id} className="mb-1">
                        <p>{task.description}</p>
                        <input
                            type="checkbox"
                            checked={task.isCompleted}
                            onChange={() => props.handleToggle(task.id)}
                        />
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default List;
