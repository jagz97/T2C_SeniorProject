import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        {/*For now set route for LoginPage to '/' */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
