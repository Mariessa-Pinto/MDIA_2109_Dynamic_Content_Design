import { useEffect, useState } from "react";

export default function ExampleTwo() {
    const [item, setItem] = useState([])

    const placeholderText = "Your first name";

    useEffect(() => {
        console.log(item);
    }, [item])

    return(
        <>
            <input
                value={item}
                onChange={e => setItem([e.target.value])}
                type="text"
                placeholder={placeholderText}
            />

            {item}
        </>
    )
}