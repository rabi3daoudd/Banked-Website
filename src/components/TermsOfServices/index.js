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

function TermsOfService() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='terms of services'>
      <HeroContent>
        <HeroH1>Terms of Service</HeroH1>
        <HeroP>
          By accessing or using the website at https://elaborate-meerkat-2153d7.netlify.app/, you agree to be bound by these Terms of Service. If you do not agree to these Terms of Service, you may not access or use the website. We may update these Terms of Service from time to time, so please check back periodically.

          The website at https://elaborate-meerkat-2153d7.netlify.app/ is provided by Elaborate Meerkat, Inc. and its affiliates (collectively, "Elaborate Meerkat", "we", "us" or "our").

          The website is intended for users who are at least 18 years old. If you are not at least 18 years old, you may not use the website.

          The website may contain content that is not suitable for all audiences, including content that may be offensive, indecent or objectionable.

          We may terminate your access to the website at any time, for any reason, and without notice to you.

          You are solely responsible for your use of the website. Your use of the website is subject to all applicable laws and regulations.

          The website is provided "as is", without warranty of any kind. We disclaim all warranties, whether express or implied, including without limitation the warranties of merchantability, fitness for a particular purpose, title and non-infringement.

          In no event shall we be liable for any damages, whether direct, indirect, incidental, special or consequential, arising out of or in connection with your use of the website.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export default TermsOfService;
