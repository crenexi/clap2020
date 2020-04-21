import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import BgCover from '../BgCover';
import Button from '../Button';
import './Error404.scss';

const Error404 = ({ backTo }) => {
  const { title, subtitle, coverUrl } = useSelector(s => s.meta.error404);

  return (
    <div styleName="frame">
      <BgCover
        url={coverUrl}
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
