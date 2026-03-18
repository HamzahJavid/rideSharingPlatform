import Navbar from './Nav';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const styles = {
    container: { maxWidth: '500px', margin: '2rem auto', padding: '1.5rem', fontFamily: 'sans-serif', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#fafafa' },
    heading: { fontSize: '1.4rem', marginBottom: '1rem', color: '#333' },
    detail: { margin: '0.4rem 0', color: '#555', fontSize: '0.95rem' },
    notFound: { textAlign: 'center', marginTop: '3rem', color: '#888', fontStyle: 'italic' },
};

const UserDetails = () => {
    const { id } = useParams();
    let user = useSelector(state => state.users.registeredUsers);
    user = user.find(u => u.userid == Number(id))

    if (!user) {
        return <p style={styles.notFound}>User not found.</p>;
    }

    return (
        <>
            <Navbar></Navbar>
            <div style={styles.container}>
                <h2 style={styles.heading}>Driver Profile</h2>
                <p style={styles.detail}>Name: {user.username}</p>
                <p style={styles.detail}>Email: {user.email}</p>
                <p style={styles.detail}>Contact: {user.pnumber}</p>
            </div>
        </>
    );
};

export default UserDetails;