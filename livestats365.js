
(() => {
  "use strict";

  const currentScript = document.currentScript;
  if (!currentScript || !currentScript.src) return;

  const domain = new URL("./", currentScript.src).href;
  window.applicationStartTime = Date.now();

  // DARK THEME
  const darkStyle = document.createElement("style");
  darkStyle.textContent = `
    html,
    body,
    #root,
    #app,
    #powered-by {
      background-color: #1a1a1a !important;
      color: #ffffff !important;
    }

    body {
      margin: 0;
      min-height: 100vh;
    }

    #root,
    #app {
      width: 100%;
      max-width: 100%;
    }

    .card,
    .container,
    .widget,
    .panel,
    .content,
    .table,
    .modal,
    header,
    main,
    section {
      background-color: #1a1a1a !important;
      color: #ffffff !important;
    }

    p, span, label, h1, h2, h3, h4, h5, h6,
    td, th, li {
      color: inherit;
    }

    a {
      color: #8ab4f8;
    }

    input, select, textarea, button {
      background-color: #242424;
      color: #ffffff;
      border-color: #444444;
    }
  `;
  document.head.appendChild(darkStyle);

  // Hide Powered By element if present
  const poweredBy = document.getElementById("powered-by");
  if (poweredBy) {
    poweredBy.style.display = "none";
  }

  // Load Roboto font
  const fontElement = document.createElement("link");
  fontElement.rel = "stylesheet";
  fontElement.href =
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500";
  document.head.appendChild(fontElement);

  // Load the original application assets
  fetch(domain + "asset-manifest.json")
    .then(response => {
      if (!response.ok) {
        throw new Error(
          "Failed to load asset-manifest.json: " + response.status
        );
      }
      return response.json();
    })
    .then(assets => {
      const entrypoints = Array.isArray(assets.entrypoints)
        ? assets.entrypoints
        : [];

      // Load CSS first
      entrypoints
        .filter(file => file.endsWith(".css"))
        .forEach(file => {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = new URL(file, domain).href;
          document.head.appendChild(link);
        });

      // Load application JavaScript
      entrypoints
        .filter(file => file.endsWith(".js"))
        .forEach(file => {
          const script = document.createElement("script");
          script.src = new URL(file, domain).href;
          script.async = false;
          document.body.appendChild(script);
        });
    })
    .catch(error => {
      console.error("Live Stats application failed to load:", error);
    });
})();
