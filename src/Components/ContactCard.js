import  React  from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import user from '../Images/user.png'
const ContactCard=(props)=>{

    const {id,name,phone,email}=props.contactinfo;
    
    return (
        <div className="item">
            <img className='ui avatar image' src={user} alt='user'/>

                <div className="content">
                <Link to={`/contact/${id}`} state={{contact: props.contactinfo}} >
                    <div className="header">{name}</div>
                </Link>
                    <div>{phone}</div>
                    <div>{email}</div>
                </div>


            <i className="trash alternate outline icon" style={{color:'red',marginTop:'7px'}} onClick={()=>props.deletecontact(id)}></i>
            <Link to={`/edit/${id}`} state={{contact: props.contactinfo}} >
                <i className="edit alternate outline icon" style={{color:'blue',marginTop:'7px', marginRight:'10px'}} ></i>
            </Link>

        </div>
    );
}

export default ContactCard;