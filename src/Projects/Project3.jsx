import { useState } from "react"

export const Project3 = () => {
    
    const [isToggle,setToggle] = useState(false);
    const HandleToggle = () => {
        setToggle(!isToggle);
    }
    
    return (
        <div>
                <label>
                <input type="checkbox" onChange={HandleToggle}/>
                </label>
                <h3>{isToggle ? "On" : "Off"}</h3>
        </div>
    )
}