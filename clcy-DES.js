define("components-path/loading/template", [], function() {
    return '<div id="loadingBox" class="cm-loading"></div>'
}),
define("components-path/modal/main", ["jquery", "blockUI"], function(p) {
    var f = 0;
    function m(t, e) {
        return void 0 === t ? e : t
    }
    return {
        showModalByFragment: function(t, e, n, o) {
            var r = t ? t instanceof p ? t : p("#" + t) : p(window)
              , i = t ? r : p("body")
              , a = o || {}
              , s = "__template_wrap_modal_" + f++
              , c = "<div style='display: none' id='" + s + "'>" + e + "</div>";
            i.append(c);
            var l = p("#" + s)
              , u = l.outerWidth()
              , h = l.outerHeight();
            l.remove();
            var d = {
                cursor: "normal",
                border: 0,
                "background-color": "transparent",
                "z-index": 50001,
                "text-align": "left",
                width: u,
                height: h,
                left: (r.outerWidth() - u) / 2 + "px",
                top: (r.outerHeight() - h) / 2 + "px"
            };
            return r.block({
                message: e,
                fadeIn: m(a.fadeIn, 200),
                timeout: m(a.timeout, 0),
                centerX: !1,
                centerY: !1,
                showOverlay: m(a.showOverlay, !0),
                overlayCSS: p.extend({
                    cursor: "normal",
                    "z-index": 5e4
                }, a.overlayCSS),
                css: p.extend(d, a.css),
                onBlock: function() {
                    n && n()
                }
            }),
            r
        },
        showModalById: function(t, e, n, o) {
            var r = t ? t instanceof p ? t : p("#" + t) : p(window)
              , i = e instanceof p ? e : p("#" + e)
              , a = o || {}
              , s = i.outerWidth()
              , c = i.outerHeight()
              , l = {
                cursor: "normal",
                border: 0,
                "background-color": "transparent",
                "text-align": "left",
                "z-index": 50001,
                width: s,
                height: c,
                left: (r.outerWidth() - s) / 2 + "px",
                top: parseInt(r.outerHeight()) - 49 > parseInt(c) ? (r.outerHeight() - 49 - c) / 2 + "px" : "35px"
            };
            return r.block({
                message: i,
                fadeIn: m(a.fadeIn, 200),
                timeout: m(a.timeout, 0),
                centerX: !0,
                centerY: !0,
                showOverlay: m(a.showOverlay, !0),
                overlayCSS: p.extend({
                    cursor: "normal",
                    "z-index": 5e4
                }, a.overlayCSS),
                css: p.extend(l, a.css),
                onBlock: function() {
                    n && n()
                },
                onUnblock: function() {
                    a.unblockFn && a.unblockFn()
                }
            }),
            r
        },
        hideModal: function(t, e, n) {
            var o = n || {};
            (t ? t instanceof p ? t : p("#" + t) : p(window)).unblock({
                fadeOut: m(o.fadeOut, 200),
                onUnblock: function() {
                    e && e()
                }
            })
        }
    }
}),
define("components-path/loading/main", ["ko", "components-path/loading/template", "components-path/modal/main"], function(t, n, o) {
    return {
        showLoading: function(t, e) {
            return o.showModalByFragment(t, n, e)
        },
        hideLoading: function(t, e) {
            o.hideModal(t, e)
        }
    }
}),
define("modules-common-path/ajax.util", ["jquery"], function(a) {
    return {
        get: function(t, e, n, o, r) {
            for (i in e)
                e[i] = encodeURIComponent(e[i]);
            a.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                url: t + "?r=" + Math.random(),
                data: e,
                dataType: r || "json",
                success: function(t) {
                    null != n && n(t)
                },
                error: function(t, e) {
                    o(e, t)
                },
                complete: function(t, e) {
                    if (401 == t.status || 302 == t.status)
                        return window.location.href = t.getResponseHeader("Location"),
                        !1
                },
                timeout: 12e4
            })
        },
        post: function(t, e, n, o, r) {
            for (i in e)
                e[i] = encodeURIComponent(e[i]);
            a.ajax({
                type: "POST",
                url: t + "?r=" + Math.random(),
                data: e,
                dataType: r || "json",
                success: function(t) {
                    null != n && n(t)
                },
                error: function(t, e, n) {
                    o(e, t)
                },
                complete: function(t, e) {
                    if (401 == t.status || 302 == t.status)
                        return window.location.href = t.getResponseHeader("Location"),
                        !1
                },
                timeout: 12e4
            })
        },
        postquerypay: function(t, e, n, o, r) {
            for (i in e)
                e[i] = encodeURIComponent(e[i]);
            a.ajax({
                type: "POST",
                url: t + "?r=" + Math.random(),
                data: e,
                dataType: r || "json",
                success: function(t) {
                    null != n && n(t)
                },
                error: function(t, e, n) {
                    o(e, t)
                },
                complete: function(t, e) {
                    if (401 == t.status || 302 == t.status)
                        return window.location.href = t.getResponseHeader("Location"),
                        !1
                },
                timeout: 66e4
            })
        },
        getquerypay: function(t, e, n, o, r) {
            for (i in e)
                e[i] = encodeURIComponent(e[i]);
            a.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                url: t + "?r=" + Math.random(),
                data: e,
                dataType: r || "json",
                success: function(t) {
                    null != n && n(t)
                },
                error: function(t, e) {
                    o(e, t)
                },
                complete: function(t, e) {
                    if (401 == t.status || 302 == t.status)
                        return window.location.href = t.getResponseHeader("Location"),
                        !1
                },
                timeout: 66e4
            })
        }
    }
}),
define("modules-common-path/url.util", [], function() {
    function d() {
        this.protocol = null,
        this.slashes = null,
        this.host = null,
        this.port = null,
        this.hostname = null,
        this.hash = null,
        this.search = null,
        this.query = null,
        this.pathname = null,
        this.path = null,
        this.href = null
    }
    var p = /^([a-z0-9.+-]+:)/i
      , n = /:[0-9]*$/
      , f = {
        http: !0,
        "http:": !0,
        https: !0,
        "https:": !0,
        ftp: !0,
        "ftp:": !0,
        gopher: !0,
        "gopher:": !0,
        file: !0,
        "file:": !0
    };
    function s(t) {
        return "string" == typeof t ? t : "number" == typeof t && isFinite(t) ? "" + t : "boolean" == typeof t ? t ? "true" : "false" : ""
    }
    return d.prototype.parseHost = function() {
        var t = this.host
          , e = n.exec(t);
        e && (":" !== (e = e[0]) && (this.port = e.slice(1)),
        t = t.slice(0, t.length - e.length)),
        t && (this.hostname = t)
    }
    ,
    d.prototype.parse = function(t, e) {
        if ("string" != typeof t)
            throw new TypeError('Parameter "url" must be a string, not ' + typeof t);
        t = t.replace(/\\\\/g, "/");
        var n, o = p.exec(t);
        o && (n = (o = o[0]).toLowerCase(),
        this.protocol = n,
        t = t.slice(o.length)),
        2 <= t.length && 47 === t.charCodeAt(0) && 47 === t.charCodeAt(1) && (t = t.slice(2),
        this.slashes = !0);
        var r = -1;
        for (i = 0; i < t.length; ++i) {
            if (35 === t.charCodeAt(i) || 47 === t.charCodeAt(i) || 63 === t.charCodeAt(i)) {
                r = i;
                break
            }
            if (i === t.length - 1) {
                r = i + 1;
                break
            }
        }
        -1 !== r && (this.host = t.slice(0, r),
        t = t.slice(r)),
        this.parseHost(),
        "string" != typeof this.hostname && (this.hostname = "");
        var a = -1
          , s = -1;
        for (i = 0; i < t.length; ++i) {
            var c = t.charCodeAt(i);
            if (35 === c) {
                this.hash = t.slice(i),
                s = i;
                break
            }
            63 === c && -1 === a && (a = i)
        }
        -1 !== a ? (-1 === s ? (this.search = t.slice(a),
        this.query = t.slice(a + 1)) : (this.search = t.slice(a, s),
        this.query = t.slice(a + 1, s)),
        e && (this.query = d.queryParse(this.query))) : e && (this.search = "",
        this.query = {});
        var l, u, h = -1 !== a && (-1 === s || a < s) ? a : s;
        return -1 === h ? 0 < t.length && (this.pathname = t) : 0 < h && (this.pathname = t.slice(0, h)),
        f[n] && this.hostname && !this.pathname && (this.pathname = "/"),
        (this.pathname || this.search) && (l = this.pathname || "",
        u = this.search || "",
        this.path = l + u),
        this.href = this.format(),
        this
    }
    ,
    d.queryParse = function(t, e, n) {
        e = e || "&",
        n = n || "=";
        var o = {};
        if ("string" != typeof t || 0 === t.length)
            return o;
        var r = t.indexOf("#");
        0 <= r && (t = t.slice(0, r));
        var i, a, s, c, l = t.split(e);
        for (i in l) {
            l[i] && (s = a = "",
            (c = l[i].indexOf(n)) < 0 ? (a = l[i],
            s = "") : 0 !== c && (a = l[i].slice(0, c),
            s = l[i].slice(c + n.length),
            o[decodeURIComponent(a)] = decodeURIComponent(s)))
        }
        return o
    }
    ,
    d.prototype.format = function() {
        var t = this.protocol || ""
          , e = this.pathname || ""
          , n = this.hash || ""
          , o = ""
          , r = "";
        this.host ? o = this.host : this.hostname && (o = this.hostname + (this.port ? ":" + this.port : "")),
        null !== this.query && "object" == typeof this.query && (r = d.queryStringify(this.query));
        var i = (i = this.search || r && "?" + r || "").replace(/#/g, "%23");
        return t && 58 !== t.charCodeAt(t.length - 1) && (t += ":"),
        e = e.replace(/#/g, "%23").replace(/\?/g, "%3F"),
        (this.slashes || f[t]) && (this.slashes || o ? (e && 47 !== e.charCodeAt(0) && (e = "/" + e),
        o = "//" + o) : 4 <= t.length && 102 === t.charCodeAt(0) && 105 === t.charCodeAt(1) && 108 === t.charCodeAt(2) && 101 === t.charCodeAt(3) && (o = "//")),
        n && 35 !== n.charCodeAt(0) && (n = "#" + n),
        i && 63 !== i.charCodeAt(0) && (i = "?" + i),
        t + o + e + i + n
    }
    ,
    d.queryStringify = function(t, e, n) {
        e = e || "&",
        n = n || "=";
        var o, r, i = "";
        for (o in t)
            if (r = t[o],
            (Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
            )(r))
                for (var a in t[o])
                    i += encodeURIComponent(o) + n + encodeURIComponent(s(a)) + e;
            else
                i += encodeURIComponent(o) + n + encodeURIComponent(s(t[o])) + e;
        return i ? i.substr(0, i.length - e.length) : ""
    }
    ,
    d
}),
define("modules-common-path/action.util", ["modules-common-path/url.util"], function(i) {
    function o(t, e, n) {
        if ("undefined" == typeof globalConfig)
            throw "globalConfig is not defined, please init globalConfig";
        if (!globalConfig.dynamicDomain)
            throw "globalConfig.dynamicDomain is not defined, please init globalConfig.dynamicDomain";
        var o = globalConfig.dynamicDomain
          , o = "/" !== globalConfig.dynamicDomain.charAt(globalConfig.dynamicDomain.length - 1) ? globalConfig.dynamicDomain + "/" : globalConfig.dynamicDomain
          , r = "";
        return n && (r = (r = "object" == typeof n ? i.queryStringify(n) : "" + n) ? "?" + r : ""),
        o + e + "/" + t + r
    }
    return {
        path: o,
        redirect: function(t, e, n) {
            window.location.href = o(t, e, n)
        }
    }
}),
define("modules-services-path/agent.service", ["underscore", "modules-common-path/ajax.util", "modules-common-path/action.util"], function(r, i, a) {
    var s = "agent";
    return {
        agentLogin: function(t, e, n) {
            var o = r.extend({
                account: "",
                password: "",
                code: ""
            }, t);
            i.post(a.path("login", s), o, e, n)
        },
        agentLogout: function(t, e) {
            i.post(a.path("logout", s), {}, t, e)
        },
        applyForPartner: function(t, e, n) {
            var o = r.extend({
                companyName: "",
                comContactName: "",
                comContactPhone: "",
                comEmail: "",
                partnerProvince: ""
            }, t);
            i.post(a.path("applyForPartner", s), o, e, n)
        },
        getVrspLink: function(t, e, n) {
            var o = r.extend({}, t);
            i.post(a.path("getVrspLink", s), o, e, n)
        }
    }
}),
define("modules-common-path/check.util", [], function() {
    return {
        isNumber: function(t) {
            return /[0-9]+/.test("" + t)
        }
    }
}),
define("modules-common-path/regexp.util", [], function() {
    var o = "";
    return {
        phoneRegexp: function(t) {
            o = !!t.match(/^(0)(([0-9]{10})|([0-9]{11}))$/);
            var e = !!t.match(/^(1)([0-9]{10})$/);
            return o = o || e
        },
        phoneRegexpYidong: function(t) {
            return o = !!t.match(/^(0|86|17951)?(13[456789]|15[012789]|17[28]|18[23478]|14[7])[0-9]{8}$/)
        },
        phoneRegexpUnicom: function(t) {
            return o = !!t.match(/^(0|86|17951)?(13[012]|15[56]|17[156]|18[56]|14[5])[0-9]{8}$/)
        },
        phoneRegexpTelecom: function(t) {
            return o = !!t.match(/^(0|86|17951)?(13[3]|15[3]|17[037]|18[019])[0-9]{8}$/)
        },
        weiXinRegexp: function(t) {
            return o = !!t.match(/^[a-zA-Z\d_]{5,}$/)
        },
        qQRegexp: function(t) {
            return o = !!t.match(/^\d{5,10}$/)
        },
        emailRegexp: function(t) {
            return o = !!t.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
        },
        encodeCharacters: function(t) {
            var e = t.toString().toLowerCase();
            -1 != e.indexOf("script>") && (t = e.replace("script", ""));
            var n = encodeURIComponent(t);
            return o = escape(n)
        },
        guhuaPhoneRegexp: function(t) {
            return o = !!t.match(/^0[0-9]{3,4}[0-9]{7,8}$/)
        },
        checkAccountName: function(t) {
            return /^\w+$/.test(t)
        }
    }
}),
define("modules-common-path/modal.util", ["components-path/modal/main"], function(i) {
    return {
        showTipModalById: function(t, e, n, o, r) {
            return r ? i.showModalById(t, e, n, {
                unblockFn: o
            }) : i.showModalById(t, e, n, {
                timeout: 5e3,
                unblockFn: o
            })
        },
        leftWordTip: '<span style="color: #F9F9F9;background-color: #ff8f35;font-weight: bold;padding: 10px 20px;border-radius: 5px;font-size: 16px;float: none;display: inline;height: auto;line-height: normal;">您输入的字数已超过限制</span>',
        clipboardTip: '<span style="color: #F9F9F9;background-color: #ff8f35;font-weight: bold;padding: 10px 20px;border-radius: 5px;font-size: 16px;float: none;display: inline;height: auto;line-height: normal;">链接已复制到剪贴板，您可以粘贴进行分享</span>'
    }
});
var CryptoJS = CryptoJS || function(s) {
    function n() {}
    var t = {}
      , e = t.lib = {}
      , o = e.Base = {
        extend: function(t) {
            n.prototype = this;
            var e = new n;
            return t && e.mixIn(t),
            e.hasOwnProperty("init") || (e.init = function() {
                e.$super.init.apply(this, arguments)
            }
            ),
            (e.init.prototype = e).$super = this,
            e
        },
        create: function() {
            var t = this.extend();
            return t.init.apply(t, arguments),
            t
        },
        init: function() {},
        mixIn: function(t) {
            for (var e in t)
                t.hasOwnProperty(e) && (this[e] = t[e]);
            t.hasOwnProperty("toString") && (this.toString = t.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    }
      , c = e.WordArray = o.extend({
        init: function(t, e) {
            t = this.words = t || [],
            this.sigBytes = null != e ? e : 4 * t.length
        },
        toString: function(t) {
            return (t || i).stringify(this)
        },
        concat: function(t) {
            var e = this.words
              , n = t.words
              , o = this.sigBytes;
            if (t = t.sigBytes,
            this.clamp(),
            o % 4)
                for (var r = 0; r < t; r++)
                    e[o + r >>> 2] |= (n[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (o + r) % 4 * 8;
            else if (65535 < n.length)
                for (r = 0; r < t; r += 4)
                    e[o + r >>> 2] = n[r >>> 2];
            else
                e.push.apply(e, n);
            return this.sigBytes += t,
            this
        },
        clamp: function() {
            var t = this.words
              , e = this.sigBytes;
            t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8,
            t.length = s.ceil(e / 4)
        },
        clone: function() {
            var t = o.clone.call(this);
            return t.words = this.words.slice(0),
            t
        },
        random: function(t) {
            for (var e = [], n = 0; n < t; n += 4)
                e.push(4294967296 * s.random() | 0);
            return new c.init(e,t)
        }
    })
      , r = t.enc = {}
      , i = r.Hex = {
        stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var n = [], o = 0; o < t; o++) {
                var r = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                n.push((r >>> 4).toString(16)),
                n.push((15 & r).toString(16))
            }
            return n.join("")
        },
        parse: function(t) {
            for (var e = t.length, n = [], o = 0; o < e; o += 2)
                n[o >>> 3] |= parseInt(t.substr(o, 2), 16) << 24 - o % 8 * 4;
            return new c.init(n,e / 2)
        }
    }
      , a = r.Latin1 = {
        stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var n = [], o = 0; o < t; o++)
                n.push(String.fromCharCode(e[o >>> 2] >>> 24 - o % 4 * 8 & 255));
            return n.join("")
        },
        parse: function(t) {
            for (var e = t.length, n = [], o = 0; o < e; o++)
                n[o >>> 2] |= (255 & t.charCodeAt(o)) << 24 - o % 4 * 8;
            return new c.init(n,e)
        }
    }
      , l = r.Utf8 = {
        stringify: function(t) {
            try {
                return decodeURIComponent(escape(a.stringify(t)))
            } catch (t) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(t) {
            return a.parse(unescape(encodeURIComponent(t)))
        }
    }
      , u = e.BufferedBlockAlgorithm = o.extend({
        reset: function() {
            this._data = new c.init,
            this._nDataBytes = 0
        },
        _append: function(t) {
            "string" == typeof t && (t = l.parse(t)),
            this._data.concat(t),
            this._nDataBytes += t.sigBytes
        },
        _process: function(t) {
            var e = this._data
              , n = e.words
              , o = e.sigBytes
              , r = this.blockSize
              , i = o / (4 * r);
            if (t = (i = t ? s.ceil(i) : s.max((0 | i) - this._minBufferSize, 0)) * r,
            o = s.min(4 * t, o),
            t) {
                for (var a = 0; a < t; a += r)
                    this._doProcessBlock(n, a);
                a = n.splice(0, t),
                e.sigBytes -= o
            }
            return new c.init(a,o)
        },
        clone: function() {
            var t = o.clone.call(this);
            return t._data = this._data.clone(),
            t
        },
        _minBufferSize: 0
    });
    e.Hasher = u.extend({
        cfg: o.extend(),
        init: function(t) {
            this.cfg = this.cfg.extend(t),
            this.reset()
        },
        reset: function() {
            u.reset.call(this),
            this._doReset()
        },
        update: function(t) {
            return this._append(t),
            this._process(),
            this
        },
        finalize: function(t) {
            return t && this._append(t),
            this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(n) {
            return function(t, e) {
                return new n.init(e).finalize(t)
            }
        },
        _createHmacHelper: function(n) {
            return function(t, e) {
                return new h.HMAC.init(n,e).finalize(t)
            }
        }
    });
    var h = t.algo = {};
    return t
}(Math);
!function() {
    var c = CryptoJS.lib.WordArray;
    CryptoJS.enc.Base64 = {
        stringify: function(t) {
            var e = t.words
              , n = t.sigBytes
              , o = this._map;
            t.clamp(),
            t = [];
            for (var r = 0; r < n; r += 3)
                for (var i = (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (e[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | e[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, a = 0; a < 4 && r + .75 * a < n; a++)
                    t.push(o.charAt(i >>> 6 * (3 - a) & 63));
            if (e = o.charAt(64))
                for (; t.length % 4; )
                    t.push(e);
            return t.join("")
        },
        parse: function(t) {
            var e = t.length
              , n = this._map;
            !(i = n.charAt(64)) || -1 != (i = t.indexOf(i)) && (e = i);
            for (var o, r, i = [], a = 0, s = 0; s < e; s++) {
                s % 4 && (o = n.indexOf(t.charAt(s - 1)) << s % 4 * 2,
                r = n.indexOf(t.charAt(s)) >>> 6 - s % 4 * 2,
                i[a >>> 2] |= (o | r) << 24 - a % 4 * 8,
                a++)
            }
            return c.create(i, a)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
}(),
function(i) {
    function x(t, e, n, o, r, i, a) {
        return ((t = t + (e & n | ~e & o) + r + a) << i | t >>> 32 - i) + e
    }
    function w(t, e, n, o, r, i, a) {
        return ((t = t + (e & o | n & ~o) + r + a) << i | t >>> 32 - i) + e
    }
    function b(t, e, n, o, r, i, a) {
        return ((t = t + (e ^ n ^ o) + r + a) << i | t >>> 32 - i) + e
    }
    function S(t, e, n, o, r, i, a) {
        return ((t = t + (n ^ (e | ~o)) + r + a) << i | t >>> 32 - i) + e
    }
    for (var t = CryptoJS, e = (o = t.lib).WordArray, n = o.Hasher, o = t.algo, M = [], r = 0; r < 64; r++)
        M[r] = 4294967296 * i.abs(i.sin(r + 1)) | 0;
    o = o.MD5 = n.extend({
        _doReset: function() {
            this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(t, e) {
            for (var n = 0; n < 16; n++) {
                var o = t[r = e + n];
                t[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8)
            }
            var n = this._hash.words
              , r = t[e + 0]
              , o = t[e + 1]
              , i = t[e + 2]
              , a = t[e + 3]
              , s = t[e + 4]
              , c = t[e + 5]
              , l = t[e + 6]
              , u = t[e + 7]
              , h = t[e + 8]
              , d = t[e + 9]
              , p = t[e + 10]
              , f = t[e + 11]
              , m = t[e + 12]
              , g = t[e + 13]
              , y = t[e + 14]
              , v = t[e + 15]
              , _ = x(_ = n[0], B = n[1], k = n[2], C = n[3], r, 7, M[0])
              , C = x(C, _, B, k, o, 12, M[1])
              , k = x(k, C, _, B, i, 17, M[2])
              , B = x(B, k, C, _, a, 22, M[3])
              , _ = x(_, B, k, C, s, 7, M[4])
              , C = x(C, _, B, k, c, 12, M[5])
              , k = x(k, C, _, B, l, 17, M[6])
              , B = x(B, k, C, _, u, 22, M[7])
              , _ = x(_, B, k, C, h, 7, M[8])
              , C = x(C, _, B, k, d, 12, M[9])
              , k = x(k, C, _, B, p, 17, M[10])
              , B = x(B, k, C, _, f, 22, M[11])
              , _ = x(_, B, k, C, m, 7, M[12])
              , C = x(C, _, B, k, g, 12, M[13])
              , k = x(k, C, _, B, y, 17, M[14])
              , _ = w(_, B = x(B, k, C, _, v, 22, M[15]), k, C, o, 5, M[16])
              , C = w(C, _, B, k, l, 9, M[17])
              , k = w(k, C, _, B, f, 14, M[18])
              , B = w(B, k, C, _, r, 20, M[19])
              , _ = w(_, B, k, C, c, 5, M[20])
              , C = w(C, _, B, k, p, 9, M[21])
              , k = w(k, C, _, B, v, 14, M[22])
              , B = w(B, k, C, _, s, 20, M[23])
              , _ = w(_, B, k, C, d, 5, M[24])
              , C = w(C, _, B, k, y, 9, M[25])
              , k = w(k, C, _, B, a, 14, M[26])
              , B = w(B, k, C, _, h, 20, M[27])
              , _ = w(_, B, k, C, g, 5, M[28])
              , C = w(C, _, B, k, i, 9, M[29])
              , k = w(k, C, _, B, u, 14, M[30])
              , _ = b(_, B = w(B, k, C, _, m, 20, M[31]), k, C, c, 4, M[32])
              , C = b(C, _, B, k, h, 11, M[33])
              , k = b(k, C, _, B, f, 16, M[34])
              , B = b(B, k, C, _, y, 23, M[35])
              , _ = b(_, B, k, C, o, 4, M[36])
              , C = b(C, _, B, k, s, 11, M[37])
              , k = b(k, C, _, B, u, 16, M[38])
              , B = b(B, k, C, _, p, 23, M[39])
              , _ = b(_, B, k, C, g, 4, M[40])
              , C = b(C, _, B, k, r, 11, M[41])
              , k = b(k, C, _, B, a, 16, M[42])
              , B = b(B, k, C, _, l, 23, M[43])
              , _ = b(_, B, k, C, d, 4, M[44])
              , C = b(C, _, B, k, m, 11, M[45])
              , k = b(k, C, _, B, v, 16, M[46])
              , _ = S(_, B = b(B, k, C, _, i, 23, M[47]), k, C, r, 6, M[48])
              , C = S(C, _, B, k, u, 10, M[49])
              , k = S(k, C, _, B, y, 15, M[50])
              , B = S(B, k, C, _, c, 21, M[51])
              , _ = S(_, B, k, C, m, 6, M[52])
              , C = S(C, _, B, k, a, 10, M[53])
              , k = S(k, C, _, B, p, 15, M[54])
              , B = S(B, k, C, _, o, 21, M[55])
              , _ = S(_, B, k, C, h, 6, M[56])
              , C = S(C, _, B, k, v, 10, M[57])
              , k = S(k, C, _, B, l, 15, M[58])
              , B = S(B, k, C, _, g, 21, M[59])
              , _ = S(_, B, k, C, s, 6, M[60])
              , C = S(C, _, B, k, f, 10, M[61])
              , k = S(k, C, _, B, i, 15, M[62])
              , B = S(B, k, C, _, d, 21, M[63]);
            n[0] = n[0] + _ | 0,
            n[1] = n[1] + B | 0,
            n[2] = n[2] + k | 0,
            n[3] = n[3] + C | 0
        },
        _doFinalize: function() {
            var t = this._data
              , e = t.words
              , n = 8 * this._nDataBytes
              , o = 8 * t.sigBytes;
            e[o >>> 5] |= 128 << 24 - o % 32;
            var r = i.floor(n / 4294967296);
            for (e[15 + (64 + o >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
            e[14 + (64 + o >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
            t.sigBytes = 4 * (e.length + 1),
            this._process(),
            e = (t = this._hash).words,
            n = 0; n < 4; n++)
                o = e[n],
                e[n] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
            return t
        },
        clone: function() {
            var t = n.clone.call(this);
            return t._hash = this._hash.clone(),
            t
        }
    }),
    t.MD5 = n._createHelper(o),
    t.HmacMD5 = n._createHmacHelper(o)
}(Math),
function() {
    var t = CryptoJS
      , e = t.lib
      , n = e.Base
      , l = e.WordArray
      , o = (e = t.algo).EvpKDF = n.extend({
        cfg: n.extend({
            keySize: 4,
            hasher: e.MD5,
            iterations: 1
        }),
        init: function(t) {
            this.cfg = this.cfg.extend(t)
        },
        compute: function(t, e) {
            for (var n = (a = this.cfg).hasher.create(), o = l.create(), r = o.words, i = a.keySize, a = a.iterations; r.length < i; ) {
                s && n.update(s);
                var s = n.update(t).finalize(e);
                n.reset();
                for (var c = 1; c < a; c++)
                    s = n.finalize(s),
                    n.reset();
                o.concat(s)
            }
            return o.sigBytes = 4 * i,
            o
        }
    });
    t.EvpKDF = function(t, e, n) {
        return o.create(n).compute(t, e)
    }
}(),
CryptoJS.lib.Cipher || function() {
    var t = (d = CryptoJS).lib
      , e = t.Base
      , a = t.WordArray
      , n = t.BufferedBlockAlgorithm
      , o = d.enc.Base64
      , r = d.algo.EvpKDF
      , i = t.Cipher = n.extend({
        cfg: e.extend(),
        createEncryptor: function(t, e) {
            return this.create(this._ENC_XFORM_MODE, t, e)
        },
        createDecryptor: function(t, e) {
            return this.create(this._DEC_XFORM_MODE, t, e)
        },
        init: function(t, e, n) {
            this.cfg = this.cfg.extend(n),
            this._xformMode = t,
            this._key = e,
            this.reset()
        },
        reset: function() {
            n.reset.call(this),
            this._doReset()
        },
        process: function(t) {
            return this._append(t),
            this._process()
        },
        finalize: function(t) {
            return t && this._append(t),
            this._doFinalize()
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function(o) {
            return {
                encrypt: function(t, e, n) {
                    return ("string" == typeof e ? p : h).encrypt(o, t, e, n)
                },
                decrypt: function(t, e, n) {
                    return ("string" == typeof e ? p : h).decrypt(o, t, e, n)
                }
            }
        }
    });
    t.StreamCipher = i.extend({
        _doFinalize: function() {
            return this._process(!0)
        },
        blockSize: 1
    });
    function s(t, e, n) {
        var o = this._iv;
        o ? this._iv = void 0 : o = this._prevBlock;
        for (var r = 0; r < n; r++)
            t[e + r] ^= o[r]
    }
    var c = d.mode = {}
      , l = (t.BlockCipherMode = e.extend({
        createEncryptor: function(t, e) {
            return this.Encryptor.create(t, e)
        },
        createDecryptor: function(t, e) {
            return this.Decryptor.create(t, e)
        },
        init: function(t, e) {
            this._cipher = t,
            this._iv = e
        }
    })).extend();
    l.Encryptor = l.extend({
        processBlock: function(t, e) {
            var n = this._cipher
              , o = n.blockSize;
            s.call(this, t, e, o),
            n.encryptBlock(t, e),
            this._prevBlock = t.slice(e, e + o)
        }
    }),
    l.Decryptor = l.extend({
        processBlock: function(t, e) {
            var n = this._cipher
              , o = n.blockSize
              , r = t.slice(e, e + o);
            n.decryptBlock(t, e),
            s.call(this, t, e, o),
            this._prevBlock = r
        }
    }),
    c = c.CBC = l,
    l = (d.pad = {}).Pkcs7 = {
        pad: function(t, e) {
            for (var n = 4 * e, o = (n = n - t.sigBytes % n) << 24 | n << 16 | n << 8 | n, r = [], i = 0; i < n; i += 4)
                r.push(o);
            n = a.create(r, n),
            t.concat(n)
        },
        unpad: function(t) {
            t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
        }
    },
    t.BlockCipher = i.extend({
        cfg: i.cfg.extend({
            mode: c,
            padding: l
        }),
        reset: function() {
            i.reset.call(this);
            var t, e = (n = this.cfg).iv, n = n.mode;
            this._xformMode == this._ENC_XFORM_MODE ? t = n.createEncryptor : (t = n.createDecryptor,
            this._minBufferSize = 1),
            this._mode = t.call(n, this, e && e.words)
        },
        _doProcessBlock: function(t, e) {
            this._mode.processBlock(t, e)
        },
        _doFinalize: function() {
            var t, e = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (e.pad(this._data, this.blockSize),
            t = this._process(!0)) : (t = this._process(!0),
            e.unpad(t)),
            t
        },
        blockSize: 4
    });
    var u = t.CipherParams = e.extend({
        init: function(t) {
            this.mixIn(t)
        },
        toString: function(t) {
            return (t || this.formatter).stringify(this)
        }
    })
      , c = (d.format = {}).OpenSSL = {
        stringify: function(t) {
            var e = t.ciphertext;
            return ((t = t.salt) ? a.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(o)
        },
        parse: function(t) {
            var e, n = (t = o.parse(t)).words;
            return 1398893684 == n[0] && 1701076831 == n[1] && (e = a.create(n.slice(2, 4)),
            n.splice(0, 4),
            t.sigBytes -= 16),
            u.create({
                ciphertext: t,
                salt: e
            })
        }
    }
      , h = t.SerializableCipher = e.extend({
        cfg: e.extend({
            format: c
        }),
        encrypt: function(t, e, n, o) {
            o = this.cfg.extend(o);
            var r = t.createEncryptor(n, o);
            return e = r.finalize(e),
            r = r.cfg,
            u.create({
                ciphertext: e,
                key: n,
                iv: r.iv,
                algorithm: t,
                mode: r.mode,
                padding: r.padding,
                blockSize: t.blockSize,
                formatter: o.format
            })
        },
        decrypt: function(t, e, n, o) {
            return o = this.cfg.extend(o),
            e = this._parse(e, o.format),
            t.createDecryptor(n, o).finalize(e.ciphertext)
        },
        _parse: function(t, e) {
            return "string" == typeof t ? e.parse(t, this) : t
        }
    })
      , d = (d.kdf = {}).OpenSSL = {
        execute: function(t, e, n, o) {
            return o = o || a.random(8),
            t = r.create({
                keySize: e + n
            }).compute(t, o),
            n = a.create(t.words.slice(e), 4 * n),
            t.sigBytes = 4 * e,
            u.create({
                key: t,
                iv: n,
                salt: o
            })
        }
    }
      , p = t.PasswordBasedCipher = h.extend({
        cfg: h.cfg.extend({
            kdf: d
        }),
        encrypt: function(t, e, n, o) {
            return n = (o = this.cfg.extend(o)).kdf.execute(n, t.keySize, t.ivSize),
            o.iv = n.iv,
            (t = h.encrypt.call(this, t, e, n.key, o)).mixIn(n),
            t
        },
        decrypt: function(t, e, n, o) {
            return o = this.cfg.extend(o),
            e = this._parse(e, o.format),
            n = o.kdf.execute(n, t.keySize, t.ivSize, e.salt),
            o.iv = n.iv,
            h.decrypt.call(this, t, e, n.key, o)
        }
    })
}(),
function() {
    function l(t, e) {
        var n = (this._lBlock >>> t ^ this._rBlock) & e;
        this._rBlock ^= n,
        this._lBlock ^= n << t
    }
    function u(t, e) {
        var n = (this._rBlock >>> t ^ this._lBlock) & e;
        this._lBlock ^= n,
        this._rBlock ^= n << t
    }
    var t = CryptoJS
      , e = (n = t.lib).WordArray
      , n = n.BlockCipher
      , o = t.algo
      , a = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]
      , s = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]
      , c = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28]
      , h = [{
        0: 8421888,
        268435456: 32768,
        536870912: 8421378,
        805306368: 2,
        1073741824: 512,
        1342177280: 8421890,
        1610612736: 8389122,
        1879048192: 8388608,
        2147483648: 514,
        2415919104: 8389120,
        2684354560: 33280,
        2952790016: 8421376,
        3221225472: 32770,
        3489660928: 8388610,
        3758096384: 0,
        4026531840: 33282,
        134217728: 0,
        402653184: 8421890,
        671088640: 33282,
        939524096: 32768,
        1207959552: 8421888,
        1476395008: 512,
        1744830464: 8421378,
        2013265920: 2,
        2281701376: 8389120,
        2550136832: 33280,
        2818572288: 8421376,
        3087007744: 8389122,
        3355443200: 8388610,
        3623878656: 32770,
        3892314112: 514,
        4160749568: 8388608,
        1: 32768,
        268435457: 2,
        536870913: 8421888,
        805306369: 8388608,
        1073741825: 8421378,
        1342177281: 33280,
        1610612737: 512,
        1879048193: 8389122,
        2147483649: 8421890,
        2415919105: 8421376,
        2684354561: 8388610,
        2952790017: 33282,
        3221225473: 514,
        3489660929: 8389120,
        3758096385: 32770,
        4026531841: 0,
        134217729: 8421890,
        402653185: 8421376,
        671088641: 8388608,
        939524097: 512,
        1207959553: 32768,
        1476395009: 8388610,
        1744830465: 2,
        2013265921: 33282,
        2281701377: 32770,
        2550136833: 8389122,
        2818572289: 514,
        3087007745: 8421888,
        3355443201: 8389120,
        3623878657: 0,
        3892314113: 33280,
        4160749569: 8421378
    }, {
        0: 1074282512,
        16777216: 16384,
        33554432: 524288,
        50331648: 1074266128,
        67108864: 1073741840,
        83886080: 1074282496,
        100663296: 1073758208,
        117440512: 16,
        134217728: 540672,
        150994944: 1073758224,
        167772160: 1073741824,
        184549376: 540688,
        201326592: 524304,
        218103808: 0,
        234881024: 16400,
        251658240: 1074266112,
        8388608: 1073758208,
        25165824: 540688,
        41943040: 16,
        58720256: 1073758224,
        75497472: 1074282512,
        92274688: 1073741824,
        109051904: 524288,
        125829120: 1074266128,
        142606336: 524304,
        159383552: 0,
        176160768: 16384,
        192937984: 1074266112,
        209715200: 1073741840,
        226492416: 540672,
        243269632: 1074282496,
        260046848: 16400,
        268435456: 0,
        285212672: 1074266128,
        301989888: 1073758224,
        318767104: 1074282496,
        335544320: 1074266112,
        352321536: 16,
        369098752: 540688,
        385875968: 16384,
        402653184: 16400,
        419430400: 524288,
        436207616: 524304,
        452984832: 1073741840,
        469762048: 540672,
        486539264: 1073758208,
        503316480: 1073741824,
        520093696: 1074282512,
        276824064: 540688,
        293601280: 524288,
        310378496: 1074266112,
        327155712: 16384,
        343932928: 1073758208,
        360710144: 1074282512,
        377487360: 16,
        394264576: 1073741824,
        411041792: 1074282496,
        427819008: 1073741840,
        444596224: 1073758224,
        461373440: 524304,
        478150656: 0,
        494927872: 16400,
        511705088: 1074266128,
        528482304: 540672
    }, {
        0: 260,
        1048576: 0,
        2097152: 67109120,
        3145728: 65796,
        4194304: 65540,
        5242880: 67108868,
        6291456: 67174660,
        7340032: 67174400,
        8388608: 67108864,
        9437184: 67174656,
        10485760: 65792,
        11534336: 67174404,
        12582912: 67109124,
        13631488: 65536,
        14680064: 4,
        15728640: 256,
        524288: 67174656,
        1572864: 67174404,
        2621440: 0,
        3670016: 67109120,
        4718592: 67108868,
        5767168: 65536,
        6815744: 65540,
        7864320: 260,
        8912896: 4,
        9961472: 256,
        11010048: 67174400,
        12058624: 65796,
        13107200: 65792,
        14155776: 67109124,
        15204352: 67174660,
        16252928: 67108864,
        16777216: 67174656,
        17825792: 65540,
        18874368: 65536,
        19922944: 67109120,
        20971520: 256,
        22020096: 67174660,
        23068672: 67108868,
        24117248: 0,
        25165824: 67109124,
        26214400: 67108864,
        27262976: 4,
        28311552: 65792,
        29360128: 67174400,
        30408704: 260,
        31457280: 65796,
        32505856: 67174404,
        17301504: 67108864,
        18350080: 260,
        19398656: 67174656,
        20447232: 0,
        21495808: 65540,
        22544384: 67109120,
        23592960: 256,
        24641536: 67174404,
        25690112: 65536,
        26738688: 67174660,
        27787264: 65796,
        28835840: 67108868,
        29884416: 67109124,
        30932992: 67174400,
        31981568: 4,
        33030144: 65792
    }, {
        0: 2151682048,
        65536: 2147487808,
        131072: 4198464,
        196608: 2151677952,
        262144: 0,
        327680: 4198400,
        393216: 2147483712,
        458752: 4194368,
        524288: 2147483648,
        589824: 4194304,
        655360: 64,
        720896: 2147487744,
        786432: 2151678016,
        851968: 4160,
        917504: 4096,
        983040: 2151682112,
        32768: 2147487808,
        98304: 64,
        163840: 2151678016,
        229376: 2147487744,
        294912: 4198400,
        360448: 2151682112,
        425984: 0,
        491520: 2151677952,
        557056: 4096,
        622592: 2151682048,
        688128: 4194304,
        753664: 4160,
        819200: 2147483648,
        884736: 4194368,
        950272: 4198464,
        1015808: 2147483712,
        1048576: 4194368,
        1114112: 4198400,
        1179648: 2147483712,
        1245184: 0,
        1310720: 4160,
        1376256: 2151678016,
        1441792: 2151682048,
        1507328: 2147487808,
        1572864: 2151682112,
        1638400: 2147483648,
        1703936: 2151677952,
        1769472: 4198464,
        1835008: 2147487744,
        1900544: 4194304,
        1966080: 64,
        2031616: 4096,
        1081344: 2151677952,
        1146880: 2151682112,
        1212416: 0,
        1277952: 4198400,
        1343488: 4194368,
        1409024: 2147483648,
        1474560: 2147487808,
        1540096: 64,
        1605632: 2147483712,
        1671168: 4096,
        1736704: 2147487744,
        1802240: 2151678016,
        1867776: 4160,
        1933312: 2151682048,
        1998848: 4194304,
        2064384: 4198464
    }, {
        0: 128,
        4096: 17039360,
        8192: 262144,
        12288: 536870912,
        16384: 537133184,
        20480: 16777344,
        24576: 553648256,
        28672: 262272,
        32768: 16777216,
        36864: 537133056,
        40960: 536871040,
        45056: 553910400,
        49152: 553910272,
        53248: 0,
        57344: 17039488,
        61440: 553648128,
        2048: 17039488,
        6144: 553648256,
        10240: 128,
        14336: 17039360,
        18432: 262144,
        22528: 537133184,
        26624: 553910272,
        30720: 536870912,
        34816: 537133056,
        38912: 0,
        43008: 553910400,
        47104: 16777344,
        51200: 536871040,
        55296: 553648128,
        59392: 16777216,
        63488: 262272,
        65536: 262144,
        69632: 128,
        73728: 536870912,
        77824: 553648256,
        81920: 16777344,
        86016: 553910272,
        90112: 537133184,
        94208: 16777216,
        98304: 553910400,
        102400: 553648128,
        106496: 17039360,
        110592: 537133056,
        114688: 262272,
        118784: 536871040,
        122880: 0,
        126976: 17039488,
        67584: 553648256,
        71680: 16777216,
        75776: 17039360,
        79872: 537133184,
        83968: 536870912,
        88064: 17039488,
        92160: 128,
        96256: 553910272,
        100352: 262272,
        104448: 553910400,
        108544: 0,
        112640: 553648128,
        116736: 16777344,
        120832: 262144,
        124928: 537133056,
        129024: 536871040
    }, {
        0: 268435464,
        256: 8192,
        512: 270532608,
        768: 270540808,
        1024: 268443648,
        1280: 2097152,
        1536: 2097160,
        1792: 268435456,
        2048: 0,
        2304: 268443656,
        2560: 2105344,
        2816: 8,
        3072: 270532616,
        3328: 2105352,
        3584: 8200,
        3840: 270540800,
        128: 270532608,
        384: 270540808,
        640: 8,
        896: 2097152,
        1152: 2105352,
        1408: 268435464,
        1664: 268443648,
        1920: 8200,
        2176: 2097160,
        2432: 8192,
        2688: 268443656,
        2944: 270532616,
        3200: 0,
        3456: 270540800,
        3712: 2105344,
        3968: 268435456,
        4096: 268443648,
        4352: 270532616,
        4608: 270540808,
        4864: 8200,
        5120: 2097152,
        5376: 268435456,
        5632: 268435464,
        5888: 2105344,
        6144: 2105352,
        6400: 0,
        6656: 8,
        6912: 270532608,
        7168: 8192,
        7424: 268443656,
        7680: 270540800,
        7936: 2097160,
        4224: 8,
        4480: 2105344,
        4736: 2097152,
        4992: 268435464,
        5248: 268443648,
        5504: 8200,
        5760: 270540808,
        6016: 270532608,
        6272: 270540800,
        6528: 270532616,
        6784: 8192,
        7040: 2105352,
        7296: 2097160,
        7552: 0,
        7808: 268435456,
        8064: 268443656
    }, {
        0: 1048576,
        16: 33555457,
        32: 1024,
        48: 1049601,
        64: 34604033,
        80: 0,
        96: 1,
        112: 34603009,
        128: 33555456,
        144: 1048577,
        160: 33554433,
        176: 34604032,
        192: 34603008,
        208: 1025,
        224: 1049600,
        240: 33554432,
        8: 34603009,
        24: 0,
        40: 33555457,
        56: 34604032,
        72: 1048576,
        88: 33554433,
        104: 33554432,
        120: 1025,
        136: 1049601,
        152: 33555456,
        168: 34603008,
        184: 1048577,
        200: 1024,
        216: 34604033,
        232: 1,
        248: 1049600,
        256: 33554432,
        272: 1048576,
        288: 33555457,
        304: 34603009,
        320: 1048577,
        336: 33555456,
        352: 34604032,
        368: 1049601,
        384: 1025,
        400: 34604033,
        416: 1049600,
        432: 1,
        448: 0,
        464: 34603008,
        480: 33554433,
        496: 1024,
        264: 1049600,
        280: 33555457,
        296: 34603009,
        312: 1,
        328: 33554432,
        344: 1048576,
        360: 1025,
        376: 34604032,
        392: 33554433,
        408: 34603008,
        424: 0,
        440: 34604033,
        456: 1049601,
        472: 1024,
        488: 33555456,
        504: 1048577
    }, {
        0: 134219808,
        1: 131072,
        2: 134217728,
        3: 32,
        4: 131104,
        5: 134350880,
        6: 134350848,
        7: 2048,
        8: 134348800,
        9: 134219776,
        10: 133120,
        11: 134348832,
        12: 2080,
        13: 0,
        14: 134217760,
        15: 133152,
        2147483648: 2048,
        2147483649: 134350880,
        2147483650: 134219808,
        2147483651: 134217728,
        2147483652: 134348800,
        2147483653: 133120,
        2147483654: 133152,
        2147483655: 32,
        2147483656: 134217760,
        2147483657: 2080,
        2147483658: 131104,
        2147483659: 134350848,
        2147483660: 0,
        2147483661: 134348832,
        2147483662: 134219776,
        2147483663: 131072,
        16: 133152,
        17: 134350848,
        18: 32,
        19: 2048,
        20: 134219776,
        21: 134217760,
        22: 134348832,
        23: 131072,
        24: 0,
        25: 131104,
        26: 134348800,
        27: 134219808,
        28: 134350880,
        29: 133120,
        30: 2080,
        31: 134217728,
        2147483664: 131072,
        2147483665: 2048,
        2147483666: 134348832,
        2147483667: 133152,
        2147483668: 32,
        2147483669: 134348800,
        2147483670: 134217728,
        2147483671: 134219808,
        2147483672: 134350880,
        2147483673: 134217760,
        2147483674: 134219776,
        2147483675: 0,
        2147483676: 133120,
        2147483677: 2080,
        2147483678: 131104,
        2147483679: 134350848
    }]
      , d = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679]
      , r = o.DES = n.extend({
        _doReset: function() {
            for (var t = this._key.words, e = [], n = 0; n < 56; n++) {
                var o = a[n] - 1;
                e[n] = t[o >>> 5] >>> 31 - o % 32 & 1
            }
            for (t = this._subKeys = [],
            o = 0; o < 16; o++) {
                for (var r = t[o] = [], i = c[o], n = 0; n < 24; n++)
                    r[n / 6 | 0] |= e[(s[n] - 1 + i) % 28] << 31 - n % 6,
                    r[4 + (n / 6 | 0)] |= e[28 + (s[n + 24] - 1 + i) % 28] << 31 - n % 6;
                for (r[0] = r[0] << 1 | r[0] >>> 31,
                n = 1; n < 7; n++)
                    r[n] >>>= 4 * (n - 1) + 3;
                r[7] = r[7] << 5 | r[7] >>> 27
            }
            for (e = this._invSubKeys = [],
            n = 0; n < 16; n++)
                e[n] = t[15 - n]
        },
        encryptBlock: function(t, e) {
            this._doCryptBlock(t, e, this._subKeys)
        },
        decryptBlock: function(t, e) {
            this._doCryptBlock(t, e, this._invSubKeys)
        },
        _doCryptBlock: function(t, e, n) {
            this._lBlock = t[e],
            this._rBlock = t[e + 1],
            l.call(this, 4, 252645135),
            l.call(this, 16, 65535),
            u.call(this, 2, 858993459),
            u.call(this, 8, 16711935),
            l.call(this, 1, 1431655765);
            for (var o = 0; o < 16; o++) {
                for (var r = n[o], i = this._lBlock, a = this._rBlock, s = 0, c = 0; c < 8; c++)
                    s |= h[c][((a ^ r[c]) & d[c]) >>> 0];
                this._lBlock = a,
                this._rBlock = i ^ s
            }
            n = this._lBlock,
            this._lBlock = this._rBlock,
            this._rBlock = n,
            l.call(this, 1, 1431655765),
            u.call(this, 8, 16711935),
            u.call(this, 2, 858993459),
            l.call(this, 16, 65535),
            l.call(this, 4, 252645135),
            t[e] = this._lBlock,
            t[e + 1] = this._rBlock
        },
        keySize: 2,
        ivSize: 2,
        blockSize: 2
    });
    t.DES = n._createHelper(r),
    o = o.TripleDES = n.extend({
        _doReset: function() {
            var t = this._key.words;
            this._des1 = r.createEncryptor(e.create(t.slice(0, 2))),
            this._des2 = r.createEncryptor(e.create(t.slice(2, 4))),
            this._des3 = r.createEncryptor(e.create(t.slice(4, 6)))
        },
        encryptBlock: function(t, e) {
            this._des1.encryptBlock(t, e),
            this._des2.decryptBlock(t, e),
            this._des3.encryptBlock(t, e)
        },
        decryptBlock: function(t, e) {
            this._des3.decryptBlock(t, e),
            this._des2.encryptBlock(t, e),
            this._des1.decryptBlock(t, e)
        },
        keySize: 6,
        ivSize: 2,
        blockSize: 2
    }),
    t.TripleDES = n._createHelper(o)
}(),
define("CryptoJS/tripledes", function() {}),
CryptoJS.mode.ECB = function() {
    var t = CryptoJS.lib.BlockCipherMode.extend();
    return t.Encryptor = t.extend({
        processBlock: function(t, e) {
            this._cipher.encryptBlock(t, e)
        }
    }),
    t.Decryptor = t.extend({
        processBlock: function(t, e) {
            this._cipher.decryptBlock(t, e)
        }
    }),
    t
}(),
define("CryptoJS/mode-ecb", ["CryptoJS/tripledes"], function() {}),
define("DES", [], function() {
    return {
        desEncrypt: function(t) {
            var e = CryptoJS.enc.Base64.parse("fHSBuVaBsIJ0")
              , n = CryptoJS.DES.encrypt(t, e, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            return n.toString()
        }
    }
}),
define("modules-platform-path/login/login.viewmodel", ["ko", "underscore.string", "components-path/loading/main", "components-path/modal/main", "modules-services-path/agent.service", "modules-common-path/action.util", "modules-common-path/check.util", "modules-common-path/regexp.util", "modules-common-path/modal.util", "md5", "CryptoJS/mode-ecb", "CryptoJS/tripledes", "DES"], function(e, c, l, a, u, h, d, p, f, t, n, o, m) {
    return function() {
        var s = this;
        s.accountInitText = "",
        s.passwordInitText = "",
        s.codeInitText = "",
        s.account = e.observable(s.accountInitText),
        s.password = e.observable(s.passwordInitText),
        s.code = e.observable(s.codeInitText),
        s.typepassword = e.observable(!1),
        s.validateCodeUrl = e.observable(h.path("validateCode", "agent", {
            _r: Math.random()
        })),
        s.errorMsg = e.observable(""),
        s.oemConfig = globalConfig.oemConfig && JSON.parse(globalConfig.oemConfig) || {},
        s.changeValidateCode = function() {
            s.validateCodeUrl(h.path("validateCode", "agent", {
                _r: Math.random()
            }))
        }
        ,
        s.passwordForgot = function() {
            a.showModalById(null, "login-modal-password_forgot")
        }
        ,
        s.closeModal = function() {
            a.hideModal(null)
        }
        ,
        s.closePasswordForgotModal = function() {
            s.closeModal()
        }
        ,
        s.vcodeKeyDownDeal = function(t) {
            13 === t.keyCode && s.login()
        }
        ,
        s.login = function() {
            var t, e, n, o, r, i, a = $("#account").val(), a = c.trim(a);
            s.errorMsg(""),
            c.isBlank(a) || a == s.accountInitText ? s.errorMsg("账号不能为空") : (i = $("#password").val(),
            i = c.trim(i),
            c.isBlank(i) || i == s.passwordInitText ? s.errorMsg("密码不能为空") : (t = hex_md5(i),
            e = m.desEncrypt(a),
            n = m.desEncrypt(t + a),
            o = c.trim(s.code()),
            c.isBlank(o) || o == s.codeInitText ? s.errorMsg("验证码不能为空") : 4 < o.length || !d.isNumber(o) ? s.errorMsg("验证码格式不正确") : (r = l.showLoading("login-wrap-from"),
            u.agentLogin({
                account: e,
                password: n,
                code: o
            }, function(t) {
                l.hideLoading(r, function() {
                    return t && "000000" == t.retCode ? void h.redirect("index", "group") : (s.code(""),
                    s.validateCodeUrl(h.path("validateCode", "agent", {
                        _r: Math.random()
                    })),
                    t ? "110000" == t.retCode ? (s.errorMsg("您输入的账号不存在，请核实后再登录"),
                    void console.log("您输入的账号不存在，请核实后再登录")) : "900001" == t.retCode ? void s.errorMsg("验证码验证失败") : "900002" == t.retCode ? void s.errorMsg("账号或密码错误") : "910003" == t.retCode ? void s.errorMsg("当前账户无登录权限") : void s.errorMsg("登录失败，请稍候重试") : void s.errorMsg("登录失败，请稍候重试"))
                })
            }, function() {
                l.hideLoading(r, function() {
                    s.code(""),
                    s.validateCodeUrl(h.path("validateCode", "agent", {
                        _r: Math.random()
                    })),
                    s.errorMsg("登录失败，请稍候重试")
                })
            }))))
        }
        ,
        s.joinUs = function() {}
        ,
        s.companyName = e.observable(""),
        s.comContactName = e.observable(""),
        s.comContactPhone = e.observable(""),
        s.comEmail = e.observable(""),
        s.addPartnerErrorMsg = e.observable("");
        var t = {
            ALL: {
                state: "0",
                stateDesc: "所有"
            },
            BEIJING: {
                state: "1",
                stateDesc: "北京市"
            },
            SHANGHAI: {
                state: "2",
                stateDesc: "上海市"
            },
            ANHUI: {
                state: "3",
                stateDesc: "安徽省"
            },
            ZHEJIANG: {
                state: "4",
                stateDesc: "浙江省"
            }
        };
        s.provincesList = e.observableArray([t.ALL, t.BEIJING, t.SHANGHAI, t.ANHUI, t.ZHEJIANG]),
        s.currentProvince = e.observable(s.provincesList()[0].state),
        s.showPartnerModal = function() {
            s.companyName(""),
            s.comContactName(""),
            s.comContactPhone(""),
            s.comEmail(""),
            s.currentProvince(s.provincesList()[0].state),
            s.addPartnerErrorMsg(""),
            a.showModalById(null, "home-tip-partner")
        }
        ,
        s.toApplyForPartner = function() {
            var t = s.companyName()
              , n = s.comContactName()
              , o = s.comContactPhone()
              , r = s.comEmail()
              , i = s.currentProvince();
            c.isBlank(t) ? s.addPartnerErrorMsg("公司名称不能为空") : c.isBlank(n) ? s.addPartnerErrorMsg("公司联系人名称不能为空") : c.isBlank(o) ? s.addPartnerErrorMsg("联系电话不能为空") : p.phoneRegexp(o) ? (s.addPartnerErrorMsg(""),
            a.hideModal(null, function() {
                var e = l.showLoading(null);
                u.applyForPartner({
                    companyName: t,
                    comContactName: n,
                    comContactPhone: o,
                    comEmail: r,
                    partnerProvince: i
                }, function(t) {
                    l.hideLoading(e, function() {
                        t && "000000" == t.retCode ? f.showTipModalById(null, "apply-partner-tip-success") : f.showTipModalById(null, "cm-tip-fail")
                    })
                }, function() {
                    f.showTipModalById(null, "cm-tip-fail")
                })
            })) : s.addPartnerErrorMsg("手机电话格式不正确")
        }
        ,
        s.showHelp = function() {
            return h.path("faq", "home")
        }
        ,
        s.defer = function() {
            $.get("../homehelp/defer", function(t) {
                console.log(t),
                s.defer()
            })
        }
    }
}),
define("modules-platform-path/caiyin_customer.viewmodel", ["ko", "jquery", "underscore.string", "components-path/loading/main", "components-path/modal/main", "modules-common-path/action.util"], function(n, t, e, o, r, i) {
    return function() {
        var t, e = this;
        e.oemConfig = globalConfig.oemConfig && JSON.parse(globalConfig.oemConfig) || {},
        e.gotoCaiyinContact = function() {
            i.redirect("contact", "home")
        }
        ,
        e.gotoCaiyinFaq = function() {
            i.redirect("faq", "home")
        }
        ,
        e.gotoCaiyinMsg = function() {
            i.redirect("msg", "home")
        }
        ,
        e.gotoCaiyinAdvice = function() {
            i.redirect("advice", "home")
        }
        ,
        e.curCustomerMenuType = n.observable(""),
        e.iscurCustomerMenuSelected = function(t) {
            return e.curCustomerMenuType() === t
        }
        ,
        e.getCustomerMenuUrl = function(t) {
            switch (t) {
            case "1":
                return i.path("msg", "home");
            case "2":
                return i.path("advice", "home");
            case "3":
                return i.path("contact", "home");
            case "4":
                return i.path("faq", "home")
            }
        }
        ,
        e.gotoCaiyinCustomer = function(t) {
            e.curCustomerMenuType(t),
            function(t) {
                switch (t) {
                case "1":
                    e.gotoCaiyinMsg();
                    break;
                case "2":
                    e.gotoCaiyinAdvice();
                    break;
                case "3":
                    e.gotoCaiyinContact();
                    break;
                case "4":
                    e.gotoCaiyinFaq()
                }
            }(t)
        }
        ,
        window.customer_menu && (t = window.customer_menu.menuType,
        e.curCustomerMenuType(t))
    }
}),
require(["ko", "jquery", "underscore", "modules-platform-path/login/login.viewmodel", "modules-platform-path/caiyin_customer.viewmodel"], function(t, e, n, o, r) {
    t.applyBindings(new o, document.getElementById("login-wrap-root")),
    t.applyBindings(new r, document.getElementById("customer-service-wrap-root"))
}),
define("modules/platform/login/login.main", function() {});
