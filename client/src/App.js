import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import ListviewPage from './pages/ListviewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/test' element={<LoginPage/>}/>
        {/*For now set route for LoginPage to '/' */}
        <Route path='#' element={<ProfilePage/>}/>
        <Route path='/' element={<ListviewPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
