 // @ts-nocheck

import React from 'react';
import Tab from './Tab.tsx'
import './NavigationBar.css';

type NavigationBarProps = {
    handleHover: (string)=>void
}

const NavigationBar:React.FunctionComponent = ({ handleHover }) => {
    return ( 
            <nav className="navbar">
                <div className="container d-flex justify-content-center align-items-center">
                    <ul className="list-inline">
                        <Tab tabName="Home" handleHover={handleHover}/>
                        <Tab tabName="Projects" handleHover={handleHover}/>
                        <Tab tabName="Contact" handleHover={handleHover}/>
                    </ul>
                </div>
            </nav>
    )
}

export default NavigationBar