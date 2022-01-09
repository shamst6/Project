import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import NavBar from './component/NavBar';
import SubmissionForm from './component/SubmissionForm';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Saved from './Pages/Saved';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
   <Router>
     <div>
       <NavBar />
       <Route path={'./Home'} element={<Home/>} />
       <Route path={'./Saved'} element={<Saved/>} />
       <Route path={'./ContactUs'} element={<ContactUs/>} />
     </div>
   </Router>
  );
}

export default App;
