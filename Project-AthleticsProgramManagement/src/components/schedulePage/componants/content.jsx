import React from 'react'

function Content() {
    return (
        <>
            <div className='Content flex flex-row flex-wrap p-[100px] items-start '>
                <TournamentCard />
                <TournamentCard />
                <TournamentCard />
                <TournamentCard />
                <TournamentCard />
                <TournamentCard />
 
            </div>
        </>
    )
}

export default Content

function TournamentCard() {
    return (
        <div className='Tournament flex flex-col items-center font-extrabold m-[30px]'>
            <div className='Card flex items-center justify-center bg-[#C5C5C5] w-[240px] h-[200px] rounded-3xl mb-[10px] font-normal'>
                Tournament
            </div>
            Tournament
        </div>
    )
}
