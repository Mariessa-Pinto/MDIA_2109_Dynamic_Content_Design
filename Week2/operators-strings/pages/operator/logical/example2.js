export default function ExampleTwo() {
    const message = [ "React", "Re: React", "Re: Re: REact"]


    return (
        <>
            {
                message.length > 0 && <h2>You have {message.length} unread messages</h2>
            }
        </>
    )
}