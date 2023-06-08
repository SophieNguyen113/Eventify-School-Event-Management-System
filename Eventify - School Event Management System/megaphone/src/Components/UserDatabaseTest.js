import axios from "axios";
import React, {useState} from "react";



function UserDatabaseTest(props) {
    const [displayText, setDisplayText] = useState("Test");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div>
            <p>{displayText}</p>
            <input id="first_name" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
            <input id="last_name" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
            <input id="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <input id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => verifyPassword(username, password)}>Get from Database</button>
            <button onClick={() => addToDatabase(username, password, firstName, lastName)}>Add to Database</button>
            <button onClick={() => changeFirstName(props, firstName)}>Change First Name</button>
        </div>
    )

    async function verifyPassword(username, password) {
        let userInfo = await axios.post("http://localhost:8080/user/verifyPassword", {
            username: username,
            password: password
        });
        let displayText = "";
        console.log(userInfo);
        if (userInfo.data.length == 0) {
            displayText = "Username and Password is not in database.";
        } else {
            displayText = `The username is ${userInfo.data[0].username} and the password is ${userInfo.data[0].password}`;
        }
        setDisplayText(displayText);
        console.log(userInfo.data[0]);
        console.log(userInfo.data[0].username);
    }
    async function addToDatabase(username, password, firstName, lastName) {
        let userInfo = await axios.post("http://localhost:8080/user/add", {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            joinedProtests: []
        });
        console.log(userInfo);
        const test = "Data successfully added";
        setDisplayText(test);
        console.log(userInfo);
        console.log(userInfo.data.firstName);
    }

    function changeFirstName(props, firstName) {
        console.log(firstName);
        props.setUserData({...props.userData, firstName: firstName});
    }
}

export default UserDatabaseTest;