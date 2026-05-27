import { useEffect, useState } from "react";

const useContacts = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || [],
  );

  const addContact = (contacts) => {
    setContacts((prev) => [...prev, contacts]);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return { contacts, addContact };
};

export default useContacts;
