import axios from "axios";
import React from "react"; 
import { useState } from "react";
import { withRouter } from "react-router";
import '../components/Login.css';

const Login = ({history}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        if (username !== '' && password !== '') {
            const req = {
                username: username,
                password: password
            };
            axios.post('http://localhost:3000/users/login', req).then(result => {
                const token = result.data.jwt;
                localStorage.setItem('myJWT', token);
                history.push('/');
            })
        }
    };

           return(   
               <body class="background">
            
               <form class="loginForm" onSubmit={ signIn }>
                   <h1>Sign In</h1>
                   <label class="formLabels">UserName</label><br/>
                   <input type="text" name="username" onChange={e => setUsername(e.target.value)} class="formInputs"/><br/><br/>
                   <label  class="formLabels">Password</label><br/>
                   <input type="text" name="password" onChange={e => setPassword(e.target.value)} class="formInputs"/><br/><br/>
                   <button class="formButton">Sign In</button>
               </form>
           
                    
           
            </body>
        );
      
       
}



export default withRouter(Login);