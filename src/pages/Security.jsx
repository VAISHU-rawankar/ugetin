// Security.jsx — Main page composer
import SecurityHero from "../components/security-components/securityHero";
import SecurityFeatures from "../components/security-components/SecurityFeatures";
import SecurityCTA from "../components/security-components/SecurityCTA";
import { Link } from "react-router-dom";
import { featuresPageData } from "../data/featureData";

const Security = ({ data = {} }) => {
    console.log(data);
    const {
        hero = {},
        features = {},
        cta = {},
    } = data;

    return (
        <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", marginTop: "70px" }}>
            <SecurityHero data={hero} />

            <SecurityFeatures data={features} />

            <SecurityCTA data={cta} />
            <section className="section cta-section" >
                <div className="container">
                    <div className="cta-content">
                        <h2>{featuresPageData.cta.title}</h2>
                        <p>{featuresPageData.cta.subtitle}</p>
                        <div className="cta-buttons">
                            <Link to="/pricing" className="btn btn-primary btn-large">
                                <span>Get Started Free</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                <span>Schedule Demo</span>
                                <i className="fas fa-calendar"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Security;