import { fetchAllData } from "../components/utils/apiUtils";
import { useState, useEffect } from "react";
import Spinner from "../components/utils/spinner";
import NavBar from "../components/navbar";
import CardContainer from "./cardContainer";
import CardFavorites from "./cardFavorite";

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
        <div className="w-full h-screen bg-gray-900 flex flex-col relative">
        <NavBar />
        <div>
            {isLoading ?(
             <Spinner />
            ): ( <CardContainer>
                <CardFavorites quoteData= {quoteData}/>
            </CardContainer>
            )}
        </div>
        </div>
      
    );
};

export default Library