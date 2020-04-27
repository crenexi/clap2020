import React from 'react';
import classNames from 'classnames';
import PropTypes, { arrayOf } from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import './QuickNavBar.scss';

const QuickNavBar = ({ items, inverted }) => {
  const styleName = classNames('bar', {
    'bar--inverted': inverted,
  });

  return (
    <div styleName={styleName}>
      <div styleName="nav">
        {items.map(item => (
          <div styleName="nav-item" key={uniqueId()}>{item}</div>
        ))}
      </div>
    </div>
  );
};

QuickNavBar.propTypes = {
  items: arrayOf(PropTypes.node).isRequired,
  inverted: PropTypes.bool,
};

QuickNavBar.defaultProps = {
  inverted: false,
};

export default QuickNavBar;
