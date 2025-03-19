import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import newzzone from '../assets/images/newzzone.jpg';
import beicholo from '../assets/images/beicholo.jpg';
import yoga from '../assets/images/yoga.jpg';

const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: 'Beicholo',
            description: 'A full-stack e-commerce solution with product management, shopping cart, and payment processing capabilities.',
            image: beicholo,
            technologies: ['React', 'Django', 'PostgreSQL'],
            demoLink: 'https://Beicholo.com',
        },
        {
            id: 2,
            title: 'The Newz zone',
            description: 'A sleek news platform built with WordPress, offering the latest updates on various topics with an easy-to-navigate interface.',
            image: newzzone,
            technologies: ['Wordpress'],
            demoLink: 'https://Thenewzzone.com',
        },
        {
            id: 3,
            title: 'Achel Hot Yoga',
            description: 'A dynamic yoga platform offering real-time schedules, class details, and interactive features for a seamless experience.',
            image: yoga,
            technologies: ['React', 'Django','Bootstrap'],
            demoLink: 'https://achel-hot-yoga-production.up.railway.app/',
        }
    ];

    return (
        <section id="projects" className="section-padding bg-light">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-5"
                >
                    <h6 className="text-primary fw-bold">MY WORK</h6>
                    <h2 className="fw-bold mb-4">Featured Projects</h2>
                    <div className="mx-auto" style={{
                        width: '50px',
                        height: '4px',
                        backgroundColor: 'var(--bs-primary)',
                        marginBottom: '30px'
                    }}></div>
                </motion.div>

                <Row className="g-4">
                    {projectData.map((project, index) => (
                        <Col key={project.id} md={6} lg={4}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <Card className="h-100 border-0 shadow-sm">
                                    <div className="overflow-hidden" style={{ maxHeight: '200px' }}>
                                        <Card.Img
                                            variant="top"
                                            src={project.image}
                                            className="img-fluid project-img"
                                            style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s ease'
                                            }}
                                        />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="fw-bold">{project.title}</Card.Title>
                                        <Card.Text>{project.description}</Card.Text>
                                        <div className="mb-3">
                                            {project.technologies.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    className="me-2 mb-2 py-2 px-3"
                                                    bg="light"
                                                    text="dark"
                                                    style={{ borderRadius: '20px', fontWeight: '600' }}
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="d-flex gap-2">
                                            <Button
                                                href={project.demoLink}
                                                variant="primary"
                                                className="px-3 rounded-pill"
                                            >
                                                <i className="bi bi-display me-2"></i>Demo
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;