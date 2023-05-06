import React, { useState } from "react";
import Header from "../../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";

const ContactIndex = () => {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: "Aniko Shaverdashvili",
      phone: "551285085",
      email: "shaverdashviliania@gmail.com",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Luka Shaverdashvili",
      phone: "551278623",
      email: "shaverdashvililuka@gmail.com",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Irakli Shaverdashvili",
      phone: "5512786423",
      email: "shaverdashviliirakli@gmail.com",
      isFavorite: true,
    },
  ]);

  const handleAddRandomContact = () => {};
  const handleRemoveContact = () => {};
  const handleAddContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: contactList[contactList.length - 1].id + 1,
      isFavorite: false,
    };
    setContactList((prevState) => prevState.concat([newFinalContact]));
  };

  return (
    <div>
      <Header />
      <div className="container" style={{ minHeight: "85vh" }}>
        <div className="row py-3">
          <div className="col-4 offset-2">
            <AddRandomContact />
          </div>
          <div className="col-4">
            <RemoveAllContact />
          </div>
        </div>
        <div className="py-2 col-12">
          <div className="col-8 offset-2 row">
            <AddContact handleAddContact={handleAddContact} />
          </div>
        </div>
        <div className="py-2 col-12">
          <div className="col-8 offset-2 row">
            <div className="col-12">
              <FavoriteContacts
                contacts={contactList.filter((u) => u.isFavorite === true)}
              />
            </div>
          </div>
        </div>
        <div className="py-2 col-12">
          <div className="col-8 offset-2 row">
            <div className="col-12">
              <GeneralContacts
                contacts={contactList.filter((u) => u.isFavorite === false)}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactIndex;
