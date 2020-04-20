import { icon } from '@fortawesome/fontawesome-svg-core';
import { faStarOfLife } from '@fortawesome/pro-solid-svg-icons';
import { faSpinnerThird } from '@fortawesome/pro-light-svg-icons';
import './loading.scss';

const onDocumentReady = () => {
  const ids = {
    star: 'root-loading-star',
    spinner: 'root-loading-spinner',
  };

  // Star of life icon
  (() => {
    const elm = document.getElementById(ids.star);

    if (elm) {
      const node = icon(faStarOfLife).node[0];
      elm.appendChild(node);
    }
  })();

  // Spinner icon
  (() => {
    const elm = document.getElementById(ids.spinner);

    if (elm) {
      const node = icon(faSpinnerThird, {
        classes: ['fa-spin'],
        styles: {
          'animation-duration': '350ms',
        },
      }).node[0];
      elm.appendChild(node);
    }
  })();
};

document.addEventListener('DOMContentLoaded', onDocumentReady);
