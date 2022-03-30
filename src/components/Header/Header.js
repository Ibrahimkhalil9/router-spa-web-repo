import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-indigo-500 p-2'>
            <Link className='text-2xl mr-2 bg-red-400 rounded px-4' to='/'>Home</Link>
            <Link className='text-2xl mr-2 bg-blue-300 rounded px-4' to='/foods'>Foods</Link>

        </div>


    );
};

export default Header;