import './App.css';
import CollocationPage from './pages/CollocationPage';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Login from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/SignupPage';
import TitleBar from './components/TitleBar';
import { useContext } from 'react';
import { VisitorContext } from './context/VisitorContext';

function App() {

  // user info to check logged in state for conditional rendering of pages
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
          
          <Route path="/collocations/:id" element={ !user? <Login /> : <CollocationPage /> } /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
