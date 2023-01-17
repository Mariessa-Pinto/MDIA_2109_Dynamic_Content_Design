import { Ruslan_Display } from "@next/font/google";
import { useState, useEffect } from "react";

export default function ExampleThree() {

    const data = ["sunny", "rainy", "cloudy"];
    const [number, setNumber] = useState();

    useEffect(() => {
        setNumber(Math.floor(Math.random() * 2))
    }, [])

    if(data[number] === "sunny") {
        console.log(number);
        return (
            <>
                Time to go outside!
            </>
        )
    } else {
        console.log(number);
        return (
            <>
                Stay insdie!
            </>
        )
    }
}