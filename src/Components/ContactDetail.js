import  React  from 'react';
import './App.css'
import { Link,useLocation } from 'react-router-dom';
import user from '../Images/user.png'


const ContactDetail=(props)=>{
    const location = useLocation();
    const {name,phone, email} = location.state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{phone}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className='center-div' style={{textAlign:'center'}}>
                <Link to='/'>
                    <button className="ui button blue" >Go Back</button>
                </Link>
            </div>
        </div>
    );
}

export default ContactDetail;