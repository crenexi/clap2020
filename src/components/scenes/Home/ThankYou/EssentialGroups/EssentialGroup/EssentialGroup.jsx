import React from 'react';
import workforceGroupType from 'types/workforce-group';
import FaIcon from 'components/shared/FaIcon';
import './EssentialGroup.scss';

const EssentialGroup = ({ group }) => {
  // const { name, icon, coverUrl, description } = group;
  const { icon } = group;

  return (
    <div styleName="group">
      Essential Group: {group.name}
      <FaIcon icon={icon} />
    </div>
  );
};

EssentialGroup.propTypes = {
  group: workforceGroupType.isRequired,
};

export default EssentialGroup;
