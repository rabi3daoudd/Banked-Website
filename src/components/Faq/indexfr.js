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

const FAQFr = () => {
  return (
    <ServicesContainer id='FAQ'>
      <ServicesH1>FAQ</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH2>Comment puis-je m'inscrire pour une carte de crédit?</ServicesH2>
          <ServicesP>
          Vous pouvez vous inscrire pour une carte de crédit en remplissant un formulaire de demande avec vos informations personnelles et financières. Une fois que vous aurez soumis le formulaire, nous examinerons vos informations et déciderons de vous approuver ou non pour une carte de crédit.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Comment utiliser ma carte de crédit ?</ServicesH2>
          <ServicesP>
          Vous pouvez utiliser votre carte de crédit pour effectuer des achats partout où les cartes de crédit sont acceptées. Lorsque vous effectuez un achat, vous devrez fournir votre numéro de carte de crédit, sa date d'expiration et son code de sécurité. Il vous sera ensuite demandé de signer le reçu.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Comment payer ma facture de carte de crédit ?</ServicesH2>
          <ServicesP>
          Vous pouvez payer votre facture de carte de crédit en ligne, par la poste ou par téléphone. Pour payer en ligne, vous devrez vous connecter à votre compte et vous rendre dans la rubrique « Paiements ». Il vous sera ensuite demandé de fournir votre numéro de carte de crédit, sa date d'expiration et son code de sécurité. Il vous sera ensuite demandé de signer le reçu.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Comment savoir si je suis admissible à une carte de crédit ?</ServicesH2>
          <ServicesP>
          Pour être admissible à une carte de crédit, vous devez avoir une cote de crédit bonne à excellente. Vous devrez également avoir un revenu stable et un bon historique de crédit.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default FAQFr;
