import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false); // State to track navbar expansion
    const navbarRef = useRef(null); // Reference for the navbar

    useEffect(() => {
        const handleScroll = () => {
            // Close the navbar when the user scrolls down
            setScrolled(window.scrollY > 50); // Optional: Modify this based on your preference

            // Close the navbar if it's expanded when the user scrolls
            if (expanded) {
                setExpanded(false);
            }
        };

        const handleClickOutside = (event) => {
            // Close navbar if the click is outside the navbar
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setExpanded(false); // Close the navbar
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside); // Add click listener for outside clicks

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside); // Clean up the event listener
        };
    }, [expanded]); // `expanded` state dependency to track navbar state

    const handleNavClick = () => {
        setExpanded(false); // Close the navbar when a link is clicked
    };

    return (
        <Navbar
            ref={navbarRef} // Attach ref to the navbar
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
