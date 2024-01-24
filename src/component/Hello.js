import { useState } from "react";
import UserName from "./UserName";

const Hello = ({age}) => {
    const [name, setName] = useState('mike');
    const [addAge, setAddAge] = useState(age);
    const msg = addAge > 19 ? "성인" : "미성년자";
    function changeName(){
        const newName = name === "mike" ? "jane" : "mike";
        setName(newName);
        setAddAge(addAge+1);
    }
    return <div>
        <h1>{name}({addAge}) {msg}</h1>
        <UserName name={name}/>
        <button onClick={changeName}>change</button>
    </div>
}

export default Hello;