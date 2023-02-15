export default function ChildTwo({childParent}) {
    
    const data = "This is data from Child page to the parent page"
    
    return(
        <>
        <button onClick={() => childParent(data)}>Click Child to Parent</button>
        </>
    )
}