import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRide } from 'state/ride/rideSlice';
import { useNavigate } from 'react-router-dom';
import { Ride } from 'Data/schema';
import Navbar from './Nav';

const styles = {
    page: { minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "Noto Sans, system-ui, sans-serif" },
    card: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: '2.5rem', width: '100%', maxWidth: '480px' },
    heading: { fontSize: '1.6rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '0.4rem' },
    subtext: { color: '#6b7280', fontSize: '0.9rem', marginBottom: '2rem' },
    group: { display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.2rem' },
    label: { fontSize: '0.85rem', fontWeight: '600', color: '#374151' },
    input: { padding: '0.6rem 0.85rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '0.95rem', outline: 'none' },
    textarea: { padding: '0.6rem 0.85rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '0.95rem', resize: 'vertical', minHeight: '90px', outline: 'none' },
    button: { width: '100%', padding: '0.75rem', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginTop: '0.5rem' },
};

const CreateRide = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = Number(localStorage.getItem('userid'));
    const currentUser = useSelector(state =>
        state.users.registeredUsers.find(u => u.userid === userId)
    );

    const [formData, setFormData] = useState({
        pickupLocation: '',
        destination: '',
        date: '',
        availableSeats: '',
        vehicleType: '',
        notes: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRide = new Ride(
            Date.now(),
            currentUser.userid,
            currentUser.username,
            formData.pickupLocation,
            formData.destination,
            formData.date,
            '',
            Number(formData.availableSeats),
            formData.vehicleType,
            currentUser.pnumber,
            formData.notes,
        );
        dispatch(postRide(newRide));
        navigate('/rides');
    };

    return (
        <>
            <Navbar />
            <div style={styles.page}>
                <div style={styles.card}>
                    <h2 style={styles.heading}>Post a Ride</h2>
                    <p style={styles.subtext}>Fill in the details to offer a ride.</p>
                    <form onSubmit={handleSubmit}>
                        <div style={styles.group}>
                            <label style={styles.label}>Pickup Location</label>
                            <input style={styles.input} name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} placeholder="Pickup location" required />
                        </div>
                        <div style={styles.group}>
                            <label style={styles.label}>Destination</label>
                            <input style={styles.input} name="destination" value={formData.destination} onChange={handleChange} placeholder="Destination" required />
                        </div>
                        <div style={styles.group}>
                            <label style={styles.label}>Date</label>
                            <input style={styles.input} type="date" name="date" value={formData.date} onChange={handleChange} required />
                        </div>
                        <div style={styles.group}>
                            <label style={styles.label}>Available Seats</label>
                            <input style={styles.input} type="number" name="availableSeats" value={formData.availableSeats} onChange={handleChange} placeholder="Number of seats" min="1" required />
                        </div>
                        <div style={styles.group}>
                            <label style={styles.label}>Vehicle Type</label>
                            <input style={styles.input} name="vehicleType" value={formData.vehicleType} onChange={handleChange} placeholder="e.g. Sedan, SUV" required />
                        </div>
                        <div style={styles.group}>
                            <label style={styles.label}>Notes</label>
                            <textarea style={styles.textarea} name="notes" value={formData.notes} onChange={handleChange} placeholder="Any extra details..." />
                        </div>
                        <button type="submit" style={styles.button}>Post Ride</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateRide;