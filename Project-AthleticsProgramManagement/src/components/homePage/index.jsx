import React from 'react'
import SlideShow from './componants/sliderShow';
import Content from './componants/content'

function Index() {
    return (
        <>
            <div className="flex flex-col h-screen w-screen">
                <SlideShow />
                <Content />
            </div>
        </>
    )
}

export default Index