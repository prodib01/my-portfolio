import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1>Your Name</h1>
                <p className="tagline">Software Developer</p>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;