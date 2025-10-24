import { ThemeProvider, useTheme } from "./context";

function ParentComponent() {
    // return <Component />;
    return (
        <ThemeProvider>
            <Component />
        </ThemeProvider>
    );
}

function Component() {
    const context = useTheme();
    console.log(context);
    return (
        <div>
            <h2>React & Typescript</h2>
            <h2>Context API</h2>
            <button
                onClick={() => {
                    if (context.theme === "dark") {
                        context.setTheme("system");
                    } else {
                        context.setTheme("dark");
                    }
                }}
            >
                Toggle Theme
            </button>
        </div>
    );
}
export default ParentComponent;
