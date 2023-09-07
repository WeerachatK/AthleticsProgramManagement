import React from 'react'
import SlideShow from './componants/sliderShow';
import Content from './componants/content'
import { useDispatch } from 'react-redux';
import { setDisplay } from '../../redux/slices/displaySlice';


function Index() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(setDisplay('home'));
    }, [dispatch]);
    return (
        <>
            <div className="">
                <SlideShow />
            </div>
        </>
    )
}
export default Index
