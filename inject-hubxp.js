alert('rodou');
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
  <div class="hpx-menu" onmouseover="document.body.classList.add('teste');" onmouseout="document.body.classList.remove('teste');">
    <nav>nav</nav>
    <div class="overlay"></div>
  </div>
  <div class="content">
    <img src="https://placeimg.com/720/250/people" alt="" class="">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nulla mollis, efficitur urna nec, viverra dolor. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent efficitur finibus eros sit amet sagittis. Ut sollicitudin sodales neque et volutpat. Curabitur dictum ante vel fermentum volutpat. Curabitur ac neque et erat viverra egestas.</p>
  </div>
`;

document.body.innerHTML = injectHtmlHubxp;
document.getElementsByTagName('head')[0].innerHTML += injectCssHubxp; 

var menu = document.querySelector(".hpx-menu");
menu.addEventListener('mouseover',function(){
  document.body.classList.add('hidden-scroll');
  menu.nextElementSibling.classList.add("animate-in");
  const transition = document.querySelector('.animate-in');
});
menu.addEventListener('mouseleave',function(){
  menu.nextElementSibling.classList.remove('animate-in');
  menu.nextElementSibling.classList.add("animate-out");
  const transition = document.querySelector('.animate-out');
  transition.addEventListener('transitionend', () => {
    menu.nextElementSibling.classList.remove('animate-out');
  });
});
