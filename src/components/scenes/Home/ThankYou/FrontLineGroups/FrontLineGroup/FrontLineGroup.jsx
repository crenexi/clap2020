import React from 'react';
import essentialGroupType from 'types/essential-group';
import './FrontLineGroup.scss';

const FrontLineGroup = ({ group }) => {
  const { name, icon, coverUrl, description } = group;

  return (
    <div styleName="groups">
      {name} | {icon} | {description} | {coverUrl}
    </div>
  );
};

FrontLineGroup.propTypes = {
  group: essentialGroupType.isRequired,
};

export default FrontLineGroup;
