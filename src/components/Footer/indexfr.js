import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const FooterFr = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>À propos de nous</FooterLinkTitle>
                            <FooterLink to='sign-up'>Comment ça fonctionne</FooterLink>
                            <FooterLink to='/'>Témoignages</FooterLink>
                            <FooterLink to='/'>Carrières</FooterLink>
                            <FooterLink to='/'>Investisseurs</FooterLink>
                            <FooterLink to='/tos-fr'>Conditions d'utilisation</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Nous contacter</FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Soutien</FooterLink>
                            <FooterLink to='/'>Branches</FooterLink>
                            <FooterLink to='/faq-fr'>FAQ</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Vidéos</FooterLinkTitle>
                            <FooterLink to='/'>comment s'inscrire</FooterLink>
                            <FooterLink to='/'>La vie à Banked</FooterLink>
                            <FooterLink to='/'>Promotions</FooterLink>
                            <FooterLink to='/'>motifs</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Des médias sociaux</FooterLinkTitle>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Youtube</FooterLink>
                            <FooterLink to='/'>Twitter</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Languages</FooterLinkTitle>
                            <FooterLink to='/'>English</FooterLink>
                            <FooterLink to='/fr'>French</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Banked
                        </SocialLogo>
                        <WebsiteRights>Banked © 2022 All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.facebook.com/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//www.instagram.com/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href='//www.youtube.com/'
                                target='_blank'
                                aria-label='Youtube'
                                rel='youtube'
                            >
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink
                                target='_blank'
                                aria-label='Twitter'
                                href='//www.twitter.com/'
                            >
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='//www.linkedin.com/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default FooterFr;
