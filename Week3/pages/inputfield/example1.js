import { useState } from "react";

export default function ExampleOne() {
    const [name, setName] = useState("Name here");

    return (
        <>
        <input
            value={name}
            onChange={e => setName(e.target.value)}
        />
        <p>Hello, {name}</p>
        </>
    )
}