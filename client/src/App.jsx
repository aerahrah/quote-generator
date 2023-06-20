import './App.css'
import Signin from './components/auth/signin'
import Signup from './components/auth/signup'
import Library from './pages/favoritQuote'
import QuoteGenerator from './pages/quoteGenerator'
import {  Routes, Route, useLocation} from 'react-router-dom'
import NavBar from './components/navbar'
import { getCookie } from "./components/utils/cookieUtils"
function App() {
  const location = useLocation();
  const shouldShowNavbar = getCookie('token') && location.pathname !== '/' && location.pathname !== '/signin';
  return (
    <>
      { shouldShowNavbar && <NavBar></NavBar>}
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/quote-generator" element={<QuoteGenerator />} />
            <Route path='/favorite' element={<Library />} />
        </Routes>
    </>
  )
}

export default App
