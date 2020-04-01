import React from 'react';
import { arrayOf } from 'prop-types';
import warConditionType from 'types/war-condition';
import './WarConditions.scss';

const WarConditions = ({ conditions }) => (
  <div styleName="conditions">
    test
  </div>
);

WarConditions.propTypes = {
  conditions: arrayOf(warConditionType).isRequired,
};

export default WarConditions;
