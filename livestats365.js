
const currentScript = document.currentScript;
const url = currentScript ? currentScript.src : "";
const domain = url ? url.substring(0, url.lastIndexOf("/") + 1) : "";
window.applicationStartTime = Date.now();

// DARK BACKGROUND
const darkStyle = document.createElement("style");
darkStyle.textContent = `
  html, body {
    background-color: #1a1a1a !important;
    color: #ffffff;
    margin: 0;
    min-height: 100%;
  }

  #root, #app, #main, .App, .app {
    background-color: #1a1a1a;
  }

  #powered-by {
    display: none !important;
  }
`;
(document.head || document.documentElement).appendChild(darkStyle);

const elementPoweredBy = document.getElementById("powered-by");
if (elementPoweredBy) {
  elementPoweredBy.style.display = "none";
}

// PREVENT ORDINARY EXTERNAL LINK NAVIGATION
document.addEventListener("click", function (event) {
  const link = event.target.closest("a[href]");
  if (!link) return;

  try {
    const targetUrl = new URL(link.href, window.location.href);

    if (
      /^https?:$/.test(targetUrl.protocol) &&
      targetUrl.origin !== window.location.origin
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
  } catch (error) {
    // Ignore invalid URLs.
  }
}, true);

// LOAD APPLICATION ASSETS
if (domain) {
  fetch(domain + "asset-manifest.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Could not load asset-manifest.json");
      }
      return response.json();
    })
    .then(assets => {
      const entrypoints = assets.entrypoints || [];

      entrypoints
        .filter(asset => asset.endsWith(".css"))
        .forEach(src => {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = new URL(src, domain).href;
          document.head.appendChild(link);
        });

      entrypoints
        .filter(asset => asset.endsWith(".js"))
        .forEach(src => {
          const script = document.createElement("script");
          script.src = new URL(src, domain).href;
          script.async = false;
          document.head.appendChild(script);
        });
    })
    .catch(error => {
      console.error("Live stats application failed to load:", error);
    });
}
