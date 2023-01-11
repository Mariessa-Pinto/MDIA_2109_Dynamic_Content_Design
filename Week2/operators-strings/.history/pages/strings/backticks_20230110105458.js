/** Multiline comment
 * @author      Mariessa
 * @version     1.0
 * 
 * @description A function that contains examples on 
 *              how to setup a sentence using backticks
 * @returns     Will return a message
 */
export default function BackticksExample() {
    
    // all the variables
    const name       = "Mariessa";
    const message    = `Welcome to this page ${name}`;

    console.log(message);

    return (
        <>
            {message}
        </>
    )

}