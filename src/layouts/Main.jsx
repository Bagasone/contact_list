import useContacts from "../hooks/useContacts";

import Empty from "../components/Empty";
import List from "../components/List";
import Form from "../components/Form";

const Main = () => {
  const { contacts, addContact, deleteContact } = useContacts();
  console.log(contacts);

  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="flex flex-col gap-3 min-h-60">
        <h1 className="text-xl">Contact List</h1>
        {contacts.length === 0 ? (
          <Empty />
        ) : (
          <List
            contacts={contacts}
            handleDelete={deleteContact}
          />
        )}
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl">Contact Form</h2>
        <Form addContact={addContact} />
      </div>
    </div>
  );
};

export default Main;
