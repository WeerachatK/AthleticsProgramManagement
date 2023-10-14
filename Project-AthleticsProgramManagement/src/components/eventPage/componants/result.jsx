import React from 'react'
import "./content.css"


function OrderCard({ orderNumber, id, name, age, backgroundColor }) {
    return (
        <div className={`Order mt-6 bg-[${backgroundColor}] h-[120px] w-full text-center flex justify-between items-center text-lg font-semibold`}>
            <div className='w-[30%] flex justify-between flex-shrink-0'>
                <div className='w-full'>{orderNumber}</div>
                <div className='w-full'>{id}</div>
            </div>
            <div className='w-full flex justify-between'>
                <div className='w-full p-2 flex'>
                    <div className='IMG bg-black rounded-lg h-[100px] w-[120px] flex-shrink-0 object-cover ml-[15%]'>
                        <img src="" alt="" />
                    </div>
                    <div className='Name flex flex-col justify-end items-start px-5 flex-shrink-0'>
                        <p>{name}</p>
                        <p>Age: {age}</p>
                    </div>
                </div>
                <div className='w-full p-2'>
                    <div className='Result w-full h-full flex flex-col justify-center items-center object-cover'>
                        <span className='text-[#142E4F]'>Finish Time</span>
                        <div className='w-[30%] h-full rounded-lg border border-[#142E4F]'>
                            <div className='w-full bg-[#142E4F] h-[50%] rounded-t-lg text-white text-sm font-light flex justify-center items-center'>
                                Result (s)
                            </div>
                            <div className='w-full  h-[50%] text-[#142E4F] text-sm font-semibold flex justify-center items-center'>
                                20.40
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='w-full p-2 flex '>
                <div className='IMG bg-black rounded-lg h-[100px] w-[120px] flex-shrink-0 object-cover ml-[15%]'>
                    <img src="" alt="" />
                </div>
                <div className='Name flex flex-col justify-end items-start px-5 flex-shrink-0'>
                    <p>{name}</p>
                    <p>Age: {age}</p>
                </div>
                <div className='Result w-full'>
                    <span>Finish Time</span>
                    <div className='w-[15%] h-full rounded-lg border border-[#142E4] '>
                        <div className=''></div>
                        <div></div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

function Result() {
    return (
        <div className='p-8'>
            <div className='w-[70%] border-b-4 border-[#002880]'>
                <div className='text-3xl text-[#002880] font-semibold'>Javelin Throw Final </div>
                <div className='text-base text-[#002880] font-normal '>
                    <span>Women’s</span> Event  -
                    <span>11:00 AM </span> -
                    <span>17 AUG 2023</span>
                </div>
            </div>
            <div className='mt-6 bg-[#002880] h-12 w-full text-white text-center flex  items-center text-lg font-semibold'>
                <div className='w-[30%] flex justify-between flex-shrink-0'>
                    <div className='w-full'>Order</div>
                    <div className='w-full'>BIB</div>
                </div>
                <div className='w-full flex justify-between'>
                    <div className='w-full'>Name</div>
                    <div className='w-full'>Result</div>
                </div>
            </div>

            <div>
                <OrderCard
                    orderNumber={1}
                    id={212}
                    name="Weerachat Kadeewee"
                    age={22}
                    backgroundColor="#EEF3FF"
                />

                <OrderCard
                    orderNumber={2}
                    id={512}
                    name="Supakit Krongkaha"
                    age={22}
                    backgroundColor="#FFF"
                />

                <OrderCard
                    orderNumber={3}
                    id={752}
                    name="Weerachat Kadeewee"
                    age={22}
                    backgroundColor="#EEF3FF"
                />

                <OrderCard
                    orderNumber={4}
                    id={435}
                    name="Supakit Krongkaha"
                    age={22}
                    backgroundColor="#FFF"
                />

                <OrderCard
                    orderNumber={5}
                    id={233}
                    name="Weerachat Kadeewee"
                    age={22}
                    backgroundColor="#EEF3FF"
                />

                <OrderCard
                    orderNumber={6}
                    id={124}
                    name="Supakit Krongkaha"
                    age={22}
                    backgroundColor="#FFF"
                />
            </div>
        </div>
    )
}

export default Result