import React from 'react';
import useContent from 'hooks/use-content';
import ShareInviteCard from 'components/shared/ShareInviteCard';
import './AboveTheFold.scss';

const AboveTheFold = () => {
  // Get content
  const { aboveTheFold: content, baseTags } = useContent();
  const { title, tagsPretext, subtitle, dateText } = content;

  // The title - three rows
  const titleRows = title.slice(0, 3).map((text, i) => {
    const classes = (() => {
      const base = `title__row${i + 1}`;
      return {
        row: base,
        frame: `${base} ${base}__frame`,
        text: `${base} ${base}__text`,
      };
    });

    return (
      <div styleName={classes.row}>
        <div styleName={classes.frame}>
          <div styleName={classes.text}>{text}</div>
        </div>
      </div>
    );
  });

  return (
    <div styleName="atf">
      <div styleName="">
        <div styleName="title">{titleRows}</div>
        <div styleName="tags">
          <div styleName="tags__pretext">{tagsPretext}</div>
          <div styleName="tags__text">{baseTags}</div>
        </div>
        <div styleName="subtitle">{subtitle}</div>
      </div>
      <ShareInviteCard />
    </div>
  );
};

export default AboveTheFold;
