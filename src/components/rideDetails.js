import React from 'react';
import { useParams, Link } from 'react-router-dom';

const RideDetails = () => {
    const { id } = useParams();

    // TODO: get ride by id from Redux store
    const ride = null;

    if (!ride) {
        return <p>Ride not found.</p>;
    }

    const handleBookSeat = () => {
        // TODO: dispatch bookRide action
        console.log('Booking seat for ride:', id);
    };

    return (
        <div>
            <h2>Ride Details</h2>

            <p>Driver: {ride.driverName}</p>
            <p>From: {ride.pickupLocation}</p>
            <p>To: {ride.destination}</p>
            <p>Departure: {ride.departureTime}</p>
            <p>Available Seats: {ride.availableSeats}</p>
            <p>Vehicle: {ride.vehicleType}</p>
            <p>Contact: {ride.contactInfo}</p>
            <p>Notes: {ride.notes}</p>

            <button onClick={handleBookSeat}>Book a Seat</button>

            <Link to={`/user/${ride.userId}`}>View Driver Profile</Link>
        </div>
    );
};

export default RideDetails;