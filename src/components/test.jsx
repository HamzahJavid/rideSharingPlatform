import { useState } from "react"

export default function TestButton(){
    const [count,setCount]=useState(0) 
    const HandleClick=()=>{
        setCount(count=>count+1)
        setCount(count=>count+1)
        setCount(count=>count+1)

    }

    return(
        <div>
            <button onClick={HandleClick}>Click Me!!</button> {count}
        </div>
    )

}
