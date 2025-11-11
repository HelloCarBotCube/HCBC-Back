(function () {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]')) s(c);
    new MutationObserver(c => {
        for (const f of c) if (f.type === "childList") for (const d of f.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && s(d)
    }).observe(document, {childList: !0, subtree: !0});

    function u(c) {
        const f = {};
        return c.integrity && (f.integrity = c.integrity), c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
    }

    function s(c) {
        if (c.ep) return;
        c.ep = !0;
        const f = u(c);
        fetch(c.href, f)
    }
})();

function $0(l) {
    return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l
}

var No = {exports: {}}, ui = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;

function by() {
    if (ip) return ui;
    ip = 1;
    var l = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");

    function u(s, c, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f), c.key !== void 0 && (d = "" + c.key), "key" in c) {
            f = {};
            for (var p in c) p !== "key" && (f[p] = c[p])
        } else f = c;
        return c = f.ref, {$$typeof: l, type: s, key: d, ref: c !== void 0 ? c : null, props: f}
    }

    return ui.Fragment = i, ui.jsx = u, ui.jsxs = u, ui
}

var rp;

function Sy() {
    return rp || (rp = 1, No.exports = by()), No.exports
}

var S = Sy(), jo = {exports: {}}, he = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;

function _y() {
    if (sp) return he;
    sp = 1;
    var l = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), u = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"),
        d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"),
        h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.iterator;

    function _(T) {
        return T === null || typeof T != "object" ? null : (T = b && T[b] || T["@@iterator"], typeof T == "function" ? T : null)
    }

    var j = {
        isMounted: function () {
            return !1
        }, enqueueForceUpdate: function () {
        }, enqueueReplaceState: function () {
        }, enqueueSetState: function () {
        }
    }, x = Object.assign, w = {};

    function N(T, I, ne) {
        this.props = T, this.context = I, this.refs = w, this.updater = ne || j
    }

    N.prototype.isReactComponent = {}, N.prototype.setState = function (T, I) {
        if (typeof T != "object" && typeof T != "function" && T != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, T, I, "setState")
    }, N.prototype.forceUpdate = function (T) {
        this.updater.enqueueForceUpdate(this, T, "forceUpdate")
    };

    function Y() {
    }

    Y.prototype = N.prototype;

    function C(T, I, ne) {
        this.props = T, this.context = I, this.refs = w, this.updater = ne || j
    }

    var z = C.prototype = new Y;
    z.constructor = C, x(z, N.prototype), z.isPureReactComponent = !0;
    var M = Array.isArray, D = {H: null, A: null, T: null, S: null, V: null}, J = Object.prototype.hasOwnProperty;

    function O(T, I, ne, ee, re, be) {
        return ne = be.ref, {$$typeof: l, type: T, key: I, ref: ne !== void 0 ? ne : null, props: be}
    }

    function R(T, I) {
        return O(T.type, I, void 0, void 0, void 0, T.props)
    }

    function G(T) {
        return typeof T == "object" && T !== null && T.$$typeof === l
    }

    function F(T) {
        var I = {"=": "=0", ":": "=2"};
        return "$" + T.replace(/[=:]/g, function (ne) {
            return I[ne]
        })
    }

    var te = /\/+/g;

    function ae(T, I) {
        return typeof T == "object" && T !== null && T.key != null ? F("" + T.key) : I.toString(36)
    }

    function W() {
    }

    function Ee(T) {
        switch (T.status) {
            case"fulfilled":
                return T.value;
            case"rejected":
                throw T.reason;
            default:
                switch (typeof T.status == "string" ? T.then(W, W) : (T.status = "pending", T.then(function (I) {
                    T.status === "pending" && (T.status = "fulfilled", T.value = I)
                }, function (I) {
                    T.status === "pending" && (T.status = "rejected", T.reason = I)
                })), T.status) {
                    case"fulfilled":
                        return T.value;
                    case"rejected":
                        throw T.reason
                }
        }
        throw T
    }

    function me(T, I, ne, ee, re) {
        var be = typeof T;
        (be === "undefined" || be === "boolean") && (T = null);
        var ce = !1;
        if (T === null) ce = !0; else switch (be) {
            case"bigint":
            case"string":
            case"number":
                ce = !0;
                break;
            case"object":
                switch (T.$$typeof) {
                    case l:
                    case i:
                        ce = !0;
                        break;
                    case g:
                        return ce = T._init, me(ce(T._payload), I, ne, ee, re)
                }
        }
        if (ce) return re = re(T), ce = ee === "" ? "." + ae(T, 0) : ee, M(re) ? (ne = "", ce != null && (ne = ce.replace(te, "$&/") + "/"), me(re, I, ne, "", function (Sn) {
            return Sn
        })) : re != null && (G(re) && (re = R(re, ne + (re.key == null || T && T.key === re.key ? "" : ("" + re.key).replace(te, "$&/") + "/") + ce)), I.push(re)), 1;
        ce = 0;
        var pt = ee === "" ? "." : ee + ":";
        if (M(T)) for (var De = 0; De < T.length; De++) ee = T[De], be = pt + ae(ee, De), ce += me(ee, I, ne, be, re); else if (De = _(T), typeof De == "function") for (T = De.call(T), De = 0; !(ee = T.next()).done;) ee = ee.value, be = pt + ae(ee, De++), ce += me(ee, I, ne, be, re); else if (be === "object") {
            if (typeof T.then == "function") return me(Ee(T), I, ne, ee, re);
            throw I = String(T), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ce
    }

    function X(T, I, ne) {
        if (T == null) return T;
        var ee = [], re = 0;
        return me(T, ee, "", "", function (be) {
            return I.call(ne, be, re++)
        }), ee
    }

    function P(T) {
        if (T._status === -1) {
            var I = T._result;
            I = I(), I.then(function (ne) {
                (T._status === 0 || T._status === -1) && (T._status = 1, T._result = ne)
            }, function (ne) {
                (T._status === 0 || T._status === -1) && (T._status = 2, T._result = ne)
            }), T._status === -1 && (T._status = 0, T._result = I)
        }
        if (T._status === 1) return T._result.default;
        throw T._result
    }

    var K = typeof reportError == "function" ? reportError : function (T) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var I = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
                error: T
            });
            if (!window.dispatchEvent(I)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", T);
            return
        }
        console.error(T)
    };

    function fe() {
    }

    return he.Children = {
        map: X, forEach: function (T, I, ne) {
            X(T, function () {
                I.apply(this, arguments)
            }, ne)
        }, count: function (T) {
            var I = 0;
            return X(T, function () {
                I++
            }), I
        }, toArray: function (T) {
            return X(T, function (I) {
                return I
            }) || []
        }, only: function (T) {
            if (!G(T)) throw Error("React.Children.only expected to receive a single React element child.");
            return T
        }
    }, he.Component = N, he.Fragment = u, he.Profiler = c, he.PureComponent = C, he.StrictMode = s, he.Suspense = v, he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D, he.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (T) {
            return D.H.useMemoCache(T)
        }
    }, he.cache = function (T) {
        return function () {
            return T.apply(null, arguments)
        }
    }, he.cloneElement = function (T, I, ne) {
        if (T == null) throw Error("The argument must be a React element, but you passed " + T + ".");
        var ee = x({}, T.props), re = T.key, be = void 0;
        if (I != null) for (ce in I.ref !== void 0 && (be = void 0), I.key !== void 0 && (re = "" + I.key), I) !J.call(I, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && I.ref === void 0 || (ee[ce] = I[ce]);
        var ce = arguments.length - 2;
        if (ce === 1) ee.children = ne; else if (1 < ce) {
            for (var pt = Array(ce), De = 0; De < ce; De++) pt[De] = arguments[De + 2];
            ee.children = pt
        }
        return O(T.type, re, void 0, void 0, be, ee)
    }, he.createContext = function (T) {
        return T = {
            $$typeof: d,
            _currentValue: T,
            _currentValue2: T,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, T.Provider = T, T.Consumer = {$$typeof: f, _context: T}, T
    }, he.createElement = function (T, I, ne) {
        var ee, re = {}, be = null;
        if (I != null) for (ee in I.key !== void 0 && (be = "" + I.key), I) J.call(I, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && (re[ee] = I[ee]);
        var ce = arguments.length - 2;
        if (ce === 1) re.children = ne; else if (1 < ce) {
            for (var pt = Array(ce), De = 0; De < ce; De++) pt[De] = arguments[De + 2];
            re.children = pt
        }
        if (T && T.defaultProps) for (ee in ce = T.defaultProps, ce) re[ee] === void 0 && (re[ee] = ce[ee]);
        return O(T, be, void 0, void 0, null, re)
    }, he.createRef = function () {
        return {current: null}
    }, he.forwardRef = function (T) {
        return {$$typeof: p, render: T}
    }, he.isValidElement = G, he.lazy = function (T) {
        return {$$typeof: g, _payload: {_status: -1, _result: T}, _init: P}
    }, he.memo = function (T, I) {
        return {$$typeof: h, type: T, compare: I === void 0 ? null : I}
    }, he.startTransition = function (T) {
        var I = D.T, ne = {};
        D.T = ne;
        try {
            var ee = T(), re = D.S;
            re !== null && re(ne, ee), typeof ee == "object" && ee !== null && typeof ee.then == "function" && ee.then(fe, K)
        } catch (be) {
            K(be)
        } finally {
            D.T = I
        }
    }, he.unstable_useCacheRefresh = function () {
        return D.H.useCacheRefresh()
    }, he.use = function (T) {
        return D.H.use(T)
    }, he.useActionState = function (T, I, ne) {
        return D.H.useActionState(T, I, ne)
    }, he.useCallback = function (T, I) {
        return D.H.useCallback(T, I)
    }, he.useContext = function (T) {
        return D.H.useContext(T)
    }, he.useDebugValue = function () {
    }, he.useDeferredValue = function (T, I) {
        return D.H.useDeferredValue(T, I)
    }, he.useEffect = function (T, I, ne) {
        var ee = D.H;
        if (typeof ne == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return ee.useEffect(T, I)
    }, he.useId = function () {
        return D.H.useId()
    }, he.useImperativeHandle = function (T, I, ne) {
        return D.H.useImperativeHandle(T, I, ne)
    }, he.useInsertionEffect = function (T, I) {
        return D.H.useInsertionEffect(T, I)
    }, he.useLayoutEffect = function (T, I) {
        return D.H.useLayoutEffect(T, I)
    }, he.useMemo = function (T, I) {
        return D.H.useMemo(T, I)
    }, he.useOptimistic = function (T, I) {
        return D.H.useOptimistic(T, I)
    }, he.useReducer = function (T, I, ne) {
        return D.H.useReducer(T, I, ne)
    }, he.useRef = function (T) {
        return D.H.useRef(T)
    }, he.useState = function (T) {
        return D.H.useState(T)
    }, he.useSyncExternalStore = function (T, I, ne) {
        return D.H.useSyncExternalStore(T, I, ne)
    }, he.useTransition = function () {
        return D.H.useTransition()
    }, he.version = "19.1.1", he
}

var up;

function Kc() {
    return up || (up = 1, jo.exports = _y()), jo.exports
}

var H = Kc();
const kr = $0(H);
var Uo = {exports: {}}, oi = {}, Do = {exports: {}}, Mo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;

function Ey() {
    return op || (op = 1, (function (l) {
        function i(X, P) {
            var K = X.length;
            X.push(P);
            e:for (; 0 < K;) {
                var fe = K - 1 >>> 1, T = X[fe];
                if (0 < c(T, P)) X[fe] = P, X[K] = T, K = fe; else break e
            }
        }

        function u(X) {
            return X.length === 0 ? null : X[0]
        }

        function s(X) {
            if (X.length === 0) return null;
            var P = X[0], K = X.pop();
            if (K !== P) {
                X[0] = K;
                e:for (var fe = 0, T = X.length, I = T >>> 1; fe < I;) {
                    var ne = 2 * (fe + 1) - 1, ee = X[ne], re = ne + 1, be = X[re];
                    if (0 > c(ee, K)) re < T && 0 > c(be, ee) ? (X[fe] = be, X[re] = K, fe = re) : (X[fe] = ee, X[ne] = K, fe = ne); else if (re < T && 0 > c(be, K)) X[fe] = be, X[re] = K, fe = re; else break e
                }
            }
            return P
        }

        function c(X, P) {
            var K = X.sortIndex - P.sortIndex;
            return K !== 0 ? K : X.id - P.id
        }

        if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            l.unstable_now = function () {
                return f.now()
            }
        } else {
            var d = Date, p = d.now();
            l.unstable_now = function () {
                return d.now() - p
            }
        }
        var v = [], h = [], g = 1, b = null, _ = 3, j = !1, x = !1, w = !1, N = !1,
            Y = typeof setTimeout == "function" ? setTimeout : null,
            C = typeof clearTimeout == "function" ? clearTimeout : null,
            z = typeof setImmediate < "u" ? setImmediate : null;

        function M(X) {
            for (var P = u(h); P !== null;) {
                if (P.callback === null) s(h); else if (P.startTime <= X) s(h), P.sortIndex = P.expirationTime, i(v, P); else break;
                P = u(h)
            }
        }

        function D(X) {
            if (w = !1, M(X), !x) if (u(v) !== null) x = !0, J || (J = !0, ae()); else {
                var P = u(h);
                P !== null && me(D, P.startTime - X)
            }
        }

        var J = !1, O = -1, R = 5, G = -1;

        function F() {
            return N ? !0 : !(l.unstable_now() - G < R)
        }

        function te() {
            if (N = !1, J) {
                var X = l.unstable_now();
                G = X;
                var P = !0;
                try {
                    e:{
                        x = !1, w && (w = !1, C(O), O = -1), j = !0;
                        var K = _;
                        try {
                            t:{
                                for (M(X), b = u(v); b !== null && !(b.expirationTime > X && F());) {
                                    var fe = b.callback;
                                    if (typeof fe == "function") {
                                        b.callback = null, _ = b.priorityLevel;
                                        var T = fe(b.expirationTime <= X);
                                        if (X = l.unstable_now(), typeof T == "function") {
                                            b.callback = T, M(X), P = !0;
                                            break t
                                        }
                                        b === u(v) && s(v), M(X)
                                    } else s(v);
                                    b = u(v)
                                }
                                if (b !== null) P = !0; else {
                                    var I = u(h);
                                    I !== null && me(D, I.startTime - X), P = !1
                                }
                            }
                            break e
                        } finally {
                            b = null, _ = K, j = !1
                        }
                        P = void 0
                    }
                } finally {
                    P ? ae() : J = !1
                }
            }
        }

        var ae;
        if (typeof z == "function") ae = function () {
            z(te)
        }; else if (typeof MessageChannel < "u") {
            var W = new MessageChannel, Ee = W.port2;
            W.port1.onmessage = te, ae = function () {
                Ee.postMessage(null)
            }
        } else ae = function () {
            Y(te, 0)
        };

        function me(X, P) {
            O = Y(function () {
                X(l.unstable_now())
            }, P)
        }

        l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function (X) {
            X.callback = null
        }, l.unstable_forceFrameRate = function (X) {
            0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < X ? Math.floor(1e3 / X) : 5
        }, l.unstable_getCurrentPriorityLevel = function () {
            return _
        }, l.unstable_next = function (X) {
            switch (_) {
                case 1:
                case 2:
                case 3:
                    var P = 3;
                    break;
                default:
                    P = _
            }
            var K = _;
            _ = P;
            try {
                return X()
            } finally {
                _ = K
            }
        }, l.unstable_requestPaint = function () {
            N = !0
        }, l.unstable_runWithPriority = function (X, P) {
            switch (X) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    X = 3
            }
            var K = _;
            _ = X;
            try {
                return P()
            } finally {
                _ = K
            }
        }, l.unstable_scheduleCallback = function (X, P, K) {
            var fe = l.unstable_now();
            switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? fe + K : fe) : K = fe, X) {
                case 1:
                    var T = -1;
                    break;
                case 2:
                    T = 250;
                    break;
                case 5:
                    T = 1073741823;
                    break;
                case 4:
                    T = 1e4;
                    break;
                default:
                    T = 5e3
            }
            return T = K + T, X = {
                id: g++,
                callback: P,
                priorityLevel: X,
                startTime: K,
                expirationTime: T,
                sortIndex: -1
            }, K > fe ? (X.sortIndex = K, i(h, X), u(v) === null && X === u(h) && (w ? (C(O), O = -1) : w = !0, me(D, K - fe))) : (X.sortIndex = T, i(v, X), x || j || (x = !0, J || (J = !0, ae()))), X
        }, l.unstable_shouldYield = F, l.unstable_wrapCallback = function (X) {
            var P = _;
            return function () {
                var K = _;
                _ = P;
                try {
                    return X.apply(this, arguments)
                } finally {
                    _ = K
                }
            }
        }
    })(Mo)), Mo
}

var cp;

function Ty() {
    return cp || (cp = 1, Do.exports = Ey()), Do.exports
}

var Ho = {exports: {}}, tt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp;

function xy() {
    if (fp) return tt;
    fp = 1;
    var l = Kc();

    function i(v) {
        var h = "https://react.dev/errors/" + v;
        if (1 < arguments.length) {
            h += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var g = 2; g < arguments.length; g++) h += "&args[]=" + encodeURIComponent(arguments[g])
        }
        return "Minified React error #" + v + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function u() {
    }

    var s = {
        d: {
            f: u, r: function () {
                throw Error(i(522))
            }, D: u, C: u, L: u, m: u, X: u, S: u, M: u
        }, p: 0, findDOMNode: null
    }, c = Symbol.for("react.portal");

    function f(v, h, g) {
        var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {$$typeof: c, key: b == null ? null : "" + b, children: v, containerInfo: h, implementation: g}
    }

    var d = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function p(v, h) {
        if (v === "font") return "";
        if (typeof h == "string") return h === "use-credentials" ? h : ""
    }

    return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, tt.createPortal = function (v, h) {
        var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11) throw Error(i(299));
        return f(v, h, null, g)
    }, tt.flushSync = function (v) {
        var h = d.T, g = s.p;
        try {
            if (d.T = null, s.p = 2, v) return v()
        } finally {
            d.T = h, s.p = g, s.d.f()
        }
    }, tt.preconnect = function (v, h) {
        typeof v == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, s.d.C(v, h))
    }, tt.prefetchDNS = function (v) {
        typeof v == "string" && s.d.D(v)
    }, tt.preinit = function (v, h) {
        if (typeof v == "string" && h && typeof h.as == "string") {
            var g = h.as, b = p(g, h.crossOrigin), _ = typeof h.integrity == "string" ? h.integrity : void 0,
                j = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
            g === "style" ? s.d.S(v, typeof h.precedence == "string" ? h.precedence : void 0, {
                crossOrigin: b,
                integrity: _,
                fetchPriority: j
            }) : g === "script" && s.d.X(v, {
                crossOrigin: b,
                integrity: _,
                fetchPriority: j,
                nonce: typeof h.nonce == "string" ? h.nonce : void 0
            })
        }
    }, tt.preinitModule = function (v, h) {
        if (typeof v == "string") if (typeof h == "object" && h !== null) {
            if (h.as == null || h.as === "script") {
                var g = p(h.as, h.crossOrigin);
                s.d.M(v, {
                    crossOrigin: g,
                    integrity: typeof h.integrity == "string" ? h.integrity : void 0,
                    nonce: typeof h.nonce == "string" ? h.nonce : void 0
                })
            }
        } else h == null && s.d.M(v)
    }, tt.preload = function (v, h) {
        if (typeof v == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
            var g = h.as, b = p(g, h.crossOrigin);
            s.d.L(v, g, {
                crossOrigin: b,
                integrity: typeof h.integrity == "string" ? h.integrity : void 0,
                nonce: typeof h.nonce == "string" ? h.nonce : void 0,
                type: typeof h.type == "string" ? h.type : void 0,
                fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
                referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
                imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
                imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
                media: typeof h.media == "string" ? h.media : void 0
            })
        }
    }, tt.preloadModule = function (v, h) {
        if (typeof v == "string") if (h) {
            var g = p(h.as, h.crossOrigin);
            s.d.m(v, {
                as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
                crossOrigin: g,
                integrity: typeof h.integrity == "string" ? h.integrity : void 0
            })
        } else s.d.m(v)
    }, tt.requestFormReset = function (v) {
        s.d.r(v)
    }, tt.unstable_batchedUpdates = function (v, h) {
        return v(h)
    }, tt.useFormState = function (v, h, g) {
        return d.H.useFormState(v, h, g)
    }, tt.useFormStatus = function () {
        return d.H.useHostTransitionStatus()
    }, tt.version = "19.1.1", tt
}

var dp;

function Ry() {
    if (dp) return Ho.exports;
    dp = 1;

    function l() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)
        } catch (i) {
            console.error(i)
        }
    }

    return l(), Ho.exports = xy(), Ho.exports
}

var hp;

function Cy() {
    if (hp) return oi;
    hp = 1;
    /**
     * @license React
     * react-dom-client.production.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var l = Ty(), i = Kc(), u = Ry();

    function s(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function c(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function f(e) {
        var t = e, n = e;
        if (e.alternate) for (; t.return;) t = t.return; else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? n : null
    }

    function d(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function p(e) {
        if (f(e) !== e) throw Error(s(188))
    }

    function v(e) {
        var t = e.alternate;
        if (!t) {
            if (t = f(e), t === null) throw Error(s(188));
            return t !== e ? null : e
        }
        for (var n = e, a = t; ;) {
            var r = n.return;
            if (r === null) break;
            var o = r.alternate;
            if (o === null) {
                if (a = r.return, a !== null) {
                    n = a;
                    continue
                }
                break
            }
            if (r.child === o.child) {
                for (o = r.child; o;) {
                    if (o === n) return p(r), e;
                    if (o === a) return p(r), t;
                    o = o.sibling
                }
                throw Error(s(188))
            }
            if (n.return !== a.return) n = r, a = o; else {
                for (var m = !1, y = r.child; y;) {
                    if (y === n) {
                        m = !0, n = r, a = o;
                        break
                    }
                    if (y === a) {
                        m = !0, a = r, n = o;
                        break
                    }
                    y = y.sibling
                }
                if (!m) {
                    for (y = o.child; y;) {
                        if (y === n) {
                            m = !0, n = o, a = r;
                            break
                        }
                        if (y === a) {
                            m = !0, a = o, n = r;
                            break
                        }
                        y = y.sibling
                    }
                    if (!m) throw Error(s(189))
                }
            }
            if (n.alternate !== a) throw Error(s(190))
        }
        if (n.tag !== 3) throw Error(s(188));
        return n.stateNode.current === n ? e : t
    }

    function h(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null;) {
            if (t = h(e), t !== null) return t;
            e = e.sibling
        }
        return null
    }

    var g = Object.assign, b = Symbol.for("react.element"), _ = Symbol.for("react.transitional.element"),
        j = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"),
        N = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), C = Symbol.for("react.consumer"),
        z = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"),
        J = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), R = Symbol.for("react.lazy"),
        G = Symbol.for("react.activity"), F = Symbol.for("react.memo_cache_sentinel"), te = Symbol.iterator;

    function ae(e) {
        return e === null || typeof e != "object" ? null : (e = te && e[te] || e["@@iterator"], typeof e == "function" ? e : null)
    }

    var W = Symbol.for("react.client.reference");

    function Ee(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === W ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case x:
                return "Fragment";
            case N:
                return "Profiler";
            case w:
                return "StrictMode";
            case D:
                return "Suspense";
            case J:
                return "SuspenseList";
            case G:
                return "Activity"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case j:
                return "Portal";
            case z:
                return (e.displayName || "Context") + ".Provider";
            case C:
                return (e._context.displayName || "Context") + ".Consumer";
            case M:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case O:
                return t = e.displayName || null, t !== null ? t : Ee(e.type) || "Memo";
            case R:
                t = e._payload, e = e._init;
                try {
                    return Ee(e(t))
                } catch {
                }
        }
        return null
    }

    var me = Array.isArray, X = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        P = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        K = {pending: !1, data: null, method: null, action: null}, fe = [], T = -1;

    function I(e) {
        return {current: e}
    }

    function ne(e) {
        0 > T || (e.current = fe[T], fe[T] = null, T--)
    }

    function ee(e, t) {
        T++, fe[T] = e.current, e.current = t
    }

    var re = I(null), be = I(null), ce = I(null), pt = I(null);

    function De(e, t) {
        switch (ee(ce, t), ee(be, e), ee(re, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? Dm(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI) t = Dm(t), e = Mm(t, e); else switch (e) {
                    case"svg":
                        e = 1;
                        break;
                    case"math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        ne(re), ee(re, e)
    }

    function Sn() {
        ne(re), ne(be), ne(ce)
    }

    function ms(e) {
        e.memoizedState !== null && ee(pt, e);
        var t = re.current, n = Mm(t, e.type);
        t !== n && (ee(be, e), ee(re, n))
    }

    function Ri(e) {
        be.current === e && (ne(re), ne(be)), pt.current === e && (ne(pt), ai._currentValue = K)
    }

    var ps = Object.prototype.hasOwnProperty, gs = l.unstable_scheduleCallback, vs = l.unstable_cancelCallback,
        F1 = l.unstable_shouldYield, W1 = l.unstable_requestPaint, Yt = l.unstable_now,
        P1 = l.unstable_getCurrentPriorityLevel, hf = l.unstable_ImmediatePriority,
        mf = l.unstable_UserBlockingPriority, Ci = l.unstable_NormalPriority, eg = l.unstable_LowPriority,
        pf = l.unstable_IdlePriority, tg = l.log, ng = l.unstable_setDisableYieldValue, fl = null, gt = null;

    function _n(e) {
        if (typeof tg == "function" && ng(e), gt && typeof gt.setStrictMode == "function") try {
            gt.setStrictMode(fl, e)
        } catch {
        }
    }

    var vt = Math.clz32 ? Math.clz32 : ig, ag = Math.log, lg = Math.LN2;

    function ig(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (ag(e) / lg | 0) | 0
    }

    var wi = 256, Ai = 4194304;

    function Jn(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }

    function Oi(e, t, n) {
        var a = e.pendingLanes;
        if (a === 0) return 0;
        var r = 0, o = e.suspendedLanes, m = e.pingedLanes;
        e = e.warmLanes;
        var y = a & 134217727;
        return y !== 0 ? (a = y & ~o, a !== 0 ? r = Jn(a) : (m &= y, m !== 0 ? r = Jn(m) : n || (n = y & ~e, n !== 0 && (r = Jn(n))))) : (y = a & ~o, y !== 0 ? r = Jn(y) : m !== 0 ? r = Jn(m) : n || (n = a & ~e, n !== 0 && (r = Jn(n)))), r === 0 ? 0 : t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, n = t & -t, o >= n || o === 32 && (n & 4194048) !== 0) ? t : r
    }

    function dl(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }

    function rg(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function gf() {
        var e = wi;
        return wi <<= 1, (wi & 4194048) === 0 && (wi = 256), e
    }

    function vf() {
        var e = Ai;
        return Ai <<= 1, (Ai & 62914560) === 0 && (Ai = 4194304), e
    }

    function ys(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function hl(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function sg(e, t, n, a, r, o) {
        var m = e.pendingLanes;
        e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
        var y = e.entanglements, E = e.expirationTimes, B = e.hiddenUpdates;
        for (n = m & ~n; 0 < n;) {
            var Q = 31 - vt(n), $ = 1 << Q;
            y[Q] = 0, E[Q] = -1;
            var q = B[Q];
            if (q !== null) for (B[Q] = null, Q = 0; Q < q.length; Q++) {
                var k = q[Q];
                k !== null && (k.lane &= -536870913)
            }
            n &= ~$
        }
        a !== 0 && yf(e, a, 0), o !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(m & ~t))
    }

    function yf(e, t, n) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var a = 31 - vt(t);
        e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 4194090
    }

    function bf(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var a = 31 - vt(n), r = 1 << a;
            r & t | e[a] & t && (e[a] |= t), n &= ~r
        }
    }

    function bs(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }

    function Ss(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function Sf() {
        var e = P.p;
        return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Pm(e.type))
    }

    function ug(e, t) {
        var n = P.p;
        try {
            return P.p = e, t()
        } finally {
            P.p = n
        }
    }

    var En = Math.random().toString(36).slice(2), Pe = "__reactFiber$" + En, ut = "__reactProps$" + En,
        ya = "__reactContainer$" + En, _s = "__reactEvents$" + En, og = "__reactListeners$" + En,
        cg = "__reactHandles$" + En, _f = "__reactResources$" + En, ml = "__reactMarker$" + En;

    function Es(e) {
        delete e[Pe], delete e[ut], delete e[_s], delete e[og], delete e[cg]
    }

    function ba(e) {
        var t = e[Pe];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[ya] || n[Pe]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = zm(e); e !== null;) {
                    if (n = e[Pe]) return n;
                    e = zm(e)
                }
                return t
            }
            e = n, n = e.parentNode
        }
        return null
    }

    function Sa(e) {
        if (e = e[Pe] || e[ya]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e
        }
        return null
    }

    function pl(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(s(33))
    }

    function _a(e) {
        var t = e[_f];
        return t || (t = e[_f] = {hoistableStyles: new Map, hoistableScripts: new Map}), t
    }

    function Ze(e) {
        e[ml] = !0
    }

    var Ef = new Set, Tf = {};

    function $n(e, t) {
        Ea(e, t), Ea(e + "Capture", t)
    }

    function Ea(e, t) {
        for (Tf[e] = t, e = 0; e < t.length; e++) Ef.add(t[e])
    }

    var fg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        xf = {}, Rf = {};

    function dg(e) {
        return ps.call(Rf, e) ? !0 : ps.call(xf, e) ? !1 : fg.test(e) ? Rf[e] = !0 : (xf[e] = !0, !1)
    }

    function Ni(e, t, n) {
        if (dg(t)) if (n === null) e.removeAttribute(t); else {
            switch (typeof n) {
                case"undefined":
                case"function":
                case"symbol":
                    e.removeAttribute(t);
                    return;
                case"boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
            }
            e.setAttribute(t, "" + n)
        }
    }

    function ji(e, t, n) {
        if (n === null) e.removeAttribute(t); else {
            switch (typeof n) {
                case"undefined":
                case"function":
                case"symbol":
                case"boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, "" + n)
        }
    }

    function tn(e, t, n, a) {
        if (a === null) e.removeAttribute(n); else {
            switch (typeof a) {
                case"undefined":
                case"function":
                case"symbol":
                case"boolean":
                    e.removeAttribute(n);
                    return
            }
            e.setAttributeNS(t, n, "" + a)
        }
    }

    var Ts, Cf;

    function Ta(e) {
        if (Ts === void 0) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ts = t && t[1] || "", Cf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + Ts + e + Cf
    }

    var xs = !1;

    function Rs(e, t) {
        if (!e || xs) return "";
        xs = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var $ = function () {
                                throw Error()
                            };
                            if (Object.defineProperty($.prototype, "props", {
                                set: function () {
                                    throw Error()
                                }
                            }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct($, [])
                                } catch (k) {
                                    var q = k
                                }
                                Reflect.construct(e, [], $)
                            } else {
                                try {
                                    $.call()
                                } catch (k) {
                                    q = k
                                }
                                e.call($.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (k) {
                                q = k
                            }
                            ($ = e()) && typeof $.catch == "function" && $.catch(function () {
                            })
                        }
                    } catch (k) {
                        if (k && q && typeof k.stack == "string") return [k.stack, q.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var r = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            r && r.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {value: "DetermineComponentFrameRoot"});
            var o = a.DetermineComponentFrameRoot(), m = o[0], y = o[1];
            if (m && y) {
                var E = m.split(`
`), B = y.split(`
`);
                for (r = a = 0; a < E.length && !E[a].includes("DetermineComponentFrameRoot");) a++;
                for (; r < B.length && !B[r].includes("DetermineComponentFrameRoot");) r++;
                if (a === E.length || r === B.length) for (a = E.length - 1, r = B.length - 1; 1 <= a && 0 <= r && E[a] !== B[r];) r--;
                for (; 1 <= a && 0 <= r; a--, r--) if (E[a] !== B[r]) {
                    if (a !== 1 || r !== 1) do if (a--, r--, 0 > r || E[a] !== B[r]) {
                        var Q = `
` + E[a].replace(" at new ", " at ");
                        return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), Q
                    } while (1 <= a && 0 <= r);
                    break
                }
            }
        } finally {
            xs = !1, Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : "") ? Ta(n) : ""
    }

    function hg(e) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return Ta(e.type);
            case 16:
                return Ta("Lazy");
            case 13:
                return Ta("Suspense");
            case 19:
                return Ta("SuspenseList");
            case 0:
            case 15:
                return Rs(e.type, !1);
            case 11:
                return Rs(e.type.render, !1);
            case 1:
                return Rs(e.type, !0);
            case 31:
                return Ta("Activity");
            default:
                return ""
        }
    }

    function wf(e) {
        try {
            var t = "";
            do t += hg(e), e = e.return; while (e);
            return t
        } catch (n) {
            return `
Error generating stack: ` + n.message + `
` + n.stack
        }
    }

    function wt(e) {
        switch (typeof e) {
            case"bigint":
            case"boolean":
            case"number":
            case"string":
            case"undefined":
                return e;
            case"object":
                return e;
            default:
                return ""
        }
    }

    function Af(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function mg(e) {
        var t = Af(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            a = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var r = n.get, o = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0, get: function () {
                    return r.call(this)
                }, set: function (m) {
                    a = "" + m, o.call(this, m)
                }
            }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
                getValue: function () {
                    return a
                }, setValue: function (m) {
                    a = "" + m
                }, stopTracking: function () {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function Ui(e) {
        e._valueTracker || (e._valueTracker = mg(e))
    }

    function Of(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), a = "";
        return e && (a = Af(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1
    }

    function Di(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }

    var pg = /[\n"\\]/g;

    function At(e) {
        return e.replace(pg, function (t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function Cs(e, t, n, a, r, o, m, y) {
        e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + wt(t)) : e.value !== "" + wt(t) && (e.value = "" + wt(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? ws(e, m, wt(t)) : n != null ? ws(e, m, wt(n)) : a != null && e.removeAttribute("value"), r == null && o != null && (e.defaultChecked = !!o), r != null && (e.checked = r && typeof r != "function" && typeof r != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + wt(y) : e.removeAttribute("name")
    }

    function Nf(e, t, n, a, r, o, m, y) {
        if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.type = o), t != null || n != null) {
            if (!(o !== "submit" && o !== "reset" || t != null)) return;
            n = n != null ? "" + wt(n) : "", t = t != null ? "" + wt(t) : n, y || t === e.value || (e.value = t), e.defaultValue = t
        }
        a = a ?? r, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = y ? e.checked : !!a, e.defaultChecked = !!a, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m)
    }

    function ws(e, t, n) {
        t === "number" && Di(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
    }

    function xa(e, t, n, a) {
        if (e = e.options, t) {
            t = {};
            for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
            for (n = 0; n < e.length; n++) r = t.hasOwnProperty("$" + e[n].value), e[n].selected !== r && (e[n].selected = r), r && a && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + wt(n), t = null, r = 0; r < e.length; r++) {
                if (e[r].value === n) {
                    e[r].selected = !0, a && (e[r].defaultSelected = !0);
                    return
                }
                t !== null || e[r].disabled || (t = e[r])
            }
            t !== null && (t.selected = !0)
        }
    }

    function jf(e, t, n) {
        if (t != null && (t = "" + wt(t), t !== e.value && (e.value = t), n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = n != null ? "" + wt(n) : ""
    }

    function Uf(e, t, n, a) {
        if (t == null) {
            if (a != null) {
                if (n != null) throw Error(s(92));
                if (me(a)) {
                    if (1 < a.length) throw Error(s(93));
                    a = a[0]
                }
                n = a
            }
            n == null && (n = ""), t = n
        }
        n = wt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a)
    }

    function Ra(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }

    var gg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Df(e, t, n) {
        var a = t.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || gg.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
    }

    function Mf(e, t, n) {
        if (t != null && typeof t != "object") throw Error(s(62));
        if (e = e.style, n != null) {
            for (var a in n) !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
            for (var r in t) a = t[r], t.hasOwnProperty(r) && n[r] !== a && Df(e, r, a)
        } else for (var o in t) t.hasOwnProperty(o) && Df(e, o, t[o])
    }

    function As(e) {
        if (e.indexOf("-") === -1) return !1;
        switch (e) {
            case"annotation-xml":
            case"color-profile":
            case"font-face":
            case"font-face-src":
            case"font-face-uri":
            case"font-face-format":
            case"font-face-name":
            case"missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    var vg = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]),
        yg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Mi(e) {
        return yg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }

    var Os = null;

    function Ns(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }

    var Ca = null, wa = null;

    function Hf(e) {
        var t = Sa(e);
        if (t && (e = t.stateNode)) {
            var n = e[ut] || null;
            e:switch (e = t.stateNode, t.type) {
                case"input":
                    if (Cs(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
                        for (n = e; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + At("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                            var a = n[t];
                            if (a !== e && a.form === e.form) {
                                var r = a[ut] || null;
                                if (!r) throw Error(s(90));
                                Cs(a, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name)
                            }
                        }
                        for (t = 0; t < n.length; t++) a = n[t], a.form === e.form && Of(a)
                    }
                    break e;
                case"textarea":
                    jf(e, n.value, n.defaultValue);
                    break e;
                case"select":
                    t = n.value, t != null && xa(e, !!n.multiple, t, !1)
            }
        }
    }

    var js = !1;

    function Lf(e, t, n) {
        if (js) return e(t, n);
        js = !0;
        try {
            var a = e(t);
            return a
        } finally {
            if (js = !1, (Ca !== null || wa !== null) && (br(), Ca && (t = Ca, e = wa, wa = Ca = null, Hf(t), e))) for (t = 0; t < e.length; t++) Hf(e[t])
        }
    }

    function gl(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var a = n[ut] || null;
        if (a === null) return null;
        n = a[t];
        e:switch (t) {
            case"onClick":
            case"onClickCapture":
            case"onDoubleClick":
            case"onDoubleClickCapture":
            case"onMouseDown":
            case"onMouseDownCapture":
            case"onMouseMove":
            case"onMouseMoveCapture":
            case"onMouseUp":
            case"onMouseUpCapture":
            case"onMouseEnter":
                (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(s(231, t, typeof n));
        return n
    }

    var nn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Us = !1;
    if (nn) try {
        var vl = {};
        Object.defineProperty(vl, "passive", {
            get: function () {
                Us = !0
            }
        }), window.addEventListener("test", vl, vl), window.removeEventListener("test", vl, vl)
    } catch {
        Us = !1
    }
    var Tn = null, Ds = null, Hi = null;

    function Bf() {
        if (Hi) return Hi;
        var e, t = Ds, n = t.length, a, r = "value" in Tn ? Tn.value : Tn.textContent, o = r.length;
        for (e = 0; e < n && t[e] === r[e]; e++) ;
        var m = n - e;
        for (a = 1; a <= m && t[n - a] === r[o - a]; a++) ;
        return Hi = r.slice(e, 1 < a ? 1 - a : void 0)
    }

    function Li(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function Bi() {
        return !0
    }

    function zf() {
        return !1
    }

    function ot(e) {
        function t(n, a, r, o, m) {
            this._reactName = n, this._targetInst = r, this.type = a, this.nativeEvent = o, this.target = m, this.currentTarget = null;
            for (var y in e) e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(o) : o[y]);
            return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Bi : zf, this.isPropagationStopped = zf, this
        }

        return g(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Bi)
            }, stopPropagation: function () {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Bi)
            }, persist: function () {
            }, isPersistent: Bi
        }), t
    }

    var Kn = {
            eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
                return e.timeStamp || Date.now()
            }, defaultPrevented: 0, isTrusted: 0
        }, zi = ot(Kn), yl = g({}, Kn, {view: 0, detail: 0}), bg = ot(yl), Ms, Hs, bl, qi = g({}, yl, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Bs,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function (e) {
                return "movementX" in e ? e.movementX : (e !== bl && (bl && e.type === "mousemove" ? (Ms = e.screenX - bl.screenX, Hs = e.screenY - bl.screenY) : Hs = Ms = 0, bl = e), Ms)
            },
            movementY: function (e) {
                return "movementY" in e ? e.movementY : Hs
            }
        }), qf = ot(qi), Sg = g({}, qi, {dataTransfer: 0}), _g = ot(Sg), Eg = g({}, yl, {relatedTarget: 0}), Ls = ot(Eg),
        Tg = g({}, Kn, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), xg = ot(Tg), Rg = g({}, Kn, {
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }), Cg = ot(Rg), wg = g({}, Kn, {data: 0}), kf = ot(wg), Ag = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, Og = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, Ng = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

    function jg(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Ng[e]) ? !!t[e] : !1
    }

    function Bs() {
        return jg
    }

    var Ug = g({}, yl, {
            key: function (e) {
                if (e.key) {
                    var t = Ag[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = Li(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Og[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Bs,
            charCode: function (e) {
                return e.type === "keypress" ? Li(e) : 0
            },
            keyCode: function (e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function (e) {
                return e.type === "keypress" ? Li(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }), Dg = ot(Ug), Mg = g({}, qi, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }), Vf = ot(Mg), Hg = g({}, yl, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Bs
        }), Lg = ot(Hg), Bg = g({}, Kn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), zg = ot(Bg), qg = g({}, qi, {
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            }, deltaY: function (e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            }, deltaZ: 0, deltaMode: 0
        }), kg = ot(qg), Vg = g({}, Kn, {newState: 0, oldState: 0}), Xg = ot(Vg), Gg = [9, 13, 27, 32],
        zs = nn && "CompositionEvent" in window, Sl = null;
    nn && "documentMode" in document && (Sl = document.documentMode);
    var Yg = nn && "TextEvent" in window && !Sl, Xf = nn && (!zs || Sl && 8 < Sl && 11 >= Sl), Gf = " ", Yf = !1;

    function Qf(e, t) {
        switch (e) {
            case"keyup":
                return Gg.indexOf(t.keyCode) !== -1;
            case"keydown":
                return t.keyCode !== 229;
            case"keypress":
            case"mousedown":
            case"focusout":
                return !0;
            default:
                return !1
        }
    }

    function Zf(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }

    var Aa = !1;

    function Qg(e, t) {
        switch (e) {
            case"compositionend":
                return Zf(t);
            case"keypress":
                return t.which !== 32 ? null : (Yf = !0, Gf);
            case"textInput":
                return e = t.data, e === Gf && Yf ? null : e;
            default:
                return null
        }
    }

    function Zg(e, t) {
        if (Aa) return e === "compositionend" || !zs && Qf(e, t) ? (e = Bf(), Hi = Ds = Tn = null, Aa = !1, e) : null;
        switch (e) {
            case"paste":
                return null;
            case"keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case"compositionend":
                return Xf && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }

    var Ig = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function If(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Ig[e.type] : t === "textarea"
    }

    function Jf(e, t, n, a) {
        Ca ? wa ? wa.push(a) : wa = [a] : Ca = a, t = Rr(t, "onChange"), 0 < t.length && (n = new zi("onChange", "change", null, n, a), e.push({
            event: n,
            listeners: t
        }))
    }

    var _l = null, El = null;

    function Jg(e) {
        Am(e, 0)
    }

    function ki(e) {
        var t = pl(e);
        if (Of(t)) return e
    }

    function $f(e, t) {
        if (e === "change") return t
    }

    var Kf = !1;
    if (nn) {
        var qs;
        if (nn) {
            var ks = "oninput" in document;
            if (!ks) {
                var Ff = document.createElement("div");
                Ff.setAttribute("oninput", "return;"), ks = typeof Ff.oninput == "function"
            }
            qs = ks
        } else qs = !1;
        Kf = qs && (!document.documentMode || 9 < document.documentMode)
    }

    function Wf() {
        _l && (_l.detachEvent("onpropertychange", Pf), El = _l = null)
    }

    function Pf(e) {
        if (e.propertyName === "value" && ki(El)) {
            var t = [];
            Jf(t, El, e, Ns(e)), Lf(Jg, t)
        }
    }

    function $g(e, t, n) {
        e === "focusin" ? (Wf(), _l = t, El = n, _l.attachEvent("onpropertychange", Pf)) : e === "focusout" && Wf()
    }

    function Kg(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return ki(El)
    }

    function Fg(e, t) {
        if (e === "click") return ki(t)
    }

    function Wg(e, t) {
        if (e === "input" || e === "change") return ki(t)
    }

    function Pg(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }

    var yt = typeof Object.is == "function" ? Object.is : Pg;

    function Tl(e, t) {
        if (yt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), a = Object.keys(t);
        if (n.length !== a.length) return !1;
        for (a = 0; a < n.length; a++) {
            var r = n[a];
            if (!ps.call(t, r) || !yt(e[r], t[r])) return !1
        }
        return !0
    }

    function ed(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function td(e, t) {
        var n = ed(e);
        e = 0;
        for (var a; n;) {
            if (n.nodeType === 3) {
                if (a = e + n.textContent.length, e <= t && a >= t) return {node: n, offset: t - e};
                e = a
            }
            e:{
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = ed(n)
        }
    }

    function nd(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function ad(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = Di(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n) e = t.contentWindow; else break;
            t = Di(e.document)
        }
        return t
    }

    function Vs(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    var ev = nn && "documentMode" in document && 11 >= document.documentMode, Oa = null, Xs = null, xl = null, Gs = !1;

    function ld(e, t, n) {
        var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Gs || Oa == null || Oa !== Di(a) || (a = Oa, "selectionStart" in a && Vs(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }), xl && Tl(xl, a) || (xl = a, a = Rr(Xs, "onSelect"), 0 < a.length && (t = new zi("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: a
        }), t.target = Oa)))
    }

    function Fn(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }

    var Na = {
        animationend: Fn("Animation", "AnimationEnd"),
        animationiteration: Fn("Animation", "AnimationIteration"),
        animationstart: Fn("Animation", "AnimationStart"),
        transitionrun: Fn("Transition", "TransitionRun"),
        transitionstart: Fn("Transition", "TransitionStart"),
        transitioncancel: Fn("Transition", "TransitionCancel"),
        transitionend: Fn("Transition", "TransitionEnd")
    }, Ys = {}, id = {};
    nn && (id = document.createElement("div").style, "AnimationEvent" in window || (delete Na.animationend.animation, delete Na.animationiteration.animation, delete Na.animationstart.animation), "TransitionEvent" in window || delete Na.transitionend.transition);

    function Wn(e) {
        if (Ys[e]) return Ys[e];
        if (!Na[e]) return e;
        var t = Na[e], n;
        for (n in t) if (t.hasOwnProperty(n) && n in id) return Ys[e] = t[n];
        return e
    }

    var rd = Wn("animationend"), sd = Wn("animationiteration"), ud = Wn("animationstart"), tv = Wn("transitionrun"),
        nv = Wn("transitionstart"), av = Wn("transitioncancel"), od = Wn("transitionend"), cd = new Map,
        Qs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Qs.push("scrollEnd");

    function Bt(e, t) {
        cd.set(e, t), $n(t, [e])
    }

    var fd = new WeakMap;

    function Ot(e, t) {
        if (typeof e == "object" && e !== null) {
            var n = fd.get(e);
            return n !== void 0 ? n : (t = {value: e, source: t, stack: wf(t)}, fd.set(e, t), t)
        }
        return {value: e, source: t, stack: wf(t)}
    }

    var Nt = [], ja = 0, Zs = 0;

    function Vi() {
        for (var e = ja, t = Zs = ja = 0; t < e;) {
            var n = Nt[t];
            Nt[t++] = null;
            var a = Nt[t];
            Nt[t++] = null;
            var r = Nt[t];
            Nt[t++] = null;
            var o = Nt[t];
            if (Nt[t++] = null, a !== null && r !== null) {
                var m = a.pending;
                m === null ? r.next = r : (r.next = m.next, m.next = r), a.pending = r
            }
            o !== 0 && dd(n, r, o)
        }
    }

    function Xi(e, t, n, a) {
        Nt[ja++] = e, Nt[ja++] = t, Nt[ja++] = n, Nt[ja++] = a, Zs |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a)
    }

    function Is(e, t, n, a) {
        return Xi(e, t, n, a), Gi(e)
    }

    function Ua(e, t) {
        return Xi(e, null, null, t), Gi(e)
    }

    function dd(e, t, n) {
        e.lanes |= n;
        var a = e.alternate;
        a !== null && (a.lanes |= n);
        for (var r = !1, o = e.return; o !== null;) o.childLanes |= n, a = o.alternate, a !== null && (a.childLanes |= n), o.tag === 22 && (e = o.stateNode, e === null || e._visibility & 1 || (r = !0)), e = o, o = o.return;
        return e.tag === 3 ? (o = e.stateNode, r && t !== null && (r = 31 - vt(n), e = o.hiddenUpdates, a = e[r], a === null ? e[r] = [t] : a.push(t), t.lane = n | 536870912), o) : null
    }

    function Gi(e) {
        if (50 < $l) throw $l = 0, Pu = null, Error(s(185));
        for (var t = e.return; t !== null;) e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }

    var Da = {};

    function lv(e, t, n, a) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function bt(e, t, n, a) {
        return new lv(e, t, n, a)
    }

    function Js(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function an(e, t) {
        var n = e.alternate;
        return n === null ? (n = bt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
    }

    function hd(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e
    }

    function Yi(e, t, n, a, r, o) {
        var m = 0;
        if (a = e, typeof e == "function") Js(e) && (m = 1); else if (typeof e == "string") m = ry(e, n, re.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5; else e:switch (e) {
            case G:
                return e = bt(31, n, t, r), e.elementType = G, e.lanes = o, e;
            case x:
                return Pn(n.children, r, o, t);
            case w:
                m = 8, r |= 24;
                break;
            case N:
                return e = bt(12, n, t, r | 2), e.elementType = N, e.lanes = o, e;
            case D:
                return e = bt(13, n, t, r), e.elementType = D, e.lanes = o, e;
            case J:
                return e = bt(19, n, t, r), e.elementType = J, e.lanes = o, e;
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case Y:
                    case z:
                        m = 10;
                        break e;
                    case C:
                        m = 9;
                        break e;
                    case M:
                        m = 11;
                        break e;
                    case O:
                        m = 14;
                        break e;
                    case R:
                        m = 16, a = null;
                        break e
                }
                m = 29, n = Error(s(130, e === null ? "null" : typeof e, "")), a = null
        }
        return t = bt(m, n, t, r), t.elementType = e, t.type = a, t.lanes = o, t
    }

    function Pn(e, t, n, a) {
        return e = bt(7, e, a, t), e.lanes = n, e
    }

    function $s(e, t, n) {
        return e = bt(6, e, null, t), e.lanes = n, e
    }

    function Ks(e, t, n) {
        return t = bt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    var Ma = [], Ha = 0, Qi = null, Zi = 0, jt = [], Ut = 0, ea = null, ln = 1, rn = "";

    function ta(e, t) {
        Ma[Ha++] = Zi, Ma[Ha++] = Qi, Qi = e, Zi = t
    }

    function md(e, t, n) {
        jt[Ut++] = ln, jt[Ut++] = rn, jt[Ut++] = ea, ea = e;
        var a = ln;
        e = rn;
        var r = 32 - vt(a) - 1;
        a &= ~(1 << r), n += 1;
        var o = 32 - vt(t) + r;
        if (30 < o) {
            var m = r - r % 5;
            o = (a & (1 << m) - 1).toString(32), a >>= m, r -= m, ln = 1 << 32 - vt(t) + r | n << r | a, rn = o + e
        } else ln = 1 << o | n << r | a, rn = e
    }

    function Fs(e) {
        e.return !== null && (ta(e, 1), md(e, 1, 0))
    }

    function Ws(e) {
        for (; e === Qi;) Qi = Ma[--Ha], Ma[Ha] = null, Zi = Ma[--Ha], Ma[Ha] = null;
        for (; e === ea;) ea = jt[--Ut], jt[Ut] = null, rn = jt[--Ut], jt[Ut] = null, ln = jt[--Ut], jt[Ut] = null
    }

    var at = null, Be = null, Te = !1, na = null, Qt = !1, Ps = Error(s(519));

    function aa(e) {
        var t = Error(s(418, ""));
        throw wl(Ot(t, e)), Ps
    }

    function pd(e) {
        var t = e.stateNode, n = e.type, a = e.memoizedProps;
        switch (t[Pe] = e, t[ut] = a, n) {
            case"dialog":
                ye("cancel", t), ye("close", t);
                break;
            case"iframe":
            case"object":
            case"embed":
                ye("load", t);
                break;
            case"video":
            case"audio":
                for (n = 0; n < Fl.length; n++) ye(Fl[n], t);
                break;
            case"source":
                ye("error", t);
                break;
            case"img":
            case"image":
            case"link":
                ye("error", t), ye("load", t);
                break;
            case"details":
                ye("toggle", t);
                break;
            case"input":
                ye("invalid", t), Nf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), Ui(t);
                break;
            case"select":
                ye("invalid", t);
                break;
            case"textarea":
                ye("invalid", t), Uf(t, a.value, a.defaultValue, a.children), Ui(t)
        }
        n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || Um(t.textContent, n) ? (a.popover != null && (ye("beforetoggle", t), ye("toggle", t)), a.onScroll != null && ye("scroll", t), a.onScrollEnd != null && ye("scrollend", t), a.onClick != null && (t.onclick = Cr), t = !0) : t = !1, t || aa(e)
    }

    function gd(e) {
        for (at = e.return; at;) switch (at.tag) {
            case 5:
            case 13:
                Qt = !1;
                return;
            case 27:
            case 3:
                Qt = !0;
                return;
            default:
                at = at.return
        }
    }

    function Rl(e) {
        if (e !== at) return !1;
        if (!Te) return gd(e), Te = !0, !1;
        var t = e.tag, n;
        if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || go(e.type, e.memoizedProps)), n = !n), n && Be && aa(e), gd(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
            e:{
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8) if (n = e.data, n === "/$") {
                        if (t === 0) {
                            Be = qt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    e = e.nextSibling
                }
                Be = null
            }
        } else t === 27 ? (t = Be, qn(e.type) ? (e = So, So = null, Be = e) : Be = t) : Be = at ? qt(e.stateNode.nextSibling) : null;
        return !0
    }

    function Cl() {
        Be = at = null, Te = !1
    }

    function vd() {
        var e = na;
        return e !== null && (dt === null ? dt = e : dt.push.apply(dt, e), na = null), e
    }

    function wl(e) {
        na === null ? na = [e] : na.push(e)
    }

    var eu = I(null), la = null, sn = null;

    function xn(e, t, n) {
        ee(eu, t._currentValue), t._currentValue = n
    }

    function un(e) {
        e._currentValue = eu.current, ne(eu)
    }

    function tu(e, t, n) {
        for (; e !== null;) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function nu(e, t, n, a) {
        var r = e.child;
        for (r !== null && (r.return = e); r !== null;) {
            var o = r.dependencies;
            if (o !== null) {
                var m = r.child;
                o = o.firstContext;
                e:for (; o !== null;) {
                    var y = o;
                    o = r;
                    for (var E = 0; E < t.length; E++) if (y.context === t[E]) {
                        o.lanes |= n, y = o.alternate, y !== null && (y.lanes |= n), tu(o.return, n, e), a || (m = null);
                        break e
                    }
                    o = y.next
                }
            } else if (r.tag === 18) {
                if (m = r.return, m === null) throw Error(s(341));
                m.lanes |= n, o = m.alternate, o !== null && (o.lanes |= n), tu(m, n, e), m = null
            } else m = r.child;
            if (m !== null) m.return = r; else for (m = r; m !== null;) {
                if (m === e) {
                    m = null;
                    break
                }
                if (r = m.sibling, r !== null) {
                    r.return = m.return, m = r;
                    break
                }
                m = m.return
            }
            r = m
        }
    }

    function Al(e, t, n, a) {
        e = null;
        for (var r = t, o = !1; r !== null;) {
            if (!o) {
                if ((r.flags & 524288) !== 0) o = !0; else if ((r.flags & 262144) !== 0) break
            }
            if (r.tag === 10) {
                var m = r.alternate;
                if (m === null) throw Error(s(387));
                if (m = m.memoizedProps, m !== null) {
                    var y = r.type;
                    yt(r.pendingProps.value, m.value) || (e !== null ? e.push(y) : e = [y])
                }
            } else if (r === pt.current) {
                if (m = r.alternate, m === null) throw Error(s(387));
                m.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(ai) : e = [ai])
            }
            r = r.return
        }
        e !== null && nu(t, e, n, a), t.flags |= 262144
    }

    function Ii(e) {
        for (e = e.firstContext; e !== null;) {
            if (!yt(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function ia(e) {
        la = e, sn = null, e = e.dependencies, e !== null && (e.firstContext = null)
    }

    function et(e) {
        return yd(la, e)
    }

    function Ji(e, t) {
        return la === null && ia(e), yd(e, t)
    }

    function yd(e, t) {
        var n = t._currentValue;
        if (t = {context: t, memoizedValue: n, next: null}, sn === null) {
            if (e === null) throw Error(s(308));
            sn = t, e.dependencies = {lanes: 0, firstContext: t}, e.flags |= 524288
        } else sn = sn.next = t;
        return n
    }

    var iv = typeof AbortController < "u" ? AbortController : function () {
            var e = [], t = this.signal = {
                aborted: !1, addEventListener: function (n, a) {
                    e.push(a)
                }
            };
            this.abort = function () {
                t.aborted = !0, e.forEach(function (n) {
                    return n()
                })
            }
        }, rv = l.unstable_scheduleCallback, sv = l.unstable_NormalPriority,
        Ge = {$$typeof: z, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0};

    function au() {
        return {controller: new iv, data: new Map, refCount: 0}
    }

    function Ol(e) {
        e.refCount--, e.refCount === 0 && rv(sv, function () {
            e.controller.abort()
        })
    }

    var Nl = null, lu = 0, La = 0, Ba = null;

    function uv(e, t) {
        if (Nl === null) {
            var n = Nl = [];
            lu = 0, La = ro(), Ba = {
                status: "pending", value: void 0, then: function (a) {
                    n.push(a)
                }
            }
        }
        return lu++, t.then(bd, bd), t
    }

    function bd() {
        if (--lu === 0 && Nl !== null) {
            Ba !== null && (Ba.status = "fulfilled");
            var e = Nl;
            Nl = null, La = 0, Ba = null;
            for (var t = 0; t < e.length; t++) (0, e[t])()
        }
    }

    function ov(e, t) {
        var n = [], a = {
            status: "pending", value: null, reason: null, then: function (r) {
                n.push(r)
            }
        };
        return e.then(function () {
            a.status = "fulfilled", a.value = t;
            for (var r = 0; r < n.length; r++) (0, n[r])(t)
        }, function (r) {
            for (a.status = "rejected", a.reason = r, r = 0; r < n.length; r++) (0, n[r])(void 0)
        }), a
    }

    var Sd = X.S;
    X.S = function (e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && uv(e, t), Sd !== null && Sd(e, t)
    };
    var ra = I(null);

    function iu() {
        var e = ra.current;
        return e !== null ? e : Ue.pooledCache
    }

    function $i(e, t) {
        t === null ? ee(ra, ra.current) : ee(ra, t.pool)
    }

    function _d() {
        var e = iu();
        return e === null ? null : {parent: Ge._currentValue, pool: e}
    }

    var jl = Error(s(460)), Ed = Error(s(474)), Ki = Error(s(542)), ru = {
        then: function () {
        }
    };

    function Td(e) {
        return e = e.status, e === "fulfilled" || e === "rejected"
    }

    function Fi() {
    }

    function xd(e, t, n) {
        switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Fi, Fi), t = n), t.status) {
            case"fulfilled":
                return t.value;
            case"rejected":
                throw e = t.reason, Cd(e), e;
            default:
                if (typeof t.status == "string") t.then(Fi, Fi); else {
                    if (e = Ue, e !== null && 100 < e.shellSuspendCounter) throw Error(s(482));
                    e = t, e.status = "pending", e.then(function (a) {
                        if (t.status === "pending") {
                            var r = t;
                            r.status = "fulfilled", r.value = a
                        }
                    }, function (a) {
                        if (t.status === "pending") {
                            var r = t;
                            r.status = "rejected", r.reason = a
                        }
                    })
                }
                switch (t.status) {
                    case"fulfilled":
                        return t.value;
                    case"rejected":
                        throw e = t.reason, Cd(e), e
                }
                throw Ul = t, jl
        }
    }

    var Ul = null;

    function Rd() {
        if (Ul === null) throw Error(s(459));
        var e = Ul;
        return Ul = null, e
    }

    function Cd(e) {
        if (e === jl || e === Ki) throw Error(s(483))
    }

    var Rn = !1;

    function su(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {pending: null, lanes: 0, hiddenCallbacks: null},
            callbacks: null
        }
    }

    function uu(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function Cn(e) {
        return {lane: e, tag: 0, payload: null, callback: null, next: null}
    }

    function wn(e, t, n) {
        var a = e.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (Re & 2) !== 0) {
            var r = a.pending;
            return r === null ? t.next = t : (t.next = r.next, r.next = t), a.pending = t, t = Gi(e), dd(e, null, n), t
        }
        return Xi(e, a, t, n), Gi(e)
    }

    function Dl(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes, n |= a, t.lanes = n, bf(e, n)
        }
    }

    function ou(e, t) {
        var n = e.updateQueue, a = e.alternate;
        if (a !== null && (a = a.updateQueue, n === a)) {
            var r = null, o = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var m = {lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null};
                    o === null ? r = o = m : o = o.next = m, n = n.next
                } while (n !== null);
                o === null ? r = o = t : o = o.next = t
            } else r = o = t;
            n = {
                baseState: a.baseState,
                firstBaseUpdate: r,
                lastBaseUpdate: o,
                shared: a.shared,
                callbacks: a.callbacks
            }, e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }

    var cu = !1;

    function Ml() {
        if (cu) {
            var e = Ba;
            if (e !== null) throw e
        }
    }

    function Hl(e, t, n, a) {
        cu = !1;
        var r = e.updateQueue;
        Rn = !1;
        var o = r.firstBaseUpdate, m = r.lastBaseUpdate, y = r.shared.pending;
        if (y !== null) {
            r.shared.pending = null;
            var E = y, B = E.next;
            E.next = null, m === null ? o = B : m.next = B, m = E;
            var Q = e.alternate;
            Q !== null && (Q = Q.updateQueue, y = Q.lastBaseUpdate, y !== m && (y === null ? Q.firstBaseUpdate = B : y.next = B, Q.lastBaseUpdate = E))
        }
        if (o !== null) {
            var $ = r.baseState;
            m = 0, Q = B = E = null, y = o;
            do {
                var q = y.lane & -536870913, k = q !== y.lane;
                if (k ? (Se & q) === q : (a & q) === q) {
                    q !== 0 && q === La && (cu = !0), Q !== null && (Q = Q.next = {
                        lane: 0,
                        tag: y.tag,
                        payload: y.payload,
                        callback: null,
                        next: null
                    });
                    e:{
                        var oe = e, se = y;
                        q = t;
                        var Oe = n;
                        switch (se.tag) {
                            case 1:
                                if (oe = se.payload, typeof oe == "function") {
                                    $ = oe.call(Oe, $, q);
                                    break e
                                }
                                $ = oe;
                                break e;
                            case 3:
                                oe.flags = oe.flags & -65537 | 128;
                            case 0:
                                if (oe = se.payload, q = typeof oe == "function" ? oe.call(Oe, $, q) : oe, q == null) break e;
                                $ = g({}, $, q);
                                break e;
                            case 2:
                                Rn = !0
                        }
                    }
                    q = y.callback, q !== null && (e.flags |= 64, k && (e.flags |= 8192), k = r.callbacks, k === null ? r.callbacks = [q] : k.push(q))
                } else k = {
                    lane: q,
                    tag: y.tag,
                    payload: y.payload,
                    callback: y.callback,
                    next: null
                }, Q === null ? (B = Q = k, E = $) : Q = Q.next = k, m |= q;
                if (y = y.next, y === null) {
                    if (y = r.shared.pending, y === null) break;
                    k = y, y = k.next, k.next = null, r.lastBaseUpdate = k, r.shared.pending = null
                }
            } while (!0);
            Q === null && (E = $), r.baseState = E, r.firstBaseUpdate = B, r.lastBaseUpdate = Q, o === null && (r.shared.lanes = 0), Hn |= m, e.lanes = m, e.memoizedState = $
        }
    }

    function wd(e, t) {
        if (typeof e != "function") throw Error(s(191, e));
        e.call(t)
    }

    function Ad(e, t) {
        var n = e.callbacks;
        if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) wd(n[e], t)
    }

    var za = I(null), Wi = I(0);

    function Od(e, t) {
        e = pn, ee(Wi, e), ee(za, t), pn = e | t.baseLanes
    }

    function fu() {
        ee(Wi, pn), ee(za, za.current)
    }

    function du() {
        pn = Wi.current, ne(za), ne(Wi)
    }

    var An = 0, pe = null, we = null, Ve = null, Pi = !1, qa = !1, sa = !1, er = 0, Ll = 0, ka = null, cv = 0;

    function qe() {
        throw Error(s(321))
    }

    function hu(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!yt(e[n], t[n])) return !1;
        return !0
    }

    function mu(e, t, n, a, r, o) {
        return An = o, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, X.H = e === null || e.memoizedState === null ? dh : hh, sa = !1, o = n(a, r), sa = !1, qa && (o = jd(t, n, a, r)), Nd(e), o
    }

    function Nd(e) {
        X.H = rr;
        var t = we !== null && we.next !== null;
        if (An = 0, Ve = we = pe = null, Pi = !1, Ll = 0, ka = null, t) throw Error(s(300));
        e === null || Ie || (e = e.dependencies, e !== null && Ii(e) && (Ie = !0))
    }

    function jd(e, t, n, a) {
        pe = e;
        var r = 0;
        do {
            if (qa && (ka = null), Ll = 0, qa = !1, 25 <= r) throw Error(s(301));
            if (r += 1, Ve = we = null, e.updateQueue != null) {
                var o = e.updateQueue;
                o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0)
            }
            X.H = vv, o = t(n, a)
        } while (qa);
        return o
    }

    function fv() {
        var e = X.H, t = e.useState()[0];
        return t = typeof t.then == "function" ? Bl(t) : t, e = e.useState()[0], (we !== null ? we.memoizedState : null) !== e && (pe.flags |= 1024), t
    }

    function pu() {
        var e = er !== 0;
        return er = 0, e
    }

    function gu(e, t, n) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
    }

    function vu(e) {
        if (Pi) {
            for (e = e.memoizedState; e !== null;) {
                var t = e.queue;
                t !== null && (t.pending = null), e = e.next
            }
            Pi = !1
        }
        An = 0, Ve = we = pe = null, qa = !1, Ll = er = 0, ka = null
    }

    function ct() {
        var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
        return Ve === null ? pe.memoizedState = Ve = e : Ve = Ve.next = e, Ve
    }

    function Xe() {
        if (we === null) {
            var e = pe.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = we.next;
        var t = Ve === null ? pe.memoizedState : Ve.next;
        if (t !== null) Ve = t, we = e; else {
            if (e === null) throw pe.alternate === null ? Error(s(467)) : Error(s(310));
            we = e, e = {
                memoizedState: we.memoizedState,
                baseState: we.baseState,
                baseQueue: we.baseQueue,
                queue: we.queue,
                next: null
            }, Ve === null ? pe.memoizedState = Ve = e : Ve = Ve.next = e
        }
        return Ve
    }

    function yu() {
        return {lastEffect: null, events: null, stores: null, memoCache: null}
    }

    function Bl(e) {
        var t = Ll;
        return Ll += 1, ka === null && (ka = []), e = xd(ka, e, t), t = pe, (Ve === null ? t.memoizedState : Ve.next) === null && (t = t.alternate, X.H = t === null || t.memoizedState === null ? dh : hh), e
    }

    function tr(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function") return Bl(e);
            if (e.$$typeof === z) return et(e)
        }
        throw Error(s(438, String(e)))
    }

    function bu(e) {
        var t = null, n = pe.updateQueue;
        if (n !== null && (t = n.memoCache), t == null) {
            var a = pe.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
                data: a.data.map(function (r) {
                    return r.slice()
                }), index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }), n === null && (n = yu(), pe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = F;
        return t.index++, n
    }

    function on(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function nr(e) {
        var t = Xe();
        return Su(t, we, e)
    }

    function Su(e, t, n) {
        var a = e.queue;
        if (a === null) throw Error(s(311));
        a.lastRenderedReducer = n;
        var r = e.baseQueue, o = a.pending;
        if (o !== null) {
            if (r !== null) {
                var m = r.next;
                r.next = o.next, o.next = m
            }
            t.baseQueue = r = o, a.pending = null
        }
        if (o = e.baseState, r === null) e.memoizedState = o; else {
            t = r.next;
            var y = m = null, E = null, B = t, Q = !1;
            do {
                var $ = B.lane & -536870913;
                if ($ !== B.lane ? (Se & $) === $ : (An & $) === $) {
                    var q = B.revertLane;
                    if (q === 0) E !== null && (E = E.next = {
                        lane: 0,
                        revertLane: 0,
                        action: B.action,
                        hasEagerState: B.hasEagerState,
                        eagerState: B.eagerState,
                        next: null
                    }), $ === La && (Q = !0); else if ((An & q) === q) {
                        B = B.next, q === La && (Q = !0);
                        continue
                    } else $ = {
                        lane: 0,
                        revertLane: B.revertLane,
                        action: B.action,
                        hasEagerState: B.hasEagerState,
                        eagerState: B.eagerState,
                        next: null
                    }, E === null ? (y = E = $, m = o) : E = E.next = $, pe.lanes |= q, Hn |= q;
                    $ = B.action, sa && n(o, $), o = B.hasEagerState ? B.eagerState : n(o, $)
                } else q = {
                    lane: $,
                    revertLane: B.revertLane,
                    action: B.action,
                    hasEagerState: B.hasEagerState,
                    eagerState: B.eagerState,
                    next: null
                }, E === null ? (y = E = q, m = o) : E = E.next = q, pe.lanes |= $, Hn |= $;
                B = B.next
            } while (B !== null && B !== t);
            if (E === null ? m = o : E.next = y, !yt(o, e.memoizedState) && (Ie = !0, Q && (n = Ba, n !== null))) throw n;
            e.memoizedState = o, e.baseState = m, e.baseQueue = E, a.lastRenderedState = o
        }
        return r === null && (a.lanes = 0), [e.memoizedState, a.dispatch]
    }

    function _u(e) {
        var t = Xe(), n = t.queue;
        if (n === null) throw Error(s(311));
        n.lastRenderedReducer = e;
        var a = n.dispatch, r = n.pending, o = t.memoizedState;
        if (r !== null) {
            n.pending = null;
            var m = r = r.next;
            do o = e(o, m.action), m = m.next; while (m !== r);
            yt(o, t.memoizedState) || (Ie = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
        }
        return [o, a]
    }

    function Ud(e, t, n) {
        var a = pe, r = Xe(), o = Te;
        if (o) {
            if (n === void 0) throw Error(s(407));
            n = n()
        } else n = t();
        var m = !yt((we || r).memoizedState, n);
        m && (r.memoizedState = n, Ie = !0), r = r.queue;
        var y = Hd.bind(null, a, r, e);
        if (zl(2048, 8, y, [e]), r.getSnapshot !== t || m || Ve !== null && Ve.memoizedState.tag & 1) {
            if (a.flags |= 2048, Va(9, ar(), Md.bind(null, a, r, n, t), null), Ue === null) throw Error(s(349));
            o || (An & 124) !== 0 || Dd(a, t, n)
        }
        return n
    }

    function Dd(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = pe.updateQueue, t === null ? (t = yu(), pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function Md(e, t, n, a) {
        t.value = n, t.getSnapshot = a, Ld(t) && Bd(e)
    }

    function Hd(e, t, n) {
        return n(function () {
            Ld(t) && Bd(e)
        })
    }

    function Ld(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !yt(e, n)
        } catch {
            return !0
        }
    }

    function Bd(e) {
        var t = Ua(e, 2);
        t !== null && xt(t, e, 2)
    }

    function Eu(e) {
        var t = ct();
        if (typeof e == "function") {
            var n = e;
            if (e = n(), sa) {
                _n(!0);
                try {
                    n()
                } finally {
                    _n(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: on,
            lastRenderedState: e
        }, t
    }

    function zd(e, t, n, a) {
        return e.baseState = n, Su(e, we, typeof a == "function" ? a : on)
    }

    function dv(e, t, n, a, r) {
        if (ir(e)) throw Error(s(485));
        if (e = t.action, e !== null) {
            var o = {
                payload: r,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function (m) {
                    o.listeners.push(m)
                }
            };
            X.T !== null ? n(!0) : o.isTransition = !1, a(o), n = t.pending, n === null ? (o.next = t.pending = o, qd(t, o)) : (o.next = n.next, t.pending = n.next = o)
        }
    }

    function qd(e, t) {
        var n = t.action, a = t.payload, r = e.state;
        if (t.isTransition) {
            var o = X.T, m = {};
            X.T = m;
            try {
                var y = n(r, a), E = X.S;
                E !== null && E(m, y), kd(e, t, y)
            } catch (B) {
                Tu(e, t, B)
            } finally {
                X.T = o
            }
        } else try {
            o = n(r, a), kd(e, t, o)
        } catch (B) {
            Tu(e, t, B)
        }
    }

    function kd(e, t, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function (a) {
            Vd(e, t, a)
        }, function (a) {
            return Tu(e, t, a)
        }) : Vd(e, t, n)
    }

    function Vd(e, t, n) {
        t.status = "fulfilled", t.value = n, Xd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, qd(e, n)))
    }

    function Tu(e, t, n) {
        var a = e.pending;
        if (e.pending = null, a !== null) {
            a = a.next;
            do t.status = "rejected", t.reason = n, Xd(t), t = t.next; while (t !== a)
        }
        e.action = null
    }

    function Xd(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])()
    }

    function Gd(e, t) {
        return t
    }

    function Yd(e, t) {
        if (Te) {
            var n = Ue.formState;
            if (n !== null) {
                e:{
                    var a = pe;
                    if (Te) {
                        if (Be) {
                            t:{
                                for (var r = Be, o = Qt; r.nodeType !== 8;) {
                                    if (!o) {
                                        r = null;
                                        break t
                                    }
                                    if (r = qt(r.nextSibling), r === null) {
                                        r = null;
                                        break t
                                    }
                                }
                                o = r.data, r = o === "F!" || o === "F" ? r : null
                            }
                            if (r) {
                                Be = qt(r.nextSibling), a = r.data === "F!";
                                break e
                            }
                        }
                        aa(a)
                    }
                    a = !1
                }
                a && (t = n[0])
            }
        }
        return n = ct(), n.memoizedState = n.baseState = t, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Gd,
            lastRenderedState: t
        }, n.queue = a, n = oh.bind(null, pe, a), a.dispatch = n, a = Eu(!1), o = Au.bind(null, pe, !1, a.queue), a = ct(), r = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, a.queue = r, n = dv.bind(null, pe, r, o, n), r.dispatch = n, a.memoizedState = e, [t, n, !1]
    }

    function Qd(e) {
        var t = Xe();
        return Zd(t, we, e)
    }

    function Zd(e, t, n) {
        if (t = Su(e, t, Gd)[0], e = nr(on)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var a = Bl(t)
        } catch (m) {
            throw m === jl ? Ki : m
        } else a = t;
        t = Xe();
        var r = t.queue, o = r.dispatch;
        return n !== t.memoizedState && (pe.flags |= 2048, Va(9, ar(), hv.bind(null, r, n), null)), [a, o, e]
    }

    function hv(e, t) {
        e.action = t
    }

    function Id(e) {
        var t = Xe(), n = we;
        if (n !== null) return Zd(t, n, e);
        Xe(), t = t.memoizedState, n = Xe();
        var a = n.queue.dispatch;
        return n.memoizedState = e, [t, a, !1]
    }

    function Va(e, t, n, a) {
        return e = {
            tag: e,
            create: n,
            deps: a,
            inst: t,
            next: null
        }, t = pe.updateQueue, t === null && (t = yu(), pe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e
    }

    function ar() {
        return {destroy: void 0, resource: void 0}
    }

    function Jd() {
        return Xe().memoizedState
    }

    function lr(e, t, n, a) {
        var r = ct();
        a = a === void 0 ? null : a, pe.flags |= e, r.memoizedState = Va(1 | t, ar(), n, a)
    }

    function zl(e, t, n, a) {
        var r = Xe();
        a = a === void 0 ? null : a;
        var o = r.memoizedState.inst;
        we !== null && a !== null && hu(a, we.memoizedState.deps) ? r.memoizedState = Va(t, o, n, a) : (pe.flags |= e, r.memoizedState = Va(1 | t, o, n, a))
    }

    function $d(e, t) {
        lr(8390656, 8, e, t)
    }

    function Kd(e, t) {
        zl(2048, 8, e, t)
    }

    function Fd(e, t) {
        return zl(4, 2, e, t)
    }

    function Wd(e, t) {
        return zl(4, 4, e, t)
    }

    function Pd(e, t) {
        if (typeof t == "function") {
            e = e();
            var n = t(e);
            return function () {
                typeof n == "function" ? n() : t(null)
            }
        }
        if (t != null) return e = e(), t.current = e, function () {
            t.current = null
        }
    }

    function eh(e, t, n) {
        n = n != null ? n.concat([e]) : null, zl(4, 4, Pd.bind(null, t, e), n)
    }

    function xu() {
    }

    function th(e, t) {
        var n = Xe();
        t = t === void 0 ? null : t;
        var a = n.memoizedState;
        return t !== null && hu(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e)
    }

    function nh(e, t) {
        var n = Xe();
        t = t === void 0 ? null : t;
        var a = n.memoizedState;
        if (t !== null && hu(t, a[1])) return a[0];
        if (a = e(), sa) {
            _n(!0);
            try {
                e()
            } finally {
                _n(!1)
            }
        }
        return n.memoizedState = [a, t], a
    }

    function Ru(e, t, n) {
        return n === void 0 || (An & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = im(), pe.lanes |= e, Hn |= e, n)
    }

    function ah(e, t, n, a) {
        return yt(n, t) ? n : za.current !== null ? (e = Ru(e, n, a), yt(e, t) || (Ie = !0), e) : (An & 42) === 0 ? (Ie = !0, e.memoizedState = n) : (e = im(), pe.lanes |= e, Hn |= e, t)
    }

    function lh(e, t, n, a, r) {
        var o = P.p;
        P.p = o !== 0 && 8 > o ? o : 8;
        var m = X.T, y = {};
        X.T = y, Au(e, !1, t, n);
        try {
            var E = r(), B = X.S;
            if (B !== null && B(y, E), E !== null && typeof E == "object" && typeof E.then == "function") {
                var Q = ov(E, a);
                ql(e, t, Q, Tt(e))
            } else ql(e, t, a, Tt(e))
        } catch ($) {
            ql(e, t, {
                then: function () {
                }, status: "rejected", reason: $
            }, Tt())
        } finally {
            P.p = o, X.T = m
        }
    }

    function mv() {
    }

    function Cu(e, t, n, a) {
        if (e.tag !== 5) throw Error(s(476));
        var r = ih(e).queue;
        lh(e, r, t, K, n === null ? mv : function () {
            return rh(e), n(a)
        })
    }

    function ih(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: K,
            baseState: K,
            baseQueue: null,
            queue: {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: on, lastRenderedState: K},
            next: null
        };
        var n = {};
        return t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: on, lastRenderedState: n},
            next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
    }

    function rh(e) {
        var t = ih(e).next.queue;
        ql(e, t, {}, Tt())
    }

    function wu() {
        return et(ai)
    }

    function sh() {
        return Xe().memoizedState
    }

    function uh() {
        return Xe().memoizedState
    }

    function pv(e) {
        for (var t = e.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var n = Tt();
                    e = Cn(n);
                    var a = wn(t, e, n);
                    a !== null && (xt(a, t, n), Dl(a, t, n)), t = {cache: au()}, e.payload = t;
                    return
            }
            t = t.return
        }
    }

    function gv(e, t, n) {
        var a = Tt();
        n = {
            lane: a,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, ir(e) ? ch(t, n) : (n = Is(e, t, n, a), n !== null && (xt(n, e, a), fh(n, t, a)))
    }

    function oh(e, t, n) {
        var a = Tt();
        ql(e, t, n, a)
    }

    function ql(e, t, n, a) {
        var r = {lane: a, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null};
        if (ir(e)) ch(t, r); else {
            var o = e.alternate;
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
                var m = t.lastRenderedState, y = o(m, n);
                if (r.hasEagerState = !0, r.eagerState = y, yt(y, m)) return Xi(e, t, r, 0), Ue === null && Vi(), !1
            } catch {
            } finally {
            }
            if (n = Is(e, t, r, a), n !== null) return xt(n, e, a), fh(n, t, a), !0
        }
        return !1
    }

    function Au(e, t, n, a) {
        if (a = {lane: 2, revertLane: ro(), action: a, hasEagerState: !1, eagerState: null, next: null}, ir(e)) {
            if (t) throw Error(s(479))
        } else t = Is(e, n, a, 2), t !== null && xt(t, e, 2)
    }

    function ir(e) {
        var t = e.alternate;
        return e === pe || t !== null && t === pe
    }

    function ch(e, t) {
        qa = Pi = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function fh(e, t, n) {
        if ((n & 4194048) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes, n |= a, t.lanes = n, bf(e, n)
        }
    }

    var rr = {
        readContext: et,
        use: tr,
        useCallback: qe,
        useContext: qe,
        useEffect: qe,
        useImperativeHandle: qe,
        useLayoutEffect: qe,
        useInsertionEffect: qe,
        useMemo: qe,
        useReducer: qe,
        useRef: qe,
        useState: qe,
        useDebugValue: qe,
        useDeferredValue: qe,
        useTransition: qe,
        useSyncExternalStore: qe,
        useId: qe,
        useHostTransitionStatus: qe,
        useFormState: qe,
        useActionState: qe,
        useOptimistic: qe,
        useMemoCache: qe,
        useCacheRefresh: qe
    }, dh = {
        readContext: et, use: tr, useCallback: function (e, t) {
            return ct().memoizedState = [e, t === void 0 ? null : t], e
        }, useContext: et, useEffect: $d, useImperativeHandle: function (e, t, n) {
            n = n != null ? n.concat([e]) : null, lr(4194308, 4, Pd.bind(null, t, e), n)
        }, useLayoutEffect: function (e, t) {
            return lr(4194308, 4, e, t)
        }, useInsertionEffect: function (e, t) {
            lr(4, 2, e, t)
        }, useMemo: function (e, t) {
            var n = ct();
            t = t === void 0 ? null : t;
            var a = e();
            if (sa) {
                _n(!0);
                try {
                    e()
                } finally {
                    _n(!1)
                }
            }
            return n.memoizedState = [a, t], a
        }, useReducer: function (e, t, n) {
            var a = ct();
            if (n !== void 0) {
                var r = n(t);
                if (sa) {
                    _n(!0);
                    try {
                        n(t)
                    } finally {
                        _n(!1)
                    }
                }
            } else r = t;
            return a.memoizedState = a.baseState = r, e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: r
            }, a.queue = e, e = e.dispatch = gv.bind(null, pe, e), [a.memoizedState, e]
        }, useRef: function (e) {
            var t = ct();
            return e = {current: e}, t.memoizedState = e
        }, useState: function (e) {
            e = Eu(e);
            var t = e.queue, n = oh.bind(null, pe, t);
            return t.dispatch = n, [e.memoizedState, n]
        }, useDebugValue: xu, useDeferredValue: function (e, t) {
            var n = ct();
            return Ru(n, e, t)
        }, useTransition: function () {
            var e = Eu(!1);
            return e = lh.bind(null, pe, e.queue, !0, !1), ct().memoizedState = e, [!1, e]
        }, useSyncExternalStore: function (e, t, n) {
            var a = pe, r = ct();
            if (Te) {
                if (n === void 0) throw Error(s(407));
                n = n()
            } else {
                if (n = t(), Ue === null) throw Error(s(349));
                (Se & 124) !== 0 || Dd(a, t, n)
            }
            r.memoizedState = n;
            var o = {value: n, getSnapshot: t};
            return r.queue = o, $d(Hd.bind(null, a, o, e), [e]), a.flags |= 2048, Va(9, ar(), Md.bind(null, a, o, n, t), null), n
        }, useId: function () {
            var e = ct(), t = Ue.identifierPrefix;
            if (Te) {
                var n = rn, a = ln;
                n = (a & ~(1 << 32 - vt(a) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = er++, 0 < n && (t += "H" + n.toString(32)), t += "»"
            } else n = cv++, t = "«" + t + "r" + n.toString(32) + "»";
            return e.memoizedState = t
        }, useHostTransitionStatus: wu, useFormState: Yd, useActionState: Yd, useOptimistic: function (e) {
            var t = ct();
            t.memoizedState = t.baseState = e;
            var n = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null};
            return t.queue = n, t = Au.bind(null, pe, !0, n), n.dispatch = t, [e, t]
        }, useMemoCache: bu, useCacheRefresh: function () {
            return ct().memoizedState = pv.bind(null, pe)
        }
    }, hh = {
        readContext: et,
        use: tr,
        useCallback: th,
        useContext: et,
        useEffect: Kd,
        useImperativeHandle: eh,
        useInsertionEffect: Fd,
        useLayoutEffect: Wd,
        useMemo: nh,
        useReducer: nr,
        useRef: Jd,
        useState: function () {
            return nr(on)
        },
        useDebugValue: xu,
        useDeferredValue: function (e, t) {
            var n = Xe();
            return ah(n, we.memoizedState, e, t)
        },
        useTransition: function () {
            var e = nr(on)[0], t = Xe().memoizedState;
            return [typeof e == "boolean" ? e : Bl(e), t]
        },
        useSyncExternalStore: Ud,
        useId: sh,
        useHostTransitionStatus: wu,
        useFormState: Qd,
        useActionState: Qd,
        useOptimistic: function (e, t) {
            var n = Xe();
            return zd(n, we, e, t)
        },
        useMemoCache: bu,
        useCacheRefresh: uh
    }, vv = {
        readContext: et,
        use: tr,
        useCallback: th,
        useContext: et,
        useEffect: Kd,
        useImperativeHandle: eh,
        useInsertionEffect: Fd,
        useLayoutEffect: Wd,
        useMemo: nh,
        useReducer: _u,
        useRef: Jd,
        useState: function () {
            return _u(on)
        },
        useDebugValue: xu,
        useDeferredValue: function (e, t) {
            var n = Xe();
            return we === null ? Ru(n, e, t) : ah(n, we.memoizedState, e, t)
        },
        useTransition: function () {
            var e = _u(on)[0], t = Xe().memoizedState;
            return [typeof e == "boolean" ? e : Bl(e), t]
        },
        useSyncExternalStore: Ud,
        useId: sh,
        useHostTransitionStatus: wu,
        useFormState: Id,
        useActionState: Id,
        useOptimistic: function (e, t) {
            var n = Xe();
            return we !== null ? zd(n, we, e, t) : (n.baseState = e, [e, n.queue.dispatch])
        },
        useMemoCache: bu,
        useCacheRefresh: uh
    }, Xa = null, kl = 0;

    function sr(e) {
        var t = kl;
        return kl += 1, Xa === null && (Xa = []), xd(Xa, e, t)
    }

    function Vl(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null
    }

    function ur(e, t) {
        throw t.$$typeof === b ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }

    function mh(e) {
        var t = e._init;
        return t(e._payload)
    }

    function ph(e) {
        function t(U, A) {
            if (e) {
                var L = U.deletions;
                L === null ? (U.deletions = [A], U.flags |= 16) : L.push(A)
            }
        }

        function n(U, A) {
            if (!e) return null;
            for (; A !== null;) t(U, A), A = A.sibling;
            return null
        }

        function a(U) {
            for (var A = new Map; U !== null;) U.key !== null ? A.set(U.key, U) : A.set(U.index, U), U = U.sibling;
            return A
        }

        function r(U, A) {
            return U = an(U, A), U.index = 0, U.sibling = null, U
        }

        function o(U, A, L) {
            return U.index = L, e ? (L = U.alternate, L !== null ? (L = L.index, L < A ? (U.flags |= 67108866, A) : L) : (U.flags |= 67108866, A)) : (U.flags |= 1048576, A)
        }

        function m(U) {
            return e && U.alternate === null && (U.flags |= 67108866), U
        }

        function y(U, A, L, Z) {
            return A === null || A.tag !== 6 ? (A = $s(L, U.mode, Z), A.return = U, A) : (A = r(A, L), A.return = U, A)
        }

        function E(U, A, L, Z) {
            var le = L.type;
            return le === x ? Q(U, A, L.props.children, Z, L.key) : A !== null && (A.elementType === le || typeof le == "object" && le !== null && le.$$typeof === R && mh(le) === A.type) ? (A = r(A, L.props), Vl(A, L), A.return = U, A) : (A = Yi(L.type, L.key, L.props, null, U.mode, Z), Vl(A, L), A.return = U, A)
        }

        function B(U, A, L, Z) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== L.containerInfo || A.stateNode.implementation !== L.implementation ? (A = Ks(L, U.mode, Z), A.return = U, A) : (A = r(A, L.children || []), A.return = U, A)
        }

        function Q(U, A, L, Z, le) {
            return A === null || A.tag !== 7 ? (A = Pn(L, U.mode, Z, le), A.return = U, A) : (A = r(A, L), A.return = U, A)
        }

        function $(U, A, L) {
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return A = $s("" + A, U.mode, L), A.return = U, A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                    case _:
                        return L = Yi(A.type, A.key, A.props, null, U.mode, L), Vl(L, A), L.return = U, L;
                    case j:
                        return A = Ks(A, U.mode, L), A.return = U, A;
                    case R:
                        var Z = A._init;
                        return A = Z(A._payload), $(U, A, L)
                }
                if (me(A) || ae(A)) return A = Pn(A, U.mode, L, null), A.return = U, A;
                if (typeof A.then == "function") return $(U, sr(A), L);
                if (A.$$typeof === z) return $(U, Ji(U, A), L);
                ur(U, A)
            }
            return null
        }

        function q(U, A, L, Z) {
            var le = A !== null ? A.key : null;
            if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint") return le !== null ? null : y(U, A, "" + L, Z);
            if (typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                    case _:
                        return L.key === le ? E(U, A, L, Z) : null;
                    case j:
                        return L.key === le ? B(U, A, L, Z) : null;
                    case R:
                        return le = L._init, L = le(L._payload), q(U, A, L, Z)
                }
                if (me(L) || ae(L)) return le !== null ? null : Q(U, A, L, Z, null);
                if (typeof L.then == "function") return q(U, A, sr(L), Z);
                if (L.$$typeof === z) return q(U, A, Ji(U, L), Z);
                ur(U, L)
            }
            return null
        }

        function k(U, A, L, Z, le) {
            if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint") return U = U.get(L) || null, y(A, U, "" + Z, le);
            if (typeof Z == "object" && Z !== null) {
                switch (Z.$$typeof) {
                    case _:
                        return U = U.get(Z.key === null ? L : Z.key) || null, E(A, U, Z, le);
                    case j:
                        return U = U.get(Z.key === null ? L : Z.key) || null, B(A, U, Z, le);
                    case R:
                        var ge = Z._init;
                        return Z = ge(Z._payload), k(U, A, L, Z, le)
                }
                if (me(Z) || ae(Z)) return U = U.get(L) || null, Q(A, U, Z, le, null);
                if (typeof Z.then == "function") return k(U, A, L, sr(Z), le);
                if (Z.$$typeof === z) return k(U, A, L, Ji(A, Z), le);
                ur(A, Z)
            }
            return null
        }

        function oe(U, A, L, Z) {
            for (var le = null, ge = null, ie = A, ue = A = 0, $e = null; ie !== null && ue < L.length; ue++) {
                ie.index > ue ? ($e = ie, ie = null) : $e = ie.sibling;
                var _e = q(U, ie, L[ue], Z);
                if (_e === null) {
                    ie === null && (ie = $e);
                    break
                }
                e && ie && _e.alternate === null && t(U, ie), A = o(_e, A, ue), ge === null ? le = _e : ge.sibling = _e, ge = _e, ie = $e
            }
            if (ue === L.length) return n(U, ie), Te && ta(U, ue), le;
            if (ie === null) {
                for (; ue < L.length; ue++) ie = $(U, L[ue], Z), ie !== null && (A = o(ie, A, ue), ge === null ? le = ie : ge.sibling = ie, ge = ie);
                return Te && ta(U, ue), le
            }
            for (ie = a(ie); ue < L.length; ue++) $e = k(ie, U, ue, L[ue], Z), $e !== null && (e && $e.alternate !== null && ie.delete($e.key === null ? ue : $e.key), A = o($e, A, ue), ge === null ? le = $e : ge.sibling = $e, ge = $e);
            return e && ie.forEach(function (Yn) {
                return t(U, Yn)
            }), Te && ta(U, ue), le
        }

        function se(U, A, L, Z) {
            if (L == null) throw Error(s(151));
            for (var le = null, ge = null, ie = A, ue = A = 0, $e = null, _e = L.next(); ie !== null && !_e.done; ue++, _e = L.next()) {
                ie.index > ue ? ($e = ie, ie = null) : $e = ie.sibling;
                var Yn = q(U, ie, _e.value, Z);
                if (Yn === null) {
                    ie === null && (ie = $e);
                    break
                }
                e && ie && Yn.alternate === null && t(U, ie), A = o(Yn, A, ue), ge === null ? le = Yn : ge.sibling = Yn, ge = Yn, ie = $e
            }
            if (_e.done) return n(U, ie), Te && ta(U, ue), le;
            if (ie === null) {
                for (; !_e.done; ue++, _e = L.next()) _e = $(U, _e.value, Z), _e !== null && (A = o(_e, A, ue), ge === null ? le = _e : ge.sibling = _e, ge = _e);
                return Te && ta(U, ue), le
            }
            for (ie = a(ie); !_e.done; ue++, _e = L.next()) _e = k(ie, U, ue, _e.value, Z), _e !== null && (e && _e.alternate !== null && ie.delete(_e.key === null ? ue : _e.key), A = o(_e, A, ue), ge === null ? le = _e : ge.sibling = _e, ge = _e);
            return e && ie.forEach(function (yy) {
                return t(U, yy)
            }), Te && ta(U, ue), le
        }

        function Oe(U, A, L, Z) {
            if (typeof L == "object" && L !== null && L.type === x && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                    case _:
                        e:{
                            for (var le = L.key; A !== null;) {
                                if (A.key === le) {
                                    if (le = L.type, le === x) {
                                        if (A.tag === 7) {
                                            n(U, A.sibling), Z = r(A, L.props.children), Z.return = U, U = Z;
                                            break e
                                        }
                                    } else if (A.elementType === le || typeof le == "object" && le !== null && le.$$typeof === R && mh(le) === A.type) {
                                        n(U, A.sibling), Z = r(A, L.props), Vl(Z, L), Z.return = U, U = Z;
                                        break e
                                    }
                                    n(U, A);
                                    break
                                } else t(U, A);
                                A = A.sibling
                            }
                            L.type === x ? (Z = Pn(L.props.children, U.mode, Z, L.key), Z.return = U, U = Z) : (Z = Yi(L.type, L.key, L.props, null, U.mode, Z), Vl(Z, L), Z.return = U, U = Z)
                        }
                        return m(U);
                    case j:
                        e:{
                            for (le = L.key; A !== null;) {
                                if (A.key === le) if (A.tag === 4 && A.stateNode.containerInfo === L.containerInfo && A.stateNode.implementation === L.implementation) {
                                    n(U, A.sibling), Z = r(A, L.children || []), Z.return = U, U = Z;
                                    break e
                                } else {
                                    n(U, A);
                                    break
                                } else t(U, A);
                                A = A.sibling
                            }
                            Z = Ks(L, U.mode, Z), Z.return = U, U = Z
                        }
                        return m(U);
                    case R:
                        return le = L._init, L = le(L._payload), Oe(U, A, L, Z)
                }
                if (me(L)) return oe(U, A, L, Z);
                if (ae(L)) {
                    if (le = ae(L), typeof le != "function") throw Error(s(150));
                    return L = le.call(L), se(U, A, L, Z)
                }
                if (typeof L.then == "function") return Oe(U, A, sr(L), Z);
                if (L.$$typeof === z) return Oe(U, A, Ji(U, L), Z);
                ur(U, L)
            }
            return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, A !== null && A.tag === 6 ? (n(U, A.sibling), Z = r(A, L), Z.return = U, U = Z) : (n(U, A), Z = $s(L, U.mode, Z), Z.return = U, U = Z), m(U)) : n(U, A)
        }

        return function (U, A, L, Z) {
            try {
                kl = 0;
                var le = Oe(U, A, L, Z);
                return Xa = null, le
            } catch (ie) {
                if (ie === jl || ie === Ki) throw ie;
                var ge = bt(29, ie, null, U.mode);
                return ge.lanes = Z, ge.return = U, ge
            } finally {
            }
        }
    }

    var Ga = ph(!0), gh = ph(!1), Dt = I(null), Zt = null;

    function On(e) {
        var t = e.alternate;
        ee(Ye, Ye.current & 1), ee(Dt, e), Zt === null && (t === null || za.current !== null || t.memoizedState !== null) && (Zt = e)
    }

    function vh(e) {
        if (e.tag === 22) {
            if (ee(Ye, Ye.current), ee(Dt, e), Zt === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Zt = e)
            }
        } else Nn()
    }

    function Nn() {
        ee(Ye, Ye.current), ee(Dt, Dt.current)
    }

    function cn(e) {
        ne(Dt), Zt === e && (Zt = null), ne(Ye)
    }

    var Ye = I(0);

    function or(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || bo(n))) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function Ou(e, t, n, a) {
        t = e.memoizedState, n = n(a, t), n = n == null ? t : g({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }

    var Nu = {
        enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var a = Tt(), r = Cn(a);
            r.payload = t, n != null && (r.callback = n), t = wn(e, r, a), t !== null && (xt(t, e, a), Dl(t, e, a))
        }, enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var a = Tt(), r = Cn(a);
            r.tag = 1, r.payload = t, n != null && (r.callback = n), t = wn(e, r, a), t !== null && (xt(t, e, a), Dl(t, e, a))
        }, enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Tt(), a = Cn(n);
            a.tag = 2, t != null && (a.callback = t), t = wn(e, a, n), t !== null && (xt(t, e, n), Dl(t, e, n))
        }
    };

    function yh(e, t, n, a, r, o, m) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, o, m) : t.prototype && t.prototype.isPureReactComponent ? !Tl(n, a) || !Tl(r, o) : !0
    }

    function bh(e, t, n, a) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Nu.enqueueReplaceState(t, t.state, null)
    }

    function ua(e, t) {
        var n = t;
        if ("ref" in t) {
            n = {};
            for (var a in t) a !== "ref" && (n[a] = t[a])
        }
        if (e = e.defaultProps) {
            n === t && (n = g({}, n));
            for (var r in e) n[r] === void 0 && (n[r] = e[r])
        }
        return n
    }

    var cr = typeof reportError == "function" ? reportError : function (e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    };

    function Sh(e) {
        cr(e)
    }

    function _h(e) {
        console.error(e)
    }

    function Eh(e) {
        cr(e)
    }

    function fr(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, {componentStack: t.stack})
        } catch (a) {
            setTimeout(function () {
                throw a
            })
        }
    }

    function Th(e, t, n) {
        try {
            var a = e.onCaughtError;
            a(n.value, {componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null})
        } catch (r) {
            setTimeout(function () {
                throw r
            })
        }
    }

    function ju(e, t, n) {
        return n = Cn(n), n.tag = 3, n.payload = {element: null}, n.callback = function () {
            fr(e, t)
        }, n
    }

    function xh(e) {
        return e = Cn(e), e.tag = 3, e
    }

    function Rh(e, t, n, a) {
        var r = n.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = a.value;
            e.payload = function () {
                return r(o)
            }, e.callback = function () {
                Th(t, n, a)
            }
        }
        var m = n.stateNode;
        m !== null && typeof m.componentDidCatch == "function" && (e.callback = function () {
            Th(t, n, a), typeof r != "function" && (Ln === null ? Ln = new Set([this]) : Ln.add(this));
            var y = a.stack;
            this.componentDidCatch(a.value, {componentStack: y !== null ? y : ""})
        })
    }

    function yv(e, t, n, a, r) {
        if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = n.alternate, t !== null && Al(t, n, r, !0), n = Dt.current, n !== null) {
                switch (n.tag) {
                    case 13:
                        return Zt === null ? to() : n.alternate === null && ze === 0 && (ze = 3), n.flags &= -257, n.flags |= 65536, n.lanes = r, a === ru ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([a]) : t.add(a), ao(e, a, r)), !1;
                    case 22:
                        return n.flags |= 65536, a === ru ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([a])
                        }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([a]) : n.add(a)), ao(e, a, r)), !1
                }
                throw Error(s(435, n.tag))
            }
            return ao(e, a, r), to(), !1
        }
        if (Te) return t = Dt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = r, a !== Ps && (e = Error(s(422), {cause: a}), wl(Ot(e, n)))) : (a !== Ps && (t = Error(s(423), {cause: a}), wl(Ot(t, n))), e = e.current.alternate, e.flags |= 65536, r &= -r, e.lanes |= r, a = Ot(a, n), r = ju(e.stateNode, a, r), ou(e, r), ze !== 4 && (ze = 2)), !1;
        var o = Error(s(520), {cause: a});
        if (o = Ot(o, n), Jl === null ? Jl = [o] : Jl.push(o), ze !== 4 && (ze = 2), t === null) return !0;
        a = Ot(a, n), n = t;
        do {
            switch (n.tag) {
                case 3:
                    return n.flags |= 65536, e = r & -r, n.lanes |= e, e = ju(n.stateNode, a, e), ou(n, e), !1;
                case 1:
                    if (t = n.type, o = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (Ln === null || !Ln.has(o)))) return n.flags |= 65536, r &= -r, n.lanes |= r, r = xh(r), Rh(r, e, n, a), ou(n, r), !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }

    var Ch = Error(s(461)), Ie = !1;

    function Ke(e, t, n, a) {
        t.child = e === null ? gh(t, null, n, a) : Ga(t, e.child, n, a)
    }

    function wh(e, t, n, a, r) {
        n = n.render;
        var o = t.ref;
        if ("ref" in a) {
            var m = {};
            for (var y in a) y !== "ref" && (m[y] = a[y])
        } else m = a;
        return ia(t), a = mu(e, t, n, m, o, r), y = pu(), e !== null && !Ie ? (gu(e, t, r), fn(e, t, r)) : (Te && y && Fs(t), t.flags |= 1, Ke(e, t, a, r), t.child)
    }

    function Ah(e, t, n, a, r) {
        if (e === null) {
            var o = n.type;
            return typeof o == "function" && !Js(o) && o.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = o, Oh(e, t, o, a, r)) : (e = Yi(n.type, null, a, t, t.mode, r), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (o = e.child, !qu(e, r)) {
            var m = o.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Tl, n(m, a) && e.ref === t.ref) return fn(e, t, r)
        }
        return t.flags |= 1, e = an(o, a), e.ref = t.ref, e.return = t, t.child = e
    }

    function Oh(e, t, n, a, r) {
        if (e !== null) {
            var o = e.memoizedProps;
            if (Tl(o, a) && e.ref === t.ref) if (Ie = !1, t.pendingProps = a = o, qu(e, r)) (e.flags & 131072) !== 0 && (Ie = !0); else return t.lanes = e.lanes, fn(e, t, r)
        }
        return Uu(e, t, n, a, r)
    }

    function Nh(e, t, n) {
        var a = t.pendingProps, r = a.children, o = e !== null ? e.memoizedState : null;
        if (a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (a = o !== null ? o.baseLanes | n : n, e !== null) {
                    for (r = t.child = e.child, o = 0; r !== null;) o = o | r.lanes | r.childLanes, r = r.sibling;
                    t.childLanes = o & ~a
                } else t.childLanes = 0, t.child = null;
                return jh(e, t, a, n)
            }
            if ((n & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, e !== null && $i(t, o !== null ? o.cachePool : null), o !== null ? Od(t, o) : fu(), vh(t); else return t.lanes = t.childLanes = 536870912, jh(e, t, o !== null ? o.baseLanes | n : n, n)
        } else o !== null ? ($i(t, o.cachePool), Od(t, o), Nn(), t.memoizedState = null) : (e !== null && $i(t, null), fu(), Nn());
        return Ke(e, t, r, n), t.child
    }

    function jh(e, t, n, a) {
        var r = iu();
        return r = r === null ? null : {parent: Ge._currentValue, pool: r}, t.memoizedState = {
            baseLanes: n,
            cachePool: r
        }, e !== null && $i(t, null), fu(), vh(t), e !== null && Al(e, t, a, !0), null
    }

    function dr(e, t) {
        var n = t.ref;
        if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816); else {
            if (typeof n != "function" && typeof n != "object") throw Error(s(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816)
        }
    }

    function Uu(e, t, n, a, r) {
        return ia(t), n = mu(e, t, n, a, void 0, r), a = pu(), e !== null && !Ie ? (gu(e, t, r), fn(e, t, r)) : (Te && a && Fs(t), t.flags |= 1, Ke(e, t, n, r), t.child)
    }

    function Uh(e, t, n, a, r, o) {
        return ia(t), t.updateQueue = null, n = jd(t, a, n, r), Nd(e), a = pu(), e !== null && !Ie ? (gu(e, t, o), fn(e, t, o)) : (Te && a && Fs(t), t.flags |= 1, Ke(e, t, n, o), t.child)
    }

    function Dh(e, t, n, a, r) {
        if (ia(t), t.stateNode === null) {
            var o = Da, m = n.contextType;
            typeof m == "object" && m !== null && (o = et(m)), o = new n(a, o), t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = Nu, t.stateNode = o, o._reactInternals = t, o = t.stateNode, o.props = a, o.state = t.memoizedState, o.refs = {}, su(t), m = n.contextType, o.context = typeof m == "object" && m !== null ? et(m) : Da, o.state = t.memoizedState, m = n.getDerivedStateFromProps, typeof m == "function" && (Ou(t, n, m, a), o.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (m = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), m !== o.state && Nu.enqueueReplaceState(o, o.state, null), Hl(t, a, o, r), Ml(), o.state = t.memoizedState), typeof o.componentDidMount == "function" && (t.flags |= 4194308), a = !0
        } else if (e === null) {
            o = t.stateNode;
            var y = t.memoizedProps, E = ua(n, y);
            o.props = E;
            var B = o.context, Q = n.contextType;
            m = Da, typeof Q == "object" && Q !== null && (m = et(Q));
            var $ = n.getDerivedStateFromProps;
            Q = typeof $ == "function" || typeof o.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, Q || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (y || B !== m) && bh(t, o, a, m), Rn = !1;
            var q = t.memoizedState;
            o.state = q, Hl(t, a, o, r), Ml(), B = t.memoizedState, y || q !== B || Rn ? (typeof $ == "function" && (Ou(t, n, $, a), B = t.memoizedState), (E = Rn || yh(t, n, E, a, q, B, m)) ? (Q || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = B), o.props = a, o.state = B, o.context = m, a = E) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), a = !1)
        } else {
            o = t.stateNode, uu(e, t), m = t.memoizedProps, Q = ua(n, m), o.props = Q, $ = t.pendingProps, q = o.context, B = n.contextType, E = Da, typeof B == "object" && B !== null && (E = et(B)), y = n.getDerivedStateFromProps, (B = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (m !== $ || q !== E) && bh(t, o, a, E), Rn = !1, q = t.memoizedState, o.state = q, Hl(t, a, o, r), Ml();
            var k = t.memoizedState;
            m !== $ || q !== k || Rn || e !== null && e.dependencies !== null && Ii(e.dependencies) ? (typeof y == "function" && (Ou(t, n, y, a), k = t.memoizedState), (Q = Rn || yh(t, n, Q, a, q, k, E) || e !== null && e.dependencies !== null && Ii(e.dependencies)) ? (B || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(a, k, E), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(a, k, E)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || m === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = k), o.props = a, o.state = k, o.context = E, a = Q) : (typeof o.componentDidUpdate != "function" || m === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), a = !1)
        }
        return o = a, dr(e, t), a = (t.flags & 128) !== 0, o || a ? (o = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : o.render(), t.flags |= 1, e !== null && a ? (t.child = Ga(t, e.child, null, r), t.child = Ga(t, null, n, r)) : Ke(e, t, n, r), t.memoizedState = o.state, e = t.child) : e = fn(e, t, r), e
    }

    function Mh(e, t, n, a) {
        return Cl(), t.flags |= 256, Ke(e, t, n, a), t.child
    }

    var Du = {dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null};

    function Mu(e) {
        return {baseLanes: e, cachePool: _d()}
    }

    function Hu(e, t, n) {
        return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Mt), e
    }

    function Hh(e, t, n) {
        var a = t.pendingProps, r = !1, o = (t.flags & 128) !== 0, m;
        if ((m = o) || (m = e !== null && e.memoizedState === null ? !1 : (Ye.current & 2) !== 0), m && (r = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (Te) {
                if (r ? On(t) : Nn(), Te) {
                    var y = Be, E;
                    if (E = y) {
                        e:{
                            for (E = y, y = Qt; E.nodeType !== 8;) {
                                if (!y) {
                                    y = null;
                                    break e
                                }
                                if (E = qt(E.nextSibling), E === null) {
                                    y = null;
                                    break e
                                }
                            }
                            y = E
                        }
                        y !== null ? (t.memoizedState = {
                            dehydrated: y,
                            treeContext: ea !== null ? {id: ln, overflow: rn} : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, E = bt(18, null, null, 0), E.stateNode = y, E.return = t, t.child = E, at = t, Be = null, E = !0) : E = !1
                    }
                    E || aa(t)
                }
                if (y = t.memoizedState, y !== null && (y = y.dehydrated, y !== null)) return bo(y) ? t.lanes = 32 : t.lanes = 536870912, null;
                cn(t)
            }
            return y = a.children, a = a.fallback, r ? (Nn(), r = t.mode, y = hr({
                mode: "hidden",
                children: y
            }, r), a = Pn(a, r, n, null), y.return = t, a.return = t, y.sibling = a, t.child = y, r = t.child, r.memoizedState = Mu(n), r.childLanes = Hu(e, m, n), t.memoizedState = Du, a) : (On(t), Lu(t, y))
        }
        if (E = e.memoizedState, E !== null && (y = E.dehydrated, y !== null)) {
            if (o) t.flags & 256 ? (On(t), t.flags &= -257, t = Bu(e, t, n)) : t.memoizedState !== null ? (Nn(), t.child = e.child, t.flags |= 128, t = null) : (Nn(), r = a.fallback, y = t.mode, a = hr({
                mode: "visible",
                children: a.children
            }, y), r = Pn(r, y, n, null), r.flags |= 2, a.return = t, r.return = t, a.sibling = r, t.child = a, Ga(t, e.child, null, n), a = t.child, a.memoizedState = Mu(n), a.childLanes = Hu(e, m, n), t.memoizedState = Du, t = r); else if (On(t), bo(y)) {
                if (m = y.nextSibling && y.nextSibling.dataset, m) var B = m.dgst;
                m = B, a = Error(s(419)), a.stack = "", a.digest = m, wl({
                    value: a,
                    source: null,
                    stack: null
                }), t = Bu(e, t, n)
            } else if (Ie || Al(e, t, n, !1), m = (n & e.childLanes) !== 0, Ie || m) {
                if (m = Ue, m !== null && (a = n & -n, a = (a & 42) !== 0 ? 1 : bs(a), a = (a & (m.suspendedLanes | n)) !== 0 ? 0 : a, a !== 0 && a !== E.retryLane)) throw E.retryLane = a, Ua(e, a), xt(m, e, a), Ch;
                y.data === "$?" || to(), t = Bu(e, t, n)
            } else y.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = E.treeContext, Be = qt(y.nextSibling), at = t, Te = !0, na = null, Qt = !1, e !== null && (jt[Ut++] = ln, jt[Ut++] = rn, jt[Ut++] = ea, ln = e.id, rn = e.overflow, ea = t), t = Lu(t, a.children), t.flags |= 4096);
            return t
        }
        return r ? (Nn(), r = a.fallback, y = t.mode, E = e.child, B = E.sibling, a = an(E, {
            mode: "hidden",
            children: a.children
        }), a.subtreeFlags = E.subtreeFlags & 65011712, B !== null ? r = an(B, r) : (r = Pn(r, y, n, null), r.flags |= 2), r.return = t, a.return = t, a.sibling = r, t.child = a, a = r, r = t.child, y = e.child.memoizedState, y === null ? y = Mu(n) : (E = y.cachePool, E !== null ? (B = Ge._currentValue, E = E.parent !== B ? {
            parent: B,
            pool: B
        } : E) : E = _d(), y = {
            baseLanes: y.baseLanes | n,
            cachePool: E
        }), r.memoizedState = y, r.childLanes = Hu(e, m, n), t.memoizedState = Du, a) : (On(t), n = e.child, e = n.sibling, n = an(n, {
            mode: "visible",
            children: a.children
        }), n.return = t, n.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [e], t.flags |= 16) : m.push(e)), t.child = n, t.memoizedState = null, n)
    }

    function Lu(e, t) {
        return t = hr({mode: "visible", children: t}, e.mode), t.return = e, e.child = t
    }

    function hr(e, t) {
        return e = bt(22, e, null, t), e.lanes = 0, e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, e
    }

    function Bu(e, t, n) {
        return Ga(t, e.child, null, n), e = Lu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function Lh(e, t, n) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t), tu(e.return, t, n)
    }

    function zu(e, t, n, a, r) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: n,
            tailMode: r
        } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = a, o.tail = n, o.tailMode = r)
    }

    function Bh(e, t, n) {
        var a = t.pendingProps, r = a.revealOrder, o = a.tail;
        if (Ke(e, t, a.children, n), a = Ye.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128; else {
            if (e !== null && (e.flags & 128) !== 0) e:for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && Lh(e, n, t); else if (e.tag === 19) Lh(e, n, t); else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            a &= 1
        }
        switch (ee(Ye, a), r) {
            case"forwards":
                for (n = t.child, r = null; n !== null;) e = n.alternate, e !== null && or(e) === null && (r = n), n = n.sibling;
                n = r, n === null ? (r = t.child, t.child = null) : (r = n.sibling, n.sibling = null), zu(t, !1, r, n, o);
                break;
            case"backwards":
                for (n = null, r = t.child, t.child = null; r !== null;) {
                    if (e = r.alternate, e !== null && or(e) === null) {
                        t.child = r;
                        break
                    }
                    e = r.sibling, r.sibling = n, n = r, r = e
                }
                zu(t, !0, n, null, o);
                break;
            case"together":
                zu(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function fn(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), Hn |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
            if (Al(e, t, n, !1), (n & t.childLanes) === 0) return null
        } else return null;
        if (e !== null && t.child !== e.child) throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = an(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function qu(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ii(e)))
    }

    function bv(e, t, n) {
        switch (t.tag) {
            case 3:
                De(t, t.stateNode.containerInfo), xn(t, Ge, e.memoizedState.cache), Cl();
                break;
            case 27:
            case 5:
                ms(t);
                break;
            case 4:
                De(t, t.stateNode.containerInfo);
                break;
            case 10:
                xn(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var a = t.memoizedState;
                if (a !== null) return a.dehydrated !== null ? (On(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Hh(e, t, n) : (On(t), e = fn(e, t, n), e !== null ? e.sibling : null);
                On(t);
                break;
            case 19:
                var r = (e.flags & 128) !== 0;
                if (a = (n & t.childLanes) !== 0, a || (Al(e, t, n, !1), a = (n & t.childLanes) !== 0), r) {
                    if (a) return Bh(e, t, n);
                    t.flags |= 128
                }
                if (r = t.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), ee(Ye, Ye.current), a) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Nh(e, t, n);
            case 24:
                xn(t, Ge, e.memoizedState.cache)
        }
        return fn(e, t, n)
    }

    function zh(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps) Ie = !0; else {
            if (!qu(e, n) && (t.flags & 128) === 0) return Ie = !1, bv(e, t, n);
            Ie = (e.flags & 131072) !== 0
        } else Ie = !1, Te && (t.flags & 1048576) !== 0 && md(t, Zi, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                e:{
                    e = t.pendingProps;
                    var a = t.elementType, r = a._init;
                    if (a = r(a._payload), t.type = a, typeof a == "function") Js(a) ? (e = ua(a, e), t.tag = 1, t = Dh(null, t, a, e, n)) : (t.tag = 0, t = Uu(null, t, a, e, n)); else {
                        if (a != null) {
                            if (r = a.$$typeof, r === M) {
                                t.tag = 11, t = wh(null, t, a, e, n);
                                break e
                            } else if (r === O) {
                                t.tag = 14, t = Ah(null, t, a, e, n);
                                break e
                            }
                        }
                        throw t = Ee(a) || a, Error(s(306, t, ""))
                    }
                }
                return t;
            case 0:
                return Uu(e, t, t.type, t.pendingProps, n);
            case 1:
                return a = t.type, r = ua(a, t.pendingProps), Dh(e, t, a, r, n);
            case 3:
                e:{
                    if (De(t, t.stateNode.containerInfo), e === null) throw Error(s(387));
                    a = t.pendingProps;
                    var o = t.memoizedState;
                    r = o.element, uu(e, t), Hl(t, a, null, n);
                    var m = t.memoizedState;
                    if (a = m.cache, xn(t, Ge, a), a !== o.cache && nu(t, [Ge], n, !0), Ml(), a = m.element, o.isDehydrated) if (o = {
                        element: a,
                        isDehydrated: !1,
                        cache: m.cache
                    }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        t = Mh(e, t, a, n);
                        break e
                    } else if (a !== r) {
                        r = Ot(Error(s(424)), t), wl(r), t = Mh(e, t, a, n);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo, e.nodeType) {
                            case 9:
                                e = e.body;
                                break;
                            default:
                                e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (Be = qt(e.firstChild), at = t, Te = !0, na = null, Qt = !0, n = gh(t, null, a, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling
                    } else {
                        if (Cl(), a === r) {
                            t = fn(e, t, n);
                            break e
                        }
                        Ke(e, t, a, n)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return dr(e, t), e === null ? (n = Xm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Te || (n = t.type, e = t.pendingProps, a = wr(ce.current).createElement(n), a[Pe] = t, a[ut] = e, We(a, n, e), Ze(a), t.stateNode = a) : t.memoizedState = Xm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return ms(t), e === null && Te && (a = t.stateNode = qm(t.type, t.pendingProps, ce.current), at = t, Qt = !0, r = Be, qn(t.type) ? (So = r, Be = qt(a.firstChild)) : Be = r), Ke(e, t, t.pendingProps.children, n), dr(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
                return e === null && Te && ((r = a = Be) && (a = Iv(a, t.type, t.pendingProps, Qt), a !== null ? (t.stateNode = a, at = t, Be = qt(a.firstChild), Qt = !1, r = !0) : r = !1), r || aa(t)), ms(t), r = t.type, o = t.pendingProps, m = e !== null ? e.memoizedProps : null, a = o.children, go(r, o) ? a = null : m !== null && go(r, m) && (t.flags |= 32), t.memoizedState !== null && (r = mu(e, t, fv, null, null, n), ai._currentValue = r), dr(e, t), Ke(e, t, a, n), t.child;
            case 6:
                return e === null && Te && ((e = n = Be) && (n = Jv(n, t.pendingProps, Qt), n !== null ? (t.stateNode = n, at = t, Be = null, e = !0) : e = !1), e || aa(t)), null;
            case 13:
                return Hh(e, t, n);
            case 4:
                return De(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = Ga(t, null, a, n) : Ke(e, t, a, n), t.child;
            case 11:
                return wh(e, t, t.type, t.pendingProps, n);
            case 7:
                return Ke(e, t, t.pendingProps, n), t.child;
            case 8:
                return Ke(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Ke(e, t, t.pendingProps.children, n), t.child;
            case 10:
                return a = t.pendingProps, xn(t, t.type, a.value), Ke(e, t, a.children, n), t.child;
            case 9:
                return r = t.type._context, a = t.pendingProps.children, ia(t), r = et(r), a = a(r), t.flags |= 1, Ke(e, t, a, n), t.child;
            case 14:
                return Ah(e, t, t.type, t.pendingProps, n);
            case 15:
                return Oh(e, t, t.type, t.pendingProps, n);
            case 19:
                return Bh(e, t, n);
            case 31:
                return a = t.pendingProps, n = t.mode, a = {
                    mode: a.mode,
                    children: a.children
                }, e === null ? (n = hr(a, n), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = an(e.child, a), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
            case 22:
                return Nh(e, t, n);
            case 24:
                return ia(t), a = et(Ge), e === null ? (r = iu(), r === null && (r = Ue, o = au(), r.pooledCache = o, o.refCount++, o !== null && (r.pooledCacheLanes |= n), r = o), t.memoizedState = {
                    parent: a,
                    cache: r
                }, su(t), xn(t, Ge, r)) : ((e.lanes & n) !== 0 && (uu(e, t), Hl(t, null, null, n), Ml()), r = e.memoizedState, o = t.memoizedState, r.parent !== a ? (r = {
                    parent: a,
                    cache: a
                }, t.memoizedState = r, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r), xn(t, Ge, a)) : (a = o.cache, xn(t, Ge, a), a !== r.cache && nu(t, [Ge], n, !0))), Ke(e, t, t.pendingProps.children, n), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(s(156, t.tag))
    }

    function dn(e) {
        e.flags |= 4
    }

    function qh(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217; else if (e.flags |= 16777216, !Im(t)) {
            if (t = Dt.current, t !== null && ((Se & 4194048) === Se ? Zt !== null : (Se & 62914560) !== Se && (Se & 536870912) === 0 || t !== Zt)) throw Ul = ru, Ed;
            e.flags |= 8192
        }
    }

    function mr(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? vf() : 536870912, e.lanes |= t, Ia |= t)
    }

    function Xl(e, t) {
        if (!Te) switch (e.tailMode) {
            case"hidden":
                t = e.tail;
                for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case"collapsed":
                n = e.tail;
                for (var a = null; n !== null;) n.alternate !== null && (a = n), n = n.sibling;
                a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
        }
    }

    function He(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
        if (t) for (var r = e.child; r !== null;) n |= r.lanes | r.childLanes, a |= r.subtreeFlags & 65011712, a |= r.flags & 65011712, r.return = e, r = r.sibling; else for (r = e.child; r !== null;) n |= r.lanes | r.childLanes, a |= r.subtreeFlags, a |= r.flags, r.return = e, r = r.sibling;
        return e.subtreeFlags |= a, e.childLanes = n, t
    }

    function Sv(e, t, n) {
        var a = t.pendingProps;
        switch (Ws(t), t.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return He(t), null;
            case 1:
                return He(t), null;
            case 3:
                return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), un(Ge), Sn(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Rl(t) ? dn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, vd())), He(t), null;
            case 26:
                return n = t.memoizedState, e === null ? (dn(t), n !== null ? (He(t), qh(t, n)) : (He(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (dn(t), He(t), qh(t, n)) : (He(t), t.flags &= -16777217) : (e.memoizedProps !== a && dn(t), He(t), t.flags &= -16777217), null;
            case 27:
                Ri(t), n = ce.current;
                var r = t.type;
                if (e !== null && t.stateNode != null) e.memoizedProps !== a && dn(t); else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(s(166));
                        return He(t), null
                    }
                    e = re.current, Rl(t) ? pd(t) : (e = qm(r, a, n), t.stateNode = e, dn(t))
                }
                return He(t), null;
            case 5:
                if (Ri(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && dn(t); else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(s(166));
                        return He(t), null
                    }
                    if (e = re.current, Rl(t)) pd(t); else {
                        switch (r = wr(ce.current), e) {
                            case 1:
                                e = r.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                e = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default:
                                switch (n) {
                                    case"svg":
                                        e = r.createElementNS("http://www.w3.org/2000/svg", n);
                                        break;
                                    case"math":
                                        e = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                        break;
                                    case"script":
                                        e = r.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                        break;
                                    case"select":
                                        e = typeof a.is == "string" ? r.createElement("select", {is: a.is}) : r.createElement("select"), a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                                        break;
                                    default:
                                        e = typeof a.is == "string" ? r.createElement(n, {is: a.is}) : r.createElement(n)
                                }
                        }
                        e[Pe] = t, e[ut] = a;
                        e:for (r = t.child; r !== null;) {
                            if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode); else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                                r.child.return = r, r = r.child;
                                continue
                            }
                            if (r === t) break e;
                            for (; r.sibling === null;) {
                                if (r.return === null || r.return === t) break e;
                                r = r.return
                            }
                            r.sibling.return = r.return, r = r.sibling
                        }
                        t.stateNode = e;
                        e:switch (We(e, n, a), n) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                e = !!a.autoFocus;
                                break e;
                            case"img":
                                e = !0;
                                break e;
                            default:
                                e = !1
                        }
                        e && dn(t)
                    }
                }
                return He(t), t.flags &= -16777217, null;
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== a && dn(t); else {
                    if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
                    if (e = ce.current, Rl(t)) {
                        if (e = t.stateNode, n = t.memoizedProps, a = null, r = at, r !== null) switch (r.tag) {
                            case 27:
                            case 5:
                                a = r.memoizedProps
                        }
                        e[Pe] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Um(e.nodeValue, n)), e || aa(t)
                    } else e = wr(e).createTextNode(a), e[Pe] = t, t.stateNode = e
                }
                return He(t), null;
            case 13:
                if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (r = Rl(t), a !== null && a.dehydrated !== null) {
                        if (e === null) {
                            if (!r) throw Error(s(318));
                            if (r = t.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(s(317));
                            r[Pe] = t
                        } else Cl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        He(t), r = !1
                    } else r = vd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), r = !0;
                    if (!r) return t.flags & 256 ? (cn(t), t) : (cn(t), null)
                }
                if (cn(t), (t.flags & 128) !== 0) return t.lanes = n, t;
                if (n = a !== null, e = e !== null && e.memoizedState !== null, n) {
                    a = t.child, r = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (r = a.alternate.memoizedState.cachePool.pool);
                    var o = null;
                    a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool), o !== r && (a.flags |= 2048)
                }
                return n !== e && n && (t.child.flags |= 8192), mr(t, t.updateQueue), He(t), null;
            case 4:
                return Sn(), e === null && co(t.stateNode.containerInfo), He(t), null;
            case 10:
                return un(t.type), He(t), null;
            case 19:
                if (ne(Ye), r = t.memoizedState, r === null) return He(t), null;
                if (a = (t.flags & 128) !== 0, o = r.rendering, o === null) if (a) Xl(r, !1); else {
                    if (ze !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null;) {
                        if (o = or(e), o !== null) {
                            for (t.flags |= 128, Xl(r, !1), e = o.updateQueue, t.updateQueue = e, mr(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) hd(n, e), n = n.sibling;
                            return ee(Ye, Ye.current & 1 | 2), t.child
                        }
                        e = e.sibling
                    }
                    r.tail !== null && Yt() > vr && (t.flags |= 128, a = !0, Xl(r, !1), t.lanes = 4194304)
                } else {
                    if (!a) if (e = or(o), e !== null) {
                        if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, mr(t, e), Xl(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !Te) return He(t), null
                    } else 2 * Yt() - r.renderingStartTime > vr && n !== 536870912 && (t.flags |= 128, a = !0, Xl(r, !1), t.lanes = 4194304);
                    r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e !== null ? e.sibling = o : t.child = o, r.last = o)
                }
                return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.renderingStartTime = Yt(), t.sibling = null, e = Ye.current, ee(Ye, a ? e & 1 | 2 : e & 1), t) : (He(t), null);
            case 22:
            case 23:
                return cn(t), du(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : He(t), n = t.updateQueue, n !== null && mr(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && ne(ra), null;
            case 24:
                return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), un(Ge), He(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(s(156, t.tag))
    }

    function _v(e, t) {
        switch (Ws(t), t.tag) {
            case 1:
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return un(Ge), Sn(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return Ri(t), null;
            case 13:
                if (cn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(s(340));
                    Cl()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return ne(Ye), null;
            case 4:
                return Sn(), null;
            case 10:
                return un(t.type), null;
            case 22:
            case 23:
                return cn(t), du(), e !== null && ne(ra), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
                return un(Ge), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function kh(e, t) {
        switch (Ws(t), t.tag) {
            case 3:
                un(Ge), Sn();
                break;
            case 26:
            case 27:
            case 5:
                Ri(t);
                break;
            case 4:
                Sn();
                break;
            case 13:
                cn(t);
                break;
            case 19:
                ne(Ye);
                break;
            case 10:
                un(t.type);
                break;
            case 22:
            case 23:
                cn(t), du(), e !== null && ne(ra);
                break;
            case 24:
                un(Ge)
        }
    }

    function Gl(e, t) {
        try {
            var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
            if (a !== null) {
                var r = a.next;
                n = r;
                do {
                    if ((n.tag & e) === e) {
                        a = void 0;
                        var o = n.create, m = n.inst;
                        a = o(), m.destroy = a
                    }
                    n = n.next
                } while (n !== r)
            }
        } catch (y) {
            je(t, t.return, y)
        }
    }

    function jn(e, t, n) {
        try {
            var a = t.updateQueue, r = a !== null ? a.lastEffect : null;
            if (r !== null) {
                var o = r.next;
                a = o;
                do {
                    if ((a.tag & e) === e) {
                        var m = a.inst, y = m.destroy;
                        if (y !== void 0) {
                            m.destroy = void 0, r = t;
                            var E = n, B = y;
                            try {
                                B()
                            } catch (Q) {
                                je(r, E, Q)
                            }
                        }
                    }
                    a = a.next
                } while (a !== o)
            }
        } catch (Q) {
            je(t, t.return, Q)
        }
    }

    function Vh(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                Ad(t, n)
            } catch (a) {
                je(e, e.return, a)
            }
        }
    }

    function Xh(e, t, n) {
        n.props = ua(e.type, e.memoizedProps), n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (a) {
            je(e, t, a)
        }
    }

    function Yl(e, t) {
        try {
            var n = e.ref;
            if (n !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var a = e.stateNode;
                        break;
                    case 30:
                        a = e.stateNode;
                        break;
                    default:
                        a = e.stateNode
                }
                typeof n == "function" ? e.refCleanup = n(a) : n.current = a
            }
        } catch (r) {
            je(e, t, r)
        }
    }

    function It(e, t) {
        var n = e.ref, a = e.refCleanup;
        if (n !== null) if (typeof a == "function") try {
            a()
        } catch (r) {
            je(e, t, r)
        } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
        } else if (typeof n == "function") try {
            n(null)
        } catch (r) {
            je(e, t, r)
        } else n.current = null
    }

    function Gh(e) {
        var t = e.type, n = e.memoizedProps, a = e.stateNode;
        try {
            e:switch (t) {
                case"button":
                case"input":
                case"select":
                case"textarea":
                    n.autoFocus && a.focus();
                    break e;
                case"img":
                    n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet)
            }
        } catch (r) {
            je(e, e.return, r)
        }
    }

    function ku(e, t, n) {
        try {
            var a = e.stateNode;
            Xv(a, e.type, n, t), a[ut] = t
        } catch (r) {
            je(e, e.return, r)
        }
    }

    function Yh(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && qn(e.type) || e.tag === 4
    }

    function Vu(e) {
        e:for (; ;) {
            for (; e.sibling === null;) {
                if (e.return === null || Yh(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && qn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function Xu(e, t, n) {
        var a = e.tag;
        if (a === 5 || a === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Cr)); else if (a !== 4 && (a === 27 && qn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (Xu(e, t, n), e = e.sibling; e !== null;) Xu(e, t, n), e = e.sibling
    }

    function pr(e, t, n) {
        var a = e.tag;
        if (a === 5 || a === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (a !== 4 && (a === 27 && qn(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (pr(e, t, n), e = e.sibling; e !== null;) pr(e, t, n), e = e.sibling
    }

    function Qh(e) {
        var t = e.stateNode, n = e.memoizedProps;
        try {
            for (var a = e.type, r = t.attributes; r.length;) t.removeAttributeNode(r[0]);
            We(t, a, n), t[Pe] = e, t[ut] = n
        } catch (o) {
            je(e, e.return, o)
        }
    }

    var hn = !1, ke = !1, Gu = !1, Zh = typeof WeakSet == "function" ? WeakSet : Set, Je = null;

    function Ev(e, t) {
        if (e = e.containerInfo, mo = Dr, e = ad(e), Vs(e)) {
            if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd}; else e:{
                n = (n = e.ownerDocument) && n.defaultView || window;
                var a = n.getSelection && n.getSelection();
                if (a && a.rangeCount !== 0) {
                    n = a.anchorNode;
                    var r = a.anchorOffset, o = a.focusNode;
                    a = a.focusOffset;
                    try {
                        n.nodeType, o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var m = 0, y = -1, E = -1, B = 0, Q = 0, $ = e, q = null;
                    t:for (; ;) {
                        for (var k; $ !== n || r !== 0 && $.nodeType !== 3 || (y = m + r), $ !== o || a !== 0 && $.nodeType !== 3 || (E = m + a), $.nodeType === 3 && (m += $.nodeValue.length), (k = $.firstChild) !== null;) q = $, $ = k;
                        for (; ;) {
                            if ($ === e) break t;
                            if (q === n && ++B === r && (y = m), q === o && ++Q === a && (E = m), (k = $.nextSibling) !== null) break;
                            $ = q, q = $.parentNode
                        }
                        $ = k
                    }
                    n = y === -1 || E === -1 ? null : {start: y, end: E}
                } else n = null
            }
            n = n || {start: 0, end: 0}
        } else n = null;
        for (po = {
            focusedElem: e,
            selectionRange: n
        }, Dr = !1, Je = t; Je !== null;) if (t = Je, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Je = e; else for (; Je !== null;) {
            switch (t = Je, o = t.alternate, e = t.flags, t.tag) {
                case 0:
                    break;
                case 11:
                case 15:
                    break;
                case 1:
                    if ((e & 1024) !== 0 && o !== null) {
                        e = void 0, n = t, r = o.memoizedProps, o = o.memoizedState, a = n.stateNode;
                        try {
                            var oe = ua(n.type, r, n.elementType === n.type);
                            e = a.getSnapshotBeforeUpdate(oe, o), a.__reactInternalSnapshotBeforeUpdate = e
                        } catch (se) {
                            je(n, n.return, se)
                        }
                    }
                    break;
                case 3:
                    if ((e & 1024) !== 0) {
                        if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) yo(e); else if (n === 1) switch (e.nodeName) {
                            case"HEAD":
                            case"HTML":
                            case"BODY":
                                yo(e);
                                break;
                            default:
                                e.textContent = ""
                        }
                    }
                    break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    if ((e & 1024) !== 0) throw Error(s(163))
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, Je = e;
                break
            }
            Je = t.return
        }
    }

    function Ih(e, t, n) {
        var a = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Un(e, n), a & 4 && Gl(5, n);
                break;
            case 1:
                if (Un(e, n), a & 4) if (e = n.stateNode, t === null) try {
                    e.componentDidMount()
                } catch (m) {
                    je(n, n.return, m)
                } else {
                    var r = ua(n.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(r, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (m) {
                        je(n, n.return, m)
                    }
                }
                a & 64 && Vh(n), a & 512 && Yl(n, n.return);
                break;
            case 3:
                if (Un(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
                    if (t = null, n.child !== null) switch (n.child.tag) {
                        case 27:
                        case 5:
                            t = n.child.stateNode;
                            break;
                        case 1:
                            t = n.child.stateNode
                    }
                    try {
                        Ad(e, t)
                    } catch (m) {
                        je(n, n.return, m)
                    }
                }
                break;
            case 27:
                t === null && a & 4 && Qh(n);
            case 26:
            case 5:
                Un(e, n), t === null && a & 4 && Gh(n), a & 512 && Yl(n, n.return);
                break;
            case 12:
                Un(e, n);
                break;
            case 13:
                Un(e, n), a & 4 && Kh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = jv.bind(null, n), $v(e, n))));
                break;
            case 22:
                if (a = n.memoizedState !== null || hn, !a) {
                    t = t !== null && t.memoizedState !== null || ke, r = hn;
                    var o = ke;
                    hn = a, (ke = t) && !o ? Dn(e, n, (n.subtreeFlags & 8772) !== 0) : Un(e, n), hn = r, ke = o
                }
                break;
            case 30:
                break;
            default:
                Un(e, n)
        }
    }

    function Jh(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, Jh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Es(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    var Me = null, ft = !1;

    function mn(e, t, n) {
        for (n = n.child; n !== null;) $h(e, t, n), n = n.sibling
    }

    function $h(e, t, n) {
        if (gt && typeof gt.onCommitFiberUnmount == "function") try {
            gt.onCommitFiberUnmount(fl, n)
        } catch {
        }
        switch (n.tag) {
            case 26:
                ke || It(n, t), mn(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
                break;
            case 27:
                ke || It(n, t);
                var a = Me, r = ft;
                qn(n.type) && (Me = n.stateNode, ft = !1), mn(e, t, n), Pl(n.stateNode), Me = a, ft = r;
                break;
            case 5:
                ke || It(n, t);
            case 6:
                if (a = Me, r = ft, Me = null, mn(e, t, n), Me = a, ft = r, Me !== null) if (ft) try {
                    (Me.nodeType === 9 ? Me.body : Me.nodeName === "HTML" ? Me.ownerDocument.body : Me).removeChild(n.stateNode)
                } catch (o) {
                    je(n, t, o)
                } else try {
                    Me.removeChild(n.stateNode)
                } catch (o) {
                    je(n, t, o)
                }
                break;
            case 18:
                Me !== null && (ft ? (e = Me, Bm(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), si(e)) : Bm(Me, n.stateNode));
                break;
            case 4:
                a = Me, r = ft, Me = n.stateNode.containerInfo, ft = !0, mn(e, t, n), Me = a, ft = r;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                ke || jn(2, n, t), ke || jn(4, n, t), mn(e, t, n);
                break;
            case 1:
                ke || (It(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Xh(n, t, a)), mn(e, t, n);
                break;
            case 21:
                mn(e, t, n);
                break;
            case 22:
                ke = (a = ke) || n.memoizedState !== null, mn(e, t, n), ke = a;
                break;
            default:
                mn(e, t, n)
        }
    }

    function Kh(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
            si(e)
        } catch (n) {
            je(t, t.return, n)
        }
    }

    function Tv(e) {
        switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new Zh), t;
            case 22:
                return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Zh), t;
            default:
                throw Error(s(435, e.tag))
        }
    }

    function Yu(e, t) {
        var n = Tv(e);
        t.forEach(function (a) {
            var r = Uv.bind(null, e, a);
            n.has(a) || (n.add(a), a.then(r, r))
        })
    }

    function St(e, t) {
        var n = t.deletions;
        if (n !== null) for (var a = 0; a < n.length; a++) {
            var r = n[a], o = e, m = t, y = m;
            e:for (; y !== null;) {
                switch (y.tag) {
                    case 27:
                        if (qn(y.type)) {
                            Me = y.stateNode, ft = !1;
                            break e
                        }
                        break;
                    case 5:
                        Me = y.stateNode, ft = !1;
                        break e;
                    case 3:
                    case 4:
                        Me = y.stateNode.containerInfo, ft = !0;
                        break e
                }
                y = y.return
            }
            if (Me === null) throw Error(s(160));
            $h(o, m, r), Me = null, ft = !1, o = r.alternate, o !== null && (o.return = null), r.return = null
        }
        if (t.subtreeFlags & 13878) for (t = t.child; t !== null;) Fh(t, e), t = t.sibling
    }

    var zt = null;

    function Fh(e, t) {
        var n = e.alternate, a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                St(t, e), _t(e), a & 4 && (jn(3, e, e.return), Gl(3, e), jn(5, e, e.return));
                break;
            case 1:
                St(t, e), _t(e), a & 512 && (ke || n === null || It(n, n.return)), a & 64 && hn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
                break;
            case 26:
                var r = zt;
                if (St(t, e), _t(e), a & 512 && (ke || n === null || It(n, n.return)), a & 4) {
                    var o = n !== null ? n.memoizedState : null;
                    if (a = e.memoizedState, n === null) if (a === null) if (e.stateNode === null) {
                        e:{
                            a = e.type, n = e.memoizedProps, r = r.ownerDocument || r;
                            t:switch (a) {
                                case"title":
                                    o = r.getElementsByTagName("title")[0], (!o || o[ml] || o[Pe] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = r.createElement(a), r.head.insertBefore(o, r.querySelector("head > title"))), We(o, a, n), o[Pe] = e, Ze(o), a = o;
                                    break e;
                                case"link":
                                    var m = Qm("link", "href", r).get(a + (n.href || ""));
                                    if (m) {
                                        for (var y = 0; y < m.length; y++) if (o = m[y], o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && o.getAttribute("rel") === (n.rel == null ? null : n.rel) && o.getAttribute("title") === (n.title == null ? null : n.title) && o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                            m.splice(y, 1);
                                            break t
                                        }
                                    }
                                    o = r.createElement(a), We(o, a, n), r.head.appendChild(o);
                                    break;
                                case"meta":
                                    if (m = Qm("meta", "content", r).get(a + (n.content || ""))) {
                                        for (y = 0; y < m.length; y++) if (o = m[y], o.getAttribute("content") === (n.content == null ? null : "" + n.content) && o.getAttribute("name") === (n.name == null ? null : n.name) && o.getAttribute("property") === (n.property == null ? null : n.property) && o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                            m.splice(y, 1);
                                            break t
                                        }
                                    }
                                    o = r.createElement(a), We(o, a, n), r.head.appendChild(o);
                                    break;
                                default:
                                    throw Error(s(468, a))
                            }
                            o[Pe] = e, Ze(o), a = o
                        }
                        e.stateNode = a
                    } else Zm(r, e.type, e.stateNode); else e.stateNode = Ym(r, a, e.memoizedProps); else o !== a ? (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, a === null ? Zm(r, e.type, e.stateNode) : Ym(r, a, e.memoizedProps)) : a === null && e.stateNode !== null && ku(e, e.memoizedProps, n.memoizedProps)
                }
                break;
            case 27:
                St(t, e), _t(e), a & 512 && (ke || n === null || It(n, n.return)), n !== null && a & 4 && ku(e, e.memoizedProps, n.memoizedProps);
                break;
            case 5:
                if (St(t, e), _t(e), a & 512 && (ke || n === null || It(n, n.return)), e.flags & 32) {
                    r = e.stateNode;
                    try {
                        Ra(r, "")
                    } catch (k) {
                        je(e, e.return, k)
                    }
                }
                a & 4 && e.stateNode != null && (r = e.memoizedProps, ku(e, r, n !== null ? n.memoizedProps : r)), a & 1024 && (Gu = !0);
                break;
            case 6:
                if (St(t, e), _t(e), a & 4) {
                    if (e.stateNode === null) throw Error(s(162));
                    a = e.memoizedProps, n = e.stateNode;
                    try {
                        n.nodeValue = a
                    } catch (k) {
                        je(e, e.return, k)
                    }
                }
                break;
            case 3:
                if (Nr = null, r = zt, zt = Ar(t.containerInfo), St(t, e), zt = r, _t(e), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    si(t.containerInfo)
                } catch (k) {
                    je(e, e.return, k)
                }
                Gu && (Gu = !1, Wh(e));
                break;
            case 4:
                a = zt, zt = Ar(e.stateNode.containerInfo), St(t, e), _t(e), zt = a;
                break;
            case 12:
                St(t, e), _t(e);
                break;
            case 13:
                St(t, e), _t(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Ku = Yt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Yu(e, a)));
                break;
            case 22:
                r = e.memoizedState !== null;
                var E = n !== null && n.memoizedState !== null, B = hn, Q = ke;
                if (hn = B || r, ke = Q || E, St(t, e), ke = Q, hn = B, _t(e), a & 8192) e:for (t = e.stateNode, t._visibility = r ? t._visibility & -2 : t._visibility | 1, r && (n === null || E || hn || ke || oa(e)), n = null, t = e; ;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (n === null) {
                            E = n = t;
                            try {
                                if (o = E.stateNode, r) m = o.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none"; else {
                                    y = E.stateNode;
                                    var $ = E.memoizedProps.style,
                                        q = $ != null && $.hasOwnProperty("display") ? $.display : null;
                                    y.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim()
                                }
                            } catch (k) {
                                je(E, E.return, k)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (n === null) {
                            E = t;
                            try {
                                E.stateNode.nodeValue = r ? "" : E.memoizedProps
                            } catch (k) {
                                je(E, E.return, k)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break e;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e) break e;
                        n === t && (n = null), t = t.return
                    }
                    n === t && (n = null), t.sibling.return = t.return, t = t.sibling
                }
                a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Yu(e, n))));
                break;
            case 19:
                St(t, e), _t(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Yu(e, a)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                St(t, e), _t(e)
        }
    }

    function _t(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var n, a = e.return; a !== null;) {
                    if (Yh(a)) {
                        n = a;
                        break
                    }
                    a = a.return
                }
                if (n == null) throw Error(s(160));
                switch (n.tag) {
                    case 27:
                        var r = n.stateNode, o = Vu(e);
                        pr(e, o, r);
                        break;
                    case 5:
                        var m = n.stateNode;
                        n.flags & 32 && (Ra(m, ""), n.flags &= -33);
                        var y = Vu(e);
                        pr(e, y, m);
                        break;
                    case 3:
                    case 4:
                        var E = n.stateNode.containerInfo, B = Vu(e);
                        Xu(e, B, E);
                        break;
                    default:
                        throw Error(s(161))
                }
            } catch (Q) {
                je(e, e.return, Q)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function Wh(e) {
        if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
            var t = e;
            Wh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
        }
    }

    function Un(e, t) {
        if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) Ih(e, t.alternate, t), t = t.sibling
    }

    function oa(e) {
        for (e = e.child; e !== null;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    jn(4, t, t.return), oa(t);
                    break;
                case 1:
                    It(t, t.return);
                    var n = t.stateNode;
                    typeof n.componentWillUnmount == "function" && Xh(t, t.return, n), oa(t);
                    break;
                case 27:
                    Pl(t.stateNode);
                case 26:
                case 5:
                    It(t, t.return), oa(t);
                    break;
                case 22:
                    t.memoizedState === null && oa(t);
                    break;
                case 30:
                    oa(t);
                    break;
                default:
                    oa(t)
            }
            e = e.sibling
        }
    }

    function Dn(e, t, n) {
        for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var a = t.alternate, r = e, o = t, m = o.flags;
            switch (o.tag) {
                case 0:
                case 11:
                case 15:
                    Dn(r, o, n), Gl(4, o);
                    break;
                case 1:
                    if (Dn(r, o, n), a = o, r = a.stateNode, typeof r.componentDidMount == "function") try {
                        r.componentDidMount()
                    } catch (B) {
                        je(a, a.return, B)
                    }
                    if (a = o, r = a.updateQueue, r !== null) {
                        var y = a.stateNode;
                        try {
                            var E = r.shared.hiddenCallbacks;
                            if (E !== null) for (r.shared.hiddenCallbacks = null, r = 0; r < E.length; r++) wd(E[r], y)
                        } catch (B) {
                            je(a, a.return, B)
                        }
                    }
                    n && m & 64 && Vh(o), Yl(o, o.return);
                    break;
                case 27:
                    Qh(o);
                case 26:
                case 5:
                    Dn(r, o, n), n && a === null && m & 4 && Gh(o), Yl(o, o.return);
                    break;
                case 12:
                    Dn(r, o, n);
                    break;
                case 13:
                    Dn(r, o, n), n && m & 4 && Kh(r, o);
                    break;
                case 22:
                    o.memoizedState === null && Dn(r, o, n), Yl(o, o.return);
                    break;
                case 30:
                    break;
                default:
                    Dn(r, o, n)
            }
            t = t.sibling
        }
    }

    function Qu(e, t) {
        var n = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ol(n))
    }

    function Zu(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ol(e))
    }

    function Jt(e, t, n, a) {
        if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) Ph(e, t, n, a), t = t.sibling
    }

    function Ph(e, t, n, a) {
        var r = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Jt(e, t, n, a), r & 2048 && Gl(9, t);
                break;
            case 1:
                Jt(e, t, n, a);
                break;
            case 3:
                Jt(e, t, n, a), r & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ol(e)));
                break;
            case 12:
                if (r & 2048) {
                    Jt(e, t, n, a), e = t.stateNode;
                    try {
                        var o = t.memoizedProps, m = o.id, y = o.onPostCommit;
                        typeof y == "function" && y(m, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (E) {
                        je(t, t.return, E)
                    }
                } else Jt(e, t, n, a);
                break;
            case 13:
                Jt(e, t, n, a);
                break;
            case 23:
                break;
            case 22:
                o = t.stateNode, m = t.alternate, t.memoizedState !== null ? o._visibility & 2 ? Jt(e, t, n, a) : Ql(e, t) : o._visibility & 2 ? Jt(e, t, n, a) : (o._visibility |= 2, Ya(e, t, n, a, (t.subtreeFlags & 10256) !== 0)), r & 2048 && Qu(m, t);
                break;
            case 24:
                Jt(e, t, n, a), r & 2048 && Zu(t.alternate, t);
                break;
            default:
                Jt(e, t, n, a)
        }
    }

    function Ya(e, t, n, a, r) {
        for (r = r && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var o = e, m = t, y = n, E = a, B = m.flags;
            switch (m.tag) {
                case 0:
                case 11:
                case 15:
                    Ya(o, m, y, E, r), Gl(8, m);
                    break;
                case 23:
                    break;
                case 22:
                    var Q = m.stateNode;
                    m.memoizedState !== null ? Q._visibility & 2 ? Ya(o, m, y, E, r) : Ql(o, m) : (Q._visibility |= 2, Ya(o, m, y, E, r)), r && B & 2048 && Qu(m.alternate, m);
                    break;
                case 24:
                    Ya(o, m, y, E, r), r && B & 2048 && Zu(m.alternate, m);
                    break;
                default:
                    Ya(o, m, y, E, r)
            }
            t = t.sibling
        }
    }

    function Ql(e, t) {
        if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
            var n = e, a = t, r = a.flags;
            switch (a.tag) {
                case 22:
                    Ql(n, a), r & 2048 && Qu(a.alternate, a);
                    break;
                case 24:
                    Ql(n, a), r & 2048 && Zu(a.alternate, a);
                    break;
                default:
                    Ql(n, a)
            }
            t = t.sibling
        }
    }

    var Zl = 8192;

    function Qa(e) {
        if (e.subtreeFlags & Zl) for (e = e.child; e !== null;) em(e), e = e.sibling
    }

    function em(e) {
        switch (e.tag) {
            case 26:
                Qa(e), e.flags & Zl && e.memoizedState !== null && uy(zt, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                Qa(e);
                break;
            case 3:
            case 4:
                var t = zt;
                zt = Ar(e.stateNode.containerInfo), Qa(e), zt = t;
                break;
            case 22:
                e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Zl, Zl = 16777216, Qa(e), Zl = t) : Qa(e));
                break;
            default:
                Qa(e)
        }
    }

    function tm(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
            t.child = null;
            do t = e.sibling, e.sibling = null, e = t; while (e !== null)
        }
    }

    function Il(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null) for (var n = 0; n < t.length; n++) {
                var a = t[n];
                Je = a, am(a, e)
            }
            tm(e)
        }
        if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) nm(e), e = e.sibling
    }

    function nm(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Il(e), e.flags & 2048 && jn(9, e, e.return);
                break;
            case 3:
                Il(e);
                break;
            case 12:
                Il(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, gr(e)) : Il(e);
                break;
            default:
                Il(e)
        }
    }

    function gr(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null) for (var n = 0; n < t.length; n++) {
                var a = t[n];
                Je = a, am(a, e)
            }
            tm(e)
        }
        for (e = e.child; e !== null;) {
            switch (t = e, t.tag) {
                case 0:
                case 11:
                case 15:
                    jn(8, t, t.return), gr(t);
                    break;
                case 22:
                    n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, gr(t));
                    break;
                default:
                    gr(t)
            }
            e = e.sibling
        }
    }

    function am(e, t) {
        for (; Je !== null;) {
            var n = Je;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    jn(8, n, t);
                    break;
                case 23:
                case 22:
                    if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                        var a = n.memoizedState.cachePool.pool;
                        a != null && a.refCount++
                    }
                    break;
                case 24:
                    Ol(n.memoizedState.cache)
            }
            if (a = n.child, a !== null) a.return = n, Je = a; else e:for (n = e; Je !== null;) {
                a = Je;
                var r = a.sibling, o = a.return;
                if (Jh(a), a === n) {
                    Je = null;
                    break e
                }
                if (r !== null) {
                    r.return = o, Je = r;
                    break e
                }
                Je = o
            }
        }
    }

    var xv = {
            getCacheForType: function (e) {
                var t = et(Ge), n = t.data.get(e);
                return n === void 0 && (n = e(), t.data.set(e, n)), n
            }
        }, Rv = typeof WeakMap == "function" ? WeakMap : Map, Re = 0, Ue = null, ve = null, Se = 0, Ce = 0, Et = null,
        Mn = !1, Za = !1, Iu = !1, pn = 0, ze = 0, Hn = 0, ca = 0, Ju = 0, Mt = 0, Ia = 0, Jl = null, dt = null,
        $u = !1, Ku = 0, vr = 1 / 0, yr = null, Ln = null, Fe = 0, Bn = null, Ja = null, $a = 0, Fu = 0, Wu = null,
        lm = null, $l = 0, Pu = null;

    function Tt() {
        if ((Re & 2) !== 0 && Se !== 0) return Se & -Se;
        if (X.T !== null) {
            var e = La;
            return e !== 0 ? e : ro()
        }
        return Sf()
    }

    function im() {
        Mt === 0 && (Mt = (Se & 536870912) === 0 || Te ? gf() : 536870912);
        var e = Dt.current;
        return e !== null && (e.flags |= 32), Mt
    }

    function xt(e, t, n) {
        (e === Ue && (Ce === 2 || Ce === 9) || e.cancelPendingCommit !== null) && (Ka(e, 0), zn(e, Se, Mt, !1)), hl(e, n), ((Re & 2) === 0 || e !== Ue) && (e === Ue && ((Re & 2) === 0 && (ca |= n), ze === 4 && zn(e, Se, Mt, !1)), $t(e))
    }

    function rm(e, t, n) {
        if ((Re & 6) !== 0) throw Error(s(327));
        var a = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || dl(e, t), r = a ? Av(e, t) : no(e, t, !0), o = a;
        do {
            if (r === 0) {
                Za && !a && zn(e, t, 0, !1);
                break
            } else {
                if (n = e.current.alternate, o && !Cv(n)) {
                    r = no(e, t, !1), o = !1;
                    continue
                }
                if (r === 2) {
                    if (o = t, e.errorRecoveryDisabledLanes & o) var m = 0; else m = e.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
                    if (m !== 0) {
                        t = m;
                        e:{
                            var y = e;
                            r = Jl;
                            var E = y.current.memoizedState.isDehydrated;
                            if (E && (Ka(y, m).flags |= 256), m = no(y, m, !1), m !== 2) {
                                if (Iu && !E) {
                                    y.errorRecoveryDisabledLanes |= o, ca |= o, r = 4;
                                    break e
                                }
                                o = dt, dt = r, o !== null && (dt === null ? dt = o : dt.push.apply(dt, o))
                            }
                            r = m
                        }
                        if (o = !1, r !== 2) continue
                    }
                }
                if (r === 1) {
                    Ka(e, 0), zn(e, t, 0, !0);
                    break
                }
                e:{
                    switch (a = e, o = r, o) {
                        case 0:
                        case 1:
                            throw Error(s(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            zn(a, t, Mt, !Mn);
                            break e;
                        case 2:
                            dt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(s(329))
                    }
                    if ((t & 62914560) === t && (r = Ku + 300 - Yt(), 10 < r)) {
                        if (zn(a, t, Mt, !Mn), Oi(a, 0, !0) !== 0) break e;
                        a.timeoutHandle = Hm(sm.bind(null, a, n, dt, yr, $u, t, Mt, ca, Ia, Mn, o, 2, -0, 0), r);
                        break e
                    }
                    sm(a, n, dt, yr, $u, t, Mt, ca, Ia, Mn, o, 0, -0, 0)
                }
            }
            break
        } while (!0);
        $t(e)
    }

    function sm(e, t, n, a, r, o, m, y, E, B, Q, $, q, k) {
        if (e.timeoutHandle = -1, $ = t.subtreeFlags, ($ & 8192 || ($ & 16785408) === 16785408) && (ni = {
            stylesheets: null,
            count: 0,
            unsuspend: sy
        }, em(t), $ = oy(), $ !== null)) {
            e.cancelPendingCommit = $(mm.bind(null, e, t, o, n, a, r, m, y, E, Q, 1, q, k)), zn(e, o, m, !B);
            return
        }
        mm(e, t, o, n, a, r, m, y, E)
    }

    function Cv(e) {
        for (var t = e; ;) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var a = 0; a < n.length; a++) {
                var r = n[a], o = r.getSnapshot;
                r = r.value;
                try {
                    if (!yt(o(), r)) return !1
                } catch {
                    return !1
                }
            }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n; else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function zn(e, t, n, a) {
        t &= ~Ju, t &= ~ca, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
        for (var r = t; 0 < r;) {
            var o = 31 - vt(r), m = 1 << o;
            a[o] = -1, r &= ~m
        }
        n !== 0 && yf(e, n, t)
    }

    function br() {
        return (Re & 6) === 0 ? (Kl(0), !1) : !0
    }

    function eo() {
        if (ve !== null) {
            if (Ce === 0) var e = ve.return; else e = ve, sn = la = null, vu(e), Xa = null, kl = 0, e = ve;
            for (; e !== null;) kh(e.alternate, e), e = e.return;
            ve = null
        }
    }

    function Ka(e, t) {
        var n = e.timeoutHandle;
        n !== -1 && (e.timeoutHandle = -1, Yv(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), eo(), Ue = e, ve = n = an(e.current, null), Se = t, Ce = 0, Et = null, Mn = !1, Za = dl(e, t), Iu = !1, Ia = Mt = Ju = ca = Hn = ze = 0, dt = Jl = null, $u = !1, (t & 8) !== 0 && (t |= t & 32);
        var a = e.entangledLanes;
        if (a !== 0) for (e = e.entanglements, a &= t; 0 < a;) {
            var r = 31 - vt(a), o = 1 << r;
            t |= e[r], a &= ~o
        }
        return pn = t, Vi(), n
    }

    function um(e, t) {
        pe = null, X.H = rr, t === jl || t === Ki ? (t = Rd(), Ce = 3) : t === Ed ? (t = Rd(), Ce = 4) : Ce = t === Ch ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Et = t, ve === null && (ze = 1, fr(e, Ot(t, e.current)))
    }

    function om() {
        var e = X.H;
        return X.H = rr, e === null ? rr : e
    }

    function cm() {
        var e = X.A;
        return X.A = xv, e
    }

    function to() {
        ze = 4, Mn || (Se & 4194048) !== Se && Dt.current !== null || (Za = !0), (Hn & 134217727) === 0 && (ca & 134217727) === 0 || Ue === null || zn(Ue, Se, Mt, !1)
    }

    function no(e, t, n) {
        var a = Re;
        Re |= 2;
        var r = om(), o = cm();
        (Ue !== e || Se !== t) && (yr = null, Ka(e, t)), t = !1;
        var m = ze;
        e:do try {
            if (Ce !== 0 && ve !== null) {
                var y = ve, E = Et;
                switch (Ce) {
                    case 8:
                        eo(), m = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Dt.current === null && (t = !0);
                        var B = Ce;
                        if (Ce = 0, Et = null, Fa(e, y, E, B), n && Za) {
                            m = 0;
                            break e
                        }
                        break;
                    default:
                        B = Ce, Ce = 0, Et = null, Fa(e, y, E, B)
                }
            }
            wv(), m = ze;
            break
        } catch (Q) {
            um(e, Q)
        } while (!0);
        return t && e.shellSuspendCounter++, sn = la = null, Re = a, X.H = r, X.A = o, ve === null && (Ue = null, Se = 0, Vi()), m
    }

    function wv() {
        for (; ve !== null;) fm(ve)
    }

    function Av(e, t) {
        var n = Re;
        Re |= 2;
        var a = om(), r = cm();
        Ue !== e || Se !== t ? (yr = null, vr = Yt() + 500, Ka(e, t)) : Za = dl(e, t);
        e:do try {
            if (Ce !== 0 && ve !== null) {
                t = ve;
                var o = Et;
                t:switch (Ce) {
                    case 1:
                        Ce = 0, Et = null, Fa(e, t, o, 1);
                        break;
                    case 2:
                    case 9:
                        if (Td(o)) {
                            Ce = 0, Et = null, dm(t);
                            break
                        }
                        t = function () {
                            Ce !== 2 && Ce !== 9 || Ue !== e || (Ce = 7), $t(e)
                        }, o.then(t, t);
                        break e;
                    case 3:
                        Ce = 7;
                        break e;
                    case 4:
                        Ce = 5;
                        break e;
                    case 7:
                        Td(o) ? (Ce = 0, Et = null, dm(t)) : (Ce = 0, Et = null, Fa(e, t, o, 7));
                        break;
                    case 5:
                        var m = null;
                        switch (ve.tag) {
                            case 26:
                                m = ve.memoizedState;
                            case 5:
                            case 27:
                                var y = ve;
                                if (!m || Im(m)) {
                                    Ce = 0, Et = null;
                                    var E = y.sibling;
                                    if (E !== null) ve = E; else {
                                        var B = y.return;
                                        B !== null ? (ve = B, Sr(B)) : ve = null
                                    }
                                    break t
                                }
                        }
                        Ce = 0, Et = null, Fa(e, t, o, 5);
                        break;
                    case 6:
                        Ce = 0, Et = null, Fa(e, t, o, 6);
                        break;
                    case 8:
                        eo(), ze = 6;
                        break e;
                    default:
                        throw Error(s(462))
                }
            }
            Ov();
            break
        } catch (Q) {
            um(e, Q)
        } while (!0);
        return sn = la = null, X.H = a, X.A = r, Re = n, ve !== null ? 0 : (Ue = null, Se = 0, Vi(), ze)
    }

    function Ov() {
        for (; ve !== null && !F1();) fm(ve)
    }

    function fm(e) {
        var t = zh(e.alternate, e, pn);
        e.memoizedProps = e.pendingProps, t === null ? Sr(e) : ve = t
    }

    function dm(e) {
        var t = e, n = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Uh(n, t, t.pendingProps, t.type, void 0, Se);
                break;
            case 11:
                t = Uh(n, t, t.pendingProps, t.type.render, t.ref, Se);
                break;
            case 5:
                vu(t);
            default:
                kh(n, t), t = ve = hd(t, pn), t = zh(n, t, pn)
        }
        e.memoizedProps = e.pendingProps, t === null ? Sr(e) : ve = t
    }

    function Fa(e, t, n, a) {
        sn = la = null, vu(t), Xa = null, kl = 0;
        var r = t.return;
        try {
            if (yv(e, r, t, n, Se)) {
                ze = 1, fr(e, Ot(n, e.current)), ve = null;
                return
            }
        } catch (o) {
            if (r !== null) throw ve = r, o;
            ze = 1, fr(e, Ot(n, e.current)), ve = null;
            return
        }
        t.flags & 32768 ? (Te || a === 1 ? e = !0 : Za || (Se & 536870912) !== 0 ? e = !1 : (Mn = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Dt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), hm(t, e)) : Sr(t)
    }

    function Sr(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                hm(t, Mn);
                return
            }
            e = t.return;
            var n = Sv(t.alternate, t, pn);
            if (n !== null) {
                ve = n;
                return
            }
            if (t = t.sibling, t !== null) {
                ve = t;
                return
            }
            ve = t = e
        } while (t !== null);
        ze === 0 && (ze = 5)
    }

    function hm(e, t) {
        do {
            var n = _v(e.alternate, e);
            if (n !== null) {
                n.flags &= 32767, ve = n;
                return
            }
            if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
                ve = e;
                return
            }
            ve = e = n
        } while (e !== null);
        ze = 6, ve = null
    }

    function mm(e, t, n, a, r, o, m, y, E) {
        e.cancelPendingCommit = null;
        do _r(); while (Fe !== 0);
        if ((Re & 6) !== 0) throw Error(s(327));
        if (t !== null) {
            if (t === e.current) throw Error(s(177));
            if (o = t.lanes | t.childLanes, o |= Zs, sg(e, n, o, m, y, E), e === Ue && (ve = Ue = null, Se = 0), Ja = t, Bn = e, $a = n, Fu = o, Wu = r, lm = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Dv(Ci, function () {
                return bm(), null
            })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
                a = X.T, X.T = null, r = P.p, P.p = 2, m = Re, Re |= 4;
                try {
                    Ev(e, t, n)
                } finally {
                    Re = m, P.p = r, X.T = a
                }
            }
            Fe = 1, pm(), gm(), vm()
        }
    }

    function pm() {
        if (Fe === 1) {
            Fe = 0;
            var e = Bn, t = Ja, n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
                n = X.T, X.T = null;
                var a = P.p;
                P.p = 2;
                var r = Re;
                Re |= 4;
                try {
                    Fh(t, e);
                    var o = po, m = ad(e.containerInfo), y = o.focusedElem, E = o.selectionRange;
                    if (m !== y && y && y.ownerDocument && nd(y.ownerDocument.documentElement, y)) {
                        if (E !== null && Vs(y)) {
                            var B = E.start, Q = E.end;
                            if (Q === void 0 && (Q = B), "selectionStart" in y) y.selectionStart = B, y.selectionEnd = Math.min(Q, y.value.length); else {
                                var $ = y.ownerDocument || document, q = $ && $.defaultView || window;
                                if (q.getSelection) {
                                    var k = q.getSelection(), oe = y.textContent.length, se = Math.min(E.start, oe),
                                        Oe = E.end === void 0 ? se : Math.min(E.end, oe);
                                    !k.extend && se > Oe && (m = Oe, Oe = se, se = m);
                                    var U = td(y, se), A = td(y, Oe);
                                    if (U && A && (k.rangeCount !== 1 || k.anchorNode !== U.node || k.anchorOffset !== U.offset || k.focusNode !== A.node || k.focusOffset !== A.offset)) {
                                        var L = $.createRange();
                                        L.setStart(U.node, U.offset), k.removeAllRanges(), se > Oe ? (k.addRange(L), k.extend(A.node, A.offset)) : (L.setEnd(A.node, A.offset), k.addRange(L))
                                    }
                                }
                            }
                        }
                        for ($ = [], k = y; k = k.parentNode;) k.nodeType === 1 && $.push({
                            element: k,
                            left: k.scrollLeft,
                            top: k.scrollTop
                        });
                        for (typeof y.focus == "function" && y.focus(), y = 0; y < $.length; y++) {
                            var Z = $[y];
                            Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top
                        }
                    }
                    Dr = !!mo, po = mo = null
                } finally {
                    Re = r, P.p = a, X.T = n
                }
            }
            e.current = t, Fe = 2
        }
    }

    function gm() {
        if (Fe === 2) {
            Fe = 0;
            var e = Bn, t = Ja, n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
                n = X.T, X.T = null;
                var a = P.p;
                P.p = 2;
                var r = Re;
                Re |= 4;
                try {
                    Ih(e, t.alternate, t)
                } finally {
                    Re = r, P.p = a, X.T = n
                }
            }
            Fe = 3
        }
    }

    function vm() {
        if (Fe === 4 || Fe === 3) {
            Fe = 0, W1();
            var e = Bn, t = Ja, n = $a, a = lm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Fe = 5 : (Fe = 0, Ja = Bn = null, ym(e, e.pendingLanes));
            var r = e.pendingLanes;
            if (r === 0 && (Ln = null), Ss(n), t = t.stateNode, gt && typeof gt.onCommitFiberRoot == "function") try {
                gt.onCommitFiberRoot(fl, t, void 0, (t.current.flags & 128) === 128)
            } catch {
            }
            if (a !== null) {
                t = X.T, r = P.p, P.p = 2, X.T = null;
                try {
                    for (var o = e.onRecoverableError, m = 0; m < a.length; m++) {
                        var y = a[m];
                        o(y.value, {componentStack: y.stack})
                    }
                } finally {
                    X.T = t, P.p = r
                }
            }
            ($a & 3) !== 0 && _r(), $t(e), r = e.pendingLanes, (n & 4194090) !== 0 && (r & 42) !== 0 ? e === Pu ? $l++ : ($l = 0, Pu = e) : $l = 0, Kl(0)
        }
    }

    function ym(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ol(t)))
    }

    function _r(e) {
        return pm(), gm(), vm(), bm()
    }

    function bm() {
        if (Fe !== 5) return !1;
        var e = Bn, t = Fu;
        Fu = 0;
        var n = Ss($a), a = X.T, r = P.p;
        try {
            P.p = 32 > n ? 32 : n, X.T = null, n = Wu, Wu = null;
            var o = Bn, m = $a;
            if (Fe = 0, Ja = Bn = null, $a = 0, (Re & 6) !== 0) throw Error(s(331));
            var y = Re;
            if (Re |= 4, nm(o.current), Ph(o, o.current, m, n), Re = y, Kl(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function") try {
                gt.onPostCommitFiberRoot(fl, o)
            } catch {
            }
            return !0
        } finally {
            P.p = r, X.T = a, ym(e, t)
        }
    }

    function Sm(e, t, n) {
        t = Ot(n, t), t = ju(e.stateNode, t, 2), e = wn(e, t, 2), e !== null && (hl(e, 2), $t(e))
    }

    function je(e, t, n) {
        if (e.tag === 3) Sm(e, e, n); else for (; t !== null;) {
            if (t.tag === 3) {
                Sm(t, e, n);
                break
            } else if (t.tag === 1) {
                var a = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ln === null || !Ln.has(a))) {
                    e = Ot(n, e), n = xh(2), a = wn(t, n, 2), a !== null && (Rh(n, a, t, e), hl(a, 2), $t(a));
                    break
                }
            }
            t = t.return
        }
    }

    function ao(e, t, n) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new Rv;
            var r = new Set;
            a.set(t, r)
        } else r = a.get(t), r === void 0 && (r = new Set, a.set(t, r));
        r.has(n) || (Iu = !0, r.add(n), e = Nv.bind(null, e, t, n), t.then(e, e))
    }

    function Nv(e, t, n) {
        var a = e.pingCache;
        a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ue === e && (Se & n) === n && (ze === 4 || ze === 3 && (Se & 62914560) === Se && 300 > Yt() - Ku ? (Re & 2) === 0 && Ka(e, 0) : Ju |= n, Ia === Se && (Ia = 0)), $t(e)
    }

    function _m(e, t) {
        t === 0 && (t = vf()), e = Ua(e, t), e !== null && (hl(e, t), $t(e))
    }

    function jv(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), _m(e, n)
    }

    function Uv(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var a = e.stateNode, r = e.memoizedState;
                r !== null && (n = r.retryLane);
                break;
            case 19:
                a = e.stateNode;
                break;
            case 22:
                a = e.stateNode._retryCache;
                break;
            default:
                throw Error(s(314))
        }
        a !== null && a.delete(t), _m(e, n)
    }

    function Dv(e, t) {
        return gs(e, t)
    }

    var Er = null, Wa = null, lo = !1, Tr = !1, io = !1, fa = 0;

    function $t(e) {
        e !== Wa && e.next === null && (Wa === null ? Er = Wa = e : Wa = Wa.next = e), Tr = !0, lo || (lo = !0, Hv())
    }

    function Kl(e, t) {
        if (!io && Tr) {
            io = !0;
            do for (var n = !1, a = Er; a !== null;) {
                if (e !== 0) {
                    var r = a.pendingLanes;
                    if (r === 0) var o = 0; else {
                        var m = a.suspendedLanes, y = a.pingedLanes;
                        o = (1 << 31 - vt(42 | e) + 1) - 1, o &= r & ~(m & ~y), o = o & 201326741 ? o & 201326741 | 1 : o ? o | 2 : 0
                    }
                    o !== 0 && (n = !0, Rm(a, o))
                } else o = Se, o = Oi(a, a === Ue ? o : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (o & 3) === 0 || dl(a, o) || (n = !0, Rm(a, o));
                a = a.next
            } while (n);
            io = !1
        }
    }

    function Mv() {
        Em()
    }

    function Em() {
        Tr = lo = !1;
        var e = 0;
        fa !== 0 && (Gv() && (e = fa), fa = 0);
        for (var t = Yt(), n = null, a = Er; a !== null;) {
            var r = a.next, o = Tm(a, t);
            o === 0 ? (a.next = null, n === null ? Er = r : n.next = r, r === null && (Wa = n)) : (n = a, (e !== 0 || (o & 3) !== 0) && (Tr = !0)), a = r
        }
        Kl(e)
    }

    function Tm(e, t) {
        for (var n = e.suspendedLanes, a = e.pingedLanes, r = e.expirationTimes, o = e.pendingLanes & -62914561; 0 < o;) {
            var m = 31 - vt(o), y = 1 << m, E = r[m];
            E === -1 ? ((y & n) === 0 || (y & a) !== 0) && (r[m] = rg(y, t)) : E <= t && (e.expiredLanes |= y), o &= ~y
        }
        if (t = Ue, n = Se, n = Oi(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (Ce === 2 || Ce === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && vs(a), e.callbackNode = null, e.callbackPriority = 0;
        if ((n & 3) === 0 || dl(e, n)) {
            if (t = n & -n, t === e.callbackPriority) return t;
            switch (a !== null && vs(a), Ss(n)) {
                case 2:
                case 8:
                    n = mf;
                    break;
                case 32:
                    n = Ci;
                    break;
                case 268435456:
                    n = pf;
                    break;
                default:
                    n = Ci
            }
            return a = xm.bind(null, e), n = gs(n, a), e.callbackPriority = t, e.callbackNode = n, t
        }
        return a !== null && a !== null && vs(a), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function xm(e, t) {
        if (Fe !== 0 && Fe !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var n = e.callbackNode;
        if (_r() && e.callbackNode !== n) return null;
        var a = Se;
        return a = Oi(e, e === Ue ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (rm(e, a, t), Tm(e, Yt()), e.callbackNode != null && e.callbackNode === n ? xm.bind(null, e) : null)
    }

    function Rm(e, t) {
        if (_r()) return null;
        rm(e, t, !0)
    }

    function Hv() {
        Qv(function () {
            (Re & 6) !== 0 ? gs(hf, Mv) : Em()
        })
    }

    function ro() {
        return fa === 0 && (fa = gf()), fa
    }

    function Cm(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Mi("" + e)
    }

    function wm(e, t) {
        var n = t.ownerDocument.createElement("input");
        return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
    }

    function Lv(e, t, n, a, r) {
        if (t === "submit" && n && n.stateNode === r) {
            var o = Cm((r[ut] || null).action), m = a.submitter;
            m && (t = (t = m[ut] || null) ? Cm(t.formAction) : m.getAttribute("formAction"), t !== null && (o = t, m = null));
            var y = new zi("action", "action", null, a, r);
            e.push({
                event: y, listeners: [{
                    instance: null, listener: function () {
                        if (a.defaultPrevented) {
                            if (fa !== 0) {
                                var E = m ? wm(r, m) : new FormData(r);
                                Cu(n, {pending: !0, data: E, method: r.method, action: o}, null, E)
                            }
                        } else typeof o == "function" && (y.preventDefault(), E = m ? wm(r, m) : new FormData(r), Cu(n, {
                            pending: !0,
                            data: E,
                            method: r.method,
                            action: o
                        }, o, E))
                    }, currentTarget: r
                }]
            })
        }
    }

    for (var so = 0; so < Qs.length; so++) {
        var uo = Qs[so], Bv = uo.toLowerCase(), zv = uo[0].toUpperCase() + uo.slice(1);
        Bt(Bv, "on" + zv)
    }
    Bt(rd, "onAnimationEnd"), Bt(sd, "onAnimationIteration"), Bt(ud, "onAnimationStart"), Bt("dblclick", "onDoubleClick"), Bt("focusin", "onFocus"), Bt("focusout", "onBlur"), Bt(tv, "onTransitionRun"), Bt(nv, "onTransitionStart"), Bt(av, "onTransitionCancel"), Bt(od, "onTransitionEnd"), Ea("onMouseEnter", ["mouseout", "mouseover"]), Ea("onMouseLeave", ["mouseout", "mouseover"]), Ea("onPointerEnter", ["pointerout", "pointerover"]), Ea("onPointerLeave", ["pointerout", "pointerover"]), $n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), $n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), $n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), $n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), $n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Fl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        qv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl));

    function Am(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var a = e[n], r = a.event;
            a = a.listeners;
            e:{
                var o = void 0;
                if (t) for (var m = a.length - 1; 0 <= m; m--) {
                    var y = a[m], E = y.instance, B = y.currentTarget;
                    if (y = y.listener, E !== o && r.isPropagationStopped()) break e;
                    o = y, r.currentTarget = B;
                    try {
                        o(r)
                    } catch (Q) {
                        cr(Q)
                    }
                    r.currentTarget = null, o = E
                } else for (m = 0; m < a.length; m++) {
                    if (y = a[m], E = y.instance, B = y.currentTarget, y = y.listener, E !== o && r.isPropagationStopped()) break e;
                    o = y, r.currentTarget = B;
                    try {
                        o(r)
                    } catch (Q) {
                        cr(Q)
                    }
                    r.currentTarget = null, o = E
                }
            }
        }
    }

    function ye(e, t) {
        var n = t[_s];
        n === void 0 && (n = t[_s] = new Set);
        var a = e + "__bubble";
        n.has(a) || (Om(t, e, 2, !1), n.add(a))
    }

    function oo(e, t, n) {
        var a = 0;
        t && (a |= 4), Om(n, e, a, t)
    }

    var xr = "_reactListening" + Math.random().toString(36).slice(2);

    function co(e) {
        if (!e[xr]) {
            e[xr] = !0, Ef.forEach(function (n) {
                n !== "selectionchange" && (qv.has(n) || oo(n, !1, e), oo(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[xr] || (t[xr] = !0, oo("selectionchange", !1, t))
        }
    }

    function Om(e, t, n, a) {
        switch (Pm(t)) {
            case 2:
                var r = dy;
                break;
            case 8:
                r = hy;
                break;
            default:
                r = Ro
        }
        n = r.bind(null, t, n, e), r = void 0, !Us || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0), a ? r !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: r
        }) : e.addEventListener(t, n, !0) : r !== void 0 ? e.addEventListener(t, n, {passive: r}) : e.addEventListener(t, n, !1)
    }

    function fo(e, t, n, a, r) {
        var o = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e:for (; ;) {
            if (a === null) return;
            var m = a.tag;
            if (m === 3 || m === 4) {
                var y = a.stateNode.containerInfo;
                if (y === r) break;
                if (m === 4) for (m = a.return; m !== null;) {
                    var E = m.tag;
                    if ((E === 3 || E === 4) && m.stateNode.containerInfo === r) return;
                    m = m.return
                }
                for (; y !== null;) {
                    if (m = ba(y), m === null) return;
                    if (E = m.tag, E === 5 || E === 6 || E === 26 || E === 27) {
                        a = o = m;
                        continue e
                    }
                    y = y.parentNode
                }
            }
            a = a.return
        }
        Lf(function () {
            var B = o, Q = Ns(n), $ = [];
            e:{
                var q = cd.get(e);
                if (q !== void 0) {
                    var k = zi, oe = e;
                    switch (e) {
                        case"keypress":
                            if (Li(n) === 0) break e;
                        case"keydown":
                        case"keyup":
                            k = Dg;
                            break;
                        case"focusin":
                            oe = "focus", k = Ls;
                            break;
                        case"focusout":
                            oe = "blur", k = Ls;
                            break;
                        case"beforeblur":
                        case"afterblur":
                            k = Ls;
                            break;
                        case"click":
                            if (n.button === 2) break e;
                        case"auxclick":
                        case"dblclick":
                        case"mousedown":
                        case"mousemove":
                        case"mouseup":
                        case"mouseout":
                        case"mouseover":
                        case"contextmenu":
                            k = qf;
                            break;
                        case"drag":
                        case"dragend":
                        case"dragenter":
                        case"dragexit":
                        case"dragleave":
                        case"dragover":
                        case"dragstart":
                        case"drop":
                            k = _g;
                            break;
                        case"touchcancel":
                        case"touchend":
                        case"touchmove":
                        case"touchstart":
                            k = Lg;
                            break;
                        case rd:
                        case sd:
                        case ud:
                            k = xg;
                            break;
                        case od:
                            k = zg;
                            break;
                        case"scroll":
                        case"scrollend":
                            k = bg;
                            break;
                        case"wheel":
                            k = kg;
                            break;
                        case"copy":
                        case"cut":
                        case"paste":
                            k = Cg;
                            break;
                        case"gotpointercapture":
                        case"lostpointercapture":
                        case"pointercancel":
                        case"pointerdown":
                        case"pointermove":
                        case"pointerout":
                        case"pointerover":
                        case"pointerup":
                            k = Vf;
                            break;
                        case"toggle":
                        case"beforetoggle":
                            k = Xg
                    }
                    var se = (t & 4) !== 0, Oe = !se && (e === "scroll" || e === "scrollend"),
                        U = se ? q !== null ? q + "Capture" : null : q;
                    se = [];
                    for (var A = B, L; A !== null;) {
                        var Z = A;
                        if (L = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || L === null || U === null || (Z = gl(A, U), Z != null && se.push(Wl(A, Z, L))), Oe) break;
                        A = A.return
                    }
                    0 < se.length && (q = new k(q, oe, null, n, Q), $.push({event: q, listeners: se}))
                }
            }
            if ((t & 7) === 0) {
                e:{
                    if (q = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", q && n !== Os && (oe = n.relatedTarget || n.fromElement) && (ba(oe) || oe[ya])) break e;
                    if ((k || q) && (q = Q.window === Q ? Q : (q = Q.ownerDocument) ? q.defaultView || q.parentWindow : window, k ? (oe = n.relatedTarget || n.toElement, k = B, oe = oe ? ba(oe) : null, oe !== null && (Oe = f(oe), se = oe.tag, oe !== Oe || se !== 5 && se !== 27 && se !== 6) && (oe = null)) : (k = null, oe = B), k !== oe)) {
                        if (se = qf, Z = "onMouseLeave", U = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (se = Vf, Z = "onPointerLeave", U = "onPointerEnter", A = "pointer"), Oe = k == null ? q : pl(k), L = oe == null ? q : pl(oe), q = new se(Z, A + "leave", k, n, Q), q.target = Oe, q.relatedTarget = L, Z = null, ba(Q) === B && (se = new se(U, A + "enter", oe, n, Q), se.target = L, se.relatedTarget = Oe, Z = se), Oe = Z, k && oe) t:{
                            for (se = k, U = oe, A = 0, L = se; L; L = Pa(L)) A++;
                            for (L = 0, Z = U; Z; Z = Pa(Z)) L++;
                            for (; 0 < A - L;) se = Pa(se), A--;
                            for (; 0 < L - A;) U = Pa(U), L--;
                            for (; A--;) {
                                if (se === U || U !== null && se === U.alternate) break t;
                                se = Pa(se), U = Pa(U)
                            }
                            se = null
                        } else se = null;
                        k !== null && Nm($, q, k, se, !1), oe !== null && Oe !== null && Nm($, Oe, oe, se, !0)
                    }
                }
                e:{
                    if (q = B ? pl(B) : window, k = q.nodeName && q.nodeName.toLowerCase(), k === "select" || k === "input" && q.type === "file") var le = $f; else if (If(q)) if (Kf) le = Wg; else {
                        le = Kg;
                        var ge = $g
                    } else k = q.nodeName, !k || k.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? B && As(B.elementType) && (le = $f) : le = Fg;
                    if (le && (le = le(e, B))) {
                        Jf($, le, n, Q);
                        break e
                    }
                    ge && ge(e, q, B), e === "focusout" && B && q.type === "number" && B.memoizedProps.value != null && ws(q, "number", q.value)
                }
                switch (ge = B ? pl(B) : window, e) {
                    case"focusin":
                        (If(ge) || ge.contentEditable === "true") && (Oa = ge, Xs = B, xl = null);
                        break;
                    case"focusout":
                        xl = Xs = Oa = null;
                        break;
                    case"mousedown":
                        Gs = !0;
                        break;
                    case"contextmenu":
                    case"mouseup":
                    case"dragend":
                        Gs = !1, ld($, n, Q);
                        break;
                    case"selectionchange":
                        if (ev) break;
                    case"keydown":
                    case"keyup":
                        ld($, n, Q)
                }
                var ie;
                if (zs) e:{
                    switch (e) {
                        case"compositionstart":
                            var ue = "onCompositionStart";
                            break e;
                        case"compositionend":
                            ue = "onCompositionEnd";
                            break e;
                        case"compositionupdate":
                            ue = "onCompositionUpdate";
                            break e
                    }
                    ue = void 0
                } else Aa ? Qf(e, n) && (ue = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ue = "onCompositionStart");
                ue && (Xf && n.locale !== "ko" && (Aa || ue !== "onCompositionStart" ? ue === "onCompositionEnd" && Aa && (ie = Bf()) : (Tn = Q, Ds = "value" in Tn ? Tn.value : Tn.textContent, Aa = !0)), ge = Rr(B, ue), 0 < ge.length && (ue = new kf(ue, e, null, n, Q), $.push({
                    event: ue,
                    listeners: ge
                }), ie ? ue.data = ie : (ie = Zf(n), ie !== null && (ue.data = ie)))), (ie = Yg ? Qg(e, n) : Zg(e, n)) && (ue = Rr(B, "onBeforeInput"), 0 < ue.length && (ge = new kf("onBeforeInput", "beforeinput", null, n, Q), $.push({
                    event: ge,
                    listeners: ue
                }), ge.data = ie)), Lv($, e, B, n, Q)
            }
            Am($, t)
        })
    }

    function Wl(e, t, n) {
        return {instance: e, listener: t, currentTarget: n}
    }

    function Rr(e, t) {
        for (var n = t + "Capture", a = []; e !== null;) {
            var r = e, o = r.stateNode;
            if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || o === null || (r = gl(e, n), r != null && a.unshift(Wl(e, r, o)), r = gl(e, t), r != null && a.push(Wl(e, r, o))), e.tag === 3) return a;
            e = e.return
        }
        return []
    }

    function Pa(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }

    function Nm(e, t, n, a, r) {
        for (var o = t._reactName, m = []; n !== null && n !== a;) {
            var y = n, E = y.alternate, B = y.stateNode;
            if (y = y.tag, E !== null && E === a) break;
            y !== 5 && y !== 26 && y !== 27 || B === null || (E = B, r ? (B = gl(n, o), B != null && m.unshift(Wl(n, B, E))) : r || (B = gl(n, o), B != null && m.push(Wl(n, B, E)))), n = n.return
        }
        m.length !== 0 && e.push({event: t, listeners: m})
    }

    var kv = /\r\n?/g, Vv = /\u0000|\uFFFD/g;

    function jm(e) {
        return (typeof e == "string" ? e : "" + e).replace(kv, `
`).replace(Vv, "")
    }

    function Um(e, t) {
        return t = jm(t), jm(e) === t
    }

    function Cr() {
    }

    function Ae(e, t, n, a, r, o) {
        switch (n) {
            case"children":
                typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ra(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ra(e, "" + a);
                break;
            case"className":
                ji(e, "class", a);
                break;
            case"tabIndex":
                ji(e, "tabindex", a);
                break;
            case"dir":
            case"role":
            case"viewBox":
            case"width":
            case"height":
                ji(e, n, a);
                break;
            case"style":
                Mf(e, a, o);
                break;
            case"data":
                if (t !== "object") {
                    ji(e, "data", a);
                    break
                }
            case"src":
            case"href":
                if (a === "" && (t !== "a" || n !== "href")) {
                    e.removeAttribute(n);
                    break
                }
                if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                    e.removeAttribute(n);
                    break
                }
                a = Mi("" + a), e.setAttribute(n, a);
                break;
            case"action":
            case"formAction":
                if (typeof a == "function") {
                    e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof o == "function" && (n === "formAction" ? (t !== "input" && Ae(e, t, "name", r.name, r, null), Ae(e, t, "formEncType", r.formEncType, r, null), Ae(e, t, "formMethod", r.formMethod, r, null), Ae(e, t, "formTarget", r.formTarget, r, null)) : (Ae(e, t, "encType", r.encType, r, null), Ae(e, t, "method", r.method, r, null), Ae(e, t, "target", r.target, r, null)));
                if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                    e.removeAttribute(n);
                    break
                }
                a = Mi("" + a), e.setAttribute(n, a);
                break;
            case"onClick":
                a != null && (e.onclick = Cr);
                break;
            case"onScroll":
                a != null && ye("scroll", e);
                break;
            case"onScrollEnd":
                a != null && ye("scrollend", e);
                break;
            case"dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
                    if (n = a.__html, n != null) {
                        if (r.children != null) throw Error(s(60));
                        e.innerHTML = n
                    }
                }
                break;
            case"multiple":
                e.multiple = a && typeof a != "function" && typeof a != "symbol";
                break;
            case"muted":
                e.muted = a && typeof a != "function" && typeof a != "symbol";
                break;
            case"suppressContentEditableWarning":
            case"suppressHydrationWarning":
            case"defaultValue":
            case"defaultChecked":
            case"innerHTML":
            case"ref":
                break;
            case"autoFocus":
                break;
            case"xlinkHref":
                if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                n = Mi("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                break;
            case"contentEditable":
            case"spellCheck":
            case"draggable":
            case"value":
            case"autoReverse":
            case"externalResourcesRequired":
            case"focusable":
            case"preserveAlpha":
                a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
                break;
            case"inert":
            case"allowFullScreen":
            case"async":
            case"autoPlay":
            case"controls":
            case"default":
            case"defer":
            case"disabled":
            case"disablePictureInPicture":
            case"disableRemotePlayback":
            case"formNoValidate":
            case"hidden":
            case"loop":
            case"noModule":
            case"noValidate":
            case"open":
            case"playsInline":
            case"readOnly":
            case"required":
            case"reversed":
            case"scoped":
            case"seamless":
            case"itemScope":
                a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
                break;
            case"capture":
            case"download":
                a === !0 ? e.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
                break;
            case"cols":
            case"rows":
            case"size":
            case"span":
                a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
                break;
            case"rowSpan":
            case"start":
                a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
                break;
            case"popover":
                ye("beforetoggle", e), ye("toggle", e), Ni(e, "popover", a);
                break;
            case"xlinkActuate":
                tn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                break;
            case"xlinkArcrole":
                tn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                break;
            case"xlinkRole":
                tn(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
                break;
            case"xlinkShow":
                tn(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
                break;
            case"xlinkTitle":
                tn(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
                break;
            case"xlinkType":
                tn(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
                break;
            case"xmlBase":
                tn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                break;
            case"xmlLang":
                tn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                break;
            case"xmlSpace":
                tn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                break;
            case"is":
                Ni(e, "is", a);
                break;
            case"innerText":
            case"textContent":
                break;
            default:
                (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = vg.get(n) || n, Ni(e, n, a))
        }
    }

    function ho(e, t, n, a, r, o) {
        switch (n) {
            case"style":
                Mf(e, a, o);
                break;
            case"dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
                    if (n = a.__html, n != null) {
                        if (r.children != null) throw Error(s(60));
                        e.innerHTML = n
                    }
                }
                break;
            case"children":
                typeof a == "string" ? Ra(e, a) : (typeof a == "number" || typeof a == "bigint") && Ra(e, "" + a);
                break;
            case"onScroll":
                a != null && ye("scroll", e);
                break;
            case"onScrollEnd":
                a != null && ye("scrollend", e);
                break;
            case"onClick":
                a != null && (e.onclick = Cr);
                break;
            case"suppressContentEditableWarning":
            case"suppressHydrationWarning":
            case"innerHTML":
            case"ref":
                break;
            case"innerText":
            case"textContent":
                break;
            default:
                if (!Tf.hasOwnProperty(n)) e:{
                    if (n[0] === "o" && n[1] === "n" && (r = n.endsWith("Capture"), t = n.slice(2, r ? n.length - 7 : void 0), o = e[ut] || null, o = o != null ? o[n] : null, typeof o == "function" && e.removeEventListener(t, o, r), typeof a == "function")) {
                        typeof o != "function" && o !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, r);
                        break e
                    }
                    n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : Ni(e, n, a)
                }
        }
    }

    function We(e, t, n) {
        switch (t) {
            case"div":
            case"span":
            case"svg":
            case"path":
            case"a":
            case"g":
            case"p":
            case"li":
                break;
            case"img":
                ye("error", e), ye("load", e);
                var a = !1, r = !1, o;
                for (o in n) if (n.hasOwnProperty(o)) {
                    var m = n[o];
                    if (m != null) switch (o) {
                        case"src":
                            a = !0;
                            break;
                        case"srcSet":
                            r = !0;
                            break;
                        case"children":
                        case"dangerouslySetInnerHTML":
                            throw Error(s(137, t));
                        default:
                            Ae(e, t, o, m, n, null)
                    }
                }
                r && Ae(e, t, "srcSet", n.srcSet, n, null), a && Ae(e, t, "src", n.src, n, null);
                return;
            case"input":
                ye("invalid", e);
                var y = o = m = r = null, E = null, B = null;
                for (a in n) if (n.hasOwnProperty(a)) {
                    var Q = n[a];
                    if (Q != null) switch (a) {
                        case"name":
                            r = Q;
                            break;
                        case"type":
                            m = Q;
                            break;
                        case"checked":
                            E = Q;
                            break;
                        case"defaultChecked":
                            B = Q;
                            break;
                        case"value":
                            o = Q;
                            break;
                        case"defaultValue":
                            y = Q;
                            break;
                        case"children":
                        case"dangerouslySetInnerHTML":
                            if (Q != null) throw Error(s(137, t));
                            break;
                        default:
                            Ae(e, t, a, Q, n, null)
                    }
                }
                Nf(e, o, y, E, B, m, r, !1), Ui(e);
                return;
            case"select":
                ye("invalid", e), a = m = o = null;
                for (r in n) if (n.hasOwnProperty(r) && (y = n[r], y != null)) switch (r) {
                    case"value":
                        o = y;
                        break;
                    case"defaultValue":
                        m = y;
                        break;
                    case"multiple":
                        a = y;
                    default:
                        Ae(e, t, r, y, n, null)
                }
                t = o, n = m, e.multiple = !!a, t != null ? xa(e, !!a, t, !1) : n != null && xa(e, !!a, n, !0);
                return;
            case"textarea":
                ye("invalid", e), o = r = a = null;
                for (m in n) if (n.hasOwnProperty(m) && (y = n[m], y != null)) switch (m) {
                    case"value":
                        a = y;
                        break;
                    case"defaultValue":
                        r = y;
                        break;
                    case"children":
                        o = y;
                        break;
                    case"dangerouslySetInnerHTML":
                        if (y != null) throw Error(s(91));
                        break;
                    default:
                        Ae(e, t, m, y, n, null)
                }
                Uf(e, a, r, o), Ui(e);
                return;
            case"option":
                for (E in n) if (n.hasOwnProperty(E) && (a = n[E], a != null)) switch (E) {
                    case"selected":
                        e.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        Ae(e, t, E, a, n, null)
                }
                return;
            case"dialog":
                ye("beforetoggle", e), ye("toggle", e), ye("cancel", e), ye("close", e);
                break;
            case"iframe":
            case"object":
                ye("load", e);
                break;
            case"video":
            case"audio":
                for (a = 0; a < Fl.length; a++) ye(Fl[a], e);
                break;
            case"image":
                ye("error", e), ye("load", e);
                break;
            case"details":
                ye("toggle", e);
                break;
            case"embed":
            case"source":
            case"link":
                ye("error", e), ye("load", e);
            case"area":
            case"base":
            case"br":
            case"col":
            case"hr":
            case"keygen":
            case"meta":
            case"param":
            case"track":
            case"wbr":
            case"menuitem":
                for (B in n) if (n.hasOwnProperty(B) && (a = n[B], a != null)) switch (B) {
                    case"children":
                    case"dangerouslySetInnerHTML":
                        throw Error(s(137, t));
                    default:
                        Ae(e, t, B, a, n, null)
                }
                return;
            default:
                if (As(t)) {
                    for (Q in n) n.hasOwnProperty(Q) && (a = n[Q], a !== void 0 && ho(e, t, Q, a, n, void 0));
                    return
                }
        }
        for (y in n) n.hasOwnProperty(y) && (a = n[y], a != null && Ae(e, t, y, a, n, null))
    }

    function Xv(e, t, n, a) {
        switch (t) {
            case"div":
            case"span":
            case"svg":
            case"path":
            case"a":
            case"g":
            case"p":
            case"li":
                break;
            case"input":
                var r = null, o = null, m = null, y = null, E = null, B = null, Q = null;
                for (k in n) {
                    var $ = n[k];
                    if (n.hasOwnProperty(k) && $ != null) switch (k) {
                        case"checked":
                            break;
                        case"value":
                            break;
                        case"defaultValue":
                            E = $;
                        default:
                            a.hasOwnProperty(k) || Ae(e, t, k, null, a, $)
                    }
                }
                for (var q in a) {
                    var k = a[q];
                    if ($ = n[q], a.hasOwnProperty(q) && (k != null || $ != null)) switch (q) {
                        case"type":
                            o = k;
                            break;
                        case"name":
                            r = k;
                            break;
                        case"checked":
                            B = k;
                            break;
                        case"defaultChecked":
                            Q = k;
                            break;
                        case"value":
                            m = k;
                            break;
                        case"defaultValue":
                            y = k;
                            break;
                        case"children":
                        case"dangerouslySetInnerHTML":
                            if (k != null) throw Error(s(137, t));
                            break;
                        default:
                            k !== $ && Ae(e, t, q, k, a, $)
                    }
                }
                Cs(e, m, y, E, B, Q, o, r);
                return;
            case"select":
                k = m = y = q = null;
                for (o in n) if (E = n[o], n.hasOwnProperty(o) && E != null) switch (o) {
                    case"value":
                        break;
                    case"multiple":
                        k = E;
                    default:
                        a.hasOwnProperty(o) || Ae(e, t, o, null, a, E)
                }
                for (r in a) if (o = a[r], E = n[r], a.hasOwnProperty(r) && (o != null || E != null)) switch (r) {
                    case"value":
                        q = o;
                        break;
                    case"defaultValue":
                        y = o;
                        break;
                    case"multiple":
                        m = o;
                    default:
                        o !== E && Ae(e, t, r, o, a, E)
                }
                t = y, n = m, a = k, q != null ? xa(e, !!n, q, !1) : !!a != !!n && (t != null ? xa(e, !!n, t, !0) : xa(e, !!n, n ? [] : "", !1));
                return;
            case"textarea":
                k = q = null;
                for (y in n) if (r = n[y], n.hasOwnProperty(y) && r != null && !a.hasOwnProperty(y)) switch (y) {
                    case"value":
                        break;
                    case"children":
                        break;
                    default:
                        Ae(e, t, y, null, a, r)
                }
                for (m in a) if (r = a[m], o = n[m], a.hasOwnProperty(m) && (r != null || o != null)) switch (m) {
                    case"value":
                        q = r;
                        break;
                    case"defaultValue":
                        k = r;
                        break;
                    case"children":
                        break;
                    case"dangerouslySetInnerHTML":
                        if (r != null) throw Error(s(91));
                        break;
                    default:
                        r !== o && Ae(e, t, m, r, a, o)
                }
                jf(e, q, k);
                return;
            case"option":
                for (var oe in n) if (q = n[oe], n.hasOwnProperty(oe) && q != null && !a.hasOwnProperty(oe)) switch (oe) {
                    case"selected":
                        e.selected = !1;
                        break;
                    default:
                        Ae(e, t, oe, null, a, q)
                }
                for (E in a) if (q = a[E], k = n[E], a.hasOwnProperty(E) && q !== k && (q != null || k != null)) switch (E) {
                    case"selected":
                        e.selected = q && typeof q != "function" && typeof q != "symbol";
                        break;
                    default:
                        Ae(e, t, E, q, a, k)
                }
                return;
            case"img":
            case"link":
            case"area":
            case"base":
            case"br":
            case"col":
            case"embed":
            case"hr":
            case"keygen":
            case"meta":
            case"param":
            case"source":
            case"track":
            case"wbr":
            case"menuitem":
                for (var se in n) q = n[se], n.hasOwnProperty(se) && q != null && !a.hasOwnProperty(se) && Ae(e, t, se, null, a, q);
                for (B in a) if (q = a[B], k = n[B], a.hasOwnProperty(B) && q !== k && (q != null || k != null)) switch (B) {
                    case"children":
                    case"dangerouslySetInnerHTML":
                        if (q != null) throw Error(s(137, t));
                        break;
                    default:
                        Ae(e, t, B, q, a, k)
                }
                return;
            default:
                if (As(t)) {
                    for (var Oe in n) q = n[Oe], n.hasOwnProperty(Oe) && q !== void 0 && !a.hasOwnProperty(Oe) && ho(e, t, Oe, void 0, a, q);
                    for (Q in a) q = a[Q], k = n[Q], !a.hasOwnProperty(Q) || q === k || q === void 0 && k === void 0 || ho(e, t, Q, q, a, k);
                    return
                }
        }
        for (var U in n) q = n[U], n.hasOwnProperty(U) && q != null && !a.hasOwnProperty(U) && Ae(e, t, U, null, a, q);
        for ($ in a) q = a[$], k = n[$], !a.hasOwnProperty($) || q === k || q == null && k == null || Ae(e, t, $, q, a, k)
    }

    var mo = null, po = null;

    function wr(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }

    function Dm(e) {
        switch (e) {
            case"http://www.w3.org/2000/svg":
                return 1;
            case"http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Mm(e, t) {
        if (e === 0) switch (t) {
            case"svg":
                return 1;
            case"math":
                return 2;
            default:
                return 0
        }
        return e === 1 && t === "foreignObject" ? 0 : e
    }

    function go(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }

    var vo = null;

    function Gv() {
        var e = window.event;
        return e && e.type === "popstate" ? e === vo ? !1 : (vo = e, !0) : (vo = null, !1)
    }

    var Hm = typeof setTimeout == "function" ? setTimeout : void 0,
        Yv = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Lm = typeof Promise == "function" ? Promise : void 0,
        Qv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lm < "u" ? function (e) {
            return Lm.resolve(null).then(e).catch(Zv)
        } : Hm;

    function Zv(e) {
        setTimeout(function () {
            throw e
        })
    }

    function qn(e) {
        return e === "head"
    }

    function Bm(e, t) {
        var n = t, a = 0, r = 0;
        do {
            var o = n.nextSibling;
            if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
                if (0 < a && 8 > a) {
                    n = a;
                    var m = e.ownerDocument;
                    if (n & 1 && Pl(m.documentElement), n & 2 && Pl(m.body), n & 4) for (n = m.head, Pl(n), m = n.firstChild; m;) {
                        var y = m.nextSibling, E = m.nodeName;
                        m[ml] || E === "SCRIPT" || E === "STYLE" || E === "LINK" && m.rel.toLowerCase() === "stylesheet" || n.removeChild(m), m = y
                    }
                }
                if (r === 0) {
                    e.removeChild(o), si(t);
                    return
                }
                r--
            } else n === "$" || n === "$?" || n === "$!" ? r++ : a = n.charCodeAt(0) - 48; else a = 0;
            n = o
        } while (n);
        si(t)
    }

    function yo(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
                case"HTML":
                case"HEAD":
                case"BODY":
                    yo(n), Es(n);
                    continue;
                case"SCRIPT":
                case"STYLE":
                    continue;
                case"LINK":
                    if (n.rel.toLowerCase() === "stylesheet") continue
            }
            e.removeChild(n)
        }
    }

    function Iv(e, t, n, a) {
        for (; e.nodeType === 1;) {
            var r = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
            } else if (a) {
                if (!e[ml]) switch (t) {
                    case"meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case"link":
                        if (o = e.getAttribute("rel"), o === "stylesheet" && e.hasAttribute("data-precedence")) break;
                        if (o !== r.rel || e.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || e.getAttribute("title") !== (r.title == null ? null : r.title)) break;
                        return e;
                    case"style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case"script":
                        if (o = e.getAttribute("src"), (o !== (r.src == null ? null : r.src) || e.getAttribute("type") !== (r.type == null ? null : r.type) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && o && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                        return e;
                    default:
                        return e
                }
            } else if (t === "input" && e.type === "hidden") {
                var o = r.name == null ? null : "" + r.name;
                if (r.type === "hidden" && e.getAttribute("name") === o) return e
            } else return e;
            if (e = qt(e.nextSibling), e === null) break
        }
        return null
    }

    function Jv(e, t, n) {
        if (t === "") return null;
        for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = qt(e.nextSibling), e === null)) return null;
        return e
    }

    function bo(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }

    function $v(e, t) {
        var n = e.ownerDocument;
        if (e.data !== "$?" || n.readyState === "complete") t(); else {
            var a = function () {
                t(), n.removeEventListener("DOMContentLoaded", a)
            };
            n.addEventListener("DOMContentLoaded", a), e._reactRetry = a
        }
    }

    function qt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
                if (t === "/$") return null
            }
        }
        return e
    }

    var So = null;

    function zm(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--
                } else n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }

    function qm(e, t, n) {
        switch (t = wr(n), e) {
            case"html":
                if (e = t.documentElement, !e) throw Error(s(452));
                return e;
            case"head":
                if (e = t.head, !e) throw Error(s(453));
                return e;
            case"body":
                if (e = t.body, !e) throw Error(s(454));
                return e;
            default:
                throw Error(s(451))
        }
    }

    function Pl(e) {
        for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
        Es(e)
    }

    var Ht = new Map, km = new Set;

    function Ar(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }

    var gn = P.d;
    P.d = {f: Kv, r: Fv, D: Wv, C: Pv, L: ey, m: ty, X: ay, S: ny, M: ly};

    function Kv() {
        var e = gn.f(), t = br();
        return e || t
    }

    function Fv(e) {
        var t = Sa(e);
        t !== null && t.tag === 5 && t.type === "form" ? rh(t) : gn.r(e)
    }

    var el = typeof document > "u" ? null : document;

    function Vm(e, t, n) {
        var a = el;
        if (a && typeof t == "string" && t) {
            var r = At(t);
            r = 'link[rel="' + e + '"][href="' + r + '"]', typeof n == "string" && (r += '[crossorigin="' + n + '"]'), km.has(r) || (km.add(r), e = {
                rel: e,
                crossOrigin: n,
                href: t
            }, a.querySelector(r) === null && (t = a.createElement("link"), We(t, "link", e), Ze(t), a.head.appendChild(t)))
        }
    }

    function Wv(e) {
        gn.D(e), Vm("dns-prefetch", e, null)
    }

    function Pv(e, t) {
        gn.C(e, t), Vm("preconnect", e, t)
    }

    function ey(e, t, n) {
        gn.L(e, t, n);
        var a = el;
        if (a && e && t) {
            var r = 'link[rel="preload"][as="' + At(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (r += '[imagesrcset="' + At(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (r += '[imagesizes="' + At(n.imageSizes) + '"]')) : r += '[href="' + At(e) + '"]';
            var o = r;
            switch (t) {
                case"style":
                    o = tl(e);
                    break;
                case"script":
                    o = nl(e)
            }
            Ht.has(o) || (e = g({
                rel: "preload",
                href: t === "image" && n && n.imageSrcSet ? void 0 : e,
                as: t
            }, n), Ht.set(o, e), a.querySelector(r) !== null || t === "style" && a.querySelector(ei(o)) || t === "script" && a.querySelector(ti(o)) || (t = a.createElement("link"), We(t, "link", e), Ze(t), a.head.appendChild(t)))
        }
    }

    function ty(e, t) {
        gn.m(e, t);
        var n = el;
        if (n && e) {
            var a = t && typeof t.as == "string" ? t.as : "script",
                r = 'link[rel="modulepreload"][as="' + At(a) + '"][href="' + At(e) + '"]', o = r;
            switch (a) {
                case"audioworklet":
                case"paintworklet":
                case"serviceworker":
                case"sharedworker":
                case"worker":
                case"script":
                    o = nl(e)
            }
            if (!Ht.has(o) && (e = g({rel: "modulepreload", href: e}, t), Ht.set(o, e), n.querySelector(r) === null)) {
                switch (a) {
                    case"audioworklet":
                    case"paintworklet":
                    case"serviceworker":
                    case"sharedworker":
                    case"worker":
                    case"script":
                        if (n.querySelector(ti(o))) return
                }
                a = n.createElement("link"), We(a, "link", e), Ze(a), n.head.appendChild(a)
            }
        }
    }

    function ny(e, t, n) {
        gn.S(e, t, n);
        var a = el;
        if (a && e) {
            var r = _a(a).hoistableStyles, o = tl(e);
            t = t || "default";
            var m = r.get(o);
            if (!m) {
                var y = {loading: 0, preload: null};
                if (m = a.querySelector(ei(o))) y.loading = 5; else {
                    e = g({rel: "stylesheet", href: e, "data-precedence": t}, n), (n = Ht.get(o)) && _o(e, n);
                    var E = m = a.createElement("link");
                    Ze(E), We(E, "link", e), E._p = new Promise(function (B, Q) {
                        E.onload = B, E.onerror = Q
                    }), E.addEventListener("load", function () {
                        y.loading |= 1
                    }), E.addEventListener("error", function () {
                        y.loading |= 2
                    }), y.loading |= 4, Or(m, t, a)
                }
                m = {type: "stylesheet", instance: m, count: 1, state: y}, r.set(o, m)
            }
        }
    }

    function ay(e, t) {
        gn.X(e, t);
        var n = el;
        if (n && e) {
            var a = _a(n).hoistableScripts, r = nl(e), o = a.get(r);
            o || (o = n.querySelector(ti(r)), o || (e = g({
                src: e,
                async: !0
            }, t), (t = Ht.get(r)) && Eo(e, t), o = n.createElement("script"), Ze(o), We(o, "link", e), n.head.appendChild(o)), o = {
                type: "script",
                instance: o,
                count: 1,
                state: null
            }, a.set(r, o))
        }
    }

    function ly(e, t) {
        gn.M(e, t);
        var n = el;
        if (n && e) {
            var a = _a(n).hoistableScripts, r = nl(e), o = a.get(r);
            o || (o = n.querySelector(ti(r)), o || (e = g({
                src: e,
                async: !0,
                type: "module"
            }, t), (t = Ht.get(r)) && Eo(e, t), o = n.createElement("script"), Ze(o), We(o, "link", e), n.head.appendChild(o)), o = {
                type: "script",
                instance: o,
                count: 1,
                state: null
            }, a.set(r, o))
        }
    }

    function Xm(e, t, n, a) {
        var r = (r = ce.current) ? Ar(r) : null;
        if (!r) throw Error(s(446));
        switch (e) {
            case"meta":
            case"title":
                return null;
            case"style":
                return typeof n.precedence == "string" && typeof n.href == "string" ? (t = tl(n.href), n = _a(r).hoistableStyles, a = n.get(t), a || (a = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, a)), a) : {type: "void", instance: null, count: 0, state: null};
            case"link":
                if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                    e = tl(n.href);
                    var o = _a(r).hoistableStyles, m = o.get(e);
                    if (m || (r = r.ownerDocument || r, m = {
                        type: "stylesheet",
                        instance: null,
                        count: 0,
                        state: {loading: 0, preload: null}
                    }, o.set(e, m), (o = r.querySelector(ei(e))) && !o._p && (m.instance = o, m.state.loading = 5), Ht.has(e) || (n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy
                    }, Ht.set(e, n), o || iy(r, e, n, m.state))), t && a === null) throw Error(s(528, ""));
                    return m
                }
                if (t && a !== null) throw Error(s(529, ""));
                return null;
            case"script":
                return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = nl(n), n = _a(r).hoistableScripts, a = n.get(t), a || (a = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, a)), a) : {type: "void", instance: null, count: 0, state: null};
            default:
                throw Error(s(444, e))
        }
    }

    function tl(e) {
        return 'href="' + At(e) + '"'
    }

    function ei(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function Gm(e) {
        return g({}, e, {"data-precedence": e.precedence, precedence: null})
    }

    function iy(e, t, n, a) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function () {
            return a.loading |= 1
        }), t.addEventListener("error", function () {
            return a.loading |= 2
        }), We(t, "link", n), Ze(t), e.head.appendChild(t))
    }

    function nl(e) {
        return '[src="' + At(e) + '"]'
    }

    function ti(e) {
        return "script[async]" + e
    }

    function Ym(e, t, n) {
        if (t.count++, t.instance === null) switch (t.type) {
            case"style":
                var a = e.querySelector('style[data-href~="' + At(n.href) + '"]');
                if (a) return t.instance = a, Ze(a), a;
                var r = g({}, n, {"data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null});
                return a = (e.ownerDocument || e).createElement("style"), Ze(a), We(a, "style", r), Or(a, n.precedence, e), t.instance = a;
            case"stylesheet":
                r = tl(n.href);
                var o = e.querySelector(ei(r));
                if (o) return t.state.loading |= 4, t.instance = o, Ze(o), o;
                a = Gm(n), (r = Ht.get(r)) && _o(a, r), o = (e.ownerDocument || e).createElement("link"), Ze(o);
                var m = o;
                return m._p = new Promise(function (y, E) {
                    m.onload = y, m.onerror = E
                }), We(o, "link", a), t.state.loading |= 4, Or(o, n.precedence, e), t.instance = o;
            case"script":
                return o = nl(n.src), (r = e.querySelector(ti(o))) ? (t.instance = r, Ze(r), r) : (a = n, (r = Ht.get(o)) && (a = g({}, n), Eo(a, r)), e = e.ownerDocument || e, r = e.createElement("script"), Ze(r), We(r, "link", a), e.head.appendChild(r), t.instance = r);
            case"void":
                return null;
            default:
                throw Error(s(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Or(a, n.precedence, e));
        return t.instance
    }

    function Or(e, t, n) {
        for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), r = a.length ? a[a.length - 1] : null, o = r, m = 0; m < a.length; m++) {
            var y = a[m];
            if (y.dataset.precedence === t) o = y; else if (o !== r) break
        }
        o ? o.parentNode.insertBefore(e, o.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild))
    }

    function _o(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
    }

    function Eo(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
    }

    var Nr = null;

    function Qm(e, t, n) {
        if (Nr === null) {
            var a = new Map, r = Nr = new Map;
            r.set(n, a)
        } else r = Nr, a = r.get(n), a || (a = new Map, r.set(n, a));
        if (a.has(e)) return a;
        for (a.set(e, null), n = n.getElementsByTagName(e), r = 0; r < n.length; r++) {
            var o = n[r];
            if (!(o[ml] || o[Pe] || e === "link" && o.getAttribute("rel") === "stylesheet") && o.namespaceURI !== "http://www.w3.org/2000/svg") {
                var m = o.getAttribute(t) || "";
                m = e + m;
                var y = a.get(m);
                y ? y.push(o) : a.set(m, [o])
            }
        }
        return a
    }

    function Zm(e, t, n) {
        e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null)
    }

    function ry(e, t, n) {
        if (n === 1 || t.itemProp != null) return !1;
        switch (e) {
            case"meta":
            case"title":
                return !0;
            case"style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case"link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                switch (t.rel) {
                    case"stylesheet":
                        return e = t.disabled, typeof t.precedence == "string" && e == null;
                    default:
                        return !0
                }
            case"script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function Im(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }

    var ni = null;

    function sy() {
    }

    function uy(e, t, n) {
        if (ni === null) throw Error(s(475));
        var a = ni;
        if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var r = tl(n.href), o = e.querySelector(ei(r));
                if (o) {
                    e = o._p, e !== null && typeof e == "object" && typeof e.then == "function" && (a.count++, a = jr.bind(a), e.then(a, a)), t.state.loading |= 4, t.instance = o, Ze(o);
                    return
                }
                o = e.ownerDocument || e, n = Gm(n), (r = Ht.get(r)) && _o(n, r), o = o.createElement("link"), Ze(o);
                var m = o;
                m._p = new Promise(function (y, E) {
                    m.onload = y, m.onerror = E
                }), We(o, "link", n), t.instance = o
            }
            a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = jr.bind(a), e.addEventListener("load", t), e.addEventListener("error", t))
        }
    }

    function oy() {
        if (ni === null) throw Error(s(475));
        var e = ni;
        return e.stylesheets && e.count === 0 && To(e, e.stylesheets), 0 < e.count ? function (t) {
            var n = setTimeout(function () {
                if (e.stylesheets && To(e, e.stylesheets), e.unsuspend) {
                    var a = e.unsuspend;
                    e.unsuspend = null, a()
                }
            }, 6e4);
            return e.unsuspend = t, function () {
                e.unsuspend = null, clearTimeout(n)
            }
        } : null
    }

    function jr() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) To(this, this.stylesheets); else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e()
            }
        }
    }

    var Ur = null;

    function To(e, t) {
        e.stylesheets = null, e.unsuspend !== null && (e.count++, Ur = new Map, t.forEach(cy, e), Ur = null, jr.call(e))
    }

    function cy(e, t) {
        if (!(t.state.loading & 4)) {
            var n = Ur.get(e);
            if (n) var a = n.get(null); else {
                n = new Map, Ur.set(e, n);
                for (var r = e.querySelectorAll("link[data-precedence],style[data-precedence]"), o = 0; o < r.length; o++) {
                    var m = r[o];
                    (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (n.set(m.dataset.precedence, m), a = m)
                }
                a && n.set(null, a)
            }
            r = t.instance, m = r.getAttribute("data-precedence"), o = n.get(m) || a, o === a && n.set(null, r), n.set(m, r), this.count++, a = jr.bind(this), r.addEventListener("load", a), r.addEventListener("error", a), o ? o.parentNode.insertBefore(r, o.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(r, e.firstChild)), t.state.loading |= 4
        }
    }

    var ai = {$$typeof: z, Provider: null, Consumer: null, _currentValue: K, _currentValue2: K, _threadCount: 0};

    function fy(e, t, n, a, r, o, m, y) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ys(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ys(0), this.hiddenUpdates = ys(null), this.identifierPrefix = a, this.onUncaughtError = r, this.onCaughtError = o, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = new Map
    }

    function Jm(e, t, n, a, r, o, m, y, E, B, Q, $) {
        return e = new fy(e, t, n, m, y, E, B, $), t = 1, o === !0 && (t |= 24), o = bt(3, null, null, t), e.current = o, o.stateNode = e, t = au(), t.refCount++, e.pooledCache = t, t.refCount++, o.memoizedState = {
            element: a,
            isDehydrated: n,
            cache: t
        }, su(o), e
    }

    function $m(e) {
        return e ? (e = Da, e) : Da
    }

    function Km(e, t, n, a, r, o) {
        r = $m(r), a.context === null ? a.context = r : a.pendingContext = r, a = Cn(t), a.payload = {element: n}, o = o === void 0 ? null : o, o !== null && (a.callback = o), n = wn(e, a, t), n !== null && (xt(n, e, t), Dl(n, e, t))
    }

    function Fm(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }

    function xo(e, t) {
        Fm(e, t), (e = e.alternate) && Fm(e, t)
    }

    function Wm(e) {
        if (e.tag === 13) {
            var t = Ua(e, 67108864);
            t !== null && xt(t, e, 67108864), xo(e, 67108864)
        }
    }

    var Dr = !0;

    function dy(e, t, n, a) {
        var r = X.T;
        X.T = null;
        var o = P.p;
        try {
            P.p = 2, Ro(e, t, n, a)
        } finally {
            P.p = o, X.T = r
        }
    }

    function hy(e, t, n, a) {
        var r = X.T;
        X.T = null;
        var o = P.p;
        try {
            P.p = 8, Ro(e, t, n, a)
        } finally {
            P.p = o, X.T = r
        }
    }

    function Ro(e, t, n, a) {
        if (Dr) {
            var r = Co(a);
            if (r === null) fo(e, t, a, Mr, n), ep(e, a); else if (py(r, e, t, n, a)) a.stopPropagation(); else if (ep(e, a), t & 4 && -1 < my.indexOf(e)) {
                for (; r !== null;) {
                    var o = Sa(r);
                    if (o !== null) switch (o.tag) {
                        case 3:
                            if (o = o.stateNode, o.current.memoizedState.isDehydrated) {
                                var m = Jn(o.pendingLanes);
                                if (m !== 0) {
                                    var y = o;
                                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; m;) {
                                        var E = 1 << 31 - vt(m);
                                        y.entanglements[1] |= E, m &= ~E
                                    }
                                    $t(o), (Re & 6) === 0 && (vr = Yt() + 500, Kl(0))
                                }
                            }
                            break;
                        case 13:
                            y = Ua(o, 2), y !== null && xt(y, o, 2), br(), xo(o, 2)
                    }
                    if (o = Co(a), o === null && fo(e, t, a, Mr, n), o === r) break;
                    r = o
                }
                r !== null && a.stopPropagation()
            } else fo(e, t, a, null, n)
        }
    }

    function Co(e) {
        return e = Ns(e), wo(e)
    }

    var Mr = null;

    function wo(e) {
        if (Mr = null, e = ba(e), e !== null) {
            var t = f(e);
            if (t === null) e = null; else {
                var n = t.tag;
                if (n === 13) {
                    if (e = d(t), e !== null) return e;
                    e = null
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null)
            }
        }
        return Mr = e, null
    }

    function Pm(e) {
        switch (e) {
            case"beforetoggle":
            case"cancel":
            case"click":
            case"close":
            case"contextmenu":
            case"copy":
            case"cut":
            case"auxclick":
            case"dblclick":
            case"dragend":
            case"dragstart":
            case"drop":
            case"focusin":
            case"focusout":
            case"input":
            case"invalid":
            case"keydown":
            case"keypress":
            case"keyup":
            case"mousedown":
            case"mouseup":
            case"paste":
            case"pause":
            case"play":
            case"pointercancel":
            case"pointerdown":
            case"pointerup":
            case"ratechange":
            case"reset":
            case"resize":
            case"seeked":
            case"submit":
            case"toggle":
            case"touchcancel":
            case"touchend":
            case"touchstart":
            case"volumechange":
            case"change":
            case"selectionchange":
            case"textInput":
            case"compositionstart":
            case"compositionend":
            case"compositionupdate":
            case"beforeblur":
            case"afterblur":
            case"beforeinput":
            case"blur":
            case"fullscreenchange":
            case"focus":
            case"hashchange":
            case"popstate":
            case"select":
            case"selectstart":
                return 2;
            case"drag":
            case"dragenter":
            case"dragexit":
            case"dragleave":
            case"dragover":
            case"mousemove":
            case"mouseout":
            case"mouseover":
            case"pointermove":
            case"pointerout":
            case"pointerover":
            case"scroll":
            case"touchmove":
            case"wheel":
            case"mouseenter":
            case"mouseleave":
            case"pointerenter":
            case"pointerleave":
                return 8;
            case"message":
                switch (P1()) {
                    case hf:
                        return 2;
                    case mf:
                        return 8;
                    case Ci:
                    case eg:
                        return 32;
                    case pf:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }

    var Ao = !1, kn = null, Vn = null, Xn = null, li = new Map, ii = new Map, Gn = [],
        my = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function ep(e, t) {
        switch (e) {
            case"focusin":
            case"focusout":
                kn = null;
                break;
            case"dragenter":
            case"dragleave":
                Vn = null;
                break;
            case"mouseover":
            case"mouseout":
                Xn = null;
                break;
            case"pointerover":
            case"pointerout":
                li.delete(t.pointerId);
                break;
            case"gotpointercapture":
            case"lostpointercapture":
                ii.delete(t.pointerId)
        }
    }

    function ri(e, t, n, a, r, o) {
        return e === null || e.nativeEvent !== o ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: a,
            nativeEvent: o,
            targetContainers: [r]
        }, t !== null && (t = Sa(t), t !== null && Wm(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, r !== null && t.indexOf(r) === -1 && t.push(r), e)
    }

    function py(e, t, n, a, r) {
        switch (t) {
            case"focusin":
                return kn = ri(kn, e, t, n, a, r), !0;
            case"dragenter":
                return Vn = ri(Vn, e, t, n, a, r), !0;
            case"mouseover":
                return Xn = ri(Xn, e, t, n, a, r), !0;
            case"pointerover":
                var o = r.pointerId;
                return li.set(o, ri(li.get(o) || null, e, t, n, a, r)), !0;
            case"gotpointercapture":
                return o = r.pointerId, ii.set(o, ri(ii.get(o) || null, e, t, n, a, r)), !0
        }
        return !1
    }

    function tp(e) {
        var t = ba(e.target);
        if (t !== null) {
            var n = f(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = d(n), t !== null) {
                        e.blockedOn = t, ug(e.priority, function () {
                            if (n.tag === 13) {
                                var a = Tt();
                                a = bs(a);
                                var r = Ua(n, a);
                                r !== null && xt(r, n, a), xo(n, a)
                            }
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function Hr(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = Co(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var a = new n.constructor(n.type, n);
                Os = a, n.target.dispatchEvent(a), Os = null
            } else return t = Sa(n), t !== null && Wm(t), e.blockedOn = n, !1;
            t.shift()
        }
        return !0
    }

    function np(e, t, n) {
        Hr(e) && n.delete(t)
    }

    function gy() {
        Ao = !1, kn !== null && Hr(kn) && (kn = null), Vn !== null && Hr(Vn) && (Vn = null), Xn !== null && Hr(Xn) && (Xn = null), li.forEach(np), ii.forEach(np)
    }

    function Lr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Ao || (Ao = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, gy)))
    }

    var Br = null;

    function ap(e) {
        Br !== e && (Br = e, l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
            Br === e && (Br = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t], a = e[t + 1], r = e[t + 2];
                if (typeof a != "function") {
                    if (wo(a || n) === null) continue;
                    break
                }
                var o = Sa(n);
                o !== null && (e.splice(t, 3), t -= 3, Cu(o, {pending: !0, data: r, method: n.method, action: a}, a, r))
            }
        }))
    }

    function si(e) {
        function t(E) {
            return Lr(E, e)
        }

        kn !== null && Lr(kn, e), Vn !== null && Lr(Vn, e), Xn !== null && Lr(Xn, e), li.forEach(t), ii.forEach(t);
        for (var n = 0; n < Gn.length; n++) {
            var a = Gn[n];
            a.blockedOn === e && (a.blockedOn = null)
        }
        for (; 0 < Gn.length && (n = Gn[0], n.blockedOn === null);) tp(n), n.blockedOn === null && Gn.shift();
        if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (a = 0; a < n.length; a += 3) {
            var r = n[a], o = n[a + 1], m = r[ut] || null;
            if (typeof o == "function") m || ap(n); else if (m) {
                var y = null;
                if (o && o.hasAttribute("formAction")) {
                    if (r = o, m = o[ut] || null) y = m.formAction; else if (wo(r) !== null) continue
                } else y = m.action;
                typeof y == "function" ? n[a + 1] = y : (n.splice(a, 3), a -= 3), ap(n)
            }
        }
    }

    function Oo(e) {
        this._internalRoot = e
    }

    zr.prototype.render = Oo.prototype.render = function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(s(409));
        var n = t.current, a = Tt();
        Km(n, a, e, t, null, null)
    }, zr.prototype.unmount = Oo.prototype.unmount = function () {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Km(e.current, 2, null, e, null, null), br(), t[ya] = null
        }
    };

    function zr(e) {
        this._internalRoot = e
    }

    zr.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = Sf();
            e = {blockedOn: null, target: e, priority: t};
            for (var n = 0; n < Gn.length && t !== 0 && t < Gn[n].priority; n++) ;
            Gn.splice(n, 0, e), n === 0 && tp(e)
        }
    };
    var lp = i.version;
    if (lp !== "19.1.1") throw Error(s(527, lp, "19.1.1"));
    P.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
        return e = v(t), e = e !== null ? h(e) : null, e = e === null ? null : e.stateNode, e
    };
    var vy = {
        bundleType: 0,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: X,
        reconcilerVersion: "19.1.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!qr.isDisabled && qr.supportsFiber) try {
            fl = qr.inject(vy), gt = qr
        } catch {
        }
    }
    return oi.createRoot = function (e, t) {
        if (!c(e)) throw Error(s(299));
        var n = !1, a = "", r = Sh, o = _h, m = Eh, y = null;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (r = t.onUncaughtError), t.onCaughtError !== void 0 && (o = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (y = t.unstable_transitionCallbacks)), t = Jm(e, 1, !1, null, null, n, a, r, o, m, y, null), e[ya] = t.current, co(e), new Oo(t)
    }, oi.hydrateRoot = function (e, t, n) {
        if (!c(e)) throw Error(s(299));
        var a = !1, r = "", o = Sh, m = _h, y = Eh, E = null, B = null;
        return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onUncaughtError !== void 0 && (o = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (E = n.unstable_transitionCallbacks), n.formState !== void 0 && (B = n.formState)), t = Jm(e, 1, !0, t, n ?? null, a, r, o, m, y, E, B), t.context = $m(null), n = t.current, a = Tt(), a = bs(a), r = Cn(a), r.callback = null, wn(n, r, a), n = a, t.current.lanes = n, hl(t, n), $t(t), e[ya] = t.current, co(e), new zr(t)
    }, oi.version = "19.1.1", oi
}

var mp;

function wy() {
    if (mp) return Uo.exports;
    mp = 1;

    function l() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)
        } catch (i) {
            console.error(i)
        }
    }

    return l(), Uo.exports = Cy(), Uo.exports
}

var Ay = wy();
/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var pp = "popstate";

function Oy(l = {}) {
    function i(s, c) {
        let {pathname: f, search: d, hash: p} = s.location;
        return Vc("", {
            pathname: f,
            search: d,
            hash: p
        }, c.state && c.state.usr || null, c.state && c.state.key || "default")
    }

    function u(s, c) {
        return typeof c == "string" ? c : hi(c)
    }

    return jy(i, u, null, l)
}

function Le(l, i) {
    if (l === !1 || l === null || typeof l > "u") throw new Error(i)
}

function Wt(l, i) {
    if (!l) {
        typeof console < "u" && console.warn(i);
        try {
            throw new Error(i)
        } catch {
        }
    }
}

function Ny() {
    return Math.random().toString(36).substring(2, 10)
}

function gp(l, i) {
    return {usr: l.state, key: l.key, idx: i}
}

function Vc(l, i, u = null, s) {
    return {
        pathname: typeof l == "string" ? l : l.pathname,
        search: "",
        hash: "", ...typeof i == "string" ? il(i) : i,
        state: u,
        key: i && i.key || s || Ny()
    }
}

function hi({pathname: l = "/", search: i = "", hash: u = ""}) {
    return i && i !== "?" && (l += i.charAt(0) === "?" ? i : "?" + i), u && u !== "#" && (l += u.charAt(0) === "#" ? u : "#" + u), l
}

function il(l) {
    let i = {};
    if (l) {
        let u = l.indexOf("#");
        u >= 0 && (i.hash = l.substring(u), l = l.substring(0, u));
        let s = l.indexOf("?");
        s >= 0 && (i.search = l.substring(s), l = l.substring(0, s)), l && (i.pathname = l)
    }
    return i
}

function jy(l, i, u, s = {}) {
    let {window: c = document.defaultView, v5Compat: f = !1} = s, d = c.history, p = "POP", v = null, h = g();
    h == null && (h = 0, d.replaceState({...d.state, idx: h}, ""));

    function g() {
        return (d.state || {idx: null}).idx
    }

    function b() {
        p = "POP";
        let N = g(), Y = N == null ? null : N - h;
        h = N, v && v({action: p, location: w.location, delta: Y})
    }

    function _(N, Y) {
        p = "PUSH";
        let C = Vc(w.location, N, Y);
        h = g() + 1;
        let z = gp(C, h), M = w.createHref(C);
        try {
            d.pushState(z, "", M)
        } catch (D) {
            if (D instanceof DOMException && D.name === "DataCloneError") throw D;
            c.location.assign(M)
        }
        f && v && v({action: p, location: w.location, delta: 1})
    }

    function j(N, Y) {
        p = "REPLACE";
        let C = Vc(w.location, N, Y);
        h = g();
        let z = gp(C, h), M = w.createHref(C);
        d.replaceState(z, "", M), f && v && v({action: p, location: w.location, delta: 0})
    }

    function x(N) {
        return Uy(N)
    }

    let w = {
        get action() {
            return p
        }, get location() {
            return l(c, d)
        }, listen(N) {
            if (v) throw new Error("A history only accepts one active listener");
            return c.addEventListener(pp, b), v = N, () => {
                c.removeEventListener(pp, b), v = null
            }
        }, createHref(N) {
            return i(c, N)
        }, createURL: x, encodeLocation(N) {
            let Y = x(N);
            return {pathname: Y.pathname, search: Y.search, hash: Y.hash}
        }, push: _, replace: j, go(N) {
            return d.go(N)
        }
    };
    return w
}

function Uy(l, i = !1) {
    let u = "http://localhost";
    typeof window < "u" && (u = window.location.origin !== "null" ? window.location.origin : window.location.href), Le(u, "No window.location.(origin|href) available to create URL");
    let s = typeof l == "string" ? l : hi(l);
    return s = s.replace(/ $/, "%20"), !i && s.startsWith("//") && (s = u + s), new URL(s, u)
}

function K0(l, i, u = "/") {
    return Dy(l, i, u, !1)
}

function Dy(l, i, u, s) {
    let c = typeof i == "string" ? il(i) : i, f = yn(c.pathname || "/", u);
    if (f == null) return null;
    let d = F0(l);
    My(d);
    let p = null;
    for (let v = 0; p == null && v < d.length; ++v) {
        let h = Qy(f);
        p = Gy(d[v], h, s)
    }
    return p
}

function F0(l, i = [], u = [], s = "", c = !1) {
    let f = (d, p, v = c, h) => {
        let g = {
            relativePath: h === void 0 ? d.path || "" : h,
            caseSensitive: d.caseSensitive === !0,
            childrenIndex: p,
            route: d
        };
        if (g.relativePath.startsWith("/")) {
            if (!g.relativePath.startsWith(s) && v) return;
            Le(g.relativePath.startsWith(s), `Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), g.relativePath = g.relativePath.slice(s.length)
        }
        let b = vn([s, g.relativePath]), _ = u.concat(g);
        d.children && d.children.length > 0 && (Le(d.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${b}".`), F0(d.children, i, _, b, v)), !(d.path == null && !d.index) && i.push({
            path: b,
            score: Vy(b, d.index),
            routesMeta: _
        })
    };
    return l.forEach((d, p) => {
        if (d.path === "" || !d.path?.includes("?")) f(d, p); else for (let v of W0(d.path)) f(d, p, !0, v)
    }), i
}

function W0(l) {
    let i = l.split("/");
    if (i.length === 0) return [];
    let [u, ...s] = i, c = u.endsWith("?"), f = u.replace(/\?$/, "");
    if (s.length === 0) return c ? [f, ""] : [f];
    let d = W0(s.join("/")), p = [];
    return p.push(...d.map(v => v === "" ? f : [f, v].join("/"))), c && p.push(...d), p.map(v => l.startsWith("/") && v === "" ? "/" : v)
}

function My(l) {
    l.sort((i, u) => i.score !== u.score ? u.score - i.score : Xy(i.routesMeta.map(s => s.childrenIndex), u.routesMeta.map(s => s.childrenIndex)))
}

var Hy = /^:[\w-]+$/, Ly = 3, By = 2, zy = 1, qy = 10, ky = -2, vp = l => l === "*";

function Vy(l, i) {
    let u = l.split("/"), s = u.length;
    return u.some(vp) && (s += ky), i && (s += By), u.filter(c => !vp(c)).reduce((c, f) => c + (Hy.test(f) ? Ly : f === "" ? zy : qy), s)
}

function Xy(l, i) {
    return l.length === i.length && l.slice(0, -1).every((s, c) => s === i[c]) ? l[l.length - 1] - i[i.length - 1] : 0
}

function Gy(l, i, u = !1) {
    let {routesMeta: s} = l, c = {}, f = "/", d = [];
    for (let p = 0; p < s.length; ++p) {
        let v = s[p], h = p === s.length - 1, g = f === "/" ? i : i.slice(f.length) || "/",
            b = es({path: v.relativePath, caseSensitive: v.caseSensitive, end: h}, g), _ = v.route;
        if (!b && h && u && !s[s.length - 1].route.index && (b = es({
            path: v.relativePath,
            caseSensitive: v.caseSensitive,
            end: !1
        }, g)), !b) return null;
        Object.assign(c, b.params), d.push({
            params: c,
            pathname: vn([f, b.pathname]),
            pathnameBase: $y(vn([f, b.pathnameBase])),
            route: _
        }), b.pathnameBase !== "/" && (f = vn([f, b.pathnameBase]))
    }
    return d
}

function es(l, i) {
    typeof l == "string" && (l = {path: l, caseSensitive: !1, end: !0});
    let [u, s] = Yy(l.path, l.caseSensitive, l.end), c = i.match(u);
    if (!c) return null;
    let f = c[0], d = f.replace(/(.)\/+$/, "$1"), p = c.slice(1);
    return {
        params: s.reduce((h, {paramName: g, isOptional: b}, _) => {
            if (g === "*") {
                let x = p[_] || "";
                d = f.slice(0, f.length - x.length).replace(/(.)\/+$/, "$1")
            }
            const j = p[_];
            return b && !j ? h[g] = void 0 : h[g] = (j || "").replace(/%2F/g, "/"), h
        }, {}), pathname: f, pathnameBase: d, pattern: l
    }
}

function Yy(l, i = !1, u = !0) {
    Wt(l === "*" || !l.endsWith("*") || l.endsWith("/*"), `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`);
    let s = [],
        c = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, p, v) => (s.push({
            paramName: p,
            isOptional: v != null
        }), v ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return l.endsWith("*") ? (s.push({paramName: "*"}), c += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : u ? c += "\\/*$" : l !== "" && l !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, i ? void 0 : "i"), s]
}

function Qy(l) {
    try {
        return l.split("/").map(i => decodeURIComponent(i).replace(/\//g, "%2F")).join("/")
    } catch (i) {
        return Wt(!1, `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`), l
    }
}

function yn(l, i) {
    if (i === "/") return l;
    if (!l.toLowerCase().startsWith(i.toLowerCase())) return null;
    let u = i.endsWith("/") ? i.length - 1 : i.length, s = l.charAt(u);
    return s && s !== "/" ? null : l.slice(u) || "/"
}

function Zy(l, i = "/") {
    let {pathname: u, search: s = "", hash: c = ""} = typeof l == "string" ? il(l) : l;
    return {pathname: u ? u.startsWith("/") ? u : Iy(u, i) : i, search: Ky(s), hash: Fy(c)}
}

function Iy(l, i) {
    let u = i.replace(/\/+$/, "").split("/");
    return l.split("/").forEach(c => {
        c === ".." ? u.length > 1 && u.pop() : c !== "." && u.push(c)
    }), u.length > 1 ? u.join("/") : "/"
}

function Lo(l, i, u, s) {
    return `Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function Jy(l) {
    return l.filter((i, u) => u === 0 || i.route.path && i.route.path.length > 0)
}

function P0(l) {
    let i = Jy(l);
    return i.map((u, s) => s === i.length - 1 ? u.pathname : u.pathnameBase)
}

function e1(l, i, u, s = !1) {
    let c;
    typeof l == "string" ? c = il(l) : (c = {...l}, Le(!c.pathname || !c.pathname.includes("?"), Lo("?", "pathname", "search", c)), Le(!c.pathname || !c.pathname.includes("#"), Lo("#", "pathname", "hash", c)), Le(!c.search || !c.search.includes("#"), Lo("#", "search", "hash", c)));
    let f = l === "" || c.pathname === "", d = f ? "/" : c.pathname, p;
    if (d == null) p = u; else {
        let b = i.length - 1;
        if (!s && d.startsWith("..")) {
            let _ = d.split("/");
            for (; _[0] === "..";) _.shift(), b -= 1;
            c.pathname = _.join("/")
        }
        p = b >= 0 ? i[b] : "/"
    }
    let v = Zy(c, p), h = d && d !== "/" && d.endsWith("/"), g = (f || d === ".") && u.endsWith("/");
    return !v.pathname.endsWith("/") && (h || g) && (v.pathname += "/"), v
}

var vn = l => l.join("/").replace(/\/\/+/g, "/"), $y = l => l.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Ky = l => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l,
    Fy = l => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l;

function Wy(l) {
    return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l
}

var t1 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(t1);
var Py = ["GET", ...t1];
new Set(Py);
var rl = H.createContext(null);
rl.displayName = "DataRouter";
var as = H.createContext(null);
as.displayName = "DataRouterState";
H.createContext(!1);
var n1 = H.createContext({isTransitioning: !1});
n1.displayName = "ViewTransition";
var eb = H.createContext(new Map);
eb.displayName = "Fetchers";
var tb = H.createContext(null);
tb.displayName = "Await";
var Pt = H.createContext(null);
Pt.displayName = "Navigation";
var pi = H.createContext(null);
pi.displayName = "Location";
var bn = H.createContext({outlet: null, matches: [], isDataRoute: !1});
bn.displayName = "Route";
var Fc = H.createContext(null);
Fc.displayName = "RouteError";

function nb(l, {relative: i} = {}) {
    Le(gi(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: u, navigator: s} = H.useContext(Pt), {hash: c, pathname: f, search: d} = vi(l, {relative: i}), p = f;
    return u !== "/" && (p = f === "/" ? u : vn([u, f])), s.createHref({pathname: p, search: d, hash: c})
}

function gi() {
    return H.useContext(pi) != null
}

function ga() {
    return Le(gi(), "useLocation() may be used only in the context of a <Router> component."), H.useContext(pi).location
}

var a1 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function l1(l) {
    H.useContext(Pt).static || H.useLayoutEffect(l)
}

function en() {
    let {isDataRoute: l} = H.useContext(bn);
    return l ? pb() : ab()
}

function ab() {
    Le(gi(), "useNavigate() may be used only in the context of a <Router> component.");
    let l = H.useContext(rl), {
            basename: i,
            navigator: u
        } = H.useContext(Pt), {matches: s} = H.useContext(bn), {pathname: c} = ga(), f = JSON.stringify(P0(s)),
        d = H.useRef(!1);
    return l1(() => {
        d.current = !0
    }), H.useCallback((v, h = {}) => {
        if (Wt(d.current, a1), !d.current) return;
        if (typeof v == "number") {
            u.go(v);
            return
        }
        let g = e1(v, JSON.parse(f), c, h.relative === "path");
        l == null && i !== "/" && (g.pathname = g.pathname === "/" ? i : vn([i, g.pathname])), (h.replace ? u.replace : u.push)(g, h.state, h)
    }, [i, u, f, c, l])
}

H.createContext(null);

function vi(l, {relative: i} = {}) {
    let {matches: u} = H.useContext(bn), {pathname: s} = ga(), c = JSON.stringify(P0(u));
    return H.useMemo(() => e1(l, JSON.parse(c), s, i === "path"), [l, c, s, i])
}

function lb(l, i) {
    return i1(l, i)
}

function i1(l, i, u, s, c) {
    Le(gi(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: f} = H.useContext(Pt), {matches: d} = H.useContext(bn), p = d[d.length - 1], v = p ? p.params : {},
        h = p ? p.pathname : "/", g = p ? p.pathnameBase : "/", b = p && p.route;
    {
        let C = b && b.path || "";
        r1(h, !b || C.endsWith("*") || C.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C === "/" ? "*" : `${C}/*`}">.`)
    }
    let _ = ga(), j;
    if (i) {
        let C = typeof i == "string" ? il(i) : i;
        Le(g === "/" || C.pathname?.startsWith(g), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${C.pathname}" was given in the \`location\` prop.`), j = C
    } else j = _;
    let x = j.pathname || "/", w = x;
    if (g !== "/") {
        let C = g.replace(/^\//, "").split("/");
        w = "/" + x.replace(/^\//, "").split("/").slice(C.length).join("/")
    }
    let N = K0(l, {pathname: w});
    Wt(b || N != null, `No routes matched location "${j.pathname}${j.search}${j.hash}" `), Wt(N == null || N[N.length - 1].route.element !== void 0 || N[N.length - 1].route.Component !== void 0 || N[N.length - 1].route.lazy !== void 0, `Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let Y = ob(N && N.map(C => Object.assign({}, C, {
        params: Object.assign({}, v, C.params),
        pathname: vn([g, f.encodeLocation ? f.encodeLocation(C.pathname).pathname : C.pathname]),
        pathnameBase: C.pathnameBase === "/" ? g : vn([g, f.encodeLocation ? f.encodeLocation(C.pathnameBase).pathname : C.pathnameBase])
    })), d, u, s, c);
    return i && Y ? H.createElement(pi.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default", ...j
            }, navigationType: "POP"
        }
    }, Y) : Y
}

function ib() {
    let l = mb(), i = Wy(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l),
        u = l instanceof Error ? l.stack : null, s = "rgba(200,200,200, 0.5)",
        c = {padding: "0.5rem", backgroundColor: s}, f = {padding: "2px 4px", backgroundColor: s}, d = null;
    return console.error("Error handled by React Router default ErrorBoundary:", l), d = H.createElement(H.Fragment, null, H.createElement("p", null, "💿 Hey developer 👋"), H.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", H.createElement("code", {style: f}, "ErrorBoundary"), " or", " ", H.createElement("code", {style: f}, "errorElement"), " prop on your route.")), H.createElement(H.Fragment, null, H.createElement("h2", null, "Unexpected Application Error!"), H.createElement("h3", {style: {fontStyle: "italic"}}, i), u ? H.createElement("pre", {style: c}, u) : null, d)
}

var rb = H.createElement(ib, null), sb = class extends H.Component {
    constructor(l) {
        super(l), this.state = {location: l.location, revalidation: l.revalidation, error: l.error}
    }

    static getDerivedStateFromError(l) {
        return {error: l}
    }

    static getDerivedStateFromProps(l, i) {
        return i.location !== l.location || i.revalidation !== "idle" && l.revalidation === "idle" ? {
            error: l.error,
            location: l.location,
            revalidation: l.revalidation
        } : {
            error: l.error !== void 0 ? l.error : i.error,
            location: i.location,
            revalidation: l.revalidation || i.revalidation
        }
    }

    componentDidCatch(l, i) {
        this.props.unstable_onError ? this.props.unstable_onError(l, i) : console.error("React Router caught the following error during render", l)
    }

    render() {
        return this.state.error !== void 0 ? H.createElement(bn.Provider, {value: this.props.routeContext}, H.createElement(Fc.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
};

function ub({routeContext: l, match: i, children: u}) {
    let s = H.useContext(rl);
    return s && s.static && s.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = i.route.id), H.createElement(bn.Provider, {value: l}, u)
}

function ob(l, i = [], u = null, s = null, c = null) {
    if (l == null) {
        if (!u) return null;
        if (u.errors) l = u.matches; else if (i.length === 0 && !u.initialized && u.matches.length > 0) l = u.matches; else return null
    }
    let f = l, d = u?.errors;
    if (d != null) {
        let h = f.findIndex(g => g.route.id && d?.[g.route.id] !== void 0);
        Le(h >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`), f = f.slice(0, Math.min(f.length, h + 1))
    }
    let p = !1, v = -1;
    if (u) for (let h = 0; h < f.length; h++) {
        let g = f[h];
        if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (v = h), g.route.id) {
            let {loaderData: b, errors: _} = u,
                j = g.route.loader && !b.hasOwnProperty(g.route.id) && (!_ || _[g.route.id] === void 0);
            if (g.route.lazy || j) {
                p = !0, v >= 0 ? f = f.slice(0, v + 1) : f = [f[0]];
                break
            }
        }
    }
    return f.reduceRight((h, g, b) => {
        let _, j = !1, x = null, w = null;
        u && (_ = d && g.route.id ? d[g.route.id] : void 0, x = g.route.errorElement || rb, p && (v < 0 && b === 0 ? (r1("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), j = !0, w = null) : v === b && (j = !0, w = g.route.hydrateFallbackElement || null)));
        let N = i.concat(f.slice(0, b + 1)), Y = () => {
            let C;
            return _ ? C = x : j ? C = w : g.route.Component ? C = H.createElement(g.route.Component, null) : g.route.element ? C = g.route.element : C = h, H.createElement(ub, {
                match: g,
                routeContext: {outlet: h, matches: N, isDataRoute: u != null},
                children: C
            })
        };
        return u && (g.route.ErrorBoundary || g.route.errorElement || b === 0) ? H.createElement(sb, {
            location: u.location,
            revalidation: u.revalidation,
            component: x,
            error: _,
            children: Y(),
            routeContext: {outlet: null, matches: N, isDataRoute: !0},
            unstable_onError: s
        }) : Y()
    }, null)
}

function Wc(l) {
    return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function cb(l) {
    let i = H.useContext(rl);
    return Le(i, Wc(l)), i
}

function fb(l) {
    let i = H.useContext(as);
    return Le(i, Wc(l)), i
}

function db(l) {
    let i = H.useContext(bn);
    return Le(i, Wc(l)), i
}

function Pc(l) {
    let i = db(l), u = i.matches[i.matches.length - 1];
    return Le(u.route.id, `${l} can only be used on routes that contain a unique "id"`), u.route.id
}

function hb() {
    return Pc("useRouteId")
}

function mb() {
    let l = H.useContext(Fc), i = fb("useRouteError"), u = Pc("useRouteError");
    return l !== void 0 ? l : i.errors?.[u]
}

function pb() {
    let {router: l} = cb("useNavigate"), i = Pc("useNavigate"), u = H.useRef(!1);
    return l1(() => {
        u.current = !0
    }), H.useCallback(async (c, f = {}) => {
        Wt(u.current, a1), u.current && (typeof c == "number" ? l.navigate(c) : await l.navigate(c, {fromRouteId: i, ...f}))
    }, [l, i])
}

var yp = {};

function r1(l, i, u) {
    !i && !yp[l] && (yp[l] = !0, Wt(!1, u))
}

H.memo(gb);

function gb({routes: l, future: i, state: u, unstable_onError: s}) {
    return i1(l, void 0, u, s, i)
}

function al(l) {
    Le(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}

function vb({
                basename: l = "/",
                children: i = null,
                location: u,
                navigationType: s = "POP",
                navigator: c,
                static: f = !1
            }) {
    Le(!gi(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let d = l.replace(/^\/*/, "/"),
        p = H.useMemo(() => ({basename: d, navigator: c, static: f, future: {}}), [d, c, f]);
    typeof u == "string" && (u = il(u));
    let {pathname: v = "/", search: h = "", hash: g = "", state: b = null, key: _ = "default"} = u,
        j = H.useMemo(() => {
            let x = yn(v, d);
            return x == null ? null : {location: {pathname: x, search: h, hash: g, state: b, key: _}, navigationType: s}
        }, [d, v, h, g, b, _, s]);
    return Wt(j != null, `<Router basename="${d}"> is not able to match the URL "${v}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`), j == null ? null : H.createElement(Pt.Provider, {value: p}, H.createElement(pi.Provider, {
        children: i,
        value: j
    }))
}

function yb({children: l, location: i}) {
    return lb(Xc(l), i)
}

function Xc(l, i = []) {
    let u = [];
    return H.Children.forEach(l, (s, c) => {
        if (!H.isValidElement(s)) return;
        let f = [...i, c];
        if (s.type === H.Fragment) {
            u.push.apply(u, Xc(s.props.children, f));
            return
        }
        Le(s.type === al, `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Le(!s.props.index || !s.props.children, "An index route cannot have child routes.");
        let d = {
            id: s.props.id || f.join("-"),
            caseSensitive: s.props.caseSensitive,
            element: s.props.element,
            Component: s.props.Component,
            index: s.props.index,
            path: s.props.path,
            loader: s.props.loader,
            action: s.props.action,
            hydrateFallbackElement: s.props.hydrateFallbackElement,
            HydrateFallback: s.props.HydrateFallback,
            errorElement: s.props.errorElement,
            ErrorBoundary: s.props.ErrorBoundary,
            hasErrorBoundary: s.props.hasErrorBoundary === !0 || s.props.ErrorBoundary != null || s.props.errorElement != null,
            shouldRevalidate: s.props.shouldRevalidate,
            handle: s.props.handle,
            lazy: s.props.lazy
        };
        s.props.children && (d.children = Xc(s.props.children, f)), u.push(d)
    }), u
}

var $r = "get", Kr = "application/x-www-form-urlencoded";

function ls(l) {
    return l != null && typeof l.tagName == "string"
}

function bb(l) {
    return ls(l) && l.tagName.toLowerCase() === "button"
}

function Sb(l) {
    return ls(l) && l.tagName.toLowerCase() === "form"
}

function _b(l) {
    return ls(l) && l.tagName.toLowerCase() === "input"
}

function Eb(l) {
    return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey)
}

function Tb(l, i) {
    return l.button === 0 && (!i || i === "_self") && !Eb(l)
}

var Vr = null;

function xb() {
    if (Vr === null) try {
        new FormData(document.createElement("form"), 0), Vr = !1
    } catch {
        Vr = !0
    }
    return Vr
}

var Rb = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function Bo(l) {
    return l != null && !Rb.has(l) ? (Wt(!1, `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kr}"`), null) : l
}

function Cb(l, i) {
    let u, s, c, f, d;
    if (Sb(l)) {
        let p = l.getAttribute("action");
        s = p ? yn(p, i) : null, u = l.getAttribute("method") || $r, c = Bo(l.getAttribute("enctype")) || Kr, f = new FormData(l)
    } else if (bb(l) || _b(l) && (l.type === "submit" || l.type === "image")) {
        let p = l.form;
        if (p == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let v = l.getAttribute("formaction") || p.getAttribute("action");
        if (s = v ? yn(v, i) : null, u = l.getAttribute("formmethod") || p.getAttribute("method") || $r, c = Bo(l.getAttribute("formenctype")) || Bo(p.getAttribute("enctype")) || Kr, f = new FormData(p, l), !xb()) {
            let {name: h, type: g, value: b} = l;
            if (g === "image") {
                let _ = h ? `${h}.` : "";
                f.append(`${_}x`, "0"), f.append(`${_}y`, "0")
            } else h && f.append(h, b)
        }
    } else {
        if (ls(l)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        u = $r, s = null, c = Kr, d = l
    }
    return f && c === "text/plain" && (d = f, f = void 0), {
        action: s,
        method: u.toLowerCase(),
        encType: c,
        formData: f,
        body: d
    }
}

Object.getOwnPropertyNames(Object.prototype).sort().join("\0");

function ef(l, i) {
    if (l === !1 || l === null || typeof l > "u") throw new Error(i)
}

function wb(l, i, u) {
    let s = typeof l == "string" ? new URL(l, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : l;
    return s.pathname === "/" ? s.pathname = `_root.${u}` : i && yn(s.pathname, i) === "/" ? s.pathname = `${i.replace(/\/$/, "")}/_root.${u}` : s.pathname = `${s.pathname.replace(/\/$/, "")}.${u}`, s
}

async function Ab(l, i) {
    if (l.id in i) return i[l.id];
    try {
        let u = await import(l.module);
        return i[l.id] = u, u
    } catch (u) {
        return console.error(`Error loading route module \`${l.module}\`, reloading page...`), console.error(u), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
        })
    }
}

function Ob(l) {
    return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string"
}

async function Nb(l, i, u) {
    let s = await Promise.all(l.map(async c => {
        let f = i.routes[c.route.id];
        if (f) {
            let d = await Ab(f, u);
            return d.links ? d.links() : []
        }
        return []
    }));
    return Mb(s.flat(1).filter(Ob).filter(c => c.rel === "stylesheet" || c.rel === "preload").map(c => c.rel === "stylesheet" ? {
        ...c,
        rel: "prefetch",
        as: "style"
    } : {...c, rel: "prefetch"}))
}

function bp(l, i, u, s, c, f) {
    let d = (v, h) => u[h] ? v.route.id !== u[h].route.id : !0,
        p = (v, h) => u[h].pathname !== v.pathname || u[h].route.path?.endsWith("*") && u[h].params["*"] !== v.params["*"];
    return f === "assets" ? i.filter((v, h) => d(v, h) || p(v, h)) : f === "data" ? i.filter((v, h) => {
        let g = s.routes[v.route.id];
        if (!g || !g.hasLoader) return !1;
        if (d(v, h) || p(v, h)) return !0;
        if (v.route.shouldRevalidate) {
            let b = v.route.shouldRevalidate({
                currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
                currentParams: u[0]?.params || {},
                nextUrl: new URL(l, window.origin),
                nextParams: v.params,
                defaultShouldRevalidate: !0
            });
            if (typeof b == "boolean") return b
        }
        return !0
    }) : []
}

function jb(l, i, {includeHydrateFallback: u} = {}) {
    return Ub(l.map(s => {
        let c = i.routes[s.route.id];
        if (!c) return [];
        let f = [c.module];
        return c.clientActionModule && (f = f.concat(c.clientActionModule)), c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)), u && c.hydrateFallbackModule && (f = f.concat(c.hydrateFallbackModule)), c.imports && (f = f.concat(c.imports)), f
    }).flat(1))
}

function Ub(l) {
    return [...new Set(l)]
}

function Db(l) {
    let i = {}, u = Object.keys(l).sort();
    for (let s of u) i[s] = l[s];
    return i
}

function Mb(l, i) {
    let u = new Set;
    return new Set(i), l.reduce((s, c) => {
        let f = JSON.stringify(Db(c));
        return u.has(f) || (u.add(f), s.push({key: f, link: c})), s
    }, [])
}

function s1() {
    let l = H.useContext(rl);
    return ef(l, "You must render this element inside a <DataRouterContext.Provider> element"), l
}

function Hb() {
    let l = H.useContext(as);
    return ef(l, "You must render this element inside a <DataRouterStateContext.Provider> element"), l
}

var tf = H.createContext(void 0);
tf.displayName = "FrameworkContext";

function u1() {
    let l = H.useContext(tf);
    return ef(l, "You must render this element inside a <HydratedRouter> element"), l
}

function Lb(l, i) {
    let u = H.useContext(tf), [s, c] = H.useState(!1), [f, d] = H.useState(!1), {
        onFocus: p,
        onBlur: v,
        onMouseEnter: h,
        onMouseLeave: g,
        onTouchStart: b
    } = i, _ = H.useRef(null);
    H.useEffect(() => {
        if (l === "render" && d(!0), l === "viewport") {
            let w = Y => {
                Y.forEach(C => {
                    d(C.isIntersecting)
                })
            }, N = new IntersectionObserver(w, {threshold: .5});
            return _.current && N.observe(_.current), () => {
                N.disconnect()
            }
        }
    }, [l]), H.useEffect(() => {
        if (s) {
            let w = setTimeout(() => {
                d(!0)
            }, 100);
            return () => {
                clearTimeout(w)
            }
        }
    }, [s]);
    let j = () => {
        c(!0)
    }, x = () => {
        c(!1), d(!1)
    };
    return u ? l !== "intent" ? [f, _, {}] : [f, _, {
        onFocus: ci(p, j),
        onBlur: ci(v, x),
        onMouseEnter: ci(h, j),
        onMouseLeave: ci(g, x),
        onTouchStart: ci(b, j)
    }] : [!1, _, {}]
}

function ci(l, i) {
    return u => {
        l && l(u), u.defaultPrevented || i(u)
    }
}

function Bb({page: l, ...i}) {
    let {router: u} = s1(), s = H.useMemo(() => K0(u.routes, l, u.basename), [u.routes, l, u.basename]);
    return s ? H.createElement(qb, {page: l, matches: s, ...i}) : null
}

function zb(l) {
    let {manifest: i, routeModules: u} = u1(), [s, c] = H.useState([]);
    return H.useEffect(() => {
        let f = !1;
        return Nb(l, i, u).then(d => {
            f || c(d)
        }), () => {
            f = !0
        }
    }, [l, i, u]), s
}

function qb({page: l, matches: i, ...u}) {
    let s = ga(), {manifest: c, routeModules: f} = u1(), {basename: d} = s1(), {loaderData: p, matches: v} = Hb(),
        h = H.useMemo(() => bp(l, i, v, c, s, "data"), [l, i, v, c, s]),
        g = H.useMemo(() => bp(l, i, v, c, s, "assets"), [l, i, v, c, s]), b = H.useMemo(() => {
            if (l === s.pathname + s.search + s.hash) return [];
            let x = new Set, w = !1;
            if (i.forEach(Y => {
                let C = c.routes[Y.route.id];
                !C || !C.hasLoader || (!h.some(z => z.route.id === Y.route.id) && Y.route.id in p && f[Y.route.id]?.shouldRevalidate || C.hasClientLoader ? w = !0 : x.add(Y.route.id))
            }), x.size === 0) return [];
            let N = wb(l, d, "data");
            return w && x.size > 0 && N.searchParams.set("_routes", i.filter(Y => x.has(Y.route.id)).map(Y => Y.route.id).join(",")), [N.pathname + N.search]
        }, [d, p, s, c, h, i, l, f]), _ = H.useMemo(() => jb(g, c), [g, c]), j = zb(g);
    return H.createElement(H.Fragment, null, b.map(x => H.createElement("link", {
        key: x,
        rel: "prefetch",
        as: "fetch",
        href: x, ...u
    })), _.map(x => H.createElement("link", {key: x, rel: "modulepreload", href: x, ...u})), j.map(({
                                                                                                        key: x,
                                                                                                        link: w
                                                                                                    }) => H.createElement("link", {
        key: x,
        nonce: u.nonce, ...w
    })))
}

function kb(...l) {
    return i => {
        l.forEach(u => {
            typeof u == "function" ? u(i) : u != null && (u.current = i)
        })
    }
}

var o1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    o1 && (window.__reactRouterVersion = "7.9.1")
} catch {
}

function Vb({basename: l, children: i, window: u}) {
    let s = H.useRef();
    s.current == null && (s.current = Oy({window: u, v5Compat: !0}));
    let c = s.current, [f, d] = H.useState({action: c.action, location: c.location}), p = H.useCallback(v => {
        H.startTransition(() => d(v))
    }, [d]);
    return H.useLayoutEffect(() => c.listen(p), [c, p]), H.createElement(vb, {
        basename: l,
        children: i,
        location: f.location,
        navigationType: f.action,
        navigator: c
    })
}

var c1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, nf = H.forwardRef(function ({
                                                                          onClick: i,
                                                                          discover: u = "render",
                                                                          prefetch: s = "none",
                                                                          relative: c,
                                                                          reloadDocument: f,
                                                                          replace: d,
                                                                          state: p,
                                                                          target: v,
                                                                          to: h,
                                                                          preventScrollReset: g,
                                                                          viewTransition: b,
                                                                          ..._
                                                                      }, j) {
    let {basename: x} = H.useContext(Pt), w = typeof h == "string" && c1.test(h), N, Y = !1;
    if (typeof h == "string" && w && (N = h, o1)) try {
        let G = new URL(window.location.href), F = h.startsWith("//") ? new URL(G.protocol + h) : new URL(h),
            te = yn(F.pathname, x);
        F.origin === G.origin && te != null ? h = te + F.search + F.hash : Y = !0
    } catch {
        Wt(!1, `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
    }
    let C = nb(h, {relative: c}), [z, M, D] = Lb(s, _),
        J = Qb(h, {replace: d, state: p, target: v, preventScrollReset: g, relative: c, viewTransition: b});

    function O(G) {
        i && i(G), G.defaultPrevented || J(G)
    }

    let R = H.createElement("a", {
        ..._, ...D,
        href: N || C,
        onClick: Y || f ? i : O,
        ref: kb(j, M),
        target: v,
        "data-discover": !w && u === "render" ? "true" : void 0
    });
    return z && !w ? H.createElement(H.Fragment, null, R, H.createElement(Bb, {page: C})) : R
});
nf.displayName = "Link";
var Xb = H.forwardRef(function ({
                                    "aria-current": i = "page",
                                    caseSensitive: u = !1,
                                    className: s = "",
                                    end: c = !1,
                                    style: f,
                                    to: d,
                                    viewTransition: p,
                                    children: v,
                                    ...h
                                }, g) {
    let b = vi(d, {relative: h.relative}), _ = ga(), j = H.useContext(as), {
            navigator: x,
            basename: w
        } = H.useContext(Pt), N = j != null && Kb(b) && p === !0,
        Y = x.encodeLocation ? x.encodeLocation(b).pathname : b.pathname, C = _.pathname,
        z = j && j.navigation && j.navigation.location ? j.navigation.location.pathname : null;
    u || (C = C.toLowerCase(), z = z ? z.toLowerCase() : null, Y = Y.toLowerCase()), z && w && (z = yn(z, w) || z);
    const M = Y !== "/" && Y.endsWith("/") ? Y.length - 1 : Y.length;
    let D = C === Y || !c && C.startsWith(Y) && C.charAt(M) === "/",
        J = z != null && (z === Y || !c && z.startsWith(Y) && z.charAt(Y.length) === "/"),
        O = {isActive: D, isPending: J, isTransitioning: N}, R = D ? i : void 0, G;
    typeof s == "function" ? G = s(O) : G = [s, D ? "active" : null, J ? "pending" : null, N ? "transitioning" : null].filter(Boolean).join(" ");
    let F = typeof f == "function" ? f(O) : f;
    return H.createElement(nf, {
        ...h,
        "aria-current": R,
        className: G,
        ref: g,
        style: F,
        to: d,
        viewTransition: p
    }, typeof v == "function" ? v(O) : v)
});
Xb.displayName = "NavLink";
var Gb = H.forwardRef(({
                           discover: l = "render",
                           fetcherKey: i,
                           navigate: u,
                           reloadDocument: s,
                           replace: c,
                           state: f,
                           method: d = $r,
                           action: p,
                           onSubmit: v,
                           relative: h,
                           preventScrollReset: g,
                           viewTransition: b,
                           ..._
                       }, j) => {
    let x = Jb(), w = $b(p, {relative: h}), N = d.toLowerCase() === "get" ? "get" : "post",
        Y = typeof p == "string" && c1.test(p), C = z => {
            if (v && v(z), z.defaultPrevented) return;
            z.preventDefault();
            let M = z.nativeEvent.submitter, D = M?.getAttribute("formmethod") || d;
            x(M || z.currentTarget, {
                fetcherKey: i,
                method: D,
                navigate: u,
                replace: c,
                state: f,
                relative: h,
                preventScrollReset: g,
                viewTransition: b
            })
        };
    return H.createElement("form", {
        ref: j,
        method: N,
        action: w,
        onSubmit: s ? v : C, ..._,
        "data-discover": !Y && l === "render" ? "true" : void 0
    })
});
Gb.displayName = "Form";

function Yb(l) {
    return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function f1(l) {
    let i = H.useContext(rl);
    return Le(i, Yb(l)), i
}

function Qb(l, {target: i, replace: u, state: s, preventScrollReset: c, relative: f, viewTransition: d} = {}) {
    let p = en(), v = ga(), h = vi(l, {relative: f});
    return H.useCallback(g => {
        if (Tb(g, i)) {
            g.preventDefault();
            let b = u !== void 0 ? u : hi(v) === hi(h);
            p(l, {replace: b, state: s, preventScrollReset: c, relative: f, viewTransition: d})
        }
    }, [v, p, h, u, s, i, l, c, f, d])
}

var Zb = 0, Ib = () => `__${String(++Zb)}__`;

function Jb() {
    let {router: l} = f1("useSubmit"), {basename: i} = H.useContext(Pt), u = hb();
    return H.useCallback(async (s, c = {}) => {
        let {action: f, method: d, encType: p, formData: v, body: h} = Cb(s, i);
        if (c.navigate === !1) {
            let g = c.fetcherKey || Ib();
            await l.fetch(g, u, c.action || f, {
                preventScrollReset: c.preventScrollReset,
                formData: v,
                body: h,
                formMethod: c.method || d,
                formEncType: c.encType || p,
                flushSync: c.flushSync
            })
        } else await l.navigate(c.action || f, {
            preventScrollReset: c.preventScrollReset,
            formData: v,
            body: h,
            formMethod: c.method || d,
            formEncType: c.encType || p,
            replace: c.replace,
            state: c.state,
            fromRouteId: u,
            flushSync: c.flushSync,
            viewTransition: c.viewTransition
        })
    }, [l, i, u])
}

function $b(l, {relative: i} = {}) {
    let {basename: u} = H.useContext(Pt), s = H.useContext(bn);
    Le(s, "useFormAction must be used inside a RouteContext");
    let [c] = s.matches.slice(-1), f = {...vi(l || ".", {relative: i})}, d = ga();
    if (l == null) {
        f.search = d.search;
        let p = new URLSearchParams(f.search), v = p.getAll("index");
        if (v.some(g => g === "")) {
            p.delete("index"), v.filter(b => b).forEach(b => p.append("index", b));
            let g = p.toString();
            f.search = g ? `?${g}` : ""
        }
    }
    return (!l || l === ".") && c.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), u !== "/" && (f.pathname = f.pathname === "/" ? u : vn([u, f.pathname])), hi(f)
}

function Kb(l, {relative: i} = {}) {
    let u = H.useContext(n1);
    Le(u != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: s} = f1("useViewTransitionState"), c = vi(l, {relative: i});
    if (!u.isTransitioning) return !1;
    let f = yn(u.currentLocation.pathname, s) || u.currentLocation.pathname,
        d = yn(u.nextLocation.pathname, s) || u.nextLocation.pathname;
    return es(c.pathname, d) != null || es(c.pathname, f) != null
}

const d1 = (l, i, u = 7) => {
    const s = new Date;
    s.setTime(s.getTime() + u * 24 * 60 * 60 * 1e3), document.cookie = `${l}=${i};expires=${s.toUTCString()};path=/;SameSite=Lax`
}, Fb = l => {
    const u = `; ${document.cookie}`.split(`; ${l}=`);
    return u.length === 2 ? u.pop().split(";").shift() : null
}, Sp = l => {
    document.cookie = `${l}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`
}, Wb = l => {
    d1("accessToken", l, 7)
}, Xt = () => Fb("accessToken"), Pb = l => {
    d1("refreshToken", l, 30)
}, h1 = () => {
    Sp("accessToken"), Sp("refreshToken"), localStorage.removeItem("accessToken"), localStorage.removeItem("refreshToken"), localStorage.removeItem("token"), localStorage.removeItem("myUserId"), localStorage.removeItem("accessTokenExpiresIn"), localStorage.removeItem("refreshTokenExpiresIn")
};

function af() {
    return S.jsxs("svg", {
        width: "216",
        height: "216",
        viewBox: "0 0 216 216",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [S.jsx("path", {
            d: "M0 34.964C0 15.6539 15.6539 0 34.964 0H181.036C200.346 0 216 15.6539 216 34.964V181.036C216 200.346 200.346 216 181.036 216H34.964C15.6539 216 0 200.346 0 181.036V34.964Z",
            fill: "url(#paint0_linear_122_454)"
        }), S.jsx("path", {
            d: "M58.7914 171.194C54.5002 171.194 51.0216 167.716 51.0216 163.424V52.5755C51.0216 48.2844 54.5002 44.8058 58.7914 44.8058H77.5375C81.8286 44.8058 85.3073 48.2844 85.3073 52.5755V86.4065C85.3073 90.6976 88.7859 94.1763 93.0771 94.1763H122.923C127.214 94.1763 130.693 90.6976 130.693 86.4065V52.5755C130.693 48.2844 134.171 44.8058 138.462 44.8058H157.209C161.5 44.8058 164.978 48.2844 164.978 52.5755V163.424C164.978 167.716 161.5 171.194 157.209 171.194H138.462C134.171 171.194 130.693 167.716 130.693 163.424V129.594C130.693 125.302 127.214 121.824 122.923 121.824H93.0771C88.7859 121.824 85.3073 125.302 85.3073 129.594V163.424C85.3073 167.716 81.8286 171.194 77.5375 171.194H58.7914Z",
            fill: "white"
        }), S.jsx("defs", {
            children: S.jsxs("linearGradient", {
                id: "paint0_linear_122_454",
                x1: "108",
                y1: "0",
                x2: "108",
                y2: "216",
                gradientUnits: "userSpaceOnUse",
                children: [S.jsx("stop", {stopColor: "#FF649B"}), S.jsx("stop", {offset: "1", stopColor: "#FF9CB9"})]
            })
        })]
    })
}

function e3() {
    return S.jsxs("svg", {
        className: "idIcon",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [S.jsx("path", {
            d: "M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z",
            stroke: "#D6D6D7",
            strokeWidth: "1.5"
        }), S.jsx("path", {
            d: "M20 17.5C20 19.985 20 22 12 22C4 22 4 19.985 4 17.5C4 15.015 7.582 13 12 13C16.418 13 20 15.015 20 17.5Z",
            stroke: "#D6D6D7",
            strokeWidth: "1.5"
        })]
    })
}

function t3() {
    return S.jsx("svg", {
        className: "pwIcon",
        width: "18",
        height: "21",
        viewBox: "0 0 18 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        focusable: "false",
        children: S.jsx("path", {
            d: "M9 13.1389V15.25M4 8.41929C4.47142 8.38889 5.05259 8.38889 5.8 8.38889H12.2C12.9474 8.38889 13.5286 8.38889 14 8.41929M4 8.41929C3.41168 8.45718 2.99429 8.54247 2.63803 8.73406C2.07354 9.03763 1.6146 9.52203 1.32698 10.1179C1 10.7953 1 11.682 1 13.4556V14.9333C1 16.7069 1 17.5935 1.32698 18.271C1.6146 18.8669 2.07354 19.3513 2.63803 19.6548C3.27976 20 4.11984 20 5.8 20H12.2C13.8802 20 14.7202 20 15.362 19.6548C15.9265 19.3513 16.3854 18.8669 16.673 18.271C17 17.5935 17 16.7069 17 14.9333V13.4556C17 11.682 17 10.7953 16.673 10.1179C16.3854 9.52203 15.9265 9.03763 15.362 8.73406C15.0057 8.54247 14.5883 8.45718 14 8.41929M4 8.41929V6.27778C4 3.36295 6.23858 1 9 1C11.7614 1 14 3.36295 14 6.27778V8.41929",
            stroke: "#D6D6D7",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    })
}

function Gc() {
    return S.jsx("svg", {
        className: "eyeSvg",
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: S.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20 25.8C24.034 25.8 27.686 23.55 29.648 20C27.686 16.45 24.034 14.2 20 14.2C15.966 14.2 12.314 16.45 10.352 20C12.314 23.55 15.966 25.8 20 25.8ZM20 13C24.808 13 28.972 15.848 31 20C28.972 24.152 24.808 27 20 27C15.192 27 11.028 24.152 9 20C11.028 15.848 15.192 13 20 13ZM20 22.8C20.7426 22.8 21.4548 22.505 21.9799 21.9799C22.505 21.4548 22.8 20.7426 22.8 20C22.8 19.2574 22.505 18.5452 21.9799 18.0201C21.4548 17.495 20.7426 17.2 20 17.2C19.2574 17.2 18.5452 17.495 18.0201 18.0201C17.495 18.5452 17.2 19.2574 17.2 20C17.2 20.7426 17.495 21.4548 18.0201 21.9799C18.5452 22.505 19.2574 22.8 20 22.8ZM20 24C18.9391 24 17.9217 23.5786 17.1716 22.8284C16.4214 22.0783 16 21.0609 16 20C16 18.9391 16.4214 17.9217 17.1716 17.1716C17.9217 16.4214 18.9391 16 20 16C21.0609 16 22.0783 16.4214 22.8284 17.1716C23.5786 17.9217 24 18.9391 24 20C24 21.0609 23.5786 22.0783 22.8284 22.8284C22.0783 23.5786 21.0609 24 20 24Z",
            fill: "#858486"
        })
    })
}

function Yc() {
    return S.jsx("svg", {
        className: "eyeSvg",
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: S.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M26.67 24.9762L29.425 27.7318L28.576 28.58L11.85 11.8502L12.697 11L15.552 13.8556C16.932 13.3035 18.432 13.0005 20 13.0005C24.808 13.0005 28.972 15.8491 31 20.002C30.0217 22.0138 28.5276 23.7302 26.67 24.9762ZM16.486 14.7909L18.15 16.4552C18.9049 16.0605 19.7662 15.9171 20.6082 16.046C21.4503 16.1749 22.2292 16.5693 22.8316 17.1718C23.434 17.7743 23.8283 18.5534 23.9572 19.3957C24.086 20.2379 23.9427 21.0994 23.548 21.8545L25.803 24.11C27.377 23.1098 28.707 21.7064 29.648 20.003C27.686 16.4512 24.034 14.2007 20 14.2007C18.8041 14.2015 17.6166 14.4009 16.486 14.7909ZM22.638 20.9443C22.8164 20.4449 22.8495 19.905 22.7332 19.3876C22.6169 18.8702 22.3562 18.3964 21.9812 18.0214C21.6063 17.6464 21.1326 17.3855 20.6153 17.2692C20.098 17.1529 19.5583 17.186 19.059 17.3644L22.638 20.9443ZM24.448 26.1494C23.068 26.7016 21.568 27.0046 20 27.0046C15.192 27.0046 11.028 24.156 9 20.003C9.97832 17.9913 11.4724 16.2749 13.33 15.0289L14.197 15.8961C12.5915 16.9207 11.2693 18.3327 10.352 20.002C12.314 23.5529 15.966 25.8034 20 25.8034C21.1959 25.8026 22.3834 25.6032 23.514 25.2132L24.448 26.1494ZM16.453 18.1516L17.362 19.0618C17.1836 19.5612 17.1505 20.1011 17.2668 20.6185C17.3831 21.1359 17.6438 21.6097 18.0188 21.9847C18.3937 22.3597 18.8674 22.6206 19.3847 22.7369C19.902 22.8532 20.4417 22.8201 20.941 22.6416L21.851 23.5499C21.0961 23.9446 20.2348 24.088 19.3928 23.9591C18.5507 23.8302 17.7718 23.4358 17.1694 22.8333C16.567 22.2308 16.1727 21.4517 16.0438 20.6094C15.915 19.7671 16.0583 18.9067 16.453 18.1516Z",
            fill: "#858486"
        })
    })
}

function m1(l, i) {
    return function () {
        return l.apply(i, arguments)
    }
}

const {toString: n3} = Object.prototype, {getPrototypeOf: lf} = Object, {iterator: is, toStringTag: p1} = Symbol,
    rs = (l => i => {
        const u = n3.call(i);
        return l[u] || (l[u] = u.slice(8, -1).toLowerCase())
    })(Object.create(null)), Gt = l => (l = l.toLowerCase(), i => rs(i) === l),
    ss = l => i => typeof i === l, {isArray: sl} = Array, ll = ss("undefined");

function yi(l) {
    return l !== null && !ll(l) && l.constructor !== null && !ll(l.constructor) && ht(l.constructor.isBuffer) && l.constructor.isBuffer(l)
}

const g1 = Gt("ArrayBuffer");

function a3(l) {
    let i;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(l) : i = l && l.buffer && g1(l.buffer), i
}

const l3 = ss("string"), ht = ss("function"), v1 = ss("number"), bi = l => l !== null && typeof l == "object",
    i3 = l => l === !0 || l === !1, Fr = l => {
        if (rs(l) !== "object") return !1;
        const i = lf(l);
        return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(p1 in l) && !(is in l)
    }, r3 = l => {
        if (!bi(l) || yi(l)) return !1;
        try {
            return Object.keys(l).length === 0 && Object.getPrototypeOf(l) === Object.prototype
        } catch {
            return !1
        }
    }, s3 = Gt("Date"), u3 = Gt("File"), o3 = Gt("Blob"), c3 = Gt("FileList"), f3 = l => bi(l) && ht(l.pipe), d3 = l => {
        let i;
        return l && (typeof FormData == "function" && l instanceof FormData || ht(l.append) && ((i = rs(l)) === "formdata" || i === "object" && ht(l.toString) && l.toString() === "[object FormData]"))
    }, h3 = Gt("URLSearchParams"), [m3, p3, g3, v3] = ["ReadableStream", "Request", "Response", "Headers"].map(Gt),
    y3 = l => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Si(l, i, {allOwnKeys: u = !1} = {}) {
    if (l === null || typeof l > "u") return;
    let s, c;
    if (typeof l != "object" && (l = [l]), sl(l)) for (s = 0, c = l.length; s < c; s++) i.call(null, l[s], s, l); else {
        if (yi(l)) return;
        const f = u ? Object.getOwnPropertyNames(l) : Object.keys(l), d = f.length;
        let p;
        for (s = 0; s < d; s++) p = f[s], i.call(null, l[p], p, l)
    }
}

function y1(l, i) {
    if (yi(l)) return null;
    i = i.toLowerCase();
    const u = Object.keys(l);
    let s = u.length, c;
    for (; s-- > 0;) if (c = u[s], i === c.toLowerCase()) return c;
    return null
}

const ha = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : globalThis,
    b1 = l => !ll(l) && l !== ha;

function Qc() {
    const {caseless: l, skipUndefined: i} = b1(this) && this || {}, u = {}, s = (c, f) => {
        const d = l && y1(u, f) || f;
        Fr(u[d]) && Fr(c) ? u[d] = Qc(u[d], c) : Fr(c) ? u[d] = Qc({}, c) : sl(c) ? u[d] = c.slice() : (!i || !ll(c)) && (u[d] = c)
    };
    for (let c = 0, f = arguments.length; c < f; c++) arguments[c] && Si(arguments[c], s);
    return u
}

const b3 = (l, i, u, {allOwnKeys: s} = {}) => (Si(i, (c, f) => {
    u && ht(c) ? l[f] = m1(c, u) : l[f] = c
}, {allOwnKeys: s}), l), S3 = l => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l), _3 = (l, i, u, s) => {
    l.prototype = Object.create(i.prototype, s), l.prototype.constructor = l, Object.defineProperty(l, "super", {value: i.prototype}), u && Object.assign(l.prototype, u)
}, E3 = (l, i, u, s) => {
    let c, f, d;
    const p = {};
    if (i = i || {}, l == null) return i;
    do {
        for (c = Object.getOwnPropertyNames(l), f = c.length; f-- > 0;) d = c[f], (!s || s(d, l, i)) && !p[d] && (i[d] = l[d], p[d] = !0);
        l = u !== !1 && lf(l)
    } while (l && (!u || u(l, i)) && l !== Object.prototype);
    return i
}, T3 = (l, i, u) => {
    l = String(l), (u === void 0 || u > l.length) && (u = l.length), u -= i.length;
    const s = l.indexOf(i, u);
    return s !== -1 && s === u
}, x3 = l => {
    if (!l) return null;
    if (sl(l)) return l;
    let i = l.length;
    if (!v1(i)) return null;
    const u = new Array(i);
    for (; i-- > 0;) u[i] = l[i];
    return u
}, R3 = (l => i => l && i instanceof l)(typeof Uint8Array < "u" && lf(Uint8Array)), C3 = (l, i) => {
    const s = (l && l[is]).call(l);
    let c;
    for (; (c = s.next()) && !c.done;) {
        const f = c.value;
        i.call(l, f[0], f[1])
    }
}, w3 = (l, i) => {
    let u;
    const s = [];
    for (; (u = l.exec(i)) !== null;) s.push(u);
    return s
}, A3 = Gt("HTMLFormElement"), O3 = l => l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (u, s, c) {
    return s.toUpperCase() + c
}), _p = (({hasOwnProperty: l}) => (i, u) => l.call(i, u))(Object.prototype), N3 = Gt("RegExp"), S1 = (l, i) => {
    const u = Object.getOwnPropertyDescriptors(l), s = {};
    Si(u, (c, f) => {
        let d;
        (d = i(c, f, l)) !== !1 && (s[f] = d || c)
    }), Object.defineProperties(l, s)
}, j3 = l => {
    S1(l, (i, u) => {
        if (ht(l) && ["arguments", "caller", "callee"].indexOf(u) !== -1) return !1;
        const s = l[u];
        if (ht(s)) {
            if (i.enumerable = !1, "writable" in i) {
                i.writable = !1;
                return
            }
            i.set || (i.set = () => {
                throw Error("Can not rewrite read-only method '" + u + "'")
            })
        }
    })
}, U3 = (l, i) => {
    const u = {}, s = c => {
        c.forEach(f => {
            u[f] = !0
        })
    };
    return sl(l) ? s(l) : s(String(l).split(i)), u
}, D3 = () => {
}, M3 = (l, i) => l != null && Number.isFinite(l = +l) ? l : i;

function H3(l) {
    return !!(l && ht(l.append) && l[p1] === "FormData" && l[is])
}

const L3 = l => {
        const i = new Array(10), u = (s, c) => {
            if (bi(s)) {
                if (i.indexOf(s) >= 0) return;
                if (yi(s)) return s;
                if (!("toJSON" in s)) {
                    i[c] = s;
                    const f = sl(s) ? [] : {};
                    return Si(s, (d, p) => {
                        const v = u(d, c + 1);
                        !ll(v) && (f[p] = v)
                    }), i[c] = void 0, f
                }
            }
            return s
        };
        return u(l, 0)
    }, B3 = Gt("AsyncFunction"), z3 = l => l && (bi(l) || ht(l)) && ht(l.then) && ht(l.catch),
    _1 = ((l, i) => l ? setImmediate : i ? ((u, s) => (ha.addEventListener("message", ({source: c, data: f}) => {
        c === ha && f === u && s.length && s.shift()()
    }, !1), c => {
        s.push(c), ha.postMessage(u, "*")
    }))(`axios@${Math.random()}`, []) : u => setTimeout(u))(typeof setImmediate == "function", ht(ha.postMessage)),
    q3 = typeof queueMicrotask < "u" ? queueMicrotask.bind(ha) : typeof process < "u" && process.nextTick || _1,
    k3 = l => l != null && ht(l[is]), V = {
        isArray: sl,
        isArrayBuffer: g1,
        isBuffer: yi,
        isFormData: d3,
        isArrayBufferView: a3,
        isString: l3,
        isNumber: v1,
        isBoolean: i3,
        isObject: bi,
        isPlainObject: Fr,
        isEmptyObject: r3,
        isReadableStream: m3,
        isRequest: p3,
        isResponse: g3,
        isHeaders: v3,
        isUndefined: ll,
        isDate: s3,
        isFile: u3,
        isBlob: o3,
        isRegExp: N3,
        isFunction: ht,
        isStream: f3,
        isURLSearchParams: h3,
        isTypedArray: R3,
        isFileList: c3,
        forEach: Si,
        merge: Qc,
        extend: b3,
        trim: y3,
        stripBOM: S3,
        inherits: _3,
        toFlatObject: E3,
        kindOf: rs,
        kindOfTest: Gt,
        endsWith: T3,
        toArray: x3,
        forEachEntry: C3,
        matchAll: w3,
        isHTMLForm: A3,
        hasOwnProperty: _p,
        hasOwnProp: _p,
        reduceDescriptors: S1,
        freezeMethods: j3,
        toObjectSet: U3,
        toCamelCase: O3,
        noop: D3,
        toFiniteNumber: M3,
        findKey: y1,
        global: ha,
        isContextDefined: b1,
        isSpecCompliantForm: H3,
        toJSONObject: L3,
        isAsyncFn: B3,
        isThenable: z3,
        setImmediate: _1,
        asap: q3,
        isIterable: k3
    };

function de(l, i, u, s, c) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", i && (this.code = i), u && (this.config = u), s && (this.request = s), c && (this.response = c, this.status = c.status ? c.status : null)
}

V.inherits(de, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: V.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const E1 = de.prototype, T1 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(l => {
    T1[l] = {value: l}
});
Object.defineProperties(de, T1);
Object.defineProperty(E1, "isAxiosError", {value: !0});
de.from = (l, i, u, s, c, f) => {
    const d = Object.create(E1);
    V.toFlatObject(l, d, function (g) {
        return g !== Error.prototype
    }, h => h !== "isAxiosError");
    const p = l && l.message ? l.message : "Error", v = i == null && l ? l.code : i;
    return de.call(d, p, v, u, s, c), l && d.cause == null && Object.defineProperty(d, "cause", {
        value: l,
        configurable: !0
    }), d.name = l && l.name || "Error", f && Object.assign(d, f), d
};
const V3 = null;

function Zc(l) {
    return V.isPlainObject(l) || V.isArray(l)
}

function x1(l) {
    return V.endsWith(l, "[]") ? l.slice(0, -2) : l
}

function Ep(l, i, u) {
    return l ? l.concat(i).map(function (c, f) {
        return c = x1(c), !u && f ? "[" + c + "]" : c
    }).join(u ? "." : "") : i
}

function X3(l) {
    return V.isArray(l) && !l.some(Zc)
}

const G3 = V.toFlatObject(V, {}, null, function (i) {
    return /^is[A-Z]/.test(i)
});

function us(l, i, u) {
    if (!V.isObject(l)) throw new TypeError("target must be an object");
    i = i || new FormData, u = V.toFlatObject(u, {metaTokens: !0, dots: !1, indexes: !1}, !1, function (w, N) {
        return !V.isUndefined(N[w])
    });
    const s = u.metaTokens, c = u.visitor || g, f = u.dots, d = u.indexes,
        v = (u.Blob || typeof Blob < "u" && Blob) && V.isSpecCompliantForm(i);
    if (!V.isFunction(c)) throw new TypeError("visitor must be a function");

    function h(x) {
        if (x === null) return "";
        if (V.isDate(x)) return x.toISOString();
        if (V.isBoolean(x)) return x.toString();
        if (!v && V.isBlob(x)) throw new de("Blob is not supported. Use a Buffer instead.");
        return V.isArrayBuffer(x) || V.isTypedArray(x) ? v && typeof Blob == "function" ? new Blob([x]) : Buffer.from(x) : x
    }

    function g(x, w, N) {
        let Y = x;
        if (x && !N && typeof x == "object") {
            if (V.endsWith(w, "{}")) w = s ? w : w.slice(0, -2), x = JSON.stringify(x); else if (V.isArray(x) && X3(x) || (V.isFileList(x) || V.endsWith(w, "[]")) && (Y = V.toArray(x))) return w = x1(w), Y.forEach(function (z, M) {
                !(V.isUndefined(z) || z === null) && i.append(d === !0 ? Ep([w], M, f) : d === null ? w : w + "[]", h(z))
            }), !1
        }
        return Zc(x) ? !0 : (i.append(Ep(N, w, f), h(x)), !1)
    }

    const b = [], _ = Object.assign(G3, {defaultVisitor: g, convertValue: h, isVisitable: Zc});

    function j(x, w) {
        if (!V.isUndefined(x)) {
            if (b.indexOf(x) !== -1) throw Error("Circular reference detected in " + w.join("."));
            b.push(x), V.forEach(x, function (Y, C) {
                (!(V.isUndefined(Y) || Y === null) && c.call(i, Y, V.isString(C) ? C.trim() : C, w, _)) === !0 && j(Y, w ? w.concat(C) : [C])
            }), b.pop()
        }
    }

    if (!V.isObject(l)) throw new TypeError("data must be an object");
    return j(l), i
}

function Tp(l) {
    const i = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0"};
    return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g, function (s) {
        return i[s]
    })
}

function rf(l, i) {
    this._pairs = [], l && us(l, this, i)
}

const R1 = rf.prototype;
R1.append = function (i, u) {
    this._pairs.push([i, u])
};
R1.toString = function (i) {
    const u = i ? function (s) {
        return i.call(this, s, Tp)
    } : Tp;
    return this._pairs.map(function (c) {
        return u(c[0]) + "=" + u(c[1])
    }, "").join("&")
};

function Y3(l) {
    return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}

function C1(l, i, u) {
    if (!i) return l;
    const s = u && u.encode || Y3;
    V.isFunction(u) && (u = {serialize: u});
    const c = u && u.serialize;
    let f;
    if (c ? f = c(i, u) : f = V.isURLSearchParams(i) ? i.toString() : new rf(i, u).toString(s), f) {
        const d = l.indexOf("#");
        d !== -1 && (l = l.slice(0, d)), l += (l.indexOf("?") === -1 ? "?" : "&") + f
    }
    return l
}

class xp {
    constructor() {
        this.handlers = []
    }

    use(i, u, s) {
        return this.handlers.push({
            fulfilled: i,
            rejected: u,
            synchronous: s ? s.synchronous : !1,
            runWhen: s ? s.runWhen : null
        }), this.handlers.length - 1
    }

    eject(i) {
        this.handlers[i] && (this.handlers[i] = null)
    }

    clear() {
        this.handlers && (this.handlers = [])
    }

    forEach(i) {
        V.forEach(this.handlers, function (s) {
            s !== null && i(s)
        })
    }
}

const w1 = {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1},
    Q3 = typeof URLSearchParams < "u" ? URLSearchParams : rf, Z3 = typeof FormData < "u" ? FormData : null,
    I3 = typeof Blob < "u" ? Blob : null, J3 = {
        isBrowser: !0,
        classes: {URLSearchParams: Q3, FormData: Z3, Blob: I3},
        protocols: ["http", "https", "file", "blob", "url", "data"]
    }, sf = typeof window < "u" && typeof document < "u", Ic = typeof navigator == "object" && navigator || void 0,
    $3 = sf && (!Ic || ["ReactNative", "NativeScript", "NS"].indexOf(Ic.product) < 0),
    K3 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    F3 = sf && window.location.href || "http://localhost", W3 = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: sf,
        hasStandardBrowserEnv: $3,
        hasStandardBrowserWebWorkerEnv: K3,
        navigator: Ic,
        origin: F3
    }, Symbol.toStringTag, {value: "Module"})), nt = {...W3, ...J3};

function P3(l, i) {
    return us(l, new nt.classes.URLSearchParams, {
        visitor: function (u, s, c, f) {
            return nt.isNode && V.isBuffer(u) ? (this.append(s, u.toString("base64")), !1) : f.defaultVisitor.apply(this, arguments)
        }, ...i
    })
}

function eS(l) {
    return V.matchAll(/\w+|\[(\w*)]/g, l).map(i => i[0] === "[]" ? "" : i[1] || i[0])
}

function tS(l) {
    const i = {}, u = Object.keys(l);
    let s;
    const c = u.length;
    let f;
    for (s = 0; s < c; s++) f = u[s], i[f] = l[f];
    return i
}

function A1(l) {
    function i(u, s, c, f) {
        let d = u[f++];
        if (d === "__proto__") return !0;
        const p = Number.isFinite(+d), v = f >= u.length;
        return d = !d && V.isArray(c) ? c.length : d, v ? (V.hasOwnProp(c, d) ? c[d] = [c[d], s] : c[d] = s, !p) : ((!c[d] || !V.isObject(c[d])) && (c[d] = []), i(u, s, c[d], f) && V.isArray(c[d]) && (c[d] = tS(c[d])), !p)
    }

    if (V.isFormData(l) && V.isFunction(l.entries)) {
        const u = {};
        return V.forEachEntry(l, (s, c) => {
            i(eS(s), c, u, 0)
        }), u
    }
    return null
}

function nS(l, i, u) {
    if (V.isString(l)) try {
        return (i || JSON.parse)(l), V.trim(l)
    } catch (s) {
        if (s.name !== "SyntaxError") throw s
    }
    return (u || JSON.stringify)(l)
}

const _i = {
    transitional: w1,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function (i, u) {
        const s = u.getContentType() || "", c = s.indexOf("application/json") > -1, f = V.isObject(i);
        if (f && V.isHTMLForm(i) && (i = new FormData(i)), V.isFormData(i)) return c ? JSON.stringify(A1(i)) : i;
        if (V.isArrayBuffer(i) || V.isBuffer(i) || V.isStream(i) || V.isFile(i) || V.isBlob(i) || V.isReadableStream(i)) return i;
        if (V.isArrayBufferView(i)) return i.buffer;
        if (V.isURLSearchParams(i)) return u.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
        let p;
        if (f) {
            if (s.indexOf("application/x-www-form-urlencoded") > -1) return P3(i, this.formSerializer).toString();
            if ((p = V.isFileList(i)) || s.indexOf("multipart/form-data") > -1) {
                const v = this.env && this.env.FormData;
                return us(p ? {"files[]": i} : i, v && new v, this.formSerializer)
            }
        }
        return f || c ? (u.setContentType("application/json", !1), nS(i)) : i
    }],
    transformResponse: [function (i) {
        const u = this.transitional || _i.transitional, s = u && u.forcedJSONParsing, c = this.responseType === "json";
        if (V.isResponse(i) || V.isReadableStream(i)) return i;
        if (i && V.isString(i) && (s && !this.responseType || c)) {
            const d = !(u && u.silentJSONParsing) && c;
            try {
                return JSON.parse(i, this.parseReviver)
            } catch (p) {
                if (d) throw p.name === "SyntaxError" ? de.from(p, de.ERR_BAD_RESPONSE, this, null, this.response) : p
            }
        }
        return i
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {FormData: nt.classes.FormData, Blob: nt.classes.Blob},
    validateStatus: function (i) {
        return i >= 200 && i < 300
    },
    headers: {common: {Accept: "application/json, text/plain, */*", "Content-Type": void 0}}
};
V.forEach(["delete", "get", "head", "post", "put", "patch"], l => {
    _i.headers[l] = {}
});
const aS = V.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    lS = l => {
        const i = {};
        let u, s, c;
        return l && l.split(`
`).forEach(function (d) {
            c = d.indexOf(":"), u = d.substring(0, c).trim().toLowerCase(), s = d.substring(c + 1).trim(), !(!u || i[u] && aS[u]) && (u === "set-cookie" ? i[u] ? i[u].push(s) : i[u] = [s] : i[u] = i[u] ? i[u] + ", " + s : s)
        }), i
    }, Rp = Symbol("internals");

function fi(l) {
    return l && String(l).trim().toLowerCase()
}

function Wr(l) {
    return l === !1 || l == null ? l : V.isArray(l) ? l.map(Wr) : String(l)
}

function iS(l) {
    const i = Object.create(null), u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let s;
    for (; s = u.exec(l);) i[s[1]] = s[2];
    return i
}

const rS = l => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());

function zo(l, i, u, s, c) {
    if (V.isFunction(s)) return s.call(this, i, u);
    if (c && (i = u), !!V.isString(i)) {
        if (V.isString(s)) return i.indexOf(s) !== -1;
        if (V.isRegExp(s)) return s.test(i)
    }
}

function sS(l) {
    return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, u, s) => u.toUpperCase() + s)
}

function uS(l, i) {
    const u = V.toCamelCase(" " + i);
    ["get", "set", "has"].forEach(s => {
        Object.defineProperty(l, s + u, {
            value: function (c, f, d) {
                return this[s].call(this, i, c, f, d)
            }, configurable: !0
        })
    })
}

let mt = class {
    constructor(i) {
        i && this.set(i)
    }

    set(i, u, s) {
        const c = this;

        function f(p, v, h) {
            const g = fi(v);
            if (!g) throw new Error("header name must be a non-empty string");
            const b = V.findKey(c, g);
            (!b || c[b] === void 0 || h === !0 || h === void 0 && c[b] !== !1) && (c[b || v] = Wr(p))
        }

        const d = (p, v) => V.forEach(p, (h, g) => f(h, g, v));
        if (V.isPlainObject(i) || i instanceof this.constructor) d(i, u); else if (V.isString(i) && (i = i.trim()) && !rS(i)) d(lS(i), u); else if (V.isObject(i) && V.isIterable(i)) {
            let p = {}, v, h;
            for (const g of i) {
                if (!V.isArray(g)) throw TypeError("Object iterator must return a key-value pair");
                p[h = g[0]] = (v = p[h]) ? V.isArray(v) ? [...v, g[1]] : [v, g[1]] : g[1]
            }
            d(p, u)
        } else i != null && f(u, i, s);
        return this
    }

    get(i, u) {
        if (i = fi(i), i) {
            const s = V.findKey(this, i);
            if (s) {
                const c = this[s];
                if (!u) return c;
                if (u === !0) return iS(c);
                if (V.isFunction(u)) return u.call(this, c, s);
                if (V.isRegExp(u)) return u.exec(c);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }

    has(i, u) {
        if (i = fi(i), i) {
            const s = V.findKey(this, i);
            return !!(s && this[s] !== void 0 && (!u || zo(this, this[s], s, u)))
        }
        return !1
    }

    delete(i, u) {
        const s = this;
        let c = !1;

        function f(d) {
            if (d = fi(d), d) {
                const p = V.findKey(s, d);
                p && (!u || zo(s, s[p], p, u)) && (delete s[p], c = !0)
            }
        }

        return V.isArray(i) ? i.forEach(f) : f(i), c
    }

    clear(i) {
        const u = Object.keys(this);
        let s = u.length, c = !1;
        for (; s--;) {
            const f = u[s];
            (!i || zo(this, this[f], f, i, !0)) && (delete this[f], c = !0)
        }
        return c
    }

    normalize(i) {
        const u = this, s = {};
        return V.forEach(this, (c, f) => {
            const d = V.findKey(s, f);
            if (d) {
                u[d] = Wr(c), delete u[f];
                return
            }
            const p = i ? sS(f) : String(f).trim();
            p !== f && delete u[f], u[p] = Wr(c), s[p] = !0
        }), this
    }

    concat(...i) {
        return this.constructor.concat(this, ...i)
    }

    toJSON(i) {
        const u = Object.create(null);
        return V.forEach(this, (s, c) => {
            s != null && s !== !1 && (u[c] = i && V.isArray(s) ? s.join(", ") : s)
        }), u
    }

    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }

    toString() {
        return Object.entries(this.toJSON()).map(([i, u]) => i + ": " + u).join(`
`)
    }

    getSetCookie() {
        return this.get("set-cookie") || []
    }

    get [Symbol.toStringTag]() {
        return "AxiosHeaders"
    }

    static from(i) {
        return i instanceof this ? i : new this(i)
    }

    static concat(i, ...u) {
        const s = new this(i);
        return u.forEach(c => s.set(c)), s
    }

    static accessor(i) {
        const s = (this[Rp] = this[Rp] = {accessors: {}}).accessors, c = this.prototype;

        function f(d) {
            const p = fi(d);
            s[p] || (uS(c, d), s[p] = !0)
        }

        return V.isArray(i) ? i.forEach(f) : f(i), this
    }
};
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
V.reduceDescriptors(mt.prototype, ({value: l}, i) => {
    let u = i[0].toUpperCase() + i.slice(1);
    return {
        get: () => l, set(s) {
            this[u] = s
        }
    }
});
V.freezeMethods(mt);

function qo(l, i) {
    const u = this || _i, s = i || u, c = mt.from(s.headers);
    let f = s.data;
    return V.forEach(l, function (p) {
        f = p.call(u, f, c.normalize(), i ? i.status : void 0)
    }), c.normalize(), f
}

function O1(l) {
    return !!(l && l.__CANCEL__)
}

function ul(l, i, u) {
    de.call(this, l ?? "canceled", de.ERR_CANCELED, i, u), this.name = "CanceledError"
}

V.inherits(ul, de, {__CANCEL__: !0});

function N1(l, i, u) {
    const s = u.config.validateStatus;
    !u.status || !s || s(u.status) ? l(u) : i(new de("Request failed with status code " + u.status, [de.ERR_BAD_REQUEST, de.ERR_BAD_RESPONSE][Math.floor(u.status / 100) - 4], u.config, u.request, u))
}

function oS(l) {
    const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l);
    return i && i[1] || ""
}

function cS(l, i) {
    l = l || 10;
    const u = new Array(l), s = new Array(l);
    let c = 0, f = 0, d;
    return i = i !== void 0 ? i : 1e3, function (v) {
        const h = Date.now(), g = s[f];
        d || (d = h), u[c] = v, s[c] = h;
        let b = f, _ = 0;
        for (; b !== c;) _ += u[b++], b = b % l;
        if (c = (c + 1) % l, c === f && (f = (f + 1) % l), h - d < i) return;
        const j = g && h - g;
        return j ? Math.round(_ * 1e3 / j) : void 0
    }
}

function fS(l, i) {
    let u = 0, s = 1e3 / i, c, f;
    const d = (h, g = Date.now()) => {
        u = g, c = null, f && (clearTimeout(f), f = null), l(...h)
    };
    return [(...h) => {
        const g = Date.now(), b = g - u;
        b >= s ? d(h, g) : (c = h, f || (f = setTimeout(() => {
            f = null, d(c)
        }, s - b)))
    }, () => c && d(c)]
}

const ts = (l, i, u = 3) => {
        let s = 0;
        const c = cS(50, 250);
        return fS(f => {
            const d = f.loaded, p = f.lengthComputable ? f.total : void 0, v = d - s, h = c(v), g = d <= p;
            s = d;
            const b = {
                loaded: d,
                total: p,
                progress: p ? d / p : void 0,
                bytes: v,
                rate: h || void 0,
                estimated: h && p && g ? (p - d) / h : void 0,
                event: f,
                lengthComputable: p != null,
                [i ? "download" : "upload"]: !0
            };
            l(b)
        }, u)
    }, Cp = (l, i) => {
        const u = l != null;
        return [s => i[0]({lengthComputable: u, total: l, loaded: s}), i[1]]
    }, wp = l => (...i) => V.asap(() => l(...i)),
    dS = nt.hasStandardBrowserEnv ? ((l, i) => u => (u = new URL(u, nt.origin), l.protocol === u.protocol && l.host === u.host && (i || l.port === u.port)))(new URL(nt.origin), nt.navigator && /(msie|trident)/i.test(nt.navigator.userAgent)) : () => !0,
    hS = nt.hasStandardBrowserEnv ? {
        write(l, i, u, s, c, f, d) {
            if (typeof document > "u") return;
            const p = [`${l}=${encodeURIComponent(i)}`];
            V.isNumber(u) && p.push(`expires=${new Date(u).toUTCString()}`), V.isString(s) && p.push(`path=${s}`), V.isString(c) && p.push(`domain=${c}`), f === !0 && p.push("secure"), V.isString(d) && p.push(`SameSite=${d}`), document.cookie = p.join("; ")
        }, read(l) {
            if (typeof document > "u") return null;
            const i = document.cookie.match(new RegExp("(?:^|; )" + l + "=([^;]*)"));
            return i ? decodeURIComponent(i[1]) : null
        }, remove(l) {
            this.write(l, "", Date.now() - 864e5, "/")
        }
    } : {
        write() {
        }, read() {
            return null
        }, remove() {
        }
    };

function mS(l) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)
}

function pS(l, i) {
    return i ? l.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : l
}

function j1(l, i, u) {
    let s = !mS(i);
    return l && (s || u == !1) ? pS(l, i) : i
}

const Ap = l => l instanceof mt ? {...l} : l;

function pa(l, i) {
    i = i || {};
    const u = {};

    function s(h, g, b, _) {
        return V.isPlainObject(h) && V.isPlainObject(g) ? V.merge.call({caseless: _}, h, g) : V.isPlainObject(g) ? V.merge({}, g) : V.isArray(g) ? g.slice() : g
    }

    function c(h, g, b, _) {
        if (V.isUndefined(g)) {
            if (!V.isUndefined(h)) return s(void 0, h, b, _)
        } else return s(h, g, b, _)
    }

    function f(h, g) {
        if (!V.isUndefined(g)) return s(void 0, g)
    }

    function d(h, g) {
        if (V.isUndefined(g)) {
            if (!V.isUndefined(h)) return s(void 0, h)
        } else return s(void 0, g)
    }

    function p(h, g, b) {
        if (b in i) return s(h, g);
        if (b in l) return s(void 0, h)
    }

    const v = {
        url: f,
        method: f,
        data: f,
        baseURL: d,
        transformRequest: d,
        transformResponse: d,
        paramsSerializer: d,
        timeout: d,
        timeoutMessage: d,
        withCredentials: d,
        withXSRFToken: d,
        adapter: d,
        responseType: d,
        xsrfCookieName: d,
        xsrfHeaderName: d,
        onUploadProgress: d,
        onDownloadProgress: d,
        decompress: d,
        maxContentLength: d,
        maxBodyLength: d,
        beforeRedirect: d,
        transport: d,
        httpAgent: d,
        httpsAgent: d,
        cancelToken: d,
        socketPath: d,
        responseEncoding: d,
        validateStatus: p,
        headers: (h, g, b) => c(Ap(h), Ap(g), b, !0)
    };
    return V.forEach(Object.keys({...l, ...i}), function (g) {
        const b = v[g] || c, _ = b(l[g], i[g], g);
        V.isUndefined(_) && b !== p || (u[g] = _)
    }), u
}

const U1 = l => {
    const i = pa({}, l);
    let {data: u, withXSRFToken: s, xsrfHeaderName: c, xsrfCookieName: f, headers: d, auth: p} = i;
    if (i.headers = d = mt.from(d), i.url = C1(j1(i.baseURL, i.url, i.allowAbsoluteUrls), l.params, l.paramsSerializer), p && d.set("Authorization", "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))), V.isFormData(u)) {
        if (nt.hasStandardBrowserEnv || nt.hasStandardBrowserWebWorkerEnv) d.setContentType(void 0); else if (V.isFunction(u.getHeaders)) {
            const v = u.getHeaders(), h = ["content-type", "content-length"];
            Object.entries(v).forEach(([g, b]) => {
                h.includes(g.toLowerCase()) && d.set(g, b)
            })
        }
    }
    if (nt.hasStandardBrowserEnv && (s && V.isFunction(s) && (s = s(i)), s || s !== !1 && dS(i.url))) {
        const v = c && f && hS.read(f);
        v && d.set(c, v)
    }
    return i
}, gS = typeof XMLHttpRequest < "u", vS = gS && function (l) {
    return new Promise(function (u, s) {
        const c = U1(l);
        let f = c.data;
        const d = mt.from(c.headers).normalize();
        let {responseType: p, onUploadProgress: v, onDownloadProgress: h} = c, g, b, _, j, x;

        function w() {
            j && j(), x && x(), c.cancelToken && c.cancelToken.unsubscribe(g), c.signal && c.signal.removeEventListener("abort", g)
        }

        let N = new XMLHttpRequest;
        N.open(c.method.toUpperCase(), c.url, !0), N.timeout = c.timeout;

        function Y() {
            if (!N) return;
            const z = mt.from("getAllResponseHeaders" in N && N.getAllResponseHeaders()), D = {
                data: !p || p === "text" || p === "json" ? N.responseText : N.response,
                status: N.status,
                statusText: N.statusText,
                headers: z,
                config: l,
                request: N
            };
            N1(function (O) {
                u(O), w()
            }, function (O) {
                s(O), w()
            }, D), N = null
        }

        "onloadend" in N ? N.onloadend = Y : N.onreadystatechange = function () {
            !N || N.readyState !== 4 || N.status === 0 && !(N.responseURL && N.responseURL.indexOf("file:") === 0) || setTimeout(Y)
        }, N.onabort = function () {
            N && (s(new de("Request aborted", de.ECONNABORTED, l, N)), N = null)
        }, N.onerror = function (M) {
            const D = M && M.message ? M.message : "Network Error", J = new de(D, de.ERR_NETWORK, l, N);
            J.event = M || null, s(J), N = null
        }, N.ontimeout = function () {
            let M = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
            const D = c.transitional || w1;
            c.timeoutErrorMessage && (M = c.timeoutErrorMessage), s(new de(M, D.clarifyTimeoutError ? de.ETIMEDOUT : de.ECONNABORTED, l, N)), N = null
        }, f === void 0 && d.setContentType(null), "setRequestHeader" in N && V.forEach(d.toJSON(), function (M, D) {
            N.setRequestHeader(D, M)
        }), V.isUndefined(c.withCredentials) || (N.withCredentials = !!c.withCredentials), p && p !== "json" && (N.responseType = c.responseType), h && ([_, x] = ts(h, !0), N.addEventListener("progress", _)), v && N.upload && ([b, j] = ts(v), N.upload.addEventListener("progress", b), N.upload.addEventListener("loadend", j)), (c.cancelToken || c.signal) && (g = z => {
            N && (s(!z || z.type ? new ul(null, l, N) : z), N.abort(), N = null)
        }, c.cancelToken && c.cancelToken.subscribe(g), c.signal && (c.signal.aborted ? g() : c.signal.addEventListener("abort", g)));
        const C = oS(c.url);
        if (C && nt.protocols.indexOf(C) === -1) {
            s(new de("Unsupported protocol " + C + ":", de.ERR_BAD_REQUEST, l));
            return
        }
        N.send(f || null)
    })
}, yS = (l, i) => {
    const {length: u} = l = l ? l.filter(Boolean) : [];
    if (i || u) {
        let s = new AbortController, c;
        const f = function (h) {
            if (!c) {
                c = !0, p();
                const g = h instanceof Error ? h : this.reason;
                s.abort(g instanceof de ? g : new ul(g instanceof Error ? g.message : g))
            }
        };
        let d = i && setTimeout(() => {
            d = null, f(new de(`timeout ${i} of ms exceeded`, de.ETIMEDOUT))
        }, i);
        const p = () => {
            l && (d && clearTimeout(d), d = null, l.forEach(h => {
                h.unsubscribe ? h.unsubscribe(f) : h.removeEventListener("abort", f)
            }), l = null)
        };
        l.forEach(h => h.addEventListener("abort", f));
        const {signal: v} = s;
        return v.unsubscribe = () => V.asap(p), v
    }
}, bS = function* (l, i) {
    let u = l.byteLength;
    if (u < i) {
        yield l;
        return
    }
    let s = 0, c;
    for (; s < u;) c = s + i, yield l.slice(s, c), s = c
}, SS = async function* (l, i) {
    for await(const u of _S(l)) yield* bS(u, i)
}, _S = async function* (l) {
    if (l[Symbol.asyncIterator]) {
        yield* l;
        return
    }
    const i = l.getReader();
    try {
        for (; ;) {
            const {done: u, value: s} = await i.read();
            if (u) break;
            yield s
        }
    } finally {
        await i.cancel()
    }
}, Op = (l, i, u, s) => {
    const c = SS(l, i);
    let f = 0, d, p = v => {
        d || (d = !0, s && s(v))
    };
    return new ReadableStream({
        async pull(v) {
            try {
                const {done: h, value: g} = await c.next();
                if (h) {
                    p(), v.close();
                    return
                }
                let b = g.byteLength;
                if (u) {
                    let _ = f += b;
                    u(_)
                }
                v.enqueue(new Uint8Array(g))
            } catch (h) {
                throw p(h), h
            }
        }, cancel(v) {
            return p(v), c.return()
        }
    }, {highWaterMark: 2})
}, Np = 64 * 1024, {isFunction: Xr} = V, ES = (({Request: l, Response: i}) => ({Request: l, Response: i}))(V.global), {
    ReadableStream: jp,
    TextEncoder: Up
} = V.global, Dp = (l, ...i) => {
    try {
        return !!l(...i)
    } catch {
        return !1
    }
}, TS = l => {
    l = V.merge.call({skipUndefined: !0}, ES, l);
    const {fetch: i, Request: u, Response: s} = l, c = i ? Xr(i) : typeof fetch == "function", f = Xr(u), d = Xr(s);
    if (!c) return !1;
    const p = c && Xr(jp),
        v = c && (typeof Up == "function" ? (x => w => x.encode(w))(new Up) : async x => new Uint8Array(await new u(x).arrayBuffer())),
        h = f && p && Dp(() => {
            let x = !1;
            const w = new u(nt.origin, {
                body: new jp, method: "POST", get duplex() {
                    return x = !0, "half"
                }
            }).headers.has("Content-Type");
            return x && !w
        }), g = d && p && Dp(() => V.isReadableStream(new s("").body)), b = {stream: g && (x => x.body)};
    c && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(x => {
        !b[x] && (b[x] = (w, N) => {
            let Y = w && w[x];
            if (Y) return Y.call(w);
            throw new de(`Response type '${x}' is not supported`, de.ERR_NOT_SUPPORT, N)
        })
    });
    const _ = async x => {
        if (x == null) return 0;
        if (V.isBlob(x)) return x.size;
        if (V.isSpecCompliantForm(x)) return (await new u(nt.origin, {
            method: "POST",
            body: x
        }).arrayBuffer()).byteLength;
        if (V.isArrayBufferView(x) || V.isArrayBuffer(x)) return x.byteLength;
        if (V.isURLSearchParams(x) && (x = x + ""), V.isString(x)) return (await v(x)).byteLength
    }, j = async (x, w) => {
        const N = V.toFiniteNumber(x.getContentLength());
        return N ?? _(w)
    };
    return async x => {
        let {
            url: w,
            method: N,
            data: Y,
            signal: C,
            cancelToken: z,
            timeout: M,
            onDownloadProgress: D,
            onUploadProgress: J,
            responseType: O,
            headers: R,
            withCredentials: G = "same-origin",
            fetchOptions: F
        } = U1(x), te = i || fetch;
        O = O ? (O + "").toLowerCase() : "text";
        let ae = yS([C, z && z.toAbortSignal()], M), W = null;
        const Ee = ae && ae.unsubscribe && (() => {
            ae.unsubscribe()
        });
        let me;
        try {
            if (J && h && N !== "get" && N !== "head" && (me = await j(R, Y)) !== 0) {
                let I = new u(w, {method: "POST", body: Y, duplex: "half"}), ne;
                if (V.isFormData(Y) && (ne = I.headers.get("content-type")) && R.setContentType(ne), I.body) {
                    const [ee, re] = Cp(me, ts(wp(J)));
                    Y = Op(I.body, Np, ee, re)
                }
            }
            V.isString(G) || (G = G ? "include" : "omit");
            const X = f && "credentials" in u.prototype, P = {
                ...F,
                signal: ae,
                method: N.toUpperCase(),
                headers: R.normalize().toJSON(),
                body: Y,
                duplex: "half",
                credentials: X ? G : void 0
            };
            W = f && new u(w, P);
            let K = await (f ? te(W, F) : te(w, P));
            const fe = g && (O === "stream" || O === "response");
            if (g && (D || fe && Ee)) {
                const I = {};
                ["status", "statusText", "headers"].forEach(be => {
                    I[be] = K[be]
                });
                const ne = V.toFiniteNumber(K.headers.get("content-length")), [ee, re] = D && Cp(ne, ts(wp(D), !0)) || [];
                K = new s(Op(K.body, Np, ee, () => {
                    re && re(), Ee && Ee()
                }), I)
            }
            O = O || "text";
            let T = await b[V.findKey(b, O) || "text"](K, x);
            return !fe && Ee && Ee(), await new Promise((I, ne) => {
                N1(I, ne, {
                    data: T,
                    headers: mt.from(K.headers),
                    status: K.status,
                    statusText: K.statusText,
                    config: x,
                    request: W
                })
            })
        } catch (X) {
            throw Ee && Ee(), X && X.name === "TypeError" && /Load failed|fetch/i.test(X.message) ? Object.assign(new de("Network Error", de.ERR_NETWORK, x, W), {cause: X.cause || X}) : de.from(X, X && X.code, x, W)
        }
    }
}, xS = new Map, D1 = l => {
    let i = l && l.env || {};
    const {fetch: u, Request: s, Response: c} = i, f = [s, c, u];
    let d = f.length, p = d, v, h, g = xS;
    for (; p--;) v = f[p], h = g.get(v), h === void 0 && g.set(v, h = p ? new Map : TS(i)), g = h;
    return h
};
D1();
const uf = {http: V3, xhr: vS, fetch: {get: D1}};
V.forEach(uf, (l, i) => {
    if (l) {
        try {
            Object.defineProperty(l, "name", {value: i})
        } catch {
        }
        Object.defineProperty(l, "adapterName", {value: i})
    }
});
const Mp = l => `- ${l}`, RS = l => V.isFunction(l) || l === null || l === !1;

function CS(l, i) {
    l = V.isArray(l) ? l : [l];
    const {length: u} = l;
    let s, c;
    const f = {};
    for (let d = 0; d < u; d++) {
        s = l[d];
        let p;
        if (c = s, !RS(s) && (c = uf[(p = String(s)).toLowerCase()], c === void 0)) throw new de(`Unknown adapter '${p}'`);
        if (c && (V.isFunction(c) || (c = c.get(i)))) break;
        f[p || "#" + d] = c
    }
    if (!c) {
        const d = Object.entries(f).map(([v, h]) => `adapter ${v} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build"));
        let p = u ? d.length > 1 ? `since :
` + d.map(Mp).join(`
`) : " " + Mp(d[0]) : "as no adapter specified";
        throw new de("There is no suitable adapter to dispatch the request " + p, "ERR_NOT_SUPPORT")
    }
    return c
}

const M1 = {getAdapter: CS, adapters: uf};

function ko(l) {
    if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted) throw new ul(null, l)
}

function Hp(l) {
    return ko(l), l.headers = mt.from(l.headers), l.data = qo.call(l, l.transformRequest), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), M1.getAdapter(l.adapter || _i.adapter, l)(l).then(function (s) {
        return ko(l), s.data = qo.call(l, l.transformResponse, s), s.headers = mt.from(s.headers), s
    }, function (s) {
        return O1(s) || (ko(l), s && s.response && (s.response.data = qo.call(l, l.transformResponse, s.response), s.response.headers = mt.from(s.response.headers))), Promise.reject(s)
    })
}

const H1 = "1.13.2", os = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, i) => {
    os[l] = function (s) {
        return typeof s === l || "a" + (i < 1 ? "n " : " ") + l
    }
});
const Lp = {};
os.transitional = function (i, u, s) {
    function c(f, d) {
        return "[Axios v" + H1 + "] Transitional option '" + f + "'" + d + (s ? ". " + s : "")
    }

    return (f, d, p) => {
        if (i === !1) throw new de(c(d, " has been removed" + (u ? " in " + u : "")), de.ERR_DEPRECATED);
        return u && !Lp[d] && (Lp[d] = !0, console.warn(c(d, " has been deprecated since v" + u + " and will be removed in the near future"))), i ? i(f, d, p) : !0
    }
};
os.spelling = function (i) {
    return (u, s) => (console.warn(`${s} is likely a misspelling of ${i}`), !0)
};

function wS(l, i, u) {
    if (typeof l != "object") throw new de("options must be an object", de.ERR_BAD_OPTION_VALUE);
    const s = Object.keys(l);
    let c = s.length;
    for (; c-- > 0;) {
        const f = s[c], d = i[f];
        if (d) {
            const p = l[f], v = p === void 0 || d(p, f, l);
            if (v !== !0) throw new de("option " + f + " must be " + v, de.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (u !== !0) throw new de("Unknown option " + f, de.ERR_BAD_OPTION)
    }
}

const Pr = {assertOptions: wS, validators: os}, Kt = Pr.validators;
let ma = class {
    constructor(i) {
        this.defaults = i || {}, this.interceptors = {request: new xp, response: new xp}
    }

    async request(i, u) {
        try {
            return await this._request(i, u)
        } catch (s) {
            if (s instanceof Error) {
                let c = {};
                Error.captureStackTrace ? Error.captureStackTrace(c) : c = new Error;
                const f = c.stack ? c.stack.replace(/^.+\n/, "") : "";
                try {
                    s.stack ? f && !String(s.stack).endsWith(f.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + f) : s.stack = f
                } catch {
                }
            }
            throw s
        }
    }

    _request(i, u) {
        typeof i == "string" ? (u = u || {}, u.url = i) : u = i || {}, u = pa(this.defaults, u);
        const {transitional: s, paramsSerializer: c, headers: f} = u;
        s !== void 0 && Pr.assertOptions(s, {
            silentJSONParsing: Kt.transitional(Kt.boolean),
            forcedJSONParsing: Kt.transitional(Kt.boolean),
            clarifyTimeoutError: Kt.transitional(Kt.boolean)
        }, !1), c != null && (V.isFunction(c) ? u.paramsSerializer = {serialize: c} : Pr.assertOptions(c, {
            encode: Kt.function,
            serialize: Kt.function
        }, !0)), u.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? u.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : u.allowAbsoluteUrls = !0), Pr.assertOptions(u, {
            baseUrl: Kt.spelling("baseURL"),
            withXsrfToken: Kt.spelling("withXSRFToken")
        }, !0), u.method = (u.method || this.defaults.method || "get").toLowerCase();
        let d = f && V.merge(f.common, f[u.method]);
        f && V.forEach(["delete", "get", "head", "post", "put", "patch", "common"], x => {
            delete f[x]
        }), u.headers = mt.concat(d, f);
        const p = [];
        let v = !0;
        this.interceptors.request.forEach(function (w) {
            typeof w.runWhen == "function" && w.runWhen(u) === !1 || (v = v && w.synchronous, p.unshift(w.fulfilled, w.rejected))
        });
        const h = [];
        this.interceptors.response.forEach(function (w) {
            h.push(w.fulfilled, w.rejected)
        });
        let g, b = 0, _;
        if (!v) {
            const x = [Hp.bind(this), void 0];
            for (x.unshift(...p), x.push(...h), _ = x.length, g = Promise.resolve(u); b < _;) g = g.then(x[b++], x[b++]);
            return g
        }
        _ = p.length;
        let j = u;
        for (; b < _;) {
            const x = p[b++], w = p[b++];
            try {
                j = x(j)
            } catch (N) {
                w.call(this, N);
                break
            }
        }
        try {
            g = Hp.call(this, j)
        } catch (x) {
            return Promise.reject(x)
        }
        for (b = 0, _ = h.length; b < _;) g = g.then(h[b++], h[b++]);
        return g
    }

    getUri(i) {
        i = pa(this.defaults, i);
        const u = j1(i.baseURL, i.url, i.allowAbsoluteUrls);
        return C1(u, i.params, i.paramsSerializer)
    }
};
V.forEach(["delete", "get", "head", "options"], function (i) {
    ma.prototype[i] = function (u, s) {
        return this.request(pa(s || {}, {method: i, url: u, data: (s || {}).data}))
    }
});
V.forEach(["post", "put", "patch"], function (i) {
    function u(s) {
        return function (f, d, p) {
            return this.request(pa(p || {}, {
                method: i,
                headers: s ? {"Content-Type": "multipart/form-data"} : {},
                url: f,
                data: d
            }))
        }
    }

    ma.prototype[i] = u(), ma.prototype[i + "Form"] = u(!0)
});
let AS = class L1 {
    constructor(i) {
        if (typeof i != "function") throw new TypeError("executor must be a function.");
        let u;
        this.promise = new Promise(function (f) {
            u = f
        });
        const s = this;
        this.promise.then(c => {
            if (!s._listeners) return;
            let f = s._listeners.length;
            for (; f-- > 0;) s._listeners[f](c);
            s._listeners = null
        }), this.promise.then = c => {
            let f;
            const d = new Promise(p => {
                s.subscribe(p), f = p
            }).then(c);
            return d.cancel = function () {
                s.unsubscribe(f)
            }, d
        }, i(function (f, d, p) {
            s.reason || (s.reason = new ul(f, d, p), u(s.reason))
        })
    }

    throwIfRequested() {
        if (this.reason) throw this.reason
    }

    subscribe(i) {
        if (this.reason) {
            i(this.reason);
            return
        }
        this._listeners ? this._listeners.push(i) : this._listeners = [i]
    }

    unsubscribe(i) {
        if (!this._listeners) return;
        const u = this._listeners.indexOf(i);
        u !== -1 && this._listeners.splice(u, 1)
    }

    toAbortSignal() {
        const i = new AbortController, u = s => {
            i.abort(s)
        };
        return this.subscribe(u), i.signal.unsubscribe = () => this.unsubscribe(u), i.signal
    }

    static source() {
        let i;
        return {
            token: new L1(function (c) {
                i = c
            }), cancel: i
        }
    }
};

function OS(l) {
    return function (u) {
        return l.apply(null, u)
    }
}

function NS(l) {
    return V.isObject(l) && l.isAxiosError === !0
}

const Jc = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(Jc).forEach(([l, i]) => {
    Jc[i] = l
});

function B1(l) {
    const i = new ma(l), u = m1(ma.prototype.request, i);
    return V.extend(u, ma.prototype, i, {allOwnKeys: !0}), V.extend(u, i, null, {allOwnKeys: !0}), u.create = function (c) {
        return B1(pa(l, c))
    }, u
}

const Ne = B1(_i);
Ne.Axios = ma;
Ne.CanceledError = ul;
Ne.CancelToken = AS;
Ne.isCancel = O1;
Ne.VERSION = H1;
Ne.toFormData = us;
Ne.AxiosError = de;
Ne.Cancel = Ne.CanceledError;
Ne.all = function (i) {
    return Promise.all(i)
};
Ne.spread = OS;
Ne.isAxiosError = NS;
Ne.mergeConfig = pa;
Ne.AxiosHeaders = mt;
Ne.formToJSON = l => A1(V.isHTMLForm(l) ? new FormData(l) : l);
Ne.getAdapter = M1.getAdapter;
Ne.HttpStatusCode = Jc;
Ne.default = Ne;
const {
    Axios: vE,
    AxiosError: yE,
    CanceledError: bE,
    isCancel: SE,
    CancelToken: _E,
    VERSION: EE,
    all: TE,
    Cancel: xE,
    isAxiosError: RE,
    spread: CE,
    toFormData: wE,
    AxiosHeaders: AE,
    HttpStatusCode: OE,
    formToJSON: NE,
    getAdapter: jE,
    mergeConfig: UE
} = Ne, jS = Ne.create({
    baseURL: "http://gsmsv-1.yujun.kr:27919/api",
    headers: {"Content-Type": "application/json", Accept: "application/json"}
});

function US() {
    const [l, i] = H.useState(""), [u, s] = H.useState(""), [c, f] = H.useState(""), [d, p] = H.useState(!1), [v, h] = H.useState(!1),
        g = async () => {
            const b = l.trim(), _ = u.trim();
            if (!b || !_) {
                f("아이디와 비밀번호를 모두 입력하세요");
                return
            }
            h(!0), f(""), h1();
            try {
                const j = await jS.post("/auth/signin", {loginId: b, password: _});
                console.log("로그인 API 응답:", j.data);
                const {
                    accessToken: x,
                    refreshToken: w,
                    accessTokenExpiresIn: N,
                    refreshTokenExpiresIn: Y
                } = j.data || {};
                Wb(x), Pb(w), console.log("로그인 성공 (토큰을 쿠키에 저장)"), window.location.href = "/main"
            } catch (j) {
                const x = j?.response?.status;
                j?.response?.data?.message, f(x === 401 ? "아이디 또는 비밀번호가 일치하지 않음" : x === 500 ? "서버 에러" : "네트워크 오류"), console.debug("[signin:error]", x, j?.response?.data)
            } finally {
                h(!1)
            }
        };
    return S.jsxs("div", {
        className: "all",
        children: [S.jsx(af, {}), S.jsx("span", {
            className: "name",
            children: "HCBC"
        }), S.jsxs("div", {
            className: "input",
            children: [S.jsxs("div", {
                className: "inputBox",
                children: [S.jsx("span", {
                    className: "inputIcon",
                    children: S.jsx(e3, {})
                }), S.jsx("input", {
                    className: "inputId",
                    type: "text",
                    required: !0,
                    placeholder: "아이디",
                    value: l,
                    onChange: b => i(b.target.value)
                })]
            }), S.jsxs("div", {
                className: "inputBox",
                children: [S.jsx("span", {
                    className: "inputIcon",
                    children: S.jsx(t3, {})
                }), S.jsx("input", {
                    type: d ? "text" : "password",
                    required: !0,
                    placeholder: "비밀번호",
                    value: u,
                    onChange: b => s(b.target.value)
                }), S.jsx("span", {
                    className: "pwToggle",
                    onClick: () => p(!d),
                    children: d ? S.jsx(Gc, {}) : S.jsx(Yc, {})
                })]
            })]
        }), S.jsx("div", {
            id: "message",
            children: S.jsx("span", {className: "message", children: c})
        }), S.jsx("button", {
            className: "l-btn",
            type: "submit",
            onClick: g,
            disabled: v,
            children: "로그인"
        }), S.jsxs("div", {
            className: "footer",
            children: [S.jsx("span", {className: "not", children: "아직 회원이 아니라면?"}), S.jsx(nf, {
                to: "/signup",
                children: " 회원가입하기"
            })]
        })]
    })
}

const Bp = Ne.create({
        baseURL: "http://gsmsv-1.yujun.kr:27919",
        timeout: 1e4,
        headers: {"Content-Type": "application/json"}
    }), DS = {남자: "MALE", 여자: "FEMALE", 기타: "OTHER"},
    MS = ["운동", "맛집", "동물", "여행", "영화", "게임", "독서", "공부", "음악", "🔞", "웹툰", "외향형", "내향형", "애니메이션"], HS = {
        운동: "EXERCISE",
        맛집: "RESTAURANT",
        동물: "ANIMAL",
        여행: "TRIP",
        영화: "MOVIE",
        게임: "GAME",
        독서: "LEADING",
        공부: "STUDY",
        음악: "MUSIC",
        "🔞": "SEXUAL_PLEASURE",
        웹툰: "WEBTOON",
        외향형: "EXTROVERT",
        내향형: "INTROVERT",
        애니메이션: "ANIMATION"
    }, LS = () => {
        const l = en(), [i, u] = H.useState(1), [s, c] = H.useState({
            name: "",
            age: "",
            gender: "",
            address: "",
            id: "",
            password: "",
            confirmPassword: "",
            selectedCategories: new Set
        }), [f, d] = H.useState(!1), [p, v] = H.useState(!1), [h, g] = H.useState(!1), [b, _] = H.useState(""), [j, x] = H.useState(!1), [w, N] = H.useState(!1), [Y, C] = H.useState(!1), [z, M] = H.useState("");
        H.useEffect(() => {
            const K = document.createElement("script");
            return K.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js", K.async = !0, document.body.appendChild(K), () => {
                document.body.contains(K) && document.body.removeChild(K)
            }
        }, []);
        const D = K => {
                const {name: fe, value: T} = K.target;
                if (fe === "age") {
                    const I = Number(T);
                    if (T && (I < 0 || I > 150)) {
                        M("진짜 당신의 나이가 맞나요??");
                        return
                    } else M("")
                }
                c(I => ({...I, [fe]: T})), fe === "id" && (N(!1), x(!1), _(""))
            }, J = () => d(K => !K), O = K => {
                c(fe => ({...fe, gender: K})), d(!1)
            }, R = () => {
                window.daum && window.daum.Postcode ? new window.daum.Postcode({
                    oncomplete: K => {
                        const fe = `${K.sido} ${K.sigungu} ${K.bname}`;
                        c(T => ({...T, address: fe}))
                    }
                }).open() : alert("주소 검색 기능을 불러오는 중입니다. 잠시 후 다시 시도해주세요.")
            }, G = async () => {
                if (!s.id.trim()) {
                    _("아이디를 입력해주세요."), x(!1), N(!1);
                    return
                }
                try {
                    const K = await Bp.get("/api/auth/check-id", {params: {loginId: s.id}});
                    K.data.available === !0 ? (_("사용 가능한 아이디입니다."), x(!0), N(!0)) : K.data.available === !1 ? (_("이미 사용 중인 아이디입니다."), x(!1), N(!0)) : (_("서버 응답 형식이 올바르지 않습니다."), x(!1), N(!1))
                } catch (K) {
                    K.response?.status === 409 ? (_("이미 사용 중인 아이디입니다."), x(!1), N(!0)) : K.response?.status === 400 ? (_("아이디 형식이 올바르지 않습니다."), x(!1), N(!1)) : K.response?.status === 500 ? (_("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요."), x(!1), N(!1)) : (_("서버와 연결할 수 없습니다. 네트워크를 확인해주세요."), x(!1), N(!1))
                }
            }, F = K => {
                c(fe => {
                    const T = new Set(fe.selectedCategories);
                    return T.has(K) ? T.delete(K) : T.size < 3 && T.add(K), {...fe, selectedCategories: T}
                })
            }, te = s.name && s.age && s.gender && s.address, ae = s.password === s.confirmPassword, W = s.password.length >= 8,
            Ee = s.id && W && ae && w && j, me = s.selectedCategories.size === 3, X = async () => {
                if (!te || !Ee || !me) {
                    alert("입력값을 다시 확인해주세요.");
                    return
                }
                if (Y) return;
                C(!0);
                const K = Array.from(s.selectedCategories).map(T => HS[T] || "OTHER"), fe = {
                    name: s.name,
                    age: Number(s.age) || 0,
                    gender: DS[s.gender] || "OTHER",
                    loginId: s.id,
                    password: s.password,
                    categories: K,
                    address: s.address
                };
                try {
                    const T = await Bp.post("/api/auth/signup", fe);
                    (T.status === 201 || T.status === 200) && (alert("회원가입이 완료되었습니다!"), l("/"))
                } catch (T) {
                    if (T.response) switch (T.response.status) {
                        case 201:
                        case 200:
                            alert("회원가입이 완료되었습니다!"), l("/");
                            break;
                        case 400:
                            alert("입력값이 올바르지 않습니다."), C(!1);
                            break;
                        case 409:
                            alert(`이미 사용 중인 아이디입니다.
다른 아이디로 다시 시도해주세요.`), _("이미 사용 중인 아이디입니다."), x(!1), N(!1), u(2), C(!1);
                            break;
                        case 500:
                            alert("서버 오류가 발생했습니다. 관리자에게 문의해주세요."), C(!1);
                            break;
                        default:
                            alert("회원가입 중 오류가 발생했습니다."), C(!1)
                    } else alert("네트워크 오류가 발생했습니다. 연결 상태를 확인해주세요."), C(!1)
                }
            }, P = () => {
                switch (i) {
                    case 1:
                        return S.jsxs(S.Fragment, {
                            children: [S.jsx("div", {
                                className: "input-field",
                                children: S.jsx("input", {
                                    className: "s-input",
                                    type: "text",
                                    name: "name",
                                    placeholder: "이름",
                                    value: s.name,
                                    onChange: D
                                })
                            }), S.jsx("div", {
                                className: "input-field",
                                style: {marginBottom: 0},
                                children: S.jsx("input", {
                                    className: "s-input",
                                    type: "number",
                                    name: "age",
                                    placeholder: "나이",
                                    value: s.age,
                                    onChange: D,
                                    min: "1",
                                    max: "150"
                                })
                            }), S.jsx("p", {className: "msg-error", children: z}), S.jsxs("div", {
                                className: "select-wrap",
                                children: [S.jsxs("div", {
                                    className: "select-box",
                                    onClick: J,
                                    children: [s.gender || "성별", S.jsx("span", {className: "arrow", children: f ? "▲" : "▼"})]
                                }), f && S.jsx("div", {
                                    className: "options-list",
                                    children: ["남자", "여자", "기타"].map(K => S.jsx("div", {
                                        className: "option-item",
                                        onClick: () => O(K),
                                        children: K
                                    }, K))
                                })]
                            }), S.jsxs("div", {
                                className: "input-field id-field",
                                children: [S.jsx("input", {
                                    className: "s-input",
                                    type: "text",
                                    name: "address",
                                    placeholder: "주소",
                                    value: s.address,
                                    readOnly: !0
                                }), S.jsx("button", {className: "btn-check", onClick: R, children: "주소 찾기"})]
                            }), S.jsx("button", {
                                className: "btn-submit",
                                onClick: () => u(2),
                                disabled: !te,
                                children: "다음으로"
                            }), S.jsxs("p", {
                                className: "link-login",
                                children: ["이미 회원이라면? ", S.jsx("a", {href: "/", children: "로그인하기"})]
                            })]
                        });
                    case 2:
                        return S.jsxs(S.Fragment, {
                            children: [S.jsxs("div", {
                                className: "input-field id-field",
                                children: [S.jsx("input", {
                                    className: "s-input",
                                    type: "text",
                                    name: "id",
                                    placeholder: "아이디",
                                    value: s.id,
                                    onChange: D
                                }), S.jsx("button", {
                                    className: "btn-check",
                                    type: "button",
                                    onClick: G,
                                    disabled: !s.id.trim(),
                                    children: "중복 검사"
                                })]
                            }), S.jsx("p", {
                                className: `msg ${j ? "success" : "error"}`,
                                children: b
                            }), S.jsxs("div", {
                                className: "input-field pw-field",
                                children: [S.jsx("input", {
                                    className: "s-input",
                                    type: p ? "text" : "password",
                                    name: "password",
                                    placeholder: "비밀번호",
                                    value: s.password,
                                    onChange: D
                                }), S.jsx("span", {
                                    className: "toggle-pw",
                                    onClick: () => v(!p),
                                    children: p ? S.jsx(Gc, {}) : S.jsx(Yc, {})
                                })]
                            }), S.jsx("p", {
                                className: "msg-error",
                                children: !W && s.password ? "비밀번호는 8자 이상이어야 합니다." : ""
                            }), S.jsxs("div", {
                                className: "input-field pw-field",
                                children: [S.jsx("input", {
                                    className: "s-input",
                                    type: h ? "text" : "password",
                                    name: "confirmPassword",
                                    placeholder: "비밀번호 확인",
                                    value: s.confirmPassword,
                                    onChange: D
                                }), S.jsx("span", {
                                    className: "toggle-pw",
                                    onClick: () => g(!h),
                                    children: h ? S.jsx(Gc, {}) : S.jsx(Yc, {})
                                })]
                            }), S.jsx("p", {
                                className: "msg-error",
                                children: s.confirmPassword && !ae ? "비밀번호가 일치하지 않습니다." : ""
                            }), S.jsx("button", {
                                className: "btn-submit",
                                onClick: () => u(3),
                                disabled: !Ee,
                                children: "다음으로"
                            })]
                        });
                    case 3:
                        return S.jsxs(S.Fragment, {
                            children: [S.jsxs("div", {
                                className: "category-wrap",
                                children: [S.jsx("p", {
                                    className: "category-text",
                                    children: "마지막으로 카테고리 3가지를 선택해주세요."
                                }), S.jsx("div", {
                                    className: "category-grid",
                                    children: MS.map(K => S.jsx("div", {
                                        className: `category-item ${s.selectedCategories.has(K) ? "active" : ""}`,
                                        onClick: () => F(K),
                                        children: K
                                    }, K))
                                })]
                            }), S.jsx("button", {
                                className: "btn-submit",
                                onClick: X,
                                disabled: !me || Y,
                                children: Y ? "가입 중..." : "회원가입하기"
                            })]
                        });
                    default:
                        return null
                }
            };
        return S.jsx("div", {
            className: "s-body",
            children: S.jsx("div", {
                className: "wrap",
                children: S.jsxs("div", {
                    className: "card",
                    children: [S.jsx(af, {}), S.jsx("p", {className: "logo-text", children: "HCBC"}), P()]
                })
            })
        })
    }, zp = l => {
        let i;
        const u = new Set, s = (h, g) => {
                const b = typeof h == "function" ? h(i) : h;
                if (!Object.is(b, i)) {
                    const _ = i;
                    i = g ?? (typeof b != "object" || b === null) ? b : Object.assign({}, i, b), u.forEach(j => j(i, _))
                }
            }, c = () => i,
            p = {setState: s, getState: c, getInitialState: () => v, subscribe: h => (u.add(h), () => u.delete(h))},
            v = i = l(s, c, p);
        return p
    }, BS = (l => l ? zp(l) : zp), zS = l => l;

function qS(l, i = zS) {
    const u = kr.useSyncExternalStore(l.subscribe, kr.useCallback(() => i(l.getState()), [l, i]), kr.useCallback(() => i(l.getInitialState()), [l, i]));
    return kr.useDebugValue(u), u
}

const qp = l => {
    const i = BS(l), u = s => qS(i, s);
    return Object.assign(u, i), u
}, kS = (l => l ? qp(l) : qp);

function z1(l, i) {
    let u;
    try {
        u = l()
    } catch {
        return
    }
    return {
        getItem: c => {
            var f;
            const d = v => v === null ? null : JSON.parse(v, void 0), p = (f = u.getItem(c)) != null ? f : null;
            return p instanceof Promise ? p.then(d) : d(p)
        }, setItem: (c, f) => u.setItem(c, JSON.stringify(f, void 0)), removeItem: c => u.removeItem(c)
    }
}

const $c = l => i => {
    try {
        const u = l(i);
        return u instanceof Promise ? u : {
            then(s) {
                return $c(s)(u)
            }, catch(s) {
                return this
            }
        }
    } catch (u) {
        return {
            then(s) {
                return this
            }, catch(s) {
                return $c(s)(u)
            }
        }
    }
}, VS = (l, i) => (u, s, c) => {
    let f = {storage: z1(() => localStorage), partialize: w => w, version: 0, merge: (w, N) => ({...N, ...w}), ...i},
        d = !1;
    const p = new Set, v = new Set;
    let h = f.storage;
    if (!h) return l((...w) => {
        console.warn(`[zustand persist middleware] Unable to update item '${f.name}', the given storage is currently unavailable.`), u(...w)
    }, s, c);
    const g = () => {
        const w = f.partialize({...s()});
        return h.setItem(f.name, {state: w, version: f.version})
    }, b = c.setState;
    c.setState = (w, N) => (b(w, N), g());
    const _ = l((...w) => (u(...w), g()), s, c);
    c.getInitialState = () => _;
    let j;
    const x = () => {
        var w, N;
        if (!h) return;
        d = !1, p.forEach(C => {
            var z;
            return C((z = s()) != null ? z : _)
        });
        const Y = ((N = f.onRehydrateStorage) == null ? void 0 : N.call(f, (w = s()) != null ? w : _)) || void 0;
        return $c(h.getItem.bind(h))(f.name).then(C => {
            if (C) if (typeof C.version == "number" && C.version !== f.version) {
                if (f.migrate) {
                    const z = f.migrate(C.state, C.version);
                    return z instanceof Promise ? z.then(M => [!0, M]) : [!0, z]
                }
                console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
            } else return [!1, C.state];
            return [!1, void 0]
        }).then(C => {
            var z;
            const [M, D] = C;
            if (j = f.merge(D, (z = s()) != null ? z : _), u(j, !0), M) return g()
        }).then(() => {
            Y?.(j, void 0), j = s(), d = !0, v.forEach(C => C(j))
        }).catch(C => {
            Y?.(void 0, C)
        })
    };
    return c.persist = {
        setOptions: w => {
            f = {...f, ...w}, w.storage && (h = w.storage)
        }, clearStorage: () => {
            h?.removeItem(f.name)
        }, getOptions: () => f, rehydrate: () => x(), hasHydrated: () => d, onHydrate: w => (p.add(w), () => {
            p.delete(w)
        }), onFinishHydration: w => (v.add(w), () => {
            v.delete(w)
        })
    }, f.skipHydration || x(), j || _
}, XS = VS, cs = kS(XS(l => ({
    rooms: [],
    currentRoom: null,
    roomMessages: {},
    messages: [],
    isConnected: !1,
    isMatching: !1,
    setRooms: i => l({rooms: i}),
    setCurrentRoom: i => l(u => ({currentRoom: i, messages: i ? u.roomMessages[i.roomId] || [] : []})),
    addMessage: i => l(u => {
        if (!u.currentRoom) return u;
        const s = u.currentRoom.roomId, c = {...u.roomMessages, [s]: [...u.roomMessages[s] || [], i]};
        return {roomMessages: c, messages: c[s]}
    }),
    setMessages: i => l(u => {
        if (!u.currentRoom) return u;
        const s = u.currentRoom.roomId;
        return {roomMessages: {...u.roomMessages, [s]: i}, messages: i}
    }),
    setConnected: i => l({isConnected: i}),
    setMatching: i => l({isMatching: i}),
    leaveRoom: () => l({currentRoom: null, messages: []}),
    removeRoom: i => l(u => {
        const s = {...u.roomMessages};
        return delete s[i], {rooms: u.rooms.filter(c => c.roomId !== i), roomMessages: s}
    })
}), {
    name: "chat-storage",
    storage: z1(() => localStorage),
    partialize: l => ({roomMessages: l.roomMessages, currentRoom: l.currentRoom})
})), GS = "_loading_1pqwr_97", YS = "_avatar_1pqwr_209", Rt = {
    "main-container": "_main-container_1pqwr_1",
    "chat-box": "_chat-box_1pqwr_19",
    "chat-header": "_chat-header_1pqwr_39",
    "chat-list": "_chat-list_1pqwr_53",
    loading: GS,
    "empty-state": "_empty-state_1pqwr_115",
    "empty-title": "_empty-title_1pqwr_149",
    "chat-item": "_chat-item_1pqwr_165",
    avatar: YS,
    "chat-info": "_chat-info_1pqwr_227",
    "chat-username": "_chat-username_1pqwr_241",
    "chat-message": "_chat-message_1pqwr_267",
    "unread-dot": "_unread-dot_1pqwr_287"
};

function q1() {
    return S.jsxs("svg", {
        width: "52",
        height: "52",
        viewBox: "0 0 52 52",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [S.jsx("path", {
            d: "M1 14.3333C1 6.96954 6.96954 1 14.3333 1H37.6667C45.0305 1 51 6.96954 51 14.3333V37.6667C51 45.0305 45.0305 51 37.6667 51H14.3333C6.96954 51 1 45.0305 1 37.6667V14.3333Z",
            fill: "white"
        }), S.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.5926 16.7407C18.5926 14.7762 19.373 12.8921 20.7622 11.5029C22.1513 10.1138 24.0354 9.33333 26 9.33333C27.9646 9.33333 29.8487 10.1138 31.2378 11.5029C32.627 12.8921 33.4074 14.7762 33.4074 16.7407C33.4074 18.7053 32.627 20.5894 31.2378 21.9786C29.8487 23.3677 27.9646 24.1481 26 24.1481C24.0354 24.1481 22.1513 23.3677 20.7622 21.9786C19.373 20.5894 18.5926 18.7053 18.5926 16.7407ZM18.5926 27.8519C16.1369 27.8519 13.7818 28.8274 12.0453 30.5638C10.3089 32.3003 9.33333 34.6554 9.33333 37.1111C9.33333 38.5845 9.91865 39.9976 10.9605 41.0395C12.0024 42.0814 13.4155 42.6667 14.8889 42.6667H37.1111C38.5845 42.6667 39.9976 42.0814 41.0395 41.0395C42.0814 39.9976 42.6667 38.5845 42.6667 37.1111C42.6667 34.6554 41.6911 32.3003 39.9547 30.5638C38.2182 28.8274 35.8631 27.8519 33.4074 27.8519H18.5926Z",
            fill: "#FFA6C5"
        }), S.jsx("path", {
            d: "M37.667 0.5C45.3067 0.500175 51.4998 6.69333 51.5 14.333V37.667C51.4998 45.3067 45.3067 51.4998 37.667 51.5H14.333C6.69333 51.4998 0.500175 45.3067 0.5 37.667V14.333C0.500175 6.69333 6.69333 0.500177 14.333 0.5H37.667Z",
            stroke: "#D6D6D7"
        })]
    })
}

function QS() {
    return S.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100",
        height: "91",
        viewBox: "0 0 100 91",
        fill: "none",
        className: "empty-icon",
        children: S.jsx("path", {
            d: "M49.7901 2C39.4445 2 31.4028 2 25.1427 2.66925C18.8112 3.35189 13.7968 4.76625 9.79609 7.96082C5.68819 11.2446 3.76819 15.5145 2.86177 20.8997C2 26.0396 2 32.5804 2 40.7364V41.5529C2 49.5036 2 55.0049 2.89302 59.1052C3.37526 61.3137 4.13433 63.2323 5.32651 65.008C6.5053 66.757 8.00558 68.2294 9.79609 69.6571C12.6136 71.9103 15.9356 73.2711 19.8605 74.1188V85.6567C19.861 86.243 20.0156 86.8188 20.309 87.3266C20.6023 87.8343 21.0239 88.2562 21.5317 88.5499C22.0395 88.8435 22.6156 88.9988 23.2023 89C23.789 89.0012 24.3658 88.8484 24.8748 88.5568C27.4913 87.0622 29.8087 85.4336 31.9297 83.8988L33.2871 82.9128C34.7974 81.7829 36.34 80.6968 37.9129 79.6557C41.6815 77.2107 45.2804 75.6179 50 75.6179H50.2099C60.5555 75.6179 68.5972 75.6179 74.8573 74.9487C81.1888 74.266 86.2032 72.8517 90.2039 69.6571C91.99 68.2294 93.4947 66.757 94.669 65.008C95.8657 63.2323 96.6247 61.3137 97.107 59.1052C98 55.0049 98 49.5036 98 41.5529V40.7364C98 32.5804 98 26.0396 97.1382 20.9042C96.2318 15.5145 94.3118 11.2446 90.2039 7.96082C86.2032 4.76179 81.1888 3.35189 74.8573 2.67372C68.5972 2 60.5555 2 50.2099 2H49.7901Z",
            stroke: "#FF6B9F",
            strokeWidth: "4",
            strokeLinejoin: "round"
        })
    })
}

const ZS = "http://gsmsv-1.yujun.kr:27919";

function IS() {
    const l = en(), {setCurrentRoom: i} = cs(), [u, s] = H.useState([]), [c, f] = H.useState(!1), d = h => {
        try {
            return JSON.parse(localStorage.getItem("chat_last_read") || "{}")[h] || 0
        } catch {
            return 0
        }
    };
    H.useEffect(() => {
        p();
        const h = setInterval(p, 3e3);
        return () => clearInterval(h)
    }, []);
    const p = async () => {
        try {
            const h = Xt(), g = [];
            if (!h) {
                s(g), f(!1);
                return
            }
            const b = await Ne.get(`${ZS}/api/chat`, {
                headers: {
                    Authorization: `Bearer ${h}`,
                    "Content-Type": "application/json"
                }
            }), _ = {};
            (Array.isArray(b.data) ? b.data : []).forEach(x => {
                const w = x.opponentUserId;
                (!_[w] || new Date(x.lastActiveAt) > new Date(_[w].lastActiveAt)) && (_[w] = x)
            });
            const j = Object.values(_).sort((x, w) => new Date(w.lastActiveAt) - new Date(x.lastActiveAt)).map(x => {
                const w = d(x.roomId), N = new Date(x.lastActiveAt).getTime();
                let Y = 0;
                try {
                    Y = JSON.parse(localStorage.getItem("chat_last_sent") || "{}")[x.roomId] || 0
                } catch {
                }
                const C = N > w && N > Y;
                return {
                    roomId: x.roomId,
                    opponentId: x.opponentLoginId,
                    opponentUserId: x.opponentUserId,
                    username: x.opponentName || "알 수 없는 사용자",
                    userId: `@${x.opponentLoginId}` || "@unknown",
                    lastMessage: x.lastMessage || "메시지 없음",
                    unread: C,
                    unreadCount: C ? 1 : 0
                }
            });
            s(j.length > 0 ? j : g)
        } catch (h) {
            console.error("채팅 목록 조회 오류:", h), s([])
        } finally {
            f(!1)
        }
    }, v = h => {
        try {
            const g = JSON.parse(localStorage.getItem("chat_last_read") || "{}");
            g[h.roomId] = Date.now(), localStorage.setItem("chat_last_read", JSON.stringify(g))
        } catch (g) {
            console.error("읽음 처리 오류:", g)
        }
        i({
            roomId: h.roomId,
            opponentId: h.opponentId,
            opponentUserId: h.opponentUserId,
            otherUserName: h.username,
            tags: [],
            age: null,
            address: null,
            gender: null
        }), l("/chat")
    };
    return S.jsx("div", {
        className: Rt["main-container"],
        children: S.jsxs("div", {
            className: Rt["chat-box"],
            children: [S.jsx("div", {
                className: Rt["chat-header"],
                children: "현재 채팅"
            }), c ? S.jsx("div", {
                className: Rt.loading,
                children: "로딩 중..."
            }) : S.jsx("div", {
                className: Rt["chat-list"],
                children: u.length === 0 ? S.jsxs("div", {
                    className: Rt["empty-state"],
                    children: [S.jsx(QS, {}), S.jsxs("div", {
                        className: Rt["empty-title"],
                        children: ["아직 대화가 없어요.", S.jsx("br", {}), "랜덤 매칭으로 첫 대화를 시작해보세요!"]
                    })]
                }) : u.map(h => S.jsxs("div", {
                    className: Rt["chat-item"],
                    onClick: () => v(h),
                    children: [S.jsx("div", {
                        className: Rt.avatar,
                        children: S.jsx(q1, {})
                    }), S.jsxs("div", {
                        className: Rt["chat-info"],
                        children: [S.jsxs("div", {
                            className: Rt["chat-username"],
                            children: [h.username, " ", S.jsx("span", {children: h.userId})]
                        }), S.jsx("div", {className: Rt["chat-message"], children: h.lastMessage})]
                    }), h.unread && S.jsx("div", {className: Rt["unread-dot"]})]
                }, h.roomId))
            })]
        })
    })
}

const JS = "_mainContainer_5o1dt_1", $S = "_all_5o1dt_13", KS = "_queto_5o1dt_55", FS = "_longQueto_5o1dt_69",
    WS = "_randomButton_5o1dt_87", PS = "_cancelButton_5o1dt_127",
    kt = {mainContainer: JS, all: $S, queto: KS, longQueto: FS, randomButton: WS, cancelButton: PS},
    Vo = "http://gsmsv-1.yujun.kr:27919";

function e_() {
    const [l, i] = H.useState("idle"), [u, s] = H.useState(1), c = H.useRef(null), f = H.useRef(null),
        d = H.useRef(null), p = H.useRef(0), v = en();
    H.useEffect(() => (d.current = Xt(), () => {
        c.current && clearInterval(c.current), f.current && clearInterval(f.current)
    }), []);
    const h = async () => {
        try {
            i("waiting"), s(1);
            const j = await Ne.post(`${Vo}/api/chat/start`, {}, {
                headers: {
                    Authorization: `Bearer ${d.current}`,
                    "Content-Type": "application/json"
                }
            });
            console.log("대기열 등록 완료:", j.data);
            const x = await Ne.get(`${Vo}/api/chat`, {
                headers: {
                    Authorization: `Bearer ${d.current}`,
                    "Content-Type": "application/json"
                }
            });
            p.current = x.data?.length || 0, c.current = setInterval(() => {
                s(w => w === 3 ? 1 : w + 1)
            }, 1e3), g()
        } catch (j) {
            console.error("매칭 시작 오류:", j), i("idle"), alert("매칭 요청 중 오류가 발생했습니다.")
        }
    }, g = () => {
        f.current = setInterval(async () => {
            try {
                const j = await Ne.get(`${Vo}/api/chat`, {
                    headers: {
                        Authorization: `Bearer ${d.current}`,
                        "Content-Type": "application/json"
                    }
                });
                console.log("채팅 목록 확인:", j.data?.length), j.data && j.data.length > p.current && (clearInterval(f.current), c.current && clearInterval(c.current), i("matched"), console.log("매칭 완료!"), setTimeout(() => {
                    v("/chat")
                }, 2e3))
            } catch (j) {
                console.error("채팅 목록 조회 오류:", j)
            }
        }, 2e3)
    }, b = () => {
        c.current && clearInterval(c.current), f.current && clearInterval(f.current), i("idle"), s(1)
    }, _ = () => {
        c.current && clearInterval(c.current), f.current && clearInterval(f.current), i("idle"), s(1)
    };
    return S.jsx("div", {
        className: kt.mainContainer,
        children: S.jsxs("div", {
            className: kt.all,
            children: [S.jsx(af, {}), l === "idle" && S.jsxs(S.Fragment, {
                children: [S.jsx("div", {
                    className: kt.queto,
                    children: "오늘은 어떤 사람을 만나게 될까요?"
                }), S.jsxs("div", {
                    className: kt.longQueto,
                    children: ["어떤 인연이 기다리고 있을지 지금 확인해 보세요.", S.jsx("br", {}), "대화는 우연처럼 찾아옵니다."]
                }), S.jsx("button", {className: kt.randomButton, onClick: h, children: "랜덤매칭"})]
            }), l === "waiting" && S.jsxs(S.Fragment, {
                children: [S.jsxs("div", {
                    className: kt.queto,
                    children: ["매칭 중", ".".repeat(u)]
                }), S.jsx("div", {
                    className: kt.longQueto,
                    children: "잠시만 기다려주세요"
                }), S.jsx("button", {className: kt.cancelButton, onClick: b, children: "매칭 취소"})]
            }), l === "matched" && S.jsxs(S.Fragment, {
                children: [S.jsx("div", {
                    className: kt.queto,
                    children: "매칭 완료!"
                }), S.jsxs("div", {
                    className: kt.longQueto,
                    children: ["좋은 인연을 만났습니다.", S.jsx("br", {}), "이제 대화를 시작해보세요!"]
                }), S.jsx("button", {className: kt.randomButton, onClick: _, children: "돌아가기"})]
            })]
        })
    })
}

const t_ = "_icon_tz6qx_49", lt = {
        "user-container": "_user-container_tz6qx_1",
        "user-card": "_user-card_tz6qx_17",
        "user-wrap": "_user-wrap_tz6qx_37",
        icon: t_,
        "user-body": "_user-body_tz6qx_59",
        "user-name": "_user-name_tz6qx_67",
        "user-id": "_user-id_tz6qx_81",
        "user-tag-card": "_user-tag-card_tz6qx_97",
        "user-tags": "_user-tags_tz6qx_113",
        "user-tag": "_user-tag_tz6qx_97",
        "user-button": "_user-button_tz6qx_153"
    },
    of = "data:image/svg+xml,%3csvg%20width='110'%20height='110'%20viewBox='0%200%20110%20110'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%2029.8C1%2013.8942%2013.8942%201%2029.8%201H80.2C96.1058%201%20109%2013.8942%20109%2029.8V80.2C109%2096.1058%2096.1058%20109%2080.2%20109H29.8C13.8942%20109%201%2096.1058%201%2080.2V29.8Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M39%2035C39%2030.7565%2040.6857%2026.6869%2043.6863%2023.6863C46.6869%2020.6857%2050.7565%2019%2055%2019C59.2435%2019%2063.3131%2020.6857%2066.3137%2023.6863C69.3143%2026.6869%2071%2030.7565%2071%2035C71%2039.2435%2069.3143%2043.3131%2066.3137%2046.3137C63.3131%2049.3143%2059.2435%2051%2055%2051C50.7565%2051%2046.6869%2049.3143%2043.6863%2046.3137C40.6857%2043.3131%2039%2039.2435%2039%2035ZM39%2059C33.6957%2059%2028.6086%2061.1071%2024.8579%2064.8579C21.1071%2068.6086%2019%2073.6957%2019%2079C19%2082.1826%2020.2643%2085.2348%2022.5147%2087.4853C24.7652%2089.7357%2027.8174%2091%2031%2091H79C82.1826%2091%2085.2348%2089.7357%2087.4853%2087.4853C89.7357%2085.2348%2091%2082.1826%2091%2079C91%2073.6957%2088.8929%2068.6086%2085.1421%2064.8579C81.3914%2061.1071%2076.3043%2059%2071%2059H39Z'%20fill='%23FFA6C5'/%3e%3cpath%20d='M80.2002%200.5C96.382%200.500104%20109.5%2013.618%20109.5%2029.7998V80.2002C109.5%2096.382%2096.382%20109.5%2080.2002%20109.5H29.7998C13.618%20109.5%200.500104%2096.382%200.5%2080.2002V29.7998C0.500105%2013.618%2013.618%200.500108%2029.7998%200.5H80.2002Z'%20stroke='%23D6D6D7'/%3e%3c/svg%3e",
    n_ = "http://gsmsv-1.yujun.kr:27919",
    da = {name: "한국", handle: "@h4.zx7", tags: ["🔞", "영화", "음악", "남자", "16살", "광산구 평동"]}, a_ = {
        EXERCISE: "운동",
        RESTAURANT: "맛집",
        ANIMAL: "동물",
        TRIP: "여행",
        GAME: "게임",
        LEADING: "리딩",
        SEXUAL_PLEASURE: "🔞",
        MUSIC: "음악",
        MOVIE: "영화",
        ANIMATION: "애니메이션",
        WEBTOON: "웹툰",
        EXTROVERT: "외향적",
        INTROVERT: "내향적",
        STUDY: "공부"
    }, l_ = {MALE: "남자", FEMALE: "여자", OTHER: "기타"};

function i_() {
    const [l, i] = H.useState(da), [u, s] = H.useState(!0), c = en();
    H.useEffect(() => {
        f()
    }, []);
    const f = async () => {
        try {
            const g = Xt();
            if (!g) {
                console.error("토큰이 없습니다"), d(), s(!1);
                return
            }
            const b = await fetch(`${n_}/api/user/myprofile`, {
                method: "GET",
                headers: {Authorization: `Bearer ${g}`, "Content-Type": "application/json"}
            });
            if (b.status === 401) {
                console.error("토큰 없음/만료/무효"), d(), s(!1);
                return
            }
            if (b.status === 404) {
                console.error("내 프로필 없음"), d(), s(!1);
                return
            }
            if (b.status === 500) {
                console.error("토큰 없음/만료/무효"), d(), s(!1);
                return
            }
            if (!b.ok) throw new Error(`프로필 조회 실패: ${b.status}`);
            const _ = await b.json();
            console.log("API 응답 데이터:", _);
            const j = [];
            _.gender && j.push(l_[_.gender] || _.gender), _.age && j.push(`${_.age}살`), _.address && j.push(_.address), Array.isArray(_.categories) && _.categories.forEach(x => {
                j.push(a_[x] || x)
            }), i({
                name: _.name || da.name,
                handle: _.loginId ? `@${_.loginId}` : da.handle,
                tags: j.length > 0 ? j : da.tags
            })
        } catch (g) {
            console.error("프로필 조회 오류:", g), d()
        } finally {
            s(!1)
        }
    }, d = () => {
        try {
            const g = localStorage.getItem("hcbc_user");
            if (!g) return;
            const b = JSON.parse(g);
            i({
                name: b?.name?.trim() || da.name,
                handle: b?.id ? `@${b.id}` : da.handle,
                tags: Array.isArray(b?.categories) && b.categories.length > 0 ? b.categories : da.tags
            })
        } catch {
        }
    }, p = 3, v = (l.tags || []).slice(0, p), h = (l.tags || []).slice(p, p * 2);
    return S.jsx("div", {
        className: lt["user-container"],
        children: S.jsx("aside", {
            className: lt["user-card"],
            children: !u && S.jsxs(S.Fragment, {
                children: [S.jsx("div", {
                    className: lt["user-wrap"],
                    children: S.jsx("img", {src: of, alt: "아이콘", className: lt.icon})
                }), S.jsxs("div", {
                    className: lt["user-body"],
                    children: [S.jsx("div", {
                        className: lt["user-name"],
                        children: l.name
                    }), S.jsx("div", {
                        className: lt["user-id"],
                        children: l.handle
                    }), S.jsxs("div", {
                        className: lt["user-tag-card"],
                        children: [S.jsx("div", {
                            className: `${lt["user-tags"]} ${lt["user-tags1"]}`,
                            children: v.map((g, b) => S.jsx("span", {
                                className: lt["user-tag"],
                                children: g
                            }, `t1-${b}`))
                        }), h.length > 0 && S.jsx("div", {
                            className: `${lt["user-tags"]} ${lt["user-tags2"]}`,
                            children: h.map((g, b) => S.jsx("span", {
                                className: lt["user-tag"],
                                children: g
                            }, `t2-${b}`))
                        })]
                    }), S.jsx("button", {
                        type: "button",
                        className: lt["user-button"],
                        onClick: () => c("/profile"),
                        children: "프로필"
                    })]
                })]
            })
        })
    })
}

function r_() {
    const l = en();
    return H.useEffect(() => {
        Xt() || l("/", {replace: !0})
    }, [l]), S.jsxs("div", {
        className: "main-page",
        children: [S.jsx("div", {
            className: "chat-list-section",
            children: S.jsx(IS, {})
        }), S.jsx("div", {
            className: "random-match-section",
            children: S.jsx(e_, {})
        }), S.jsx("div", {className: "profile-section", children: S.jsx(i_, {})})]
    })
}

const fs = Ne.create({
    baseURL: "http://gsmsv-1.yujun.kr:27919",
    timeout: 1e4,
    headers: {"Content-Type": "application/json"}
});
fs.interceptors.request.use(l => {
    const i = Xt();
    return i && (l.headers.Authorization = `Bearer ${i}`), l
}, l => Promise.reject(l));
fs.interceptors.response.use(l => l, l => {
    if (l.response) switch (l.response.status) {
        case 401:
            console.error("인증 오류: 로그인이 필요합니다.");
            break;
        case 403:
            console.error("권한이 없습니다.");
            break;
        case 404:
            console.error("요청한 리소스를 찾을 수 없습니다.");
            break;
        case 500:
            console.error("서버 오류가 발생했습니다.");
            break;
        default:
            console.error("오류가 발생했습니다:", l.response.data)
    } else l.request ? console.error("서버 응답이 없습니다.") : console.error("요청 오류:", l.message);
    return Promise.reject(l)
});
const s_ = async () => {
    try {
        return (await fs.get("/api/user/myprofile")).data
    } catch (l) {
        throw console.error("프로필 조회 실패:", l), l
    }
}, u_ = async l => {
    try {
        console.log("[API] 프로필 수정 요청 시작:", l);
        const i = await fs.patch("/api/user/myprofile-update", l);
        return console.log("[API] 프로필 수정 응답:", i), console.log("[API] 프로필 수정 응답 데이터:", i.data), i.data
    } catch (i) {
        throw console.error("[API] 프로필 수정 실패:", i), console.error("[API] 에러 응답:", i.response?.data), console.error("[API] 에러 상태:", i.response?.status), i
    }
}, o_ = () => {
    const [l, i] = H.useState({
            name: "",
            loginId: "",
            age: "",
            gender: "",
            location: "",
            categories: []
        }), [u, s] = H.useState(null), [c, f] = H.useState([]), [d, p] = H.useState(!0), [v, h] = H.useState(null),
        g = H.useRef(null), b = en(), _ = () => b("/main");
    H.useEffect(() => {
        Xt() || b("/", {replace: !0})
    }, [b]), H.useEffect(() => {
        const O = document.createElement("script");
        return O.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js", O.async = !0, document.body.appendChild(O), () => {
            document.body.removeChild(O)
        }
    }, []);
    const j = ["운동", "맛집", "동물", "여행", "영화", "게임", "독서", "공부", "음악", "🔞", "웹툰", "내향형", "외향형", "애니메이션"], x = {
        운동: "EXERCISE",
        맛집: "RESTAURANT",
        동물: "ANIMAL",
        여행: "TRIP",
        영화: "MOVIE",
        게임: "GAME",
        독서: "LEADING",
        공부: "STUDY",
        음악: "MUSIC",
        "🔞": "SEXUAL_PLEASURE",
        웹툰: "WEBTOON",
        내향형: "INTROVERT",
        외향형: "EXTROVERT",
        애니메이션: "ANIMATION"
    }, w = Object.fromEntries(Object.entries(x).map(([O, R]) => [R, O])), N = () => {
        window.daum && window.daum.Postcode ? new window.daum.Postcode({
            oncomplete: O => {
                const R = `${O.sido} ${O.sigungu} ${O.bname}`;
                f(R)
            }
        }).open() : alert("주소 검색 기능을 불러오는 중입니다. 잠시 후 다시 시도해주세요.")
    };
    H.useEffect(() => {
        (async () => {
            try {
                p(!0);
                const R = await s_();
                console.log("=== 백엔드 응답 데이터 ===", R), console.log("백엔드 categories:", R.categories);
                const G = Array.isArray(R.categories) ? R.categories.map(te => {
                    const ae = w[te];
                    return console.log(`${te} → ${ae}`), ae || te
                }) : [];
                console.log("변환된 한글 카테고리:", G);
                const F = {
                    name: R.name || "",
                    loginId: R.loginId || "",
                    age: R.age || "",
                    gender: R.gender || "",
                    location: R.address || "",
                    categories: G
                };
                console.log("=== 설정할 프로필 상태 (한글 변환 후) ===", F), i(F), h(null)
            } catch (R) {
                console.error("프로필 조회 실패:", R), h("프로필을 불러오는데 실패했습니다.")
            } finally {
                p(!1)
            }
        })()
    }, []);
    const Y = O => {
        if (console.log("=== 편집 모드 시작 ==="), console.log("편집할 필드:", O), console.log("현재 profile 상태:", l), s(O), O === "categories") {
            const R = Array.isArray(l.categories) ? [...l.categories] : [];
            console.log("편집 시작 - 현재 카테고리:", R), f(R)
        } else O === "age" ? f(l.age.toString()) : O === "location" ? (f(l[O] || ""), setTimeout(() => {
            N()
        }, 0)) : f(l[O] || "")
    }, C = async O => {
        try {
            console.log("=== 적용하기 시작 ==="), console.log("수정할 필드:", O), console.log("tempValue:", c), console.log("현재 profile:", l);
            const R = l.categories.map(ae => x[ae] || ae);
            let G = {}, F = {};
            if (O === "age") {
                const ae = parseInt(c, 10);
                if (isNaN(ae) || ae <= 0) {
                    alert("유효한 나이를 입력해주세요.");
                    return
                }
                G = {name: l.name, gender: l.gender, age: ae, address: l.location, categories: R}, F = {age: ae}
            } else if (O === "location") G = {
                name: l.name,
                gender: l.gender,
                age: parseInt(l.age, 10) || 0,
                address: c,
                categories: R
            }, F = {location: c}; else if (O === "categories") {
                const ae = c.map(W => x[W] || W);
                console.log("한글 카테고리:", c), console.log("영어로 변환:", ae), G = {
                    name: l.name,
                    gender: l.gender,
                    age: parseInt(l.age, 10) || 0,
                    address: l.location,
                    categories: ae
                }, F = {categories: c}
            }
            console.log("수정 요청 데이터:", G);
            const te = await u_(G);
            console.log("수정 응답 데이터:", te), i(ae => {
                const W = {...ae, ...F};
                return console.log("업데이트된 profile:", W), W
            }), s(null), f([]), alert("프로필이 수정되었습니다.")
        } catch (R) {
            console.error("프로필 수정 실패:", R), alert("프로필 수정에 실패했습니다. 다시 시도해주세요.")
        }
    }, z = () => {
        s(null), f(u === "categories" ? [] : "")
    }, M = O => {
        if (u !== "categories") return;
        const R = Array.isArray(c) ? c : [];
        console.log("클릭 전 카테고리:", R), console.log("클릭한 카테고리:", O);
        const G = R.includes(O);
        if (console.log("선택 여부:", G), G) {
            const F = R.filter(te => te !== O);
            console.log("제거 후:", F), f(F)
        } else {
            if (console.log("현재 선택된 개수:", R.length), R.length >= 3) {
                alert("카테고리는 최대 3개까지 선택할 수 있습니다.");
                return
            }
            const F = [...R, O];
            console.log("추가 후:", F), f(F)
        }
    };
    H.useEffect(() => {
        const O = R => {
            u !== null && g.current && !g.current.contains(R.target) && z()
        };
        return document.addEventListener("mousedown", O), () => {
            document.removeEventListener("mousedown", O)
        }
    }, [u]);
    const D = (O, R, G = !0) => S.jsx("div", {
        className: "p-field",
        ref: u === O ? g : null,
        onClick: () => {
            G && u !== O && Y(O)
        },
        children: u === O ? S.jsxs(S.Fragment, {
            children: [S.jsx("input", {
                type: "text",
                value: c,
                onChange: F => f(F.target.value),
                onClick: F => F.stopPropagation(),
                onKeyDown: F => {
                    F.key === "Enter" ? (F.stopPropagation(), C(O)) : F.key === "Escape" && (F.stopPropagation(), z())
                },
                autoFocus: !0,
                readOnly: O === "location"
            }), S.jsx("button", {
                className: "p-apply", onClick: F => {
                    F.stopPropagation(), C(O)
                }, children: "적용하기"
            })]
        }) : S.jsxs(S.Fragment, {
            children: [S.jsx("span", {children: O === "age" ? `${l[O]}살` : l[O]}), G && S.jsx("button", {
                className: "p-edit",
                onClick: F => {
                    F.stopPropagation(), Y(O)
                },
                children: R
            })]
        })
    }, O), J = () => S.jsx("div", {
        className: "p-category-section",
        ref: u === "categories" ? g : null,
        children: u === "categories" ? S.jsxs(S.Fragment, {
            children: [S.jsx("div", {
                className: "p-category-grid",
                children: j.map(O => S.jsx("div", {
                    className: `p-category-item ${(Array.isArray(c) ? c : []).includes(O) ? "active" : ""}`,
                    onClick: () => M(O),
                    children: O
                }, O))
            }), S.jsxs("div", {
                style: {marginTop: "20px", display: "flex", gap: "10px", justifyContent: "center"},
                children: [S.jsx("button", {
                    className: "p-cancel", onClick: O => {
                        O.stopPropagation(), z()
                    }, children: "취소"
                }), S.jsx("button", {
                    className: "p-apply", onClick: O => {
                        O.stopPropagation(), C("categories")
                    }, children: "적용하기"
                })]
            })]
        }) : S.jsxs(S.Fragment, {
            children: [S.jsxs("div", {
                className: "p-field",
                onClick: O => {
                    O.stopPropagation(), Y("categories")
                },
                children: [S.jsx("span", {children: "관심 카테고리"}), S.jsx("button", {
                    className: "p-edit",
                    children: "카테고리 변경"
                })]
            }), S.jsx("div", {
                className: "p-category-grid",
                style: {marginTop: "10px"},
                children: l.categories && l.categories.length > 0 ? l.categories.map(O => S.jsx("div", {
                    className: "p-category-item active",
                    style: {cursor: "default"},
                    children: O
                }, O)) : S.jsx("span", {
                    className: "p-no-category",
                    style: {color: "#888"},
                    children: "선택된 카테고리가 없습니다."
                })
            })]
        })
    });
    return d ? S.jsx("div", {
        className: "p-container",
        children: S.jsx("div", {
            className: "p-wrap",
            children: S.jsx("div", {style: {textAlign: "center", padding: "50px"}, children: "로딩 중..."})
        })
    }) : v ? S.jsx("div", {
        className: "p-container",
        children: S.jsx("div", {
            className: "p-wrap",
            children: S.jsx("div", {style: {textAlign: "center", padding: "50px", color: "red"}, children: v})
        })
    }) : S.jsxs("div", {
        className: "p-container",
        children: [S.jsx("button", {
            type: "button",
            className: "p-back",
            onClick: _,
            children: "< 홈으로 가기"
        }), S.jsx("div", {
            className: "p-wrap",
            children: S.jsx("div", {
                className: "p-card",
                children: S.jsxs("div", {
                    className: "p-content",
                    children: [S.jsx("div", {
                        className: "p-icon",
                        children: S.jsx("img", {src: of, alt: "profile icon"})
                    }), S.jsxs("div", {
                        className: "p-profile-info",
                        children: [S.jsx("div", {
                            className: "p-conTent",
                            children: S.jsxs("div", {
                                className: "p-name-id",
                                children: [S.jsx("div", {
                                    className: "p-name",
                                    children: l.name
                                }), S.jsxs("div", {className: "p-id", children: ["@", l.loginId]})]
                            })
                        }), S.jsxs("div", {
                            className: "p-textFields",
                            children: [D("age", "나이 변경"), D("gender", ""), D("location", "지역 변경"), J()]
                        })]
                    })]
                })
            })
        })]
    })
};

function c_(l, i) {
    l.terminate = function () {
        const u = () => {
        };
        this.onerror = u, this.onmessage = u, this.onopen = u;
        const s = new Date, c = Math.random().toString().substring(2, 8), f = this.onclose;
        this.onclose = d => {
            const p = new Date().getTime() - s.getTime();
            i(`Discarded socket (#${c})  closed after ${p}ms, with code/reason: ${d.code}/${d.reason}`)
        }, this.close(), f?.call(l, {
            code: 4001,
            reason: `Quick discarding socket (#${c}) without waiting for the shutdown sequence.`,
            wasClean: !1
        })
    }
}

const di = {
    LF: `
`, NULL: "\0"
};

class Qn {
    get body() {
        return !this._body && this.isBinaryBody && (this._body = new TextDecoder().decode(this._binaryBody)), this._body || ""
    }

    get binaryBody() {
        return !this._binaryBody && !this.isBinaryBody && (this._binaryBody = new TextEncoder().encode(this._body)), this._binaryBody
    }

    constructor(i) {
        const {command: u, headers: s, body: c, binaryBody: f, escapeHeaderValues: d, skipContentLengthHeader: p} = i;
        this.command = u, this.headers = Object.assign({}, s || {}), f ? (this._binaryBody = f, this.isBinaryBody = !0) : (this._body = c || "", this.isBinaryBody = !1), this.escapeHeaderValues = d || !1, this.skipContentLengthHeader = p || !1
    }

    static fromRawFrame(i, u) {
        const s = {}, c = f => f.replace(/^\s+|\s+$/g, "");
        for (const f of i.headers.reverse()) {
            f.indexOf(":");
            const d = c(f[0]);
            let p = c(f[1]);
            u && i.command !== "CONNECT" && i.command !== "CONNECTED" && (p = Qn.hdrValueUnEscape(p)), s[d] = p
        }
        return new Qn({command: i.command, headers: s, binaryBody: i.binaryBody, escapeHeaderValues: u})
    }

    toString() {
        return this.serializeCmdAndHeaders()
    }

    serialize() {
        const i = this.serializeCmdAndHeaders();
        return this.isBinaryBody ? Qn.toUnit8Array(i, this._binaryBody).buffer : i + this._body + di.NULL
    }

    serializeCmdAndHeaders() {
        const i = [this.command];
        this.skipContentLengthHeader && delete this.headers["content-length"];
        for (const u of Object.keys(this.headers || {})) {
            const s = this.headers[u];
            this.escapeHeaderValues && this.command !== "CONNECT" && this.command !== "CONNECTED" ? i.push(`${u}:${Qn.hdrValueEscape(`${s}`)}`) : i.push(`${u}:${s}`)
        }
        return (this.isBinaryBody || !this.isBodyEmpty() && !this.skipContentLengthHeader) && i.push(`content-length:${this.bodyLength()}`), i.join(di.LF) + di.LF + di.LF
    }

    isBodyEmpty() {
        return this.bodyLength() === 0
    }

    bodyLength() {
        const i = this.binaryBody;
        return i ? i.length : 0
    }

    static sizeOfUTF8(i) {
        return i ? new TextEncoder().encode(i).length : 0
    }

    static toUnit8Array(i, u) {
        const s = new TextEncoder().encode(i), c = new Uint8Array([0]),
            f = new Uint8Array(s.length + u.length + c.length);
        return f.set(s), f.set(u, s.length), f.set(c, s.length + u.length), f
    }

    static marshall(i) {
        return new Qn(i).serialize()
    }

    static hdrValueEscape(i) {
        return i.replace(/\\/g, "\\\\").replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/:/g, "\\c")
    }

    static hdrValueUnEscape(i) {
        return i.replace(/\\r/g, "\r").replace(/\\n/g, `
`).replace(/\\c/g, ":").replace(/\\\\/g, "\\")
    }
}

const kp = 0, Gr = 10, Yr = 13, f_ = 58;

class d_ {
    constructor(i, u) {
        this.onFrame = i, this.onIncomingPing = u, this._encoder = new TextEncoder, this._decoder = new TextDecoder, this._token = [], this._initState()
    }

    parseChunk(i, u = !1) {
        let s;
        if (typeof i == "string" ? s = this._encoder.encode(i) : s = new Uint8Array(i), u && s[s.length - 1] !== 0) {
            const c = new Uint8Array(s.length + 1);
            c.set(s, 0), c[s.length] = 0, s = c
        }
        for (let c = 0; c < s.length; c++) {
            const f = s[c];
            this._onByte(f)
        }
    }

    _collectFrame(i) {
        if (i !== kp && i !== Yr) {
            if (i === Gr) {
                this.onIncomingPing();
                return
            }
            this._onByte = this._collectCommand, this._reinjectByte(i)
        }
    }

    _collectCommand(i) {
        if (i !== Yr) {
            if (i === Gr) {
                this._results.command = this._consumeTokenAsUTF8(), this._onByte = this._collectHeaders;
                return
            }
            this._consumeByte(i)
        }
    }

    _collectHeaders(i) {
        if (i !== Yr) {
            if (i === Gr) {
                this._setupCollectBody();
                return
            }
            this._onByte = this._collectHeaderKey, this._reinjectByte(i)
        }
    }

    _reinjectByte(i) {
        this._onByte(i)
    }

    _collectHeaderKey(i) {
        if (i === f_) {
            this._headerKey = this._consumeTokenAsUTF8(), this._onByte = this._collectHeaderValue;
            return
        }
        this._consumeByte(i)
    }

    _collectHeaderValue(i) {
        if (i !== Yr) {
            if (i === Gr) {
                this._results.headers.push([this._headerKey, this._consumeTokenAsUTF8()]), this._headerKey = void 0, this._onByte = this._collectHeaders;
                return
            }
            this._consumeByte(i)
        }
    }

    _setupCollectBody() {
        const i = this._results.headers.filter(u => u[0] === "content-length")[0];
        i ? (this._bodyBytesRemaining = parseInt(i[1], 10), this._onByte = this._collectBodyFixedSize) : this._onByte = this._collectBodyNullTerminated
    }

    _collectBodyNullTerminated(i) {
        if (i === kp) {
            this._retrievedBody();
            return
        }
        this._consumeByte(i)
    }

    _collectBodyFixedSize(i) {
        if (this._bodyBytesRemaining-- === 0) {
            this._retrievedBody();
            return
        }
        this._consumeByte(i)
    }

    _retrievedBody() {
        this._results.binaryBody = this._consumeTokenAsRaw();
        try {
            this.onFrame(this._results)
        } catch (i) {
            console.log("Ignoring an exception thrown by a frame handler. Original exception: ", i)
        }
        this._initState()
    }

    _consumeByte(i) {
        this._token.push(i)
    }

    _consumeTokenAsUTF8() {
        return this._decoder.decode(this._consumeTokenAsRaw())
    }

    _consumeTokenAsRaw() {
        const i = new Uint8Array(this._token);
        return this._token = [], i
    }

    _initState() {
        this._results = {
            command: void 0,
            headers: [],
            binaryBody: void 0
        }, this._token = [], this._headerKey = void 0, this._onByte = this._collectFrame
    }
}

var Zn;
(function (l) {
    l[l.CONNECTING = 0] = "CONNECTING", l[l.OPEN = 1] = "OPEN", l[l.CLOSING = 2] = "CLOSING", l[l.CLOSED = 3] = "CLOSED"
})(Zn || (Zn = {}));
var Vt;
(function (l) {
    l[l.ACTIVE = 0] = "ACTIVE", l[l.DEACTIVATING = 1] = "DEACTIVATING", l[l.INACTIVE = 2] = "INACTIVE"
})(Vt || (Vt = {}));
var ns;
(function (l) {
    l[l.LINEAR = 0] = "LINEAR", l[l.EXPONENTIAL = 1] = "EXPONENTIAL"
})(ns || (ns = {}));
var mi;
(function (l) {
    l.Interval = "interval", l.Worker = "worker"
})(mi || (mi = {}));

class h_ {
    constructor(i, u = mi.Interval, s) {
        this._interval = i, this._strategy = u, this._debug = s, this._workerScript = `
    var startTime = Date.now();
    setInterval(function() {
        self.postMessage(Date.now() - startTime);
    }, ${this._interval});
  `
    }

    start(i) {
        this.stop(), this.shouldUseWorker() ? this.runWorker(i) : this.runInterval(i)
    }

    stop() {
        this.disposeWorker(), this.disposeInterval()
    }

    shouldUseWorker() {
        return typeof Worker < "u" && this._strategy === mi.Worker
    }

    runWorker(i) {
        this._debug("Using runWorker for outgoing pings"), this._worker || (this._worker = new Worker(URL.createObjectURL(new Blob([this._workerScript], {type: "text/javascript"}))), this._worker.onmessage = u => i(u.data))
    }

    runInterval(i) {
        if (this._debug("Using runInterval for outgoing pings"), !this._timer) {
            const u = Date.now();
            this._timer = setInterval(() => {
                i(Date.now() - u)
            }, this._interval)
        }
    }

    disposeWorker() {
        this._worker && (this._worker.terminate(), delete this._worker, this._debug("Outgoing ping disposeWorker"))
    }

    disposeInterval() {
        this._timer && (clearInterval(this._timer), delete this._timer, this._debug("Outgoing ping disposeInterval"))
    }
}

class rt {
    constructor(i) {
        this.versions = i
    }

    supportedVersions() {
        return this.versions.join(",")
    }

    protocolVersions() {
        return this.versions.map(i => `v${i.replace(".", "")}.stomp`)
    }
}

rt.V1_0 = "1.0";
rt.V1_1 = "1.1";
rt.V1_2 = "1.2";
rt.default = new rt([rt.V1_2, rt.V1_1, rt.V1_0]);

class m_ {
    get connectedVersion() {
        return this._connectedVersion
    }

    get connected() {
        return this._connected
    }

    constructor(i, u, s) {
        this._client = i, this._webSocket = u, this._connected = !1, this._serverFrameHandlers = {
            CONNECTED: c => {
                this.debug(`connected to server ${c.headers.server}`), this._connected = !0, this._connectedVersion = c.headers.version, this._connectedVersion === rt.V1_2 && (this._escapeHeaderValues = !0), this._setupHeartbeat(c.headers), this.onConnect(c)
            }, MESSAGE: c => {
                const f = c.headers.subscription, d = this._subscriptions[f] || this.onUnhandledMessage, p = c,
                    v = this, h = this._connectedVersion === rt.V1_2 ? p.headers.ack : p.headers["message-id"];
                p.ack = (g = {}) => v.ack(h, f, g), p.nack = (g = {}) => v.nack(h, f, g), d(p)
            }, RECEIPT: c => {
                const f = this._receiptWatchers[c.headers["receipt-id"]];
                f ? (f(c), delete this._receiptWatchers[c.headers["receipt-id"]]) : this.onUnhandledReceipt(c)
            }, ERROR: c => {
                this.onStompError(c)
            }
        }, this._counter = 0, this._subscriptions = {}, this._receiptWatchers = {}, this._partialData = "", this._escapeHeaderValues = !1, this._lastServerActivityTS = Date.now(), this.debug = s.debug, this.stompVersions = s.stompVersions, this.connectHeaders = s.connectHeaders, this.disconnectHeaders = s.disconnectHeaders, this.heartbeatIncoming = s.heartbeatIncoming, this.heartbeatToleranceMultiplier = s.heartbeatGracePeriods, this.heartbeatOutgoing = s.heartbeatOutgoing, this.splitLargeFrames = s.splitLargeFrames, this.maxWebSocketChunkSize = s.maxWebSocketChunkSize, this.forceBinaryWSFrames = s.forceBinaryWSFrames, this.logRawCommunication = s.logRawCommunication, this.appendMissingNULLonIncoming = s.appendMissingNULLonIncoming, this.discardWebsocketOnCommFailure = s.discardWebsocketOnCommFailure, this.onConnect = s.onConnect, this.onDisconnect = s.onDisconnect, this.onStompError = s.onStompError, this.onWebSocketClose = s.onWebSocketClose, this.onWebSocketError = s.onWebSocketError, this.onUnhandledMessage = s.onUnhandledMessage, this.onUnhandledReceipt = s.onUnhandledReceipt, this.onUnhandledFrame = s.onUnhandledFrame, this.onHeartbeatReceived = s.onHeartbeatReceived, this.onHeartbeatLost = s.onHeartbeatLost
    }

    start() {
        const i = new d_(u => {
            const s = Qn.fromRawFrame(u, this._escapeHeaderValues);
            this.logRawCommunication || this.debug(`<<< ${s}`), (this._serverFrameHandlers[s.command] || this.onUnhandledFrame)(s)
        }, () => {
            this.debug("<<< PONG"), this.onHeartbeatReceived()
        });
        this._webSocket.onmessage = u => {
            if (this.debug("Received data"), this._lastServerActivityTS = Date.now(), this.logRawCommunication) {
                const s = u.data instanceof ArrayBuffer ? new TextDecoder().decode(u.data) : u.data;
                this.debug(`<<< ${s}`)
            }
            i.parseChunk(u.data, this.appendMissingNULLonIncoming)
        }, this._webSocket.onclose = u => {
            this.debug(`Connection closed to ${this._webSocket.url}`), this._cleanUp(), this.onWebSocketClose(u)
        }, this._webSocket.onerror = u => {
            this.onWebSocketError(u)
        }, this._webSocket.onopen = () => {
            const u = Object.assign({}, this.connectHeaders);
            this.debug("Web Socket Opened..."), u["accept-version"] = this.stompVersions.supportedVersions(), u["heart-beat"] = [this.heartbeatOutgoing, this.heartbeatIncoming].join(","), this._transmit({
                command: "CONNECT",
                headers: u
            })
        }
    }

    _setupHeartbeat(i) {
        if (i.version !== rt.V1_1 && i.version !== rt.V1_2 || !i["heart-beat"]) return;
        const [u, s] = i["heart-beat"].split(",").map(c => parseInt(c, 10));
        if (this.heartbeatOutgoing !== 0 && s !== 0) {
            const c = Math.max(this.heartbeatOutgoing, s);
            this.debug(`send PING every ${c}ms`), this._pinger = new h_(c, this._client.heartbeatStrategy, this.debug), this._pinger.start(() => {
                this._webSocket.readyState === Zn.OPEN && (this._webSocket.send(di.LF), this.debug(">>> PING"))
            })
        }
        if (this.heartbeatIncoming !== 0 && u !== 0) {
            const c = Math.max(this.heartbeatIncoming, u);
            this.debug(`check PONG every ${c}ms`), this._ponger = setInterval(() => {
                const f = Date.now() - this._lastServerActivityTS;
                f > c * this.heartbeatToleranceMultiplier && (this.debug(`did not receive server activity for the last ${f}ms`), this.onHeartbeatLost(), this._closeOrDiscardWebsocket())
            }, c)
        }
    }

    _closeOrDiscardWebsocket() {
        this.discardWebsocketOnCommFailure ? (this.debug("Discarding websocket, the underlying socket may linger for a while"), this.discardWebsocket()) : (this.debug("Issuing close on the websocket"), this._closeWebsocket())
    }

    forceDisconnect() {
        this._webSocket && (this._webSocket.readyState === Zn.CONNECTING || this._webSocket.readyState === Zn.OPEN) && this._closeOrDiscardWebsocket()
    }

    _closeWebsocket() {
        this._webSocket.onmessage = () => {
        }, this._webSocket.close()
    }

    discardWebsocket() {
        typeof this._webSocket.terminate != "function" && c_(this._webSocket, i => this.debug(i)), this._webSocket.terminate()
    }

    _transmit(i) {
        const {command: u, headers: s, body: c, binaryBody: f, skipContentLengthHeader: d} = i, p = new Qn({
            command: u,
            headers: s,
            body: c,
            binaryBody: f,
            escapeHeaderValues: this._escapeHeaderValues,
            skipContentLengthHeader: d
        });
        let v = p.serialize();
        if (this.logRawCommunication ? this.debug(`>>> ${v}`) : this.debug(`>>> ${p}`), this.forceBinaryWSFrames && typeof v == "string" && (v = new TextEncoder().encode(v)), typeof v != "string" || !this.splitLargeFrames) this._webSocket.send(v); else {
            let h = v;
            for (; h.length > 0;) {
                const g = h.substring(0, this.maxWebSocketChunkSize);
                h = h.substring(this.maxWebSocketChunkSize), this._webSocket.send(g), this.debug(`chunk sent = ${g.length}, remaining = ${h.length}`)
            }
        }
    }

    dispose() {
        if (this.connected) try {
            const i = Object.assign({}, this.disconnectHeaders);
            i.receipt || (i.receipt = `close-${this._counter++}`), this.watchForReceipt(i.receipt, u => {
                this._closeWebsocket(), this._cleanUp(), this.onDisconnect(u)
            }), this._transmit({command: "DISCONNECT", headers: i})
        } catch (i) {
            this.debug(`Ignoring error during disconnect ${i}`)
        } else (this._webSocket.readyState === Zn.CONNECTING || this._webSocket.readyState === Zn.OPEN) && this._closeWebsocket()
    }

    _cleanUp() {
        this._connected = !1, this._pinger && (this._pinger.stop(), this._pinger = void 0), this._ponger && (clearInterval(this._ponger), this._ponger = void 0)
    }

    publish(i) {
        const {destination: u, headers: s, body: c, binaryBody: f, skipContentLengthHeader: d} = i,
            p = Object.assign({destination: u}, s);
        this._transmit({command: "SEND", headers: p, body: c, binaryBody: f, skipContentLengthHeader: d})
    }

    watchForReceipt(i, u) {
        this._receiptWatchers[i] = u
    }

    subscribe(i, u, s = {}) {
        s = Object.assign({}, s), s.id || (s.id = `sub-${this._counter++}`), s.destination = i, this._subscriptions[s.id] = u, this._transmit({
            command: "SUBSCRIBE",
            headers: s
        });
        const c = this;
        return {
            id: s.id, unsubscribe(f) {
                return c.unsubscribe(s.id, f)
            }
        }
    }

    unsubscribe(i, u = {}) {
        u = Object.assign({}, u), delete this._subscriptions[i], u.id = i, this._transmit({
            command: "UNSUBSCRIBE",
            headers: u
        })
    }

    begin(i) {
        const u = i || `tx-${this._counter++}`;
        this._transmit({command: "BEGIN", headers: {transaction: u}});
        const s = this;
        return {
            id: u, commit() {
                s.commit(u)
            }, abort() {
                s.abort(u)
            }
        }
    }

    commit(i) {
        this._transmit({command: "COMMIT", headers: {transaction: i}})
    }

    abort(i) {
        this._transmit({command: "ABORT", headers: {transaction: i}})
    }

    ack(i, u, s = {}) {
        s = Object.assign({}, s), this._connectedVersion === rt.V1_2 ? s.id = i : s["message-id"] = i, s.subscription = u, this._transmit({
            command: "ACK",
            headers: s
        })
    }

    nack(i, u, s = {}) {
        return s = Object.assign({}, s), this._connectedVersion === rt.V1_2 ? s.id = i : s["message-id"] = i, s.subscription = u, this._transmit({
            command: "NACK",
            headers: s
        })
    }
}

class p_ {
    get webSocket() {
        return this._stompHandler?._webSocket
    }

    get disconnectHeaders() {
        return this._disconnectHeaders
    }

    set disconnectHeaders(i) {
        this._disconnectHeaders = i, this._stompHandler && (this._stompHandler.disconnectHeaders = this._disconnectHeaders)
    }

    get connected() {
        return !!this._stompHandler && this._stompHandler.connected
    }

    get connectedVersion() {
        return this._stompHandler ? this._stompHandler.connectedVersion : void 0
    }

    get active() {
        return this.state === Vt.ACTIVE
    }

    _changeState(i) {
        this.state = i, this.onChangeState(i)
    }

    constructor(i = {}) {
        this.stompVersions = rt.default, this.connectionTimeout = 0, this.reconnectDelay = 5e3, this._nextReconnectDelay = 0, this.maxReconnectDelay = 900 * 1e3, this.reconnectTimeMode = ns.LINEAR, this.heartbeatIncoming = 1e4, this.heartbeatToleranceMultiplier = 2, this.heartbeatOutgoing = 1e4, this.heartbeatStrategy = mi.Interval, this.splitLargeFrames = !1, this.maxWebSocketChunkSize = 8 * 1024, this.forceBinaryWSFrames = !1, this.appendMissingNULLonIncoming = !1, this.discardWebsocketOnCommFailure = !1, this.state = Vt.INACTIVE;
        const u = () => {
        };
        this.debug = u, this.beforeConnect = u, this.onConnect = u, this.onDisconnect = u, this.onUnhandledMessage = u, this.onUnhandledReceipt = u, this.onUnhandledFrame = u, this.onHeartbeatReceived = u, this.onHeartbeatLost = u, this.onStompError = u, this.onWebSocketClose = u, this.onWebSocketError = u, this.logRawCommunication = !1, this.onChangeState = u, this.connectHeaders = {}, this._disconnectHeaders = {}, this.configure(i)
    }

    configure(i) {
        Object.assign(this, i), this.maxReconnectDelay > 0 && this.maxReconnectDelay < this.reconnectDelay && (this.debug(`Warning: maxReconnectDelay (${this.maxReconnectDelay}ms) is less than reconnectDelay (${this.reconnectDelay}ms). Using reconnectDelay as the maxReconnectDelay delay.`), this.maxReconnectDelay = this.reconnectDelay)
    }

    activate() {
        const i = () => {
            if (this.active) {
                this.debug("Already ACTIVE, ignoring request to activate");
                return
            }
            this._changeState(Vt.ACTIVE), this._nextReconnectDelay = this.reconnectDelay, this._connect()
        };
        this.state === Vt.DEACTIVATING ? (this.debug("Waiting for deactivation to finish before activating"), this.deactivate().then(() => {
            i()
        })) : i()
    }

    async _connect() {
        if (await this.beforeConnect(this), this._stompHandler) {
            this.debug("There is already a stompHandler, skipping the call to connect");
            return
        }
        if (!this.active) {
            this.debug("Client has been marked inactive, will not attempt to connect");
            return
        }
        this.connectionTimeout > 0 && (this._connectionWatcher && clearTimeout(this._connectionWatcher), this._connectionWatcher = setTimeout(() => {
            this.connected || (this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`), this.forceDisconnect())
        }, this.connectionTimeout)), this.debug("Opening Web Socket...");
        const i = this._createWebSocket();
        this._stompHandler = new m_(this, i, {
            debug: this.debug,
            stompVersions: this.stompVersions,
            connectHeaders: this.connectHeaders,
            disconnectHeaders: this._disconnectHeaders,
            heartbeatIncoming: this.heartbeatIncoming,
            heartbeatGracePeriods: this.heartbeatToleranceMultiplier,
            heartbeatOutgoing: this.heartbeatOutgoing,
            heartbeatStrategy: this.heartbeatStrategy,
            splitLargeFrames: this.splitLargeFrames,
            maxWebSocketChunkSize: this.maxWebSocketChunkSize,
            forceBinaryWSFrames: this.forceBinaryWSFrames,
            logRawCommunication: this.logRawCommunication,
            appendMissingNULLonIncoming: this.appendMissingNULLonIncoming,
            discardWebsocketOnCommFailure: this.discardWebsocketOnCommFailure,
            onConnect: u => {
                if (this._connectionWatcher && (clearTimeout(this._connectionWatcher), this._connectionWatcher = void 0), this._nextReconnectDelay = this.reconnectDelay, !this.active) {
                    this.debug("STOMP got connected while deactivate was issued, will disconnect now"), this._disposeStompHandler();
                    return
                }
                this.onConnect(u)
            },
            onDisconnect: u => {
                this.onDisconnect(u)
            },
            onStompError: u => {
                this.onStompError(u)
            },
            onWebSocketClose: u => {
                this._stompHandler = void 0, this.state === Vt.DEACTIVATING && this._changeState(Vt.INACTIVE), this.onWebSocketClose(u), this.active && this._schedule_reconnect()
            },
            onWebSocketError: u => {
                this.onWebSocketError(u)
            },
            onUnhandledMessage: u => {
                this.onUnhandledMessage(u)
            },
            onUnhandledReceipt: u => {
                this.onUnhandledReceipt(u)
            },
            onUnhandledFrame: u => {
                this.onUnhandledFrame(u)
            },
            onHeartbeatReceived: () => {
                this.onHeartbeatReceived()
            },
            onHeartbeatLost: () => {
                this.onHeartbeatLost()
            }
        }), this._stompHandler.start()
    }

    _createWebSocket() {
        let i;
        if (this.webSocketFactory) i = this.webSocketFactory(); else if (this.brokerURL) i = new WebSocket(this.brokerURL, this.stompVersions.protocolVersions()); else throw new Error("Either brokerURL or webSocketFactory must be provided");
        return i.binaryType = "arraybuffer", i
    }

    _schedule_reconnect() {
        this._nextReconnectDelay > 0 && (this.debug(`STOMP: scheduling reconnection in ${this._nextReconnectDelay}ms`), this._reconnector = setTimeout(() => {
            this.reconnectTimeMode === ns.EXPONENTIAL && (this._nextReconnectDelay = this._nextReconnectDelay * 2, this.maxReconnectDelay !== 0 && (this._nextReconnectDelay = Math.min(this._nextReconnectDelay, this.maxReconnectDelay))), this._connect()
        }, this._nextReconnectDelay))
    }

    async deactivate(i = {}) {
        const u = i.force || !1, s = this.active;
        let c;
        if (this.state === Vt.INACTIVE) return this.debug("Already INACTIVE, nothing more to do"), Promise.resolve();
        if (this._changeState(Vt.DEACTIVATING), this._nextReconnectDelay = 0, this._reconnector && (clearTimeout(this._reconnector), this._reconnector = void 0), this._stompHandler && this.webSocket.readyState !== Zn.CLOSED) {
            const f = this._stompHandler.onWebSocketClose;
            c = new Promise((d, p) => {
                this._stompHandler.onWebSocketClose = v => {
                    f(v), d()
                }
            })
        } else return this._changeState(Vt.INACTIVE), Promise.resolve();
        return u ? this._stompHandler?.discardWebsocket() : s && this._disposeStompHandler(), c
    }

    forceDisconnect() {
        this._stompHandler && this._stompHandler.forceDisconnect()
    }

    _disposeStompHandler() {
        this._stompHandler && this._stompHandler.dispose()
    }

    publish(i) {
        this._checkConnection(), this._stompHandler.publish(i)
    }

    _checkConnection() {
        if (!this.connected) throw new TypeError("There is no underlying STOMP connection")
    }

    watchForReceipt(i, u) {
        this._checkConnection(), this._stompHandler.watchForReceipt(i, u)
    }

    subscribe(i, u, s = {}) {
        return this._checkConnection(), this._stompHandler.subscribe(i, u, s)
    }

    unsubscribe(i, u = {}) {
        this._checkConnection(), this._stompHandler.unsubscribe(i, u)
    }

    begin(i) {
        return this._checkConnection(), this._stompHandler.begin(i)
    }

    commit(i) {
        this._checkConnection(), this._stompHandler.commit(i)
    }

    abort(i) {
        this._checkConnection(), this._stompHandler.abort(i)
    }

    ack(i, u, s = {}) {
        this._checkConnection(), this._stompHandler.ack(i, u, s)
    }

    nack(i, u, s = {}) {
        this._checkConnection(), this._stompHandler.nack(i, u, s)
    }
}

var Xo = {exports: {}}, Qr = {}, Vp;

function g_() {
    return Vp || (Vp = 1, globalThis.crypto && globalThis.crypto.getRandomValues ? Qr.randomBytes = function (l) {
        var i = new Uint8Array(l);
        return globalThis.crypto.getRandomValues(i), i
    } : Qr.randomBytes = function (l) {
        for (var i = new Array(l), u = 0; u < l; u++) i[u] = Math.floor(Math.random() * 256);
        return i
    }), Qr
}

var Go, Xp;

function ol() {
    if (Xp) return Go;
    Xp = 1;
    var l = g_(), i = "abcdefghijklmnopqrstuvwxyz012345";
    return Go = {
        string: function (u) {
            for (var s = i.length, c = l.randomBytes(u), f = [], d = 0; d < u; d++) f.push(i.substr(c[d] % s, 1));
            return f.join("")
        }, number: function (u) {
            return Math.floor(Math.random() * u)
        }, numberString: function (u) {
            var s = ("" + (u - 1)).length, c = new Array(s + 1).join("0");
            return (c + this.number(u)).slice(-s)
        }
    }, Go
}

var Gp;

function In() {
    return Gp || (Gp = 1, (function (l) {
        var i = ol(), u = {}, s = !1, c = globalThis.chrome && globalThis.chrome.app && globalThis.chrome.app.runtime;
        l.exports = {
            attachEvent: function (d, p) {
                typeof globalThis.addEventListener < "u" ? globalThis.addEventListener(d, p, !1) : globalThis.document && globalThis.attachEvent && (globalThis.document.attachEvent("on" + d, p), globalThis.attachEvent("on" + d, p))
            }, detachEvent: function (d, p) {
                typeof globalThis.addEventListener < "u" ? globalThis.removeEventListener(d, p, !1) : globalThis.document && globalThis.detachEvent && (globalThis.document.detachEvent("on" + d, p), globalThis.detachEvent("on" + d, p))
            }, unloadAdd: function (d) {
                if (c) return null;
                var p = i.string(8);
                return u[p] = d, s && setTimeout(this.triggerUnloadCallbacks, 0), p
            }, unloadDel: function (d) {
                d in u && delete u[d]
            }, triggerUnloadCallbacks: function () {
                for (var d in u) u[d](), delete u[d]
            }
        };
        var f = function () {
            s || (s = !0, l.exports.triggerUnloadCallbacks())
        };
        c || l.exports.attachEvent("unload", f)
    })(Xo)), Xo.exports
}

var Yo, Yp;

function v_() {
    return Yp || (Yp = 1, Yo = function (i, u) {
        if (u = u.split(":")[0], i = +i, !i) return !1;
        switch (u) {
            case"http":
            case"ws":
                return i !== 80;
            case"https":
            case"wss":
                return i !== 443;
            case"ftp":
                return i !== 21;
            case"gopher":
                return i !== 70;
            case"file":
                return !1
        }
        return i !== 0
    }), Yo
}

var Zr = {}, Qp;

function y_() {
    if (Qp) return Zr;
    Qp = 1;
    var l = Object.prototype.hasOwnProperty, i;

    function u(d) {
        try {
            return decodeURIComponent(d.replace(/\+/g, " "))
        } catch {
            return null
        }
    }

    function s(d) {
        try {
            return encodeURIComponent(d)
        } catch {
            return null
        }
    }

    function c(d) {
        for (var p = /([^=?#&]+)=?([^&]*)/g, v = {}, h; h = p.exec(d);) {
            var g = u(h[1]), b = u(h[2]);
            g === null || b === null || g in v || (v[g] = b)
        }
        return v
    }

    function f(d, p) {
        p = p || "";
        var v = [], h, g;
        typeof p != "string" && (p = "?");
        for (g in d) if (l.call(d, g)) {
            if (h = d[g], !h && (h === null || h === i || isNaN(h)) && (h = ""), g = s(g), h = s(h), g === null || h === null) continue;
            v.push(g + "=" + h)
        }
        return v.length ? p + v.join("&") : ""
    }

    return Zr.stringify = f, Zr.parse = c, Zr
}

var Qo, Zp;

function k1() {
    if (Zp) return Qo;
    Zp = 1;
    var l = v_(), i = y_(), u = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
        s = /[\n\r\t]/g, c = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, f = /:\d+$/,
        d = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, p = /^[a-zA-Z]:/;

    function v(C) {
        return (C || "").toString().replace(u, "")
    }

    var h = [["#", "hash"], ["?", "query"], function (z, M) {
            return _(M.protocol) ? z.replace(/\\/g, "/") : z
        }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]],
        g = {hash: 1, query: 1};

    function b(C) {
        var z;
        typeof window < "u" ? z = window : typeof globalThis < "u" ? z = globalThis : typeof self < "u" ? z = self : z = {};
        var M = z.location || {};
        C = C || M;
        var D = {}, J = typeof C, O;
        if (C.protocol === "blob:") D = new w(unescape(C.pathname), {}); else if (J === "string") {
            D = new w(C, {});
            for (O in g) delete D[O]
        } else if (J === "object") {
            for (O in C) O in g || (D[O] = C[O]);
            D.slashes === void 0 && (D.slashes = c.test(C.href))
        }
        return D
    }

    function _(C) {
        return C === "file:" || C === "ftp:" || C === "http:" || C === "https:" || C === "ws:" || C === "wss:"
    }

    function j(C, z) {
        C = v(C), C = C.replace(s, ""), z = z || {};
        var M = d.exec(C), D = M[1] ? M[1].toLowerCase() : "", J = !!M[2], O = !!M[3], R = 0, G;
        return J ? O ? (G = M[2] + M[3] + M[4], R = M[2].length + M[3].length) : (G = M[2] + M[4], R = M[2].length) : O ? (G = M[3] + M[4], R = M[3].length) : G = M[4], D === "file:" ? R >= 2 && (G = G.slice(2)) : _(D) ? G = M[4] : D ? J && (G = G.slice(2)) : R >= 2 && _(z.protocol) && (G = M[4]), {
            protocol: D,
            slashes: J || _(D),
            slashesCount: R,
            rest: G
        }
    }

    function x(C, z) {
        if (C === "") return z;
        for (var M = (z || "/").split("/").slice(0, -1).concat(C.split("/")), D = M.length, J = M[D - 1], O = !1, R = 0; D--;) M[D] === "." ? M.splice(D, 1) : M[D] === ".." ? (M.splice(D, 1), R++) : R && (D === 0 && (O = !0), M.splice(D, 1), R--);
        return O && M.unshift(""), (J === "." || J === "..") && M.push(""), M.join("/")
    }

    function w(C, z, M) {
        if (C = v(C), C = C.replace(s, ""), !(this instanceof w)) return new w(C, z, M);
        var D, J, O, R, G, F, te = h.slice(), ae = typeof z, W = this, Ee = 0;
        for (ae !== "object" && ae !== "string" && (M = z, z = null), M && typeof M != "function" && (M = i.parse), z = b(z), J = j(C || "", z), D = !J.protocol && !J.slashes, W.slashes = J.slashes || D && z.slashes, W.protocol = J.protocol || z.protocol || "", C = J.rest, (J.protocol === "file:" && (J.slashesCount !== 2 || p.test(C)) || !J.slashes && (J.protocol || J.slashesCount < 2 || !_(W.protocol))) && (te[3] = [/(.*)/, "pathname"]); Ee < te.length; Ee++) {
            if (R = te[Ee], typeof R == "function") {
                C = R(C, W);
                continue
            }
            O = R[0], F = R[1], O !== O ? W[F] = C : typeof O == "string" ? (G = O === "@" ? C.lastIndexOf(O) : C.indexOf(O), ~G && (typeof R[2] == "number" ? (W[F] = C.slice(0, G), C = C.slice(G + R[2])) : (W[F] = C.slice(G), C = C.slice(0, G)))) : (G = O.exec(C)) && (W[F] = G[1], C = C.slice(0, G.index)), W[F] = W[F] || D && R[3] && z[F] || "", R[4] && (W[F] = W[F].toLowerCase())
        }
        M && (W.query = M(W.query)), D && z.slashes && W.pathname.charAt(0) !== "/" && (W.pathname !== "" || z.pathname !== "") && (W.pathname = x(W.pathname, z.pathname)), W.pathname.charAt(0) !== "/" && _(W.protocol) && (W.pathname = "/" + W.pathname), l(W.port, W.protocol) || (W.host = W.hostname, W.port = ""), W.username = W.password = "", W.auth && (G = W.auth.indexOf(":"), ~G ? (W.username = W.auth.slice(0, G), W.username = encodeURIComponent(decodeURIComponent(W.username)), W.password = W.auth.slice(G + 1), W.password = encodeURIComponent(decodeURIComponent(W.password))) : W.username = encodeURIComponent(decodeURIComponent(W.auth)), W.auth = W.password ? W.username + ":" + W.password : W.username), W.origin = W.protocol !== "file:" && _(W.protocol) && W.host ? W.protocol + "//" + W.host : "null", W.href = W.toString()
    }

    function N(C, z, M) {
        var D = this;
        switch (C) {
            case"query":
                typeof z == "string" && z.length && (z = (M || i.parse)(z)), D[C] = z;
                break;
            case"port":
                D[C] = z, l(z, D.protocol) ? z && (D.host = D.hostname + ":" + z) : (D.host = D.hostname, D[C] = "");
                break;
            case"hostname":
                D[C] = z, D.port && (z += ":" + D.port), D.host = z;
                break;
            case"host":
                D[C] = z, f.test(z) ? (z = z.split(":"), D.port = z.pop(), D.hostname = z.join(":")) : (D.hostname = z, D.port = "");
                break;
            case"protocol":
                D.protocol = z.toLowerCase(), D.slashes = !M;
                break;
            case"pathname":
            case"hash":
                if (z) {
                    var J = C === "pathname" ? "/" : "#";
                    D[C] = z.charAt(0) !== J ? J + z : z
                } else D[C] = z;
                break;
            case"username":
            case"password":
                D[C] = encodeURIComponent(z);
                break;
            case"auth":
                var O = z.indexOf(":");
                ~O ? (D.username = z.slice(0, O), D.username = encodeURIComponent(decodeURIComponent(D.username)), D.password = z.slice(O + 1), D.password = encodeURIComponent(decodeURIComponent(D.password))) : D.username = encodeURIComponent(decodeURIComponent(z))
        }
        for (var R = 0; R < h.length; R++) {
            var G = h[R];
            G[4] && (D[G[1]] = D[G[1]].toLowerCase())
        }
        return D.auth = D.password ? D.username + ":" + D.password : D.username, D.origin = D.protocol !== "file:" && _(D.protocol) && D.host ? D.protocol + "//" + D.host : "null", D.href = D.toString(), D
    }

    function Y(C) {
        (!C || typeof C != "function") && (C = i.stringify);
        var z, M = this, D = M.host, J = M.protocol;
        J && J.charAt(J.length - 1) !== ":" && (J += ":");
        var O = J + (M.protocol && M.slashes || _(M.protocol) ? "//" : "");
        return M.username ? (O += M.username, M.password && (O += ":" + M.password), O += "@") : M.password ? (O += ":" + M.password, O += "@") : M.protocol !== "file:" && _(M.protocol) && !D && M.pathname !== "/" && (O += "@"), (D[D.length - 1] === ":" || f.test(M.hostname) && !M.port) && (D += ":"), O += D + M.pathname, z = typeof M.query == "object" ? C(M.query) : M.query, z && (O += z.charAt(0) !== "?" ? "?" + z : z), M.hash && (O += M.hash), O
    }

    return w.prototype = {
        set: N,
        toString: Y
    }, w.extractProtocol = j, w.location = b, w.trimLeft = v, w.qs = i, Qo = w, Qo
}

var Zo, Ip;

function Lt() {
    if (Ip) return Zo;
    Ip = 1;
    var l = k1();
    return Zo = {
        getOrigin: function (i) {
            if (!i) return null;
            var u = new l(i);
            if (u.protocol === "file:") return null;
            var s = u.port;
            return s || (s = u.protocol === "https:" ? "443" : "80"), u.protocol + "//" + u.hostname + ":" + s
        }, isOriginEqual: function (i, u) {
            var s = this.getOrigin(i) === this.getOrigin(u);
            return s
        }, isSchemeEqual: function (i, u) {
            return i.split(":")[0] === u.split(":")[0]
        }, addPath: function (i, u) {
            var s = i.split("?");
            return s[0] + u + (s[1] ? "?" + s[1] : "")
        }, addQuery: function (i, u) {
            return i + (i.indexOf("?") === -1 ? "?" + u : "&" + u)
        }, isLoopbackAddr: function (i) {
            return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(i) || /^\[::1\]$/.test(i)
        }
    }, Zo
}

var Ir = {exports: {}}, Jp;

function xe() {
    return Jp || (Jp = 1, typeof Object.create == "function" ? Ir.exports = function (i, u) {
        u && (i.super_ = u, i.prototype = Object.create(u.prototype, {
            constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    } : Ir.exports = function (i, u) {
        if (u) {
            i.super_ = u;
            var s = function () {
            };
            s.prototype = u.prototype, i.prototype = new s, i.prototype.constructor = i
        }
    }), Ir.exports
}

var Io = {}, Jo, $p;

function V1() {
    if ($p) return Jo;
    $p = 1;

    function l() {
        this._listeners = {}
    }

    return l.prototype.addEventListener = function (i, u) {
        i in this._listeners || (this._listeners[i] = []);
        var s = this._listeners[i];
        s.indexOf(u) === -1 && (s = s.concat([u])), this._listeners[i] = s
    }, l.prototype.removeEventListener = function (i, u) {
        var s = this._listeners[i];
        if (s) {
            var c = s.indexOf(u);
            if (c !== -1) {
                s.length > 1 ? this._listeners[i] = s.slice(0, c).concat(s.slice(c + 1)) : delete this._listeners[i];
                return
            }
        }
    }, l.prototype.dispatchEvent = function () {
        var i = arguments[0], u = i.type, s = arguments.length === 1 ? [i] : Array.apply(null, arguments);
        if (this["on" + u] && this["on" + u].apply(this, s), u in this._listeners) for (var c = this._listeners[u], f = 0; f < c.length; f++) c[f].apply(this, s)
    }, Jo = l, Jo
}

var Kp;

function st() {
    if (Kp) return Io;
    Kp = 1;
    var l = xe(), i = V1();

    function u() {
        i.call(this)
    }

    return l(u, i), u.prototype.removeAllListeners = function (s) {
        s ? delete this._listeners[s] : this._listeners = {}
    }, u.prototype.once = function (s, c) {
        var f = this, d = !1;

        function p() {
            f.removeListener(s, p), d || (d = !0, c.apply(this, arguments))
        }

        this.on(s, p)
    }, u.prototype.emit = function () {
        var s = arguments[0], c = this._listeners[s];
        if (c) {
            for (var f = arguments.length, d = new Array(f - 1), p = 1; p < f; p++) d[p - 1] = arguments[p];
            for (var v = 0; v < c.length; v++) c[v].apply(this, d)
        }
    }, u.prototype.on = u.prototype.addListener = i.prototype.addEventListener, u.prototype.removeListener = i.prototype.removeEventListener, Io.EventEmitter = u, Io
}

var Jr = {exports: {}}, Fp;

function b_() {
    if (Fp) return Jr.exports;
    Fp = 1;
    var l = globalThis.WebSocket || globalThis.MozWebSocket;
    return l ? Jr.exports = function (u) {
        return new l(u)
    } : Jr.exports = void 0, Jr.exports
}

var $o, Wp;

function S_() {
    if (Wp) return $o;
    Wp = 1;
    var l = In(), i = Lt(), u = xe(), s = st().EventEmitter, c = b_(), f = function () {
    };

    function d(p, v, h) {
        if (!d.enabled()) throw new Error("Transport created when disabled");
        s.call(this);
        var g = this, b = i.addPath(p, "/websocket");
        b.slice(0, 5) === "https" ? b = "wss" + b.slice(5) : b = "ws" + b.slice(4), this.url = b, this.ws = new c(this.url, [], h), this.ws.onmessage = function (_) {
            f("message event", _.data), g.emit("message", _.data)
        }, this.unloadRef = l.unloadAdd(function () {
            g.ws.close()
        }), this.ws.onclose = function (_) {
            f("close event", _.code, _.reason), g.emit("close", _.code, _.reason), g._cleanup()
        }, this.ws.onerror = function (_) {
            g.emit("close", 1006, "WebSocket connection broken"), g._cleanup()
        }
    }

    return u(d, s), d.prototype.send = function (p) {
        var v = "[" + p + "]";
        this.ws.send(v)
    }, d.prototype.close = function () {
        var p = this.ws;
        this._cleanup(), p && p.close()
    }, d.prototype._cleanup = function () {
        var p = this.ws;
        p && (p.onmessage = p.onclose = p.onerror = null), l.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners()
    }, d.enabled = function () {
        return !!c
    }, d.transportName = "websocket", d.roundTrips = 2, $o = d, $o
}

var Ko, Pp;

function __() {
    if (Pp) return Ko;
    Pp = 1;
    var l = xe(), i = st().EventEmitter, u = function () {
    };

    function s(c, f) {
        i.call(this), this.sendBuffer = [], this.sender = f, this.url = c
    }

    return l(s, i), s.prototype.send = function (c) {
        this.sendBuffer.push(c), this.sendStop || this.sendSchedule()
    }, s.prototype.sendScheduleWait = function () {
        var c = this, f;
        this.sendStop = function () {
            c.sendStop = null, clearTimeout(f)
        }, f = setTimeout(function () {
            c.sendStop = null, c.sendSchedule()
        }, 25)
    }, s.prototype.sendSchedule = function () {
        u("sendSchedule", this.sendBuffer.length);
        var c = this;
        if (this.sendBuffer.length > 0) {
            var f = "[" + this.sendBuffer.join(",") + "]";
            this.sendStop = this.sender(this.url, f, function (d) {
                c.sendStop = null, d ? (c.emit("close", d.code || 1006, "Sending error: " + d), c.close()) : c.sendScheduleWait()
            }), this.sendBuffer = []
        }
    }, s.prototype._cleanup = function () {
        this.removeAllListeners()
    }, s.prototype.close = function () {
        this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null)
    }, Ko = s, Ko
}

var Fo, e0;

function E_() {
    if (e0) return Fo;
    e0 = 1;
    var l = xe(), i = st().EventEmitter, u = function () {
    };

    function s(c, f, d) {
        i.call(this), this.Receiver = c, this.receiveUrl = f, this.AjaxObject = d, this._scheduleReceiver()
    }

    return l(s, i), s.prototype._scheduleReceiver = function () {
        var c = this, f = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
        f.on("message", function (d) {
            c.emit("message", d)
        }), f.once("close", function (d, p) {
            u("close", d, p, c.pollIsClosing), c.poll = f = null, c.pollIsClosing || (p === "network" ? c._scheduleReceiver() : (c.emit("close", d || 1006, p), c.removeAllListeners()))
        })
    }, s.prototype.abort = function () {
        this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort()
    }, Fo = s, Fo
}

var Wo, t0;

function X1() {
    if (t0) return Wo;
    t0 = 1;
    var l = xe(), i = Lt(), u = __(), s = E_();

    function c(f, d, p, v, h) {
        var g = i.addPath(f, d), b = this;
        u.call(this, f, p), this.poll = new s(v, g, h), this.poll.on("message", function (_) {
            b.emit("message", _)
        }), this.poll.once("close", function (_, j) {
            b.poll = null, b.emit("close", _, j), b.close()
        })
    }

    return l(c, u), c.prototype.close = function () {
        u.prototype.close.call(this), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null)
    }, Wo = c, Wo
}

var Po, n0;

function cl() {
    if (n0) return Po;
    n0 = 1;
    var l = xe(), i = Lt(), u = X1();

    function s(f) {
        return function (d, p, v) {
            var h = {};
            typeof p == "string" && (h.headers = {"Content-type": "text/plain"});
            var g = i.addPath(d, "/xhr_send"), b = new f("POST", g, p, h);
            return b.once("finish", function (_) {
                if (b = null, _ !== 200 && _ !== 204) return v(new Error("http status " + _));
                v()
            }), function () {
                b.close(), b = null;
                var _ = new Error("Aborted");
                _.code = 1e3, v(_)
            }
        }
    }

    function c(f, d, p, v) {
        u.call(this, f, d, s(v), p, v)
    }

    return l(c, u), Po = c, Po
}

var ec, a0;

function ds() {
    if (a0) return ec;
    a0 = 1;
    var l = xe(), i = st().EventEmitter;

    function u(s, c) {
        i.call(this);
        var f = this;
        this.bufferPosition = 0, this.xo = new c("POST", s, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", function (d, p) {
            f._chunkHandler(d, p), f.xo = null;
            var v = d === 200 ? "network" : "permanent";
            f.emit("close", null, v), f._cleanup()
        })
    }

    return l(u, i), u.prototype._chunkHandler = function (s, c) {
        if (!(s !== 200 || !c)) for (var f = -1; ; this.bufferPosition += f + 1) {
            var d = c.slice(this.bufferPosition);
            if (f = d.indexOf(`
`), f === -1) break;
            var p = d.slice(0, f);
            p && this.emit("message", p)
        }
    }, u.prototype._cleanup = function () {
        this.removeAllListeners()
    }, u.prototype.abort = function () {
        this.xo && (this.xo.close(), this.emit("close", null, "user"), this.xo = null), this._cleanup()
    }, ec = u, ec
}

var tc, l0;

function G1() {
    if (l0) return tc;
    l0 = 1;
    var l = st().EventEmitter, i = xe(), u = In(), s = Lt(), c = globalThis.XMLHttpRequest, f = function () {
    };

    function d(h, g, b, _) {
        var j = this;
        l.call(this), setTimeout(function () {
            j._start(h, g, b, _)
        }, 0)
    }

    i(d, l), d.prototype._start = function (h, g, b, _) {
        var j = this;
        try {
            this.xhr = new c
        } catch {
        }
        if (!this.xhr) {
            this.emit("finish", 0, "no xhr support"), this._cleanup();
            return
        }
        g = s.addQuery(g, "t=" + +new Date), this.unloadRef = u.unloadAdd(function () {
            j._cleanup(!0)
        });
        try {
            this.xhr.open(h, g, !0), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function () {
                f("xhr timeout"), j.emit("finish", 0, ""), j._cleanup(!1)
            })
        } catch {
            this.emit("finish", 0, ""), this._cleanup(!1);
            return
        }
        if ((!_ || !_.noCredentials) && d.supportsCORS && (this.xhr.withCredentials = !0), _ && _.headers) for (var x in _.headers) this.xhr.setRequestHeader(x, _.headers[x]);
        this.xhr.onreadystatechange = function () {
            if (j.xhr) {
                var w = j.xhr, N, Y;
                switch (f("readyState", w.readyState), w.readyState) {
                    case 3:
                        try {
                            Y = w.status, N = w.responseText
                        } catch {
                        }
                        Y === 1223 && (Y = 204), Y === 200 && N && N.length > 0 && j.emit("chunk", Y, N);
                        break;
                    case 4:
                        Y = w.status, Y === 1223 && (Y = 204), (Y === 12005 || Y === 12029) && (Y = 0), f("finish", Y, w.responseText), j.emit("finish", Y, w.responseText), j._cleanup(!1);
                        break
                }
            }
        };
        try {
            j.xhr.send(b)
        } catch {
            j.emit("finish", 0, ""), j._cleanup(!1)
        }
    }, d.prototype._cleanup = function (h) {
        if (this.xhr) {
            if (this.removeAllListeners(), u.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function () {
            }, this.xhr.ontimeout && (this.xhr.ontimeout = null), h) try {
                this.xhr.abort()
            } catch {
            }
            this.unloadRef = this.xhr = null
        }
    }, d.prototype.close = function () {
        this._cleanup(!0)
    }, d.enabled = !!c;
    var p = ["Active"].concat("Object").join("X");
    !d.enabled && p in globalThis && (c = function () {
        try {
            return new globalThis[p]("Microsoft.XMLHTTP")
        } catch {
            return null
        }
    }, d.enabled = !!new c);
    var v = !1;
    try {
        v = "withCredentials" in new c
    } catch {
    }
    return d.supportsCORS = v, tc = d, tc
}

var nc, i0;

function hs() {
    if (i0) return nc;
    i0 = 1;
    var l = xe(), i = G1();

    function u(s, c, f, d) {
        i.call(this, s, c, f, d)
    }

    return l(u, i), u.enabled = i.enabled && i.supportsCORS, nc = u, nc
}

var ac, r0;

function Ei() {
    if (r0) return ac;
    r0 = 1;
    var l = xe(), i = G1();

    function u(s, c, f) {
        i.call(this, s, c, f, {noCredentials: !0})
    }

    return l(u, i), u.enabled = i.enabled, ac = u, ac
}

var lc, s0;

function Ti() {
    return s0 || (s0 = 1, lc = {
        isOpera: function () {
            return globalThis.navigator && /opera/i.test(globalThis.navigator.userAgent)
        }, isKonqueror: function () {
            return globalThis.navigator && /konqueror/i.test(globalThis.navigator.userAgent)
        }, hasDomain: function () {
            if (!globalThis.document) return !0;
            try {
                return !!globalThis.document.domain
            } catch {
                return !1
            }
        }
    }), lc
}

var ic, u0;

function T_() {
    if (u0) return ic;
    u0 = 1;
    var l = xe(), i = cl(), u = ds(), s = hs(), c = Ei(), f = Ti();

    function d(p) {
        if (!c.enabled && !s.enabled) throw new Error("Transport created when disabled");
        i.call(this, p, "/xhr_streaming", u, s)
    }

    return l(d, i), d.enabled = function (p) {
        return p.nullOrigin || f.isOpera() ? !1 : s.enabled
    }, d.transportName = "xhr-streaming", d.roundTrips = 2, d.needBody = !!globalThis.document, ic = d, ic
}

var rc, o0;

function cf() {
    if (o0) return rc;
    o0 = 1;
    var l = st().EventEmitter, i = xe(), u = In(), s = Ti(), c = Lt(), f = function () {
    };

    function d(p, v, h) {
        var g = this;
        l.call(this), setTimeout(function () {
            g._start(p, v, h)
        }, 0)
    }

    return i(d, l), d.prototype._start = function (p, v, h) {
        var g = this, b = new globalThis.XDomainRequest;
        v = c.addQuery(v, "t=" + +new Date), b.onerror = function () {
            g._error()
        }, b.ontimeout = function () {
            g._error()
        }, b.onprogress = function () {
            f("progress", b.responseText), g.emit("chunk", 200, b.responseText)
        }, b.onload = function () {
            g.emit("finish", 200, b.responseText), g._cleanup(!1)
        }, this.xdr = b, this.unloadRef = u.unloadAdd(function () {
            g._cleanup(!0)
        });
        try {
            this.xdr.open(p, v), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(h)
        } catch {
            this._error()
        }
    }, d.prototype._error = function () {
        this.emit("finish", 0, ""), this._cleanup(!1)
    }, d.prototype._cleanup = function (p) {
        if (this.xdr) {
            if (this.removeAllListeners(), u.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, p) try {
                this.xdr.abort()
            } catch {
            }
            this.unloadRef = this.xdr = null
        }
    }, d.prototype.close = function () {
        this._cleanup(!0)
    }, d.enabled = !!(globalThis.XDomainRequest && s.hasDomain()), rc = d, rc
}

var sc, c0;

function Y1() {
    if (c0) return sc;
    c0 = 1;
    var l = xe(), i = cl(), u = ds(), s = cf();

    function c(f) {
        if (!s.enabled) throw new Error("Transport created when disabled");
        i.call(this, f, "/xhr_streaming", u, s)
    }

    return l(c, i), c.enabled = function (f) {
        return f.cookie_needed || f.nullOrigin ? !1 : s.enabled && f.sameScheme
    }, c.transportName = "xdr-streaming", c.roundTrips = 2, sc = c, sc
}

var uc, f0;

function Q1() {
    return f0 || (f0 = 1, uc = globalThis.EventSource), uc
}

var oc, d0;

function x_() {
    if (d0) return oc;
    d0 = 1;
    var l = xe(), i = st().EventEmitter, u = Q1(), s = function () {
    };

    function c(f) {
        i.call(this);
        var d = this, p = this.es = new u(f);
        p.onmessage = function (v) {
            s("message", v.data), d.emit("message", decodeURI(v.data))
        }, p.onerror = function (v) {
            s("error", p.readyState);
            var h = p.readyState !== 2 ? "network" : "permanent";
            d._cleanup(), d._close(h)
        }
    }

    return l(c, i), c.prototype.abort = function () {
        this._cleanup(), this._close("user")
    }, c.prototype._cleanup = function () {
        var f = this.es;
        f && (f.onmessage = f.onerror = null, f.close(), this.es = null)
    }, c.prototype._close = function (f) {
        var d = this;
        setTimeout(function () {
            d.emit("close", null, f), d.removeAllListeners()
        }, 200)
    }, oc = c, oc
}

var cc, h0;

function m0() {
    if (h0) return cc;
    h0 = 1;
    var l = xe(), i = cl(), u = x_(), s = hs(), c = Q1();

    function f(d) {
        if (!f.enabled()) throw new Error("Transport created when disabled");
        i.call(this, d, "/eventsource", u, s)
    }

    return l(f, i), f.enabled = function () {
        return !!c
    }, f.transportName = "eventsource", f.roundTrips = 2, cc = f, cc
}

var fc, p0;

function Z1() {
    return p0 || (p0 = 1, fc = "1.6.1"), fc
}

var dc = {exports: {}}, g0;

function xi() {
    return g0 || (g0 = 1, (function (l) {
        var i = In(), u = Ti();
        l.exports = {
            WPrefix: "_jp", currentWindowId: null, polluteGlobalNamespace: function () {
                l.exports.WPrefix in globalThis || (globalThis[l.exports.WPrefix] = {})
            }, postMessage: function (s, c) {
                globalThis.parent !== globalThis && globalThis.parent.postMessage(JSON.stringify({
                    windowId: l.exports.currentWindowId,
                    type: s,
                    data: c || ""
                }), "*")
            }, createIframe: function (s, c) {
                var f = globalThis.document.createElement("iframe"), d, p, v = function () {
                    clearTimeout(d);
                    try {
                        f.onload = null
                    } catch {
                    }
                    f.onerror = null
                }, h = function () {
                    f && (v(), setTimeout(function () {
                        f && f.parentNode.removeChild(f), f = null
                    }, 0), i.unloadDel(p))
                }, g = function (_) {
                    f && (h(), c(_))
                }, b = function (_, j) {
                    setTimeout(function () {
                        try {
                            f && f.contentWindow && f.contentWindow.postMessage(_, j)
                        } catch {
                        }
                    }, 0)
                };
                return f.src = s, f.style.display = "none", f.style.position = "absolute", f.onerror = function () {
                    g("onerror")
                }, f.onload = function () {
                    clearTimeout(d), d = setTimeout(function () {
                        g("onload timeout")
                    }, 2e3)
                }, globalThis.document.body.appendChild(f), d = setTimeout(function () {
                    g("timeout")
                }, 15e3), p = i.unloadAdd(h), {post: b, cleanup: h, loaded: v}
            }, createHtmlfile: function (s, c) {
                var f = ["Active"].concat("Object").join("X"), d = new globalThis[f]("htmlfile"), p, v, h,
                    g = function () {
                        clearTimeout(p), h.onerror = null
                    }, b = function () {
                        d && (g(), i.unloadDel(v), h.parentNode.removeChild(h), h = d = null, CollectGarbage())
                    }, _ = function (w) {
                        d && (b(), c(w))
                    }, j = function (w, N) {
                        try {
                            setTimeout(function () {
                                h && h.contentWindow && h.contentWindow.postMessage(w, N)
                            }, 0)
                        } catch {
                        }
                    };
                d.open(), d.write('<html><script>document.domain="' + globalThis.document.domain + '";<\/script></html>'), d.close(), d.parentWindow[l.exports.WPrefix] = globalThis[l.exports.WPrefix];
                var x = d.createElement("div");
                return d.body.appendChild(x), h = d.createElement("iframe"), x.appendChild(h), h.src = s, h.onerror = function () {
                    _("onerror")
                }, p = setTimeout(function () {
                    _("timeout")
                }, 15e3), v = i.unloadAdd(b), {post: j, cleanup: b, loaded: g}
            }
        }, l.exports.iframeEnabled = !1, globalThis.document && (l.exports.iframeEnabled = (typeof globalThis.postMessage == "function" || typeof globalThis.postMessage == "object") && !u.isKonqueror())
    })(dc)), dc.exports
}

var hc, v0;

function I1() {
    if (v0) return hc;
    v0 = 1;
    var l = xe(), i = st().EventEmitter, u = Z1(), s = Lt(), c = xi(), f = In(), d = ol(), p = function () {
    };

    function v(h, g, b) {
        if (!v.enabled()) throw new Error("Transport created when disabled");
        i.call(this);
        var _ = this;
        this.origin = s.getOrigin(b), this.baseUrl = b, this.transUrl = g, this.transport = h, this.windowId = d.string(8);
        var j = s.addPath(b, "/iframe.html") + "#" + this.windowId;
        this.iframeObj = c.createIframe(j, function (x) {
            _.emit("close", 1006, "Unable to load an iframe (" + x + ")"), _.close()
        }), this.onmessageCallback = this._message.bind(this), f.attachEvent("message", this.onmessageCallback)
    }

    return l(v, i), v.prototype.close = function () {
        if (this.removeAllListeners(), this.iframeObj) {
            f.detachEvent("message", this.onmessageCallback);
            try {
                this.postMessage("c")
            } catch {
            }
            this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null
        }
    }, v.prototype._message = function (h) {
        if (p("message", h.data), !s.isOriginEqual(h.origin, this.origin)) {
            p("not same origin", h.origin, this.origin);
            return
        }
        var g;
        try {
            g = JSON.parse(h.data)
        } catch {
            p("bad json", h.data);
            return
        }
        if (g.windowId !== this.windowId) {
            p("mismatched window id", g.windowId, this.windowId);
            return
        }
        switch (g.type) {
            case"s":
                this.iframeObj.loaded(), this.postMessage("s", JSON.stringify([u, this.transport, this.transUrl, this.baseUrl]));
                break;
            case"t":
                this.emit("message", g.data);
                break;
            case"c":
                var b;
                try {
                    b = JSON.parse(g.data)
                } catch {
                    p("bad json", g.data);
                    return
                }
                this.emit("close", b[0], b[1]), this.close();
                break
        }
    }, v.prototype.postMessage = function (h, g) {
        this.iframeObj.post(JSON.stringify({windowId: this.windowId, type: h, data: g || ""}), this.origin)
    }, v.prototype.send = function (h) {
        this.postMessage("m", h)
    }, v.enabled = function () {
        return c.iframeEnabled
    }, v.transportName = "iframe", v.roundTrips = 2, hc = v, hc
}

var mc, y0;

function ff() {
    return y0 || (y0 = 1, mc = {
        isObject: function (l) {
            var i = typeof l;
            return i === "function" || i === "object" && !!l
        }, extend: function (l) {
            if (!this.isObject(l)) return l;
            for (var i, u, s = 1, c = arguments.length; s < c; s++) {
                i = arguments[s];
                for (u in i) Object.prototype.hasOwnProperty.call(i, u) && (l[u] = i[u])
            }
            return l
        }
    }), mc
}

var pc, b0;

function gc() {
    if (b0) return pc;
    b0 = 1;
    var l = xe(), i = I1(), u = ff();
    return pc = function (s) {
        function c(f, d) {
            i.call(this, s.transportName, f, d)
        }

        return l(c, i), c.enabled = function (f, d) {
            if (!globalThis.document) return !1;
            var p = u.extend({}, d);
            return p.sameOrigin = !0, s.enabled(p) && i.enabled()
        }, c.transportName = "iframe-" + s.transportName, c.needBody = !0, c.roundTrips = i.roundTrips + s.roundTrips - 1, c.facadeTransport = s, c
    }, pc
}

var vc, S0;

function R_() {
    if (S0) return vc;
    S0 = 1;
    var l = xe(), i = xi(), u = Lt(), s = st().EventEmitter, c = ol(), f = function () {
    };

    function d(v) {
        s.call(this);
        var h = this;
        i.polluteGlobalNamespace(), this.id = "a" + c.string(6), v = u.addQuery(v, "c=" + decodeURIComponent(i.WPrefix + "." + this.id)), f("using htmlfile", d.htmlfileEnabled);
        var g = d.htmlfileEnabled ? i.createHtmlfile : i.createIframe;
        globalThis[i.WPrefix][this.id] = {
            start: function () {
                h.iframeObj.loaded()
            }, message: function (b) {
                h.emit("message", b)
            }, stop: function () {
                h._cleanup(), h._close("network")
            }
        }, this.iframeObj = g(v, function () {
            h._cleanup(), h._close("permanent")
        })
    }

    l(d, s), d.prototype.abort = function () {
        this._cleanup(), this._close("user")
    }, d.prototype._cleanup = function () {
        this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete globalThis[i.WPrefix][this.id]
    }, d.prototype._close = function (v) {
        this.emit("close", null, v), this.removeAllListeners()
    }, d.htmlfileEnabled = !1;
    var p = ["Active"].concat("Object").join("X");
    if (p in globalThis) try {
        d.htmlfileEnabled = !!new globalThis[p]("htmlfile")
    } catch {
    }
    return d.enabled = d.htmlfileEnabled || i.iframeEnabled, vc = d, vc
}

var yc, _0;

function E0() {
    if (_0) return yc;
    _0 = 1;
    var l = xe(), i = R_(), u = Ei(), s = cl();

    function c(f) {
        if (!i.enabled) throw new Error("Transport created when disabled");
        s.call(this, f, "/htmlfile", i, u)
    }

    return l(c, s), c.enabled = function (f) {
        return i.enabled && f.sameOrigin
    }, c.transportName = "htmlfile", c.roundTrips = 2, yc = c, yc
}

var bc, T0;

function x0() {
    if (T0) return bc;
    T0 = 1;
    var l = xe(), i = cl(), u = ds(), s = hs(), c = Ei();

    function f(d) {
        if (!c.enabled && !s.enabled) throw new Error("Transport created when disabled");
        i.call(this, d, "/xhr", u, s)
    }

    return l(f, i), f.enabled = function (d) {
        return d.nullOrigin ? !1 : c.enabled && d.sameOrigin ? !0 : s.enabled
    }, f.transportName = "xhr-polling", f.roundTrips = 2, bc = f, bc
}

var Sc, R0;

function C_() {
    if (R0) return Sc;
    R0 = 1;
    var l = xe(), i = cl(), u = Y1(), s = ds(), c = cf();

    function f(d) {
        if (!c.enabled) throw new Error("Transport created when disabled");
        i.call(this, d, "/xhr", s, c)
    }

    return l(f, i), f.enabled = u.enabled, f.transportName = "xdr-polling", f.roundTrips = 2, Sc = f, Sc
}

var _c, C0;

function w_() {
    if (C0) return _c;
    C0 = 1;
    var l = xi(), i = ol(), u = Ti(), s = Lt(), c = xe(), f = st().EventEmitter, d = function () {
    };

    function p(v) {
        var h = this;
        f.call(this), l.polluteGlobalNamespace(), this.id = "a" + i.string(6);
        var g = s.addQuery(v, "c=" + encodeURIComponent(l.WPrefix + "." + this.id));
        globalThis[l.WPrefix][this.id] = this._callback.bind(this), this._createScript(g), this.timeoutId = setTimeout(function () {
            h._abort(new Error("JSONP script loaded abnormally (timeout)"))
        }, p.timeout)
    }

    return c(p, f), p.prototype.abort = function () {
        if (globalThis[l.WPrefix][this.id]) {
            var v = new Error("JSONP user aborted read");
            v.code = 1e3, this._abort(v)
        }
    }, p.timeout = 35e3, p.scriptErrorTimeout = 1e3, p.prototype._callback = function (v) {
        this._cleanup(), !this.aborting && (v && this.emit("message", v), this.emit("close", null, "network"), this.removeAllListeners())
    }, p.prototype._abort = function (v) {
        this._cleanup(), this.aborting = !0, this.emit("close", v.code, v.message), this.removeAllListeners()
    }, p.prototype._cleanup = function () {
        if (clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
            var v = this.script;
            v.parentNode.removeChild(v), v.onreadystatechange = v.onerror = v.onload = v.onclick = null, this.script = null
        }
        delete globalThis[l.WPrefix][this.id]
    }, p.prototype._scriptError = function () {
        var v = this;
        this.errorTimer || (this.errorTimer = setTimeout(function () {
            v.loadedOkay || v._abort(new Error("JSONP script loaded abnormally (onerror)"))
        }, p.scriptErrorTimeout))
    }, p.prototype._createScript = function (v) {
        var h = this, g = this.script = globalThis.document.createElement("script"), b;
        if (g.id = "a" + i.string(8), g.src = v, g.type = "text/javascript", g.charset = "UTF-8", g.onerror = this._scriptError.bind(this), g.onload = function () {
            h._abort(new Error("JSONP script loaded abnormally (onload)"))
        }, g.onreadystatechange = function () {
            if (d("onreadystatechange", g.readyState), /loaded|closed/.test(g.readyState)) {
                if (g && g.htmlFor && g.onclick) {
                    h.loadedOkay = !0;
                    try {
                        g.onclick()
                    } catch {
                    }
                }
                g && h._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"))
            }
        }, typeof g.async > "u" && globalThis.document.attachEvent) if (u.isOpera()) b = this.script2 = globalThis.document.createElement("script"), b.text = "try{var a = document.getElementById('" + g.id + "'); if(a)a.onerror();}catch(x){};", g.async = b.async = !1; else {
            try {
                g.htmlFor = g.id, g.event = "onclick"
            } catch {
            }
            g.async = !0
        }
        typeof g.async < "u" && (g.async = !0);
        var _ = globalThis.document.getElementsByTagName("head")[0];
        _.insertBefore(g, _.firstChild), b && _.insertBefore(b, _.firstChild)
    }, _c = p, _c
}

var Ec, w0;

function A_() {
    if (w0) return Ec;
    w0 = 1;
    var l = ol(), i = Lt(), u = function () {
    }, s, c;

    function f(p) {
        try {
            return globalThis.document.createElement('<iframe name="' + p + '">')
        } catch {
            var v = globalThis.document.createElement("iframe");
            return v.name = p, v
        }
    }

    function d() {
        s = globalThis.document.createElement("form"), s.style.display = "none", s.style.position = "absolute", s.method = "POST", s.enctype = "application/x-www-form-urlencoded", s.acceptCharset = "UTF-8", c = globalThis.document.createElement("textarea"), c.name = "d", s.appendChild(c), globalThis.document.body.appendChild(s)
    }

    return Ec = function (p, v, h) {
        s || d();
        var g = "a" + l.string(8);
        s.target = g, s.action = i.addQuery(i.addPath(p, "/jsonp_send"), "i=" + g);
        var b = f(g);
        b.id = g, b.style.display = "none", s.appendChild(b);
        try {
            c.value = v
        } catch {
        }
        s.submit();
        var _ = function (j) {
            b.onerror && (b.onreadystatechange = b.onerror = b.onload = null, setTimeout(function () {
                b.parentNode.removeChild(b), b = null
            }, 500), c.value = "", h(j))
        };
        return b.onerror = function () {
            _()
        }, b.onload = function () {
            _()
        }, b.onreadystatechange = function (j) {
            u("onreadystatechange", g, b.readyState), b.readyState === "complete" && _()
        }, function () {
            _(new Error("Aborted"))
        }
    }, Ec
}

var Tc, A0;

function O_() {
    if (A0) return Tc;
    A0 = 1;
    var l = xe(), i = X1(), u = w_(), s = A_();

    function c(f) {
        if (!c.enabled()) throw new Error("Transport created when disabled");
        i.call(this, f, "/jsonp", s, u)
    }

    return l(c, i), c.enabled = function () {
        return !!globalThis.document
    }, c.transportName = "jsonp-polling", c.roundTrips = 1, c.needBody = !0, Tc = c, Tc
}

var xc, O0;

function N_() {
    return O0 || (O0 = 1, xc = [S_(), T_(), Y1(), m0(), gc()(m0()), E0(), gc()(E0()), x0(), C_(), gc()(x0()), O_()]), xc
}

var N0 = {}, j0;

function j_() {
    if (j0) return N0;
    j0 = 1;
    var l = Array.prototype, i = Object.prototype, u = Function.prototype, s = String.prototype, c = l.slice,
        f = i.toString, d = function (O) {
            return i.toString.call(O) === "[object Function]"
        }, p = function (R) {
            return f.call(R) === "[object Array]"
        }, v = function (R) {
            return f.call(R) === "[object String]"
        }, h = Object.defineProperty && (function () {
            try {
                return Object.defineProperty({}, "x", {}), !0
            } catch {
                return !1
            }
        })(), g;
    h ? g = function (O, R, G, F) {
        !F && R in O || Object.defineProperty(O, R, {configurable: !0, enumerable: !1, writable: !0, value: G})
    } : g = function (O, R, G, F) {
        !F && R in O || (O[R] = G)
    };
    var b = function (O, R, G) {
        for (var F in R) i.hasOwnProperty.call(R, F) && g(O, F, R[F], G)
    }, _ = function (O) {
        if (O == null) throw new TypeError("can't convert " + O + " to object");
        return Object(O)
    };

    function j(O) {
        var R = +O;
        return R !== R ? R = 0 : R !== 0 && R !== 1 / 0 && R !== -1 / 0 && (R = (R > 0 || -1) * Math.floor(Math.abs(R))), R
    }

    function x(O) {
        return O >>> 0
    }

    function w() {
    }

    b(u, {
        bind: function (R) {
            var G = this;
            if (!d(G)) throw new TypeError("Function.prototype.bind called on incompatible " + G);
            for (var F = c.call(arguments, 1), te = function () {
                if (this instanceof me) {
                    var X = G.apply(this, F.concat(c.call(arguments)));
                    return Object(X) === X ? X : this
                } else return G.apply(R, F.concat(c.call(arguments)))
            }, ae = Math.max(0, G.length - F.length), W = [], Ee = 0; Ee < ae; Ee++) W.push("$" + Ee);
            var me = Function("binder", "return function (" + W.join(",") + "){ return binder.apply(this, arguments); }")(te);
            return G.prototype && (w.prototype = G.prototype, me.prototype = new w, w.prototype = null), me
        }
    }), b(Array, {isArray: p});
    var N = Object("a"), Y = N[0] !== "a" || !(0 in N), C = function (R) {
        var G = !0, F = !0;
        return R && (R.call("foo", function (te, ae, W) {
            typeof W != "object" && (G = !1)
        }), R.call([1], function () {
            F = typeof this == "string"
        }, "x")), !!R && G && F
    };
    b(l, {
        forEach: function (R) {
            var G = _(this), F = Y && v(this) ? this.split("") : G, te = arguments[1], ae = -1, W = F.length >>> 0;
            if (!d(R)) throw new TypeError;
            for (; ++ae < W;) ae in F && R.call(te, F[ae], ae, G)
        }
    }, !C(l.forEach));
    var z = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
    b(l, {
        indexOf: function (R) {
            var G = Y && v(this) ? this.split("") : _(this), F = G.length >>> 0;
            if (!F) return -1;
            var te = 0;
            for (arguments.length > 1 && (te = j(arguments[1])), te = te >= 0 ? te : Math.max(0, F + te); te < F; te++) if (te in G && G[te] === R) return te;
            return -1
        }
    }, z);
    var M = s.split;
    "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || "tesst".split(/(s)*/)[1] === "t" || "test".split(/(?:)/, -1).length !== 4 || "".split(/.?/).length || ".".split(/()()/).length > 1 ? (function () {
        var O = /()??/.exec("")[1] === void 0;
        s.split = function (R, G) {
            var F = this;
            if (R === void 0 && G === 0) return [];
            if (f.call(R) !== "[object RegExp]") return M.call(this, R, G);
            var te = [],
                ae = (R.ignoreCase ? "i" : "") + (R.multiline ? "m" : "") + (R.extended ? "x" : "") + (R.sticky ? "y" : ""),
                W = 0, Ee, me, X, P;
            for (R = new RegExp(R.source, ae + "g"), F += "", O || (Ee = new RegExp("^" + R.source + "$(?!\\s)", ae)), G = G === void 0 ? -1 >>> 0 : x(G); (me = R.exec(F)) && (X = me.index + me[0].length, !(X > W && (te.push(F.slice(W, me.index)), !O && me.length > 1 && me[0].replace(Ee, function () {
                for (var K = 1; K < arguments.length - 2; K++) arguments[K] === void 0 && (me[K] = void 0)
            }), me.length > 1 && me.index < F.length && l.push.apply(te, me.slice(1)), P = me[0].length, W = X, te.length >= G)));) R.lastIndex === me.index && R.lastIndex++;
            return W === F.length ? (P || !R.test("")) && te.push("") : te.push(F.slice(W)), te.length > G ? te.slice(0, G) : te
        }
    })() : "0".split(void 0, 0).length && (s.split = function (R, G) {
        return R === void 0 && G === 0 ? [] : M.call(this, R, G)
    });
    var D = s.substr, J = "".substr && "0b".substr(-1) !== "b";
    return b(s, {
        substr: function (R, G) {
            return D.call(this, R < 0 && (R = this.length + R) < 0 ? 0 : R, G)
        }
    }, J), N0
}

var Rc, U0;

function U_() {
    if (U0) return Rc;
    U0 = 1;
    var l = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
        i, u = function (s) {
            var c, f = {}, d = [];
            for (c = 0; c < 65536; c++) d.push(String.fromCharCode(c));
            return s.lastIndex = 0, d.join("").replace(s, function (p) {
                return f[p] = "\\u" + ("0000" + p.charCodeAt(0).toString(16)).slice(-4), ""
            }), s.lastIndex = 0, f
        };
    return Rc = {
        quote: function (s) {
            var c = JSON.stringify(s);
            return l.lastIndex = 0, l.test(c) ? (i || (i = u(l)), c.replace(l, function (f) {
                return i[f]
            })) : c
        }
    }, Rc
}

var Cc, D0;

function D_() {
    if (D0) return Cc;
    D0 = 1;
    var l = function () {
    };
    return Cc = function (i) {
        return {
            filterToEnabled: function (u, s) {
                var c = {main: [], facade: []};
                return u ? typeof u == "string" && (u = [u]) : u = [], i.forEach(function (f) {
                    if (f && !(f.transportName === "websocket" && s.websocket === !1)) {
                        if (u.length && u.indexOf(f.transportName) === -1) {
                            l("not in whitelist", f.transportName);
                            return
                        }
                        f.enabled(s) ? (l("enabled", f.transportName), c.main.push(f), f.facadeTransport && c.facade.push(f.facadeTransport)) : l("disabled", f.transportName)
                    }
                }), c
            }
        }
    }, Cc
}

var wc, M0;

function M_() {
    if (M0) return wc;
    M0 = 1;
    var l = {};
    return ["log", "debug", "warn"].forEach(function (i) {
        var u;
        try {
            u = globalThis.console && globalThis.console[i] && globalThis.console[i].apply
        } catch {
        }
        l[i] = u ? function () {
            return globalThis.console[i].apply(globalThis.console, arguments)
        } : i === "log" ? function () {
        } : l.log
    }), wc = l, wc
}

var Ac, H0;

function df() {
    if (H0) return Ac;
    H0 = 1;

    function l(i) {
        this.type = i
    }

    return l.prototype.initEvent = function (i, u, s) {
        return this.type = i, this.bubbles = u, this.cancelable = s, this.timeStamp = +new Date, this
    }, l.prototype.stopPropagation = function () {
    }, l.prototype.preventDefault = function () {
    }, l.CAPTURING_PHASE = 1, l.AT_TARGET = 2, l.BUBBLING_PHASE = 3, Ac = l, Ac
}

var Oc, L0;

function J1() {
    return L0 || (L0 = 1, Oc = globalThis.location || {
        origin: "http://localhost:80",
        protocol: "http:",
        host: "localhost",
        port: 80,
        href: "http://localhost/",
        hash: ""
    }), Oc
}

var Nc, B0;

function H_() {
    if (B0) return Nc;
    B0 = 1;
    var l = xe(), i = df();

    function u() {
        i.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = ""
    }

    return l(u, i), Nc = u, Nc
}

var jc, z0;

function L_() {
    if (z0) return jc;
    z0 = 1;
    var l = xe(), i = df();

    function u(s) {
        i.call(this), this.initEvent("message", !1, !1), this.data = s
    }

    return l(u, i), jc = u, jc
}

var Uc, q0;

function B_() {
    if (q0) return Uc;
    q0 = 1;
    var l = st().EventEmitter, i = xe();

    function u() {
        var s = this;
        l.call(this), this.to = setTimeout(function () {
            s.emit("finish", 200, "{}")
        }, u.timeout)
    }

    return i(u, l), u.prototype.close = function () {
        clearTimeout(this.to)
    }, u.timeout = 2e3, Uc = u, Uc
}

var Dc, k0;

function $1() {
    if (k0) return Dc;
    k0 = 1;
    var l = st().EventEmitter, i = xe(), u = ff();

    function s(c, f) {
        l.call(this);
        var d = this, p = +new Date;
        this.xo = new f("GET", c), this.xo.once("finish", function (v, h) {
            var g, b;
            if (v === 200) {
                if (b = +new Date - p, h) try {
                    g = JSON.parse(h)
                } catch {
                }
                u.isObject(g) || (g = {})
            }
            d.emit("finish", g, b), d.removeAllListeners()
        })
    }

    return i(s, l), s.prototype.close = function () {
        this.removeAllListeners(), this.xo.close()
    }, Dc = s, Dc
}

var Mc, V0;

function K1() {
    if (V0) return Mc;
    V0 = 1;
    var l = xe(), i = st().EventEmitter, u = Ei(), s = $1();

    function c(f) {
        var d = this;
        i.call(this), this.ir = new s(f, u), this.ir.once("finish", function (p, v) {
            d.ir = null, d.emit("message", JSON.stringify([p, v]))
        })
    }

    return l(c, i), c.transportName = "iframe-info-receiver", c.prototype.close = function () {
        this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners()
    }, Mc = c, Mc
}

var Hc, X0;

function z_() {
    if (X0) return Hc;
    X0 = 1;
    var l = st().EventEmitter, i = xe(), u = In(), s = I1(), c = K1();

    function f(d, p) {
        var v = this;
        l.call(this);
        var h = function () {
            var g = v.ifr = new s(c.transportName, p, d);
            g.once("message", function (b) {
                if (b) {
                    var _;
                    try {
                        _ = JSON.parse(b)
                    } catch {
                        v.emit("finish"), v.close();
                        return
                    }
                    var j = _[0], x = _[1];
                    v.emit("finish", j, x)
                }
                v.close()
            }), g.once("close", function () {
                v.emit("finish"), v.close()
            })
        };
        globalThis.document.body ? h() : u.attachEvent("load", h)
    }

    return i(f, l), f.enabled = function () {
        return s.enabled()
    }, f.prototype.close = function () {
        this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null
    }, Hc = f, Hc
}

var Lc, G0;

function q_() {
    if (G0) return Lc;
    G0 = 1;
    var l = st().EventEmitter, i = xe(), u = Lt(), s = cf(), c = hs(), f = Ei(), d = B_(), p = z_(), v = $1();

    function h(g, b) {
        var _ = this;
        l.call(this), setTimeout(function () {
            _.doXhr(g, b)
        }, 0)
    }

    return i(h, l), h._getReceiver = function (g, b, _) {
        return _.sameOrigin ? new v(b, f) : c.enabled ? new v(b, c) : s.enabled && _.sameScheme ? new v(b, s) : p.enabled() ? new p(g, b) : new v(b, d)
    }, h.prototype.doXhr = function (g, b) {
        var _ = this, j = u.addPath(g, "/info");
        this.xo = h._getReceiver(g, j, b), this.timeoutRef = setTimeout(function () {
            _._cleanup(!1), _.emit("finish")
        }, h.timeout), this.xo.once("finish", function (x, w) {
            _._cleanup(!0), _.emit("finish", x, w)
        })
    }, h.prototype._cleanup = function (g) {
        clearTimeout(this.timeoutRef), this.timeoutRef = null, !g && this.xo && this.xo.close(), this.xo = null
    }, h.prototype.close = function () {
        this.removeAllListeners(), this._cleanup(!1)
    }, h.timeout = 8e3, Lc = h, Lc
}

var Bc, Y0;

function k_() {
    if (Y0) return Bc;
    Y0 = 1;
    var l = xi();

    function i(u) {
        this._transport = u, u.on("message", this._transportMessage.bind(this)), u.on("close", this._transportClose.bind(this))
    }

    return i.prototype._transportClose = function (u, s) {
        l.postMessage("c", JSON.stringify([u, s]))
    }, i.prototype._transportMessage = function (u) {
        l.postMessage("t", u)
    }, i.prototype._send = function (u) {
        this._transport.send(u)
    }, i.prototype._close = function () {
        this._transport.close(), this._transport.removeAllListeners()
    }, Bc = i, Bc
}

var zc, Q0;

function V_() {
    if (Q0) return zc;
    Q0 = 1;
    var l = Lt(), i = In(), u = k_(), s = K1(), c = xi(), f = J1(), d = function () {
    };
    return zc = function (p, v) {
        var h = {};
        v.forEach(function (b) {
            b.facadeTransport && (h[b.facadeTransport.transportName] = b.facadeTransport)
        }), h[s.transportName] = s;
        var g;
        p.bootstrap_iframe = function () {
            var b;
            c.currentWindowId = f.hash.slice(1);
            var _ = function (j) {
                if (j.source === parent && (typeof g > "u" && (g = j.origin), j.origin === g)) {
                    var x;
                    try {
                        x = JSON.parse(j.data)
                    } catch {
                        d("bad json", j.data);
                        return
                    }
                    if (x.windowId === c.currentWindowId) switch (x.type) {
                        case"s":
                            var w;
                            try {
                                w = JSON.parse(x.data)
                            } catch {
                                d("bad json", x.data);
                                break
                            }
                            var N = w[0], Y = w[1], C = w[2], z = w[3];
                            if (N !== p.version) throw new Error('Incompatible SockJS! Main site uses: "' + N + '", the iframe: "' + p.version + '".');
                            if (!l.isOriginEqual(C, f.href) || !l.isOriginEqual(z, f.href)) throw new Error("Can't connect to different domain from within an iframe. (" + f.href + ", " + C + ", " + z + ")");
                            b = new u(new h[Y](C, z));
                            break;
                        case"m":
                            b._send(x.data);
                            break;
                        case"c":
                            b && b._close(), b = null;
                            break
                    }
                }
            };
            i.attachEvent("message", _), c.postMessage("s")
        }
    }, zc
}

var qc, Z0;

function X_() {
    if (Z0) return qc;
    Z0 = 1, j_();
    var l = k1(), i = xe(), u = ol(), s = U_(), c = Lt(), f = In(), d = D_(), p = ff(), v = Ti(), h = M_(), g = df(),
        b = V1(), _ = J1(), j = H_(), x = L_(), w = q_(), N = function () {
        }, Y;

    function C(M, D, J) {
        if (!(this instanceof C)) return new C(M, D, J);
        if (arguments.length < 1) throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
        b.call(this), this.readyState = C.CONNECTING, this.extensions = "", this.protocol = "", J = J || {}, J.protocols_whitelist && h.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = J.transports, this._transportOptions = J.transportOptions || {}, this._timeout = J.timeout || 0;
        var O = J.sessionId || 8;
        if (typeof O == "function") this._generateSessionId = O; else if (typeof O == "number") this._generateSessionId = function () {
            return u.string(O)
        }; else throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");
        this._server = J.server || u.numberString(1e3);
        var R = new l(M);
        if (!R.host || !R.protocol) throw new SyntaxError("The URL '" + M + "' is invalid");
        if (R.hash) throw new SyntaxError("The URL must not contain a fragment");
        if (R.protocol !== "http:" && R.protocol !== "https:") throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + R.protocol + "' is not allowed.");
        var G = R.protocol === "https:";
        if (_.protocol === "https:" && !G && !c.isLoopbackAddr(R.hostname)) throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
        D ? Array.isArray(D) || (D = [D]) : D = [];
        var F = D.sort();
        F.forEach(function (ae, W) {
            if (!ae) throw new SyntaxError("The protocols entry '" + ae + "' is invalid.");
            if (W < F.length - 1 && ae === F[W + 1]) throw new SyntaxError("The protocols entry '" + ae + "' is duplicated.")
        });
        var te = c.getOrigin(_.href);
        this._origin = te ? te.toLowerCase() : null, R.set("pathname", R.pathname.replace(/\/+$/, "")), this.url = R.href, N("using url", this.url), this._urlInfo = {
            nullOrigin: !v.hasDomain(),
            sameOrigin: c.isOriginEqual(this.url, _.href),
            sameScheme: c.isSchemeEqual(this.url, _.href)
        }, this._ir = new w(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this))
    }

    i(C, b);

    function z(M) {
        return M === 1e3 || M >= 3e3 && M <= 4999
    }

    return C.prototype.close = function (M, D) {
        if (M && !z(M)) throw new Error("InvalidAccessError: Invalid code");
        if (D && D.length > 123) throw new SyntaxError("reason argument has an invalid length");
        if (!(this.readyState === C.CLOSING || this.readyState === C.CLOSED)) {
            var J = !0;
            this._close(M || 1e3, D || "Normal closure", J)
        }
    }, C.prototype.send = function (M) {
        if (typeof M != "string" && (M = "" + M), this.readyState === C.CONNECTING) throw new Error("InvalidStateError: The connection has not been established yet");
        this.readyState === C.OPEN && this._transport.send(s.quote(M))
    }, C.version = Z1(), C.CONNECTING = 0, C.OPEN = 1, C.CLOSING = 2, C.CLOSED = 3, C.prototype._receiveInfo = function (M, D) {
        if (this._ir = null, !M) {
            this._close(1002, "Cannot connect to server");
            return
        }
        this._rto = this.countRTO(D), this._transUrl = M.base_url ? M.base_url : this.url, M = p.extend(M, this._urlInfo);
        var J = Y.filterToEnabled(this._transportsWhitelist, M);
        this._transports = J.main, N(this._transports.length + " enabled transports"), this._connect()
    }, C.prototype._connect = function () {
        for (var M = this._transports.shift(); M; M = this._transports.shift()) {
            if (N("attempt", M.transportName), M.needBody && (!globalThis.document.body || typeof globalThis.document.readyState < "u" && globalThis.document.readyState !== "complete" && globalThis.document.readyState !== "interactive")) {
                this._transports.unshift(M), f.attachEvent("load", this._connect.bind(this));
                return
            }
            var D = Math.max(this._timeout, this._rto * M.roundTrips || 5e3);
            this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), D);
            var J = c.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()),
                O = this._transportOptions[M.transportName], R = new M(J, this._transUrl, O);
            R.on("message", this._transportMessage.bind(this)), R.once("close", this._transportClose.bind(this)), R.transportName = M.transportName, this._transport = R;
            return
        }
        this._close(2e3, "All transports failed", !1)
    }, C.prototype._transportTimeout = function () {
        this.readyState === C.CONNECTING && (this._transport && this._transport.close(), this._transportClose(2007, "Transport timed out"))
    }, C.prototype._transportMessage = function (M) {
        var D = this, J = M.slice(0, 1), O = M.slice(1), R;
        switch (J) {
            case"o":
                this._open();
                return;
            case"h":
                this.dispatchEvent(new g("heartbeat")), N("heartbeat", this.transport);
                return
        }
        if (O) try {
            R = JSON.parse(O)
        } catch {
        }
        if (!(typeof R > "u")) switch (J) {
            case"a":
                Array.isArray(R) && R.forEach(function (G) {
                    N("message", D.transport), D.dispatchEvent(new x(G))
                });
                break;
            case"m":
                N("message", this.transport), this.dispatchEvent(new x(R));
                break;
            case"c":
                Array.isArray(R) && R.length === 2 && this._close(R[0], R[1], !0);
                break
        }
    }, C.prototype._transportClose = function (M, D) {
        if (N("_transportClose", this.transport), this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), !z(M) && M !== 2e3 && this.readyState === C.CONNECTING) {
            this._connect();
            return
        }
        this._close(M, D)
    }, C.prototype._open = function () {
        N("_open", this._transport && this._transport.transportName, this.readyState), this.readyState === C.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = C.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new g("open")), N("connected", this.transport)) : this._close(1006, "Server lost session")
    }, C.prototype._close = function (M, D, J) {
        N("_close", this.transport, M, D, J, this.readyState);
        var O = !1;
        if (this._ir && (O = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === C.CLOSED) throw new Error("InvalidStateError: SockJS has already been closed");
        this.readyState = C.CLOSING, setTimeout((function () {
            this.readyState = C.CLOSED, O && this.dispatchEvent(new g("error"));
            var R = new j("close");
            R.wasClean = J || !1, R.code = M || 1e3, R.reason = D, this.dispatchEvent(R), this.onmessage = this.onclose = this.onerror = null
        }).bind(this), 0)
    }, C.prototype.countRTO = function (M) {
        return M > 100 ? 4 * M : 300 + M
    }, qc = function (M) {
        return Y = d(M), V_()(C, M), C
    }, qc
}

var kc, I0;

function G_() {
    if (I0) return kc;
    I0 = 1;
    var l = N_();
    return kc = X_()(l), "_sockjs_onload" in globalThis && setTimeout(globalThis._sockjs_onload, 1), kc
}

var Y_ = G_();
const Q_ = $0(Y_), Z_ = "http://gsmsv-1.yujun.kr:27919";

class I_ {
    constructor() {
        this.client = null, this.connected = !1, this.currentRoomId = null, this.subscriptions = {}, this.sentMessages = new Set
    }

    connect(i, u, s) {
        if (this.connected && this.client?.connected) {
            u && u();
            return
        }
        const c = i || Xt();
        if (!c) {
            console.error("토큰이 없습니다"), s && s(new Error("No token provided"));
            return
        }
        const f = new Q_(`${Z_}/ws-stomp`);
        this.client = new p_({
            webSocketFactory: () => f,
            connectHeaders: {Authorization: `Bearer ${c}`, token: c},
            reconnectDelay: 5e3,
            heartbeatIncoming: 4e3,
            heartbeatOutgoing: 4e3,
            onConnect: () => {
                this.connected = !0, u && u()
            },
            onStompError: d => {
                this.connected = !1, console.error("STOMP 오류:", d), s && s(d)
            },
            onWebSocketClose: () => {
                this.connected = !1
            }
        }), this.client.activate()
    }

    disconnect() {
        this.client && (this.client.deactivate(), this.connected = !1, this.subscriptions = {})
    }

    subscribeToRoom(i, u) {
        if (!this.client) {
            console.error("WebSocket 클라이언트가 초기화되지 않았습니다");
            return
        }
        if (!this.client.connected) {
            let s = 0;
            const c = 50, f = setInterval(() => {
                s++, this.client.connected ? (clearInterval(f), this.subscribeToRoom(i, u)) : s >= c && (clearInterval(f), console.error("STOMP 연결 타임아웃"))
            }, 100);
            return
        }
        this.subscriptions[i] && this.subscriptions[i].unsubscribe();
        try {
            this.subscriptions[i] = this.client.subscribe(`/topic/room/${i}`, s => {
                const c = JSON.parse(s.body);
                u && u(c)
            }), this.currentRoomId = i
        } catch (s) {
            console.error("채팅방 구독 실패:", s)
        }
    }

    unsubscribeFromRoom(i) {
        this.subscriptions[i] && (this.subscriptions[i].unsubscribe(), delete this.subscriptions[i])
    }

    sendMessage(i, u) {
        if (!this.connected || !this.client) {
            console.error("WebSocket 연결 안 됨");
            return
        }
        const s = `${i}-${u}-${Date.now()}`;
        this.sentMessages.add(s), setTimeout(() => {
            this.sentMessages.delete(s)
        }, 3e3);
        try {
            this.client.publish({destination: `/app/room/${i}/send`, body: JSON.stringify({roomId: i, content: u})})
        } catch (c) {
            console.error("메시지 전송 실패:", c)
        }
    }

    isMyMessage(i, u) {
        return Array.from(this.sentMessages).some(s => s.startsWith(`${i}-${u}-`))
    }

    leaveRoom(i) {
        !this.connected || !this.client || (this.client.publish({
            destination: `/app/room/${i}/leave`,
            body: JSON.stringify({roomId: i})
        }), this.unsubscribeFromRoom(i))
    }

    isConnected() {
        return this.connected
    }
}

const Ft = new I_, J_ = "http://gsmsv-1.yujun.kr:27919",
    va = Ne.create({baseURL: J_, headers: {"Content-Type": "application/json"}});
va.interceptors.request.use(l => {
    const i = Xt();
    return i && (l.headers.Authorization = `Bearer ${i}`), l
}, l => Promise.reject(l));
va.interceptors.response.use(l => l, l => (l.response?.status === 401 && (h1(), window.location.pathname !== "/" && window.location.pathname !== "/login" && (window.location.href = "/")), Promise.reject(l)));
const $_ = async (l = 50) => {
    try {
        return (await va.get("/api/chat", {params: {limit: l}})).data
    } catch (i) {
        throw i
    }
}, K_ = async l => {
    try {
        return (await va.delete(`/api/chat/rooms/${l}`)).data
    } catch (i) {
        throw i
    }
}, F_ = async (l, i = 0, u = 50) => {
    try {
        return (await va.get(`/api/chat/rooms/${l}/messages`, {params: {startIndex: i, count: u}})).data
    } catch (s) {
        throw s
    }
}, W_ = async () => {
    try {
        return (await va.get("/api/users/me")).data
    } catch (l) {
        throw l
    }
}, P_ = async l => {
    try {
        return (await va.get(`/api/user/${l}`)).data
    } catch (i) {
        throw i
    }
}, eE = "_avatar_c1nab_231", Ct = {
    "main-container": "_main-container_c1nab_1",
    "chat-box": "_chat-box_c1nab_19",
    "chat-header": "_chat-header_c1nab_39",
    "chat-list": "_chat-list_c1nab_75",
    "empty-state": "_empty-state_c1nab_137",
    "empty-title": "_empty-title_c1nab_171",
    "chat-item": "_chat-item_c1nab_187",
    "chat-item-active": "_chat-item-active_c1nab_215",
    avatar: eE,
    "chat-info": "_chat-info_c1nab_249",
    "chat-username": "_chat-username_c1nab_263",
    "chat-message": "_chat-message_c1nab_289",
    "unread-dot": "_unread-dot_c1nab_309"
};

function tE() {
    return S.jsx("svg", {
        width: "9",
        height: "14",
        viewBox: "0 0 9 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: S.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.455109 8.02647C0.163688 7.75175 0 7.37935 0 6.99107C0 6.60279 0.163688 6.23039 0.455109 5.95566L6.32293 0.428938C6.61486 0.154202 7.01075 -9.15518e-05 7.42351 4.07554e-08C7.62789 4.53928e-05 7.83026 0.0379918 8.01906 0.111673C8.20786 0.185354 8.3794 0.293327 8.52388 0.429426C8.66836 0.565526 8.78296 0.727088 8.86113 0.904886C8.93929 1.08268 8.9795 1.27324 8.97945 1.46567C8.9794 1.6581 8.9391 1.84863 8.86084 2.02639C8.78259 2.20416 8.66791 2.36567 8.52336 2.5017L3.75628 6.99107L8.5244 11.4804C8.6731 11.6155 8.79173 11.7772 8.87337 11.9559C8.95502 12.1346 8.99804 12.3268 8.99994 12.5214C9.00183 12.7159 8.96255 12.9089 8.88439 13.089C8.80624 13.2691 8.69077 13.4327 8.54473 13.5704C8.39868 13.708 8.22499 13.8169 8.03378 13.8906C7.84257 13.9644 7.63767 14.0015 7.43104 14C7.22441 13.9984 7.02019 13.958 6.8303 13.8813C6.6404 13.8046 6.46863 13.6931 6.325 13.5532L0.453034 8.02647H0.455109Z",
            fill: "#404040"
        })
    })
}

function nE() {
    const l = en(), {rooms: i, setRooms: u, currentRoom: s, setCurrentRoom: c} = cs(), f = p => {
        try {
            return JSON.parse(localStorage.getItem("chat_last_read") || "{}")[p] || 0
        } catch {
            return 0
        }
    };
    H.useEffect(() => {
        const p = async () => {
            try {
                const h = await $_(50), g = {};
                (Array.isArray(h) ? h : []).forEach(_ => {
                    const j = _.opponentUserId;
                    (!g[j] || new Date(_.lastActiveAt) > new Date(g[j].lastActiveAt)) && (g[j] = _)
                });
                const b = Object.values(g).sort((_, j) => new Date(j.lastActiveAt) - new Date(_.lastActiveAt)).map(_ => {
                    const j = f(_.roomId), x = new Date(_.lastActiveAt).getTime();
                    let w = 0;
                    try {
                        w = JSON.parse(localStorage.getItem("chat_last_sent") || "{}")[_.roomId] || 0
                    } catch {
                    }
                    const N = x > j && x > w;
                    return {
                        roomId: _.roomId,
                        opponentId: _.opponentLoginId,
                        opponentUserId: _.opponentUserId,
                        otherUserName: _.opponentName || "알 수 없는 사용자",
                        lastMessage: _.lastMessage || "메시지 없음",
                        lastActiveAt: _.lastActiveAt,
                        tags: [],
                        age: null,
                        address: null,
                        gender: null,
                        unread: N
                    }
                });
                u(b)
            } catch (h) {
                h.response?.status !== 401 && console.error("채팅방 목록 불러오기 실패:", h.message)
            }
        };
        p();
        const v = setInterval(p, 3e3);
        return () => clearInterval(v)
    }, [u]);
    const d = p => {
        try {
            const v = JSON.parse(localStorage.getItem("chat_last_read") || "{}");
            v[p.roomId] = Date.now(), localStorage.setItem("chat_last_read", JSON.stringify(v))
        } catch (v) {
            console.error("읽음 처리 오류:", v)
        }
        c({
            roomId: p.roomId,
            opponentId: p.opponentId,
            opponentUserId: p.opponentUserId,
            otherUserName: p.otherUserName,
            tags: p.tags,
            age: p.age,
            address: p.address,
            gender: p.gender
        }), l("/chat")
    };
    return S.jsx("div", {
        className: Ct["main-container"],
        children: S.jsxs("div", {
            className: Ct["chat-box"],
            children: [S.jsx("div", {
                className: Ct["chat-header"],
                children: S.jsxs("p", {onClick: () => l("/main"), children: [S.jsx(tE, {}), "홈으로 가기"]})
            }), S.jsx("div", {
                className: Ct["chat-list"],
                children: i.length === 0 ? S.jsx("div", {
                    className: Ct["empty-state"],
                    children: S.jsxs("div", {
                        className: Ct["empty-title"],
                        children: ["아직 채팅방이 없습니다.", S.jsx("br", {}), "랜덤 매칭을 시작해보세요!"]
                    })
                }) : i.map(p => {
                    const v = s?.roomId === p.roomId;
                    return S.jsxs("div", {
                        className: `${Ct["chat-item"]} ${v ? Ct["chat-item-active"] : ""}`,
                        onClick: () => d(p),
                        children: [S.jsx("div", {
                            className: Ct.avatar,
                            children: S.jsx(q1, {})
                        }), S.jsxs("div", {
                            className: Ct["chat-info"],
                            children: [S.jsxs("div", {
                                className: Ct["chat-username"],
                                children: [p.otherUserName || `유저 ${p.opponentId}`, " ", S.jsxs("span", {children: ["@", p.opponentId]})]
                            }), S.jsx("div", {className: Ct["chat-message"], children: p.lastMessage || "메시지를 보내보세요"})]
                        }), p.unread && S.jsx("div", {className: Ct["unread-dot"]})]
                    }, p.roomId)
                })
            })]
        })
    })
}

const aE = "_icon_1v81v_49", lE = "_exit_1v81v_227", iE = "_confirm_1v81v_279", rE = "_cancel_1v81v_295", Qe = {
        "user-container": "_user-container_1v81v_1",
        "user-card": "_user-card_1v81v_17",
        "user-wrap": "_user-wrap_1v81v_37",
        icon: aE,
        "user-body": "_user-body_1v81v_59",
        "user-name": "_user-name_1v81v_67",
        "user-id": "_user-id_1v81v_81",
        "user-tag-card": "_user-tag-card_1v81v_121",
        "user-tags": "_user-tags_1v81v_137",
        "user-tag": "_user-tag_1v81v_121",
        "user-button": "_user-button_1v81v_177",
        exit: lE,
        "exit-modal": "_exit-modal_1v81v_251",
        "modal-actions": "_modal-actions_1v81v_267",
        confirm: iE,
        cancel: rE
    }, sE = {
        EXERCISE: "운동",
        RESTAURANT: "맛집",
        ANIMAL: "동물",
        TRIP: "여행",
        GAME: "게임",
        LEADING: "리딩",
        SEXUAL_PLEASURE: "🔞",
        MUSIC: "음악",
        MOVIE: "영화",
        ANIMATION: "애니메이션",
        WEBTOON: "웹툰",
        EXTROVERT: "외향적",
        INTROVERT: "내향적",
        STUDY: "공부"
    }, uE = {MALE: "남자", FEMALE: "여자", OTHER: "기타"},
    J0 = {name: "상대방", handle: "@unknown", tags: ["채팅 중"], age: null, address: null, gender: null};

function oE() {
    const {currentRoom: l, leaveRoom: i, removeRoom: u} = cs(), [s, c] = H.useState(J0), [f, d] = H.useState(!1),
        p = en();
    H.useEffect(() => {
        (async () => {
            if (!l) {
                c(J0);
                return
            }
            const x = {
                name: l.otherUserName || "상대방",
                handle: l.opponentId ? `@${l.opponentId}` : "@unknown",
                tags: ["채팅 중"],
                age: null,
                address: null,
                gender: null
            };
            if (c(x), l.opponentUserId) try {
                const w = await P_(l.opponentUserId), N = [];
                w.gender && N.push(uE[w.gender] || w.gender), w.age && N.push(`${w.age}살`), w.address && N.push(w.address), Array.isArray(w.categories) && w.categories.forEach(Y => {
                    N.push(sE[Y] || Y)
                }), c({
                    name: w.name || l.otherUserName || "상대방",
                    handle: w.loginId ? `@${w.loginId}` : x.handle,
                    tags: N.length > 0 ? N : ["채팅 중"],
                    age: w.age,
                    address: w.address,
                    gender: w.gender
                })
            } catch (w) {
                console.error("상대방 프로필 불러오기 실패:", w)
            }
        })()
    }, [l]);
    const v = () => {
        if (!l) {
            p("/main");
            return
        }
        d(!0)
    }, h = async () => {
        if (d(!1), l?.roomId) try {
            await K_(l.roomId), Ft.leaveRoom(l.roomId), u(l.roomId)
        } catch (j) {
            console.error("채팅방 삭제 실패:", j), Ft.leaveRoom(l.roomId), u(l.roomId)
        }
        i(), p("/main", {replace: !0})
    }, g = 3, b = (s.tags || []).slice(0, g), _ = (s.tags || []).slice(g, g * 2);
    return S.jsxs("div", {
        className: Qe["user-container"],
        children: [S.jsxs("aside", {
            className: Qe["user-card"],
            children: [S.jsx("div", {
                className: Qe["user-wrap"],
                children: S.jsx("img", {src: of, alt: "아이콘", className: Qe.icon})
            }), S.jsxs("div", {
                className: Qe["user-body"],
                children: [S.jsx("div", {
                    className: Qe["user-name"],
                    children: s.name
                }), S.jsx("div", {
                    className: Qe["user-id"],
                    children: s.handle
                }), S.jsxs("div", {
                    className: Qe["user-tag-card"],
                    children: [S.jsx("div", {
                        className: Qe["user-tags"],
                        children: b.map((j, x) => S.jsx("span", {className: Qe["user-tag"], children: j}, `t1-${x}`))
                    }), _.length > 0 && S.jsx("div", {
                        className: `${Qe["user-tags"]} ${Qe["user-tags2"]}`,
                        children: _.map((j, x) => S.jsx("span", {className: Qe["user-tag"], children: j}, `t2-${x}`))
                    })]
                })]
            }), S.jsx("button", {className: Qe["user-button"], onClick: v, children: "채팅 나가기"})]
        }), f && S.jsx("div", {
            className: Qe.exit,
            children: S.jsxs("div", {
                className: Qe["exit-modal"],
                children: [S.jsx("h3", {children: "대화를 끝내시겠어요?"}), S.jsxs("p", {children: ["채팅을 종료하면 이 대화는 더 이상 볼 수 없어요.", S.jsx("br", {}), "계속 진행할까요?"]}), S.jsxs("div", {
                    className: Qe["modal-actions"],
                    children: [S.jsx("button", {
                        className: Qe.confirm,
                        onClick: h,
                        children: "채팅 종료"
                    }), S.jsx("button", {className: Qe.cancel, onClick: () => d(!1), children: "취소"})]
                })]
            })
        })]
    })
}

function cE() {
    return S.jsx("svg", {
        width: "33",
        height: "33",
        viewBox: "0 0 33 33",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: S.jsx("path", {
            d: "M27.5554 3.19412C28.9524 2.706 30.2944 4.048 29.8063 5.445L21.6594 28.7237C21.1301 30.2335 19.0263 30.3187 18.3773 28.8571L14.4462 20.0131L19.9792 14.4787C20.1614 14.2833 20.2605 14.0247 20.2558 13.7575C20.2511 13.4904 20.1429 13.2355 19.9539 13.0465C19.765 12.8576 19.5101 12.7493 19.2429 12.7446C18.9757 12.7399 18.7172 12.8391 18.5217 13.0212L12.9873 18.5542L4.14332 14.6231C2.68169 13.9727 2.76832 11.8704 4.27669 11.341L27.5554 3.19412Z",
            fill: "white"
        })
    })
}

const fE = "_messages_1fj19_73", dE = "_message_1fj19_73", it = {
    "chat-page": "_chat-page_1fj19_1",
    "chat-window": "_chat-window_1fj19_21",
    "chat-date": "_chat-date_1fj19_39",
    "chat-info-text": "_chat-info-text_1fj19_59",
    messages: fE,
    message: dE,
    "other-message": "_other-message_1fj19_151",
    "my-message": "_my-message_1fj19_171",
    "message-input": "_message-input_1fj19_191"
};

function hE() {
    const l = en(), i = H.useRef(null), {
            currentRoom: u,
            messages: s,
            addMessage: c,
            setMessages: f
        } = cs(), [d, p] = H.useState(new Date), [v, h] = H.useState(!1), [g, b] = H.useState(null), [_, j] = H.useState(!1), [x, w] = H.useState(!1),
        N = H.useRef(null), Y = H.useRef(0), C = J => {
            const O = J.getHours().toString().padStart(2, "0"), R = J.getMinutes().toString().padStart(2, "0");
            return `${O}:${R}`
        }, z = J => {
            const O = J.getFullYear(), R = J.getMonth() + 1, G = J.getDate();
            return `${O}년 ${R}월 ${G}일`
        }, M = () => {
            const J = Xt();
            if (!J) return null;
            try {
                const O = JSON.parse(atob(J.split(".")[1]));
                return O.userId || O.id || O.sub || O.user_id
            } catch (O) {
                return console.error("토큰 파싱 오류:", O), null
            }
        };
    H.useEffect(() => {
        const J = Xt();
        if (!J) {
            l("/", {replace: !0});
            return
        }
        let O = M();
        O ? b(O) : W_().then(R => {
            const G = R.userId || R.id;
            G && b(G)
        }).catch(R => {
            console.error("사용자 정보 조회 실패:", R.response?.status)
        }), Ft.isConnected() ? j(!0) : Ft.connect(J, () => {
            j(!0)
        }, R => {
            console.error("WebSocket 연결 실패:", R), j(!1)
        })
    }, [l]), H.useEffect(() => {
        if (!u?.roomId || !_) return;
        f([]);
        try {
            const R = JSON.parse(localStorage.getItem("chat_last_read") || "{}");
            R[u.roomId] = Date.now(), localStorage.setItem("chat_last_read", JSON.stringify(R))
        } catch (R) {
            console.error("읽음 처리 오류:", R)
        }
        (async () => {
            const R = u.roomId;
            h(!0);
            try {
                const G = await F_(R);
                if (u.roomId !== R) return;
                if (Array.isArray(G) && G.length > 0) {
                    const F = G.map(te => {
                        const ae = typeof g == "string" ? parseInt(g) : g,
                            W = typeof te.senderId == "string" ? parseInt(te.senderId) : te.senderId,
                            Ee = ae && W && ae === W;
                        return {
                            id: `${te.timestamp || te.createdAt || Date.now()}-${te.senderId}-${Math.random()}`,
                            sender: Ee ? "나" : "상대",
                            text: te.content,
                            time: C(new Date(te.timestamp || te.createdAt || Date.now())),
                            senderId: te.senderId,
                            timestamp: te.timestamp || te.createdAt
                        }
                    });
                    requestAnimationFrame(() => {
                        f(F), requestAnimationFrame(() => {
                            i.current && i.current.scrollIntoView({behavior: "auto"})
                        })
                    })
                } else f([])
            } catch (G) {
                G.response?.status === 500 ? console.error("서버 오류로 채팅 기록을 불러올 수 없습니다:", G.message) : G.response?.status !== 404 && console.error("채팅 기록 불러오기 실패:", G.message), f([])
            } finally {
                h(!1)
            }
        })();
        const O = R => {
            const G = typeof g == "string" ? parseInt(g) : g,
                F = typeof R.senderId == "string" ? parseInt(R.senderId) : R.senderId, te = G && F && G === F;
            c({
                id: `${R.timestamp || Date.now()}-${R.senderId}-${Math.random()}`,
                sender: te ? "나" : "상대",
                text: R.content,
                time: C(new Date(R.timestamp || Date.now())),
                senderId: R.senderId,
                timestamp: R.timestamp || Date.now()
            });
            try {
                const ae = JSON.parse(localStorage.getItem("chat_last_read") || "{}");
                ae[u.roomId] = Date.now(), localStorage.setItem("chat_last_read", JSON.stringify(ae))
            } catch (ae) {
                console.error("읽음 처리 오류:", ae)
            }
        };
        return Ft.subscribeToRoom(u.roomId, O), () => {
            Ft.unsubscribeFromRoom(u.roomId)
        }
    }, [u?.roomId, g, _, c, f]), H.useEffect(() => {
        const J = () => {
            if (!N.current) return;
            const {scrollTop: R, scrollHeight: G, clientHeight: F} = N.current, te = G - R - F < 50;
            w(!te)
        }, O = N.current;
        if (O) return O.addEventListener("scroll", J), () => O.removeEventListener("scroll", J)
    }, []), H.useEffect(() => {
        s.length > Y.current && !x && i.current?.scrollIntoView({behavior: "smooth"}), Y.current = s.length
    }, [s, x]), H.useEffect(() => {
        const J = setInterval(() => {
            p(new Date)
        }, 1e3);
        return () => clearInterval(J)
    }, []);
    const D = J => {
        J.preventDefault();
        const O = J.target.message.value.trim();
        if (O) {
            if (!u?.roomId) {
                alert("채팅방을 먼저 선택해주세요.");
                return
            }
            try {
                const R = JSON.parse(localStorage.getItem("chat_last_sent") || "{}");
                R[u.roomId] = Date.now(), localStorage.setItem("chat_last_sent", JSON.stringify(R))
            } catch (R) {
                console.error("전송 시간 저장 오류:", R)
            }
            if (Ft.isConnected()) Ft.sendMessage(u.roomId, O); else {
                const R = Xt();
                Ft.connect(R, () => {
                    Ft.sendMessage(u.roomId, O)
                })
            }
            J.target.reset()
        }
    };
    return S.jsxs("div", {
        className: it["chat-page"],
        children: [S.jsx("div", {
            className: it["chat-list-panel"],
            children: S.jsx("div", {className: it["chat-list"], children: S.jsx(nE, {})})
        }), S.jsxs("div", {
            className: it["chat-window"],
            children: [S.jsx("div", {
                className: it["chat-date"],
                children: z(d)
            }), u ? S.jsxs("div", {
                className: it["chat-info-text"],
                children: [u.otherUserName, " 님과 채팅 중입니다"]
            }) : S.jsxs("div", {
                className: it["chat-info-text"],
                children: ["오늘은 어떤 사람을 만나게 될까요?", S.jsx("br", {}), "대화는 우연처럼 찾아옵니다."]
            }), S.jsxs("div", {
                className: it.messages,
                ref: N,
                children: [s.map(J => S.jsxs("div", {
                    className: `${it.message} ${J.sender === "나" ? it["my-message"] : it["other-message"]}`,
                    children: [S.jsx("p", {children: J.text}), S.jsx("span", {
                        className: it["msg-time"],
                        children: J.time
                    })]
                }, J.id)), S.jsx("div", {ref: i})]
            }), S.jsxs("form", {
                className: it["message-input"],
                onSubmit: D,
                children: [S.jsx("input", {
                    type: "text",
                    name: "message",
                    autoComplete: "off",
                    placeholder: "메시지 보내기",
                    disabled: !u
                }), S.jsx("button", {type: "submit", disabled: !u, children: S.jsx(cE, {})})]
            })]
        }), S.jsx("div", {
            className: it["profile-panel"],
            children: S.jsx("div", {className: it["profile-card"], children: S.jsx(oE, {})})
        })]
    })
}

function mE() {
    return S.jsxs(yb, {
        children: [S.jsx(al, {path: "/", element: S.jsx(US, {})}), S.jsx(al, {
            path: "/signup",
            element: S.jsx(LS, {})
        }), S.jsx(al, {path: "/main", element: S.jsx(r_, {})}), S.jsx(al, {
            path: "/profile",
            element: S.jsx(o_, {})
        }), S.jsx(al, {path: "/chat", element: S.jsx(hE, {})})]
    })
}

Ay.createRoot(document.getElementById("root")).render(S.jsx(H.StrictMode, {children: S.jsx(Vb, {children: S.jsx(mE, {})})}));
