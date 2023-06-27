import './App.css';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Library from './pages/favoritQuote';
import QuoteGenerator from './pages/quoteGenerator';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ErrorProvider } from './components/utils/errorContext';

function App() {
  return (
    <>
      <ErrorProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/quote-generator" element={<QuoteGenerator />} />
          <Route path="/favorite" element={<Library />} />
        </Routes>
      </ErrorProvider>
    </>
  );
}

export default App;
