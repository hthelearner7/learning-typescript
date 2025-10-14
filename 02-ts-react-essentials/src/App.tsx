// import Component from "./starter/01-return";
import Component from "./starter/02-props";

function App() {
    return (
        <main>
            <Component name="peter" id={123}>
                <h2>i am a heading passed as a child component</h2>
            </Component>
            <hr />
            <Component name="jack" id={234} />
        </main>
    );
}

export default App;
