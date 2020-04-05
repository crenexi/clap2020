import React from 'react';
import workforceGroupType from 'types/workforce-group';
import './FrontLineGroup.scss';

const FrontLineGroup = ({ group }) => {
  // const { name, icon, coverUrl, description } = group;

  return (
    <div styleName="group">
      Front Lines Group: {group.name}
    </div>
  );
};

FrontLineGroup.propTypes = {
  group: workforceGroupType.isRequired,
};

export default FrontLineGroup;
