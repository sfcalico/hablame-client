import { Routes, Route, Navigate } from 'react-router-dom';
import { VisitorContext } from './context/VisitorContext';
import CollocationPage from './pages/CollocationPage';
import TitleBar from './components/TitleBar';
import HomePage from './pages/HomePage';
import Signup from './pages/SignupPage';
import Login from './pages/LoginPage';
import Footer from './components/Footer';
import { useContext } from 'react';
import './App.css';

function App() {

  const { userState } = useContext(VisitorContext);
  const [ user ] = userState;

  return (
    <div className="App">

      <TitleBar />
      <Routes>
          <Route path="/signup" element={ user ? <HomePage /> : <Signup />} />

          <Route path="/login" element={ user ? <HomePage /> : <Login /> } />
          
          <Route path="/home" element={ user ? <HomePage /> : <Login /> } />

          <Route path="/collocations" element={ !user ? <Login /> : <CollocationPage /> } />
          
          <Route path="/collocations/:id" element={ <CollocationPage /> } /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
