import { useState } from "react";

export default function ExampleTwo() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <input
            value={number}
            onChange={e => setNumber(e.target.value)}
            type="number"
            placeholder="Enter a number"
            />
            {
                number == 5 ? <>You guessed right</> :
                            number > 5 ? <>You guessed too high</> : <>You guessed too low</>
            }
        </>
    )
}