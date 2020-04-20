import logger from './logger';

/** Share to Web API */
const shareToWebAPI = payload => new Promise((resolve) => {
  logger.info(`SHARING TO WEBAPI: ${payload}`);
  resolve(payload);
});

/** Share to  */
const shareToTwitter = payload => new Promise((resolve) => {
  logger.info(`SHARING TO TWITTER: ${payload}`);
  resolve(payload);
});

/** Share to Facebook */
const shareToFacebook = payload => new Promise((resolve) => {
  logger.info(`SHARING TO FACEBOOK: ${payload}`);
  resolve(payload);
});

/** Share to Instagram */
const shareToInstagram = payload => new Promise((resolve) => {
  logger.info(`SHARING TO INSTAGRAM: ${payload}`);
  resolve(payload);
});

/** Share to WhatsApp */
const shareToWhatsApp = payload => new Promise((resolve) => {
  logger.info(`SHARING TO WHATSAPP: ${payload}`);
  resolve(payload);
});

/** Share to LinkedIn */
const shareToLinkedIn = payload => new Promise((resolve) => {
  logger.info(`SHARING TO LINKEDIN: ${payload}`);
  resolve(payload);
});

/** Share to Reddit */
const shareToReddit = payload => new Promise((resolve) => {
  logger.info(`SHARING TO REDDIT: ${payload}`);
  resolve(payload);
});

/** Share to email */
const shareToEmail = payload => new Promise((resolve) => {
  logger.info(`SHARING TO EMAIL: ${payload}`);
  // window.open(url , '_blank');
  resolve(payload);
});

/** Central point to receive payload and share to specified platform */
const share = ({ to, payload }) => {
  if (!to) {
    throw Error(`Invalid 'to' supplied to ShareService.share`);
  }

  if (!payload) {
    throw Error(`Invalid 'payload' supplied to ShareService.share`);
  }

  switch (to) {
    case 'webAPI':
      return shareToWebAPI(payload);
    case 'twitter':
      return shareToTwitter(payload);
    case 'facebook':
      return shareToFacebook(payload);
    case 'instagram':
      return shareToInstagram(payload);
    case 'whatsapp':
      return shareToWhatsApp(payload);
    case 'linkedin':
      return shareToLinkedIn(payload);
    case 'reddit':
      return shareToReddit(payload);
    case 'email':
      return shareToEmail(payload);
    default:
      throw Error(`Sharing target ${to} not supported`);
  }
};

const shareService = { share };

export default shareService;
