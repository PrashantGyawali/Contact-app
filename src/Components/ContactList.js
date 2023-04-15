import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList=(props)=>{
    
    let RenderContactlist=()=>{

        if(props.contacts.length>0)
            {  
               return  props.contacts.map((contact)=>
                <ContactCard contactinfo={contact} deletecontact={props.deletecontact} key={contact.id}/>
                );
             }

        else{
            return <div>No contacts Available</div>;
        }
    }



    return (
        <div className="main">

             <h2>
                Contact List
                <Link to='/add'><button className="ui button blue right floated">Add Contact</button></Link>
             </h2>

                <div className="ui search">
                    <div className="ui icon input fluid">
                        <input type="text" placeholder='Search Contacts' className="prompt" value={props.searchTerm} onChange={(e)=>{console.log(e.target.value); props.searchHandler(e.target.value);}}/>
                        <i className="search icon"></i>
                    </div>
                </div>

                <div className="ui celled list">
                    <RenderContactlist/>
                </div>

        </div>
        
    );
}

export default ContactList;