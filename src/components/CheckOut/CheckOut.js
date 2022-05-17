import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CheckOut = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone };

    }

    return (
        <div className='container w-50 mx-auto'>
            <div>
                <h2 className='text-primary text-center'>Your Course Booking info</h2>
                <form onSubmit={handleCreateUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={user?.email} readOnly type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Your Address</Form.Label>
                        <Form.Control onBlur={handleAddressBlur} type="text" placeholder="Enter Your Address" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onBlur={handlePhoneBlur} type="text" placeholder="Enter Your Phone Number" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Booking
                    </Button>

                    <p style={{ color: 'red' }}>{error}</p>

                </form>

            </div>
        </div>
    );
};

export default CheckOut;