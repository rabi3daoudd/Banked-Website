import React, { useState } from 'react';
import NavbarFr from '../components/Navbar/indexfr';
import Sidebar from '../components/Sidebar';
import FooterFr from '../components/Footer/indexfr';
import FAQFr from '../components/Faq/indexfr';

function FaqFr() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavbarFr toggle={toggle} />
            <FAQFr />
            <FooterFr />
        </>
    );
}

export default FaqFr;