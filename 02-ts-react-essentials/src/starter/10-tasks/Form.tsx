import { useState, type PropsWithChildren } from "react";
type ComponentProps = PropsWithChildren<{
    addTask: (taskDescription: string) => void;
}>;
const Form = (props: ComponentProps) => {
    const [taskDescription, setTaskDescription] = useState<string>("");
    const handleTaskFormSubmission = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        if (taskDescription.trim() != "") {
            // console.log(event);
            alert("form submitted");
            props.addTask(taskDescription);
            setTaskDescription("");
        }
    };
    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleTaskFormSubmission} className="form">
                <label htmlFor="taskDescription" className="mb-1">
                    Task:{" "}
                </label>
                <input
                    name="taskDescription"
                    type="text"
                    className="form-input mb-1"
                    placeholder="Enter task: "
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
