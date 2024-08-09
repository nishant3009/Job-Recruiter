import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Pages/Main';
import Categories from './Pages/Categories';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import Table from './Pages/Table';
import Resume from './Pages/Resume';
import FOpass from './Pages/FOpass';
import Status from './Pages/Status';

import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Router>
       <Header/> 
        
     
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/Categories' element={<About/>}/>
        <Route exact path='/Main' element={<Categories/>}/>
        <Route exact path='/About' element={<Contact/>}/>
        <Route exact path='/Signin' element={<Profile/>}/>
        <Route exact path='/Contact' element={<Table/>}/>
        <Route exact path='/Resume' element={<Resume/>}/>
        <Route exact path='/forgot' element={<FOpass/>}/>
        <Route exact path='/status' element={<Status/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
