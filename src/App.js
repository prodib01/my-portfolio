import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/custom.css';

import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <NavigationBar />
            <Hero />

            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </>
    );
}

export default App;