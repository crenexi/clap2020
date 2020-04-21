import React from 'react';
import PropTypes from 'prop-types';
import useContent from 'hooks/use-content';
import BgCover from 'components/shared/BgCover';
import Button from 'components/shared/Button';
import './Error404.scss';

const Error404 = ({ backTo }) => {
  const { uiContent } = useContent();
  const { error404CoverUrl } = uiContent.meta;

  const title = `That's strange.`;
  const subtitle = `You've reached an alternate reality. Something's wrong.`;

  return (
    <div styleName="frame">
      <BgCover
        url={error404CoverUrl}
        imagePosition="60% 60%"
        blanketColor="rgba(0, 0, 0, .5)"
      >
        <div styleName="main">
          <div styleName="main__404">404</div>
          <h1 styleName="main__title">{title}</h1>
          <div styleName="main__subtitle">{subtitle}</div>
          <div styleName="main__action">
            <Button
              variant="white"
              size="large"
              startIcon="arrow-circle-left"
              to={backTo}
            >
              Back to Reality
            </Button>
          </div>
        </div>
      </BgCover>
    </div>
  );
};

Error404.propTypes = {
  backTo: PropTypes.string,
};

Error404.defaultProps = {
  backTo: '/',
};

export default Error404;
