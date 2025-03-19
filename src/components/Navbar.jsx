import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false); // State to track navbar expansion

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = () => {
        setExpanded(false); // Close the navbar when a link is clicked
    };

    return (
        <Navbar
            expand="lg"
            variant="dark"
            fixed="top"
            expanded={expanded} // Control navbar expansion
            className={scrolled ? 'py-2 navbar-scrolled' : 'py-3'}
            style={scrolled ? {
                backgroundColor: 'rgba(33, 37, 41, 0.95)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
            } : {
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease'
            }}
        >
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-3">
                    <span className="text-gradient">Brendah Prosper Kisakye</span>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="navbar-nav"
                    onClick={() => setExpanded(expanded ? false : true)} // Toggle navbar
                />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <Nav.Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="mx-2 nav-link-hover"
                                onClick={handleNavClick} // Close navbar on click
                            >
                                {item}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
