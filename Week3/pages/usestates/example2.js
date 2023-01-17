import { useState } from "react";

export default function ExampleTwo() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <button onClick={() => setNumber(number + 1)}>Increment</button>
            <button onClick={() => setNumber(number - 1)}>Decrement</button>
            {number}
        </div>
    )
}