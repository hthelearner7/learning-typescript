import type { JSX } from "react";

// function Component(): void {} // error

function Component(): JSX.Element | null | string {
    return (
        <div>
            <h2>Return Type</h2>
        </div>
    );
    return null;
    return "hello";
}
export default Component;
