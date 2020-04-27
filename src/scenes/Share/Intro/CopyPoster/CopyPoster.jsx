import React from 'react';
import PropTypes from 'prop-types';
import posterSelectionType from '@types/poster-selection-type';
import { CopyCard } from '@components/ui';
import { PosterSelect } from '@components/campaign';
import Section from '../../Section';
import './CopyPoster.scss';

const CopyPoster = (props) => {
  const {
    title,
    brief,
    footnote,
    selection,
    selectionUrl,
    onChange,
  } = props;

  return (
    <div styleName="frame">
      <Section title={title} brief={brief}>
        <PosterSelect
          selection={selection}
          onChange={onChange}
        />
        <div styleName="main">
          <CopyCard overline="Poster URL" value={selectionUrl}>
            <div styleName="url">{selectionUrl}</div>
          </CopyCard>
        </div>
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
  selectionUrl: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CopyPoster;
