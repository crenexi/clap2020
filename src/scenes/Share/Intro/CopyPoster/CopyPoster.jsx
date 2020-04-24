import React from 'react';
import PropTypes from 'prop-types';
import posterSelectionType from '@types/poster-selection-type';
import { PosterSelect } from '@components/campaign';
import Section from '../../Section';
import './CopyPoster.scss';

const CopyPoster = (props) => {
  const { title, brief, footnote, selection, onFormatChange } = props;

  return (
    <div styleName="frame">
      <Section title={title} brief={brief}>
        <PosterSelect
          selection={selection}
          onFormatChange={onFormatChange}
        />
        <div styleName="footnote">
          <p>{footnote}</p>
        </div>
      </Section>
    </div>
  );
};

CopyPoster.propTypes = {
  title: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  footnote: PropTypes.string.isRequired,
  selection: posterSelectionType.isRequired,
  onFormatChange: PropTypes.func.isRequired,
};

export default CopyPoster;
