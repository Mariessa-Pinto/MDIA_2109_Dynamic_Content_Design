import { useState } from "react";

export default function ExampleFour() {
    const [number, setNumber] = useState(0);


    function handleClick(change) {
        if(change) {
            setNumber(number => number + 1);
        } else {
            setNumber(number => number - 1);
        }
    }

    return(
        <div>
            <button onClick={() => handleClick(true)}>Increment</button>
            <button onClick={() => {
                handleClick(true)
                handleClick(true)
                handleClick(true)
            }}>Increment by 3</button>
            <button onClick={() => handleClick(false)}>Decrement</button>
            <button onClick={() => {
                handleClick(false)
                handleClick(false)
                handleClick(false)
            }}>Decrement by 3</button>
            {number}
        </div>
    )
}