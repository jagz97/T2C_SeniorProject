import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavLayout from './components/navlayout/Layout'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import ListviewPage from './pages/ListviewPage'

import AuthProvider from './context/AuthProvider'
import AuthRequired from './components/authrequired/AuthRequired'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes without Navbar */}
          <Route path="login" element={<LoginPage/>}/>
          
            <Route element={<NavLayout/>}>

              {/* Public Routes */}
              <Route index element={<h1>Home</h1>}/>
            
              {/* Protected Routes */}
              <Route element={<AuthRequired/>}>
                <Route path="posts" element={<ListviewPage/>}/>
                <Route path="profile" element={<ProfilePage/>}/>
              </Route>
              
            </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App
