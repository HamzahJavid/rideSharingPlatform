import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'state/user/userSlice';

const styles = {
    nav: { width: '100%', backgroundColor: '#1e1b4b', padding: '0.75rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: "Noto Sans,'Poppins', sans-serif", boxSizing: 'border-box' },
    brand: { color: '#fff', fontWeight: '700', fontSize: '1.1rem', textDecoration: 'none' },
    links: { display: 'flex', gap: '1rem', alignItems: 'center' },
    link: { color: '#c7d2fe', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' },
    logoutBtn: { padding: '0.4rem 0.9rem', backgroundColor: 'transparent', color: '#fca5a5', border: '1px solid #fca5a5', borderRadius: '6px', fontSize: '0.85rem', cursor: 'pointer', fontWeight: '600' },
};

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(logOut());
        navigate('/login');
    };

    return (
        <nav style={styles.nav}>
            <Link to="/dashboard" style={styles.brand}>Campus Ride Sharing</Link>
            <div style={styles.links}>
                <Link to="/rides" style={styles.link}>Browse Rides</Link>
                <Link to="/create-ride" style={styles.link}>Offer a Ride</Link>
                <Link to="/request-ride" style={styles.link}>Request a Ride</Link>
                <Link to="/active-requests" style={styles.link}>Request Pool</Link>
                <Link to="/my-bookings" style={styles.link}>My Bookings</Link>
                <Link to="/change-password" style={styles.link}>Change Password</Link>
                <button onClick={handleLogOut} style={styles.logoutBtn}>Log Out</button>
            </div>
        </nav>
    );
};

export default Navbar;