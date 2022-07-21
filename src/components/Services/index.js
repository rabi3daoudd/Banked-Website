import React, { useState }from 'react';
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

const Services = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Business Founders</ServicesH2>
          <ServicesH2>$19.99/month</ServicesH2>
          <ServicesP>
            Keep your business going strong and focus on the right
            things without worrying about bills.
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
          <ServicesH2>Startups</ServicesH2>
          <ServicesH2>$49.99/month</ServicesH2>
          <ServicesP>
            The card to get everything you need for your startup, without
            completely breaking the bank.
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
          <ServicesH2>Freelancers</ServicesH2>
          <ServicesH2>$79.99/month</ServicesH2>
          <ServicesP>
            Everything you need in a card to worry less about
            finances and get back to your clients.
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
            to={{pathname: "/signup"}}
            smooth={true}
            duration={500}
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

export default Services;
