import { useState } from 'react';

export default function ExampleFour() {
    const [age, setAge] = useState();
    const [name, setName] = useState('');

    const placeholderTextName = 'Please type your name';
    const placeholderAge = 'Please type your age';

    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder={placeholderTextName}
            />
        </>
    )
}