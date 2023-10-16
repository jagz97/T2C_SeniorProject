import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import SearchPage from './pages/SearchPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/test' element={<LoginPage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/' element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
