var injectCssHubxp = `
  <style>
    body {
      margin: 0;
    }
    .hidden-scroll {
      overflow: hidden;
    }
    .hpx-menu {
      position: fixed;
      display: flex;
      height: 100vh;
      top: 0;
      z-index: 999;
    }
    .hpx-menu nav {
      min-width: 70px;
      background: #111;
      color: white;
      transition: all .2s ease;
    }
    .hpx-menu nav:hover {
      min-width: 246px;
    }
    .hpx-menu nav:hover ~ .overlay {
      width: 100vw;
      display: block;
      background: rgba(0,0,0,.3);
      overflow: hidden;
    }
    .hpx-menu .overlay {
      width: 0px;
      flex-grow: 1;
      background-color: rgba(0,0,0,0);  
      transition: background-color .5s ease;
    }
    .animate-in {
      position: absolute;
      margin-left: 150px;
      transition: margin .2s ease;
    }
    .animate-out {
      position: absolute;
      margin-left: 0px;
      transition: margin .2s ease;
    }
  </style>
`;

var injectHtmlHubxp = `
  <div class="hpx-menu">
    <nav>nav</nav>
    <div class="overlay"></div>
  </div>
`;

var countDivs = document.body.childElementCount;
document.body.innerHTML += injectHtmlHubxp;
document.getElementsByTagName('head')[0].innerHTML += injectCssHubxp; 

var menu = document.querySelector(".hpx-menu");
menu.addEventListener('mouseover',function(){
  for(var x = 0; x < countDivs; x++){
    document.body.children[x].nodeName == "div" ? (
      document.body.children[x].classList.add('animate-in')
    ) : '';
  }
  document.body.classList.add('hidden-scroll');
});
menu.addEventListener('mouseleave',function(){
  for(var x = 0; x < countDivs; x++){
    document.body.children[x].nodeName == "div" ? (
      document.body.children[x].classList.remove('animate-in'),
      document.body.children[x].classList.add('animate-out')
    ) : '';
  }
  const transition = document.querySelector('.animate-out');
  transition.addEventListener('transitionend', () => {
    menu.nextElementSibling.classList.remove('animate-out');
  });
});
