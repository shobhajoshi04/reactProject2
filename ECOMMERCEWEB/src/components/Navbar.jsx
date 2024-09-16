

import React from 'react';

import '../styles/Navbar.css'; // Ensure this path is correct

const LogoIcon = () => (
    <div className="logo__container">
        {/* Default SVG */}
        <svg className="logo__icon logo__icon--default" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 15V1H8.75C11.6495 1 14 3.35051 14 6.25V6.75C14 8.54047 13.1037 10.1216 11.7353 11.0692L14.0048 15H10.5407L8.80845 11.9997C8.78899 11.9999 8.76951 12 8.75 12H5V15H2ZM8.75 4C9.99264 4 11 5.00736 11 6.25L11 6.75C11 7.99264 9.99264 9 8.75 9H5V4H8.75Z" fill="black"/>
        </svg>

        {/* Hover SVG */}
        <svg className="logo__icon logo__icon--hover" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12V1H3V15H13V12H6Z" fill="black"/>
        </svg>
    </div>
);

const SearchIcon = () => (
    <svg className='searchIocn' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
);

function Navbar() {
    return (
        <div className='nav'>
            <div className='logo'>
                <a href="/">
                    <LogoIcon />
                </a>
            </div>

            <a className="navlinks" href="#miphones">Mi Phones</a>
<a className="navlinks" href="#redmiphones">Redmi Phones</a>
<a className="navlinks" href="#tv">TV</a>
<a className="navlinks" href="#laptops">Laptops</a>
<a className="navlinks" href="#lifestyle">Fitness & Lifestyle</a>
<a className="navlinks" href="#home">Home</a>
<a className="navlinks" href="#audio">Radio</a>
<a className="navlinks" href="#accessories">Accessories</a>


            <div className='searchBox'>
                <input type="text" name="search" placeholder='Search Products' />
                <SearchIcon />
            </div>
        </div>
    );
}

export default Navbar;
