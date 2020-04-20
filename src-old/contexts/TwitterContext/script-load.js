import loadScript from 'load-script';
import scriptConfig from './script-config';

const scriptLoad = () => new Promise((resolve, reject) => {
  loadScript(scriptConfig.url, err => (err ? reject(err) : resolve()));
});

export default scriptLoad;
