import LogIn from 'components/logIn';
import SignUp from 'components/signUp';
import Home from 'components/Home';
import CreateRide from 'components/createRide';
import RequestRide from 'components/requestRide';
import MyBookings from 'components/myBookings';
// import RideDetails from 'components/rideDetails';
import ActiveRequests from 'components/activeRequests';
import UserDetails from 'components/userDetails';
import ChangePassword from 'components/changePassword';
import Rides from 'components/Rides';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import './App.css';

function App() {
  const loggedIn = useSelector(state => state.users.loggedIn)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/change-password" element={loggedIn ? <ChangePassword /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/rides" element={loggedIn ? <Rides /> : <Navigate to="/login" />} />
        <Route path="/create-ride" element={loggedIn ? <CreateRide /> : <Navigate to="/login" />} />
        <Route path="/request-ride" element={loggedIn ? <RequestRide /> : <Navigate to="/login" />} />
        <Route path="/my-bookings" element={loggedIn ? <MyBookings /> : <Navigate to="/login" />} />
        <Route path="/active-requests" element={loggedIn ? <ActiveRequests /> : <Navigate to="/login" />} />
        {/* <Route path="/ride-details/:rideId" element={loggedIn ? <RideDetails /> : <Navigate to="/login" />} /> */}
        <Route path="/user-profile/:id" element={loggedIn ? <UserDetails /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;