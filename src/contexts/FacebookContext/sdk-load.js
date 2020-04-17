import loadScript from 'load-script';
import sdkConfig from './sdk-config';

const sdkLoad = () => new Promise((resolve, reject) => {
  window.fbAsyncInit = () => {
    window.FB.init({
      appId: sdkConfig.appId,
      version: sdkConfig.version,
      xfbml: true,
    });
  };

  loadScript(sdkConfig.sdkUrl, err => (err ? reject(err) : resolve()));
});

export default sdkLoad;
