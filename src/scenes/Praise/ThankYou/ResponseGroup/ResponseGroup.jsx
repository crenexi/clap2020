import React from 'react';
import workforceGroupType from '@types/workforce-group-type';
import { FaIcon } from '@components/ui';
import './ResponseGroup.scss';

const ResponseGroup = ({ group }) => {
  const { name, icon, coverUrl, description } = group;
  const coverStyle = { backgroundImage: `url('${coverUrl}')` };

  return (
    <div styleName="group">
      <div styleName="cover" style={coverStyle}>
        <div styleName="icon"><FaIcon icon={icon} /></div>
      </div>
      <div styleName="main">
        <h3 styleName="name">{name}</h3>
        <div styleName="desc">{description}</div>
      </div>
    </div>
  );
};

ResponseGroup.propTypes = {
  group: workforceGroupType.isRequired,
};

export default ResponseGroup;
