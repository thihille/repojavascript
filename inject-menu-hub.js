(function(d, script) {
  let injectHeader = () => {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    // script.src = "http://rede-dsv.xpi.com.br/portal-header/portal-header.min.js";
    script.src = "https://cdn.jsdelivr.net/gh/thihille/repojavascript@feature/inject/inject-hubxp.js";
    d.getElementsByTagName('head')[0].appendChild(script);
  };
  if (window.xpSession.complete) {
    injectHeader();
  } else {
    window.document.addEventListener('TOKEN_LOADED', () => {
      injectHeader();
    });
  }
}(document));