import logger from './logger';

const ShareService = () => {
  /** Share to Web API */
  const shareToWebAPI = (payload) => {
    const promise = new Promise();
    logger.info(`SHARING TO WEBAPI: ${payload}`);

    return promise.resolve();
  };

  /** Share to  */
  const shareToTwitter = (payload) => {
    const promise = new Promise();
    logger.info(`SHARING TO TWITTER: ${payload}`);

    return promise.resolve();
  };

  /** Share to Facebook */
  const shareToFacebook = (payload) => {
    const promise = new Promise();
    logger.info(`SHARING TO FACEBOOK: ${payload}`);

    return promise.resolve();
  };

  /** Share to Instagram */
  const shareToInstagram = (payload) => {
    const promise = new Promise();
    logger.info(`SHARING TO INSTAGRAM: ${payload}`);

    return promise.resolve();
  };

  /** Share to WhatsApp */
  const shareToWhatsApp = (payload) => {
    const promise = new Promise();
    logger.info(`SHARING TO WHATSAPP: ${payload}`);

    return promise.resolve();
  };

  /** Share to LinkedIn */
  const shareToLinkedIn = (payload) => {
    const promise = new Promise();
    logger.info(`SHARING TO LINKEDIN: ${payload}`);

    return promise.resolve();
  };

  /** Share to Reddit */
  const shareToReddit = (payload) => {
    const promise = new Promise();
    logger.info(`SHARING TO REDDIT: ${payload}`);

    return promise.resolve();
  };

  /** Central point to receive payload and share to specified platform */
  const share = ({ to, payload }) => {
    if (!to) {
      logger.error(`Invalid 'to' supplied to ShareService.share`);
      return null;
    }

    if (!payload) {
      logger.error(`Invalid 'payload' supplied to ShareService.share`);
      return null;
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
      default:
        logger.error(`Sharing target ${to} not supported`);
        return null;
    }
  };

  return { share };
};

export default new ShareService();
