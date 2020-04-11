import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/shared/Button';
import FaIcon from 'components/shared/FaIcon';
import './HashtagsActions.scss';

const HashtagsActions = ({ share, copy }) => {
  const tweetButton = (
    <Button variant="ghost" click={() => share({ to: 'twitter' })}>
      <FaIcon icon="twitter" prefix="fab" />
    </Button>
  );

  const facebookButton = (
    <Button variant="ghost" click={() => share({ to: 'facebook' })}>
      <FaIcon icon="facebook-f" prefix="fab" />
    </Button>
  );

  const copyButton = (
    <Button variant="ghost" click={copy}>
      <FaIcon icon="copy" />
    </Button>
  );

  const shareButton = (
    <Button variant="ghost" click={() => share({ to: 'webAPI' })}>
      <FaIcon icon="share-alt" />
    </Button>
  );

  return (
    <div styleName="actions">
      <div styleName="actions__item">{tweetButton}</div>
      <div styleName="actions__item">{facebookButton}</div>
      <div styleName="actions__item">{copyButton}</div>
      <div styleName="actions__item">{shareButton}</div>
    </div>
  );
};

HashtagsActions.propTypes = {
  share: PropTypes.func.isRequired,
  copy: PropTypes.func.isRequired,
};

export default HashtagsActions;
