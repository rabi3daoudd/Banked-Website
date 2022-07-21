import React, { useState } from 'react';
import Icon1 from '../../images/business-founders.png';
import Icon2 from '../../images/startups.png';
import Icon3 from '../../images/freelancers.png';
import { Button } from '../ButtonElements';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    ServicesCard1,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight

} from './ServicesElements';

const ServicesFr = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Nos services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Fondateurs d'entreprise</ServicesH2>
                    <ServicesH2>$19.99/month</ServicesH2>
                    <ServicesP>
                        Assurez la prospérité de votre entreprise et concentrez-vous sur les bonnes choses sans vous soucier des factures.
                        <br />
                        <br />
                        - Free physical cards
                        <br />
                        - 1 member
                        <br />
                        - Optional cash checks
                        <br />
                        - International transfers
                        <br />
                        - Receipts certification and archiving
                    </ServicesP>
                </ServicesCard>
                <ServicesCard1>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Start-up</ServicesH2>
                    <ServicesH2>$49.99/month</ServicesH2>
                    <ServicesP>
                        La carte pour obtenir tout ce dont vous avez besoin pour votre startup, sans vous ruiner complètement.
                        <br />
                        <br />
                        - Everything in Business Founders plan
                        <br />
                        - Up to 5 members
                        <br />
                        - Expenses categorization
                        <br />
                        - Unlimited transaction history
                        <br />
                        - 3 cash checks a month
                        <br />
                        - Real-time payment notifications
                    </ServicesP>
                </ServicesCard1>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Indépendantes</ServicesH2>
                    <ServicesH2>$79.99/month</ServicesH2>
                    <ServicesP>
                        Tout ce dont vous avez besoin dans une carte pour vous soucier moins de vos finances et revenir vers vos clients.
                        <br />
                        <br />
                        - Everything in Startups plan
                        <br />
                        - Unlimited members
                        <br />
                        - Manager's role and team budget
                        <br />
                        - Individual account management

                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            <HeroBtnWrapper>
                <Button
                    to='/signup'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary='true'
                    dark='true'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                >
                    Join Now! {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </ServicesContainer>
    );
};

export default ServicesFr;
