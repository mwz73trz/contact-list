import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const allContactsUrl = "http://localhost:8000/api/contacts/";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const fetchContacts = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data) {
        setContacts(data);
      } else {
        setContacts([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  const selectContact = (id) => {
    let contact;
    contact = contacts.find((contact) => contact.id === id);
    setSelectedContact(contact);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetchContacts(allContactsUrl);
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        contacts,
        showModal,
        closeModal,
        selectContact,
        selectedContact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
