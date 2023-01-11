export default function ConcatenationExample() {

    const name = "Mariessa";
    const message = "Welcome to this page " + name;

    console.log(message);

    return (
        <>
            {message}
        </>
    )
}