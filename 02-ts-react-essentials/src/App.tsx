// import Component from "./starter/01-return";
// import Component from "./starter/02-props";
// import Component from "./starter/03-state";
import Component from "./starter/05-challenge";

function App() {
    return (
        <main>
            <Component type="basic" name="abcd" />
            <Component type="advanced" name="egfh" email="abc@example.com" />
        </main>
    );
}

export default App;
