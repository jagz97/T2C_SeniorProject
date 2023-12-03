import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavLayout from './components/navlayout/Layout'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import ListviewPage from './pages/ListviewPage'
import HelpPage from './pages/HelpPage'
import OnboardingPage from './pages/OnboardingPage'
import CreatePostPage from './pages/CreatePostPage'
import CreateExperiencePage from './pages/CreateExperiencePage'
import SettingsPage from './pages/SettingsPage'
import NotFound from './pages/NotFoundPage'
import PasswordRequestPage from './pages/PasswordRequestPage'
import PasswordResetPage from './pages/PasswordResetPage'
import SearchPage from './pages/SearchPage'
import AuthRequired from './components/authrequired/AuthRequired'
import HotelDetailLayout from './components/hoteldetail/HotelDetailLayout'
import HotelDetailPage from './pages/HotelDetailPage'
import HotelPaymentPage from './pages/HotelPaymentPage'
import PaymentErrorPage from './pages/PaymentErrorPage'

import "./App.css"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<SignupPage/>}/>
          <Route path="passwordrecovery" element={<PasswordRequestPage/>}/>
          <Route path="passwordreset" element={<PasswordResetPage/>}/>
          <Route element={<NavLayout/>}>
              <Route index element={<h1>Home</h1>}/>
          </Route>
  
          {/* Protected Routes */}
          <Route element={<AuthRequired/>}>
            <Route path="onboarding" element={<OnboardingPage/>}/>
            <Route path="cancel" element={<PaymentErrorPage/>}/>
          
            <Route element={<NavLayout/>}>
              <Route path="posts" element={<ListviewPage/>}/>
              <Route path="profile" element={<ProfilePage/>}/>
              <Route path="hotel/:id" element={<HotelDetailLayout/>}> 
                <Route index element={<HotelDetailPage/>}/>
                <Route path="payment" element={<HotelPaymentPage/>}/>
              </Route>
              <Route path="search" element={<SearchPage/>}/>
              <Route path="createpost" element={<CreatePostPage/>}/>
              <Route path="createexperience" element={<CreateExperiencePage/>}/>
              <Route path="settings" element={<SettingsPage/>}/>
              <Route path="help" element={<HelpPage/>}/>
            </Route>
          </Route>
            
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App
