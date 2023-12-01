function gtag() {
  dataLayer.push(arguments);
}
function gtmCallback() {
  window.dataLayer = window.dataLayer || [];
  gtag("js", new Date());
  gtag("config", "G-DLVERCM19H");
}

// query elements even deeply within shadow doms. e.g.:
// ts-app::shadow paper-textarea::shadow paper-input-container
function querySelectorDeep(selector, root = document) {
  let currentRoot = root;
  let partials = selector.split("::shadow");
  let elems = currentRoot.querySelectorAll(partials[0]);
  for (let i = 1; i < partials.length; i++) {
    let partial = partials[i];
    let elemsInside = [];
    for (let j = 0; j < elems.length; j++) {
      let shadow = elems[j].shadowRoot;
      if (shadow) {
        const matchesInShadow = shadow.querySelectorAll(partial);
        elemsInside = elemsInside.concat([...matchesInShadow]);
      }
    }
    elems = elemsInside;
  }
  return elems;
}

function loadScripts() {
  // gtm
  var po = document.createElement("script");
  po.type = "text/javascript";
  po.async = true;
  po.src =
    "https://www.googletagmanager.com/gtag/js?id=G-DLVERCM19H&onload=gtmCallback";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(po, s);

  // cookiebot
  var po2 = document.createElement("script");
  po2.id = "Cookiebot";
  po2.setAttribute("data-cbid", "5e50f5d9-e53b-4ec2-85ad-3b87f36513e3");
  po2.type = "text/javascript";
  po2.async = true;
  po2.src = "https://consent.cookiebot.com/uc.js";
  var s2 = document.getElementsByTagName("script")[0];
  s2.parentNode.insertBefore(po2, s2);
}

function isInViewport(elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

function listenersAdd() {
  window.signUpForm.addEventListener("reset", function (event) {
    var signUpForm2 = document.getElementById("mc-embedded-subscribe-form");
    signUpForm2.style.display = "none";
    var signUpFormResponse = document.getElementById("mce-success-response");
    document.getElementById("mc_embed_signup").append(signUpFormResponse);
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
  if (window.location.pathname != "/work-1") {
    return false;
  }
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
        // console.log(imgSrc);
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
    // console.log(imgArr);

    window.addEventListener(
      "scroll",
      function (event) {
        imgArr.forEach.call(imgArr, function (img) {
          // do whatever
          if (isInViewport(img)) {
            // console.log("In viewport!");
            if (
              img.getAttribute("data-lazyload") &&
              img.getAttribute("data-lazyload").length > 0
            ) {
              img.setAttribute("src", img.getAttribute("data-lazyload"));
            }
          } else {
            // console.log("Nope...");
          }
        });
      },
      false
    );
  }, 2500);
}

function mailchimp() {
  if (document.getElementById("mc-embedded-subscribe-form") == null) {
    return true;
  }

  console.log('callled mailchimp');

  // mailchimp script
  var po = document.createElement("script");
  po.type = "text/javascript";
  po.async = true;
  po.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(po, s);

  // console.log(document.getElementById("mc-embedded-subscribe-form"));
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
  let signUpForm = document.getElementById("mc-embedded-subscribe-form");
//   let signUpFormOverlay = document.getElementById('mc-embedded-subscribe-form2');
  //   console.log(signUpForm);

//   signUpFormOverlay.addEventListener("reset", function (event) {
//     var signUpForm3 = document.getElementById("mc-embedded-subscribe-form2");
//     signUpForm3.style.display = "none";
//     var signUpFormResponse4 = document.getElementById("mce-success-response-overlay");
//     document.getElementById("mc_embed_signup_overlay").append(signUpFormResponse4);
//   });

  signUpForm.addEventListener("reset", function (event) {
    var signUpForm2 = document.getElementById("mc-embedded-subscribe-form");
    signUpForm2.style.display = "none";
    var signUpFormResponse = document.getElementById("mce-success-response");
    document.getElementById("mc_embed_signup").append(signUpFormResponse);

    console.log(window.onSuccessfulMailchimpSubmitUrl);
    if(window.onSuccessfulMailchimpSubmitUrl){
        window.open(window.onSuccessfulMailchimpSubmitUrl, "_blank");

        setTimeout(function() {
            // document.getElementById('mce-EMAIL').value
            setCookie('newsletterSubmission','true', 365);
            window.onSuccessfulMailchimpSubmitUrl = false;
            document.getElementById("D0470220286").style.display = "none";
        }, 2000);
    }
  });
}

function culturePage() {
  setTimeout(function () {
    let aHrefArray = [];
    querySelectorDeep("column-set").forEach(function (outerEl) {
      let columnUnits = querySelectorDeep("column-unit", outerEl);
      columnUnits.forEach(function (outerEl2) {
        let allAs = querySelectorDeep("a", outerEl2);
        allAs.forEach(function (outerEl3) {
          if (outerEl3.textContent.toUpperCase().indexOf("DOWNLOAD") !== -1) {
            // console.log(outerEl3);
            aHrefArray.push(outerEl3);
          }
        });
      });
    });

    aHrefArray.forEach((element) =>
      element.addEventListener("click", function (e) {
        var x = getCookie('newsletterSubmission');
        if (!x) {
            e.preventDefault();
            document.getElementById("D0470220286").style.display = "flex";
            window.onSuccessfulMailchimpSubmitUrl = e.target.getAttribute('href');
        }
        return false;
      })
    );
  }, 600);



  document.querySelector('.email-newsletter-close').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById("D0470220286").style.display = "none";
    return false;
  });
}

function restartPage() {
  lazyloadThese();
  mailchimp();
//   listenersAdd();
//   studiosFilters();
  culturePage();
}

// first load
if (typeof window.sprintScriptLoaded == "undefined") {
  window.sprintScriptLoaded = true;
  window.currentUrl = window.location.href;
  loadScripts();
  restartPage();
}

setInterval(function () {
  if (window.location.href !== window.currentUrl) {
    window.currentUrl = window.location.href;
    gtmCallback();
    restartPage();
  }
}, 1000);




function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}




// function studiosFilters() {
//   if (!document.location.pathname.includes("studios")) {
//     return false;
//   }

//   let bodycopy;
//   document
//     .querySelectorAll("#T3493764319, #K1575982813, #N1067787774")
//     .forEach(function (outerEl) {
//       bodycopy = outerEl.querySelector("bodycopy");
//       if (bodycopy) {
//         bodycopy.style.maxHeight = "25px";
//       }
//       outerEl.addEventListener("click", function (e) {
//         console.log(e.target.closest("bodycopy"));
//         if (
//           window.getComputedStyle(e.target.closest("bodycopy")).maxHeight ==
//           "25px"
//         ) {
//           e.target.closest("bodycopy").style.maxHeight = "100%";
//         } else {
//           e.target.closest("bodycopy").style.maxHeight = "25px";
//         }
//       });
//     });
// }

//   document.onkeydown = function (evt) {
//     evt = evt || window.event;
//     var isEscape = false;
//     if ("key" in evt) {
//       isEscape = evt.key === "Escape" || evt.key === "Esc";
//     } else {
//       isEscape = evt.keyCode === 27;
//     }
//     if (isEscape) {
//       document.getElementById("D0470220286").style.display = "none";
//     }
//   };
