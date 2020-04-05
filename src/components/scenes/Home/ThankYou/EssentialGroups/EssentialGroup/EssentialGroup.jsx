import React from 'react';
import workforceGroupType from 'types/workforce-group';
import './EssentialGroup.scss';

const EssentialGroup = ({ group }) => {
  const { name, icon, coverUrl, description } = group;

  return (
    <div styleName="group">
      {name} | {icon} | {description} | {coverUrl}
    </div>
  );
};

EssentialGroup.propTypes = {
  group: workforceGroupType.isRequired,
};

export default EssentialGroup;
