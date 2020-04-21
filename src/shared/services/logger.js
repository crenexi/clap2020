import debug from 'debug';
import appSettings from 'config/app-settings';

// Should be the same as declared in main.jsx
const debugPrefix = appSettings.debugPrefix;

const levelColors = {
  trace: 'lightblue',
  info: 'blue',
  warn: 'pink',
  error: 'red',
};

/** Helper to create debug log */
const createMessage = (level, { msg, src, color }) => {
  const namespace = `${debugPrefix}:${level}`;
  const createDebug = debug(namespace);

  createDebug.color = color || levelColors[level];

  if (src) {
    createDebug(src, msg);
  } else {
    createDebug(msg);
  }
};

const Logger = (() => {
  const trace = (msg, src, color) => {
    createMessage('trace', { msg, src, color });
  };

  const info = (msg, src, color) => {
    createMessage('info', { msg, src, color });
  };

  const warn = (msg, src, color) => {
    createMessage('warn', { msg, src, color });
  };

  const error = (msg, src, color) => {
    createMessage('error', { msg, src, color });
  };

  const group = console.group; // eslint-disable-line no-console
  const groupEnd = console.groupEnd; // eslint-disable-line no-console

  return { trace, info, warn, error, group, groupEnd };
})();

export default Logger;
