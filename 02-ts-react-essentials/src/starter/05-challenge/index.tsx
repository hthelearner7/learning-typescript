type BasicComponentType = {
    type: "basic";
    name: string;
};
type AdvancedComponentType = {
    type: "advanced";
    name: string;
    email: string;
};

type ProfileType = BasicComponentType | AdvancedComponentType;
function Component(props: ProfileType) {
    const { name, type } = props;
    const alertType = type === "basic" ? "success" : "danger";
    const className = `alert alert-${alertType}`;

    return (
        <div>
            <h2>React & Typescript</h2>
            <h2>Challenge</h2>
            <article className={className}>
                <h2>user : {name}</h2>
                {type === "advanced" && props.email && (
                    <h2>email : {props.email}</h2>
                )}
            </article>
        </div>
    );
}
export default Component;
