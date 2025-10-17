import { useState } from "react";

function Component() {
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    type Person = {
        name: string;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("gelo");

        // const formData = new FormData(e.target as HTMLFormElement);
        const formData = new FormData(e.currentTarget);
        // console.log("text", formData.get("text"));

        const data = Object.fromEntries(formData);
        console.log(data);

        const person: Person = { name: data.text as string };
        console.log(person);

        setText("");
        setEmail("");
    };
    return (
        <div>
            <h2>React & Typescript</h2>
            <h2>Events</h2>
            <section>
                <h2>events example</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        className="form-input mb-1"
                        type="text"
                        name="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter Text"
                    />

                    <input
                        type="email"
                        name="email"
                        className="form-input mb-1"
                        value={email}
                        onChange={handleChange}
                        placeholder="Your Email"
                    />
                    <button type="submit" className="btn btn-block">
                        submit
                    </button>
                </form>
            </section>
        </div>
    );
}
export default Component;
