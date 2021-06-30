import axios from "axios";
import React from "react"; 
import { useState } from "react";
import { withRouter } from "react-router";
import '../components/Login.css';

const Login = ({history}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        if (email !== '' && password !== '') {
            const req = {
                email: email,
                password: password
            };
            axios.post('http://localhost:3000/login', req).then(result => {
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
                   <label class="formLabels">Email</label><br/>
                   <input type="text" name="email" onChange={e => setEmail(e.target.value)} class="formInputs"/><br/><br/>
                   <label  class="formLabels">Password</label><br/>
                   <input type="text" name="password" onChange={e => setPassword(e.target.value)} class="formInputs"/><br/><br/>
                   <button class="formButton">Sign In</button>
               </form>
           
                    
           
            </body>
        );
      
       
}



export default withRouter(Login);