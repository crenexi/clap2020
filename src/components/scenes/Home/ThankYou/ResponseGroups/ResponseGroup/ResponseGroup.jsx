import React from 'react';
import workforceGroupType from 'types/workforce-group';
import FaIcon from 'components/shared/FaIcon';
import './ResponseGroup.scss';

const ResponseGroup = ({ group }) => {
  // const { name, icon, coverUrl, description } = group;
  const { icon } = group;

  return (
    <div styleName="group">
      Response Group: {group.name}
      <FaIcon icon={icon} />
    </div>
  );
};

ResponseGroup.propTypes = {
  group: workforceGroupType.isRequired,
};

export default ResponseGroup;
