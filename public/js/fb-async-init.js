const appId = '695552234520545';

function fbAsyncInit() {
  FB.init({
    appId: appId,
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v6.0',
  });
}

window.fbAsyncInit = fbAsyncInit;
