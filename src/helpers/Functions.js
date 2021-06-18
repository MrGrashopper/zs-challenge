import axios from "axios";

// handle post request by form register
export const HandlePost = (user) => {
    const config = {headars: {        
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"}
    };

    const data = {
        Email: user.eMail, 
        Password: user.password,
        FirstName: user.firstName, 
        LastName: user.lastName, 
        DateOfBirth: new Date(user.dateOfBirth)
    };

    axios.post(process.env.REACT_APP_BASE_URL, data, config)
        .then(function (response) {
        return(response)
        })
        .catch(function (error) {
        console.log(error.status);
        return(error)
        });
}

// delete user by clicking button
export const HandleDelete = (user) => {
    const query = `?id=${user.id}`;

    const config = {headars: {        
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"}
    };

    axios.delete(process.env.REACT_APP_BASE_URL + query, config)
        .then(function (response) {
        console.log(response);
        if (response.status == 200) {
            console.log("user deleted")
            //refreshPage();
        }
        })
        .catch(function (error) {
        console.log(error);
        return(error)
        });

}
