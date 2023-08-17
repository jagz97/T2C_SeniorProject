import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavLayout from './components/navlayout/Layout'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import ListviewPage from './pages/ListviewPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='login' element={<LoginPage/>}/>
          <Route element={<NavLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='profile' element={<ProfilePage/>}/>
            <Route path='posts' element={<ListviewPage/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
