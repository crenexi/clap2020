import React from 'react';
import { arrayOf } from 'prop-types';
import essentialGroupType from 'types/essential-group';
import FrontLineGroup from './FrontLineGroup';
import './FrontLineGroups.scss';

const FrontLineGroups = ({ groups }) => {
  return (
    <div styleName="groups">
      {groups.map(group => <FrontLineGroup group={group} />)}
    </div>
  );
};

FrontLineGroups.propTypes = {
  groups: arrayOf(essentialGroupType).isRequired,
};

export default FrontLineGroups;
