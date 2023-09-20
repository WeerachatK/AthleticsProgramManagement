import React from 'react'
import { useDispatch } from 'react-redux';
import { setDisplay } from '../../redux/slices/displaySlice';
import Test from './component/test';

function Index() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setDisplay(''));
    }, [dispatch]);
    return (
        <>
        <h1>hello</h1>
        <Test/>
        </>
    )
}

export default Index