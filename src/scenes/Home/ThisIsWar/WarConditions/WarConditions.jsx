import React from 'react';
import { arrayOf } from 'prop-types';
import warConditionType from '@types/war-condition-type';
import { FaIcon } from '@components/ui';
import './WarConditions.scss';

const WarConditions = ({ conditions }) => (
  <div styleName="conditions">
    <div styleName="conditions__grid">
      {conditions.map(({ icon, title, subtitle }) => (
        <div styleName="condition" key={icon}>
          <div styleName="condition__icon">
            <FaIcon icon={icon} />
          </div>
          <div styleName="condition__title">{title}</div>
          <div styleName="condition__subtitle">{subtitle}</div>
        </div>
      ))}
    </div>
  </div>
);

WarConditions.propTypes = {
  conditions: arrayOf(warConditionType).isRequired,
};

export default WarConditions;
