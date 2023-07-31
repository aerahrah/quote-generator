const Card = ({ children }) => {
  return (
    <div className="h-96 flex">
      <div className="flex flex-col w-1/2 justify-center items-center m-auto bg-gray-800 p-8  min-w-sm min-h-sm rounded-xl relative shadow-lg mb-10">
        {children}
      </div>
    </div>
  );
};

export default Card;
