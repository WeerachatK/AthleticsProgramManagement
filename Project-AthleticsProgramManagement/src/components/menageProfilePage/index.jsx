import React from 'react'
import { useDispatch } from 'react-redux';
import { setDisplay } from '../../redux/slices/displaySlice';

function Index() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setDisplay(''));
    }, [dispatch]);
    return (
        <>
        </>
    )
}

export default Index