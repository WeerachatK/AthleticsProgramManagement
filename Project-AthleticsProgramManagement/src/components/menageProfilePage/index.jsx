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
            <div className='Body h-screen flex flex-col items-center justify-center'>
                <div className='Box h-[20rem] w-[20rem] bg-pink flex'>
                    <div className='Inbox h-[8rem] w-[8rem] bg-[#002880]'></div>
                    <div className='Tnbox2 h-[8rem] w-[8rem] bg-orange'></div>
                    <div className='Inbox h-[8rem] w-[8rem] bg-[#002880]'></div>
                    <div className='Tnbox2 h-[8rem] w-[8rem] bg-orange '></div>
                    <div className='Tnbox2 h-[8rem] w-[8rem] bg-orange '></div>
                </div></div>
        </>
    )
}

export default Index