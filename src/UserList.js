import React, {useEffect, useState} from "react";
import axios from "axios";
const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const respose = await axios.get("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                    setUsers(response.data);
                })
                .catch((error) => {
                    setError(error);
                });
        }
        
        fetchData();
        // axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then((response) => {
        //         setUsers(response.data);
        //     });
    }, []);
    return (
        <div>
            <h1>Users</h1>
            <ul style= {{background: "darkblue", padding: "20px"}}>
                {users.map((user) => (
                    <li style={{background:"lightblue", color: "darkblue", margin : "5px"}} key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;