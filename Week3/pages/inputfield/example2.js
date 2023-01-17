import { useState } from "react";

export default function ExampleTwo() {
    const [name, setName] = useState('');

    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your first name"
            />
            <p>Hello, {name}</p>
        </>
    )
}