import React from 'react';
import brandPlatformType from '@types/brand-platform-type';
import { FaIcon } from '@components/ui';
import './Item.scss';

const Item = ({ platform }) => {
  const { id, name, url, icon } = platform;

  return (
    <div styleName="item" key={id}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div styleName="circle">
          <div styleName="icon">
            <FaIcon icon={icon} prefix="fab" />
          </div>
        </div>
        <div styleName="label">
          <div styleName="label-text">{name}</div>
          <FaIcon icon="external-link" />
        </div>
      </a>
    </div>
  );
};

Item.propTypes = {
  platform: brandPlatformType.isRequired,
};

export default Item;
