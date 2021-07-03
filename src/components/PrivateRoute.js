import { Redirect, Route  } from 'react-router';
import React from 'react';

// joeys

const PrivateRoute = ({ component: Component, ...rest}) => {

    const token = localStorage.getItem('myJWT');
    const isLoggedIn = !! token;

    return (
        <Route 
        {...rest}
        render = { (props) => {
            props.token = token;
              return  isLoggedIn ? (
                <Component {...props}/>
            ) : (
                <Redirect 
                    to={{
                        pathname: "/Login",
                        state: {from: props.location}
                    }}
                />
            );
        }
        }
        />
    );
}

export default PrivateRoute;