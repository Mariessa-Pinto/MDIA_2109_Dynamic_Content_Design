import { useState } from 'react';

export default function ExampleOne() {
    const [number, setNumber] = useState(0);

    return (
        <>
        <input
        value={number}
        onChange={e => setNumber(e.target.value)}
        type="number"
        placeholder="Enter a number"
        />

        {number >= 2 ? <>Large number</> : <>Small number</>}
        </>
    )
}