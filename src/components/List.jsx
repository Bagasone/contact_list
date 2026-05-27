import Card from "../components/Card";

const List = ({ contacts }) => {
  console.log(contacts);

  return (
    <ul className="flex flex-col gap-3">
      {contacts.map((contact) => (
        <li key={contact.phone}>
          <Card {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default List;
