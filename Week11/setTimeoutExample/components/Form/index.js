import { useState } from "react";
import Link from "next/link";

export default function Form({
    navigate="/"
}) {

    const [firstName, setFirstName] = useState('');
    const [errorFirstName, setErrorFirstName] = useState('');
    const [firstNamePass, setFirstNamePass] = useState(0);
    const [show, setShow] = useState(false);

    function isValidFirstName(firstName) {
        return /^\p{Lu}/u.test(firstName);
    }


    const handleChangeFirstName = (event) => {
        if(!isValidFirstName(event.target.value)){
            setErrorFirstName('First name error. First letter must be vapital. Must use alphabets only');
            if(firstNamePass == 0) {
                setFirstNamePass(firstNamePass + 1);
            }
        }else {
            setErrorFirstName('');
            if(firstNamePass == 1) {
                setFirstNamePass(firstNamePass - 1);
                setShow(true);
            }
        }
        setFirstName(event.target.value);
        console.log(firstNamePass);
    }

    return (
        <>
            <form>
                <label>Please enter your first name</label>
                <input 
                    type="text" 
                    title="Your first name" 
                    name="firstname" 
                    id="firstName" 
                    value={firstName} 
                    placeholder="First Name here"
                    onChange={handleChangeFirstName}
                />
                {
                    show && errorFirstName.length == 0 ? 
                        <Link href={navigate}><button type="button">Submit</button></Link>
                        : <></>
                }
            </form>
            {
                errorFirstName && <p style={{color: '#B22222', fontWeight: 500}}>{errorFirstName}</p>
            }
        </>
    )
}