import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PublicPage from './PublicPage'; // Components/publicPage?
import { LoginPage } from './LoginPage';
import PrivatePage from './PrivatePage';
import PrivateRoute from './PrivateRoute';

function App() {

  return (
    <div className="App">
      <Router>


        <Link to='/public'>Course List</Link>
        <p>Start Creating your Study Plan</p>
        <Link to='/private'>Study Plan</Link>



        <Routes>

          <Route index path='/'element={<PublicPage/>} />
          <Route path='/public' element={<PublicPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/private' element={<PrivateRoute/>} target={'/private'} >
            <Route path='/private' element={<PrivatePage/>}/>
          </Route>


        </Routes>


      </Router>
    </div>
  );
}

export default App;
