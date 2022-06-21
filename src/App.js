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

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <Link to='/public'>Public</Link>
          <Link to='/private'>Private</Link>

        </header>


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
