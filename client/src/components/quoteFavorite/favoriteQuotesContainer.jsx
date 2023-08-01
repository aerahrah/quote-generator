const FavoriteQuotesContainer = ({ children }) => {
  return (
    <div className=" top-1/2 mt-[75px] w-full hover:scrollbar-thumb-blue-600 px-4 md:px-16 lg:px-24 xl:px-36">
      {children}
    </div>
  );
};

export default FavoriteQuotesContainer;
