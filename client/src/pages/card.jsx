const Card = ({children}) =>{
    return (
        <div className="h-96 flex">
            <div className="flex flex-col w-1/2 justify-center items-center m-auto bg-gray-800 py-6 px-4 md:py-10 md:px-8 min-w-sm min-h-sm rounded-xl relative">
                {children}
            </div>
        </div>
    )
}

export default Card;