import React from 'react'
import { useDispatch } from 'react-redux';
import { setDisplay } from '../../redux/slices/displaySlice';
import Profile from './components/profile';

function Index() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setDisplay(''));
    }, [dispatch]);
    return (
        <>
        <h1>manage Profile</h1>
        <Profile/>
        </>
    )
}

export default Index