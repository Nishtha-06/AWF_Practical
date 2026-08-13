import { useState } from "react";

function Contact(){
    const [name,setName] = useState("")

    return (
        <div>
            <h2>Contact</h2>

            <input type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <p>Your name: {name}</p>
        </div>
    )
}

export default Contact