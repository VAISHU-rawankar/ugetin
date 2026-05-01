import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, FileText, Megaphone, ArrowRight } from 'lucide-react';
import './FeaturesGrid.css';

const features = [
    {
        id: '01',
        title: 'Society Management',
        description: 'Manage members, flats, amenities, and important society information seamlessly.',
        icon: <Building2 size={32} />,
        variant: 'black'
    },
    {
        id: '02',
        title: 'Visitor Management',
        description: 'Secure gate pass system for visitors, guests and service providers.',
        icon: <Users size={32} />,
        variant: 'black'
    },
    {
        id: '03',
        title: 'Maintenance Billing',
        description: 'Generate, send and track maintenance invoices with real-time updates and payment history.',
        icon: <FileText size={32} />,
        variant: 'black',
        badge: 'MOST USED'
    },
    {
        id: '04',
        title: 'Notices & Communication',
        description: 'Broadcast notices, conduct polls and send emergency alerts instantly.',
        icon: <Megaphone size={32} />,
        variant: 'black'
    }
];

const FeaturesGrid = () => {
    return (
        <section className="features-grid-v2">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">ALL-IN-ONE SOLUTION</span>
                    <h2 className="section-title">
                        Everything Your Society <br />
                        Needs in <span>One Platform</span>
                    </h2>
                    <p className="section-description">
                        From visitor entry to maintenance billing, manage every aspect <br />
                        of your society with simplicity and efficiency.
                    </p>
                </div>

                <div className="features-container">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={feature.id}
                            className={`feature-card-v2 ${feature.variant}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="card-top">
                                <div className="card-icon-wrapper">
                                    {feature.icon}
                                </div>
                                <span className="card-index">{feature.id}</span>
                            </div>
                            
                            {feature.badge && (
                                <div className="card-badge">
                                    <span className="sparkle">✦</span> {feature.badge}
                                </div>
                            )}

                            <div className="card-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>

                            <button className="card-btn">
                                <ArrowRight size={20} />
                            </button>

                            {/* Subtle background patterns */}
                            <div className="card-pattern"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
