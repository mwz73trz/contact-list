import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const allContactsUrl = "http://localhost:8000/api/contacts/?search=";

const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem("favorites");
  if (favorites) {
    favorites = JSON.parse(localStorage.getItem("favorites"));
  } else {
    favorites = [];
  }
  return favorites;
};

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

  const fetchContacts = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data) {
        setContacts(data);
        console.log(data);
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

  const addToFavorites = (id) => {
    const alreadyFavorite = favorites.find((contact) => contact.id === id);
    if (alreadyFavorite) return;
    const contact = contacts.find((contact) => contact.id === id);
    const updatedFavorites = [...favorites, contact];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((contact) => contact.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    fetchContacts(allContactsUrl);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    fetchContacts(`${allContactsUrl}${searchTerm}`);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        contacts,
        setSearchTerm,
        showModal,
        closeModal,
        selectContact,
        selectedContact,
        addToFavorites,
        removeFromFavorites,
        favorites,
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
