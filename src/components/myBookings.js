import { useSelector } from 'react-redux';
import Navbar from './Nav';

const styles = {
  container: { maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', fontFamily: "'Segoe UI', system-ui, sans-serif" },
  heading: { fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '1.5rem' },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' },
  card: { border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem', backgroundColor: '#fafafa' },
  route: { fontWeight: '600', fontSize: '1.05rem', marginBottom: '0.4rem', color: '#222' },
  detail: { margin: '0.2rem 0', color: '#555', fontSize: '0.9rem' },
  empty: { color: '#888', fontStyle: 'italic' },
};

const MyBookings = () => {
  const userId = Number(localStorage.getItem('userid'));
  const allBookings = useSelector(state => state.ride.allBookings);
  const allRides = useSelector(state => state.ride.allRides);

  const bookings = allBookings.filter(b => b.passengerid === userId);

  return (
    <>
      <Navbar></Navbar>
      <div style={styles.container}>
        <h2 style={styles.heading}>My Bookings</h2>
        {bookings.length === 0 ? (
          <p style={styles.empty}>You have no bookings yet.</p>
        ) : (
          <ul style={styles.list}>
            {bookings.map((booking) => {
              const ride = allRides.find(r => r.rideid === booking.rideid);
              return (
                <li key={booking.bookingid} style={styles.card}>
                  <p style={styles.route}>From: {ride?.from} To: {ride?.to}</p>
                  <p style={styles.detail}>Driver: {ride?.driverName}</p>
                  <p style={styles.detail}>Departure: {ride?.date} at {ride?.time}</p>
                  <p style={styles.detail}>Vehicle: {ride?.vehicleType}</p>
                  <p style={styles.detail}>Seats: {ride?.seats}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default MyBookings;