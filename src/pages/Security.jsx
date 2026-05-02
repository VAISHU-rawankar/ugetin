// Security.jsx — Main page composer
import SecurityHero from "../components/security-components/securityHero";
import SecurityFeatures from "../components/security-components/SecurityFeatures";
import GuardBenefits from "../components/security-components/GuardBenefits";
import WhyUGate from "../components/common/WhyUGate";

const Security = ({ data = {} }) => {
    console.log(data);
    const {
        hero = {},
        features = {},
        cta = {},
    } = data;

    return (
        <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", marginTop: "40px" }}>
            <SecurityHero data={hero} />

            <SecurityFeatures data={features} />
            <GuardBenefits />
            <WhyUGate />
        </div>
    );
};

export default Security;