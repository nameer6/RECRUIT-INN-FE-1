
import { useRouter } from 'next/router';
import styles from './Login.module.css';
import { useEffect, useState } from 'react';
import LoginOverlay from '../../components/LoginOverlay';
import AdminLoginOverlay from '../../components/AdminLoginOverlay';

const AdminLogin = () => {

    const router = useRouter();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const stages = {
        LOG_IN: 'LOG_IN',
    }

    const stageHeadings = {
        LOG_IN: 'Login',
    };

    const loginApiCall = async () => {
        console.log("URL:", `${process.env.NEXT_PUBLIC_REMOTE_URL}/admin-log-in` )
        const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/admin-log-in`, {
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
            localStorage.setItem('admin-token', data?.data?.token);
            router.push(`/admin-dashboard`)
        } else {
            alert('Login failed. Please check your credentials.');
        }
    }

    const showOverlay = true;

    return (
        <>
            <AdminLoginOverlay email={email} setEmail={setEmail} setPassword={setPassword} loginApiCall={loginApiCall} stageHeadings={stageHeadings} stages={stages} showOverlay={showOverlay} />
        </>
    )
}

export default AdminLogin;