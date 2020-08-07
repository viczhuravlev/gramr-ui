!(function (e, r) {
  for (var t in r) e[t] = r[t];
})(
  exports,
  (function (e) {
    var r = {};
    function t(n) {
      if (r[n]) return r[n].exports;
      var o = (r[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    return (
      (t.m = e),
      (t.c = r),
      (t.d = function (e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
      }),
      (t.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (t.t = function (e, r) {
        if ((1 & r && (e = t(e)), 8 & r)) return e;
        if (4 & r && 'object' == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (t.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & r && 'string' != typeof e)
        )
          for (var o in e)
            t.d(
              n,
              o,
              function (r) {
                return e[r];
              }.bind(null, o)
            );
        return n;
      }),
      (t.n = function (e) {
        var r =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(r, 'a', r), r;
      }),
      (t.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
      }),
      (t.p = ''),
      t((t.s = 7))
    );
  })([
    function (e, r) {
      e.exports = require('react');
    },
    function (e, r) {
      e.exports = require('linaria/react');
    },
    function (e, r) {},
    function (e, r) {},
    function (e, r, t) {},
    function (e, r, t) {},
    function (e, r, t) {},
    function (e, r, t) {
      'use strict';
      t.r(r),
        t.d(r, 'GlobalStyles', function () {
          return u;
        }),
        t.d(r, 'HighLighterProps', function () {
          return l.HighLighterProps;
        }),
        t.d(r, 'HighLighter', function () {
          return P;
        }),
        t.d(r, 'TextCutterProps', function () {
          return x.TextCutterProps;
        }),
        t.d(r, 'TextCutter', function () {
          return F;
        });
      var n = t(0),
        o = t.n(n),
        a = t(1),
        c = Object(a.styled)(n.Fragment)({
          name: 'GlobalStyles',
          class: 'gnkl53e',
        });
      t(4);
      var u = function () {
          return o.a.createElement(c, null);
        },
        l = t(2);
      function i(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function f(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? i(Object(t), !0).forEach(function (r) {
                s(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : i(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function s(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      var p = '#FFFFFF',
        b = '#A8AAB6',
        d = '#d9d9d9',
        y = '#242C3B',
        g = '#374050',
        v = {
          red: '#D93732',
          blue: '#1890ff',
          grey: '#808080',
          green: '#5CAC54',
          orange: '#F7981C',
          purple: '#C86DD7',
        };
      f(
        f({}, v),
        {},
        {
          font: g,
          fontHover: v.blue,
          fontDisabled: b,
          fontSecondary: b,
          border: d,
          borderHover: v.blue,
          borderDisabled: d,
          background: p,
          backgroundDisabled: p,
        }
      ),
        f(
          f({}, v),
          {},
          {
            font: p,
            fontHover: v.blue,
            fontSecondary: b,
            fontDisabled: g,
            border: g,
            borderHover: g,
            borderDisabled: g,
            background: y,
            backgroundDisabled: y,
          }
        );
      var O = Object(a.styled)('span')({
        name: 'HighLighter',
        class: 'h1v76a4b',
        vars: {
          'h1v76a4b-0': [
            function (e) {
              return (
                (function (e) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1;
                  if (!e) return null;
                  var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                    n = e.replace(t, function (e, r, t, n) {
                      return r + r + t + t + n + n;
                    }),
                    o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
                  if (!o) return null;
                  var a = parseInt(o[1], 16),
                    c = parseInt(o[2], 16),
                    u = parseInt(o[3], 16);
                  return 'rgba('
                    .concat(a, ', ')
                    .concat(c, ', ')
                    .concat(u, ', ')
                    .concat(r, ')');
                })(e.color || '#F7981C', e.opacity) || 'transparent'
              );
            },
          ],
        },
      });
      function m() {
        return (m =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function j(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (t = a[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (t = a[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      function h(e) {
        var r = e.search,
          t = e.text,
          n = j(e, ['search', 'text']);
        if (!t || !r || 'string' != typeof t)
          return o.a.createElement(o.a.Fragment, null, t);
        var a = (function (e, r) {
            var t = new RegExp('('.concat(r, ')'), 'i');
            return e.split(t);
          })(t, r),
          c = r.toLowerCase();
        return a && a.length < 2
          ? o.a.createElement(o.a.Fragment, null, t)
          : o.a.createElement(
              o.a.Fragment,
              null,
              a.map(function (e, r) {
                return e.toLowerCase() === c
                  ? o.a.createElement(O, m({ key: r }, n), e)
                  : e;
              })
            );
      }
      t(5), (h.defaultProps = { color: v.orange, opacity: 0.2 });
      var P = h,
        x = t(3),
        w = Object(a.styled)('span')({
          name: 'Container',
          class: 'c1af8c8v',
          vars: {
            'c1af8c8v-0': [
              function (e) {
                return e.clamp || '1';
              },
            ],
          },
        });
      function S() {
        return (S =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function D(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (t = a[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (t = a[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      function C(e) {
        var r = e.clamp,
          t = e.style,
          n = e.children,
          a = e.className,
          c = D(e, ['clamp', 'style', 'children', 'className']);
        return o.a.createElement(
          w,
          S({ clamp: r || '1', style: t, className: a }, c),
          n
        );
      }
      t(6);
      C.defaultProps = { clamp: '1' };
      var F = C;
    },
  ])
);
