import AllUsers from './usersPage/AllUsers';
import SingleUser from './usersPage/SingleUser';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css';
import Data from './Data';
import Posts from './usersPage/Posts';


function App() {
  return (
    <Router>
     
    <Routes>
      <Route exact path="/" element={<AllUsers/>} />
    </Routes>
    <Routes>
      <Route path="/creatures" element={<AllUsers/>} />
    </Routes>
    <Routes>
      <Route path="/creatures/:id" element={<SingleUser/>} />
    </Routes>
    <Routes>
      <Route path="/creatures/posts/:id" element={<Posts/>} />
    </Routes>
  </Router>
  );
}

export default App;
