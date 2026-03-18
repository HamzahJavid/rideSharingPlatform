import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bookRide } from 'state/ride/rideSlice';
import Navbar from './Nav';

const styles = {
    container: { maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'Funnel Display' },
    heading: { fontSize: '1.5rem', marginBottom: '1rem', color: '#333' },
    filters: { display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' },
    input: { padding: '0.5rem 0.75rem', border: '1px solid #ccc', borderRadius: '6px', fontSize: '0.95rem', flex: 1 },
    button: { padding: '0.5rem 1.2rem', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '0.95rem', cursor: 'pointer' },
    list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' },
    card: { border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem', backgroundColor: '#fafafa' },
    route: { fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '0.4rem', color: '#222' },
    detail: { margin: '0.2rem 0', color: '#555', fontSize: '0.9rem' },
    notes: { margin: '0.4rem 0', color: '#777', fontSize: '0.85rem', fontStyle: 'italic' },
    actions: { display: 'flex', gap: '0.6rem', marginTop: '0.6rem' },
    link: { display: 'inline-block', padding: '0.4rem 0.9rem', backgroundColor: '#4f46e5', color: '#fff', borderRadius: '5px', textDecoration: 'none', fontSize: '0.85rem' },
    bookButton: { padding: '0.4rem 0.9rem', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '0.85rem', cursor: 'pointer' },
    empty: { color: '#888', fontStyle: 'italic' },
};

const Rides = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const rideData = useSelector(state => [...state.ride.allRides]);

    const [inputs, setInputs] = useState({
        pickup: searchParams.get('pickup') || '',
        destination: searchParams.get('destination') || '',
    });

    const [filters, setFilters] = useState({
        pickup: searchParams.get('pickup') || '',
        destination: searchParams.get('destination') || '',
    });

    const handleInputChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const applyFilters = () => {
        setFilters(inputs);
        setSearchParams(inputs);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') applyFilters();
    };

    const handleBookRide = (rideId) => {
        const userId = localStorage.getItem('userid');
        dispatch(bookRide({ userId: Number(userId), rideId }));
    };

    const filteredRides = rideData.filter(ride => {
        const matchPickup = ride.from.toLowerCase().includes(filters.pickup.toLowerCase());
        const matchDestination = ride.to.toLowerCase().includes(filters.destination.toLowerCase());
        return matchPickup && matchDestination;
    });

    return (
        <>
            <Navbar />
            <div style={styles.container}>
                <h2 style={styles.heading}>Available Rides</h2>
                <div style={styles.filters}>
                    <input style={styles.input} name="pickup" value={inputs.pickup} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="Filter by pickup" />
                    <input style={styles.input} name="destination" value={inputs.destination} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="Filter by destination" />
                    <button style={styles.button} onClick={applyFilters}>Filter</button>
                </div>
                {filteredRides.length === 0 ? (
                    <p style={styles.empty}>No rides available.</p>
                ) : (
                    <ul style={styles.list}>
                        {filteredRides.map((ride) => (
                            <li key={ride.rideid} style={styles.card}>
                                <p style={styles.route}>From: {ride.from} To: {ride.to}</p>
                                <p style={styles.detail}>Driver: {ride.driverName}</p>
                                <p style={styles.detail}>Departure: {ride.date} at {ride.time}</p>
                                <p style={styles.detail}>Seats Available: {ride.seats}</p>
                                <p style={styles.detail}>Vehicle: {ride.vehicleType}</p>
                                <p style={styles.detail}>Contact: {ride.contact}</p>
                                <p style={styles.notes}>{ride.notes}</p>
                                <div style={styles.actions}>
                                    <Link to={`/user-profile/${ride.driverid}`} style={styles.link}>View User</Link>
                                    <button style={styles.bookButton} onClick={() => handleBookRide(ride.rideid)}>Book Ride</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Rides;