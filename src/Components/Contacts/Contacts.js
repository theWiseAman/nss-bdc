import React, { useState } from 'react';

import classes from "./Contacts.scss";
// import axios from 'axios';
import { FormGroup } from 'react-bootstrap';

import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea';
import Button from 'react-validation/build/button';

// import { useToast } from "@chakra-ui/react"

const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};
 
const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};

const Contacts = () => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    // const url1 = 'https://sheet.best/api/sheets/aeb1902d-6681-4939-a7db-999211ca9af6';
    // const url2 = "https://sheet.best/api/sheets/c971af4e-e04a-43a9-bedf-94aa6df09731";
    // const toast = useToast();

    const submitHandler = e => {
        
        return 'Success'
        // e.preventDefault();
        // setFormData({ name: "", email: "", message: "" });
    
        // const d = new Date();

        // axios.post(Math.random() < 0.5 ? url1 : url2, { ...formData, date: d.toDateString(), time: d.toTimeString() }).then( response => {
            
        // });

        // toast({
        //   title: "Message sent!",
        //   description: "Our team is looking into it.",
        //   status: "success",
        //   duration: 4000,
        //   isClosable: true,
        // })
    }
    
    return (
        <div className={`${classes.contactBody} contactBody py-5 px-3`}>
            <div className='container'>
                <div className={`${classes.contactForm} contactForm`}>
                    <form action="#" method="POST" onSubmit={submitHandler}>
                        <h1>Contact Us</h1>
                        <h3 className='mt-3'>Leave us a feedback</h3>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className='col-12 my-3'>
                                    <label for="name" className='col-12'>
                                        <div className={`${classes.inputHead} inputHead`}>
                                            Name
                                        </div>
                                    </label>
                                    <input onSubmit={[required]} className="col-12 mt-2 mt-md-3" type="text" id="name" name="name" value={formData.name} onChange={
                                        (e) => {
                                            setFormData({ email: formData.email, message: formData.message, [e.target.name]: e.target.value });
                                        } 
                                    } placeholder="James Bond" />
                                </div>
                                <div className='col-12 my-3 my-md-5'>
                                    <label for="email" className='col-12'>
                                        <div className={`${classes.inputHead} inputHead`}>
                                            E-mail
                                        </div>
                                    </label>
                                    <input onSubmit={[required, email]} className="mt-2 mt-md-3" type="text" id="email" name = "email" value = {formData.email} onChange={
                                                (e) => {
                                                    setFormData({ name: formData.name, message: formData.message, [e.target.name]: e.target.value });
                                                } 
                                            } placeholder="abc@xyz.com" />
                                </div>
                            </div>
                            <div className='col-12 col-md-6 my-3'>
                                <label for="message" className='col-12'>
                                    <div className={`${classes.inputHead} inputHead`}>
                                        Message
                                    </div>
                                </label>
                                <textarea onSubmit={[required]} className="mt-3" id="message" name = "message" value = {formData.message} onChange={
                                    (e) => {
                                        setFormData({ email: formData.email, name: formData.name, [e.target.name]: e.target.value });
                                    } 
                                } rows="4" cols="50" placeholder="Hey there, I wanted to say hi and that..." />
                            </div>
                            <div className='row justify-content-center'>
                                <button className="button p-3">Send message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;