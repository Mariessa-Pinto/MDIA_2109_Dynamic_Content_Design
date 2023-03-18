import Link from "next/link";
import { useEffect, useState } from "react";

export default function SetIntervalOne() {
    
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((previousCounter) => previousCounter + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, [])
    
    return (
        <>
        Counter: {counter}
        <div>
            Set Interval Two
        </div>
        <div>
            <Link href={"/"}>Home</Link>
        </div>
        </>
    )
}