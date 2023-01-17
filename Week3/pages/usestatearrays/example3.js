import { useEffect, useState } from "react";

export default function ExampleThree() {
    const [item, setItem] = useState([])

    useEffect(() => {
        console.log(item);
    }, [item])

    return(
        <>
            <button onClick={() => {
                setItem(["adding", ...item])
            }}>Add to array</button>

            {item}
        </>
    )
}