// if(window.location.pathname.includes('/work')){
  let querySelectorStr = '';
  document.querySelectorAll('.page:not(.pinned)').forEach(function(outerEl){
      if(outerEl.querySelector('media-item')){
        if(querySelectorStr.length > 0){
          querySelectorStr += ',';
        }
        querySelectorStr += "#" + outerEl.getAttribute('id') + ' media-item';
      }
  });

  console.log(querySelectorStr);

  let img,video = false;
  document.querySelectorAll(querySelectorStr).forEach(function (item) {
    img = false;
    video = false;
    img = item.shadowRoot.querySelector('img');
    video = item.shadowRoot.querySelector('video');
    if(img){
      imgSrc = img.getAttribute("src");
      img.setAttribute("data-lazyload", imgSrc);
      img.removeAttribute("src");
      img.setAttribute("loading", "lazy");
    }
    if(video){
      video.setAttribute('preload', 'none');
    }
  });
//}
