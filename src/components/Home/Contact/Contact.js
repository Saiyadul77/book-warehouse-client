import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className='mt-5'>
           <h1 className='text-primary'>Contact Us</h1> 
           <form>
               <input className='w-50 mx-auto' type="text" name="name" id="" placeholder='Name'/><br />
               <input className='w-50 mx-auto' type="email" name="email" id="" placeholder='Email'/><br />
               <input className='w-50 mx-auto' type="text" name="name" id="" placeholder='Name'/><br />
               <input className='w-50 mx-auto' type="text" name="subject" id="" placeholder='Subject'/><br />
               <input className='w-50 mx-auto' type="text" name="store" id="" placeholder='Preferred store location'/><br />
               <input className='w-50 mx-auto' type="textarea" name="message" id="" placeholder='Message'/><br />
               <input className='btn btn-primary' type="submit" value="Submit" />

           </form>
        </div>
    );
};

export default Contact;