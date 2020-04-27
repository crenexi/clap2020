import logger from './logger';

/** Copy to clipboard - fallback */
const copyToClipboardFallback = (str) => {
  const errMsg = '(Fallback) Copying to clipboard failed.';
  const textAreaElm = document.createElement('textarea');
  textAreaElm.value = str;

  // Avoid scrolling to bottom
  textAreaElm.style.top = '0';
  textAreaElm.style.left = '0';
  textAreaElm.style.position = 'fixed';

  document.body.appendChild(textAreaElm);
  textAreaElm.focus();
  textAreaElm.select();

  try {
    const successful = document.execCommand('copy');
    if (!successful) logger.warn(errMsg);
  } catch (err) {
    logger.error(errMsg, err);
  }

  document.body.removeChild(textAreaElm);
};

/** Copy to clipboard - using Clipboard API */
const copyToClipboard = str => new Promise((resolve, reject) => {
  // Fallback on textarea solution
  if (!navigator.clipboard) {
    copyToClipboardFallback(str);
    resolve();
  }

  // Use Clipboard API
  const errMsg = '(Async) Copying to clipboard failed';
  navigator.clipboard.writeText(str)
    .then(resolve)
    .catch((err) => {
      logger.error(errMsg, err);
      reject(err);
    });
});

/** Handle the copy */
const copy = (str) => {
  if (!str) {
    const errMsg = `Invalid 'str' supplied to CopyService.copy`;
    logger.error(errMsg);
    return null;
  }

  // Returns a promise, or just returns if fallback is used
  return copyToClipboard(str);
};

const copyService = { copy };

export default copyService;
