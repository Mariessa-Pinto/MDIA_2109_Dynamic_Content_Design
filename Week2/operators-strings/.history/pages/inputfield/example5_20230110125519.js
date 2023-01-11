import { useState } from 'react';

function createInitialShoppingList() {
    const initialTodos = [];

    for(var idValue = 0; idValue < 5; idValue++) {
        initialTodos.push(
            {
                id: idValue,
                text: ' item ' + (idValue + 1)
            }
        )
    }

    console.log(initialTodos);

    return initialTodos
}

export default function ExampleFive() {
    const [shopping, setShopping] = useState(createInitialShoppingList);
    const [text, setText] = useState('');
    const [textError, setTextError] = useState(false);

    function showError() {
        if(text.length === 0) {
            setTextError(true);
        }
    }

    return (
        <>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    if(text.length < 1) {
                        setText('');
                        setShopping([{
                            id: shopping.length,
                            text: text
                        }, ... shopping])
                    } else {
                        showError();
                    }
                    console.log(shopping)
                }}
            >Adding</button>
        </>
    )
}