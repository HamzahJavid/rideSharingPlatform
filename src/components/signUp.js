import { useState } from "react"
import Users from "../dummyData/usersData"

export default function SignUp(){
    const [signObj,setSignObj]=useState({userName:"",password:""})
    function handleChange(e){
        const{name,value}=e.target
        setSignObj({...SignUp,[name]:value})
    }
    function handleSubmitt(e){
        e.preventDefault()
        //check the existing user logic over here
        try{

            //using the user name as a unique key over here instead of generating indexes for the sake of simplicity

            if (Users.find(user=>user.userName==userName)){
                throw new Error("User of this username already exists");
            }
            if (Users.find(user=>user.password==password)){
                throw new Error("User of this password already exists");
            }

            Users.push(signObj)
            alert("User added successfully")

        }
        catch(e){
            alert(e.message)
        }

    }
    return(
        <form onSubmit={handleSubmitt}>
            <label>
                User name
                <input type="text" name="userName" value={signObj.userName} onChange={handleChange}/>
            </label>

            <label>
                Password
                <input type="password" name="password" value={signObj.password} onChange={handleChange}/>
            </label>
            
        </form>
    )

}