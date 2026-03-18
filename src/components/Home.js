import { logOut } from 'state/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const styles = {
    page: { minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Poppins','Inter', system-ui, sans-serif" },
    inner: { width: '100%', maxWidth: '960px', padding: '1rem' },
    heading: { fontSize: '2rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '0.4rem', textAlign: 'center', letterSpacing: '-0.5px' },
    subtext: { color: '#6b7280', fontSize: '1rem', textAlign: 'center', marginBottom: '2.5rem' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginBottom: '1.2rem' },
    card: {
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#4f46e5', color: '#fff', borderRadius: '12px',
        textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem',
        aspectRatio: '1 / 1', textAlign: 'center', padding: '1rem',
        boxShadow: '0 4px 12px rgba(79,70,229,0.3)',
        lineHeight: '1.4', letterSpacing: '0.01em',
    },
    buttonRow: { display: 'flex', gap: '1rem' },
    changeBtn: { flex: 1, padding: '0.85rem', backgroundColor: '#fff', color: '#4f46e5', border: '1px solid #4f46e5', borderRadius: '10px', fontSize: '1rem', cursor: 'pointer', fontWeight: '600' },
    logoutBtn: { flex: 1, padding: '0.85rem', backgroundColor: '#fff', color: '#dc2626', border: '1px solid #dc2626', borderRadius: '10px', fontSize: '1rem', cursor: 'pointer', fontWeight: '600' },
};

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(logOut());
        navigate('/login');
    };

    const handlePassword = () => {
        navigate("/change-password");
    };

    return (
        <div style={styles.page}>
            <div style={styles.inner}>
                <h1 style={styles.heading}>Campus Ride Sharing</h1>
                <p style={styles.subtext}>Welcome to the campus ride sharing platform.</p>
                <div style={styles.grid}>
                    <Link to="/rides" style={styles.card}>Browse Rides</Link>
                    <Link to="/create-ride" style={styles.card}>Offer a Ride</Link>
                    <Link to="/request-ride" style={styles.card}>Request a Ride</Link>
                    <Link to="/active-requests" style={styles.card}>Request Pool</Link>
                    <Link to="/my-bookings" style={styles.card}>My Bookings</Link>
                </div>
                <div style={styles.buttonRow}>
                    <button onClick={handlePassword} style={styles.changeBtn}>Change Password</button>
                    <button onClick={handleLogOut} style={styles.logoutBtn}>Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Home;