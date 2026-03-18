import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from './Nav';

const styles = {
    container: { maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', fontFamily: "'Segoe UI', system-ui, sans-serif" },
    heading: { fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '0.3rem' },
    subtext: { color: '#6b7280', fontSize: '0.9rem', marginBottom: '1.5rem' },
    list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' },
    card: { border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem', backgroundColor: '#fafafa' },
    route: { fontWeight: '600', fontSize: '1.05rem', marginBottom: '0.4rem', color: '#222' },
    detail: { margin: '0.2rem 0', color: '#555', fontSize: '0.9rem' },
    status: (status) => ({
        display: 'inline-block', marginTop: '0.4rem', padding: '0.2rem 0.7rem',
        borderRadius: '999px', fontSize: '0.8rem', fontWeight: '600',
        backgroundColor: status === 'accepted' ? '#dcfce7' : status === 'rejected' ? '#fee2e2' : '#fef9c3',
        color: status === 'accepted' ? '#16a34a' : status === 'rejected' ? '#dc2626' : '#92400e',
    }),
    actions: { display: 'flex', gap: '0.6rem', marginTop: '0.8rem' },
    contactBtn: { padding: '0.4rem 0.9rem', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '0.85rem', cursor: 'pointer', fontWeight: '600' },
    empty: { color: '#888', fontStyle: 'italic' },
    myTag: { display: 'inline-block', marginLeft: '0.5rem', padding: '0.1rem 0.5rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '600', backgroundColor: '#e0e7ff', color: '#4f46e5' },
};

const ActiveRequests = () => {
    const navigate = useNavigate();
    const userId = Number(localStorage.getItem('userid'));
    const allRequests = useSelector(state => [...state.ride.allRequests]);

    const handleContact = (request) => {
        if (!userId) {
            navigate('/login');
            return;
        }
        alert(`Contact ${request.passengerName} at their registered number.`);
    };

    return (
        <>
            <Navbar />
            <div style={styles.container}>
                <h2 style={styles.heading}>Ride Requests Board</h2>
                <p style={styles.subtext}>Passengers looking for a ride — contact them if you can help.</p>

                {allRequests.length === 0 ? (
                    <p style={styles.empty}>No ride requests posted yet.</p>
                ) : (
                    <ul style={styles.list}>
                        {allRequests.map(r => (
                            <li key={r.requestid} style={styles.card}>
                                <p style={styles.route}>
                                    {r.from} → {r.to}
                                    {r.passengerid === userId && <span style={styles.myTag}>Your Request</span>}
                                </p>
                                <p style={styles.detail}>Passenger: {r.passengerName}</p>
                                <p style={styles.detail}>Departure: {r.departureTime}</p>
                                {r.notes && <p style={styles.detail}>Notes: {r.notes}</p>}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default ActiveRequests;