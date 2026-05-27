import Card from "../components/Card";

const List = ({ contacts, handleDelete }) => {
  console.log(contacts);

  return (
    <ul className="flex flex-col gap-3">
      {contacts.map((contact) => (
        <li key={contact.phone}>
          <Card
            handleDelete={handleDelete}
            {...contact}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
