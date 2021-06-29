import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
    
    const [login,setLogin] = useState();

    useEffect(() => {
        axios.get('http://localhost:3000/Login').then(result => {

            setLogin(result.data);
        });
    }, []);

    
    
        return(
            <div>
                    <h1>test</h1>
            </div>
        );
      
       
}



export default Login;