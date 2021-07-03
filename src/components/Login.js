import axios from "axios";
import React from "react"; 
import { useState } from "react";
import { withRouter } from "react-router";
import '../components/Login.css';

// joeys

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
            axios.post('http://localhost:3000/Login', req).then(result => {
                const token = result.data.jwt;
                localStorage.setItem('myJWT', token);
                history.push('/');
            })
        }
    };

           return(   
               <body className="background">
            
               <form className="loginForm" onSubmit={ signIn }>
                   <h1>Sign In</h1>
                   <label className="formLabels">Email</label><br/>
                   <input type="email" name="email" onChange={e => setEmail(e.target.value)} className="formInputs"/><br/><br/>
                   <label  className="formLabels">Password</label><br/>
                   <input type="password" name="password" onChange={e => setPassword(e.target.value)} className="formInputs"/><br/><br/>
                   <button className="formButton">Sign In</button>
               </form>
           
                    
           
            </body>
        );
      
       
}



export default withRouter(Login);