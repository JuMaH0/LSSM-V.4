const script = document.createElement('script');
// eslint-disable-next-line no-undef
script.src = `${host}${I18n.locale}/core.js`;
script.setAttribute('type', 'module');
script.setAttribute('async', '');
document.querySelector('body').appendChild(script);