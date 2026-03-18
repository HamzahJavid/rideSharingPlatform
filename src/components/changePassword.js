import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePassword } from 'state/user/userSlice';
import Navbar from './Nav';

const styles = {
  page: { minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Segoe UI', system-ui, sans-serif" },
  card: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: '2.5rem', width: '100%', maxWidth: '400px' },
  heading: { fontSize: '1.6rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '0.4rem' },
  subtext: { color: '#6b7280', fontSize: '0.9rem', marginBottom: '2rem' },
  group: { display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.2rem' },
  label: { fontSize: '0.85rem', fontWeight: '600', color: '#374151' },
  input: { padding: '0.6rem 0.85rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '0.95rem', outline: 'none' },
  button: { width: '100%', padding: '0.75rem', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginTop: '0.5rem' },
};

const ChangePassword = () => {
  const dispatcher = useDispatch();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const id = localStorage.getItem("id");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }
    dispatcher(changePassword({ id, currentPassword, newPassword }));
  };

  return (
    <>
      <Navbar></Navbar>
      <div style={styles.page}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Change Password</h2>
          <p style={styles.subtext}>Enter your current and new password below.</p>
          <form onSubmit={handleSubmit}>
            <div style={styles.group}>
              <label style={styles.label}>Current Password</label>
              <input style={styles.input} type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Enter current password" required />
            </div>
            <div style={styles.group}>
              <label style={styles.label}>New Password</label>
              <input style={styles.input} type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter new password" required />
            </div>
            <div style={styles.group}>
              <label style={styles.label}>Confirm New Password</label>
              <input style={styles.input} type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm new password" required />
            </div>
            <button type="submit" style={styles.button}>Change Password</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;