let currentUrl = window.location.href;

function loadScripts() {
  // gtm
  var po = document.createElement("script");
  po.type = "text/javascript";
  po.async = true;
  po.src =
    "https://www.googletagmanager.com/gtag/js?id=G-DLVERCM19H&onload=gtmCallback";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(po, s);

  function gtag() {
    dataLayer.push(arguments);
  }
  function gtmCallback() {
    window.dataLayer = window.dataLayer || [];
    gtag("js", new Date());
    gtag("config", "G-DLVERCM19H");
  }

  // cookiebot
  var po2 = document.createElement("script");
  po2.id = "Cookiebot";
  po2.setAttribute("data-cbid", "5e50f5d9-e53b-4ec2-85ad-3b87f36513e3");
  po2.type = "text/javascript";
  po2.async = true;
  po2.src = "https://consent.cookiebot.com/uc.js";
  var s2 = document.getElementsByTagName("script")[0];
  s2.parentNode.insertBefore(po2, s2);

  // mailchimp script
  var po = document.createElement("script");
  po.type = "text/javascript";
  po.async = true;
  po.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(po, s);

  var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };
}

function listenersAdd() {
  signUpForm.addEventListener("reset", function (event) {
    var signUpForm2 = document.getElementById("mc-embedded-subscribe-form");
    signUpForm2.style.display = "none";
    var signUpForm = document.getElementById("mce-success-response");
    document.getElementById("mc_embed_signup").append(signUpForm);
  });
}

let querySelectorStr = "";
document.querySelectorAll(".page:not(.pinned)").forEach(function (outerEl) {
  if (outerEl.querySelector("media-item")) {
    if (querySelectorStr.length > 0) {
      querySelectorStr += ",";
    }
    querySelectorStr += "#" + outerEl.getAttribute("id") + " media-item";
  }
});

function lazyloadThese() {
  setTimeout(function () {
    let img,
      video = false;
    let imgArr = [];
    document.querySelectorAll(querySelectorStr).forEach(function (item) {
      img = false;
      video = false;
      img = item.shadowRoot.querySelector("img");
      video = item.shadowRoot.querySelector("video");
      if (img) {
        imgArr.push(img);
        imgSrc = img.getAttribute("src");
        console.log(imgSrc);
        if (!imgSrc.includes("data:image")) {
          img.setAttribute("data-lazyload", imgSrc);
          img.removeAttribute("src");
          img.setAttribute("loading", "lazy");
        }
      }
      if (video) {
        video.setAttribute("preload", "none");
      }
    });
    console.log(imgArr);

    window.addEventListener(
      "scroll",
      function (event) {
        imgArr.forEach.call(imgArr, function (img) {
          // do whatever
          if (isInViewport(img)) {
            console.log("In viewport!");
            if (
              img.getAttribute("data-lazyload") &&
              img.getAttribute("data-lazyload").length > 0
            ) {
              img.setAttribute("src", img.getAttribute("data-lazyload"));
            }
          } else {
            console.log("Nope...");
          }
        });
      },
      false
    );
  }, 2500);
}

function mailchimp() {
  // mailchimp
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = "EMAIL";
  ftypes[0] = "email";
  fnames[1] = "FNAME";
  ftypes[1] = "text";
  fnames[4] = "FIRST_NAME";
  ftypes[4] = "text";
  fnames[2] = "LAST_NAME";
  ftypes[2] = "text";
  fnames[3] = "REPORT";
  ftypes[3] = "text";
  fnames[5] = "JOB_LEVEL";
  ftypes[5] = "text";
  fnames[7] = "COUNTRY";
  ftypes[7] = "text";
  fnames[8] = "INTERESTED";
  ftypes[8] = "text";

  // mailchimp submission
  var mc1Submitted = false;
  var signUpForm = document.getElementById("mc-embedded-subscribe-form");
  console.log(signUpForm);
}

// first load
if (typeof window.sprintScriptLoaded == "undefined") {
  window.sprintScriptLoaded = true;
  loadScripts();
  lazyloadThese();
  mailchimp();
}

setInterval(function () {
  if (window.location.href !== currentUrl) {
    console.log("urlChanged");
    currentUrl = window.location.href;
    gtmCallback();
    listenersAdd();
    lazyloadThese();
    mailchimp();
  }
}, 1000);
