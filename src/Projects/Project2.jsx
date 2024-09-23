import { useState } from "react"

export const Project2 = () => {
    const [number, setNumber] = useState(0);
    
    return(
        <div>
            <h3>{number}</h3>
                <button onClick={() => setNumber(number+1)}>Increment</button>
                <button onClick={() => setNumber(number-1)}>Decrement</button>
        </div>
    );
};