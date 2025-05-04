!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).WebullCorePure = {})
      );
})(this, function (e) {
  "use strict";
  const t = (e) => {
      const t = "string" == typeof e && "" === e,
        n = "number" == typeof e && Number.isNaN(e);
      return null == e || t || n;
    },
    n = (e) => !t(e),
    o = (e) =>
      n(e) &&
      "object" == typeof e &&
      Object.getPrototypeOf(e) === Object.prototype,
    i = (e) =>
      n(e) &&
      "object" == typeof e &&
      Object.getPrototypeOf(e) === Array.prototype,
    r = (e) => {
      if (null == e || "object" != typeof e) return !0;
      for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
      return !0;
    },
    l = (e) => t(e) || !i(e) || 0 === e.length,
    s = (e) => !l(e),
    a = function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
      const t = "abcdefghijklmnopqrstuvwxyz0123456789";
      return Array.from({ length: e }).reduce(
        (e) => e + t.charAt(Math.floor(36 * Math.random())),
        ""
      );
    },
    c = function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : (e) => e;
      return e.filter(
        (n, o) =>
          e.findIndex(
            (e) =>
              ("string" == typeof t ? e[t] : t(e)) ===
              ("string" == typeof t ? n[t] : t(n))
          ) === o
      );
    },
    u = (e) =>
      e && "string" == typeof e
        ? e
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&apos;")
        : "",
    p = /[<>/=\u2028\u2029]/g,
    d = {
      "<": "\\u003C",
      ">": "\\u003E",
      "/": "\\u002F",
      "=": "\\u003D",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
    };
  function w(e) {
    return d[e];
  }
  let b = {
    webTokenKey: "web_lt",
    webUidKey: "web_uid",
    languageKey: "web_hl",
    deviceIdKey: "web_did",
    firstLanKey: "web_fl",
    webTokenDomainKey: "web_lt_domain",
    webInviteCodeKey: "web_icode",
    webInviteSourceKey: "web_isource",
    bdidKey: "web_bdid",
    pubidKey: "web_pubid",
    webLastPageKey: "web_lp",
    instTokenKey: "inst_lt",
  };
  var m = "undefined" != typeof window && "undefined" != typeof navigator;
  const h = (e) => {
      const { req: t } = e || {};
      return m
        ? navigator.userAgent
        : null == t
        ? void 0
        : t.headers["user-agent"];
    },
    y = (e) => {
      const t = h(e);
      return /webull/i.test(t) || /stocks-android/i.test(t);
    },
    f = (e) => {
      const t = h(e);
      return /mobile|android|iphone|ipad/i.test(t);
    },
    g = function () {
      const e = h(
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      );
      return /chrome/i.test(e);
    },
    v = function (e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (m && y()) {
        const o = {
          code: 200,
          msg: "",
          data: { module: e, action: t, params: n },
        };
        if (
          window.webkit &&
          window.webkit.messageHandlers &&
          window.webkit.messageHandlers.Syncextrade &&
          "function" ==
            typeof window.webkit.messageHandlers.Syncextrade.postMessage
        )
          return (
            window.webkit.messageHandlers.Syncextrade.postMessage(
              JSON.stringify(o)
            ),
            !0
          );
        if (
          window.webkit &&
          window.webkit.messageHandlers &&
          window.webkit.messageHandlers.WebullQt &&
          "function" ==
            typeof window.webkit.messageHandlers.WebullQt.postMessage
        )
          return (
            window.webkit.messageHandlers.WebullQt.postMessage(
              JSON.stringify(o)
            ),
            !0
          );
        if (
          window.Syncextrade &&
          "function" == typeof window.Syncextrade.postMessage
        )
          return window.Syncextrade.postMessage(JSON.stringify(o)), !0;
        if (window.WebullQt && "function" == typeof window.WebullQt.postMessage)
          return window.WebullQt.postMessage(JSON.stringify(o)), !0;
      }
      return !1;
    };
  const k = [
    "app",
    "app-group",
    "appid",
    "os",
    "osv",
    "platform",
    "ver",
    "tz",
    "mcc",
    "mcc0",
    "did",
    "odid",
    "device-type",
    "locale",
    "ph",
    "accessToken",
    "userDomain",
    "socialDomain",
    "regionOpen",
    "t_token",
    "canary-version",
    "hl",
    "uuid",
    "isIphoneX",
    "allowDateTimePick",
    "statusBarHeight",
    "statusBarHeightV2",
    "showTrade",
    "isSupportGooglePlay",
    "feature",
    "quoteSetup",
    "isLite",
  ];
  function E(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : t + "";
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t &&
        (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, o);
    }
    return n;
  }
  function x(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? D(Object(n), !0).forEach(function (t) {
            E(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : D(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  const A = (e) => {
      const t = {},
        n = e.indexOf("?"),
        o = e.indexOf("#"),
        i = o > -1 ? e.slice(o) : "";
      if (-1 === n) return { query: t, hash: i };
      return (
        (o > -1 ? e.slice(n + 1, o) : e.slice(n + 1))
          .split("&")
          .forEach((e) => {
            const [n, o, i] = /^\s*([^=]+)\s*=\s*(.+)\s*$/.exec(e) || [];
            if (o && i) {
              let e = i;
              try {
                e = decodeURIComponent(i);
              } catch (e) {
                console.error(
                  "[extractQuery] failed to decodeURIComponent.",
                  e
                );
              }
              t[o] = e;
            }
          }),
        { query: t, hash: i }
      );
    },
    W = function () {
      let { context: e, key: n } =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var o;
      e = e || {};
      const { req: i } = e,
        { query: r } = A(
          m
            ? window.location.search
            : null !== (o = null == i ? void 0 : i.url) && void 0 !== o
            ? o
            : ""
        );
      return (
        m ||
          i ||
          console.error(
            "getQuery context is null",
            n ? ", key is ".concat(n) : ""
          ),
        t(n) ? r : null == r ? void 0 : r[n]
      );
    },
    O = (e) => {
      const n = [];
      for (const r of Object.keys(e)) {
        if (t(e[r])) continue;
        let l = e[r];
        l = o(l) ? JSON.stringify(l) : i(l) ? c(l) : l;
        try {
          l = encodeURIComponent(l);
        } catch (e) {
          console.error("[encodeQuery] failed to encodeURIComponent.", e);
        }
        n.push("".concat(r, "=").concat(l));
      }
      return n.join("&");
    },
    S = (e, t) => {
      const { query: n, hash: o } = A(e);
      "string" == typeof t &&
        -1 === t.indexOf("?") &&
        console.error("addQueryParam the format of paramObj is error");
      const i = "string" == typeof t ? A(t).query : t,
        r = x(x({}, n), i),
        l = O(r),
        s = l.length > 0 ? "?" : "";
      return ""
        .concat(e.split("#")[0].split("?")[0])
        .concat(s)
        .concat(l)
        .concat(o);
    };
  var _ = (e) => v("common", "navSetting", x({}, e));
  var H,
    P,
    j,
    C,
    T,
    I,
    K,
    N = {};
  function R() {
    if (P) return H;
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    return (
      (P = 1),
      (H = (function () {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.disposed = !1),
            (this.disposalAction = e);
        }
        var n, o, i;
        return (
          (n = t),
          (i = [
            {
              key: "isDisposable",
              value: function (e) {
                return "function" == typeof (null != e ? e.dispose : void 0);
              },
            },
          ]),
          (o = [
            {
              key: "dispose",
              value: function () {
                this.disposed ||
                  ((this.disposed = !0),
                  "function" == typeof this.disposalAction &&
                    this.disposalAction(),
                  (this.disposalAction = null));
              },
            },
          ]) && e(n.prototype, o),
          i && e(n, i),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          t
        );
      })())
    );
  }
  function U() {
    if (C) return j;
    function e(e, t, n) {
      return (
        t &&
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          })(e.prototype, t),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    var t;
    function n(e) {
      if ((null == t && (t = R()), !t.isDisposable(e)))
        throw new TypeError(
          "Arguments to CompositeDisposable.add must have a .dispose() method"
        );
    }
    return (
      (C = 1),
      (j = (function () {
        function t() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.disposed = !1),
            (this.disposables = new Set());
          for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
            n[o] = arguments[o];
          for (var i = 0, r = n; i < r.length; i++) {
            var l = r[i];
            this.add(l);
          }
        }
        return (
          e(t, [
            {
              key: "dispose",
              value: function () {
                this.disposed ||
                  ((this.disposed = !0),
                  this.disposables.forEach(function (e) {
                    return e.dispose();
                  }),
                  (this.disposables = null));
              },
            },
            {
              key: "add",
              value: function () {
                if (!this.disposed) {
                  for (
                    var e = arguments.length, t = new Array(e), o = 0;
                    o < e;
                    o++
                  )
                    t[o] = arguments[o];
                  for (var i = 0, r = t; i < r.length; i++) {
                    var l = r[i];
                    n(l), this.disposables.add(l);
                  }
                }
              },
            },
            {
              key: "remove",
              value: function (e) {
                this.disposed || this.disposables.delete(e);
              },
            },
            {
              key: "delete",
              value: function (e) {
                this.remove(e);
              },
            },
            {
              key: "clear",
              value: function () {
                this.disposed || this.disposables.clear();
              },
            },
          ]),
          t
        );
      })()),
      j
    );
  }
  function B() {
    if (I) return T;
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    I = 1;
    var t = R(),
      n = U(),
      o = (function () {
        function o() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, o),
            (this.disposed = !1),
            this.clear();
        }
        var i, r, l;
        return (
          (i = o),
          (r = [
            {
              key: "clear",
              value: function () {
                null != this.subscriptions && this.subscriptions.dispose(),
                  (this.subscriptions = new n()),
                  (this.handlersByEventName = {});
              },
            },
            {
              key: "dispose",
              value: function () {
                this.subscriptions.dispose(),
                  (this.handlersByEventName = null),
                  (this.disposed = !0);
              },
            },
            {
              key: "on",
              value: function (e, n, o) {
                var i = this;
                if ((null == o && (o = !1), this.disposed))
                  throw new Error("Emitter has been disposed");
                if ("function" != typeof n)
                  throw new Error("Handler must be a function");
                this.handlersByEventName[e]
                  ? o
                    ? this.handlersByEventName[e].unshift(n)
                    : this.handlersByEventName[e].push(n)
                  : (this.handlersByEventName[e] = [n]);
                var r = new t(function () {
                  return i.subscriptions.remove(r), i.off(e, n);
                });
                return this.subscriptions.add(r), r;
              },
            },
            {
              key: "once",
              value: function (e, t, n) {
                null == n && (n = !1);
                var o = this.on(
                  e,
                  function (e) {
                    return o.dispose(), t(e);
                  },
                  n
                );
                return o;
              },
            },
            {
              key: "preempt",
              value: function (e, t) {
                return this.on(e, t, !0);
              },
            },
            {
              key: "off",
              value: function (e, t) {
                if (!this.disposed) {
                  var n = this.handlersByEventName[e];
                  if (n) {
                    var o = n.indexOf(t);
                    o >= 0 && n.splice(o, 1),
                      0 === n.length && delete this.handlersByEventName[e];
                  }
                }
              },
            },
            {
              key: "emit",
              value: function (e, t) {
                var n = this.handlersByEventName && this.handlersByEventName[e];
                if (n)
                  for (var o = n.slice(), i = 0; i < o.length; i++)
                    this.constructor.dispatch(o[i], t);
              },
            },
            {
              key: "emitAsync",
              value: function (e, t) {
                var n = this,
                  o = this.handlersByEventName && this.handlersByEventName[e];
                if (o) {
                  var i = o.map(function (e) {
                    return n.constructor.dispatch(e, t);
                  });
                  return Promise.all(i).then(function () {});
                }
                return Promise.resolve();
              },
            },
            {
              key: "getEventNames",
              value: function () {
                return Object.keys(this.handlersByEventName);
              },
            },
            {
              key: "listenerCountForEventName",
              value: function (e) {
                var t = this.handlersByEventName[e];
                return null == t ? 0 : t.length;
              },
            },
            {
              key: "getTotalListenerCount",
              value: function () {
                for (
                  var e = 0, t = 0, n = Object.keys(this.handlersByEventName);
                  t < n.length;
                  t++
                ) {
                  var o = n[t];
                  e += this.handlersByEventName[o].length;
                }
                return e;
              },
            },
          ]),
          (l = [
            {
              key: "onEventHandlerException",
              value: function (e) {
                var n = this;
                return (
                  0 === this.exceptionHandlers.length &&
                    (this.dispatch = this.exceptionHandlingDispatch),
                  this.exceptionHandlers.push(e),
                  new t(function () {
                    if (
                      (n.exceptionHandlers.splice(
                        n.exceptionHandlers.indexOf(e),
                        1
                      ),
                      0 === n.exceptionHandlers.length)
                    )
                      return (n.dispatch = n.simpleDispatch);
                  })
                );
              },
            },
            {
              key: "simpleDispatch",
              value: function (e, t) {
                return e(t);
              },
            },
            {
              key: "exceptionHandlingDispatch",
              value: function (e, t) {
                try {
                  return e(t);
                } catch (e) {
                  return this.exceptionHandlers.map(function (t) {
                    return t(e);
                  });
                }
              },
            },
          ]),
          r && e(i.prototype, r),
          l && e(i, l),
          Object.defineProperty(i, "prototype", { writable: !1 }),
          o
        );
      })();
    return (o.dispatch = o.simpleDispatch), (o.exceptionHandlers = []), (T = o);
  }
  var L,
    M,
    $ =
      (K ||
        ((K = 1),
        (N.Emitter = B()),
        (N.Disposable = R()),
        (N.CompositeDisposable = U())),
      N);
  (e.AppEvent = void 0),
    ((L = e.AppEvent || (e.AppEvent = {})).SHOW = "webview-show"),
    (L.HIDE = "webview-hide"),
    (L.MESSAGE = "webview-message"),
    (L.REFRESH = "webview-refresh"),
    (L.KEYBOARD_SHOW = "webview-keyboard-show"),
    (L.KEYBOARD_HIDE = "webview-keyboard-hide"),
    (L.ID_DETECT_OK = "webview-id-detect-ok"),
    (e.AppMsgType = void 0),
    ((M = e.AppMsgType || (e.AppMsgType = {})).social_del_post =
      "social_del_post"),
    (M.joined_group = "joinedGroup");
  const z = new (class {
    constructor() {
      (this.onIdDetectSuccess = (t) => {
        const n = (e) => {
          t(e.detail);
        };
        return (
          window.addEventListener(e.AppEvent.ID_DETECT_OK, n),
          {
            dispose: () => {
              window.removeEventListener(e.AppEvent.ID_DETECT_OK, n);
            },
          }
        );
      }),
        (this.onHide = (t) => {
          const n = (e) => {
            t(e.detail);
          };
          return (
            window.addEventListener(e.AppEvent.HIDE, n),
            {
              dispose: () => {
                window.removeEventListener(e.AppEvent.HIDE, n);
              },
            }
          );
        }),
        (this.onShow = (t) => {
          const n = (e) => {
            t(e.detail);
          };
          return (
            window.addEventListener(e.AppEvent.SHOW, n),
            {
              dispose: () => {
                window.removeEventListener(e.AppEvent.SHOW, n);
              },
            }
          );
        }),
        (this.onRefresh = (t) => {
          const n = (e) => {
            t(e.detail);
          };
          return (
            window.addEventListener(e.AppEvent.REFRESH, n),
            {
              dispose: () => {
                window.removeEventListener(e.AppEvent.REFRESH, n);
              },
            }
          );
        }),
        (this.onKeyboardShow = (t) => {
          const n = (e) => {
            t(e.detail);
          };
          return (
            window.addEventListener(e.AppEvent.KEYBOARD_SHOW, n),
            {
              dispose: () => {
                window.removeEventListener(e.AppEvent.KEYBOARD_SHOW, n);
              },
            }
          );
        }),
        (this.onKeyboardHide = (t) => {
          const n = (e) => {
            t(e.detail);
          };
          return (
            window.addEventListener(e.AppEvent.KEYBOARD_HIDE, n),
            {
              dispose: () => {
                window.removeEventListener(e.AppEvent.KEYBOARD_HIDE, n);
              },
            }
          );
        }),
        (this.onMessage = (t) => {
          const n = (e) => {
            t(e.detail);
          };
          return (
            window.addEventListener(e.AppEvent.MESSAGE, n),
            {
              dispose: () => {
                window.removeEventListener(e.AppEvent.MESSAGE, n);
              },
            }
          );
        }),
        (this.on = (e, t) => {
          const n = (e) => {
            t(e.detail);
          };
          return (
            (e = Array.isArray(e) ? e : [e]),
            new $.CompositeDisposable(
              ...e.map(
                (e) => (
                  window.addEventListener(e, n),
                  {
                    dispose: () => {
                      window.removeEventListener(e, n);
                    },
                  }
                )
              )
            )
          );
        }),
        (this.setNav = (e, t) => {
          let { type: n, text: o, icon: i, iconName: r } = e;
          this.navDisposable &&
            (this.navDisposable.dispose(), (this.navDisposable = null));
          const l = "callback_".concat(a());
          return (
            (window[l] = t),
            (this.navDisposable = {
              dispose: () => {
                delete window[l];
              },
            }),
            _({ type: n, text: o, icon: i, iconName: r, action: l }),
            this.navDisposable
          );
        }),
        m &&
          ((window.WebullH5 = window.WebullH5 || {}),
          (window.WebullH5.onWebviewHide = () =>
            window.dispatchEvent(new CustomEvent(e.AppEvent.HIDE))),
          (window.WebullH5.onWebviewShow = () =>
            window.dispatchEvent(new CustomEvent(e.AppEvent.SHOW))),
          (window.WebullH5.onWebviewRefresh = () =>
            window.dispatchEvent(new CustomEvent(e.AppEvent.REFRESH))),
          (window.WebullH5.onWebviewKeyboardShow = () =>
            window.dispatchEvent(new CustomEvent(e.AppEvent.KEYBOARD_SHOW))),
          (window.WebullH5.onWebviewKeyboardHide = () =>
            window.dispatchEvent(new CustomEvent(e.AppEvent.KEYBOARD_HIDE))),
          (window.WebullH5.onWebviewMessage = (t) => {
            let { type: n, data: o } = t;
            return window.dispatchEvent(
              new CustomEvent(e.AppEvent.MESSAGE, {
                detail: { type: n, data: o },
              })
            );
          }),
          (window.openIdDetectback = (t, n) =>
            window.dispatchEvent(
              new CustomEvent(e.AppEvent.ID_DETECT_OK, {
                detail: { code: t, imageBase64: n },
              })
            )));
    }
  })();
  /*! js-cookie v3.0.5 | MIT */ function q(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) e[o] = n[o];
    }
    return e;
  }
  var F = (function e(t, n) {
    function o(e, o, i) {
      if ("undefined" != typeof document) {
        "number" == typeof (i = q({}, n, i)).expires &&
          (i.expires = new Date(Date.now() + 864e5 * i.expires)),
          i.expires && (i.expires = i.expires.toUTCString()),
          (e = encodeURIComponent(e)
            .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
            .replace(/[()]/g, escape));
        var r = "";
        for (var l in i)
          i[l] &&
            ((r += "; " + l), !0 !== i[l] && (r += "=" + i[l].split(";")[0]));
        return (document.cookie = e + "=" + t.write(o, e) + r);
      }
    }
    return Object.create(
      {
        set: o,
        get: function (e) {
          if ("undefined" != typeof document && (!arguments.length || e)) {
            for (
              var n = document.cookie ? document.cookie.split("; ") : [],
                o = {},
                i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i].split("="),
                l = r.slice(1).join("=");
              try {
                var s = decodeURIComponent(r[0]);
                if (((o[s] = t.read(l, s)), e === s)) break;
              } catch (e) {}
            }
            return e ? o[e] : o;
          }
        },
        remove: function (e, t) {
          o(e, "", q({}, t, { expires: -1 }));
        },
        withAttributes: function (t) {
          return e(this.converter, q({}, this.attributes, t));
        },
        withConverter: function (t) {
          return e(q({}, this.converter, t), this.attributes);
        },
      },
      {
        attributes: { value: Object.freeze(n) },
        converter: { value: Object.freeze(t) },
      }
    );
  })(
    {
      read: function (e) {
        return (
          '"' === e[0] && (e = e.slice(1, -1)),
          e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        );
      },
      write: function (e) {
        return encodeURIComponent(e).replace(
          /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
          decodeURIComponent
        );
      },
    },
    { path: "/" }
  );
  const Q =
      /.*\.((webull(broker|zone|app|fintech|-inc|corp|-uk|-br|-hk|pay|-latam)?|wb4magxg|wbapiservxg|wbsgsecurities|wbausecurities|wbjpsecurities)\.(com|hk|cn|(co\.)?jp|ca|in|(co\.)?uk|(co\.)?id|eu|kr|(com\.)?sg|com\.ph|com\.vn|co\.th|co\.za|co\.jp|com\.au|com\.br|com\.my|com\.mx))(:\d+)?$/,
    J =
      /.*\.((webull(app|fintech|corp|-uk|-br|pay|-hk|-latam)?)\.(com|hk|cn|(co\.)?jp|ca|in|(co\.)?uk|(co\.)?id|eu|kr|(com\.)?sg|com\.ph|com\.vn|co\.th|co\.za|co\.jp|com\.au|com\.br|com\.my|com\.mx))$/,
    Y = /.*\.((webull(app)?)\.(com\.)?sg)$/,
    G = /.*\.(((webull(app)?)\.hk)|(webull-hk\.com))$/,
    V = /.*\.((webull(app)?)\.(co\.)?jp)$/,
    Z = /.*\.((webull(app)?)\.(com\.)?au)$/,
    X = /.*\.((webull(app)?)\.(co\.)?za)$/,
    ee = /.*\.(((webull(app)?)\.(co\.)?(uk))|(webull-uk\.com))$/,
    te = /.*\.((webull(app)?)\.(co\.)?id)$/,
    ne = /.*\.((webull(app)?)\.ca)$/,
    oe = /.*\.((webull(app)?)\.(co\.)?th)$/,
    ie = /.*\.((webull(app)?)\.(com\.)?my)$/,
    re = /.*\.(((webull(app)?)\.(com\.)?(br))|(webull-br\.com))$/,
    le = /.*\.(((webull(app)?)\.(com\.)?(mx)))$/,
    se = /.*\.((webull(app)?)\.eu)$/,
    ae = /.*\.(webull-latam\.com)$/,
    ce = /.*\.((webullpay?)\.app)$/,
    ue = /.*\.((webull(zone|broker|-inc))\.com|webullapp\.cn)$/,
    pe = /.*\.(webull(app)?\.com)$/,
    de = /.*\.(webull(app|fintech)?\.com)$/,
    we =
      /^https:\/\/.*\.((webull(broker|zone|app|fintech|-inc|corp|-uk|-br|-hk|-latam)?|wb4magxg|wbapiservxg|wb(sg|au|jp|ca|uk|th|za|br|my|id|mx|lt)securities)\.(com|hk|cn|(co\.)?jp|ca|in|(co\.)?uk|(co\.)?id|eu|kr|(com\.)?sg|com\.ph|com\.vn|co\.th|co\.za|co\.jp|com\.au|com\.br|com\.my|com\.mx))(\/|$)/,
    be = /^https:\/\/.*\.((webull(app)?)\.(com\.)?sg)(\/|$)/,
    me = /^https:\/\/.*\.(((webull(app)?)\.hk)|(webull-hk\.com))(\/|$)/,
    he = /^https:\/\/.*\.((webull(app)?)\.(co\.)?jp)(\/|$)/,
    ye = /^https:\/\/.*\.((webull(app)?)\.(com\.)?au)(\/|$)/,
    fe = /^https:\/\/.*\.((webull(app)?)\.(co\.)?za)(\/|$)/,
    ge =
      /^https:\/\/.*\.(((webull(app)?)\.(co\.)?(uk))|(webull-uk\.com))(\/|$)/,
    ve = /^https:\/\/.*\.((webull(app)?)\.(co\.)?id)(\/|$)/,
    ke = /^https:\/\/.*\.((webull(app)?)\.ca)(\/|$)/,
    Ee = /^https:\/\/.*\.((webull(app)?)\.(co\.)?th)(\/|$)/,
    De = /^https:\/\/.*\.((webull(app)?)\.(com\.)?my)(\/|$)/,
    xe =
      /^https:\/\/.*\.(((webull(app)?)\.(com\.)?(br))|(webull-br\.com))(\/|$)/,
    Ae = /^https:\/\/.*\.((webull(app)?)\.(com\.)?mx)(\/|$)/,
    We = /^https:\/\/.*\.((webullpay?)\.app)(\/|$)/,
    Oe = (e) => {
      var t;
      return "string" == typeof e
        ? e
        : m
        ? window.location.hostname
        : null === (t = null == e ? void 0 : e.req) || void 0 === t
        ? void 0
        : t.hostname;
    },
    Se = (e) => J.test(e),
    _e = (e, t, n) => {
      const o = Oe(e);
      return t.test(o);
    },
    He = (e) => _e(e, ue),
    Pe = (e) => _e(e, pe),
    je = (e) => _e(e, Y),
    Ce = (e) => _e(e, G),
    Te = (e) => _e(e, V),
    Ie = (e) => _e(e, Z),
    Ke = (e) => _e(e, X),
    Ne = (e) => _e(e, ee),
    Re = (e) => _e(e, te),
    Ue = (e) => _e(e, ne),
    Be = (e) => _e(e, oe),
    Le = (e) => _e(e, ie),
    Me = (e) => _e(e, re),
    $e = (e) => _e(e, le),
    ze = (e) => _e(e, se),
    qe = (e) => _e(e, ae),
    Fe = (e) => {
      var t, n;
      const o = Oe(e);
      return null !==
        (n = null === (t = Q.exec(o)) || void 0 === t ? void 0 : t[1]) &&
        void 0 !== n
        ? n
        : void 0;
    },
    Qe =
      /^.*\.((webull(app|corp|fintech|broker|pay|wallet|cash|-uk|-br|-hk|-latam)?|wb4magxg|wbapiservxg)\.(app|com|hk|cn|jp|ca|in|(co\.)?uk|(co\.)?id|eu|kr|(com\.)?sg|com\.ph|com\.vn|co\.th|co\.za|co\.jp|com\.au|com\.br|com\.my|com\.mx))$/,
    Je = (e, t) => {
      let n;
      const o = new RegExp(Qe).exec(e);
      if (o)
        return (
          (n = o[1]),
          [
            "webullfintech.com",
            "webullbroker.com",
            "wb4magxg.com",
            "wbapiservxg.com",
          ].includes(n)
            ? "https://".concat(t, ".webullapp.com/")
            : "https://".concat(t, ".").concat(n, "/")
        );
      throw new Error(
        "gen biz("
          .concat(t, ") host fail, hostname(")
          .concat(e, ") can not match rules")
      );
    },
    Ye = (e) => {
      const t = Oe(e);
      return Je(t, "passport");
    },
    Ge = () =>
      ["uat", "uat2", "production"].includes("production")
        ? m
          ? { secure: !0, SameSite: "None" }
          : { secure: !0, sameSite: "none" }
        : {},
    Ve = (e, t) =>
      e
        ? lt({
            context: t,
            key: b.webTokenKey,
            value: e,
            setting: { expires: new Date(Date.now() + 2592e6) },
          })
        : Ze(),
    Ze = function () {
      return st({
        context:
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        key: b.webTokenKey,
      });
    },
    Xe = (e, t) =>
      e
        ? lt({
            context: t,
            key: b.instTokenKey,
            value: e,
            setting: { expires: new Date(Date.now() + 2592e6) },
          })
        : et(),
    et = function () {
      return st({
        context:
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        key: b.instTokenKey,
      });
    },
    tt = (e, t) =>
      e
        ? lt({
            context: t,
            key: b.webUidKey,
            value: e,
            setting: { expires: new Date(Date.now() + 2592e6) },
          })
        : nt(),
    nt = function () {
      return st({
        context:
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        key: b.webUidKey,
      });
    },
    ot = (e, t) =>
      e
        ? lt({
            context: t,
            key: b.webTokenDomainKey,
            value: e,
            setting: { expires: new Date(Date.now() + 2592e6) },
          })
        : it(),
    it = function () {
      return st({
        context:
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        key: b.webTokenDomainKey,
      });
    },
    rt = function () {
      let { context: e = {}, key: t } =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const { req: n } = e;
      return m
        ? F.get(t)
        : n
        ? null == n
          ? void 0
          : n.cookies[t]
        : void console.error("getCookie context is null");
    },
    lt = function () {
      let {
        context: e = {},
        key: t,
        value: n,
        setting: o,
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const { req: i, res: r } = e,
        l = Fe(e);
      return m
        ? F.set(t, n, x(x(x({}, Ge()), o), l ? { domain: l } : {}))
        : i
        ? (i.cookies && Reflect.defineProperty(i.cookies, t, { value: n }),
          r.cookie(t, n, x(x(x({}, Ge()), o), l ? { domain: l } : {})))
        : void console.error("setCookie context is null");
    },
    st = function () {
      let { context: e = {}, key: t } =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const { req: n, res: o } = e,
        i = Fe(e);
      return m
        ? F.remove(t, x(x({}, Ge()), i ? { domain: i } : {}))
        : n
        ? (n.cookies && Reflect.deleteProperty(n.cookies, t),
          o.clearCookie(t, x(x({}, Ge()), i ? { domain: i } : {})))
        : void console.error("clearCookie context is null");
    };
  let at = "web_act_source",
    ct = "web_isource",
    ut = "web_icode";
  const pt = (e) => e && "undefined" !== e,
    dt = (e) => (e ? e.replace(/[^a-zA-Z0-9_-]/g, "").substring(0, 32) : e),
    wt = [
      "facebook",
      "linkedin",
      "t.co",
      "google",
      "reddit",
      "instagram",
      "brokerchooser",
      "outlook.live",
      "benzinga",
      "prnewswire",
      "businessinsider",
      "youtube",
      "yandex",
      "yahoo",
      "bing",
      "webullapp",
      ["webull.com", "webull"],
      ["webullbroker.com", "webull"],
    ],
    bt = (e) => {
      const t =
        W({ context: e, key: "inviteCode" }) ||
        W({ context: e, key: "invite_code" });
      if (pt(t)) return t;
      const n = rt({ context: e, key: ut });
      return pt(n) ? n : null;
    },
    mt = (e, t) => {
      var n;
      return ""
        .concat(e, '="')
        .concat(null !== (n = u(t)) && void 0 !== n ? n : "", '"');
    },
    ht = (e, t) => {
      const n = yt(e, t);
      return x(x({}, { "@context": "http://schema.org" }), n);
    },
    yt = (e, t) => {
      switch (e) {
        case "blog":
          return ft(t);
        case "faq":
          return gt(t);
        case "news":
          return vt(t);
        case "learning":
          return kt(t);
        case "ticker":
          return Et(t);
        case "nav":
          return Dt();
        case "home":
          return xt(t);
        case "product":
          return At(t);
        default:
          return {};
      }
    },
    ft = (e) => {
      let { title: t, publishData: o, author: i } = e;
      return x(
        { "@type": "BlogPosting", headline: t, datePublished: o },
        n(i) ? { author: { "@type": "Person", name: i } } : {}
      );
    },
    gt = (e) => {
      let { title: t, answer: n } = e;
      return {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: t,
            acceptedAnswer: { "@type": "Answer", text: n },
          },
        ],
      };
    },
    vt = (e) => {
      let { title: t, publishData: n, author: o, publisher: i } = e;
      return {
        "@type": "NewsArticle",
        headline: t,
        datePublished: n,
        author: { "@type": "Person", name: o },
        publisher: { "@type": "Organization", name: i },
      };
    },
    kt = (e) => {
      let { title: t, courseName: n } = e;
      return { "@type": "LearningResource", name: t, educationalLevel: n };
    },
    Et = (e) => {
      let { title: t, description: n, url: o, companyName: i, symbol: r } = e;
      return {
        "@type": "Corporation",
        "@id": o,
        name: t,
        description: n,
        alternateName: i,
        mainEntityOfPage: {
          "@type": "WebPage",
          url: o,
          isAccessibleForFree: !0,
        },
        tickerSymbol: "${".concat(r, "}"),
      };
    },
    Dt = () => ({
      "@type": "SiteNavigationElement",
      name: "Website Navigation",
      url: [
        { "@type": "URL", name: "Home", url: "/" },
        {
          "@type": "URL",
          name: "WEBTRADE",
          url: "https://app.webull.com/watch",
        },
      ],
    }),
    xt = (e) => {
      let { url: t, name: n } = e;
      return { "@type": "Organization", name: n, url: t };
    },
    At = (e) => {
      let { name: t, description: n } = e;
      return { "@type": "DefinedTerm", name: t, description: n };
    };
  var Wt = "undefined" == typeof window;
  (e.AppHeaders = k),
    (e.StructuredDataJs = (e, t) =>
      '<script type="application/ld+json">'.concat(
        JSON.stringify(ht(e, t)),
        "</script>"
      )),
    (e.StructuredDataJson = ht),
    (e.addQueryParam = S),
    (e.appDispatch = {
      deposit: "webull://webull/depositNew",
      transfer: "webull://webull/transfer",
      trade: "webull://webull/tradeEntrance",
      tradeStatus: "webull://webull/tradeStatus",
      login: "webull://webull/login",
      feedback: "webull://webull/customerService",
      saxoLogin: "webull://webull/saxoLogin",
      position: "webull://webull/position",
      marginStock: "webull://webull/marginStock",
      filterStockResult: "webull://webull/filterStockResult",
      filterStock: "webull://webull/filterStocks",
      filterStockAndroid:
        "webull://webull/stock_screener_activity?source=source_normal",
      paperTrade: "webull://webull/paperTrade",
      profit: "webull://webull/profit",
      userAlert: "webull://webull/userAlert",
      createPortfolio: "webull://webull/createPortfolio",
      simulationTrade: "webull://webull/simulationTrade",
      achPlaid: "webull://webull/linkAchPlaid",
      achMicro: "webull://webull/linkAchMicro",
      withdraw: "webull://webull/withdraw",
      stockHome: "webull://webull/simulateStockHome",
      withDraw: "webull://webull/actionWithDraw",
      kolPoster: "webull://webull/kolPoster",
      subjectDetail: "webull://webull/subjectDetail",
      postDetail: "webull://webull/postDetail",
      doPost: "webull://webull/doPost",
      tickerDetail: "webull://webull/tickerDetail",
      tradePassword: "webull://webull/tradeTokenExpire",
      exchange: "webull://webull/exchangeConvert",
      tradePasswordChange: "webull://webull/tradePasswordChange",
      achBankList: "webull://webull/achBankList",
      fundList: "webull://webull/fundList",
      depositHistory: "webull://webull/depositHistory",
      community: "webull://webull/post",
      openCamera: "webull://webull/openCamera",
      openPhotoAlbum: "webull://webull/openPhotoAlbum",
      uploadLog: "webull://webull/uploadLog",
      userDetail: "webull://webull/userDetail",
      helpCenter: "webull://webull/helpCenter",
      Search: "webull://webull/global/search",
      openSystemWeb: "webull://webull/openSystemWeb",
      openWebullApp: "webull://webull/web",
      sendMessageToApp: "webull://webull/webPostMessage",
      myWefolio: "webull://webull/action_my_wefolio",
      createWefolio: "webull://webull/action_create_wefolio",
      accountNews: "webull://webull/news/accountHome",
      dtOpenNews: "webull://webull/dtOpenNews",
      dtReply: "webull://webull/dtReply",
      dtComment: "webull://webull/dtComment",
      qtOpenTicker: "webull://dtlayout.stocks.com",
      dtCloneWindow: "webull://webull/dtCloneWindow",
      enterpriseHome: "webull://webull/enterpriseHome",
      updateTopWeb: "webull://webull/updateTopWeb",
    }),
    (e.checkTradeToken = (e, t) =>
      v("h5", "checkTradeToken", { callback: e, forceCheck: t })),
    (e.clearCookie = st),
    (e.clearInstCookies = function () {
      et(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {});
    }),
    (e.clearInstToken = et),
    (e.clearToken = Ze),
    (e.clearUID = nt),
    (e.clearUserCookies = function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      Ze(e), it(e), nt(e);
    }),
    (e.clearUserDomain = it),
    (e.closeWebView = () =>
      window.Syncextrade && "function" == typeof window.Syncextrade.close
        ? (window.Syncextrade.close(), !0)
        : window.webkit &&
          window.webkit.messageHandlers &&
          window.webkit.messageHandlers.Syncextrade &&
          "function" ==
            typeof window.webkit.messageHandlers.Syncextrade.postMessage
        ? v("accountRegister", "close", {})
        : v("common", "close", {})),
    (e.compareVersion = function (e, n) {
      let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (t(e) || t(n)) return -1;
      const i = e.split("."),
        r = n.split(".");
      try {
        const e = o
          ? Math.min(i.length, r.length)
          : Math.max(i.length, r.length);
        for (let t = 0; t < e; t++) {
          if (
            ((i[t] = i[t] || "0"),
            (r[t] = r[t] || "0"),
            parseInt(i[t], 10) > parseInt(r[t], 10))
          )
            return 1;
          if (parseInt(i[t], 10) < parseInt(r[t], 10)) return -1;
        }
      } catch (e) {
        return -1;
      }
      return 0;
    }),
    (e.concatSets = function (e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      for (const t of n) for (const n of t) e.add(n);
    }),
    (e.configActSource = (e) => {
      let {
        context: t,
        prefix: n = "",
        pageMapping: o = [],
        refererMapping: i = [],
      } = e;
      const r = W({ context: t, key: "source" }),
        l = W({ context: t, key: "inviteCode" }),
        s = W({ context: t, key: "inviteSource" });
      if (
        (pt(l) &&
          (lt({
            context: t,
            key: ut,
            value: dt(l),
            setting: { expires: new Date(Date.now() + 864e5) },
          }),
          pt(s)
            ? lt({
                context: t,
                key: ct,
                value: dt(s),
                setting: { expires: new Date(Date.now() + 864e5) },
              })
            : rt({ context: t, key: ct }) && st({ context: t, key: ct })),
        pt(r))
      )
        return (
          lt({
            context: t,
            key: at,
            value: dt(r),
            setting: { expires: new Date(Date.now() + 864e5) },
          }),
          r
        );
      const a = rt({ context: t, key: at });
      if (pt(a)) return a;
      const c = t.req.headers.referer || "";
      let u;
      if (c) {
        i = [...(null != i ? i : []), ...wt];
        const e = i.find((e) => {
          const t = Array.isArray(e) ? e[0] : e;
          return t instanceof RegExp ? t.test(p) : c.includes(t);
        });
        if (((u = Array.isArray(e) ? e[1] : e), !u))
          return (
            lt({
              context: t,
              key: at,
              value: "seo-referral-other",
              setting: { expires: new Date(Date.now() + 864e5) },
            }),
            "seo-referral-other"
          );
      } else u = "direct";
      const p = t.req.path;
      let d = o.find((e) => {
        const t = Array.isArray(e) ? e[0] : e;
        return t instanceof RegExp ? t.test(p) : p.includes(t);
      });
      d = (Array.isArray(d) ? d[1] : d) || "other";
      const w = [n, "seo", u, d].filter((e) => !!e).join("-");
      return (
        lt({
          context: t,
          key: at,
          value: dt(w),
          setting: { expires: new Date(Date.now() + 864e5) },
        }),
        w
      );
    }),
    (e.cookieKeys = b),
    (e.dateTimePicker = (e) => v("common", "dateTimePicker", e)),
    (e.delay = function () {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
      return new Promise((n) => {
        setTimeout(() => {
          n(e);
        }, t);
      });
    }),
    (e.dispatch = function (e) {
      return v("common", "dispatch", {
        funcUrl: e,
        data:
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      });
    }),
    (e.dispatchViewBtn = (e, t) => v("common", e, { isShow: t })),
    (e.enableScreenshot = (e) =>
      v("common", "enableScreenshot", { enable: e })),
    (e.encodeQuery = O),
    (e.escapeHTML = u),
    (e.extractQuery = A),
    (e.first = (e) => (Array.isArray(e) ? e[0] : e)),
    (e.fixedSpace = (e) => (t(e) ? "" : e + " ")),
    (e.fixedZero = (e) => (1 * Number(e) < 10 ? "0".concat(e) : e)),
    (e.genAbsolutePath = (e, t) => {
      if (/^http(s)?:\/\//g.test(e)) return e;
      if (!e) throw new Error("genAbsolutePath path is null");
      "/" !== e[0] && (e = "/".concat(e));
      let n = Oe(t);
      return n ? "https://".concat(n).concat(e) : e;
    }),
    (e.genActHost = (e) => {
      const t = Oe(e);
      return Je(t, "act");
    }),
    (e.genAuthHost = Ye),
    (e.genDeepLinkHost = (e) => {
      const t = Oe(e);
      return Je(t, "deeplink");
    }),
    (e.genLinkAttr = (e) =>
      s(e)
        ? e
            .map((e) =>
              '<link rel="'
                .concat(e.rel, '" href="')
                .concat(e.href, '" ')
                .concat(e.as ? mt("as", e.as) : "", ">")
            )
            .join("\n")
        : ""),
    (e.genLoginPath = (e) => "".concat(Ye(e), "auth/simple/login")),
    (e.genMeta = (e) =>
      s(e)
        ? e
            .map((e) =>
              "<meta ".concat(e.map((e) => mt(e.key, e.value)).join(" "), ">")
            )
            .join("\n")
        : ""),
    (e.genOfficialHost = (e) => {
      const t = Oe(e);
      return Je(t, "www");
    }),
    (e.genOgMetaUtil = (e) => {
      const t = [];
      return (
        Object.keys(e).forEach((n) => {
          e[n] &&
            (n.includes("twitter:")
              ? "twitter:image" === n &&
                (t.push([
                  { key: "name", value: "twitter:card" },
                  { key: "content", value: "summary_large_image" },
                ]),
                t.push([
                  { key: "name", value: n },
                  { key: "content", value: e[n] },
                ]))
              : n.includes("webull:")
              ? t.push([
                  { key: "name", value: n },
                  { key: "content", value: e[n] },
                ])
              : (t.push([
                  { key: "property", value: n },
                  { key: "content", value: e[n] },
                ]),
                "og:image" === n &&
                  [".png", ".jpg", ".jpeg"].some((t) => e[n].indexOf(t) > -1) &&
                  (t.push([
                    { key: "property", value: "og:image:url" },
                    { key: "content", value: e[n] },
                  ]),
                  t.push([
                    { key: "property", value: "og:image:type" },
                    {
                      key: "content",
                      value:
                        e[n].indexOf(".png") > -1 ? "image/png" : "image/jpeg",
                    },
                  ]),
                  t.push([
                    { key: "property", value: "og:image:width" },
                    { key: "content", value: "1200" },
                  ]),
                  t.push([
                    { key: "property", value: "og:image:height" },
                    { key: "content", value: "627" },
                  ]))));
        }),
        t
      );
    }),
    (e.genSignupPath = (e) => "".concat(Ye(e), "auth/simple/signup")),
    (e.genSpHost = (e) => {
      const t = Oe(e);
      return Je(t, "sp");
    }),
    (e.genTDK = (e) => {
      let { title: t, description: o, keywords: i } = e;
      return (
        (t = "<title>".concat(t ? u(t) : "&#65279;", "</title>")),
        (o = o
          ? '<meta name="description" content="'.concat(u(o), '" />')
          : void 0),
        (i = i
          ? '<meta name="keywords" content="'.concat(u(i), '" />')
          : void 0),
        [t, i, o].filter(n).join("\n")
      );
    }),
    (e.getAppByHost = (e) => {
      var t, n;
      return null !==
        (n =
          null ===
            (t = [
              [Ie(e), "au"],
              [Ke(e), "za"],
              [Ke(e), "za"],
              [Ne(e), "gb"],
              [Ue(e), "ca"],
              [Re(e), "id"],
              [je(e), "sg"],
              [Ce(e), "hk"],
              [Te(e), "jp"],
              [He(e), "cn"],
              [Be(e), "th"],
              [Le(e), "my"],
              [Me(e), "br"],
              [ze(e), "eu"],
              [$e(e), "mx"],
              [qe(e), "lt"],
            ].find((e) => e[0])) || void 0 === t
            ? void 0
            : t[1]) && void 0 !== n
        ? n
        : "global";
    }),
    (e.getAppInfo = (e) => v("h5", "getAppInfo", { callback: e, column: k })),
    (e.getCookie = rt),
    (e.getCookieDomainByHost = Fe),
    (e.getCookieDomainByUrl = (e) => {
      var t, n;
      return null !==
        (n = null === (t = we.exec(e)) || void 0 === t ? void 0 : t[1]) &&
        void 0 !== n
        ? n
        : void 0;
    }),
    (e.getDefaultLanguageByHost = (e) =>
      Te(e)
        ? "ja"
        : Ce(e)
        ? "zh-hant"
        : He(e)
        ? "zh"
        : Re(e)
        ? "idn"
        : Be(e)
        ? "th"
        : Me(e)
        ? "pt"
        : $e(e)
        ? "es"
        : "en"),
    (e.getDefaultSupportLanguageByHost = (e) =>
      Te(e)
        ? ["ja"]
        : Re(e)
        ? ["idn", "en"]
        : Ue(e)
        ? ["fr", "en", "zh"]
        : Be(e)
        ? ["th", "en"]
        : Le(e)
        ? ["ms", "en", "zh"]
        : Me(e)
        ? ["pt", "en"]
        : $e(e)
        ? ["es", "en"]
        : qe(e)
        ? ["es", "en", "pt"]
        : Ie(e) || Ke(e) || Ne(e) || Ue(e) || Le(e)
        ? ["en"]
        : ["zh", "zh-hant", "en"]),
    (e.getDid = (e) => {
      let n = rt({ context: e, key: b.deviceIdKey });
      return (
        t(n) &&
          ((n = a()),
          lt({
            context: e,
            key: b.deviceIdKey,
            value: n,
            setting: { expires: new Date(Date.now() + 31536e6) },
          })),
        n
      );
    }),
    (e.getHostname = Oe),
    (e.getInstToken = (e) => rt({ context: e, key: b.instTokenKey })),
    (e.getInviteCode = bt),
    (e.getInviteSource = (e) => {
      if (!pt(bt(e))) return null;
      const t =
        W({ context: e, key: "inviteSource" }) ||
        W({ context: e, key: "invite_source" });
      if (pt(t)) return "wb_kol_us" !== t ? t : "wb_inf";
      const n = rt({ context: e, key: ct });
      return pt(n) ? ("wb_kol_us" !== n ? n : "wb_inf") : "wb_oversea";
    }),
    (e.getLastPageCookie = (e) => rt({ context: e, key: b.webLastPageKey })),
    (e.getPathname = (e) => {
      var t;
      return m
        ? window.location.pathname
        : null === (t = null == e ? void 0 : e.req) || void 0 === t
        ? void 0
        : t.path;
    }),
    (e.getQuery = W),
    (e.getRandomID = a),
    (e.getRegionByHost = (e) => {
      var t, n;
      return null !==
        (n =
          null ===
            (t = [
              [Ie(e), "au"],
              [Ke(e), "za"],
              [Ne(e), "gb"],
              [Ue(e), "ca"],
              [Re(e), "id"],
              [je(e), "sg"],
              [Ce(e), "hk"],
              [Te(e), "jp"],
              [He(e), "cn"],
              [Pe(e), "us"],
              [Be(e), "th"],
              [Le(e), "my"],
              [Me(e), "br"],
              [ze(e), "eu"],
              [$e(e), "mx"],
              [qe(e), "lt"],
            ].find((e) => e[0])) || void 0 === t
            ? void 0
            : t[1]) && void 0 !== n
        ? n
        : null;
    }),
    (e.getSource = (e) => {
      const t = W({ context: e, key: "source" }) || rt({ context: e, key: at });
      return pt(t) ? t : pt(bt(e)) ? "wb_invite" : null;
    }),
    (e.getToken = (e) => rt({ context: e, key: b.webTokenKey })),
    (e.getUID = (e) => rt({ context: e, key: b.webUidKey })),
    (e.getUserAgent = h),
    (e.getUserDomain = (e) => rt({ context: e, key: b.webTokenDomainKey })),
    (e.getUserSRouterByHost = (e) => {
      var t, n;
      return null !==
        (n =
          null ===
            (t = [
              [He(e), "dc_cn1"],
              [Ke(e), "dc_za_tech1"],
              [je(e), "dc_sg_tech1"],
              [Ce(e), "dc_hk_tech1"],
              [Te(e), "dc_jp1"],
              [Me(e), "dc_br_tech1"],
              [Be(e), "dc_th1"],
              [Le(e), "dc_my1"],
              [Re(e), "dc_id1"],
              [Ne(e), "dc_uk1"],
              [Ue(e), "dc_ca1"],
              [Ie(e), "dc_au1"],
            ].find((e) => e[0])) || void 0 === t
            ? void 0
            : t[1]) && void 0 !== n
        ? n
        : "dc_us_tech1";
    }),
    (e.hexToRGBA = (e, n) =>
      "rgba(" +
      (e = e.replace("#", ""))
        .match(new RegExp("(.{" + e.length / 3 + "})", "g"))
        .map((t) => parseInt(e.length % 2 ? t + t : t, 16))
        .concat(t(n) ? 1 : n)
        .join(",") +
      ")"),
    (e.isAndroid = (e) => {
      const t = h(e);
      return /android/i.test(t);
    }),
    (e.isArray = i),
    (e.isChrome = g),
    (e.isClient = m),
    (e.isEmptyArray = l),
    (e.isEmptyObj = r),
    (e.isFirefox = function () {
      const e = h(
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      );
      return /firefox/i.test(e);
    }),
    (e.isFunction = (e) => n(e) && "function" == typeof e),
    (e.isIOS = (e) => {
      const t = h(e);
      return /ios|iphone|ipad/i.test(t);
    }),
    (e.isMacOS = function () {
      const e = h(
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      );
      return /macintosh|mac os x/i.test(e);
    }),
    (e.isMobile = (e) =>
      f(e) ||
      ((e) => {
        const t = h(e);
        return /hshhk/i.test(t) && /ios/i.test(t);
      })(e)),
    (e.isNotEmptyArray = s),
    (e.isNotEmptyObj = (e) => !r(e)),
    (e.isNotNull = n),
    (e.isNull = t),
    (e.isNumber = (e) => n(e) && "number" == typeof e),
    (e.isOfficialWebullByHost = (e) => {
      const t = Oe(e);
      return Se(t);
    }),
    (e.isOfficialWebullByUrl = Se),
    (e.isPad = (e) => {
      const t = h(e);
      return y(e) && /apad|ipad/i.test(t);
    }),
    (e.isPlainObject = o),
    (e.isPromise = (e) => e instanceof Promise),
    (e.isPromiseLike = (e) =>
      null !== e && "object" == typeof e && "function" == typeof e.then),
    (e.isRobot = (e) => {
      const t = h(e);
      return /bingbot|google|yahoo|baiduspider|sosospider|360spider|youdaobot/i.test(
        t
      );
    }),
    (e.isSafari = function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const t = h(e);
      return /safari/i.test(t) && !g(e);
    }),
    (e.isServer = Wt),
    (e.isSupportWebp = function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      e = e || {};
      const { req: t } = e;
      return m
        ? 0 ===
            document
              .createElement("canvas")
              .toDataURL("image/webp")
              .indexOf("data:image/webp")
        : /image\/webp/i.test(t.headers.accept);
    }),
    (e.isWebullAUDomain = Ie),
    (e.isWebullAUUrl = (e) => ye.test(e)),
    (e.isWebullApp = y),
    (e.isWebullBRDomain = Me),
    (e.isWebullBRUrl = (e) => xe.test(e)),
    (e.isWebullByHost = (e) => {
      const t = Oe(e);
      return Q.test(t);
    }),
    (e.isWebullByUrl = (e) => we.test(e)),
    (e.isWebullCADomain = Ue),
    (e.isWebullCAUrl = (e) => ke.test(e)),
    (e.isWebullCNDomain = He),
    (e.isWebullEUDomain = ze),
    (e.isWebullHKDomain = Ce),
    (e.isWebullHKUrl = (e) => me.test(e)),
    (e.isWebullIDDomain = Re),
    (e.isWebullIDUrl = (e) => ve.test(e)),
    (e.isWebullJPDomain = Te),
    (e.isWebullJPUrl = (e) => he.test(e)),
    (e.isWebullLTDomain = qe),
    (e.isWebullMXDomain = $e),
    (e.isWebullMXUrl = (e) => Ae.test(e)),
    (e.isWebullMYDomain = Le),
    (e.isWebullMYUrl = (e) => De.test(e)),
    (e.isWebullMobile = f),
    (e.isWebullPayApp = (e) => {
      const t = h(e);
      return /webull/i.test(t) && /pay/i.test(t);
    }),
    (e.isWebullPayDomain = (e) => _e(e, ce)),
    (e.isWebullPayUrl = (e) => We.test(e)),
    (e.isWebullQt = (e) => {
      const t = h(e);
      return /webull/i.test(t) && /qt/i.test(t);
    }),
    (e.isWebullSGDomain = je),
    (e.isWebullSGUrl = (e) => be.test(e)),
    (e.isWebullTHDomain = Be),
    (e.isWebullTHUrl = (e) => Ee.test(e)),
    (e.isWebullUKDomain = Ne),
    (e.isWebullUKUrl = (e) => ge.test(e)),
    (e.isWebullUSDomain = Pe),
    (e.isWebullUSOrTechDomain = (e) => _e(e, de) || _e(e, pe)),
    (e.isWebullZADomain = Ke),
    (e.isWebullZAUrl = (e) => fe.test(e)),
    (e.last = (e) => (Array.isArray(e) ? e[e.length - 1] : e)),
    (e.logEvent = (e, t) =>
      v("common", "logEvent", { event_name: e, event_params: t })),
    (e.logger = function (e) {
      return v("common", "log", {
        message: ""
          .concat(
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "[web]",
            ": "
          )
          .concat(e),
      });
    }),
    (e.navSetting = _),
    (e.notUsed = () => {}),
    (e.openCameraReadyV2 = (e) => {
      let { imageKey: t, callback: n } = e;
      return v("accountRegister", "openCameraReadyV2", {
        imageKey: t,
        callback: n,
      });
    }),
    (e.openCameraV2 = (e) => {
      let {
        imageKey: t,
        ocrType: n,
        compress: o,
        isNeedFrame: i,
        callback: r,
      } = e;
      return v("accountRegister", "openCameraV2", {
        imageKey: t,
        ocrType: n,
        compress: o,
        isNeedFrame: i,
        callback: r,
      });
    }),
    (e.openWebView = (e, t) => {
      const {
        tradeOptions: n = {},
        openOptions: o = {},
        fallback: i = !0,
      } = t || {};
      if (
        ((Object.hasOwnProperty.call(o, "hideNav") ||
          Object.hasOwnProperty.call(o, "silent") ||
          Object.hasOwnProperty.call(o, "supportTheme")) &&
          (e = S(e, { __app_cfg__: JSON.stringify(o) })),
        window.Syncextrade && "function" == typeof window.Syncextrade.openWeb)
      )
        return (
          window.Syncextrade.openWeb(JSON.stringify(x(x({ url: e }, n), o))), !0
        );
      {
        const t = v("common", "openWeb", x(x({ url: e }, n), o));
        return !t && i ? (window.open(e), !0) : t;
      }
    }),
    (e.parseLinkName = (e) =>
      e && "string" == typeof e
        ? (e = (e = e.trim().replace(/[^a-zA-Z0-9]+/g, "-")).replace(
            /(^-+)|(-+$)/g,
            ""
          ))
        : ""),
    (e.postFollow = (e) => v("common", "postFollow", e)),
    (e.postMessage = (e) => v("common", "postWebviewMessage", { data: e })),
    (e.queryKeys = {
      appCfgKey: "__app_cfg__",
      languageKey: "hl",
      theme: "theme",
      sourceKey: "source",
      tokenKey: "accessToken",
      userDomainKey: "userDomain",
      redirectUriKey: "redirect_uri",
    }),
    (e.refreshPermission = (e) => {
      let { brokerId: t, subBrokerId: n, type: o } = e;
      return v("common", "refreshPermission", {
        brokerId: t,
        subBrokerId: n,
        type: o,
      });
    }),
    (e.refreshToken = (e) => v("common", "refreshToken", e)),
    (e.reportEvent = (e) => v("common", "reportEvent", e)),
    (e.reward = (e) => v("common", "reward", e)),
    (e.rgbaToHex = (e) => {
      if (e.indexOf("#") > -1) return { color: e, opacity: 1 };
      e = e.replace(/\s+/g, "");
      const t =
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/.exec(e);
      if (!t) throw new Error("传入的".concat(e, "格式不正确"));
      const n = [];
      for (let e = 1, o = 3; e <= o; ++e) {
        let o = Number(t[e]).toString(16);
        1 === o.length && (o = 0 + o), n.push(o);
      }
      return { color: "#" + n.join(""), opacity: t[4] ? t[4] : "1" };
    }),
    (e.saveFile = (e) => v("common", "saveFile", e)),
    (e.saveImageToPhotosAlbum = (e) =>
      v("common", "saveImageToPhotosAlbum", e)),
    (e.setCookie = lt),
    (e.setInstCookies = function (e) {
      let { token: t, userDomain: n, uuid: o } = e;
      Xe(
        t,
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      );
    }),
    (e.setInstToken = Xe),
    (e.setLastPageCookie = (e, t) =>
      lt({ context: t, key: b.webLastPageKey, value: e, setting: {} })),
    (e.setToken = Ve),
    (e.setUID = tt),
    (e.setUserCookies = function (e) {
      let { token: t, userDomain: n, uuid: o } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      Ve(t, i), ot(n, i), tt(o, i);
    }),
    (e.setUserDomain = ot),
    (e.share = function (e, t, n) {
      let { position: o, screenShare: i = !1 } =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (
        window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.Syncextrade &&
        "function" ==
          typeof window.webkit.messageHandlers.Syncextrade.postMessage
      ) {
        const r = x({ title: t, url: e, detail: n }, o ? x({}, o) : {});
        return v("common", i ? "showShare" : "openShare", r);
      }
      return (
        !(
          !window.Syncextrade ||
          "function" != typeof window.Syncextrade.shareUrl
        ) &&
        (i
          ? v("common", "showShare", { title: t, url: e, detail: n })
          : window.Syncextrade.shareUrl(e, t, n),
        !0)
      );
    }),
    (e.showLoadError = () => v("common", "showLoadError")),
    (e.statusBarSetting = (e) => v("common", "statusBarSetting", x({}, e))),
    (e.stringify = (e) => JSON.stringify(e).replace(p, w)),
    (e.subscribe = (e) => {
      let { productType: t, productId: n } = e;
      return v("common", "subscribe", { productType: t, productId: n });
    }),
    (e.trim = (e) => String(e).trim()),
    (e.unescapeHTML = (e) =>
      e && "string" == typeof e
        ? e
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&amp;/g, "&")
            .replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
        : ""),
    (e.unique = c),
    (e.uploadFile = (e, t, n) =>
      v("accountRegister", "uploadFile", {
        brokerId: e,
        type: t,
        callback: n,
      })),
    (e.webullApp = z),
    (e.webullDomainRegInProduction = Qe),
    (e.webullPostMessage = v),
    (e.wrapKuohao = (e, n) =>
      t(e)
        ? ""
        : "zh" === n || "zh-hant" === n
        ? "（".concat(e, "）")
        : " (".concat(e, ")"));
});
