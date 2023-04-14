import AddContact from './AddContact';
import { v4 } from "uuid"
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDetail from './ContactDetail';
import api from "../api/contacts";
import EditContact from './EditContact';


function App() {

  const[searchTerm,setSearchTerm]=useState("");
  const[searchresults,setSearchResults]=useState([]);

  //retrieve contacts
const retrievedContacts = async ()=>{
  const response= await api.get("/contacts");
  console.log(response);
  return  response===undefined?[]:response==='undefined'?[]:response.data;
}

  const [contacts,setContacts]=useState([]);


 
const searchHandler=(t)=>{
  setSearchTerm(t);
  if (t!=="")
  {
    const newContactslist=contacts.filter((contact)=>{
      return Object.values(contact).splice(1,3).join(" ").toLowerCase().includes(t.toLowerCase());
    });
    setSearchResults(newContactslist);
  }
  else{
    setSearchResults(contacts)
  };
}



  useEffect(()=>{
    const getallcontacts= async () =>{
          const allContacts= await retrievedContacts();
          if (allContacts) {setContacts(allContacts);}
    }
    getallcontacts();
    },[]);


  const addcontacthandler= async (contact)=>{
    let t=v4();
    const response=await api.post(`/contacts/`,{id:t,...contact});
    console.log(response);
    setContacts([...contacts,response.data]);
  }

  const updatecontacthandler= async (contact)=>{
    console.log(contact);
    const response=await api.put(`/contacts/${contact.id}`,contact);
    const {id}=response.data;
    setContacts(contacts.map((contact)=>{return contact.id===id?{...response.data}:contact}));
  }

  const deletecontact=async (id)=>{
  await api.delete(`/contacts/${id}`);
  const newcontactlist=contacts.filter((e)=>e.id!==id)
  setContacts(newcontactlist);
}


  return (
    <div className='ui container'>
                  <BrowserRouter>
                  <Header/><br/><br/>

                    <Routes>

                      <Route path='/'  element={
                        <ContactList
                          contacts={searchTerm.length>0?searchresults:contacts}
                          deletecontact={deletecontact}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            searchHandler={searchHandler}
                            />
                        }/>
                      <Route path='/add' element={<AddContact setContacts={addcontacthandler}/>}/>
                      <Route path="/contact/:id" element={<ContactDetail/>} />
                      <Route path="/edit/:id" element={<EditContact updateContacts={updatecontacthandler}/>} />



                    </Routes>
                  </BrowserRouter>
    </div>
  );
}

export default App;
