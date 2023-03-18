import Link from "next/link";

export default function SetTimeoutOne() {
    
    setTimeout(() => {
        console.log("Hi there");
    }, 3000)
    
    return (
        <>
        Set Timeout One
        <div>
            <Link href="/">Home</Link>
        </div>
        </>
    )
}