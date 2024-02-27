
import { useRouter } from 'next/router';
import styles from './Login.module.css';
import { useEffect, useState } from 'react';
import LoginOverlay from '../../components/LoginOverlay';

const Login = () => {

    const router = useRouter();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    // const [showOverlay, setShowOverlay] = useState(false);

    const stages = {
        LOG_IN: 'LOG_IN',

    }

    const stageHeadings = {
        LOG_IN: 'Login',
    };

    const loginApiCall = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/client-log-in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();
        console.log('login info:', data?.data);
        if (data?.data?.token) {
            localStorage.setItem('client-token', data?.data?.token);
            // document.cookie = `authToken=${data?.data?.token}; path=/;`;
            router.push(`/client/${data?.data?.id}`)
        } else {
            alert('Login failed. Please check your credentials.');
        }
    }

    

    const showOverlay = true;

    return (
        <>
            {/* <div className={styles.superContainer}>
                <form className={styles.loginContainer} onSubmit={handleSubmit}  >
                    <h2>Email:</h2>
                    <input onChange={(e) => setEmail(e.target.value)} type='email' />
                    <h2>Password:</h2>
                    <input onChange={(e) => setPassword(e.target.value)} type='password' />
                    <button type='submit'>LOGIN</button>
                </form>
            </div> */}

            <LoginOverlay email={email} setEmail={setEmail} setPassword={setPassword} loginApiCall={loginApiCall} stageHeadings={stageHeadings} stages={stages} showOverlay={showOverlay} />
        </>
    )
}

export default Login;