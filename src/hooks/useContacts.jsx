import { useEffect, useState } from "react";

const useContacts = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || [],
  );

  const addContact = ({ name, phone, profile }) => {
    const contact = {
      id: crypto.randomUUID(),
      name,
      phone,
      profile,
    };
    setContacts((prev) => [...prev, contact]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return { contacts, addContact, deleteContact };
};

export default useContacts;
