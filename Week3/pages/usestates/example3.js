import { useState } from "react";

export default function ExampleThree() {
    const [number, setNumber] = useState(0);


    function handleClick(change) {
        if(change) {
            setNumber(number + 1);
        } else {
            setNumber(number - 1);
        }
    }
    
    return(
        <div>
            <button onClick={() => handleClick(true)}>Increment</button>
            <button onClick={() => handleClick(false)}>Decrement</button>
            {number}
        </div>
    )
}