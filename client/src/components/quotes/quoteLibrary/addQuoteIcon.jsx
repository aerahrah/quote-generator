import { FaPen } from "react-icons/fa";
import { useState } from "react";
import AddQuoteModal from "./addQuoteModal";
const AddQuoteIcon = ({ getAllQuotes }) => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  return (
    <div>
      <div
        className="p-5 rounded-full cursor-pointer transform transition duration-100 hover:scale-[1.02]   hover:-translate-y-[3px] shadow-md hover:shadow-lg bg-gray-700 border-[1px] border-gray-900"
        onClick={() => setIsModalCreateOpen(true)}
      >
        <FaPen className="text-blue-400" size="2rem" />
      </div>
      <AddQuoteModal
        isModalCreateOpen={isModalCreateOpen}
        setIsModalCreateOpen={setIsModalCreateOpen}
        useState={useState}
        getAllQuotes={getAllQuotes}
      />
    </div>
  );
};

export default AddQuoteIcon;
