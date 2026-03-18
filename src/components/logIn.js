import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { logIn } from "state/user/userSlice"
import { useDispatch, useSelector } from "react-redux"

const styles = {
    page: { minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Segoe UI', system-ui, sans-serif" },
    card: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: '2.5rem', width: '100%', maxWidth: '400px' },
    heading: { fontSize: '1.6rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '0.4rem' },
    subtext: { color: '#6b7280', fontSize: '0.9rem', marginBottom: '2rem' },
    group: { display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.2rem' },
    label: { fontSize: '0.85rem', fontWeight: '600', color: '#374151' },
    input: { padding: '0.6rem 0.85rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '0.95rem', outline: 'none' },
    button: { width: '100%', padding: '0.75rem', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginBottom: '0.75rem' },
    secondaryButton: { width: '100%', padding: '0.75rem', backgroundColor: '#fff', color: '#4f46e5', border: '1px solid #4f46e5', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' },
}

export default function LogIn() {
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const loggedIn = useSelector(state => state.users.loggedIn)
    const [logInObj, setLogInObj] = useState({ username: "", password: "" })

    useEffect(() => {
        if (loggedIn) navigate("/dashboard")
    }, [loggedIn])

    function HandleChange(e) {
        const { name, value } = e.target
        setLogInObj({ ...logInObj, [name]: value })
    }

    function HandleSubmitt(e) {
        e.preventDefault()
        dispatcher(logIn(logInObj))
    }

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <h1 style={styles.heading}>Login Form</h1>
                <form onSubmit={HandleSubmitt}>
                    <div style={styles.group}>
                        <label style={styles.label}>Username</label>
                        <input style={styles.input} type="text" name="username" value={logInObj.username} onChange={HandleChange} />
                    </div>
                    <div style={styles.group}>
                        <label style={styles.label}>Password</label>
                        <input style={styles.input} type="password" name="password" value={logInObj.password} onChange={HandleChange} />
                    </div>
                    <button type="submit" style={styles.button}>Login</button>
                    <button type="button" style={styles.secondaryButton} onClick={() => navigate("/signup")}>SignUp</button>
                </form>
            </div>
        </div>
    )
}