import  React, { useState }  from 'react';
import { useNavigate,useLocation } from "react-router-dom";

function EditContact(props){
    
    const navigate = useNavigate();
    const location=useLocation();
    const {id,name,phone, email} = location.state.contact;

    const [info,setInfo]=useState({id:id,name:name, phone:phone,email:email})

    const update=(e)=>{
        e.preventDefault();
        props.updateContacts(info);
        navigate("/");
    };

    return (
        <div className='ui main'>
        <h2> Edit Contact</h2>
        <form className='ui form' onSubmit={(e)=>{update(e)}}>
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
            <button type='submit' className="ui button blue">Save</button>
        </form>
        </div>
    );
}

export default EditContact;