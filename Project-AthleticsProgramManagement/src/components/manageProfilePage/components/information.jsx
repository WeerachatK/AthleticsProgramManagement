import React from 'react'
import '../index.css'

function Textbox({ label, type = "text", placeholder }) {
  return (
    <div className="mb-4 px-2 w-full">
      <label className="block text-gray-700 font-medium">{label}</label>
      <input
        type={type}
        className="mt-1 px-2 py-1 w-full rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
}

function Information() {
  return (
    <div className="Information px-[4%] pt-[5%] flex flex-col justify-between">
       <div className='InfoComponent'>
       <div className='Name flex w-full'>
        <Textbox label="First name" placeholder="First name" />
        <Textbox label="Last name" placeholder="Last name" />
      </div>
      <Textbox label="E-mail" placeholder="E-mail" />
      <Textbox label="Password" type="password" placeholder="Password" />
      <Textbox label="Contact" placeholder="Contact" />
      </div>
      <div className='w-full flex my-10'>
        <button className="Profile-Button m-auto text-white p-2 px-10 rounded-full">Edit</button>
      </div>

    </div>
  );
}

export default Information