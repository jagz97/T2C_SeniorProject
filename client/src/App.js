import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavLayout from './components/navlayout/Layout'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import ListviewPage from './pages/ListviewPage'
import OnboardingPage from './pages/OnboardingPage'

import CreatePostPage from './pages/CreatePostPage'
import CreateExperiencePage from './pages/CreateExperiencePage'
import "./App.css"


import AuthRequired from './components/authrequired/AuthRequired'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<SignupPage/>}/>

          <Route element={<NavLayout/>}>
              <Route index element={<h1>Home</h1>}/>
          </Route>
  
          {/* Protected Routes */}
          <Route element={<AuthRequired/>}>
            <Route path="onboarding" element={<OnboardingPage/>}/>
          
            <Route element={<NavLayout/>}>
              <Route path="posts" element={<ListviewPage/>}/>
              <Route path="profile" element={<ProfilePage/>}/>
              <Route path="createpost" element={<CreatePostPage/>}/>
              <Route path="createexperience" element={<CreateExperiencePage/>}/>
            </Route>
          </Route>
            
            <Route path="*" element={<h1>Not Found!</h1>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App
