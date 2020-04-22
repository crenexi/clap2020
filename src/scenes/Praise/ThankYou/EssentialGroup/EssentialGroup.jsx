import React from 'react';
import workforceGroupType from '@types/workforce-group-type';
import { FaIcon } from '@components/ui';
import './EssentialGroup.scss';

const EssentialGroup = ({ group }) => {
  const { name, icon, coverUrl, description } = group;
  const coverStyle = { backgroundImage: `url('${coverUrl}')` };

  return (
    <div styleName="group">
      <div styleName="cover-border">
        <div styleName="cover" style={coverStyle}>
          <div styleName="icon"><FaIcon icon={icon} /></div>
        </div>
      </div>
      <div styleName="main">
        <h4 styleName="name">{name}</h4>
        <div styleName="desc">{description}</div>
      </div>
    </div>
  );
};

EssentialGroup.propTypes = {
  group: workforceGroupType.isRequired,
};

export default EssentialGroup;
