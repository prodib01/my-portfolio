import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section
            id="home"
            className="hero d-flex align-items-center"
            style={{
                height: '100vh',
                background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={10} lg={8}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="display-3 fw-bold mb-4 text-white">
                                Hello, I'm <span className="text-primary">Brendah Prosper Kisakye</span>
                            </h1>
                            <p className="lead mb-5 text-white">
                                A passionate Software Developer specializing in web, mobile, and desktop applications, with expertise in a range of modern technologies.
                            </p>


                            <div className="d-flex justify-content-center gap-3">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        href="#projects"
                                        variant="primary"
                                        size="lg"
                                        className="px-4 py-3 rounded-pill fw-bold"
                                    >
                                        View My Work
                                    </Button>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        href="#contact"
                                        variant="outline-light"
                                        size="lg"
                                        className="px-4 py-3 rounded-pill fw-bold"
                                    >
                                        Contact Me
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;