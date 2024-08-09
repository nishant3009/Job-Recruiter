import './App.css';
import Main from './Pages/main';
import Catform from './Pages/Catform';
import Viform from './Pages/Viform';
import Addtest from './Pages/Addque';
import UPresume from './Pages/UPresume';
import Layout from './Components/Layout';
import Form from './Pages/Form';
import Job from './Pages/job';
import Setdate from './Pages/Setdate';
import Viewque from './Pages/Viewque';import Feedback from './Pages/feedback';
iimport job platfrom ://Pages/Addque'
er,Routes,Route, BrowserRouter} from 'react-router-dom'

function App() {
  
  return (
    <>
    {sessionStorage.getItem("tbl_a_login")==null ?
    (
      <>
      <Form/>
      </>
    ):(
      <>



      <BrowserRouter>
      <Routes>
        <Route exact path='/add' element={<Catform/>}/>
        <Route exact path='/view' element={<Viform/>}/>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/upload' element={<UPresume/>}/>
        <Route exact path='/aque' element={<Addtest/>}/>
        <Route exact path='/vique' element={<Viewque/>}/>
        <Route exact path='/job/:name' element={<Job/>}/>
        <Route exact path='/setdate' element={<Setdate/>}/>
        <Route exact path='/feedback' element={<Feedback/>}/>

        
        

      </Routes>
      </BrowserRouter>
    </>
    )}
    </>
  );
}

export default App;
