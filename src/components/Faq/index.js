import React from 'react';
import Icon1 from '../../images/business-founders.png';
import Icon2 from '../../images/startups.png';
import Icon3 from '../../images/freelancers.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './FaqElements';

const FAQ = () => {
  return (
    <ServicesContainer id='FAQ'>
      <ServicesH1>FAQ</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH2>How do I sign up for a credit card?</ServicesH2>
          <ServicesP>
            You can sign up for a credit card by filling out an application form with your personal and financial information. Once you submit the form, awe will review your information and decide whether or not to approve you for a credit card.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>How do I use my credit card?</ServicesH2>
          <ServicesP>
            You can use your credit card to make purchases anywhere that accepts credit cards. When you make a purchase, you will need to provide your credit card number, expiration date, and security code. You will then be asked to sign the receipt.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>How do I pay my credit card bill?</ServicesH2>
          <ServicesP>
            You can pay your credit card bill online, by mail, or by phone. To pay online, you will need to log in to your account and go to the “Payments” section. You will then be asked to provide your credit card number, expiration date, and security code. You will then be asked to sign the receipt.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>How do I know if I’m eligible for a credit card?</ServicesH2>
          <ServicesP>
            To be eligible for a credit card, you must have a good to excellent credit score. You will also need to have a steady income and a good credit history.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default FAQ;
