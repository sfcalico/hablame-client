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
