import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function checkAuth() {
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);
    
    useEffect(() => {
        currentUser && navigate('/')
    }, [currentUser]);
} 