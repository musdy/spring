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

  let img,video = false;
  let imgArr = [];
  document.querySelectorAll(querySelectorStr).forEach(function (item) {
    img = false;
    video = false;
    img = item.shadowRoot.querySelector('img');
    video = item.shadowRoot.querySelector('video');
    if(img){
      imgArr.push(img);
      imgSrc = img.getAttribute("src");
      img.setAttribute("data-lazyload", imgSrc);
      img.removeAttribute("src");
      img.setAttribute("loading", "lazy");
    }
    if(video){
      video.setAttribute('preload', 'none');
    }
  });
console.log(imgArr);
//}
