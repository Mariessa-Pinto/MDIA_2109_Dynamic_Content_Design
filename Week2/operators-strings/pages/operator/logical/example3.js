const allItems = [
    {id: 'apple', value: '🍎 apple'},
    {id: 'orange', value: '🍊 orange'},
    {id: 'grape', value: '🍇 grape'},
    {id: 'pear', value: '🍐 pear'},
]

export default function ExampleThree() {
    return (
        <>
            {
                allItems.map(item => item.id !== "grape" ? <>{item.value}</> : <></>)
            }
        </>
    )
}