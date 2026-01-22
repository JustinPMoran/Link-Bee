import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { Youtube, Instagram, Music2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1],
            },
        },
    };

    const links = [
        {
            name: 'Youtube',
            url: 'https://youtube.com/@iamjustinmoran?si=LIuNkNoHNyc89taj?sub_confirmation=1',
            icon: <Youtube />,
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/i.am.justinmoran?igsh=MTBwd243czFiZnl1',
            icon: <Instagram />,
        },
        {
            name: 'TikTok',
            url: 'https://www.tiktok.com/@i.am.justinmoran2?_r=1&_t=ZP-93IKgsUQJ8J',
            icon: <Music2 />,
        }
        // {
        //     name: 'Now',
        //     url: '/now',
        //     icon: <ArrowRight />,
        //     internal: true,
        // }
    ];

    return (
        <div className="kinetic-theme">
            <div className="noise-overlay" />

            {/* Top Marquee
            <div className="marquee-container top-marquee">
                <Marquee speed={80} gradient={false}>
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="marquee-item">
                            JUSTIN MORAN // <span className="marquee-accent">CONTENT CREATOR</span> // DIGITAL NOMAD //&nbsp;
                        </span>
                    ))}
                </Marquee>
            </div> */}

            <main className="container">
                <motion.div
                    className="card-wrapper"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* <div className="bg-number" style={{ top: '-4rem', left: '-2rem' }}>26</div> */}

                    <motion.section
                        className="profile"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div className="avatar-container" variants={itemVariants}>
                            <img
                                src="/avatar.png"
                                alt="Justin Moran"
                            />
                        </motion.div>

                        <motion.div className="profile-info" variants={itemVariants}>
                            <h1 className="text-heading">JUSTIN MORAN</h1>
                            <p className="text-label location">CONTENT CREATOR AND FOUNDER</p>
                        </motion.div>

                        <motion.p className="text-body bio" variants={itemVariants}>
                            FOLLOW MY SOCIAL MEDIA ACCOUNTS.
                        </motion.p>
                    </motion.section>

                    <motion.div
                        className="links-container"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {links.map((link, index) => (
                            link.internal ? (
                                <motion.div key={index} variants={itemVariants}>
                                    <Link to={link.url} className="btn-link">
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </Link>
                                </motion.div>
                            ) : (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    className="btn-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={itemVariants}
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </motion.a>
                            )
                        ))}
                    </motion.div>

                    <motion.div className="card-footer" variants={itemVariants}>
                        <span className="text-label">V1.0</span>
                        <span className="text-label status-indicator">LIVE NOW</span>
                    </motion.div>
                </motion.div>
            </main>

            {/* Bottom Marquee
            <div className="marquee-container bottom-marquee">
                <Marquee speed={60} gradient={false} direction="right">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="marquee-item">
                            FOLLOW THE MOTION // <span className="marquee-accent">BREAK THE GRID</span> // KINETIC DESIGN //&nbsp;
                        </span>
                    ))}
                </Marquee>
            </div> */}
        </div>
    );
};

export default Home;
