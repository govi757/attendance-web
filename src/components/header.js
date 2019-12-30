import React from 'react';

export const Header = () => {
    return (
        // <!-- As a heading -->
        <nav className="navbar">
            <span className="navbar-brand mb-0 h1 " style={{ color: 'white' }}>Attendance</span>
            <span className="navbar-brand mb-0 h1 " style={{ color: 'white', cursor: 'pointer' }}>Logout</span>
        </nav>
    )
}