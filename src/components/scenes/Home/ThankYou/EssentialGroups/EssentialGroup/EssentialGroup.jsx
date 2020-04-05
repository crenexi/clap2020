import React from 'react';
import essentialGroupType from 'types/essential-group';
import './EssentialGroup.scss';

const EssentialGroup = ({ group }) => {
  const { name, icon, coverUrl, description } = group;

  return (
    <div styleName="groups">
      {name} | {icon} | {description} | {coverUrl}
    </div>
  );
};

EssentialGroup.propTypes = {
  group: essentialGroupType.isRequired,
};

export default EssentialGroup;
