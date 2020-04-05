import React from 'react';
import workforceGroupType from 'types/workforce-group';
import './ResponseGroup.scss';

const ResponseGroup = ({ group }) => {
  const { name, icon, coverUrl, description } = group;

  return (
    <div styleName="group">
      {name} | {icon} | {description} | {coverUrl}
    </div>
  );
};

ResponseGroup.propTypes = {
  group: workforceGroupType.isRequired,
};

export default ResponseGroup;
