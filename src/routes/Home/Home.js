import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { HandlePost } from "../../helpers/Functions";
import './Home.css'; 

function Home() {
    const {register, handleSubmit} = useForm();
    const [registrated, setRegistrated] = useState(false);
    const [errors, setErrors] = useState(false);

    // check if passwords are identical and handle registration via API
    const onSubmit = data => {
        if (data.password === data.passwordRepeat) {
            HandlePost(data);
            setRegistrated(true);            
        } else {setErrors(true)}
    };
    

    return (
        <div className="home">
            { !registrated &&  
                <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className="home__register">
                        <h2>Join now</h2>
                        <input 
                            {...register("eMail", {required: true})} 
                            placeholder="Email" 
                            type="email"/>
                        <input 
                            {...register("password", {required: true})} 
                            placeholder="password (must be longer than 5 characters)" type="password"
                            pattern=".{5,}"/>
                        <input 
                            {...register("passwordRepeat", {required: true})} 
                            placeholder="repeat password" 
                            type="password"/>
                        <input 
                            {...register("firstName", {required: true})} 
                            pattern="^(([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?).{2,})+$"
                            placeholder="First name" />                    
                        <input 
                            {...register("lastName", {required: true})} 
                            pattern="^(([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?).{2,})+$"
                            placeholder="Last name" />
                        <input 
                            {...register("dateOfBirth", {required: true})} 
                            pattern="^\d\d[.]\d\d[.]\d\d\d\d$"
                            placeholder="date of birth (dd.mm.yyyy)" />
                        {errors && <span>incorrect fields! check above.</span>}
                        <button type="submit" className="button">Register</button>
                </form>
            }
            { registrated &&  <p>registrated!</p>}
        </div>
    )
}

export default Home
