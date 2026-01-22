import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { ArrowLeft, Clock, MapPin, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Now = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1],
            },
        },
    };

    const activities = [
        {
            icon: <Activity className="w-6 h-6" />,
            title: "Building",
            description: "Scaling Link-Bee and exploring kinetic typography in web design."
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Location",
            description: "Currently based in Medellín, Colombia. Embracing the nomad life."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Focus",
            description: "Deep diving into AI-driven development and motion systems."
        }
    ];

    return (
        <div className="kinetic-theme">
            <div className="noise-overlay" />

            <div className="marquee-container top-marquee">
                <Marquee speed={100} gradient={false}>
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="marquee-item">
                            WHAT'S HAPPENING NOW // <span className="marquee-accent">LIVE UPDATES</span> // THE CURRENT MOTION //&nbsp;
                        </span>
                    ))}
                </Marquee>
            </div>

            <main className="container">
                <motion.div
                    className="card-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-number" style={{ top: '-5rem', right: '-2rem' }}>01</div>

                    <motion.div
                        className="now-header"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants}>
                            <Link to="/" className="btn-link" style={{ border: 'none', padding: '0 0 1rem 0', width: 'fit-content' }}>
                                <ArrowLeft />
                                <span className="text-label">BACK TO HOME</span>
                            </Link>
                        </motion.div>

                        <motion.h1 className="text-display" variants={itemVariants} style={{ marginBottom: '2rem', fontSize: 'clamp(5rem, 15vw, 12rem)' }}>
                            NOW
                        </motion.h1>
                        <motion.p className="text-label" variants={itemVariants} style={{ color: 'var(--accent)' }}>
                            LAST UPDATED: JANUARY 2026
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="activities-grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        {activities.map((item, index) => (
                            <motion.div
                                key={index}
                                className="activity-item"
                                variants={itemVariants}
                                style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                    {item.icon}
                                    <h3 className="text-card-title" style={{ fontSize: '1.5rem' }}>{item.title}</h3>
                                </div>
                                <p className="text-body" style={{ color: 'inherit' }}>{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div className="card-footer" variants={itemVariants}>
                        <span className="text-label">V1.0</span>
                        <span className="text-label status-indicator">STAY KINETIC</span>
                    </motion.div>
                </motion.div>
            </main>

            <div className="marquee-container bottom-marquee">
                <Marquee speed={60} gradient={false} direction="right">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="marquee-item">
                            <span className="marquee-accent">JUSTIN MORAN</span> // CONTENT CREATOR // DIGITAL NOMAD //&nbsp;
                        </span>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Now;
