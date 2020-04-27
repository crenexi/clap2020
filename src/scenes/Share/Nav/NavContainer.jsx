import React from 'react';
import { withRouter } from 'react-router-dom';
import locationType from '@types/router-location-type';
import useBreakpoint from '@hooks/use-breakpoint';
import Nav from './Nav';

const NavContainer = ({ location }) => {
  const isGtXs = useBreakpoint('gt-xs');

  const itemsData = [
    {
      to: '/share',
      label: 'Copy',
      icon: 'globe',
      mobile: true,
    },
    {
      to: '/share/social',
      label: 'Share',
      icon: 'heartbeat',
      mobile: true,
    },
    {
      to: '/share/posters',
      label: 'Download',
      icon: 'image-polaroid',
      mobile: true,
    },
    {
      to: '/share/press',
      label: 'Press',
      icon: 'folder-download',
      mobile: false,
    },
  ];

  const processItems = () => {
    const filtered = !isGtXs ? itemsData.filter(v => v.mobile) : itemsData;

    return filtered.map((item) => {
      const active = item.to === location.pathname;
      return { ...item, active };
    });
  };

  return <Nav items={processItems()} />;
};

NavContainer.propTypes = {
  location: locationType.isRequired,
};

export default withRouter(NavContainer);
