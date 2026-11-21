import './index.css';
import { useState } from 'react';

function Header ({ setActivePage }) {
    const [isOpen,setIsOpen] =useState(false);

    const handleHomeClick = () => {
        setIsOpen(!isOpen);
        setActivePage("home")
    }
    return(
        <div id='header'>
            <div id='categories'>
                <button className='btn2' onClick={() => setIsOpen(!isOpen)}>home</button>
                {isOpen && (
                    <>
                        <p>categories</p>
                        <button className='btn2' onClick={() => setActivePage("games")}>games</button>
                        <button className='btn2' onClick={() => setActivePage("applications")}>applications</button>
                        <button className='btn2' onClick={() => setActivePage("videos")}>videos</button>
                        <button className='btn2' onClick={() => setActivePage("musics")}>musics</button>
                    </>
                )}
            </div>
        </div>        
    )
}

export default Header;