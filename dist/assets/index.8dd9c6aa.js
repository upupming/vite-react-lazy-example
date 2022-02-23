import { j as jsxRuntime, R as React, a as ReactDOM, B as BrowserRouter, L as Link, b as Routes, c as Route, r as react } from "./vendor.96c05b7a.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
var index = "";
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Page1 = React.lazy(() => __vitePreload(() => import("./Page1.5e56db5f.js"), true ? ["assets/Page1.5e56db5f.js","assets/Page1.42974316.css","assets/vendor.96c05b7a.js"] : void 0));
const Page2 = React.lazy(() => __vitePreload(() => import("./Page2.27ae5146.js"), true ? ["assets/Page2.27ae5146.js","assets/Page2.9a0edd85.css","assets/vendor.96c05b7a.js"] : void 0));
ReactDOM.render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsxs(BrowserRouter, {
    children: [/* @__PURE__ */ jsxs("ul", {
      children: [/* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx(Link, {
          to: "/Page1",
          children: "Page1"
        })
      }), /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx(Link, {
          to: "/Page2",
          children: "Page2"
        })
      })]
    }), /* @__PURE__ */ jsxs(Routes, {
      children: [/* @__PURE__ */ jsx(Route, {
        path: "/Page1",
        element: /* @__PURE__ */ jsxs(react.exports.Suspense, {
          fallback: null,
          children: [" ", /* @__PURE__ */ jsx(Page1, {})]
        })
      }, "/Page1"), /* @__PURE__ */ jsx(Route, {
        path: "/Page2",
        element: /* @__PURE__ */ jsxs(react.exports.Suspense, {
          fallback: null,
          children: [" ", /* @__PURE__ */ jsx(Page2, {})]
        })
      }, "/Page2")]
    })]
  })
}), document.getElementById("root"));
export { jsx as j };
