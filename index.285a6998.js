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
})({"jTKkz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5af4ec49285a6998";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
        assetsToAccept = [];
        assetsToDispose = [];
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
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bn3Ej":[function(require,module,exports) {
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ !function(t1, e) {
    e(exports);
}(this, function(t1) {
    "use strict";
    const e = "140", n = 100, i = 300, r = 301, s = 302, a = 303, o = 304, l = 306, c = 1e3, h = 1001, u = 1002, d = 1003, p = 1004, m = 1005, f = 1006, g = 1007, v = 1008, y = 1009, x = 1012, _ = 1014, b = 1015, M = 1016, w = 1020, S = 1023, T = 1026, E = 1027, A = 33776, R = 33777, C = 33778, L = 33779, P = 35840, D = 35841, I = 35842, N = 35843, B = 37492, z = 37496, O = 37808, U = 37809, F = 37810, H = 37811, G = 37812, k = 37813, V = 37814, W = 37815, j = 37816, q = 37817, X = 37818, J = 37819, Y = 37820, Z = 37821, K = 36492, Q = 2300, $ = 2301, tt = 2302, et = 2400, nt = 2401, it = 2402, rt = 2500, st = 2501, at = 3e3, ot = 3001, lt = "srgb", ct = "srgb-linear", ht = 7680, ut = 35044, dt = 35048, pt = "300 es", mt = 1035;
    class ft {
        addEventListener(t1, e) {
            void 0 === this._listeners && (this._listeners = {});
            const n = this._listeners;
            void 0 === n[t1] && (n[t1] = []), -1 === n[t1].indexOf(e) && n[t1].push(e);
        }
        hasEventListener(t1, e) {
            if (void 0 === this._listeners) return !1;
            const n = this._listeners;
            return void 0 !== n[t1] && -1 !== n[t1].indexOf(e);
        }
        removeEventListener(t1, e) {
            if (void 0 === this._listeners) return;
            const n = this._listeners[t1];
            if (void 0 !== n) {
                const t1 = n.indexOf(e);
                -1 !== t1 && n.splice(t1, 1);
            }
        }
        dispatchEvent(t1) {
            if (void 0 === this._listeners) return;
            const e = this._listeners[t1.type];
            if (void 0 !== e) {
                t1.target = this;
                const n = e.slice(0);
                for(let e = 0, i = n.length; e < i; e++)n[e].call(this, t1);
                t1.target = null;
            }
        }
    }
    const gt = [];
    for(let t1 = 0; t1 < 256; t1++)gt[t1] = (t1 < 16 ? "0" : "") + t1.toString(16);
    let vt = 1234567;
    const yt = Math.PI / 180, xt = 180 / Math.PI;
    function _t() {
        const t1 = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0;
        return (gt[255 & t1] + gt[t1 >> 8 & 255] + gt[t1 >> 16 & 255] + gt[t1 >> 24 & 255] + "-" + gt[255 & e] + gt[e >> 8 & 255] + "-" + gt[e >> 16 & 15 | 64] + gt[e >> 24 & 255] + "-" + gt[63 & n | 128] + gt[n >> 8 & 255] + "-" + gt[n >> 16 & 255] + gt[n >> 24 & 255] + gt[255 & i] + gt[i >> 8 & 255] + gt[i >> 16 & 255] + gt[i >> 24 & 255]).toLowerCase();
    }
    function bt(t1, e, n) {
        return Math.max(e, Math.min(n, t1));
    }
    function Mt(t1, e) {
        return (t1 % e + e) % e;
    }
    function wt(t1, e, n) {
        return (1 - n) * t1 + n * e;
    }
    function St(t1) {
        return 0 == (t1 & t1 - 1) && 0 !== t1;
    }
    function Tt(t1) {
        return Math.pow(2, Math.ceil(Math.log(t1) / Math.LN2));
    }
    function Et(t1) {
        return Math.pow(2, Math.floor(Math.log(t1) / Math.LN2));
    }
    var At = Object.freeze({
        __proto__: null,
        DEG2RAD: yt,
        RAD2DEG: xt,
        generateUUID: _t,
        clamp: bt,
        euclideanModulo: Mt,
        mapLinear: function(t1, e, n, i, r) {
            return i + (t1 - e) * (r - i) / (n - e);
        },
        inverseLerp: function(t1, e, n) {
            return t1 !== e ? (n - t1) / (e - t1) : 0;
        },
        lerp: wt,
        damp: function(t1, e, n, i) {
            return wt(t1, e, 1 - Math.exp(-n * i));
        },
        pingpong: function(t1, e = 1) {
            return e - Math.abs(Mt(t1, 2 * e) - e);
        },
        smoothstep: function(t1, e, n) {
            return t1 <= e ? 0 : t1 >= n ? 1 : (t1 = (t1 - e) / (n - e)) * t1 * (3 - 2 * t1);
        },
        smootherstep: function(t1, e, n) {
            return t1 <= e ? 0 : t1 >= n ? 1 : (t1 = (t1 - e) / (n - e)) * t1 * t1 * (t1 * (6 * t1 - 15) + 10);
        },
        randInt: function(t1, e) {
            return t1 + Math.floor(Math.random() * (e - t1 + 1));
        },
        randFloat: function(t1, e) {
            return t1 + Math.random() * (e - t1);
        },
        randFloatSpread: function(t1) {
            return t1 * (.5 - Math.random());
        },
        seededRandom: function(t1) {
            void 0 !== t1 && (vt = t1);
            let e = vt += 1831565813;
            return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296;
        },
        degToRad: function(t1) {
            return t1 * yt;
        },
        radToDeg: function(t1) {
            return t1 * xt;
        },
        isPowerOfTwo: St,
        ceilPowerOfTwo: Tt,
        floorPowerOfTwo: Et,
        setQuaternionFromProperEuler: function(t1, e, n, i, r) {
            const s = Math.cos, a = Math.sin, o = s(n / 2), l = a(n / 2), c = s((e + i) / 2), h = a((e + i) / 2), u = s((e - i) / 2), d = a((e - i) / 2), p = s((i - e) / 2), m = a((i - e) / 2);
            switch(r){
                case "XYX":
                    t1.set(o * h, l * u, l * d, o * c);
                    break;
                case "YZY":
                    t1.set(l * d, o * h, l * u, o * c);
                    break;
                case "ZXZ":
                    t1.set(l * u, l * d, o * h, o * c);
                    break;
                case "XZX":
                    t1.set(o * h, l * m, l * p, o * c);
                    break;
                case "YXY":
                    t1.set(l * p, o * h, l * m, o * c);
                    break;
                case "ZYZ":
                    t1.set(l * m, l * p, o * h, o * c);
                    break;
                default:
                    console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
            }
        },
        normalize: function(t1, e) {
            switch(e.constructor){
                case Float32Array:
                    return t1;
                case Uint16Array:
                    return Math.round(65535 * t1);
                case Uint8Array:
                    return Math.round(255 * t1);
                case Int16Array:
                    return Math.round(32767 * t1);
                case Int8Array:
                    return Math.round(127 * t1);
                default:
                    throw new Error("Invalid component type.");
            }
        },
        denormalize: function(t1, e) {
            switch(e.constructor){
                case Float32Array:
                    return t1;
                case Uint16Array:
                    return t1 / 65535;
                case Uint8Array:
                    return t1 / 255;
                case Int16Array:
                    return Math.max(t1 / 32767, -1);
                case Int8Array:
                    return Math.max(t1 / 127, -1);
                default:
                    throw new Error("Invalid component type.");
            }
        }
    });
    class Rt {
        constructor(t1 = 0, e = 0){
            this.x = t1, this.y = e;
        }
        get width() {
            return this.x;
        }
        set width(t1) {
            this.x = t1;
        }
        get height() {
            return this.y;
        }
        set height(t1) {
            this.y = t1;
        }
        set(t1, e) {
            return this.x = t1, this.y = e, this;
        }
        setScalar(t1) {
            return this.x = t1, this.y = t1, this;
        }
        setX(t1) {
            return this.x = t1, this;
        }
        setY(t1) {
            return this.y = t1, this;
        }
        setComponent(t1, e) {
            switch(t1){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t1);
            }
            return this;
        }
        getComponent(t1) {
            switch(t1){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t1);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y);
        }
        copy(t1) {
            return this.x = t1.x, this.y = t1.y, this;
        }
        add(t1, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t1, e)) : (this.x += t1.x, this.y += t1.y, this);
        }
        addScalar(t1) {
            return this.x += t1, this.y += t1, this;
        }
        addVectors(t1, e) {
            return this.x = t1.x + e.x, this.y = t1.y + e.y, this;
        }
        addScaledVector(t1, e) {
            return this.x += t1.x * e, this.y += t1.y * e, this;
        }
        sub(t1, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t1, e)) : (this.x -= t1.x, this.y -= t1.y, this);
        }
        subScalar(t1) {
            return this.x -= t1, this.y -= t1, this;
        }
        subVectors(t1, e) {
            return this.x = t1.x - e.x, this.y = t1.y - e.y, this;
        }
        multiply(t1) {
            return this.x *= t1.x, this.y *= t1.y, this;
        }
        multiplyScalar(t1) {
            return this.x *= t1, this.y *= t1, this;
        }
        divide(t1) {
            return this.x /= t1.x, this.y /= t1.y, this;
        }
        divideScalar(t1) {
            return this.multiplyScalar(1 / t1);
        }
        applyMatrix3(t1) {
            const e = this.x, n = this.y, i = t1.elements;
            return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
        }
        min(t1) {
            return this.x = Math.min(this.x, t1.x), this.y = Math.min(this.y, t1.y), this;
        }
        max(t1) {
            return this.x = Math.max(this.x, t1.x), this.y = Math.max(this.y, t1.y), this;
        }
        clamp(t1, e) {
            return this.x = Math.max(t1.x, Math.min(e.x, this.x)), this.y = Math.max(t1.y, Math.min(e.y, this.y)), this;
        }
        clampScalar(t1, e) {
            return this.x = Math.max(t1, Math.min(e, this.x)), this.y = Math.max(t1, Math.min(e, this.y)), this;
        }
        clampLength(t1, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t1, Math.min(e, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this;
        }
        dot(t1) {
            return this.x * t1.x + this.y * t1.y;
        }
        cross(t1) {
            return this.x * t1.y - this.y * t1.x;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI;
        }
        distanceTo(t1) {
            return Math.sqrt(this.distanceToSquared(t1));
        }
        distanceToSquared(t1) {
            const e = this.x - t1.x, n = this.y - t1.y;
            return e * e + n * n;
        }
        manhattanDistanceTo(t1) {
            return Math.abs(this.x - t1.x) + Math.abs(this.y - t1.y);
        }
        setLength(t1) {
            return this.normalize().multiplyScalar(t1);
        }
        lerp(t1, e) {
            return this.x += (t1.x - this.x) * e, this.y += (t1.y - this.y) * e, this;
        }
        lerpVectors(t1, e, n) {
            return this.x = t1.x + (e.x - t1.x) * n, this.y = t1.y + (e.y - t1.y) * n, this;
        }
        equals(t1) {
            return t1.x === this.x && t1.y === this.y;
        }
        fromArray(t1, e = 0) {
            return this.x = t1[e], this.y = t1[e + 1], this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this.x, t1[e + 1] = this.y, t1;
        }
        fromBufferAttribute(t1, e, n) {
            return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t1.getX(e), this.y = t1.getY(e), this;
        }
        rotateAround(t1, e) {
            const n = Math.cos(e), i = Math.sin(e), r = this.x - t1.x, s = this.y - t1.y;
            return this.x = r * n - s * i + t1.x, this.y = r * i + s * n + t1.y, this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y;
        }
    }
    Rt.prototype.isVector2 = !0;
    class Ct {
        constructor(){
            this.elements = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
        }
        set(t1, e, n, i, r, s, a, o, l) {
            const c = this.elements;
            return c[0] = t1, c[1] = i, c[2] = a, c[3] = e, c[4] = r, c[5] = o, c[6] = n, c[7] = s, c[8] = l, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(t1) {
            const e = this.elements, n = t1.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
        }
        extractBasis(t1, e, n) {
            return t1.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
        }
        setFromMatrix4(t1) {
            const e = t1.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
        }
        multiply(t1) {
            return this.multiplyMatrices(this, t1);
        }
        premultiply(t1) {
            return this.multiplyMatrices(t1, this);
        }
        multiplyMatrices(t1, e) {
            const n = t1.elements, i = e.elements, r = this.elements, s = n[0], a = n[3], o = n[6], l = n[1], c = n[4], h = n[7], u = n[2], d = n[5], p = n[8], m = i[0], f = i[3], g = i[6], v = i[1], y = i[4], x = i[7], _ = i[2], b = i[5], M = i[8];
            return r[0] = s * m + a * v + o * _, r[3] = s * f + a * y + o * b, r[6] = s * g + a * x + o * M, r[1] = l * m + c * v + h * _, r[4] = l * f + c * y + h * b, r[7] = l * g + c * x + h * M, r[2] = u * m + d * v + p * _, r[5] = u * f + d * y + p * b, r[8] = u * g + d * x + p * M, this;
        }
        multiplyScalar(t1) {
            const e = this.elements;
            return e[0] *= t1, e[3] *= t1, e[6] *= t1, e[1] *= t1, e[4] *= t1, e[7] *= t1, e[2] *= t1, e[5] *= t1, e[8] *= t1, this;
        }
        determinant() {
            const t1 = this.elements, e = t1[0], n = t1[1], i = t1[2], r = t1[3], s = t1[4], a = t1[5], o = t1[6], l = t1[7], c = t1[8];
            return e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o;
        }
        invert() {
            const t1 = this.elements, e = t1[0], n = t1[1], i = t1[2], r = t1[3], s = t1[4], a = t1[5], o = t1[6], l = t1[7], c = t1[8], h = c * s - a * l, u = a * o - c * r, d = l * r - s * o, p = e * h + n * u + i * d;
            if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const m = 1 / p;
            return t1[0] = h * m, t1[1] = (i * l - c * n) * m, t1[2] = (a * n - i * s) * m, t1[3] = u * m, t1[4] = (c * e - i * o) * m, t1[5] = (i * r - a * e) * m, t1[6] = d * m, t1[7] = (n * o - l * e) * m, t1[8] = (s * e - n * r) * m, this;
        }
        transpose() {
            let t1;
            const e = this.elements;
            return t1 = e[1], e[1] = e[3], e[3] = t1, t1 = e[2], e[2] = e[6], e[6] = t1, t1 = e[5], e[5] = e[7], e[7] = t1, this;
        }
        getNormalMatrix(t1) {
            return this.setFromMatrix4(t1).invert().transpose();
        }
        transposeIntoArray(t1) {
            const e = this.elements;
            return t1[0] = e[0], t1[1] = e[3], t1[2] = e[6], t1[3] = e[1], t1[4] = e[4], t1[5] = e[7], t1[6] = e[2], t1[7] = e[5], t1[8] = e[8], this;
        }
        setUvTransform(t1, e, n, i, r, s, a) {
            const o = Math.cos(r), l = Math.sin(r);
            return this.set(n * o, n * l, -n * (o * s + l * a) + s + t1, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1), this;
        }
        scale(t1, e) {
            const n = this.elements;
            return n[0] *= t1, n[3] *= t1, n[6] *= t1, n[1] *= e, n[4] *= e, n[7] *= e, this;
        }
        rotate(t1) {
            const e = Math.cos(t1), n = Math.sin(t1), i = this.elements, r = i[0], s = i[3], a = i[6], o = i[1], l = i[4], c = i[7];
            return i[0] = e * r + n * o, i[3] = e * s + n * l, i[6] = e * a + n * c, i[1] = -n * r + e * o, i[4] = -n * s + e * l, i[7] = -n * a + e * c, this;
        }
        translate(t1, e) {
            const n = this.elements;
            return n[0] += t1 * n[2], n[3] += t1 * n[5], n[6] += t1 * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this;
        }
        equals(t1) {
            const e = this.elements, n = t1.elements;
            for(let t1 = 0; t1 < 9; t1++)if (e[t1] !== n[t1]) return !1;
            return !0;
        }
        fromArray(t1, e = 0) {
            for(let n = 0; n < 9; n++)this.elements[n] = t1[n + e];
            return this;
        }
        toArray(t1 = [], e = 0) {
            const n = this.elements;
            return t1[e] = n[0], t1[e + 1] = n[1], t1[e + 2] = n[2], t1[e + 3] = n[3], t1[e + 4] = n[4], t1[e + 5] = n[5], t1[e + 6] = n[6], t1[e + 7] = n[7], t1[e + 8] = n[8], t1;
        }
        clone() {
            return (new this.constructor).fromArray(this.elements);
        }
    }
    function Lt(t1) {
        for(let e = t1.length - 1; e >= 0; --e)if (t1[e] > 65535) return !0;
        return !1;
    }
    Ct.prototype.isMatrix3 = !0;
    const Pt = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: Uint8ClampedArray,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    function Dt(t1, e) {
        return new Pt[t1](e);
    }
    function It(t1) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", t1);
    }
    function Nt(t1) {
        return t1 < .04045 ? .0773993808 * t1 : Math.pow(.9478672986 * t1 + .0521327014, 2.4);
    }
    function Bt(t1) {
        return t1 < .0031308 ? 12.92 * t1 : 1.055 * Math.pow(t1, .41666) - .055;
    }
    const zt = {
        [lt]: {
            [ct]: Nt
        },
        [ct]: {
            [lt]: Bt
        }
    }, Ot = {
        legacyMode: !0,
        get workingColorSpace () {
            return ct;
        },
        set workingColorSpace (t){
            console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
        },
        convert: function(t1, e, n) {
            if (this.legacyMode || e === n || !e || !n) return t1;
            if (zt[e] && void 0 !== zt[e][n]) {
                const i = zt[e][n];
                return t1.r = i(t1.r), t1.g = i(t1.g), t1.b = i(t1.b), t1;
            }
            throw new Error("Unsupported color space conversion.");
        },
        fromWorkingColorSpace: function(t1, e) {
            return this.convert(t1, this.workingColorSpace, e);
        },
        toWorkingColorSpace: function(t1, e) {
            return this.convert(t1, e, this.workingColorSpace);
        }
    }, Ut = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }, Ft = {
        r: 0,
        g: 0,
        b: 0
    }, Ht = {
        h: 0,
        s: 0,
        l: 0
    }, Gt = {
        h: 0,
        s: 0,
        l: 0
    };
    function kt(t1, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t1 + 6 * (e - t1) * n : n < .5 ? e : n < 2 / 3 ? t1 + 6 * (e - t1) * (2 / 3 - n) : t1;
    }
    function Vt(t1, e) {
        return e.r = t1.r, e.g = t1.g, e.b = t1.b, e;
    }
    class Wt {
        constructor(t1, e, n){
            return void 0 === e && void 0 === n ? this.set(t1) : this.setRGB(t1, e, n);
        }
        set(t1) {
            return t1 && t1.isColor ? this.copy(t1) : "number" == typeof t1 ? this.setHex(t1) : "string" == typeof t1 && this.setStyle(t1), this;
        }
        setScalar(t1) {
            return this.r = t1, this.g = t1, this.b = t1, this;
        }
        setHex(t1, e = "srgb") {
            return t1 = Math.floor(t1), this.r = (t1 >> 16 & 255) / 255, this.g = (t1 >> 8 & 255) / 255, this.b = (255 & t1) / 255, Ot.toWorkingColorSpace(this, e), this;
        }
        setRGB(t1, e, n, i = "srgb-linear") {
            return this.r = t1, this.g = e, this.b = n, Ot.toWorkingColorSpace(this, i), this;
        }
        setHSL(t1, e, n, i = "srgb-linear") {
            if (t1 = Mt(t1, 1), e = bt(e, 0, 1), n = bt(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
            else {
                const i = n <= .5 ? n * (1 + e) : n + e - n * e, r = 2 * n - i;
                this.r = kt(r, i, t1 + 1 / 3), this.g = kt(r, i, t1), this.b = kt(r, i, t1 - 1 / 3);
            }
            return Ot.toWorkingColorSpace(this, i), this;
        }
        setStyle(t1, e = "srgb") {
            function n(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t1 + " will be ignored.");
            }
            let i;
            if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t1)) {
                let t1;
                const r = i[1], s = i[2];
                switch(r){
                    case "rgb":
                    case "rgba":
                        if (t1 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(255, parseInt(t1[1], 10)) / 255, this.g = Math.min(255, parseInt(t1[2], 10)) / 255, this.b = Math.min(255, parseInt(t1[3], 10)) / 255, Ot.toWorkingColorSpace(this, e), n(t1[4]), this;
                        if (t1 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(100, parseInt(t1[1], 10)) / 100, this.g = Math.min(100, parseInt(t1[2], 10)) / 100, this.b = Math.min(100, parseInt(t1[3], 10)) / 100, Ot.toWorkingColorSpace(this, e), n(t1[4]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (t1 = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) {
                            const i = parseFloat(t1[1]) / 360, r = parseInt(t1[2], 10) / 100, s = parseInt(t1[3], 10) / 100;
                            return n(t1[4]), this.setHSL(i, r, s, e);
                        }
                }
            } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t1)) {
                const t1 = i[1], n = t1.length;
                if (3 === n) return this.r = parseInt(t1.charAt(0) + t1.charAt(0), 16) / 255, this.g = parseInt(t1.charAt(1) + t1.charAt(1), 16) / 255, this.b = parseInt(t1.charAt(2) + t1.charAt(2), 16) / 255, Ot.toWorkingColorSpace(this, e), this;
                if (6 === n) return this.r = parseInt(t1.charAt(0) + t1.charAt(1), 16) / 255, this.g = parseInt(t1.charAt(2) + t1.charAt(3), 16) / 255, this.b = parseInt(t1.charAt(4) + t1.charAt(5), 16) / 255, Ot.toWorkingColorSpace(this, e), this;
            }
            return t1 && t1.length > 0 ? this.setColorName(t1, e) : this;
        }
        setColorName(t1, e = "srgb") {
            const n = Ut[t1.toLowerCase()];
            return void 0 !== n ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t1), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(t1) {
            return this.r = t1.r, this.g = t1.g, this.b = t1.b, this;
        }
        copySRGBToLinear(t1) {
            return this.r = Nt(t1.r), this.g = Nt(t1.g), this.b = Nt(t1.b), this;
        }
        copyLinearToSRGB(t1) {
            return this.r = Bt(t1.r), this.g = Bt(t1.g), this.b = Bt(t1.b), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex(t1 = "srgb") {
            return Ot.fromWorkingColorSpace(Vt(this, Ft), t1), bt(255 * Ft.r, 0, 255) << 16 ^ bt(255 * Ft.g, 0, 255) << 8 ^ bt(255 * Ft.b, 0, 255) << 0;
        }
        getHexString(t1 = "srgb") {
            return ("000000" + this.getHex(t1).toString(16)).slice(-6);
        }
        getHSL(t1, e = "srgb-linear") {
            Ot.fromWorkingColorSpace(Vt(this, Ft), e);
            const n = Ft.r, i = Ft.g, r = Ft.b, s = Math.max(n, i, r), a = Math.min(n, i, r);
            let o, l;
            const c = (a + s) / 2;
            if (a === s) o = 0, l = 0;
            else {
                const t1 = s - a;
                switch(l = c <= .5 ? t1 / (s + a) : t1 / (2 - s - a), s){
                    case n:
                        o = (i - r) / t1 + (i < r ? 6 : 0);
                        break;
                    case i:
                        o = (r - n) / t1 + 2;
                        break;
                    case r:
                        o = (n - i) / t1 + 4;
                }
                o /= 6;
            }
            return t1.h = o, t1.s = l, t1.l = c, t1;
        }
        getRGB(t1, e = "srgb-linear") {
            return Ot.fromWorkingColorSpace(Vt(this, Ft), e), t1.r = Ft.r, t1.g = Ft.g, t1.b = Ft.b, t1;
        }
        getStyle(t1 = "srgb") {
            return Ot.fromWorkingColorSpace(Vt(this, Ft), t1), t1 !== lt ? `color(${t1} ${Ft.r} ${Ft.g} ${Ft.b})` : `rgb(${255 * Ft.r | 0},${255 * Ft.g | 0},${255 * Ft.b | 0})`;
        }
        offsetHSL(t1, e, n) {
            return this.getHSL(Ht), Ht.h += t1, Ht.s += e, Ht.l += n, this.setHSL(Ht.h, Ht.s, Ht.l), this;
        }
        add(t1) {
            return this.r += t1.r, this.g += t1.g, this.b += t1.b, this;
        }
        addColors(t1, e) {
            return this.r = t1.r + e.r, this.g = t1.g + e.g, this.b = t1.b + e.b, this;
        }
        addScalar(t1) {
            return this.r += t1, this.g += t1, this.b += t1, this;
        }
        sub(t1) {
            return this.r = Math.max(0, this.r - t1.r), this.g = Math.max(0, this.g - t1.g), this.b = Math.max(0, this.b - t1.b), this;
        }
        multiply(t1) {
            return this.r *= t1.r, this.g *= t1.g, this.b *= t1.b, this;
        }
        multiplyScalar(t1) {
            return this.r *= t1, this.g *= t1, this.b *= t1, this;
        }
        lerp(t1, e) {
            return this.r += (t1.r - this.r) * e, this.g += (t1.g - this.g) * e, this.b += (t1.b - this.b) * e, this;
        }
        lerpColors(t1, e, n) {
            return this.r = t1.r + (e.r - t1.r) * n, this.g = t1.g + (e.g - t1.g) * n, this.b = t1.b + (e.b - t1.b) * n, this;
        }
        lerpHSL(t1, e) {
            this.getHSL(Ht), t1.getHSL(Gt);
            const n = wt(Ht.h, Gt.h, e), i = wt(Ht.s, Gt.s, e), r = wt(Ht.l, Gt.l, e);
            return this.setHSL(n, i, r), this;
        }
        equals(t1) {
            return t1.r === this.r && t1.g === this.g && t1.b === this.b;
        }
        fromArray(t1, e = 0) {
            return this.r = t1[e], this.g = t1[e + 1], this.b = t1[e + 2], this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this.r, t1[e + 1] = this.g, t1[e + 2] = this.b, t1;
        }
        fromBufferAttribute(t1, e) {
            return this.r = t1.getX(e), this.g = t1.getY(e), this.b = t1.getZ(e), !0 === t1.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this;
        }
        toJSON() {
            return this.getHex();
        }
        *[Symbol.iterator]() {
            yield this.r, yield this.g, yield this.b;
        }
    }
    let jt;
    Wt.NAMES = Ut, Wt.prototype.isColor = !0, Wt.prototype.r = 1, Wt.prototype.g = 1, Wt.prototype.b = 1;
    class qt {
        static getDataURL(t1) {
            if (/^data:/i.test(t1.src)) return t1.src;
            if ("undefined" == typeof HTMLCanvasElement) return t1.src;
            let e;
            if (t1 instanceof HTMLCanvasElement) e = t1;
            else {
                void 0 === jt && (jt = It("canvas")), jt.width = t1.width, jt.height = t1.height;
                const n = jt.getContext("2d");
                t1 instanceof ImageData ? n.putImageData(t1, 0, 0) : n.drawImage(t1, 0, 0, t1.width, t1.height), e = jt;
            }
            return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t1), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png");
        }
        static sRGBToLinear(t1) {
            if ("undefined" != typeof HTMLImageElement && t1 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t1 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t1 instanceof ImageBitmap) {
                const e = It("canvas");
                e.width = t1.width, e.height = t1.height;
                const n = e.getContext("2d");
                n.drawImage(t1, 0, 0, t1.width, t1.height);
                const i = n.getImageData(0, 0, t1.width, t1.height), r = i.data;
                for(let t1 = 0; t1 < r.length; t1++)r[t1] = 255 * Nt(r[t1] / 255);
                return n.putImageData(i, 0, 0), e;
            }
            if (t1.data) {
                const e = t1.data.slice(0);
                for(let t1 = 0; t1 < e.length; t1++)e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t1] = Math.floor(255 * Nt(e[t1] / 255)) : e[t1] = Nt(e[t1]);
                return {
                    data: e,
                    width: t1.width,
                    height: t1.height
                };
            }
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t1;
        }
    }
    class Xt {
        constructor(t1 = null){
            this.uuid = _t(), this.data = t1, this.version = 0;
        }
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
        toJSON(t1) {
            const e = void 0 === t1 || "string" == typeof t1;
            if (!e && void 0 !== t1.images[this.uuid]) return t1.images[this.uuid];
            const n = {
                uuid: this.uuid,
                url: ""
            }, i = this.data;
            if (null !== i) {
                let t1;
                if (Array.isArray(i)) {
                    t1 = [];
                    for(let e = 0, n = i.length; e < n; e++)i[e].isDataTexture ? t1.push(Jt(i[e].image)) : t1.push(Jt(i[e]));
                } else t1 = Jt(i);
                n.url = t1;
            }
            return e || (t1.images[this.uuid] = n), n;
        }
    }
    function Jt(t1) {
        return "undefined" != typeof HTMLImageElement && t1 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t1 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t1 instanceof ImageBitmap ? qt.getDataURL(t1) : t1.data ? {
            data: Array.prototype.slice.call(t1.data),
            width: t1.width,
            height: t1.height,
            type: t1.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
    }
    Xt.prototype.isSource = !0;
    let Yt = 0;
    class Zt extends ft {
        constructor(t1 = Zt.DEFAULT_IMAGE, e = Zt.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, s = 1008, a = 1023, o = 1009, l = 1, c = 3e3){
            super(), Object.defineProperty(this, "id", {
                value: Yt++
            }), this.uuid = _t(), this.name = "", this.source = new Xt(t1), this.mipmaps = [], this.mapping = e, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = o, this.offset = new Rt(0, 0), this.repeat = new Rt(1, 1), this.center = new Rt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ct, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
        }
        get image() {
            return this.source.data;
        }
        set image(t1) {
            this.source.data = t1;
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.name = t1.name, this.source = t1.source, this.mipmaps = t1.mipmaps.slice(0), this.mapping = t1.mapping, this.wrapS = t1.wrapS, this.wrapT = t1.wrapT, this.magFilter = t1.magFilter, this.minFilter = t1.minFilter, this.anisotropy = t1.anisotropy, this.format = t1.format, this.internalFormat = t1.internalFormat, this.type = t1.type, this.offset.copy(t1.offset), this.repeat.copy(t1.repeat), this.center.copy(t1.center), this.rotation = t1.rotation, this.matrixAutoUpdate = t1.matrixAutoUpdate, this.matrix.copy(t1.matrix), this.generateMipmaps = t1.generateMipmaps, this.premultiplyAlpha = t1.premultiplyAlpha, this.flipY = t1.flipY, this.unpackAlignment = t1.unpackAlignment, this.encoding = t1.encoding, this.userData = JSON.parse(JSON.stringify(t1.userData)), this.needsUpdate = !0, this;
        }
        toJSON(t1) {
            const e = void 0 === t1 || "string" == typeof t1;
            if (!e && void 0 !== t1.textures[this.uuid]) return t1.textures[this.uuid];
            const n = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                image: this.source.toJSON(t1).uuid,
                mapping: this.mapping,
                repeat: [
                    this.repeat.x,
                    this.repeat.y
                ],
                offset: [
                    this.offset.x,
                    this.offset.y
                ],
                center: [
                    this.center.x,
                    this.center.y
                ],
                rotation: this.rotation,
                wrap: [
                    this.wrapS,
                    this.wrapT
                ],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            return "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e || (t1.textures[this.uuid] = n), n;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        transformUv(t1) {
            if (this.mapping !== i) return t1;
            if (t1.applyMatrix3(this.matrix), t1.x < 0 || t1.x > 1) switch(this.wrapS){
                case c:
                    t1.x = t1.x - Math.floor(t1.x);
                    break;
                case h:
                    t1.x = t1.x < 0 ? 0 : 1;
                    break;
                case u:
                    1 === Math.abs(Math.floor(t1.x) % 2) ? t1.x = Math.ceil(t1.x) - t1.x : t1.x = t1.x - Math.floor(t1.x);
            }
            if (t1.y < 0 || t1.y > 1) switch(this.wrapT){
                case c:
                    t1.y = t1.y - Math.floor(t1.y);
                    break;
                case h:
                    t1.y = t1.y < 0 ? 0 : 1;
                    break;
                case u:
                    1 === Math.abs(Math.floor(t1.y) % 2) ? t1.y = Math.ceil(t1.y) - t1.y : t1.y = t1.y - Math.floor(t1.y);
            }
            return this.flipY && (t1.y = 1 - t1.y), t1;
        }
        set needsUpdate(t1) {
            !0 === t1 && (this.version++, this.source.needsUpdate = !0);
        }
    }
    Zt.DEFAULT_IMAGE = null, Zt.DEFAULT_MAPPING = i, Zt.prototype.isTexture = !0;
    class Kt {
        constructor(t1 = 0, e = 0, n = 0, i = 1){
            this.x = t1, this.y = e, this.z = n, this.w = i;
        }
        get width() {
            return this.z;
        }
        set width(t1) {
            this.z = t1;
        }
        get height() {
            return this.w;
        }
        set height(t1) {
            this.w = t1;
        }
        set(t1, e, n, i) {
            return this.x = t1, this.y = e, this.z = n, this.w = i, this;
        }
        setScalar(t1) {
            return this.x = t1, this.y = t1, this.z = t1, this.w = t1, this;
        }
        setX(t1) {
            return this.x = t1, this;
        }
        setY(t1) {
            return this.y = t1, this;
        }
        setZ(t1) {
            return this.z = t1, this;
        }
        setW(t1) {
            return this.w = t1, this;
        }
        setComponent(t1, e) {
            switch(t1){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t1);
            }
            return this;
        }
        getComponent(t1) {
            switch(t1){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t1);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(t1) {
            return this.x = t1.x, this.y = t1.y, this.z = t1.z, this.w = void 0 !== t1.w ? t1.w : 1, this;
        }
        add(t1, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t1, e)) : (this.x += t1.x, this.y += t1.y, this.z += t1.z, this.w += t1.w, this);
        }
        addScalar(t1) {
            return this.x += t1, this.y += t1, this.z += t1, this.w += t1, this;
        }
        addVectors(t1, e) {
            return this.x = t1.x + e.x, this.y = t1.y + e.y, this.z = t1.z + e.z, this.w = t1.w + e.w, this;
        }
        addScaledVector(t1, e) {
            return this.x += t1.x * e, this.y += t1.y * e, this.z += t1.z * e, this.w += t1.w * e, this;
        }
        sub(t1, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t1, e)) : (this.x -= t1.x, this.y -= t1.y, this.z -= t1.z, this.w -= t1.w, this);
        }
        subScalar(t1) {
            return this.x -= t1, this.y -= t1, this.z -= t1, this.w -= t1, this;
        }
        subVectors(t1, e) {
            return this.x = t1.x - e.x, this.y = t1.y - e.y, this.z = t1.z - e.z, this.w = t1.w - e.w, this;
        }
        multiply(t1) {
            return this.x *= t1.x, this.y *= t1.y, this.z *= t1.z, this.w *= t1.w, this;
        }
        multiplyScalar(t1) {
            return this.x *= t1, this.y *= t1, this.z *= t1, this.w *= t1, this;
        }
        applyMatrix4(t1) {
            const e = this.x, n = this.y, i = this.z, r = this.w, s = t1.elements;
            return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this;
        }
        divideScalar(t1) {
            return this.multiplyScalar(1 / t1);
        }
        setAxisAngleFromQuaternion(t1) {
            this.w = 2 * Math.acos(t1.w);
            const e = Math.sqrt(1 - t1.w * t1.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t1.x / e, this.y = t1.y / e, this.z = t1.z / e), this;
        }
        setAxisAngleFromRotationMatrix(t1) {
            let e, n, i, r;
            const s = .01, a = .1, o = t1.elements, l = o[0], c = o[4], h = o[8], u = o[1], d = o[5], p = o[9], m = o[2], f = o[6], g = o[10];
            if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
                if (Math.abs(c + u) < a && Math.abs(h + m) < a && Math.abs(p + f) < a && Math.abs(l + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                const t1 = (l + 1) / 2, o = (d + 1) / 2, v = (g + 1) / 2, y = (c + u) / 4, x = (h + m) / 4, _ = (p + f) / 4;
                return t1 > o && t1 > v ? t1 < s ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t1), i = y / n, r = x / n) : o > v ? o < s ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(o), n = y / i, r = _ / i) : v < s ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(v), n = x / r, i = _ / r), this.set(n, i, r, e), this;
            }
            let v = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
            return Math.abs(v) < .001 && (v = 1), this.x = (f - p) / v, this.y = (h - m) / v, this.z = (u - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this;
        }
        min(t1) {
            return this.x = Math.min(this.x, t1.x), this.y = Math.min(this.y, t1.y), this.z = Math.min(this.z, t1.z), this.w = Math.min(this.w, t1.w), this;
        }
        max(t1) {
            return this.x = Math.max(this.x, t1.x), this.y = Math.max(this.y, t1.y), this.z = Math.max(this.z, t1.z), this.w = Math.max(this.w, t1.w), this;
        }
        clamp(t1, e) {
            return this.x = Math.max(t1.x, Math.min(e.x, this.x)), this.y = Math.max(t1.y, Math.min(e.y, this.y)), this.z = Math.max(t1.z, Math.min(e.z, this.z)), this.w = Math.max(t1.w, Math.min(e.w, this.w)), this;
        }
        clampScalar(t1, e) {
            return this.x = Math.max(t1, Math.min(e, this.x)), this.y = Math.max(t1, Math.min(e, this.y)), this.z = Math.max(t1, Math.min(e, this.z)), this.w = Math.max(t1, Math.min(e, this.w)), this;
        }
        clampLength(t1, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t1, Math.min(e, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
        }
        dot(t1) {
            return this.x * t1.x + this.y * t1.y + this.z * t1.z + this.w * t1.w;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t1) {
            return this.normalize().multiplyScalar(t1);
        }
        lerp(t1, e) {
            return this.x += (t1.x - this.x) * e, this.y += (t1.y - this.y) * e, this.z += (t1.z - this.z) * e, this.w += (t1.w - this.w) * e, this;
        }
        lerpVectors(t1, e, n) {
            return this.x = t1.x + (e.x - t1.x) * n, this.y = t1.y + (e.y - t1.y) * n, this.z = t1.z + (e.z - t1.z) * n, this.w = t1.w + (e.w - t1.w) * n, this;
        }
        equals(t1) {
            return t1.x === this.x && t1.y === this.y && t1.z === this.z && t1.w === this.w;
        }
        fromArray(t1, e = 0) {
            return this.x = t1[e], this.y = t1[e + 1], this.z = t1[e + 2], this.w = t1[e + 3], this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this.x, t1[e + 1] = this.y, t1[e + 2] = this.z, t1[e + 3] = this.w, t1;
        }
        fromBufferAttribute(t1, e, n) {
            return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t1.getX(e), this.y = t1.getY(e), this.z = t1.getZ(e), this.w = t1.getW(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z, yield this.w;
        }
    }
    Kt.prototype.isVector4 = !0;
    class Qt extends ft {
        constructor(t1, e, n = {}){
            super(), this.width = t1, this.height = e, this.depth = 1, this.scissor = new Kt(0, 0, t1, e), this.scissorTest = !1, this.viewport = new Kt(0, 0, t1, e);
            const i = {
                width: t1,
                height: e,
                depth: 1
            };
            this.texture = new Zt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.internalFormat = void 0 !== n.internalFormat ? n.internalFormat : null, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : f, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null, this.samples = void 0 !== n.samples ? n.samples : 0;
        }
        setSize(t1, e, n = 1) {
            this.width === t1 && this.height === e && this.depth === n || (this.width = t1, this.height = e, this.depth = n, this.texture.image.width = t1, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t1, e), this.scissor.set(0, 0, t1, e);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            this.width = t1.width, this.height = t1.height, this.depth = t1.depth, this.viewport.copy(t1.viewport), this.texture = t1.texture.clone(), this.texture.isRenderTargetTexture = !0;
            const e = Object.assign({}, t1.texture.image);
            return this.texture.source = new Xt(e), this.depthBuffer = t1.depthBuffer, this.stencilBuffer = t1.stencilBuffer, null !== t1.depthTexture && (this.depthTexture = t1.depthTexture.clone()), this.samples = t1.samples, this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    Qt.prototype.isWebGLRenderTarget = !0;
    class $t extends Zt {
        constructor(t1 = null, e = 1, n = 1, i = 1){
            super(null), this.image = {
                data: t1,
                width: e,
                height: n,
                depth: i
            }, this.magFilter = d, this.minFilter = d, this.wrapR = h, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    $t.prototype.isDataArrayTexture = !0;
    class te extends Qt {
        constructor(t1, e, n){
            super(t1, e), this.depth = n, this.texture = new $t(null, t1, e, n), this.texture.isRenderTargetTexture = !0;
        }
    }
    te.prototype.isWebGLArrayRenderTarget = !0;
    class ee extends Zt {
        constructor(t1 = null, e = 1, n = 1, i = 1){
            super(null), this.image = {
                data: t1,
                width: e,
                height: n,
                depth: i
            }, this.magFilter = d, this.minFilter = d, this.wrapR = h, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    ee.prototype.isData3DTexture = !0;
    class ne extends Qt {
        constructor(t1, e, n){
            super(t1, e), this.depth = n, this.texture = new ee(null, t1, e, n), this.texture.isRenderTargetTexture = !0;
        }
    }
    ne.prototype.isWebGL3DRenderTarget = !0;
    class ie extends Qt {
        constructor(t1, e, n, i = {}){
            super(t1, e, i);
            const r = this.texture;
            this.texture = [];
            for(let t1 = 0; t1 < n; t1++)this.texture[t1] = r.clone(), this.texture[t1].isRenderTargetTexture = !0;
        }
        setSize(t1, e, n = 1) {
            if (this.width !== t1 || this.height !== e || this.depth !== n) {
                this.width = t1, this.height = e, this.depth = n;
                for(let i = 0, r = this.texture.length; i < r; i++)this.texture[i].image.width = t1, this.texture[i].image.height = e, this.texture[i].image.depth = n;
                this.dispose();
            }
            return this.viewport.set(0, 0, t1, e), this.scissor.set(0, 0, t1, e), this;
        }
        copy(t1) {
            this.dispose(), this.width = t1.width, this.height = t1.height, this.depth = t1.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = t1.depthBuffer, this.stencilBuffer = t1.stencilBuffer, null !== t1.depthTexture && (this.depthTexture = t1.depthTexture.clone()), this.texture.length = 0;
            for(let e = 0, n = t1.texture.length; e < n; e++)this.texture[e] = t1.texture[e].clone(), this.texture[e].isRenderTargetTexture = !0;
            return this;
        }
    }
    ie.prototype.isWebGLMultipleRenderTargets = !0;
    class re {
        constructor(t1 = 0, e = 0, n = 0, i = 1){
            this._x = t1, this._y = e, this._z = n, this._w = i;
        }
        static slerp(t1, e, n, i) {
            return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(t1, e, i);
        }
        static slerpFlat(t1, e, n, i, r, s, a) {
            let o = n[i + 0], l = n[i + 1], c = n[i + 2], h = n[i + 3];
            const u = r[s + 0], d = r[s + 1], p = r[s + 2], m = r[s + 3];
            if (0 === a) return t1[e + 0] = o, t1[e + 1] = l, t1[e + 2] = c, void (t1[e + 3] = h);
            if (1 === a) return t1[e + 0] = u, t1[e + 1] = d, t1[e + 2] = p, void (t1[e + 3] = m);
            if (h !== m || o !== u || l !== d || c !== p) {
                let t1 = 1 - a;
                const e = o * u + l * d + c * p + h * m, n = e >= 0 ? 1 : -1, i = 1 - e * e;
                if (i > Number.EPSILON) {
                    const r = Math.sqrt(i), s = Math.atan2(r, e * n);
                    t1 = Math.sin(t1 * s) / r, a = Math.sin(a * s) / r;
                }
                const r = a * n;
                if (o = o * t1 + u * r, l = l * t1 + d * r, c = c * t1 + p * r, h = h * t1 + m * r, t1 === 1 - a) {
                    const t1 = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                    o *= t1, l *= t1, c *= t1, h *= t1;
                }
            }
            t1[e] = o, t1[e + 1] = l, t1[e + 2] = c, t1[e + 3] = h;
        }
        static multiplyQuaternionsFlat(t1, e, n, i, r, s) {
            const a = n[i], o = n[i + 1], l = n[i + 2], c = n[i + 3], h = r[s], u = r[s + 1], d = r[s + 2], p = r[s + 3];
            return t1[e] = a * p + c * h + o * d - l * u, t1[e + 1] = o * p + c * u + l * h - a * d, t1[e + 2] = l * p + c * d + a * u - o * h, t1[e + 3] = c * p - a * h - o * u - l * d, t1;
        }
        get x() {
            return this._x;
        }
        set x(t1) {
            this._x = t1, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t1) {
            this._y = t1, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t1) {
            this._z = t1, this._onChangeCallback();
        }
        get w() {
            return this._w;
        }
        set w(t1) {
            this._w = t1, this._onChangeCallback();
        }
        set(t1, e, n, i) {
            return this._x = t1, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(t1) {
            return this._x = t1.x, this._y = t1.y, this._z = t1.z, this._w = t1.w, this._onChangeCallback(), this;
        }
        setFromEuler(t1, e) {
            if (!t1 || !t1.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            const n = t1._x, i = t1._y, r = t1._z, s = t1._order, a = Math.cos, o = Math.sin, l = a(n / 2), c = a(i / 2), h = a(r / 2), u = o(n / 2), d = o(i / 2), p = o(r / 2);
            switch(s){
                case "XYZ":
                    this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "YXZ":
                    this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                    break;
                case "ZXY":
                    this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "ZYX":
                    this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                    break;
                case "YZX":
                    this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "XZY":
                    this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
            }
            return !1 !== e && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t1, e) {
            const n = e / 2, i = Math.sin(n);
            return this._x = t1.x * i, this._y = t1.y * i, this._z = t1.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t1) {
            const e = t1.elements, n = e[0], i = e[4], r = e[8], s = e[1], a = e[5], o = e[9], l = e[2], c = e[6], h = e[10], u = n + a + h;
            if (u > 0) {
                const t1 = .5 / Math.sqrt(u + 1);
                this._w = .25 / t1, this._x = (c - o) * t1, this._y = (r - l) * t1, this._z = (s - i) * t1;
            } else if (n > a && n > h) {
                const t1 = 2 * Math.sqrt(1 + n - a - h);
                this._w = (c - o) / t1, this._x = .25 * t1, this._y = (i + s) / t1, this._z = (r + l) / t1;
            } else if (a > h) {
                const t1 = 2 * Math.sqrt(1 + a - n - h);
                this._w = (r - l) / t1, this._x = (i + s) / t1, this._y = .25 * t1, this._z = (o + c) / t1;
            } else {
                const t1 = 2 * Math.sqrt(1 + h - n - a);
                this._w = (s - i) / t1, this._x = (r + l) / t1, this._y = (o + c) / t1, this._z = .25 * t1;
            }
            return this._onChangeCallback(), this;
        }
        setFromUnitVectors(t1, e) {
            let n = t1.dot(e) + 1;
            return n < Number.EPSILON ? (n = 0, Math.abs(t1.x) > Math.abs(t1.z) ? (this._x = -t1.y, this._y = t1.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t1.z, this._z = t1.y, this._w = n)) : (this._x = t1.y * e.z - t1.z * e.y, this._y = t1.z * e.x - t1.x * e.z, this._z = t1.x * e.y - t1.y * e.x, this._w = n), this.normalize();
        }
        angleTo(t1) {
            return 2 * Math.acos(Math.abs(bt(this.dot(t1), -1, 1)));
        }
        rotateTowards(t1, e) {
            const n = this.angleTo(t1);
            if (0 === n) return this;
            const i = Math.min(1, e / n);
            return this.slerp(t1, i), this;
        }
        identity() {
            return this.set(0, 0, 0, 1);
        }
        invert() {
            return this.conjugate();
        }
        conjugate() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
        }
        dot(t1) {
            return this._x * t1._x + this._y * t1._y + this._z * t1._z + this._w * t1._w;
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
        }
        normalize() {
            let t1 = this.length();
            return 0 === t1 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t1 = 1 / t1, this._x = this._x * t1, this._y = this._y * t1, this._z = this._z * t1, this._w = this._w * t1), this._onChangeCallback(), this;
        }
        multiply(t1, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t1, e)) : this.multiplyQuaternions(this, t1);
        }
        premultiply(t1) {
            return this.multiplyQuaternions(t1, this);
        }
        multiplyQuaternions(t1, e) {
            const n = t1._x, i = t1._y, r = t1._z, s = t1._w, a = e._x, o = e._y, l = e._z, c = e._w;
            return this._x = n * c + s * a + i * l - r * o, this._y = i * c + s * o + r * a - n * l, this._z = r * c + s * l + n * o - i * a, this._w = s * c - n * a - i * o - r * l, this._onChangeCallback(), this;
        }
        slerp(t1, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t1);
            const n = this._x, i = this._y, r = this._z, s = this._w;
            let a = s * t1._w + n * t1._x + i * t1._y + r * t1._z;
            if (a < 0 ? (this._w = -t1._w, this._x = -t1._x, this._y = -t1._y, this._z = -t1._z, a = -a) : this.copy(t1), a >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this;
            const o = 1 - a * a;
            if (o <= Number.EPSILON) {
                const t1 = 1 - e;
                return this._w = t1 * s + e * this._w, this._x = t1 * n + e * this._x, this._y = t1 * i + e * this._y, this._z = t1 * r + e * this._z, this.normalize(), this._onChangeCallback(), this;
            }
            const l = Math.sqrt(o), c = Math.atan2(l, a), h = Math.sin((1 - e) * c) / l, u = Math.sin(e * c) / l;
            return this._w = s * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this;
        }
        slerpQuaternions(t1, e, n) {
            return this.copy(t1).slerp(e, n);
        }
        random() {
            const t1 = Math.random(), e = Math.sqrt(1 - t1), n = Math.sqrt(t1), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
            return this.set(e * Math.cos(i), n * Math.sin(r), n * Math.cos(r), e * Math.sin(i));
        }
        equals(t1) {
            return t1._x === this._x && t1._y === this._y && t1._z === this._z && t1._w === this._w;
        }
        fromArray(t1, e = 0) {
            return this._x = t1[e], this._y = t1[e + 1], this._z = t1[e + 2], this._w = t1[e + 3], this._onChangeCallback(), this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this._x, t1[e + 1] = this._y, t1[e + 2] = this._z, t1[e + 3] = this._w, t1;
        }
        fromBufferAttribute(t1, e) {
            return this._x = t1.getX(e), this._y = t1.getY(e), this._z = t1.getZ(e), this._w = t1.getW(e), this;
        }
        _onChange(t1) {
            return this._onChangeCallback = t1, this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._w;
        }
    }
    re.prototype.isQuaternion = !0;
    class se {
        constructor(t1 = 0, e = 0, n = 0){
            this.x = t1, this.y = e, this.z = n;
        }
        set(t1, e, n) {
            return void 0 === n && (n = this.z), this.x = t1, this.y = e, this.z = n, this;
        }
        setScalar(t1) {
            return this.x = t1, this.y = t1, this.z = t1, this;
        }
        setX(t1) {
            return this.x = t1, this;
        }
        setY(t1) {
            return this.y = t1, this;
        }
        setZ(t1) {
            return this.z = t1, this;
        }
        setComponent(t1, e) {
            switch(t1){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t1);
            }
            return this;
        }
        getComponent(t1) {
            switch(t1){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t1);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z);
        }
        copy(t1) {
            return this.x = t1.x, this.y = t1.y, this.z = t1.z, this;
        }
        add(t1, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t1, e)) : (this.x += t1.x, this.y += t1.y, this.z += t1.z, this);
        }
        addScalar(t1) {
            return this.x += t1, this.y += t1, this.z += t1, this;
        }
        addVectors(t1, e) {
            return this.x = t1.x + e.x, this.y = t1.y + e.y, this.z = t1.z + e.z, this;
        }
        addScaledVector(t1, e) {
            return this.x += t1.x * e, this.y += t1.y * e, this.z += t1.z * e, this;
        }
        sub(t1, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t1, e)) : (this.x -= t1.x, this.y -= t1.y, this.z -= t1.z, this);
        }
        subScalar(t1) {
            return this.x -= t1, this.y -= t1, this.z -= t1, this;
        }
        subVectors(t1, e) {
            return this.x = t1.x - e.x, this.y = t1.y - e.y, this.z = t1.z - e.z, this;
        }
        multiply(t1, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t1, e)) : (this.x *= t1.x, this.y *= t1.y, this.z *= t1.z, this);
        }
        multiplyScalar(t1) {
            return this.x *= t1, this.y *= t1, this.z *= t1, this;
        }
        multiplyVectors(t1, e) {
            return this.x = t1.x * e.x, this.y = t1.y * e.y, this.z = t1.z * e.z, this;
        }
        applyEuler(t1) {
            return t1 && t1.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(oe.setFromEuler(t1));
        }
        applyAxisAngle(t1, e) {
            return this.applyQuaternion(oe.setFromAxisAngle(t1, e));
        }
        applyMatrix3(t1) {
            const e = this.x, n = this.y, i = this.z, r = t1.elements;
            return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
        }
        applyNormalMatrix(t1) {
            return this.applyMatrix3(t1).normalize();
        }
        applyMatrix4(t1) {
            const e = this.x, n = this.y, i = this.z, r = t1.elements, s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
            return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this;
        }
        applyQuaternion(t1) {
            const e = this.x, n = this.y, i = this.z, r = t1.x, s = t1.y, a = t1.z, o = t1.w, l = o * e + s * i - a * n, c = o * n + a * e - r * i, h = o * i + r * n - s * e, u = -r * e - s * n - a * i;
            return this.x = l * o + u * -r + c * -a - h * -s, this.y = c * o + u * -s + h * -r - l * -a, this.z = h * o + u * -a + l * -s - c * -r, this;
        }
        project(t1) {
            return this.applyMatrix4(t1.matrixWorldInverse).applyMatrix4(t1.projectionMatrix);
        }
        unproject(t1) {
            return this.applyMatrix4(t1.projectionMatrixInverse).applyMatrix4(t1.matrixWorld);
        }
        transformDirection(t1) {
            const e = this.x, n = this.y, i = this.z, r = t1.elements;
            return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
        }
        divide(t1) {
            return this.x /= t1.x, this.y /= t1.y, this.z /= t1.z, this;
        }
        divideScalar(t1) {
            return this.multiplyScalar(1 / t1);
        }
        min(t1) {
            return this.x = Math.min(this.x, t1.x), this.y = Math.min(this.y, t1.y), this.z = Math.min(this.z, t1.z), this;
        }
        max(t1) {
            return this.x = Math.max(this.x, t1.x), this.y = Math.max(this.y, t1.y), this.z = Math.max(this.z, t1.z), this;
        }
        clamp(t1, e) {
            return this.x = Math.max(t1.x, Math.min(e.x, this.x)), this.y = Math.max(t1.y, Math.min(e.y, this.y)), this.z = Math.max(t1.z, Math.min(e.z, this.z)), this;
        }
        clampScalar(t1, e) {
            return this.x = Math.max(t1, Math.min(e, this.x)), this.y = Math.max(t1, Math.min(e, this.y)), this.z = Math.max(t1, Math.min(e, this.z)), this;
        }
        clampLength(t1, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t1, Math.min(e, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
        }
        dot(t1) {
            return this.x * t1.x + this.y * t1.y + this.z * t1.z;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t1) {
            return this.normalize().multiplyScalar(t1);
        }
        lerp(t1, e) {
            return this.x += (t1.x - this.x) * e, this.y += (t1.y - this.y) * e, this.z += (t1.z - this.z) * e, this;
        }
        lerpVectors(t1, e, n) {
            return this.x = t1.x + (e.x - t1.x) * n, this.y = t1.y + (e.y - t1.y) * n, this.z = t1.z + (e.z - t1.z) * n, this;
        }
        cross(t1, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t1, e)) : this.crossVectors(this, t1);
        }
        crossVectors(t1, e) {
            const n = t1.x, i = t1.y, r = t1.z, s = e.x, a = e.y, o = e.z;
            return this.x = i * o - r * a, this.y = r * s - n * o, this.z = n * a - i * s, this;
        }
        projectOnVector(t1) {
            const e = t1.lengthSq();
            if (0 === e) return this.set(0, 0, 0);
            const n = t1.dot(this) / e;
            return this.copy(t1).multiplyScalar(n);
        }
        projectOnPlane(t1) {
            return ae.copy(this).projectOnVector(t1), this.sub(ae);
        }
        reflect(t1) {
            return this.sub(ae.copy(t1).multiplyScalar(2 * this.dot(t1)));
        }
        angleTo(t1) {
            const e = Math.sqrt(this.lengthSq() * t1.lengthSq());
            if (0 === e) return Math.PI / 2;
            const n = this.dot(t1) / e;
            return Math.acos(bt(n, -1, 1));
        }
        distanceTo(t1) {
            return Math.sqrt(this.distanceToSquared(t1));
        }
        distanceToSquared(t1) {
            const e = this.x - t1.x, n = this.y - t1.y, i = this.z - t1.z;
            return e * e + n * n + i * i;
        }
        manhattanDistanceTo(t1) {
            return Math.abs(this.x - t1.x) + Math.abs(this.y - t1.y) + Math.abs(this.z - t1.z);
        }
        setFromSpherical(t1) {
            return this.setFromSphericalCoords(t1.radius, t1.phi, t1.theta);
        }
        setFromSphericalCoords(t1, e, n) {
            const i = Math.sin(e) * t1;
            return this.x = i * Math.sin(n), this.y = Math.cos(e) * t1, this.z = i * Math.cos(n), this;
        }
        setFromCylindrical(t1) {
            return this.setFromCylindricalCoords(t1.radius, t1.theta, t1.y);
        }
        setFromCylindricalCoords(t1, e, n) {
            return this.x = t1 * Math.sin(e), this.y = n, this.z = t1 * Math.cos(e), this;
        }
        setFromMatrixPosition(t1) {
            const e = t1.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this;
        }
        setFromMatrixScale(t1) {
            const e = this.setFromMatrixColumn(t1, 0).length(), n = this.setFromMatrixColumn(t1, 1).length(), i = this.setFromMatrixColumn(t1, 2).length();
            return this.x = e, this.y = n, this.z = i, this;
        }
        setFromMatrixColumn(t1, e) {
            return this.fromArray(t1.elements, 4 * e);
        }
        setFromMatrix3Column(t1, e) {
            return this.fromArray(t1.elements, 3 * e);
        }
        setFromEuler(t1) {
            return this.x = t1._x, this.y = t1._y, this.z = t1._z, this;
        }
        equals(t1) {
            return t1.x === this.x && t1.y === this.y && t1.z === this.z;
        }
        fromArray(t1, e = 0) {
            return this.x = t1[e], this.y = t1[e + 1], this.z = t1[e + 2], this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this.x, t1[e + 1] = this.y, t1[e + 2] = this.z, t1;
        }
        fromBufferAttribute(t1, e, n) {
            return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t1.getX(e), this.y = t1.getY(e), this.z = t1.getZ(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
        }
        randomDirection() {
            const t1 = 2 * (Math.random() - .5), e = Math.random() * Math.PI * 2, n = Math.sqrt(1 - t1 ** 2);
            return this.x = n * Math.cos(e), this.y = n * Math.sin(e), this.z = t1, this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z;
        }
    }
    se.prototype.isVector3 = !0;
    const ae = new se, oe = new re;
    class le {
        constructor(t1 = new se(1 / 0, 1 / 0, 1 / 0), e = new se(-1 / 0, -1 / 0, -1 / 0)){
            this.min = t1, this.max = e;
        }
        set(t1, e) {
            return this.min.copy(t1), this.max.copy(e), this;
        }
        setFromArray(t1) {
            let e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0;
            for(let o = 0, l = t1.length; o < l; o += 3){
                const l = t1[o], c = t1[o + 1], h = t1[o + 2];
                l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > s && (s = c), h > a && (a = h);
            }
            return this.min.set(e, n, i), this.max.set(r, s, a), this;
        }
        setFromBufferAttribute(t1) {
            let e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0;
            for(let o = 0, l = t1.count; o < l; o++){
                const l = t1.getX(o), c = t1.getY(o), h = t1.getZ(o);
                l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > s && (s = c), h > a && (a = h);
            }
            return this.min.set(e, n, i), this.max.set(r, s, a), this;
        }
        setFromPoints(t1) {
            this.makeEmpty();
            for(let e = 0, n = t1.length; e < n; e++)this.expandByPoint(t1[e]);
            return this;
        }
        setFromCenterAndSize(t1, e) {
            const n = he.copy(e).multiplyScalar(.5);
            return this.min.copy(t1).sub(n), this.max.copy(t1).add(n), this;
        }
        setFromObject(t1, e = !1) {
            return this.makeEmpty(), this.expandByObject(t1, e);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.min.copy(t1.min), this.max.copy(t1.max), this;
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
        }
        getCenter(t1) {
            return this.isEmpty() ? t1.set(0, 0, 0) : t1.addVectors(this.min, this.max).multiplyScalar(.5);
        }
        getSize(t1) {
            return this.isEmpty() ? t1.set(0, 0, 0) : t1.subVectors(this.max, this.min);
        }
        expandByPoint(t1) {
            return this.min.min(t1), this.max.max(t1), this;
        }
        expandByVector(t1) {
            return this.min.sub(t1), this.max.add(t1), this;
        }
        expandByScalar(t1) {
            return this.min.addScalar(-t1), this.max.addScalar(t1), this;
        }
        expandByObject(t1, e = !1) {
            t1.updateWorldMatrix(!1, !1);
            const n = t1.geometry;
            if (void 0 !== n) {
                if (e && null != n.attributes && void 0 !== n.attributes.position) {
                    const e = n.attributes.position;
                    for(let n = 0, i = e.count; n < i; n++)he.fromBufferAttribute(e, n).applyMatrix4(t1.matrixWorld), this.expandByPoint(he);
                } else null === n.boundingBox && n.computeBoundingBox(), ue.copy(n.boundingBox), ue.applyMatrix4(t1.matrixWorld), this.union(ue);
            }
            const i = t1.children;
            for(let t1 = 0, n = i.length; t1 < n; t1++)this.expandByObject(i[t1], e);
            return this;
        }
        containsPoint(t1) {
            return !(t1.x < this.min.x || t1.x > this.max.x || t1.y < this.min.y || t1.y > this.max.y || t1.z < this.min.z || t1.z > this.max.z);
        }
        containsBox(t1) {
            return this.min.x <= t1.min.x && t1.max.x <= this.max.x && this.min.y <= t1.min.y && t1.max.y <= this.max.y && this.min.z <= t1.min.z && t1.max.z <= this.max.z;
        }
        getParameter(t1, e) {
            return e.set((t1.x - this.min.x) / (this.max.x - this.min.x), (t1.y - this.min.y) / (this.max.y - this.min.y), (t1.z - this.min.z) / (this.max.z - this.min.z));
        }
        intersectsBox(t1) {
            return !(t1.max.x < this.min.x || t1.min.x > this.max.x || t1.max.y < this.min.y || t1.min.y > this.max.y || t1.max.z < this.min.z || t1.min.z > this.max.z);
        }
        intersectsSphere(t1) {
            return this.clampPoint(t1.center, he), he.distanceToSquared(t1.center) <= t1.radius * t1.radius;
        }
        intersectsPlane(t1) {
            let e, n;
            return t1.normal.x > 0 ? (e = t1.normal.x * this.min.x, n = t1.normal.x * this.max.x) : (e = t1.normal.x * this.max.x, n = t1.normal.x * this.min.x), t1.normal.y > 0 ? (e += t1.normal.y * this.min.y, n += t1.normal.y * this.max.y) : (e += t1.normal.y * this.max.y, n += t1.normal.y * this.min.y), t1.normal.z > 0 ? (e += t1.normal.z * this.min.z, n += t1.normal.z * this.max.z) : (e += t1.normal.z * this.max.z, n += t1.normal.z * this.min.z), e <= -t1.constant && n >= -t1.constant;
        }
        intersectsTriangle(t1) {
            if (this.isEmpty()) return !1;
            this.getCenter(ye), xe.subVectors(this.max, ye), de.subVectors(t1.a, ye), pe.subVectors(t1.b, ye), me.subVectors(t1.c, ye), fe.subVectors(pe, de), ge.subVectors(me, pe), ve.subVectors(de, me);
            let e = [
                0,
                -fe.z,
                fe.y,
                0,
                -ge.z,
                ge.y,
                0,
                -ve.z,
                ve.y,
                fe.z,
                0,
                -fe.x,
                ge.z,
                0,
                -ge.x,
                ve.z,
                0,
                -ve.x,
                -fe.y,
                fe.x,
                0,
                -ge.y,
                ge.x,
                0,
                -ve.y,
                ve.x,
                0
            ];
            return !!Me(e, de, pe, me, xe) && (e = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], !!Me(e, de, pe, me, xe) && (_e.crossVectors(fe, ge), e = [
                _e.x,
                _e.y,
                _e.z
            ], Me(e, de, pe, me, xe)));
        }
        clampPoint(t1, e) {
            return e.copy(t1).clamp(this.min, this.max);
        }
        distanceToPoint(t1) {
            return he.copy(t1).clamp(this.min, this.max).sub(t1).length();
        }
        getBoundingSphere(t1) {
            return this.getCenter(t1.center), t1.radius = .5 * this.getSize(he).length(), t1;
        }
        intersect(t1) {
            return this.min.max(t1.min), this.max.min(t1.max), this.isEmpty() && this.makeEmpty(), this;
        }
        union(t1) {
            return this.min.min(t1.min), this.max.max(t1.max), this;
        }
        applyMatrix4(t1) {
            return this.isEmpty() || (ce[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t1), ce[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t1), ce[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t1), ce[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t1), ce[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t1), ce[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t1), ce[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t1), ce[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t1), this.setFromPoints(ce)), this;
        }
        translate(t1) {
            return this.min.add(t1), this.max.add(t1), this;
        }
        equals(t1) {
            return t1.min.equals(this.min) && t1.max.equals(this.max);
        }
    }
    le.prototype.isBox3 = !0;
    const ce = [
        new se,
        new se,
        new se,
        new se,
        new se,
        new se,
        new se,
        new se
    ], he = new se, ue = new le, de = new se, pe = new se, me = new se, fe = new se, ge = new se, ve = new se, ye = new se, xe = new se, _e = new se, be = new se;
    function Me(t1, e, n, i, r) {
        for(let s = 0, a = t1.length - 3; s <= a; s += 3){
            be.fromArray(t1, s);
            const a = r.x * Math.abs(be.x) + r.y * Math.abs(be.y) + r.z * Math.abs(be.z), o = e.dot(be), l = n.dot(be), c = i.dot(be);
            if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1;
        }
        return !0;
    }
    const we = new le, Se = new se, Te = new se, Ee = new se;
    class Ae {
        constructor(t1 = new se, e = -1){
            this.center = t1, this.radius = e;
        }
        set(t1, e) {
            return this.center.copy(t1), this.radius = e, this;
        }
        setFromPoints(t1, e) {
            const n = this.center;
            void 0 !== e ? n.copy(e) : we.setFromPoints(t1).getCenter(n);
            let i = 0;
            for(let e = 0, r = t1.length; e < r; e++)i = Math.max(i, n.distanceToSquared(t1[e]));
            return this.radius = Math.sqrt(i), this;
        }
        copy(t1) {
            return this.center.copy(t1.center), this.radius = t1.radius, this;
        }
        isEmpty() {
            return this.radius < 0;
        }
        makeEmpty() {
            return this.center.set(0, 0, 0), this.radius = -1, this;
        }
        containsPoint(t1) {
            return t1.distanceToSquared(this.center) <= this.radius * this.radius;
        }
        distanceToPoint(t1) {
            return t1.distanceTo(this.center) - this.radius;
        }
        intersectsSphere(t1) {
            const e = this.radius + t1.radius;
            return t1.center.distanceToSquared(this.center) <= e * e;
        }
        intersectsBox(t1) {
            return t1.intersectsSphere(this);
        }
        intersectsPlane(t1) {
            return Math.abs(t1.distanceToPoint(this.center)) <= this.radius;
        }
        clampPoint(t1, e) {
            const n = this.center.distanceToSquared(t1);
            return e.copy(t1), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
        }
        getBoundingBox(t1) {
            return this.isEmpty() ? (t1.makeEmpty(), t1) : (t1.set(this.center, this.center), t1.expandByScalar(this.radius), t1);
        }
        applyMatrix4(t1) {
            return this.center.applyMatrix4(t1), this.radius = this.radius * t1.getMaxScaleOnAxis(), this;
        }
        translate(t1) {
            return this.center.add(t1), this;
        }
        expandByPoint(t1) {
            Ee.subVectors(t1, this.center);
            const e = Ee.lengthSq();
            if (e > this.radius * this.radius) {
                const t1 = Math.sqrt(e), n = .5 * (t1 - this.radius);
                this.center.add(Ee.multiplyScalar(n / t1)), this.radius += n;
            }
            return this;
        }
        union(t1) {
            return !0 === this.center.equals(t1.center) ? Te.set(0, 0, 1).multiplyScalar(t1.radius) : Te.subVectors(t1.center, this.center).normalize().multiplyScalar(t1.radius), this.expandByPoint(Se.copy(t1.center).add(Te)), this.expandByPoint(Se.copy(t1.center).sub(Te)), this;
        }
        equals(t1) {
            return t1.center.equals(this.center) && t1.radius === this.radius;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    const Re = new se, Ce = new se, Le = new se, Pe = new se, De = new se, Ie = new se, Ne = new se;
    class Be {
        constructor(t1 = new se, e = new se(0, 0, -1)){
            this.origin = t1, this.direction = e;
        }
        set(t1, e) {
            return this.origin.copy(t1), this.direction.copy(e), this;
        }
        copy(t1) {
            return this.origin.copy(t1.origin), this.direction.copy(t1.direction), this;
        }
        at(t1, e) {
            return e.copy(this.direction).multiplyScalar(t1).add(this.origin);
        }
        lookAt(t1) {
            return this.direction.copy(t1).sub(this.origin).normalize(), this;
        }
        recast(t1) {
            return this.origin.copy(this.at(t1, Re)), this;
        }
        closestPointToPoint(t1, e) {
            e.subVectors(t1, this.origin);
            const n = e.dot(this.direction);
            return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin);
        }
        distanceToPoint(t1) {
            return Math.sqrt(this.distanceSqToPoint(t1));
        }
        distanceSqToPoint(t1) {
            const e = Re.subVectors(t1, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t1) : (Re.copy(this.direction).multiplyScalar(e).add(this.origin), Re.distanceToSquared(t1));
        }
        distanceSqToSegment(t1, e, n, i) {
            Ce.copy(t1).add(e).multiplyScalar(.5), Le.copy(e).sub(t1).normalize(), Pe.copy(this.origin).sub(Ce);
            const r = .5 * t1.distanceTo(e), s = -this.direction.dot(Le), a = Pe.dot(this.direction), o = -Pe.dot(Le), l = Pe.lengthSq(), c = Math.abs(1 - s * s);
            let h, u, d, p;
            if (c > 0) {
                if (h = s * o - a, u = s * a - o, p = r * c, h >= 0) {
                    if (u >= -p) {
                        if (u <= p) {
                            const t1 = 1 / c;
                            h *= t1, u *= t1, d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l;
                        } else u = r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
                    } else u = -r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
                } else u <= -p ? (h = Math.max(0, -(-s * r + a)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
            } else u = s > 0 ? -r : r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
            return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(Le).multiplyScalar(u).add(Ce), d;
        }
        intersectSphere(t1, e) {
            Re.subVectors(t1.center, this.origin);
            const n = Re.dot(this.direction), i = Re.dot(Re) - n * n, r = t1.radius * t1.radius;
            if (i > r) return null;
            const s = Math.sqrt(r - i), a = n - s, o = n + s;
            return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
        }
        intersectsSphere(t1) {
            return this.distanceSqToPoint(t1.center) <= t1.radius * t1.radius;
        }
        distanceToPlane(t1) {
            const e = t1.normal.dot(this.direction);
            if (0 === e) return 0 === t1.distanceToPoint(this.origin) ? 0 : null;
            const n = -(this.origin.dot(t1.normal) + t1.constant) / e;
            return n >= 0 ? n : null;
        }
        intersectPlane(t1, e) {
            const n = this.distanceToPlane(t1);
            return null === n ? null : this.at(n, e);
        }
        intersectsPlane(t1) {
            const e = t1.distanceToPoint(this.origin);
            if (0 === e) return !0;
            return t1.normal.dot(this.direction) * e < 0;
        }
        intersectBox(t1, e) {
            let n, i, r, s, a, o;
            const l = 1 / this.direction.x, c = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin;
            return l >= 0 ? (n = (t1.min.x - u.x) * l, i = (t1.max.x - u.x) * l) : (n = (t1.max.x - u.x) * l, i = (t1.min.x - u.x) * l), c >= 0 ? (r = (t1.min.y - u.y) * c, s = (t1.max.y - u.y) * c) : (r = (t1.max.y - u.y) * c, s = (t1.min.y - u.y) * c), n > s || r > i ? null : ((r > n || n != n) && (n = r), (s < i || i != i) && (i = s), h >= 0 ? (a = (t1.min.z - u.z) * h, o = (t1.max.z - u.z) * h) : (a = (t1.max.z - u.z) * h, o = (t1.min.z - u.z) * h), n > o || a > i ? null : ((a > n || n != n) && (n = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)));
        }
        intersectsBox(t1) {
            return null !== this.intersectBox(t1, Re);
        }
        intersectTriangle(t1, e, n, i, r) {
            De.subVectors(e, t1), Ie.subVectors(n, t1), Ne.crossVectors(De, Ie);
            let s, a = this.direction.dot(Ne);
            if (a > 0) {
                if (i) return null;
                s = 1;
            } else {
                if (!(a < 0)) return null;
                s = -1, a = -a;
            }
            Pe.subVectors(this.origin, t1);
            const o = s * this.direction.dot(Ie.crossVectors(Pe, Ie));
            if (o < 0) return null;
            const l = s * this.direction.dot(De.cross(Pe));
            if (l < 0) return null;
            if (o + l > a) return null;
            const c = -s * Pe.dot(Ne);
            return c < 0 ? null : this.at(c / a, r);
        }
        applyMatrix4(t1) {
            return this.origin.applyMatrix4(t1), this.direction.transformDirection(t1), this;
        }
        equals(t1) {
            return t1.origin.equals(this.origin) && t1.direction.equals(this.direction);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    class ze {
        constructor(){
            this.elements = [
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            ], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
        }
        set(t1, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f) {
            const g = this.elements;
            return g[0] = t1, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = m, g[15] = f, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
            return (new ze).fromArray(this.elements);
        }
        copy(t1) {
            const e = this.elements, n = t1.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
        }
        copyPosition(t1) {
            const e = this.elements, n = t1.elements;
            return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
        }
        setFromMatrix3(t1) {
            const e = t1.elements;
            return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
        }
        extractBasis(t1, e, n) {
            return t1.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
        }
        makeBasis(t1, e, n) {
            return this.set(t1.x, e.x, n.x, 0, t1.y, e.y, n.y, 0, t1.z, e.z, n.z, 0, 0, 0, 0, 1), this;
        }
        extractRotation(t1) {
            const e = this.elements, n = t1.elements, i = 1 / Oe.setFromMatrixColumn(t1, 0).length(), r = 1 / Oe.setFromMatrixColumn(t1, 1).length(), s = 1 / Oe.setFromMatrixColumn(t1, 2).length();
            return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromEuler(t1) {
            t1 && t1.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            const e = this.elements, n = t1.x, i = t1.y, r = t1.z, s = Math.cos(n), a = Math.sin(n), o = Math.cos(i), l = Math.sin(i), c = Math.cos(r), h = Math.sin(r);
            if ("XYZ" === t1.order) {
                const t1 = s * c, n = s * h, i = a * c, r = a * h;
                e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = n + i * l, e[5] = t1 - r * l, e[9] = -a * o, e[2] = r - t1 * l, e[6] = i + n * l, e[10] = s * o;
            } else if ("YXZ" === t1.order) {
                const t1 = o * c, n = o * h, i = l * c, r = l * h;
                e[0] = t1 + r * a, e[4] = i * a - n, e[8] = s * l, e[1] = s * h, e[5] = s * c, e[9] = -a, e[2] = n * a - i, e[6] = r + t1 * a, e[10] = s * o;
            } else if ("ZXY" === t1.order) {
                const t1 = o * c, n = o * h, i = l * c, r = l * h;
                e[0] = t1 - r * a, e[4] = -s * h, e[8] = i + n * a, e[1] = n + i * a, e[5] = s * c, e[9] = r - t1 * a, e[2] = -s * l, e[6] = a, e[10] = s * o;
            } else if ("ZYX" === t1.order) {
                const t1 = s * c, n = s * h, i = a * c, r = a * h;
                e[0] = o * c, e[4] = i * l - n, e[8] = t1 * l + r, e[1] = o * h, e[5] = r * l + t1, e[9] = n * l - i, e[2] = -l, e[6] = a * o, e[10] = s * o;
            } else if ("YZX" === t1.order) {
                const t1 = s * o, n = s * l, i = a * o, r = a * l;
                e[0] = o * c, e[4] = r - t1 * h, e[8] = i * h + n, e[1] = h, e[5] = s * c, e[9] = -a * c, e[2] = -l * c, e[6] = n * h + i, e[10] = t1 - r * h;
            } else if ("XZY" === t1.order) {
                const t1 = s * o, n = s * l, i = a * o, r = a * l;
                e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t1 * h + r, e[5] = s * c, e[9] = n * h - i, e[2] = i * h - n, e[6] = a * c, e[10] = r * h + t1;
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromQuaternion(t1) {
            return this.compose(Fe, t1, He);
        }
        lookAt(t1, e, n) {
            const i = this.elements;
            return Ve.subVectors(t1, e), 0 === Ve.lengthSq() && (Ve.z = 1), Ve.normalize(), Ge.crossVectors(n, Ve), 0 === Ge.lengthSq() && (1 === Math.abs(n.z) ? Ve.x += 1e-4 : Ve.z += 1e-4, Ve.normalize(), Ge.crossVectors(n, Ve)), Ge.normalize(), ke.crossVectors(Ve, Ge), i[0] = Ge.x, i[4] = ke.x, i[8] = Ve.x, i[1] = Ge.y, i[5] = ke.y, i[9] = Ve.y, i[2] = Ge.z, i[6] = ke.z, i[10] = Ve.z, this;
        }
        multiply(t1, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t1, e)) : this.multiplyMatrices(this, t1);
        }
        premultiply(t1) {
            return this.multiplyMatrices(t1, this);
        }
        multiplyMatrices(t1, e) {
            const n = t1.elements, i = e.elements, r = this.elements, s = n[0], a = n[4], o = n[8], l = n[12], c = n[1], h = n[5], u = n[9], d = n[13], p = n[2], m = n[6], f = n[10], g = n[14], v = n[3], y = n[7], x = n[11], _ = n[15], b = i[0], M = i[4], w = i[8], S = i[12], T = i[1], E = i[5], A = i[9], R = i[13], C = i[2], L = i[6], P = i[10], D = i[14], I = i[3], N = i[7], B = i[11], z = i[15];
            return r[0] = s * b + a * T + o * C + l * I, r[4] = s * M + a * E + o * L + l * N, r[8] = s * w + a * A + o * P + l * B, r[12] = s * S + a * R + o * D + l * z, r[1] = c * b + h * T + u * C + d * I, r[5] = c * M + h * E + u * L + d * N, r[9] = c * w + h * A + u * P + d * B, r[13] = c * S + h * R + u * D + d * z, r[2] = p * b + m * T + f * C + g * I, r[6] = p * M + m * E + f * L + g * N, r[10] = p * w + m * A + f * P + g * B, r[14] = p * S + m * R + f * D + g * z, r[3] = v * b + y * T + x * C + _ * I, r[7] = v * M + y * E + x * L + _ * N, r[11] = v * w + y * A + x * P + _ * B, r[15] = v * S + y * R + x * D + _ * z, this;
        }
        multiplyScalar(t1) {
            const e = this.elements;
            return e[0] *= t1, e[4] *= t1, e[8] *= t1, e[12] *= t1, e[1] *= t1, e[5] *= t1, e[9] *= t1, e[13] *= t1, e[2] *= t1, e[6] *= t1, e[10] *= t1, e[14] *= t1, e[3] *= t1, e[7] *= t1, e[11] *= t1, e[15] *= t1, this;
        }
        determinant() {
            const t1 = this.elements, e = t1[0], n = t1[4], i = t1[8], r = t1[12], s = t1[1], a = t1[5], o = t1[9], l = t1[13], c = t1[2], h = t1[6], u = t1[10], d = t1[14];
            return t1[3] * (+r * o * h - i * l * h - r * a * u + n * l * u + i * a * d - n * o * d) + t1[7] * (+e * o * d - e * l * u + r * s * u - i * s * d + i * l * c - r * o * c) + t1[11] * (+e * l * h - e * a * d - r * s * h + n * s * d + r * a * c - n * l * c) + t1[15] * (-i * a * c - e * o * h + e * a * u + i * s * h - n * s * u + n * o * c);
        }
        transpose() {
            const t1 = this.elements;
            let e;
            return e = t1[1], t1[1] = t1[4], t1[4] = e, e = t1[2], t1[2] = t1[8], t1[8] = e, e = t1[6], t1[6] = t1[9], t1[9] = e, e = t1[3], t1[3] = t1[12], t1[12] = e, e = t1[7], t1[7] = t1[13], t1[13] = e, e = t1[11], t1[11] = t1[14], t1[14] = e, this;
        }
        setPosition(t1, e, n) {
            const i = this.elements;
            return t1.isVector3 ? (i[12] = t1.x, i[13] = t1.y, i[14] = t1.z) : (i[12] = t1, i[13] = e, i[14] = n), this;
        }
        invert() {
            const t1 = this.elements, e = t1[0], n = t1[1], i = t1[2], r = t1[3], s = t1[4], a = t1[5], o = t1[6], l = t1[7], c = t1[8], h = t1[9], u = t1[10], d = t1[11], p = t1[12], m = t1[13], f = t1[14], g = t1[15], v = h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g, y = p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g, x = c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g, _ = p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f, b = e * v + n * y + i * x + r * _;
            if (0 === b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const M = 1 / b;
            return t1[0] = v * M, t1[1] = (m * u * r - h * f * r - m * i * d + n * f * d + h * i * g - n * u * g) * M, t1[2] = (a * f * r - m * o * r + m * i * l - n * f * l - a * i * g + n * o * g) * M, t1[3] = (h * o * r - a * u * r - h * i * l + n * u * l + a * i * d - n * o * d) * M, t1[4] = y * M, t1[5] = (c * f * r - p * u * r + p * i * d - e * f * d - c * i * g + e * u * g) * M, t1[6] = (p * o * r - s * f * r - p * i * l + e * f * l + s * i * g - e * o * g) * M, t1[7] = (s * u * r - c * o * r + c * i * l - e * u * l - s * i * d + e * o * d) * M, t1[8] = x * M, t1[9] = (p * h * r - c * m * r - p * n * d + e * m * d + c * n * g - e * h * g) * M, t1[10] = (s * m * r - p * a * r + p * n * l - e * m * l - s * n * g + e * a * g) * M, t1[11] = (c * a * r - s * h * r - c * n * l + e * h * l + s * n * d - e * a * d) * M, t1[12] = _ * M, t1[13] = (c * m * i - p * h * i + p * n * u - e * m * u - c * n * f + e * h * f) * M, t1[14] = (p * a * i - s * m * i - p * n * o + e * m * o + s * n * f - e * a * f) * M, t1[15] = (s * h * i - c * a * i + c * n * o - e * h * o - s * n * u + e * a * u) * M, this;
        }
        scale(t1) {
            const e = this.elements, n = t1.x, i = t1.y, r = t1.z;
            return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
        }
        getMaxScaleOnAxis() {
            const t1 = this.elements, e = t1[0] * t1[0] + t1[1] * t1[1] + t1[2] * t1[2], n = t1[4] * t1[4] + t1[5] * t1[5] + t1[6] * t1[6], i = t1[8] * t1[8] + t1[9] * t1[9] + t1[10] * t1[10];
            return Math.sqrt(Math.max(e, n, i));
        }
        makeTranslation(t1, e, n) {
            return this.set(1, 0, 0, t1, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
        }
        makeRotationX(t1) {
            const e = Math.cos(t1), n = Math.sin(t1);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationY(t1) {
            const e = Math.cos(t1), n = Math.sin(t1);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationZ(t1) {
            const e = Math.cos(t1), n = Math.sin(t1);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        makeRotationAxis(t1, e) {
            const n = Math.cos(e), i = Math.sin(e), r = 1 - n, s = t1.x, a = t1.y, o = t1.z, l = r * s, c = r * a;
            return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, c * a + n, c * o - i * s, 0, l * o - i * a, c * o + i * s, r * o * o + n, 0, 0, 0, 0, 1), this;
        }
        makeScale(t1, e, n) {
            return this.set(t1, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
        }
        makeShear(t1, e, n, i, r, s) {
            return this.set(1, n, r, 0, t1, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t1, e, n) {
            const i = this.elements, r = e._x, s = e._y, a = e._z, o = e._w, l = r + r, c = s + s, h = a + a, u = r * l, d = r * c, p = r * h, m = s * c, f = s * h, g = a * h, v = o * l, y = o * c, x = o * h, _ = n.x, b = n.y, M = n.z;
            return i[0] = (1 - (m + g)) * _, i[1] = (d + x) * _, i[2] = (p - y) * _, i[3] = 0, i[4] = (d - x) * b, i[5] = (1 - (u + g)) * b, i[6] = (f + v) * b, i[7] = 0, i[8] = (p + y) * M, i[9] = (f - v) * M, i[10] = (1 - (u + m)) * M, i[11] = 0, i[12] = t1.x, i[13] = t1.y, i[14] = t1.z, i[15] = 1, this;
        }
        decompose(t1, e, n) {
            const i = this.elements;
            let r = Oe.set(i[0], i[1], i[2]).length();
            const s = Oe.set(i[4], i[5], i[6]).length(), a = Oe.set(i[8], i[9], i[10]).length();
            this.determinant() < 0 && (r = -r), t1.x = i[12], t1.y = i[13], t1.z = i[14], Ue.copy(this);
            const o = 1 / r, l = 1 / s, c = 1 / a;
            return Ue.elements[0] *= o, Ue.elements[1] *= o, Ue.elements[2] *= o, Ue.elements[4] *= l, Ue.elements[5] *= l, Ue.elements[6] *= l, Ue.elements[8] *= c, Ue.elements[9] *= c, Ue.elements[10] *= c, e.setFromRotationMatrix(Ue), n.x = r, n.y = s, n.z = a, this;
        }
        makePerspective(t1, e, n, i, r, s) {
            void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            const a = this.elements, o = 2 * r / (e - t1), l = 2 * r / (n - i), c = (e + t1) / (e - t1), h = (n + i) / (n - i), u = -(s + r) / (s - r), d = -2 * s * r / (s - r);
            return a[0] = o, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = l, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
        }
        makeOrthographic(t1, e, n, i, r, s) {
            const a = this.elements, o = 1 / (e - t1), l = 1 / (n - i), c = 1 / (s - r), h = (e + t1) * o, u = (n + i) * l, d = (s + r) * c;
            return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
        }
        equals(t1) {
            const e = this.elements, n = t1.elements;
            for(let t1 = 0; t1 < 16; t1++)if (e[t1] !== n[t1]) return !1;
            return !0;
        }
        fromArray(t1, e = 0) {
            for(let n = 0; n < 16; n++)this.elements[n] = t1[n + e];
            return this;
        }
        toArray(t1 = [], e = 0) {
            const n = this.elements;
            return t1[e] = n[0], t1[e + 1] = n[1], t1[e + 2] = n[2], t1[e + 3] = n[3], t1[e + 4] = n[4], t1[e + 5] = n[5], t1[e + 6] = n[6], t1[e + 7] = n[7], t1[e + 8] = n[8], t1[e + 9] = n[9], t1[e + 10] = n[10], t1[e + 11] = n[11], t1[e + 12] = n[12], t1[e + 13] = n[13], t1[e + 14] = n[14], t1[e + 15] = n[15], t1;
        }
    }
    ze.prototype.isMatrix4 = !0;
    const Oe = new se, Ue = new ze, Fe = new se(0, 0, 0), He = new se(1, 1, 1), Ge = new se, ke = new se, Ve = new se, We = new ze, je = new re;
    class qe {
        constructor(t1 = 0, e = 0, n = 0, i = qe.DefaultOrder){
            this._x = t1, this._y = e, this._z = n, this._order = i;
        }
        get x() {
            return this._x;
        }
        set x(t1) {
            this._x = t1, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t1) {
            this._y = t1, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t1) {
            this._z = t1, this._onChangeCallback();
        }
        get order() {
            return this._order;
        }
        set order(t1) {
            this._order = t1, this._onChangeCallback();
        }
        set(t1, e, n, i = this._order) {
            return this._x = t1, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(t1) {
            return this._x = t1._x, this._y = t1._y, this._z = t1._z, this._order = t1._order, this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t1, e = this._order, n = !0) {
            const i = t1.elements, r = i[0], s = i[4], a = i[8], o = i[1], l = i[5], c = i[9], h = i[2], u = i[6], d = i[10];
            switch(e){
                case "XYZ":
                    this._y = Math.asin(bt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-bt(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(bt(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(o, r));
                    break;
                case "ZYX":
                    this._y = Math.asin(-bt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l));
                    break;
                case "YZX":
                    this._z = Math.asin(bt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, d));
                    break;
                case "XZY":
                    this._z = Math.asin(-bt(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c, d), this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
            }
            return this._order = e, !0 === n && this._onChangeCallback(), this;
        }
        setFromQuaternion(t1, e, n) {
            return We.makeRotationFromQuaternion(t1), this.setFromRotationMatrix(We, e, n);
        }
        setFromVector3(t1, e = this._order) {
            return this.set(t1.x, t1.y, t1.z, e);
        }
        reorder(t1) {
            return je.setFromEuler(this), this.setFromQuaternion(je, t1);
        }
        equals(t1) {
            return t1._x === this._x && t1._y === this._y && t1._z === this._z && t1._order === this._order;
        }
        fromArray(t1) {
            return this._x = t1[0], this._y = t1[1], this._z = t1[2], void 0 !== t1[3] && (this._order = t1[3]), this._onChangeCallback(), this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this._x, t1[e + 1] = this._y, t1[e + 2] = this._z, t1[e + 3] = this._order, t1;
        }
        _onChange(t1) {
            return this._onChangeCallback = t1, this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._order;
        }
    }
    qe.prototype.isEuler = !0, qe.DefaultOrder = "XYZ", qe.RotationOrders = [
        "XYZ",
        "YZX",
        "ZXY",
        "XZY",
        "YXZ",
        "ZYX"
    ];
    class Xe {
        constructor(){
            this.mask = 1;
        }
        set(t1) {
            this.mask = (1 << t1 | 0) >>> 0;
        }
        enable(t1) {
            this.mask |= 1 << t1 | 0;
        }
        enableAll() {
            this.mask = -1;
        }
        toggle(t1) {
            this.mask ^= 1 << t1 | 0;
        }
        disable(t1) {
            this.mask &= ~(1 << t1 | 0);
        }
        disableAll() {
            this.mask = 0;
        }
        test(t1) {
            return 0 != (this.mask & t1.mask);
        }
        isEnabled(t1) {
            return 0 != (this.mask & (1 << t1 | 0));
        }
    }
    let Je = 0;
    const Ye = new se, Ze = new re, Ke = new ze, Qe = new se, $e = new se, tn = new se, en = new re, nn = new se(1, 0, 0), rn = new se(0, 1, 0), sn = new se(0, 0, 1), an = {
        type: "added"
    }, on = {
        type: "removed"
    };
    class ln extends ft {
        constructor(){
            super(), Object.defineProperty(this, "id", {
                value: Je++
            }), this.uuid = _t(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ln.DefaultUp.clone();
            const t1 = new se, e = new qe, n = new re, i = new se(1, 1, 1);
            e._onChange(function() {
                n.setFromEuler(e, !1);
            }), n._onChange(function() {
                e.setFromQuaternion(n, void 0, !1);
            }), Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: t1
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: i
                },
                modelViewMatrix: {
                    value: new ze
                },
                normalMatrix: {
                    value: new Ct
                }
            }), this.matrix = new ze, this.matrixWorld = new ze, this.matrixAutoUpdate = ln.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Xe, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
        }
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t1) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t1), this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(t1) {
            return this.quaternion.premultiply(t1), this;
        }
        setRotationFromAxisAngle(t1, e) {
            this.quaternion.setFromAxisAngle(t1, e);
        }
        setRotationFromEuler(t1) {
            this.quaternion.setFromEuler(t1, !0);
        }
        setRotationFromMatrix(t1) {
            this.quaternion.setFromRotationMatrix(t1);
        }
        setRotationFromQuaternion(t1) {
            this.quaternion.copy(t1);
        }
        rotateOnAxis(t1, e) {
            return Ze.setFromAxisAngle(t1, e), this.quaternion.multiply(Ze), this;
        }
        rotateOnWorldAxis(t1, e) {
            return Ze.setFromAxisAngle(t1, e), this.quaternion.premultiply(Ze), this;
        }
        rotateX(t1) {
            return this.rotateOnAxis(nn, t1);
        }
        rotateY(t1) {
            return this.rotateOnAxis(rn, t1);
        }
        rotateZ(t1) {
            return this.rotateOnAxis(sn, t1);
        }
        translateOnAxis(t1, e) {
            return Ye.copy(t1).applyQuaternion(this.quaternion), this.position.add(Ye.multiplyScalar(e)), this;
        }
        translateX(t1) {
            return this.translateOnAxis(nn, t1);
        }
        translateY(t1) {
            return this.translateOnAxis(rn, t1);
        }
        translateZ(t1) {
            return this.translateOnAxis(sn, t1);
        }
        localToWorld(t1) {
            return t1.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(t1) {
            return t1.applyMatrix4(Ke.copy(this.matrixWorld).invert());
        }
        lookAt(t1, e, n) {
            t1.isVector3 ? Qe.copy(t1) : Qe.set(t1, e, n);
            const i = this.parent;
            this.updateWorldMatrix(!0, !1), $e.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ke.lookAt($e, Qe, this.up) : Ke.lookAt(Qe, $e, this.up), this.quaternion.setFromRotationMatrix(Ke), i && (Ke.extractRotation(i.matrixWorld), Ze.setFromRotationMatrix(Ke), this.quaternion.premultiply(Ze.invert()));
        }
        add(t1) {
            if (arguments.length > 1) {
                for(let t1 = 0; t1 < arguments.length; t1++)this.add(arguments[t1]);
                return this;
            }
            return t1 === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t1), this) : (t1 && t1.isObject3D ? (null !== t1.parent && t1.parent.remove(t1), t1.parent = this, this.children.push(t1), t1.dispatchEvent(an)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t1), this);
        }
        remove(t1) {
            if (arguments.length > 1) {
                for(let t1 = 0; t1 < arguments.length; t1++)this.remove(arguments[t1]);
                return this;
            }
            const e = this.children.indexOf(t1);
            return -1 !== e && (t1.parent = null, this.children.splice(e, 1), t1.dispatchEvent(on)), this;
        }
        removeFromParent() {
            const t1 = this.parent;
            return null !== t1 && t1.remove(this), this;
        }
        clear() {
            for(let t1 = 0; t1 < this.children.length; t1++){
                const e = this.children[t1];
                e.parent = null, e.dispatchEvent(on);
            }
            return this.children.length = 0, this;
        }
        attach(t1) {
            return this.updateWorldMatrix(!0, !1), Ke.copy(this.matrixWorld).invert(), null !== t1.parent && (t1.parent.updateWorldMatrix(!0, !1), Ke.multiply(t1.parent.matrixWorld)), t1.applyMatrix4(Ke), this.add(t1), t1.updateWorldMatrix(!1, !0), this;
        }
        getObjectById(t1) {
            return this.getObjectByProperty("id", t1);
        }
        getObjectByName(t1) {
            return this.getObjectByProperty("name", t1);
        }
        getObjectByProperty(t1, e) {
            if (this[t1] === e) return this;
            for(let n = 0, i = this.children.length; n < i; n++){
                const i = this.children[n].getObjectByProperty(t1, e);
                if (void 0 !== i) return i;
            }
        }
        getWorldPosition(t1) {
            return this.updateWorldMatrix(!0, !1), t1.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(t1) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose($e, t1, tn), t1;
        }
        getWorldScale(t1) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose($e, en, t1), t1;
        }
        getWorldDirection(t1) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t1.set(e[8], e[9], e[10]).normalize();
        }
        raycast() {}
        traverse(t1) {
            t1(this);
            const e = this.children;
            for(let n = 0, i = e.length; n < i; n++)e[n].traverse(t1);
        }
        traverseVisible(t1) {
            if (!1 === this.visible) return;
            t1(this);
            const e = this.children;
            for(let n = 0, i = e.length; n < i; n++)e[n].traverseVisible(t1);
        }
        traverseAncestors(t1) {
            const e = this.parent;
            null !== e && (t1(e), e.traverseAncestors(t1));
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
        }
        updateMatrixWorld(t1) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t1) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t1 = !0);
            const e = this.children;
            for(let n = 0, i = e.length; n < i; n++)e[n].updateMatrixWorld(t1);
        }
        updateWorldMatrix(t1, e) {
            const n = this.parent;
            if (!0 === t1 && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
                const t1 = this.children;
                for(let e = 0, n = t1.length; e < n; e++)t1[e].updateWorldMatrix(!1, !0);
            }
        }
        toJSON(t1) {
            const e = void 0 === t1 || "string" == typeof t1, n = {};
            e && (t1 = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {},
                nodes: {}
            }, n.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            const i = {};
            function r(e, n) {
                return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t1)), n.uuid;
            }
            if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t1).uuid)), this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(t1).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                i.geometry = r(t1.geometries, this.geometry);
                const e = this.geometry.parameters;
                if (void 0 !== e && void 0 !== e.shapes) {
                    const n = e.shapes;
                    if (Array.isArray(n)) for(let e = 0, i = n.length; e < i; e++){
                        const i = n[e];
                        r(t1.shapes, i);
                    }
                    else r(t1.shapes, n);
                }
            }
            if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t1.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material) {
                if (Array.isArray(this.material)) {
                    const e = [];
                    for(let n = 0, i = this.material.length; n < i; n++)e.push(r(t1.materials, this.material[n]));
                    i.material = e;
                } else i.material = r(t1.materials, this.material);
            }
            if (this.children.length > 0) {
                i.children = [];
                for(let e = 0; e < this.children.length; e++)i.children.push(this.children[e].toJSON(t1).object);
            }
            if (this.animations.length > 0) {
                i.animations = [];
                for(let e = 0; e < this.animations.length; e++){
                    const n = this.animations[e];
                    i.animations.push(r(t1.animations, n));
                }
            }
            if (e) {
                const e = s(t1.geometries), i = s(t1.materials), r = s(t1.textures), a = s(t1.images), o = s(t1.shapes), l = s(t1.skeletons), c = s(t1.animations), h = s(t1.nodes);
                e.length > 0 && (n.geometries = e), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a), o.length > 0 && (n.shapes = o), l.length > 0 && (n.skeletons = l), c.length > 0 && (n.animations = c), h.length > 0 && (n.nodes = h);
            }
            return n.object = i, n;
            function s(t1) {
                const e = [];
                for(const n in t1){
                    const i = t1[n];
                    delete i.metadata, e.push(i);
                }
                return e;
            }
        }
        clone(t1) {
            return (new this.constructor).copy(this, t1);
        }
        copy(t1, e = !0) {
            if (this.name = t1.name, this.up.copy(t1.up), this.position.copy(t1.position), this.rotation.order = t1.rotation.order, this.quaternion.copy(t1.quaternion), this.scale.copy(t1.scale), this.matrix.copy(t1.matrix), this.matrixWorld.copy(t1.matrixWorld), this.matrixAutoUpdate = t1.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t1.matrixWorldNeedsUpdate, this.layers.mask = t1.layers.mask, this.visible = t1.visible, this.castShadow = t1.castShadow, this.receiveShadow = t1.receiveShadow, this.frustumCulled = t1.frustumCulled, this.renderOrder = t1.renderOrder, this.userData = JSON.parse(JSON.stringify(t1.userData)), !0 === e) for(let e = 0; e < t1.children.length; e++){
                const n = t1.children[e];
                this.add(n.clone());
            }
            return this;
        }
    }
    ln.DefaultUp = new se(0, 1, 0), ln.DefaultMatrixAutoUpdate = !0, ln.prototype.isObject3D = !0;
    const cn = new se, hn = new se, un = new se, dn = new se, pn = new se, mn = new se, fn = new se, gn = new se, vn = new se, yn = new se;
    class xn {
        constructor(t1 = new se, e = new se, n = new se){
            this.a = t1, this.b = e, this.c = n;
        }
        static getNormal(t1, e, n, i) {
            i.subVectors(n, e), cn.subVectors(t1, e), i.cross(cn);
            const r = i.lengthSq();
            return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
        }
        static getBarycoord(t1, e, n, i, r) {
            cn.subVectors(i, e), hn.subVectors(n, e), un.subVectors(t1, e);
            const s = cn.dot(cn), a = cn.dot(hn), o = cn.dot(un), l = hn.dot(hn), c = hn.dot(un), h = s * l - a * a;
            if (0 === h) return r.set(-2, -1, -1);
            const u = 1 / h, d = (l * o - a * c) * u, p = (s * c - a * o) * u;
            return r.set(1 - d - p, p, d);
        }
        static containsPoint(t1, e, n, i) {
            return this.getBarycoord(t1, e, n, i, dn), dn.x >= 0 && dn.y >= 0 && dn.x + dn.y <= 1;
        }
        static getUV(t1, e, n, i, r, s, a, o) {
            return this.getBarycoord(t1, e, n, i, dn), o.set(0, 0), o.addScaledVector(r, dn.x), o.addScaledVector(s, dn.y), o.addScaledVector(a, dn.z), o;
        }
        static isFrontFacing(t1, e, n, i) {
            return cn.subVectors(n, e), hn.subVectors(t1, e), cn.cross(hn).dot(i) < 0;
        }
        set(t1, e, n) {
            return this.a.copy(t1), this.b.copy(e), this.c.copy(n), this;
        }
        setFromPointsAndIndices(t1, e, n, i) {
            return this.a.copy(t1[e]), this.b.copy(t1[n]), this.c.copy(t1[i]), this;
        }
        setFromAttributeAndIndices(t1, e, n, i) {
            return this.a.fromBufferAttribute(t1, e), this.b.fromBufferAttribute(t1, n), this.c.fromBufferAttribute(t1, i), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.a.copy(t1.a), this.b.copy(t1.b), this.c.copy(t1.c), this;
        }
        getArea() {
            return cn.subVectors(this.c, this.b), hn.subVectors(this.a, this.b), .5 * cn.cross(hn).length();
        }
        getMidpoint(t1) {
            return t1.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
        }
        getNormal(t1) {
            return xn.getNormal(this.a, this.b, this.c, t1);
        }
        getPlane(t1) {
            return t1.setFromCoplanarPoints(this.a, this.b, this.c);
        }
        getBarycoord(t1, e) {
            return xn.getBarycoord(t1, this.a, this.b, this.c, e);
        }
        getUV(t1, e, n, i, r) {
            return xn.getUV(t1, this.a, this.b, this.c, e, n, i, r);
        }
        containsPoint(t1) {
            return xn.containsPoint(t1, this.a, this.b, this.c);
        }
        isFrontFacing(t1) {
            return xn.isFrontFacing(this.a, this.b, this.c, t1);
        }
        intersectsBox(t1) {
            return t1.intersectsTriangle(this);
        }
        closestPointToPoint(t1, e) {
            const n = this.a, i = this.b, r = this.c;
            let s, a;
            pn.subVectors(i, n), mn.subVectors(r, n), gn.subVectors(t1, n);
            const o = pn.dot(gn), l = mn.dot(gn);
            if (o <= 0 && l <= 0) return e.copy(n);
            vn.subVectors(t1, i);
            const c = pn.dot(vn), h = mn.dot(vn);
            if (c >= 0 && h <= c) return e.copy(i);
            const u = o * h - c * l;
            if (u <= 0 && o >= 0 && c <= 0) return s = o / (o - c), e.copy(n).addScaledVector(pn, s);
            yn.subVectors(t1, r);
            const d = pn.dot(yn), p = mn.dot(yn);
            if (p >= 0 && d <= p) return e.copy(r);
            const m = d * l - o * p;
            if (m <= 0 && l >= 0 && p <= 0) return a = l / (l - p), e.copy(n).addScaledVector(mn, a);
            const f = c * p - d * h;
            if (f <= 0 && h - c >= 0 && d - p >= 0) return fn.subVectors(r, i), a = (h - c) / (h - c + (d - p)), e.copy(i).addScaledVector(fn, a);
            const g = 1 / (f + m + u);
            return s = m * g, a = u * g, e.copy(n).addScaledVector(pn, s).addScaledVector(mn, a);
        }
        equals(t1) {
            return t1.a.equals(this.a) && t1.b.equals(this.b) && t1.c.equals(this.c);
        }
    }
    let _n = 0;
    class bn extends ft {
        constructor(){
            super(), Object.defineProperty(this, "id", {
                value: _n++
            }), this.uuid = _t(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = n, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ht, this.stencilZFail = ht, this.stencilZPass = ht, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
        }
        get alphaTest() {
            return this._alphaTest;
        }
        set alphaTest(t1) {
            this._alphaTest > 0 != t1 > 0 && this.version++, this._alphaTest = t1;
        }
        onBuild() {}
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString();
        }
        setValues(t1) {
            if (void 0 !== t1) for(const e in t1){
                const n = t1[e];
                if (void 0 === n) {
                    console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                    continue;
                }
                if ("shading" === e) {
                    console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n;
                    continue;
                }
                const i = this[e];
                void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
            }
        }
        toJSON(t1) {
            const e = void 0 === t1 || "string" == typeof t1;
            e && (t1 = {
                textures: {},
                images: {}
            });
            const n = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            function i(t1) {
                const e = [];
                for(const n in t1){
                    const i = t1[n];
                    delete i.metadata, e.push(i);
                }
                return e;
            }
            if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t1).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t1).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t1).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(t1).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t1).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t1).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t1).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t1).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t1).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t1).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t1).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t1).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t1).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t1).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t1).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t1).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t1).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t1).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t1).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t1).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t1).uuid), void 0 !== this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), !1 === this.fog && (n.fog = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
                const e = i(t1.textures), r = i(t1.images);
                e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
            }
            return n;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            this.name = t1.name, this.blending = t1.blending, this.side = t1.side, this.vertexColors = t1.vertexColors, this.opacity = t1.opacity, this.transparent = t1.transparent, this.blendSrc = t1.blendSrc, this.blendDst = t1.blendDst, this.blendEquation = t1.blendEquation, this.blendSrcAlpha = t1.blendSrcAlpha, this.blendDstAlpha = t1.blendDstAlpha, this.blendEquationAlpha = t1.blendEquationAlpha, this.depthFunc = t1.depthFunc, this.depthTest = t1.depthTest, this.depthWrite = t1.depthWrite, this.stencilWriteMask = t1.stencilWriteMask, this.stencilFunc = t1.stencilFunc, this.stencilRef = t1.stencilRef, this.stencilFuncMask = t1.stencilFuncMask, this.stencilFail = t1.stencilFail, this.stencilZFail = t1.stencilZFail, this.stencilZPass = t1.stencilZPass, this.stencilWrite = t1.stencilWrite;
            const e = t1.clippingPlanes;
            let n = null;
            if (null !== e) {
                const t1 = e.length;
                n = new Array(t1);
                for(let i = 0; i !== t1; ++i)n[i] = e[i].clone();
            }
            return this.clippingPlanes = n, this.clipIntersection = t1.clipIntersection, this.clipShadows = t1.clipShadows, this.shadowSide = t1.shadowSide, this.colorWrite = t1.colorWrite, this.precision = t1.precision, this.polygonOffset = t1.polygonOffset, this.polygonOffsetFactor = t1.polygonOffsetFactor, this.polygonOffsetUnits = t1.polygonOffsetUnits, this.dithering = t1.dithering, this.alphaTest = t1.alphaTest, this.alphaToCoverage = t1.alphaToCoverage, this.premultipliedAlpha = t1.premultipliedAlpha, this.visible = t1.visible, this.toneMapped = t1.toneMapped, this.userData = JSON.parse(JSON.stringify(t1.userData)), this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
    }
    bn.prototype.isMaterial = !0, bn.fromType = function() {
        return null;
    };
    class Mn extends bn {
        constructor(t1){
            super(), this.type = "MeshBasicMaterial", this.color = new Wt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.specularMap = t1.specularMap, this.alphaMap = t1.alphaMap, this.envMap = t1.envMap, this.combine = t1.combine, this.reflectivity = t1.reflectivity, this.refractionRatio = t1.refractionRatio, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.fog = t1.fog, this;
        }
    }
    Mn.prototype.isMeshBasicMaterial = !0;
    const wn = new se, Sn = new Rt;
    class Tn {
        constructor(t1, e, n){
            if (Array.isArray(t1)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.name = "", this.array = t1, this.itemSize = e, this.count = void 0 !== t1 ? t1.length / e : 0, this.normalized = !0 === n, this.usage = ut, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0;
        }
        onUploadCallback() {}
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
        setUsage(t1) {
            return this.usage = t1, this;
        }
        copy(t1) {
            return this.name = t1.name, this.array = new t1.array.constructor(t1.array), this.itemSize = t1.itemSize, this.count = t1.count, this.normalized = t1.normalized, this.usage = t1.usage, this;
        }
        copyAt(t1, e, n) {
            t1 *= this.itemSize, n *= e.itemSize;
            for(let i = 0, r = this.itemSize; i < r; i++)this.array[t1 + i] = e.array[n + i];
            return this;
        }
        copyArray(t1) {
            return this.array.set(t1), this;
        }
        copyColorsArray(t1) {
            const e = this.array;
            let n = 0;
            for(let i = 0, r = t1.length; i < r; i++){
                let r = t1[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), r = new Wt), e[n++] = r.r, e[n++] = r.g, e[n++] = r.b;
            }
            return this;
        }
        copyVector2sArray(t1) {
            const e = this.array;
            let n = 0;
            for(let i = 0, r = t1.length; i < r; i++){
                let r = t1[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), r = new Rt), e[n++] = r.x, e[n++] = r.y;
            }
            return this;
        }
        copyVector3sArray(t1) {
            const e = this.array;
            let n = 0;
            for(let i = 0, r = t1.length; i < r; i++){
                let r = t1[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), r = new se), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z;
            }
            return this;
        }
        copyVector4sArray(t1) {
            const e = this.array;
            let n = 0;
            for(let i = 0, r = t1.length; i < r; i++){
                let r = t1[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), r = new Kt), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z, e[n++] = r.w;
            }
            return this;
        }
        applyMatrix3(t1) {
            if (2 === this.itemSize) for(let e = 0, n = this.count; e < n; e++)Sn.fromBufferAttribute(this, e), Sn.applyMatrix3(t1), this.setXY(e, Sn.x, Sn.y);
            else if (3 === this.itemSize) for(let e = 0, n = this.count; e < n; e++)wn.fromBufferAttribute(this, e), wn.applyMatrix3(t1), this.setXYZ(e, wn.x, wn.y, wn.z);
            return this;
        }
        applyMatrix4(t1) {
            for(let e = 0, n = this.count; e < n; e++)wn.fromBufferAttribute(this, e), wn.applyMatrix4(t1), this.setXYZ(e, wn.x, wn.y, wn.z);
            return this;
        }
        applyNormalMatrix(t1) {
            for(let e = 0, n = this.count; e < n; e++)wn.fromBufferAttribute(this, e), wn.applyNormalMatrix(t1), this.setXYZ(e, wn.x, wn.y, wn.z);
            return this;
        }
        transformDirection(t1) {
            for(let e = 0, n = this.count; e < n; e++)wn.fromBufferAttribute(this, e), wn.transformDirection(t1), this.setXYZ(e, wn.x, wn.y, wn.z);
            return this;
        }
        set(t1, e = 0) {
            return this.array.set(t1, e), this;
        }
        getX(t1) {
            return this.array[t1 * this.itemSize];
        }
        setX(t1, e) {
            return this.array[t1 * this.itemSize] = e, this;
        }
        getY(t1) {
            return this.array[t1 * this.itemSize + 1];
        }
        setY(t1, e) {
            return this.array[t1 * this.itemSize + 1] = e, this;
        }
        getZ(t1) {
            return this.array[t1 * this.itemSize + 2];
        }
        setZ(t1, e) {
            return this.array[t1 * this.itemSize + 2] = e, this;
        }
        getW(t1) {
            return this.array[t1 * this.itemSize + 3];
        }
        setW(t1, e) {
            return this.array[t1 * this.itemSize + 3] = e, this;
        }
        setXY(t1, e, n) {
            return t1 *= this.itemSize, this.array[t1 + 0] = e, this.array[t1 + 1] = n, this;
        }
        setXYZ(t1, e, n, i) {
            return t1 *= this.itemSize, this.array[t1 + 0] = e, this.array[t1 + 1] = n, this.array[t1 + 2] = i, this;
        }
        setXYZW(t1, e, n, i, r) {
            return t1 *= this.itemSize, this.array[t1 + 0] = e, this.array[t1 + 1] = n, this.array[t1 + 2] = i, this.array[t1 + 3] = r, this;
        }
        onUpload(t1) {
            return this.onUploadCallback = t1, this;
        }
        clone() {
            return new this.constructor(this.array, this.itemSize).copy(this);
        }
        toJSON() {
            const t1 = {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.prototype.slice.call(this.array),
                normalized: this.normalized
            };
            return "" !== this.name && (t1.name = this.name), this.usage !== ut && (t1.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t1.updateRange = this.updateRange), t1;
        }
    }
    Tn.prototype.isBufferAttribute = !0;
    class En extends Tn {
        constructor(t1, e, n){
            super(new Int8Array(t1), e, n);
        }
    }
    class An extends Tn {
        constructor(t1, e, n){
            super(new Uint8Array(t1), e, n);
        }
    }
    class Rn extends Tn {
        constructor(t1, e, n){
            super(new Uint8ClampedArray(t1), e, n);
        }
    }
    class Cn extends Tn {
        constructor(t1, e, n){
            super(new Int16Array(t1), e, n);
        }
    }
    class Ln extends Tn {
        constructor(t1, e, n){
            super(new Uint16Array(t1), e, n);
        }
    }
    class Pn extends Tn {
        constructor(t1, e, n){
            super(new Int32Array(t1), e, n);
        }
    }
    class Dn extends Tn {
        constructor(t1, e, n){
            super(new Uint32Array(t1), e, n);
        }
    }
    class In extends Tn {
        constructor(t1, e, n){
            super(new Uint16Array(t1), e, n);
        }
    }
    In.prototype.isFloat16BufferAttribute = !0;
    class Nn extends Tn {
        constructor(t1, e, n){
            super(new Float32Array(t1), e, n);
        }
    }
    class Bn extends Tn {
        constructor(t1, e, n){
            super(new Float64Array(t1), e, n);
        }
    }
    let zn = 0;
    const On = new ze, Un = new ln, Fn = new se, Hn = new le, Gn = new le, kn = new se;
    class Vn extends ft {
        constructor(){
            super(), Object.defineProperty(this, "id", {
                value: zn++
            }), this.uuid = _t(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }, this.userData = {};
        }
        getIndex() {
            return this.index;
        }
        setIndex(t1) {
            return Array.isArray(t1) ? this.index = new (Lt(t1) ? Dn : Ln)(t1, 1) : this.index = t1, this;
        }
        getAttribute(t1) {
            return this.attributes[t1];
        }
        setAttribute(t1, e) {
            return this.attributes[t1] = e, this;
        }
        deleteAttribute(t1) {
            return delete this.attributes[t1], this;
        }
        hasAttribute(t1) {
            return void 0 !== this.attributes[t1];
        }
        addGroup(t1, e, n = 0) {
            this.groups.push({
                start: t1,
                count: e,
                materialIndex: n
            });
        }
        clearGroups() {
            this.groups = [];
        }
        setDrawRange(t1, e) {
            this.drawRange.start = t1, this.drawRange.count = e;
        }
        applyMatrix4(t1) {
            const e = this.attributes.position;
            void 0 !== e && (e.applyMatrix4(t1), e.needsUpdate = !0);
            const n = this.attributes.normal;
            if (void 0 !== n) {
                const e = (new Ct).getNormalMatrix(t1);
                n.applyNormalMatrix(e), n.needsUpdate = !0;
            }
            const i = this.attributes.tangent;
            return void 0 !== i && (i.transformDirection(t1), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
        }
        applyQuaternion(t1) {
            return On.makeRotationFromQuaternion(t1), this.applyMatrix4(On), this;
        }
        rotateX(t1) {
            return On.makeRotationX(t1), this.applyMatrix4(On), this;
        }
        rotateY(t1) {
            return On.makeRotationY(t1), this.applyMatrix4(On), this;
        }
        rotateZ(t1) {
            return On.makeRotationZ(t1), this.applyMatrix4(On), this;
        }
        translate(t1, e, n) {
            return On.makeTranslation(t1, e, n), this.applyMatrix4(On), this;
        }
        scale(t1, e, n) {
            return On.makeScale(t1, e, n), this.applyMatrix4(On), this;
        }
        lookAt(t1) {
            return Un.lookAt(t1), Un.updateMatrix(), this.applyMatrix4(Un.matrix), this;
        }
        center() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(Fn).negate(), this.translate(Fn.x, Fn.y, Fn.z), this;
        }
        setFromPoints(t1) {
            const e = [];
            for(let n = 0, i = t1.length; n < i; n++){
                const i = t1[n];
                e.push(i.x, i.y, i.z || 0);
            }
            return this.setAttribute("position", new Nn(e, 3)), this;
        }
        computeBoundingBox() {
            null === this.boundingBox && (this.boundingBox = new le);
            const t1 = this.attributes.position, e = this.morphAttributes.position;
            if (t1 && t1.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new se(-1 / 0, -1 / 0, -1 / 0), new se(1 / 0, 1 / 0, 1 / 0));
            if (void 0 !== t1) {
                if (this.boundingBox.setFromBufferAttribute(t1), e) for(let t1 = 0, n = e.length; t1 < n; t1++){
                    const n = e[t1];
                    Hn.setFromBufferAttribute(n), this.morphTargetsRelative ? (kn.addVectors(this.boundingBox.min, Hn.min), this.boundingBox.expandByPoint(kn), kn.addVectors(this.boundingBox.max, Hn.max), this.boundingBox.expandByPoint(kn)) : (this.boundingBox.expandByPoint(Hn.min), this.boundingBox.expandByPoint(Hn.max));
                }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
        }
        computeBoundingSphere() {
            null === this.boundingSphere && (this.boundingSphere = new Ae);
            const t1 = this.attributes.position, e = this.morphAttributes.position;
            if (t1 && t1.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new se, 1 / 0);
            if (t1) {
                const n = this.boundingSphere.center;
                if (Hn.setFromBufferAttribute(t1), e) for(let t1 = 0, n = e.length; t1 < n; t1++){
                    const n = e[t1];
                    Gn.setFromBufferAttribute(n), this.morphTargetsRelative ? (kn.addVectors(Hn.min, Gn.min), Hn.expandByPoint(kn), kn.addVectors(Hn.max, Gn.max), Hn.expandByPoint(kn)) : (Hn.expandByPoint(Gn.min), Hn.expandByPoint(Gn.max));
                }
                Hn.getCenter(n);
                let i = 0;
                for(let e = 0, r = t1.count; e < r; e++)kn.fromBufferAttribute(t1, e), i = Math.max(i, n.distanceToSquared(kn));
                if (e) for(let r = 0, s = e.length; r < s; r++){
                    const s = e[r], a = this.morphTargetsRelative;
                    for(let e = 0, r = s.count; e < r; e++)kn.fromBufferAttribute(s, e), a && (Fn.fromBufferAttribute(t1, e), kn.add(Fn)), i = Math.max(i, n.distanceToSquared(kn));
                }
                this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
            }
        }
        computeTangents() {
            const t1 = this.index, e = this.attributes;
            if (null === t1 || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            const n = t1.array, i = e.position.array, r = e.normal.array, s = e.uv.array, a = i.length / 3;
            !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new Tn(new Float32Array(4 * a), 4));
            const o = this.getAttribute("tangent").array, l = [], c = [];
            for(let t1 = 0; t1 < a; t1++)l[t1] = new se, c[t1] = new se;
            const h = new se, u = new se, d = new se, p = new Rt, m = new Rt, f = new Rt, g = new se, v = new se;
            function y(t1, e, n) {
                h.fromArray(i, 3 * t1), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(s, 2 * t1), m.fromArray(s, 2 * e), f.fromArray(s, 2 * n), u.sub(h), d.sub(h), m.sub(p), f.sub(p);
                const r = 1 / (m.x * f.y - f.x * m.y);
                isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r), v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r), l[t1].add(g), l[e].add(g), l[n].add(g), c[t1].add(v), c[e].add(v), c[n].add(v));
            }
            let x = this.groups;
            0 === x.length && (x = [
                {
                    start: 0,
                    count: n.length
                }
            ]);
            for(let t1 = 0, e = x.length; t1 < e; ++t1){
                const e = x[t1], i = e.start;
                for(let t1 = i, r = i + e.count; t1 < r; t1 += 3)y(n[t1 + 0], n[t1 + 1], n[t1 + 2]);
            }
            const _ = new se, b = new se, M = new se, w = new se;
            function S(t1) {
                M.fromArray(r, 3 * t1), w.copy(M);
                const e = l[t1];
                _.copy(e), _.sub(M.multiplyScalar(M.dot(e))).normalize(), b.crossVectors(w, e);
                const n = b.dot(c[t1]) < 0 ? -1 : 1;
                o[4 * t1] = _.x, o[4 * t1 + 1] = _.y, o[4 * t1 + 2] = _.z, o[4 * t1 + 3] = n;
            }
            for(let t1 = 0, e = x.length; t1 < e; ++t1){
                const e = x[t1], i = e.start;
                for(let t1 = i, r = i + e.count; t1 < r; t1 += 3)S(n[t1 + 0]), S(n[t1 + 1]), S(n[t1 + 2]);
            }
        }
        computeVertexNormals() {
            const t1 = this.index, e = this.getAttribute("position");
            if (void 0 !== e) {
                let n = this.getAttribute("normal");
                if (void 0 === n) n = new Tn(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
                else for(let t1 = 0, e = n.count; t1 < e; t1++)n.setXYZ(t1, 0, 0, 0);
                const i = new se, r = new se, s = new se, a = new se, o = new se, l = new se, c = new se, h = new se;
                if (t1) for(let u = 0, d = t1.count; u < d; u += 3){
                    const d = t1.getX(u + 0), p = t1.getX(u + 1), m = t1.getX(u + 2);
                    i.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, m), c.subVectors(s, r), h.subVectors(i, r), c.cross(h), a.fromBufferAttribute(n, d), o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, m), a.add(c), o.add(c), l.add(c), n.setXYZ(d, a.x, a.y, a.z), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(m, l.x, l.y, l.z);
                }
                else for(let t1 = 0, a = e.count; t1 < a; t1 += 3)i.fromBufferAttribute(e, t1 + 0), r.fromBufferAttribute(e, t1 + 1), s.fromBufferAttribute(e, t1 + 2), c.subVectors(s, r), h.subVectors(i, r), c.cross(h), n.setXYZ(t1 + 0, c.x, c.y, c.z), n.setXYZ(t1 + 1, c.x, c.y, c.z), n.setXYZ(t1 + 2, c.x, c.y, c.z);
                this.normalizeNormals(), n.needsUpdate = !0;
            }
        }
        merge(t1, e) {
            if (!t1 || !t1.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t1);
            void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
            const n = this.attributes;
            for(const i in n){
                if (void 0 === t1.attributes[i]) continue;
                const r = n[i].array, s = t1.attributes[i], a = s.array, o = s.itemSize * e, l = Math.min(a.length, r.length - o);
                for(let t1 = 0, e = o; t1 < l; t1++, e++)r[e] = a[t1];
            }
            return this;
        }
        normalizeNormals() {
            const t1 = this.attributes.normal;
            for(let e = 0, n = t1.count; e < n; e++)kn.fromBufferAttribute(t1, e), kn.normalize(), t1.setXYZ(e, kn.x, kn.y, kn.z);
        }
        toNonIndexed() {
            function t1(t1, e) {
                const n = t1.array, i = t1.itemSize, r = t1.normalized, s = new n.constructor(e.length * i);
                let a = 0, o = 0;
                for(let r = 0, l = e.length; r < l; r++){
                    a = t1.isInterleavedBufferAttribute ? e[r] * t1.data.stride + t1.offset : e[r] * i;
                    for(let t1 = 0; t1 < i; t1++)s[o++] = n[a++];
                }
                return new Tn(s, i, r);
            }
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
            const e = new Vn, n = this.index.array, i = this.attributes;
            for(const r in i){
                const s = t1(i[r], n);
                e.setAttribute(r, s);
            }
            const r = this.morphAttributes;
            for(const i in r){
                const s = [], a = r[i];
                for(let e = 0, i = a.length; e < i; e++){
                    const i = t1(a[e], n);
                    s.push(i);
                }
                e.morphAttributes[i] = s;
            }
            e.morphTargetsRelative = this.morphTargetsRelative;
            const s = this.groups;
            for(let t1 = 0, n = s.length; t1 < n; t1++){
                const n = s[t1];
                e.addGroup(n.start, n.count, n.materialIndex);
            }
            return e;
        }
        toJSON() {
            const t1 = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t1.uuid = this.uuid, t1.type = this.type, "" !== this.name && (t1.name = this.name), Object.keys(this.userData).length > 0 && (t1.userData = this.userData), void 0 !== this.parameters) {
                const e = this.parameters;
                for(const n in e)void 0 !== e[n] && (t1[n] = e[n]);
                return t1;
            }
            t1.data = {
                attributes: {}
            };
            const e = this.index;
            null !== e && (t1.data.index = {
                type: e.array.constructor.name,
                array: Array.prototype.slice.call(e.array)
            });
            const n = this.attributes;
            for(const e in n){
                const i = n[e];
                t1.data.attributes[e] = i.toJSON(t1.data);
            }
            const i = {};
            let r = !1;
            for(const e in this.morphAttributes){
                const n = this.morphAttributes[e], s = [];
                for(let e = 0, i = n.length; e < i; e++){
                    const i = n[e];
                    s.push(i.toJSON(t1.data));
                }
                s.length > 0 && (i[e] = s, r = !0);
            }
            r && (t1.data.morphAttributes = i, t1.data.morphTargetsRelative = this.morphTargetsRelative);
            const s = this.groups;
            s.length > 0 && (t1.data.groups = JSON.parse(JSON.stringify(s)));
            const a = this.boundingSphere;
            return null !== a && (t1.data.boundingSphere = {
                center: a.center.toArray(),
                radius: a.radius
            }), t1;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
            const e = {};
            this.name = t1.name;
            const n = t1.index;
            null !== n && this.setIndex(n.clone(e));
            const i = t1.attributes;
            for(const t1 in i){
                const n = i[t1];
                this.setAttribute(t1, n.clone(e));
            }
            const r = t1.morphAttributes;
            for(const t1 in r){
                const n = [], i = r[t1];
                for(let t1 = 0, r = i.length; t1 < r; t1++)n.push(i[t1].clone(e));
                this.morphAttributes[t1] = n;
            }
            this.morphTargetsRelative = t1.morphTargetsRelative;
            const s = t1.groups;
            for(let t1 = 0, e = s.length; t1 < e; t1++){
                const e = s[t1];
                this.addGroup(e.start, e.count, e.materialIndex);
            }
            const a = t1.boundingBox;
            null !== a && (this.boundingBox = a.clone());
            const o = t1.boundingSphere;
            return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t1.drawRange.start, this.drawRange.count = t1.drawRange.count, this.userData = t1.userData, void 0 !== t1.parameters && (this.parameters = Object.assign({}, t1.parameters)), this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    Vn.prototype.isBufferGeometry = !0;
    const Wn = new ze, jn = new Be, qn = new Ae, Xn = new se, Jn = new se, Yn = new se, Zn = new se, Kn = new se, Qn = new se, $n = new se, ti = new se, ei = new se, ni = new Rt, ii = new Rt, ri = new Rt, si = new se, ai = new se;
    class oi extends ln {
        constructor(t1 = new Vn, e = new Mn){
            super(), this.type = "Mesh", this.geometry = t1, this.material = e, this.updateMorphTargets();
        }
        copy(t1) {
            return super.copy(t1), void 0 !== t1.morphTargetInfluences && (this.morphTargetInfluences = t1.morphTargetInfluences.slice()), void 0 !== t1.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t1.morphTargetDictionary)), this.material = t1.material, this.geometry = t1.geometry, this;
        }
        updateMorphTargets() {
            const t1 = this.geometry;
            if (t1.isBufferGeometry) {
                const e = t1.morphAttributes, n = Object.keys(e);
                if (n.length > 0) {
                    const t1 = e[n[0]];
                    if (void 0 !== t1) {
                        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                        for(let e = 0, n = t1.length; e < n; e++){
                            const n = t1[e].name || String(e);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e;
                        }
                    }
                }
            } else {
                const e = t1.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            }
        }
        raycast(t1, e) {
            const n = this.geometry, i = this.material, r = this.matrixWorld;
            if (void 0 === i) return;
            if (null === n.boundingSphere && n.computeBoundingSphere(), qn.copy(n.boundingSphere), qn.applyMatrix4(r), !1 === t1.ray.intersectsSphere(qn)) return;
            if (Wn.copy(r).invert(), jn.copy(t1.ray).applyMatrix4(Wn), null !== n.boundingBox && !1 === jn.intersectsBox(n.boundingBox)) return;
            let s;
            if (n.isBufferGeometry) {
                const r = n.index, a = n.attributes.position, o = n.morphAttributes.position, l = n.morphTargetsRelative, c = n.attributes.uv, h = n.attributes.uv2, u = n.groups, d = n.drawRange;
                if (null !== r) {
                    if (Array.isArray(i)) for(let n = 0, p = u.length; n < p; n++){
                        const p = u[n], m = i[p.materialIndex];
                        for(let n = Math.max(p.start, d.start), i = Math.min(r.count, Math.min(p.start + p.count, d.start + d.count)); n < i; n += 3){
                            const i = r.getX(n), u = r.getX(n + 1), d = r.getX(n + 2);
                            s = li(this, m, t1, jn, a, o, l, c, h, i, u, d), s && (s.faceIndex = Math.floor(n / 3), s.face.materialIndex = p.materialIndex, e.push(s));
                        }
                    }
                    else for(let n = Math.max(0, d.start), u = Math.min(r.count, d.start + d.count); n < u; n += 3){
                        const u = r.getX(n), d = r.getX(n + 1), p = r.getX(n + 2);
                        s = li(this, i, t1, jn, a, o, l, c, h, u, d, p), s && (s.faceIndex = Math.floor(n / 3), e.push(s));
                    }
                } else if (void 0 !== a) {
                    if (Array.isArray(i)) for(let n = 0, r = u.length; n < r; n++){
                        const r = u[n], p = i[r.materialIndex];
                        for(let n = Math.max(r.start, d.start), i = Math.min(a.count, Math.min(r.start + r.count, d.start + d.count)); n < i; n += 3)s = li(this, p, t1, jn, a, o, l, c, h, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), s.face.materialIndex = r.materialIndex, e.push(s));
                    }
                    else for(let n = Math.max(0, d.start), r = Math.min(a.count, d.start + d.count); n < r; n += 3)s = li(this, i, t1, jn, a, o, l, c, h, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), e.push(s));
                }
            } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
    }
    function li(t1, e, n, i, r, s, a, o, l, c, h, u) {
        Xn.fromBufferAttribute(r, c), Jn.fromBufferAttribute(r, h), Yn.fromBufferAttribute(r, u);
        const d = t1.morphTargetInfluences;
        if (s && d) {
            $n.set(0, 0, 0), ti.set(0, 0, 0), ei.set(0, 0, 0);
            for(let t1 = 0, e = s.length; t1 < e; t1++){
                const e = d[t1], n = s[t1];
                0 !== e && (Zn.fromBufferAttribute(n, c), Kn.fromBufferAttribute(n, h), Qn.fromBufferAttribute(n, u), a ? ($n.addScaledVector(Zn, e), ti.addScaledVector(Kn, e), ei.addScaledVector(Qn, e)) : ($n.addScaledVector(Zn.sub(Xn), e), ti.addScaledVector(Kn.sub(Jn), e), ei.addScaledVector(Qn.sub(Yn), e)));
            }
            Xn.add($n), Jn.add(ti), Yn.add(ei);
        }
        t1.isSkinnedMesh && (t1.boneTransform(c, Xn), t1.boneTransform(h, Jn), t1.boneTransform(u, Yn));
        const p = function(t1, e, n, i, r, s, a, o) {
            let l;
            if (l = 1 === e.side ? i.intersectTriangle(a, s, r, !0, o) : i.intersectTriangle(r, s, a, 2 !== e.side, o), null === l) return null;
            ai.copy(o), ai.applyMatrix4(t1.matrixWorld);
            const c = n.ray.origin.distanceTo(ai);
            return c < n.near || c > n.far ? null : {
                distance: c,
                point: ai.clone(),
                object: t1
            };
        }(t1, e, n, i, Xn, Jn, Yn, si);
        if (p) {
            o && (ni.fromBufferAttribute(o, c), ii.fromBufferAttribute(o, h), ri.fromBufferAttribute(o, u), p.uv = xn.getUV(si, Xn, Jn, Yn, ni, ii, ri, new Rt)), l && (ni.fromBufferAttribute(l, c), ii.fromBufferAttribute(l, h), ri.fromBufferAttribute(l, u), p.uv2 = xn.getUV(si, Xn, Jn, Yn, ni, ii, ri, new Rt));
            const t1 = {
                a: c,
                b: h,
                c: u,
                normal: new se,
                materialIndex: 0
            };
            xn.getNormal(Xn, Jn, Yn, t1.normal), p.face = t1;
        }
        return p;
    }
    oi.prototype.isMesh = !0;
    class ci extends Vn {
        constructor(t1 = 1, e = 1, n = 1, i = 1, r = 1, s = 1){
            super(), this.type = "BoxGeometry", this.parameters = {
                width: t1,
                height: e,
                depth: n,
                widthSegments: i,
                heightSegments: r,
                depthSegments: s
            };
            const a = this;
            i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
            const o = [], l = [], c = [], h = [];
            let u = 0, d = 0;
            function p(t1, e, n, i, r, s, p, m, f, g, v) {
                const y = s / f, x = p / g, _ = s / 2, b = p / 2, M = m / 2, w = f + 1, S = g + 1;
                let T = 0, E = 0;
                const A = new se;
                for(let s = 0; s < S; s++){
                    const a = s * x - b;
                    for(let o = 0; o < w; o++){
                        const u = o * y - _;
                        A[t1] = u * i, A[e] = a * r, A[n] = M, l.push(A.x, A.y, A.z), A[t1] = 0, A[e] = 0, A[n] = m > 0 ? 1 : -1, c.push(A.x, A.y, A.z), h.push(o / f), h.push(1 - s / g), T += 1;
                    }
                }
                for(let t1 = 0; t1 < g; t1++)for(let e = 0; e < f; e++){
                    const n = u + e + w * t1, i = u + e + w * (t1 + 1), r = u + (e + 1) + w * (t1 + 1), s = u + (e + 1) + w * t1;
                    o.push(n, i, s), o.push(i, r, s), E += 6;
                }
                a.addGroup(d, E, v), d += E, u += T;
            }
            p("z", "y", "x", -1, -1, n, e, t1, s, r, 0), p("z", "y", "x", 1, -1, n, e, -t1, s, r, 1), p("x", "z", "y", 1, 1, t1, n, e, i, s, 2), p("x", "z", "y", 1, -1, t1, n, -e, i, s, 3), p("x", "y", "z", 1, -1, t1, e, n, i, r, 4), p("x", "y", "z", -1, -1, t1, e, -n, i, r, 5), this.setIndex(o), this.setAttribute("position", new Nn(l, 3)), this.setAttribute("normal", new Nn(c, 3)), this.setAttribute("uv", new Nn(h, 2));
        }
        static fromJSON(t1) {
            return new ci(t1.width, t1.height, t1.depth, t1.widthSegments, t1.heightSegments, t1.depthSegments);
        }
    }
    function hi(t1) {
        const e = {};
        for(const n in t1){
            e[n] = {};
            for(const i in t1[n]){
                const r = t1[n][i];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r;
            }
        }
        return e;
    }
    function ui(t1) {
        const e = {};
        for(let n = 0; n < t1.length; n++){
            const i = hi(t1[n]);
            for(const t1 in i)e[t1] = i[t1];
        }
        return e;
    }
    const di = {
        clone: hi,
        merge: ui
    };
    class pi extends bn {
        constructor(t1){
            super(), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1
            }, this.defaultAttributeValues = {
                color: [
                    1,
                    1,
                    1
                ],
                uv: [
                    0,
                    0
                ],
                uv2: [
                    0,
                    0
                ]
            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t1 && (void 0 !== t1.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t1));
        }
        copy(t1) {
            return super.copy(t1), this.fragmentShader = t1.fragmentShader, this.vertexShader = t1.vertexShader, this.uniforms = hi(t1.uniforms), this.defines = Object.assign({}, t1.defines), this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.fog = t1.fog, this.lights = t1.lights, this.clipping = t1.clipping, this.extensions = Object.assign({}, t1.extensions), this.glslVersion = t1.glslVersion, this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            e.glslVersion = this.glslVersion, e.uniforms = {};
            for(const n in this.uniforms){
                const i = this.uniforms[n].value;
                i && i.isTexture ? e.uniforms[n] = {
                    type: "t",
                    value: i.toJSON(t1).uuid
                } : i && i.isColor ? e.uniforms[n] = {
                    type: "c",
                    value: i.getHex()
                } : i && i.isVector2 ? e.uniforms[n] = {
                    type: "v2",
                    value: i.toArray()
                } : i && i.isVector3 ? e.uniforms[n] = {
                    type: "v3",
                    value: i.toArray()
                } : i && i.isVector4 ? e.uniforms[n] = {
                    type: "v4",
                    value: i.toArray()
                } : i && i.isMatrix3 ? e.uniforms[n] = {
                    type: "m3",
                    value: i.toArray()
                } : i && i.isMatrix4 ? e.uniforms[n] = {
                    type: "m4",
                    value: i.toArray()
                } : e.uniforms[n] = {
                    value: i
                };
            }
            Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
            const n = {};
            for(const t1 in this.extensions)!0 === this.extensions[t1] && (n[t1] = !0);
            return Object.keys(n).length > 0 && (e.extensions = n), e;
        }
    }
    pi.prototype.isShaderMaterial = !0;
    class mi extends ln {
        constructor(){
            super(), this.type = "Camera", this.matrixWorldInverse = new ze, this.projectionMatrix = new ze, this.projectionMatrixInverse = new ze;
        }
        copy(t1, e) {
            return super.copy(t1, e), this.matrixWorldInverse.copy(t1.matrixWorldInverse), this.projectionMatrix.copy(t1.projectionMatrix), this.projectionMatrixInverse.copy(t1.projectionMatrixInverse), this;
        }
        getWorldDirection(t1) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t1.set(-e[8], -e[9], -e[10]).normalize();
        }
        updateMatrixWorld(t1) {
            super.updateMatrixWorld(t1), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        updateWorldMatrix(t1, e) {
            super.updateWorldMatrix(t1, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    mi.prototype.isCamera = !0;
    class fi extends mi {
        constructor(t1 = 50, e = 1, n = .1, i = 2e3){
            super(), this.type = "PerspectiveCamera", this.fov = t1, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
        }
        copy(t1, e) {
            return super.copy(t1, e), this.fov = t1.fov, this.zoom = t1.zoom, this.near = t1.near, this.far = t1.far, this.focus = t1.focus, this.aspect = t1.aspect, this.view = null === t1.view ? null : Object.assign({}, t1.view), this.filmGauge = t1.filmGauge, this.filmOffset = t1.filmOffset, this;
        }
        setFocalLength(t1) {
            const e = .5 * this.getFilmHeight() / t1;
            this.fov = 2 * xt * Math.atan(e), this.updateProjectionMatrix();
        }
        getFocalLength() {
            const t1 = Math.tan(.5 * yt * this.fov);
            return .5 * this.getFilmHeight() / t1;
        }
        getEffectiveFOV() {
            return 2 * xt * Math.atan(Math.tan(.5 * yt * this.fov) / this.zoom);
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1);
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1);
        }
        setViewOffset(t1, e, n, i, r, s) {
            this.aspect = t1 / e, null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t1, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t1 = this.near;
            let e = t1 * Math.tan(.5 * yt * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -0.5 * i;
            const s = this.view;
            if (null !== this.view && this.view.enabled) {
                const t1 = s.fullWidth, a = s.fullHeight;
                r += s.offsetX * i / t1, e -= s.offsetY * n / a, i *= s.width / t1, n *= s.height / a;
            }
            const a = this.filmOffset;
            0 !== a && (r += t1 * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t1, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
        }
    }
    fi.prototype.isPerspectiveCamera = !0;
    const gi = 90;
    class vi extends ln {
        constructor(t1, e, n){
            if (super(), this.type = "CubeCamera", !0 !== n.isWebGLCubeRenderTarget) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
            this.renderTarget = n;
            const i = new fi(gi, 1, t1, e);
            i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new se(1, 0, 0)), this.add(i);
            const r = new fi(gi, 1, t1, e);
            r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new se(-1, 0, 0)), this.add(r);
            const s = new fi(gi, 1, t1, e);
            s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(new se(0, 1, 0)), this.add(s);
            const a = new fi(gi, 1, t1, e);
            a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new se(0, -1, 0)), this.add(a);
            const o = new fi(gi, 1, t1, e);
            o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new se(0, 0, 1)), this.add(o);
            const l = new fi(gi, 1, t1, e);
            l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new se(0, 0, -1)), this.add(l);
        }
        update(t1, e) {
            null === this.parent && this.updateMatrixWorld();
            const n = this.renderTarget, [i, r, s, a, o, l] = this.children, c = t1.getRenderTarget(), h = t1.toneMapping, u = t1.xr.enabled;
            t1.toneMapping = 0, t1.xr.enabled = !1;
            const d = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, t1.setRenderTarget(n, 0), t1.render(e, i), t1.setRenderTarget(n, 1), t1.render(e, r), t1.setRenderTarget(n, 2), t1.render(e, s), t1.setRenderTarget(n, 3), t1.render(e, a), t1.setRenderTarget(n, 4), t1.render(e, o), n.texture.generateMipmaps = d, t1.setRenderTarget(n, 5), t1.render(e, l), t1.setRenderTarget(c), t1.toneMapping = h, t1.xr.enabled = u, n.texture.needsPMREMUpdate = !0;
        }
    }
    class yi extends Zt {
        constructor(t1, e, n, i, s, a, o, l, c, h){
            super(t1 = void 0 !== t1 ? t1 : [], e = void 0 !== e ? e : r, n, i, s, a, o, l, c, h), this.flipY = !1;
        }
        get images() {
            return this.image;
        }
        set images(t1) {
            this.image = t1;
        }
    }
    yi.prototype.isCubeTexture = !0;
    class xi extends Qt {
        constructor(t1, e = {}){
            super(t1, t1, e);
            const n = {
                width: t1,
                height: t1,
                depth: 1
            }, i = [
                n,
                n,
                n,
                n,
                n,
                n
            ];
            this.texture = new yi(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : f;
        }
        fromEquirectangularTexture(t1, e) {
            this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
            const n = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
                fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
            }, i = new ci(5, 5, 5), r = new pi({
                name: "CubemapFromEquirect",
                uniforms: hi(n.uniforms),
                vertexShader: n.vertexShader,
                fragmentShader: n.fragmentShader,
                side: 1,
                blending: 0
            });
            r.uniforms.tEquirect.value = e;
            const s = new oi(i, r), a = e.minFilter;
            e.minFilter === v && (e.minFilter = f);
            return new vi(1, 10, this).update(t1, s), e.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
        }
        clear(t1, e, n, i) {
            const r = t1.getRenderTarget();
            for(let r = 0; r < 6; r++)t1.setRenderTarget(this, r), t1.clear(e, n, i);
            t1.setRenderTarget(r);
        }
    }
    xi.prototype.isWebGLCubeRenderTarget = !0;
    const _i = new se, bi = new se, Mi = new Ct;
    class wi {
        constructor(t1 = new se(1, 0, 0), e = 0){
            this.normal = t1, this.constant = e;
        }
        set(t1, e) {
            return this.normal.copy(t1), this.constant = e, this;
        }
        setComponents(t1, e, n, i) {
            return this.normal.set(t1, e, n), this.constant = i, this;
        }
        setFromNormalAndCoplanarPoint(t1, e) {
            return this.normal.copy(t1), this.constant = -e.dot(this.normal), this;
        }
        setFromCoplanarPoints(t1, e, n) {
            const i = _i.subVectors(n, e).cross(bi.subVectors(t1, e)).normalize();
            return this.setFromNormalAndCoplanarPoint(i, t1), this;
        }
        copy(t1) {
            return this.normal.copy(t1.normal), this.constant = t1.constant, this;
        }
        normalize() {
            const t1 = 1 / this.normal.length();
            return this.normal.multiplyScalar(t1), this.constant *= t1, this;
        }
        negate() {
            return this.constant *= -1, this.normal.negate(), this;
        }
        distanceToPoint(t1) {
            return this.normal.dot(t1) + this.constant;
        }
        distanceToSphere(t1) {
            return this.distanceToPoint(t1.center) - t1.radius;
        }
        projectPoint(t1, e) {
            return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t1)).add(t1);
        }
        intersectLine(t1, e) {
            const n = t1.delta(_i), i = this.normal.dot(n);
            if (0 === i) return 0 === this.distanceToPoint(t1.start) ? e.copy(t1.start) : null;
            const r = -(t1.start.dot(this.normal) + this.constant) / i;
            return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t1.start);
        }
        intersectsLine(t1) {
            const e = this.distanceToPoint(t1.start), n = this.distanceToPoint(t1.end);
            return e < 0 && n > 0 || n < 0 && e > 0;
        }
        intersectsBox(t1) {
            return t1.intersectsPlane(this);
        }
        intersectsSphere(t1) {
            return t1.intersectsPlane(this);
        }
        coplanarPoint(t1) {
            return t1.copy(this.normal).multiplyScalar(-this.constant);
        }
        applyMatrix4(t1, e) {
            const n = e || Mi.getNormalMatrix(t1), i = this.coplanarPoint(_i).applyMatrix4(t1), r = this.normal.applyMatrix3(n).normalize();
            return this.constant = -i.dot(r), this;
        }
        translate(t1) {
            return this.constant -= t1.dot(this.normal), this;
        }
        equals(t1) {
            return t1.normal.equals(this.normal) && t1.constant === this.constant;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    wi.prototype.isPlane = !0;
    const Si = new Ae, Ti = new se;
    class Ei {
        constructor(t1 = new wi, e = new wi, n = new wi, i = new wi, r = new wi, s = new wi){
            this.planes = [
                t1,
                e,
                n,
                i,
                r,
                s
            ];
        }
        set(t1, e, n, i, r, s) {
            const a = this.planes;
            return a[0].copy(t1), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this;
        }
        copy(t1) {
            const e = this.planes;
            for(let n = 0; n < 6; n++)e[n].copy(t1.planes[n]);
            return this;
        }
        setFromProjectionMatrix(t1) {
            const e = this.planes, n = t1.elements, i = n[0], r = n[1], s = n[2], a = n[3], o = n[4], l = n[5], c = n[6], h = n[7], u = n[8], d = n[9], p = n[10], m = n[11], f = n[12], g = n[13], v = n[14], y = n[15];
            return e[0].setComponents(a - i, h - o, m - u, y - f).normalize(), e[1].setComponents(a + i, h + o, m + u, y + f).normalize(), e[2].setComponents(a + r, h + l, m + d, y + g).normalize(), e[3].setComponents(a - r, h - l, m - d, y - g).normalize(), e[4].setComponents(a - s, h - c, m - p, y - v).normalize(), e[5].setComponents(a + s, h + c, m + p, y + v).normalize(), this;
        }
        intersectsObject(t1) {
            const e = t1.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(), Si.copy(e.boundingSphere).applyMatrix4(t1.matrixWorld), this.intersectsSphere(Si);
        }
        intersectsSprite(t1) {
            return Si.center.set(0, 0, 0), Si.radius = .7071067811865476, Si.applyMatrix4(t1.matrixWorld), this.intersectsSphere(Si);
        }
        intersectsSphere(t1) {
            const e = this.planes, n = t1.center, i = -t1.radius;
            for(let t1 = 0; t1 < 6; t1++){
                if (e[t1].distanceToPoint(n) < i) return !1;
            }
            return !0;
        }
        intersectsBox(t1) {
            const e = this.planes;
            for(let n = 0; n < 6; n++){
                const i = e[n];
                if (Ti.x = i.normal.x > 0 ? t1.max.x : t1.min.x, Ti.y = i.normal.y > 0 ? t1.max.y : t1.min.y, Ti.z = i.normal.z > 0 ? t1.max.z : t1.min.z, i.distanceToPoint(Ti) < 0) return !1;
            }
            return !0;
        }
        containsPoint(t1) {
            const e = this.planes;
            for(let n = 0; n < 6; n++)if (e[n].distanceToPoint(t1) < 0) return !1;
            return !0;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    function Ai() {
        let t1 = null, e = !1, n = null, i = null;
        function r(e, s) {
            n(e, s), i = t1.requestAnimationFrame(r);
        }
        return {
            start: function() {
                !0 !== e && null !== n && (i = t1.requestAnimationFrame(r), e = !0);
            },
            stop: function() {
                t1.cancelAnimationFrame(i), e = !1;
            },
            setAnimationLoop: function(t1) {
                n = t1;
            },
            setContext: function(e) {
                t1 = e;
            }
        };
    }
    function Ri(t1, e) {
        const n = e.isWebGL2, i = new WeakMap;
        return {
            get: function(t1) {
                return t1.isInterleavedBufferAttribute && (t1 = t1.data), i.get(t1);
            },
            remove: function(e) {
                e.isInterleavedBufferAttribute && (e = e.data);
                const n = i.get(e);
                n && (t1.deleteBuffer(n.buffer), i.delete(e));
            },
            update: function(e, r) {
                if (e.isGLBufferAttribute) {
                    const t1 = i.get(e);
                    return void ((!t1 || t1.version < e.version) && i.set(e, {
                        buffer: e.buffer,
                        type: e.type,
                        bytesPerElement: e.elementSize,
                        version: e.version
                    }));
                }
                e.isInterleavedBufferAttribute && (e = e.data);
                const s = i.get(e);
                void 0 === s ? i.set(e, function(e, i) {
                    const r = e.array, s = e.usage, a = t1.createBuffer();
                    let o;
                    if (t1.bindBuffer(i, a), t1.bufferData(i, r, s), e.onUploadCallback(), r instanceof Float32Array) o = 5126;
                    else if (r instanceof Uint16Array) {
                        if (e.isFloat16BufferAttribute) {
                            if (!n) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                            o = 5131;
                        } else o = 5123;
                    } else if (r instanceof Int16Array) o = 5122;
                    else if (r instanceof Uint32Array) o = 5125;
                    else if (r instanceof Int32Array) o = 5124;
                    else if (r instanceof Int8Array) o = 5120;
                    else if (r instanceof Uint8Array) o = 5121;
                    else {
                        if (!(r instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
                        o = 5121;
                    }
                    return {
                        buffer: a,
                        type: o,
                        bytesPerElement: r.BYTES_PER_ELEMENT,
                        version: e.version
                    };
                }(e, r)) : s.version < e.version && (!function(e, i, r) {
                    const s = i.array, a = i.updateRange;
                    t1.bindBuffer(r, e), -1 === a.count ? t1.bufferSubData(r, 0, s) : (n ? t1.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t1.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1);
                }(s.buffer, e, r), s.version = e.version);
            }
        };
    }
    class Ci extends Vn {
        constructor(t1 = 1, e = 1, n = 1, i = 1){
            super(), this.type = "PlaneGeometry", this.parameters = {
                width: t1,
                height: e,
                widthSegments: n,
                heightSegments: i
            };
            const r = t1 / 2, s = e / 2, a = Math.floor(n), o = Math.floor(i), l = a + 1, c = o + 1, h = t1 / a, u = e / o, d = [], p = [], m = [], f = [];
            for(let t1 = 0; t1 < c; t1++){
                const e = t1 * u - s;
                for(let n = 0; n < l; n++){
                    const i = n * h - r;
                    p.push(i, -e, 0), m.push(0, 0, 1), f.push(n / a), f.push(1 - t1 / o);
                }
            }
            for(let t1 = 0; t1 < o; t1++)for(let e = 0; e < a; e++){
                const n = e + l * t1, i = e + l * (t1 + 1), r = e + 1 + l * (t1 + 1), s = e + 1 + l * t1;
                d.push(n, i, s), d.push(i, r, s);
            }
            this.setIndex(d), this.setAttribute("position", new Nn(p, 3)), this.setAttribute("normal", new Nn(m, 3)), this.setAttribute("uv", new Nn(f, 2));
        }
        static fromJSON(t1) {
            return new Ci(t1.width, t1.height, t1.widthSegments, t1.heightSegments);
        }
    }
    const Li = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef USE_ALPHATEST\n	if ( diffuseColor.a < alphaTest ) discard;\n#endif",
        alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
        bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
        color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif",
        color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif",
        common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n	return dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define r0 1.0\n	#define v0 0.339\n	#define m0 - 2.0\n	#define r1 0.8\n	#define v1 0.276\n	#define m1 - 1.0\n	#define r4 0.4\n	#define v4 0.046\n	#define m4 2.0\n	#define r5 0.305\n	#define v5 0.016\n	#define m5 3.0\n	#define r6 0.21\n	#define v6 0.0038\n	#define m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= r1 ) {\n			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n		} else if ( roughness >= r4 ) {\n			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n		} else if ( roughness >= r5 ) {\n			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n		} else if ( roughness >= r6 ) {\n			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
        encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
        envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
        envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n	#endif\n}",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n	vIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointLightInfo( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotLightInfo( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		#ifdef DOUBLE_SIDED\n			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif",
        lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#else\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",
        lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
        lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )	(0)",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	#ifdef SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULARINTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n		#endif\n		#ifdef USE_SPECULARCOLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEENCOLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEENROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n	#endif\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(		0, 1,		0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometry.normal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
        map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
        map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	uniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
        morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform ivec2 morphTargetsTextureSize;\n		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n			int y = texelIndex / morphTargetsTextureSize.x;\n			int x = texelIndex - y * morphTargetsTextureSize.x;\n			ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n			return texelFetch( morphTargetsTexture, morphUV, 0 );\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif",
        normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	#ifdef USE_TANGENT\n		vec3 tangent = normalize( vTangent );\n		vec3 bitangent = normalize( vBitangent );\n		#ifdef DOUBLE_SIDED\n			tangent = tangent * faceDirection;\n			bitangent = bitangent * faceDirection;\n		#endif\n		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n			mat3 vTBN = mat3( tangent, bitangent, normal );\n		#endif\n	#endif\n#endif\nvec3 geometryNormal = normal;",
        normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	#ifdef USE_TANGENT\n		normal = normalize( vTBN * mapN );\n	#else\n		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n	#endif\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
        normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
        normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
        normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n	}\n#endif",
        clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif",
        clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	#ifdef USE_TANGENT\n		clearcoatNormal = normalize( vTBN * clearcoatMapN );\n	#else\n		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n	#endif\n#endif",
        clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif",
        output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n							f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n							f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		vec4 shadowWorldPosition;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	uniform int boneTextureSize;\n	mat4 getBoneMatrix( const in float i ) {\n		float j = i * 4.0;\n		float x = mod( j, float( boneTextureSize ) );\n		float y = floor( j / float( boneTextureSize ) );\n		float dx = 1.0 / float( boneTextureSize );\n		float dy = 1.0 / float( boneTextureSize );\n		y = dy * ( y + 0.5 );\n		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n		mat4 bone = mat4( v1, v2, v3, v4 );\n		return bone;\n	}\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(	1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,	1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,	1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
        transmission_fragment: "#ifdef USE_TRANSMISSION\n	float transmissionAlpha = 1.0;\n	float transmissionFactor = transmission;\n	float thicknessFactor = thickness;\n	#ifdef USE_TRANSMISSIONMAP\n		transmissionFactor *= texture2D( transmissionMap, vUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		thicknessFactor *= texture2D( thicknessMap, vUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmission = getIBLVolumeRefraction(\n		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n		attenuationColor, attenuationDistance );\n	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif",
        transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		#ifdef texture2DLodEXT\n			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#else\n			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#endif\n	}\n	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( attenuationDistance == 0.0 ) {\n			return radiance;\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n	}\n#endif",
        uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n	varying vec2 vUv;\n#endif",
        uv_pars_vertex: "#ifdef USE_UV\n	#ifdef UVS_VERTEX_ONLY\n		vec2 vUv;\n	#else\n		varying vec2 vUv;\n	#endif\n	uniform mat3 uvTransform;\n#endif",
        uv_vertex: "#ifdef USE_UV\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n	uniform mat3 uv2Transform;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n	gl_FragColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n	#endif\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
        cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	vec3 vReflect = vWorldDirection;\n	#include <envmap_fragment>\n	gl_FragColor = envColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	#ifdef DOUBLE_SIDED\n		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n	#else\n		reflectedLight.indirectDiffuse += vIndirectFront;\n	#endif\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
        meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
        meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULARINTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n	#ifdef USE_SPECULARCOLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEENCOLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEENROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n	#endif\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
        shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}"
    }, Pi = {
        common: {
            diffuse: {
                value: new Wt(16777215)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new Ct
            },
            uv2Transform: {
                value: new Ct
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            ior: {
                value: 1.5
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new Rt(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new Wt(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new Wt(16777215)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new Ct
            }
        },
        sprite: {
            diffuse: {
                value: new Wt(16777215)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new Rt(.5, .5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new Ct
            }
        }
    }, Di = {
        basic: {
            uniforms: ui([
                Pi.common,
                Pi.specularmap,
                Pi.envmap,
                Pi.aomap,
                Pi.lightmap,
                Pi.fog
            ]),
            vertexShader: Li.meshbasic_vert,
            fragmentShader: Li.meshbasic_frag
        },
        lambert: {
            uniforms: ui([
                Pi.common,
                Pi.specularmap,
                Pi.envmap,
                Pi.aomap,
                Pi.lightmap,
                Pi.emissivemap,
                Pi.fog,
                Pi.lights,
                {
                    emissive: {
                        value: new Wt(0)
                    }
                }
            ]),
            vertexShader: Li.meshlambert_vert,
            fragmentShader: Li.meshlambert_frag
        },
        phong: {
            uniforms: ui([
                Pi.common,
                Pi.specularmap,
                Pi.envmap,
                Pi.aomap,
                Pi.lightmap,
                Pi.emissivemap,
                Pi.bumpmap,
                Pi.normalmap,
                Pi.displacementmap,
                Pi.fog,
                Pi.lights,
                {
                    emissive: {
                        value: new Wt(0)
                    },
                    specular: {
                        value: new Wt(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }
            ]),
            vertexShader: Li.meshphong_vert,
            fragmentShader: Li.meshphong_frag
        },
        standard: {
            uniforms: ui([
                Pi.common,
                Pi.envmap,
                Pi.aomap,
                Pi.lightmap,
                Pi.emissivemap,
                Pi.bumpmap,
                Pi.normalmap,
                Pi.displacementmap,
                Pi.roughnessmap,
                Pi.metalnessmap,
                Pi.fog,
                Pi.lights,
                {
                    emissive: {
                        value: new Wt(0)
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Li.meshphysical_vert,
            fragmentShader: Li.meshphysical_frag
        },
        toon: {
            uniforms: ui([
                Pi.common,
                Pi.aomap,
                Pi.lightmap,
                Pi.emissivemap,
                Pi.bumpmap,
                Pi.normalmap,
                Pi.displacementmap,
                Pi.gradientmap,
                Pi.fog,
                Pi.lights,
                {
                    emissive: {
                        value: new Wt(0)
                    }
                }
            ]),
            vertexShader: Li.meshtoon_vert,
            fragmentShader: Li.meshtoon_frag
        },
        matcap: {
            uniforms: ui([
                Pi.common,
                Pi.bumpmap,
                Pi.normalmap,
                Pi.displacementmap,
                Pi.fog,
                {
                    matcap: {
                        value: null
                    }
                }
            ]),
            vertexShader: Li.meshmatcap_vert,
            fragmentShader: Li.meshmatcap_frag
        },
        points: {
            uniforms: ui([
                Pi.points,
                Pi.fog
            ]),
            vertexShader: Li.points_vert,
            fragmentShader: Li.points_frag
        },
        dashed: {
            uniforms: ui([
                Pi.common,
                Pi.fog,
                {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }
            ]),
            vertexShader: Li.linedashed_vert,
            fragmentShader: Li.linedashed_frag
        },
        depth: {
            uniforms: ui([
                Pi.common,
                Pi.displacementmap
            ]),
            vertexShader: Li.depth_vert,
            fragmentShader: Li.depth_frag
        },
        normal: {
            uniforms: ui([
                Pi.common,
                Pi.bumpmap,
                Pi.normalmap,
                Pi.displacementmap,
                {
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Li.meshnormal_vert,
            fragmentShader: Li.meshnormal_frag
        },
        sprite: {
            uniforms: ui([
                Pi.sprite,
                Pi.fog
            ]),
            vertexShader: Li.sprite_vert,
            fragmentShader: Li.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new Ct
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: Li.background_vert,
            fragmentShader: Li.background_frag
        },
        cube: {
            uniforms: ui([
                Pi.envmap,
                {
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Li.cube_vert,
            fragmentShader: Li.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: Li.equirect_vert,
            fragmentShader: Li.equirect_frag
        },
        distanceRGBA: {
            uniforms: ui([
                Pi.common,
                Pi.displacementmap,
                {
                    referencePosition: {
                        value: new se
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }
            ]),
            vertexShader: Li.distanceRGBA_vert,
            fragmentShader: Li.distanceRGBA_frag
        },
        shadow: {
            uniforms: ui([
                Pi.lights,
                Pi.fog,
                {
                    color: {
                        value: new Wt(0)
                    },
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Li.shadow_vert,
            fragmentShader: Li.shadow_frag
        }
    };
    function Ii(t1, e, n, i, r, s) {
        const a = new Wt(0);
        let o, c, h = !0 === r ? 0 : 1, u = null, d = 0, p = null;
        function m(t1, e) {
            n.buffers.color.setClear(t1.r, t1.g, t1.b, e, s);
        }
        return {
            getClearColor: function() {
                return a;
            },
            setClearColor: function(t1, e = 1) {
                a.set(t1), h = e, m(a, h);
            },
            getClearAlpha: function() {
                return h;
            },
            setClearAlpha: function(t1) {
                h = t1, m(a, h);
            },
            render: function(n, r) {
                let s = !1, f = !0 === r.isScene ? r.background : null;
                f && f.isTexture && (f = e.get(f));
                const g = t1.xr, v = g.getSession && g.getSession();
                v && "additive" === v.environmentBlendMode && (f = null), null === f ? m(a, h) : f && f.isColor && (m(f, 1), s = !0), (t1.autoClear || s) && t1.clear(t1.autoClearColor, t1.autoClearDepth, t1.autoClearStencil), f && (f.isCubeTexture || f.mapping === l) ? (void 0 === c && (c = new oi(new ci(1, 1, 1), new pi({
                    name: "BackgroundCubeMaterial",
                    uniforms: hi(Di.cube.uniforms),
                    vertexShader: Di.cube.vertexShader,
                    fragmentShader: Di.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(t1, e, n) {
                    this.matrixWorld.copyPosition(n.matrixWorld);
                }, Object.defineProperty(c.material, "envMap", {
                    get: function() {
                        return this.uniforms.envMap.value;
                    }
                }), i.update(c)), c.material.uniforms.envMap.value = f, c.material.uniforms.flipEnvMap.value = f.isCubeTexture && !1 === f.isRenderTargetTexture ? -1 : 1, u === f && d === f.version && p === t1.toneMapping || (c.material.needsUpdate = !0, u = f, d = f.version, p = t1.toneMapping), c.layers.enableAll(), n.unshift(c, c.geometry, c.material, 0, 0, null)) : f && f.isTexture && (void 0 === o && (o = new oi(new Ci(2, 2), new pi({
                    name: "BackgroundMaterial",
                    uniforms: hi(Di.background.uniforms),
                    vertexShader: Di.background.vertexShader,
                    fragmentShader: Di.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
                    get: function() {
                        return this.uniforms.t2D.value;
                    }
                }), i.update(o)), o.material.uniforms.t2D.value = f, !0 === f.matrixAutoUpdate && f.updateMatrix(), o.material.uniforms.uvTransform.value.copy(f.matrix), u === f && d === f.version && p === t1.toneMapping || (o.material.needsUpdate = !0, u = f, d = f.version, p = t1.toneMapping), o.layers.enableAll(), n.unshift(o, o.geometry, o.material, 0, 0, null));
            }
        };
    }
    function Ni(t1, e, n, i) {
        const r = t1.getParameter(34921), s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = i.isWebGL2 || null !== s, o = {}, l = p(null);
        let c = l, h = !1;
        function u(e) {
            return i.isWebGL2 ? t1.bindVertexArray(e) : s.bindVertexArrayOES(e);
        }
        function d(e) {
            return i.isWebGL2 ? t1.deleteVertexArray(e) : s.deleteVertexArrayOES(e);
        }
        function p(t1) {
            const e = [], n = [], i = [];
            for(let t1 = 0; t1 < r; t1++)e[t1] = 0, n[t1] = 0, i[t1] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: e,
                enabledAttributes: n,
                attributeDivisors: i,
                object: t1,
                attributes: {},
                index: null
            };
        }
        function m() {
            const t1 = c.newAttributes;
            for(let e = 0, n = t1.length; e < n; e++)t1[e] = 0;
        }
        function f(t1) {
            g(t1, 0);
        }
        function g(n, r) {
            const s = c.newAttributes, a = c.enabledAttributes, o = c.attributeDivisors;
            if (s[n] = 1, 0 === a[n] && (t1.enableVertexAttribArray(n), a[n] = 1), o[n] !== r) (i.isWebGL2 ? t1 : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), o[n] = r;
        }
        function v() {
            const e = c.newAttributes, n = c.enabledAttributes;
            for(let i = 0, r = n.length; i < r; i++)n[i] !== e[i] && (t1.disableVertexAttribArray(i), n[i] = 0);
        }
        function y(e, n, r, s, a, o) {
            !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t1.vertexAttribPointer(e, n, r, s, a, o) : t1.vertexAttribIPointer(e, n, r, a, o);
        }
        function x() {
            _(), h = !0, c !== l && (c = l, u(c.object));
        }
        function _() {
            l.geometry = null, l.program = null, l.wireframe = !1;
        }
        return {
            setup: function(r, l, d, x, _) {
                let b = !1;
                if (a) {
                    const e = function(e, n, r) {
                        const a = !0 === r.wireframe;
                        let l = o[e.id];
                        void 0 === l && (l = {}, o[e.id] = l);
                        let c = l[n.id];
                        void 0 === c && (c = {}, l[n.id] = c);
                        let h = c[a];
                        void 0 === h && (h = p(i.isWebGL2 ? t1.createVertexArray() : s.createVertexArrayOES()), c[a] = h);
                        return h;
                    }(x, d, l);
                    c !== e && (c = e, u(c.object)), b = function(t1, e, n, i) {
                        const r = c.attributes, s = e.attributes;
                        let a = 0;
                        const o = n.getAttributes();
                        for(const e in o)if (o[e].location >= 0) {
                            const n = r[e];
                            let i = s[e];
                            if (void 0 === i && ("instanceMatrix" === e && t1.instanceMatrix && (i = t1.instanceMatrix), "instanceColor" === e && t1.instanceColor && (i = t1.instanceColor)), void 0 === n) return !0;
                            if (n.attribute !== i) return !0;
                            if (i && n.data !== i.data) return !0;
                            a++;
                        }
                        return c.attributesNum !== a || c.index !== i;
                    }(r, x, d, _), b && function(t1, e, n, i) {
                        const r = {}, s = e.attributes;
                        let a = 0;
                        const o = n.getAttributes();
                        for(const e in o)if (o[e].location >= 0) {
                            let n = s[e];
                            void 0 === n && ("instanceMatrix" === e && t1.instanceMatrix && (n = t1.instanceMatrix), "instanceColor" === e && t1.instanceColor && (n = t1.instanceColor));
                            const i = {};
                            i.attribute = n, n && n.data && (i.data = n.data), r[e] = i, a++;
                        }
                        c.attributes = r, c.attributesNum = a, c.index = i;
                    }(r, x, d, _);
                } else {
                    const t1 = !0 === l.wireframe;
                    c.geometry === x.id && c.program === d.id && c.wireframe === t1 || (c.geometry = x.id, c.program = d.id, c.wireframe = t1, b = !0);
                }
                null !== _ && n.update(_, 34963), (b || h) && (h = !1, function(r, s, a, o) {
                    if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
                    m();
                    const l = o.attributes, c = a.getAttributes(), h = s.defaultAttributeValues;
                    for(const e in c){
                        const i = c[e];
                        if (i.location >= 0) {
                            let s = l[e];
                            if (void 0 === s && ("instanceMatrix" === e && r.instanceMatrix && (s = r.instanceMatrix), "instanceColor" === e && r.instanceColor && (s = r.instanceColor)), void 0 !== s) {
                                const e = s.normalized, a = s.itemSize, l = n.get(s);
                                if (void 0 === l) continue;
                                const c = l.buffer, h = l.type, u = l.bytesPerElement;
                                if (s.isInterleavedBufferAttribute) {
                                    const n = s.data, l = n.stride, d = s.offset;
                                    if (n.isInstancedInterleavedBuffer) {
                                        for(let t1 = 0; t1 < i.locationSize; t1++)g(i.location + t1, n.meshPerAttribute);
                                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count);
                                    } else for(let t1 = 0; t1 < i.locationSize; t1++)f(i.location + t1);
                                    t1.bindBuffer(34962, c);
                                    for(let t1 = 0; t1 < i.locationSize; t1++)y(i.location + t1, a / i.locationSize, h, e, l * u, (d + a / i.locationSize * t1) * u);
                                } else {
                                    if (s.isInstancedBufferAttribute) {
                                        for(let t1 = 0; t1 < i.locationSize; t1++)g(i.location + t1, s.meshPerAttribute);
                                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count);
                                    } else for(let t1 = 0; t1 < i.locationSize; t1++)f(i.location + t1);
                                    t1.bindBuffer(34962, c);
                                    for(let t1 = 0; t1 < i.locationSize; t1++)y(i.location + t1, a / i.locationSize, h, e, a * u, a / i.locationSize * t1 * u);
                                }
                            } else if (void 0 !== h) {
                                const n = h[e];
                                if (void 0 !== n) switch(n.length){
                                    case 2:
                                        t1.vertexAttrib2fv(i.location, n);
                                        break;
                                    case 3:
                                        t1.vertexAttrib3fv(i.location, n);
                                        break;
                                    case 4:
                                        t1.vertexAttrib4fv(i.location, n);
                                        break;
                                    default:
                                        t1.vertexAttrib1fv(i.location, n);
                                }
                            }
                        }
                    }
                    v();
                }(r, l, d, x), null !== _ && t1.bindBuffer(34963, n.get(_).buffer));
            },
            reset: x,
            resetDefaultState: _,
            dispose: function() {
                x();
                for(const t1 in o){
                    const e = o[t1];
                    for(const t1 in e){
                        const n = e[t1];
                        for(const t1 in n)d(n[t1].object), delete n[t1];
                        delete e[t1];
                    }
                    delete o[t1];
                }
            },
            releaseStatesOfGeometry: function(t1) {
                if (void 0 === o[t1.id]) return;
                const e = o[t1.id];
                for(const t1 in e){
                    const n = e[t1];
                    for(const t1 in n)d(n[t1].object), delete n[t1];
                    delete e[t1];
                }
                delete o[t1.id];
            },
            releaseStatesOfProgram: function(t1) {
                for(const e in o){
                    const n = o[e];
                    if (void 0 === n[t1.id]) continue;
                    const i = n[t1.id];
                    for(const t1 in i)d(i[t1].object), delete i[t1];
                    delete n[t1.id];
                }
            },
            initAttributes: m,
            enableAttribute: f,
            disableUnusedAttributes: v
        };
    }
    function Bi(t1, e, n, i) {
        const r = i.isWebGL2;
        let s;
        this.setMode = function(t1) {
            s = t1;
        }, this.render = function(e, i) {
            t1.drawArrays(s, e, i), n.update(i, s, 1);
        }, this.renderInstances = function(i, a, o) {
            if (0 === o) return;
            let l, c;
            if (r) l = t1, c = "drawArraysInstanced";
            else if (l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[c](s, i, a, o), n.update(a, s, o);
        };
    }
    function zi(t1, e, n) {
        let i;
        function r(e) {
            if ("highp" === e) {
                if (t1.getShaderPrecisionFormat(35633, 36338).precision > 0 && t1.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                e = "mediump";
            }
            return "mediump" === e && t1.getShaderPrecisionFormat(35633, 36337).precision > 0 && t1.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
        }
        const s = "undefined" != typeof WebGL2RenderingContext && t1 instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t1 instanceof WebGL2ComputeRenderingContext;
        let a = void 0 !== n.precision ? n.precision : "highp";
        const o = r(a);
        o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
        const l = s || e.has("WEBGL_draw_buffers"), c = !0 === n.logarithmicDepthBuffer, h = t1.getParameter(34930), u = t1.getParameter(35660), d = t1.getParameter(3379), p = t1.getParameter(34076), m = t1.getParameter(34921), f = t1.getParameter(36347), g = t1.getParameter(36348), v = t1.getParameter(36349), y = u > 0, x = s || e.has("OES_texture_float");
        return {
            isWebGL2: s,
            drawBuffers: l,
            getMaxAnisotropy: function() {
                if (void 0 !== i) return i;
                if (!0 === e.has("EXT_texture_filter_anisotropic")) {
                    const n = e.get("EXT_texture_filter_anisotropic");
                    i = t1.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                } else i = 0;
                return i;
            },
            getMaxPrecision: r,
            precision: a,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: u,
            maxTextureSize: d,
            maxCubemapSize: p,
            maxAttributes: m,
            maxVertexUniforms: f,
            maxVaryings: g,
            maxFragmentUniforms: v,
            vertexTextures: y,
            floatFragmentTextures: x,
            floatVertexTextures: y && x,
            maxSamples: s ? t1.getParameter(36183) : 0
        };
    }
    function Oi(t1) {
        const e = this;
        let n = null, i = 0, r = !1, s = !1;
        const a = new wi, o = new Ct, l = {
            value: null,
            needsUpdate: !1
        };
        function c() {
            l.value !== n && (l.value = n, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
        }
        function h(t1, n, i, r) {
            const s = null !== t1 ? t1.length : 0;
            let c = null;
            if (0 !== s) {
                if (c = l.value, !0 !== r || null === c) {
                    const e = i + 4 * s, r = n.matrixWorldInverse;
                    o.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
                    for(let e = 0, n = i; e !== s; ++e, n += 4)a.copy(t1[e]).applyMatrix4(r, o), a.normal.toArray(c, n), c[n + 3] = a.constant;
                }
                l.value = c, l.needsUpdate = !0;
            }
            return e.numPlanes = s, e.numIntersection = 0, c;
        }
        this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t1, e, s) {
            const a = 0 !== t1.length || e || 0 !== i || r;
            return r = e, n = h(t1, s, 0), i = t1.length, a;
        }, this.beginShadows = function() {
            s = !0, h(null);
        }, this.endShadows = function() {
            s = !1, c();
        }, this.setState = function(e, a, o) {
            const u = e.clippingPlanes, d = e.clipIntersection, p = e.clipShadows, m = t1.get(e);
            if (!r || null === u || 0 === u.length || s && !p) s ? h(null) : c();
            else {
                const t1 = s ? 0 : i, e = 4 * t1;
                let r = m.clippingState || null;
                l.value = r, r = h(u, a, e, o);
                for(let t1 = 0; t1 !== e; ++t1)r[t1] = n[t1];
                m.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t1;
            }
        };
    }
    function Ui(t1) {
        let e = new WeakMap;
        function n(t1, e) {
            return e === a ? t1.mapping = r : e === o && (t1.mapping = s), t1;
        }
        function i(t1) {
            const n = t1.target;
            n.removeEventListener("dispose", i);
            const r = e.get(n);
            void 0 !== r && (e.delete(n), r.dispose());
        }
        return {
            get: function(r) {
                if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
                    const s = r.mapping;
                    if (s === a || s === o) {
                        if (e.has(r)) return n(e.get(r).texture, r.mapping);
                        {
                            const s = r.image;
                            if (s && s.height > 0) {
                                const a = new xi(s.height / 2);
                                return a.fromEquirectangularTexture(t1, r), e.set(r, a), r.addEventListener("dispose", i), n(a.texture, r.mapping);
                            }
                            return null;
                        }
                    }
                }
                return r;
            },
            dispose: function() {
                e = new WeakMap;
            }
        };
    }
    Di.physical = {
        uniforms: ui([
            Di.standard.uniforms,
            {
                clearcoat: {
                    value: 0
                },
                clearcoatMap: {
                    value: null
                },
                clearcoatRoughness: {
                    value: 0
                },
                clearcoatRoughnessMap: {
                    value: null
                },
                clearcoatNormalScale: {
                    value: new Rt(1, 1)
                },
                clearcoatNormalMap: {
                    value: null
                },
                sheen: {
                    value: 0
                },
                sheenColor: {
                    value: new Wt(0)
                },
                sheenColorMap: {
                    value: null
                },
                sheenRoughness: {
                    value: 1
                },
                sheenRoughnessMap: {
                    value: null
                },
                transmission: {
                    value: 0
                },
                transmissionMap: {
                    value: null
                },
                transmissionSamplerSize: {
                    value: new Rt
                },
                transmissionSamplerMap: {
                    value: null
                },
                thickness: {
                    value: 0
                },
                thicknessMap: {
                    value: null
                },
                attenuationDistance: {
                    value: 0
                },
                attenuationColor: {
                    value: new Wt(0)
                },
                specularIntensity: {
                    value: 1
                },
                specularIntensityMap: {
                    value: null
                },
                specularColor: {
                    value: new Wt(1, 1, 1)
                },
                specularColorMap: {
                    value: null
                }
            }
        ]),
        vertexShader: Li.meshphysical_vert,
        fragmentShader: Li.meshphysical_frag
    };
    class Fi extends mi {
        constructor(t1 = -1, e = 1, n = 1, i = -1, r = .1, s = 2e3){
            super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t1, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix();
        }
        copy(t1, e) {
            return super.copy(t1, e), this.left = t1.left, this.right = t1.right, this.top = t1.top, this.bottom = t1.bottom, this.near = t1.near, this.far = t1.far, this.zoom = t1.zoom, this.view = null === t1.view ? null : Object.assign({}, t1.view), this;
        }
        setViewOffset(t1, e, n, i, r, s) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t1, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t1 = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
            let r = n - t1, s = n + t1, a = i + e, o = i - e;
            if (null !== this.view && this.view.enabled) {
                const t1 = (this.right - this.left) / this.view.fullWidth / this.zoom, e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                r += t1 * this.view.offsetX, s = r + t1 * this.view.width, a -= e * this.view.offsetY, o = a - e * this.view.height;
            }
            this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e;
        }
    }
    Fi.prototype.isOrthographicCamera = !0;
    const Hi = [
        .125,
        .215,
        .35,
        .446,
        .526,
        .582
    ], Gi = 20, ki = new Fi, Vi = new Wt;
    let Wi = null;
    const ji = (1 + Math.sqrt(5)) / 2, qi = 1 / ji, Xi = [
        new se(1, 1, 1),
        new se(-1, 1, 1),
        new se(1, 1, -1),
        new se(-1, 1, -1),
        new se(0, ji, qi),
        new se(0, ji, -qi),
        new se(qi, 0, ji),
        new se(-qi, 0, ji),
        new se(ji, qi, 0),
        new se(-ji, qi, 0)
    ];
    class Ji {
        constructor(t1){
            this._renderer = t1, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
        }
        fromScene(t1, e = 0, n = .1, i = 100) {
            Wi = this._renderer.getRenderTarget(), this._setSize(256);
            const r = this._allocateTargets();
            return r.depthBuffer = !0, this._sceneToCubeUV(t1, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
        }
        fromEquirectangular(t1, e = null) {
            return this._fromTexture(t1, e);
        }
        fromCubemap(t1, e = null) {
            return this._fromTexture(t1, e);
        }
        compileCubemapShader() {
            null === this._cubemapMaterial && (this._cubemapMaterial = Qi(), this._compileMaterial(this._cubemapMaterial));
        }
        compileEquirectangularShader() {
            null === this._equirectMaterial && (this._equirectMaterial = Ki(), this._compileMaterial(this._equirectMaterial));
        }
        dispose() {
            this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose();
        }
        _setSize(t1) {
            this._lodMax = Math.floor(Math.log2(t1)), this._cubeSize = Math.pow(2, this._lodMax);
        }
        _dispose() {
            null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
            for(let t1 = 0; t1 < this._lodPlanes.length; t1++)this._lodPlanes[t1].dispose();
        }
        _cleanup(t1) {
            this._renderer.setRenderTarget(Wi), t1.scissorTest = !1, Zi(t1, 0, 0, t1.width, t1.height);
        }
        _fromTexture(t1, e) {
            t1.mapping === r || t1.mapping === s ? this._setSize(0 === t1.image.length ? 16 : t1.image[0].width || t1.image[0].image.width) : this._setSize(t1.image.width / 4), Wi = this._renderer.getRenderTarget();
            const n = e || this._allocateTargets();
            return this._textureToCubeUV(t1, n), this._applyPMREM(n), this._cleanup(n), n;
        }
        _allocateTargets() {
            const t1 = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
                magFilter: f,
                minFilter: f,
                generateMipmaps: !1,
                type: M,
                format: S,
                encoding: at,
                depthBuffer: !1
            }, i = Yi(t1, e, n);
            if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t1) {
                null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Yi(t1, e, n);
                const { _lodMax: i  } = this;
                ({ sizeLods: this._sizeLods , lodPlanes: this._lodPlanes , sigmas: this._sigmas  } = function(t1) {
                    const e = [], n = [], i = [];
                    let r = t1;
                    const s = t1 - 4 + 1 + Hi.length;
                    for(let a = 0; a < s; a++){
                        const s = Math.pow(2, r);
                        n.push(s);
                        let o = 1 / s;
                        a > t1 - 4 ? o = Hi[a - t1 + 4 - 1] : 0 === a && (o = 0), i.push(o);
                        const l = 1 / (s - 2), c = -l, h = 1 + l, u = [
                            c,
                            c,
                            h,
                            c,
                            h,
                            h,
                            c,
                            c,
                            h,
                            h,
                            c,
                            h
                        ], d = 6, p = 6, m = 3, f = 2, g = 1, v = new Float32Array(m * p * d), y = new Float32Array(f * p * d), x = new Float32Array(g * p * d);
                        for(let t1 = 0; t1 < d; t1++){
                            const e = t1 % 3 * 2 / 3 - 1, n = t1 > 2 ? 0 : -1, i = [
                                e,
                                n,
                                0,
                                e + 2 / 3,
                                n,
                                0,
                                e + 2 / 3,
                                n + 1,
                                0,
                                e,
                                n,
                                0,
                                e + 2 / 3,
                                n + 1,
                                0,
                                e,
                                n + 1,
                                0
                            ];
                            v.set(i, m * p * t1), y.set(u, f * p * t1);
                            const r = [
                                t1,
                                t1,
                                t1,
                                t1,
                                t1,
                                t1
                            ];
                            x.set(r, g * p * t1);
                        }
                        const _ = new Vn;
                        _.setAttribute("position", new Tn(v, m)), _.setAttribute("uv", new Tn(y, f)), _.setAttribute("faceIndex", new Tn(x, g)), e.push(_), r > 4 && r--;
                    }
                    return {
                        lodPlanes: e,
                        sizeLods: n,
                        sigmas: i
                    };
                }(i)), this._blurMaterial = function(t1, e, n) {
                    const i = new Float32Array(Gi), r = new se(0, 1, 0);
                    return new pi({
                        name: "SphericalGaussianBlur",
                        defines: {
                            n: Gi,
                            CUBEUV_TEXEL_WIDTH: 1 / e,
                            CUBEUV_TEXEL_HEIGHT: 1 / n,
                            CUBEUV_MAX_MIP: `${t1}.0`
                        },
                        uniforms: {
                            envMap: {
                                value: null
                            },
                            samples: {
                                value: 1
                            },
                            weights: {
                                value: i
                            },
                            latitudinal: {
                                value: !1
                            },
                            dTheta: {
                                value: 0
                            },
                            mipInt: {
                                value: 0
                            },
                            poleAxis: {
                                value: r
                            }
                        },
                        vertexShader: $i(),
                        fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		",
                        blending: 0,
                        depthTest: !1,
                        depthWrite: !1
                    });
                }(i, t1, e);
            }
            return i;
        }
        _compileMaterial(t1) {
            const e = new oi(this._lodPlanes[0], t1);
            this._renderer.compile(e, ki);
        }
        _sceneToCubeUV(t1, e, n, i) {
            const r = new fi(90, 1, e, n), s = [
                1,
                -1,
                1,
                1,
                1,
                1
            ], a = [
                1,
                1,
                1,
                -1,
                -1,
                -1
            ], o = this._renderer, l = o.autoClear, c = o.toneMapping;
            o.getClearColor(Vi), o.toneMapping = 0, o.autoClear = !1;
            const h = new Mn({
                name: "PMREM.Background",
                side: 1,
                depthWrite: !1,
                depthTest: !1
            }), u = new oi(new ci, h);
            let d = !1;
            const p = t1.background;
            p ? p.isColor && (h.color.copy(p), t1.background = null, d = !0) : (h.color.copy(Vi), d = !0);
            for(let e = 0; e < 6; e++){
                const n = e % 3;
                0 === n ? (r.up.set(0, s[e], 0), r.lookAt(a[e], 0, 0)) : 1 === n ? (r.up.set(0, 0, s[e]), r.lookAt(0, a[e], 0)) : (r.up.set(0, s[e], 0), r.lookAt(0, 0, a[e]));
                const l = this._cubeSize;
                Zi(i, n * l, e > 2 ? l : 0, l, l), o.setRenderTarget(i), d && o.render(u, r), o.render(t1, r);
            }
            u.geometry.dispose(), u.material.dispose(), o.toneMapping = c, o.autoClear = l, t1.background = p;
        }
        _textureToCubeUV(t1, e) {
            const n = this._renderer, i = t1.mapping === r || t1.mapping === s;
            i ? (null === this._cubemapMaterial && (this._cubemapMaterial = Qi()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t1.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Ki());
            const a = i ? this._cubemapMaterial : this._equirectMaterial, o = new oi(this._lodPlanes[0], a);
            a.uniforms.envMap.value = t1;
            const l = this._cubeSize;
            Zi(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(o, ki);
        }
        _applyPMREM(t1) {
            const e = this._renderer, n = e.autoClear;
            e.autoClear = !1;
            for(let e = 1; e < this._lodPlanes.length; e++){
                const n = Math.sqrt(this._sigmas[e] * this._sigmas[e] - this._sigmas[e - 1] * this._sigmas[e - 1]), i = Xi[(e - 1) % Xi.length];
                this._blur(t1, e - 1, e, n, i);
            }
            e.autoClear = n;
        }
        _blur(t1, e, n, i, r) {
            const s = this._pingPongRenderTarget;
            this._halfBlur(t1, s, e, n, i, "latitudinal", r), this._halfBlur(s, t1, n, n, i, "longitudinal", r);
        }
        _halfBlur(t1, e, n, i, r, s, a) {
            const o = this._renderer, l = this._blurMaterial;
            "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
            const c = new oi(this._lodPlanes[i], l), h = l.uniforms, u = this._sizeLods[n] - 1, d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39, p = r / d, m = isFinite(r) ? 1 + Math.floor(3 * p) : Gi;
            m > Gi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
            const f = [];
            let g = 0;
            for(let t1 = 0; t1 < Gi; ++t1){
                const e = t1 / p, n = Math.exp(-e * e / 2);
                f.push(n), 0 === t1 ? g += n : t1 < m && (g += 2 * n);
            }
            for(let t1 = 0; t1 < f.length; t1++)f[t1] = f[t1] / g;
            h.envMap.value = t1.texture, h.samples.value = m, h.weights.value = f, h.latitudinal.value = "latitudinal" === s, a && (h.poleAxis.value = a);
            const { _lodMax: v  } = this;
            h.dTheta.value = d, h.mipInt.value = v - n;
            const y = this._sizeLods[i];
            Zi(e, 3 * y * (i > v - 4 ? i - v + 4 : 0), 4 * (this._cubeSize - y), 3 * y, 2 * y), o.setRenderTarget(e), o.render(c, ki);
        }
    }
    function Yi(t1, e, n) {
        const i = new Qt(t1, e, n);
        return i.texture.mapping = l, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i;
    }
    function Zi(t1, e, n, i, r) {
        t1.viewport.set(e, n, i, r), t1.scissor.set(e, n, i, r);
    }
    function Ki() {
        return new pi({
            name: "EquirectangularToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                }
            },
            vertexShader: $i(),
            fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function Qi() {
        return new pi({
            name: "CubemapToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                }
            },
            vertexShader: $i(),
            fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function $i() {
        return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
    }
    function tr(t1) {
        let e = new WeakMap, n = null;
        function i(t1) {
            const n = t1.target;
            n.removeEventListener("dispose", i);
            const r = e.get(n);
            void 0 !== r && (e.delete(n), r.dispose());
        }
        return {
            get: function(l) {
                if (l && l.isTexture) {
                    const c = l.mapping, h = c === a || c === o, u = c === r || c === s;
                    if (h || u) {
                        if (l.isRenderTargetTexture && !0 === l.needsPMREMUpdate) {
                            l.needsPMREMUpdate = !1;
                            let i = e.get(l);
                            return null === n && (n = new Ji(t1)), i = h ? n.fromEquirectangular(l, i) : n.fromCubemap(l, i), e.set(l, i), i.texture;
                        }
                        if (e.has(l)) return e.get(l).texture;
                        {
                            const r = l.image;
                            if (h && r && r.height > 0 || u && r && function(t1) {
                                let e = 0;
                                const n = 6;
                                for(let i = 0; i < n; i++)void 0 !== t1[i] && e++;
                                return e === n;
                            }(r)) {
                                null === n && (n = new Ji(t1));
                                const r = h ? n.fromEquirectangular(l) : n.fromCubemap(l);
                                return e.set(l, r), l.addEventListener("dispose", i), r.texture;
                            }
                            return null;
                        }
                    }
                }
                return l;
            },
            dispose: function() {
                e = new WeakMap, null !== n && (n.dispose(), n = null);
            }
        };
    }
    function er(t1) {
        const e = {};
        function n(n) {
            if (void 0 !== e[n]) return e[n];
            let i;
            switch(n){
                case "WEBGL_depth_texture":
                    i = t1.getExtension("WEBGL_depth_texture") || t1.getExtension("MOZ_WEBGL_depth_texture") || t1.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    i = t1.getExtension("EXT_texture_filter_anisotropic") || t1.getExtension("MOZ_EXT_texture_filter_anisotropic") || t1.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    i = t1.getExtension("WEBGL_compressed_texture_s3tc") || t1.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t1.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    i = t1.getExtension("WEBGL_compressed_texture_pvrtc") || t1.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    i = t1.getExtension(n);
            }
            return e[n] = i, i;
        }
        return {
            has: function(t1) {
                return null !== n(t1);
            },
            init: function(t1) {
                t1.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture");
            },
            get: function(t1) {
                const e = n(t1);
                return null === e && console.warn("THREE.WebGLRenderer: " + t1 + " extension not supported."), e;
            }
        };
    }
    function nr(t1, e, n, i) {
        const r = {}, s = new WeakMap;
        function a(t1) {
            const o = t1.target;
            null !== o.index && e.remove(o.index);
            for(const t1 in o.attributes)e.remove(o.attributes[t1]);
            o.removeEventListener("dispose", a), delete r[o.id];
            const l = s.get(o);
            l && (e.remove(l), s.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n.memory.geometries--;
        }
        function o(t1) {
            const n = [], i = t1.index, r = t1.attributes.position;
            let a = 0;
            if (null !== i) {
                const t1 = i.array;
                a = i.version;
                for(let e = 0, i = t1.length; e < i; e += 3){
                    const i = t1[e + 0], r = t1[e + 1], s = t1[e + 2];
                    n.push(i, r, r, s, s, i);
                }
            } else {
                const t1 = r.array;
                a = r.version;
                for(let e = 0, i = t1.length / 3 - 1; e < i; e += 3){
                    const t1 = e + 0, i = e + 1, r = e + 2;
                    n.push(t1, i, i, r, r, t1);
                }
            }
            const o = new (Lt(n) ? Dn : Ln)(n, 1);
            o.version = a;
            const l = s.get(t1);
            l && e.remove(l), s.set(t1, o);
        }
        return {
            get: function(t1, e) {
                return !0 === r[e.id] || (e.addEventListener("dispose", a), r[e.id] = !0, n.memory.geometries++), e;
            },
            update: function(t1) {
                const n = t1.attributes;
                for(const t1 in n)e.update(n[t1], 34962);
                const i = t1.morphAttributes;
                for(const t1 in i){
                    const n = i[t1];
                    for(let t1 = 0, i = n.length; t1 < i; t1++)e.update(n[t1], 34962);
                }
            },
            getWireframeAttribute: function(t1) {
                const e = s.get(t1);
                if (e) {
                    const n = t1.index;
                    null !== n && e.version < n.version && o(t1);
                } else o(t1);
                return s.get(t1);
            }
        };
    }
    function ir(t1, e, n, i) {
        const r = i.isWebGL2;
        let s, a, o;
        this.setMode = function(t1) {
            s = t1;
        }, this.setIndex = function(t1) {
            a = t1.type, o = t1.bytesPerElement;
        }, this.render = function(e, i) {
            t1.drawElements(s, i, a, e * o), n.update(i, s, 1);
        }, this.renderInstances = function(i, l, c) {
            if (0 === c) return;
            let h, u;
            if (r) h = t1, u = "drawElementsInstanced";
            else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            h[u](s, l, a, i * o, c), n.update(l, s, c);
        };
    }
    function rr(t1) {
        const e = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: e,
            programs: null,
            autoReset: !0,
            reset: function() {
                e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
            },
            update: function(t1, n, i) {
                switch(e.calls++, n){
                    case 4:
                        e.triangles += i * (t1 / 3);
                        break;
                    case 1:
                        e.lines += i * (t1 / 2);
                        break;
                    case 3:
                        e.lines += i * (t1 - 1);
                        break;
                    case 2:
                        e.lines += i * t1;
                        break;
                    case 0:
                        e.points += i * t1;
                        break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", n);
                }
            }
        };
    }
    function sr(t1, e) {
        return t1[0] - e[0];
    }
    function ar(t1, e) {
        return Math.abs(e[1]) - Math.abs(t1[1]);
    }
    function or(t1, e) {
        let n = 1;
        const i = e.isInterleavedBufferAttribute ? e.data.array : e.array;
        i instanceof Int8Array ? n = 127 : i instanceof Int16Array ? n = 32767 : i instanceof Int32Array ? n = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", i), t1.divideScalar(n);
    }
    function lr(t1, e, n) {
        const i = {}, r = new Float32Array(8), s = new WeakMap, a = new Kt, o = [];
        for(let t1 = 0; t1 < 8; t1++)o[t1] = [
            t1,
            0
        ];
        return {
            update: function(l, c, h, u) {
                const d = l.morphTargetInfluences;
                if (!0 === e.isWebGL2) {
                    const p = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color, m = void 0 !== p ? p.length : 0;
                    let f = s.get(c);
                    if (void 0 === f || f.count !== m) {
                        void 0 !== f && f.texture.dispose();
                        const y = void 0 !== c.morphAttributes.position, x = void 0 !== c.morphAttributes.normal, _ = void 0 !== c.morphAttributes.color, M = c.morphAttributes.position || [], w = c.morphAttributes.normal || [], S = c.morphAttributes.color || [];
                        let T = 0;
                        !0 === y && (T = 1), !0 === x && (T = 2), !0 === _ && (T = 3);
                        let E = c.attributes.position.count * T, A = 1;
                        E > e.maxTextureSize && (A = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
                        const R = new Float32Array(E * A * 4 * m), C = new $t(R, E, A, m);
                        C.type = b, C.needsUpdate = !0;
                        const L = 4 * T;
                        for(let D = 0; D < m; D++){
                            const I = M[D], N = w[D], B = S[D], z = E * A * 4 * D;
                            for(let O = 0; O < I.count; O++){
                                const U = O * L;
                                !0 === y && (a.fromBufferAttribute(I, O), !0 === I.normalized && or(a, I), R[z + U + 0] = a.x, R[z + U + 1] = a.y, R[z + U + 2] = a.z, R[z + U + 3] = 0), !0 === x && (a.fromBufferAttribute(N, O), !0 === N.normalized && or(a, N), R[z + U + 4] = a.x, R[z + U + 5] = a.y, R[z + U + 6] = a.z, R[z + U + 7] = 0), !0 === _ && (a.fromBufferAttribute(B, O), !0 === B.normalized && or(a, B), R[z + U + 8] = a.x, R[z + U + 9] = a.y, R[z + U + 10] = a.z, R[z + U + 11] = 4 === B.itemSize ? a.w : 1);
                            }
                        }
                        function P() {
                            C.dispose(), s.delete(c), c.removeEventListener("dispose", P);
                        }
                        f = {
                            count: m,
                            texture: C,
                            size: new Rt(E, A)
                        }, s.set(c, f), c.addEventListener("dispose", P);
                    }
                    let g = 0;
                    for(let F = 0; F < d.length; F++)g += d[F];
                    const v = c.morphTargetsRelative ? 1 : 1 - g;
                    u.getUniforms().setValue(t1, "morphTargetBaseInfluence", v), u.getUniforms().setValue(t1, "morphTargetInfluences", d), u.getUniforms().setValue(t1, "morphTargetsTexture", f.texture, n), u.getUniforms().setValue(t1, "morphTargetsTextureSize", f.size);
                } else {
                    const H = void 0 === d ? 0 : d.length;
                    let G = i[c.id];
                    if (void 0 === G || G.length !== H) {
                        G = [];
                        for(let q = 0; q < H; q++)G[q] = [
                            q,
                            0
                        ];
                        i[c.id] = G;
                    }
                    for(let X = 0; X < H; X++){
                        const J = G[X];
                        J[0] = X, J[1] = d[X];
                    }
                    G.sort(ar);
                    for(let Y = 0; Y < 8; Y++)Y < H && G[Y][1] ? (o[Y][0] = G[Y][0], o[Y][1] = G[Y][1]) : (o[Y][0] = Number.MAX_SAFE_INTEGER, o[Y][1] = 0);
                    o.sort(sr);
                    const k = c.morphAttributes.position, V = c.morphAttributes.normal;
                    let W = 0;
                    for(let Z = 0; Z < 8; Z++){
                        const K = o[Z], Q = K[0], $ = K[1];
                        Q !== Number.MAX_SAFE_INTEGER && $ ? (k && c.getAttribute("morphTarget" + Z) !== k[Q] && c.setAttribute("morphTarget" + Z, k[Q]), V && c.getAttribute("morphNormal" + Z) !== V[Q] && c.setAttribute("morphNormal" + Z, V[Q]), r[Z] = $, W += $) : (k && !0 === c.hasAttribute("morphTarget" + Z) && c.deleteAttribute("morphTarget" + Z), V && !0 === c.hasAttribute("morphNormal" + Z) && c.deleteAttribute("morphNormal" + Z), r[Z] = 0);
                    }
                    const j = c.morphTargetsRelative ? 1 : 1 - W;
                    u.getUniforms().setValue(t1, "morphTargetBaseInfluence", j), u.getUniforms().setValue(t1, "morphTargetInfluences", r);
                }
            }
        };
    }
    function cr(t1, e, n, i) {
        let r = new WeakMap;
        function s(t1) {
            const e = t1.target;
            e.removeEventListener("dispose", s), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor);
        }
        return {
            update: function(t1) {
                const a = i.render.frame, o = t1.geometry, l = e.get(t1, o);
                return r.get(l) !== a && (e.update(l), r.set(l, a)), t1.isInstancedMesh && (!1 === t1.hasEventListener("dispose", s) && t1.addEventListener("dispose", s), n.update(t1.instanceMatrix, 34962), null !== t1.instanceColor && n.update(t1.instanceColor, 34962)), l;
            },
            dispose: function() {
                r = new WeakMap;
            }
        };
    }
    const hr = new Zt, ur = new $t, dr = new ee, pr = new yi, mr = [], fr = [], gr = new Float32Array(16), vr = new Float32Array(9), yr = new Float32Array(4);
    function xr(t1, e, n) {
        const i = t1[0];
        if (i <= 0 || i > 0) return t1;
        const r = e * n;
        let s = mr[r];
        if (void 0 === s && (s = new Float32Array(r), mr[r] = s), 0 !== e) {
            i.toArray(s, 0);
            for(let i = 1, r = 0; i !== e; ++i)r += n, t1[i].toArray(s, r);
        }
        return s;
    }
    function _r(t1, e) {
        if (t1.length !== e.length) return !1;
        for(let n = 0, i = t1.length; n < i; n++)if (t1[n] !== e[n]) return !1;
        return !0;
    }
    function br(t1, e) {
        for(let n = 0, i = e.length; n < i; n++)t1[n] = e[n];
    }
    function Mr(t1, e) {
        let n = fr[e];
        void 0 === n && (n = new Int32Array(e), fr[e] = n);
        for(let i = 0; i !== e; ++i)n[i] = t1.allocateTextureUnit();
        return n;
    }
    function wr(t1, e) {
        const n = this.cache;
        n[0] !== e && (t1.uniform1f(this.addr, e), n[0] = e);
    }
    function Sr(t1, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t1.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
        else {
            if (_r(n, e)) return;
            t1.uniform2fv(this.addr, e), br(n, e);
        }
    }
    function Tr(t1, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t1.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
        else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t1.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
        else {
            if (_r(n, e)) return;
            t1.uniform3fv(this.addr, e), br(n, e);
        }
    }
    function Er(t1, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t1.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
        else {
            if (_r(n, e)) return;
            t1.uniform4fv(this.addr, e), br(n, e);
        }
    }
    function Ar(t1, e) {
        const n = this.cache, i = e.elements;
        if (void 0 === i) {
            if (_r(n, e)) return;
            t1.uniformMatrix2fv(this.addr, !1, e), br(n, e);
        } else {
            if (_r(n, i)) return;
            yr.set(i), t1.uniformMatrix2fv(this.addr, !1, yr), br(n, i);
        }
    }
    function Rr(t1, e) {
        const n = this.cache, i = e.elements;
        if (void 0 === i) {
            if (_r(n, e)) return;
            t1.uniformMatrix3fv(this.addr, !1, e), br(n, e);
        } else {
            if (_r(n, i)) return;
            vr.set(i), t1.uniformMatrix3fv(this.addr, !1, vr), br(n, i);
        }
    }
    function Cr(t1, e) {
        const n = this.cache, i = e.elements;
        if (void 0 === i) {
            if (_r(n, e)) return;
            t1.uniformMatrix4fv(this.addr, !1, e), br(n, e);
        } else {
            if (_r(n, i)) return;
            gr.set(i), t1.uniformMatrix4fv(this.addr, !1, gr), br(n, i);
        }
    }
    function Lr(t1, e) {
        const n = this.cache;
        n[0] !== e && (t1.uniform1i(this.addr, e), n[0] = e);
    }
    function Pr(t1, e) {
        const n = this.cache;
        _r(n, e) || (t1.uniform2iv(this.addr, e), br(n, e));
    }
    function Dr(t1, e) {
        const n = this.cache;
        _r(n, e) || (t1.uniform3iv(this.addr, e), br(n, e));
    }
    function Ir(t1, e) {
        const n = this.cache;
        _r(n, e) || (t1.uniform4iv(this.addr, e), br(n, e));
    }
    function Nr(t1, e) {
        const n = this.cache;
        n[0] !== e && (t1.uniform1ui(this.addr, e), n[0] = e);
    }
    function Br(t1, e) {
        const n = this.cache;
        _r(n, e) || (t1.uniform2uiv(this.addr, e), br(n, e));
    }
    function zr(t1, e) {
        const n = this.cache;
        _r(n, e) || (t1.uniform3uiv(this.addr, e), br(n, e));
    }
    function Or(t1, e) {
        const n = this.cache;
        _r(n, e) || (t1.uniform4uiv(this.addr, e), br(n, e));
    }
    function Ur(t1, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t1.uniform1i(this.addr, r), i[0] = r), n.setTexture2D(e || hr, r);
    }
    function Fr(t1, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t1.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || dr, r);
    }
    function Hr(t1, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t1.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || pr, r);
    }
    function Gr(t1, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t1.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || ur, r);
    }
    function kr(t1, e) {
        t1.uniform1fv(this.addr, e);
    }
    function Vr(t1, e) {
        const n = xr(e, this.size, 2);
        t1.uniform2fv(this.addr, n);
    }
    function Wr(t1, e) {
        const n = xr(e, this.size, 3);
        t1.uniform3fv(this.addr, n);
    }
    function jr(t1, e) {
        const n = xr(e, this.size, 4);
        t1.uniform4fv(this.addr, n);
    }
    function qr(t1, e) {
        const n = xr(e, this.size, 4);
        t1.uniformMatrix2fv(this.addr, !1, n);
    }
    function Xr(t1, e) {
        const n = xr(e, this.size, 9);
        t1.uniformMatrix3fv(this.addr, !1, n);
    }
    function Jr(t1, e) {
        const n = xr(e, this.size, 16);
        t1.uniformMatrix4fv(this.addr, !1, n);
    }
    function Yr(t1, e) {
        t1.uniform1iv(this.addr, e);
    }
    function Zr(t1, e) {
        t1.uniform2iv(this.addr, e);
    }
    function Kr(t1, e) {
        t1.uniform3iv(this.addr, e);
    }
    function Qr(t1, e) {
        t1.uniform4iv(this.addr, e);
    }
    function $r(t1, e) {
        t1.uniform1uiv(this.addr, e);
    }
    function ts(t1, e) {
        t1.uniform2uiv(this.addr, e);
    }
    function es(t1, e) {
        t1.uniform3uiv(this.addr, e);
    }
    function ns(t1, e) {
        t1.uniform4uiv(this.addr, e);
    }
    function is(t1, e, n) {
        const i = e.length, r = Mr(n, i);
        t1.uniform1iv(this.addr, r);
        for(let t1 = 0; t1 !== i; ++t1)n.setTexture2D(e[t1] || hr, r[t1]);
    }
    function rs(t1, e, n) {
        const i = e.length, r = Mr(n, i);
        t1.uniform1iv(this.addr, r);
        for(let t1 = 0; t1 !== i; ++t1)n.setTexture3D(e[t1] || dr, r[t1]);
    }
    function ss(t1, e, n) {
        const i = e.length, r = Mr(n, i);
        t1.uniform1iv(this.addr, r);
        for(let t1 = 0; t1 !== i; ++t1)n.setTextureCube(e[t1] || pr, r[t1]);
    }
    function as(t1, e, n) {
        const i = e.length, r = Mr(n, i);
        t1.uniform1iv(this.addr, r);
        for(let t1 = 0; t1 !== i; ++t1)n.setTexture2DArray(e[t1] || ur, r[t1]);
    }
    function os(t1, e, n) {
        this.id = t1, this.addr = n, this.cache = [], this.setValue = function(t1) {
            switch(t1){
                case 5126:
                    return wr;
                case 35664:
                    return Sr;
                case 35665:
                    return Tr;
                case 35666:
                    return Er;
                case 35674:
                    return Ar;
                case 35675:
                    return Rr;
                case 35676:
                    return Cr;
                case 5124:
                case 35670:
                    return Lr;
                case 35667:
                case 35671:
                    return Pr;
                case 35668:
                case 35672:
                    return Dr;
                case 35669:
                case 35673:
                    return Ir;
                case 5125:
                    return Nr;
                case 36294:
                    return Br;
                case 36295:
                    return zr;
                case 36296:
                    return Or;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                    return Ur;
                case 35679:
                case 36299:
                case 36307:
                    return Fr;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                    return Hr;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                    return Gr;
            }
        }(e.type);
    }
    function ls(t1, e, n) {
        this.id = t1, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function(t1) {
            switch(t1){
                case 5126:
                    return kr;
                case 35664:
                    return Vr;
                case 35665:
                    return Wr;
                case 35666:
                    return jr;
                case 35674:
                    return qr;
                case 35675:
                    return Xr;
                case 35676:
                    return Jr;
                case 5124:
                case 35670:
                    return Yr;
                case 35667:
                case 35671:
                    return Zr;
                case 35668:
                case 35672:
                    return Kr;
                case 35669:
                case 35673:
                    return Qr;
                case 5125:
                    return $r;
                case 36294:
                    return ts;
                case 36295:
                    return es;
                case 36296:
                    return ns;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                    return is;
                case 35679:
                case 36299:
                case 36307:
                    return rs;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                    return ss;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                    return as;
            }
        }(e.type);
    }
    function cs(t1) {
        this.id = t1, this.seq = [], this.map = {};
    }
    cs.prototype.setValue = function(t1, e, n) {
        const i = this.seq;
        for(let r = 0, s = i.length; r !== s; ++r){
            const s = i[r];
            s.setValue(t1, e[s.id], n);
        }
    };
    const hs = /(\w+)(\])?(\[|\.)?/g;
    function us(t1, e) {
        t1.seq.push(e), t1.map[e.id] = e;
    }
    function ds(t1, e, n) {
        const i = t1.name, r = i.length;
        for(hs.lastIndex = 0;;){
            const s = hs.exec(i), a = hs.lastIndex;
            let o = s[1];
            const l = "]" === s[2], c = s[3];
            if (l && (o |= 0), void 0 === c || "[" === c && a + 2 === r) {
                us(n, void 0 === c ? new os(o, t1, e) : new ls(o, t1, e));
                break;
            }
            {
                let t1 = n.map[o];
                void 0 === t1 && (t1 = new cs(o), us(n, t1)), n = t1;
            }
        }
    }
    function ps(t1, e) {
        this.seq = [], this.map = {};
        const n = t1.getProgramParameter(e, 35718);
        for(let i = 0; i < n; ++i){
            const n = t1.getActiveUniform(e, i);
            ds(n, t1.getUniformLocation(e, n.name), this);
        }
    }
    function ms(t1, e, n) {
        const i = t1.createShader(e);
        return t1.shaderSource(i, n), t1.compileShader(i), i;
    }
    ps.prototype.setValue = function(t1, e, n, i) {
        const r = this.map[e];
        void 0 !== r && r.setValue(t1, n, i);
    }, ps.prototype.setOptional = function(t1, e, n) {
        const i = e[n];
        void 0 !== i && this.setValue(t1, n, i);
    }, ps.upload = function(t1, e, n, i) {
        for(let r = 0, s = e.length; r !== s; ++r){
            const s = e[r], a = n[s.id];
            !1 !== a.needsUpdate && s.setValue(t1, a.value, i);
        }
    }, ps.seqWithValue = function(t1, e) {
        const n = [];
        for(let i = 0, r = t1.length; i !== r; ++i){
            const r = t1[i];
            r.id in e && n.push(r);
        }
        return n;
    };
    let fs = 0;
    function gs(t1, e, n) {
        const i = t1.getShaderParameter(e, 35713), r = t1.getShaderInfoLog(e).trim();
        if (i && "" === r) return "";
        const s = /ERROR: 0:(\d+)/.exec(r);
        if (s) {
            const i = parseInt(s[0]);
            return n.toUpperCase() + "\n\n" + r + "\n\n" + function(t1, e) {
                const n = t1.split("\n"), i = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, n.length);
                for(let t1 = r; t1 < s; t1++)i.push(t1 + 1 + ": " + n[t1]);
                return i.join("\n");
            }(t1.getShaderSource(e), i);
        }
        return r;
    }
    function vs(t1, e) {
        const n = function(t1) {
            switch(t1){
                case at:
                    return [
                        "Linear",
                        "( value )"
                    ];
                case ot:
                    return [
                        "sRGB",
                        "( value )"
                    ];
                default:
                    return console.warn("THREE.WebGLProgram: Unsupported encoding:", t1), [
                        "Linear",
                        "( value )"
                    ];
            }
        }(e);
        return "vec4 " + t1 + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
    }
    function ys(t1, e) {
        let n;
        switch(e){
            case 1:
                n = "Linear";
                break;
            case 2:
                n = "Reinhard";
                break;
            case 3:
                n = "OptimizedCineon";
                break;
            case 4:
                n = "ACESFilmic";
                break;
            case 5:
                n = "Custom";
                break;
            default:
                console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear";
        }
        return "vec3 " + t1 + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
    }
    function xs(t1) {
        return "" !== t1;
    }
    function _s(t1, e) {
        return t1.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
    }
    function bs(t1, e) {
        return t1.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
    }
    const Ms = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function ws(t1) {
        return t1.replace(Ms, Ss);
    }
    function Ss(t1, e) {
        const n = Li[e];
        if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
        return ws(n);
    }
    const Ts = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, Es = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function As(t1) {
        return t1.replace(Es, Cs).replace(Ts, Rs);
    }
    function Rs(t1, e, n, i) {
        return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Cs(t1, e, n, i);
    }
    function Cs(t1, e, n, i) {
        let r = "";
        for(let t1 = parseInt(e); t1 < parseInt(n); t1++)r += i.replace(/\[\s*i\s*\]/g, "[ " + t1 + " ]").replace(/UNROLLED_LOOP_INDEX/g, t1);
        return r;
    }
    function Ls(t1) {
        let e = "precision " + t1.precision + " float;\nprecision " + t1.precision + " int;";
        return "highp" === t1.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t1.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t1.precision && (e += "\n#define LOW_PRECISION"), e;
    }
    function Ps(t1, e, n, i) {
        const a = t1.getContext(), o = n.defines;
        let c = n.vertexShader, h = n.fragmentShader;
        const u = function(t1) {
            let e = "SHADOWMAP_TYPE_BASIC";
            return 1 === t1.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t1.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t1.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e;
        }(n), d = function(t1) {
            let e = "ENVMAP_TYPE_CUBE";
            if (t1.envMap) switch(t1.envMapMode){
                case r:
                case s:
                    e = "ENVMAP_TYPE_CUBE";
                    break;
                case l:
                    e = "ENVMAP_TYPE_CUBE_UV";
            }
            return e;
        }(n), p = function(t1) {
            let e = "ENVMAP_MODE_REFLECTION";
            t1.envMap && t1.envMapMode === s && (e = "ENVMAP_MODE_REFRACTION");
            return e;
        }(n), m = function(t1) {
            let e = "ENVMAP_BLENDING_NONE";
            if (t1.envMap) switch(t1.combine){
                case 0:
                    e = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case 1:
                    e = "ENVMAP_BLENDING_MIX";
                    break;
                case 2:
                    e = "ENVMAP_BLENDING_ADD";
            }
            return e;
        }(n), f = function(t1) {
            const e = t1.envMapCubeUVHeight;
            if (null === e) return null;
            const n = Math.log2(e) - 2, i = 1 / e;
            return {
                texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
                texelHeight: i,
                maxMip: n
            };
        }(n), g = n.isWebGL2 ? "" : function(t1) {
            return [
                t1.extensionDerivatives || t1.envMapCubeUVHeight || t1.bumpMap || t1.tangentSpaceNormalMap || t1.clearcoatNormalMap || t1.flatShading || "physical" === t1.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "",
                (t1.extensionFragDepth || t1.logarithmicDepthBuffer) && t1.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
                t1.extensionDrawBuffers && t1.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
                (t1.extensionShaderTextureLOD || t1.envMap || t1.transmission) && t1.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
            ].filter(xs).join("\n");
        }(n), v = function(t1) {
            const e = [];
            for(const n in t1){
                const i = t1[n];
                !1 !== i && e.push("#define " + n + " " + i);
            }
            return e.join("\n");
        }(o), y = a.createProgram();
        let x, _, b = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
        n.isRawShaderMaterial ? (x = [
            v
        ].filter(xs).join("\n"), x.length > 0 && (x += "\n"), _ = [
            g,
            v
        ].filter(xs).join("\n"), _.length > 0 && (_ += "\n")) : (x = [
            Ls(n),
            "#define SHADER_NAME " + n.shaderName,
            v,
            n.instancing ? "#define USE_INSTANCING" : "",
            n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
            n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
            n.useFog && n.fog ? "#define USE_FOG" : "",
            n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
            n.map ? "#define USE_MAP" : "",
            n.envMap ? "#define USE_ENVMAP" : "",
            n.envMap ? "#define " + p : "",
            n.lightMap ? "#define USE_LIGHTMAP" : "",
            n.aoMap ? "#define USE_AOMAP" : "",
            n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            n.bumpMap ? "#define USE_BUMPMAP" : "",
            n.normalMap ? "#define USE_NORMALMAP" : "",
            n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
            n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
            n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
            n.specularMap ? "#define USE_SPECULARMAP" : "",
            n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
            n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
            n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            n.metalnessMap ? "#define USE_METALNESSMAP" : "",
            n.alphaMap ? "#define USE_ALPHAMAP" : "",
            n.transmission ? "#define USE_TRANSMISSION" : "",
            n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
            n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
            n.vertexTangents ? "#define USE_TANGENT" : "",
            n.vertexColors ? "#define USE_COLOR" : "",
            n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            n.vertexUvs ? "#define USE_UV" : "",
            n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
            n.flatShading ? "#define FLAT_SHADED" : "",
            n.skinning ? "#define USE_SKINNING" : "",
            n.morphTargets ? "#define USE_MORPHTARGETS" : "",
            n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "",
            n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
            n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
            n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
            n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
            n.doubleSided ? "#define DOUBLE_SIDED" : "",
            n.flipSided ? "#define FLIP_SIDED" : "",
            n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            n.shadowMapEnabled ? "#define " + u : "",
            n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
            n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 modelMatrix;",
            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            "#ifdef USE_INSTANCING",
            "	attribute mat4 instanceMatrix;",
            "#endif",
            "#ifdef USE_INSTANCING_COLOR",
            "	attribute vec3 instanceColor;",
            "#endif",
            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec2 uv;",
            "#ifdef USE_TANGENT",
            "	attribute vec4 tangent;",
            "#endif",
            "#if defined( USE_COLOR_ALPHA )",
            "	attribute vec4 color;",
            "#elif defined( USE_COLOR )",
            "	attribute vec3 color;",
            "#endif",
            "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
            "	attribute vec3 morphTarget0;",
            "	attribute vec3 morphTarget1;",
            "	attribute vec3 morphTarget2;",
            "	attribute vec3 morphTarget3;",
            "	#ifdef USE_MORPHNORMALS",
            "		attribute vec3 morphNormal0;",
            "		attribute vec3 morphNormal1;",
            "		attribute vec3 morphNormal2;",
            "		attribute vec3 morphNormal3;",
            "	#else",
            "		attribute vec3 morphTarget4;",
            "		attribute vec3 morphTarget5;",
            "		attribute vec3 morphTarget6;",
            "		attribute vec3 morphTarget7;",
            "	#endif",
            "#endif",
            "#ifdef USE_SKINNING",
            "	attribute vec4 skinIndex;",
            "	attribute vec4 skinWeight;",
            "#endif",
            "\n"
        ].filter(xs).join("\n"), _ = [
            g,
            Ls(n),
            "#define SHADER_NAME " + n.shaderName,
            v,
            n.useFog && n.fog ? "#define USE_FOG" : "",
            n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
            n.map ? "#define USE_MAP" : "",
            n.matcap ? "#define USE_MATCAP" : "",
            n.envMap ? "#define USE_ENVMAP" : "",
            n.envMap ? "#define " + d : "",
            n.envMap ? "#define " + p : "",
            n.envMap ? "#define " + m : "",
            f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
            f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
            f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
            n.lightMap ? "#define USE_LIGHTMAP" : "",
            n.aoMap ? "#define USE_AOMAP" : "",
            n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            n.bumpMap ? "#define USE_BUMPMAP" : "",
            n.normalMap ? "#define USE_NORMALMAP" : "",
            n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
            n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
            n.clearcoat ? "#define USE_CLEARCOAT" : "",
            n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            n.specularMap ? "#define USE_SPECULARMAP" : "",
            n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
            n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
            n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            n.metalnessMap ? "#define USE_METALNESSMAP" : "",
            n.alphaMap ? "#define USE_ALPHAMAP" : "",
            n.alphaTest ? "#define USE_ALPHATEST" : "",
            n.sheen ? "#define USE_SHEEN" : "",
            n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
            n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
            n.transmission ? "#define USE_TRANSMISSION" : "",
            n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
            n.vertexTangents ? "#define USE_TANGENT" : "",
            n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
            n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            n.vertexUvs ? "#define USE_UV" : "",
            n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
            n.gradientMap ? "#define USE_GRADIENTMAP" : "",
            n.flatShading ? "#define FLAT_SHADED" : "",
            n.doubleSided ? "#define DOUBLE_SIDED" : "",
            n.flipSided ? "#define FLIP_SIDED" : "",
            n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            n.shadowMapEnabled ? "#define " + u : "",
            n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
            n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
            n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            0 !== n.toneMapping ? "#define TONE_MAPPING" : "",
            0 !== n.toneMapping ? Li.tonemapping_pars_fragment : "",
            0 !== n.toneMapping ? ys("toneMapping", n.toneMapping) : "",
            n.dithering ? "#define DITHERING" : "",
            n.opaque ? "#define OPAQUE" : "",
            Li.encodings_pars_fragment,
            vs("linearToOutputTexel", n.outputEncoding),
            n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
            "\n"
        ].filter(xs).join("\n")), c = ws(c), c = _s(c, n), c = bs(c, n), h = ws(h), h = _s(h, n), h = bs(h, n), c = As(c), h = As(h), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (b = "#version 300 es\n", x = [
            "precision mediump sampler2DArray;",
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture"
        ].join("\n") + "\n" + x, _ = [
            "#define varying in",
            n.glslVersion === pt ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
            n.glslVersion === pt ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad"
        ].join("\n") + "\n" + _);
        const M = b + _ + h, w = ms(a, 35633, b + x + c), S = ms(a, 35632, M);
        if (a.attachShader(y, w), a.attachShader(y, S), void 0 !== n.index0AttributeName ? a.bindAttribLocation(y, 0, n.index0AttributeName) : !0 === n.morphTargets && a.bindAttribLocation(y, 0, "position"), a.linkProgram(y), t1.debug.checkShaderErrors) {
            const t1 = a.getProgramInfoLog(y).trim(), e = a.getShaderInfoLog(w).trim(), n = a.getShaderInfoLog(S).trim();
            let i = !0, r = !0;
            if (!1 === a.getProgramParameter(y, 35714)) {
                i = !1;
                const e = gs(a, w, "vertex"), n = gs(a, S, "fragment");
                console.error("THREE.WebGLProgram: Shader Error " + a.getError() + " - VALIDATE_STATUS " + a.getProgramParameter(y, 35715) + "\n\nProgram Info Log: " + t1 + "\n" + e + "\n" + n);
            } else "" !== t1 ? console.warn("THREE.WebGLProgram: Program Info Log:", t1) : "" !== e && "" !== n || (r = !1);
            r && (this.diagnostics = {
                runnable: i,
                programLog: t1,
                vertexShader: {
                    log: e,
                    prefix: x
                },
                fragmentShader: {
                    log: n,
                    prefix: _
                }
            });
        }
        let T, E;
        return a.deleteShader(w), a.deleteShader(S), this.getUniforms = function() {
            return void 0 === T && (T = new ps(a, y)), T;
        }, this.getAttributes = function() {
            return void 0 === E && (E = function(t1, e) {
                const n = {}, i = t1.getProgramParameter(e, 35721);
                for(let r = 0; r < i; r++){
                    const i = t1.getActiveAttrib(e, r), s = i.name;
                    let a = 1;
                    35674 === i.type && (a = 2), 35675 === i.type && (a = 3), 35676 === i.type && (a = 4), n[s] = {
                        type: i.type,
                        location: t1.getAttribLocation(e, s),
                        locationSize: a
                    };
                }
                return n;
            }(a, y)), E;
        }, this.destroy = function() {
            i.releaseStatesOfProgram(this), a.deleteProgram(y), this.program = void 0;
        }, this.name = n.shaderName, this.id = fs++, this.cacheKey = e, this.usedTimes = 1, this.program = y, this.vertexShader = w, this.fragmentShader = S, this;
    }
    let Ds = 0;
    class Is {
        constructor(){
            this.shaderCache = new Map, this.materialCache = new Map;
        }
        update(t1) {
            const e = t1.vertexShader, n = t1.fragmentShader, i = this._getShaderStage(e), r = this._getShaderStage(n), s = this._getShaderCacheForMaterial(t1);
            return !1 === s.has(i) && (s.add(i), i.usedTimes++), !1 === s.has(r) && (s.add(r), r.usedTimes++), this;
        }
        remove(t1) {
            const e = this.materialCache.get(t1);
            for (const t1 of e)t1.usedTimes--, 0 === t1.usedTimes && this.shaderCache.delete(t1.code);
            return this.materialCache.delete(t1), this;
        }
        getVertexShaderID(t1) {
            return this._getShaderStage(t1.vertexShader).id;
        }
        getFragmentShaderID(t1) {
            return this._getShaderStage(t1.fragmentShader).id;
        }
        dispose() {
            this.shaderCache.clear(), this.materialCache.clear();
        }
        _getShaderCacheForMaterial(t1) {
            const e = this.materialCache;
            return !1 === e.has(t1) && e.set(t1, new Set), e.get(t1);
        }
        _getShaderStage(t1) {
            const e = this.shaderCache;
            if (!1 === e.has(t1)) {
                const n = new Ns(t1);
                e.set(t1, n);
            }
            return e.get(t1);
        }
    }
    class Ns {
        constructor(t1){
            this.id = Ds++, this.code = t1, this.usedTimes = 0;
        }
    }
    function Bs(t1, e, n, i, r, s, a) {
        const o = new Xe, c = new Is, h = [], u = r.isWebGL2, d = r.logarithmicDepthBuffer, p = r.vertexTextures;
        let m = r.precision;
        const f = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        };
        return {
            getParameters: function(s, o, h, g, v) {
                const y = g.fog, x = v.geometry, _ = s.isMeshStandardMaterial ? g.environment : null, b = (s.isMeshStandardMaterial ? n : e).get(s.envMap || _), M = b && b.mapping === l ? b.image.height : null, w = f[s.type];
                null !== s.precision && (m = r.getMaxPrecision(s.precision), m !== s.precision && console.warn("THREE.WebGLProgram.getParameters:", s.precision, "not supported, using", m, "instead."));
                const S = x.morphAttributes.position || x.morphAttributes.normal || x.morphAttributes.color, T = void 0 !== S ? S.length : 0;
                let E, A, R, C, L = 0;
                if (void 0 !== x.morphAttributes.position && (L = 1), void 0 !== x.morphAttributes.normal && (L = 2), void 0 !== x.morphAttributes.color && (L = 3), w) {
                    const t1 = Di[w];
                    E = t1.vertexShader, A = t1.fragmentShader;
                } else E = s.vertexShader, A = s.fragmentShader, c.update(s), R = c.getVertexShaderID(s), C = c.getFragmentShaderID(s);
                const P = t1.getRenderTarget(), D = s.alphaTest > 0, I = s.clearcoat > 0;
                return {
                    isWebGL2: u,
                    shaderID: w,
                    shaderName: s.type,
                    vertexShader: E,
                    fragmentShader: A,
                    defines: s.defines,
                    customVertexShaderID: R,
                    customFragmentShaderID: C,
                    isRawShaderMaterial: !0 === s.isRawShaderMaterial,
                    glslVersion: s.glslVersion,
                    precision: m,
                    instancing: !0 === v.isInstancedMesh,
                    instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
                    supportsVertexTextures: p,
                    outputEncoding: null === P ? t1.outputEncoding : !0 === P.isXRRenderTarget ? P.texture.encoding : at,
                    map: !!s.map,
                    matcap: !!s.matcap,
                    envMap: !!b,
                    envMapMode: b && b.mapping,
                    envMapCubeUVHeight: M,
                    lightMap: !!s.lightMap,
                    aoMap: !!s.aoMap,
                    emissiveMap: !!s.emissiveMap,
                    bumpMap: !!s.bumpMap,
                    normalMap: !!s.normalMap,
                    objectSpaceNormalMap: 1 === s.normalMapType,
                    tangentSpaceNormalMap: 0 === s.normalMapType,
                    decodeVideoTexture: !!s.map && !0 === s.map.isVideoTexture && s.map.encoding === ot,
                    clearcoat: I,
                    clearcoatMap: I && !!s.clearcoatMap,
                    clearcoatRoughnessMap: I && !!s.clearcoatRoughnessMap,
                    clearcoatNormalMap: I && !!s.clearcoatNormalMap,
                    displacementMap: !!s.displacementMap,
                    roughnessMap: !!s.roughnessMap,
                    metalnessMap: !!s.metalnessMap,
                    specularMap: !!s.specularMap,
                    specularIntensityMap: !!s.specularIntensityMap,
                    specularColorMap: !!s.specularColorMap,
                    opaque: !1 === s.transparent && 1 === s.blending,
                    alphaMap: !!s.alphaMap,
                    alphaTest: D,
                    gradientMap: !!s.gradientMap,
                    sheen: s.sheen > 0,
                    sheenColorMap: !!s.sheenColorMap,
                    sheenRoughnessMap: !!s.sheenRoughnessMap,
                    transmission: s.transmission > 0,
                    transmissionMap: !!s.transmissionMap,
                    thicknessMap: !!s.thicknessMap,
                    combine: s.combine,
                    vertexTangents: !!s.normalMap && !!x.attributes.tangent,
                    vertexColors: s.vertexColors,
                    vertexAlphas: !0 === s.vertexColors && !!x.attributes.color && 4 === x.attributes.color.itemSize,
                    vertexUvs: !!(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatMap || s.clearcoatRoughnessMap || s.clearcoatNormalMap || s.displacementMap || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheenColorMap || s.sheenRoughnessMap),
                    uvsVertexOnly: !(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatNormalMap || s.transmission > 0 || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheen > 0 || s.sheenColorMap || s.sheenRoughnessMap || !s.displacementMap),
                    fog: !!y,
                    useFog: !0 === s.fog,
                    fogExp2: y && y.isFogExp2,
                    flatShading: !!s.flatShading,
                    sizeAttenuation: s.sizeAttenuation,
                    logarithmicDepthBuffer: d,
                    skinning: !0 === v.isSkinnedMesh,
                    morphTargets: void 0 !== x.morphAttributes.position,
                    morphNormals: void 0 !== x.morphAttributes.normal,
                    morphColors: void 0 !== x.morphAttributes.color,
                    morphTargetsCount: T,
                    morphTextureStride: L,
                    numDirLights: o.directional.length,
                    numPointLights: o.point.length,
                    numSpotLights: o.spot.length,
                    numRectAreaLights: o.rectArea.length,
                    numHemiLights: o.hemi.length,
                    numDirLightShadows: o.directionalShadowMap.length,
                    numPointLightShadows: o.pointShadowMap.length,
                    numSpotLightShadows: o.spotShadowMap.length,
                    numClippingPlanes: a.numPlanes,
                    numClipIntersection: a.numIntersection,
                    dithering: s.dithering,
                    shadowMapEnabled: t1.shadowMap.enabled && h.length > 0,
                    shadowMapType: t1.shadowMap.type,
                    toneMapping: s.toneMapped ? t1.toneMapping : 0,
                    physicallyCorrectLights: t1.physicallyCorrectLights,
                    premultipliedAlpha: s.premultipliedAlpha,
                    doubleSided: 2 === s.side,
                    flipSided: 1 === s.side,
                    useDepthPacking: !!s.depthPacking,
                    depthPacking: s.depthPacking || 0,
                    index0AttributeName: s.index0AttributeName,
                    extensionDerivatives: s.extensions && s.extensions.derivatives,
                    extensionFragDepth: s.extensions && s.extensions.fragDepth,
                    extensionDrawBuffers: s.extensions && s.extensions.drawBuffers,
                    extensionShaderTextureLOD: s.extensions && s.extensions.shaderTextureLOD,
                    rendererExtensionFragDepth: u || i.has("EXT_frag_depth"),
                    rendererExtensionDrawBuffers: u || i.has("WEBGL_draw_buffers"),
                    rendererExtensionShaderTextureLod: u || i.has("EXT_shader_texture_lod"),
                    customProgramCacheKey: s.customProgramCacheKey()
                };
            },
            getProgramCacheKey: function(e) {
                const n = [];
                if (e.shaderID ? n.push(e.shaderID) : (n.push(e.customVertexShaderID), n.push(e.customFragmentShaderID)), void 0 !== e.defines) for(const t1 in e.defines)n.push(t1), n.push(e.defines[t1]);
                return !1 === e.isRawShaderMaterial && (!function(t1, e) {
                    t1.push(e.precision), t1.push(e.outputEncoding), t1.push(e.envMapMode), t1.push(e.envMapCubeUVHeight), t1.push(e.combine), t1.push(e.vertexUvs), t1.push(e.fogExp2), t1.push(e.sizeAttenuation), t1.push(e.morphTargetsCount), t1.push(e.morphAttributeCount), t1.push(e.numDirLights), t1.push(e.numPointLights), t1.push(e.numSpotLights), t1.push(e.numHemiLights), t1.push(e.numRectAreaLights), t1.push(e.numDirLightShadows), t1.push(e.numPointLightShadows), t1.push(e.numSpotLightShadows), t1.push(e.shadowMapType), t1.push(e.toneMapping), t1.push(e.numClippingPlanes), t1.push(e.numClipIntersection), t1.push(e.depthPacking);
                }(n, e), function(t1, e) {
                    o.disableAll(), e.isWebGL2 && o.enable(0);
                    e.supportsVertexTextures && o.enable(1);
                    e.instancing && o.enable(2);
                    e.instancingColor && o.enable(3);
                    e.map && o.enable(4);
                    e.matcap && o.enable(5);
                    e.envMap && o.enable(6);
                    e.lightMap && o.enable(7);
                    e.aoMap && o.enable(8);
                    e.emissiveMap && o.enable(9);
                    e.bumpMap && o.enable(10);
                    e.normalMap && o.enable(11);
                    e.objectSpaceNormalMap && o.enable(12);
                    e.tangentSpaceNormalMap && o.enable(13);
                    e.clearcoat && o.enable(14);
                    e.clearcoatMap && o.enable(15);
                    e.clearcoatRoughnessMap && o.enable(16);
                    e.clearcoatNormalMap && o.enable(17);
                    e.displacementMap && o.enable(18);
                    e.specularMap && o.enable(19);
                    e.roughnessMap && o.enable(20);
                    e.metalnessMap && o.enable(21);
                    e.gradientMap && o.enable(22);
                    e.alphaMap && o.enable(23);
                    e.alphaTest && o.enable(24);
                    e.vertexColors && o.enable(25);
                    e.vertexAlphas && o.enable(26);
                    e.vertexUvs && o.enable(27);
                    e.vertexTangents && o.enable(28);
                    e.uvsVertexOnly && o.enable(29);
                    e.fog && o.enable(30);
                    t1.push(o.mask), o.disableAll(), e.useFog && o.enable(0);
                    e.flatShading && o.enable(1);
                    e.logarithmicDepthBuffer && o.enable(2);
                    e.skinning && o.enable(3);
                    e.morphTargets && o.enable(4);
                    e.morphNormals && o.enable(5);
                    e.morphColors && o.enable(6);
                    e.premultipliedAlpha && o.enable(7);
                    e.shadowMapEnabled && o.enable(8);
                    e.physicallyCorrectLights && o.enable(9);
                    e.doubleSided && o.enable(10);
                    e.flipSided && o.enable(11);
                    e.useDepthPacking && o.enable(12);
                    e.dithering && o.enable(13);
                    e.specularIntensityMap && o.enable(14);
                    e.specularColorMap && o.enable(15);
                    e.transmission && o.enable(16);
                    e.transmissionMap && o.enable(17);
                    e.thicknessMap && o.enable(18);
                    e.sheen && o.enable(19);
                    e.sheenColorMap && o.enable(20);
                    e.sheenRoughnessMap && o.enable(21);
                    e.decodeVideoTexture && o.enable(22);
                    e.opaque && o.enable(23);
                    t1.push(o.mask);
                }(n, e), n.push(t1.outputEncoding)), n.push(e.customProgramCacheKey), n.join();
            },
            getUniforms: function(t1) {
                const e = f[t1.type];
                let n;
                if (e) {
                    const t1 = Di[e];
                    n = di.clone(t1.uniforms);
                } else n = t1.uniforms;
                return n;
            },
            acquireProgram: function(e, n) {
                let i;
                for(let t1 = 0, e = h.length; t1 < e; t1++){
                    const e = h[t1];
                    if (e.cacheKey === n) {
                        i = e, ++i.usedTimes;
                        break;
                    }
                }
                return void 0 === i && (i = new Ps(t1, n, e, s), h.push(i)), i;
            },
            releaseProgram: function(t1) {
                if (0 == --t1.usedTimes) {
                    const e = h.indexOf(t1);
                    h[e] = h[h.length - 1], h.pop(), t1.destroy();
                }
            },
            releaseShaderCache: function(t1) {
                c.remove(t1);
            },
            programs: h,
            dispose: function() {
                c.dispose();
            }
        };
    }
    function zs() {
        let t1 = new WeakMap;
        return {
            get: function(e) {
                let n = t1.get(e);
                return void 0 === n && (n = {}, t1.set(e, n)), n;
            },
            remove: function(e) {
                t1.delete(e);
            },
            update: function(e, n, i) {
                t1.get(e)[n] = i;
            },
            dispose: function() {
                t1 = new WeakMap;
            }
        };
    }
    function Os(t1, e) {
        return t1.groupOrder !== e.groupOrder ? t1.groupOrder - e.groupOrder : t1.renderOrder !== e.renderOrder ? t1.renderOrder - e.renderOrder : t1.material.id !== e.material.id ? t1.material.id - e.material.id : t1.z !== e.z ? t1.z - e.z : t1.id - e.id;
    }
    function Us(t1, e) {
        return t1.groupOrder !== e.groupOrder ? t1.groupOrder - e.groupOrder : t1.renderOrder !== e.renderOrder ? t1.renderOrder - e.renderOrder : t1.z !== e.z ? e.z - t1.z : t1.id - e.id;
    }
    function Fs() {
        const t1 = [];
        let e = 0;
        const n = [], i = [], r = [];
        function s(n, i, r, s, a, o) {
            let l = t1[e];
            return void 0 === l ? (l = {
                id: n.id,
                object: n,
                geometry: i,
                material: r,
                groupOrder: s,
                renderOrder: n.renderOrder,
                z: a,
                group: o
            }, t1[e] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = r, l.groupOrder = s, l.renderOrder = n.renderOrder, l.z = a, l.group = o), e++, l;
        }
        return {
            opaque: n,
            transmissive: i,
            transparent: r,
            init: function() {
                e = 0, n.length = 0, i.length = 0, r.length = 0;
            },
            push: function(t1, e, a, o, l, c) {
                const h = s(t1, e, a, o, l, c);
                a.transmission > 0 ? i.push(h) : !0 === a.transparent ? r.push(h) : n.push(h);
            },
            unshift: function(t1, e, a, o, l, c) {
                const h = s(t1, e, a, o, l, c);
                a.transmission > 0 ? i.unshift(h) : !0 === a.transparent ? r.unshift(h) : n.unshift(h);
            },
            finish: function() {
                for(let n = e, i = t1.length; n < i; n++){
                    const e = t1[n];
                    if (null === e.id) break;
                    e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null;
                }
            },
            sort: function(t1, e) {
                n.length > 1 && n.sort(t1 || Os), i.length > 1 && i.sort(e || Us), r.length > 1 && r.sort(e || Us);
            }
        };
    }
    function Hs() {
        let t1 = new WeakMap;
        return {
            get: function(e, n) {
                let i;
                return !1 === t1.has(e) ? (i = new Fs, t1.set(e, [
                    i
                ])) : n >= t1.get(e).length ? (i = new Fs, t1.get(e).push(i)) : i = t1.get(e)[n], i;
            },
            dispose: function() {
                t1 = new WeakMap;
            }
        };
    }
    function Gs() {
        const t1 = {};
        return {
            get: function(e) {
                if (void 0 !== t1[e.id]) return t1[e.id];
                let n;
                switch(e.type){
                    case "DirectionalLight":
                        n = {
                            direction: new se,
                            color: new Wt
                        };
                        break;
                    case "SpotLight":
                        n = {
                            position: new se,
                            direction: new se,
                            color: new Wt,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0
                        };
                        break;
                    case "PointLight":
                        n = {
                            position: new se,
                            color: new Wt,
                            distance: 0,
                            decay: 0
                        };
                        break;
                    case "HemisphereLight":
                        n = {
                            direction: new se,
                            skyColor: new Wt,
                            groundColor: new Wt
                        };
                        break;
                    case "RectAreaLight":
                        n = {
                            color: new Wt,
                            position: new se,
                            halfWidth: new se,
                            halfHeight: new se
                        };
                }
                return t1[e.id] = n, n;
            }
        };
    }
    let ks = 0;
    function Vs(t1, e) {
        return (e.castShadow ? 1 : 0) - (t1.castShadow ? 1 : 0);
    }
    function Ws(t1, e) {
        const n = new Gs, i = function() {
            const t1 = {};
            return {
                get: function(e) {
                    if (void 0 !== t1[e.id]) return t1[e.id];
                    let n;
                    switch(e.type){
                        case "DirectionalLight":
                        case "SpotLight":
                            n = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new Rt
                            };
                            break;
                        case "PointLight":
                            n = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new Rt,
                                shadowCameraNear: 1,
                                shadowCameraFar: 1e3
                            };
                    }
                    return t1[e.id] = n, n;
                }
            };
        }(), r = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1
            },
            ambient: [
                0,
                0,
                0
            ],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        };
        for(let t1 = 0; t1 < 9; t1++)r.probe.push(new se);
        const s = new se, a = new ze, o = new ze;
        return {
            setup: function(s, a) {
                let o = 0, l = 0, c = 0;
                for(let t1 = 0; t1 < 9; t1++)r.probe[t1].set(0, 0, 0);
                let h = 0, u = 0, d = 0, p = 0, m = 0, f = 0, g = 0, v = 0;
                s.sort(Vs);
                const y = !0 !== a ? Math.PI : 1;
                for(let t1 = 0, e = s.length; t1 < e; t1++){
                    const e = s[t1], a = e.color, x = e.intensity, _ = e.distance, b = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                    if (e.isAmbientLight) o += a.r * x * y, l += a.g * x * y, c += a.b * x * y;
                    else if (e.isLightProbe) for(let t1 = 0; t1 < 9; t1++)r.probe[t1].addScaledVector(e.sh.coefficients[t1], x);
                    else if (e.isDirectionalLight) {
                        const t1 = n.get(e);
                        if (t1.color.copy(e.color).multiplyScalar(e.intensity * y), e.castShadow) {
                            const t1 = e.shadow, n = i.get(e);
                            n.shadowBias = t1.bias, n.shadowNormalBias = t1.normalBias, n.shadowRadius = t1.radius, n.shadowMapSize = t1.mapSize, r.directionalShadow[h] = n, r.directionalShadowMap[h] = b, r.directionalShadowMatrix[h] = e.shadow.matrix, f++;
                        }
                        r.directional[h] = t1, h++;
                    } else if (e.isSpotLight) {
                        const t1 = n.get(e);
                        if (t1.position.setFromMatrixPosition(e.matrixWorld), t1.color.copy(a).multiplyScalar(x * y), t1.distance = _, t1.coneCos = Math.cos(e.angle), t1.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t1.decay = e.decay, e.castShadow) {
                            const t1 = e.shadow, n = i.get(e);
                            n.shadowBias = t1.bias, n.shadowNormalBias = t1.normalBias, n.shadowRadius = t1.radius, n.shadowMapSize = t1.mapSize, r.spotShadow[d] = n, r.spotShadowMap[d] = b, r.spotShadowMatrix[d] = e.shadow.matrix, v++;
                        }
                        r.spot[d] = t1, d++;
                    } else if (e.isRectAreaLight) {
                        const t1 = n.get(e);
                        t1.color.copy(a).multiplyScalar(x), t1.halfWidth.set(.5 * e.width, 0, 0), t1.halfHeight.set(0, .5 * e.height, 0), r.rectArea[p] = t1, p++;
                    } else if (e.isPointLight) {
                        const t1 = n.get(e);
                        if (t1.color.copy(e.color).multiplyScalar(e.intensity * y), t1.distance = e.distance, t1.decay = e.decay, e.castShadow) {
                            const t1 = e.shadow, n = i.get(e);
                            n.shadowBias = t1.bias, n.shadowNormalBias = t1.normalBias, n.shadowRadius = t1.radius, n.shadowMapSize = t1.mapSize, n.shadowCameraNear = t1.camera.near, n.shadowCameraFar = t1.camera.far, r.pointShadow[u] = n, r.pointShadowMap[u] = b, r.pointShadowMatrix[u] = e.shadow.matrix, g++;
                        }
                        r.point[u] = t1, u++;
                    } else if (e.isHemisphereLight) {
                        const t1 = n.get(e);
                        t1.skyColor.copy(e.color).multiplyScalar(x * y), t1.groundColor.copy(e.groundColor).multiplyScalar(x * y), r.hemi[m] = t1, m++;
                    }
                }
                p > 0 && (e.isWebGL2 || !0 === t1.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = Pi.LTC_FLOAT_1, r.rectAreaLTC2 = Pi.LTC_FLOAT_2) : !0 === t1.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = Pi.LTC_HALF_1, r.rectAreaLTC2 = Pi.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = c;
                const x = r.hash;
                x.directionalLength === h && x.pointLength === u && x.spotLength === d && x.rectAreaLength === p && x.hemiLength === m && x.numDirectionalShadows === f && x.numPointShadows === g && x.numSpotShadows === v || (r.directional.length = h, r.spot.length = d, r.rectArea.length = p, r.point.length = u, r.hemi.length = m, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = v, r.spotShadowMap.length = v, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = g, r.spotShadowMatrix.length = v, x.directionalLength = h, x.pointLength = u, x.spotLength = d, x.rectAreaLength = p, x.hemiLength = m, x.numDirectionalShadows = f, x.numPointShadows = g, x.numSpotShadows = v, r.version = ks++);
            },
            setupView: function(t1, e) {
                let n = 0, i = 0, l = 0, c = 0, h = 0;
                const u = e.matrixWorldInverse;
                for(let e = 0, d = t1.length; e < d; e++){
                    const d = t1[e];
                    if (d.isDirectionalLight) {
                        const t1 = r.directional[n];
                        t1.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t1.direction.sub(s), t1.direction.transformDirection(u), n++;
                    } else if (d.isSpotLight) {
                        const t1 = r.spot[l];
                        t1.position.setFromMatrixPosition(d.matrixWorld), t1.position.applyMatrix4(u), t1.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t1.direction.sub(s), t1.direction.transformDirection(u), l++;
                    } else if (d.isRectAreaLight) {
                        const t1 = r.rectArea[c];
                        t1.position.setFromMatrixPosition(d.matrixWorld), t1.position.applyMatrix4(u), o.identity(), a.copy(d.matrixWorld), a.premultiply(u), o.extractRotation(a), t1.halfWidth.set(.5 * d.width, 0, 0), t1.halfHeight.set(0, .5 * d.height, 0), t1.halfWidth.applyMatrix4(o), t1.halfHeight.applyMatrix4(o), c++;
                    } else if (d.isPointLight) {
                        const t1 = r.point[i];
                        t1.position.setFromMatrixPosition(d.matrixWorld), t1.position.applyMatrix4(u), i++;
                    } else if (d.isHemisphereLight) {
                        const t1 = r.hemi[h];
                        t1.direction.setFromMatrixPosition(d.matrixWorld), t1.direction.transformDirection(u), h++;
                    }
                }
            },
            state: r
        };
    }
    function js(t1, e) {
        const n = new Ws(t1, e), i = [], r = [];
        return {
            init: function() {
                i.length = 0, r.length = 0;
            },
            state: {
                lightsArray: i,
                shadowsArray: r,
                lights: n
            },
            setupLights: function(t1) {
                n.setup(i, t1);
            },
            setupLightsView: function(t1) {
                n.setupView(i, t1);
            },
            pushLight: function(t1) {
                i.push(t1);
            },
            pushShadow: function(t1) {
                r.push(t1);
            }
        };
    }
    function qs(t1, e) {
        let n = new WeakMap;
        return {
            get: function(i, r = 0) {
                let s;
                return !1 === n.has(i) ? (s = new js(t1, e), n.set(i, [
                    s
                ])) : r >= n.get(i).length ? (s = new js(t1, e), n.get(i).push(s)) : s = n.get(i)[r], s;
            },
            dispose: function() {
                n = new WeakMap;
            }
        };
    }
    class Xs extends bn {
        constructor(t1){
            super(), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.depthPacking = t1.depthPacking, this.map = t1.map, this.alphaMap = t1.alphaMap, this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this;
        }
    }
    Xs.prototype.isMeshDepthMaterial = !0;
    class Js extends bn {
        constructor(t1){
            super(), this.type = "MeshDistanceMaterial", this.referencePosition = new se, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.referencePosition.copy(t1.referencePosition), this.nearDistance = t1.nearDistance, this.farDistance = t1.farDistance, this.map = t1.map, this.alphaMap = t1.alphaMap, this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this;
        }
    }
    Js.prototype.isMeshDistanceMaterial = !0;
    function Ys(t1, e, n) {
        let i = new Ei;
        const r = new Rt, s = new Rt, a = new Kt, o = new Xs({
            depthPacking: 3201
        }), l = new Js, c = {}, h = n.maxTextureSize, u = {
            0: 1,
            1: 0,
            2: 2
        }, p = new pi({
            defines: {
                VSM_SAMPLES: 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new Rt
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
            fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
        }), m = p.clone();
        m.defines.HORIZONTAL_PASS = 1;
        const f = new Vn;
        f.setAttribute("position", new Tn(new Float32Array([
            -1,
            -1,
            .5,
            3,
            -1,
            .5,
            -1,
            3,
            .5
        ]), 3));
        const g = new oi(f, p), v = this;
        function y(n, i) {
            const r = e.update(g);
            p.defines.VSM_SAMPLES !== n.blurSamples && (p.defines.VSM_SAMPLES = n.blurSamples, m.defines.VSM_SAMPLES = n.blurSamples, p.needsUpdate = !0, m.needsUpdate = !0), p.uniforms.shadow_pass.value = n.map.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, t1.setRenderTarget(n.mapPass), t1.clear(), t1.renderBufferDirect(i, null, r, p, g, null), m.uniforms.shadow_pass.value = n.mapPass.texture, m.uniforms.resolution.value = n.mapSize, m.uniforms.radius.value = n.radius, t1.setRenderTarget(n.map), t1.clear(), t1.renderBufferDirect(i, null, r, m, g, null);
        }
        function x(e, n, i, r, s, a) {
            let h = null;
            const d = !0 === i.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
            if (h = void 0 !== d ? d : !0 === i.isPointLight ? l : o, t1.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length || n.displacementMap && 0 !== n.displacementScale || n.alphaMap && n.alphaTest > 0) {
                const t1 = h.uuid, e = n.uuid;
                let i = c[t1];
                void 0 === i && (i = {}, c[t1] = i);
                let r = i[e];
                void 0 === r && (r = h.clone(), i[e] = r), h = r;
            }
            return h.visible = n.visible, h.wireframe = n.wireframe, h.side = 3 === a ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : u[n.side], h.alphaMap = n.alphaMap, h.alphaTest = n.alphaTest, h.clipShadows = n.clipShadows, h.clippingPlanes = n.clippingPlanes, h.clipIntersection = n.clipIntersection, h.displacementMap = n.displacementMap, h.displacementScale = n.displacementScale, h.displacementBias = n.displacementBias, h.wireframeLinewidth = n.wireframeLinewidth, h.linewidth = n.linewidth, !0 === i.isPointLight && !0 === h.isMeshDistanceMaterial && (h.referencePosition.setFromMatrixPosition(i.matrixWorld), h.nearDistance = r, h.farDistance = s), h;
        }
        function _(n, r, s, a, o) {
            if (!1 === n.visible) return;
            if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) {
                n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
                const i = e.update(n), r = n.material;
                if (Array.isArray(r)) {
                    const e = i.groups;
                    for(let l = 0, c = e.length; l < c; l++){
                        const c = e[l], h = r[c.materialIndex];
                        if (h && h.visible) {
                            const e = x(n, h, a, s.near, s.far, o);
                            t1.renderBufferDirect(s, null, i, e, n, c);
                        }
                    }
                } else if (r.visible) {
                    const e = x(n, r, a, s.near, s.far, o);
                    t1.renderBufferDirect(s, null, i, e, n, null);
                }
            }
            const l = n.children;
            for(let t1 = 0, e = l.length; t1 < e; t1++)_(l[t1], r, s, a, o);
        }
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, n, o) {
            if (!1 === v.enabled) return;
            if (!1 === v.autoUpdate && !1 === v.needsUpdate) return;
            if (0 === e.length) return;
            const l = t1.getRenderTarget(), c = t1.getActiveCubeFace(), u = t1.getActiveMipmapLevel(), p = t1.state;
            p.setBlending(0), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
            for(let l = 0, c = e.length; l < c; l++){
                const c = e[l], u = c.shadow;
                if (void 0 === u) {
                    console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                    continue;
                }
                if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
                r.copy(u.mapSize);
                const m = u.getFrameExtents();
                if (r.multiply(m), s.copy(u.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / m.x), r.x = s.x * m.x, u.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / m.y), r.y = s.y * m.y, u.mapSize.y = s.y)), null !== u.map || u.isPointLightShadow || 3 !== this.type || (u.map = new Qt(r.x, r.y), u.map.texture.name = c.name + ".shadowMap", u.mapPass = new Qt(r.x, r.y), u.camera.updateProjectionMatrix()), null === u.map) {
                    const t1 = {
                        minFilter: d,
                        magFilter: d,
                        format: S
                    };
                    u.map = new Qt(r.x, r.y, t1), u.map.texture.name = c.name + ".shadowMap", u.camera.updateProjectionMatrix();
                }
                t1.setRenderTarget(u.map), t1.clear();
                const f = u.getViewportCount();
                for(let t1 = 0; t1 < f; t1++){
                    const e = u.getViewport(t1);
                    a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w), p.viewport(a), u.updateMatrices(c, t1), i = u.getFrustum(), _(n, o, u.camera, c, this.type);
                }
                u.isPointLightShadow || 3 !== this.type || y(u, o), u.needsUpdate = !1;
            }
            v.needsUpdate = !1, t1.setRenderTarget(l, c, u);
        };
    }
    function Zs(t1, e, i) {
        const r = i.isWebGL2;
        const s = new function() {
            let e = !1;
            const n = new Kt;
            let i = null;
            const r = new Kt(0, 0, 0, 0);
            return {
                setMask: function(n) {
                    i === n || e || (t1.colorMask(n, n, n, n), i = n);
                },
                setLocked: function(t1) {
                    e = t1;
                },
                setClear: function(e, i, s, a, o) {
                    !0 === o && (e *= a, i *= a, s *= a), n.set(e, i, s, a), !1 === r.equals(n) && (t1.clearColor(e, i, s, a), r.copy(n));
                },
                reset: function() {
                    e = !1, i = null, r.set(-1, 0, 0, 0);
                }
            };
        }, a = new function() {
            let e = !1, n = null, i = null, r = null;
            return {
                setTest: function(t1) {
                    t1 ? F(2929) : H(2929);
                },
                setMask: function(i) {
                    n === i || e || (t1.depthMask(i), n = i);
                },
                setFunc: function(e) {
                    if (i !== e) {
                        if (e) switch(e){
                            case 0:
                                t1.depthFunc(512);
                                break;
                            case 1:
                                t1.depthFunc(519);
                                break;
                            case 2:
                                t1.depthFunc(513);
                                break;
                            case 3:
                            default:
                                t1.depthFunc(515);
                                break;
                            case 4:
                                t1.depthFunc(514);
                                break;
                            case 5:
                                t1.depthFunc(518);
                                break;
                            case 6:
                                t1.depthFunc(516);
                                break;
                            case 7:
                                t1.depthFunc(517);
                        }
                        else t1.depthFunc(515);
                        i = e;
                    }
                },
                setLocked: function(t1) {
                    e = t1;
                },
                setClear: function(e) {
                    r !== e && (t1.clearDepth(e), r = e);
                },
                reset: function() {
                    e = !1, n = null, i = null, r = null;
                }
            };
        }, o = new function() {
            let e = !1, n = null, i = null, r = null, s = null, a = null, o = null, l = null, c = null;
            return {
                setTest: function(t1) {
                    e || (t1 ? F(2960) : H(2960));
                },
                setMask: function(i) {
                    n === i || e || (t1.stencilMask(i), n = i);
                },
                setFunc: function(e, n, a) {
                    i === e && r === n && s === a || (t1.stencilFunc(e, n, a), i = e, r = n, s = a);
                },
                setOp: function(e, n, i) {
                    a === e && o === n && l === i || (t1.stencilOp(e, n, i), a = e, o = n, l = i);
                },
                setLocked: function(t1) {
                    e = t1;
                },
                setClear: function(e) {
                    c !== e && (t1.clearStencil(e), c = e);
                },
                reset: function() {
                    e = !1, n = null, i = null, r = null, s = null, a = null, o = null, l = null, c = null;
                }
            };
        };
        let l = {}, c = {}, h = new WeakMap, u = [], d = null, p = !1, m = null, f = null, g = null, v = null, y = null, x = null, _ = null, b = !1, M = null, w = null, S = null, T = null, E = null;
        const A = t1.getParameter(35661);
        let R = !1, C = 0;
        const L = t1.getParameter(7938);
        -1 !== L.indexOf("WebGL") ? (C = parseFloat(/^WebGL (\d)/.exec(L)[1]), R = C >= 1) : -1 !== L.indexOf("OpenGL ES") && (C = parseFloat(/^OpenGL ES (\d)/.exec(L)[1]), R = C >= 2);
        let P = null, D = {};
        const I = t1.getParameter(3088), N = t1.getParameter(2978), B = (new Kt).fromArray(I), z = (new Kt).fromArray(N);
        function O(e, n, i) {
            const r = new Uint8Array(4), s = t1.createTexture();
            t1.bindTexture(e, s), t1.texParameteri(e, 10241, 9728), t1.texParameteri(e, 10240, 9728);
            for(let e = 0; e < i; e++)t1.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
            return s;
        }
        const U = {};
        function F(e) {
            !0 !== l[e] && (t1.enable(e), l[e] = !0);
        }
        function H(e) {
            !1 !== l[e] && (t1.disable(e), l[e] = !1);
        }
        U[3553] = O(3553, 3553, 1), U[34067] = O(34067, 34069, 6), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), F(2929), a.setFunc(3), W(!1), j(1), F(2884), V(0);
        const G = {
            [n]: 32774,
            101: 32778,
            102: 32779
        };
        if (r) G[103] = 32775, G[104] = 32776;
        else {
            const t1 = e.get("EXT_blend_minmax");
            null !== t1 && (G[103] = t1.MIN_EXT, G[104] = t1.MAX_EXT);
        }
        const k = {
            200: 0,
            201: 1,
            202: 768,
            204: 770,
            210: 776,
            208: 774,
            206: 772,
            203: 769,
            205: 771,
            209: 775,
            207: 773
        };
        function V(e, i, r, s, a, o, l, c) {
            if (0 !== e) {
                if (!1 === p && (F(3042), p = !0), 5 === e) a = a || i, o = o || r, l = l || s, i === f && a === y || (t1.blendEquationSeparate(G[i], G[a]), f = i, y = a), r === g && s === v && o === x && l === _ || (t1.blendFuncSeparate(k[r], k[s], k[o], k[l]), g = r, v = s, x = o, _ = l), m = e, b = null;
                else if (e !== m || c !== b) {
                    if (f === n && y === n || (t1.blendEquation(32774), f = n, y = n), c) switch(e){
                        case 1:
                            t1.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case 2:
                            t1.blendFunc(1, 1);
                            break;
                        case 3:
                            t1.blendFuncSeparate(0, 769, 0, 1);
                            break;
                        case 4:
                            t1.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e);
                    }
                    else switch(e){
                        case 1:
                            t1.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case 2:
                            t1.blendFunc(770, 1);
                            break;
                        case 3:
                            t1.blendFuncSeparate(0, 769, 0, 1);
                            break;
                        case 4:
                            t1.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e);
                    }
                    g = null, v = null, x = null, _ = null, m = e, b = c;
                }
            } else !0 === p && (H(3042), p = !1);
        }
        function W(e) {
            M !== e && (e ? t1.frontFace(2304) : t1.frontFace(2305), M = e);
        }
        function j(e) {
            0 !== e ? (F(2884), e !== w && (1 === e ? t1.cullFace(1029) : 2 === e ? t1.cullFace(1028) : t1.cullFace(1032))) : H(2884), w = e;
        }
        function q(e, n, i) {
            e ? (F(32823), T === n && E === i || (t1.polygonOffset(n, i), T = n, E = i)) : H(32823);
        }
        function X(e) {
            void 0 === e && (e = 33984 + A - 1), P !== e && (t1.activeTexture(e), P = e);
        }
        return {
            buffers: {
                color: s,
                depth: a,
                stencil: o
            },
            enable: F,
            disable: H,
            bindFramebuffer: function(e, n) {
                return c[e] !== n && (t1.bindFramebuffer(e, n), c[e] = n, r && (36009 === e && (c[36160] = n), 36160 === e && (c[36009] = n)), !0);
            },
            drawBuffers: function(n, r) {
                let s = u, a = !1;
                if (n) {
                    if (s = h.get(r), void 0 === s && (s = [], h.set(r, s)), n.isWebGLMultipleRenderTargets) {
                        const t1 = n.texture;
                        if (s.length !== t1.length || 36064 !== s[0]) {
                            for(let e = 0, n = t1.length; e < n; e++)s[e] = 36064 + e;
                            s.length = t1.length, a = !0;
                        }
                    } else 36064 !== s[0] && (s[0] = 36064, a = !0);
                } else 1029 !== s[0] && (s[0] = 1029, a = !0);
                a && (i.isWebGL2 ? t1.drawBuffers(s) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s));
            },
            useProgram: function(e) {
                return d !== e && (t1.useProgram(e), d = e, !0);
            },
            setBlending: V,
            setMaterial: function(t1, e) {
                2 === t1.side ? H(2884) : F(2884);
                let n = 1 === t1.side;
                e && (n = !n), W(n), 1 === t1.blending && !1 === t1.transparent ? V(0) : V(t1.blending, t1.blendEquation, t1.blendSrc, t1.blendDst, t1.blendEquationAlpha, t1.blendSrcAlpha, t1.blendDstAlpha, t1.premultipliedAlpha), a.setFunc(t1.depthFunc), a.setTest(t1.depthTest), a.setMask(t1.depthWrite), s.setMask(t1.colorWrite);
                const i = t1.stencilWrite;
                o.setTest(i), i && (o.setMask(t1.stencilWriteMask), o.setFunc(t1.stencilFunc, t1.stencilRef, t1.stencilFuncMask), o.setOp(t1.stencilFail, t1.stencilZFail, t1.stencilZPass)), q(t1.polygonOffset, t1.polygonOffsetFactor, t1.polygonOffsetUnits), !0 === t1.alphaToCoverage ? F(32926) : H(32926);
            },
            setFlipSided: W,
            setCullFace: j,
            setLineWidth: function(e) {
                e !== S && (R && t1.lineWidth(e), S = e);
            },
            setPolygonOffset: q,
            setScissorTest: function(t1) {
                t1 ? F(3089) : H(3089);
            },
            activeTexture: X,
            bindTexture: function(e, n) {
                null === P && X();
                let i = D[P];
                void 0 === i && (i = {
                    type: void 0,
                    texture: void 0
                }, D[P] = i), i.type === e && i.texture === n || (t1.bindTexture(e, n || U[e]), i.type = e, i.texture = n);
            },
            unbindTexture: function() {
                const e = D[P];
                void 0 !== e && void 0 !== e.type && (t1.bindTexture(e.type, null), e.type = void 0, e.texture = void 0);
            },
            compressedTexImage2D: function() {
                try {
                    t1.compressedTexImage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texImage2D: function() {
                try {
                    t1.texImage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texImage3D: function() {
                try {
                    t1.texImage3D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texStorage2D: function() {
                try {
                    t1.texStorage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texStorage3D: function() {
                try {
                    t1.texStorage3D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texSubImage2D: function() {
                try {
                    t1.texSubImage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texSubImage3D: function() {
                try {
                    t1.texSubImage3D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            compressedTexSubImage2D: function() {
                try {
                    t1.compressedTexSubImage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            scissor: function(e) {
                !1 === B.equals(e) && (t1.scissor(e.x, e.y, e.z, e.w), B.copy(e));
            },
            viewport: function(e) {
                !1 === z.equals(e) && (t1.viewport(e.x, e.y, e.z, e.w), z.copy(e));
            },
            reset: function() {
                t1.disable(3042), t1.disable(2884), t1.disable(2929), t1.disable(32823), t1.disable(3089), t1.disable(2960), t1.disable(32926), t1.blendEquation(32774), t1.blendFunc(1, 0), t1.blendFuncSeparate(1, 0, 1, 0), t1.colorMask(!0, !0, !0, !0), t1.clearColor(0, 0, 0, 0), t1.depthMask(!0), t1.depthFunc(513), t1.clearDepth(1), t1.stencilMask(4294967295), t1.stencilFunc(519, 0, 4294967295), t1.stencilOp(7680, 7680, 7680), t1.clearStencil(0), t1.cullFace(1029), t1.frontFace(2305), t1.polygonOffset(0, 0), t1.activeTexture(33984), t1.bindFramebuffer(36160, null), !0 === r && (t1.bindFramebuffer(36009, null), t1.bindFramebuffer(36008, null)), t1.useProgram(null), t1.lineWidth(1), t1.scissor(0, 0, t1.canvas.width, t1.canvas.height), t1.viewport(0, 0, t1.canvas.width, t1.canvas.height), l = {}, P = null, D = {}, c = {}, h = new WeakMap, u = [], d = null, p = !1, m = null, f = null, g = null, v = null, y = null, x = null, _ = null, b = !1, M = null, w = null, S = null, T = null, E = null, B.set(0, 0, t1.canvas.width, t1.canvas.height), z.set(0, 0, t1.canvas.width, t1.canvas.height), s.reset(), a.reset(), o.reset();
            }
        };
    }
    function Ks(t1, e, n, i, r, s, a) {
        const o = r.isWebGL2, l = r.maxTextures, A = r.maxCubemapSize, R = r.maxTextureSize, C = r.maxSamples, L = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, P = /OculusBrowser/g.test(navigator.userAgent), D = new WeakMap;
        let I;
        const N = new WeakMap;
        let B = !1;
        try {
            B = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
        } catch (t1) {}
        function z(t1, e) {
            return B ? new OffscreenCanvas(t1, e) : It("canvas");
        }
        function O(t1, e, n, i) {
            let r = 1;
            if ((t1.width > i || t1.height > i) && (r = i / Math.max(t1.width, t1.height)), r < 1 || !0 === e) {
                if ("undefined" != typeof HTMLImageElement && t1 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t1 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t1 instanceof ImageBitmap) {
                    const i = e ? Et : Math.floor, s = i(r * t1.width), a = i(r * t1.height);
                    void 0 === I && (I = z(s, a));
                    const o = n ? z(s, a) : I;
                    o.width = s, o.height = a;
                    return o.getContext("2d").drawImage(t1, 0, 0, s, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t1.width + "x" + t1.height + ") to (" + s + "x" + a + ")."), o;
                }
                return "data" in t1 && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t1.width + "x" + t1.height + ")."), t1;
            }
            return t1;
        }
        function U(t1) {
            return St(t1.width) && St(t1.height);
        }
        function F(t1, e) {
            return t1.generateMipmaps && e && t1.minFilter !== d && t1.minFilter !== f;
        }
        function H(e) {
            t1.generateMipmap(e);
        }
        function G(n, i, r, s, a = !1) {
            if (!1 === o) return i;
            if (null !== n) {
                if (void 0 !== t1[n]) return t1[n];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
            }
            let l = i;
            return 6403 === i && (5126 === r && (l = 33326), 5131 === r && (l = 33325), 5121 === r && (l = 33321)), 33319 === i && (5126 === r && (l = 33328), 5131 === r && (l = 33327), 5121 === r && (l = 33323)), 6408 === i && (5126 === r && (l = 34836), 5131 === r && (l = 34842), 5121 === r && (l = s === ot && !1 === a ? 35907 : 32856), 32819 === r && (l = 32854), 32820 === r && (l = 32855)), 33325 !== l && 33326 !== l && 33327 !== l && 33328 !== l && 34842 !== l && 34836 !== l || e.get("EXT_color_buffer_float"), l;
        }
        function k(t1, e, n) {
            return !0 === F(t1, n) || t1.isFramebufferTexture && t1.minFilter !== d && t1.minFilter !== f ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t1.mipmaps && t1.mipmaps.length > 0 ? t1.mipmaps.length : t1.isCompressedTexture && Array.isArray(t1.image) ? e.mipmaps.length : 1;
        }
        function V(t1) {
            return t1 === d || t1 === p || t1 === m ? 9728 : 9729;
        }
        function W(t1) {
            const e = t1.target;
            e.removeEventListener("dispose", W), function(t1) {
                const e = i.get(t1);
                if (void 0 === e.__webglInit) return;
                const n = t1.source, r = N.get(n);
                if (r) {
                    const i = r[e.__cacheKey];
                    i.usedTimes--, 0 === i.usedTimes && q(t1), 0 === Object.keys(r).length && N.delete(n);
                }
                i.remove(t1);
            }(e), e.isVideoTexture && D.delete(e);
        }
        function j(e) {
            const n = e.target;
            n.removeEventListener("dispose", j), function(e) {
                const n = e.texture, r = i.get(e), s = i.get(n);
                void 0 !== s.__webglTexture && (t1.deleteTexture(s.__webglTexture), a.memory.textures--);
                e.depthTexture && e.depthTexture.dispose();
                if (e.isWebGLCubeRenderTarget) for(let e = 0; e < 6; e++)t1.deleteFramebuffer(r.__webglFramebuffer[e]), r.__webglDepthbuffer && t1.deleteRenderbuffer(r.__webglDepthbuffer[e]);
                else t1.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t1.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t1.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer && t1.deleteRenderbuffer(r.__webglColorRenderbuffer), r.__webglDepthRenderbuffer && t1.deleteRenderbuffer(r.__webglDepthRenderbuffer);
                if (e.isWebGLMultipleRenderTargets) for(let e = 0, r = n.length; e < r; e++){
                    const r = i.get(n[e]);
                    r.__webglTexture && (t1.deleteTexture(r.__webglTexture), a.memory.textures--), i.remove(n[e]);
                }
                i.remove(n), i.remove(e);
            }(n);
        }
        function q(e) {
            const n = i.get(e);
            t1.deleteTexture(n.__webglTexture);
            const r = e.source;
            delete N.get(r)[n.__cacheKey], a.memory.textures--;
        }
        let X = 0;
        function J(t1, e) {
            const r = i.get(t1);
            if (t1.isVideoTexture && function(t1) {
                const e = a.render.frame;
                D.get(t1) !== e && (D.set(t1, e), t1.update());
            }(t1), !1 === t1.isRenderTargetTexture && t1.version > 0 && r.__version !== t1.version) {
                const n = t1.image;
                if (null === n) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
                else {
                    if (!1 !== n.complete) return void $(r, t1, e);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                }
            }
            n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture);
        }
        const Y = {
            [c]: 10497,
            [h]: 33071,
            [u]: 33648
        }, Z = {
            [d]: 9728,
            [p]: 9984,
            [m]: 9986,
            [f]: 9729,
            [g]: 9985,
            [v]: 9987
        };
        function K(n, s, a) {
            if (a ? (t1.texParameteri(n, 10242, Y[s.wrapS]), t1.texParameteri(n, 10243, Y[s.wrapT]), 32879 !== n && 35866 !== n || t1.texParameteri(n, 32882, Y[s.wrapR]), t1.texParameteri(n, 10240, Z[s.magFilter]), t1.texParameteri(n, 10241, Z[s.minFilter])) : (t1.texParameteri(n, 10242, 33071), t1.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t1.texParameteri(n, 32882, 33071), s.wrapS === h && s.wrapT === h || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t1.texParameteri(n, 10240, V(s.magFilter)), t1.texParameteri(n, 10241, V(s.minFilter)), s.minFilter !== d && s.minFilter !== f && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e.has("EXT_texture_filter_anisotropic")) {
                const a = e.get("EXT_texture_filter_anisotropic");
                if (s.type === b && !1 === e.has("OES_texture_float_linear")) return;
                if (!1 === o && s.type === M && !1 === e.has("OES_texture_half_float_linear")) return;
                (s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (t1.texParameterf(n, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), i.get(s).__currentAnisotropy = s.anisotropy);
            }
        }
        function Q(e, n) {
            let i = !1;
            void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", W));
            const r = n.source;
            let s = N.get(r);
            void 0 === s && (s = {}, N.set(r, s));
            const o = function(t1) {
                const e = [];
                return e.push(t1.wrapS), e.push(t1.wrapT), e.push(t1.magFilter), e.push(t1.minFilter), e.push(t1.anisotropy), e.push(t1.internalFormat), e.push(t1.format), e.push(t1.type), e.push(t1.generateMipmaps), e.push(t1.premultiplyAlpha), e.push(t1.flipY), e.push(t1.unpackAlignment), e.push(t1.encoding), e.join();
            }(n);
            if (o !== e.__cacheKey) {
                void 0 === s[o] && (s[o] = {
                    texture: t1.createTexture(),
                    usedTimes: 0
                }, a.memory.textures++, i = !0), s[o].usedTimes++;
                const r = s[e.__cacheKey];
                void 0 !== r && (s[e.__cacheKey].usedTimes--, 0 === r.usedTimes && q(n)), e.__cacheKey = o, e.__webglTexture = s[o].texture;
            }
            return i;
        }
        function $(e, i, r) {
            let a = 3553;
            i.isDataArrayTexture && (a = 35866), i.isData3DTexture && (a = 32879);
            const l = Q(e, i), c = i.source;
            if (n.activeTexture(33984 + r), n.bindTexture(a, e.__webglTexture), c.version !== c.__currentVersion || !0 === l) {
                t1.pixelStorei(37440, i.flipY), t1.pixelStorei(37441, i.premultiplyAlpha), t1.pixelStorei(3317, i.unpackAlignment), t1.pixelStorei(37443, 0);
                const r = function(t1) {
                    return !o && (t1.wrapS !== h || t1.wrapT !== h || t1.minFilter !== d && t1.minFilter !== f);
                }(i) && !1 === U(i.image);
                let u = O(i.image, r, !1, R);
                u = st(i, u);
                const p = U(u) || o, m = s.convert(i.format, i.encoding);
                let g, v = s.convert(i.type), y = G(i.internalFormat, m, v, i.encoding, i.isVideoTexture);
                K(a, i, p);
                const M = i.mipmaps, A = o && !0 !== i.isVideoTexture, C = void 0 === e.__version || !0 === l, L = k(i, u, p);
                if (i.isDepthTexture) y = 6402, o ? y = i.type === b ? 36012 : i.type === _ ? 33190 : i.type === w ? 35056 : 33189 : i.type === b && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), i.format === T && 6402 === y && i.type !== x && i.type !== _ && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = x, v = s.convert(i.type)), i.format === E && 6402 === y && (y = 34041, i.type !== w && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = w, v = s.convert(i.type))), C && (A ? n.texStorage2D(3553, 1, y, u.width, u.height) : n.texImage2D(3553, 0, y, u.width, u.height, 0, m, v, null));
                else if (i.isDataTexture) {
                    if (M.length > 0 && p) {
                        A && C && n.texStorage2D(3553, L, y, M[0].width, M[0].height);
                        for(let t1 = 0, e = M.length; t1 < e; t1++)g = M[t1], A ? n.texSubImage2D(3553, t1, 0, 0, g.width, g.height, m, v, g.data) : n.texImage2D(3553, t1, y, g.width, g.height, 0, m, v, g.data);
                        i.generateMipmaps = !1;
                    } else A ? (C && n.texStorage2D(3553, L, y, u.width, u.height), n.texSubImage2D(3553, 0, 0, 0, u.width, u.height, m, v, u.data)) : n.texImage2D(3553, 0, y, u.width, u.height, 0, m, v, u.data);
                } else if (i.isCompressedTexture) {
                    A && C && n.texStorage2D(3553, L, y, M[0].width, M[0].height);
                    for(let t1 = 0, e = M.length; t1 < e; t1++)g = M[t1], i.format !== S ? null !== m ? A ? n.compressedTexSubImage2D(3553, t1, 0, 0, g.width, g.height, m, g.data) : n.compressedTexImage2D(3553, t1, y, g.width, g.height, 0, g.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : A ? n.texSubImage2D(3553, t1, 0, 0, g.width, g.height, m, v, g.data) : n.texImage2D(3553, t1, y, g.width, g.height, 0, m, v, g.data);
                } else if (i.isDataArrayTexture) A ? (C && n.texStorage3D(35866, L, y, u.width, u.height, u.depth), n.texSubImage3D(35866, 0, 0, 0, 0, u.width, u.height, u.depth, m, v, u.data)) : n.texImage3D(35866, 0, y, u.width, u.height, u.depth, 0, m, v, u.data);
                else if (i.isData3DTexture) A ? (C && n.texStorage3D(32879, L, y, u.width, u.height, u.depth), n.texSubImage3D(32879, 0, 0, 0, 0, u.width, u.height, u.depth, m, v, u.data)) : n.texImage3D(32879, 0, y, u.width, u.height, u.depth, 0, m, v, u.data);
                else if (i.isFramebufferTexture) {
                    if (C) {
                        if (A) n.texStorage2D(3553, L, y, u.width, u.height);
                        else {
                            let t1 = u.width, e = u.height;
                            for(let i = 0; i < L; i++)n.texImage2D(3553, i, y, t1, e, 0, m, v, null), t1 >>= 1, e >>= 1;
                        }
                    }
                } else if (M.length > 0 && p) {
                    A && C && n.texStorage2D(3553, L, y, M[0].width, M[0].height);
                    for(let t1 = 0, e = M.length; t1 < e; t1++)g = M[t1], A ? n.texSubImage2D(3553, t1, 0, 0, m, v, g) : n.texImage2D(3553, t1, y, m, v, g);
                    i.generateMipmaps = !1;
                } else A ? (C && n.texStorage2D(3553, L, y, u.width, u.height), n.texSubImage2D(3553, 0, 0, 0, m, v, u)) : n.texImage2D(3553, 0, y, m, v, u);
                F(i, p) && H(a), c.__currentVersion = c.version, i.onUpdate && i.onUpdate(i);
            }
            e.__version = i.version;
        }
        function tt(e, r, a, o, l) {
            const c = s.convert(a.format, a.encoding), h = s.convert(a.type), u = G(a.internalFormat, c, h, a.encoding);
            i.get(r).__hasExternalTextures || (32879 === l || 35866 === l ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null) : n.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)), n.bindFramebuffer(36160, e), rt(r) ? L.framebufferTexture2DMultisampleEXT(36160, o, l, i.get(a).__webglTexture, 0, it(r)) : t1.framebufferTexture2D(36160, o, l, i.get(a).__webglTexture, 0), n.bindFramebuffer(36160, null);
        }
        function et(e, n, i) {
            if (t1.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
                let r = 33189;
                if (i || rt(n)) {
                    const e = n.depthTexture;
                    e && e.isDepthTexture && (e.type === b ? r = 36012 : e.type === _ && (r = 33190));
                    const i = it(n);
                    rt(n) ? L.renderbufferStorageMultisampleEXT(36161, i, r, n.width, n.height) : t1.renderbufferStorageMultisample(36161, i, r, n.width, n.height);
                } else t1.renderbufferStorage(36161, r, n.width, n.height);
                t1.framebufferRenderbuffer(36160, 36096, 36161, e);
            } else if (n.depthBuffer && n.stencilBuffer) {
                const r = it(n);
                i && !1 === rt(n) ? t1.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height) : rt(n) ? L.renderbufferStorageMultisampleEXT(36161, r, 35056, n.width, n.height) : t1.renderbufferStorage(36161, 34041, n.width, n.height), t1.framebufferRenderbuffer(36160, 33306, 36161, e);
            } else {
                const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture[0] : n.texture, r = s.convert(e.format, e.encoding), a = s.convert(e.type), o = G(e.internalFormat, r, a, e.encoding), l = it(n);
                i && !1 === rt(n) ? t1.renderbufferStorageMultisample(36161, l, o, n.width, n.height) : rt(n) ? L.renderbufferStorageMultisampleEXT(36161, l, o, n.width, n.height) : t1.renderbufferStorage(36161, o, n.width, n.height);
            }
            t1.bindRenderbuffer(36161, null);
        }
        function nt(e) {
            const r = i.get(e), s = !0 === e.isWebGLCubeRenderTarget;
            if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
                if (s) throw new Error("target.depthTexture not supported in Cube render targets");
                !function(e, r) {
                    if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                    if (n.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), J(r.depthTexture, 0);
                    const s = i.get(r.depthTexture).__webglTexture, a = it(r);
                    if (r.depthTexture.format === T) rt(r) ? L.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s, 0, a) : t1.framebufferTexture2D(36160, 36096, 3553, s, 0);
                    else {
                        if (r.depthTexture.format !== E) throw new Error("Unknown depthTexture format");
                        rt(r) ? L.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s, 0, a) : t1.framebufferTexture2D(36160, 33306, 3553, s, 0);
                    }
                }(r.__webglFramebuffer, e);
            } else if (s) {
                r.__webglDepthbuffer = [];
                for(let i = 0; i < 6; i++)n.bindFramebuffer(36160, r.__webglFramebuffer[i]), r.__webglDepthbuffer[i] = t1.createRenderbuffer(), et(r.__webglDepthbuffer[i], e, !1);
            } else n.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t1.createRenderbuffer(), et(r.__webglDepthbuffer, e, !1);
            n.bindFramebuffer(36160, null);
        }
        function it(t1) {
            return Math.min(C, t1.samples);
        }
        function rt(t1) {
            const n = i.get(t1);
            return o && t1.samples > 0 && !0 === e.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture;
        }
        function st(t1, n) {
            const i = t1.encoding, r = t1.format, s = t1.type;
            return !0 === t1.isCompressedTexture || !0 === t1.isVideoTexture || t1.format === mt || i !== at && (i === ot ? !1 === o ? !0 === e.has("EXT_sRGB") && r === S ? (t1.format = mt, t1.minFilter = f, t1.generateMipmaps = !1) : n = qt.sRGBToLinear(n) : r === S && s === y || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", i)), n;
        }
        this.allocateTextureUnit = function() {
            const t1 = X;
            return t1 >= l && console.warn("THREE.WebGLTextures: Trying to use " + t1 + " texture units while this GPU supports only " + l), X += 1, t1;
        }, this.resetTextureUnits = function() {
            X = 0;
        }, this.setTexture2D = J, this.setTexture2DArray = function(t1, e) {
            const r = i.get(t1);
            t1.version > 0 && r.__version !== t1.version ? $(r, t1, e) : (n.activeTexture(33984 + e), n.bindTexture(35866, r.__webglTexture));
        }, this.setTexture3D = function(t1, e) {
            const r = i.get(t1);
            t1.version > 0 && r.__version !== t1.version ? $(r, t1, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture));
        }, this.setTextureCube = function(e, r) {
            const a = i.get(e);
            e.version > 0 && a.__version !== e.version ? function(e, i, r) {
                if (6 !== i.image.length) return;
                const a = Q(e, i), l = i.source;
                if (n.activeTexture(33984 + r), n.bindTexture(34067, e.__webglTexture), l.version !== l.__currentVersion || !0 === a) {
                    t1.pixelStorei(37440, i.flipY), t1.pixelStorei(37441, i.premultiplyAlpha), t1.pixelStorei(3317, i.unpackAlignment), t1.pixelStorei(37443, 0);
                    const r = i.isCompressedTexture || i.image[0].isCompressedTexture, a = i.image[0] && i.image[0].isDataTexture, c = [];
                    for(let t1 = 0; t1 < 6; t1++)c[t1] = r || a ? a ? i.image[t1].image : i.image[t1] : O(i.image[t1], !1, !0, A), c[t1] = st(i, c[t1]);
                    const h = c[0], u = U(h) || o, d = s.convert(i.format, i.encoding), p = s.convert(i.type), m = G(i.internalFormat, d, p, i.encoding), f = o && !0 !== i.isVideoTexture, g = void 0 === e.__version;
                    let v, y = k(i, h, u);
                    if (K(34067, i, u), r) {
                        f && g && n.texStorage2D(34067, y, m, h.width, h.height);
                        for(let t1 = 0; t1 < 6; t1++){
                            v = c[t1].mipmaps;
                            for(let e = 0; e < v.length; e++){
                                const r = v[e];
                                i.format !== S ? null !== d ? f ? n.compressedTexSubImage2D(34069 + t1, e, 0, 0, r.width, r.height, d, r.data) : n.compressedTexImage2D(34069 + t1, e, m, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : f ? n.texSubImage2D(34069 + t1, e, 0, 0, r.width, r.height, d, p, r.data) : n.texImage2D(34069 + t1, e, m, r.width, r.height, 0, d, p, r.data);
                            }
                        }
                    } else {
                        v = i.mipmaps, f && g && (v.length > 0 && y++, n.texStorage2D(34067, y, m, c[0].width, c[0].height));
                        for(let t1 = 0; t1 < 6; t1++)if (a) {
                            f ? n.texSubImage2D(34069 + t1, 0, 0, 0, c[t1].width, c[t1].height, d, p, c[t1].data) : n.texImage2D(34069 + t1, 0, m, c[t1].width, c[t1].height, 0, d, p, c[t1].data);
                            for(let e = 0; e < v.length; e++){
                                const i = v[e].image[t1].image;
                                f ? n.texSubImage2D(34069 + t1, e + 1, 0, 0, i.width, i.height, d, p, i.data) : n.texImage2D(34069 + t1, e + 1, m, i.width, i.height, 0, d, p, i.data);
                            }
                        } else {
                            f ? n.texSubImage2D(34069 + t1, 0, 0, 0, d, p, c[t1]) : n.texImage2D(34069 + t1, 0, m, d, p, c[t1]);
                            for(let e = 0; e < v.length; e++){
                                const i = v[e];
                                f ? n.texSubImage2D(34069 + t1, e + 1, 0, 0, d, p, i.image[t1]) : n.texImage2D(34069 + t1, e + 1, m, d, p, i.image[t1]);
                            }
                        }
                    }
                    F(i, u) && H(34067), l.__currentVersion = l.version, i.onUpdate && i.onUpdate(i);
                }
                e.__version = i.version;
            }(a, e, r) : (n.activeTexture(33984 + r), n.bindTexture(34067, a.__webglTexture));
        }, this.rebindTextures = function(t1, e, n) {
            const r = i.get(t1);
            void 0 !== e && tt(r.__webglFramebuffer, t1, t1.texture, 36064, 3553), void 0 !== n && nt(t1);
        }, this.setupRenderTarget = function(e) {
            const l = e.texture, c = i.get(e), h = i.get(l);
            e.addEventListener("dispose", j), !0 !== e.isWebGLMultipleRenderTargets && (void 0 === h.__webglTexture && (h.__webglTexture = t1.createTexture()), h.__version = l.version, a.memory.textures++);
            const u = !0 === e.isWebGLCubeRenderTarget, d = !0 === e.isWebGLMultipleRenderTargets, p = U(e) || o;
            if (u) {
                c.__webglFramebuffer = [];
                for(let e = 0; e < 6; e++)c.__webglFramebuffer[e] = t1.createFramebuffer();
            } else if (c.__webglFramebuffer = t1.createFramebuffer(), d) {
                if (r.drawBuffers) {
                    const n = e.texture;
                    for(let e = 0, r = n.length; e < r; e++){
                        const r = i.get(n[e]);
                        void 0 === r.__webglTexture && (r.__webglTexture = t1.createTexture(), a.memory.textures++);
                    }
                } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
            } else if (o && e.samples > 0 && !1 === rt(e)) {
                c.__webglMultisampledFramebuffer = t1.createFramebuffer(), c.__webglColorRenderbuffer = t1.createRenderbuffer(), t1.bindRenderbuffer(36161, c.__webglColorRenderbuffer);
                const i = s.convert(l.format, l.encoding), r = s.convert(l.type), a = G(l.internalFormat, i, r, l.encoding), o = it(e);
                t1.renderbufferStorageMultisample(36161, o, a, e.width, e.height), n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer), t1.framebufferRenderbuffer(36160, 36064, 36161, c.__webglColorRenderbuffer), t1.bindRenderbuffer(36161, null), e.depthBuffer && (c.__webglDepthRenderbuffer = t1.createRenderbuffer(), et(c.__webglDepthRenderbuffer, e, !0)), n.bindFramebuffer(36160, null);
            }
            if (u) {
                n.bindTexture(34067, h.__webglTexture), K(34067, l, p);
                for(let t1 = 0; t1 < 6; t1++)tt(c.__webglFramebuffer[t1], e, l, 36064, 34069 + t1);
                F(l, p) && H(34067), n.unbindTexture();
            } else if (d) {
                const t1 = e.texture;
                for(let r = 0, s = t1.length; r < s; r++){
                    const s = t1[r], a = i.get(s);
                    n.bindTexture(3553, a.__webglTexture), K(3553, s, p), tt(c.__webglFramebuffer, e, s, 36064 + r, 3553), F(s, p) && H(3553);
                }
                n.unbindTexture();
            } else {
                let t1 = 3553;
                (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (o ? t1 = e.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), n.bindTexture(t1, h.__webglTexture), K(t1, l, p), tt(c.__webglFramebuffer, e, l, 36064, t1), F(l, p) && H(t1), n.unbindTexture();
            }
            e.depthBuffer && nt(e);
        }, this.updateRenderTargetMipmap = function(t1) {
            const e = U(t1) || o, r = !0 === t1.isWebGLMultipleRenderTargets ? t1.texture : [
                t1.texture
            ];
            for(let s = 0, a = r.length; s < a; s++){
                const a = r[s];
                if (F(a, e)) {
                    const e = t1.isWebGLCubeRenderTarget ? 34067 : 3553, r = i.get(a).__webglTexture;
                    n.bindTexture(e, r), H(e), n.unbindTexture();
                }
            }
        }, this.updateMultisampleRenderTarget = function(e) {
            if (o && e.samples > 0 && !1 === rt(e)) {
                const r = e.width, s = e.height;
                let a = 16384;
                const o = [
                    36064
                ], l = e.stencilBuffer ? 33306 : 36096;
                e.depthBuffer && o.push(l);
                const c = i.get(e), h = void 0 !== c.__ignoreDepthValues && c.__ignoreDepthValues;
                !1 === h && (e.depthBuffer && (a |= 256), e.stencilBuffer && (a |= 1024)), n.bindFramebuffer(36008, c.__webglMultisampledFramebuffer), n.bindFramebuffer(36009, c.__webglFramebuffer), !0 === h && (t1.invalidateFramebuffer(36008, [
                    l
                ]), t1.invalidateFramebuffer(36009, [
                    l
                ])), t1.blitFramebuffer(0, 0, r, s, 0, 0, r, s, a, 9728), P && t1.invalidateFramebuffer(36008, o), n.bindFramebuffer(36008, null), n.bindFramebuffer(36009, c.__webglMultisampledFramebuffer);
            }
        }, this.setupDepthRenderbuffer = nt, this.setupFrameBufferTexture = tt, this.useMultisampledRTT = rt;
    }
    function Qs(t1, e, n) {
        const i = n.isWebGL2;
        return {
            convert: function(n, r = null) {
                let s;
                if (n === y) return 5121;
                if (1017 === n) return 32819;
                if (1018 === n) return 32820;
                if (1010 === n) return 5120;
                if (1011 === n) return 5122;
                if (n === x) return 5123;
                if (1013 === n) return 5124;
                if (n === _) return 5125;
                if (n === b) return 5126;
                if (n === M) return i ? 5131 : (s = e.get("OES_texture_half_float"), null !== s ? s.HALF_FLOAT_OES : null);
                if (1021 === n) return 6406;
                if (n === S) return 6408;
                if (1024 === n) return 6409;
                if (1025 === n) return 6410;
                if (n === T) return 6402;
                if (n === E) return 34041;
                if (1028 === n) return 6403;
                if (1022 === n) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
                if (n === mt) return s = e.get("EXT_sRGB"), null !== s ? s.SRGB_ALPHA_EXT : null;
                if (1029 === n) return 36244;
                if (1030 === n) return 33319;
                if (1031 === n) return 33320;
                if (1033 === n) return 36249;
                if (n === A || n === R || n === C || n === L) {
                    if (r === ot) {
                        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === s) return null;
                        if (n === A) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                        if (n === R) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                        if (n === C) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                        if (n === L) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
                    } else {
                        if (s = e.get("WEBGL_compressed_texture_s3tc"), null === s) return null;
                        if (n === A) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        if (n === R) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        if (n === C) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        if (n === L) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                    }
                }
                if (n === P || n === D || n === I || n === N) {
                    if (s = e.get("WEBGL_compressed_texture_pvrtc"), null === s) return null;
                    if (n === P) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (n === D) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (n === I) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (n === N) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                }
                if (36196 === n) return s = e.get("WEBGL_compressed_texture_etc1"), null !== s ? s.COMPRESSED_RGB_ETC1_WEBGL : null;
                if (n === B || n === z) {
                    if (s = e.get("WEBGL_compressed_texture_etc"), null === s) return null;
                    if (n === B) return r === ot ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
                    if (n === z) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
                }
                if (n === O || n === U || n === F || n === H || n === G || n === k || n === V || n === W || n === j || n === q || n === X || n === J || n === Y || n === Z) {
                    if (s = e.get("WEBGL_compressed_texture_astc"), null === s) return null;
                    if (n === O) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
                    if (n === U) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
                    if (n === F) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
                    if (n === H) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
                    if (n === G) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
                    if (n === k) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
                    if (n === V) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
                    if (n === W) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
                    if (n === j) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
                    if (n === q) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
                    if (n === X) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
                    if (n === J) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
                    if (n === Y) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
                    if (n === Z) return r === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
                }
                if (n === K) {
                    if (s = e.get("EXT_texture_compression_bptc"), null === s) return null;
                    if (n === K) return r === ot ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                }
                return n === w ? i ? 34042 : (s = e.get("WEBGL_depth_texture"), null !== s ? s.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t1[n] ? t1[n] : null;
            }
        };
    }
    class $s extends fi {
        constructor(t1 = []){
            super(), this.cameras = t1;
        }
    }
    $s.prototype.isArrayCamera = !0;
    class ta extends ln {
        constructor(){
            super(), this.type = "Group";
        }
    }
    ta.prototype.isGroup = !0;
    const ea = {
        type: "move"
    };
    class na {
        constructor(){
            this._targetRay = null, this._grip = null, this._hand = null;
        }
        getHandSpace() {
            return null === this._hand && (this._hand = new ta, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                pinching: !1
            }), this._hand;
        }
        getTargetRaySpace() {
            return null === this._targetRay && (this._targetRay = new ta, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new se, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new se), this._targetRay;
        }
        getGripSpace() {
            return null === this._grip && (this._grip = new ta, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new se, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new se), this._grip;
        }
        dispatchEvent(t1) {
            return null !== this._targetRay && this._targetRay.dispatchEvent(t1), null !== this._grip && this._grip.dispatchEvent(t1), null !== this._hand && this._hand.dispatchEvent(t1), this;
        }
        disconnect(t1) {
            return this.dispatchEvent({
                type: "disconnected",
                data: t1
            }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this;
        }
        update(t1, e, n) {
            let i = null, r = null, s = null;
            const a = this._targetRay, o = this._grip, l = this._hand;
            if (t1 && "visible-blurred" !== e.session.visibilityState) {
                if (null !== a && (i = e.getPose(t1.targetRaySpace, n), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(ea))), l && t1.hand) {
                    s = !0;
                    for (const i of t1.hand.values()){
                        const t1 = e.getJointPose(i, n);
                        if (void 0 === l.joints[i.jointName]) {
                            const t1 = new ta;
                            t1.matrixAutoUpdate = !1, t1.visible = !1, l.joints[i.jointName] = t1, l.add(t1);
                        }
                        const r = l.joints[i.jointName];
                        null !== t1 && (r.matrix.fromArray(t1.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = t1.radius), r.visible = null !== t1;
                    }
                    const i = l.joints["index-finger-tip"], r = l.joints["thumb-tip"], a = i.position.distanceTo(r.position), o = .02, c = .005;
                    l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
                        type: "pinchend",
                        handedness: t1.handedness,
                        target: this
                    })) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
                        type: "pinchstart",
                        handedness: t1.handedness,
                        target: this
                    }));
                } else null !== o && t1.gripSpace && (r = e.getPose(t1.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
            }
            return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this;
        }
    }
    class ia extends Zt {
        constructor(t1, e, n, i, r, s, a, o, l, c){
            if ((c = void 0 !== c ? c : T) !== T && c !== E) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            void 0 === n && c === T && (n = x), void 0 === n && c === E && (n = w), super(null, i, r, s, a, o, c, n, l), this.image = {
                width: t1,
                height: e
            }, this.magFilter = void 0 !== a ? a : d, this.minFilter = void 0 !== o ? o : d, this.flipY = !1, this.generateMipmaps = !1;
        }
    }
    ia.prototype.isDepthTexture = !0;
    class ra extends ft {
        constructor(t1, e){
            super();
            const n = this;
            let i = null, r = 1, s = null, a = "local-floor", o = null, l = null, c = null, h = null, u = null, d = null;
            const p = e.getContextAttributes();
            let m = null, f = null;
            const g = [], v = new Map, _ = new fi;
            _.layers.enable(1), _.viewport = new Kt;
            const b = new fi;
            b.layers.enable(2), b.viewport = new Kt;
            const M = [
                _,
                b
            ], A = new $s;
            A.layers.enable(1), A.layers.enable(2);
            let R = null, C = null;
            function L(t1) {
                const e = v.get(t1.inputSource);
                e && e.dispatchEvent({
                    type: t1.type,
                    data: t1.inputSource
                });
            }
            function P() {
                v.forEach(function(t1, e) {
                    t1.disconnect(e);
                }), v.clear(), R = null, C = null, t1.setRenderTarget(m), u = null, h = null, c = null, i = null, f = null, O.stop(), n.isPresenting = !1, n.dispatchEvent({
                    type: "sessionend"
                });
            }
            function D(t1) {
                const e = i.inputSources;
                for(let t1 = 0; t1 < e.length; t1++){
                    const n = "right" === e[t1].handedness ? 1 : 0;
                    v.set(e[t1], g[n]);
                }
                for(let e = 0; e < t1.removed.length; e++){
                    const n = t1.removed[e], i = v.get(n);
                    i && (i.dispatchEvent({
                        type: "disconnected",
                        data: n
                    }), v.delete(n));
                }
                for(let e = 0; e < t1.added.length; e++){
                    const n = t1.added[e], i = v.get(n);
                    i && i.dispatchEvent({
                        type: "connected",
                        data: n
                    });
                }
            }
            this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(t1) {
                let e = g[t1];
                return void 0 === e && (e = new na, g[t1] = e), e.getTargetRaySpace();
            }, this.getControllerGrip = function(t1) {
                let e = g[t1];
                return void 0 === e && (e = new na, g[t1] = e), e.getGripSpace();
            }, this.getHand = function(t1) {
                let e = g[t1];
                return void 0 === e && (e = new na, g[t1] = e), e.getHandSpace();
            }, this.setFramebufferScaleFactor = function(t1) {
                r = t1, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
            }, this.setReferenceSpaceType = function(t1) {
                a = t1, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
            }, this.getReferenceSpace = function() {
                return o || s;
            }, this.setReferenceSpace = function(t1) {
                o = t1;
            }, this.getBaseLayer = function() {
                return null !== h ? h : u;
            }, this.getBinding = function() {
                return c;
            }, this.getFrame = function() {
                return d;
            }, this.getSession = function() {
                return i;
            }, this.setSession = async function(o) {
                if (i = o, null !== i) {
                    if (m = t1.getRenderTarget(), i.addEventListener("select", L), i.addEventListener("selectstart", L), i.addEventListener("selectend", L), i.addEventListener("squeeze", L), i.addEventListener("squeezestart", L), i.addEventListener("squeezeend", L), i.addEventListener("end", P), i.addEventListener("inputsourceschange", D), !0 !== p.xrCompatible && await e.makeXRCompatible(), void 0 === i.renderState.layers || !1 === t1.capabilities.isWebGL2) {
                        const n = {
                            antialias: void 0 !== i.renderState.layers || p.antialias,
                            alpha: p.alpha,
                            depth: p.depth,
                            stencil: p.stencil,
                            framebufferScaleFactor: r
                        };
                        u = new XRWebGLLayer(i, e, n), i.updateRenderState({
                            baseLayer: u
                        }), f = new Qt(u.framebufferWidth, u.framebufferHeight, {
                            format: S,
                            type: y,
                            encoding: t1.outputEncoding
                        });
                    } else {
                        let n = null, s = null, a = null;
                        p.depth && (a = p.stencil ? 35056 : 33190, n = p.stencil ? E : T, s = p.stencil ? w : x);
                        const o = {
                            colorFormat: t1.outputEncoding === ot ? 35907 : 32856,
                            depthFormat: a,
                            scaleFactor: r
                        };
                        c = new XRWebGLBinding(i, e), h = c.createProjectionLayer(o), i.updateRenderState({
                            layers: [
                                h
                            ]
                        }), f = new Qt(h.textureWidth, h.textureHeight, {
                            format: S,
                            type: y,
                            depthTexture: new ia(h.textureWidth, h.textureHeight, s, void 0, void 0, void 0, void 0, void 0, void 0, n),
                            stencilBuffer: p.stencil,
                            encoding: t1.outputEncoding,
                            samples: p.antialias ? 4 : 0
                        });
                        t1.properties.get(f).__ignoreDepthValues = h.ignoreDepthValues;
                    }
                    f.isXRRenderTarget = !0, this.setFoveation(1), s = await i.requestReferenceSpace(a), O.setContext(i), O.start(), n.isPresenting = !0, n.dispatchEvent({
                        type: "sessionstart"
                    });
                }
            };
            const I = new se, N = new se;
            function B(t1, e) {
                null === e ? t1.matrixWorld.copy(t1.matrix) : t1.matrixWorld.multiplyMatrices(e.matrixWorld, t1.matrix), t1.matrixWorldInverse.copy(t1.matrixWorld).invert();
            }
            this.updateCamera = function(t1) {
                if (null === i) return;
                A.near = b.near = _.near = t1.near, A.far = b.far = _.far = t1.far, R === A.near && C === A.far || (i.updateRenderState({
                    depthNear: A.near,
                    depthFar: A.far
                }), R = A.near, C = A.far);
                const e = t1.parent, n = A.cameras;
                B(A, e);
                for(let t1 = 0; t1 < n.length; t1++)B(n[t1], e);
                A.matrixWorld.decompose(A.position, A.quaternion, A.scale), t1.position.copy(A.position), t1.quaternion.copy(A.quaternion), t1.scale.copy(A.scale), t1.matrix.copy(A.matrix), t1.matrixWorld.copy(A.matrixWorld);
                const r = t1.children;
                for(let t1 = 0, e = r.length; t1 < e; t1++)r[t1].updateMatrixWorld(!0);
                2 === n.length ? function(t1, e, n) {
                    I.setFromMatrixPosition(e.matrixWorld), N.setFromMatrixPosition(n.matrixWorld);
                    const i = I.distanceTo(N), r = e.projectionMatrix.elements, s = n.projectionMatrix.elements, a = r[14] / (r[10] - 1), o = r[14] / (r[10] + 1), l = (r[9] + 1) / r[5], c = (r[9] - 1) / r[5], h = (r[8] - 1) / r[0], u = (s[8] + 1) / s[0], d = a * h, p = a * u, m = i / (-h + u), f = m * -h;
                    e.matrixWorld.decompose(t1.position, t1.quaternion, t1.scale), t1.translateX(f), t1.translateZ(m), t1.matrixWorld.compose(t1.position, t1.quaternion, t1.scale), t1.matrixWorldInverse.copy(t1.matrixWorld).invert();
                    const g = a + m, v = o + m, y = d - f, x = p + (i - f), _ = l * o / v * g, b = c * o / v * g;
                    t1.projectionMatrix.makePerspective(y, x, _, b, g, v);
                }(A, _, b) : A.projectionMatrix.copy(_.projectionMatrix);
            }, this.getCamera = function() {
                return A;
            }, this.getFoveation = function() {
                return null !== h ? h.fixedFoveation : null !== u ? u.fixedFoveation : void 0;
            }, this.setFoveation = function(t1) {
                null !== h && (h.fixedFoveation = t1), null !== u && void 0 !== u.fixedFoveation && (u.fixedFoveation = t1);
            };
            let z = null;
            const O = new Ai;
            O.setAnimationLoop(function(e, n) {
                if (l = n.getViewerPose(o || s), d = n, null !== l) {
                    const e = l.views;
                    null !== u && (t1.setRenderTargetFramebuffer(f, u.framebuffer), t1.setRenderTarget(f));
                    let n = !1;
                    e.length !== A.cameras.length && (A.cameras.length = 0, n = !0);
                    for(let i = 0; i < e.length; i++){
                        const r = e[i];
                        let s = null;
                        if (null !== u) s = u.getViewport(r);
                        else {
                            const e = c.getViewSubImage(h, r);
                            s = e.viewport, 0 === i && (t1.setRenderTargetTextures(f, e.colorTexture, h.ignoreDepthValues ? void 0 : e.depthStencilTexture), t1.setRenderTarget(f));
                        }
                        const a = M[i];
                        a.matrix.fromArray(r.transform.matrix), a.projectionMatrix.fromArray(r.projectionMatrix), a.viewport.set(s.x, s.y, s.width, s.height), 0 === i && A.matrix.copy(a.matrix), !0 === n && A.cameras.push(a);
                    }
                }
                const r = i.inputSources;
                for(let t1 = 0; t1 < g.length; t1++){
                    const e = r[t1], i = v.get(e);
                    void 0 !== i && i.update(e, n, o || s);
                }
                z && z(e, n), d = null;
            }), this.setAnimationLoop = function(t1) {
                z = t1;
            }, this.dispose = function() {};
        }
    }
    function sa(t1, e) {
        function n(n, i) {
            n.opacity.value = i.opacity, i.color && n.diffuse.value.copy(i.color), i.emissive && n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity), i.map && (n.map.value = i.map), i.alphaMap && (n.alphaMap.value = i.alphaMap), i.bumpMap && (n.bumpMap.value = i.bumpMap, n.bumpScale.value = i.bumpScale, 1 === i.side && (n.bumpScale.value *= -1)), i.displacementMap && (n.displacementMap.value = i.displacementMap, n.displacementScale.value = i.displacementScale, n.displacementBias.value = i.displacementBias), i.emissiveMap && (n.emissiveMap.value = i.emissiveMap), i.normalMap && (n.normalMap.value = i.normalMap, n.normalScale.value.copy(i.normalScale), 1 === i.side && n.normalScale.value.negate()), i.specularMap && (n.specularMap.value = i.specularMap), i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest);
            const r = e.get(i).envMap;
            if (r && (n.envMap.value = r, n.flipEnvMap.value = r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1, n.reflectivity.value = i.reflectivity, n.ior.value = i.ior, n.refractionRatio.value = i.refractionRatio), i.lightMap) {
                n.lightMap.value = i.lightMap;
                const e = !0 !== t1.physicallyCorrectLights ? Math.PI : 1;
                n.lightMapIntensity.value = i.lightMapIntensity * e;
            }
            let s, a;
            i.aoMap && (n.aoMap.value = i.aoMap, n.aoMapIntensity.value = i.aoMapIntensity), i.map ? s = i.map : i.specularMap ? s = i.specularMap : i.displacementMap ? s = i.displacementMap : i.normalMap ? s = i.normalMap : i.bumpMap ? s = i.bumpMap : i.roughnessMap ? s = i.roughnessMap : i.metalnessMap ? s = i.metalnessMap : i.alphaMap ? s = i.alphaMap : i.emissiveMap ? s = i.emissiveMap : i.clearcoatMap ? s = i.clearcoatMap : i.clearcoatNormalMap ? s = i.clearcoatNormalMap : i.clearcoatRoughnessMap ? s = i.clearcoatRoughnessMap : i.specularIntensityMap ? s = i.specularIntensityMap : i.specularColorMap ? s = i.specularColorMap : i.transmissionMap ? s = i.transmissionMap : i.thicknessMap ? s = i.thicknessMap : i.sheenColorMap ? s = i.sheenColorMap : i.sheenRoughnessMap && (s = i.sheenRoughnessMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), n.uvTransform.value.copy(s.matrix)), i.aoMap ? a = i.aoMap : i.lightMap && (a = i.lightMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), n.uv2Transform.value.copy(a.matrix));
        }
        return {
            refreshFogUniforms: function(t1, e) {
                t1.fogColor.value.copy(e.color), e.isFog ? (t1.fogNear.value = e.near, t1.fogFar.value = e.far) : e.isFogExp2 && (t1.fogDensity.value = e.density);
            },
            refreshMaterialUniforms: function(t1, i, r, s, a) {
                i.isMeshBasicMaterial || i.isMeshLambertMaterial ? n(t1, i) : i.isMeshToonMaterial ? (n(t1, i), function(t1, e) {
                    e.gradientMap && (t1.gradientMap.value = e.gradientMap);
                }(t1, i)) : i.isMeshPhongMaterial ? (n(t1, i), function(t1, e) {
                    t1.specular.value.copy(e.specular), t1.shininess.value = Math.max(e.shininess, 1e-4);
                }(t1, i)) : i.isMeshStandardMaterial ? (n(t1, i), function(t1, n) {
                    t1.roughness.value = n.roughness, t1.metalness.value = n.metalness, n.roughnessMap && (t1.roughnessMap.value = n.roughnessMap);
                    n.metalnessMap && (t1.metalnessMap.value = n.metalnessMap);
                    e.get(n).envMap && (t1.envMapIntensity.value = n.envMapIntensity);
                }(t1, i), i.isMeshPhysicalMaterial && function(t1, e, n) {
                    t1.ior.value = e.ior, e.sheen > 0 && (t1.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen), t1.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t1.sheenColorMap.value = e.sheenColorMap), e.sheenRoughnessMap && (t1.sheenRoughnessMap.value = e.sheenRoughnessMap));
                    e.clearcoat > 0 && (t1.clearcoat.value = e.clearcoat, t1.clearcoatRoughness.value = e.clearcoatRoughness, e.clearcoatMap && (t1.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t1.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (t1.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t1.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t1.clearcoatNormalScale.value.negate()));
                    e.transmission > 0 && (t1.transmission.value = e.transmission, t1.transmissionSamplerMap.value = n.texture, t1.transmissionSamplerSize.value.set(n.width, n.height), e.transmissionMap && (t1.transmissionMap.value = e.transmissionMap), t1.thickness.value = e.thickness, e.thicknessMap && (t1.thicknessMap.value = e.thicknessMap), t1.attenuationDistance.value = e.attenuationDistance, t1.attenuationColor.value.copy(e.attenuationColor));
                    t1.specularIntensity.value = e.specularIntensity, t1.specularColor.value.copy(e.specularColor), e.specularIntensityMap && (t1.specularIntensityMap.value = e.specularIntensityMap);
                    e.specularColorMap && (t1.specularColorMap.value = e.specularColorMap);
                }(t1, i, a)) : i.isMeshMatcapMaterial ? (n(t1, i), function(t1, e) {
                    e.matcap && (t1.matcap.value = e.matcap);
                }(t1, i)) : i.isMeshDepthMaterial ? n(t1, i) : i.isMeshDistanceMaterial ? (n(t1, i), function(t1, e) {
                    t1.referencePosition.value.copy(e.referencePosition), t1.nearDistance.value = e.nearDistance, t1.farDistance.value = e.farDistance;
                }(t1, i)) : i.isMeshNormalMaterial ? n(t1, i) : i.isLineBasicMaterial ? (function(t1, e) {
                    t1.diffuse.value.copy(e.color), t1.opacity.value = e.opacity;
                }(t1, i), i.isLineDashedMaterial && function(t1, e) {
                    t1.dashSize.value = e.dashSize, t1.totalSize.value = e.dashSize + e.gapSize, t1.scale.value = e.scale;
                }(t1, i)) : i.isPointsMaterial ? function(t1, e, n, i) {
                    t1.diffuse.value.copy(e.color), t1.opacity.value = e.opacity, t1.size.value = e.size * n, t1.scale.value = .5 * i, e.map && (t1.map.value = e.map);
                    e.alphaMap && (t1.alphaMap.value = e.alphaMap);
                    e.alphaTest > 0 && (t1.alphaTest.value = e.alphaTest);
                    let r;
                    e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
                    void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t1.uvTransform.value.copy(r.matrix));
                }(t1, i, r, s) : i.isSpriteMaterial ? function(t1, e) {
                    t1.diffuse.value.copy(e.color), t1.opacity.value = e.opacity, t1.rotation.value = e.rotation, e.map && (t1.map.value = e.map);
                    e.alphaMap && (t1.alphaMap.value = e.alphaMap);
                    e.alphaTest > 0 && (t1.alphaTest.value = e.alphaTest);
                    let n;
                    e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
                    void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t1.uvTransform.value.copy(n.matrix));
                }(t1, i) : i.isShadowMaterial ? (t1.color.value.copy(i.color), t1.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
            }
        };
    }
    function aa(t1 = {}) {
        const e = void 0 !== t1.canvas ? t1.canvas : function() {
            const t1 = It("canvas");
            return t1.style.display = "block", t1;
        }(), n = void 0 !== t1.context ? t1.context : null, i = void 0 === t1.depth || t1.depth, r = void 0 === t1.stencil || t1.stencil, s = void 0 !== t1.antialias && t1.antialias, a = void 0 === t1.premultipliedAlpha || t1.premultipliedAlpha, o = void 0 !== t1.preserveDrawingBuffer && t1.preserveDrawingBuffer, l = void 0 !== t1.powerPreference ? t1.powerPreference : "default", c = void 0 !== t1.failIfMajorPerformanceCaveat && t1.failIfMajorPerformanceCaveat;
        let h;
        h = null !== n ? n.getContextAttributes().alpha : void 0 !== t1.alpha && t1.alpha;
        let u = null, d = null;
        const p = [], m = [];
        this.domElement = e, this.debug = {
            checkShaderErrors: !0
        }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = at, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
        const f = this;
        let g = !1, x = 0, _ = 0, w = null, T = -1, E = null;
        const A = new Kt, R = new Kt;
        let C = null, L = e.width, P = e.height, D = 1, I = null, N = null;
        const B = new Kt(0, 0, L, P), z = new Kt(0, 0, L, P);
        let O = !1;
        const U = new Ei;
        let F = !1, H = !1, G = null;
        const k = new ze, V = new Rt, W = new se, j = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        function q() {
            return null === w ? D : 1;
        }
        let X, J, Y, Z, K, Q, $, tt, et, nt, it, rt, st, ot, lt, ct, ht, ut, dt, pt, mt, ft, gt, vt = n;
        function yt(t1, n) {
            for(let i = 0; i < t1.length; i++){
                const r = t1[i], s = e.getContext(r, n);
                if (null !== s) return s;
            }
            return null;
        }
        try {
            const t1 = {
                alpha: !0,
                depth: i,
                stencil: r,
                antialias: s,
                premultipliedAlpha: a,
                preserveDrawingBuffer: o,
                powerPreference: l,
                failIfMajorPerformanceCaveat: c
            };
            if ("setAttribute" in e && e.setAttribute("data-engine", "three.js r140"), e.addEventListener("webglcontextlost", bt, !1), e.addEventListener("webglcontextrestored", Mt, !1), null === vt) {
                const e = [
                    "webgl2",
                    "webgl",
                    "experimental-webgl"
                ];
                if (!0 === f.isWebGL1Renderer && e.shift(), vt = yt(e, t1), null === vt) throw yt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            }
            void 0 === vt.getShaderPrecisionFormat && (vt.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                };
            });
        } catch (t1) {
            throw console.error("THREE.WebGLRenderer: " + t1.message), t1;
        }
        function xt() {
            X = new er(vt), J = new zi(vt, X, t1), X.init(J), ft = new Qs(vt, X, J), Y = new Zs(vt, X, J), Z = new rr(vt), K = new zs, Q = new Ks(vt, X, Y, K, J, ft, Z), $ = new Ui(f), tt = new tr(f), et = new Ri(vt, J), gt = new Ni(vt, X, et, J), nt = new nr(vt, et, Z, gt), it = new cr(vt, nt, et, Z), dt = new lr(vt, J, Q), ct = new Oi(K), rt = new Bs(f, $, tt, X, J, gt, ct), st = new sa(f, K), ot = new Hs, lt = new qs(X, J), ut = new Ii(f, $, Y, it, h, a), ht = new Ys(f, it, J), pt = new Bi(vt, X, Z, J), mt = new ir(vt, X, Z, J), Z.programs = rt.programs, f.capabilities = J, f.extensions = X, f.properties = K, f.renderLists = ot, f.shadowMap = ht, f.state = Y, f.info = Z;
        }
        xt();
        const _t = new ra(f, vt);
        function bt(t1) {
            t1.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), g = !0;
        }
        function Mt() {
            console.log("THREE.WebGLRenderer: Context Restored."), g = !1;
            const t1 = Z.autoReset, e = ht.enabled, n = ht.autoUpdate, i = ht.needsUpdate, r = ht.type;
            xt(), Z.autoReset = t1, ht.enabled = e, ht.autoUpdate = n, ht.needsUpdate = i, ht.type = r;
        }
        function wt(t1) {
            const e = t1.target;
            e.removeEventListener("dispose", wt), function(t1) {
                (function(t1) {
                    const e = K.get(t1).programs;
                    void 0 !== e && (e.forEach(function(t1) {
                        rt.releaseProgram(t1);
                    }), t1.isShaderMaterial && rt.releaseShaderCache(t1));
                })(t1), K.remove(t1);
            }(e);
        }
        this.xr = _t, this.getContext = function() {
            return vt;
        }, this.getContextAttributes = function() {
            return vt.getContextAttributes();
        }, this.forceContextLoss = function() {
            const t1 = X.get("WEBGL_lose_context");
            t1 && t1.loseContext();
        }, this.forceContextRestore = function() {
            const t1 = X.get("WEBGL_lose_context");
            t1 && t1.restoreContext();
        }, this.getPixelRatio = function() {
            return D;
        }, this.setPixelRatio = function(t1) {
            void 0 !== t1 && (D = t1, this.setSize(L, P, !1));
        }, this.getSize = function(t1) {
            return t1.set(L, P);
        }, this.setSize = function(t1, n, i) {
            _t.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (L = t1, P = n, e.width = Math.floor(t1 * D), e.height = Math.floor(n * D), !1 !== i && (e.style.width = t1 + "px", e.style.height = n + "px"), this.setViewport(0, 0, t1, n));
        }, this.getDrawingBufferSize = function(t1) {
            return t1.set(L * D, P * D).floor();
        }, this.setDrawingBufferSize = function(t1, n, i) {
            L = t1, P = n, D = i, e.width = Math.floor(t1 * i), e.height = Math.floor(n * i), this.setViewport(0, 0, t1, n);
        }, this.getCurrentViewport = function(t1) {
            return t1.copy(A);
        }, this.getViewport = function(t1) {
            return t1.copy(B);
        }, this.setViewport = function(t1, e, n, i) {
            t1.isVector4 ? B.set(t1.x, t1.y, t1.z, t1.w) : B.set(t1, e, n, i), Y.viewport(A.copy(B).multiplyScalar(D).floor());
        }, this.getScissor = function(t1) {
            return t1.copy(z);
        }, this.setScissor = function(t1, e, n, i) {
            t1.isVector4 ? z.set(t1.x, t1.y, t1.z, t1.w) : z.set(t1, e, n, i), Y.scissor(R.copy(z).multiplyScalar(D).floor());
        }, this.getScissorTest = function() {
            return O;
        }, this.setScissorTest = function(t1) {
            Y.setScissorTest(O = t1);
        }, this.setOpaqueSort = function(t1) {
            I = t1;
        }, this.setTransparentSort = function(t1) {
            N = t1;
        }, this.getClearColor = function(t1) {
            return t1.copy(ut.getClearColor());
        }, this.setClearColor = function() {
            ut.setClearColor.apply(ut, arguments);
        }, this.getClearAlpha = function() {
            return ut.getClearAlpha();
        }, this.setClearAlpha = function() {
            ut.setClearAlpha.apply(ut, arguments);
        }, this.clear = function(t1 = !0, e = !0, n = !0) {
            let i = 0;
            t1 && (i |= 16384), e && (i |= 256), n && (i |= 1024), vt.clear(i);
        }, this.clearColor = function() {
            this.clear(!0, !1, !1);
        }, this.clearDepth = function() {
            this.clear(!1, !0, !1);
        }, this.clearStencil = function() {
            this.clear(!1, !1, !0);
        }, this.dispose = function() {
            e.removeEventListener("webglcontextlost", bt, !1), e.removeEventListener("webglcontextrestored", Mt, !1), ot.dispose(), lt.dispose(), K.dispose(), $.dispose(), tt.dispose(), it.dispose(), gt.dispose(), rt.dispose(), _t.dispose(), _t.removeEventListener("sessionstart", Tt), _t.removeEventListener("sessionend", At), G && (G.dispose(), G = null), Ct.stop();
        }, this.renderBufferDirect = function(t1, e, n, i, r, s) {
            null === e && (e = j);
            const a = r.isMesh && r.matrixWorld.determinant() < 0, o = function(t1, e, n, i, r) {
                !0 !== e.isScene && (e = j);
                Q.resetTextureUnits();
                const s = e.fog, a = i.isMeshStandardMaterial ? e.environment : null, o = null === w ? f.outputEncoding : !0 === w.isXRRenderTarget ? w.texture.encoding : at, l = (i.isMeshStandardMaterial ? tt : $).get(i.envMap || a), c = !0 === i.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize, h = !!i.normalMap && !!n.attributes.tangent, u = !!n.morphAttributes.position, p = !!n.morphAttributes.normal, m = !!n.morphAttributes.color, g = i.toneMapped ? f.toneMapping : 0, v = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, y = void 0 !== v ? v.length : 0, x = K.get(i), _ = d.state.lights;
                if (!0 === F && (!0 === H || t1 !== E)) {
                    const e = t1 === E && i.id === T;
                    ct.setState(i, t1, e);
                }
                let b = !1;
                i.version === x.__version ? x.needsLights && x.lightsStateVersion !== _.state.version || x.outputEncoding !== o || r.isInstancedMesh && !1 === x.instancing ? b = !0 : r.isInstancedMesh || !0 !== x.instancing ? r.isSkinnedMesh && !1 === x.skinning ? b = !0 : r.isSkinnedMesh || !0 !== x.skinning ? x.envMap !== l || !0 === i.fog && x.fog !== s ? b = !0 : void 0 === x.numClippingPlanes || x.numClippingPlanes === ct.numPlanes && x.numIntersection === ct.numIntersection ? (x.vertexAlphas !== c || x.vertexTangents !== h || x.morphTargets !== u || x.morphNormals !== p || x.morphColors !== m || x.toneMapping !== g || !0 === J.isWebGL2 && x.morphTargetsCount !== y) && (b = !0) : b = !0 : b = !0 : b = !0 : (b = !0, x.__version = i.version);
                let M = x.currentProgram;
                !0 === b && (M = Bt(i, e, r));
                let S = !1, A = !1, R = !1;
                const C = M.getUniforms(), L = x.uniforms;
                Y.useProgram(M.program) && (S = !0, A = !0, R = !0);
                i.id !== T && (T = i.id, A = !0);
                if (S || E !== t1) {
                    if (C.setValue(vt, "projectionMatrix", t1.projectionMatrix), J.logarithmicDepthBuffer && C.setValue(vt, "logDepthBufFC", 2 / (Math.log(t1.far + 1) / Math.LN2)), E !== t1 && (E = t1, A = !0, R = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) {
                        const e = C.map.cameraPosition;
                        void 0 !== e && e.setValue(vt, W.setFromMatrixPosition(t1.matrixWorld));
                    }
                    (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && C.setValue(vt, "isOrthographic", !0 === t1.isOrthographicCamera), (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.isShadowMaterial || r.isSkinnedMesh) && C.setValue(vt, "viewMatrix", t1.matrixWorldInverse);
                }
                if (r.isSkinnedMesh) {
                    C.setOptional(vt, r, "bindMatrix"), C.setOptional(vt, r, "bindMatrixInverse");
                    const t1 = r.skeleton;
                    t1 && (J.floatVertexTextures ? (null === t1.boneTexture && t1.computeBoneTexture(), C.setValue(vt, "boneTexture", t1.boneTexture, Q), C.setValue(vt, "boneTextureSize", t1.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
                }
                const I = n.morphAttributes;
                (void 0 !== I.position || void 0 !== I.normal || void 0 !== I.color && !0 === J.isWebGL2) && dt.update(r, n, i, M);
                (A || x.receiveShadow !== r.receiveShadow) && (x.receiveShadow = r.receiveShadow, C.setValue(vt, "receiveShadow", r.receiveShadow));
                A && (C.setValue(vt, "toneMappingExposure", f.toneMappingExposure), x.needsLights && (B = R, (N = L).ambientLightColor.needsUpdate = B, N.lightProbe.needsUpdate = B, N.directionalLights.needsUpdate = B, N.directionalLightShadows.needsUpdate = B, N.pointLights.needsUpdate = B, N.pointLightShadows.needsUpdate = B, N.spotLights.needsUpdate = B, N.spotLightShadows.needsUpdate = B, N.rectAreaLights.needsUpdate = B, N.hemisphereLights.needsUpdate = B), s && !0 === i.fog && st.refreshFogUniforms(L, s), st.refreshMaterialUniforms(L, i, D, P, G), ps.upload(vt, x.uniformsList, L, Q));
                var N, B;
                i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (ps.upload(vt, x.uniformsList, L, Q), i.uniformsNeedUpdate = !1);
                i.isSpriteMaterial && C.setValue(vt, "center", r.center);
                return C.setValue(vt, "modelViewMatrix", r.modelViewMatrix), C.setValue(vt, "normalMatrix", r.normalMatrix), C.setValue(vt, "modelMatrix", r.matrixWorld), M;
            }(t1, e, n, i, r);
            Y.setMaterial(i, a);
            let l = n.index;
            const c = n.attributes.position;
            if (null === l) {
                if (void 0 === c || 0 === c.count) return;
            } else if (0 === l.count) return;
            let h, u = 1;
            !0 === i.wireframe && (l = nt.getWireframeAttribute(n), u = 2), gt.setup(r, i, o, n, l);
            let p = pt;
            null !== l && (h = et.get(l), p = mt, p.setIndex(h));
            const m = null !== l ? l.count : c.count, g = n.drawRange.start * u, v = n.drawRange.count * u, y = null !== s ? s.start * u : 0, x = null !== s ? s.count * u : 1 / 0, _ = Math.max(g, y), b = Math.min(m, g + v, y + x) - 1, M = Math.max(0, b - _ + 1);
            if (0 !== M) {
                if (r.isMesh) !0 === i.wireframe ? (Y.setLineWidth(i.wireframeLinewidth * q()), p.setMode(1)) : p.setMode(4);
                else if (r.isLine) {
                    let t1 = i.linewidth;
                    void 0 === t1 && (t1 = 1), Y.setLineWidth(t1 * q()), r.isLineSegments ? p.setMode(1) : r.isLineLoop ? p.setMode(2) : p.setMode(3);
                } else r.isPoints ? p.setMode(0) : r.isSprite && p.setMode(4);
                if (r.isInstancedMesh) p.renderInstances(_, M, r.count);
                else if (n.isInstancedBufferGeometry) {
                    const t1 = Math.min(n.instanceCount, n._maxInstanceCount);
                    p.renderInstances(_, M, t1);
                } else p.render(_, M);
            }
        }, this.compile = function(t1, e) {
            d = lt.get(t1), d.init(), m.push(d), t1.traverseVisible(function(t1) {
                t1.isLight && t1.layers.test(e.layers) && (d.pushLight(t1), t1.castShadow && d.pushShadow(t1));
            }), d.setupLights(f.physicallyCorrectLights), t1.traverse(function(e) {
                const n = e.material;
                if (n) {
                    if (Array.isArray(n)) for(let i = 0; i < n.length; i++)Bt(n[i], t1, e);
                    else Bt(n, t1, e);
                }
            }), m.pop(), d = null;
        };
        let St = null;
        function Tt() {
            Ct.stop();
        }
        function At() {
            Ct.start();
        }
        const Ct = new Ai;
        function Lt(t1, e, n, i) {
            if (!1 === t1.visible) return;
            if (t1.layers.test(e.layers)) {
                if (t1.isGroup) n = t1.renderOrder;
                else if (t1.isLOD) !0 === t1.autoUpdate && t1.update(e);
                else if (t1.isLight) d.pushLight(t1), t1.castShadow && d.pushShadow(t1);
                else if (t1.isSprite) {
                    if (!t1.frustumCulled || U.intersectsSprite(t1)) {
                        i && W.setFromMatrixPosition(t1.matrixWorld).applyMatrix4(k);
                        const e = it.update(t1), r = t1.material;
                        r.visible && u.push(t1, e, r, n, W.z, null);
                    }
                } else if ((t1.isMesh || t1.isLine || t1.isPoints) && (t1.isSkinnedMesh && t1.skeleton.frame !== Z.render.frame && (t1.skeleton.update(), t1.skeleton.frame = Z.render.frame), !t1.frustumCulled || U.intersectsObject(t1))) {
                    i && W.setFromMatrixPosition(t1.matrixWorld).applyMatrix4(k);
                    const e = it.update(t1), r = t1.material;
                    if (Array.isArray(r)) {
                        const i = e.groups;
                        for(let s = 0, a = i.length; s < a; s++){
                            const a = i[s], o = r[a.materialIndex];
                            o && o.visible && u.push(t1, e, o, n, W.z, a);
                        }
                    } else r.visible && u.push(t1, e, r, n, W.z, null);
                }
            }
            const r = t1.children;
            for(let t1 = 0, s = r.length; t1 < s; t1++)Lt(r[t1], e, n, i);
        }
        function Pt(t1, e, n, i) {
            const r = t1.opaque, a = t1.transmissive, o = t1.transparent;
            d.setupLightsView(n), a.length > 0 && function(t1, e, n) {
                const i = J.isWebGL2;
                null === G && (G = new Qt(1, 1, {
                    generateMipmaps: !0,
                    type: X.has("EXT_color_buffer_half_float") ? M : y,
                    minFilter: v,
                    samples: i && !0 === s ? 4 : 0
                }));
                f.getDrawingBufferSize(V), i ? G.setSize(V.x, V.y) : G.setSize(Et(V.x), Et(V.y));
                const r = f.getRenderTarget();
                f.setRenderTarget(G), f.clear();
                const a = f.toneMapping;
                f.toneMapping = 0, Dt(t1, e, n), f.toneMapping = a, Q.updateMultisampleRenderTarget(G), Q.updateRenderTargetMipmap(G), f.setRenderTarget(r);
            }(r, e, n), i && Y.viewport(A.copy(i)), r.length > 0 && Dt(r, e, n), a.length > 0 && Dt(a, e, n), o.length > 0 && Dt(o, e, n), Y.buffers.depth.setTest(!0), Y.buffers.depth.setMask(!0), Y.buffers.color.setMask(!0), Y.setPolygonOffset(!1);
        }
        function Dt(t1, e, n) {
            const i = !0 === e.isScene ? e.overrideMaterial : null;
            for(let r = 0, s = t1.length; r < s; r++){
                const s = t1[r], a = s.object, o = s.geometry, l = null === i ? s.material : i, c = s.group;
                a.layers.test(n.layers) && Nt(a, e, n, o, l, c);
            }
        }
        function Nt(t1, e, n, i, r, s) {
            t1.onBeforeRender(f, e, n, i, r, s), t1.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t1.matrixWorld), t1.normalMatrix.getNormalMatrix(t1.modelViewMatrix), r.onBeforeRender(f, e, n, i, t1, s), !0 === r.transparent && 2 === r.side ? (r.side = 1, r.needsUpdate = !0, f.renderBufferDirect(n, e, i, r, t1, s), r.side = 0, r.needsUpdate = !0, f.renderBufferDirect(n, e, i, r, t1, s), r.side = 2) : f.renderBufferDirect(n, e, i, r, t1, s), t1.onAfterRender(f, e, n, i, r, s);
        }
        function Bt(t1, e, n) {
            !0 !== e.isScene && (e = j);
            const i = K.get(t1), r = d.state.lights, s = d.state.shadowsArray, a = r.state.version, o = rt.getParameters(t1, r.state, s, e, n), l = rt.getProgramCacheKey(o);
            let c = i.programs;
            i.environment = t1.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = (t1.isMeshStandardMaterial ? tt : $).get(t1.envMap || i.environment), void 0 === c && (t1.addEventListener("dispose", wt), c = new Map, i.programs = c);
            let h = c.get(l);
            if (void 0 !== h) {
                if (i.currentProgram === h && i.lightsStateVersion === a) return zt(t1, o), h;
            } else o.uniforms = rt.getUniforms(t1), t1.onBuild(n, o, f), t1.onBeforeCompile(o, f), h = rt.acquireProgram(o, l), c.set(l, h), i.uniforms = o.uniforms;
            const u = i.uniforms;
            (t1.isShaderMaterial || t1.isRawShaderMaterial) && !0 !== t1.clipping || (u.clippingPlanes = ct.uniform), zt(t1, o), i.needsLights = function(t1) {
                return t1.isMeshLambertMaterial || t1.isMeshToonMaterial || t1.isMeshPhongMaterial || t1.isMeshStandardMaterial || t1.isShadowMaterial || t1.isShaderMaterial && !0 === t1.lights;
            }(t1), i.lightsStateVersion = a, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
            const p = h.getUniforms(), m = ps.seqWithValue(p.seq, u);
            return i.currentProgram = h, i.uniformsList = m, h;
        }
        function zt(t1, e) {
            const n = K.get(t1);
            n.outputEncoding = e.outputEncoding, n.instancing = e.instancing, n.skinning = e.skinning, n.morphTargets = e.morphTargets, n.morphNormals = e.morphNormals, n.morphColors = e.morphColors, n.morphTargetsCount = e.morphTargetsCount, n.numClippingPlanes = e.numClippingPlanes, n.numIntersection = e.numClipIntersection, n.vertexAlphas = e.vertexAlphas, n.vertexTangents = e.vertexTangents, n.toneMapping = e.toneMapping;
        }
        Ct.setAnimationLoop(function(t1) {
            St && St(t1);
        }), "undefined" != typeof self && Ct.setContext(self), this.setAnimationLoop = function(t1) {
            St = t1, _t.setAnimationLoop(t1), null === t1 ? Ct.stop() : Ct.start();
        }, _t.addEventListener("sessionstart", Tt), _t.addEventListener("sessionend", At), this.render = function(t1, e) {
            if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            if (!0 === g) return;
            !0 === t1.autoUpdate && t1.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === _t.enabled && !0 === _t.isPresenting && (!0 === _t.cameraAutoUpdate && _t.updateCamera(e), e = _t.getCamera()), !0 === t1.isScene && t1.onBeforeRender(f, t1, e, w), d = lt.get(t1, m.length), d.init(), m.push(d), k.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), U.setFromProjectionMatrix(k), H = this.localClippingEnabled, F = ct.init(this.clippingPlanes, H, e), u = ot.get(t1, p.length), u.init(), p.push(u), Lt(t1, e, 0, f.sortObjects), u.finish(), !0 === f.sortObjects && u.sort(I, N), !0 === F && ct.beginShadows();
            const n = d.state.shadowsArray;
            if (ht.render(n, t1, e), !0 === F && ct.endShadows(), !0 === this.info.autoReset && this.info.reset(), ut.render(u, t1), d.setupLights(f.physicallyCorrectLights), e.isArrayCamera) {
                const n = e.cameras;
                for(let e = 0, i = n.length; e < i; e++){
                    const i = n[e];
                    Pt(u, t1, i, i.viewport);
                }
            } else Pt(u, t1, e);
            null !== w && (Q.updateMultisampleRenderTarget(w), Q.updateRenderTargetMipmap(w)), !0 === t1.isScene && t1.onAfterRender(f, t1, e), gt.resetDefaultState(), T = -1, E = null, m.pop(), d = m.length > 0 ? m[m.length - 1] : null, p.pop(), u = p.length > 0 ? p[p.length - 1] : null;
        }, this.getActiveCubeFace = function() {
            return x;
        }, this.getActiveMipmapLevel = function() {
            return _;
        }, this.getRenderTarget = function() {
            return w;
        }, this.setRenderTargetTextures = function(t1, e, n) {
            K.get(t1.texture).__webglTexture = e, K.get(t1.depthTexture).__webglTexture = n;
            const i = K.get(t1);
            i.__hasExternalTextures = !0, i.__hasExternalTextures && (i.__autoAllocateDepthBuffer = void 0 === n, i.__autoAllocateDepthBuffer || !0 === X.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), i.__useRenderToTexture = !1));
        }, this.setRenderTargetFramebuffer = function(t1, e) {
            const n = K.get(t1);
            n.__webglFramebuffer = e, n.__useDefaultFramebuffer = void 0 === e;
        }, this.setRenderTarget = function(t1, e = 0, n = 0) {
            w = t1, x = e, _ = n;
            let i = !0;
            if (t1) {
                const e = K.get(t1);
                void 0 !== e.__useDefaultFramebuffer ? (Y.bindFramebuffer(36160, null), i = !1) : void 0 === e.__webglFramebuffer ? Q.setupRenderTarget(t1) : e.__hasExternalTextures && Q.rebindTextures(t1, K.get(t1.texture).__webglTexture, K.get(t1.depthTexture).__webglTexture);
            }
            let r = null, s = !1, a = !1;
            if (t1) {
                const n = t1.texture;
                (n.isData3DTexture || n.isDataArrayTexture) && (a = !0);
                const i = K.get(t1).__webglFramebuffer;
                t1.isWebGLCubeRenderTarget ? (r = i[e], s = !0) : r = J.isWebGL2 && t1.samples > 0 && !1 === Q.useMultisampledRTT(t1) ? K.get(t1).__webglMultisampledFramebuffer : i, A.copy(t1.viewport), R.copy(t1.scissor), C = t1.scissorTest;
            } else A.copy(B).multiplyScalar(D).floor(), R.copy(z).multiplyScalar(D).floor(), C = O;
            if (Y.bindFramebuffer(36160, r) && J.drawBuffers && i && Y.drawBuffers(t1, r), Y.viewport(A), Y.scissor(R), Y.setScissorTest(C), s) {
                const i = K.get(t1.texture);
                vt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n);
            } else if (a) {
                const i = K.get(t1.texture), r = e || 0;
                vt.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r);
            }
            T = -1;
        }, this.readRenderTargetPixels = function(t1, e, n, i, r, s, a) {
            if (!t1 || !t1.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            let o = K.get(t1).__webglFramebuffer;
            if (t1.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) {
                Y.bindFramebuffer(36160, o);
                try {
                    const a = t1.texture, o = a.format, l = a.type;
                    if (o !== S && ft.convert(o) !== vt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    const c = l === M && (X.has("EXT_color_buffer_half_float") || J.isWebGL2 && X.has("EXT_color_buffer_float"));
                    if (!(l === y || ft.convert(l) === vt.getParameter(35738) || l === b && (J.isWebGL2 || X.has("OES_texture_float") || X.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    e >= 0 && e <= t1.width - i && n >= 0 && n <= t1.height - r && vt.readPixels(e, n, i, r, ft.convert(o), ft.convert(l), s);
                } finally{
                    const t1 = null !== w ? K.get(w).__webglFramebuffer : null;
                    Y.bindFramebuffer(36160, t1);
                }
            }
        }, this.copyFramebufferToTexture = function(t1, e, n = 0) {
            if (!0 !== e.isFramebufferTexture) return void console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");
            const i = Math.pow(2, -n), r = Math.floor(e.image.width * i), s = Math.floor(e.image.height * i);
            Q.setTexture2D(e, 0), vt.copyTexSubImage2D(3553, n, 0, 0, t1.x, t1.y, r, s), Y.unbindTexture();
        }, this.copyTextureToTexture = function(t1, e, n, i = 0) {
            const r = e.image.width, s = e.image.height, a = ft.convert(n.format), o = ft.convert(n.type);
            Q.setTexture2D(n, 0), vt.pixelStorei(37440, n.flipY), vt.pixelStorei(37441, n.premultiplyAlpha), vt.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? vt.texSubImage2D(3553, i, t1.x, t1.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? vt.compressedTexSubImage2D(3553, i, t1.x, t1.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : vt.texSubImage2D(3553, i, t1.x, t1.y, a, o, e.image), 0 === i && n.generateMipmaps && vt.generateMipmap(3553), Y.unbindTexture();
        }, this.copyTextureToTexture3D = function(t1, e, n, i, r = 0) {
            if (f.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
            const s = t1.max.x - t1.min.x + 1, a = t1.max.y - t1.min.y + 1, o = t1.max.z - t1.min.z + 1, l = ft.convert(i.format), c = ft.convert(i.type);
            let h;
            if (i.isData3DTexture) Q.setTexture3D(i, 0), h = 32879;
            else {
                if (!i.isDataArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                Q.setTexture2DArray(i, 0), h = 35866;
            }
            vt.pixelStorei(37440, i.flipY), vt.pixelStorei(37441, i.premultiplyAlpha), vt.pixelStorei(3317, i.unpackAlignment);
            const u = vt.getParameter(3314), d = vt.getParameter(32878), p = vt.getParameter(3316), m = vt.getParameter(3315), g = vt.getParameter(32877), v = n.isCompressedTexture ? n.mipmaps[0] : n.image;
            vt.pixelStorei(3314, v.width), vt.pixelStorei(32878, v.height), vt.pixelStorei(3316, t1.min.x), vt.pixelStorei(3315, t1.min.y), vt.pixelStorei(32877, t1.min.z), n.isDataTexture || n.isData3DTexture ? vt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, v.data) : n.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), vt.compressedTexSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, v.data)) : vt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, v), vt.pixelStorei(3314, u), vt.pixelStorei(32878, d), vt.pixelStorei(3316, p), vt.pixelStorei(3315, m), vt.pixelStorei(32877, g), 0 === r && i.generateMipmaps && vt.generateMipmap(h), Y.unbindTexture();
        }, this.initTexture = function(t1) {
            Q.setTexture2D(t1, 0), Y.unbindTexture();
        }, this.resetState = function() {
            x = 0, _ = 0, w = null, Y.reset(), gt.reset();
        }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }));
    }
    aa.prototype.isWebGLRenderer = !0;
    class oa extends aa {
    }
    oa.prototype.isWebGL1Renderer = !0;
    class la {
        constructor(t1, e = 25e-5){
            this.name = "", this.color = new Wt(t1), this.density = e;
        }
        clone() {
            return new la(this.color, this.density);
        }
        toJSON() {
            return {
                type: "FogExp2",
                color: this.color.getHex(),
                density: this.density
            };
        }
    }
    la.prototype.isFogExp2 = !0;
    class ca {
        constructor(t1, e = 1, n = 1e3){
            this.name = "", this.color = new Wt(t1), this.near = e, this.far = n;
        }
        clone() {
            return new ca(this.color, this.near, this.far);
        }
        toJSON() {
            return {
                type: "Fog",
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            };
        }
    }
    ca.prototype.isFog = !0;
    class ha extends ln {
        constructor(){
            super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }));
        }
        copy(t1, e) {
            return super.copy(t1, e), null !== t1.background && (this.background = t1.background.clone()), null !== t1.environment && (this.environment = t1.environment.clone()), null !== t1.fog && (this.fog = t1.fog.clone()), null !== t1.overrideMaterial && (this.overrideMaterial = t1.overrideMaterial.clone()), this.autoUpdate = t1.autoUpdate, this.matrixAutoUpdate = t1.matrixAutoUpdate, this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return null !== this.fog && (e.object.fog = this.fog.toJSON()), e;
        }
    }
    ha.prototype.isScene = !0;
    class ua {
        constructor(t1, e){
            this.array = t1, this.stride = e, this.count = void 0 !== t1 ? t1.length / e : 0, this.usage = ut, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0, this.uuid = _t();
        }
        onUploadCallback() {}
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
        setUsage(t1) {
            return this.usage = t1, this;
        }
        copy(t1) {
            return this.array = new t1.array.constructor(t1.array), this.count = t1.count, this.stride = t1.stride, this.usage = t1.usage, this;
        }
        copyAt(t1, e, n) {
            t1 *= this.stride, n *= e.stride;
            for(let i = 0, r = this.stride; i < r; i++)this.array[t1 + i] = e.array[n + i];
            return this;
        }
        set(t1, e = 0) {
            return this.array.set(t1, e), this;
        }
        clone(t1) {
            void 0 === t1.arrayBuffers && (t1.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = _t()), void 0 === t1.arrayBuffers[this.array.buffer._uuid] && (t1.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
            const e = new this.array.constructor(t1.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
            return n.setUsage(this.usage), n;
        }
        onUpload(t1) {
            return this.onUploadCallback = t1, this;
        }
        toJSON(t1) {
            return void 0 === t1.arrayBuffers && (t1.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = _t()), void 0 === t1.arrayBuffers[this.array.buffer._uuid] && (t1.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
                uuid: this.uuid,
                buffer: this.array.buffer._uuid,
                type: this.array.constructor.name,
                stride: this.stride
            };
        }
    }
    ua.prototype.isInterleavedBuffer = !0;
    const da = new se;
    class pa {
        constructor(t1, e, n, i = !1){
            this.name = "", this.data = t1, this.itemSize = e, this.offset = n, this.normalized = !0 === i;
        }
        get count() {
            return this.data.count;
        }
        get array() {
            return this.data.array;
        }
        set needsUpdate(t1) {
            this.data.needsUpdate = t1;
        }
        applyMatrix4(t1) {
            for(let e = 0, n = this.data.count; e < n; e++)da.fromBufferAttribute(this, e), da.applyMatrix4(t1), this.setXYZ(e, da.x, da.y, da.z);
            return this;
        }
        applyNormalMatrix(t1) {
            for(let e = 0, n = this.count; e < n; e++)da.fromBufferAttribute(this, e), da.applyNormalMatrix(t1), this.setXYZ(e, da.x, da.y, da.z);
            return this;
        }
        transformDirection(t1) {
            for(let e = 0, n = this.count; e < n; e++)da.fromBufferAttribute(this, e), da.transformDirection(t1), this.setXYZ(e, da.x, da.y, da.z);
            return this;
        }
        setX(t1, e) {
            return this.data.array[t1 * this.data.stride + this.offset] = e, this;
        }
        setY(t1, e) {
            return this.data.array[t1 * this.data.stride + this.offset + 1] = e, this;
        }
        setZ(t1, e) {
            return this.data.array[t1 * this.data.stride + this.offset + 2] = e, this;
        }
        setW(t1, e) {
            return this.data.array[t1 * this.data.stride + this.offset + 3] = e, this;
        }
        getX(t1) {
            return this.data.array[t1 * this.data.stride + this.offset];
        }
        getY(t1) {
            return this.data.array[t1 * this.data.stride + this.offset + 1];
        }
        getZ(t1) {
            return this.data.array[t1 * this.data.stride + this.offset + 2];
        }
        getW(t1) {
            return this.data.array[t1 * this.data.stride + this.offset + 3];
        }
        setXY(t1, e, n) {
            return t1 = t1 * this.data.stride + this.offset, this.data.array[t1 + 0] = e, this.data.array[t1 + 1] = n, this;
        }
        setXYZ(t1, e, n, i) {
            return t1 = t1 * this.data.stride + this.offset, this.data.array[t1 + 0] = e, this.data.array[t1 + 1] = n, this.data.array[t1 + 2] = i, this;
        }
        setXYZW(t1, e, n, i, r) {
            return t1 = t1 * this.data.stride + this.offset, this.data.array[t1 + 0] = e, this.data.array[t1 + 1] = n, this.data.array[t1 + 2] = i, this.data.array[t1 + 3] = r, this;
        }
        clone(t1) {
            if (void 0 === t1) {
                console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
                const t1 = [];
                for(let e = 0; e < this.count; e++){
                    const n = e * this.data.stride + this.offset;
                    for(let e = 0; e < this.itemSize; e++)t1.push(this.data.array[n + e]);
                }
                return new Tn(new this.array.constructor(t1), this.itemSize, this.normalized);
            }
            return void 0 === t1.interleavedBuffers && (t1.interleavedBuffers = {}), void 0 === t1.interleavedBuffers[this.data.uuid] && (t1.interleavedBuffers[this.data.uuid] = this.data.clone(t1)), new pa(t1.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
        }
        toJSON(t1) {
            if (void 0 === t1) {
                console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
                const t1 = [];
                for(let e = 0; e < this.count; e++){
                    const n = e * this.data.stride + this.offset;
                    for(let e = 0; e < this.itemSize; e++)t1.push(this.data.array[n + e]);
                }
                return {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: t1,
                    normalized: this.normalized
                };
            }
            return void 0 === t1.interleavedBuffers && (t1.interleavedBuffers = {}), void 0 === t1.interleavedBuffers[this.data.uuid] && (t1.interleavedBuffers[this.data.uuid] = this.data.toJSON(t1)), {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            };
        }
    }
    pa.prototype.isInterleavedBufferAttribute = !0;
    class ma extends bn {
        constructor(t1){
            super(), this.type = "SpriteMaterial", this.color = new Wt(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.alphaMap = t1.alphaMap, this.rotation = t1.rotation, this.sizeAttenuation = t1.sizeAttenuation, this.fog = t1.fog, this;
        }
    }
    let fa;
    ma.prototype.isSpriteMaterial = !0;
    const ga = new se, va = new se, ya = new se, xa = new Rt, _a = new Rt, ba = new ze, Ma = new se, wa = new se, Sa = new se, Ta = new Rt, Ea = new Rt, Aa = new Rt;
    class Ra extends ln {
        constructor(t1){
            if (super(), this.type = "Sprite", void 0 === fa) {
                fa = new Vn;
                const t1 = new Float32Array([
                    -0.5,
                    -0.5,
                    0,
                    0,
                    0,
                    .5,
                    -0.5,
                    0,
                    1,
                    0,
                    .5,
                    .5,
                    0,
                    1,
                    1,
                    -0.5,
                    .5,
                    0,
                    0,
                    1
                ]), e = new ua(t1, 5);
                fa.setIndex([
                    0,
                    1,
                    2,
                    0,
                    2,
                    3
                ]), fa.setAttribute("position", new pa(e, 3, 0, !1)), fa.setAttribute("uv", new pa(e, 2, 3, !1));
            }
            this.geometry = fa, this.material = void 0 !== t1 ? t1 : new ma, this.center = new Rt(.5, .5);
        }
        raycast(t1, e) {
            null === t1.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), va.setFromMatrixScale(this.matrixWorld), ba.copy(t1.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t1.camera.matrixWorldInverse, this.matrixWorld), ya.setFromMatrixPosition(this.modelViewMatrix), t1.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && va.multiplyScalar(-ya.z);
            const n = this.material.rotation;
            let i, r;
            0 !== n && (r = Math.cos(n), i = Math.sin(n));
            const s = this.center;
            Ca(Ma.set(-0.5, -0.5, 0), ya, s, va, i, r), Ca(wa.set(.5, -0.5, 0), ya, s, va, i, r), Ca(Sa.set(.5, .5, 0), ya, s, va, i, r), Ta.set(0, 0), Ea.set(1, 0), Aa.set(1, 1);
            let a = t1.ray.intersectTriangle(Ma, wa, Sa, !1, ga);
            if (null === a && (Ca(wa.set(-0.5, .5, 0), ya, s, va, i, r), Ea.set(0, 1), a = t1.ray.intersectTriangle(Ma, Sa, wa, !1, ga), null === a)) return;
            const o = t1.ray.origin.distanceTo(ga);
            o < t1.near || o > t1.far || e.push({
                distance: o,
                point: ga.clone(),
                uv: xn.getUV(ga, Ma, wa, Sa, Ta, Ea, Aa, new Rt),
                face: null,
                object: this
            });
        }
        copy(t1) {
            return super.copy(t1), void 0 !== t1.center && this.center.copy(t1.center), this.material = t1.material, this;
        }
    }
    function Ca(t1, e, n, i, r, s) {
        xa.subVectors(t1, n).addScalar(.5).multiply(i), void 0 !== r ? (_a.x = s * xa.x - r * xa.y, _a.y = r * xa.x + s * xa.y) : _a.copy(xa), t1.copy(e), t1.x += _a.x, t1.y += _a.y, t1.applyMatrix4(ba);
    }
    Ra.prototype.isSprite = !0;
    const La = new se, Pa = new se;
    class Da extends ln {
        constructor(){
            super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
                levels: {
                    enumerable: !0,
                    value: []
                },
                isLOD: {
                    value: !0
                }
            }), this.autoUpdate = !0;
        }
        copy(t1) {
            super.copy(t1, !1);
            const e = t1.levels;
            for(let t1 = 0, n = e.length; t1 < n; t1++){
                const n = e[t1];
                this.addLevel(n.object.clone(), n.distance);
            }
            return this.autoUpdate = t1.autoUpdate, this;
        }
        addLevel(t1, e = 0) {
            e = Math.abs(e);
            const n = this.levels;
            let i;
            for(i = 0; i < n.length && !(e < n[i].distance); i++);
            return n.splice(i, 0, {
                distance: e,
                object: t1
            }), this.add(t1), this;
        }
        getCurrentLevel() {
            return this._currentLevel;
        }
        getObjectForDistance(t1) {
            const e = this.levels;
            if (e.length > 0) {
                let n, i;
                for(n = 1, i = e.length; n < i && !(t1 < e[n].distance); n++);
                return e[n - 1].object;
            }
            return null;
        }
        raycast(t1, e) {
            if (this.levels.length > 0) {
                La.setFromMatrixPosition(this.matrixWorld);
                const n = t1.ray.origin.distanceTo(La);
                this.getObjectForDistance(n).raycast(t1, e);
            }
        }
        update(t1) {
            const e = this.levels;
            if (e.length > 1) {
                La.setFromMatrixPosition(t1.matrixWorld), Pa.setFromMatrixPosition(this.matrixWorld);
                const n = La.distanceTo(Pa) / t1.zoom;
                let i, r;
                for(e[0].object.visible = !0, i = 1, r = e.length; i < r && n >= e[i].distance; i++)e[i - 1].object.visible = !1, e[i].object.visible = !0;
                for(this._currentLevel = i - 1; i < r; i++)e[i].object.visible = !1;
            }
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
            const n = this.levels;
            for(let t1 = 0, i = n.length; t1 < i; t1++){
                const i = n[t1];
                e.object.levels.push({
                    object: i.object.uuid,
                    distance: i.distance
                });
            }
            return e;
        }
    }
    const Ia = new se, Na = new Kt, Ba = new Kt, za = new se, Oa = new ze;
    class Ua extends oi {
        constructor(t1, e){
            super(t1, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new ze, this.bindMatrixInverse = new ze;
        }
        copy(t1) {
            return super.copy(t1), this.bindMode = t1.bindMode, this.bindMatrix.copy(t1.bindMatrix), this.bindMatrixInverse.copy(t1.bindMatrixInverse), this.skeleton = t1.skeleton, this;
        }
        bind(t1, e) {
            this.skeleton = t1, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
        }
        pose() {
            this.skeleton.pose();
        }
        normalizeSkinWeights() {
            const t1 = new Kt, e = this.geometry.attributes.skinWeight;
            for(let n = 0, i = e.count; n < i; n++){
                t1.fromBufferAttribute(e, n);
                const i = 1 / t1.manhattanLength();
                i !== 1 / 0 ? t1.multiplyScalar(i) : t1.set(1, 0, 0, 0), e.setXYZW(n, t1.x, t1.y, t1.z, t1.w);
            }
        }
        updateMatrixWorld(t1) {
            super.updateMatrixWorld(t1), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
        }
        boneTransform(t1, e) {
            const n = this.skeleton, i = this.geometry;
            Na.fromBufferAttribute(i.attributes.skinIndex, t1), Ba.fromBufferAttribute(i.attributes.skinWeight, t1), Ia.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
            for(let t1 = 0; t1 < 4; t1++){
                const i = Ba.getComponent(t1);
                if (0 !== i) {
                    const r = Na.getComponent(t1);
                    Oa.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]), e.addScaledVector(za.copy(Ia).applyMatrix4(Oa), i);
                }
            }
            return e.applyMatrix4(this.bindMatrixInverse);
        }
    }
    Ua.prototype.isSkinnedMesh = !0;
    class Fa extends ln {
        constructor(){
            super(), this.type = "Bone";
        }
    }
    Fa.prototype.isBone = !0;
    class Ha extends Zt {
        constructor(t1 = null, e = 1, n = 1, i, r, s, a, o, l = 1003, c = 1003, h, u){
            super(null, s, a, o, l, c, i, r, h, u), this.image = {
                data: t1,
                width: e,
                height: n
            }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    Ha.prototype.isDataTexture = !0;
    const Ga = new ze, ka = new ze;
    class Va {
        constructor(t1 = [], e = []){
            this.uuid = _t(), this.bones = t1.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
        }
        init() {
            const t1 = this.bones, e = this.boneInverses;
            if (this.boneMatrices = new Float32Array(16 * t1.length), 0 === e.length) this.calculateInverses();
            else if (t1.length !== e.length) {
                console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
                for(let t1 = 0, e = this.bones.length; t1 < e; t1++)this.boneInverses.push(new ze);
            }
        }
        calculateInverses() {
            this.boneInverses.length = 0;
            for(let t1 = 0, e = this.bones.length; t1 < e; t1++){
                const e = new ze;
                this.bones[t1] && e.copy(this.bones[t1].matrixWorld).invert(), this.boneInverses.push(e);
            }
        }
        pose() {
            for(let t1 = 0, e = this.bones.length; t1 < e; t1++){
                const e = this.bones[t1];
                e && e.matrixWorld.copy(this.boneInverses[t1]).invert();
            }
            for(let t1 = 0, e = this.bones.length; t1 < e; t1++){
                const e = this.bones[t1];
                e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale));
            }
        }
        update() {
            const t1 = this.bones, e = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
            for(let i = 0, r = t1.length; i < r; i++){
                const r = t1[i] ? t1[i].matrixWorld : ka;
                Ga.multiplyMatrices(r, e[i]), Ga.toArray(n, 16 * i);
            }
            null !== i && (i.needsUpdate = !0);
        }
        clone() {
            return new Va(this.bones, this.boneInverses);
        }
        computeBoneTexture() {
            let t1 = Math.sqrt(4 * this.bones.length);
            t1 = Tt(t1), t1 = Math.max(t1, 4);
            const e = new Float32Array(t1 * t1 * 4);
            e.set(this.boneMatrices);
            const n = new Ha(e, t1, t1, S, b);
            return n.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = n, this.boneTextureSize = t1, this;
        }
        getBoneByName(t1) {
            for(let e = 0, n = this.bones.length; e < n; e++){
                const n = this.bones[e];
                if (n.name === t1) return n;
            }
        }
        dispose() {
            null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null);
        }
        fromJSON(t1, e) {
            this.uuid = t1.uuid;
            for(let n = 0, i = t1.bones.length; n < i; n++){
                const i = t1.bones[n];
                let r = e[i];
                void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i), r = new Fa), this.bones.push(r), this.boneInverses.push((new ze).fromArray(t1.boneInverses[n]));
            }
            return this.init(), this;
        }
        toJSON() {
            const t1 = {
                metadata: {
                    version: 4.5,
                    type: "Skeleton",
                    generator: "Skeleton.toJSON"
                },
                bones: [],
                boneInverses: []
            };
            t1.uuid = this.uuid;
            const e = this.bones, n = this.boneInverses;
            for(let i = 0, r = e.length; i < r; i++){
                const r = e[i];
                t1.bones.push(r.uuid);
                const s = n[i];
                t1.boneInverses.push(s.toArray());
            }
            return t1;
        }
    }
    class Wa extends Tn {
        constructor(t1, e, n, i = 1){
            "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(t1, e, n), this.meshPerAttribute = i;
        }
        copy(t1) {
            return super.copy(t1), this.meshPerAttribute = t1.meshPerAttribute, this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.meshPerAttribute = this.meshPerAttribute, t1.isInstancedBufferAttribute = !0, t1;
        }
    }
    Wa.prototype.isInstancedBufferAttribute = !0;
    const ja = new ze, qa = new ze, Xa = [], Ja = new oi;
    class Ya extends oi {
        constructor(t1, e, n){
            super(t1, e), this.instanceMatrix = new Wa(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1;
        }
        copy(t1) {
            return super.copy(t1), this.instanceMatrix.copy(t1.instanceMatrix), null !== t1.instanceColor && (this.instanceColor = t1.instanceColor.clone()), this.count = t1.count, this;
        }
        getColorAt(t1, e) {
            e.fromArray(this.instanceColor.array, 3 * t1);
        }
        getMatrixAt(t1, e) {
            e.fromArray(this.instanceMatrix.array, 16 * t1);
        }
        raycast(t1, e) {
            const n = this.matrixWorld, i = this.count;
            if (Ja.geometry = this.geometry, Ja.material = this.material, void 0 !== Ja.material) for(let r = 0; r < i; r++){
                this.getMatrixAt(r, ja), qa.multiplyMatrices(n, ja), Ja.matrixWorld = qa, Ja.raycast(t1, Xa);
                for(let t1 = 0, n = Xa.length; t1 < n; t1++){
                    const n = Xa[t1];
                    n.instanceId = r, n.object = this, e.push(n);
                }
                Xa.length = 0;
            }
        }
        setColorAt(t1, e) {
            null === this.instanceColor && (this.instanceColor = new Wa(new Float32Array(3 * this.instanceMatrix.count), 3)), e.toArray(this.instanceColor.array, 3 * t1);
        }
        setMatrixAt(t1, e) {
            e.toArray(this.instanceMatrix.array, 16 * t1);
        }
        updateMorphTargets() {}
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    Ya.prototype.isInstancedMesh = !0;
    class Za extends bn {
        constructor(t1){
            super(), this.type = "LineBasicMaterial", this.color = new Wt(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.linewidth = t1.linewidth, this.linecap = t1.linecap, this.linejoin = t1.linejoin, this.fog = t1.fog, this;
        }
    }
    Za.prototype.isLineBasicMaterial = !0;
    const Ka = new se, Qa = new se, $a = new ze, to = new Be, eo = new Ae;
    class no extends ln {
        constructor(t1 = new Vn, e = new Za){
            super(), this.type = "Line", this.geometry = t1, this.material = e, this.updateMorphTargets();
        }
        copy(t1) {
            return super.copy(t1), this.material = t1.material, this.geometry = t1.geometry, this;
        }
        computeLineDistances() {
            const t1 = this.geometry;
            if (t1.isBufferGeometry) {
                if (null === t1.index) {
                    const e = t1.attributes.position, n = [
                        0
                    ];
                    for(let t1 = 1, i = e.count; t1 < i; t1++)Ka.fromBufferAttribute(e, t1 - 1), Qa.fromBufferAttribute(e, t1), n[t1] = n[t1 - 1], n[t1] += Ka.distanceTo(Qa);
                    t1.setAttribute("lineDistance", new Nn(n, 1));
                } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            } else t1.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            return this;
        }
        raycast(t1, e) {
            const n = this.geometry, i = this.matrixWorld, r = t1.params.Line.threshold, s = n.drawRange;
            if (null === n.boundingSphere && n.computeBoundingSphere(), eo.copy(n.boundingSphere), eo.applyMatrix4(i), eo.radius += r, !1 === t1.ray.intersectsSphere(eo)) return;
            $a.copy(i).invert(), to.copy(t1.ray).applyMatrix4($a);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = new se, c = new se, h = new se, u = new se, d = this.isLineSegments ? 2 : 1;
            if (n.isBufferGeometry) {
                const i = n.index, r = n.attributes.position;
                if (null !== i) for(let n = Math.max(0, s.start), a = Math.min(i.count, s.start + s.count) - 1; n < a; n += d){
                    const s = i.getX(n), a = i.getX(n + 1);
                    l.fromBufferAttribute(r, s), c.fromBufferAttribute(r, a);
                    if (to.distanceSqToSegment(l, c, u, h) > o) continue;
                    u.applyMatrix4(this.matrixWorld);
                    const d = t1.ray.origin.distanceTo(u);
                    d < t1.near || d > t1.far || e.push({
                        distance: d,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: n,
                        face: null,
                        faceIndex: null,
                        object: this
                    });
                }
                else for(let n = Math.max(0, s.start), i = Math.min(r.count, s.start + s.count) - 1; n < i; n += d){
                    l.fromBufferAttribute(r, n), c.fromBufferAttribute(r, n + 1);
                    if (to.distanceSqToSegment(l, c, u, h) > o) continue;
                    u.applyMatrix4(this.matrixWorld);
                    const i = t1.ray.origin.distanceTo(u);
                    i < t1.near || i > t1.far || e.push({
                        distance: i,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: n,
                        face: null,
                        faceIndex: null,
                        object: this
                    });
                }
            } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
        updateMorphTargets() {
            const t1 = this.geometry;
            if (t1.isBufferGeometry) {
                const e = t1.morphAttributes, n = Object.keys(e);
                if (n.length > 0) {
                    const t1 = e[n[0]];
                    if (void 0 !== t1) {
                        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                        for(let e = 0, n = t1.length; e < n; e++){
                            const n = t1[e].name || String(e);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e;
                        }
                    }
                }
            } else {
                const e = t1.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
            }
        }
    }
    no.prototype.isLine = !0;
    const io = new se, ro = new se;
    class so extends no {
        constructor(t1, e){
            super(t1, e), this.type = "LineSegments";
        }
        computeLineDistances() {
            const t1 = this.geometry;
            if (t1.isBufferGeometry) {
                if (null === t1.index) {
                    const e = t1.attributes.position, n = [];
                    for(let t1 = 0, i = e.count; t1 < i; t1 += 2)io.fromBufferAttribute(e, t1), ro.fromBufferAttribute(e, t1 + 1), n[t1] = 0 === t1 ? 0 : n[t1 - 1], n[t1 + 1] = n[t1] + io.distanceTo(ro);
                    t1.setAttribute("lineDistance", new Nn(n, 1));
                } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            } else t1.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            return this;
        }
    }
    so.prototype.isLineSegments = !0;
    class ao extends no {
        constructor(t1, e){
            super(t1, e), this.type = "LineLoop";
        }
    }
    ao.prototype.isLineLoop = !0;
    class oo extends bn {
        constructor(t1){
            super(), this.type = "PointsMaterial", this.color = new Wt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.alphaMap = t1.alphaMap, this.size = t1.size, this.sizeAttenuation = t1.sizeAttenuation, this.fog = t1.fog, this;
        }
    }
    oo.prototype.isPointsMaterial = !0;
    const lo = new ze, co = new Be, ho = new Ae, uo = new se;
    class po extends ln {
        constructor(t1 = new Vn, e = new oo){
            super(), this.type = "Points", this.geometry = t1, this.material = e, this.updateMorphTargets();
        }
        copy(t1) {
            return super.copy(t1), this.material = t1.material, this.geometry = t1.geometry, this;
        }
        raycast(t1, e) {
            const n = this.geometry, i = this.matrixWorld, r = t1.params.Points.threshold, s = n.drawRange;
            if (null === n.boundingSphere && n.computeBoundingSphere(), ho.copy(n.boundingSphere), ho.applyMatrix4(i), ho.radius += r, !1 === t1.ray.intersectsSphere(ho)) return;
            lo.copy(i).invert(), co.copy(t1.ray).applyMatrix4(lo);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a;
            if (n.isBufferGeometry) {
                const r = n.index, a = n.attributes.position;
                if (null !== r) for(let n = Math.max(0, s.start), l = Math.min(r.count, s.start + s.count); n < l; n++){
                    const s = r.getX(n);
                    uo.fromBufferAttribute(a, s), mo(uo, s, o, i, t1, e, this);
                }
                else for(let n = Math.max(0, s.start), r = Math.min(a.count, s.start + s.count); n < r; n++)uo.fromBufferAttribute(a, n), mo(uo, n, o, i, t1, e, this);
            } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
        updateMorphTargets() {
            const t1 = this.geometry;
            if (t1.isBufferGeometry) {
                const e = t1.morphAttributes, n = Object.keys(e);
                if (n.length > 0) {
                    const t1 = e[n[0]];
                    if (void 0 !== t1) {
                        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                        for(let e = 0, n = t1.length; e < n; e++){
                            const n = t1[e].name || String(e);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e;
                        }
                    }
                }
            } else {
                const e = t1.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
            }
        }
    }
    function mo(t1, e, n, i, r, s, a) {
        const o = co.distanceSqToPoint(t1);
        if (o < n) {
            const n = new se;
            co.closestPointToPoint(t1, n), n.applyMatrix4(i);
            const l = r.ray.origin.distanceTo(n);
            if (l < r.near || l > r.far) return;
            s.push({
                distance: l,
                distanceToRay: Math.sqrt(o),
                point: n,
                index: e,
                face: null,
                object: a
            });
        }
    }
    po.prototype.isPoints = !0;
    class fo extends Zt {
        constructor(t1, e, n, i, r, s, a, o, l){
            super(t1, e, n, i, r, s, a, o, l), this.minFilter = void 0 !== s ? s : f, this.magFilter = void 0 !== r ? r : f, this.generateMipmaps = !1;
            const c = this;
            "requestVideoFrameCallback" in t1 && t1.requestVideoFrameCallback(function e() {
                c.needsUpdate = !0, t1.requestVideoFrameCallback(e);
            });
        }
        clone() {
            return new this.constructor(this.image).copy(this);
        }
        update() {
            const t1 = this.image;
            !1 === "requestVideoFrameCallback" in t1 && t1.readyState >= t1.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
        }
    }
    fo.prototype.isVideoTexture = !0;
    class go extends Zt {
        constructor(t1, e, n){
            super({
                width: t1,
                height: e
            }), this.format = n, this.magFilter = d, this.minFilter = d, this.generateMipmaps = !1, this.needsUpdate = !0;
        }
    }
    go.prototype.isFramebufferTexture = !0;
    class vo extends Zt {
        constructor(t1, e, n, i, r, s, a, o, l, c, h, u){
            super(null, s, a, o, l, c, i, r, h, u), this.image = {
                width: e,
                height: n
            }, this.mipmaps = t1, this.flipY = !1, this.generateMipmaps = !1;
        }
    }
    vo.prototype.isCompressedTexture = !0;
    class yo extends Zt {
        constructor(t1, e, n, i, r, s, a, o, l){
            super(t1, e, n, i, r, s, a, o, l), this.needsUpdate = !0;
        }
    }
    yo.prototype.isCanvasTexture = !0;
    class xo {
        constructor(){
            this.type = "Curve", this.arcLengthDivisions = 200;
        }
        getPoint() {
            return console.warn("THREE.Curve: .getPoint() not implemented."), null;
        }
        getPointAt(t1, e) {
            const n = this.getUtoTmapping(t1);
            return this.getPoint(n, e);
        }
        getPoints(t1 = 5) {
            const e = [];
            for(let n = 0; n <= t1; n++)e.push(this.getPoint(n / t1));
            return e;
        }
        getSpacedPoints(t1 = 5) {
            const e = [];
            for(let n = 0; n <= t1; n++)e.push(this.getPointAt(n / t1));
            return e;
        }
        getLength() {
            const t1 = this.getLengths();
            return t1[t1.length - 1];
        }
        getLengths(t1 = this.arcLengthDivisions) {
            if (this.cacheArcLengths && this.cacheArcLengths.length === t1 + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            const e = [];
            let n, i = this.getPoint(0), r = 0;
            e.push(0);
            for(let s = 1; s <= t1; s++)n = this.getPoint(s / t1), r += n.distanceTo(i), e.push(r), i = n;
            return this.cacheArcLengths = e, e;
        }
        updateArcLengths() {
            this.needsUpdate = !0, this.getLengths();
        }
        getUtoTmapping(t1, e) {
            const n = this.getLengths();
            let i = 0;
            const r = n.length;
            let s;
            s = e || t1 * n[r - 1];
            let a, o = 0, l = r - 1;
            for(; o <= l;)if (i = Math.floor(o + (l - o) / 2), a = n[i] - s, a < 0) o = i + 1;
            else {
                if (!(a > 0)) {
                    l = i;
                    break;
                }
                l = i - 1;
            }
            if (i = l, n[i] === s) return i / (r - 1);
            const c = n[i];
            return (i + (s - c) / (n[i + 1] - c)) / (r - 1);
        }
        getTangent(t1, e) {
            const n = 1e-4;
            let i = t1 - n, r = t1 + n;
            i < 0 && (i = 0), r > 1 && (r = 1);
            const s = this.getPoint(i), a = this.getPoint(r), o = e || (s.isVector2 ? new Rt : new se);
            return o.copy(a).sub(s).normalize(), o;
        }
        getTangentAt(t1, e) {
            const n = this.getUtoTmapping(t1);
            return this.getTangent(n, e);
        }
        computeFrenetFrames(t1, e) {
            const n = new se, i = [], r = [], s = [], a = new se, o = new ze;
            for(let e = 0; e <= t1; e++){
                const n = e / t1;
                i[e] = this.getTangentAt(n, new se);
            }
            r[0] = new se, s[0] = new se;
            let l = Number.MAX_VALUE;
            const c = Math.abs(i[0].x), h = Math.abs(i[0].y), u = Math.abs(i[0].z);
            c <= l && (l = c, n.set(1, 0, 0)), h <= l && (l = h, n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);
            for(let e = 1; e <= t1; e++){
                if (r[e] = r[e - 1].clone(), s[e] = s[e - 1].clone(), a.crossVectors(i[e - 1], i[e]), a.length() > Number.EPSILON) {
                    a.normalize();
                    const t1 = Math.acos(bt(i[e - 1].dot(i[e]), -1, 1));
                    r[e].applyMatrix4(o.makeRotationAxis(a, t1));
                }
                s[e].crossVectors(i[e], r[e]);
            }
            if (!0 === e) {
                let e = Math.acos(bt(r[0].dot(r[t1]), -1, 1));
                e /= t1, i[0].dot(a.crossVectors(r[0], r[t1])) > 0 && (e = -e);
                for(let n = 1; n <= t1; n++)r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)), s[n].crossVectors(i[n], r[n]);
            }
            return {
                tangents: i,
                normals: r,
                binormals: s
            };
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.arcLengthDivisions = t1.arcLengthDivisions, this;
        }
        toJSON() {
            const t1 = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return t1.arcLengthDivisions = this.arcLengthDivisions, t1.type = this.type, t1;
        }
        fromJSON(t1) {
            return this.arcLengthDivisions = t1.arcLengthDivisions, this;
        }
    }
    class _o extends xo {
        constructor(t1 = 0, e = 0, n = 1, i = 1, r = 0, s = 2 * Math.PI, a = !1, o = 0){
            super(), this.type = "EllipseCurve", this.aX = t1, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o;
        }
        getPoint(t1, e) {
            const n = e || new Rt, i = 2 * Math.PI;
            let r = this.aEndAngle - this.aStartAngle;
            const s = Math.abs(r) < Number.EPSILON;
            for(; r < 0;)r += i;
            for(; r > i;)r -= i;
            r < Number.EPSILON && (r = s ? 0 : i), !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i);
            const a = this.aStartAngle + t1 * r;
            let o = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
            if (0 !== this.aRotation) {
                const t1 = Math.cos(this.aRotation), e = Math.sin(this.aRotation), n = o - this.aX, i = l - this.aY;
                o = n * t1 - i * e + this.aX, l = n * e + i * t1 + this.aY;
            }
            return n.set(o, l);
        }
        copy(t1) {
            return super.copy(t1), this.aX = t1.aX, this.aY = t1.aY, this.xRadius = t1.xRadius, this.yRadius = t1.yRadius, this.aStartAngle = t1.aStartAngle, this.aEndAngle = t1.aEndAngle, this.aClockwise = t1.aClockwise, this.aRotation = t1.aRotation, this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.aX = this.aX, t1.aY = this.aY, t1.xRadius = this.xRadius, t1.yRadius = this.yRadius, t1.aStartAngle = this.aStartAngle, t1.aEndAngle = this.aEndAngle, t1.aClockwise = this.aClockwise, t1.aRotation = this.aRotation, t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.aX = t1.aX, this.aY = t1.aY, this.xRadius = t1.xRadius, this.yRadius = t1.yRadius, this.aStartAngle = t1.aStartAngle, this.aEndAngle = t1.aEndAngle, this.aClockwise = t1.aClockwise, this.aRotation = t1.aRotation, this;
        }
    }
    _o.prototype.isEllipseCurve = !0;
    class bo extends _o {
        constructor(t1, e, n, i, r, s){
            super(t1, e, n, n, i, r, s), this.type = "ArcCurve";
        }
    }
    function Mo() {
        let t1 = 0, e = 0, n = 0, i = 0;
        function r(r, s, a, o) {
            t1 = r, e = a, n = -3 * r + 3 * s - 2 * a - o, i = 2 * r - 2 * s + a + o;
        }
        return {
            initCatmullRom: function(t1, e, n, i, s) {
                r(e, n, s * (n - t1), s * (i - e));
            },
            initNonuniformCatmullRom: function(t1, e, n, i, s, a, o) {
                let l = (e - t1) / s - (n - t1) / (s + a) + (n - e) / a, c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
                l *= a, c *= a, r(e, n, l, c);
            },
            calc: function(r) {
                const s = r * r;
                return t1 + e * r + n * s + i * (s * r);
            }
        };
    }
    bo.prototype.isArcCurve = !0;
    const wo = new se, So = new Mo, To = new Mo, Eo = new Mo;
    class Ao extends xo {
        constructor(t1 = [], e = !1, n = "centripetal", i = .5){
            super(), this.type = "CatmullRomCurve3", this.points = t1, this.closed = e, this.curveType = n, this.tension = i;
        }
        getPoint(t1, e = new se) {
            const n = e, i = this.points, r = i.length, s = (r - (this.closed ? 0 : 1)) * t1;
            let a, o, l = Math.floor(s), c = s - l;
            this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? a = i[(l - 1) % r] : (wo.subVectors(i[0], i[1]).add(i[0]), a = wo);
            const h = i[l % r], u = i[(l + 1) % r];
            if (this.closed || l + 2 < r ? o = i[(l + 2) % r] : (wo.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), o = wo), "centripetal" === this.curveType || "chordal" === this.curveType) {
                const t1 = "chordal" === this.curveType ? .5 : .25;
                let e = Math.pow(a.distanceToSquared(h), t1), n = Math.pow(h.distanceToSquared(u), t1), i = Math.pow(u.distanceToSquared(o), t1);
                n < 1e-4 && (n = 1), e < 1e-4 && (e = n), i < 1e-4 && (i = n), So.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, n, i), To.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, n, i), Eo.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, n, i);
            } else "catmullrom" === this.curveType && (So.initCatmullRom(a.x, h.x, u.x, o.x, this.tension), To.initCatmullRom(a.y, h.y, u.y, o.y, this.tension), Eo.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
            return n.set(So.calc(c), To.calc(c), Eo.calc(c)), n;
        }
        copy(t1) {
            super.copy(t1), this.points = [];
            for(let e = 0, n = t1.points.length; e < n; e++){
                const n = t1.points[e];
                this.points.push(n.clone());
            }
            return this.closed = t1.closed, this.curveType = t1.curveType, this.tension = t1.tension, this;
        }
        toJSON() {
            const t1 = super.toJSON();
            t1.points = [];
            for(let e = 0, n = this.points.length; e < n; e++){
                const n = this.points[e];
                t1.points.push(n.toArray());
            }
            return t1.closed = this.closed, t1.curveType = this.curveType, t1.tension = this.tension, t1;
        }
        fromJSON(t1) {
            super.fromJSON(t1), this.points = [];
            for(let e = 0, n = t1.points.length; e < n; e++){
                const n = t1.points[e];
                this.points.push((new se).fromArray(n));
            }
            return this.closed = t1.closed, this.curveType = t1.curveType, this.tension = t1.tension, this;
        }
    }
    function Ro(t1, e, n, i, r) {
        const s = .5 * (i - e), a = .5 * (r - n), o = t1 * t1;
        return (2 * n - 2 * i + s + a) * (t1 * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t1 + n;
    }
    function Co(t1, e, n, i) {
        return function(t1, e) {
            const n = 1 - t1;
            return n * n * e;
        }(t1, e) + function(t1, e) {
            return 2 * (1 - t1) * t1 * e;
        }(t1, n) + function(t1, e) {
            return t1 * t1 * e;
        }(t1, i);
    }
    function Lo(t1, e, n, i, r) {
        return function(t1, e) {
            const n = 1 - t1;
            return n * n * n * e;
        }(t1, e) + function(t1, e) {
            const n = 1 - t1;
            return 3 * n * n * t1 * e;
        }(t1, n) + function(t1, e) {
            return 3 * (1 - t1) * t1 * t1 * e;
        }(t1, i) + function(t1, e) {
            return t1 * t1 * t1 * e;
        }(t1, r);
    }
    Ao.prototype.isCatmullRomCurve3 = !0;
    class Po extends xo {
        constructor(t1 = new Rt, e = new Rt, n = new Rt, i = new Rt){
            super(), this.type = "CubicBezierCurve", this.v0 = t1, this.v1 = e, this.v2 = n, this.v3 = i;
        }
        getPoint(t1, e = new Rt) {
            const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
            return n.set(Lo(t1, i.x, r.x, s.x, a.x), Lo(t1, i.y, r.y, s.y, a.y)), n;
        }
        copy(t1) {
            return super.copy(t1), this.v0.copy(t1.v0), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this.v3.copy(t1.v3), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v0 = this.v0.toArray(), t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1.v3 = this.v3.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v0.fromArray(t1.v0), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this.v3.fromArray(t1.v3), this;
        }
    }
    Po.prototype.isCubicBezierCurve = !0;
    class Do extends xo {
        constructor(t1 = new se, e = new se, n = new se, i = new se){
            super(), this.type = "CubicBezierCurve3", this.v0 = t1, this.v1 = e, this.v2 = n, this.v3 = i;
        }
        getPoint(t1, e = new se) {
            const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
            return n.set(Lo(t1, i.x, r.x, s.x, a.x), Lo(t1, i.y, r.y, s.y, a.y), Lo(t1, i.z, r.z, s.z, a.z)), n;
        }
        copy(t1) {
            return super.copy(t1), this.v0.copy(t1.v0), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this.v3.copy(t1.v3), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v0 = this.v0.toArray(), t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1.v3 = this.v3.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v0.fromArray(t1.v0), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this.v3.fromArray(t1.v3), this;
        }
    }
    Do.prototype.isCubicBezierCurve3 = !0;
    class Io extends xo {
        constructor(t1 = new Rt, e = new Rt){
            super(), this.type = "LineCurve", this.v1 = t1, this.v2 = e;
        }
        getPoint(t1, e = new Rt) {
            const n = e;
            return 1 === t1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t1).add(this.v1)), n;
        }
        getPointAt(t1, e) {
            return this.getPoint(t1, e);
        }
        getTangent(t1, e) {
            const n = e || new Rt;
            return n.copy(this.v2).sub(this.v1).normalize(), n;
        }
        copy(t1) {
            return super.copy(t1), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this;
        }
    }
    Io.prototype.isLineCurve = !0;
    class No extends xo {
        constructor(t1 = new se, e = new se){
            super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = t1, this.v2 = e;
        }
        getPoint(t1, e = new se) {
            const n = e;
            return 1 === t1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t1).add(this.v1)), n;
        }
        getPointAt(t1, e) {
            return this.getPoint(t1, e);
        }
        copy(t1) {
            return super.copy(t1), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this;
        }
    }
    class Bo extends xo {
        constructor(t1 = new Rt, e = new Rt, n = new Rt){
            super(), this.type = "QuadraticBezierCurve", this.v0 = t1, this.v1 = e, this.v2 = n;
        }
        getPoint(t1, e = new Rt) {
            const n = e, i = this.v0, r = this.v1, s = this.v2;
            return n.set(Co(t1, i.x, r.x, s.x), Co(t1, i.y, r.y, s.y)), n;
        }
        copy(t1) {
            return super.copy(t1), this.v0.copy(t1.v0), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v0 = this.v0.toArray(), t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v0.fromArray(t1.v0), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this;
        }
    }
    Bo.prototype.isQuadraticBezierCurve = !0;
    class zo extends xo {
        constructor(t1 = new se, e = new se, n = new se){
            super(), this.type = "QuadraticBezierCurve3", this.v0 = t1, this.v1 = e, this.v2 = n;
        }
        getPoint(t1, e = new se) {
            const n = e, i = this.v0, r = this.v1, s = this.v2;
            return n.set(Co(t1, i.x, r.x, s.x), Co(t1, i.y, r.y, s.y), Co(t1, i.z, r.z, s.z)), n;
        }
        copy(t1) {
            return super.copy(t1), this.v0.copy(t1.v0), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v0 = this.v0.toArray(), t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v0.fromArray(t1.v0), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this;
        }
    }
    zo.prototype.isQuadraticBezierCurve3 = !0;
    class Oo extends xo {
        constructor(t1 = []){
            super(), this.type = "SplineCurve", this.points = t1;
        }
        getPoint(t1, e = new Rt) {
            const n = e, i = this.points, r = (i.length - 1) * t1, s = Math.floor(r), a = r - s, o = i[0 === s ? s : s - 1], l = i[s], c = i[s > i.length - 2 ? i.length - 1 : s + 1], h = i[s > i.length - 3 ? i.length - 1 : s + 2];
            return n.set(Ro(a, o.x, l.x, c.x, h.x), Ro(a, o.y, l.y, c.y, h.y)), n;
        }
        copy(t1) {
            super.copy(t1), this.points = [];
            for(let e = 0, n = t1.points.length; e < n; e++){
                const n = t1.points[e];
                this.points.push(n.clone());
            }
            return this;
        }
        toJSON() {
            const t1 = super.toJSON();
            t1.points = [];
            for(let e = 0, n = this.points.length; e < n; e++){
                const n = this.points[e];
                t1.points.push(n.toArray());
            }
            return t1;
        }
        fromJSON(t1) {
            super.fromJSON(t1), this.points = [];
            for(let e = 0, n = t1.points.length; e < n; e++){
                const n = t1.points[e];
                this.points.push((new Rt).fromArray(n));
            }
            return this;
        }
    }
    Oo.prototype.isSplineCurve = !0;
    var Uo = Object.freeze({
        __proto__: null,
        ArcCurve: bo,
        CatmullRomCurve3: Ao,
        CubicBezierCurve: Po,
        CubicBezierCurve3: Do,
        EllipseCurve: _o,
        LineCurve: Io,
        LineCurve3: No,
        QuadraticBezierCurve: Bo,
        QuadraticBezierCurve3: zo,
        SplineCurve: Oo
    });
    class Fo extends xo {
        constructor(){
            super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
        }
        add(t1) {
            this.curves.push(t1);
        }
        closePath() {
            const t1 = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
            t1.equals(e) || this.curves.push(new Io(e, t1));
        }
        getPoint(t1, e) {
            const n = t1 * this.getLength(), i = this.getCurveLengths();
            let r = 0;
            for(; r < i.length;){
                if (i[r] >= n) {
                    const t1 = i[r] - n, s = this.curves[r], a = s.getLength(), o = 0 === a ? 0 : 1 - t1 / a;
                    return s.getPointAt(o, e);
                }
                r++;
            }
            return null;
        }
        getLength() {
            const t1 = this.getCurveLengths();
            return t1[t1.length - 1];
        }
        updateArcLengths() {
            this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
        }
        getCurveLengths() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            const t1 = [];
            let e = 0;
            for(let n = 0, i = this.curves.length; n < i; n++)e += this.curves[n].getLength(), t1.push(e);
            return this.cacheLengths = t1, t1;
        }
        getSpacedPoints(t1 = 40) {
            const e = [];
            for(let n = 0; n <= t1; n++)e.push(this.getPoint(n / t1));
            return this.autoClose && e.push(e[0]), e;
        }
        getPoints(t1 = 12) {
            const e = [];
            let n;
            for(let i = 0, r = this.curves; i < r.length; i++){
                const s = r[i], a = s.isEllipseCurve ? 2 * t1 : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? t1 * s.points.length : t1, o = s.getPoints(a);
                for(let t1 = 0; t1 < o.length; t1++){
                    const i = o[t1];
                    n && n.equals(i) || (e.push(i), n = i);
                }
            }
            return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
        }
        copy(t1) {
            super.copy(t1), this.curves = [];
            for(let e = 0, n = t1.curves.length; e < n; e++){
                const n = t1.curves[e];
                this.curves.push(n.clone());
            }
            return this.autoClose = t1.autoClose, this;
        }
        toJSON() {
            const t1 = super.toJSON();
            t1.autoClose = this.autoClose, t1.curves = [];
            for(let e = 0, n = this.curves.length; e < n; e++){
                const n = this.curves[e];
                t1.curves.push(n.toJSON());
            }
            return t1;
        }
        fromJSON(t1) {
            super.fromJSON(t1), this.autoClose = t1.autoClose, this.curves = [];
            for(let e = 0, n = t1.curves.length; e < n; e++){
                const n = t1.curves[e];
                this.curves.push((new Uo[n.type]).fromJSON(n));
            }
            return this;
        }
    }
    class Ho extends Fo {
        constructor(t1){
            super(), this.type = "Path", this.currentPoint = new Rt, t1 && this.setFromPoints(t1);
        }
        setFromPoints(t1) {
            this.moveTo(t1[0].x, t1[0].y);
            for(let e = 1, n = t1.length; e < n; e++)this.lineTo(t1[e].x, t1[e].y);
            return this;
        }
        moveTo(t1, e) {
            return this.currentPoint.set(t1, e), this;
        }
        lineTo(t1, e) {
            const n = new Io(this.currentPoint.clone(), new Rt(t1, e));
            return this.curves.push(n), this.currentPoint.set(t1, e), this;
        }
        quadraticCurveTo(t1, e, n, i) {
            const r = new Bo(this.currentPoint.clone(), new Rt(t1, e), new Rt(n, i));
            return this.curves.push(r), this.currentPoint.set(n, i), this;
        }
        bezierCurveTo(t1, e, n, i, r, s) {
            const a = new Po(this.currentPoint.clone(), new Rt(t1, e), new Rt(n, i), new Rt(r, s));
            return this.curves.push(a), this.currentPoint.set(r, s), this;
        }
        splineThru(t1) {
            const e = [
                this.currentPoint.clone()
            ].concat(t1), n = new Oo(e);
            return this.curves.push(n), this.currentPoint.copy(t1[t1.length - 1]), this;
        }
        arc(t1, e, n, i, r, s) {
            const a = this.currentPoint.x, o = this.currentPoint.y;
            return this.absarc(t1 + a, e + o, n, i, r, s), this;
        }
        absarc(t1, e, n, i, r, s) {
            return this.absellipse(t1, e, n, n, i, r, s), this;
        }
        ellipse(t1, e, n, i, r, s, a, o) {
            const l = this.currentPoint.x, c = this.currentPoint.y;
            return this.absellipse(t1 + l, e + c, n, i, r, s, a, o), this;
        }
        absellipse(t1, e, n, i, r, s, a, o) {
            const l = new _o(t1, e, n, i, r, s, a, o);
            if (this.curves.length > 0) {
                const t1 = l.getPoint(0);
                t1.equals(this.currentPoint) || this.lineTo(t1.x, t1.y);
            }
            this.curves.push(l);
            const c = l.getPoint(1);
            return this.currentPoint.copy(c), this;
        }
        copy(t1) {
            return super.copy(t1), this.currentPoint.copy(t1.currentPoint), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.currentPoint = this.currentPoint.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.currentPoint.fromArray(t1.currentPoint), this;
        }
    }
    class Go extends Vn {
        constructor(t1 = [
            new Rt(0, .5),
            new Rt(.5, 0),
            new Rt(0, -0.5)
        ], e = 12, n = 0, i = 2 * Math.PI){
            super(), this.type = "LatheGeometry", this.parameters = {
                points: t1,
                segments: e,
                phiStart: n,
                phiLength: i
            }, e = Math.floor(e), i = bt(i, 0, 2 * Math.PI);
            const r = [], s = [], a = [], o = [], l = [], c = 1 / e, h = new se, u = new Rt, d = new se, p = new se, m = new se;
            let f = 0, g = 0;
            for(let e = 0; e <= t1.length - 1; e++)switch(e){
                case 0:
                    f = t1[e + 1].x - t1[e].x, g = t1[e + 1].y - t1[e].y, d.x = 1 * g, d.y = -f, d.z = 0 * g, m.copy(d), d.normalize(), o.push(d.x, d.y, d.z);
                    break;
                case t1.length - 1:
                    o.push(m.x, m.y, m.z);
                    break;
                default:
                    f = t1[e + 1].x - t1[e].x, g = t1[e + 1].y - t1[e].y, d.x = 1 * g, d.y = -f, d.z = 0 * g, p.copy(d), d.x += m.x, d.y += m.y, d.z += m.z, d.normalize(), o.push(d.x, d.y, d.z), m.copy(p);
            }
            for(let r = 0; r <= e; r++){
                const d = n + r * c * i, p = Math.sin(d), m = Math.cos(d);
                for(let n = 0; n <= t1.length - 1; n++){
                    h.x = t1[n].x * p, h.y = t1[n].y, h.z = t1[n].x * m, s.push(h.x, h.y, h.z), u.x = r / e, u.y = n / (t1.length - 1), a.push(u.x, u.y);
                    const i = o[3 * n + 0] * p, c = o[3 * n + 1], d = o[3 * n + 0] * m;
                    l.push(i, c, d);
                }
            }
            for(let n = 0; n < e; n++)for(let e = 0; e < t1.length - 1; e++){
                const i = e + n * t1.length, s = i, a = i + t1.length, o = i + t1.length + 1, l = i + 1;
                r.push(s, a, l), r.push(o, l, a);
            }
            this.setIndex(r), this.setAttribute("position", new Nn(s, 3)), this.setAttribute("uv", new Nn(a, 2)), this.setAttribute("normal", new Nn(l, 3));
        }
        static fromJSON(t1) {
            return new Go(t1.points, t1.segments, t1.phiStart, t1.phiLength);
        }
    }
    class ko extends Go {
        constructor(t1 = 1, e = 1, n = 4, i = 8){
            const r = new Ho;
            r.absarc(0, -e / 2, t1, 1.5 * Math.PI, 0), r.absarc(0, e / 2, t1, 0, .5 * Math.PI), super(r.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = {
                radius: t1,
                height: e,
                capSegments: n,
                radialSegments: i
            };
        }
        static fromJSON(t1) {
            return new ko(t1.radius, t1.length, t1.capSegments, t1.radialSegments);
        }
    }
    class Vo extends Vn {
        constructor(t1 = 1, e = 8, n = 0, i = 2 * Math.PI){
            super(), this.type = "CircleGeometry", this.parameters = {
                radius: t1,
                segments: e,
                thetaStart: n,
                thetaLength: i
            }, e = Math.max(3, e);
            const r = [], s = [], a = [], o = [], l = new se, c = new Rt;
            s.push(0, 0, 0), a.push(0, 0, 1), o.push(.5, .5);
            for(let r = 0, h = 3; r <= e; r++, h += 3){
                const u = n + r / e * i;
                l.x = t1 * Math.cos(u), l.y = t1 * Math.sin(u), s.push(l.x, l.y, l.z), a.push(0, 0, 1), c.x = (s[h] / t1 + 1) / 2, c.y = (s[h + 1] / t1 + 1) / 2, o.push(c.x, c.y);
            }
            for(let t1 = 1; t1 <= e; t1++)r.push(t1, t1 + 1, 0);
            this.setIndex(r), this.setAttribute("position", new Nn(s, 3)), this.setAttribute("normal", new Nn(a, 3)), this.setAttribute("uv", new Nn(o, 2));
        }
        static fromJSON(t1) {
            return new Vo(t1.radius, t1.segments, t1.thetaStart, t1.thetaLength);
        }
    }
    class Wo extends Vn {
        constructor(t1 = 1, e = 1, n = 1, i = 8, r = 1, s = !1, a = 0, o = 2 * Math.PI){
            super(), this.type = "CylinderGeometry", this.parameters = {
                radiusTop: t1,
                radiusBottom: e,
                height: n,
                radialSegments: i,
                heightSegments: r,
                openEnded: s,
                thetaStart: a,
                thetaLength: o
            };
            const l = this;
            i = Math.floor(i), r = Math.floor(r);
            const c = [], h = [], u = [], d = [];
            let p = 0;
            const m = [], f = n / 2;
            let g = 0;
            function v(n) {
                const r = p, s = new Rt, m = new se;
                let v = 0;
                const y = !0 === n ? t1 : e, x = !0 === n ? 1 : -1;
                for(let t1 = 1; t1 <= i; t1++)h.push(0, f * x, 0), u.push(0, x, 0), d.push(.5, .5), p++;
                const _ = p;
                for(let t1 = 0; t1 <= i; t1++){
                    const e = t1 / i * o + a, n = Math.cos(e), r = Math.sin(e);
                    m.x = y * r, m.y = f * x, m.z = y * n, h.push(m.x, m.y, m.z), u.push(0, x, 0), s.x = .5 * n + .5, s.y = .5 * r * x + .5, d.push(s.x, s.y), p++;
                }
                for(let t1 = 0; t1 < i; t1++){
                    const e = r + t1, i = _ + t1;
                    !0 === n ? c.push(i, i + 1, e) : c.push(i + 1, i, e), v += 3;
                }
                l.addGroup(g, v, !0 === n ? 1 : 2), g += v;
            }
            !function() {
                const s = new se, v = new se;
                let y = 0;
                const x = (e - t1) / n;
                for(let l = 0; l <= r; l++){
                    const c = [], g = l / r, y = g * (e - t1) + t1;
                    for(let t1 = 0; t1 <= i; t1++){
                        const e = t1 / i, r = e * o + a, l = Math.sin(r), m = Math.cos(r);
                        v.x = y * l, v.y = -g * n + f, v.z = y * m, h.push(v.x, v.y, v.z), s.set(l, x, m).normalize(), u.push(s.x, s.y, s.z), d.push(e, 1 - g), c.push(p++);
                    }
                    m.push(c);
                }
                for(let t1 = 0; t1 < i; t1++)for(let e = 0; e < r; e++){
                    const n = m[e][t1], i = m[e + 1][t1], r = m[e + 1][t1 + 1], s = m[e][t1 + 1];
                    c.push(n, i, s), c.push(i, r, s), y += 6;
                }
                l.addGroup(g, y, 0), g += y;
            }(), !1 === s && (t1 > 0 && v(!0), e > 0 && v(!1)), this.setIndex(c), this.setAttribute("position", new Nn(h, 3)), this.setAttribute("normal", new Nn(u, 3)), this.setAttribute("uv", new Nn(d, 2));
        }
        static fromJSON(t1) {
            return new Wo(t1.radiusTop, t1.radiusBottom, t1.height, t1.radialSegments, t1.heightSegments, t1.openEnded, t1.thetaStart, t1.thetaLength);
        }
    }
    class jo extends Wo {
        constructor(t1 = 1, e = 1, n = 8, i = 1, r = !1, s = 0, a = 2 * Math.PI){
            super(0, t1, e, n, i, r, s, a), this.type = "ConeGeometry", this.parameters = {
                radius: t1,
                height: e,
                radialSegments: n,
                heightSegments: i,
                openEnded: r,
                thetaStart: s,
                thetaLength: a
            };
        }
        static fromJSON(t1) {
            return new jo(t1.radius, t1.height, t1.radialSegments, t1.heightSegments, t1.openEnded, t1.thetaStart, t1.thetaLength);
        }
    }
    class qo extends Vn {
        constructor(t1 = [], e = [], n = 1, i = 0){
            super(), this.type = "PolyhedronGeometry", this.parameters = {
                vertices: t1,
                indices: e,
                radius: n,
                detail: i
            };
            const r = [], s = [];
            function a(t1, e, n, i) {
                const r = i + 1, s = [];
                for(let i = 0; i <= r; i++){
                    s[i] = [];
                    const a = t1.clone().lerp(n, i / r), o = e.clone().lerp(n, i / r), l = r - i;
                    for(let t1 = 0; t1 <= l; t1++)s[i][t1] = 0 === t1 && i === r ? a : a.clone().lerp(o, t1 / l);
                }
                for(let t1 = 0; t1 < r; t1++)for(let e = 0; e < 2 * (r - t1) - 1; e++){
                    const n = Math.floor(e / 2);
                    e % 2 == 0 ? (o(s[t1][n + 1]), o(s[t1 + 1][n]), o(s[t1][n])) : (o(s[t1][n + 1]), o(s[t1 + 1][n + 1]), o(s[t1 + 1][n]));
                }
            }
            function o(t1) {
                r.push(t1.x, t1.y, t1.z);
            }
            function l(e, n) {
                const i = 3 * e;
                n.x = t1[i + 0], n.y = t1[i + 1], n.z = t1[i + 2];
            }
            function c(t1, e, n, i) {
                i < 0 && 1 === t1.x && (s[e] = t1.x - 1), 0 === n.x && 0 === n.z && (s[e] = i / 2 / Math.PI + .5);
            }
            function h(t1) {
                return Math.atan2(t1.z, -t1.x);
            }
            !function(t1) {
                const n = new se, i = new se, r = new se;
                for(let s = 0; s < e.length; s += 3)l(e[s + 0], n), l(e[s + 1], i), l(e[s + 2], r), a(n, i, r, t1);
            }(i), function(t1) {
                const e = new se;
                for(let n = 0; n < r.length; n += 3)e.x = r[n + 0], e.y = r[n + 1], e.z = r[n + 2], e.normalize().multiplyScalar(t1), r[n + 0] = e.x, r[n + 1] = e.y, r[n + 2] = e.z;
            }(n), function() {
                const t1 = new se;
                for(let n = 0; n < r.length; n += 3){
                    t1.x = r[n + 0], t1.y = r[n + 1], t1.z = r[n + 2];
                    const i = h(t1) / 2 / Math.PI + .5, a = (e = t1, Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5);
                    s.push(i, 1 - a);
                }
                var e;
                (function() {
                    const t1 = new se, e = new se, n = new se, i = new se, a = new Rt, o = new Rt, l = new Rt;
                    for(let u = 0, d = 0; u < r.length; u += 9, d += 6){
                        t1.set(r[u + 0], r[u + 1], r[u + 2]), e.set(r[u + 3], r[u + 4], r[u + 5]), n.set(r[u + 6], r[u + 7], r[u + 8]), a.set(s[d + 0], s[d + 1]), o.set(s[d + 2], s[d + 3]), l.set(s[d + 4], s[d + 5]), i.copy(t1).add(e).add(n).divideScalar(3);
                        const p = h(i);
                        c(a, d + 0, t1, p), c(o, d + 2, e, p), c(l, d + 4, n, p);
                    }
                })(), function() {
                    for(let t1 = 0; t1 < s.length; t1 += 6){
                        const e = s[t1 + 0], n = s[t1 + 2], i = s[t1 + 4], r = Math.max(e, n, i), a = Math.min(e, n, i);
                        r > .9 && a < .1 && (e < .2 && (s[t1 + 0] += 1), n < .2 && (s[t1 + 2] += 1), i < .2 && (s[t1 + 4] += 1));
                    }
                }();
            }(), this.setAttribute("position", new Nn(r, 3)), this.setAttribute("normal", new Nn(r.slice(), 3)), this.setAttribute("uv", new Nn(s, 2)), 0 === i ? this.computeVertexNormals() : this.normalizeNormals();
        }
        static fromJSON(t1) {
            return new qo(t1.vertices, t1.indices, t1.radius, t1.details);
        }
    }
    class Xo extends qo {
        constructor(t1 = 1, e = 0){
            const n = (1 + Math.sqrt(5)) / 2, i = 1 / n;
            super([
                -1,
                -1,
                -1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                -1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                1,
                1,
                -1,
                1,
                1,
                1,
                0,
                -i,
                -n,
                0,
                -i,
                n,
                0,
                i,
                -n,
                0,
                i,
                n,
                -i,
                -n,
                0,
                -i,
                n,
                0,
                i,
                -n,
                0,
                i,
                n,
                0,
                -n,
                0,
                -i,
                n,
                0,
                -i,
                -n,
                0,
                i,
                n,
                0,
                i
            ], [
                3,
                11,
                7,
                3,
                7,
                15,
                3,
                15,
                13,
                7,
                19,
                17,
                7,
                17,
                6,
                7,
                6,
                15,
                17,
                4,
                8,
                17,
                8,
                10,
                17,
                10,
                6,
                8,
                0,
                16,
                8,
                16,
                2,
                8,
                2,
                10,
                0,
                12,
                1,
                0,
                1,
                18,
                0,
                18,
                16,
                6,
                10,
                2,
                6,
                2,
                13,
                6,
                13,
                15,
                2,
                16,
                18,
                2,
                18,
                3,
                2,
                3,
                13,
                18,
                1,
                9,
                18,
                9,
                11,
                18,
                11,
                3,
                4,
                14,
                12,
                4,
                12,
                0,
                4,
                0,
                8,
                11,
                9,
                5,
                11,
                5,
                19,
                11,
                19,
                7,
                19,
                5,
                14,
                19,
                14,
                4,
                19,
                4,
                17,
                1,
                12,
                14,
                1,
                14,
                5,
                1,
                5,
                9
            ], t1, e), this.type = "DodecahedronGeometry", this.parameters = {
                radius: t1,
                detail: e
            };
        }
        static fromJSON(t1) {
            return new Xo(t1.radius, t1.detail);
        }
    }
    const Jo = new se, Yo = new se, Zo = new se, Ko = new xn;
    class Qo extends Vn {
        constructor(t1 = null, e = 1){
            if (super(), this.type = "EdgesGeometry", this.parameters = {
                geometry: t1,
                thresholdAngle: e
            }, null !== t1) {
                const n = 4, i = Math.pow(10, n), r = Math.cos(yt * e), s = t1.getIndex(), a = t1.getAttribute("position"), o = s ? s.count : a.count, l = [
                    0,
                    0,
                    0
                ], c = [
                    "a",
                    "b",
                    "c"
                ], h = new Array(3), u = {}, d = [];
                for(let t1 = 0; t1 < o; t1 += 3){
                    s ? (l[0] = s.getX(t1), l[1] = s.getX(t1 + 1), l[2] = s.getX(t1 + 2)) : (l[0] = t1, l[1] = t1 + 1, l[2] = t1 + 2);
                    const { a: e , b: n , c: o  } = Ko;
                    if (e.fromBufferAttribute(a, l[0]), n.fromBufferAttribute(a, l[1]), o.fromBufferAttribute(a, l[2]), Ko.getNormal(Zo), h[0] = `${Math.round(e.x * i)},${Math.round(e.y * i)},${Math.round(e.z * i)}`, h[1] = `${Math.round(n.x * i)},${Math.round(n.y * i)},${Math.round(n.z * i)}`, h[2] = `${Math.round(o.x * i)},${Math.round(o.y * i)},${Math.round(o.z * i)}`, h[0] !== h[1] && h[1] !== h[2] && h[2] !== h[0]) for(let t1 = 0; t1 < 3; t1++){
                        const e = (t1 + 1) % 3, n = h[t1], i = h[e], s = Ko[c[t1]], a = Ko[c[e]], o = `${n}_${i}`, p = `${i}_${n}`;
                        p in u && u[p] ? (Zo.dot(u[p].normal) <= r && (d.push(s.x, s.y, s.z), d.push(a.x, a.y, a.z)), u[p] = null) : o in u || (u[o] = {
                            index0: l[t1],
                            index1: l[e],
                            normal: Zo.clone()
                        });
                    }
                }
                for(const t1 in u)if (u[t1]) {
                    const { index0: e , index1: n  } = u[t1];
                    Jo.fromBufferAttribute(a, e), Yo.fromBufferAttribute(a, n), d.push(Jo.x, Jo.y, Jo.z), d.push(Yo.x, Yo.y, Yo.z);
                }
                this.setAttribute("position", new Nn(d, 3));
            }
        }
    }
    class $o extends Ho {
        constructor(t1){
            super(t1), this.uuid = _t(), this.type = "Shape", this.holes = [];
        }
        getPointsHoles(t1) {
            const e = [];
            for(let n = 0, i = this.holes.length; n < i; n++)e[n] = this.holes[n].getPoints(t1);
            return e;
        }
        extractPoints(t1) {
            return {
                shape: this.getPoints(t1),
                holes: this.getPointsHoles(t1)
            };
        }
        copy(t1) {
            super.copy(t1), this.holes = [];
            for(let e = 0, n = t1.holes.length; e < n; e++){
                const n = t1.holes[e];
                this.holes.push(n.clone());
            }
            return this;
        }
        toJSON() {
            const t1 = super.toJSON();
            t1.uuid = this.uuid, t1.holes = [];
            for(let e = 0, n = this.holes.length; e < n; e++){
                const n = this.holes[e];
                t1.holes.push(n.toJSON());
            }
            return t1;
        }
        fromJSON(t1) {
            super.fromJSON(t1), this.uuid = t1.uuid, this.holes = [];
            for(let e = 0, n = t1.holes.length; e < n; e++){
                const n = t1.holes[e];
                this.holes.push((new Ho).fromJSON(n));
            }
            return this;
        }
    }
    const tl = function(t1, e, n = 2) {
        const i = e && e.length, r = i ? e[0] * n : t1.length;
        let s = el(t1, 0, r, n, !0);
        const a = [];
        if (!s || s.next === s.prev) return a;
        let o, l, c, h, u, d, p;
        if (i && (s = function(t1, e, n, i) {
            const r = [];
            let s, a, o, l, c;
            for(s = 0, a = e.length; s < a; s++)o = e[s] * i, l = s < a - 1 ? e[s + 1] * i : t1.length, c = el(t1, o, l, i, !1), c === c.next && (c.steiner = !0), r.push(dl(c));
            for(r.sort(ll), s = 0; s < r.length; s++)cl(r[s], n), n = nl(n, n.next);
            return n;
        }(t1, e, s, n)), t1.length > 80 * n) {
            o = c = t1[0], l = h = t1[1];
            for(let e = n; e < r; e += n)u = t1[e], d = t1[e + 1], u < o && (o = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
            p = Math.max(c - o, h - l), p = 0 !== p ? 1 / p : 0;
        }
        return il(s, a, n, o, l, p), a;
    };
    function el(t1, e, n, i, r) {
        let s, a;
        if (r === function(t1, e, n, i) {
            let r = 0;
            for(let s = e, a = n - i; s < n; s += i)r += (t1[a] - t1[s]) * (t1[s + 1] + t1[a + 1]), a = s;
            return r;
        }(t1, e, n, i) > 0) for(s = e; s < n; s += i)a = Ml(s, t1[s], t1[s + 1], a);
        else for(s = n - i; s >= e; s -= i)a = Ml(s, t1[s], t1[s + 1], a);
        return a && gl(a, a.next) && (wl(a), a = a.next), a;
    }
    function nl(t1, e) {
        if (!t1) return t1;
        e || (e = t1);
        let n, i = t1;
        do if (n = !1, i.steiner || !gl(i, i.next) && 0 !== fl(i.prev, i, i.next)) i = i.next;
        else {
            if (wl(i), i = e = i.prev, i === i.next) break;
            n = !0;
        }
        while (n || i !== e);
        return e;
    }
    function il(t1, e, n, i, r, s, a) {
        if (!t1) return;
        !a && s && function(t1, e, n, i) {
            let r = t1;
            do null === r.z && (r.z = ul(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
            while (r !== t1);
            r.prevZ.nextZ = null, r.prevZ = null, function(t1) {
                let e, n, i, r, s, a, o, l, c = 1;
                do {
                    for(n = t1, t1 = null, s = null, a = 0; n;){
                        for(a++, i = n, o = 0, e = 0; e < c && (o++, i = i.nextZ, i); e++);
                        for(l = c; o > 0 || l > 0 && i;)0 !== o && (0 === l || !i || n.z <= i.z) ? (r = n, n = n.nextZ, o--) : (r = i, i = i.nextZ, l--), s ? s.nextZ = r : t1 = r, r.prevZ = s, s = r;
                        n = i;
                    }
                    s.nextZ = null, c *= 2;
                }while (a > 1);
            }(r);
        }(t1, i, r, s);
        let o, l, c = t1;
        for(; t1.prev !== t1.next;)if (o = t1.prev, l = t1.next, s ? sl(t1, i, r, s) : rl(t1)) e.push(o.i / n), e.push(t1.i / n), e.push(l.i / n), wl(t1), t1 = l.next, c = l.next;
        else if ((t1 = l) === c) {
            a ? 1 === a ? il(t1 = al(nl(t1), e, n), e, n, i, r, s, 2) : 2 === a && ol(t1, e, n, i, r, s) : il(nl(t1), e, n, i, r, s, 1);
            break;
        }
    }
    function rl(t1) {
        const e = t1.prev, n = t1, i = t1.next;
        if (fl(e, n, i) >= 0) return !1;
        let r = t1.next.next;
        for(; r !== t1.prev;){
            if (pl(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && fl(r.prev, r, r.next) >= 0) return !1;
            r = r.next;
        }
        return !0;
    }
    function sl(t1, e, n, i) {
        const r = t1.prev, s = t1, a = t1.next;
        if (fl(r, s, a) >= 0) return !1;
        const o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x, l = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y, c = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x, h = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y, u = ul(o, l, e, n, i), d = ul(c, h, e, n, i);
        let p = t1.prevZ, m = t1.nextZ;
        for(; p && p.z >= u && m && m.z <= d;){
            if (p !== t1.prev && p !== t1.next && pl(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && fl(p.prev, p, p.next) >= 0) return !1;
            if (p = p.prevZ, m !== t1.prev && m !== t1.next && pl(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && fl(m.prev, m, m.next) >= 0) return !1;
            m = m.nextZ;
        }
        for(; p && p.z >= u;){
            if (p !== t1.prev && p !== t1.next && pl(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && fl(p.prev, p, p.next) >= 0) return !1;
            p = p.prevZ;
        }
        for(; m && m.z <= d;){
            if (m !== t1.prev && m !== t1.next && pl(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && fl(m.prev, m, m.next) >= 0) return !1;
            m = m.nextZ;
        }
        return !0;
    }
    function al(t1, e, n) {
        let i = t1;
        do {
            const r = i.prev, s = i.next.next;
            !gl(r, s) && vl(r, i, i.next, s) && _l(r, s) && _l(s, r) && (e.push(r.i / n), e.push(i.i / n), e.push(s.i / n), wl(i), wl(i.next), i = t1 = s), i = i.next;
        }while (i !== t1);
        return nl(i);
    }
    function ol(t1, e, n, i, r, s) {
        let a = t1;
        do {
            let t1 = a.next.next;
            for(; t1 !== a.prev;){
                if (a.i !== t1.i && ml(a, t1)) {
                    let o = bl(a, t1);
                    return a = nl(a, a.next), o = nl(o, o.next), il(a, e, n, i, r, s), void il(o, e, n, i, r, s);
                }
                t1 = t1.next;
            }
            a = a.next;
        }while (a !== t1);
    }
    function ll(t1, e) {
        return t1.x - e.x;
    }
    function cl(t1, e) {
        if (e = function(t1, e) {
            let n = e;
            const i = t1.x, r = t1.y;
            let s, a = -1 / 0;
            do {
                if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
                    const t1 = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                    if (t1 <= i && t1 > a) {
                        if (a = t1, t1 === i) {
                            if (r === n.y) return n;
                            if (r === n.next.y) return n.next;
                        }
                        s = n.x < n.next.x ? n : n.next;
                    }
                }
                n = n.next;
            }while (n !== e);
            if (!s) return null;
            if (i === a) return s;
            const o = s, l = s.x, c = s.y;
            let h, u = 1 / 0;
            n = s;
            do i >= n.x && n.x >= l && i !== n.x && pl(r < c ? i : a, r, l, c, r < c ? a : i, r, n.x, n.y) && (h = Math.abs(r - n.y) / (i - n.x), _l(n, t1) && (h < u || h === u && (n.x > s.x || n.x === s.x && hl(s, n))) && (s = n, u = h)), n = n.next;
            while (n !== o);
            return s;
        }(t1, e), e) {
            const n = bl(e, t1);
            nl(e, e.next), nl(n, n.next);
        }
    }
    function hl(t1, e) {
        return fl(t1.prev, t1, e.prev) < 0 && fl(e.next, t1, t1.next) < 0;
    }
    function ul(t1, e, n, i, r) {
        return (t1 = 1431655765 & ((t1 = 858993459 & ((t1 = 252645135 & ((t1 = 16711935 & ((t1 = 32767 * (t1 - n) * r) | t1 << 8)) | t1 << 4)) | t1 << 2)) | t1 << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
    }
    function dl(t1) {
        let e = t1, n = t1;
        do (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next;
        while (e !== t1);
        return n;
    }
    function pl(t1, e, n, i, r, s, a, o) {
        return (r - a) * (e - o) - (t1 - a) * (s - o) >= 0 && (t1 - a) * (i - o) - (n - a) * (e - o) >= 0 && (n - a) * (s - o) - (r - a) * (i - o) >= 0;
    }
    function ml(t1, e) {
        return t1.next.i !== e.i && t1.prev.i !== e.i && !function(t1, e) {
            let n = t1;
            do {
                if (n.i !== t1.i && n.next.i !== t1.i && n.i !== e.i && n.next.i !== e.i && vl(n, n.next, t1, e)) return !0;
                n = n.next;
            }while (n !== t1);
            return !1;
        }(t1, e) && (_l(t1, e) && _l(e, t1) && function(t1, e) {
            let n = t1, i = !1;
            const r = (t1.x + e.x) / 2, s = (t1.y + e.y) / 2;
            do n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next;
            while (n !== t1);
            return i;
        }(t1, e) && (fl(t1.prev, t1, e.prev) || fl(t1, e.prev, e)) || gl(t1, e) && fl(t1.prev, t1, t1.next) > 0 && fl(e.prev, e, e.next) > 0);
    }
    function fl(t1, e, n) {
        return (e.y - t1.y) * (n.x - e.x) - (e.x - t1.x) * (n.y - e.y);
    }
    function gl(t1, e) {
        return t1.x === e.x && t1.y === e.y;
    }
    function vl(t1, e, n, i) {
        const r = xl(fl(t1, e, n)), s = xl(fl(t1, e, i)), a = xl(fl(n, i, t1)), o = xl(fl(n, i, e));
        return r !== s && a !== o || !(0 !== r || !yl(t1, n, e)) || !(0 !== s || !yl(t1, i, e)) || !(0 !== a || !yl(n, t1, i)) || !(0 !== o || !yl(n, e, i));
    }
    function yl(t1, e, n) {
        return e.x <= Math.max(t1.x, n.x) && e.x >= Math.min(t1.x, n.x) && e.y <= Math.max(t1.y, n.y) && e.y >= Math.min(t1.y, n.y);
    }
    function xl(t1) {
        return t1 > 0 ? 1 : t1 < 0 ? -1 : 0;
    }
    function _l(t1, e) {
        return fl(t1.prev, t1, t1.next) < 0 ? fl(t1, e, t1.next) >= 0 && fl(t1, t1.prev, e) >= 0 : fl(t1, e, t1.prev) < 0 || fl(t1, t1.next, e) < 0;
    }
    function bl(t1, e) {
        const n = new Sl(t1.i, t1.x, t1.y), i = new Sl(e.i, e.x, e.y), r = t1.next, s = e.prev;
        return t1.next = e, e.prev = t1, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i;
    }
    function Ml(t1, e, n, i) {
        const r = new Sl(t1, e, n);
        return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
    }
    function wl(t1) {
        t1.next.prev = t1.prev, t1.prev.next = t1.next, t1.prevZ && (t1.prevZ.nextZ = t1.nextZ), t1.nextZ && (t1.nextZ.prevZ = t1.prevZ);
    }
    function Sl(t1, e, n) {
        this.i = t1, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
    }
    class Tl {
        static area(t1) {
            const e = t1.length;
            let n = 0;
            for(let i = e - 1, r = 0; r < e; i = r++)n += t1[i].x * t1[r].y - t1[r].x * t1[i].y;
            return .5 * n;
        }
        static isClockWise(t1) {
            return Tl.area(t1) < 0;
        }
        static triangulateShape(t1, e) {
            const n = [], i = [], r = [];
            El(t1), Al(n, t1);
            let s = t1.length;
            e.forEach(El);
            for(let t1 = 0; t1 < e.length; t1++)i.push(s), s += e[t1].length, Al(n, e[t1]);
            const a = tl(n, i);
            for(let t1 = 0; t1 < a.length; t1 += 3)r.push(a.slice(t1, t1 + 3));
            return r;
        }
    }
    function El(t1) {
        const e = t1.length;
        e > 2 && t1[e - 1].equals(t1[0]) && t1.pop();
    }
    function Al(t1, e) {
        for(let n = 0; n < e.length; n++)t1.push(e[n].x), t1.push(e[n].y);
    }
    class Rl extends Vn {
        constructor(t1 = new $o([
            new Rt(.5, .5),
            new Rt(-0.5, .5),
            new Rt(-0.5, -0.5),
            new Rt(.5, -0.5)
        ]), e = {}){
            super(), this.type = "ExtrudeGeometry", this.parameters = {
                shapes: t1,
                options: e
            }, t1 = Array.isArray(t1) ? t1 : [
                t1
            ];
            const n = this, i = [], r = [];
            for(let e = 0, n = t1.length; e < n; e++)s(t1[e]);
            function s(t1) {
                const s = [], a = void 0 !== e.curveSegments ? e.curveSegments : 12, o = void 0 !== e.steps ? e.steps : 1;
                let l = void 0 !== e.depth ? e.depth : 1, c = void 0 === e.bevelEnabled || e.bevelEnabled, h = void 0 !== e.bevelThickness ? e.bevelThickness : .2, u = void 0 !== e.bevelSize ? e.bevelSize : h - .1, d = void 0 !== e.bevelOffset ? e.bevelOffset : 0, p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
                const m = e.extrudePath, f = void 0 !== e.UVGenerator ? e.UVGenerator : Cl;
                void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l = e.amount);
                let g, v, y, x, _, b = !1;
                m && (g = m.getSpacedPoints(o), b = !0, c = !1, v = m.computeFrenetFrames(o, !1), y = new se, x = new se, _ = new se), c || (p = 0, h = 0, u = 0, d = 0);
                const M = t1.extractPoints(a);
                let w = M.shape;
                const S = M.holes;
                if (!Tl.isClockWise(w)) {
                    w = w.reverse();
                    for(let t1 = 0, e = S.length; t1 < e; t1++){
                        const e = S[t1];
                        Tl.isClockWise(e) && (S[t1] = e.reverse());
                    }
                }
                const T = Tl.triangulateShape(w, S), E = w;
                for(let t1 = 0, e = S.length; t1 < e; t1++){
                    const e = S[t1];
                    w = w.concat(e);
                }
                function A(t1, e, n) {
                    return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t1);
                }
                const R = w.length, C = T.length;
                function L(t1, e, n) {
                    let i, r, s;
                    const a = t1.x - e.x, o = t1.y - e.y, l = n.x - t1.x, c = n.y - t1.y, h = a * a + o * o, u = a * c - o * l;
                    if (Math.abs(u) > Number.EPSILON) {
                        const u = Math.sqrt(h), d = Math.sqrt(l * l + c * c), p = e.x - o / u, m = e.y + a / u, f = ((n.x - c / d - p) * c - (n.y + l / d - m) * l) / (a * c - o * l);
                        i = p + a * f - t1.x, r = m + o * f - t1.y;
                        const g = i * i + r * r;
                        if (g <= 2) return new Rt(i, r);
                        s = Math.sqrt(g / 2);
                    } else {
                        let t1 = !1;
                        a > Number.EPSILON ? l > Number.EPSILON && (t1 = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t1 = !0) : Math.sign(o) === Math.sign(c) && (t1 = !0), t1 ? (i = -o, r = a, s = Math.sqrt(h)) : (i = a, r = o, s = Math.sqrt(h / 2));
                    }
                    return new Rt(i / s, r / s);
                }
                const P = [];
                for(let t1 = 0, e = E.length, n = e - 1, i = t1 + 1; t1 < e; t1++, n++, i++)n === e && (n = 0), i === e && (i = 0), P[t1] = L(E[t1], E[n], E[i]);
                const D = [];
                let I, N = P.concat();
                for(let t1 = 0, e = S.length; t1 < e; t1++){
                    const e = S[t1];
                    I = [];
                    for(let t1 = 0, n = e.length, i = n - 1, r = t1 + 1; t1 < n; t1++, i++, r++)i === n && (i = 0), r === n && (r = 0), I[t1] = L(e[t1], e[i], e[r]);
                    D.push(I), N = N.concat(I);
                }
                for(let t1 = 0; t1 < p; t1++){
                    const e = t1 / p, n = h * Math.cos(e * Math.PI / 2), i = u * Math.sin(e * Math.PI / 2) + d;
                    for(let t1 = 0, e = E.length; t1 < e; t1++){
                        const e = A(E[t1], P[t1], i);
                        O(e.x, e.y, -n);
                    }
                    for(let t1 = 0, e = S.length; t1 < e; t1++){
                        const e = S[t1];
                        I = D[t1];
                        for(let t1 = 0, r = e.length; t1 < r; t1++){
                            const r = A(e[t1], I[t1], i);
                            O(r.x, r.y, -n);
                        }
                    }
                }
                const B = u + d;
                for(let t1 = 0; t1 < R; t1++){
                    const e = c ? A(w[t1], N[t1], B) : w[t1];
                    b ? (x.copy(v.normals[0]).multiplyScalar(e.x), y.copy(v.binormals[0]).multiplyScalar(e.y), _.copy(g[0]).add(x).add(y), O(_.x, _.y, _.z)) : O(e.x, e.y, 0);
                }
                for(let t1 = 1; t1 <= o; t1++)for(let e = 0; e < R; e++){
                    const n = c ? A(w[e], N[e], B) : w[e];
                    b ? (x.copy(v.normals[t1]).multiplyScalar(n.x), y.copy(v.binormals[t1]).multiplyScalar(n.y), _.copy(g[t1]).add(x).add(y), O(_.x, _.y, _.z)) : O(n.x, n.y, l / o * t1);
                }
                for(let t1 = p - 1; t1 >= 0; t1--){
                    const e = t1 / p, n = h * Math.cos(e * Math.PI / 2), i = u * Math.sin(e * Math.PI / 2) + d;
                    for(let t1 = 0, e = E.length; t1 < e; t1++){
                        const e = A(E[t1], P[t1], i);
                        O(e.x, e.y, l + n);
                    }
                    for(let t1 = 0, e = S.length; t1 < e; t1++){
                        const e = S[t1];
                        I = D[t1];
                        for(let t1 = 0, r = e.length; t1 < r; t1++){
                            const r = A(e[t1], I[t1], i);
                            b ? O(r.x, r.y + g[o - 1].y, g[o - 1].x + n) : O(r.x, r.y, l + n);
                        }
                    }
                }
                function z(t1, e) {
                    let n = t1.length;
                    for(; --n >= 0;){
                        const i = n;
                        let r = n - 1;
                        r < 0 && (r = t1.length - 1);
                        for(let t1 = 0, n = o + 2 * p; t1 < n; t1++){
                            const n = R * t1, s = R * (t1 + 1);
                            F(e + i + n, e + r + n, e + r + s, e + i + s);
                        }
                    }
                }
                function O(t1, e, n) {
                    s.push(t1), s.push(e), s.push(n);
                }
                function U(t1, e, r) {
                    H(t1), H(e), H(r);
                    const s = i.length / 3, a = f.generateTopUV(n, i, s - 3, s - 2, s - 1);
                    G(a[0]), G(a[1]), G(a[2]);
                }
                function F(t1, e, r, s) {
                    H(t1), H(e), H(s), H(e), H(r), H(s);
                    const a = i.length / 3, o = f.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
                    G(o[0]), G(o[1]), G(o[3]), G(o[1]), G(o[2]), G(o[3]);
                }
                function H(t1) {
                    i.push(s[3 * t1 + 0]), i.push(s[3 * t1 + 1]), i.push(s[3 * t1 + 2]);
                }
                function G(t1) {
                    r.push(t1.x), r.push(t1.y);
                }
                !function() {
                    const t1 = i.length / 3;
                    if (c) {
                        let t1 = 0, e = R * t1;
                        for(let t1 = 0; t1 < C; t1++){
                            const n = T[t1];
                            U(n[2] + e, n[1] + e, n[0] + e);
                        }
                        t1 = o + 2 * p, e = R * t1;
                        for(let t1 = 0; t1 < C; t1++){
                            const n = T[t1];
                            U(n[0] + e, n[1] + e, n[2] + e);
                        }
                    } else {
                        for(let t1 = 0; t1 < C; t1++){
                            const e = T[t1];
                            U(e[2], e[1], e[0]);
                        }
                        for(let t1 = 0; t1 < C; t1++){
                            const e = T[t1];
                            U(e[0] + R * o, e[1] + R * o, e[2] + R * o);
                        }
                    }
                    n.addGroup(t1, i.length / 3 - t1, 0);
                }(), function() {
                    const t1 = i.length / 3;
                    let e = 0;
                    z(E, e), e += E.length;
                    for(let t1 = 0, n = S.length; t1 < n; t1++){
                        const n = S[t1];
                        z(n, e), e += n.length;
                    }
                    n.addGroup(t1, i.length / 3 - t1, 1);
                }();
            }
            this.setAttribute("position", new Nn(i, 3)), this.setAttribute("uv", new Nn(r, 2)), this.computeVertexNormals();
        }
        toJSON() {
            const t1 = super.toJSON();
            return function(t1, e, n) {
                if (n.shapes = [], Array.isArray(t1)) for(let e = 0, i = t1.length; e < i; e++){
                    const i = t1[e];
                    n.shapes.push(i.uuid);
                }
                else n.shapes.push(t1.uuid);
                void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
                return n;
            }(this.parameters.shapes, this.parameters.options, t1);
        }
        static fromJSON(t1, e) {
            const n = [];
            for(let i = 0, r = t1.shapes.length; i < r; i++){
                const r = e[t1.shapes[i]];
                n.push(r);
            }
            const i = t1.options.extrudePath;
            return void 0 !== i && (t1.options.extrudePath = (new Uo[i.type]).fromJSON(i)), new Rl(n, t1.options);
        }
    }
    const Cl = {
        generateTopUV: function(t1, e, n, i, r) {
            const s = e[3 * n], a = e[3 * n + 1], o = e[3 * i], l = e[3 * i + 1], c = e[3 * r], h = e[3 * r + 1];
            return [
                new Rt(s, a),
                new Rt(o, l),
                new Rt(c, h)
            ];
        },
        generateSideWallUV: function(t1, e, n, i, r, s) {
            const a = e[3 * n], o = e[3 * n + 1], l = e[3 * n + 2], c = e[3 * i], h = e[3 * i + 1], u = e[3 * i + 2], d = e[3 * r], p = e[3 * r + 1], m = e[3 * r + 2], f = e[3 * s], g = e[3 * s + 1], v = e[3 * s + 2];
            return Math.abs(o - h) < Math.abs(a - c) ? [
                new Rt(a, 1 - l),
                new Rt(c, 1 - u),
                new Rt(d, 1 - m),
                new Rt(f, 1 - v)
            ] : [
                new Rt(o, 1 - l),
                new Rt(h, 1 - u),
                new Rt(p, 1 - m),
                new Rt(g, 1 - v)
            ];
        }
    };
    class Ll extends qo {
        constructor(t1 = 1, e = 0){
            const n = (1 + Math.sqrt(5)) / 2;
            super([
                -1,
                n,
                0,
                1,
                n,
                0,
                -1,
                -n,
                0,
                1,
                -n,
                0,
                0,
                -1,
                n,
                0,
                1,
                n,
                0,
                -1,
                -n,
                0,
                1,
                -n,
                n,
                0,
                -1,
                n,
                0,
                1,
                -n,
                0,
                -1,
                -n,
                0,
                1
            ], [
                0,
                11,
                5,
                0,
                5,
                1,
                0,
                1,
                7,
                0,
                7,
                10,
                0,
                10,
                11,
                1,
                5,
                9,
                5,
                11,
                4,
                11,
                10,
                2,
                10,
                7,
                6,
                7,
                1,
                8,
                3,
                9,
                4,
                3,
                4,
                2,
                3,
                2,
                6,
                3,
                6,
                8,
                3,
                8,
                9,
                4,
                9,
                5,
                2,
                4,
                11,
                6,
                2,
                10,
                8,
                6,
                7,
                9,
                8,
                1
            ], t1, e), this.type = "IcosahedronGeometry", this.parameters = {
                radius: t1,
                detail: e
            };
        }
        static fromJSON(t1) {
            return new Ll(t1.radius, t1.detail);
        }
    }
    class Pl extends qo {
        constructor(t1 = 1, e = 0){
            super([
                1,
                0,
                0,
                -1,
                0,
                0,
                0,
                1,
                0,
                0,
                -1,
                0,
                0,
                0,
                1,
                0,
                0,
                -1
            ], [
                0,
                2,
                4,
                0,
                4,
                3,
                0,
                3,
                5,
                0,
                5,
                2,
                1,
                2,
                5,
                1,
                5,
                3,
                1,
                3,
                4,
                1,
                4,
                2
            ], t1, e), this.type = "OctahedronGeometry", this.parameters = {
                radius: t1,
                detail: e
            };
        }
        static fromJSON(t1) {
            return new Pl(t1.radius, t1.detail);
        }
    }
    class Dl extends Vn {
        constructor(t1 = .5, e = 1, n = 8, i = 1, r = 0, s = 2 * Math.PI){
            super(), this.type = "RingGeometry", this.parameters = {
                innerRadius: t1,
                outerRadius: e,
                thetaSegments: n,
                phiSegments: i,
                thetaStart: r,
                thetaLength: s
            }, n = Math.max(3, n);
            const a = [], o = [], l = [], c = [];
            let h = t1;
            const u = (e - t1) / (i = Math.max(1, i)), d = new se, p = new Rt;
            for(let t1 = 0; t1 <= i; t1++){
                for(let t1 = 0; t1 <= n; t1++){
                    const i = r + t1 / n * s;
                    d.x = h * Math.cos(i), d.y = h * Math.sin(i), o.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / e + 1) / 2, p.y = (d.y / e + 1) / 2, c.push(p.x, p.y);
                }
                h += u;
            }
            for(let t1 = 0; t1 < i; t1++){
                const e = t1 * (n + 1);
                for(let t1 = 0; t1 < n; t1++){
                    const i = t1 + e, r = i, s = i + n + 1, o = i + n + 2, l = i + 1;
                    a.push(r, s, l), a.push(s, o, l);
                }
            }
            this.setIndex(a), this.setAttribute("position", new Nn(o, 3)), this.setAttribute("normal", new Nn(l, 3)), this.setAttribute("uv", new Nn(c, 2));
        }
        static fromJSON(t1) {
            return new Dl(t1.innerRadius, t1.outerRadius, t1.thetaSegments, t1.phiSegments, t1.thetaStart, t1.thetaLength);
        }
    }
    class Il extends Vn {
        constructor(t1 = new $o([
            new Rt(0, .5),
            new Rt(-0.5, -0.5),
            new Rt(.5, -0.5)
        ]), e = 12){
            super(), this.type = "ShapeGeometry", this.parameters = {
                shapes: t1,
                curveSegments: e
            };
            const n = [], i = [], r = [], s = [];
            let a = 0, o = 0;
            if (!1 === Array.isArray(t1)) l(t1);
            else for(let e = 0; e < t1.length; e++)l(t1[e]), this.addGroup(a, o, e), a += o, o = 0;
            function l(t1) {
                const a = i.length / 3, l = t1.extractPoints(e);
                let c = l.shape;
                const h = l.holes;
                !1 === Tl.isClockWise(c) && (c = c.reverse());
                for(let t1 = 0, e = h.length; t1 < e; t1++){
                    const e = h[t1];
                    !0 === Tl.isClockWise(e) && (h[t1] = e.reverse());
                }
                const u = Tl.triangulateShape(c, h);
                for(let t1 = 0, e = h.length; t1 < e; t1++){
                    const e = h[t1];
                    c = c.concat(e);
                }
                for(let t1 = 0, e = c.length; t1 < e; t1++){
                    const e = c[t1];
                    i.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y);
                }
                for(let t1 = 0, e = u.length; t1 < e; t1++){
                    const e = u[t1], i = e[0] + a, r = e[1] + a, s = e[2] + a;
                    n.push(i, r, s), o += 3;
                }
            }
            this.setIndex(n), this.setAttribute("position", new Nn(i, 3)), this.setAttribute("normal", new Nn(r, 3)), this.setAttribute("uv", new Nn(s, 2));
        }
        toJSON() {
            const t1 = super.toJSON();
            return function(t1, e) {
                if (e.shapes = [], Array.isArray(t1)) for(let n = 0, i = t1.length; n < i; n++){
                    const i = t1[n];
                    e.shapes.push(i.uuid);
                }
                else e.shapes.push(t1.uuid);
                return e;
            }(this.parameters.shapes, t1);
        }
        static fromJSON(t1, e) {
            const n = [];
            for(let i = 0, r = t1.shapes.length; i < r; i++){
                const r = e[t1.shapes[i]];
                n.push(r);
            }
            return new Il(n, t1.curveSegments);
        }
    }
    class Nl extends Vn {
        constructor(t1 = 1, e = 32, n = 16, i = 0, r = 2 * Math.PI, s = 0, a = Math.PI){
            super(), this.type = "SphereGeometry", this.parameters = {
                radius: t1,
                widthSegments: e,
                heightSegments: n,
                phiStart: i,
                phiLength: r,
                thetaStart: s,
                thetaLength: a
            }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
            const o = Math.min(s + a, Math.PI);
            let l = 0;
            const c = [], h = new se, u = new se, d = [], p = [], m = [], f = [];
            for(let d = 0; d <= n; d++){
                const g = [], v = d / n;
                let y = 0;
                0 == d && 0 == s ? y = .5 / e : d == n && o == Math.PI && (y = -0.5 / e);
                for(let n = 0; n <= e; n++){
                    const o = n / e;
                    h.x = -t1 * Math.cos(i + o * r) * Math.sin(s + v * a), h.y = t1 * Math.cos(s + v * a), h.z = t1 * Math.sin(i + o * r) * Math.sin(s + v * a), p.push(h.x, h.y, h.z), u.copy(h).normalize(), m.push(u.x, u.y, u.z), f.push(o + y, 1 - v), g.push(l++);
                }
                c.push(g);
            }
            for(let t1 = 0; t1 < n; t1++)for(let i = 0; i < e; i++){
                const e = c[t1][i + 1], r = c[t1][i], a = c[t1 + 1][i], l = c[t1 + 1][i + 1];
                (0 !== t1 || s > 0) && d.push(e, r, l), (t1 !== n - 1 || o < Math.PI) && d.push(r, a, l);
            }
            this.setIndex(d), this.setAttribute("position", new Nn(p, 3)), this.setAttribute("normal", new Nn(m, 3)), this.setAttribute("uv", new Nn(f, 2));
        }
        static fromJSON(t1) {
            return new Nl(t1.radius, t1.widthSegments, t1.heightSegments, t1.phiStart, t1.phiLength, t1.thetaStart, t1.thetaLength);
        }
    }
    class Bl extends qo {
        constructor(t1 = 1, e = 0){
            super([
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                1,
                -1,
                -1
            ], [
                2,
                1,
                0,
                0,
                3,
                2,
                1,
                3,
                0,
                2,
                3,
                1
            ], t1, e), this.type = "TetrahedronGeometry", this.parameters = {
                radius: t1,
                detail: e
            };
        }
        static fromJSON(t1) {
            return new Bl(t1.radius, t1.detail);
        }
    }
    class zl extends Vn {
        constructor(t1 = 1, e = .4, n = 8, i = 6, r = 2 * Math.PI){
            super(), this.type = "TorusGeometry", this.parameters = {
                radius: t1,
                tube: e,
                radialSegments: n,
                tubularSegments: i,
                arc: r
            }, n = Math.floor(n), i = Math.floor(i);
            const s = [], a = [], o = [], l = [], c = new se, h = new se, u = new se;
            for(let s = 0; s <= n; s++)for(let d = 0; d <= i; d++){
                const p = d / i * r, m = s / n * Math.PI * 2;
                h.x = (t1 + e * Math.cos(m)) * Math.cos(p), h.y = (t1 + e * Math.cos(m)) * Math.sin(p), h.z = e * Math.sin(m), a.push(h.x, h.y, h.z), c.x = t1 * Math.cos(p), c.y = t1 * Math.sin(p), u.subVectors(h, c).normalize(), o.push(u.x, u.y, u.z), l.push(d / i), l.push(s / n);
            }
            for(let t1 = 1; t1 <= n; t1++)for(let e = 1; e <= i; e++){
                const n = (i + 1) * t1 + e - 1, r = (i + 1) * (t1 - 1) + e - 1, a = (i + 1) * (t1 - 1) + e, o = (i + 1) * t1 + e;
                s.push(n, r, o), s.push(r, a, o);
            }
            this.setIndex(s), this.setAttribute("position", new Nn(a, 3)), this.setAttribute("normal", new Nn(o, 3)), this.setAttribute("uv", new Nn(l, 2));
        }
        static fromJSON(t1) {
            return new zl(t1.radius, t1.tube, t1.radialSegments, t1.tubularSegments, t1.arc);
        }
    }
    class Ol extends Vn {
        constructor(t1 = 1, e = .4, n = 64, i = 8, r = 2, s = 3){
            super(), this.type = "TorusKnotGeometry", this.parameters = {
                radius: t1,
                tube: e,
                tubularSegments: n,
                radialSegments: i,
                p: r,
                q: s
            }, n = Math.floor(n), i = Math.floor(i);
            const a = [], o = [], l = [], c = [], h = new se, u = new se, d = new se, p = new se, m = new se, f = new se, g = new se;
            for(let a = 0; a <= n; ++a){
                const y = a / n * r * Math.PI * 2;
                v(y, r, s, t1, d), v(y + .01, r, s, t1, p), f.subVectors(p, d), g.addVectors(p, d), m.crossVectors(f, g), g.crossVectors(m, f), m.normalize(), g.normalize();
                for(let t1 = 0; t1 <= i; ++t1){
                    const r = t1 / i * Math.PI * 2, s = -e * Math.cos(r), p = e * Math.sin(r);
                    h.x = d.x + (s * g.x + p * m.x), h.y = d.y + (s * g.y + p * m.y), h.z = d.z + (s * g.z + p * m.z), o.push(h.x, h.y, h.z), u.subVectors(h, d).normalize(), l.push(u.x, u.y, u.z), c.push(a / n), c.push(t1 / i);
                }
            }
            for(let t1 = 1; t1 <= n; t1++)for(let e = 1; e <= i; e++){
                const n = (i + 1) * (t1 - 1) + (e - 1), r = (i + 1) * t1 + (e - 1), s = (i + 1) * t1 + e, o = (i + 1) * (t1 - 1) + e;
                a.push(n, r, o), a.push(r, s, o);
            }
            function v(t1, e, n, i, r) {
                const s = Math.cos(t1), a = Math.sin(t1), o = n / e * t1, l = Math.cos(o);
                r.x = i * (2 + l) * .5 * s, r.y = i * (2 + l) * a * .5, r.z = i * Math.sin(o) * .5;
            }
            this.setIndex(a), this.setAttribute("position", new Nn(o, 3)), this.setAttribute("normal", new Nn(l, 3)), this.setAttribute("uv", new Nn(c, 2));
        }
        static fromJSON(t1) {
            return new Ol(t1.radius, t1.tube, t1.tubularSegments, t1.radialSegments, t1.p, t1.q);
        }
    }
    class Ul extends Vn {
        constructor(t1 = new zo(new se(-1, -1, 0), new se(-1, 1, 0), new se(1, 1, 0)), e = 64, n = 1, i = 8, r = !1){
            super(), this.type = "TubeGeometry", this.parameters = {
                path: t1,
                tubularSegments: e,
                radius: n,
                radialSegments: i,
                closed: r
            };
            const s = t1.computeFrenetFrames(e, r);
            this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals;
            const a = new se, o = new se, l = new Rt;
            let c = new se;
            const h = [], u = [], d = [], p = [];
            function m(r) {
                c = t1.getPointAt(r / e, c);
                const l = s.normals[r], d = s.binormals[r];
                for(let t1 = 0; t1 <= i; t1++){
                    const e = t1 / i * Math.PI * 2, r = Math.sin(e), s = -Math.cos(e);
                    o.x = s * l.x + r * d.x, o.y = s * l.y + r * d.y, o.z = s * l.z + r * d.z, o.normalize(), u.push(o.x, o.y, o.z), a.x = c.x + n * o.x, a.y = c.y + n * o.y, a.z = c.z + n * o.z, h.push(a.x, a.y, a.z);
                }
            }
            !function() {
                for(let t1 = 0; t1 < e; t1++)m(t1);
                m(!1 === r ? e : 0), function() {
                    for(let t1 = 0; t1 <= e; t1++)for(let n = 0; n <= i; n++)l.x = t1 / e, l.y = n / i, d.push(l.x, l.y);
                }(), function() {
                    for(let t1 = 1; t1 <= e; t1++)for(let e = 1; e <= i; e++){
                        const n = (i + 1) * (t1 - 1) + (e - 1), r = (i + 1) * t1 + (e - 1), s = (i + 1) * t1 + e, a = (i + 1) * (t1 - 1) + e;
                        p.push(n, r, a), p.push(r, s, a);
                    }
                }();
            }(), this.setIndex(p), this.setAttribute("position", new Nn(h, 3)), this.setAttribute("normal", new Nn(u, 3)), this.setAttribute("uv", new Nn(d, 2));
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.path = this.parameters.path.toJSON(), t1;
        }
        static fromJSON(t1) {
            return new Ul((new Uo[t1.path.type]).fromJSON(t1.path), t1.tubularSegments, t1.radius, t1.radialSegments, t1.closed);
        }
    }
    class Fl extends Vn {
        constructor(t1 = null){
            if (super(), this.type = "WireframeGeometry", this.parameters = {
                geometry: t1
            }, null !== t1) {
                const e = [], n = new Set, i = new se, r = new se;
                if (null !== t1.index) {
                    const s = t1.attributes.position, a = t1.index;
                    let o = t1.groups;
                    0 === o.length && (o = [
                        {
                            start: 0,
                            count: a.count,
                            materialIndex: 0
                        }
                    ]);
                    for(let t1 = 0, l = o.length; t1 < l; ++t1){
                        const l = o[t1], c = l.start;
                        for(let t1 = c, o = c + l.count; t1 < o; t1 += 3)for(let o = 0; o < 3; o++){
                            const l = a.getX(t1 + o), c = a.getX(t1 + (o + 1) % 3);
                            i.fromBufferAttribute(s, l), r.fromBufferAttribute(s, c), !0 === Hl(i, r, n) && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
                        }
                    }
                } else {
                    const s = t1.attributes.position;
                    for(let t1 = 0, a = s.count / 3; t1 < a; t1++)for(let a = 0; a < 3; a++){
                        const o = 3 * t1 + a, l = 3 * t1 + (a + 1) % 3;
                        i.fromBufferAttribute(s, o), r.fromBufferAttribute(s, l), !0 === Hl(i, r, n) && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
                    }
                }
                this.setAttribute("position", new Nn(e, 3));
            }
        }
    }
    function Hl(t1, e, n) {
        const i = `${t1.x},${t1.y},${t1.z}-${e.x},${e.y},${e.z}`, r = `${e.x},${e.y},${e.z}-${t1.x},${t1.y},${t1.z}`;
        return !0 !== n.has(i) && !0 !== n.has(r) && (n.add(i), n.add(r), !0);
    }
    var Gl = Object.freeze({
        __proto__: null,
        BoxGeometry: ci,
        BoxBufferGeometry: ci,
        CapsuleGeometry: ko,
        CapsuleBufferGeometry: ko,
        CircleGeometry: Vo,
        CircleBufferGeometry: Vo,
        ConeGeometry: jo,
        ConeBufferGeometry: jo,
        CylinderGeometry: Wo,
        CylinderBufferGeometry: Wo,
        DodecahedronGeometry: Xo,
        DodecahedronBufferGeometry: Xo,
        EdgesGeometry: Qo,
        ExtrudeGeometry: Rl,
        ExtrudeBufferGeometry: Rl,
        IcosahedronGeometry: Ll,
        IcosahedronBufferGeometry: Ll,
        LatheGeometry: Go,
        LatheBufferGeometry: Go,
        OctahedronGeometry: Pl,
        OctahedronBufferGeometry: Pl,
        PlaneGeometry: Ci,
        PlaneBufferGeometry: Ci,
        PolyhedronGeometry: qo,
        PolyhedronBufferGeometry: qo,
        RingGeometry: Dl,
        RingBufferGeometry: Dl,
        ShapeGeometry: Il,
        ShapeBufferGeometry: Il,
        SphereGeometry: Nl,
        SphereBufferGeometry: Nl,
        TetrahedronGeometry: Bl,
        TetrahedronBufferGeometry: Bl,
        TorusGeometry: zl,
        TorusBufferGeometry: zl,
        TorusKnotGeometry: Ol,
        TorusKnotBufferGeometry: Ol,
        TubeGeometry: Ul,
        TubeBufferGeometry: Ul,
        WireframeGeometry: Fl
    });
    class kl extends bn {
        constructor(t1){
            super(), this.type = "ShadowMaterial", this.color = new Wt(0), this.transparent = !0, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.fog = t1.fog, this;
        }
    }
    kl.prototype.isShadowMaterial = !0;
    class Vl extends pi {
        constructor(t1){
            super(t1), this.type = "RawShaderMaterial";
        }
    }
    Vl.prototype.isRawShaderMaterial = !0;
    class Wl extends bn {
        constructor(t1){
            super(), this.defines = {
                STANDARD: ""
            }, this.type = "MeshStandardMaterial", this.color = new Wt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.defines = {
                STANDARD: ""
            }, this.color.copy(t1.color), this.roughness = t1.roughness, this.metalness = t1.metalness, this.map = t1.map, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.emissive.copy(t1.emissive), this.emissiveMap = t1.emissiveMap, this.emissiveIntensity = t1.emissiveIntensity, this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.roughnessMap = t1.roughnessMap, this.metalnessMap = t1.metalnessMap, this.alphaMap = t1.alphaMap, this.envMap = t1.envMap, this.envMapIntensity = t1.envMapIntensity, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.flatShading = t1.flatShading, this.fog = t1.fog, this;
        }
    }
    Wl.prototype.isMeshStandardMaterial = !0;
    class jl extends Wl {
        constructor(t1){
            super(), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Rt(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
                get: function() {
                    return bt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
                },
                set: function(t1) {
                    this.ior = (1 + .4 * t1) / (1 - .4 * t1);
                }
            }), this.sheenColor = new Wt(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new Wt(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Wt(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._transmission = 0, this.setValues(t1);
        }
        get sheen() {
            return this._sheen;
        }
        set sheen(t1) {
            this._sheen > 0 != t1 > 0 && this.version++, this._sheen = t1;
        }
        get clearcoat() {
            return this._clearcoat;
        }
        set clearcoat(t1) {
            this._clearcoat > 0 != t1 > 0 && this.version++, this._clearcoat = t1;
        }
        get transmission() {
            return this._transmission;
        }
        set transmission(t1) {
            this._transmission > 0 != t1 > 0 && this.version++, this._transmission = t1;
        }
        copy(t1) {
            return super.copy(t1), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.clearcoat = t1.clearcoat, this.clearcoatMap = t1.clearcoatMap, this.clearcoatRoughness = t1.clearcoatRoughness, this.clearcoatRoughnessMap = t1.clearcoatRoughnessMap, this.clearcoatNormalMap = t1.clearcoatNormalMap, this.clearcoatNormalScale.copy(t1.clearcoatNormalScale), this.ior = t1.ior, this.sheen = t1.sheen, this.sheenColor.copy(t1.sheenColor), this.sheenColorMap = t1.sheenColorMap, this.sheenRoughness = t1.sheenRoughness, this.sheenRoughnessMap = t1.sheenRoughnessMap, this.transmission = t1.transmission, this.transmissionMap = t1.transmissionMap, this.thickness = t1.thickness, this.thicknessMap = t1.thicknessMap, this.attenuationDistance = t1.attenuationDistance, this.attenuationColor.copy(t1.attenuationColor), this.specularIntensity = t1.specularIntensity, this.specularIntensityMap = t1.specularIntensityMap, this.specularColor.copy(t1.specularColor), this.specularColorMap = t1.specularColorMap, this;
        }
    }
    jl.prototype.isMeshPhysicalMaterial = !0;
    class ql extends bn {
        constructor(t1){
            super(), this.type = "MeshPhongMaterial", this.color = new Wt(16777215), this.specular = new Wt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.specular.copy(t1.specular), this.shininess = t1.shininess, this.map = t1.map, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.emissive.copy(t1.emissive), this.emissiveMap = t1.emissiveMap, this.emissiveIntensity = t1.emissiveIntensity, this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.specularMap = t1.specularMap, this.alphaMap = t1.alphaMap, this.envMap = t1.envMap, this.combine = t1.combine, this.reflectivity = t1.reflectivity, this.refractionRatio = t1.refractionRatio, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.flatShading = t1.flatShading, this.fog = t1.fog, this;
        }
    }
    ql.prototype.isMeshPhongMaterial = !0;
    class Xl extends bn {
        constructor(t1){
            super(), this.defines = {
                TOON: ""
            }, this.type = "MeshToonMaterial", this.color = new Wt(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.gradientMap = t1.gradientMap, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.emissive.copy(t1.emissive), this.emissiveMap = t1.emissiveMap, this.emissiveIntensity = t1.emissiveIntensity, this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.alphaMap = t1.alphaMap, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.fog = t1.fog, this;
        }
    }
    Xl.prototype.isMeshToonMaterial = !0;
    class Jl extends bn {
        constructor(t1){
            super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.flatShading = t1.flatShading, this;
        }
    }
    Jl.prototype.isMeshNormalMaterial = !0;
    class Yl extends bn {
        constructor(t1){
            super(), this.type = "MeshLambertMaterial", this.color = new Wt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.emissive.copy(t1.emissive), this.emissiveMap = t1.emissiveMap, this.emissiveIntensity = t1.emissiveIntensity, this.specularMap = t1.specularMap, this.alphaMap = t1.alphaMap, this.envMap = t1.envMap, this.combine = t1.combine, this.reflectivity = t1.reflectivity, this.refractionRatio = t1.refractionRatio, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.fog = t1.fog, this;
        }
    }
    Yl.prototype.isMeshLambertMaterial = !0;
    class Zl extends bn {
        constructor(t1){
            super(), this.defines = {
                MATCAP: ""
            }, this.type = "MeshMatcapMaterial", this.color = new Wt(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.defines = {
                MATCAP: ""
            }, this.color.copy(t1.color), this.matcap = t1.matcap, this.map = t1.map, this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.alphaMap = t1.alphaMap, this.flatShading = t1.flatShading, this.fog = t1.fog, this;
        }
    }
    Zl.prototype.isMeshMatcapMaterial = !0;
    class Kl extends Za {
        constructor(t1){
            super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.scale = t1.scale, this.dashSize = t1.dashSize, this.gapSize = t1.gapSize, this;
        }
    }
    Kl.prototype.isLineDashedMaterial = !0;
    const Ql = {
        ShadowMaterial: kl,
        SpriteMaterial: ma,
        RawShaderMaterial: Vl,
        ShaderMaterial: pi,
        PointsMaterial: oo,
        MeshPhysicalMaterial: jl,
        MeshStandardMaterial: Wl,
        MeshPhongMaterial: ql,
        MeshToonMaterial: Xl,
        MeshNormalMaterial: Jl,
        MeshLambertMaterial: Yl,
        MeshDepthMaterial: Xs,
        MeshDistanceMaterial: Js,
        MeshBasicMaterial: Mn,
        MeshMatcapMaterial: Zl,
        LineDashedMaterial: Kl,
        LineBasicMaterial: Za,
        Material: bn
    };
    bn.fromType = function(t1) {
        return new Ql[t1];
    };
    const $l = {
        arraySlice: function(t1, e, n) {
            return $l.isTypedArray(t1) ? new t1.constructor(t1.subarray(e, void 0 !== n ? n : t1.length)) : t1.slice(e, n);
        },
        convertArray: function(t1, e, n) {
            return !t1 || !n && t1.constructor === e ? t1 : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t1) : Array.prototype.slice.call(t1);
        },
        isTypedArray: function(t1) {
            return ArrayBuffer.isView(t1) && !(t1 instanceof DataView);
        },
        getKeyframeOrder: function(t1) {
            const e = t1.length, n = new Array(e);
            for(let t1 = 0; t1 !== e; ++t1)n[t1] = t1;
            return n.sort(function(e, n) {
                return t1[e] - t1[n];
            }), n;
        },
        sortedArray: function(t1, e, n) {
            const i = t1.length, r = new t1.constructor(i);
            for(let s = 0, a = 0; a !== i; ++s){
                const i = n[s] * e;
                for(let n = 0; n !== e; ++n)r[a++] = t1[i + n];
            }
            return r;
        },
        flattenJSON: function(t1, e, n, i) {
            let r = 1, s = t1[0];
            for(; void 0 !== s && void 0 === s[i];)s = t1[r++];
            if (void 0 === s) return;
            let a = s[i];
            if (void 0 !== a) {
                if (Array.isArray(a)) do a = s[i], void 0 !== a && (e.push(s.time), n.push.apply(n, a)), s = t1[r++];
                while (void 0 !== s);
                else if (void 0 !== a.toArray) do a = s[i], void 0 !== a && (e.push(s.time), a.toArray(n, n.length)), s = t1[r++];
                while (void 0 !== s);
                else do a = s[i], void 0 !== a && (e.push(s.time), n.push(a)), s = t1[r++];
                while (void 0 !== s);
            }
        },
        subclip: function(t1, e, n, i, r = 30) {
            const s = t1.clone();
            s.name = e;
            const a = [];
            for(let t1 = 0; t1 < s.tracks.length; ++t1){
                const e = s.tracks[t1], o = e.getValueSize(), l = [], c = [];
                for(let t1 = 0; t1 < e.times.length; ++t1){
                    const s = e.times[t1] * r;
                    if (!(s < n || s >= i)) {
                        l.push(e.times[t1]);
                        for(let n = 0; n < o; ++n)c.push(e.values[t1 * o + n]);
                    }
                }
                0 !== l.length && (e.times = $l.convertArray(l, e.times.constructor), e.values = $l.convertArray(c, e.values.constructor), a.push(e));
            }
            s.tracks = a;
            let o = 1 / 0;
            for(let t1 = 0; t1 < s.tracks.length; ++t1)o > s.tracks[t1].times[0] && (o = s.tracks[t1].times[0]);
            for(let t1 = 0; t1 < s.tracks.length; ++t1)s.tracks[t1].shift(-1 * o);
            return s.resetDuration(), s;
        },
        makeClipAdditive: function(t1, e = 0, n = t1, i = 30) {
            i <= 0 && (i = 30);
            const r = n.tracks.length, s = e / i;
            for(let e = 0; e < r; ++e){
                const i = n.tracks[e], r = i.ValueTypeName;
                if ("bool" === r || "string" === r) continue;
                const a = t1.tracks.find(function(t1) {
                    return t1.name === i.name && t1.ValueTypeName === r;
                });
                if (void 0 === a) continue;
                let o = 0;
                const l = i.getValueSize();
                i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
                let c = 0;
                const h = a.getValueSize();
                a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
                const u = i.times.length - 1;
                let d;
                if (s <= i.times[0]) {
                    const t1 = o, e = l - o;
                    d = $l.arraySlice(i.values, t1, e);
                } else if (s >= i.times[u]) {
                    const t1 = u * l + o, e = t1 + l - o;
                    d = $l.arraySlice(i.values, t1, e);
                } else {
                    const t1 = i.createInterpolant(), e = o, n = l - o;
                    t1.evaluate(s), d = $l.arraySlice(t1.resultBuffer, e, n);
                }
                if ("quaternion" === r) (new re).fromArray(d).normalize().conjugate().toArray(d);
                const p = a.times.length;
                for(let t1 = 0; t1 < p; ++t1){
                    const e = t1 * h + c;
                    if ("quaternion" === r) re.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
                    else {
                        const t1 = h - 2 * c;
                        for(let n = 0; n < t1; ++n)a.values[e + n] -= d[n];
                    }
                }
            }
            return t1.blendMode = st, t1;
        }
    };
    class tc {
        constructor(t1, e, n, i){
            this.parameterPositions = t1, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
        }
        evaluate(t1) {
            const e = this.parameterPositions;
            let n = this._cachedIndex, i = e[n], r = e[n - 1];
            t: {
                e: {
                    let s;
                    n: {
                        i: if (!(t1 < i)) {
                            for(let s = n + 2;;){
                                if (void 0 === i) {
                                    if (t1 < r) break i;
                                    return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t1, r);
                                }
                                if (n === s) break;
                                if (r = i, i = e[++n], t1 < i) break e;
                            }
                            s = e.length;
                            break n;
                        }
                        if (t1 >= r) break t;
                        {
                            const a = e[1];
                            t1 < a && (n = 2, r = a);
                            for(let s = n - 2;;){
                                if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t1, i);
                                if (n === s) break;
                                if (i = r, r = e[--n - 1], t1 >= r) break e;
                            }
                            s = n, n = 0;
                        }
                    }
                    for(; n < s;){
                        const i = n + s >>> 1;
                        t1 < e[i] ? s = i : n = i + 1;
                    }
                    if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t1, i);
                    if (void 0 === i) return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, r, t1);
                }
                this._cachedIndex = n, this.intervalChanged_(n, r, i);
            }
            return this.interpolate_(n, r, t1, i);
        }
        getSettings_() {
            return this.settings || this.DefaultSettings_;
        }
        copySampleValue_(t1) {
            const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t1 * i;
            for(let t1 = 0; t1 !== i; ++t1)e[t1] = n[r + t1];
            return e;
        }
        interpolate_() {
            throw new Error("call to abstract method");
        }
        intervalChanged_() {}
    }
    tc.prototype.beforeStart_ = tc.prototype.copySampleValue_, tc.prototype.afterEnd_ = tc.prototype.copySampleValue_;
    class ec extends tc {
        constructor(t1, e, n, i){
            super(t1, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
                endingStart: et,
                endingEnd: et
            };
        }
        intervalChanged_(t1, e, n) {
            const i = this.parameterPositions;
            let r = t1 - 2, s = t1 + 1, a = i[r], o = i[s];
            if (void 0 === a) switch(this.getSettings_().endingStart){
                case nt:
                    r = t1, a = 2 * e - n;
                    break;
                case it:
                    r = i.length - 2, a = e + i[r] - i[r + 1];
                    break;
                default:
                    r = t1, a = n;
            }
            if (void 0 === o) switch(this.getSettings_().endingEnd){
                case nt:
                    s = t1, o = 2 * n - e;
                    break;
                case it:
                    s = 1, o = n + i[1] - i[0];
                    break;
                default:
                    s = t1 - 1, o = e;
            }
            const l = .5 * (n - e), c = this.valueSize;
            this._weightPrev = l / (e - a), this._weightNext = l / (o - n), this._offsetPrev = r * c, this._offsetNext = s * c;
        }
        interpolate_(t1, e, n, i) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t1 * a, l = o - a, c = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (n - e) / (i - e), m = p * p, f = m * p, g = -u * f + 2 * u * m - u * p, v = (1 + u) * f + (-1.5 - 2 * u) * m + (-0.5 + u) * p + 1, y = (-1 - d) * f + (1.5 + d) * m + .5 * p, x = d * f - d * m;
            for(let t1 = 0; t1 !== a; ++t1)r[t1] = g * s[c + t1] + v * s[l + t1] + y * s[o + t1] + x * s[h + t1];
            return r;
        }
    }
    class nc extends tc {
        constructor(t1, e, n, i){
            super(t1, e, n, i);
        }
        interpolate_(t1, e, n, i) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t1 * a, l = o - a, c = (n - e) / (i - e), h = 1 - c;
            for(let t1 = 0; t1 !== a; ++t1)r[t1] = s[l + t1] * h + s[o + t1] * c;
            return r;
        }
    }
    class ic extends tc {
        constructor(t1, e, n, i){
            super(t1, e, n, i);
        }
        interpolate_(t1) {
            return this.copySampleValue_(t1 - 1);
        }
    }
    class rc {
        constructor(t1, e, n, i){
            if (void 0 === t1) throw new Error("THREE.KeyframeTrack: track name is undefined");
            if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t1);
            this.name = t1, this.times = $l.convertArray(e, this.TimeBufferType), this.values = $l.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
        }
        static toJSON(t1) {
            const e = t1.constructor;
            let n;
            if (e.toJSON !== this.toJSON) n = e.toJSON(t1);
            else {
                n = {
                    name: t1.name,
                    times: $l.convertArray(t1.times, Array),
                    values: $l.convertArray(t1.values, Array)
                };
                const e = t1.getInterpolation();
                e !== t1.DefaultInterpolation && (n.interpolation = e);
            }
            return n.type = t1.ValueTypeName, n;
        }
        InterpolantFactoryMethodDiscrete(t1) {
            return new ic(this.times, this.values, this.getValueSize(), t1);
        }
        InterpolantFactoryMethodLinear(t1) {
            return new nc(this.times, this.values, this.getValueSize(), t1);
        }
        InterpolantFactoryMethodSmooth(t1) {
            return new ec(this.times, this.values, this.getValueSize(), t1);
        }
        setInterpolation(t1) {
            let e;
            switch(t1){
                case Q:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case $:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case tt:
                    e = this.InterpolantFactoryMethodSmooth;
            }
            if (void 0 === e) {
                const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t1 === this.DefaultInterpolation) throw new Error(e);
                    this.setInterpolation(this.DefaultInterpolation);
                }
                return console.warn("THREE.KeyframeTrack:", e), this;
            }
            return this.createInterpolant = e, this;
        }
        getInterpolation() {
            switch(this.createInterpolant){
                case this.InterpolantFactoryMethodDiscrete:
                    return Q;
                case this.InterpolantFactoryMethodLinear:
                    return $;
                case this.InterpolantFactoryMethodSmooth:
                    return tt;
            }
        }
        getValueSize() {
            return this.values.length / this.times.length;
        }
        shift(t1) {
            if (0 !== t1) {
                const e = this.times;
                for(let n = 0, i = e.length; n !== i; ++n)e[n] += t1;
            }
            return this;
        }
        scale(t1) {
            if (1 !== t1) {
                const e = this.times;
                for(let n = 0, i = e.length; n !== i; ++n)e[n] *= t1;
            }
            return this;
        }
        trim(t1, e) {
            const n = this.times, i = n.length;
            let r = 0, s = i - 1;
            for(; r !== i && n[r] < t1;)++r;
            for(; -1 !== s && n[s] > e;)--s;
            if (++s, 0 !== r || s !== i) {
                r >= s && (s = Math.max(s, 1), r = s - 1);
                const t1 = this.getValueSize();
                this.times = $l.arraySlice(n, r, s), this.values = $l.arraySlice(this.values, r * t1, s * t1);
            }
            return this;
        }
        validate() {
            let t1 = !0;
            const e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t1 = !1);
            const n = this.times, i = this.values, r = n.length;
            0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t1 = !1);
            let s = null;
            for(let e = 0; e !== r; e++){
                const i = n[e];
                if ("number" == typeof i && isNaN(i)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i), t1 = !1;
                    break;
                }
                if (null !== s && s > i) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, s), t1 = !1;
                    break;
                }
                s = i;
            }
            if (void 0 !== i && $l.isTypedArray(i)) for(let e = 0, n = i.length; e !== n; ++e){
                const n = i[e];
                if (isNaN(n)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n), t1 = !1;
                    break;
                }
            }
            return t1;
        }
        optimize() {
            const t1 = $l.arraySlice(this.times), e = $l.arraySlice(this.values), n = this.getValueSize(), i = this.getInterpolation() === tt, r = t1.length - 1;
            let s = 1;
            for(let a = 1; a < r; ++a){
                let r = !1;
                const o = t1[a];
                if (o !== t1[a + 1] && (1 !== a || o !== t1[0])) {
                    if (i) r = !0;
                    else {
                        const t1 = a * n, i = t1 - n, s = t1 + n;
                        for(let a = 0; a !== n; ++a){
                            const n = e[t1 + a];
                            if (n !== e[i + a] || n !== e[s + a]) {
                                r = !0;
                                break;
                            }
                        }
                    }
                }
                if (r) {
                    if (a !== s) {
                        t1[s] = t1[a];
                        const i = a * n, r = s * n;
                        for(let t1 = 0; t1 !== n; ++t1)e[r + t1] = e[i + t1];
                    }
                    ++s;
                }
            }
            if (r > 0) {
                t1[s] = t1[r];
                for(let t1 = r * n, i = s * n, a = 0; a !== n; ++a)e[i + a] = e[t1 + a];
                ++s;
            }
            return s !== t1.length ? (this.times = $l.arraySlice(t1, 0, s), this.values = $l.arraySlice(e, 0, s * n)) : (this.times = t1, this.values = e), this;
        }
        clone() {
            const t1 = $l.arraySlice(this.times, 0), e = $l.arraySlice(this.values, 0), n = new this.constructor(this.name, t1, e);
            return n.createInterpolant = this.createInterpolant, n;
        }
    }
    rc.prototype.TimeBufferType = Float32Array, rc.prototype.ValueBufferType = Float32Array, rc.prototype.DefaultInterpolation = $;
    class sc extends rc {
    }
    sc.prototype.ValueTypeName = "bool", sc.prototype.ValueBufferType = Array, sc.prototype.DefaultInterpolation = Q, sc.prototype.InterpolantFactoryMethodLinear = void 0, sc.prototype.InterpolantFactoryMethodSmooth = void 0;
    class ac extends rc {
    }
    ac.prototype.ValueTypeName = "color";
    class oc extends rc {
    }
    oc.prototype.ValueTypeName = "number";
    class lc extends tc {
        constructor(t1, e, n, i){
            super(t1, e, n, i);
        }
        interpolate_(t1, e, n, i) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (n - e) / (i - e);
            let l = t1 * a;
            for(let t1 = l + a; l !== t1; l += 4)re.slerpFlat(r, 0, s, l - a, s, l, o);
            return r;
        }
    }
    class cc extends rc {
        InterpolantFactoryMethodLinear(t1) {
            return new lc(this.times, this.values, this.getValueSize(), t1);
        }
    }
    cc.prototype.ValueTypeName = "quaternion", cc.prototype.DefaultInterpolation = $, cc.prototype.InterpolantFactoryMethodSmooth = void 0;
    class hc extends rc {
    }
    hc.prototype.ValueTypeName = "string", hc.prototype.ValueBufferType = Array, hc.prototype.DefaultInterpolation = Q, hc.prototype.InterpolantFactoryMethodLinear = void 0, hc.prototype.InterpolantFactoryMethodSmooth = void 0;
    class uc extends rc {
    }
    uc.prototype.ValueTypeName = "vector";
    class dc {
        constructor(t1, e = -1, n, i = 2500){
            this.name = t1, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = _t(), this.duration < 0 && this.resetDuration();
        }
        static parse(t1) {
            const e = [], n = t1.tracks, i = 1 / (t1.fps || 1);
            for(let t1 = 0, r = n.length; t1 !== r; ++t1)e.push(pc(n[t1]).scale(i));
            const r = new this(t1.name, t1.duration, e, t1.blendMode);
            return r.uuid = t1.uuid, r;
        }
        static toJSON(t1) {
            const e = [], n = t1.tracks, i = {
                name: t1.name,
                duration: t1.duration,
                tracks: e,
                uuid: t1.uuid,
                blendMode: t1.blendMode
            };
            for(let t1 = 0, i = n.length; t1 !== i; ++t1)e.push(rc.toJSON(n[t1]));
            return i;
        }
        static CreateFromMorphTargetSequence(t1, e, n, i) {
            const r = e.length, s = [];
            for(let t1 = 0; t1 < r; t1++){
                let a = [], o = [];
                a.push((t1 + r - 1) % r, t1, (t1 + 1) % r), o.push(0, 1, 0);
                const l = $l.getKeyframeOrder(a);
                a = $l.sortedArray(a, 1, l), o = $l.sortedArray(o, 1, l), i || 0 !== a[0] || (a.push(r), o.push(o[0])), s.push(new oc(".morphTargetInfluences[" + e[t1].name + "]", a, o).scale(1 / n));
            }
            return new this(t1, -1, s);
        }
        static findByName(t1, e) {
            let n = t1;
            if (!Array.isArray(t1)) {
                const e = t1;
                n = e.geometry && e.geometry.animations || e.animations;
            }
            for(let t1 = 0; t1 < n.length; t1++)if (n[t1].name === e) return n[t1];
            return null;
        }
        static CreateClipsFromMorphTargetSequences(t1, e, n) {
            const i = {}, r = /^([\w-]*?)([\d]+)$/;
            for(let e = 0, n = t1.length; e < n; e++){
                const n = t1[e], s = n.name.match(r);
                if (s && s.length > 1) {
                    const t1 = s[1];
                    let e = i[t1];
                    e || (i[t1] = e = []), e.push(n);
                }
            }
            const s = [];
            for(const t1 in i)s.push(this.CreateFromMorphTargetSequence(t1, i[t1], e, n));
            return s;
        }
        static parseAnimation(t1, e) {
            if (!t1) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            const n = function(t1, e, n, i, r) {
                if (0 !== n.length) {
                    const s = [], a = [];
                    $l.flattenJSON(n, s, a, i), 0 !== s.length && r.push(new t1(e, s, a));
                }
            }, i = [], r = t1.name || "default", s = t1.fps || 30, a = t1.blendMode;
            let o = t1.length || -1;
            const l = t1.hierarchy || [];
            for(let t1 = 0; t1 < l.length; t1++){
                const r = l[t1].keys;
                if (r && 0 !== r.length) {
                    if (r[0].morphTargets) {
                        const t1 = {};
                        let e;
                        for(e = 0; e < r.length; e++)if (r[e].morphTargets) for(let n = 0; n < r[e].morphTargets.length; n++)t1[r[e].morphTargets[n]] = -1;
                        for(const n in t1){
                            const t1 = [], s = [];
                            for(let i = 0; i !== r[e].morphTargets.length; ++i){
                                const i = r[e];
                                t1.push(i.time), s.push(i.morphTarget === n ? 1 : 0);
                            }
                            i.push(new oc(".morphTargetInfluence[" + n + "]", t1, s));
                        }
                        o = t1.length * s;
                    } else {
                        const s = ".bones[" + e[t1].name + "]";
                        n(uc, s + ".position", r, "pos", i), n(cc, s + ".quaternion", r, "rot", i), n(uc, s + ".scale", r, "scl", i);
                    }
                }
            }
            if (0 === i.length) return null;
            return new this(r, o, i, a);
        }
        resetDuration() {
            let t1 = 0;
            for(let e = 0, n = this.tracks.length; e !== n; ++e){
                const n = this.tracks[e];
                t1 = Math.max(t1, n.times[n.times.length - 1]);
            }
            return this.duration = t1, this;
        }
        trim() {
            for(let t1 = 0; t1 < this.tracks.length; t1++)this.tracks[t1].trim(0, this.duration);
            return this;
        }
        validate() {
            let t1 = !0;
            for(let e = 0; e < this.tracks.length; e++)t1 = t1 && this.tracks[e].validate();
            return t1;
        }
        optimize() {
            for(let t1 = 0; t1 < this.tracks.length; t1++)this.tracks[t1].optimize();
            return this;
        }
        clone() {
            const t1 = [];
            for(let e = 0; e < this.tracks.length; e++)t1.push(this.tracks[e].clone());
            return new this.constructor(this.name, this.duration, t1, this.blendMode);
        }
        toJSON() {
            return this.constructor.toJSON(this);
        }
    }
    function pc(t1) {
        if (void 0 === t1.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        const e = function(t1) {
            switch(t1.toLowerCase()){
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return oc;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return uc;
                case "color":
                    return ac;
                case "quaternion":
                    return cc;
                case "bool":
                case "boolean":
                    return sc;
                case "string":
                    return hc;
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t1);
        }(t1.type);
        if (void 0 === t1.times) {
            const e = [], n = [];
            $l.flattenJSON(t1.keys, e, n, "value"), t1.times = e, t1.values = n;
        }
        return void 0 !== e.parse ? e.parse(t1) : new e(t1.name, t1.times, t1.values, t1.interpolation);
    }
    const mc = {
        enabled: !1,
        files: {},
        add: function(t1, e) {
            !1 !== this.enabled && (this.files[t1] = e);
        },
        get: function(t1) {
            if (!1 !== this.enabled) return this.files[t1];
        },
        remove: function(t1) {
            delete this.files[t1];
        },
        clear: function() {
            this.files = {};
        }
    };
    class fc {
        constructor(t1, e, n){
            const i = this;
            let r, s = !1, a = 0, o = 0;
            const l = [];
            this.onStart = void 0, this.onLoad = t1, this.onProgress = e, this.onError = n, this.itemStart = function(t1) {
                o++, !1 === s && void 0 !== i.onStart && i.onStart(t1, a, o), s = !0;
            }, this.itemEnd = function(t1) {
                a++, void 0 !== i.onProgress && i.onProgress(t1, a, o), a === o && (s = !1, void 0 !== i.onLoad && i.onLoad());
            }, this.itemError = function(t1) {
                void 0 !== i.onError && i.onError(t1);
            }, this.resolveURL = function(t1) {
                return r ? r(t1) : t1;
            }, this.setURLModifier = function(t1) {
                return r = t1, this;
            }, this.addHandler = function(t1, e) {
                return l.push(t1, e), this;
            }, this.removeHandler = function(t1) {
                const e = l.indexOf(t1);
                return -1 !== e && l.splice(e, 2), this;
            }, this.getHandler = function(t1) {
                for(let e = 0, n = l.length; e < n; e += 2){
                    const n = l[e], i = l[e + 1];
                    if (n.global && (n.lastIndex = 0), n.test(t1)) return i;
                }
                return null;
            };
        }
    }
    const gc = new fc;
    class vc {
        constructor(t1){
            this.manager = void 0 !== t1 ? t1 : gc, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
        }
        load() {}
        loadAsync(t1, e) {
            const n = this;
            return new Promise(function(i, r) {
                n.load(t1, i, e, r);
            });
        }
        parse() {}
        setCrossOrigin(t1) {
            return this.crossOrigin = t1, this;
        }
        setWithCredentials(t1) {
            return this.withCredentials = t1, this;
        }
        setPath(t1) {
            return this.path = t1, this;
        }
        setResourcePath(t1) {
            return this.resourcePath = t1, this;
        }
        setRequestHeader(t1) {
            return this.requestHeader = t1, this;
        }
    }
    const yc = {};
    class xc extends vc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            void 0 === t1 && (t1 = ""), void 0 !== this.path && (t1 = this.path + t1), t1 = this.manager.resolveURL(t1);
            const r = mc.get(t1);
            if (void 0 !== r) return this.manager.itemStart(t1), setTimeout(()=>{
                e && e(r), this.manager.itemEnd(t1);
            }, 0), r;
            if (void 0 !== yc[t1]) return void yc[t1].push({
                onLoad: e,
                onProgress: n,
                onError: i
            });
            yc[t1] = [], yc[t1].push({
                onLoad: e,
                onProgress: n,
                onError: i
            });
            const s = new Request(t1, {
                headers: new Headers(this.requestHeader),
                credentials: this.withCredentials ? "include" : "same-origin"
            }), a = this.mimeType, o = this.responseType;
            fetch(s).then((e)=>{
                if (200 === e.status || 0 === e.status) {
                    if (0 === e.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), "undefined" == typeof ReadableStream || void 0 === e.body || void 0 === e.body.getReader) return e;
                    const n = yc[t1], i = e.body.getReader(), r = e.headers.get("Content-Length"), s = r ? parseInt(r) : 0, a = 0 !== s;
                    let o = 0;
                    const l = new ReadableStream({
                        start (t1) {
                            !function e() {
                                i.read().then(({ done: i , value: r  })=>{
                                    if (i) t1.close();
                                    else {
                                        o += r.byteLength;
                                        const i = new ProgressEvent("progress", {
                                            lengthComputable: a,
                                            loaded: o,
                                            total: s
                                        });
                                        for(let t1 = 0, e = n.length; t1 < e; t1++){
                                            const e = n[t1];
                                            e.onProgress && e.onProgress(i);
                                        }
                                        t1.enqueue(r), e();
                                    }
                                });
                            }();
                        }
                    });
                    return new Response(l);
                }
                throw Error(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`);
            }).then((t1)=>{
                switch(o){
                    case "arraybuffer":
                        return t1.arrayBuffer();
                    case "blob":
                        return t1.blob();
                    case "document":
                        return t1.text().then((t1)=>(new DOMParser).parseFromString(t1, a));
                    case "json":
                        return t1.json();
                    default:
                        if (void 0 === a) return t1.text();
                        {
                            const e = /charset="?([^;"\s]*)"?/i.exec(a), n = e && e[1] ? e[1].toLowerCase() : void 0, i = new TextDecoder(n);
                            return t1.arrayBuffer().then((t1)=>i.decode(t1));
                        }
                }
            }).then((e)=>{
                mc.add(t1, e);
                const n = yc[t1];
                delete yc[t1];
                for(let t1 = 0, i = n.length; t1 < i; t1++){
                    const i = n[t1];
                    i.onLoad && i.onLoad(e);
                }
            }).catch((e)=>{
                const n = yc[t1];
                if (void 0 === n) throw this.manager.itemError(t1), e;
                delete yc[t1];
                for(let t1 = 0, i = n.length; t1 < i; t1++){
                    const i = n[t1];
                    i.onError && i.onError(e);
                }
                this.manager.itemError(t1);
            }).finally(()=>{
                this.manager.itemEnd(t1);
            }), this.manager.itemStart(t1);
        }
        setResponseType(t1) {
            return this.responseType = t1, this;
        }
        setMimeType(t1) {
            return this.mimeType = t1, this;
        }
    }
    class _c extends vc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            void 0 !== this.path && (t1 = this.path + t1), t1 = this.manager.resolveURL(t1);
            const r = this, s = mc.get(t1);
            if (void 0 !== s) return r.manager.itemStart(t1), setTimeout(function() {
                e && e(s), r.manager.itemEnd(t1);
            }, 0), s;
            const a = It("img");
            function o() {
                c(), mc.add(t1, this), e && e(this), r.manager.itemEnd(t1);
            }
            function l(e) {
                c(), i && i(e), r.manager.itemError(t1), r.manager.itemEnd(t1);
            }
            function c() {
                a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1);
            }
            return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t1.slice(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t1), a.src = t1, a;
        }
    }
    class bc extends vc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = new yi, s = new _c(this.manager);
            s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
            let a = 0;
            function o(n) {
                s.load(t1[n], function(t1) {
                    r.images[n] = t1, a++, 6 === a && (r.needsUpdate = !0, e && e(r));
                }, void 0, i);
            }
            for(let e = 0; e < t1.length; ++e)o(e);
            return r;
        }
    }
    class Mc extends vc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = this, s = new Ha, a = new xc(this.manager);
            return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(t1, function(t1) {
                const n = r.parse(t1);
                n && (void 0 !== n.image ? s.image = n.image : void 0 !== n.data && (s.image.width = n.width, s.image.height = n.height, s.image.data = n.data), s.wrapS = void 0 !== n.wrapS ? n.wrapS : h, s.wrapT = void 0 !== n.wrapT ? n.wrapT : h, s.magFilter = void 0 !== n.magFilter ? n.magFilter : f, s.minFilter = void 0 !== n.minFilter ? n.minFilter : f, s.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.encoding && (s.encoding = n.encoding), void 0 !== n.flipY && (s.flipY = n.flipY), void 0 !== n.format && (s.format = n.format), void 0 !== n.type && (s.type = n.type), void 0 !== n.mipmaps && (s.mipmaps = n.mipmaps, s.minFilter = v), 1 === n.mipmapCount && (s.minFilter = f), void 0 !== n.generateMipmaps && (s.generateMipmaps = n.generateMipmaps), s.needsUpdate = !0, e && e(s, n));
            }, n, i), s;
        }
    }
    class wc extends vc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = new Zt, s = new _c(this.manager);
            return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t1, function(t1) {
                r.image = t1, r.needsUpdate = !0, void 0 !== e && e(r);
            }, n, i), r;
        }
    }
    class Sc extends ln {
        constructor(t1, e = 1){
            super(), this.type = "Light", this.color = new Wt(t1), this.intensity = e;
        }
        dispose() {}
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.intensity = t1.intensity, this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e;
        }
    }
    Sc.prototype.isLight = !0;
    class Tc extends Sc {
        constructor(t1, e, n){
            super(t1, n), this.type = "HemisphereLight", this.position.copy(ln.DefaultUp), this.updateMatrix(), this.groundColor = new Wt(e);
        }
        copy(t1) {
            return Sc.prototype.copy.call(this, t1), this.groundColor.copy(t1.groundColor), this;
        }
    }
    Tc.prototype.isHemisphereLight = !0;
    const Ec = new ze, Ac = new se, Rc = new se;
    class Cc {
        constructor(t1){
            this.camera = t1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Rt(512, 512), this.map = null, this.mapPass = null, this.matrix = new ze, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ei, this._frameExtents = new Rt(1, 1), this._viewportCount = 1, this._viewports = [
                new Kt(0, 0, 1, 1)
            ];
        }
        getViewportCount() {
            return this._viewportCount;
        }
        getFrustum() {
            return this._frustum;
        }
        updateMatrices(t1) {
            const e = this.camera, n = this.matrix;
            Ac.setFromMatrixPosition(t1.matrixWorld), e.position.copy(Ac), Rc.setFromMatrixPosition(t1.target.matrixWorld), e.lookAt(Rc), e.updateMatrixWorld(), Ec.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ec), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse);
        }
        getViewport(t1) {
            return this._viewports[t1];
        }
        getFrameExtents() {
            return this._frameExtents;
        }
        dispose() {
            this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
        }
        copy(t1) {
            return this.camera = t1.camera.clone(), this.bias = t1.bias, this.radius = t1.radius, this.mapSize.copy(t1.mapSize), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        toJSON() {
            const t1 = {};
            return 0 !== this.bias && (t1.bias = this.bias), 0 !== this.normalBias && (t1.normalBias = this.normalBias), 1 !== this.radius && (t1.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t1.mapSize = this.mapSize.toArray()), t1.camera = this.camera.toJSON(!1).object, delete t1.camera.matrix, t1;
        }
    }
    class Lc extends Cc {
        constructor(){
            super(new fi(50, 1, .5, 500)), this.focus = 1;
        }
        updateMatrices(t1) {
            const e = this.camera, n = 2 * xt * t1.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = t1.distance || e.far;
            n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t1);
        }
        copy(t1) {
            return super.copy(t1), this.focus = t1.focus, this;
        }
    }
    Lc.prototype.isSpotLightShadow = !0;
    class Pc extends Sc {
        constructor(t1, e, n = 0, i = Math.PI / 3, r = 0, s = 1){
            super(t1, e), this.type = "SpotLight", this.position.copy(ln.DefaultUp), this.updateMatrix(), this.target = new ln, this.distance = n, this.angle = i, this.penumbra = r, this.decay = s, this.shadow = new Lc;
        }
        get power() {
            return this.intensity * Math.PI;
        }
        set power(t1) {
            this.intensity = t1 / Math.PI;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t1) {
            return super.copy(t1), this.distance = t1.distance, this.angle = t1.angle, this.penumbra = t1.penumbra, this.decay = t1.decay, this.target = t1.target.clone(), this.shadow = t1.shadow.clone(), this;
        }
    }
    Pc.prototype.isSpotLight = !0;
    const Dc = new ze, Ic = new se, Nc = new se;
    class Bc extends Cc {
        constructor(){
            super(new fi(90, 1, .5, 500)), this._frameExtents = new Rt(4, 2), this._viewportCount = 6, this._viewports = [
                new Kt(2, 1, 1, 1),
                new Kt(0, 1, 1, 1),
                new Kt(3, 1, 1, 1),
                new Kt(1, 1, 1, 1),
                new Kt(3, 0, 1, 1),
                new Kt(1, 0, 1, 1)
            ], this._cubeDirections = [
                new se(1, 0, 0),
                new se(-1, 0, 0),
                new se(0, 0, 1),
                new se(0, 0, -1),
                new se(0, 1, 0),
                new se(0, -1, 0)
            ], this._cubeUps = [
                new se(0, 1, 0),
                new se(0, 1, 0),
                new se(0, 1, 0),
                new se(0, 1, 0),
                new se(0, 0, 1),
                new se(0, 0, -1)
            ];
        }
        updateMatrices(t1, e = 0) {
            const n = this.camera, i = this.matrix, r = t1.distance || n.far;
            r !== n.far && (n.far = r, n.updateProjectionMatrix()), Ic.setFromMatrixPosition(t1.matrixWorld), n.position.copy(Ic), Nc.copy(n.position), Nc.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(Nc), n.updateMatrixWorld(), i.makeTranslation(-Ic.x, -Ic.y, -Ic.z), Dc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Dc);
        }
    }
    Bc.prototype.isPointLightShadow = !0;
    class zc extends Sc {
        constructor(t1, e, n = 0, i = 1){
            super(t1, e), this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Bc;
        }
        get power() {
            return 4 * this.intensity * Math.PI;
        }
        set power(t1) {
            this.intensity = t1 / (4 * Math.PI);
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t1) {
            return super.copy(t1), this.distance = t1.distance, this.decay = t1.decay, this.shadow = t1.shadow.clone(), this;
        }
    }
    zc.prototype.isPointLight = !0;
    class Oc extends Cc {
        constructor(){
            super(new Fi(-5, 5, 5, -5, .5, 500));
        }
    }
    Oc.prototype.isDirectionalLightShadow = !0;
    class Uc extends Sc {
        constructor(t1, e){
            super(t1, e), this.type = "DirectionalLight", this.position.copy(ln.DefaultUp), this.updateMatrix(), this.target = new ln, this.shadow = new Oc;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t1) {
            return super.copy(t1), this.target = t1.target.clone(), this.shadow = t1.shadow.clone(), this;
        }
    }
    Uc.prototype.isDirectionalLight = !0;
    class Fc extends Sc {
        constructor(t1, e){
            super(t1, e), this.type = "AmbientLight";
        }
    }
    Fc.prototype.isAmbientLight = !0;
    class Hc extends Sc {
        constructor(t1, e, n = 10, i = 10){
            super(t1, e), this.type = "RectAreaLight", this.width = n, this.height = i;
        }
        get power() {
            return this.intensity * this.width * this.height * Math.PI;
        }
        set power(t1) {
            this.intensity = t1 / (this.width * this.height * Math.PI);
        }
        copy(t1) {
            return super.copy(t1), this.width = t1.width, this.height = t1.height, this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.width = this.width, e.object.height = this.height, e;
        }
    }
    Hc.prototype.isRectAreaLight = !0;
    class Gc {
        constructor(){
            this.coefficients = [];
            for(let t1 = 0; t1 < 9; t1++)this.coefficients.push(new se);
        }
        set(t1) {
            for(let e = 0; e < 9; e++)this.coefficients[e].copy(t1[e]);
            return this;
        }
        zero() {
            for(let t1 = 0; t1 < 9; t1++)this.coefficients[t1].set(0, 0, 0);
            return this;
        }
        getAt(t1, e) {
            const n = t1.x, i = t1.y, r = t1.z, s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * i), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * n), e.addScaledVector(s[4], n * i * 1.092548), e.addScaledVector(s[5], i * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], n * r * 1.092548), e.addScaledVector(s[8], .546274 * (n * n - i * i)), e;
        }
        getIrradianceAt(t1, e) {
            const n = t1.x, i = t1.y, r = t1.z, s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * i), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * n), e.addScaledVector(s[4], .858086 * n * i), e.addScaledVector(s[5], .858086 * i * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * n * r), e.addScaledVector(s[8], .429043 * (n * n - i * i)), e;
        }
        add(t1) {
            for(let e = 0; e < 9; e++)this.coefficients[e].add(t1.coefficients[e]);
            return this;
        }
        addScaledSH(t1, e) {
            for(let n = 0; n < 9; n++)this.coefficients[n].addScaledVector(t1.coefficients[n], e);
            return this;
        }
        scale(t1) {
            for(let e = 0; e < 9; e++)this.coefficients[e].multiplyScalar(t1);
            return this;
        }
        lerp(t1, e) {
            for(let n = 0; n < 9; n++)this.coefficients[n].lerp(t1.coefficients[n], e);
            return this;
        }
        equals(t1) {
            for(let e = 0; e < 9; e++)if (!this.coefficients[e].equals(t1.coefficients[e])) return !1;
            return !0;
        }
        copy(t1) {
            return this.set(t1.coefficients);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        fromArray(t1, e = 0) {
            const n = this.coefficients;
            for(let i = 0; i < 9; i++)n[i].fromArray(t1, e + 3 * i);
            return this;
        }
        toArray(t1 = [], e = 0) {
            const n = this.coefficients;
            for(let i = 0; i < 9; i++)n[i].toArray(t1, e + 3 * i);
            return t1;
        }
        static getBasisAt(t1, e) {
            const n = t1.x, i = t1.y, r = t1.z;
            e[0] = .282095, e[1] = .488603 * i, e[2] = .488603 * r, e[3] = .488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = .546274 * (n * n - i * i);
        }
    }
    Gc.prototype.isSphericalHarmonics3 = !0;
    class kc extends Sc {
        constructor(t1 = new Gc, e = 1){
            super(void 0, e), this.sh = t1;
        }
        copy(t1) {
            return super.copy(t1), this.sh.copy(t1.sh), this;
        }
        fromJSON(t1) {
            return this.intensity = t1.intensity, this.sh.fromArray(t1.sh), this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.sh = this.sh.toArray(), e;
        }
    }
    kc.prototype.isLightProbe = !0;
    class Vc extends vc {
        constructor(t1){
            super(t1), this.textures = {};
        }
        load(t1, e, n, i) {
            const r = this, s = new xc(r.manager);
            s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t1, function(n) {
                try {
                    e(r.parse(JSON.parse(n)));
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t1);
                }
            }, n, i);
        }
        parse(t1) {
            const e = this.textures;
            function n(t1) {
                return void 0 === e[t1] && console.warn("THREE.MaterialLoader: Undefined texture", t1), e[t1];
            }
            const i = bn.fromType(t1.type);
            if (void 0 !== t1.uuid && (i.uuid = t1.uuid), void 0 !== t1.name && (i.name = t1.name), void 0 !== t1.color && void 0 !== i.color && i.color.setHex(t1.color), void 0 !== t1.roughness && (i.roughness = t1.roughness), void 0 !== t1.metalness && (i.metalness = t1.metalness), void 0 !== t1.sheen && (i.sheen = t1.sheen), void 0 !== t1.sheenColor && (i.sheenColor = (new Wt).setHex(t1.sheenColor)), void 0 !== t1.sheenRoughness && (i.sheenRoughness = t1.sheenRoughness), void 0 !== t1.emissive && void 0 !== i.emissive && i.emissive.setHex(t1.emissive), void 0 !== t1.specular && void 0 !== i.specular && i.specular.setHex(t1.specular), void 0 !== t1.specularIntensity && (i.specularIntensity = t1.specularIntensity), void 0 !== t1.specularColor && void 0 !== i.specularColor && i.specularColor.setHex(t1.specularColor), void 0 !== t1.shininess && (i.shininess = t1.shininess), void 0 !== t1.clearcoat && (i.clearcoat = t1.clearcoat), void 0 !== t1.clearcoatRoughness && (i.clearcoatRoughness = t1.clearcoatRoughness), void 0 !== t1.transmission && (i.transmission = t1.transmission), void 0 !== t1.thickness && (i.thickness = t1.thickness), void 0 !== t1.attenuationDistance && (i.attenuationDistance = t1.attenuationDistance), void 0 !== t1.attenuationColor && void 0 !== i.attenuationColor && i.attenuationColor.setHex(t1.attenuationColor), void 0 !== t1.fog && (i.fog = t1.fog), void 0 !== t1.flatShading && (i.flatShading = t1.flatShading), void 0 !== t1.blending && (i.blending = t1.blending), void 0 !== t1.combine && (i.combine = t1.combine), void 0 !== t1.side && (i.side = t1.side), void 0 !== t1.shadowSide && (i.shadowSide = t1.shadowSide), void 0 !== t1.opacity && (i.opacity = t1.opacity), void 0 !== t1.transparent && (i.transparent = t1.transparent), void 0 !== t1.alphaTest && (i.alphaTest = t1.alphaTest), void 0 !== t1.depthTest && (i.depthTest = t1.depthTest), void 0 !== t1.depthWrite && (i.depthWrite = t1.depthWrite), void 0 !== t1.colorWrite && (i.colorWrite = t1.colorWrite), void 0 !== t1.stencilWrite && (i.stencilWrite = t1.stencilWrite), void 0 !== t1.stencilWriteMask && (i.stencilWriteMask = t1.stencilWriteMask), void 0 !== t1.stencilFunc && (i.stencilFunc = t1.stencilFunc), void 0 !== t1.stencilRef && (i.stencilRef = t1.stencilRef), void 0 !== t1.stencilFuncMask && (i.stencilFuncMask = t1.stencilFuncMask), void 0 !== t1.stencilFail && (i.stencilFail = t1.stencilFail), void 0 !== t1.stencilZFail && (i.stencilZFail = t1.stencilZFail), void 0 !== t1.stencilZPass && (i.stencilZPass = t1.stencilZPass), void 0 !== t1.wireframe && (i.wireframe = t1.wireframe), void 0 !== t1.wireframeLinewidth && (i.wireframeLinewidth = t1.wireframeLinewidth), void 0 !== t1.wireframeLinecap && (i.wireframeLinecap = t1.wireframeLinecap), void 0 !== t1.wireframeLinejoin && (i.wireframeLinejoin = t1.wireframeLinejoin), void 0 !== t1.rotation && (i.rotation = t1.rotation), 1 !== t1.linewidth && (i.linewidth = t1.linewidth), void 0 !== t1.dashSize && (i.dashSize = t1.dashSize), void 0 !== t1.gapSize && (i.gapSize = t1.gapSize), void 0 !== t1.scale && (i.scale = t1.scale), void 0 !== t1.polygonOffset && (i.polygonOffset = t1.polygonOffset), void 0 !== t1.polygonOffsetFactor && (i.polygonOffsetFactor = t1.polygonOffsetFactor), void 0 !== t1.polygonOffsetUnits && (i.polygonOffsetUnits = t1.polygonOffsetUnits), void 0 !== t1.dithering && (i.dithering = t1.dithering), void 0 !== t1.alphaToCoverage && (i.alphaToCoverage = t1.alphaToCoverage), void 0 !== t1.premultipliedAlpha && (i.premultipliedAlpha = t1.premultipliedAlpha), void 0 !== t1.visible && (i.visible = t1.visible), void 0 !== t1.toneMapped && (i.toneMapped = t1.toneMapped), void 0 !== t1.userData && (i.userData = t1.userData), void 0 !== t1.vertexColors && ("number" == typeof t1.vertexColors ? i.vertexColors = t1.vertexColors > 0 : i.vertexColors = t1.vertexColors), void 0 !== t1.uniforms) for(const e in t1.uniforms){
                const r = t1.uniforms[e];
                switch(i.uniforms[e] = {}, r.type){
                    case "t":
                        i.uniforms[e].value = n(r.value);
                        break;
                    case "c":
                        i.uniforms[e].value = (new Wt).setHex(r.value);
                        break;
                    case "v2":
                        i.uniforms[e].value = (new Rt).fromArray(r.value);
                        break;
                    case "v3":
                        i.uniforms[e].value = (new se).fromArray(r.value);
                        break;
                    case "v4":
                        i.uniforms[e].value = (new Kt).fromArray(r.value);
                        break;
                    case "m3":
                        i.uniforms[e].value = (new Ct).fromArray(r.value);
                        break;
                    case "m4":
                        i.uniforms[e].value = (new ze).fromArray(r.value);
                        break;
                    default:
                        i.uniforms[e].value = r.value;
                }
            }
            if (void 0 !== t1.defines && (i.defines = t1.defines), void 0 !== t1.vertexShader && (i.vertexShader = t1.vertexShader), void 0 !== t1.fragmentShader && (i.fragmentShader = t1.fragmentShader), void 0 !== t1.extensions) for(const e in t1.extensions)i.extensions[e] = t1.extensions[e];
            if (void 0 !== t1.shading && (i.flatShading = 1 === t1.shading), void 0 !== t1.size && (i.size = t1.size), void 0 !== t1.sizeAttenuation && (i.sizeAttenuation = t1.sizeAttenuation), void 0 !== t1.map && (i.map = n(t1.map)), void 0 !== t1.matcap && (i.matcap = n(t1.matcap)), void 0 !== t1.alphaMap && (i.alphaMap = n(t1.alphaMap)), void 0 !== t1.bumpMap && (i.bumpMap = n(t1.bumpMap)), void 0 !== t1.bumpScale && (i.bumpScale = t1.bumpScale), void 0 !== t1.normalMap && (i.normalMap = n(t1.normalMap)), void 0 !== t1.normalMapType && (i.normalMapType = t1.normalMapType), void 0 !== t1.normalScale) {
                let e = t1.normalScale;
                !1 === Array.isArray(e) && (e = [
                    e,
                    e
                ]), i.normalScale = (new Rt).fromArray(e);
            }
            return void 0 !== t1.displacementMap && (i.displacementMap = n(t1.displacementMap)), void 0 !== t1.displacementScale && (i.displacementScale = t1.displacementScale), void 0 !== t1.displacementBias && (i.displacementBias = t1.displacementBias), void 0 !== t1.roughnessMap && (i.roughnessMap = n(t1.roughnessMap)), void 0 !== t1.metalnessMap && (i.metalnessMap = n(t1.metalnessMap)), void 0 !== t1.emissiveMap && (i.emissiveMap = n(t1.emissiveMap)), void 0 !== t1.emissiveIntensity && (i.emissiveIntensity = t1.emissiveIntensity), void 0 !== t1.specularMap && (i.specularMap = n(t1.specularMap)), void 0 !== t1.specularIntensityMap && (i.specularIntensityMap = n(t1.specularIntensityMap)), void 0 !== t1.specularColorMap && (i.specularColorMap = n(t1.specularColorMap)), void 0 !== t1.envMap && (i.envMap = n(t1.envMap)), void 0 !== t1.envMapIntensity && (i.envMapIntensity = t1.envMapIntensity), void 0 !== t1.reflectivity && (i.reflectivity = t1.reflectivity), void 0 !== t1.refractionRatio && (i.refractionRatio = t1.refractionRatio), void 0 !== t1.lightMap && (i.lightMap = n(t1.lightMap)), void 0 !== t1.lightMapIntensity && (i.lightMapIntensity = t1.lightMapIntensity), void 0 !== t1.aoMap && (i.aoMap = n(t1.aoMap)), void 0 !== t1.aoMapIntensity && (i.aoMapIntensity = t1.aoMapIntensity), void 0 !== t1.gradientMap && (i.gradientMap = n(t1.gradientMap)), void 0 !== t1.clearcoatMap && (i.clearcoatMap = n(t1.clearcoatMap)), void 0 !== t1.clearcoatRoughnessMap && (i.clearcoatRoughnessMap = n(t1.clearcoatRoughnessMap)), void 0 !== t1.clearcoatNormalMap && (i.clearcoatNormalMap = n(t1.clearcoatNormalMap)), void 0 !== t1.clearcoatNormalScale && (i.clearcoatNormalScale = (new Rt).fromArray(t1.clearcoatNormalScale)), void 0 !== t1.transmissionMap && (i.transmissionMap = n(t1.transmissionMap)), void 0 !== t1.thicknessMap && (i.thicknessMap = n(t1.thicknessMap)), void 0 !== t1.sheenColorMap && (i.sheenColorMap = n(t1.sheenColorMap)), void 0 !== t1.sheenRoughnessMap && (i.sheenRoughnessMap = n(t1.sheenRoughnessMap)), i;
        }
        setTextures(t1) {
            return this.textures = t1, this;
        }
    }
    class Wc {
        static decodeText(t1) {
            if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t1);
            let e = "";
            for(let n = 0, i = t1.length; n < i; n++)e += String.fromCharCode(t1[n]);
            try {
                return decodeURIComponent(escape(e));
            } catch (t1) {
                return e;
            }
        }
        static extractUrlBase(t1) {
            const e = t1.lastIndexOf("/");
            return -1 === e ? "./" : t1.slice(0, e + 1);
        }
        static resolveURL(t1, e) {
            return "string" != typeof t1 || "" === t1 ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t1) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t1) || /^data:.*,.*$/i.test(t1) || /^blob:.*$/i.test(t1) ? t1 : e + t1);
        }
    }
    class jc extends Vn {
        constructor(){
            super(), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
        }
        copy(t1) {
            return super.copy(t1), this.instanceCount = t1.instanceCount, this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        toJSON() {
            const t1 = super.toJSON(this);
            return t1.instanceCount = this.instanceCount, t1.isInstancedBufferGeometry = !0, t1;
        }
    }
    jc.prototype.isInstancedBufferGeometry = !0;
    class qc extends vc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = this, s = new xc(r.manager);
            s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t1, function(n) {
                try {
                    e(r.parse(JSON.parse(n)));
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t1);
                }
            }, n, i);
        }
        parse(t1) {
            const e = {}, n = {};
            function i(t1, i) {
                if (void 0 !== e[i]) return e[i];
                const r = t1.interleavedBuffers[i], s = function(t1, e) {
                    if (void 0 !== n[e]) return n[e];
                    const i = t1.arrayBuffers[e], r = new Uint32Array(i).buffer;
                    return n[e] = r, r;
                }(t1, r.buffer), a = Dt(r.type, s), o = new ua(a, r.stride);
                return o.uuid = r.uuid, e[i] = o, o;
            }
            const r = t1.isInstancedBufferGeometry ? new jc : new Vn, s = t1.data.index;
            if (void 0 !== s) {
                const t1 = Dt(s.type, s.array);
                r.setIndex(new Tn(t1, 1));
            }
            const a = t1.data.attributes;
            for(const e in a){
                const n = a[e];
                let s;
                if (n.isInterleavedBufferAttribute) {
                    const e = i(t1.data, n.data);
                    s = new pa(e, n.itemSize, n.offset, n.normalized);
                } else {
                    const t1 = Dt(n.type, n.array);
                    s = new (n.isInstancedBufferAttribute ? Wa : Tn)(t1, n.itemSize, n.normalized);
                }
                void 0 !== n.name && (s.name = n.name), void 0 !== n.usage && s.setUsage(n.usage), void 0 !== n.updateRange && (s.updateRange.offset = n.updateRange.offset, s.updateRange.count = n.updateRange.count), r.setAttribute(e, s);
            }
            const o = t1.data.morphAttributes;
            if (o) for(const e in o){
                const n = o[e], s = [];
                for(let e = 0, r = n.length; e < r; e++){
                    const r = n[e];
                    let a;
                    if (r.isInterleavedBufferAttribute) {
                        const e = i(t1.data, r.data);
                        a = new pa(e, r.itemSize, r.offset, r.normalized);
                    } else {
                        const t1 = Dt(r.type, r.array);
                        a = new Tn(t1, r.itemSize, r.normalized);
                    }
                    void 0 !== r.name && (a.name = r.name), s.push(a);
                }
                r.morphAttributes[e] = s;
            }
            t1.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
            const l = t1.data.groups || t1.data.drawcalls || t1.data.offsets;
            if (void 0 !== l) for(let t1 = 0, e = l.length; t1 !== e; ++t1){
                const e = l[t1];
                r.addGroup(e.start, e.count, e.materialIndex);
            }
            const c = t1.data.boundingSphere;
            if (void 0 !== c) {
                const t1 = new se;
                void 0 !== c.center && t1.fromArray(c.center), r.boundingSphere = new Ae(t1, c.radius);
            }
            return t1.name && (r.name = t1.name), t1.userData && (r.userData = t1.userData), r;
        }
    }
    const Xc = {
        UVMapping: i,
        CubeReflectionMapping: r,
        CubeRefractionMapping: s,
        EquirectangularReflectionMapping: a,
        EquirectangularRefractionMapping: o,
        CubeUVReflectionMapping: l
    }, Jc = {
        RepeatWrapping: c,
        ClampToEdgeWrapping: h,
        MirroredRepeatWrapping: u
    }, Yc = {
        NearestFilter: d,
        NearestMipmapNearestFilter: p,
        NearestMipmapLinearFilter: m,
        LinearFilter: f,
        LinearMipmapNearestFilter: g,
        LinearMipmapLinearFilter: v
    };
    class Zc extends vc {
        constructor(t1){
            super(t1), "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
                premultiplyAlpha: "none"
            };
        }
        setOptions(t1) {
            return this.options = t1, this;
        }
        load(t1, e, n, i) {
            void 0 === t1 && (t1 = ""), void 0 !== this.path && (t1 = this.path + t1), t1 = this.manager.resolveURL(t1);
            const r = this, s = mc.get(t1);
            if (void 0 !== s) return r.manager.itemStart(t1), setTimeout(function() {
                e && e(s), r.manager.itemEnd(t1);
            }, 0), s;
            const a = {};
            a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader, fetch(t1, a).then(function(t1) {
                return t1.blob();
            }).then(function(t1) {
                return createImageBitmap(t1, Object.assign(r.options, {
                    colorSpaceConversion: "none"
                }));
            }).then(function(n) {
                mc.add(t1, n), e && e(n), r.manager.itemEnd(t1);
            }).catch(function(e) {
                i && i(e), r.manager.itemError(t1), r.manager.itemEnd(t1);
            }), r.manager.itemStart(t1);
        }
    }
    let Kc;
    Zc.prototype.isImageBitmapLoader = !0;
    const Qc = {
        getContext: function() {
            return void 0 === Kc && (Kc = new (window.AudioContext || window.webkitAudioContext)), Kc;
        },
        setContext: function(t1) {
            Kc = t1;
        }
    };
    class $c extends vc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = this, s = new xc(this.manager);
            s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t1, function(n) {
                try {
                    const t1 = n.slice(0);
                    Qc.getContext().decodeAudioData(t1, function(t1) {
                        e(t1);
                    });
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t1);
                }
            }, n, i);
        }
    }
    class th extends kc {
        constructor(t1, e, n = 1){
            super(void 0, n);
            const i = (new Wt).set(t1), r = (new Wt).set(e), s = new se(i.r, i.g, i.b), a = new se(r.r, r.g, r.b), o = Math.sqrt(Math.PI), l = o * Math.sqrt(.75);
            this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o), this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l);
        }
    }
    th.prototype.isHemisphereLightProbe = !0;
    class eh extends kc {
        constructor(t1, e = 1){
            super(void 0, e);
            const n = (new Wt).set(t1);
            this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
        }
    }
    eh.prototype.isAmbientLightProbe = !0;
    const nh = new ze, ih = new ze, rh = new ze;
    class sh {
        constructor(t1 = !0){
            this.autoStart = t1, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
        }
        start() {
            this.startTime = ah(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
        }
        stop() {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1;
        }
        getElapsedTime() {
            return this.getDelta(), this.elapsedTime;
        }
        getDelta() {
            let t1 = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                const e = ah();
                t1 = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t1;
            }
            return t1;
        }
    }
    function ah() {
        return ("undefined" == typeof performance ? Date : performance).now();
    }
    const oh = new se, lh = new re, ch = new se, hh = new se;
    class uh extends ln {
        constructor(t1){
            super(), this.type = "Audio", this.listener = t1, this.context = t1.context, this.gain = this.context.createGain(), this.gain.connect(t1.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
        }
        getOutput() {
            return this.gain;
        }
        setNodeSource(t1) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t1, this.connect(), this;
        }
        setMediaElementSource(t1) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t1), this.connect(), this;
        }
        setMediaStreamSource(t1) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t1), this.connect(), this;
        }
        setBuffer(t1) {
            return this.buffer = t1, this.sourceType = "buffer", this.autoplay && this.play(), this;
        }
        play(t1 = 0) {
            if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
            if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
            this._startedAt = this.context.currentTime + t1;
            const e = this.context.createBufferSource();
            return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
        }
        pause() {
            if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        stop() {
            if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        connect() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for(let t1 = 1, e = this.filters.length; t1 < e; t1++)this.filters[t1 - 1].connect(this.filters[t1]);
                this.filters[this.filters.length - 1].connect(this.getOutput());
            } else this.source.connect(this.getOutput());
            return this._connected = !0, this;
        }
        disconnect() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for(let t1 = 1, e = this.filters.length; t1 < e; t1++)this.filters[t1 - 1].disconnect(this.filters[t1]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput());
            } else this.source.disconnect(this.getOutput());
            return this._connected = !1, this;
        }
        getFilters() {
            return this.filters;
        }
        setFilters(t1) {
            return t1 || (t1 = []), !0 === this._connected ? (this.disconnect(), this.filters = t1.slice(), this.connect()) : this.filters = t1.slice(), this;
        }
        setDetune(t1) {
            if (this.detune = t1, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this;
        }
        getDetune() {
            return this.detune;
        }
        getFilter() {
            return this.getFilters()[0];
        }
        setFilter(t1) {
            return this.setFilters(t1 ? [
                t1
            ] : []);
        }
        setPlaybackRate(t1) {
            if (!1 !== this.hasPlaybackControl) return this.playbackRate = t1, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        getPlaybackRate() {
            return this.playbackRate;
        }
        onEnded() {
            this.isPlaying = !1;
        }
        getLoop() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
        }
        setLoop(t1) {
            if (!1 !== this.hasPlaybackControl) return this.loop = t1, !0 === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        setLoopStart(t1) {
            return this.loopStart = t1, this;
        }
        setLoopEnd(t1) {
            return this.loopEnd = t1, this;
        }
        getVolume() {
            return this.gain.gain.value;
        }
        setVolume(t1) {
            return this.gain.gain.setTargetAtTime(t1, this.context.currentTime, .01), this;
        }
    }
    const dh = new se, ph = new re, mh = new se, fh = new se;
    class gh {
        constructor(t1, e = 2048){
            this.analyser = t1.context.createAnalyser(), this.analyser.fftSize = e, this.data = new Uint8Array(this.analyser.frequencyBinCount), t1.getOutput().connect(this.analyser);
        }
        getFrequencyData() {
            return this.analyser.getByteFrequencyData(this.data), this.data;
        }
        getAverageFrequency() {
            let t1 = 0;
            const e = this.getFrequencyData();
            for(let n = 0; n < e.length; n++)t1 += e[n];
            return t1 / e.length;
        }
    }
    class vh {
        constructor(t1, e, n){
            let i, r, s;
            switch(this.binding = t1, this.valueSize = n, e){
                case "quaternion":
                    i = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5;
                    break;
                case "string":
                case "bool":
                    i = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * n);
                    break;
                default:
                    i = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n);
            }
            this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
        }
        accumulate(t1, e) {
            const n = this.buffer, i = this.valueSize, r = t1 * i + i;
            let s = this.cumulativeWeight;
            if (0 === s) {
                for(let t1 = 0; t1 !== i; ++t1)n[r + t1] = n[t1];
                s = e;
            } else {
                s += e;
                const t1 = e / s;
                this._mixBufferRegion(n, r, 0, t1, i);
            }
            this.cumulativeWeight = s;
        }
        accumulateAdditive(t1) {
            const e = this.buffer, n = this.valueSize, i = n * this._addIndex;
            0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t1, n), this.cumulativeWeightAdditive += t1;
        }
        apply(t1) {
            const e = this.valueSize, n = this.buffer, i = t1 * e + e, r = this.cumulativeWeight, s = this.cumulativeWeightAdditive, a = this.binding;
            if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
                const t1 = e * this._origIndex;
                this._mixBufferRegion(n, i, t1, 1 - r, e);
            }
            s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
            for(let t1 = e, r = e + e; t1 !== r; ++t1)if (n[t1] !== n[t1 + e]) {
                a.setValue(n, i);
                break;
            }
        }
        saveOriginalState() {
            const t1 = this.binding, e = this.buffer, n = this.valueSize, i = n * this._origIndex;
            t1.getValue(e, i);
            for(let t1 = n, r = i; t1 !== r; ++t1)e[t1] = e[i + t1 % n];
            this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
        }
        restoreOriginalState() {
            const t1 = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t1);
        }
        _setAdditiveIdentityNumeric() {
            const t1 = this._addIndex * this.valueSize, e = t1 + this.valueSize;
            for(let n = t1; n < e; n++)this.buffer[n] = 0;
        }
        _setAdditiveIdentityQuaternion() {
            this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
        }
        _setAdditiveIdentityOther() {
            const t1 = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize;
            for(let n = 0; n < this.valueSize; n++)this.buffer[e + n] = this.buffer[t1 + n];
        }
        _select(t1, e, n, i, r) {
            if (i >= .5) for(let i = 0; i !== r; ++i)t1[e + i] = t1[n + i];
        }
        _slerp(t1, e, n, i) {
            re.slerpFlat(t1, e, t1, e, t1, n, i);
        }
        _slerpAdditive(t1, e, n, i, r) {
            const s = this._workIndex * r;
            re.multiplyQuaternionsFlat(t1, s, t1, e, t1, n), re.slerpFlat(t1, e, t1, e, t1, s, i);
        }
        _lerp(t1, e, n, i, r) {
            const s = 1 - i;
            for(let a = 0; a !== r; ++a){
                const r = e + a;
                t1[r] = t1[r] * s + t1[n + a] * i;
            }
        }
        _lerpAdditive(t1, e, n, i, r) {
            for(let s = 0; s !== r; ++s){
                const r = e + s;
                t1[r] = t1[r] + t1[n + s] * i;
            }
        }
    }
    const yh = "\\[\\]\\.:\\/", xh = new RegExp("[\\[\\]\\.:\\/]", "g"), _h = "[^\\[\\]\\.:\\/]", bh = "[^" + yh.replace("\\.", "") + "]", Mh = /((?:WC+[\/:])*)/.source.replace("WC", _h), wh = /(WCOD+)?/.source.replace("WCOD", bh), Sh = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", _h), Th = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", _h), Eh = new RegExp("^" + Mh + wh + Sh + Th + "$"), Ah = [
        "material",
        "materials",
        "bones"
    ];
    class Rh {
        constructor(t1, e, n){
            this.path = e, this.parsedPath = n || Rh.parseTrackName(e), this.node = Rh.findNode(t1, this.parsedPath.nodeName) || t1, this.rootNode = t1, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
        static create(t1, e, n) {
            return t1 && t1.isAnimationObjectGroup ? new Rh.Composite(t1, e, n) : new Rh(t1, e, n);
        }
        static sanitizeNodeName(t1) {
            return t1.replace(/\s/g, "_").replace(xh, "");
        }
        static parseTrackName(t1) {
            const e = Eh.exec(t1);
            if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t1);
            const n = {
                nodeName: e[2],
                objectName: e[3],
                objectIndex: e[4],
                propertyName: e[5],
                propertyIndex: e[6]
            }, i = n.nodeName && n.nodeName.lastIndexOf(".");
            if (void 0 !== i && -1 !== i) {
                const t1 = n.nodeName.substring(i + 1);
                -1 !== Ah.indexOf(t1) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t1);
            }
            if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t1);
            return n;
        }
        static findNode(t1, e) {
            if (void 0 === e || "" === e || "." === e || -1 === e || e === t1.name || e === t1.uuid) return t1;
            if (t1.skeleton) {
                const n = t1.skeleton.getBoneByName(e);
                if (void 0 !== n) return n;
            }
            if (t1.children) {
                const n = function(t1) {
                    for(let i = 0; i < t1.length; i++){
                        const r = t1[i];
                        if (r.name === e || r.uuid === e) return r;
                        const s = n(r.children);
                        if (s) return s;
                    }
                    return null;
                }, i = n(t1.children);
                if (i) return i;
            }
            return null;
        }
        _getValue_unavailable() {}
        _setValue_unavailable() {}
        _getValue_direct(t1, e) {
            t1[e] = this.targetObject[this.propertyName];
        }
        _getValue_array(t1, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)t1[e++] = n[i];
        }
        _getValue_arrayElement(t1, e) {
            t1[e] = this.resolvedProperty[this.propertyIndex];
        }
        _getValue_toArray(t1, e) {
            this.resolvedProperty.toArray(t1, e);
        }
        _setValue_direct(t1, e) {
            this.targetObject[this.propertyName] = t1[e];
        }
        _setValue_direct_setNeedsUpdate(t1, e) {
            this.targetObject[this.propertyName] = t1[e], this.targetObject.needsUpdate = !0;
        }
        _setValue_direct_setMatrixWorldNeedsUpdate(t1, e) {
            this.targetObject[this.propertyName] = t1[e], this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_array(t1, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)n[i] = t1[e++];
        }
        _setValue_array_setNeedsUpdate(t1, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)n[i] = t1[e++];
            this.targetObject.needsUpdate = !0;
        }
        _setValue_array_setMatrixWorldNeedsUpdate(t1, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)n[i] = t1[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_arrayElement(t1, e) {
            this.resolvedProperty[this.propertyIndex] = t1[e];
        }
        _setValue_arrayElement_setNeedsUpdate(t1, e) {
            this.resolvedProperty[this.propertyIndex] = t1[e], this.targetObject.needsUpdate = !0;
        }
        _setValue_arrayElement_setMatrixWorldNeedsUpdate(t1, e) {
            this.resolvedProperty[this.propertyIndex] = t1[e], this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_fromArray(t1, e) {
            this.resolvedProperty.fromArray(t1, e);
        }
        _setValue_fromArray_setNeedsUpdate(t1, e) {
            this.resolvedProperty.fromArray(t1, e), this.targetObject.needsUpdate = !0;
        }
        _setValue_fromArray_setMatrixWorldNeedsUpdate(t1, e) {
            this.resolvedProperty.fromArray(t1, e), this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _getValue_unbound(t1, e) {
            this.bind(), this.getValue(t1, e);
        }
        _setValue_unbound(t1, e) {
            this.bind(), this.setValue(t1, e);
        }
        bind() {
            let t1 = this.node;
            const e = this.parsedPath, n = e.objectName, i = e.propertyName;
            let r = e.propertyIndex;
            if (t1 || (t1 = Rh.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t1), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t1) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
            if (n) {
                let i = e.objectIndex;
                switch(n){
                    case "materials":
                        if (!t1.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        if (!t1.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        t1 = t1.material.materials;
                        break;
                    case "bones":
                        if (!t1.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        t1 = t1.skeleton.bones;
                        for(let e = 0; e < t1.length; e++)if (t1[e].name === i) {
                            i = e;
                            break;
                        }
                        break;
                    default:
                        if (void 0 === t1[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        t1 = t1[n];
                }
                if (void 0 !== i) {
                    if (void 0 === t1[i]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t1);
                    t1 = t1[i];
                }
            }
            const s = t1[i];
            if (void 0 === s) {
                const n = e.nodeName;
                return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t1);
            }
            let a = this.Versioning.None;
            this.targetObject = t1, void 0 !== t1.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t1.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
            let o = this.BindingType.Direct;
            if (void 0 !== r) {
                if ("morphTargetInfluences" === i) {
                    if (!t1.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    if (!t1.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                    if (!t1.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                    void 0 !== t1.morphTargetDictionary[r] && (r = t1.morphTargetDictionary[r]);
                }
                o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
            } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
            this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a];
        }
        unbind() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
    }
    Rh.Composite = class {
        constructor(t1, e, n){
            const i = n || Rh.parseTrackName(e);
            this._targetGroup = t1, this._bindings = t1.subscribe_(e, i);
        }
        getValue(t1, e) {
            this.bind();
            const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
            void 0 !== i && i.getValue(t1, e);
        }
        setValue(t1, e) {
            const n = this._bindings;
            for(let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)n[i].setValue(t1, e);
        }
        bind() {
            const t1 = this._bindings;
            for(let e = this._targetGroup.nCachedObjects_, n = t1.length; e !== n; ++e)t1[e].bind();
        }
        unbind() {
            const t1 = this._bindings;
            for(let e = this._targetGroup.nCachedObjects_, n = t1.length; e !== n; ++e)t1[e].unbind();
        }
    }, Rh.prototype.BindingType = {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
    }, Rh.prototype.Versioning = {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
    }, Rh.prototype.GetterByBindingType = [
        Rh.prototype._getValue_direct,
        Rh.prototype._getValue_array,
        Rh.prototype._getValue_arrayElement,
        Rh.prototype._getValue_toArray
    ], Rh.prototype.SetterByBindingTypeAndVersioning = [
        [
            Rh.prototype._setValue_direct,
            Rh.prototype._setValue_direct_setNeedsUpdate,
            Rh.prototype._setValue_direct_setMatrixWorldNeedsUpdate
        ],
        [
            Rh.prototype._setValue_array,
            Rh.prototype._setValue_array_setNeedsUpdate,
            Rh.prototype._setValue_array_setMatrixWorldNeedsUpdate
        ],
        [
            Rh.prototype._setValue_arrayElement,
            Rh.prototype._setValue_arrayElement_setNeedsUpdate,
            Rh.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
        ],
        [
            Rh.prototype._setValue_fromArray,
            Rh.prototype._setValue_fromArray_setNeedsUpdate,
            Rh.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
        ]
    ];
    class Ch {
        constructor(){
            this.uuid = _t(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
            const t1 = {};
            this._indicesByUUID = t1;
            for(let e = 0, n = arguments.length; e !== n; ++e)t1[arguments[e].uuid] = e;
            this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
            const e = this;
            this.stats = {
                objects: {
                    get total () {
                        return e._objects.length;
                    },
                    get inUse () {
                        return this.total - e.nCachedObjects_;
                    }
                },
                get bindingsPerObject () {
                    return e._bindings.length;
                }
            };
        }
        add() {
            const t1 = this._objects, e = this._indicesByUUID, n = this._paths, i = this._parsedPaths, r = this._bindings, s = r.length;
            let a, o = t1.length, l = this.nCachedObjects_;
            for(let c = 0, h = arguments.length; c !== h; ++c){
                const h = arguments[c], u = h.uuid;
                let d = e[u];
                if (void 0 === d) {
                    d = o++, e[u] = d, t1.push(h);
                    for(let t1 = 0, e = s; t1 !== e; ++t1)r[t1].push(new Rh(h, n[t1], i[t1]));
                } else if (d < l) {
                    a = t1[d];
                    const o = --l, c = t1[o];
                    e[c.uuid] = d, t1[d] = c, e[u] = o, t1[o] = h;
                    for(let t1 = 0, e = s; t1 !== e; ++t1){
                        const e = r[t1], s = e[o];
                        let a = e[d];
                        e[d] = s, void 0 === a && (a = new Rh(h, n[t1], i[t1])), e[o] = a;
                    }
                } else t1[d] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
            }
            this.nCachedObjects_ = l;
        }
        remove() {
            const t1 = this._objects, e = this._indicesByUUID, n = this._bindings, i = n.length;
            let r = this.nCachedObjects_;
            for(let s = 0, a = arguments.length; s !== a; ++s){
                const a = arguments[s], o = a.uuid, l = e[o];
                if (void 0 !== l && l >= r) {
                    const s = r++, c = t1[s];
                    e[c.uuid] = l, t1[l] = c, e[o] = s, t1[s] = a;
                    for(let t1 = 0, e = i; t1 !== e; ++t1){
                        const e = n[t1], i = e[s], r = e[l];
                        e[l] = i, e[s] = r;
                    }
                }
            }
            this.nCachedObjects_ = r;
        }
        uncache() {
            const t1 = this._objects, e = this._indicesByUUID, n = this._bindings, i = n.length;
            let r = this.nCachedObjects_, s = t1.length;
            for(let a = 0, o = arguments.length; a !== o; ++a){
                const o = arguments[a].uuid, l = e[o];
                if (void 0 !== l) {
                    if (delete e[o], l < r) {
                        const a = --r, o = t1[a], c = --s, h = t1[c];
                        e[o.uuid] = l, t1[l] = o, e[h.uuid] = a, t1[a] = h, t1.pop();
                        for(let t1 = 0, e = i; t1 !== e; ++t1){
                            const e = n[t1], i = e[a], r = e[c];
                            e[l] = i, e[a] = r, e.pop();
                        }
                    } else {
                        const r = --s, a = t1[r];
                        r > 0 && (e[a.uuid] = l), t1[l] = a, t1.pop();
                        for(let t1 = 0, e = i; t1 !== e; ++t1){
                            const e = n[t1];
                            e[l] = e[r], e.pop();
                        }
                    }
                }
            }
            this.nCachedObjects_ = r;
        }
        subscribe_(t1, e) {
            const n = this._bindingsIndicesByPath;
            let i = n[t1];
            const r = this._bindings;
            if (void 0 !== i) return r[i];
            const s = this._paths, a = this._parsedPaths, o = this._objects, l = o.length, c = this.nCachedObjects_, h = new Array(l);
            i = r.length, n[t1] = i, s.push(t1), a.push(e), r.push(h);
            for(let n = c, i = o.length; n !== i; ++n){
                const i = o[n];
                h[n] = new Rh(i, t1, e);
            }
            return h;
        }
        unsubscribe_(t1) {
            const e = this._bindingsIndicesByPath, n = e[t1];
            if (void 0 !== n) {
                const i = this._paths, r = this._parsedPaths, s = this._bindings, a = s.length - 1, o = s[a];
                e[t1[a]] = n, s[n] = o, s.pop(), r[n] = r[a], r.pop(), i[n] = i[a], i.pop();
            }
        }
    }
    Ch.prototype.isAnimationObjectGroup = !0;
    class Lh {
        constructor(t1, e, n = null, i = e.blendMode){
            this._mixer = t1, this._clip = e, this._localRoot = n, this.blendMode = i;
            const r = e.tracks, s = r.length, a = new Array(s), o = {
                endingStart: et,
                endingEnd: et
            };
            for(let t1 = 0; t1 !== s; ++t1){
                const e = r[t1].createInterpolant(null);
                a[t1] = e, e.settings = o;
            }
            this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
        }
        play() {
            return this._mixer._activateAction(this), this;
        }
        stop() {
            return this._mixer._deactivateAction(this), this.reset();
        }
        reset() {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
        }
        isRunning() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
        }
        isScheduled() {
            return this._mixer._isActiveAction(this);
        }
        startAt(t1) {
            return this._startTime = t1, this;
        }
        setLoop(t1, e) {
            return this.loop = t1, this.repetitions = e, this;
        }
        setEffectiveWeight(t1) {
            return this.weight = t1, this._effectiveWeight = this.enabled ? t1 : 0, this.stopFading();
        }
        getEffectiveWeight() {
            return this._effectiveWeight;
        }
        fadeIn(t1) {
            return this._scheduleFading(t1, 0, 1);
        }
        fadeOut(t1) {
            return this._scheduleFading(t1, 1, 0);
        }
        crossFadeFrom(t1, e, n) {
            if (t1.fadeOut(e), this.fadeIn(e), n) {
                const n = this._clip.duration, i = t1._clip.duration, r = i / n, s = n / i;
                t1.warp(1, r, e), this.warp(s, 1, e);
            }
            return this;
        }
        crossFadeTo(t1, e, n) {
            return t1.crossFadeFrom(this, e, n);
        }
        stopFading() {
            const t1 = this._weightInterpolant;
            return null !== t1 && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t1)), this;
        }
        setEffectiveTimeScale(t1) {
            return this.timeScale = t1, this._effectiveTimeScale = this.paused ? 0 : t1, this.stopWarping();
        }
        getEffectiveTimeScale() {
            return this._effectiveTimeScale;
        }
        setDuration(t1) {
            return this.timeScale = this._clip.duration / t1, this.stopWarping();
        }
        syncWith(t1) {
            return this.time = t1.time, this.timeScale = t1.timeScale, this.stopWarping();
        }
        halt(t1) {
            return this.warp(this._effectiveTimeScale, 0, t1);
        }
        warp(t1, e, n) {
            const i = this._mixer, r = i.time, s = this.timeScale;
            let a = this._timeScaleInterpolant;
            null === a && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
            const o = a.parameterPositions, l = a.sampleValues;
            return o[0] = r, o[1] = r + n, l[0] = t1 / s, l[1] = e / s, this;
        }
        stopWarping() {
            const t1 = this._timeScaleInterpolant;
            return null !== t1 && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t1)), this;
        }
        getMixer() {
            return this._mixer;
        }
        getClip() {
            return this._clip;
        }
        getRoot() {
            return this._localRoot || this._mixer._root;
        }
        _update(t1, e, n, i) {
            if (!this.enabled) return void this._updateWeight(t1);
            const r = this._startTime;
            if (null !== r) {
                const i = (t1 - r) * n;
                if (i < 0 || 0 === n) return;
                this._startTime = null, e = n * i;
            }
            e *= this._updateTimeScale(t1);
            const s = this._updateTime(e), a = this._updateWeight(t1);
            if (a > 0) {
                const t1 = this._interpolants, e = this._propertyBindings;
                if (this.blendMode === st) for(let n = 0, i = t1.length; n !== i; ++n)t1[n].evaluate(s), e[n].accumulateAdditive(a);
                else for(let n = 0, r = t1.length; n !== r; ++n)t1[n].evaluate(s), e[n].accumulate(i, a);
            }
        }
        _updateWeight(t1) {
            let e = 0;
            if (this.enabled) {
                e = this.weight;
                const n = this._weightInterpolant;
                if (null !== n) {
                    const i = n.evaluate(t1)[0];
                    e *= i, t1 > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1));
                }
            }
            return this._effectiveWeight = e, e;
        }
        _updateTimeScale(t1) {
            let e = 0;
            if (!this.paused) {
                e = this.timeScale;
                const n = this._timeScaleInterpolant;
                if (null !== n) e *= n.evaluate(t1)[0], t1 > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e);
            }
            return this._effectiveTimeScale = e, e;
        }
        _updateTime(t1) {
            const e = this._clip.duration, n = this.loop;
            let i = this.time + t1, r = this._loopCount;
            const s = 2202 === n;
            if (0 === t1) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;
            if (2200 === n) {
                -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                t: {
                    if (i >= e) i = e;
                    else {
                        if (!(i < 0)) {
                            this.time = i;
                            break t;
                        }
                        i = 0;
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t1 < 0 ? -1 : 1
                    });
                }
            } else {
                if (-1 === r && (t1 >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), i >= e || i < 0) {
                    const n = Math.floor(i / e);
                    i -= e * n, r += Math.abs(n);
                    const a = this.repetitions - r;
                    if (a <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t1 > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t1 > 0 ? 1 : -1
                    });
                    else {
                        if (1 === a) {
                            const e = t1 < 0;
                            this._setEndings(e, !e, s);
                        } else this._setEndings(!1, !1, s);
                        this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: n
                        });
                    }
                } else this.time = i;
                if (s && 1 == (1 & r)) return e - i;
            }
            return i;
        }
        _setEndings(t1, e, n) {
            const i = this._interpolantSettings;
            n ? (i.endingStart = nt, i.endingEnd = nt) : (i.endingStart = t1 ? this.zeroSlopeAtStart ? nt : et : it, i.endingEnd = e ? this.zeroSlopeAtEnd ? nt : et : it);
        }
        _scheduleFading(t1, e, n) {
            const i = this._mixer, r = i.time;
            let s = this._weightInterpolant;
            null === s && (s = i._lendControlInterpolant(), this._weightInterpolant = s);
            const a = s.parameterPositions, o = s.sampleValues;
            return a[0] = r, o[0] = e, a[1] = r + t1, o[1] = n, this;
        }
    }
    class Ph extends ft {
        constructor(t1){
            super(), this._root = t1, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
        }
        _bindAction(t1, e) {
            const n = t1._localRoot || this._root, i = t1._clip.tracks, r = i.length, s = t1._propertyBindings, a = t1._interpolants, o = n.uuid, l = this._bindingsByRootAndName;
            let c = l[o];
            void 0 === c && (c = {}, l[o] = c);
            for(let t1 = 0; t1 !== r; ++t1){
                const r = i[t1], l = r.name;
                let h = c[l];
                if (void 0 !== h) ++h.referenceCount, s[t1] = h;
                else {
                    if (h = s[t1], void 0 !== h) {
                        null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, o, l));
                        continue;
                    }
                    const i = e && e._propertyBindings[t1].binding.parsedPath;
                    h = new vh(Rh.create(n, l, i), r.ValueTypeName, r.getValueSize()), ++h.referenceCount, this._addInactiveBinding(h, o, l), s[t1] = h;
                }
                a[t1].resultBuffer = h.buffer;
            }
        }
        _activateAction(t1) {
            if (!this._isActiveAction(t1)) {
                if (null === t1._cacheIndex) {
                    const e = (t1._localRoot || this._root).uuid, n = t1._clip.uuid, i = this._actionsByClip[n];
                    this._bindAction(t1, i && i.knownActions[0]), this._addInactiveAction(t1, n, e);
                }
                const e = t1._propertyBindings;
                for(let t1 = 0, n = e.length; t1 !== n; ++t1){
                    const n = e[t1];
                    0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState());
                }
                this._lendAction(t1);
            }
        }
        _deactivateAction(t1) {
            if (this._isActiveAction(t1)) {
                const e = t1._propertyBindings;
                for(let t1 = 0, n = e.length; t1 !== n; ++t1){
                    const n = e[t1];
                    0 == --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n));
                }
                this._takeBackAction(t1);
            }
        }
        _initMemoryManager() {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            const t1 = this;
            this.stats = {
                actions: {
                    get total () {
                        return t1._actions.length;
                    },
                    get inUse () {
                        return t1._nActiveActions;
                    }
                },
                bindings: {
                    get total () {
                        return t1._bindings.length;
                    },
                    get inUse () {
                        return t1._nActiveBindings;
                    }
                },
                controlInterpolants: {
                    get total () {
                        return t1._controlInterpolants.length;
                    },
                    get inUse () {
                        return t1._nActiveControlInterpolants;
                    }
                }
            };
        }
        _isActiveAction(t1) {
            const e = t1._cacheIndex;
            return null !== e && e < this._nActiveActions;
        }
        _addInactiveAction(t1, e, n) {
            const i = this._actions, r = this._actionsByClip;
            let s = r[e];
            if (void 0 === s) s = {
                knownActions: [
                    t1
                ],
                actionByRoot: {}
            }, t1._byClipCacheIndex = 0, r[e] = s;
            else {
                const e = s.knownActions;
                t1._byClipCacheIndex = e.length, e.push(t1);
            }
            t1._cacheIndex = i.length, i.push(t1), s.actionByRoot[n] = t1;
        }
        _removeInactiveAction(t1) {
            const e = this._actions, n = e[e.length - 1], i = t1._cacheIndex;
            n._cacheIndex = i, e[i] = n, e.pop(), t1._cacheIndex = null;
            const r = t1._clip.uuid, s = this._actionsByClip, a = s[r], o = a.knownActions, l = o[o.length - 1], c = t1._byClipCacheIndex;
            l._byClipCacheIndex = c, o[c] = l, o.pop(), t1._byClipCacheIndex = null;
            delete a.actionByRoot[(t1._localRoot || this._root).uuid], 0 === o.length && delete s[r], this._removeInactiveBindingsForAction(t1);
        }
        _removeInactiveBindingsForAction(t1) {
            const e = t1._propertyBindings;
            for(let t1 = 0, n = e.length; t1 !== n; ++t1){
                const n = e[t1];
                0 == --n.referenceCount && this._removeInactiveBinding(n);
            }
        }
        _lendAction(t1) {
            const e = this._actions, n = t1._cacheIndex, i = this._nActiveActions++, r = e[i];
            t1._cacheIndex = i, e[i] = t1, r._cacheIndex = n, e[n] = r;
        }
        _takeBackAction(t1) {
            const e = this._actions, n = t1._cacheIndex, i = --this._nActiveActions, r = e[i];
            t1._cacheIndex = i, e[i] = t1, r._cacheIndex = n, e[n] = r;
        }
        _addInactiveBinding(t1, e, n) {
            const i = this._bindingsByRootAndName, r = this._bindings;
            let s = i[e];
            void 0 === s && (s = {}, i[e] = s), s[n] = t1, t1._cacheIndex = r.length, r.push(t1);
        }
        _removeInactiveBinding(t1) {
            const e = this._bindings, n = t1.binding, i = n.rootNode.uuid, r = n.path, s = this._bindingsByRootAndName, a = s[i], o = e[e.length - 1], l = t1._cacheIndex;
            o._cacheIndex = l, e[l] = o, e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[i];
        }
        _lendBinding(t1) {
            const e = this._bindings, n = t1._cacheIndex, i = this._nActiveBindings++, r = e[i];
            t1._cacheIndex = i, e[i] = t1, r._cacheIndex = n, e[n] = r;
        }
        _takeBackBinding(t1) {
            const e = this._bindings, n = t1._cacheIndex, i = --this._nActiveBindings, r = e[i];
            t1._cacheIndex = i, e[i] = t1, r._cacheIndex = n, e[n] = r;
        }
        _lendControlInterpolant() {
            const t1 = this._controlInterpolants, e = this._nActiveControlInterpolants++;
            let n = t1[e];
            return void 0 === n && (n = new nc(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = e, t1[e] = n), n;
        }
        _takeBackControlInterpolant(t1) {
            const e = this._controlInterpolants, n = t1.__cacheIndex, i = --this._nActiveControlInterpolants, r = e[i];
            t1.__cacheIndex = i, e[i] = t1, r.__cacheIndex = n, e[n] = r;
        }
        clipAction(t1, e, n) {
            const i = e || this._root, r = i.uuid;
            let s = "string" == typeof t1 ? dc.findByName(i, t1) : t1;
            const a = null !== s ? s.uuid : t1, o = this._actionsByClip[a];
            let l = null;
            if (void 0 === n && (n = null !== s ? s.blendMode : rt), void 0 !== o) {
                const t1 = o.actionByRoot[r];
                if (void 0 !== t1 && t1.blendMode === n) return t1;
                l = o.knownActions[0], null === s && (s = l._clip);
            }
            if (null === s) return null;
            const c = new Lh(this, s, e, n);
            return this._bindAction(c, l), this._addInactiveAction(c, a, r), c;
        }
        existingAction(t1, e) {
            const n = e || this._root, i = n.uuid, r = "string" == typeof t1 ? dc.findByName(n, t1) : t1, s = r ? r.uuid : t1, a = this._actionsByClip[s];
            return void 0 !== a && a.actionByRoot[i] || null;
        }
        stopAllAction() {
            const t1 = this._actions;
            for(let e = this._nActiveActions - 1; e >= 0; --e)t1[e].stop();
            return this;
        }
        update(t1) {
            t1 *= this.timeScale;
            const e = this._actions, n = this._nActiveActions, i = this.time += t1, r = Math.sign(t1), s = this._accuIndex ^= 1;
            for(let a = 0; a !== n; ++a)e[a]._update(i, t1, r, s);
            const a = this._bindings, o = this._nActiveBindings;
            for(let t1 = 0; t1 !== o; ++t1)a[t1].apply(s);
            return this;
        }
        setTime(t1) {
            this.time = 0;
            for(let t1 = 0; t1 < this._actions.length; t1++)this._actions[t1].time = 0;
            return this.update(t1);
        }
        getRoot() {
            return this._root;
        }
        uncacheClip(t1) {
            const e = this._actions, n = t1.uuid, i = this._actionsByClip, r = i[n];
            if (void 0 !== r) {
                const t1 = r.knownActions;
                for(let n = 0, i = t1.length; n !== i; ++n){
                    const i = t1[n];
                    this._deactivateAction(i);
                    const r = i._cacheIndex, s = e[e.length - 1];
                    i._cacheIndex = null, i._byClipCacheIndex = null, s._cacheIndex = r, e[r] = s, e.pop(), this._removeInactiveBindingsForAction(i);
                }
                delete i[n];
            }
        }
        uncacheRoot(t1) {
            const e = t1.uuid, n = this._actionsByClip;
            for(const t1 in n){
                const i = n[t1].actionByRoot[e];
                void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i));
            }
            const i = this._bindingsByRootAndName[e];
            if (void 0 !== i) for(const t1 in i){
                const e = i[t1];
                e.restoreOriginalState(), this._removeInactiveBinding(e);
            }
        }
        uncacheAction(t1, e) {
            const n = this.existingAction(t1, e);
            null !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
        }
    }
    Ph.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
    class Dh {
        constructor(t1){
            "string" == typeof t1 && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t1 = arguments[1]), this.value = t1;
        }
        clone() {
            return new Dh(void 0 === this.value.clone ? this.value : this.value.clone());
        }
    }
    class Ih extends ua {
        constructor(t1, e, n = 1){
            super(t1, e), this.meshPerAttribute = n;
        }
        copy(t1) {
            return super.copy(t1), this.meshPerAttribute = t1.meshPerAttribute, this;
        }
        clone(t1) {
            const e = super.clone(t1);
            return e.meshPerAttribute = this.meshPerAttribute, e;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e;
        }
    }
    Ih.prototype.isInstancedInterleavedBuffer = !0;
    class Nh {
        constructor(t1, e, n, i, r){
            this.buffer = t1, this.type = e, this.itemSize = n, this.elementSize = i, this.count = r, this.version = 0;
        }
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
        setBuffer(t1) {
            return this.buffer = t1, this;
        }
        setType(t1, e) {
            return this.type = t1, this.elementSize = e, this;
        }
        setItemSize(t1) {
            return this.itemSize = t1, this;
        }
        setCount(t1) {
            return this.count = t1, this;
        }
    }
    Nh.prototype.isGLBufferAttribute = !0;
    function Bh(t1, e) {
        return t1.distance - e.distance;
    }
    function zh(t1, e, n, i) {
        if (t1.layers.test(e.layers) && t1.raycast(e, n), !0 === i) {
            const i = t1.children;
            for(let t1 = 0, r = i.length; t1 < r; t1++)zh(i[t1], e, n, !0);
        }
    }
    const Oh = new Rt;
    class Uh {
        constructor(t1 = new Rt(1 / 0, 1 / 0), e = new Rt(-1 / 0, -1 / 0)){
            this.min = t1, this.max = e;
        }
        set(t1, e) {
            return this.min.copy(t1), this.max.copy(e), this;
        }
        setFromPoints(t1) {
            this.makeEmpty();
            for(let e = 0, n = t1.length; e < n; e++)this.expandByPoint(t1[e]);
            return this;
        }
        setFromCenterAndSize(t1, e) {
            const n = Oh.copy(e).multiplyScalar(.5);
            return this.min.copy(t1).sub(n), this.max.copy(t1).add(n), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.min.copy(t1.min), this.max.copy(t1.max), this;
        }
        makeEmpty() {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y;
        }
        getCenter(t1) {
            return this.isEmpty() ? t1.set(0, 0) : t1.addVectors(this.min, this.max).multiplyScalar(.5);
        }
        getSize(t1) {
            return this.isEmpty() ? t1.set(0, 0) : t1.subVectors(this.max, this.min);
        }
        expandByPoint(t1) {
            return this.min.min(t1), this.max.max(t1), this;
        }
        expandByVector(t1) {
            return this.min.sub(t1), this.max.add(t1), this;
        }
        expandByScalar(t1) {
            return this.min.addScalar(-t1), this.max.addScalar(t1), this;
        }
        containsPoint(t1) {
            return !(t1.x < this.min.x || t1.x > this.max.x || t1.y < this.min.y || t1.y > this.max.y);
        }
        containsBox(t1) {
            return this.min.x <= t1.min.x && t1.max.x <= this.max.x && this.min.y <= t1.min.y && t1.max.y <= this.max.y;
        }
        getParameter(t1, e) {
            return e.set((t1.x - this.min.x) / (this.max.x - this.min.x), (t1.y - this.min.y) / (this.max.y - this.min.y));
        }
        intersectsBox(t1) {
            return !(t1.max.x < this.min.x || t1.min.x > this.max.x || t1.max.y < this.min.y || t1.min.y > this.max.y);
        }
        clampPoint(t1, e) {
            return e.copy(t1).clamp(this.min, this.max);
        }
        distanceToPoint(t1) {
            return Oh.copy(t1).clamp(this.min, this.max).sub(t1).length();
        }
        intersect(t1) {
            return this.min.max(t1.min), this.max.min(t1.max), this;
        }
        union(t1) {
            return this.min.min(t1.min), this.max.max(t1.max), this;
        }
        translate(t1) {
            return this.min.add(t1), this.max.add(t1), this;
        }
        equals(t1) {
            return t1.min.equals(this.min) && t1.max.equals(this.max);
        }
    }
    Uh.prototype.isBox2 = !0;
    const Fh = new se, Hh = new se;
    class Gh {
        constructor(t1 = new se, e = new se){
            this.start = t1, this.end = e;
        }
        set(t1, e) {
            return this.start.copy(t1), this.end.copy(e), this;
        }
        copy(t1) {
            return this.start.copy(t1.start), this.end.copy(t1.end), this;
        }
        getCenter(t1) {
            return t1.addVectors(this.start, this.end).multiplyScalar(.5);
        }
        delta(t1) {
            return t1.subVectors(this.end, this.start);
        }
        distanceSq() {
            return this.start.distanceToSquared(this.end);
        }
        distance() {
            return this.start.distanceTo(this.end);
        }
        at(t1, e) {
            return this.delta(e).multiplyScalar(t1).add(this.start);
        }
        closestPointToPointParameter(t1, e) {
            Fh.subVectors(t1, this.start), Hh.subVectors(this.end, this.start);
            const n = Hh.dot(Hh);
            let i = Hh.dot(Fh) / n;
            return e && (i = bt(i, 0, 1)), i;
        }
        closestPointToPoint(t1, e, n) {
            const i = this.closestPointToPointParameter(t1, e);
            return this.delta(n).multiplyScalar(i).add(this.start);
        }
        applyMatrix4(t1) {
            return this.start.applyMatrix4(t1), this.end.applyMatrix4(t1), this;
        }
        equals(t1) {
            return t1.start.equals(this.start) && t1.end.equals(this.end);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    const kh = new se;
    const Vh = new se, Wh = new ze, jh = new ze;
    class qh extends so {
        constructor(t1){
            const e = Xh(t1), n = new Vn, i = [], r = [], s = new Wt(0, 0, 1), a = new Wt(0, 1, 0);
            for(let t1 = 0; t1 < e.length; t1++){
                const n = e[t1];
                n.parent && n.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b));
            }
            n.setAttribute("position", new Nn(i, 3)), n.setAttribute("color", new Nn(r, 3));
            super(n, new Za({
                vertexColors: !0,
                depthTest: !1,
                depthWrite: !1,
                toneMapped: !1,
                transparent: !0
            })), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = t1, this.bones = e, this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1;
        }
        updateMatrixWorld(t1) {
            const e = this.bones, n = this.geometry, i = n.getAttribute("position");
            jh.copy(this.root.matrixWorld).invert();
            for(let t1 = 0, n = 0; t1 < e.length; t1++){
                const r = e[t1];
                r.parent && r.parent.isBone && (Wh.multiplyMatrices(jh, r.matrixWorld), Vh.setFromMatrixPosition(Wh), i.setXYZ(n, Vh.x, Vh.y, Vh.z), Wh.multiplyMatrices(jh, r.parent.matrixWorld), Vh.setFromMatrixPosition(Wh), i.setXYZ(n + 1, Vh.x, Vh.y, Vh.z), n += 2);
            }
            n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t1);
        }
    }
    function Xh(t1) {
        const e = [];
        !0 === t1.isBone && e.push(t1);
        for(let n = 0; n < t1.children.length; n++)e.push.apply(e, Xh(t1.children[n]));
        return e;
    }
    const Jh = new se, Yh = new Wt, Zh = new Wt;
    class Kh extends so {
        constructor(t1 = 10, e = 10, n = 4473924, i = 8947848){
            n = new Wt(n), i = new Wt(i);
            const r = e / 2, s = t1 / e, a = t1 / 2, o = [], l = [];
            for(let t1 = 0, c = 0, h = -a; t1 <= e; t1++, h += s){
                o.push(-a, 0, h, a, 0, h), o.push(h, 0, -a, h, 0, a);
                const e = t1 === r ? n : i;
                e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3;
            }
            const c = new Vn;
            c.setAttribute("position", new Nn(o, 3)), c.setAttribute("color", new Nn(l, 3));
            super(c, new Za({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "GridHelper";
        }
    }
    const Qh = new se, $h = new se, tu = new se;
    const eu = new se, nu = new mi;
    function iu(t1, e, n, i, r, s, a) {
        eu.set(r, s, a).unproject(i);
        const o = e[t1];
        if (void 0 !== o) {
            const t1 = n.getAttribute("position");
            for(let e = 0, n = o.length; e < n; e++)t1.setXYZ(o[e], eu.x, eu.y, eu.z);
        }
    }
    const ru = new le;
    class su extends so {
        constructor(t1, e = 16776960){
            const n = new Uint16Array([
                0,
                1,
                1,
                2,
                2,
                3,
                3,
                0,
                4,
                5,
                5,
                6,
                6,
                7,
                7,
                4,
                0,
                4,
                1,
                5,
                2,
                6,
                3,
                7
            ]), i = new Float32Array(24), r = new Vn;
            r.setIndex(new Tn(n, 1)), r.setAttribute("position", new Tn(i, 3)), super(r, new Za({
                color: e,
                toneMapped: !1
            })), this.object = t1, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
        }
        update(t1) {
            if (void 0 !== t1 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && ru.setFromObject(this.object), ru.isEmpty()) return;
            const e = ru.min, n = ru.max, i = this.geometry.attributes.position, r = i.array;
            r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = e.x, r[4] = n.y, r[5] = n.z, r[6] = e.x, r[7] = e.y, r[8] = n.z, r[9] = n.x, r[10] = e.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = e.z, r[15] = e.x, r[16] = n.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = n.x, r[22] = e.y, r[23] = e.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere();
        }
        setFromObject(t1) {
            return this.object = t1, this.update(), this;
        }
        copy(t1) {
            return so.prototype.copy.call(this, t1), this.object = t1.object, this;
        }
    }
    const au = new se;
    let ou, lu;
    class cu extends so {
        constructor(t1 = 1){
            const e = [
                0,
                0,
                0,
                t1,
                0,
                0,
                0,
                0,
                0,
                0,
                t1,
                0,
                0,
                0,
                0,
                0,
                0,
                t1
            ], n = new Vn;
            n.setAttribute("position", new Nn(e, 3)), n.setAttribute("color", new Nn([
                1,
                0,
                0,
                1,
                .6,
                0,
                0,
                1,
                0,
                .6,
                1,
                0,
                0,
                0,
                1,
                0,
                .6,
                1
            ], 3));
            super(n, new Za({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "AxesHelper";
        }
        setColors(t1, e, n) {
            const i = new Wt, r = this.geometry.attributes.color.array;
            return i.set(t1), i.toArray(r, 0), i.toArray(r, 3), i.set(e), i.toArray(r, 6), i.toArray(r, 9), i.set(n), i.toArray(r, 12), i.toArray(r, 15), this.geometry.attributes.color.needsUpdate = !0, this;
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }
    const hu = new ArrayBuffer(4), uu = new Float32Array(hu), du = new Uint32Array(hu), pu = new Uint32Array(512), mu = new Uint32Array(512);
    for(let t1 = 0; t1 < 256; ++t1){
        const e = t1 - 127;
        e < -27 ? (pu[t1] = 0, pu[256 | t1] = 32768, mu[t1] = 24, mu[256 | t1] = 24) : e < -14 ? (pu[t1] = 1024 >> -e - 14, pu[256 | t1] = 1024 >> -e - 14 | 32768, mu[t1] = -e - 1, mu[256 | t1] = -e - 1) : e <= 15 ? (pu[t1] = e + 15 << 10, pu[256 | t1] = e + 15 << 10 | 32768, mu[t1] = 13, mu[256 | t1] = 13) : e < 128 ? (pu[t1] = 31744, pu[256 | t1] = 64512, mu[t1] = 24, mu[256 | t1] = 24) : (pu[t1] = 31744, pu[256 | t1] = 64512, mu[t1] = 13, mu[256 | t1] = 13);
    }
    const fu = new Uint32Array(2048), gu = new Uint32Array(64), vu = new Uint32Array(64);
    for(let t1 = 1; t1 < 1024; ++t1){
        let e = t1 << 13, n = 0;
        for(; 0 == (8388608 & e);)e <<= 1, n -= 8388608;
        e &= -8388609, n += 947912704, fu[t1] = e | n;
    }
    for(let t1 = 1024; t1 < 2048; ++t1)fu[t1] = 939524096 + (t1 - 1024 << 13);
    for(let t1 = 1; t1 < 31; ++t1)gu[t1] = t1 << 23;
    gu[31] = 1199570944, gu[32] = 2147483648;
    for(let t1 = 33; t1 < 63; ++t1)gu[t1] = 2147483648 + (t1 - 32 << 23);
    gu[63] = 3347054592;
    for(let t1 = 1; t1 < 64; ++t1)32 !== t1 && (vu[t1] = 1024);
    xo.create = function(t1, e) {
        return console.log("THREE.Curve.create() has been deprecated"), t1.prototype = Object.create(xo.prototype), t1.prototype.constructor = t1, t1.prototype.getPoint = e, t1;
    }, Ho.prototype.fromPoints = function(t1) {
        return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t1);
    };
    Kh.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
    }, qh.prototype.update = function() {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
    };
    vc.prototype.extractUrlBase = function(t1) {
        return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Wc.extractUrlBase(t1);
    }, vc.Handlers = {
        add: function() {
            console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
        },
        get: function() {
            console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
        }
    };
    Uh.prototype.center = function(t1) {
        return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t1);
    }, Uh.prototype.empty = function() {
        return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty();
    }, Uh.prototype.isIntersectionBox = function(t1) {
        return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t1);
    }, Uh.prototype.size = function(t1) {
        return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t1);
    }, le.prototype.center = function(t1) {
        return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t1);
    }, le.prototype.empty = function() {
        return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
    }, le.prototype.isIntersectionBox = function(t1) {
        return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t1);
    }, le.prototype.isIntersectionSphere = function(t1) {
        return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t1);
    }, le.prototype.size = function(t1) {
        return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t1);
    }, qe.prototype.toVector3 = function() {
        console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
    }, Ae.prototype.empty = function() {
        return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
    }, Ei.prototype.setFromMatrix = function(t1) {
        return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(t1);
    }, Gh.prototype.center = function(t1) {
        return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t1);
    }, Ct.prototype.flattenToArrayOffset = function(t1, e) {
        return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t1, e);
    }, Ct.prototype.multiplyVector3 = function(t1) {
        return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t1.applyMatrix3(this);
    }, Ct.prototype.multiplyVector3Array = function() {
        console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
    }, Ct.prototype.applyToBufferAttribute = function(t1) {
        return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), t1.applyMatrix3(this);
    }, Ct.prototype.applyToVector3Array = function() {
        console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
    }, Ct.prototype.getInverse = function(t1) {
        return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t1).invert();
    }, ze.prototype.extractPosition = function(t1) {
        return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t1);
    }, ze.prototype.flattenToArrayOffset = function(t1, e) {
        return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t1, e);
    }, ze.prototype.getPosition = function() {
        return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new se).setFromMatrixColumn(this, 3);
    }, ze.prototype.setRotationFromQuaternion = function(t1) {
        return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t1);
    }, ze.prototype.multiplyToArray = function() {
        console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
    }, ze.prototype.multiplyVector3 = function(t1) {
        return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t1.applyMatrix4(this);
    }, ze.prototype.multiplyVector4 = function(t1) {
        return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t1.applyMatrix4(this);
    }, ze.prototype.multiplyVector3Array = function() {
        console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
    }, ze.prototype.rotateAxis = function(t1) {
        console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t1.transformDirection(this);
    }, ze.prototype.crossVector = function(t1) {
        return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t1.applyMatrix4(this);
    }, ze.prototype.translate = function() {
        console.error("THREE.Matrix4: .translate() has been removed.");
    }, ze.prototype.rotateX = function() {
        console.error("THREE.Matrix4: .rotateX() has been removed.");
    }, ze.prototype.rotateY = function() {
        console.error("THREE.Matrix4: .rotateY() has been removed.");
    }, ze.prototype.rotateZ = function() {
        console.error("THREE.Matrix4: .rotateZ() has been removed.");
    }, ze.prototype.rotateByAxis = function() {
        console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
    }, ze.prototype.applyToBufferAttribute = function(t1) {
        return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), t1.applyMatrix4(this);
    }, ze.prototype.applyToVector3Array = function() {
        console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
    }, ze.prototype.makeFrustum = function(t1, e, n, i, r, s) {
        return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t1, e, i, n, r, s);
    }, ze.prototype.getInverse = function(t1) {
        return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t1).invert();
    }, wi.prototype.isIntersectionLine = function(t1) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t1);
    }, re.prototype.multiplyVector3 = function(t1) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t1.applyQuaternion(this);
    }, re.prototype.inverse = function() {
        return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert();
    }, Be.prototype.isIntersectionBox = function(t1) {
        return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t1);
    }, Be.prototype.isIntersectionPlane = function(t1) {
        return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t1);
    }, Be.prototype.isIntersectionSphere = function(t1) {
        return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t1);
    }, xn.prototype.area = function() {
        return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
    }, xn.prototype.barycoordFromPoint = function(t1, e) {
        return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t1, e);
    }, xn.prototype.midpoint = function(t1) {
        return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t1);
    }, xn.prototypenormal = function(t1) {
        return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t1);
    }, xn.prototype.plane = function(t1) {
        return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t1);
    }, xn.barycoordFromPoint = function(t1, e, n, i, r) {
        return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), xn.getBarycoord(t1, e, n, i, r);
    }, xn.normal = function(t1, e, n, i) {
        return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), xn.getNormal(t1, e, n, i);
    }, $o.prototype.extractAllPoints = function(t1) {
        return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t1);
    }, $o.prototype.extrude = function(t1) {
        return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Rl(this, t1);
    }, $o.prototype.makeGeometry = function(t1) {
        return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Il(this, t1);
    }, Rt.prototype.fromAttribute = function(t1, e, n) {
        return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t1, e, n);
    }, Rt.prototype.distanceToManhattan = function(t1) {
        return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t1);
    }, Rt.prototype.lengthManhattan = function() {
        return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
    }, se.prototype.setEulerFromRotationMatrix = function() {
        console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
    }, se.prototype.setEulerFromQuaternion = function() {
        console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
    }, se.prototype.getPositionFromMatrix = function(t1) {
        return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t1);
    }, se.prototype.getScaleFromMatrix = function(t1) {
        return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t1);
    }, se.prototype.getColumnFromMatrix = function(t1, e) {
        return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t1);
    }, se.prototype.applyProjection = function(t1) {
        return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t1);
    }, se.prototype.fromAttribute = function(t1, e, n) {
        return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t1, e, n);
    }, se.prototype.distanceToManhattan = function(t1) {
        return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t1);
    }, se.prototype.lengthManhattan = function() {
        return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
    }, Kt.prototype.fromAttribute = function(t1, e, n) {
        return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t1, e, n);
    }, Kt.prototype.lengthManhattan = function() {
        return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
    }, ln.prototype.getChildByName = function(t1) {
        return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t1);
    }, ln.prototype.renderDepth = function() {
        console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
    }, ln.prototype.translate = function(t1, e) {
        return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t1);
    }, ln.prototype.getWorldRotation = function() {
        console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
    }, ln.prototype.applyMatrix = function(t1) {
        return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t1);
    }, Object.defineProperties(ln.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
            },
            set: function(t1) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t1;
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
            }
        }
    }), oi.prototype.setDrawMode = function() {
        console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
    }, Object.defineProperties(oi.prototype, {
        drawMode: {
            get: function() {
                return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0;
            },
            set: function() {
                console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
            }
        }
    }), Ua.prototype.initBones = function() {
        console.error("THREE.SkinnedMesh: initBones() has been removed.");
    }, fi.prototype.setLens = function(t1, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t1);
    }, Object.defineProperties(Sc.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.");
            }
        },
        shadowCameraFov: {
            set: function(t1) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t1;
            }
        },
        shadowCameraLeft: {
            set: function(t1) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t1;
            }
        },
        shadowCameraRight: {
            set: function(t1) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t1;
            }
        },
        shadowCameraTop: {
            set: function(t1) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t1;
            }
        },
        shadowCameraBottom: {
            set: function(t1) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t1;
            }
        },
        shadowCameraNear: {
            set: function(t1) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t1;
            }
        },
        shadowCameraFar: {
            set: function(t1) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t1;
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
            }
        },
        shadowBias: {
            set: function(t1) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t1;
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.");
            }
        },
        shadowMapWidth: {
            set: function(t1) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t1;
            }
        },
        shadowMapHeight: {
            set: function(t1) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t1;
            }
        }
    }), Object.defineProperties(Tn.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
            }
        },
        dynamic: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === dt;
            },
            set: function() {
                console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(dt);
            }
        }
    }), Tn.prototype.setDynamic = function(t1) {
        return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t1 ? dt : ut), this;
    }, Tn.prototype.copyIndicesArray = function() {
        console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
    }, Tn.prototype.setArray = function() {
        console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
    }, Vn.prototype.addIndex = function(t1) {
        console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t1);
    }, Vn.prototype.addAttribute = function(t1, e) {
        return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t1 ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t1, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t1, new Tn(arguments[1], arguments[2])));
    }, Vn.prototype.addDrawCall = function(t1, e, n) {
        void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t1, e);
    }, Vn.prototype.clearDrawCalls = function() {
        console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
    }, Vn.prototype.computeOffsets = function() {
        console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
    }, Vn.prototype.removeAttribute = function(t1) {
        return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(t1);
    }, Vn.prototype.applyMatrix = function(t1) {
        return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t1);
    }, Object.defineProperties(Vn.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
            }
        }
    }), ua.prototype.setDynamic = function(t1) {
        return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t1 ? dt : ut), this;
    }, ua.prototype.setArray = function() {
        console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
    }, Rl.prototype.getArrays = function() {
        console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
    }, Rl.prototype.addShapeList = function() {
        console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
    }, Rl.prototype.addShape = function() {
        console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
    }, ha.prototype.dispose = function() {
        console.error("THREE.Scene: .dispose() has been removed.");
    }, Dh.prototype.onUpdate = function() {
        return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this;
    }, Object.defineProperties(bn.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.");
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.");
            }
        },
        overdraw: {
            get: function() {
                console.warn("THREE.Material: .overdraw has been removed.");
            },
            set: function() {
                console.warn("THREE.Material: .overdraw has been removed.");
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE.Material: .wrapRGB has been removed."), new Wt;
            }
        },
        shading: {
            get: function() {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
            },
            set: function(t1) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t1;
            }
        },
        stencilMask: {
            get: function() {
                return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
            },
            set: function(t1) {
                console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = t1;
            }
        },
        vertexTangents: {
            get: function() {
                console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
            },
            set: function() {
                console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
            }
        }
    }), Object.defineProperties(pi.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
            },
            set: function(t1) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t1;
            }
        }
    }), aa.prototype.clearTarget = function(t1, e, n, i) {
        console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t1), this.clear(e, n, i);
    }, aa.prototype.animate = function(t1) {
        console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t1);
    }, aa.prototype.getCurrentRenderTarget = function() {
        return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
    }, aa.prototype.getMaxAnisotropy = function() {
        return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
    }, aa.prototype.getPrecision = function() {
        return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
    }, aa.prototype.resetGLState = function() {
        return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
    }, aa.prototype.supportsFloatTextures = function() {
        return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
    }, aa.prototype.supportsHalfFloatTextures = function() {
        return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
    }, aa.prototype.supportsStandardDerivatives = function() {
        return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
    }, aa.prototype.supportsCompressedTextureS3TC = function() {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
    }, aa.prototype.supportsCompressedTexturePVRTC = function() {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
    }, aa.prototype.supportsBlendMinMax = function() {
        return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
    }, aa.prototype.supportsVertexTextures = function() {
        return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
    }, aa.prototype.supportsInstancedArrays = function() {
        return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
    }, aa.prototype.enableScissorTest = function(t1) {
        console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t1);
    }, aa.prototype.initMaterial = function() {
        console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
    }, aa.prototype.addPrePlugin = function() {
        console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
    }, aa.prototype.addPostPlugin = function() {
        console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
    }, aa.prototype.updateShadowMap = function() {
        console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
    }, aa.prototype.setFaceCulling = function() {
        console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
    }, aa.prototype.allocTextureUnit = function() {
        console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
    }, aa.prototype.setTexture = function() {
        console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
    }, aa.prototype.setTexture2D = function() {
        console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
    }, aa.prototype.setTextureCube = function() {
        console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
    }, aa.prototype.getActiveMipMapLevel = function() {
        return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
    }, Object.defineProperties(aa.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled;
            },
            set: function(t1) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t1;
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type;
            },
            set: function(t1) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t1;
            }
        },
        shadowMapCullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
            }
        },
        context: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext();
            }
        },
        vr: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
            }
        },
        gammaInput: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1;
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
            }
        },
        gammaOutput: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1;
            },
            set: function(t1) {
                console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === t1 ? ot : at;
            }
        },
        toneMappingWhitePoint: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1;
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
            }
        },
        gammaFactor: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2;
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
            }
        }
    }), Object.defineProperties(Ys.prototype, {
        cullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
            }
        },
        renderReverseSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
            }
        },
        renderSingleSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
            }
        }
    });
    Object.defineProperties(Qt.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
            },
            set: function(t1) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t1;
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
            },
            set: function(t1) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t1;
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
            },
            set: function(t1) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t1;
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
            },
            set: function(t1) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t1;
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
            },
            set: function(t1) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t1;
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
            },
            set: function(t1) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t1;
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
            },
            set: function(t1) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t1;
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
            },
            set: function(t1) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t1;
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
            },
            set: function(t1) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t1;
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
            },
            set: function(t1) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t1;
            }
        }
    }), uh.prototype.load = function(t1) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        const e = this;
        return (new $c).load(t1, function(t1) {
            e.setBuffer(t1);
        }), this;
    }, gh.prototype.getData = function() {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData();
    }, vi.prototype.updateCubeMap = function(t1, e) {
        return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t1, e);
    }, vi.prototype.clear = function(t1, e, n, i) {
        return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(t1, e, n, i);
    }, qt.crossOrigin = void 0, qt.loadTexture = function(t1, e, n, i) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        const r = new wc;
        r.setCrossOrigin(this.crossOrigin);
        const s = r.load(t1, n, void 0, i);
        return e && (s.mapping = e), s;
    }, qt.loadTextureCube = function(t1, e, n, i) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        const r = new bc;
        r.setCrossOrigin(this.crossOrigin);
        const s = r.load(t1, n, void 0, i);
        return e && (s.mapping = e), s;
    }, qt.loadCompressedTexture = function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
    }, qt.loadCompressedTextureCube = function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
    };
    const yu = {
        createMultiMaterialObject: function() {
            console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
        },
        detach: function() {
            console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
        },
        attach: function() {
            console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
        }
    };
    "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: e
        }
    })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = e), t1.ACESFilmicToneMapping = 4, t1.AddEquation = n, t1.AddOperation = 2, t1.AdditiveAnimationBlendMode = st, t1.AdditiveBlending = 2, t1.AlphaFormat = 1021, t1.AlwaysDepth = 1, t1.AlwaysStencilFunc = 519, t1.AmbientLight = Fc, t1.AmbientLightProbe = eh, t1.AnimationClip = dc, t1.AnimationLoader = class extends vc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = this, s = new xc(this.manager);
            s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t1, function(n) {
                try {
                    e(r.parse(JSON.parse(n)));
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t1);
                }
            }, n, i);
        }
        parse(t1) {
            const e = [];
            for(let n = 0; n < t1.length; n++){
                const i = dc.parse(t1[n]);
                e.push(i);
            }
            return e;
        }
    }, t1.AnimationMixer = Ph, t1.AnimationObjectGroup = Ch, t1.AnimationUtils = $l, t1.ArcCurve = bo, t1.ArrayCamera = $s, t1.ArrowHelper = class extends ln {
        constructor(t1 = new se(0, 0, 1), e = new se(0, 0, 0), n = 1, i = 16776960, r = .2 * n, s = .2 * r){
            super(), this.type = "ArrowHelper", void 0 === ou && (ou = new Vn, ou.setAttribute("position", new Nn([
                0,
                0,
                0,
                0,
                1,
                0
            ], 3)), lu = new Wo(0, .5, 1, 5, 1), lu.translate(0, -0.5, 0)), this.position.copy(e), this.line = new no(ou, new Za({
                color: i,
                toneMapped: !1
            })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new oi(lu, new Mn({
                color: i,
                toneMapped: !1
            })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t1), this.setLength(n, r, s);
        }
        setDirection(t1) {
            if (t1.y > .99999) this.quaternion.set(0, 0, 0, 1);
            else if (t1.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
            else {
                au.set(t1.z, 0, -t1.x).normalize();
                const e = Math.acos(t1.y);
                this.quaternion.setFromAxisAngle(au, e);
            }
        }
        setLength(t1, e = .2 * t1, n = .2 * e) {
            this.line.scale.set(1, Math.max(1e-4, t1 - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t1, this.cone.updateMatrix();
        }
        setColor(t1) {
            this.line.material.color.set(t1), this.cone.material.color.set(t1);
        }
        copy(t1) {
            return super.copy(t1, !1), this.line.copy(t1.line), this.cone.copy(t1.cone), this;
        }
    }, t1.Audio = uh, t1.AudioAnalyser = gh, t1.AudioContext = Qc, t1.AudioListener = class extends ln {
        constructor(){
            super(), this.type = "AudioListener", this.context = Qc.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new sh;
        }
        getInput() {
            return this.gain;
        }
        removeFilter() {
            return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
        }
        getFilter() {
            return this.filter;
        }
        setFilter(t1) {
            return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t1, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
        }
        getMasterVolume() {
            return this.gain.gain.value;
        }
        setMasterVolume(t1) {
            return this.gain.gain.setTargetAtTime(t1, this.context.currentTime, .01), this;
        }
        updateMatrixWorld(t1) {
            super.updateMatrixWorld(t1);
            const e = this.context.listener, n = this.up;
            if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(oh, lh, ch), hh.set(0, 0, -1).applyQuaternion(lh), e.positionX) {
                const t1 = this.context.currentTime + this.timeDelta;
                e.positionX.linearRampToValueAtTime(oh.x, t1), e.positionY.linearRampToValueAtTime(oh.y, t1), e.positionZ.linearRampToValueAtTime(oh.z, t1), e.forwardX.linearRampToValueAtTime(hh.x, t1), e.forwardY.linearRampToValueAtTime(hh.y, t1), e.forwardZ.linearRampToValueAtTime(hh.z, t1), e.upX.linearRampToValueAtTime(n.x, t1), e.upY.linearRampToValueAtTime(n.y, t1), e.upZ.linearRampToValueAtTime(n.z, t1);
            } else e.setPosition(oh.x, oh.y, oh.z), e.setOrientation(hh.x, hh.y, hh.z, n.x, n.y, n.z);
        }
    }, t1.AudioLoader = $c, t1.AxesHelper = cu, t1.AxisHelper = class extends cu {
        constructor(t1){
            console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), super(t1);
        }
    }, t1.BackSide = 1, t1.BasicDepthPacking = 3200, t1.BasicShadowMap = 0, t1.BinaryTextureLoader = class extends Mc {
        constructor(t1){
            console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), super(t1);
        }
    }, t1.Bone = Fa, t1.BooleanKeyframeTrack = sc, t1.BoundingBoxHelper = class extends su {
        constructor(t1, e){
            console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), super(t1, e);
        }
    }, t1.Box2 = Uh, t1.Box3 = le, t1.Box3Helper = class extends so {
        constructor(t1, e = 16776960){
            const n = new Uint16Array([
                0,
                1,
                1,
                2,
                2,
                3,
                3,
                0,
                4,
                5,
                5,
                6,
                6,
                7,
                7,
                4,
                0,
                4,
                1,
                5,
                2,
                6,
                3,
                7
            ]), i = new Vn;
            i.setIndex(new Tn(n, 1)), i.setAttribute("position", new Nn([
                1,
                1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                -1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                -1,
                -1,
                -1,
                1,
                -1,
                -1
            ], 3)), super(i, new Za({
                color: e,
                toneMapped: !1
            })), this.box = t1, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
        }
        updateMatrixWorld(t1) {
            const e = this.box;
            e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), super.updateMatrixWorld(t1));
        }
    }, t1.BoxBufferGeometry = ci, t1.BoxGeometry = ci, t1.BoxHelper = su, t1.BufferAttribute = Tn, t1.BufferGeometry = Vn, t1.BufferGeometryLoader = qc, t1.ByteType = 1010, t1.Cache = mc, t1.Camera = mi, t1.CameraHelper = class extends so {
        constructor(t1){
            const e = new Vn, n = new Za({
                color: 16777215,
                vertexColors: !0,
                toneMapped: !1
            }), i = [], r = [], s = {}, a = new Wt(16755200), o = new Wt(16711680), l = new Wt(43775), c = new Wt(16777215), h = new Wt(3355443);
            function u(t1, e, n) {
                d(t1, n), d(e, n);
            }
            function d(t1, e) {
                i.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === s[t1] && (s[t1] = []), s[t1].push(i.length / 3 - 1);
            }
            u("n1", "n2", a), u("n2", "n4", a), u("n4", "n3", a), u("n3", "n1", a), u("f1", "f2", a), u("f2", "f4", a), u("f4", "f3", a), u("f3", "f1", a), u("n1", "f1", a), u("n2", "f2", a), u("n3", "f3", a), u("n4", "f4", a), u("p", "n1", o), u("p", "n2", o), u("p", "n3", o), u("p", "n4", o), u("u1", "u2", l), u("u2", "u3", l), u("u3", "u1", l), u("c", "t", c), u("p", "c", h), u("cn1", "cn2", h), u("cn3", "cn4", h), u("cf1", "cf2", h), u("cf3", "cf4", h), e.setAttribute("position", new Nn(i, 3)), e.setAttribute("color", new Nn(r, 3)), super(e, n), this.type = "CameraHelper", this.camera = t1, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update();
        }
        update() {
            const t1 = this.geometry, e = this.pointMap;
            nu.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), iu("c", e, t1, nu, 0, 0, -1), iu("t", e, t1, nu, 0, 0, 1), iu("n1", e, t1, nu, -1, -1, -1), iu("n2", e, t1, nu, 1, -1, -1), iu("n3", e, t1, nu, -1, 1, -1), iu("n4", e, t1, nu, 1, 1, -1), iu("f1", e, t1, nu, -1, -1, 1), iu("f2", e, t1, nu, 1, -1, 1), iu("f3", e, t1, nu, -1, 1, 1), iu("f4", e, t1, nu, 1, 1, 1), iu("u1", e, t1, nu, .7, 1.1, -1), iu("u2", e, t1, nu, -0.7, 1.1, -1), iu("u3", e, t1, nu, 0, 2, -1), iu("cf1", e, t1, nu, -1, 0, 1), iu("cf2", e, t1, nu, 1, 0, 1), iu("cf3", e, t1, nu, 0, -1, 1), iu("cf4", e, t1, nu, 0, 1, 1), iu("cn1", e, t1, nu, -1, 0, -1), iu("cn2", e, t1, nu, 1, 0, -1), iu("cn3", e, t1, nu, 0, -1, -1), iu("cn4", e, t1, nu, 0, 1, -1), t1.getAttribute("position").needsUpdate = !0;
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.CanvasRenderer = function() {
        console.error("THREE.CanvasRenderer has been removed");
    }, t1.CanvasTexture = yo, t1.CapsuleBufferGeometry = ko, t1.CapsuleGeometry = ko, t1.CatmullRomCurve3 = Ao, t1.CineonToneMapping = 3, t1.CircleBufferGeometry = Vo, t1.CircleGeometry = Vo, t1.ClampToEdgeWrapping = h, t1.Clock = sh, t1.Color = Wt, t1.ColorKeyframeTrack = ac, t1.ColorManagement = Ot, t1.CompressedTexture = vo, t1.CompressedTextureLoader = class extends vc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = this, s = [], a = new vo, o = new xc(this.manager);
            o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(r.withCredentials);
            let l = 0;
            function c(c) {
                o.load(t1[c], function(t1) {
                    const n = r.parse(t1, !0);
                    s[c] = {
                        width: n.width,
                        height: n.height,
                        format: n.format,
                        mipmaps: n.mipmaps
                    }, l += 1, 6 === l && (1 === n.mipmapCount && (a.minFilter = f), a.image = s, a.format = n.format, a.needsUpdate = !0, e && e(a));
                }, n, i);
            }
            if (Array.isArray(t1)) for(let e = 0, n = t1.length; e < n; ++e)c(e);
            else o.load(t1, function(t1) {
                const n = r.parse(t1, !0);
                if (n.isCubemap) {
                    const t1 = n.mipmaps.length / n.mipmapCount;
                    for(let e = 0; e < t1; e++){
                        s[e] = {
                            mipmaps: []
                        };
                        for(let t1 = 0; t1 < n.mipmapCount; t1++)s[e].mipmaps.push(n.mipmaps[e * n.mipmapCount + t1]), s[e].format = n.format, s[e].width = n.width, s[e].height = n.height;
                    }
                    a.image = s;
                } else a.image.width = n.width, a.image.height = n.height, a.mipmaps = n.mipmaps;
                1 === n.mipmapCount && (a.minFilter = f), a.format = n.format, a.needsUpdate = !0, e && e(a);
            }, n, i);
            return a;
        }
    }, t1.ConeBufferGeometry = jo, t1.ConeGeometry = jo, t1.CubeCamera = vi, t1.CubeReflectionMapping = r, t1.CubeRefractionMapping = s, t1.CubeTexture = yi, t1.CubeTextureLoader = bc, t1.CubeUVReflectionMapping = l, t1.CubicBezierCurve = Po, t1.CubicBezierCurve3 = Do, t1.CubicInterpolant = ec, t1.CullFaceBack = 1, t1.CullFaceFront = 2, t1.CullFaceFrontBack = 3, t1.CullFaceNone = 0, t1.Curve = xo, t1.CurvePath = Fo, t1.CustomBlending = 5, t1.CustomToneMapping = 5, t1.CylinderBufferGeometry = Wo, t1.CylinderGeometry = Wo, t1.Cylindrical = class {
        constructor(t1 = 1, e = 0, n = 0){
            return this.radius = t1, this.theta = e, this.y = n, this;
        }
        set(t1, e, n) {
            return this.radius = t1, this.theta = e, this.y = n, this;
        }
        copy(t1) {
            return this.radius = t1.radius, this.theta = t1.theta, this.y = t1.y, this;
        }
        setFromVector3(t1) {
            return this.setFromCartesianCoords(t1.x, t1.y, t1.z);
        }
        setFromCartesianCoords(t1, e, n) {
            return this.radius = Math.sqrt(t1 * t1 + n * n), this.theta = Math.atan2(t1, n), this.y = e, this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t1.Data3DTexture = ee, t1.DataArrayTexture = $t, t1.DataTexture = Ha, t1.DataTexture2DArray = class extends $t {
        constructor(t1, e, n, i){
            console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."), super(t1, e, n, i);
        }
    }, t1.DataTexture3D = class extends ee {
        constructor(t1, e, n, i){
            console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."), super(t1, e, n, i);
        }
    }, t1.DataTextureLoader = Mc, t1.DataUtils = class {
        static toHalfFloat(t1) {
            Math.abs(t1) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), t1 = bt(t1, -65504, 65504), uu[0] = t1;
            const e = du[0], n = e >> 23 & 511;
            return pu[n] + ((8388607 & e) >> mu[n]);
        }
        static fromHalfFloat(t1) {
            const e = t1 >> 10;
            return du[0] = fu[vu[e] + (1023 & t1)] + gu[e], uu[0];
        }
    }, t1.DecrementStencilOp = 7683, t1.DecrementWrapStencilOp = 34056, t1.DefaultLoadingManager = gc, t1.DepthFormat = T, t1.DepthStencilFormat = E, t1.DepthTexture = ia, t1.DirectionalLight = Uc, t1.DirectionalLightHelper = class extends ln {
        constructor(t1, e, n){
            super(), this.light = t1, this.light.updateMatrixWorld(), this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, void 0 === e && (e = 1);
            let i = new Vn;
            i.setAttribute("position", new Nn([
                -e,
                e,
                0,
                e,
                e,
                0,
                e,
                -e,
                0,
                -e,
                -e,
                0,
                -e,
                e,
                0
            ], 3));
            const r = new Za({
                fog: !1,
                toneMapped: !1
            });
            this.lightPlane = new no(i, r), this.add(this.lightPlane), i = new Vn, i.setAttribute("position", new Nn([
                0,
                0,
                0,
                0,
                0,
                1
            ], 3)), this.targetLine = new no(i, r), this.add(this.targetLine), this.update();
        }
        dispose() {
            this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
        }
        update() {
            Qh.setFromMatrixPosition(this.light.matrixWorld), $h.setFromMatrixPosition(this.light.target.matrixWorld), tu.subVectors($h, Qh), this.lightPlane.lookAt($h), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt($h), this.targetLine.scale.z = tu.length();
        }
    }, t1.DiscreteInterpolant = ic, t1.DodecahedronBufferGeometry = Xo, t1.DodecahedronGeometry = Xo, t1.DoubleSide = 2, t1.DstAlphaFactor = 206, t1.DstColorFactor = 208, t1.DynamicBufferAttribute = class extends Tn {
        constructor(t1, e){
            console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."), super(t1, e), this.setUsage(dt);
        }
    }, t1.DynamicCopyUsage = 35050, t1.DynamicDrawUsage = dt, t1.DynamicReadUsage = 35049, t1.EdgesGeometry = Qo, t1.EdgesHelper = class extends so {
        constructor(t1, e){
            console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), super(new Qo(t1.geometry), new Za({
                color: void 0 !== e ? e : 16777215
            }));
        }
    }, t1.EllipseCurve = _o, t1.EqualDepth = 4, t1.EqualStencilFunc = 514, t1.EquirectangularReflectionMapping = a, t1.EquirectangularRefractionMapping = o, t1.Euler = qe, t1.EventDispatcher = ft, t1.ExtrudeBufferGeometry = Rl, t1.ExtrudeGeometry = Rl, t1.FaceColors = 1, t1.FileLoader = xc, t1.FlatShading = 1, t1.Float16BufferAttribute = In, t1.Float32Attribute = class extends Nn {
        constructor(t1, e){
            console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), super(t1, e);
        }
    }, t1.Float32BufferAttribute = Nn, t1.Float64Attribute = class extends Bn {
        constructor(t1, e){
            console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), super(t1, e);
        }
    }, t1.Float64BufferAttribute = Bn, t1.FloatType = b, t1.Fog = ca, t1.FogExp2 = la, t1.Font = function() {
        console.error("THREE.Font has been moved to /examples/jsm/loaders/FontLoader.js");
    }, t1.FontLoader = function() {
        console.error("THREE.FontLoader has been moved to /examples/jsm/loaders/FontLoader.js");
    }, t1.FramebufferTexture = go, t1.FrontSide = 0, t1.Frustum = Ei, t1.GLBufferAttribute = Nh, t1.GLSL1 = "100", t1.GLSL3 = pt, t1.GreaterDepth = 6, t1.GreaterEqualDepth = 5, t1.GreaterEqualStencilFunc = 518, t1.GreaterStencilFunc = 516, t1.GridHelper = Kh, t1.Group = ta, t1.HalfFloatType = M, t1.HemisphereLight = Tc, t1.HemisphereLightHelper = class extends ln {
        constructor(t1, e, n){
            super(), this.light = t1, this.light.updateMatrixWorld(), this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
            const i = new Pl(e);
            i.rotateY(.5 * Math.PI), this.material = new Mn({
                wireframe: !0,
                fog: !1,
                toneMapped: !1
            }), void 0 === this.color && (this.material.vertexColors = !0);
            const r = i.getAttribute("position"), s = new Float32Array(3 * r.count);
            i.setAttribute("color", new Tn(s, 3)), this.add(new oi(i, this.material)), this.update();
        }
        dispose() {
            this.children[0].geometry.dispose(), this.children[0].material.dispose();
        }
        update() {
            const t1 = this.children[0];
            if (void 0 !== this.color) this.material.color.set(this.color);
            else {
                const e = t1.geometry.getAttribute("color");
                Yh.copy(this.light.color), Zh.copy(this.light.groundColor);
                for(let t1 = 0, n = e.count; t1 < n; t1++){
                    const i = t1 < n / 2 ? Yh : Zh;
                    e.setXYZ(t1, i.r, i.g, i.b);
                }
                e.needsUpdate = !0;
            }
            t1.lookAt(Jh.setFromMatrixPosition(this.light.matrixWorld).negate());
        }
    }, t1.HemisphereLightProbe = th, t1.IcosahedronBufferGeometry = Ll, t1.IcosahedronGeometry = Ll, t1.ImageBitmapLoader = Zc, t1.ImageLoader = _c, t1.ImageUtils = qt, t1.ImmediateRenderObject = function() {
        console.error("THREE.ImmediateRenderObject has been removed.");
    }, t1.IncrementStencilOp = 7682, t1.IncrementWrapStencilOp = 34055, t1.InstancedBufferAttribute = Wa, t1.InstancedBufferGeometry = jc, t1.InstancedInterleavedBuffer = Ih, t1.InstancedMesh = Ya, t1.Int16Attribute = class extends Cn {
        constructor(t1, e){
            console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), super(t1, e);
        }
    }, t1.Int16BufferAttribute = Cn, t1.Int32Attribute = class extends Pn {
        constructor(t1, e){
            console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), super(t1, e);
        }
    }, t1.Int32BufferAttribute = Pn, t1.Int8Attribute = class extends En {
        constructor(t1, e){
            console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), super(t1, e);
        }
    }, t1.Int8BufferAttribute = En, t1.IntType = 1013, t1.InterleavedBuffer = ua, t1.InterleavedBufferAttribute = pa, t1.Interpolant = tc, t1.InterpolateDiscrete = Q, t1.InterpolateLinear = $, t1.InterpolateSmooth = tt, t1.InvertStencilOp = 5386, t1.JSONLoader = function() {
        console.error("THREE.JSONLoader has been removed.");
    }, t1.KeepStencilOp = ht, t1.KeyframeTrack = rc, t1.LOD = Da, t1.LatheBufferGeometry = Go, t1.LatheGeometry = Go, t1.Layers = Xe, t1.LensFlare = function() {
        console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js");
    }, t1.LessDepth = 2, t1.LessEqualDepth = 3, t1.LessEqualStencilFunc = 515, t1.LessStencilFunc = 513, t1.Light = Sc, t1.LightProbe = kc, t1.Line = no, t1.Line3 = Gh, t1.LineBasicMaterial = Za, t1.LineCurve = Io, t1.LineCurve3 = No, t1.LineDashedMaterial = Kl, t1.LineLoop = ao, t1.LinePieces = 1, t1.LineSegments = so, t1.LineStrip = 0, t1.LinearEncoding = at, t1.LinearFilter = f, t1.LinearInterpolant = nc, t1.LinearMipMapLinearFilter = 1008, t1.LinearMipMapNearestFilter = 1007, t1.LinearMipmapLinearFilter = v, t1.LinearMipmapNearestFilter = g, t1.LinearSRGBColorSpace = ct, t1.LinearToneMapping = 1, t1.Loader = vc, t1.LoaderUtils = Wc, t1.LoadingManager = fc, t1.LoopOnce = 2200, t1.LoopPingPong = 2202, t1.LoopRepeat = 2201, t1.LuminanceAlphaFormat = 1025, t1.LuminanceFormat = 1024, t1.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2
    }, t1.Material = bn, t1.MaterialLoader = Vc, t1.Math = At, t1.MathUtils = At, t1.Matrix3 = Ct, t1.Matrix4 = ze, t1.MaxEquation = 104, t1.Mesh = oi, t1.MeshBasicMaterial = Mn, t1.MeshDepthMaterial = Xs, t1.MeshDistanceMaterial = Js, t1.MeshFaceMaterial = function(t1) {
        return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t1;
    }, t1.MeshLambertMaterial = Yl, t1.MeshMatcapMaterial = Zl, t1.MeshNormalMaterial = Jl, t1.MeshPhongMaterial = ql, t1.MeshPhysicalMaterial = jl, t1.MeshStandardMaterial = Wl, t1.MeshToonMaterial = Xl, t1.MinEquation = 103, t1.MirroredRepeatWrapping = u, t1.MixOperation = 1, t1.MultiMaterial = function(t1 = []) {
        return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t1.isMultiMaterial = !0, t1.materials = t1, t1.clone = function() {
            return t1.slice();
        }, t1;
    }, t1.MultiplyBlending = 4, t1.MultiplyOperation = 0, t1.NearestFilter = d, t1.NearestMipMapLinearFilter = 1005, t1.NearestMipMapNearestFilter = 1004, t1.NearestMipmapLinearFilter = m, t1.NearestMipmapNearestFilter = p, t1.NeverDepth = 0, t1.NeverStencilFunc = 512, t1.NoBlending = 0, t1.NoColorSpace = "", t1.NoColors = 0, t1.NoToneMapping = 0, t1.NormalAnimationBlendMode = rt, t1.NormalBlending = 1, t1.NotEqualDepth = 7, t1.NotEqualStencilFunc = 517, t1.NumberKeyframeTrack = oc, t1.Object3D = ln, t1.ObjectLoader = class extends vc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = this, s = "" === this.path ? Wc.extractUrlBase(t1) : this.path;
            this.resourcePath = this.resourcePath || s;
            const a = new xc(this.manager);
            a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t1, function(n) {
                let s = null;
                try {
                    s = JSON.parse(n);
                } catch (e) {
                    return void 0 !== i && i(e), void console.error("THREE:ObjectLoader: Can't parse " + t1 + ".", e.message);
                }
                const a = s.metadata;
                void 0 !== a && void 0 !== a.type && "geometry" !== a.type.toLowerCase() ? r.parse(s, e) : console.error("THREE.ObjectLoader: Can't load " + t1);
            }, n, i);
        }
        async loadAsync(t1, e) {
            const n = "" === this.path ? Wc.extractUrlBase(t1) : this.path;
            this.resourcePath = this.resourcePath || n;
            const i = new xc(this.manager);
            i.setPath(this.path), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials);
            const r = await i.loadAsync(t1, e), s = JSON.parse(r), a = s.metadata;
            if (void 0 === a || void 0 === a.type || "geometry" === a.type.toLowerCase()) throw new Error("THREE.ObjectLoader: Can't load " + t1);
            return await this.parseAsync(s);
        }
        parse(t1, e) {
            const n = this.parseAnimations(t1.animations), i = this.parseShapes(t1.shapes), r = this.parseGeometries(t1.geometries, i), s = this.parseImages(t1.images, function() {
                void 0 !== e && e(l);
            }), a = this.parseTextures(t1.textures, s), o = this.parseMaterials(t1.materials, a), l = this.parseObject(t1.object, r, o, a, n), c = this.parseSkeletons(t1.skeletons, l);
            if (this.bindSkeletons(l, c), void 0 !== e) {
                let t1 = !1;
                for(const e in s)if (s[e] instanceof HTMLImageElement) {
                    t1 = !0;
                    break;
                }
                !1 === t1 && e(l);
            }
            return l;
        }
        async parseAsync(t1) {
            const e = this.parseAnimations(t1.animations), n = this.parseShapes(t1.shapes), i = this.parseGeometries(t1.geometries, n), r = await this.parseImagesAsync(t1.images), s = this.parseTextures(t1.textures, r), a = this.parseMaterials(t1.materials, s), o = this.parseObject(t1.object, i, a, s, e), l = this.parseSkeletons(t1.skeletons, o);
            return this.bindSkeletons(o, l), o;
        }
        parseShapes(t1) {
            const e = {};
            if (void 0 !== t1) for(let n = 0, i = t1.length; n < i; n++){
                const i = (new $o).fromJSON(t1[n]);
                e[i.uuid] = i;
            }
            return e;
        }
        parseSkeletons(t1, e) {
            const n = {}, i = {};
            if (e.traverse(function(t1) {
                t1.isBone && (i[t1.uuid] = t1);
            }), void 0 !== t1) for(let e = 0, r = t1.length; e < r; e++){
                const r = (new Va).fromJSON(t1[e], i);
                n[r.uuid] = r;
            }
            return n;
        }
        parseGeometries(t1, e) {
            const n = {};
            if (void 0 !== t1) {
                const i = new qc;
                for(let r = 0, s = t1.length; r < s; r++){
                    let s;
                    const a = t1[r];
                    switch(a.type){
                        case "BufferGeometry":
                        case "InstancedBufferGeometry":
                            s = i.parse(a);
                            break;
                        case "Geometry":
                            console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.");
                            break;
                        default:
                            a.type in Gl ? s = Gl[a.type].fromJSON(a, e) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${a.type}"`);
                    }
                    s.uuid = a.uuid, void 0 !== a.name && (s.name = a.name), !0 === s.isBufferGeometry && void 0 !== a.userData && (s.userData = a.userData), n[a.uuid] = s;
                }
            }
            return n;
        }
        parseMaterials(t1, e) {
            const n = {}, i = {};
            if (void 0 !== t1) {
                const r = new Vc;
                r.setTextures(e);
                for(let e = 0, s = t1.length; e < s; e++){
                    const s = t1[e];
                    if ("MultiMaterial" === s.type) {
                        const t1 = [];
                        for(let e = 0; e < s.materials.length; e++){
                            const i = s.materials[e];
                            void 0 === n[i.uuid] && (n[i.uuid] = r.parse(i)), t1.push(n[i.uuid]);
                        }
                        i[s.uuid] = t1;
                    } else void 0 === n[s.uuid] && (n[s.uuid] = r.parse(s)), i[s.uuid] = n[s.uuid];
                }
            }
            return i;
        }
        parseAnimations(t1) {
            const e = {};
            if (void 0 !== t1) for(let n = 0; n < t1.length; n++){
                const i = t1[n], r = dc.parse(i);
                e[r.uuid] = r;
            }
            return e;
        }
        parseImages(t1, e) {
            const n = this, i = {};
            let r;
            function s(t1) {
                if ("string" == typeof t1) {
                    const e = t1;
                    return function(t1) {
                        return n.manager.itemStart(t1), r.load(t1, function() {
                            n.manager.itemEnd(t1);
                        }, void 0, function() {
                            n.manager.itemError(t1), n.manager.itemEnd(t1);
                        });
                    }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : n.resourcePath + e);
                }
                return t1.data ? {
                    data: Dt(t1.type, t1.data),
                    width: t1.width,
                    height: t1.height
                } : null;
            }
            if (void 0 !== t1 && t1.length > 0) {
                const n = new fc(e);
                r = new _c(n), r.setCrossOrigin(this.crossOrigin);
                for(let e = 0, n = t1.length; e < n; e++){
                    const n = t1[e], r = n.url;
                    if (Array.isArray(r)) {
                        const t1 = [];
                        for(let e = 0, n = r.length; e < n; e++){
                            const n = s(r[e]);
                            null !== n && (n instanceof HTMLImageElement ? t1.push(n) : t1.push(new Ha(n.data, n.width, n.height)));
                        }
                        i[n.uuid] = new Xt(t1);
                    } else {
                        const t1 = s(n.url);
                        i[n.uuid] = new Xt(t1);
                    }
                }
            }
            return i;
        }
        async parseImagesAsync(t1) {
            const e = this, n = {};
            let i;
            async function r(t1) {
                if ("string" == typeof t1) {
                    const n = t1, r = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(n) ? n : e.resourcePath + n;
                    return await i.loadAsync(r);
                }
                return t1.data ? {
                    data: Dt(t1.type, t1.data),
                    width: t1.width,
                    height: t1.height
                } : null;
            }
            if (void 0 !== t1 && t1.length > 0) {
                i = new _c(this.manager), i.setCrossOrigin(this.crossOrigin);
                for(let e = 0, i = t1.length; e < i; e++){
                    const i = t1[e], s = i.url;
                    if (Array.isArray(s)) {
                        const t1 = [];
                        for(let e = 0, n = s.length; e < n; e++){
                            const n = s[e], i = await r(n);
                            null !== i && (i instanceof HTMLImageElement ? t1.push(i) : t1.push(new Ha(i.data, i.width, i.height)));
                        }
                        n[i.uuid] = new Xt(t1);
                    } else {
                        const t1 = await r(i.url);
                        n[i.uuid] = new Xt(t1);
                    }
                }
            }
            return n;
        }
        parseTextures(t1, e) {
            function n(t1, e) {
                return "number" == typeof t1 ? t1 : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t1), e[t1]);
            }
            const i = {};
            if (void 0 !== t1) for(let r = 0, s = t1.length; r < s; r++){
                const s = t1[r];
                void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                const a = e[s.image], o = a.data;
                let l;
                Array.isArray(o) ? (l = new yi, 6 === o.length && (l.needsUpdate = !0)) : (l = o && o.data ? new Ha : new Zt, o && (l.needsUpdate = !0)), l.source = a, l.uuid = s.uuid, void 0 !== s.name && (l.name = s.name), void 0 !== s.mapping && (l.mapping = n(s.mapping, Xc)), void 0 !== s.offset && l.offset.fromArray(s.offset), void 0 !== s.repeat && l.repeat.fromArray(s.repeat), void 0 !== s.center && l.center.fromArray(s.center), void 0 !== s.rotation && (l.rotation = s.rotation), void 0 !== s.wrap && (l.wrapS = n(s.wrap[0], Jc), l.wrapT = n(s.wrap[1], Jc)), void 0 !== s.format && (l.format = s.format), void 0 !== s.type && (l.type = s.type), void 0 !== s.encoding && (l.encoding = s.encoding), void 0 !== s.minFilter && (l.minFilter = n(s.minFilter, Yc)), void 0 !== s.magFilter && (l.magFilter = n(s.magFilter, Yc)), void 0 !== s.anisotropy && (l.anisotropy = s.anisotropy), void 0 !== s.flipY && (l.flipY = s.flipY), void 0 !== s.premultiplyAlpha && (l.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (l.unpackAlignment = s.unpackAlignment), void 0 !== s.userData && (l.userData = s.userData), i[s.uuid] = l;
            }
            return i;
        }
        parseObject(t1, e, n, i, r) {
            let s, a, o;
            function l(t1) {
                return void 0 === e[t1] && console.warn("THREE.ObjectLoader: Undefined geometry", t1), e[t1];
            }
            function c(t1) {
                if (void 0 !== t1) {
                    if (Array.isArray(t1)) {
                        const e = [];
                        for(let i = 0, r = t1.length; i < r; i++){
                            const r = t1[i];
                            void 0 === n[r] && console.warn("THREE.ObjectLoader: Undefined material", r), e.push(n[r]);
                        }
                        return e;
                    }
                    return void 0 === n[t1] && console.warn("THREE.ObjectLoader: Undefined material", t1), n[t1];
                }
            }
            function h(t1) {
                return void 0 === i[t1] && console.warn("THREE.ObjectLoader: Undefined texture", t1), i[t1];
            }
            switch(t1.type){
                case "Scene":
                    s = new ha, void 0 !== t1.background && (Number.isInteger(t1.background) ? s.background = new Wt(t1.background) : s.background = h(t1.background)), void 0 !== t1.environment && (s.environment = h(t1.environment)), void 0 !== t1.fog && ("Fog" === t1.fog.type ? s.fog = new ca(t1.fog.color, t1.fog.near, t1.fog.far) : "FogExp2" === t1.fog.type && (s.fog = new la(t1.fog.color, t1.fog.density)));
                    break;
                case "PerspectiveCamera":
                    s = new fi(t1.fov, t1.aspect, t1.near, t1.far), void 0 !== t1.focus && (s.focus = t1.focus), void 0 !== t1.zoom && (s.zoom = t1.zoom), void 0 !== t1.filmGauge && (s.filmGauge = t1.filmGauge), void 0 !== t1.filmOffset && (s.filmOffset = t1.filmOffset), void 0 !== t1.view && (s.view = Object.assign({}, t1.view));
                    break;
                case "OrthographicCamera":
                    s = new Fi(t1.left, t1.right, t1.top, t1.bottom, t1.near, t1.far), void 0 !== t1.zoom && (s.zoom = t1.zoom), void 0 !== t1.view && (s.view = Object.assign({}, t1.view));
                    break;
                case "AmbientLight":
                    s = new Fc(t1.color, t1.intensity);
                    break;
                case "DirectionalLight":
                    s = new Uc(t1.color, t1.intensity);
                    break;
                case "PointLight":
                    s = new zc(t1.color, t1.intensity, t1.distance, t1.decay);
                    break;
                case "RectAreaLight":
                    s = new Hc(t1.color, t1.intensity, t1.width, t1.height);
                    break;
                case "SpotLight":
                    s = new Pc(t1.color, t1.intensity, t1.distance, t1.angle, t1.penumbra, t1.decay);
                    break;
                case "HemisphereLight":
                    s = new Tc(t1.color, t1.groundColor, t1.intensity);
                    break;
                case "LightProbe":
                    s = (new kc).fromJSON(t1);
                    break;
                case "SkinnedMesh":
                    a = l(t1.geometry), o = c(t1.material), s = new Ua(a, o), void 0 !== t1.bindMode && (s.bindMode = t1.bindMode), void 0 !== t1.bindMatrix && s.bindMatrix.fromArray(t1.bindMatrix), void 0 !== t1.skeleton && (s.skeleton = t1.skeleton);
                    break;
                case "Mesh":
                    a = l(t1.geometry), o = c(t1.material), s = new oi(a, o);
                    break;
                case "InstancedMesh":
                    a = l(t1.geometry), o = c(t1.material);
                    const e1 = t1.count, n1 = t1.instanceMatrix, i1 = t1.instanceColor;
                    s = new Ya(a, o, e1), s.instanceMatrix = new Wa(new Float32Array(n1.array), 16), void 0 !== i1 && (s.instanceColor = new Wa(new Float32Array(i1.array), i1.itemSize));
                    break;
                case "LOD":
                    s = new Da;
                    break;
                case "Line":
                    s = new no(l(t1.geometry), c(t1.material));
                    break;
                case "LineLoop":
                    s = new ao(l(t1.geometry), c(t1.material));
                    break;
                case "LineSegments":
                    s = new so(l(t1.geometry), c(t1.material));
                    break;
                case "PointCloud":
                case "Points":
                    s = new po(l(t1.geometry), c(t1.material));
                    break;
                case "Sprite":
                    s = new Ra(c(t1.material));
                    break;
                case "Group":
                    s = new ta;
                    break;
                case "Bone":
                    s = new Fa;
                    break;
                default:
                    s = new ln;
            }
            if (s.uuid = t1.uuid, void 0 !== t1.name && (s.name = t1.name), void 0 !== t1.matrix ? (s.matrix.fromArray(t1.matrix), void 0 !== t1.matrixAutoUpdate && (s.matrixAutoUpdate = t1.matrixAutoUpdate), s.matrixAutoUpdate && s.matrix.decompose(s.position, s.quaternion, s.scale)) : (void 0 !== t1.position && s.position.fromArray(t1.position), void 0 !== t1.rotation && s.rotation.fromArray(t1.rotation), void 0 !== t1.quaternion && s.quaternion.fromArray(t1.quaternion), void 0 !== t1.scale && s.scale.fromArray(t1.scale)), void 0 !== t1.castShadow && (s.castShadow = t1.castShadow), void 0 !== t1.receiveShadow && (s.receiveShadow = t1.receiveShadow), t1.shadow && (void 0 !== t1.shadow.bias && (s.shadow.bias = t1.shadow.bias), void 0 !== t1.shadow.normalBias && (s.shadow.normalBias = t1.shadow.normalBias), void 0 !== t1.shadow.radius && (s.shadow.radius = t1.shadow.radius), void 0 !== t1.shadow.mapSize && s.shadow.mapSize.fromArray(t1.shadow.mapSize), void 0 !== t1.shadow.camera && (s.shadow.camera = this.parseObject(t1.shadow.camera))), void 0 !== t1.visible && (s.visible = t1.visible), void 0 !== t1.frustumCulled && (s.frustumCulled = t1.frustumCulled), void 0 !== t1.renderOrder && (s.renderOrder = t1.renderOrder), void 0 !== t1.userData && (s.userData = t1.userData), void 0 !== t1.layers && (s.layers.mask = t1.layers), void 0 !== t1.children) {
                const a = t1.children;
                for(let t1 = 0; t1 < a.length; t1++)s.add(this.parseObject(a[t1], e, n, i, r));
            }
            if (void 0 !== t1.animations) {
                const e = t1.animations;
                for(let t1 = 0; t1 < e.length; t1++){
                    const n = e[t1];
                    s.animations.push(r[n]);
                }
            }
            if ("LOD" === t1.type) {
                void 0 !== t1.autoUpdate && (s.autoUpdate = t1.autoUpdate);
                const e = t1.levels;
                for(let t1 = 0; t1 < e.length; t1++){
                    const n = e[t1], i = s.getObjectByProperty("uuid", n.object);
                    void 0 !== i && s.addLevel(i, n.distance);
                }
            }
            return s;
        }
        bindSkeletons(t1, e) {
            0 !== Object.keys(e).length && t1.traverse(function(t1) {
                if (!0 === t1.isSkinnedMesh && void 0 !== t1.skeleton) {
                    const n = e[t1.skeleton];
                    void 0 === n ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t1.skeleton) : t1.bind(n, t1.bindMatrix);
                }
            });
        }
        setTexturePath(t1) {
            return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t1);
        }
    }, t1.ObjectSpaceNormalMap = 1, t1.OctahedronBufferGeometry = Pl, t1.OctahedronGeometry = Pl, t1.OneFactor = 201, t1.OneMinusDstAlphaFactor = 207, t1.OneMinusDstColorFactor = 209, t1.OneMinusSrcAlphaFactor = 205, t1.OneMinusSrcColorFactor = 203, t1.OrthographicCamera = Fi, t1.PCFShadowMap = 1, t1.PCFSoftShadowMap = 2, t1.PMREMGenerator = Ji, t1.ParametricGeometry = class extends Vn {
        constructor(){
            console.error("THREE.ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js"), super();
        }
    }, t1.Particle = class extends Ra {
        constructor(t1){
            console.warn("THREE.Particle has been renamed to THREE.Sprite."), super(t1);
        }
    }, t1.ParticleBasicMaterial = class extends oo {
        constructor(t1){
            console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), super(t1);
        }
    }, t1.ParticleSystem = class extends po {
        constructor(t1, e){
            console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), super(t1, e);
        }
    }, t1.ParticleSystemMaterial = class extends oo {
        constructor(t1){
            console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), super(t1);
        }
    }, t1.Path = Ho, t1.PerspectiveCamera = fi, t1.Plane = wi, t1.PlaneBufferGeometry = Ci, t1.PlaneGeometry = Ci, t1.PlaneHelper = class extends no {
        constructor(t1, e = 1, n = 16776960){
            const i = n, r = new Vn;
            r.setAttribute("position", new Nn([
                1,
                -1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                -1,
                1,
                1,
                1,
                1,
                0,
                0,
                1,
                0,
                0,
                0
            ], 3)), r.computeBoundingSphere(), super(r, new Za({
                color: i,
                toneMapped: !1
            })), this.type = "PlaneHelper", this.plane = t1, this.size = e;
            const s = new Vn;
            s.setAttribute("position", new Nn([
                1,
                1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                -1,
                1
            ], 3)), s.computeBoundingSphere(), this.add(new oi(s, new Mn({
                color: i,
                opacity: .2,
                transparent: !0,
                depthWrite: !1,
                toneMapped: !1
            })));
        }
        updateMatrixWorld(t1) {
            let e = -this.plane.constant;
            Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? 1 : 0, this.lookAt(this.plane.normal), super.updateMatrixWorld(t1);
        }
    }, t1.PointCloud = class extends po {
        constructor(t1, e){
            console.warn("THREE.PointCloud has been renamed to THREE.Points."), super(t1, e);
        }
    }, t1.PointCloudMaterial = class extends oo {
        constructor(t1){
            console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), super(t1);
        }
    }, t1.PointLight = zc, t1.PointLightHelper = class extends oi {
        constructor(t1, e, n){
            super(new Nl(e, 4, 2), new Mn({
                wireframe: !0,
                fog: !1,
                toneMapped: !1
            })), this.light = t1, this.light.updateMatrixWorld(), this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
        update() {
            void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
        }
    }, t1.Points = po, t1.PointsMaterial = oo, t1.PolarGridHelper = class extends so {
        constructor(t1 = 10, e = 16, n = 8, i = 64, r = 4473924, s = 8947848){
            r = new Wt(r), s = new Wt(s);
            const a = [], o = [];
            for(let n = 0; n <= e; n++){
                const i = n / e * (2 * Math.PI), l = Math.sin(i) * t1, c = Math.cos(i) * t1;
                a.push(0, 0, 0), a.push(l, 0, c);
                const h = 1 & n ? r : s;
                o.push(h.r, h.g, h.b), o.push(h.r, h.g, h.b);
            }
            for(let e = 0; e <= n; e++){
                const l = 1 & e ? r : s, c = t1 - t1 / n * e;
                for(let t1 = 0; t1 < i; t1++){
                    let e = t1 / i * (2 * Math.PI), n = Math.sin(e) * c, r = Math.cos(e) * c;
                    a.push(n, 0, r), o.push(l.r, l.g, l.b), e = (t1 + 1) / i * (2 * Math.PI), n = Math.sin(e) * c, r = Math.cos(e) * c, a.push(n, 0, r), o.push(l.r, l.g, l.b);
                }
            }
            const l = new Vn;
            l.setAttribute("position", new Nn(a, 3)), l.setAttribute("color", new Nn(o, 3));
            super(l, new Za({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "PolarGridHelper";
        }
    }, t1.PolyhedronBufferGeometry = qo, t1.PolyhedronGeometry = qo, t1.PositionalAudio = class extends uh {
        constructor(t1){
            super(t1), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
        }
        disconnect() {
            super.disconnect(), this.panner.disconnect(this.gain);
        }
        getOutput() {
            return this.panner;
        }
        getRefDistance() {
            return this.panner.refDistance;
        }
        setRefDistance(t1) {
            return this.panner.refDistance = t1, this;
        }
        getRolloffFactor() {
            return this.panner.rolloffFactor;
        }
        setRolloffFactor(t1) {
            return this.panner.rolloffFactor = t1, this;
        }
        getDistanceModel() {
            return this.panner.distanceModel;
        }
        setDistanceModel(t1) {
            return this.panner.distanceModel = t1, this;
        }
        getMaxDistance() {
            return this.panner.maxDistance;
        }
        setMaxDistance(t1) {
            return this.panner.maxDistance = t1, this;
        }
        setDirectionalCone(t1, e, n) {
            return this.panner.coneInnerAngle = t1, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = n, this;
        }
        updateMatrixWorld(t1) {
            if (super.updateMatrixWorld(t1), !0 === this.hasPlaybackControl && !1 === this.isPlaying) return;
            this.matrixWorld.decompose(dh, ph, mh), fh.set(0, 0, 1).applyQuaternion(ph);
            const e = this.panner;
            if (e.positionX) {
                const t1 = this.context.currentTime + this.listener.timeDelta;
                e.positionX.linearRampToValueAtTime(dh.x, t1), e.positionY.linearRampToValueAtTime(dh.y, t1), e.positionZ.linearRampToValueAtTime(dh.z, t1), e.orientationX.linearRampToValueAtTime(fh.x, t1), e.orientationY.linearRampToValueAtTime(fh.y, t1), e.orientationZ.linearRampToValueAtTime(fh.z, t1);
            } else e.setPosition(dh.x, dh.y, dh.z), e.setOrientation(fh.x, fh.y, fh.z);
        }
    }, t1.PropertyBinding = Rh, t1.PropertyMixer = vh, t1.QuadraticBezierCurve = Bo, t1.QuadraticBezierCurve3 = zo, t1.Quaternion = re, t1.QuaternionKeyframeTrack = cc, t1.QuaternionLinearInterpolant = lc, t1.REVISION = e, t1.RGBADepthPacking = 3201, t1.RGBAFormat = S, t1.RGBAIntegerFormat = 1033, t1.RGBA_ASTC_10x10_Format = J, t1.RGBA_ASTC_10x5_Format = j, t1.RGBA_ASTC_10x6_Format = q, t1.RGBA_ASTC_10x8_Format = X, t1.RGBA_ASTC_12x10_Format = Y, t1.RGBA_ASTC_12x12_Format = Z, t1.RGBA_ASTC_4x4_Format = O, t1.RGBA_ASTC_5x4_Format = U, t1.RGBA_ASTC_5x5_Format = F, t1.RGBA_ASTC_6x5_Format = H, t1.RGBA_ASTC_6x6_Format = G, t1.RGBA_ASTC_8x5_Format = k, t1.RGBA_ASTC_8x6_Format = V, t1.RGBA_ASTC_8x8_Format = W, t1.RGBA_BPTC_Format = K, t1.RGBA_ETC2_EAC_Format = z, t1.RGBA_PVRTC_2BPPV1_Format = N, t1.RGBA_PVRTC_4BPPV1_Format = I, t1.RGBA_S3TC_DXT1_Format = R, t1.RGBA_S3TC_DXT3_Format = C, t1.RGBA_S3TC_DXT5_Format = L, t1.RGBFormat = 1022, t1.RGB_ETC1_Format = 36196, t1.RGB_ETC2_Format = B, t1.RGB_PVRTC_2BPPV1_Format = D, t1.RGB_PVRTC_4BPPV1_Format = P, t1.RGB_S3TC_DXT1_Format = A, t1.RGFormat = 1030, t1.RGIntegerFormat = 1031, t1.RawShaderMaterial = Vl, t1.Ray = Be, t1.Raycaster = class {
        constructor(t1, e, n = 0, i = 1 / 0){
            this.ray = new Be(t1, e), this.near = n, this.far = i, this.camera = null, this.layers = new Xe, this.params = {
                Mesh: {},
                Line: {
                    threshold: 1
                },
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            };
        }
        set(t1, e) {
            this.ray.set(t1, e);
        }
        setFromCamera(t1, e) {
            e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t1.x, t1.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t1.x, t1.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
        }
        intersectObject(t1, e = !0, n = []) {
            return zh(t1, this, n, e), n.sort(Bh), n;
        }
        intersectObjects(t1, e = !0, n = []) {
            for(let i = 0, r = t1.length; i < r; i++)zh(t1[i], this, n, e);
            return n.sort(Bh), n;
        }
    }, t1.RectAreaLight = Hc, t1.RedFormat = 1028, t1.RedIntegerFormat = 1029, t1.ReinhardToneMapping = 2, t1.RepeatWrapping = c, t1.ReplaceStencilOp = 7681, t1.ReverseSubtractEquation = 102, t1.RingBufferGeometry = Dl, t1.RingGeometry = Dl, t1.SRGBColorSpace = lt, t1.Scene = ha, t1.SceneUtils = yu, t1.ShaderChunk = Li, t1.ShaderLib = Di, t1.ShaderMaterial = pi, t1.ShadowMaterial = kl, t1.Shape = $o, t1.ShapeBufferGeometry = Il, t1.ShapeGeometry = Il, t1.ShapePath = class {
        constructor(){
            this.type = "ShapePath", this.color = new Wt, this.subPaths = [], this.currentPath = null;
        }
        moveTo(t1, e) {
            return this.currentPath = new Ho, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t1, e), this;
        }
        lineTo(t1, e) {
            return this.currentPath.lineTo(t1, e), this;
        }
        quadraticCurveTo(t1, e, n, i) {
            return this.currentPath.quadraticCurveTo(t1, e, n, i), this;
        }
        bezierCurveTo(t1, e, n, i, r, s) {
            return this.currentPath.bezierCurveTo(t1, e, n, i, r, s), this;
        }
        splineThru(t1) {
            return this.currentPath.splineThru(t1), this;
        }
        toShapes(t1, e) {
            function n(t1) {
                const e = [];
                for(let n = 0, i = t1.length; n < i; n++){
                    const i = t1[n], r = new $o;
                    r.curves = i.curves, e.push(r);
                }
                return e;
            }
            function i(t1, e) {
                const n = e.length;
                let i = !1;
                for(let r = n - 1, s = 0; s < n; r = s++){
                    let n = e[r], a = e[s], o = a.x - n.x, l = a.y - n.y;
                    if (Math.abs(l) > Number.EPSILON) {
                        if (l < 0 && (n = e[s], o = -o, a = e[r], l = -l), t1.y < n.y || t1.y > a.y) continue;
                        if (t1.y === n.y) {
                            if (t1.x === n.x) return !0;
                        } else {
                            const e = l * (t1.x - n.x) - o * (t1.y - n.y);
                            if (0 === e) return !0;
                            if (e < 0) continue;
                            i = !i;
                        }
                    } else {
                        if (t1.y !== n.y) continue;
                        if (a.x <= t1.x && t1.x <= n.x || n.x <= t1.x && t1.x <= a.x) return !0;
                    }
                }
                return i;
            }
            const r = Tl.isClockWise, s = this.subPaths;
            if (0 === s.length) return [];
            if (!0 === e) return n(s);
            let a, o, l;
            const c = [];
            if (1 === s.length) return o = s[0], l = new $o, l.curves = o.curves, c.push(l), c;
            let h = !r(s[0].getPoints());
            h = t1 ? !h : h;
            const u = [], d = [];
            let p, m, f = [], g = 0;
            d[g] = void 0, f[g] = [];
            for(let e = 0, n = s.length; e < n; e++)o = s[e], p = o.getPoints(), a = r(p), a = t1 ? !a : a, a ? (!h && d[g] && g++, d[g] = {
                s: new $o,
                p: p
            }, d[g].s.curves = o.curves, h && g++, f[g] = []) : f[g].push({
                h: o,
                p: p[0]
            });
            if (!d[0]) return n(s);
            if (d.length > 1) {
                let t1 = !1, e = 0;
                for(let t1 = 0, e = d.length; t1 < e; t1++)u[t1] = [];
                for(let n = 0, r = d.length; n < r; n++){
                    const r = f[n];
                    for(let s = 0; s < r.length; s++){
                        const a = r[s];
                        let o = !0;
                        for(let r = 0; r < d.length; r++)i(a.p, d[r].p) && (n !== r && e++, o ? (o = !1, u[r].push(a)) : t1 = !0);
                        o && u[n].push(a);
                    }
                }
                e > 0 && !1 === t1 && (f = u);
            }
            for(let t1 = 0, e = d.length; t1 < e; t1++){
                l = d[t1].s, c.push(l), m = f[t1];
                for(let t1 = 0, e = m.length; t1 < e; t1++)l.holes.push(m[t1].h);
            }
            return c;
        }
    }, t1.ShapeUtils = Tl, t1.ShortType = 1011, t1.Skeleton = Va, t1.SkeletonHelper = qh, t1.SkinnedMesh = Ua, t1.SmoothShading = 2, t1.Source = Xt, t1.Sphere = Ae, t1.SphereBufferGeometry = Nl, t1.SphereGeometry = Nl, t1.Spherical = class {
        constructor(t1 = 1, e = 0, n = 0){
            return this.radius = t1, this.phi = e, this.theta = n, this;
        }
        set(t1, e, n) {
            return this.radius = t1, this.phi = e, this.theta = n, this;
        }
        copy(t1) {
            return this.radius = t1.radius, this.phi = t1.phi, this.theta = t1.theta, this;
        }
        makeSafe() {
            const t1 = 1e-6;
            return this.phi = Math.max(t1, Math.min(Math.PI - t1, this.phi)), this;
        }
        setFromVector3(t1) {
            return this.setFromCartesianCoords(t1.x, t1.y, t1.z);
        }
        setFromCartesianCoords(t1, e, n) {
            return this.radius = Math.sqrt(t1 * t1 + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t1, n), this.phi = Math.acos(bt(e / this.radius, -1, 1))), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t1.SphericalHarmonics3 = Gc, t1.SplineCurve = Oo, t1.SpotLight = Pc, t1.SpotLightHelper = class extends ln {
        constructor(t1, e){
            super(), this.light = t1, this.light.updateMatrixWorld(), this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
            const n = new Vn, i = [
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0,
                1,
                0,
                0,
                0,
                -1,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                1,
                0,
                0,
                0,
                0,
                -1,
                1
            ];
            for(let t1 = 0, e = 1, n = 32; t1 < n; t1++, e++){
                const r = t1 / n * Math.PI * 2, s = e / n * Math.PI * 2;
                i.push(Math.cos(r), Math.sin(r), 1, Math.cos(s), Math.sin(s), 1);
            }
            n.setAttribute("position", new Nn(i, 3));
            const r = new Za({
                fog: !1,
                toneMapped: !1
            });
            this.cone = new so(n, r), this.add(this.cone), this.update();
        }
        dispose() {
            this.cone.geometry.dispose(), this.cone.material.dispose();
        }
        update() {
            this.light.updateMatrixWorld();
            const t1 = this.light.distance ? this.light.distance : 1e3, e = t1 * Math.tan(this.light.angle);
            this.cone.scale.set(e, e, t1), kh.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(kh), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
        }
    }, t1.Sprite = Ra, t1.SpriteMaterial = ma, t1.SrcAlphaFactor = 204, t1.SrcAlphaSaturateFactor = 210, t1.SrcColorFactor = 202, t1.StaticCopyUsage = 35046, t1.StaticDrawUsage = ut, t1.StaticReadUsage = 35045, t1.StereoCamera = class {
        constructor(){
            this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new fi, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new fi, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
                focus: null,
                fov: null,
                aspect: null,
                near: null,
                far: null,
                zoom: null,
                eyeSep: null
            };
        }
        update(t1) {
            const e = this._cache;
            if (e.focus !== t1.focus || e.fov !== t1.fov || e.aspect !== t1.aspect * this.aspect || e.near !== t1.near || e.far !== t1.far || e.zoom !== t1.zoom || e.eyeSep !== this.eyeSep) {
                e.focus = t1.focus, e.fov = t1.fov, e.aspect = t1.aspect * this.aspect, e.near = t1.near, e.far = t1.far, e.zoom = t1.zoom, e.eyeSep = this.eyeSep, rh.copy(t1.projectionMatrix);
                const n = e.eyeSep / 2, i = n * e.near / e.focus, r = e.near * Math.tan(yt * e.fov * .5) / e.zoom;
                let s, a;
                ih.elements[12] = -n, nh.elements[12] = n, s = -r * e.aspect + i, a = r * e.aspect + i, rh.elements[0] = 2 * e.near / (a - s), rh.elements[8] = (a + s) / (a - s), this.cameraL.projectionMatrix.copy(rh), s = -r * e.aspect - i, a = r * e.aspect - i, rh.elements[0] = 2 * e.near / (a - s), rh.elements[8] = (a + s) / (a - s), this.cameraR.projectionMatrix.copy(rh);
            }
            this.cameraL.matrixWorld.copy(t1.matrixWorld).multiply(ih), this.cameraR.matrixWorld.copy(t1.matrixWorld).multiply(nh);
        }
    }, t1.StreamCopyUsage = 35042, t1.StreamDrawUsage = 35040, t1.StreamReadUsage = 35041, t1.StringKeyframeTrack = hc, t1.SubtractEquation = 101, t1.SubtractiveBlending = 3, t1.TOUCH = {
        ROTATE: 0,
        PAN: 1,
        DOLLY_PAN: 2,
        DOLLY_ROTATE: 3
    }, t1.TangentSpaceNormalMap = 0, t1.TetrahedronBufferGeometry = Bl, t1.TetrahedronGeometry = Bl, t1.TextGeometry = class extends Vn {
        constructor(){
            console.error("THREE.TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js"), super();
        }
    }, t1.Texture = Zt, t1.TextureLoader = wc, t1.TorusBufferGeometry = zl, t1.TorusGeometry = zl, t1.TorusKnotBufferGeometry = Ol, t1.TorusKnotGeometry = Ol, t1.Triangle = xn, t1.TriangleFanDrawMode = 2, t1.TriangleStripDrawMode = 1, t1.TrianglesDrawMode = 0, t1.TubeBufferGeometry = Ul, t1.TubeGeometry = Ul, t1.UVMapping = i, t1.Uint16Attribute = class extends Ln {
        constructor(t1, e){
            console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), super(t1, e);
        }
    }, t1.Uint16BufferAttribute = Ln, t1.Uint32Attribute = class extends Dn {
        constructor(t1, e){
            console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), super(t1, e);
        }
    }, t1.Uint32BufferAttribute = Dn, t1.Uint8Attribute = class extends An {
        constructor(t1, e){
            console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), super(t1, e);
        }
    }, t1.Uint8BufferAttribute = An, t1.Uint8ClampedAttribute = class extends Rn {
        constructor(t1, e){
            console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), super(t1, e);
        }
    }, t1.Uint8ClampedBufferAttribute = Rn, t1.Uniform = Dh, t1.UniformsLib = Pi, t1.UniformsUtils = di, t1.UnsignedByteType = y, t1.UnsignedInt248Type = w, t1.UnsignedIntType = _, t1.UnsignedShort4444Type = 1017, t1.UnsignedShort5551Type = 1018, t1.UnsignedShortType = x, t1.VSMShadowMap = 3, t1.Vector2 = Rt, t1.Vector3 = se, t1.Vector4 = Kt, t1.VectorKeyframeTrack = uc, t1.Vertex = class extends se {
        constructor(t1, e, n){
            console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), super(t1, e, n);
        }
    }, t1.VertexColors = 2, t1.VideoTexture = fo, t1.WebGL1Renderer = oa, t1.WebGL3DRenderTarget = ne, t1.WebGLArrayRenderTarget = te, t1.WebGLCubeRenderTarget = xi, t1.WebGLMultipleRenderTargets = ie, t1.WebGLMultisampleRenderTarget = class extends Qt {
        constructor(t1, e, n){
            console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'), super(t1, e, n), this.samples = 4;
        }
    }, t1.WebGLRenderTarget = Qt, t1.WebGLRenderTargetCube = class extends xi {
        constructor(t1, e, n){
            console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."), super(t1, n);
        }
    }, t1.WebGLRenderer = aa, t1.WebGLUtils = Qs, t1.WireframeGeometry = Fl, t1.WireframeHelper = class extends so {
        constructor(t1, e){
            console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), super(new Fl(t1.geometry), new Za({
                color: void 0 !== e ? e : 16777215
            }));
        }
    }, t1.WrapAroundEnding = it, t1.XHRLoader = class extends xc {
        constructor(t1){
            console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), super(t1);
        }
    }, t1.ZeroCurvatureEnding = et, t1.ZeroFactor = 200, t1.ZeroSlopeEnding = nt, t1.ZeroStencilOp = 0, t1._SRGBAFormat = mt, t1.sRGBEncoding = ot, Object.defineProperty(t1, "__esModule", {
        value: !0
    });
});

},{}]},["jTKkz","bn3Ej"], "bn3Ej", "parcelRequire0811")

//# sourceMappingURL=index.285a6998.js.map
