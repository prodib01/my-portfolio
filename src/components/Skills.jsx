import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const skillCategories = [
        {
            title: 'Frontend',
            icon: 'bi-laptop',
            skills: [
                { name: 'JavaScript/TypeScript', level: 90 },
                { name: 'React', level: 85 },
                { name: 'HTML5/CSS3', level: 95 },
                { name: 'Vue.js', level: 80 }
            ]
        },
        {
            title: 'Backend',
            icon: 'bi-server',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Express', level: 90 },
                { name: 'MongoDB', level: 80 },
                { name: 'SQL', level: 75 }
            ]
        },
        {
            title: 'Tools & Methods',
            icon: 'bi-tools',
            skills: [
                { name: 'Git & GitHub', level: 95 },
                { name: 'Docker', level: 75 },
                { name: 'Agile Development', level: 85 },
                { name: 'Testing (Jest, Mocha)', level: 80 }
            ]
        },
        {
            title: 'Additional Skills',
            icon: 'bi-plus-circle',
            skills: [
                { name: 'Responsive Design', level: 90 },
                { name: 'API Development', level: 85 },
                { name: 'UI/UX Principles', level: 80 },
                { name: 'Performance Optimization', level: 85 }
            ]
        }
    ];

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6
            }
        })
    };

    const progressVariants = {
        hidden: { width: 0 },
        visible: (level) => ({
            width: `${level}%`,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        })
    };

    return (
        <section id="skills" className="section-padding">
            <Container ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={controls}
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-center mb-5"
                >
                    <h6 className="text-primary fw-bold">MY SKILLS</h6>
                    <h2 className="fw-bold mb-4">Technical Expertise</h2>
                    <div className="mx-auto" style={{
                        width: '50px',
                        height: '4px',
                        backgroundColor: 'var(--bs-primary)',
                        marginBottom: '30px'
                    }}></div>
                </motion.div>

                <Row className="g-4">
                    {skillCategories.map((category, categoryIndex) => (
                        <Col md={6} key={category.title}>
                            <motion.div
                                custom={categoryIndex}
                                initial="hidden"
                                animate={controls}
                                variants={variants}
                            >
                                <Card className="h-100 shadow-sm border-0 p-4">
                                    <h4 className="card-title fw-bold mb-4">
                                        <i className={`bi ${category.icon} text-primary me-2`}></i>
                                        {category.title}
                                    </h4>

                                    {category.skills.map((skill, index) => (
                                        <div className="mb-4" key={skill.name}>
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <span className="fw-bold">{skill.name}</span>
                                                <span>{skill.level}%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '5px', backgroundColor: '#f0f0f0' }}>
                                                <motion.div
                                                    custom={skill.level}
                                                    initial="hidden"
                                                    animate={controls}
                                                    variants={progressVariants}
                                                    className="progress-bar"
                                                    style={{
                                                        background: 'linear-gradient(90deg, var(--bs-primary), #0dcaf0)',
                                                        height: '100%',
                                                        borderRadius: '5px'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;