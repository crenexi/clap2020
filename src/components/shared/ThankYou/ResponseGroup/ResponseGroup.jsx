import React from 'react';
import workforceGroupType from 'types/workforce-group';
import FaIcon from 'components/shared/FaIcon';
import './ResponseGroup.scss';

const ResponseGroup = ({ group }) => {
  const { name, icon, coverUrl, description } = group;
  const coverStyle = { backgroundImage: `url('${coverUrl}')` };

  return (
    <div styleName="group">
      <div styleName="group__cover" style={coverStyle}>
        <div styleName="group__icon"><FaIcon icon={icon} /></div>
      </div>
      <div styleName="group__main">
        <h3 styleName="group__name">{name}</h3>
        <div styleName="group__desc">{description}</div>
      </div>
    </div>
  );
};

ResponseGroup.propTypes = {
  group: workforceGroupType.isRequired,
};

export default ResponseGroup;