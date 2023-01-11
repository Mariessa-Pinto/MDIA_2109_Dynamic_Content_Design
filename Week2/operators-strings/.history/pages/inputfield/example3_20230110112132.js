import { useState } from "react";

export default function ExampleThree() {
    const [name, setName] = useState('');
    const placeholderText = "Your first name";

    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder={placeholderText}
            />
        </>
    )
}