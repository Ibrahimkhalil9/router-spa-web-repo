import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-indigo-500 py-4'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <div className={`md:flex justify-center  w-full md:static absolute duration-500 ease-in ${open ? "top-6" : "top-[-120px]"}`}>

                <Link className='text-2xl mr-2 bg-red-400 rounded px-4' to='/'>Home</Link>
                <Link className='text-2xl mr-2 bg-blue-300 rounded px-4' to='/foods'>Foods</Link>


            </div>
        </div>


    );
};

export default Header;