const AuthWrapper = ({children}) =>{
    return (
        <menu className="w-full h-screen text-center p-8 text-stone-200 bg-gray-900">
        <div className="flex items-center gap-12 flex-col justify-center w-full m-auto h-full -translate-y-8 lg:flex-row">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black capitalize lg:w-1/2 lg:-translate-y-16">Quote Generator</h1>
                {children}
        </div>
        </menu>
    )
}

export default AuthWrapper;