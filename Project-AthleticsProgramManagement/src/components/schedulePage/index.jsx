import React from 'react'
import Filter from './componants/filter';
import Content from './componants/content';
import { useDispatch } from 'react-redux';
import { setDisplay } from '../../redux/slices/displaySlice';

function Index() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setDisplay('schedule'));
    }, [dispatch]);

    return (
        <>
            <div className="flex h-full w-screen">
                <div className='Filter bg-[#C5C5C5] w-[20%] flex flex-shrink-0 h-screen fixed top-[100px] left-0 '>
                    <Filter />
                </div>
                <div className='Content ml-[20%]'>
                    <Content />
                </div>

            </div>
        </>
    )
}

export default Index