(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function s(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function a(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function h(l3, u3, i3) {
    var t3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return v(l3, f3, t3, o3, null);
  }
  function v(n2, i3, t3, o3, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function p(n2) {
    return n2.children;
  }
  function d(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function _(n2, l3) {
    if (null == l3)
      return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? _(n2) : null;
  }
  function k(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return k(n2);
    }
  }
  function b(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, o3, r3;
        n3.__d && (o3 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o3] : null, u3, null == o3 ? _(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && k(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, o3, r3, c3, s2, a3) {
    var h2, y2, d3, k3, b3, g3, w3, x2 = i3 && i3.__k || e, C2 = x2.length;
    for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
      if (null != (k3 = u3.__k[h2] = null == (k3 = l3[h2]) || "boolean" == typeof k3 ? null : "string" == typeof k3 || "number" == typeof k3 || "bigint" == typeof k3 ? v(null, k3, null, null, k3) : Array.isArray(k3) ? v(p, { children: k3 }, null, null, null) : k3.__b > 0 ? v(k3.type, k3.props, k3.key, k3.ref ? k3.ref : null, k3.__v) : k3)) {
        if (k3.__ = u3, k3.__b = u3.__b + 1, null === (d3 = x2[h2]) || d3 && k3.key == d3.key && k3.type === d3.type)
          x2[h2] = void 0;
        else
          for (y2 = 0; y2 < C2; y2++) {
            if ((d3 = x2[y2]) && k3.key == d3.key && k3.type === d3.type) {
              x2[y2] = void 0;
              break;
            }
            d3 = null;
          }
        j(n2, k3, d3 = d3 || f, t3, o3, r3, c3, s2, a3), b3 = k3.__e, (y2 = k3.ref) && d3.ref != y2 && (w3 || (w3 = []), d3.ref && w3.push(d3.ref, null, k3), w3.push(y2, k3.__c || b3, k3)), null != b3 ? (null == g3 && (g3 = b3), "function" == typeof k3.type && k3.__k === d3.__k ? k3.__d = s2 = m(k3, s2, n2) : s2 = A(n2, k3, d3, x2, b3, s2), "function" == typeof u3.type && (u3.__d = s2)) : s2 && d3.__e == s2 && s2.parentNode != n2 && (s2 = _(d3));
      }
    for (u3.__e = g3, h2 = C2; h2--; )
      null != x2[h2] && N(x2[h2], x2[h2]);
    if (w3)
      for (h2 = 0; h2 < w3.length; h2++)
        M(w3[h2], w3[++h2], w3[++h2]);
  }
  function m(n2, l3, u3) {
    for (var i3, t3 = n2.__k, o3 = 0; t3 && o3 < t3.length; o3++)
      (i3 = t3[o3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function x(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
      x(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function A(n2, l3, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (void 0 !== l3.__d)
      r3 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != o3 || null == t3.parentNode)
      n:
        if (null == o3 || o3.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o3), r3 = o3;
        }
    return void 0 !== r3 ? r3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      "children" === o3 || "key" === o3 || o3 in l3 || H(n2, o3, null, u3[o3], i3);
    for (o3 in l3)
      t3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
  }
  function $(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I, o3) : n2.removeEventListener(l3, o3 ? T : I, o3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && -1 == l3.indexOf("-") ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
    var a3, h2, v3, y2, _3, k3, b3, g3, m3, x2, A2, C2, $2, H2, I2, T3 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
    try {
      n:
        if ("function" == typeof T3) {
          if (g3 = u3.props, m3 = (a3 = T3.contextType) && t3[a3.__c], x2 = a3 ? m3 ? m3.props.value : a3.__ : t3, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in T3 && T3.prototype.render ? u3.__c = h2 = new T3(g3, x2) : (u3.__c = h2 = new d(g3, x2), h2.constructor = T3, h2.render = O), m3 && m3.sub(h2), h2.props = g3, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t3, v3 = h2.__d = true, h2.__h = [], h2._sb = []), null == h2.__s && (h2.__s = h2.state), null != T3.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s({}, h2.__s)), s(h2.__s, T3.getDerivedStateFromProps(g3, h2.__s))), y2 = h2.props, _3 = h2.state, v3)
            null == T3.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
          else {
            if (null == T3.getDerivedStateFromProps && g3 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g3, x2), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g3, h2.__s, x2) || u3.__v === i3.__v) {
              for (h2.props = g3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), A2 = 0; A2 < h2._sb.length; A2++)
                h2.__h.push(h2._sb[A2]);
              h2._sb = [], h2.__h.length && f3.push(h2);
              break n;
            }
            null != h2.componentWillUpdate && h2.componentWillUpdate(g3, h2.__s, x2), null != h2.componentDidUpdate && h2.__h.push(function() {
              h2.componentDidUpdate(y2, _3, k3);
            });
          }
          if (h2.context = x2, h2.props = g3, h2.__v = u3, h2.__P = n2, C2 = l.__r, $2 = 0, "prototype" in T3 && T3.prototype.render) {
            for (h2.state = h2.__s, h2.__d = false, C2 && C2(u3), a3 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
              h2.__h.push(h2._sb[H2]);
            h2._sb = [];
          } else
            do {
              h2.__d = false, C2 && C2(u3), a3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
            } while (h2.__d && ++$2 < 25);
          h2.state = h2.__s, null != h2.getChildContext && (t3 = s(s({}, t3), h2.getChildContext())), v3 || null == h2.getSnapshotBeforeUpdate || (k3 = h2.getSnapshotBeforeUpdate(y2, _3)), I2 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n2, Array.isArray(I2) ? I2 : [I2], u3, i3, t3, o3, r3, f3, e3, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
      (a3 = l.diffed) && a3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t3, o3, r3, e3, c3) {
    var s2, h2, v3, y2 = i3.props, p3 = u3.props, d3 = u3.type, k3 = 0;
    if ("svg" === d3 && (o3 = true), null != r3) {
      for (; k3 < r3.length; k3++)
        if ((s2 = r3[k3]) && "setAttribute" in s2 == !!d3 && (d3 ? s2.localName === d3 : 3 === s2.nodeType)) {
          l3 = s2, r3[k3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === d3)
        return document.createTextNode(p3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
    }
    if (null === d3)
      y2 === p3 || c3 && l3.data === p3 || (l3.data = p3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), h2 = (y2 = i3.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
        if (null != r3)
          for (y2 = {}, k3 = 0; k3 < l3.attributes.length; k3++)
            y2[l3.attributes[k3].name] = l3.attributes[k3].value;
        (v3 || h2) && (v3 && (h2 && v3.__html == h2.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p3, y2, o3, c3), v3)
        u3.__k = [];
      else if (k3 = u3.props.children, w(l3, Array.isArray(k3) ? k3 : [k3], u3, i3, t3, o3 && "foreignObject" !== d3, r3, e3, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
        for (k3 = r3.length; k3--; )
          null != r3[k3] && a(r3[k3]);
      c3 || ("value" in p3 && void 0 !== (k3 = p3.value) && (k3 !== l3.value || "progress" === d3 && !k3 || "option" === d3 && k3 !== y2.value) && H(l3, "value", k3, y2.value, false), "checked" in p3 && void 0 !== (k3 = p3.checked) && k3 !== l3.checked && H(l3, "checked", k3, y2.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, o3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null, n2.__c = void 0;
    }
    if (t3 = n2.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && N(t3[o3], u3, i3 || "function" != typeof n2.type);
    i3 || null == n2.__e || a(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function P(u3, i3, t3) {
    var o3, r3, e3;
    l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, e3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = h(p, null, [u3]), r3 || f, f, void 0 !== i3.ownerSVGElement, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, e3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(e3, u3);
  }
  var n, l, u, i, t, o, r, f, e, c;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      f = {};
      e = [];
      c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = e.slice, l = { __e: function(n2, l3, u3, i3) {
        for (var t3, o3, r3; l3 = l3.__; )
          if ((t3 = l3.__c) && !t3.__)
            try {
              if ((o3 = t3.constructor) && null != o3.getDerivedStateFromError && (t3.setState(o3.getDerivedStateFromError(n2)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
                return t3.__E = t3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return null != n2 && void 0 === n2.constructor;
      }, d.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u3), this.props)), n2 && s(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), b(this));
      }, d.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
      }, d.prototype.render = p, t = [], g.__r = 0, r = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function p2(n2) {
    return o2 = 1, y(B, n2);
  }
  function y(n2, u3, i3) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      r2.u = true;
      var f3 = r2.shouldComponentUpdate;
      r2.shouldComponentUpdate = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !f3 || f3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!f3 || f3.call(this, n3, t3, r3));
      };
    }
    return o3.__N || o3.__;
  }
  function _2(n2) {
    return o2 = 5, F(function() {
      return { current: n2 };
    }, []);
  }
  function F(n2, r3) {
    var u3 = d2(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function T2(n2, t3) {
    return o2 = 8, F(function() {
      return n2;
    }, t3);
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function B(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      l.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, l.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
        })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [])), u2 = r2;
      }, l.diffed = function(t3) {
        v2 && v2(t3);
        var o3 = t3.__c;
        o3 && o3.__H && (o3.__H.__h.length && (1 !== f2.push(o3) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
          n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
        })), u2 = r2 = null;
      }, l.__c = function(t3, r3) {
        r3.some(function(t4) {
          try {
            t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || w2(n2);
            });
          } catch (u3) {
            r3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), r3 = [], l.__e(u3, t4.__v);
          }
        }), l2 && l2(t3, r3);
      }, l.unmount = function(t3) {
        m2 && m2(t3);
        var r3, u3 = t3.__c;
        u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
          try {
            k2(n2);
          } catch (n3) {
            r3 = n3;
          }
        }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/e8ecaf14-590e-48f6-91ff-d6f0d025464f/loading-indicator.module.js
  var loading_indicator_module_default;
  var init_loading_indicator_module = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/e8ecaf14-590e-48f6-91ff-d6f0d025464f/loading-indicator.module.js"() {
      if (document.getElementById("28008fc338") === null) {
        const element = document.createElement("style");
        element.id = "28008fc338";
        element.textContent = `._loadingIndicator_pl5c3_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_pl5c3_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_pl5c3_1 0.5s linear infinite;
  fill: currentColor;
}

@keyframes _rotating_pl5c3_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osaURBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhbmltYXRpb246IHJvdGF0aW5nIDAuNXMgbGluZWFyIGluZmluaXRlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */`;
        document.head.append(element);
      }
      loading_indicator_module_default = { "loadingIndicator": "_loadingIndicator_pl5c3_1", "svg": "_svg_pl5c3_8", "rotating": "_rotating_pl5c3_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  function LoadingIndicator(_a) {
    var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: loading_indicator_module_default.loadingIndicator }), h("svg", { class: loading_indicator_module_default.svg, style: typeof color === "undefined" ? void 0 : {
      fill: `var(--figma-color-icon-${color})`
    } }, h("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })));
  }
  var init_loading_indicator = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_loading_indicator_module();
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/4180869f-528f-4264-98ce-b127c9384baa/button.module.js
  var button_module_default;
  var init_button_module = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/4180869f-528f-4264-98ce-b127c9384baa/button.module.js"() {
      if (document.getElementById("53327f6e6b") === null) {
        const element = document.createElement("style");
        element.id = "53327f6e6b";
        element.textContent = `._button_5fxgc_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}

._fullWidth_5fxgc_7 {
  display: block;
}

._button_5fxgc_1 button {
  display: inline-block;
  height: 32px;
  border-radius: var(--border-radius-6);
}

._disabled_5fxgc_17 button {
  cursor: not-allowed;
}

._fullWidth_5fxgc_7 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._default_5fxgc_29 button {
  padding: 0 14px;
  border: 2px solid transparent;
  background-color: var(--figma-color-bg-brand);
  color: var(--figma-color-text-onbrand);
  line-height: 28px;
}
._default_5fxgc_29:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-brand-strong);
}
._default_5fxgc_29._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 button {
  background-color: var(--figma-color-bg-danger);
  color: var(--figma-color-text-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._secondary_5fxgc_56 button {
  padding: 0 15px;
  border: 1px solid var(--figma-color-border-strong);
  background-color: transparent;
  color: var(--figma-color-text);
  line-height: 30px;
}
._secondary_5fxgc_56:not(._disabled_5fxgc_17) button:focus {
  padding: 0 14px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
  line-height: 28px;
}
._secondary_5fxgc_56._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 button {
  border-color: var(--figma-color-border-danger-strong);
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._loadingIndicator_5fxgc_86 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

._default_5fxgc_29 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-onbrand);
}
._default_5fxgc_29._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._secondary_5fxgc_56 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text);
}
._secondary_5fxgc_56._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._children_5fxgc_122 {
  display: inline;
}
._loading_5fxgc_86 ._children_5fxgc_122 {
  visibility: hidden;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLDZDQUE2QztFQUM3QyxzQ0FBc0M7RUFDdEMsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0RBQWtEO0VBQ2xELDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9EQUFvRDtFQUNwRCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZ1bGxXaWR0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnV0dG9uIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTYpO1xufVxuXG4uZGlzYWJsZWQgYnV0dG9uIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmZ1bGxXaWR0aCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGVmYXVsdCBidXR0b24ge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1icmFuZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uYnJhbmQpO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5kZWZhdWx0Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1kaXNhYmxlZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGFuZ2VyKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kYW5nZXIpO1xufVxuLmRlZmF1bHQuZGFuZ2VyOm5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xufVxuLmRlZmF1bHQuZGFuZ2VyLmRpc2FibGVkIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWRpc2FibGVkKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkgYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItc3Ryb25nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uc2Vjb25kYXJ5Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLnNlY29uZGFyeS5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kYW5nZXIpO1xufVxuLnNlY29uZGFyeS5kYW5nZXI6bm90KC5kaXNhYmxlZCkgYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGFuZ2VyLXN0cm9uZyk7XG59XG4uc2Vjb25kYXJ5LmRhbmdlci5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5kZWZhdWx0IC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25icmFuZCk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRhbmdlcik7XG59XG4uZGVmYXVsdC5kYW5nZXIuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRpc2FibGVkKTtcbn1cblxuLnNlY29uZGFyeSAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5zZWNvbmRhcnkuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGFuZ2VyKTtcbn1cbi5zZWNvbmRhcnkuZGFuZ2VyLmRpc2FibGVkIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubG9hZGluZyAuY2hpbGRyZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */`;
        document.head.append(element);
      }
      button_module_default = { "button": "_button_5fxgc_1", "fullWidth": "_fullWidth_5fxgc_7", "disabled": "_disabled_5fxgc_17", "default": "_default_5fxgc_29", "danger": "_danger_5fxgc_44", "secondary": "_secondary_5fxgc_56", "loadingIndicator": "_loadingIndicator_5fxgc_86", "children": "_children_5fxgc_122", "loading": "_loading_5fxgc_86" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  function Button(_a) {
    var _b = _a, { children, danger = false, disabled = false, fullWidth = false, loading = false, onClick, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "danger", "disabled", "fullWidth", "loading", "onClick", "propagateEscapeKeyDown", "secondary"]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return h("div", { class: createClassName([
      button_module_default.button,
      secondary === true ? button_module_default.secondary : button_module_default.default,
      danger === true ? button_module_default.danger : null,
      fullWidth === true ? button_module_default.fullWidth : null,
      disabled === true ? button_module_default.disabled : null,
      loading === true ? button_module_default.loading : null
    ]) }, loading === true ? h("div", { class: button_module_default.loadingIndicator }, h(LoadingIndicator, null)) : null, h("button", __spreadProps(__spreadValues({}, rest), { disabled: disabled === true, onClick: disabled === true || loading === true ? void 0 : onClick, onKeyDown: disabled === true || loading === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }), h("div", { class: button_module_default.children }, children)));
  }
  var init_button = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_loading_indicator();
      init_button_module();
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/e8cebdcf-c36e-49af-a35f-1162ae12fd98/icon.module.js
  var icon_module_default;
  var init_icon_module = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/e8cebdcf-c36e-49af-a35f-1162ae12fd98/icon.module.js"() {
      if (document.getElementById("ab8c22af19") === null) {
        const element = document.createElement("style");
        element.id = "ab8c22af19";
        element.textContent = `._icon_13804_1 {
  fill: currentColor;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      icon_module_default = { "icon": "_icon_13804_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js
  function createIcon(path, options) {
    const { width, height } = options;
    return function Icon(_a) {
      var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
      return h("svg", __spreadProps(__spreadValues({}, rest), { class: icon_module_default.icon, height, style: typeof color === "undefined" ? void 0 : {
        fill: `var(--figma-color-icon-${color})`
      }, width, xmlns: "http://www.w3.org/2000/svg" }), h("path", { "clip-rule": "evenodd", d: path, "fill-rule": "evenodd" }));
    };
  }
  var init_create_icon = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js"() {
      init_preact_module();
      init_icon_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js
  function getCurrentFromRef(ref) {
    if (ref.current === null) {
      throw new Error("`ref.current` is `undefined`");
    }
    return ref.current;
  }
  var init_get_current_from_ref = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js"() {
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/1deb7007-2def-4a7d-94a1-5058557d3235/icon-button.module.js
  var icon_button_module_default;
  var init_icon_button_module = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/1deb7007-2def-4a7d-94a1-5058557d3235/icon-button.module.js"() {
      if (document.getElementById("2100c11fcf") === null) {
        const element = document.createElement("style");
        element.id = "2100c11fcf";
        element.textContent = `._iconButton_1bkfg_1 {
  position: relative;
  width: 30px;
  height: 30px;
  border: 2px solid transparent;
  border-radius: var(--border-radius-2);
}

._iconButton_1bkfg_1:not(:disabled) {
  color: var(--figma-color-icon);
}
._iconButton_1bkfg_1:not(:disabled):hover {
  background-color: var(--figma-color-bg-hover);
}
._iconButton_1bkfg_1:not(:disabled):focus {
  border-color: var(--figma-color-border-brand-strong);
}
._iconButton_1bkfg_1:disabled {
  color: var(--figma-color-icon-disabled);
  cursor: not-allowed;
}

._icon_1bkfg_1 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25CdXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xufVxuXG4uaWNvbkJ1dHRvbjpub3QoOmRpc2FibGVkKSB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uKTtcbn1cbi5pY29uQnV0dG9uOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctaG92ZXIpO1xufVxuLmljb25CdXR0b246bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1icmFuZC1zdHJvbmcpO1xufVxuLmljb25CdXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1kaXNhYmxlZCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      icon_button_module_default = { "iconButton": "_iconButton_1bkfg_1", "icon": "_icon_1bkfg_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/icon-button/icon-button.js
  function IconButton(_a) {
    var _b = _a, { children, disabled = false, onClick, propagateEscapeKeyDown = true } = _b, rest = __objRest(_b, ["children", "disabled", "onClick", "propagateEscapeKeyDown"]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return h("button", __spreadProps(__spreadValues({}, rest), { class: icon_button_module_default.iconButton, disabled: disabled === true, onClick: disabled === true ? void 0 : onClick, onKeyDown: disabled === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }), h("div", { class: icon_button_module_default.icon }, children));
  }
  var init_icon_button = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/icon-button/icon-button.js"() {
      init_preact_module();
      init_hooks_module();
      init_icon_button_module();
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/e587663d-8b8a-4f1e-964e-19527d04eb12/text.module.js
  var text_module_default;
  var init_text_module = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/e587663d-8b8a-4f1e-964e-19527d04eb12/text.module.js"() {
      if (document.getElementById("1ee9ddc3fd") === null) {
        const element = document.createElement("style");
        element.id = "1ee9ddc3fd";
        element.textContent = `._text_mh6mm_1 {
  padding-top: 1px;
  color: var(--figma-color-text);
  pointer-events: none;
  transform: translateY(4px);
}
._text_mh6mm_1:before {
  display: block;
  height: 0;
  margin-top: -9px;
  content: '';
  pointer-events: none;
}

._numeric_mh6mm_15 {
  font-variant-numeric: tabular-nums;
}

._left_mh6mm_19 {
  text-align: left;
}
._center_mh6mm_22 {
  text-align: center;
}
._right_mh6mm_25 {
  text-align: right;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0L3RleHQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHQvdGV4dC5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi50ZXh0OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm51bWVyaWMge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      text_module_default = { "text": "_text_mh6mm_1", "numeric": "_numeric_mh6mm_15", "left": "_left_mh6mm_19", "center": "_center_mh6mm_22", "right": "_right_mh6mm_25" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/text/text.js
  function Text(_a) {
    var _b = _a, { align = "left", children, numeric = false } = _b, rest = __objRest(_b, ["align", "children", "numeric"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
      text_module_default.text,
      text_module_default[align],
      numeric === true ? text_module_default.numeric : null
    ]) }), children);
  }
  var init_text = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/text/text.js"() {
      init_preact_module();
      init_create_class_name();
      init_text_module();
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/987087c7-1e9a-4e48-9cd6-7a10d4889b62/stack.module.js
  var stack_module_default;
  var init_stack_module = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/987087c7-1e9a-4e48-9cd6-7a10d4889b62/stack.module.js"() {
      if (document.getElementById("ffe0647b06") === null) {
        const element = document.createElement("style");
        element.id = "ffe0647b06";
        element.textContent = `._extraSmall_dpsd3_1 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-extra-small);
}
._small_dpsd3_4 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-small);
}
._medium_dpsd3_7 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-medium);
}
._large_dpsd3_10 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-large);
}
._extraLarge_dpsd3_13 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3N0YWNrL3N0YWNrLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2xheW91dC9zdGFjay9zdGFjay5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwgPiAuY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwgPiAuY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1zbWFsbCk7XG59XG4ubWVkaXVtID4gLmNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cbi5sYXJnZSA+IC5jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlID4gLmNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtZXh0cmEtbGFyZ2UpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      stack_module_default = { "extraSmall": "_extraSmall_dpsd3_1", "child": "_child_dpsd3_1", "small": "_small_dpsd3_4", "medium": "_medium_dpsd3_7", "large": "_large_dpsd3_10", "extraLarge": "_extraLarge_dpsd3_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/stack/stack.js
  function Stack(_a) {
    var _b = _a, { children, space } = _b, rest = __objRest(_b, ["children", "space"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: stack_module_default[space] }), x(children).map(function(element, index) {
      return h("div", { key: index, class: stack_module_default.child }, element);
    }));
  }
  var init_stack = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/stack/stack.js"() {
      init_preact_module();
      init_stack_module();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          if (typeof event.data.pluginMessage === "undefined") {
            return;
          }
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/mixed-values.js
  var MIXED_NUMBER, MIXED_STRING;
  var init_mixed_values = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/mixed-values.js"() {
      MIXED_NUMBER = 999999999999999;
      MIXED_STRING = "999999999999999";
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/number/private/regex.js
  var floatOperandRegex, integerOperandRegex, operatorRegex, operatorSuffixRegex, numbersRegex, invalidCharactersRegex;
  var init_regex = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/number/private/regex.js"() {
      floatOperandRegex = /^-?\d*(?:\.\d*)?$/;
      integerOperandRegex = /^-?\d*$/;
      operatorRegex = /[+\-*/]/;
      operatorSuffixRegex = /[+\-*/]$/;
      numbersRegex = /\d/;
      invalidCharactersRegex = /[^\d.+\-*/]/;
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/number/evaluate-numeric-expression.js
  function evaluateNumericExpression(value) {
    if (value === "" || numbersRegex.test(value) === false || invalidCharactersRegex.test(value) === true) {
      return null;
    }
    if (operatorRegex.test(value) === true) {
      if (operatorSuffixRegex.test(value) === true) {
        return eval(value.substring(0, value.length - 1));
      }
      return eval(value);
    }
    return parseFloat(value);
  }
  var init_evaluate_numeric_expression = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/number/evaluate-numeric-expression.js"() {
      init_regex();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/number/is-valid-numeric-input.js
  function isValidNumericInput(value2, options = { integersOnly: false }) {
    const split = (value2[0] === "-" ? value2.substring(1) : value2).split(operatorRegex);
    let i3 = -1;
    while (++i3 < split.length) {
      const operand = split[i3];
      if (operand === "" && i3 !== split.length - 1 || (options.integersOnly === true ? integerOperandRegex : floatOperandRegex).test(operand) === false) {
        return false;
      }
    }
    return true;
  }
  var init_is_valid_numeric_input = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/number/is-valid-numeric-input.js"() {
      init_regex();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
      init_mixed_values();
      init_evaluate_numeric_expression();
      init_is_valid_numeric_input();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js
  function isKeyCodeCharacterGenerating(keyCode) {
    return keyCode === 32 || keyCode >= 48 && keyCode <= 57 || keyCode >= 65 && keyCode <= 90 || keyCode >= 96 && keyCode <= 105 || keyCode >= 186 && keyCode <= 192 || keyCode >= 219 && keyCode <= 222;
  }
  var init_is_keycode_character_generating = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/private/compute-next-value.js
  function computeNextValue(inputElement, insertedString) {
    const value2 = inputElement.value;
    const selectionStart = inputElement.selectionStart;
    const selectionEnd = inputElement.selectionEnd;
    return `${value2.substring(0, selectionStart === null ? 0 : selectionStart)}${insertedString}${value2.substring(selectionEnd === null ? 0 : selectionEnd)}`;
  }
  var init_compute_next_value = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/private/compute-next-value.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/format-evaluated-value.js
  function formatEvaluatedValue(evaluatedValue, value2, suffix) {
    if (evaluatedValue === null) {
      return EMPTY_STRING;
    }
    const significantFiguresCount = countSignificantFigures(nonDigitRegex.test(value2) === true ? `${evaluatedValue}` : value2);
    return appendSuffix(formatSignificantFigures(evaluatedValue, significantFiguresCount), suffix);
  }
  function countSignificantFigures(value2) {
    const result = fractionalPartRegex.exec(value2);
    if (result === null) {
      return 0;
    }
    return result[1].length;
  }
  function formatSignificantFigures(value2, significantFiguresCount) {
    if (significantFiguresCount === 0) {
      return `${value2}`;
    }
    const result = fractionalPartRegex.exec(`${value2}`);
    if (result === null) {
      return `${value2}.${"0".repeat(significantFiguresCount)}`;
    }
    const fractionalPart = result[1];
    const count = significantFiguresCount - fractionalPart.length;
    return `${value2}${"0".repeat(count)}`;
  }
  function appendSuffix(string, suffix) {
    if (typeof suffix === "undefined") {
      return string;
    }
    if (string === EMPTY_STRING) {
      return EMPTY_STRING;
    }
    return `${string}${suffix}`;
  }
  var EMPTY_STRING, fractionalPartRegex, nonDigitRegex;
  var init_format_evaluated_value = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/format-evaluated-value.js"() {
      EMPTY_STRING = "";
      fractionalPartRegex = /\.([^.]+)/;
      nonDigitRegex = /[^\d.]/;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/raw-textbox-numeric.js
  function RawTextboxNumeric(_a) {
    var _b = _a, { disabled = false, incrementBig = 10, incrementSmall = 1, integer = false, maximum, minimum, name, onInput = function() {
    }, onNumericValueInput = function() {
    }, onValueInput = function() {
    }, placeholder, propagateEscapeKeyDown = true, revertOnEscapeKeyDown = false, suffix, validateOnBlur, value: value2 } = _b, rest = __objRest(_b, ["disabled", "incrementBig", "incrementSmall", "integer", "maximum", "minimum", "name", "onInput", "onNumericValueInput", "onValueInput", "placeholder", "propagateEscapeKeyDown", "revertOnEscapeKeyDown", "suffix", "validateOnBlur", "value"]);
    if (typeof minimum !== "undefined" && typeof maximum !== "undefined" && minimum >= maximum) {
      throw new Error("`minimum` must be less than `maximum`");
    }
    const inputElementRef = _2(null);
    const revertOnEscapeKeyDownRef = _2(false);
    const [originalValue, setOriginalValue] = p2(EMPTY_STRING2);
    const setInputElementValue = T2(function(value3) {
      const inputElement = getCurrentFromRef(inputElementRef);
      inputElement.value = value3;
      const inputEvent = document.createEvent("Event");
      inputEvent.initEvent("input", true, true);
      inputElement.dispatchEvent(inputEvent);
    }, []);
    const handleBlur = T2(function() {
      if (revertOnEscapeKeyDownRef.current === true) {
        revertOnEscapeKeyDownRef.current = false;
        return;
      }
      if (typeof validateOnBlur !== "undefined") {
        const evaluatedValue = evaluateValue(value2, suffix);
        const result = validateOnBlur(evaluatedValue);
        if (typeof result === "number") {
          setInputElementValue(formatEvaluatedValue(result, value2, suffix));
          setOriginalValue(EMPTY_STRING2);
          return;
        }
        if (result === null) {
          setInputElementValue(EMPTY_STRING2);
          setOriginalValue(EMPTY_STRING2);
          return;
        }
        if (result === false) {
          if (value2 !== originalValue) {
            setInputElementValue(originalValue);
          }
          setOriginalValue(EMPTY_STRING2);
          return;
        }
      }
      if (typeof suffix !== "undefined" && value2 === suffix) {
        setInputElementValue(EMPTY_STRING2);
        setOriginalValue(EMPTY_STRING2);
        return;
      }
      if (value2 !== EMPTY_STRING2 && value2 !== MIXED_STRING) {
        const evaluatedValue = evaluateValue(value2, suffix);
        const formattedValue = formatEvaluatedValue(evaluatedValue, value2, suffix);
        if (value2 !== formattedValue) {
          setInputElementValue(formattedValue);
        }
      }
      setOriginalValue(EMPTY_STRING2);
    }, [originalValue, setInputElementValue, suffix, validateOnBlur, value2]);
    const handleFocus = T2(function(event) {
      setOriginalValue(value2);
      event.currentTarget.select();
    }, [value2]);
    const handleInput = T2(function(event) {
      onInput(event);
      const value3 = event.currentTarget.value;
      onValueInput(value3, name);
      const evaluatedValue = evaluateValue(value3, suffix);
      onNumericValueInput(evaluatedValue, name);
    }, [name, onInput, onNumericValueInput, onValueInput, suffix]);
    const handleKeyDown = T2(function(event) {
      const key = event.key;
      if (key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        if (revertOnEscapeKeyDown === true) {
          revertOnEscapeKeyDownRef.current = true;
          setInputElementValue(originalValue);
          setOriginalValue(EMPTY_STRING2);
        }
        event.currentTarget.blur();
        return;
      }
      if (key === "Enter") {
        event.currentTarget.blur();
        return;
      }
      const element = event.currentTarget;
      if (key === "ArrowDown" || key === "ArrowUp") {
        const delta = event.shiftKey === true ? incrementBig : incrementSmall;
        if (value2 === EMPTY_STRING2 || value2 === MIXED_STRING) {
          event.preventDefault();
          const startingValue = function() {
            if (typeof minimum !== "undefined" && minimum > 0) {
              return minimum;
            }
            if (typeof maximum !== "undefined" && maximum < 0) {
              return maximum;
            }
            return 0;
          }();
          const newValue2 = restrictValue(evaluateValueWithDelta(startingValue, key === "ArrowDown" ? -1 * delta : delta), minimum, maximum);
          const formattedValue2 = formatEvaluatedValue(newValue2, value2, suffix);
          element.value = formattedValue2;
          element.select();
          handleInput(event);
          return;
        }
        const evaluatedValue = evaluateValue(value2, suffix);
        if (evaluatedValue === null) {
          throw new Error("Invariant violation");
        }
        event.preventDefault();
        const newValue = restrictValue(evaluateValueWithDelta(evaluatedValue, key === "ArrowDown" ? -1 * delta : delta), minimum, maximum);
        const formattedValue = formatEvaluatedValue(newValue, value2, suffix);
        if (formattedValue === value2) {
          return;
        }
        element.value = formattedValue;
        element.select();
        handleInput(event);
        return;
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return;
      }
      if (isKeyCodeCharacterGenerating(event.keyCode) === true) {
        const nextValue = trimSuffix(value2 === MIXED_STRING ? event.key : computeNextValue(element, event.key), suffix);
        if (isValidNumericInput(nextValue, { integersOnly: integer }) === false) {
          event.preventDefault();
          return;
        }
        if (typeof minimum === "undefined" && typeof maximum === "undefined") {
          return;
        }
        const evaluatedValue = evaluateNumericExpression(nextValue);
        if (evaluatedValue === null) {
          return;
        }
        if (typeof minimum !== "undefined" && evaluatedValue < minimum || typeof maximum !== "undefined" && evaluatedValue > maximum) {
          event.preventDefault();
        }
      }
    }, [
      handleInput,
      incrementBig,
      incrementSmall,
      integer,
      maximum,
      minimum,
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setInputElementValue,
      suffix,
      value2
    ]);
    const handleMouseUp = T2(function(event) {
      if (value2 !== MIXED_STRING) {
        return;
      }
      event.preventDefault();
    }, [value2]);
    const handlePaste = T2(function(event) {
      if (event.clipboardData === null) {
        throw new Error("`event.clipboardData` is `null`");
      }
      const nextValue = trimSuffix(computeNextValue(event.currentTarget, event.clipboardData.getData("Text")), suffix);
      if (isValidNumericInput(nextValue, {
        integersOnly: integer
      }) === false) {
        event.preventDefault();
      }
    }, [integer, suffix]);
    return h("input", __spreadProps(__spreadValues({}, rest), { ref: inputElementRef, disabled: disabled === true, name, onBlur: handleBlur, onFocus: handleFocus, onInput: handleInput, onKeyDown: handleKeyDown, onMouseUp: handleMouseUp, onPaste: handlePaste, placeholder, spellcheck: false, tabIndex: disabled === true ? -1 : 0, type: "text", value: value2 === MIXED_STRING ? "Mixed" : value2 }));
  }
  function restrictValue(value2, minimum, maximum) {
    if (typeof minimum !== "undefined") {
      if (typeof maximum !== "undefined") {
        return Math.min(Math.max(value2, minimum), maximum);
      }
      return Math.max(value2, minimum);
    }
    if (typeof maximum !== "undefined") {
      return Math.min(value2, maximum);
    }
    return value2;
  }
  function evaluateValue(value2, suffix) {
    if (value2 === MIXED_STRING) {
      return MIXED_NUMBER;
    }
    if (value2 === EMPTY_STRING2) {
      return null;
    }
    return evaluateNumericExpression(trimSuffix(value2, suffix));
  }
  function evaluateValueWithDelta(value2, delta) {
    return parseFloat((value2 + delta).toFixed(FRACTION_DIGITS));
  }
  function trimSuffix(string, suffix) {
    if (typeof suffix === "undefined") {
      return string;
    }
    return string.replace(new RegExp(`${suffix}$`), EMPTY_STRING2);
  }
  var FRACTION_DIGITS, EMPTY_STRING2;
  var init_raw_textbox_numeric = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/raw-textbox-numeric.js"() {
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_get_current_from_ref();
      init_compute_next_value();
      init_is_keycode_character_generating();
      init_format_evaluated_value();
      FRACTION_DIGITS = 3;
      EMPTY_STRING2 = "";
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/8a0162d7-86dd-44b7-bafe-f5bdd8fbc581/textbox.module.js
  var textbox_module_default;
  var init_textbox_module = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/8a0162d7-86dd-44b7-bafe-f5bdd8fbc581/textbox.module.js"() {
      if (document.getElementById("e622fb7d28") === null) {
        const element = document.createElement("style");
        element.id = "e622fb7d28";
        element.textContent = `._textbox_sir3b_1 {
  position: relative;
  z-index: var(--z-index-1);
}
._textbox_sir3b_1:focus-within {
  z-index: var(--z-index-2); /* Stack \`.textbox\` over its sibling elements */
}

._input_sir3b_9 {
  display: block;
  width: 100%;
  height: 28px;
  padding: 0 var(--space-extra-small);
  background-color: transparent;
  color: var(--figma-color-text);
}
._disabled_sir3b_17 ._input_sir3b_9 {
  color: var(--figma-color-text-disabled);
  cursor: not-allowed;
}
._hasIcon_sir3b_21 ._input_sir3b_9 {
  padding-left: 32px;
}

._input_sir3b_9::placeholder {
  color: var(--figma-color-text-tertiary);
}

._icon_sir3b_29 {
  position: absolute;
  top: 14px;
  left: 16px;
  color: var(--figma-color-icon-secondary);
  pointer-events: none; /* so that clicking the icon focuses the textbox */
  text-align: center;
  transform: translate(-50%, -50%);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._icon_sir3b_29 {
  color: var(--figma-color-icon-brand);
}
._disabled_sir3b_17 ._icon_sir3b_29 {
  color: var(--figma-color-icon-disabled);
}

._icon_sir3b_29 svg {
  fill: currentColor;
}

._border_sir3b_49 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  pointer-events: none;
}
._hasBorder_sir3b_59 ._border_sir3b_49,
._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._border_sir3b_49 {
  border-color: var(--figma-color-border);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._border_sir3b_49 {
  top: -1px;
  bottom: -1px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
}

._underline_sir3b_70 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._underline_sir3b_70,
._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._underline_sir3b_70 {
  background-color: transparent;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gvdGV4dGJveC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCLEVBQUUsK0NBQStDO0FBQzVFOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdDQUF3QztFQUN4QyxvQkFBb0IsRUFBRSxrREFBa0Q7RUFDeEUsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLDJDQUEyQztBQUM3QztBQUNBOztFQUVFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvdGV4dGJveC90ZXh0Ym94L3RleHRib3gubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS16LWluZGV4LTEpO1xufVxuLnRleHRib3g6Zm9jdXMtd2l0aGluIHtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0yKTsgLyogU3RhY2sgYC50ZXh0Ym94YCBvdmVyIGl0cyBzaWJsaW5nIGVsZW1lbnRzICovXG59XG5cbi5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uaGFzSWNvbiAuaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG59XG5cbi5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLXNlY29uZGFyeSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBzbyB0aGF0IGNsaWNraW5nIHRoZSBpY29uIGZvY3VzZXMgdGhlIHRleHRib3ggKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5pY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tYnJhbmQpO1xufVxuLmRpc2FibGVkIC5pY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tZGlzYWJsZWQpO1xufVxuXG4uaWNvbiBzdmcge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi5ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmhhc0JvcmRlciAuYm9yZGVyLFxuLnRleHRib3g6bm90KC5kaXNhYmxlZCk6aG92ZXIgLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5ib3JkZXIge1xuICB0b3A6IC0xcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG5cbi51bmRlcmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC51bmRlcmxpbmUsXG4udGV4dGJveDpub3QoLmRpc2FibGVkKTpob3ZlciAudW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      textbox_module_default = { "textbox": "_textbox_sir3b_1", "input": "_input_sir3b_9", "disabled": "_disabled_sir3b_17", "hasIcon": "_hasIcon_sir3b_21", "icon": "_icon_sir3b_29", "border": "_border_sir3b_49", "hasBorder": "_hasBorder_sir3b_59", "underline": "_underline_sir3b_70" };
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/613ae834-a732-4b99-b208-33834d072a62/textbox-numeric.module.js
  var textbox_numeric_module_default;
  var init_textbox_numeric_module = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/613ae834-a732-4b99-b208-33834d072a62/textbox-numeric.module.js"() {
      if (document.getElementById("1c607a6d4f") === null) {
        const element = document.createElement("style");
        element.id = "1c607a6d4f";
        element.textContent = `._input_1byj7_1::-webkit-inner-spin-button,
._input_1byj7_1::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gtbnVtZXJpYy90ZXh0Ym94LW51bWVyaWMubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHRib3gvdGV4dGJveC1udW1lcmljL3RleHRib3gtbnVtZXJpYy5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuLmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuIl19 */`;
        document.head.append(element);
      }
      textbox_numeric_module_default = { "input": "_input_1byj7_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/textbox-numeric.js
  function TextboxNumeric(_a) {
    var _b = _a, { icon, variant } = _b, rest = __objRest(_b, ["icon", "variant"]);
    if (typeof icon === "string" && icon.length !== 1) {
      throw new Error(`String \`icon\` must be a single character: ${icon}`);
    }
    return h("div", { class: createClassName([
      textbox_module_default.textbox,
      typeof variant === "undefined" ? null : variant === "border" ? textbox_module_default.hasBorder : null,
      typeof icon === "undefined" ? null : textbox_module_default.hasIcon,
      rest.disabled === true ? textbox_module_default.disabled : null
    ]) }, h(RawTextboxNumeric, __spreadProps(__spreadValues({}, rest), { class: createClassName([
      textbox_module_default.input,
      textbox_numeric_module_default.input
    ]) })), typeof icon === "undefined" ? null : h("div", { class: textbox_module_default.icon }, icon), h("div", { class: textbox_module_default.border }), variant === "underline" ? h("div", { class: textbox_module_default.underline }) : null);
  }
  var init_textbox_numeric = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/textbox-numeric.js"() {
      init_preact_module();
      init_create_class_name();
      init_textbox_module();
      init_raw_textbox_numeric();
      init_textbox_numeric_module();
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/071053f5-db97-4740-90b1-4f7e0afa67e5/toggle.module.js
  var toggle_module_default;
  var init_toggle_module = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/071053f5-db97-4740-90b1-4f7e0afa67e5/toggle.module.js"() {
      if (document.getElementById("6e6239fce9") === null) {
        const element = document.createElement("style");
        element.id = "6e6239fce9";
        element.textContent = `._toggle_1rqu7_1 {
  position: relative;
  z-index: var(--z-index-1);
}

._input_1rqu7_6 {
  position: absolute;
  z-index: var(
    --z-index-1
  ); /* stack \`.input\` over all other elements within \`.toggle\` */
  top: -8px;
  right: -16px;
  bottom: -8px;
  left: -16px;
  display: block;
  width: calc(100% + 32px);
}
._disabled_1rqu7_18 ._input_1rqu7_6 {
  cursor: not-allowed;
}

._box_1rqu7_22 {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 12px;
  border: 1px solid var(--figma-color-border-strong);
  border-radius: 6px;
  transition: background-color 0.1s ease-out;
}
._toggle_1rqu7_1:not(._disabled_1rqu7_18) ._input_1rqu7_6:focus ~ ._box_1rqu7_22 {
  box-shadow: 0 0 0 1px var(--figma-color-bg),
    0 0 0 3px var(--figma-color-border-brand-strong);
}
._toggle_1rqu7_1:not(._disabled_1rqu7_18) ._input_1rqu7_6:checked ~ ._box_1rqu7_22 {
  background-color: var(--figma-color-bg-inverse);
}
._disabled_1rqu7_18 ._input_1rqu7_6 ~ ._box_1rqu7_22 {
  border-color: var(--figma-color-border-disabled);
}
._disabled_1rqu7_18 ._input_1rqu7_6:checked ~ ._box_1rqu7_22 {
  background-color: var(--figma-color-bg-disabled);
}

._switch_1rqu7_46 {
  position: absolute;
  top: 0;
  width: 12px;
  height: 12px;
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: var(--figma-color-bg);
  transition: left 0.1s ease-out;
}
._input_1rqu7_6:not(:checked) ~ ._switch_1rqu7_46 {
  left: 0;
}
._input_1rqu7_6:checked ~ ._switch_1rqu7_46 {
  left: 12px;
}
._toggle_1rqu7_1:not(._disabled_1rqu7_18) ._input_1rqu7_6 ~ ._switch_1rqu7_46 {
  border-color: var(--figma-color-border-strong);
}
._disabled_1rqu7_18 ._input_1rqu7_6 ~ ._switch_1rqu7_46 {
  border-color: var(--figma-color-border-disabled);
}

._children_1rqu7_69 {
  padding: 2px 0 2px 32px;
  color: var(--figma-color-text);
}
._disabled_1rqu7_18 ._children_1rqu7_69 {
  opacity: var(--opacity-30);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCOztHQUVDLEVBQUUsNERBQTREO0VBQy9ELFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtEQUFrRDtFQUNsRCxrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRTtvREFDa0Q7QUFDcEQ7QUFDQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsZ0RBQWdEO0FBQ2xEO0FBQ0E7RUFDRSxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxPQUFPO0FBQ1Q7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2dnbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG59XG5cbi5pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogdmFyKFxuICAgIC0tei1pbmRleC0xXG4gICk7IC8qIHN0YWNrIGAuaW5wdXRgIG92ZXIgYWxsIG90aGVyIGVsZW1lbnRzIHdpdGhpbiBgLnRvZ2dsZWAgKi9cbiAgdG9wOiAtOHB4O1xuICByaWdodDogLTE2cHg7XG4gIGJvdHRvbTogLThweDtcbiAgbGVmdDogLTE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG59XG4uZGlzYWJsZWQgLmlucHV0IHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItc3Ryb25nKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgZWFzZS1vdXQ7XG59XG4udG9nZ2xlOm5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5ib3gge1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tZmlnbWEtY29sb3ItYmcpLFxuICAgIDAgMCAwIDNweCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItYnJhbmQtc3Ryb25nKTtcbn1cbi50b2dnbGU6bm90KC5kaXNhYmxlZCkgLmlucHV0OmNoZWNrZWQgfiAuYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctaW52ZXJzZSk7XG59XG4uZGlzYWJsZWQgLmlucHV0IH4gLmJveCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRpc2FibGVkKTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQ6Y2hlY2tlZCB+IC5ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1kaXNhYmxlZCk7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmcpO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuMXMgZWFzZS1vdXQ7XG59XG4uaW5wdXQ6bm90KDpjaGVja2VkKSB+IC5zd2l0Y2gge1xuICBsZWZ0OiAwO1xufVxuLmlucHV0OmNoZWNrZWQgfiAuc3dpdGNoIHtcbiAgbGVmdDogMTJweDtcbn1cbi50b2dnbGU6bm90KC5kaXNhYmxlZCkgLmlucHV0IH4gLnN3aXRjaCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLXN0cm9uZyk7XG59XG4uZGlzYWJsZWQgLmlucHV0IH4gLnN3aXRjaCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRpc2FibGVkKTtcbn1cblxuLmNoaWxkcmVuIHtcbiAgcGFkZGluZzogMnB4IDAgMnB4IDMycHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5kaXNhYmxlZCAuY2hpbGRyZW4ge1xuICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTMwKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      toggle_module_default = { "toggle": "_toggle_1rqu7_1", "input": "_input_1rqu7_6", "disabled": "_disabled_1rqu7_18", "box": "_box_1rqu7_22", "switch": "_switch_1rqu7_46", "children": "_children_1rqu7_69" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/toggle/toggle.js
  function Toggle(_a) {
    var _b = _a, { children, disabled = false, name, onChange = function() {
    }, onValueChange = function() {
    }, propagateEscapeKeyDown = true, value: value2 = false } = _b, rest = __objRest(_b, ["children", "disabled", "name", "onChange", "onValueChange", "propagateEscapeKeyDown", "value"]);
    const handleChange = T2(function(event) {
      const newValue = event.currentTarget.checked;
      onValueChange(newValue, name);
      onChange(event);
    }, [name, onChange, onValueChange]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return h("label", { class: createClassName([
      toggle_module_default.toggle,
      disabled === true ? toggle_module_default.disabled : null
    ]) }, h("input", __spreadProps(__spreadValues({}, rest), { checked: value2 === true, class: toggle_module_default.input, disabled: disabled === true, name, onChange: handleChange, onKeyDown: handleKeyDown, tabIndex: disabled === true ? -1 : 0, type: "checkbox" })), h("div", { class: toggle_module_default.box }), h("div", { class: toggle_module_default.switch }), h("div", { class: toggle_module_default.children }, children));
  }
  var init_toggle = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/toggle/toggle.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_toggle_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-arrow-left-right-32.js
  var IconArrowLeftRight32;
  var init_icon_arrow_left_right_32 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-arrow-left-right-32.js"() {
      init_create_icon();
      IconArrowLeftRight32 = createIcon("m12.2071 16.5 1.6465 1.6464-.7071.7072-2.5-2.5L10.2929 16l.3536-.3536 2.5-2.5.7071.7072L12.2071 15.5h7.5858l-1.6464-1.6464.7071-.7072 2.5 2.5.3535.3536-.3535.3536-2.5 2.5-.7071-.7072L19.7929 16.5h-7.5858Z", { height: 32, width: 32 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-arrow-up-down-32.js
  var IconArrowUpDown32;
  var init_icon_arrow_up_down_32 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-arrow-up-down-32.js"() {
      init_create_icon();
      IconArrowUpDown32 = createIcon("m16.0005 10.2923.3535.3536 2.5 2.5-.7071.7071-1.6464-1.6464v7.5857l1.6464-1.6464.7071.7071-2.5 2.5-.3535.3536-.3536-.3536-2.5-2.5.7071-.7071 1.6465 1.6464v-7.5857L13.854 13.853l-.7071-.7071 2.5-2.5.3536-.3536Z", { height: 32, width: 32 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-minus-32.js
  var IconMinus32;
  var init_icon_minus_32 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-minus-32.js"() {
      init_create_icon();
      IconMinus32 = createIcon("M21.5 16.5h-11v-1h11v1Z", {
        height: 32,
        width: 32
      });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-plus-32.js
  var IconPlus32;
  var init_icon_plus_32 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-plus-32.js"() {
      init_create_icon();
      IconPlus32 = createIcon("M15.5 15.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1h5Z", { height: 32, width: 32 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-scale-32.js
  var IconScale32;
  var init_icon_scale_32 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-scale-32.js"() {
      init_create_icon();
      IconScale32 = createIcon("M24 23.5v.5H8V8h5v1H9v14h14v-4h1v4.5ZM13.5 19H13v-6h1v4.2929L22.2929 9H18V8h6v6h-1V9.70711L14.7071 18H19v1h-5.5Z", { height: 32, width: 32 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-spacing-horizontal-32.js
  var IconSpacingHorizontal32;
  var init_icon_spacing_horizontal_32 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-spacing-horizontal-32.js"() {
      init_create_icon();
      IconSpacingHorizontal32 = createIcon("M9.5 22h3V10h-3v1h2v10h-2v1Zm13-11h-2v10h2v1h-3V10h3v1Zm-7 2v6h1v-6h-1Z", { height: 32, width: 32 });
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/d134eeff-af4e-4b86-a127-de6e07f64b47/bold.module.js
  var bold_module_default;
  var init_bold_module = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/d134eeff-af4e-4b86-a127-de6e07f64b47/bold.module.js"() {
      if (document.getElementById("e7775c8c65") === null) {
        const element = document.createElement("style");
        element.id = "e7775c8c65";
        element.textContent = `._bold_72210_1 {
  font-weight: var(--font-weight-bold);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaW5saW5lLXRleHQvYm9sZC9ib2xkLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9pbmxpbmUtdGV4dC9ib2xkL2JvbGQubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      bold_module_default = { "bold": "_bold_72210_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/inline-text/bold/bold.js
  function Bold(_a) {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return h("strong", __spreadProps(__spreadValues({}, rest), { class: bold_module_default.bold }), children);
  }
  var init_bold = __esm({
    "node_modules/@create-figma-plugin/ui/lib/inline-text/bold/bold.js"() {
      init_preact_module();
      init_bold_module();
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/bb51ba7d-1aec-4f94-b5f6-d181e163e5f8/muted.module.js
  var muted_module_default;
  var init_muted_module = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/bb51ba7d-1aec-4f94-b5f6-d181e163e5f8/muted.module.js"() {
      if (document.getElementById("4b4b121fdf") === null) {
        const element = document.createElement("style");
        element.id = "4b4b121fdf";
        element.textContent = `._muted_139yx_1 {
  color: var(--figma-color-text-secondary);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaW5saW5lLXRleHQvbXV0ZWQvbXV0ZWQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUF3QztBQUMxQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2lubGluZS10ZXh0L211dGVkL211dGVkLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXV0ZWQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      muted_module_default = { "muted": "_muted_139yx_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/inline-text/muted/muted.js
  function Muted(_a) {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return h("span", __spreadProps(__spreadValues({}, rest), { class: muted_module_default.muted }), children);
  }
  var init_muted = __esm({
    "node_modules/@create-figma-plugin/ui/lib/inline-text/muted/muted.js"() {
      init_preact_module();
      init_muted_module();
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/54adde36-023f-42cf-a384-c4cb8b9601fc/container.module.js
  var container_module_default;
  var init_container_module = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/54adde36-023f-42cf-a384-c4cb8b9601fc/container.module.js"() {
      if (document.getElementById("81964a14e5") === null) {
        const element = document.createElement("style");
        element.id = "81964a14e5";
        element.textContent = `._extraSmall_1oe77_1 {
  padding: 0 var(--space-extra-small);
}
._small_1oe77_4 {
  padding: 0 var(--space-small);
}
._medium_1oe77_7 {
  padding: 0 var(--space-medium);
}
._large_1oe77_10 {
  padding: 0 var(--space-large);
}
._extraLarge_1oe77_13 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0ge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      container_module_default = { "extraSmall": "_extraSmall_1oe77_1", "small": "_small_1oe77_4", "medium": "_medium_1oe77_7", "large": "_large_1oe77_10", "extraLarge": "_extraLarge_1oe77_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/container/container.js
  function Container(_a) {
    var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: container_module_default[space] }));
  }
  var init_container = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/container/container.js"() {
      init_preact_module();
      init_container_module();
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/66f0ba2d-ab73-487a-becc-b1685ab62025/middle-align.module.js
  var middle_align_module_default;
  var init_middle_align_module = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/66f0ba2d-ab73-487a-becc-b1685ab62025/middle-align.module.js"() {
      if (document.getElementById("f7cdb99814") === null) {
        const element = document.createElement("style");
        element.id = "f7cdb99814";
        element.textContent = `._middleAlign_294f9_1 {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}

._children_294f9_8 {
  display: block;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L21pZGRsZS1hbGlnbi9taWRkbGUtYWxpZ24ubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9sYXlvdXQvbWlkZGxlLWFsaWduL21pZGRsZS1hbGlnbi5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZGRsZUFsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNoaWxkcmVuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      middle_align_module_default = { "middleAlign": "_middleAlign_294f9_1", "children": "_children_294f9_8" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/middle-align/middle-align.js
  function MiddleAlign(_a) {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: middle_align_module_default.middleAlign }), h("div", { class: middle_align_module_default.children }, children));
  }
  var init_middle_align = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/middle-align/middle-align.js"() {
      init_preact_module();
      init_middle_align_module();
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/afcfe5bc-6e2a-4426-8293-85fabc3f570e/vertical-space.module.js
  var vertical_space_module_default;
  var init_vertical_space_module = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/afcfe5bc-6e2a-4426-8293-85fabc3f570e/vertical-space.module.js"() {
      if (document.getElementById("465cfc410b") === null) {
        const element = document.createElement("style");
        element.id = "465cfc410b";
        element.textContent = `._extraSmall_zc4n0_1 {
  height: var(--space-extra-small);
}
._small_zc4n0_4 {
  height: var(--space-small);
}
._medium_zc4n0_7 {
  height: var(--space-medium);
}
._large_zc4n0_10 {
  height: var(--space-large);
}
._extraLarge_zc4n0_13 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3ZlcnRpY2FsLXNwYWNlL3ZlcnRpY2FsLXNwYWNlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2xheW91dC92ZXJ0aWNhbC1zcGFjZS92ZXJ0aWNhbC1zcGFjZS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cbi5zbWFsbCB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuLm1lZGl1bSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cbi5sYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      vertical_space_module_default = { "extraSmall": "_extraSmall_zc4n0_1", "small": "_small_zc4n0_4", "medium": "_medium_zc4n0_7", "large": "_large_zc4n0_10", "extraLarge": "_extraLarge_zc4n0_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js
  function VerticalSpace(_a) {
    var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: vertical_space_module_default[space] }));
  }
  var init_vertical_space = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_vertical_space_module();
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/a7943497-93e4-4c6a-af87-d6d298007e0b/base.js
  var init_base = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/a7943497-93e4-4c6a-af87-d6d298007e0b/base.js"() {
      if (document.getElementById("bb5365de8a") === null) {
        const element = document.createElement("style");
        element.id = "bb5365de8a";
        element.textContent = `@import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

:root {
  /* border-radius */
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  /* box-shadow */
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  /* font */
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  /* opacity */
  --opacity-30: 0.3;
  /* space */
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  /* z-index */
  --z-index-1: 1;
  --z-index-2: 2;
}

.figma-dark {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

::selection {
  background-color: var(--figma-color-bg-onselected);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      P(h(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_button();
      init_icon_button();
      init_text();
      init_textbox_numeric();
      init_toggle();
      init_icon_arrow_left_right_32();
      init_icon_arrow_up_down_32();
      init_icon_minus_32();
      init_icon_plus_32();
      init_icon_scale_32();
      init_icon_spacing_horizontal_32();
      init_bold();
      init_muted();
      init_container();
      init_middle_align();
      init_stack();
      init_vertical_space();
      init_render();
    }
  });

  // ../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/e55e252f-5b0b-4298-8644-e1148839dd59/styles.js
  var styles_default;
  var init_styles = __esm({
    "../../../../../../private/var/folders/q1/bsmndf7957sdhvhf0nydvg380000gn/T/e55e252f-5b0b-4298-8644-e1148839dd59/styles.js"() {
      if (document.getElementById("c956ae326f") === null) {
        const element = document.createElement("style");
        element.id = "c956ae326f";
        element.textContent = `._adj_manual_y7wgd_1 {
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  ._adj_manual_group_y7wgd_7 {
    display: flex; 
    flex-direction: row;
    align-items: center;
  }
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGpfbWFudWFsIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5hZGpfbWFudWFsX2dyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH0iXX0= */`;
        document.head.append(element);
      }
      styles_default = { "adj_manual": "_adj_manual_y7wgd_1", "adj_manual_group": "_adj_manual_group_y7wgd_7" };
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    const [count, setCount] = p2(8);
    const [countString, setCountString] = p2("8");
    const [adjustAutoLayout, setAdjustAutoLayout] = p2(false);
    const handleAdjustContentAll = T2(
      function() {
        if (count !== null) {
          emit("ADJUST_CONTENT", count, adjustAutoLayout);
        }
      },
      [count, adjustAutoLayout]
    );
    const adjW = (scaleUp) => {
      if (count !== null) {
        emit("ADJUST_WIDTH", count, scaleUp);
      }
    };
    const adjH = (scaleUp) => {
      if (count !== null) {
        emit("ADJUST_HIGHT", count, scaleUp);
      }
    };
    const adjWH = (scaleUp) => {
      if (count !== null) {
        emit("ADJUST_WIDTH_HEIGHT", count, scaleUp);
      }
    };
    const adjAutoLayout = (scaleUp) => {
      if (count !== null) {
        emit("ADJUST_AUTOLAYOUT", count, scaleUp);
      }
    };
    function onCheckboxChange(event) {
      setAdjustAutoLayout(event.target.checked);
      console.log(adjustAutoLayout);
    }
    return /* @__PURE__ */ h(Container, { space: "medium" }, /* @__PURE__ */ h(VerticalSpace, { space: "extraLarge" }), /* @__PURE__ */ h(Stack, { space: "extraSmall" }, /* @__PURE__ */ h(Text, null, /* @__PURE__ */ h(Bold, null, "Grid size")), /* @__PURE__ */ h(
      TextboxNumeric,
      {
        onNumericValueInput: setCount,
        onValueInput: setCountString,
        value: countString,
        variant: "border"
      }
    )), /* @__PURE__ */ h(VerticalSpace, { space: "extraLarge" }), /* @__PURE__ */ h(Stack, { space: "extraSmall" }, /* @__PURE__ */ h(Text, null, /* @__PURE__ */ h(Bold, null, "Manual shaping")), /* @__PURE__ */ h("div", { class: styles_default.adj_manual }, /* @__PURE__ */ h("div", { class: styles_default.adj_manual_group }, /* @__PURE__ */ h(Muted, null, /* @__PURE__ */ h(IconArrowLeftRight32, null)), /* @__PURE__ */ h(MiddleAlign, null, /* @__PURE__ */ h(Muted, null, "Width:"))), /* @__PURE__ */ h("div", { class: styles_default.adj_manual_group }, /* @__PURE__ */ h(IconButton, { onClick: () => adjW(false) }, /* @__PURE__ */ h(IconMinus32, null)), /* @__PURE__ */ h(IconButton, { onClick: () => adjW(true) }, /* @__PURE__ */ h(IconPlus32, null)))), /* @__PURE__ */ h("div", { class: styles_default.adj_manual }, /* @__PURE__ */ h("div", { class: styles_default.adj_manual_group }, /* @__PURE__ */ h(Muted, null, /* @__PURE__ */ h(IconArrowUpDown32, null)), /* @__PURE__ */ h(MiddleAlign, null, /* @__PURE__ */ h(Muted, null, "Height:"))), /* @__PURE__ */ h("div", { class: styles_default.adj_manual_group }, /* @__PURE__ */ h(IconButton, { onClick: () => adjH(false) }, /* @__PURE__ */ h(IconMinus32, null)), /* @__PURE__ */ h(IconButton, { onClick: () => adjH(true) }, /* @__PURE__ */ h(IconPlus32, null)))), /* @__PURE__ */ h("div", { class: styles_default.adj_manual }, /* @__PURE__ */ h("div", { class: styles_default.adj_manual_group }, /* @__PURE__ */ h(Muted, null, /* @__PURE__ */ h(IconScale32, null)), /* @__PURE__ */ h(MiddleAlign, null, /* @__PURE__ */ h(Muted, null, "Scale:"))), /* @__PURE__ */ h("div", { class: styles_default.adj_manual_group }, /* @__PURE__ */ h(IconButton, { onClick: () => adjWH(false) }, /* @__PURE__ */ h(IconMinus32, null)), /* @__PURE__ */ h(IconButton, { onClick: () => adjWH(true) }, /* @__PURE__ */ h(IconPlus32, null)))), /* @__PURE__ */ h("div", { class: styles_default.adj_manual }, /* @__PURE__ */ h("div", { class: styles_default.adj_manual_group }, /* @__PURE__ */ h(Muted, null, /* @__PURE__ */ h(IconSpacingHorizontal32, null)), /* @__PURE__ */ h(MiddleAlign, null, /* @__PURE__ */ h(Muted, null, "Auto layout:"))), /* @__PURE__ */ h("div", { class: styles_default.adj_manual_group }, /* @__PURE__ */ h(IconButton, { onClick: () => adjAutoLayout(false) }, /* @__PURE__ */ h(IconMinus32, null)), /* @__PURE__ */ h(IconButton, { onClick: () => adjAutoLayout(true) }, /* @__PURE__ */ h(IconPlus32, null))))), /* @__PURE__ */ h(VerticalSpace, { space: "extraLarge" }), /* @__PURE__ */ h(Stack, { space: "extraSmall" }, /* @__PURE__ */ h(Text, null, /* @__PURE__ */ h(Bold, null, "Automatical shaping")), /* @__PURE__ */ h(VerticalSpace, { space: "extraSmall" }), /* @__PURE__ */ h(Toggle, { onChange: (evt) => onCheckboxChange(evt), value: adjustAutoLayout }, /* @__PURE__ */ h(Text, null, "Adjust Auto Layout values ")), /* @__PURE__ */ h(Button, { fullWidth: true, onClick: handleAdjustContentAll }, "Adjust all")), /* @__PURE__ */ h(VerticalSpace, { space: "small" }));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      "use strict";
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_styles();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.ts--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error(
      "No UI defined for command `" + commandId + "`"
    );
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
