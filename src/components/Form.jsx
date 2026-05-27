import { useState } from "react";
import { PROFILE_OPTIONS } from "../constants";

import Input from "./Input";
import Select from "./Select";

import { PlusCircleIcon } from "lucide-react";

const Form = ({ addContact }) => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    profile: "default",
  });

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact((prev) => ({ ...prev, name: "", phone: "", profile: "default" }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="neo-sm px-5 py-3 flex flex-col gap-3">
      <Input
        label="name"
        text="full name"
        type="text"
        handleChange={hanldeChange}
        value={contact["name"]}
      />
      <Input
        label="phone"
        text="phone number"
        type="number"
        handleChange={hanldeChange}
        value={contact["phone"]}
      />
      <Select
        label="profile"
        text="profile picture"
        options={PROFILE_OPTIONS}
        handleChange={hanldeChange}
        value={contact["profile"]}
      />
      <button
        type="submit"
        className="neo-sm px-3 py-1 flex justify-center items-center gap-3 my-3 font-semibold">
        Add Contact <PlusCircleIcon />
      </button>
    </form>
  );
};

export default Form;
