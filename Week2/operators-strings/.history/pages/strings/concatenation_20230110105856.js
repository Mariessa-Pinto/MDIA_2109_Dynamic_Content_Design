/** Multiline comment
 * @author      Mariessa
 * @version     1.0
 * 
 * @description A function that contains example on how to 
 *              setup a sentence using concatenation
 * @returns     It will return a message
 */
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