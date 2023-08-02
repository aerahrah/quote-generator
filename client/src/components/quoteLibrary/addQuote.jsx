import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import AddQuoteModal from "./addQuoteModal";
const AddQuote = () => {

  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  return (
    <div>
      <div
        className="bg-gray-800 p-4 rounded-full cursor-pointer shadow hover:shadow-xl transition transform  hover:-translate-y-[3px] hover:scale-[1.02] duration-100 "
        onClick={() => setIsModalCreateOpen(true)}
      >
        <FaPlus className="text-blue-400" size="2.5rem" />
      </div>
      <AddQuoteModal
        isModalCreateOpen={isModalCreateOpen}
        setIsModalCreateOpen={setIsModalCreateOpen}
        useState={useState}
      />
    </div>
  );
};

export default AddQuote;
