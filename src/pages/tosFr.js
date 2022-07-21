import React, { useState } from 'react';
import NavbarFr from '../components/Navbar/indexfr';
import Sidebar from '../components/Sidebar';
import FooterFr from '../components/Footer/indexfr';
import TermsOfServicesFr from '../components/TermsOfServices/indexfr.js';

function TermsFr() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavbarFr toggle={toggle} />
            <TermsOfServicesFr />
            <FooterFr />
        </>
    );
}

export default TermsFr;