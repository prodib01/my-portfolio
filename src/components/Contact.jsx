import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            try {
                const response = await fetch("https://formspree.io/f/mwplvpok", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    alert("Thank you for your message! I will get back to you soon.");
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    });

                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);

                } else {
                    alert("Something went wrong. Please try again later.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred while sending the message.");
            }
        }

        setValidated(true);
    };

    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: '#212529' }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-5"
                >
                    <h6 className="text-primary fw-bold">GET IN TOUCH</h6>
                    <h2 className="fw-bold mb-4 text-white">Contact Me</h2>
                    <div className="mx-auto" style={{
                        width: '50px',
                        height: '4px',
                        backgroundColor: 'var(--bs-primary)',
                        marginBottom: '30px'
                    }}></div>
                </motion.div>

                <Row className="g-4">
                    <Col lg={5} className="mb-4 mb-lg-0">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h4 className="text-white mb-4">Let's discuss your project</h4>
                            <p className="text-white-50 mb-5">
                                I'm interested in freelance, consultancy and full-time opportunities – especially ambitious or large projects.
                                However, if you have other requests or questions, feel free to reach out using the form.
                            </p>

                            <div className="contact-info">
                                {[
                                    {
                                        icon: 'bi-geo-alt',
                                        title: 'Location',
                                        content: <a href="https://www.google.com/maps?q=0.37304884628384066,32.6084268400048" target="_blank" className="text-white-50">
                                            Kulambiro, Uganda</a>
                                    },
                                    {
                                        icon: 'bi-envelope',
                                        title: 'Email',
                                        content: <a href="mailto:kskbrendah@gmail.com" className="text-white-50">kskbrendah@gmail.com</a>
                                    },
                                    {
                                        icon: 'bi-whatsapp',
                                        title: 'WhatsApp',
                                        content: <a href="https://wa.me/256753049694" className="text-white-50">+256 753 049 694</a>
                                    },
                                    {
                                        icon: 'bi-phone',
                                        title: 'Phone',
                                        content: <a href="tel:+256785685364" className="text-white-50">+256 785 685 364</a>
                                    },
                                    {
                                        icon: 'bi-github',
                                        title: 'GitHub',
                                        content: <a href="https://github.com/prodib01" className="text-white-50" target="_blank" rel="noopener noreferrer"> prodib01</a>
                                            }
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="d-flex align-items-center mb-4"
                                    >
                                        <div className="flex-shrink-0">
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                background: 'linear-gradient(90deg, var(--bs-primary), #0dcaf0)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <i className={`bi ${item.icon} fs-4 text-white`}></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3 text-white-50">
                                            <h5 className="text-white mb-1">{item.title}</h5>
                                            {item.content}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </Col>

                    <Col lg={7}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white p-4 p-md-5 rounded-3 shadow-lg">
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md={6} className="mb-3">
                                            <Form.Group controlId="formName">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Your Name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="py-3"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide your name.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Form.Group controlId="formEmail">
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Your Email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="py-3"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid email.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="formSubject">
                                        <Form.Control
                                            type="text"
                                            placeholder="Subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="py-3"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a subject.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formMessage">
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            placeholder="Your Message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="py-3"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a message.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            type="submit"
                                            className="btn-submit py-3 px-5 rounded-pill"
                                            style={{
                                                background: 'linear-gradient(90deg, var(--bs-primary), #0dcaf0)',
                                                border: 'none',
                                                fontWeight: '600',
                                            }}
                                        >
                                            Send Message
                                        </Button>
                                    </motion.div>
                                </Form>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
