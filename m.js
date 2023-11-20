if(window.location.pathname.includes('/work')){
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

  let img = false;
  document.querySelectorAll(querySelectorStr).forEach(function (item) {
    img = false;
    img = item.shadowRoot.querySelector('img');
    if(img){
      imgSrc = img.getAttribute("src");
      img.setAttribute("data-lazyload", imgSrc);
      img.setAttribute("src", "");
      img.setAttribute("loading", "lazy");
    }
  });
}
