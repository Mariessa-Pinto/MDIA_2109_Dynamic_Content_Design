import { useState } from "react"
import ChildOne from "./ChildOne"

export default function ParentOne() {
    const [data, setData] = useState("");

    const parentToChild = () => {
        setData('This is the data fromt eh patent page which will be passed to the child page')
    }
    return(
        <>
        <ChildOne parentToChild={data}/>
        <button onClick={() => parentToChild()}>Click parent to child</button>
        </>
    )
}