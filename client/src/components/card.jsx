const Card = ({ children }) => {
  return (
    <div className="w-full mx-auto max-w-[40rem]  bg-gray-800 md:p-8 p-4 min-h-sm rounded-xl relative shadow-lg mb-10 overflow-hidden">
      {children}
    </div>
  );
};

export default Card;
