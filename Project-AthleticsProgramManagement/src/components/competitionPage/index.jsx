import React from 'react'
import Filter from './componants/filter';
import Content from './componants/content';
import { useDispatch } from 'react-redux';
import { setDisplay } from '../../redux/slices/displaySlice';
import "./index.css"

function Index() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setDisplay('competition'));
    }, [dispatch]);

    return (
        <>
            <div className="index-body">
                <div className='filter-container'>
                    <Filter />
                </div>
                <div className='content-container'>
                    <Content />
                </div>
            </div>
        </>
    )
}

export default Index