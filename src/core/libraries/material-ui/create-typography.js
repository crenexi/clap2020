import { fontFamilyBase, fontFamilyPrimary } from '@helpers/scss/exports';

// Note: this configuration should match scss core typography config
const createTypography = () => ({
  fontFamily: fontFamilyBase,
  h1: {
    fontFamily: fontFamilyPrimary,
    fontSize: '4.5rem',
    lineHeight: '1',
    fontWeight: '300',
    letterSpacing: '-1.6px',
  },
  h2: {
    fontFamily: fontFamilyPrimary,
    fontSize: '3rem',
    lineHeight: '1.1',
    fontWeight: '300',
    letterSpacing: '-.8px',
  },
  h3: {
    fontFamily: fontFamilyPrimary,
    fontSize: '2.3rem',
    lineHeight: '1.2',
    fontWeight: '400',
    letterSpacing: '0',
  },
  h4: {
    fontFamily: fontFamilyPrimary,
    fontSize: '1.7rem',
    lineHeight: '1.3',
    fontWeight: '400',
    letterSpacing: '.3px',
  },
  h5: {
    fontFamily: fontFamilyBase,
    fontSize: '1rem',
    lineHeight: '1.4',
    fontWeight: '700',
    letterSpacing: '1px',
  },
  h6: {
    fontFamily: fontFamilyBase,
    fontSize: '.8rem',
    lineHeight: '1.5',
    fontWeight: '700',
    letterSpacing: '2px',
  },
});

export default createTypography;
