// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"h8Y2N":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"igcvL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _atomicus = require("atomicus");
var _viewsJs = require("./views.js");
var _modelJs = require("./Model.js");
var _pubJs = require("./Pub.js");
var _pubJsDefault = parcelHelpers.interopDefault(_pubJs);
const cache = new Map();
const app = document.getElementById("container--main");
function scrollTo(el) {
    const l = setTimeout(()=>{
        el.scrollTop = el.scrollHeight;
        // console.log(el.scrollHeight)
        //    cache['app'] = app.innerHTML;
        clearTimeout(l);
    }, 500);
}
// app.appendChild(innerEmptyDiv);
const router = (state)=>{
    if (cache.has(state.route)) {
        if (app.innerHTML !== "") (0, _atomicus.clearEl)(app);
        app.appendChild(cache.get(state.route));
        scrollTo(app);
        //   console.log("returning early")
        return;
    }
    switch(state.route){
        case "main":
            // clearEl(app);
            const m = (0, _viewsJs.Main)((0, _modelJs.projects), (0, _modelJs.MoreWork));
            app.appendChild(m);
            cache.set("main", m);
            break;
        case "project":
            (0, _atomicus.clearEl)(app);
            app.appendChild((0, _viewsJs.Project)(state.data));
            break;
        default:
            break;
    }
};
router({
    route: "main",
    data: null
});
(0, _pubJsDefault.default).subscribe("Router", (data)=>{
    // console.log(data); 
    router(data);
});

},{"atomicus":"9iIp8","./views.js":"6R9Zu","./Model.js":"5I6wk","./Pub.js":"BUIp7","@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"9iIp8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clearEl", ()=>clearEl);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "PubSub", ()=>PubSub);
function IsDom(element) {
    return element instanceof Element;
}
function clearEl(el) {
    while(el.firstChild)el.removeChild(el.firstChild);
}
function SetAttribs(node, attrs) {
    for (const [key, val] of Object.entries(attrs)){
        // for some weird reason set attribute set attribute sometimes fails events
        if (key === "onclick" || key === "onselect") node.addEventListener("click", val);
        else if (key === "onchange") node.addEventListener("input", val);
        else node.setAttribute(key, val);
    }
}
function createElement(node) {
    if (typeof node == "string") return document.createTextNode(node);
    if (IsDom(node)) return node;
    const p = document.createElement(node.tag);
    if (node.attrs) SetAttribs(p, node.attrs);
    node && node.children && node.children.map(createElement).forEach(p.appendChild.bind(p));
    return p;
}
class PubSub {
    constructor(){
        this.subscribers = {};
    }
    subscribe(channel, fn) {
        if (!this.subscribers[channel]) this.subscribers[channel] = [];
        this.subscribers[channel].push(fn);
        return ()=>{
            this.subscribers[channel] = this.subscribers[channel].filter((sf)=>sf !== fn);
        };
    }
    notify(channel, ...data) {
        if (!this.subscribers[channel]) throw new Error(`${channel} does not exist`);
        this.subscribers[channel].forEach((fn)=>fn(...data));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"2mdku":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6R9Zu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Pub.subscribe("cleanDiv", ()=> {
//     clearEl(innerEmptyDiv)
// })
parcelHelpers.export(exports, "Main", ()=>Main);
// project 
parcelHelpers.export(exports, "Project", ()=>Project);
var _heroJs = require("./components/hero.js");
var _work = require("./components/work");
var _moreWorkJs = require("./components/moreWork.js");
var _atomicus = require("atomicus");
var _projectJs = require("./components/Project.js");
var _pubJs = require("./Pub.js");
var _pubJsDefault = parcelHelpers.interopDefault(_pubJs);
// where are the views coming from 
// components
// main view 
const innerEmptyDiv = document.createElement("div");
innerEmptyDiv.clientHeight = "100%";
innerEmptyDiv.clientWidth = "100%";
// only two routes 
// main satic site  append on inner empty div
// projects  directly to app
innerEmptyDiv.appendChild((0, _atomicus.createElement)((0, _heroJs.Hero)()));
innerEmptyDiv.appendChild((0, _atomicus.createElement)((0, _heroJs.Socials)()));
innerEmptyDiv.appendChild((0, _atomicus.createElement)((0, _heroJs.Skills)()));
innerEmptyDiv.appendChild((0, _atomicus.createElement)((0, _heroJs.techStack)()));
function Main(projects, more) {
    // clearEl(innerEmptyDiv)
    const wrapper = (0, _atomicus.createElement)((0, _work.WorkWrapper)());
    // console.log(wrapper, "DEBUG: wrapper")
    const workTree = (0, _work.Work)(projects);
    workTree.forEach((obj, i)=>{
        wrapper.appendChild((0, _atomicus.createElement)((0, _work.linebreak)()));
        wrapper.appendChild((0, _atomicus.createElement)(obj));
    });
    innerEmptyDiv.appendChild(wrapper);
    //  console.log("should return a list of projects");
    innerEmptyDiv.appendChild((0, _atomicus.createElement)((0, _moreWorkJs.MoreWork)(more)));
    return innerEmptyDiv;
}
function Project(project) {
    // console.log("should return an object of project");
    return (0, _atomicus.createElement)((0, _projectJs.Project)(project));
}

},{"./components/hero.js":"4OLp4","./components/work":"1A9D6","./components/moreWork.js":"bpXmD","atomicus":"9iIp8","./components/Project.js":"iHPLt","./Pub.js":"BUIp7","@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"4OLp4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hero", ()=>Hero);
parcelHelpers.export(exports, "Socials", ()=>Socials);
parcelHelpers.export(exports, "Skills", ()=>Skills);
parcelHelpers.export(exports, "techStack", ()=>techStack);
async function createBlobO() {
    let b = await fetch("/Resume.pdf");
    let blob = await b.blob();
    const a = document.createElement("a");
    a.download = "Resume.pdf";
    a.href = URL.createObjectURL(blob);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    console.log(blob);
}
function downloadFile(url, fileName) {
    fetch(url, {
        method: "get",
        mode: "no-cors",
        referrerPolicy: "no-referrer"
    }).then((res)=>res.blob()).then((res)=>{
        const aElement = document.createElement("a");
        aElement.setAttribute("download", fileName);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        aElement.setAttribute("target", "_blank");
        aElement.click();
        URL.revokeObjectURL(href);
    });
}
function atag(href, text) {
    return {
        tag: "a",
        attrs: {
            href,
            target: "_blank"
        },
        children: [
            text
        ]
    };
}
function li(text) {
    return {
        tag: "li",
        children: [
            text
        ]
    };
}
function cardTechStack(stack) {
    return {
        tag: "div",
        attrs: {
            class: "card--techstack"
        },
        children: [
            {
                tag: "span",
                children: [
                    stack
                ]
            }
        ]
    };
}
function Hero() {
    return {
        tag: "section",
        attrs: {
            class: "section--page",
            id: "wrapper--hero"
        },
        children: [
            // {
            //     tag: "img",
            //     attrs: {
            //         id: "profile-pic",
            //         src: ""
            //     }
            // },
            {
                tag: "div",
                children: [
                    {
                        tag: "h1",
                        attrs: {
                            id: "user-name"
                        },
                        children: [
                            "Sifundo Mhlungu"
                        ]
                    },
                    {
                        tag: "p",
                        attrs: {
                            id: "bio"
                        },
                        children: [
                            "Front-end developer  ",
                            ", ",
                            "Building robust and performant apps in JavaScript for all platforms. ", 
                        ]
                    },
                    {
                        tag: "p",
                        attrs: {
                            id: "email"
                        },
                        children: [
                            "\uD83D\uDC49 mhlungusk@gmail.com"
                        ]
                    }
                ]
            }
        ]
    };
}
function Socials() {
    return {
        tag: "section",
        attrs: {
            class: "section--page"
        },
        children: [
            {
                tag: "div",
                attrs: {
                    id: "socials--list"
                },
                children: [
                    atag("https://twitter.com/MhlunguSfundo", "Twitter"),
                    atag("https://www.linkedin.com/in/sfundo-mhlungu-331588168", "Linkedin"),
                    atag("https://github.com/SfundoMhlungu", "Github"),
                    atag("https://dev.to/sfundomhlungu", "dev.to"),
                    {
                        tag: "a",
                        attrs: {
                            href: "https://github.com/SfundoMhlungu/DigiResume/blob/main/public/Resume.pdf",
                            download: "download"
                        },
                        children: [
                            "Download Resume"
                        ]
                    }
                ]
            }
        ]
    };
}
function Skills() {
    return {
        tag: "section",
        attrs: {
            class: "section--page"
        },
        children: [
            {
                tag: "ul",
                attrs: {
                    id: "qualifications--list"
                },
                children: [
                    //   li("✔️ 7 Years experience with front & backend development"),
                    li("✔️ 5 years of coding experience in JavaScript, React and Ionic."),
                    //   li("✔️ Extensive knowledge in API & Database Design."),
                    li("✔️ about a year of low level programming in wasm and Assemblyscript."),
                    li("✔️ Extensive knowledge in modular coding and design for JS and TS."),
                    //   li("✔️ Experienced content creator on YouTube & community leader"),
                    li("✔️ Occasional technical writer on dev.to with over 8000 reads for 28 posts.")
                ]
            }
        ]
    };
}
function techStack() {
    return {
        tag: "section",
        attrs: {
            class: "section--page"
        },
        children: [
            {
                tag: "h2",
                children: [
                    "Tech stack"
                ]
            },
            {
                tag: "div",
                attrs: {
                    id: "wrapper--techstack__items"
                },
                children: [
                    cardTechStack("JavaScript, Typescript, Assemblyscript"),
                    cardTechStack("Ionic, Capacitor, Neutralino.js, Electron"),
                    cardTechStack("React, Next JS"),
                    cardTechStack("Saas, Tailwind, framer-motion"),
                    cardTechStack("Supabase, netlify, Zig, C"),
                    cardTechStack("HTML, CSS")
                ]
            }
        ]
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"1A9D6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linebreak", ()=>linebreak);
parcelHelpers.export(exports, "WorkWrapper", ()=>WorkWrapper);
parcelHelpers.export(exports, "Work", ()=>Work);
function card_work(title, period, description, points) {
    return {
        tag: "div",
        attrs: {
            class: "card--work-history"
        },
        children: [
            {
                tag: "strong",
                children: [
                    title
                ]
            },
            {
                tag: "p",
                children: [
                    period
                ]
            },
            {
                tag: "p",
                children: [
                    description
                ]
            },
            {
                tag: "ul",
                children: points.map((point, i)=>{
                    return {
                        tag: "li",
                        children: [
                            point
                        ]
                    };
                })
            }
        ]
    };
}
function linebreak() {
    return {
        tag: "div",
        attrs: {
            class: "line-break"
        }
    };
}
function WorkWrapper() {
    return {
        tag: "div",
        attrs: {
            id: "work-history-wrapper",
            class: "section--page"
        },
        children: [
            {
                tag: "h2",
                children: [
                    "Experience"
                ]
            }
        ]
    };
}
function Work(work) {
    const workTree = [];
    work.forEach((w, i)=>{
        workTree.push(card_work(w.title, w.period, w.description, w.points));
    });
    return workTree;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"bpXmD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MoreWork", ()=>MoreWork);
var _pub = require("../Pub");
var _pubDefault = parcelHelpers.interopDefault(_pub);
function CardProject(work) {
    return {
        tag: "div",
        attrs: {
            class: "card--project"
        },
        children: [
            {
                tag: "a",
                attrs: {
                    // href:"#",
                    onclick: ()=>(0, _pubDefault.default).notify("Router", {
                            route: "project",
                            data: work
                        })
                },
                children: [
                    {
                        tag: "span",
                        children: [
                            work.emo
                        ]
                    },
                    work.name + " - " + work.description
                ]
            }
        ]
    };
}
function MoreWork(moreWork) {
    return {
        tag: "div",
        attrs: {
            class: "section-page"
        },
        children: [
            {
                tag: "h2",
                children: [
                    "Other Noteworthy Projects"
                ]
            },
            ...moreWork.map(CardProject)
        ]
    };
}

},{"../Pub":"BUIp7","@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"BUIp7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _atomicus = require("atomicus");
const Pub = new (0, _atomicus.PubSub)();
exports.default = Pub;

},{"atomicus":"9iIp8","@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"iHPLt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Project", ()=>Project);
var _pub = require("../Pub");
var _pubDefault = parcelHelpers.interopDefault(_pub);
const ul = (project)=>({
        tag: "ul",
        attrs: {
            style: "display:flex; cursor: pointer; width: 100%; justify-content: space-evenly;"
        },
        children: project.live && project.source ? [
            {
                tag: "a",
                attrs: {
                    href: project.live,
                    target: "_blank"
                },
                children: [
                    "Live Demo"
                ]
            },
            {
                tag: "a",
                attrs: {
                    href: project.source,
                    target: "_blank"
                },
                children: [
                    "Source Code"
                ]
            }
        ] : project.live ? [
            {
                tag: "a",
                attrs: {
                    href: project.live,
                    target: "_blank"
                },
                children: [
                    "Live Demo"
                ]
            }
        ] : project.source ? [
            {
                tag: "a",
                attrs: {
                    href: project.source,
                    target: "_blank"
                },
                children: [
                    "Source Code"
                ]
            }
        ] : [
            ""
        ]
    });
function Project(project) {
    // console.log(project, project.live)
    return {
        tag: "div",
        attrs: {
            id: "container--main"
        },
        children: [
            {
                tag: "a",
                attrs: {
                    onclick: ()=>(0, _pubDefault.default).notify("Router", {
                            route: "main",
                            data: null
                        })
                },
                children: [
                    "\uD83D\uDC48\uD83C\uDFFD, Go Back"
                ]
            },
            {
                tag: "h1",
                children: [
                    project.name
                ]
            },
            ul(project),
            {
                tag: "p",
                children: [
                    project.description
                ]
            },
            {
                tag: "ul",
                children: project.points.map((point, i)=>{
                    return {
                        tag: "li",
                        children: [
                            point
                        ]
                    };
                })
            }
        ]
    };
}

},{"../Pub":"BUIp7","@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"5I6wk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "projects", ()=>projects);
parcelHelpers.export(exports, "MoreWork", ()=>MoreWork);
const projects = [
    {
        // HTML CSS AND JAVASCRIPT, ML5
        // load, process, clean, transform and fit a model in a click of a button
        title: "\uD83D\uDEA7 Bokke | Front end developer",
        period: "September 2022 - current",
        description: `Developing a desktop/web app to load, clean, transform and fit a Machine learning model
        to tabular data at a click of a button`,
        points: [
            "Utilizing HTML CSS and JavaScript to develop the front-end, and ml5 for Machine learning models and training",
            "Following the MVC and reactive pattern to connect views and models to achieve dynamic elements based of a chosen operation",
            "Utilized parcel to bundle the site and neutralino js to present it as a desktop software",
            "Abstracted Bokke from my npm module bokke.js "
        ]
    },
    {
        // Ionic Next js React Pullstate Chart js Capacitor
        // Provides a way to record and capture potential allergic triggers for tracking 
        // Provides a classification option for triggers based on reaction and pain severity 
        // Predict's a new entered trigger's reaction based on previous similar reaction
        // utilized Ionic storage to effieciently store and retrieve data 
        // used chart js to communicate the data easily
        // utilized ionic components to achieve neo native speed on a mobile device
        // utilized capacitor to package the app into an android signed and installable apk
        title: "\uD83D\uDEA7 Pam | React, next js, Mobile developer",
        period: "March 2022 - August 2022",
        description: `Developed a allergy tracker Mobile App for a close friend, to record and track potential allergy triggers,
        providing also a classification system for triggers based on the severity of the reaction and pain, I also fitted the app
        with a simple text algorithm to predict a recorded trigger's reaction based on previous similar reaction`,
        points: [
            "Utilized tailwind CSS and Next js to build custom reusable React components",
            "followed Ionic best practices and used Ionic components to achieve neo native speed on a mobile device",
            "Implemented charts in chart.js to communicate and inteprete the data easily",
            "Utilized Ionic Storage to efficiently persist and retrieve data",
            "Managed complex state in multiple components with Pullstate",
            "Created animations with frame-motion",
            "Utilized Capacitor js to package the app into an android signed and installable apk"
        ]
    },
    // {
    //     title:"🚧 lingua | Front end, Machine Learning developer",
    //     period:"September 2022 - current",
    //     description: `Started a digital agency building websites and marketing for
    //     local businesses. Mostly Wordpress sites with small modifications to
    //     themes.`,
    //     points: [
    //         "Organized SEO & SEM campaigns on a local and global scale.",
    //         "Saved a customer $110k a year by reducing Adwords CPC cost with optimization",
    //         "70 + websites built with my small team of developers and freelancers"
    //     ]
    // },
    {
        title: "\uD83D\uDEA7 bokke.js | Module developer",
        period: "October 2021 - September 2022",
        description: `Developed a JavaScript module to load, manipulate and visualize tabular data`,
        points: [
            "Implemented the entire module in Typescript using ES6 features to achieve robust and mantainable code",
            "Utilized web workers extensively to isolate and process large data, efficiently avoiding blocking the main thread",
            "Utilized git as a version control system and npm to publish the module"
        ]
    }
];
const MoreWork = [
    {
        name: " Portfolio website ",
        emo: "\uD83C\uDFC6",
        description: " Personal site built with React ",
        points: [
            "Organized SEO & SEM campaigns on a local and global scale.",
            "Saved a customer $110k a year by reducing Adwords CPC cost with optimization",
            "70 + websites built with my small team of developers and freelancers"
        ],
        live: "https//flkm",
        source: "https//git"
    },
    {
        name: " Algo viz ",
        emo: "\uD83C\uDFC6",
        description: "Algorithm Visualizer Front-end",
        points: [
            "Organized SEO & SEM campaigns on a local and global scale.",
            "Saved a customer $110k a year by reducing Adwords CPC cost with optimization",
            "70 + websites built with my small team of developers and freelancers"
        ]
    },
    {
        name: " Atomicus ",
        emo: "\uD83C\uDFC6",
        description: " A tiny library for creating stateful elements in Vanilla JS ",
        points: [
            "Organized SEO & SEM campaigns on a local and global scale.",
            "Saved a customer $110k a year by reducing Adwords CPC cost with optimization",
            "70 + websites built with my small team of developers and freelancers"
        ]
    },
    {
        name: " Petal-js ",
        emo: "\uD83C\uDFC6",
        description: " A tiny compiled front-end framework ",
        points: [
            "Organized SEO & SEM campaigns on a local and global scale.",
            "Saved a customer $110k a year by reducing Adwords CPC cost with optimization",
            "70 + websites built with my small team of developers and freelancers"
        ]
    },
    {
        name: " Vanilla forms ",
        emo: "\uD83C\uDFC6",
        description: " A library for creating reactive forms in Vanilla JS ",
        points: [
            "Organized SEO & SEM campaigns on a local and global scale.",
            "Saved a customer $110k a year by reducing Adwords CPC cost with optimization",
            "70 + websites built with my small team of developers and freelancers"
        ]
    },
    {
        name: " t24 ",
        emo: "\uD83C\uDFC6",
        description: " Ebook promotion website ",
        points: [
            "Organized SEO & SEM campaigns on a local and global scale.",
            "Saved a customer $110k a year by reducing Adwords CPC cost with optimization",
            "70 + websites built with my small team of developers and freelancers"
        ]
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}]},["h8Y2N","igcvL"], "igcvL", "parcelRequiredd19")

//# sourceMappingURL=index.5baa4167.js.map
