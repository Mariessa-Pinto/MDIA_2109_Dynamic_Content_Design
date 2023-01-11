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
            {
                name.length > 3 ? <p>Hello, {name}. Please enter your age:
                    <input
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        type="number"
                        placeholder={placeholderAge}
                    />
                </p> : <></>
            }

            {
                age > 20 ? <p>You may enter</p> : <></>
            }
        </>
    )
}