const FavoriteQuotesContainer = ({ children }) => {
  return (
    <div className="rounded-lg overflow-y-scroll h-md md:h-sm mt-8 top-1/2 -translate-y-1/2 absolute scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-900  w-full box-content  hover:scrollbar-thumb-blue-600">
      {children}
    </div>
  );
};

export default FavoriteQuotesContainer;
