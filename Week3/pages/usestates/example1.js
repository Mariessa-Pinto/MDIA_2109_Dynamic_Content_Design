import { useState } from "react";

export default function ExampleOne() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            {number}
        </div>
    )
}