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

function TermsOfServiceFr() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id='terms of services'>
            <HeroContent>
                <HeroH1>Conditions de services</HeroH1>
                <HeroP>
                    En accédant ou en utilisant le site Web à l'adresse https://elaborate-meerkat-2153d7.netlify.app/, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions d'utilisation, vous ne pouvez pas accéder ou utiliser le site Web. Nous pouvons mettre à jour ces conditions d'utilisation de temps à autre, veuillez donc les consulter régulièrement.

                    Le site Web https://elaborate-meerkat-2153d7.netlify.app/ est fourni par Elaborate Meerkat, Inc. et ses sociétés affiliées (collectivement, "Elaborate Meerkat", "nous", "notre" ou "notre").

                    Le site Web est destiné aux utilisateurs âgés d'au moins 18 ans. Si vous n'avez pas au moins 18 ans, vous ne pouvez pas utiliser le site Web.

                    Le site Web peut contenir du contenu qui ne convient pas à tous les publics, y compris du contenu qui peut être offensant, indécent ou répréhensible.

                    Nous pouvons résilier votre accès au site Web à tout moment, pour quelque raison que ce soit et sans préavis.

                    Vous êtes seul responsable de l'utilisation que vous faites du site Web. Votre utilisation du site Web est soumise à toutes les lois et réglementations applicables.

                    Le site Web est fourni "tel quel", sans garantie d'aucune sorte. Nous déclinons toute garantie, expresse ou implicite, y compris, sans s'y limiter, les garanties de qualité marchande, d'adéquation à un usage particulier, de titre et de non-contrefaçon.

                    En aucun cas, nous ne serons responsables de tout dommage, qu'il soit direct, indirect, accessoire, spécial ou consécutif, découlant de ou en relation avec votre utilisation du site Web.
                </HeroP>
            </HeroContent>
        </HeroContainer>
    );
}

export default TermsOfServiceFr;
