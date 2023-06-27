import Card from './card';
import { useEffect } from 'react';

const CardFavorites = ({ quoteData, deleteQuoteData }) => {
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col">
      {quoteData.map((data) => (
        <Card key={data.Id}>
          <ul className="flex flex-col">
            {data.Quote && (
              <p className="mb-10 !leading-relaxed text-xl md:text-2xl italic text-blue-400 ">"{data.Quote}"</p>
            )}
            {data.Author && (
              <p className="mb-10 text-md md:text-lg font-thin flex self-end text-blue-300"> - {data.Author}</p>
            )}
            <button onClick={() => deleteQuoteData(data.Id)}>delete</button>
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default CardFavorites;
