import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postRequest } from 'state/ride/rideSlice';
import { useNavigate } from 'react-router-dom';
import { Request } from 'Data/schema';
import Navbar from './Nav';

const styles = {
    page: { minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', system-ui, sans-serif" },
    card: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: '2.5rem', width: '100%', maxWidth: '480px' },
    heading: { fontSize: '1.6rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '0.4rem' },
    subtext: { color: '#6b7280', fontSize: '0.9rem', marginBottom: '2rem' },
    group: { display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.2rem' },
    label: { fontSize: '0.85rem', fontWeight: '600', color: '#374151' },
    input: { padding: '0.6rem 0.85rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '0.95rem', outline: 'none' },
    textarea: { padding: '0.6rem 0.85rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '0.95rem', resize: 'vertical', minHeight: '90px', outline: 'none' },
    button: { width: '100%', padding: '0.75rem', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginTop: '0.5rem' },
};

const RequestRide = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        from: '',
        to: '',
        departureTime: '',
        notes: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const passengerid = Number(localStorage.getItem('userid'));
        const passengerName = localStorage.getItem('username');
        const newRequest = new Request(
            Date.now(),
            passengerid,
            passengerName,
            formData.from,
            formData.to,
            formData.departureTime,
            formData.notes
        );
        dispatch(postRequest(newRequest));
        navigate('/rides');
    };

    return (
        <>
            <Navbar />
            <div style={styles.page}>
                <div style={styles.card}>
                    <h2 style={styles.heading}>Request a Ride</h2>
                    <p style={styles.subtext}>{"Fill in the details and we'll match you with a driver."}</p>
                    <form onSubmit={handleSubmit}>
                        <div style={styles.group}>
                            <label style={styles.label}>From</label>
                            <input style={styles.input} name="from" value={formData.from} onChange={handleChange} placeholder="Pickup city" required />
                        </div>
                        <div style={styles.group}>
                            <label style={styles.label}>To</label>
                            <input style={styles.input} name="to" value={formData.to} onChange={handleChange} placeholder="Destination city" required />
                        </div>
                        <div style={styles.group}>
                            <label style={styles.label}>Preferred Departure Time</label>
                            <input style={styles.input} type="date" name="departureTime" value={formData.departureTime} onChange={handleChange} required />
                        </div>
                        <div style={styles.group}>
                            <label style={styles.label}>Notes</label>
                            <textarea style={styles.textarea} name="notes" value={formData.notes} onChange={handleChange} placeholder="Any extra details..." />
                        </div>
                        <button type="submit" style={styles.button}>Submit Request</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RequestRide;