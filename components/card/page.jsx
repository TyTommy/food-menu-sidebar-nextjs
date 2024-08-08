import { AiOutlinePlus } from "react-icons/ai";

const Card = ({ recipe }) => {
  const { name, description, price, image } = recipe;

  return (
    <div className="w-[300px] h-[350px] bg-[#ECEAEA] rounded-[30px]">
      <img
        src={image || "/mainfood.png"}
        className="w-[200px] rounded-[50px] mt-2 m-auto"
        alt={name}
      />
      <div className="p-5 relative">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-[12px]">
          {description ||
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. "}
        </p>
        <img src="/stars.svg" alt="Rating" />
        <button className="bg-[#111] text-white flex items-center justify-center text-[25px] w-[40px] h-[40px] rounded-[10px] absolute right-5 bottom-5">
          <AiOutlinePlus />
        </button>
        <p className="text-[22px]">${price || 5.08}</p>
      </div>
    </div>
  );
};

export default Card;
