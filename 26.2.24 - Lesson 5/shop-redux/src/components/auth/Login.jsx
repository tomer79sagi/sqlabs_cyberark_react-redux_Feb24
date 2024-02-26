import React from 'react'
import { useState, useContext } from 'react';
import UserAuthContext from '../../contexts/UserAuthContext';

const Login = () => {
    const {setUserAuth: setUserA} = useContext(UserAuthContext);
    const [userAuth, setUserAuth] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userAuth.email === 'me@tomersagi.com') {
            setUserA({isAdmin: true});
        } else {
            setUserA({isAdmin: false});    
        }
        
        console.log('User Logged In', userAuth);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setUserAuth(prevUserAuth => ({
            ...prevUserAuth,
            [name]: value
        }));
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="email">Email</label>
                        </td>
                        <td>
                            <input 
                                id="email"
                                name="email"
                                type="text"
                                value={userAuth.email}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="password">Password</label>
                        </td>
                        <td>
                            <input 
                                id="password"
                                name="password"
                                type="text"
                                value={userAuth.password}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button type="submit">Login</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
  )
}

export default Login
