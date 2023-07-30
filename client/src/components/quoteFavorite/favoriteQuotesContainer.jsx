const FavoriteQuotesContainer = ({ children }) => {
  return (
    <div className="rounded-lg overflow-y-scroll h-md md:h-sm mt-8 top-1/2 -translate-y-1/2 absolute w-screen scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-900 hover:scrollbar-thumb-blue-600 m-auto">
      {children}
    </div>
  );
};

export default FavoriteQuotesContainer;
