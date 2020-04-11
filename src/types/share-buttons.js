import { shape } from 'prop-types';
import shareButtonType from './share-button';

const shareButtons = shape({
  twitter: shareButtonType.isRequired,
  facebook: shareButtonType.isRequired,
  instagram: shareButtonType.isRequired,
  whatsapp: shareButtonType.isRequired,
  linkedin: shareButtonType.isRequired,
  reddit: shareButtonType.isRequired,
  email: shareButtonType.isRequired,
  share: shareButtonType.isRequired,
  copy: shareButtonType.isRequired,
});

export default shareButtons;
