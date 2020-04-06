import React from 'react';
import workforceGroupType from 'types/workforce-group';
import FaIcon from 'components/shared/FaIcon';
import './FrontLineGroup.scss';

const FrontLineGroup = ({ group }) => {
  // const { name, icon, coverUrl, description } = group;
  const { icon } = group;

  return (
    <div styleName="group">
      Front Lines Group: {group.name}
      <FaIcon icon={icon} />
    </div>
  );
};

FrontLineGroup.propTypes = {
  group: workforceGroupType.isRequired,
};

export default FrontLineGroup;
