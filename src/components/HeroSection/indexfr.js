import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import {
    HeroContainer,
    HeroBg,
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

function HeroSectionFr() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <ImageBg />
            </HeroBg>
            <HeroContent>
                <HeroH1>la carte qui vous en donne plus</HeroH1>
                <HeroP>
                Banked est un nouveau type de carte de paiement. C'est plus qu'un simple compte courant, plus qu'une carte de débit et personnalisé pour vous.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to='signup'
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
                        Commencer {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSectionFr;
