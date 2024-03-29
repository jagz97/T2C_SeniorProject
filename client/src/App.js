import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavLayout from './components/navlayout/Layout'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import ListviewPage from './pages/ListviewPage'
import HelpPage from './pages/HelpPage'
import OnboardingPage from './pages/OnboardingPage'
import BookingsPage from './pages/BookingsPage'
import CreatePostPage from './pages/CreatePostPage'
import FeedPage from './pages/FeedPage'
import CreateExperiencePage from './pages/CreateExperiencePage'
import PostViewPage from './pages/PostViewPage'
import SettingsPage from './pages/SettingsPage'
import NotFound from './pages/NotFoundPage'
import MatchingOnboardPage from './pages/MatchingOnboardPage'
import MatchUsersPage from './pages/MatchUsersPage'
import ChatPage from './pages/ChatPage'
import PasswordRequestPage from './pages/PasswordRequestPage'
import PasswordResetPage from './pages/PasswordResetPage'
import SearchPage from './pages/SearchPage'
import AuthRequired from './components/authrequired/AuthRequired'
import HotelDetailLayout from './components/hoteldetail/HotelDetailLayout'
import HotelDetailPage from './pages/HotelDetailPage'
import HotelPaymentPage from './pages/HotelPaymentPage'
import PaymentErrorPage from './pages/PaymentErrorPage'
import ExperienceDetailPage from './pages/ExperienceDetailPage'
import HomePage from './pages/HomePage'

import "./App.css"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<SignupPage/>}/>
          <Route path="passwordrecovery" element={<PasswordRequestPage/>}/>
          <Route path="passwordreset" element={<PasswordResetPage/>}/>
          <Route path="chat" element={<ChatPage/>}/>
          
          <Route path="feed" element={<FeedPage/>}/>
          <Route element={<NavLayout/>}>
              <Route index element={<HomePage/>}/>
          </Route>
  
          {/* Protected Routes */}
          <Route element={<AuthRequired/>}>
            <Route path="onboarding" element={<OnboardingPage/>}/>

            <Route path="onboardmatching" element={<MatchingOnboardPage/>}/>
            
            <Route path="cancel" element={<PaymentErrorPage/>}/>
          
            <Route element={<NavLayout/>}>  
              <Route path="posts" element={<ListviewPage/>}/>
              <Route path="profile" element={<ProfilePage/>}/>

              <Route path="singlepost" element={<PostViewPage/>}/>
              <Route path="profile/:userId" element={<ProfilePage/>}/>

              <Route path="matching" element={<MatchUsersPage/>}/>

              <Route path="reservations" element={<BookingsPage/>}/>
              <Route path="hotel/:id" element={<HotelDetailLayout/>}> 
                <Route index element={<HotelDetailPage/>}/>
                <Route path="payment" element={<HotelPaymentPage/>}/>
              </Route>
              <Route path="search" element={<SearchPage/>}/>
              <Route path="singlepost/:id" element={<PostViewPage/>}/>
              <Route path="createpost" element={<CreatePostPage/>}/>
              <Route path="createexperience" element={<CreateExperiencePage/>}/>
              <Route path="settings" element={<SettingsPage/>}/>
              <Route path="help" element={<HelpPage/>}/>
              <Route path="experience/:id" element={<ExperienceDetailPage/>}/>
            </Route>
          </Route>
            
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App
