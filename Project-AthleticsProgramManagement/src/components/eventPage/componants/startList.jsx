import React from 'react'
import "./content.css"


function OrderCard({ orderNumber, id, name, age, backgroundColor }) {
    return (
        <div className={`Order mt-6 bg-[${backgroundColor}] h-[120px] w-full text-center flex justify-between items-center text-lg font-semibold`}>
            <div className='w-full flex justify-between'>
                <div className='w-full'>{orderNumber}</div>
                <div className='w-full'>{id}</div>
            </div>
            <div className='w-full p-2 flex '>
                <div className='bg-black rounded-lg h-[100px] w-[120px] flex-shrink-0 object-cover ml-[15%]'>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className='flex flex-col justify-end items-start px-5'>
                    <p>{name}</p>
                    <p>Age: {age}</p>
                </div>
            </div>
        </div>
    );
}

function StartList() {
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
            <div className='mt-6 bg-[#002880] h-12 w-full text-white text-center flex justify-between items-center text-lg font-semibold'>
                <div className='w-full flex justify-between'>
                    <div className='w-full'>Order</div>
                    <div className='w-full'>BIB</div>
                </div>
                <div className='w-full'>
                    Name
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

export default StartList