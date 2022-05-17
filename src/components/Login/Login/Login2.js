import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from '../../../firebase.init';

const Login = () => {
    const [register, setRegister] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);

    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);

    }
    const handleRegister = event => {
        setRegister(event.target.checked);
    }
    

    const handleUser = event => {
        event.preventDefault();
        if (register) {
            signInWithEmailAndPassword(auth,email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user)
                })
                .catch(error => {
                    console.log(error);
                    setError(error.message)
                })
        }
        else {
            createUserWithEmailAndPassword(auth,email, password)
                .then(result => {
                    const user = result.user;
                    setEmail('');
                    setPassword('');
                    verifyEmail();
                    userUpdate();
                    console.log(user)
                })
                .catch(error => {
                    console.error(error);
                    setError(error.message);
                })

        }
        // console.log('form submited', email, password);
    }

    const handleRestPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('password rest send email')
            })
    }

    const userUpdate=()=>{
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(()=>{
            console.log('updated name')
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('send email verification')
            })
    }
    return (
        <div>
            <div className='register w-50 mx-auto mt-5'>
                <h1 className='text-primary'>Please {register ? 'Login' : 'Register'}</h1>
                <Form onSubmit={handleUser}>
                    {!register && <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Name" required />
                    </Form.Group>}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={handleRegister} type="checkbox" label="Already Registered?" />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <Button onClick={handleRestPassword} variant="link">Forget Password??</Button><br />
                    <Button variant="primary" type="submit">
                        {register ? "Login" : "Register"}
                    </Button>

                </Form>
            </div>
        </div>
    );
};

export default Login;