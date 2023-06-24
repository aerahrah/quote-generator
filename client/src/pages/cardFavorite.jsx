import Card from "./card";

const CardFavorites = ({quoteData}) =>{
    return (
  
          <div className="flex flex-col">
            {quoteData.map((data)=>(
            <Card>
            <ul className="flex flex-col" key={data.Id}>
            {data.Quote && <p className="mb-10 !leading-relaxed text-xl md:text-2xl italic text-blue-400 ">"{data.Quote}"</p>}
            {data.Author && <p className="mb-10 text-md md:text-lg font-thin flex self-end text-blue-300"> - {data.Author}</p>}
                </ul>
                </Card>
            ))}
         </div>
    )
}

export default CardFavorites;