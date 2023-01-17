import { useState } from "react";

export default function ExampleOne() {
    const [item, setItem] = useState([])

    return(
        <>
            <button onClick={() => {
                setItem(["adding"])
                console.log(item);
        }}>Add to Array</button>
        {item}
        </>
    )
}