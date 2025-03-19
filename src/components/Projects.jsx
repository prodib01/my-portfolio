import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with product management, shopping cart, and payment processing capabilities.',
            image: 'https://images.unsplash.com/photo-1467232004584-018046c4a3e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
            technologies: ['React', 'Node.js', 'MongoDB'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application that helps teams organize and track project progress efficiently.',
            image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80',
            technologies: ['Vue.js', 'Express', 'PostgreSQL'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'An interactive weather application that provides real-time forecasts, historical data, and visual weather representations.',
            image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            technologies: ['React', 'Redux', 'Weather API'],
            demoLink: '#',
            codeLink: '#'
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
                                            <Button
                                                href={project.codeLink}
                                                variant="outline-dark"
                                                className="px-3 rounded-pill"
                                            >
                                                <i className="bi bi-github me-2"></i>Code
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