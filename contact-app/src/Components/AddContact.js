import  React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

function AddContact(props){
    const [info,setInfo]=useState({name:'hi', phone:'11',email:'1@gmail.com'})

    const navigate = useNavigate();

    const add=(e)=>{
        e.preventDefault();
        props.setContacts(info);
        setInfo({name:'', phone:'',email:''});
        navigate("/");
    };

    return (
        <div className='ui main'>
        <h2> Add Contact</h2>
        <form className='ui form' onSubmit={(e)=>{add(e)}}>
            <div className="field">
                <label>Name</label>
                <input type='text' name='personname' placeholder='Name' value={info.name} onChange={(e)=>{setInfo({...info,"name":e.target.value})}} required/>
            </div>
            <div className="field">
                <label>Phone No</label>
                <input type='number' name='personnumber' placeholder='Phone Number' value={info.phone} onChange={(e)=>{setInfo({...info,"phone":e.target.value})}} required/>
            </div>
            <div className="field">
                <label>Email</label>
                <input type='email' name='personmail' placeholder='Email' value={info.email} onChange={(e)=>{setInfo({...info,"email":e.target.value})}}/>
            </div>
            <button type='submit' className="ui button blue">Add</button>
        </form>
        </div>
    );
}

export default AddContact;