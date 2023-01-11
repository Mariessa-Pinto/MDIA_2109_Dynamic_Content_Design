import { useState } from 'react';

export default function ExampleFive() {
    const [shopping, setShopping] = useState();
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