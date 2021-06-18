import { useState, useEffect } from "react";
import axios from "axios";

const FetchUsers = () => {
    // fetch user from API 
    const [users, setUsers] = useState();

    useEffect(() => {    
        const fetchUsers = async () => { 
            const response = await axios.get(process.env.REACT_APP_BASE_URL)
            if (response.status == 200) {
                setUsers(response.data)            
            }            
        }
        fetchUsers();
    }, [])
    
    
    return { users }
};

export default FetchUsers;