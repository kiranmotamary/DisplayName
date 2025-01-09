import React,{useState} from "react";

const DisplayName =()=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [fullName,setFullName]=useState("");
    const HandleFirstName=(e)=>{
        setFirstName(e.target.value);
    }
    const HandleLastName =(e)=>{
        setLastName(e.target.value);
    }
    const HandleSubmit=(e)=>{
        e.preventDefault();
        setFullName(`Full Name: ${firstName} ${lastName}`);
    }
return(
    <div>
        <h1>Full Name Display</h1>
        <form onSubmit={HandleSubmit}>
            <label for="fname">First Name:</label>
            <input type="text" id="fname" onChange={HandleFirstName} required/>
            <br/>
            <label for="lname">Last Name:</label>
            <input type="text" id="lname" onChange={HandleLastName} required/>
            <br/>
            <button value="Submit" type="submit">Submit</button>
        </form>
        {firstName&&lastName&&(<p>{fullName}</p>)}
        
    </div>
    
)
}

export default DisplayName;