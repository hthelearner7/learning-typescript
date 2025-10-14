import type { PropsWithChildren } from "react";

// import type React from "react";
// type ComponentProps = {
//     name: string;
//     id: number;
//     children?: React.ReactNode;
// };
// console.log({ name, id });
// function Component({ name, id }: { name: string; id: number }) { // 01-method
// function Component({ name, id }: ComponentProps) {

//     return (
//         <div>
//             <h2>React & Typescript</h2>
//             <h2>Props</h2>
//             <p>Name: {name}</p>
//             <p>Id: {id}</p>
//         </div>
//     );
// }

type ComponentProps = PropsWithChildren<{
    name: string;
    id: number;
}>;

function Component(props: ComponentProps) {
    return (
        <div>
            <h2>React & Typescript</h2>
            <h2>Props</h2>
            <p>Name: {props.name}</p>
            <p>Id: {props.id}</p>
            {props.children}
        </div>
    );
}
export default Component;
