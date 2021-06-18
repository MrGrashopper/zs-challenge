import React, { useState, useEffect } from 'react';
import FetchUsers from "../../helpers/FetchUsers";
import { HandleDelete } from "../../helpers/Functions";
import './Users.css'; 

function Users() {
    const data = FetchUsers();
    const [users, setUsers] = useState();

    // delete user by click on button
    const handleDelete = (user) => {
        HandleDelete(user);

        if (users.includes(user)) {
            let list = [];
            users.filter(function(item) {
                if (item !== user) {
                    list.push(item)
                }
            })
            setUsers(list);
        }
    }

    useEffect(() => {
        setUsers(data.users)
    }, [data])

    useEffect(() => {
        users?.length >= 1 ? setUsers(users) : setUsers(null)
    }, [users])

    return (
        <div className="users">
            <div className="users__row">
            <ul className="users__row">
                        <li data-testid="email"><b>E-Mail</b></li>     
                        <li><b>First Name</b></li>           
                        <li><b>Last Name</b></li>  
                        <li><b>Action</b></li>  
                    </ul>            
            </div>
            { users && users.map((user, index) => {
                return(
                    <ul key={index} className="users__row">
                        <li>{ user.email }</li>     
                        <li>{ user.firstName }</li>           
                        <li>{ user.lastName }</li>  
                        <button onClick={() => handleDelete(user)}>delete</button>  
                    </ul>
                )
            })}
        </div>
    )
}

export default Users
