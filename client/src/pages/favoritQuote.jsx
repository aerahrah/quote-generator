import { fetchAllData } from "../components/utils/apiUtils";
import { useState, useEffect } from "react";

const Library = () =>{
    const url = "http://localhost:3500/quote";
    const [isLoading, setIsLoading] = useState(false);
    const [quoteData, setQuoteData] = useState([]);
    const [authorData, setAuthorData] = useState([]);


    const getAllFavoriteQuotes = () =>{
        fetchAllData(url).then((data)=>{
            console.log(data);
            setQuoteData(data);
        }).catch((error)=>{
            console.log(error);
        }).finally(()=>{
            setIsLoading(false);
        })
    }
    useEffect(()=>{
         getAllFavoriteQuotes();   
    }, []);

    return (
        <div>
            {isLoading ?(
                <p>loading...</p>
            ): (<div>
                {quoteData.map((data)=>(
                <ul key={data.Id}>
                    <li>{data.Quote}</li>
                    <li>{data.Author}</li>
                </ul>
            ))}
            </div>
            )}
        </div>
    );
};

export default Library