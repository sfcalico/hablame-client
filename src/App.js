import { Routes, Route, Navigate } from 'react-router-dom';
import { VisitorContext } from './context/VisitorContext';
import CollocationPage from './pages/CollocationPage';
import TitleBar from './components/TitleBar';
// import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Signup from './pages/SignupPage';
import Login from './pages/LoginPage';
import Footer from './components/Footer';
import { useContext } from 'react';
import './App.css';

function App() {

  const value = useContext(VisitorContext);

  return (
    <div className="App">

      <TitleBar />
      <Routes>
          <Route path="/signup" element={ <Signup />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/home" element={ <HomePage />} />
          <Route path="/collocations" element={ <CollocationPage />} />     
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
//https://www.dictionaryapi.com/api/v3/references/spanish/json/language?key=ac630850-7803-474e-aa36-db05619dda38
//https://www.dictionaryapi.com/api/v3/references/spanish/json/${word we're looking up}?key=ac630850-7803-474e-aa36-db05619dda38
