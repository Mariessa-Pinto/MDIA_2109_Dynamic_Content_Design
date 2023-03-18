import Link from "next/link";

export default function SetIntervalOne() {
    
    setInterval(() => {
        console.log("I am here");
    }, 1000);
    
    return (
        <>
        <div>
            Set Interval One
        </div>
        <div>
            <Link href={"/"}>Home</Link>
        </div>
        </>
    )
}