import React from 'react';
import workforceGroupType from 'types/workforce-group';
import FaIcon from 'components/shared/FaIcon';
import './FrontLineGroup.scss';

const FrontLineGroup = ({ group }) => {
  const { name, icon, coverUrl, description } = group;
  const coverStyle = { backgroundImage: `url('${coverUrl}')` };

  return (
    <div styleName="group">
      <div styleName="group__card">
        <div styleName="group__cover" style={coverStyle} />
        <div styleName="group__icon">
          <FaIcon icon={icon} />
        </div>
        <div styleName="group__main">
          <div styleName="group__name">{name}</div>
          <div styleName="group__desc">{description}</div>
        </div>
      </div>
    </div>
  );
};

FrontLineGroup.propTypes = {
  group: workforceGroupType.isRequired,
};

export default FrontLineGroup;
