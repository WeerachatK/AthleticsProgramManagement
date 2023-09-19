import React from 'react'
import Filter from './componants/filter';
import Content from './componants/content';
import { useDispatch } from 'react-redux';
import { setDisplay } from '../../redux/slices/displaySlice';

function Index() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setDisplay('competition'));
    }, [dispatch]);

    return (
        <>
            <div className="flex">
                <div className='Filter bg-[#142E4F] text-white w-[20%] flex flex-shrink-0 h-screen-4rem  fixed top-[4rem] left-0 '>
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