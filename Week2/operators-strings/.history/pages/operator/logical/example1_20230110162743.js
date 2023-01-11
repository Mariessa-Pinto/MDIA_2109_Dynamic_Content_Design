import { useState, useEffect } from 'react';

export default function ExampleOne() {
    const [color, setColor] = useState("red");
    const [holiday, setHoliday] = useState("");

    useEffect(() => {
        if(color === "red" || color === "green") {
            setHoliday("Christmas");
        } else {
            setHoliday("");
        }

    }, [color])

    return (
        <>
            {
                holiday.length > 0 ? <>{holiday}</> : <></>
            }
        </>
    )
}