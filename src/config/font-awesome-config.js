import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faAmbulance,
  faBrain,
  faCalendarPlus,
  faCoffee,
  faCopy,
  faDownload,
  faExpand,
  faFileImage,
  faFilePdf,
  faFolderOpen,
  faGlobe,
  faHandsHeart,
  faHandsWash,
  faHashtag,
  faHeadSideCough,
  faHeadSideMask,
  faHeadSideVirus,
  faHospital,
  faHospitals,
  faHourglassStart,
  faIdBadge,
  faImage,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faLungs,
  faLungsVirus,
  faMedal,
  faMicroscope,
  faProcedures,
  faRectangleLandscape,
  faRectanglePortrait,
  faShareAlt,
  faShieldVirus,
  faUserMd,
  faUserNurse,
  faViruses,
} from '@fortawesome/pro-light-svg-icons';

const buildLibrary = () => {
  library.add(
    faAmbulance,
    faBrain,
    faCalendarPlus,
    faCoffee,
    faCopy,
    faDownload,
    faExpand,
    faFileImage,
    faFilePdf,
    faFolderOpen,
    faGlobe,
    faHandsHeart,
    faHandsWash,
    faHashtag,
    faHeadSideCough,
    faHeadSideMask,
    faHeadSideVirus,
    faHospital,
    faHospitals,
    faHourglassStart,
    faIdBadge,
    faImage,
    faLongArrowAltLeft,
    faLongArrowAltRight,
    faLungs,
    faLungsVirus,
    faMedal,
    faMicroscope,
    faProcedures,
    faRectangleLandscape,
    faRectanglePortrait,
    faShareAlt,
    faShieldVirus,
    faUserMd,
    faUserNurse,
    faViruses,
  );
};

export default { buildLibrary };
