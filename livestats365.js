const url = document.currentScript.src;
const domain = url.substring(0, url.lastIndexOf("/")) + "/";
window.applicationStartTime = Date.now();

const elementPoweredBy = document.getElementById("powered-by");
if (elementPoweredBy) {
  elementPoweredBy.style.display = "none";
}

var gtagHeadScript = document.createElement('script');
gtagHeadScript.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n" +
  "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n" +
  "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n" +
  "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n" +
  "})(window,document,'script','dataLayer','GTM-PWK3QWP');\n";

document.head.appendChild(gtagHeadScript);


var gtagBodyScript = document.createElement('noscript');
gtagBodyScript.innerHTML = "<iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-PWK3QWP\"\n" +
  "height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>";

document.body.appendChild(gtagBodyScript);


var fontElement = document.createElement('link');
fontElement.setAttribute('rel', "stylesheet");
fontElement.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto:300,400,500');
document.head.appendChild(fontElement);

// const awsSdk = domain + 'third-party/aws-sdk-2.756.0.min.js';
//
// var awsSdkElement = document.createElement('script');
// awsSdkElement.setAttribute('async', "");
// awsSdkElement.setAttribute('src', awsSdk);
// document.head.appendChild(awsSdkElement);

fetch(domain + 'asset-manifest.json').then(res => res.json()).then(assets => {

  const jsFiles = assets.entrypoints.filter(asset => asset.includes('static/js'));
  const cssFiles = assets.entrypoints.filter(asset => asset.includes('static/css'));

  if (jsFiles && (jsFiles.length > 0)) {
    jsFiles.forEach(src => {
      var element = document.createElement('script');

      element.setAttribute('src', domain + src);
      document.head.appendChild(element);
    });
  }

  if (cssFiles && (cssFiles.length > 0)) {
    cssFiles.forEach(src => {
      var element = document.createElement('link');

      element.setAttribute('href', domain + src);
      element.setAttribute('rel', 'stylesheet');

      document.head.appendChild(element);
    });
  }
});
