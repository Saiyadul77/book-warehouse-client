import React from 'react';

const AddItem = () => {
    const handleuser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };

        // send item to the server

        fetch('http://localhost:5000/user', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert ('user upadate successfully');
                event.target.reset();
            })

    }
    return (
        <div>
            <h1>Please Add Your Item</h1>
            <form onSubmit={handleuser}>
                <input type="text" name='name' placeholder='name' required /><br />
                <input type="email" name='email' placeholder='Email' required /><br />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;