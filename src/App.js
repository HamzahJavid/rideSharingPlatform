import TestButton from './components/test';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/change-password" element={<SignUp/>}/>


        <Route path="/" element={<Home/>}/> 
        <Route path="/rides" element={<Rides/>}/>
        <Route path="/create-ride" element={<CreateRide/>}/>
        <Route path="/request-ride" element={<RequestRide/>}/>
        <Route path="/my-bookings" element={<MyBookings/>}/>
        <Route path='/ride-details/:rideId' element={<RideDetails/>}/>
        <Route path="/user-profile/:userId" element={<MyBookings/>}/>





      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
