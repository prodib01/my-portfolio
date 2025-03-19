import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [activeCategory, setActiveCategory] = useState('Frontend');

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const skillCategories = [
        {
            title: 'Frontend',
            icon: 'bi-laptop',
            color: '#4361ee',
            skills: [
                { name: 'JavaScript', level: 90 },
                { name: 'React', level: 85 },
                { name: 'HTML5/CSS3', level: 95 },
                { name: 'Bootstrap', level: 90 },
                { name: 'Figma', level: 80 },
            ]
        },
        {
            title: 'Backend',
            icon: 'bi-server',
            color: '#3a0ca3',
            skills: [
                { name: 'PHP (Laravel, Yii2)', level: 85 },
                { name: 'Python (Django)', level: 90 },
                { name: 'Node.js', level: 75 },
                { name: 'MongoDB', level: 80 },
                { name: 'MySQL', level: 85 },
                { name: 'Redis', level: 70 },
                { name: 'C# (.NET)', level: 80 },
            ]
        },
        {
            title: 'CMS & ERPs',
            icon: 'bi-house-door',
            color: '#f72585',
            skills: [
                { name: 'WordPress', level: 80 },
                { name: 'Odoo', level: 55 },
            ]
        },
        {
            title: 'Tools & Methods',
            icon: 'bi-tools',
            color: '#4cc9f0',
            skills: [
                { name: 'Git', level: 95 },
                { name: 'Docker', level: 80 },
                { name: 'Chart.js', level: 70 },
                { name: 'Postman', level: 85 },
                { name: 'Jupyter', level: 75 },
                { name: 'Nginx', level: 70 },
                { name: 'ODK', level: 75 },
                { name: 'KoBoToolbox', level: 70 },
            ]
        },
        {
            title: 'Mobile & Additional',
            icon: 'bi-plus-circle',
            color: '#7209b7',
            skills: [
                { name: 'Flutter', level: 70 },
                { name: 'API Development', level: 85 },
                { name: 'UI/UX Principles', level: 80 },
                { name: 'Performance Optimization', level: 75 }
            ]
        }
    ];

    // Find the current active category object
    const activeSkillCategory = skillCategories.find(cat => cat.title === activeCategory) || skillCategories[0];

    const progressVariants = {
        hidden: { width: 0 },
        visible: (level) => ({
            width: `${level}%`,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.2
            }
        })
    };

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const skillVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.3
            }
        }
    };

    const skillItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section id="skills" className="section-padding skills-section py-5">
            <Container ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-center mb-4"
                >
                    <span className="badge bg-primary px-3 py-2 rounded-pill mb-2 fw-normal text-uppercase" style={{ letterSpacing: "1px" }}>My Skills</span>
                    <h2 className="fw-bold mb-3 text-gradient">Technical Expertise</h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={tabVariants}
                >
                    <Nav
                        className="skill-tabs justify-content-center mb-4 flex-nowrap"
                        variant="pills"
                        style={{ overflowX: 'auto', whiteSpace: 'nowrap', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                    >
                        {skillCategories.map((category) => (
                            <Nav.Item key={category.title}>
                                <Nav.Link
                                    active={activeCategory === category.title}
                                    onClick={() => setActiveCategory(category.title)}
                                    className="mx-1 px-3 py-2 d-flex align-items-center"
                                    style={{
                                        background: activeCategory === category.title ? category.color : 'transparent',
                                        color: activeCategory === category.title ? 'white' : '#212529',
                                        border: `1px solid ${activeCategory === category.title ? category.color : '#dee2e6'}`,
                                        borderRadius: '30px',
                                        fontSize: '0.9rem',
                                        cursor: 'pointer',
                                        minWidth: 'fit-content'
                                    }}
                                >
                                    <i className={`bi ${category.icon} me-1`}></i> {category.title}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={skillVariants}
                    key={activeCategory} // Force re-render animation when tab changes
                >
                    <Card className="border-0 shadow-sm p-4">
                        <Row className="g-4">
                            {activeSkillCategory.skills.map((skill) => (
                                <Col md={6} key={skill.name}>
                                    <motion.div className="mb-3" variants={skillItemVariants}>
                                        <div className="d-flex justify-content-between align-items-center mb-1">
                                            <span className="fw-semibold">{skill.name}</span>
                                            <span className="badge" style={{
                                                background: activeSkillCategory.color,
                                                fontSize: "0.75rem"
                                            }}>{skill.level}%</span>
                                        </div>
                                        <div className="progress" style={{
                                            height: "6px",
                                            borderRadius: "10px",
                                            backgroundColor: '#f0f0f0'
                                        }}>
                                            <motion.div
                                                custom={skill.level}
                                                initial="hidden"
                                                animate="visible"
                                                variants={progressVariants}
                                                className="progress-bar"
                                                style={{
                                                    background: `linear-gradient(90deg, ${activeSkillCategory.color}, ${activeSkillCategory.color}aa)`,
                                                    height: '100%',
                                                    borderRadius: '10px'
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </motion.div>

                <motion.div
                    className="skill-stats text-center mt-4 pt-2"
                    initial={{ opacity: 0 }}
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { delay: 0.5, duration: 0.6 } }
                    }}
                >
                    <Row className="justify-content-center g-3">
                        <Col xs={6} md={3}>
                            <Card className="border-0 shadow-sm py-3">
                                <div className="fw-bold text-gradient">3+</div>
                                <div className="small text-muted">Years Experience</div>
                            </Card>
                        </Col>
                        <Col xs={6} md={3}>
                            <Card className="border-0 shadow-sm py-3">
                                <div className="fw-bold text-gradient">25+</div>
                                <div className="small text-muted">Technologies</div>
                            </Card>
                        </Col>
                        <Col xs={6} md={3}>
                            <Card className="border-0 shadow-sm py-3">
                                <div className="fw-bold text-gradient">15+</div>
                                <div className="small text-muted">Projects</div>
                            </Card>
                        </Col>
                        <Col xs={6} md={3}>
                            <Card className="border-0 shadow-sm py-3">
                                <div className="fw-bold text-gradient">99%</div>
                                <div className="small text-muted">Client Satisfaction</div>
                            </Card>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
};

export default Skills;