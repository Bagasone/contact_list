import { Phone } from "lucide-react";

const Card = ({ name, phone, profile }) => {
  return (
    <div className="neo-sm flex justify-between items-center gap-5 px-3 py-1">
      <div className="overflow-hidden">
        <img
          src={`/images/${profile}.webp`}
          alt="Profile Contact"
          className="w-14 h-14"
        />
      </div>
      <div>
        <div className="font-head text-lg uppercase">{name}</div>
        <div className="font-medium text-base">{phone}</div>
      </div>
      <div className="neo-sm flex justify-center items-center w-10 h-10">
        <Phone />
      </div>
    </div>
  );
};

export default Card;
