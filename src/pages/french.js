import React, { useState } from 'react';
import NavbarFr from '../components/Navbar/indexfr';
import Sidebar from '../components/Sidebar';
import FooterFr from '../components/Footer/indexfr';
import HeroSectionFr from '../components/HeroSection/indexfr';
import InfoSection from '../components/InfoSection';
import {
    homeObjOneFr,
    homeObjTwoFr,
    homeObjThreeFr
} from '../components/InfoSection/Data';
import ServicesFr from '../components/Services/indexfr';

function HomeFrench() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavbarFr toggle={toggle} />
            <HeroSectionFr />
            <ServicesFr />
            <InfoSection {...homeObjOneFr} />
            <InfoSection {...homeObjTwoFr} />
            <InfoSection {...homeObjThreeFr} />
            <FooterFr />
        </>
    );
}

export default HomeFrench;


