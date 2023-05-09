import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        {/*For now set route for LoginPage to '/' */}
        <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
