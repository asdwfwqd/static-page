! function() {
  "use strict";
  var l, u, s, i, d, t;

  function h() {
    throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
  }! function() {
    var i = function(e) {
      this.w = e || []
    };
    i.prototype.set = function(e) {
      this.w[e] = !0
    }, i.prototype.encode = function() {
      for (var e = [], t = 0; t < this.w.length; t++) this.w[t] && (e[Math.floor(t / 6)] ^= 1 << t % 6);
      for (t = 0; t < e.length; t++) e[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(e[t] || 0);
      return e.join("") + "~"
    };
    var r = new i;

    function u(e) {
      r.set(e)
    }
    var a = function(e) {
        e = o(e), e = new i(e);
        for (var t = r.w.slice(), n = 0; n < e.w.length; n++) t[n] = t[n] || e.w[n];
        return new i(t).encode()
      },
      o = function(e) {
        return e = e.get(Lt), c(e) || (e = []), e
      },
      s = function(e) {
        return "function" == typeof e
      },
      c = function(e) {
        return "[object Array]" == Object.prototype.toString.call(Object(e))
      },
      n = function(e) {
        return null != e && -1 < (e.constructor + "").indexOf("String")
      },
      l = function(e, t) {
        return 0 == e.indexOf(t)
      },
      d = function(e) {
        return e ? e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
      },
      h = function() {
        for (var e = R.navigator.userAgent + (A.cookie ? A.cookie : "") + (A.referrer ? A.referrer : ""), t = e.length, n = R.history.length; 0 < n;) e += n-- ^ t++;
        return [ve() ^ 2147483647 & Br(e), Math.round((new Date).getTime() / 1e3)].join(".")
      },
      p = function(e) {
        var t = A.createElement("img");
        return t.width = 1, t.height = 1, t.src = e, t
      },
      f = function() {},
      g = function(e) {
        return encodeURIComponent instanceof Function ? encodeURIComponent(e) : (u(28), e)
      },
      v = function(e, t, n, r) {
        try {
          e.addEventListener ? e.addEventListener(t, n, !!r) : e.attachEvent && e.attachEvent("on" + t, n)
        } catch (e) {
          u(27)
        }
      },
      m = /^[\w\-:/.?=&%!]+$/,
      y = function(e, t, n) {
        e && (n ? (n = "", t && m.test(t) && (n = ' id="' + t + '"'), m.test(e) && A.write("<script" + n + ' src="' + e + '"><\/script>')) : ((n = A.createElement("script")).type = "text/javascript", n.async = !0, n.src = e, t && (n.id = t), (e = A.getElementsByTagName("script")[0]).parentNode.insertBefore(n, e)))
      },
      w = function(e, t) {
        return b(A.location[t ? "href" : "search"], e)
      },
      b = function(e, t) {
        return (e = e.match("(?:&|#|\\?)" + g(t).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == e.length ? e[1] : ""
      },
      k = function() {
        var e = "" + A.location.hostname;
        return 0 == e.indexOf("www.") ? e.substring(4) : e
      },
      E = function(e, t) {
        var n = e.indexOf(t);
        return (5 == n || 6 == n) && ("/" == (e = e.charAt(n + t.length)) || "?" == e || "" == e || ":" == e)
      },
      S = function(e, t) {
        if (1 == t.length && null != t[0] && "object" == typeof t[0]) return t[0];
        for (var n = {}, r = Math.min(e.length + 1, t.length), i = 0; i < r; i++) {
          if ("object" == typeof t[i]) {
            for (var o in t[i]) t[i].hasOwnProperty(o) && (n[o] = t[i][o]);
            break
          }
          i < e.length && (n[e[i]] = t[i])
        }
        return n
      },
      x = function() {
        this.keys = [], this.values = {}, this.m = {}
      };
    x.prototype.set = function(e, t, n) {
      this.keys.push(e), n ? this.m[":" + e] = t : this.values[":" + e] = t
    }, x.prototype.get = function(e) {
      return this.m.hasOwnProperty(":" + e) ? this.m[":" + e] : this.values[":" + e]
    }, x.prototype.map = function(e) {
      for (var t = 0; t < this.keys.length; t++) {
        var n = this.keys[t],
          r = this.get(n);
        r && e(n, r)
      }
    };
    var C, T, L, O, _, R = window,
      A = document,
      q = function(e, t) {
        return setTimeout(e, t)
      },
      I = window,
      j = document,
      D = function(e) {
        var t = I._gaUserPrefs;
        if (t && t.ioo && t.ioo() || e && !0 === I["ga-disable-" + e]) return !0;
        try {
          var n = I.external;
          if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs) return !0
        } catch (e) {}
        e = [], t = j.cookie.split(";"), n = /^\s*AMP_TOKEN=\s*(.*?)\s*$/;
        for (var r = 0; r < t.length; r++) {
          var i = t[r].match(n);
          i && e.push(i[1])
        }
        for (t = 0; t < e.length; t++)
          if ("$OPT_OUT" == decodeURIComponent(e[t])) return !0;
        return !1
      },
      N = function(e) {
        var t = [],
          n = A.cookie.split(";");
        e = new RegExp("^\\s*" + e + "=\\s*(.*?)\\s*$");
        for (var r = 0; r < n.length; r++) {
          var i = n[r].match(e);
          i && t.push(i[1])
        }
        return t
      },
      F = function(e, t, n, r, i, o) {
        if (!(i = !D(i) && !(M.test(A.location.hostname) || "/" == n && U.test(r)))) return !1;
        if (t && 1200 < t.length && (t = t.substring(0, 1200)), n = e + "=" + t + "; path=" + n + "; ", o && (n += "expires=" + new Date((new Date).getTime() + o).toGMTString() + "; "), r && "none" !== r && (n += "domain=" + r + ";"), r = A.cookie, A.cookie = n, !(r = r != A.cookie)) e: {
          for (e = N(e), r = 0; r < e.length; r++)
            if (t == e[r]) {
              r = !0;
              break e
            } r = !1
        }
        return r
      },
      P = function(e) {
        return encodeURIComponent ? encodeURIComponent(e).replace(/\(/g, "%28").replace(/\)/g, "%29") : e
      },
      U = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
      M = /(^|\.)doubleclick\.net$/i,
      B = /^.*Version\/?(\d+)[^\d].*$/i,
      $ = function() {
        if (void 0 !== R.__ga4__) return R.__ga4__;
        if (void 0 === C) {
          var e = R.navigator.userAgent;
          if (e) {
            var t = e;
            try {
              t = decodeURIComponent(e)
            } catch (e) {}(e = !(0 <= t.indexOf("Chrome") || 0 <= t.indexOf("CriOS") || !(0 <= t.indexOf("Safari/") || 0 <= t.indexOf("Safari,")))) && (e = 11 <= ((t = B.exec(t)) ? Number(t[1]) : -1)), C = e
          } else C = !1
        }
        return C
      },
      H = /^https?:\/\/[^/]*cdn\.ampproject\.org\//,
      G = [],
      V = function() {
        Nr.D([f])
      },
      z = function(e, t) {
        var n = N("AMP_TOKEN");
        return 1 < n.length ? (u(55), !1) : "$OPT_OUT" == (n = decodeURIComponent(n[0] || "")) || "$ERROR" == n || D(t) ? (u(62), !1) : H.test(A.referrer) || "$NOT_FOUND" != n ? void 0 !== _ ? (u(56), q(function() {
          e(_)
        }, 0), !0) : T ? (G.push(e), !0) : "$RETRIEVING" == n ? (u(57), q(function() {
          z(e, t)
        }, 1e4), !0) : (T = !0, n && "$" != n[0] || (Q("$RETRIEVING", 3e4), setTimeout(X, 3e4), n = ""), !!W(n, t) && (G.push(e), !0)) : (u(68), !1)
      },
      W = function(t, n, r) {
        if (!window.JSON) return u(58), !1;
        var e = R.XMLHttpRequest;
        if (!e) return u(59), !1;
        var i = new e;
        return "withCredentials" in i ? (i.open("POST", (r || "https://ampcid.google.com/v1/publisher:getClientId") + "?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM", !0), i.withCredentials = !0, i.setRequestHeader("Content-Type", "text/plain"), i.onload = function() {
          if (T = !1, 4 == i.readyState) {
            try {
              200 != i.status && (u(61), J("", "$ERROR", 3e4));
              var e = JSON.parse(i.responseText);
              e.optOut ? (u(63), J("", "$OPT_OUT", 31536e6)) : e.clientId ? J(e.clientId, e.securityToken, 31536e6) : !r && e.alternateUrl ? (L && clearTimeout(L), T = !0, W(t, n, e.alternateUrl)) : (u(64), J("", "$NOT_FOUND", 36e5))
            } catch (e) {
              u(65), J("", "$ERROR", 3e4)
            }
            i = null
          }
        }, e = {
          originScope: "AMP_ECID_GOOGLE"
        }, t && (e.securityToken = t), i.send(JSON.stringify(e)), L = q(function() {
          u(66), J("", "$ERROR", 3e4)
        }, 1e4), !0) : (u(60), !1)
      },
      X = function() {
        T = !1
      },
      Q = function(e, t) {
        if (void 0 === O) {
          O = "";
          for (var n = Mn(), r = 0; r < n.length; r++) {
            var i = n[r];
            if (F("AMP_TOKEN", encodeURIComponent(e), "/", i, "", t)) return void(O = i)
          }
        }
        F("AMP_TOKEN", encodeURIComponent(e), "/", O, "", t)
      },
      J = function(e, t, n) {
        for (L && clearTimeout(L), t && Q(t, n), _ = e, t = G, G = [], n = 0; n < t.length; n++) t[n](e)
      },
      K = function() {
        return (qe || "https:" == A.location.protocol ? "https:" : "http:") + "//www.google-analytics.com"
      },
      Y = function(e) {
        this.name = "len", this.message = e + "-8192"
      },
      Z = function(e, t, n) {
        if (n = n || f, t.length <= 2036) te(e, t, n);
        else {
          if (!(t.length <= 8192)) throw ie("len", t.length), new Y(t.length);
          re(e, t, n) || ne(e, t, n) || te(e, t, n)
        }
      },
      ee = function(e, t, n, r) {
        ne(e + "?" + t, "", r = r || f, n)
      },
      te = function(e, t, n) {
        var r = p(e + "?" + t);
        r.onload = r.onerror = function() {
          r.onload = null, r.onerror = null, n()
        }
      },
      ne = function(e, t, o, a) {
        var n = R.XMLHttpRequest;
        if (!n) return !1;
        var s = new n;
        return "withCredentials" in s && (e = e.replace(/^http:/, "https:"), s.open("POST", e, !0), s.withCredentials = !0, s.setRequestHeader("Content-Type", "text/plain"), s.onreadystatechange = function() {
          if (4 == s.readyState) {
            if (a) try {
              var e = s.responseText;
              if (e.length < 1) ie("xhr", "ver", "0"), o();
              else if ("1" != e.charAt(0)) ie("xhr", "ver", String(e.length)), o();
              else if (3 < a.count++) ie("xhr", "tmr", "" + a.count), o();
              else if (1 == e.length) o();
              else {
                var t = e.charAt(1);
                if ("d" == t) ee("https://stats.g.doubleclick.net/j/collect", a.U, a, o);
                else if ("g" == t) {
                  var n = "https://www.google.%/ads/ga-audiences".replace("%", "com");
                  te(n, a.google, o);
                  var r = e.substring(2);
                  if (r)
                    if (/^[a-z.]{1,6}$/.test(r)) {
                      var i = "https://www.google.%/ads/ga-audiences".replace("%", r);
                      te(i, a.google, f)
                    } else ie("tld", "bcc", r)
                } else ie("xhr", "brc", t), o()
              }
            } catch (e) {
              ie("xhr", "rsp"), o()
            } else o();
            s = null
          }
        }, s.send(t), !0)
      },
      re = function(e, t, n) {
        return !!R.navigator.sendBeacon && (!!R.navigator.sendBeacon(e, t) && (n(), !0))
      },
      ie = function(e, t, n) {
        1 <= 100 * Math.random() || D("?") || (e = ["t=error", "_e=" + e, "_v=j68", "sr=1"], t && e.push("_f=" + t), n && e.push("_m=" + g(n.substring(0, 100))), e.push("aip=1"), e.push("z=" + ve()), te("https://www.google-analytics.com/u/d", e.join("&"), f))
      },
      oe = function(e) {
        var t = R.gaData = R.gaData || {};
        return t[e] = t[e] || {}
      },
      ae = function() {
        this.M = []
      };

    function se(e) {
      if (100 != e.get(cn) && Br(Ee(e, zt)) % 1e4 >= 100 * Se(e, cn)) throw "abort"
    }

    function ce(e) {
      if (D(Ee(e, Jt))) throw "abort"
    }

    function le() {
      var e = A.location.protocol;
      if ("http:" != e && "https:" != e) throw "abort"
    }

    function ue(n) {
      try {
        R.navigator.sendBeacon ? u(42) : R.XMLHttpRequest && "withCredentials" in new R.XMLHttpRequest && u(40)
      } catch (e) {}
      n.set(Tt, a(n), !0), n.set(Be, Se(n, Be) + 1);
      var r = [];
      be.map(function(e, t) {
        t.F && (null != (e = n.get(e)) && e != t.defaultValue && ("boolean" == typeof e && (e *= 1), r.push(t.F + "=" + g("" + e))))
      }), r.push("z=" + me()), n.set(Pe, r.join("&"), !0)
    }

    function de(e) {
      var t = Ee(e, wn) || K() + "/collect",
        n = e.get(kn),
        r = Ee(e, Me);
      if (!r && e.get(Ue) && (r = "beacon"), n) ee(t, Ee(e, Pe), n, e.get(Fe));
      else if (r) {
        n = r, r = Ee(e, Pe);
        var i = e.get(Fe);
        i = i || f, "image" == n ? te(t, r, i) : "xhr" == n && ne(t, r, i) || "beacon" == n && re(t, r, i) || Z(t, r, i)
      } else Z(t, Ee(e, Pe), e.get(Fe));
      t = e.get(Jt), n = (t = oe(t)).hitcount, t.hitcount = n ? n + 1 : 1, t = e.get(Jt), delete oe(t).pending_experiments, e.set(Fe, f, !0)
    }

    function he(e) {
      (R.gaData = R.gaData || {}).expId && e.set(mt, (R.gaData = R.gaData || {}).expId), (R.gaData = R.gaData || {}).expVar && e.set(yt, (R.gaData = R.gaData || {}).expVar);
      var t = e.get(Jt);
      if (t = oe(t).pending_experiments) {
        var n = [];
        for (r in t) t.hasOwnProperty(r) && t[r] && n.push(encodeURIComponent(r) + "." + encodeURIComponent(t[r]));
        var r = n.join("!")
      } else r = void 0;
      r && e.set(wt, r, !0)
    }

    function pe() {
      if (R.navigator && "preview" == R.navigator.loadPurpose) throw "abort"
    }

    function fe(e) {
      var t = R.gaDevIds;
      c(t) && 0 != t.length && e.set("&did", t.join(","), !0)
    }

    function ge(e) {
      if (!e.get(Jt)) throw "abort"
    }
    ae.prototype.add = function(e) {
      this.M.push(e)
    }, ae.prototype.D = function(e) {
      try {
        for (var t = 0; t < this.M.length; t++) {
          var n = e.get(this.M[t]);
          n && s(n) && n.call(R, e)
        }
      } catch (e) {}(t = e.get(Fe)) != f && s(t) && (e.set(Fe, f, !0), setTimeout(t, 10))
    };
    var ve = function() {
        return Math.round(2147483647 * Math.random())
      },
      me = function() {
        try {
          var e = new Uint32Array(1);
          return R.crypto.getRandomValues(e), 2147483647 & e[0]
        } catch (e) {
          return ve()
        }
      };

    function ye(e) {
      var t = Se(e, St);
      500 <= t && u(15);
      var n = Ee(e, Ne);
      if ("transaction" != n && "item" != n) {
        n = Se(e, Ct);
        var r = (new Date).getTime(),
          i = Se(e, xt);
        if (0 == i && e.set(xt, r), 0 < (i = Math.round(2 * (r - i) / 1e3)) && (n = Math.min(n + i, 20), e.set(xt, r)), n <= 0) throw "abort";
        e.set(Ct, --n)
      }
      e.set(St, ++t)
    }
    var we = function() {
        this.data = new x
      },
      be = new x,
      ke = [];
    we.prototype.get = function(e) {
      var t = Te(e),
        n = this.data.get(e);
      return t && null == n && (n = s(t.defaultValue) ? t.defaultValue() : t.defaultValue), t && t.Z ? t.Z(this, e, n) : n
    };
    var Ee = function(e, t) {
        return null == (e = e.get(t)) ? "" : "" + e
      },
      Se = function(e, t) {
        return null == (e = e.get(t)) || "" === e ? 0 : 1 * e
      };
    we.prototype.set = function(e, t, n) {
      if (e)
        if ("object" == typeof e)
          for (var r in e) e.hasOwnProperty(r) && xe(this, r, e[r], n);
        else xe(this, e, t, n)
    };
    var xe = function(e, t, n, r) {
        if (null != n) switch (t) {
          case Jt:
            vr.test(n)
        }
        var i = Te(t);
        i && i.o ? i.o(e, t, n, r) : e.data.set(t, n, r)
      },
      Ce = function(e, t, n, r, i) {
        this.name = e, this.F = t, this.Z = r, this.o = i, this.defaultValue = n
      },
      Te = function(e) {
        var t = be.get(e);
        if (!t)
          for (var n = 0; n < ke.length; n++) {
            var r = ke[n],
              i = r[0].exec(e);
            if (i) {
              t = r[1](i), be.set(t.name, t);
              break
            }
          }
        return t
      },
      Le = function(e, t, n, r, i) {
        return e = new Ce(e, t, n, r, i), be.set(e.name, e), e.name
      },
      e = function(e, t) {
        ke.push([new RegExp("^" + e + "$"), t])
      },
      t = function(e, t, n) {
        return Le(e, t, n, void 0, Oe)
      },
      Oe = function() {},
      _e = n(window.GoogleAnalyticsObject) && d(window.GoogleAnalyticsObject) || "ga",
      Re = /^(?:utma\.)?\d+\.\d+$/,
      Ae = /^amp-[\w.-]{22,64}$/,
      qe = !1,
      Ie = t("apiVersion", "v"),
      je = t("clientVersion", "_v");
    Le("anonymizeIp", "aip");
    var De = Le("adSenseId", "a"),
      Ne = Le("hitType", "t"),
      Fe = Le("hitCallback"),
      Pe = Le("hitPayload");
    Le("nonInteraction", "ni"), Le("currencyCode", "cu"), Le("dataSource", "ds");
    var Ue = Le("useBeacon", void 0, !1),
      Me = Le("transport");
    Le("sessionControl", "sc", ""), Le("sessionGroup", "sg"), Le("queueTime", "qt");
    var Be = Le("_s", "_s");
    Le("screenName", "cd");
    var $e = Le("location", "dl", ""),
      He = Le("referrer", "dr"),
      Ge = Le("page", "dp", "");
    Le("hostname", "dh");
    var Ve = Le("language", "ul"),
      ze = Le("encoding", "de");
    Le("title", "dt", function() {
      return A.title || void 0
    }), e("contentGroup([0-9]+)", function(e) {
      return new Ce(e[0], "cg" + e[1])
    });
    var We = Le("screenColors", "sd"),
      Xe = Le("screenResolution", "sr"),
      Qe = Le("viewportSize", "vp"),
      Je = Le("javaEnabled", "je"),
      Ke = Le("flashVersion", "fl");
    Le("campaignId", "ci"), Le("campaignName", "cn"), Le("campaignSource", "cs"), Le("campaignMedium", "cm"), Le("campaignKeyword", "ck"), Le("campaignContent", "cc");
    var Ye = Le("eventCategory", "ec"),
      Ze = Le("eventAction", "ea"),
      et = Le("eventLabel", "el"),
      tt = Le("eventValue", "ev"),
      nt = Le("socialNetwork", "sn"),
      rt = Le("socialAction", "sa"),
      it = Le("socialTarget", "st"),
      ot = Le("l1", "plt"),
      at = Le("l2", "pdt"),
      st = Le("l3", "dns"),
      ct = Le("l4", "rrt"),
      lt = Le("l5", "srt"),
      ut = Le("l6", "tcp"),
      dt = Le("l7", "dit"),
      ht = Le("l8", "clt"),
      pt = Le("timingCategory", "utc"),
      ft = Le("timingVar", "utv"),
      gt = Le("timingLabel", "utl"),
      vt = Le("timingValue", "utt");
    Le("appName", "an"), Le("appVersion", "av", ""), Le("appId", "aid", ""), Le("appInstallerId", "aiid", ""), Le("exDescription", "exd"), Le("exFatal", "exf");
    var mt = Le("expId", "xid"),
      yt = Le("expVar", "xvar"),
      wt = Le("exp", "exp"),
      bt = Le("_utma", "_utma"),
      kt = Le("_utmz", "_utmz"),
      Et = Le("_utmht", "_utmht"),
      St = Le("_hc", void 0, 0),
      xt = Le("_ti", void 0, 0),
      Ct = Le("_to", void 0, 20);
    e("dimension([0-9]+)", function(e) {
      return new Ce(e[0], "cd" + e[1])
    }), e("metric([0-9]+)", function(e) {
      return new Ce(e[0], "cm" + e[1])
    }), Le("linkerParam", void 0, void 0, function(e) {
      var t = e.get(zt),
        n = e.get(dn) || "";
      if (t = "_ga=2." + g(Jn(n + t, 0) + "." + n + "-" + t), (n = e.get(fn)) && e.get(yn)) {
        var r = Se(e, gn);
        e = 1e3 * r + Se(e, vn) <= (new Date).getTime() ? (u(76), "") : (u(44), "&_gac=1." + g([Jn(n, 0), r, n].join(".")))
      } else e = "";
      return t + e
    }, Oe);
    var Tt = Le("usage", "_u"),
      Lt = Le("_um");
    Le("forceSSL", void 0, void 0, function() {
      return qe
    }, function(e, t, n) {
      u(34), qe = !!n
    });
    var Ot = Le("_j1", "jid"),
      _t = Le("_j2", "gjid");
    e("\\&(.*)", function(e) {
      var n, r, t = new Ce(e[0], e[1]),
        i = (n = e[0].substring(1), be.map(function(e, t) {
          t.F == n && (r = t)
        }), r && r.name);
      return i && (t.Z = function(e) {
        return e.get(i)
      }, t.o = function(e, t, n, r) {
        e.set(i, n, r)
      }, t.F = void 0), t
    });
    var Rt = t("_oot"),
      At = Le("previewTask"),
      qt = Le("checkProtocolTask"),
      It = Le("validationTask"),
      jt = Le("checkStorageTask"),
      Dt = Le("historyImportTask"),
      Nt = Le("samplerTask"),
      Ft = Le("_rlt"),
      Pt = Le("buildHitTask"),
      Ut = Le("sendHitTask"),
      Mt = Le("ceTask"),
      Bt = Le("devIdTask"),
      $t = Le("timingTask"),
      Ht = Le("displayFeaturesTask"),
      Gt = Le("customTask"),
      Vt = t("name"),
      zt = t("clientId", "cid"),
      Wt = t("clientIdTime"),
      Xt = t("storedClientId"),
      Qt = Le("userId", "uid"),
      Jt = t("trackingId", "tid"),
      Kt = t("cookieName", void 0, "_ga"),
      Yt = t("cookieDomain"),
      Zt = t("cookiePath", void 0, "/"),
      en = t("cookieExpires", void 0, 63072e3),
      tn = t("cookieUpdate", void 0, !0),
      nn = t("legacyCookieDomain"),
      rn = t("legacyHistoryImport", void 0, !0),
      on = t("storage", void 0, "cookie"),
      an = t("allowLinker", void 0, !1),
      sn = t("allowAnchor", void 0, !0),
      cn = t("sampleRate", "sf", 100),
      ln = t("siteSpeedSampleRate", void 0, 1),
      un = t("alwaysSendReferrer", void 0, !1),
      dn = t("_gid", "_gid"),
      hn = t("_gcn"),
      pn = t("useAmpClientId"),
      fn = t("_gclid"),
      gn = t("_gt"),
      vn = t("_ge", void 0, 7776e6),
      mn = t("_gclsrc"),
      yn = t("storeGac", void 0, !0),
      wn = Le("transportUrl"),
      bn = Le("_r", "_r"),
      kn = Le("_dp"),
      En = Le("allowAdFeatures", void 0, !0);

    function Sn(t, e, n, r) {
      e[t] = function() {
        try {
          return r && u(r), n.apply(this, arguments)
        } catch (e) {
          throw ie("exc", t, e && e.name), e
        }
      }
    }
    var xn = function() {
      this.V = 100, this.$ = this.fa = !1, this.oa = "detourexp", this.groups = 1
    };
    var Cn = function(e) {
        var t = {};
        if (Tn(t) || Ln(t)) {
          var n = t[ot];
          null == n || 1 / 0 == n || isNaN(n) || (0 < n ? (On(t, st), On(t, ut), On(t, lt), On(t, at), On(t, ct), On(t, dt), On(t, ht), q(function() {
            e(t)
          }, 10)) : v(R, "load", function() {
            Cn(e)
          }, !1))
        }
      },
      Tn = function(e) {
        var t = R.performance || R.webkitPerformance;
        if (!(t = t && t.timing)) return !1;
        var n = t.navigationStart;
        return 0 != n && (e[ot] = t.loadEventStart - n, e[st] = t.domainLookupEnd - t.domainLookupStart, e[ut] = t.connectEnd - t.connectStart, e[lt] = t.responseStart - t.requestStart, e[at] = t.responseEnd - t.responseStart, e[ct] = t.fetchStart - n, e[dt] = t.domInteractive - n, e[ht] = t.domContentLoadedEventStart - n, !0)
      },
      Ln = function(e) {
        if (R.top != R) return !1;
        var t = R.external,
          n = t && t.onloadT;
        return t && !t.isValidLoadTime && (n = void 0), 2147483648 < n && (n = void 0), 0 < n && t.setPageReadyTime(), null != n && (e[ot] = n, !0)
      },
      On = function(e, t) {
        var n = e[t];
        (isNaN(n) || 1 / 0 == n || n < 0) && (e[t] = void 0)
      },
      _n = function(o) {
        return function(e) {
          if ("pageview" == e.get(Ne) && !o.I) {
            o.I = !0;
            var t = (r = e, i = Math.min(Se(r, ln), 100), !(Br(Ee(r, zt)) % 100 >= i)),
              n = 0 < b(e.get($e), "gclid").length;
            (t || n) && Cn(function(e) {
              t && o.send("timing", e), n && o.send("adtiming", e)
            })
          }
          var r, i
        }
      },
      Rn = !1,
      An = function(e) {
        if ("cookie" == Ee(e, on)) {
          if (e.get(tn) || Ee(e, Xt) != Ee(e, zt)) {
            var t = 1e3 * Se(e, en);
            qn(e, zt, Kt, t)
          }
          if (qn(e, dn, hn, 864e5), e.get(yn)) {
            var n = e.get(fn);
            if (n) {
              var r = Math.min(Se(e, vn), 1e3 * Se(e, en));
              r = Math.min(r, 1e3 * Se(e, gn) + r - (new Date).getTime()), e.data.set(vn, r), t = {};
              var i = e.get(gn),
                o = e.get(mn),
                a = Bn(Ee(e, Zt)),
                s = Un(Ee(e, Yt)),
                c = Ee(e, Jt);
              o && "aw.ds" != o ? t && (t.ua = !0) : (n = ["1", i, P(n)].join("."), 0 < r && (t && (t.ta = !0), F("_gac_" + P(c), n, a, s, c, r))), Hn(t)
            }
          } else u(75);
          (e = "none" === Un(Ee(e, Yt))) && (e = A.location.hostname, e = M.test(e) || U.test(e)), e && u(30)
        }
      },
      qn = function(e, t, n, r) {
        var i = Dn(e, t);
        if (i) {
          n = Ee(e, n);
          var o = Bn(Ee(e, Zt)),
            a = Un(Ee(e, Yt)),
            s = Ee(e, Jt);
          if ("auto" != a) F(n, i, o, a, s, r) && (Rn = !0);
          else {
            u(32);
            for (var c = Mn(), l = 0; l < c.length; l++)
              if (a = c[l], e.data.set(Yt, a), i = Dn(e, t), F(n, i, o, a, s, r)) return void(Rn = !0);
            e.data.set(Yt, "auto")
          }
        }
      },
      In = function(e) {
        if ("cookie" == Ee(e, on) && !Rn && (An(e), !Rn)) throw "abort"
      },
      jn = function(e) {
        if (e.get(rn)) {
          var t = Ee(e, Yt),
            n = Ee(e, nn) || k(),
            r = Gn("__utma", n, t);
          r && (u(19), e.set(Et, (new Date).getTime(), !0), e.set(bt, r.R), (t = Gn("__utmz", n, t)) && r.hash == t.hash && e.set(kt, t.R))
        }
      },
      Dn = function(e, t) {
        t = P(Ee(e, t));
        var n = Un(Ee(e, Yt)).split(".").length;
        return 1 < (e = $n(Ee(e, Zt))) && (n += "-" + e), t ? ["GA1", n, t].join(".") : ""
      },
      Nn = function(e, t) {
        return Fn(t, Ee(e, Yt), Ee(e, Zt))
      },
      Fn = function(e, t, n) {
        if (!e || e.length < 1) u(12);
        else {
          for (var r = [], i = 0; i < e.length; i++) {
            var o = e[i],
              a = o.split("."),
              s = a.shift();
            (a = ("GA1" == s || "1" == s) && 1 < a.length ? (1 == (o = a.shift().split("-")).length && (o[1] = "1"), o[0] *= 1, o[1] *= 1, {
              H: o,
              s: a.join(".")
            }) : Ae.test(o) ? {
              H: [0, 0],
              s: o
            } : void 0) && r.push(a)
          }
          if (1 == r.length) return u(13), r[0].s;
          if (0 != r.length) return u(14), 1 == (r = Pn(r, Un(t).split(".").length, 0)).length ? r[0].s : (1 < (r = Pn(r, $n(n), 1)).length && u(41), r[0] && r[0].s);
          u(12)
        }
      },
      Pn = function(e, t, n) {
        for (var r, i = [], o = [], a = 0; a < e.length; a++) {
          var s = e[a];
          s.H[n] == t ? i.push(s) : null == r || s.H[n] < r ? (o = [s], r = s.H[n]) : s.H[n] == r && o.push(s)
        }
        return 0 < i.length ? i : o
      },
      Un = function(e) {
        return 0 == e.indexOf(".") ? e.substr(1) : e
      },
      Mn = function() {
        var e = [],
          t = k().split(".");
        if (4 == t.length) {
          var n = t[t.length - 1];
          if (parseInt(n, 10) == n) return ["none"]
        }
        for (n = t.length - 2; 0 <= n; n--) e.push(t.slice(n).join("."));
        return e.push("none"), e
      },
      Bn = function(e) {
        return e ? (1 < e.length && e.lastIndexOf("/") == e.length - 1 && (e = e.substr(0, e.length - 1)), 0 != e.indexOf("/") && (e = "/" + e), e) : "/"
      },
      $n = function(e) {
        return "/" == (e = Bn(e)) ? 1 : e.split("/").length
      },
      Hn = function(e) {
        e.ta && u(77), e.na && u(74), e.pa && u(73), e.ua && u(69)
      };

    function Gn(e, t, n) {
      "none" == t && (t = "");
      var r = [],
        i = N(e);
      e = "__utma" == e ? 6 : 2;
      for (var o = 0; o < i.length; o++) {
        var a = ("" + i[o]).split(".");
        a.length >= e && r.push({
          hash: a[0],
          R: i[o],
          O: a
        })
      }
      if (0 != r.length) return 1 == r.length ? r[0] : Vn(t, r) || Vn(n, r) || Vn(null, r) || r[0]
    }

    function Vn(e, t) {
      if (null == e) var n = e = 1;
      else n = Br(e), e = Br(l(e, ".") ? e.substring(1) : "." + e);
      for (var r = 0; r < t.length; r++)
        if (t[r].hash == n || t[r].hash == e) return t[r]
    }
    var zn = new RegExp(/^https?:\/\/([^\/:]+)/),
      Wn = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,
      Xn = /(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/;

    function Qn(e, t) {
      var n = new Date,
        r = R.navigator,
        i = r.plugins || [];
      for (e = [e, r.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + t], t = 0; t < i.length; ++t) e.push(i[t].description);
      return Br(e.join("."))
    }

    function Jn(e, t) {
      var n = new Date,
        r = R.navigator,
        i = n.getHours() + Math.floor((n.getMinutes() + t) / 60);
      return Br([e, r.userAgent, r.language || "", n.getTimezoneOffset(), n.getYear(), n.getDate() + Math.floor(i / 24), (24 + i) % 24, (60 + n.getMinutes() + t) % 60].join("."))
    }
    var Kn = function(e) {
      u(48), this.target = e, this.T = !1
    };
    Kn.prototype.ca = function(e, t) {
      if (e.tagName) {
        if ("a" == e.tagName.toLowerCase()) return void(e.href && (e.href = Yn(this, e.href, t)));
        if ("form" == e.tagName.toLowerCase()) return Zn(this, e)
      }
      if ("string" == typeof e) return Yn(this, e, t)
    };
    var Yn = function(e, t, n) {
        var r = Wn.exec(t);
        r && 3 <= r.length && (t = r[1] + (r[3] ? r[2] + r[3] : "")), (r = Xn.exec(t)) && 3 <= r.length && (t = r[1] + (r[3] ? r[2] + r[3] : "")), e = e.target.get("linkerParam");
        var i = t.indexOf("?");
        return r = t.indexOf("#"), n ? t += (-1 == r ? "#" : "&") + e : (n = -1 == i ? "?" : "&", t = -1 == r ? t + (n + e) : t.substring(0, r) + n + e + t.substring(r)), (t = t.replace(/&+_ga=/, "&_ga=")).replace(/&+_gac=/, "&_gac=")
      },
      Zn = function(e, t) {
        if (t && t.action)
          if ("get" == t.method.toLowerCase()) {
            e = e.target.get("linkerParam").split("&");
            for (var n = 0; n < e.length; n++) {
              var r = e[n].split("="),
                i = r[1];
              r = r[0];
              for (var o = t.childNodes || [], a = !1, s = 0; s < o.length; s++)
                if (o[s].name == r) {
                  o[s].setAttribute("value", i), a = !0;
                  break
                } a || ((o = A.createElement("input")).setAttribute("type", "hidden"), o.setAttribute("name", r), o.setAttribute("value", i), t.appendChild(o))
            }
          } else "post" == t.method.toLowerCase() && (t.action = Yn(e, t.action))
      };

    function er(e, t) {
      if (t == A.location.hostname) return !1;
      for (var n = 0; n < e.length; n++)
        if (e[n] instanceof RegExp) {
          if (e[n].test(t)) return !0
        } else if (0 <= t.indexOf(e[n])) return !0;
      return !1
    }

    function tr(e, t) {
      return t != Qn(e, 0) && t != Qn(e, -1) && t != Qn(e, -2) && t != Jn(e, 0) && t != Jn(e, -1) && t != Jn(e, -2)
    }
    Kn.prototype.S = function(r, i, e) {
      function t(e) {
        try {
          e = e || R.event;
          e: {
            var t = e.target || e.srcElement;
            for (e = 100; t && 0 < e;) {
              if (t.href && t.nodeName.match(/^a(?:rea)?$/i)) {
                var n = t;
                break e
              }
              t = t.parentNode, e--
            }
            n = {}
          }("http:" == n.protocol || "https:" == n.protocol) && er(r, n.hostname || "") && n.href && (n.href = Yn(o, n.href, i))
        } catch (e) {
          u(26)
        }
      }
      var o = this;
      this.T || (this.T = !0, v(A, "mousedown", t, !1), v(A, "keyup", t, !1)), e && v(A, "submit", function(e) {
        if ((e = (e = e || R.event).target || e.srcElement) && e.action) {
          var t = e.action.match(zn);
          t && er(r, t[1]) && Zn(o, e)
        }
      })
    };
    var nr, rr = /^(GTM|OPT)-[A-Z0-9]+$/,
      ir = /;_gaexp=[^;]*/g,
      or = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
      ar = /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,
      sr = function(e, t, n) {
        this.aa = t, (t = n) || (t = (t = Ee(e, Vt)) && "t0" != t ? pr.test(t) ? "_gat_" + P(Ee(e, Jt)) : "_gat_" + P(t) : "_gat"), this.Y = t, this.ra = null
      },
      cr = function(e, t, n) {
        !1 === t.get(En) || t.get(n) || ("1" == N(e.Y)[0] ? t.set(n, "", !0) : t.set(n, "" + ve(), !0))
      },
      lr = function(e, t) {
        ur(t) && F(e.Y, "1", t.get(Zt), t.get(Yt), t.get(Jt), 6e4)
      },
      ur = function(e) {
        return !!e.get(Ot) && e.get(En)
      },
      dr = function(e, t, n) {
        var r = new x,
          i = function(e) {
            Te(e).F && r.set(Te(e).F, t.get(e))
          };
        i(Ie), i(je), i(Jt), i(zt), i(Ot), 0 != n && 1 != n || (i(Qt), i(_t), i(dn)), r.set(Te(Tt).F, a(t));
        var o = "";
        return r.map(function(e, t) {
          o += g(e) + "=", o += g("" + t) + "&"
        }), o += "z=" + ve(), 0 == n ? o = e.aa + o : 1 == n ? o = "t=dc&aip=1&_r=3&" + o : 2 == n && (o = "t=sr&aip=1&_r=4&slf_rd=1&" + o), o
      },
      hr = function(e, t) {
        return null === e.ra && (e.ra = 1 === function(e) {
          var t, n = new xn;
          if (n.fa && n.$) return 0;
          if (n.$ = !0, e) {
            if (n.oa && void 0 !== e.get(n.oa)) return Se(e, n.oa);
            if (0 == e.get(ln)) return 0
          }
          return 0 == n.V ? 0 : (void 0 === t && (t = me()), 0 == t % n.V ? Math.floor(t / n.V) % n.groups + 1 : 0)
        }(t), e.ra && u(33)), e.ra
      },
      pr = /^gtm\d+$/,
      fr = function(e, t) {
        if (!(e = e.b).get("dcLoaded")) {
          var n, r = new i(o(e));
          r.set(29), e.set(Lt, r.w), (t = t || {})[Kt] && (n = P(t[Kt])),
            function(r, e) {
              var n = e.get(Pt);
              e.set(Pt, function(e) {
                cr(r, e, Ot), cr(r, e, _t);
                var t = n(e);
                return lr(r, e), t
              });
              var i = e.get(Ut);
              e.set(Ut, function(e) {
                var t = i(e);
                if (ur(e)) {
                  if ($() !== hr(r, e)) {
                    u(80);
                    var n = {
                      U: dr(r, e, 1),
                      google: dr(r, e, 2),
                      count: 0
                    };
                    ee("https://stats.g.doubleclick.net/j/collect", n.U, n)
                  } else p(dr(r, e, 0));
                  e.set(Ot, "", !0)
                }
                return t
              })
            }(t = new sr(e, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", n), e), e.set("dcLoaded", !0)
        }
      },
      gr = function(e) {
        if (!e.get("dcLoaded") && "cookie" == e.get(on)) {
          var t = new sr(e);
          if (cr(t, e, Ot), cr(t, e, _t), lr(t, e), ur(e)) {
            var n = $() !== hr(t, e);
            e.set(bn, 1, !0), n ? (u(79), e.set(wn, K() + "/j/collect", !0), e.set(kn, {
              U: dr(t, e, 1),
              google: dr(t, e, 2),
              count: 0
            }, !0)) : e.set(wn, K() + "/r/collect", !0)
          }
        }
      },
      vr = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
      mr = function(e) {
        function n(e, t) {
          i.b.data.set(e, t)
        }

        function t(e, t) {
          n(e, t), i.filters.add(e)
        }
        var r, i = this;
        this.b = new we, this.filters = new ae, n(Vt, e[Vt]), n(Jt, d(e[Jt])), n(Kt, e[Kt]), n(Yt, e[Yt] || k()), n(Zt, e[Zt]), n(en, e[en]), n(tn, e[tn]), n(nn, e[nn]), n(rn, e[rn]), n(an, e[an]), n(sn, e[sn]), n(cn, e[cn]), n(ln, e[ln]), n(un, e[un]), n(on, e[on]), n(Qt, e[Qt]), n(Wt, e[Wt]), n(pn, e[pn]), n(yn, e[yn]), n(Ie, 1), n(je, "j68"), t(Rt, ce), t(Gt, f), t(At, pe), t(qt, le), t(It, ge), t(jt, In), t(Dt, jn), t(Nt, se), t(Ft, ye), t(Mt, he), t(Bt, fe), t(Ht, gr), t(Pt, ue), t(Ut, de), t($t, _n(this)), wr(this.b), yr(this.b, e[zt]), this.b.set(De, (r = R.gaGlobal = R.gaGlobal || {}).hid = r.hid || ve()),
          function(e, t, n) {
            if (!nr) {
              var r = A.location.hash,
                i = R.name,
                o = /^#?gaso=([^&]*)/;
              (i = (r = (r = r && r.match(o) || i && i.match(o)) ? r[1] : N("GASO")[0] || "") && r.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (F("GASO", "" + r, n, t, e, 0), window._udo || (window._udo = t), window._utcp || (window._utcp = n), e = i[1], y("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (e ? "prefix=" + e + "&" : "") + ve(), "_gasojs")), nr = !0
            }
          }(this.b.get(Jt), this.b.get(Yt), this.b.get(Zt))
      },
      yr = function(e, t) {
        var n = Ee(e, Kt);
        if (e.data.set(hn, "_ga" == n ? "_gid" : n + "_gid"), "cookie" == Ee(e, on)) {
          if (Rn = !1, n = N(Ee(e, Kt)), !(n = Nn(e, n))) {
            n = Ee(e, Yt);
            var r = Ee(e, nn) || k();
            n = null != (n = Gn("__utma", r, n)) ? (u(10), n.O[1] + "." + n.O[2]) : void 0
          }
          if (n && (Rn = !0), r = n && !e.get(tn))
            if (2 != (r = n.split(".")).length) r = !1;
            else if (r = Number(r[1])) {
            var i = Se(e, en);
            r = r + i < (new Date).getTime() / 1e3
          } else r = !1;
          if (r && (n = void 0), n && (e.data.set(Xt, n), e.data.set(zt, n), n = N(Ee(e, hn)), (n = Nn(e, n)) && e.data.set(dn, n)), e.get(yn) && (n = e.get(fn), r = e.get(mn), !n || r && "aw.ds" != r)) {
            if (n = {}, A) {
              r = [], i = A.cookie.split(";");
              for (var o = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, a = 0; a < i.length; a++) {
                var s = i[a].match(o);
                s && r.push({
                  ja: s[1],
                  value: s[2]
                })
              }
              if (i = {}, r && r.length)
                for (o = 0; o < r.length; o++) "1" != (a = r[o].value.split("."))[0] || 3 != a.length ? n && (n.na = !0) : a[1] && (i[r[o].ja] ? n && (n.pa = !0) : i[r[o].ja] = [], i[r[o].ja].push({
                  timestamp: a[1],
                  qa: a[2]
                }));
              r = i
            } else r = {};
            r = r[Ee(e, Jt)], Hn(n), r && 0 != r.length && (n = r[0], e.data.set(gn, n.timestamp), e.data.set(fn, n.qa))
          }
        }
        if (e.get(tn)) e: if (r = w("_ga", e.get(sn)))
          if (e.get(an))
            if (-1 == (n = r.indexOf("."))) u(22);
            else {
              if (i = r.substring(0, n), n = (o = r.substring(n + 1)).indexOf("."), r = o.substring(0, n), o = o.substring(n + 1), "1" == i) {
                if (tr(n = o, r)) {
                  u(23);
                  break e
                }
              } else {
                if ("2" != i) {
                  u(22);
                  break e
                }
                if (i = "", n = 0 < (n = o.indexOf("-")) ? (i = o.substring(0, n), o.substring(n + 1)) : o.substring(1), tr(i + n, r)) {
                  u(53);
                  break e
                }
                i && (u(2), e.data.set(dn, i))
              }
              u(11), e.data.set(zt, n), (n = w("_gac", e.get(sn))) && ("1" != (n = n.split("."))[0] || 4 != n.length ? u(72) : tr(n[3], n[1]) ? u(71) : (e.data.set(fn, n[3]), e.data.set(gn, n[2]), u(70)))
            }
        else u(21);
        t && (u(9), e.data.set(zt, g(t))), e.get(zt) || ((t = (t = R.gaGlobal && R.gaGlobal.vid) && -1 != t.search(Re) ? t : void 0) ? (u(17), e.data.set(zt, t)) : (u(8), e.data.set(zt, h()))), e.get(dn) || (u(3), e.data.set(dn, h())), An(e)
      },
      wr = function(e) {
        var t = R.navigator,
          n = R.screen,
          r = A.location;
        if (e.set(He, function(e, t) {
            var n = A.referrer;
            if (/^(https?|android-app):\/\//i.test(n)) {
              if (e) return n;
              if (e = "//" + A.location.hostname, !E(n, e)) return t && (t = e.replace(/\./g, "-") + ".cdn.ampproject.org", E(n, t)) ? void 0 : n
            }
          }(e.get(un), e.get(pn))), r) {
          var i = r.pathname || "";
          "/" != i.charAt(0) && (u(31), i = "/" + i), e.set($e, r.protocol + "//" + r.hostname + i + r.search)
        }
        n && e.set(Xe, n.width + "x" + n.height), n && e.set(We, n.colorDepth + "-bit"), n = A.documentElement;
        var o = (i = A.body) && i.clientWidth && i.clientHeight,
          a = [];
        if (n && n.clientWidth && n.clientHeight && ("CSS1Compat" === A.compatMode || !o) ? a = [n.clientWidth, n.clientHeight] : o && (a = [i.clientWidth, i.clientHeight]), n = a[0] <= 0 || a[1] <= 0 ? "" : a.join("x"), e.set(Qe, n), e.set(Ke, function() {
            var e, t;
            if ((t = (t = R.navigator) ? t.plugins : null) && t.length)
              for (var n = 0; n < t.length && !e; n++) {
                var r = t[n]; - 1 < r.name.indexOf("Shockwave Flash") && (e = r.description)
              }
            if (!e) try {
              var i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
              e = i.GetVariable("$version")
            } catch (e) {}
            if (!e) try {
              i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = "WIN 6,0,21,0", i.AllowScriptAccess = "always", e = i.GetVariable("$version")
            } catch (e) {}
            if (!e) try {
              e = (i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
            } catch (e) {}
            return e && (i = e.match(/[\d]+/g)) && 3 <= i.length && (e = i[0] + "." + i[1] + " r" + i[2]), e || void 0
          }()), e.set(ze, A.characterSet || A.charset), e.set(Je, t && "function" == typeof t.javaEnabled && t.javaEnabled() || !1), e.set(Ve, (t && (t.language || t.browserLanguage) || "").toLowerCase()), e.data.set(fn, w("gclid", !0)), e.data.set(mn, w("gclsrc", !0)), e.data.set(gn, Math.round((new Date).getTime() / 1e3)), r && e.get(sn) && (t = A.location.hash)) {
          for (t = t.split(/[?&#]+/), r = [], n = 0; n < t.length; ++n)(l(t[n], "utm_id") || l(t[n], "utm_campaign") || l(t[n], "utm_source") || l(t[n], "utm_medium") || l(t[n], "utm_term") || l(t[n], "utm_content") || l(t[n], "gclid") || l(t[n], "dclid") || l(t[n], "gclsrc")) && r.push(t[n]);
          0 < r.length && (t = "#" + r.join("&"), e.set($e, e.get($e) + t))
        }
      };
    mr.prototype.get = function(e) {
      return this.b.get(e)
    }, mr.prototype.set = function(e, t) {
      this.b.set(e, t)
    };
    var br = {
      pageview: [Ge],
      event: [Ye, Ze, et, tt],
      social: [nt, rt, it],
      timing: [pt, ft, vt, gt]
    };
    mr.prototype.send = function(e) {
      if (!(arguments.length < 1)) {
        if ("string" == typeof e) var t = e,
          n = [].slice.call(arguments, 1);
        else t = e && e[Ne], n = arguments;
        t && ((n = S(br[t] || [], n))[Ne] = t, this.b.set(n, void 0, !0), this.filters.D(this.b), this.b.data.m = {})
      }
    }, mr.prototype.ma = function(e, t) {
      var n = this;
      Rr(e, n, t) || (qr(e, function() {
        Rr(e, n, t)
      }), Ar(String(n.get(Vt)), e, void 0, t, !0))
    };
    var kr, Er, Sr, xr, Cr = function(e) {
        return "prerender" != A.visibilityState && (e(), !0)
      },
      Tr = function(n) {
        if (!Cr(n)) {
          u(16);
          var r = !1,
            i = function() {
              if (!r && Cr(n)) {
                r = !0;
                var e = i,
                  t = A;
                t.removeEventListener ? t.removeEventListener("visibilitychange", e, !1) : t.detachEvent && t.detachEvent("onvisibilitychange", e)
              }
            };
          v(A, "visibilitychange", i)
        }
      },
      Lr = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
      Or = function(e) {
        if (s(e[0])) this.u = e[0];
        else {
          var t = Lr.exec(e[0]);
          if (null != t && 4 == t.length && (this.c = t[1] || "t0", this.K = t[2] || "", this.C = t[3], this.a = [].slice.call(e, 1), this.K || (this.A = "create" == this.C, this.i = "require" == this.C, this.g = "provide" == this.C, this.ba = "remove" == this.C), this.i && (3 <= this.a.length ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (n(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), t = e[1], e = e[2], !this.C) throw "abort";
          if (this.i && (!n(t) || "" == t)) throw "abort";
          if (this.g && (!n(t) || "" == t || !s(e))) throw "abort";
          if (_r(this.c) || _r(this.K)) throw "abort";
          if (this.g && "t0" != this.c) throw "abort"
        }
      };

    function _r(e) {
      return 0 <= e.indexOf(".") || 0 <= e.indexOf(":")
    }
    kr = new x, Sr = new x, xr = new x, Er = {
      ec: 45,
      ecommerce: 46,
      linkid: 47
    };
    var Rr = function(e, t, n) {
        t == Fr || t.get(Vt);
        var r = kr.get(e);
        return !!s(r) && (t.plugins_ = t.plugins_ || new x, t.plugins_.get(e) || t.plugins_.set(e, new r(t, n || {})), !0)
      },
      Ar = function(e, t, n, r, i) {
        if (!s(kr.get(t)) && !Sr.get(t)) {
          if (Er.hasOwnProperty(t) && u(Er[t]), rr.test(t)) {
            if (u(52), !(e = Fr.j(e))) return !0;
            r = {
              id: t,
              B: (n = r || {}).dataLayer || "dataLayer",
              ia: !!e.get("anonymizeIp"),
              sync: i,
              G: !1
            }, e.get("&gtm") == t && (r.G = !0);
            var o = String(e.get("name"));
            "t0" != o && (r.target = o), D(String(e.get("trackingId"))) || (r.clientId = String(e.get(zt)), r.ka = Number(e.get(Wt)), n = n.palindrome ? or : ir, n = (n = A.cookie.replace(/^|(; +)/g, ";").match(n)) ? n.sort().join("").substring(1) : void 0, r.la = n, r.qa = b(e.b.get($e) || "", "gclid")), e = r.B, n = (new Date).getTime(), R[e] = R[e] || [], n = {
              "gtm.start": n
            }, i || (n.event = "gtm.js"), R[e].push(n), n = function(e) {
              function t(e, t) {
                t && (n += "&" + e + "=" + g(t))
              }
              var n = "https://www.google-analytics.com/gtm/js?id=" + g(e.id);
              return "dataLayer" != e.B && t("l", e.B), t("t", e.target), t("cid", e.clientId), t("cidt", e.ka), t("gac", e.la), t("aip", e.ia), e.sync && t("m", "sync"), t("cycle", e.G), e.qa && t("gclid", e.qa), ar.test(A.referrer) && t("cb", String(ve())), n
            }(r)
          }!n && Er.hasOwnProperty(t) ? (u(39), n = t + ".js") : u(43), n && (n && 0 <= n.indexOf("/") || (n = (qe || "https:" == A.location.protocol ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + n), e = (r = Dr(n)).protocol, n = A.location.protocol, ("https:" == e || e == n || "http:" == e && "http:" == n) && jr(r) && (y(r.url, void 0, i), Sr.set(t, !0)))
        }
      },
      qr = function(e, t) {
        var n = xr.get(e) || [];
        n.push(t), xr.set(e, n)
      },
      Ir = function(e, t) {
        kr.set(e, t), t = xr.get(e) || [];
        for (var n = 0; n < t.length; n++) t[n]();
        xr.set(e, [])
      },
      jr = function(e) {
        var t = Dr(A.location.href);
        return !!l(e.url, "https://www.google-analytics.com/gtm/js?id=") || !(e.query || 0 <= e.url.indexOf("?") || 0 <= e.path.indexOf("://")) && (e.host == t.host && e.port == t.port || (t = "http:" == e.protocol ? 80 : 443, !("www.google-analytics.com" != e.host || (e.port || t) != t || !l(e.path, "/plugins/"))))
      },
      Dr = function(e) {
        function t(e) {
          var t = (e.hostname || "").split(":")[0].toLowerCase(),
            n = (e.protocol || "").toLowerCase();
          return n = 1 * e.port || ("http:" == n ? 80 : "https:" == n ? 443 : ""), e = e.pathname || "", l(e, "/") || (e = "/" + e), [t, "" + n, e]
        }
        var n = A.createElement("a");
        n.href = A.location.href;
        var r = (n.protocol || "").toLowerCase(),
          i = t(n),
          o = n.search || "",
          a = r + "//" + i[0] + (i[1] ? ":" + i[1] : "");
        return l(e, "//") ? e = r + e : l(e, "/") ? e = a + e : !e || l(e, "?") ? e = a + i[2] + (e || o) : e.split("/")[0].indexOf(":") < 0 && (e = a + i[2].substring(0, i[2].lastIndexOf("/")) + "/" + e), n.href = e, r = t(n), {
          protocol: (n.protocol || "").toLowerCase(),
          host: r[0],
          port: r[1],
          path: r[2],
          query: n.search || "",
          url: e || ""
        }
      },
      Nr = {
        ga: function() {
          Nr.f = []
        }
      };
    Nr.ga(), Nr.D = function(e) {
      var t = Nr.J.apply(Nr, arguments);
      for (t = Nr.f.concat(t), Nr.f = []; 0 < t.length && !Nr.v(t[0]) && (t.shift(), !(0 < Nr.f.length)););
      Nr.f = Nr.f.concat(t)
    }, Nr.J = function(e) {
      for (var t = [], n = 0; n < arguments.length; n++) try {
        var r = new Or(arguments[n]);
        r.g ? Ir(r.a[0], r.a[1]) : (r.i && (r.ha = Ar(r.c, r.a[0], r.X, r.W)), t.push(r))
      } catch (e) {}
      return t
    }, Nr.v = function(e) {
      try {
        if (e.u) e.u.call(R, Fr.j("t0"));
        else {
          var t = e.c == _e ? Fr : Fr.j(e.c);
          if (e.A) {
            if ("t0" == e.c && null === (t = Fr.create.apply(Fr, e.a))) return !0
          } else if (e.ba) Fr.remove(e.c);
          else if (t)
            if (e.i) {
              if (e.ha && (e.ha = Ar(e.c, e.a[0], e.X, e.W)), !Rr(e.a[0], t, e.W)) return !0
            } else if (e.K) {
            var n = e.C,
              r = e.a,
              i = t.plugins_.get(e.K);
            i[n].apply(i, r)
          } else t[e.C].apply(t, e.a)
        }
      } catch (e) {}
    };
    var Fr = function(e) {
      u(1), Nr.D.apply(Nr, [arguments])
    };
    Fr.h = {}, Fr.P = [], Fr.L = 0, Fr.answer = 42;
    var Pr = [Jt, Yt, Vt];
    Fr.create = function(e) {
      var t = S(Pr, [].slice.call(arguments));
      t[Vt] || (t[Vt] = "t0");
      var n = "" + t[Vt];
      if (Fr.h[n]) return Fr.h[n];
      e: {
        if (t[pn]) {
          if (u(67), t[on] && "cookie" != t[on]) {
            var r = !1;
            break e
          }
          if (void 0 !== _) t[zt] || (t[zt] = _);
          else {
            t: {
              r = String(t[Yt] || k());
              var i = String(t[Zt] || "/"),
                o = N(String(t[Kt] || "_ga"));
              if (!(r = Fn(o, r, i)) || Re.test(r)) r = !0;
              else if (0 == (r = N("AMP_TOKEN")).length) r = !0;
              else {
                if (1 == r.length && ("$RETRIEVING" == (r = decodeURIComponent(r[0])) || "$OPT_OUT" == r || "$ERROR" == r || "$NOT_FOUND" == r)) {
                  r = !0;
                  break t
                }
                r = !1
              }
            }
            if (r && z(V, String(t[Jt]))) {
              r = !0;
              break e
            }
          }
        }
        r = !1
      }
      return r ? null : (t = new mr(t), Fr.h[n] = t, Fr.P.push(t), t)
    }, Fr.remove = function(e) {
      for (var t = 0; t < Fr.P.length; t++)
        if (Fr.P[t].get(Vt) == e) {
          Fr.P.splice(t, 1), Fr.h[e] = null;
          break
        }
    }, Fr.j = function(e) {
      return Fr.h[e]
    }, Fr.getAll = function() {
      return Fr.P.slice(0)
    }, Fr.N = function() {
      "ga" != _e && u(49);
      var e = R[_e];
      if (!e || 42 != e.answer) {
        Fr.L = e && e.l, Fr.loaded = !0;
        var t = R[_e] = Fr;
        if (Sn("create", t, t.create), Sn("remove", t, t.remove), Sn("getByName", t, t.j, 5), Sn("getAll", t, t.getAll, 6), Sn("get", t = mr.prototype, t.get, 7), Sn("set", t, t.set, 4), Sn("send", t, t.send), Sn("requireSync", t, t.ma), Sn("get", t = we.prototype, t.get), Sn("set", t, t.set), "https:" != A.location.protocol && !qe) {
          e: {
            t = A.getElementsByTagName("script");
            for (var n = 0; n < t.length && n < 100; n++) {
              var r = t[n].src;
              if (r && 0 == r.indexOf("https://www.google-analytics.com/analytics")) {
                t = !0;
                break e
              }
            }
            t = !1
          }
          t && (qe = !0)
        }
        t = ((R.gaplugins = R.gaplugins || {}).Linker = Kn).prototype, Ir("linker", Kn), Sn("decorate", t, t.ca, 20), Sn("autoLink", t, t.S, 25), Ir("displayfeatures", fr), Ir("adfeatures", fr), e = e && e.q, c(e) ? Nr.D.apply(Fr, e) : u(50)
      }
    }, Fr.da = function() {
      for (var e = Fr.getAll(), t = 0; t < e.length; t++) e[t].get(Vt)
    };
    var Ur = Fr.N,
      Mr = R[_e];

    function Br(e) {
      var t, n = 1;
      if (e)
        for (n = 0, t = e.length - 1; 0 <= t; t--) {
          var r = e.charCodeAt(t);
          n = 0 != (r = 266338304 & (n = (n << 6 & 268435455) + r + (r << 14))) ? n ^ r >> 21 : n
        }
      return n
    }
    Mr && Mr.r ? Ur() : Tr(Ur), Tr(function() {
      Nr.D(["provide", "render", f])
    })
  }(window), l = window, u = document, s = "replace", i = function(e, t, n, r, i) {
      return e = e + "=" + (t = encodeURIComponent(t)[s](/\(/g, "%28")[s](/\)/g, "%29")) + "; path=" + (n || "/") + "; ", i && (e += "expires=" + new Date((new Date).getTime() + i).toGMTString() + "; "), r && "none" != r && (e += "domain=" + r + ";"), r = u.cookie, u.cookie = e, r != u.cookie
    }, d = function(a, t, n, r) {
      this.get = function() {
        for (var e = void 0, t = [], n = u.cookie.split(";"), r = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), i = 0; i < n.length; i++) {
          var o = n[i].match(r);
          o && t.push(decodeURIComponent(o[1][s](/%28/g, "(")[s](/%29/g, ")")))
        }
        for (n = 0; n < t.length; n++) t[n] && (e = t[n]);
        return e
      }, this.set = function(e) {
        return i(a, e, r, t, 1e3 * n)
      }, this.remove = function() {
        return i(a, "", r, t, -100)
      }
    }, t = function(e, t) {
      var n = void 0;
      if ("function" == typeof e.get && "function" == typeof e.set) {
        var r = (a = t || {}).hasOwnProperty("cookieName") ? a.cookieName : "_gali",
          i = a.hasOwnProperty("cookieTimeout") ? a.cookieTimeout : 30,
          o = a.hasOwnProperty("levels") ? a.levels : 3,
          a = e.get("cookieDomain"),
          s = e.get("cookiePath"),
          c = new d(r, a, i, s);
        n || (n = c.get()), n && e.set("&linkid", n),
          function(e) {
            var t = u.body;
            try {
              t.addEventListener ? t.addEventListener("click", e, !1) : t.attachEvent && t.attachEvent("onclick", e)
            } catch (e) {}
          }(function(e) {
            e = (e = e || l.event).target || e.srcElement;
            for (var t, n = 0; e && n <= o; n++) {
              if (t = e.getAttribute("id")) return void(100 < (e = t).length ? c.remove() : e ? c.set(e) : c.remove());
              e = e.parentElement
            }
            c.remove()
          })
      }
    },
    function() {
      l.gaplugins = l.gaplugins || {}, l.gaplugins.LinkId = t;
      var e = l.GoogleAnalyticsObject || "ga";
      l[e] = l[e] || function() {
        (l[e].q = l[e].q || []).push(arguments)
      }, l[e]("provide", "linkid", t)
    }(),
    function i(o, a, s) {
      function c(n, e) {
        if (!a[n]) {
          if (!o[n]) {
            if (!e && h) return h(n, !0);
            if (l) return l(n, !0);
            var t = new Error("Cannot find module '" + n + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          }
          var r = a[n] = {
            exports: {}
          };
          o[n][0].call(r.exports, function(e) {
            var t = o[n][1][e];
            return c(t || e)
          }, r, r.exports, i, o, a, s)
        }
        return a[n].exports
      }
      for (var l = h, e = 0; e < s.length; e++) c(s[e]);
      return c
    }({
      1: [function(e, t, n) {
        t.exports = {
          DEV_ID: "i5iSjo"
        }
      }, {}],
      2: [function(e, t, n) {
        function r(e, t) {
          if (window.addEventListener) {
            this.opts = o(t, {
              attributePrefix: "data-"
            }), this.tracker = e;
            var n = this.opts.attributePrefix,
              r = "[" + n + "event-category][" + n + "event-action]";
            this.delegate = i(document, r, "click", this.handleEventClicks.bind(this))
          }
        }
        var i = e("delegate"),
          o = e("../utilities").defaults,
          a = e("../provide");
        r.prototype.handleEventClicks = function(e) {
          var t = e.delegateTarget,
            n = this.opts.attributePrefix;
          this.tracker.send("event", {
            eventCategory: t.getAttribute(n + "event-category"),
            eventAction: t.getAttribute(n + "event-action"),
            eventLabel: t.getAttribute(n + "event-label"),
            eventValue: t.getAttribute(n + "event-value")
          })
        }, r.prototype.remove = function() {
          this.delegate.destroy(), this.delegate = null, this.tracker = null, this.opts = null
        }, a("eventTracker", r)
      }, {
        "../provide": 8,
        "../utilities": 9,
        delegate: 13
      }],
      3: [function(e, t, n) {
        function r(e, t) {
          window.matchMedia && (this.opts = a(t, {
            mediaQueryDefinitions: !1,
            mediaQueryChangeTemplate: this.changeTemplate,
            mediaQueryChangeTimeout: 1e3
          }), s(this.opts.mediaQueryDefinitions) && (this.opts.mediaQueryDefinitions = c(this.opts.mediaQueryDefinitions), this.tracker = e, this.changeListeners = [], this.processMediaQueries()))
        }

        function i(e) {
          return u[e] || (u[e] = window.matchMedia(e)), u[e]
        }
        var o = e("debounce"),
          a = e("../utilities").defaults,
          s = e("../utilities").isObject,
          c = e("../utilities").toArray,
          l = e("../provide"),
          u = {};
        r.prototype.processMediaQueries = function() {
          this.opts.mediaQueryDefinitions.forEach(function(e) {
            if (e.name && e.dimensionIndex) {
              var t = this.getMatchName(e);
              this.tracker.set("dimension" + e.dimensionIndex, t), this.addChangeListeners(e)
            }
          }.bind(this))
        }, r.prototype.getMatchName = function(e) {
          var t;
          return e.items.forEach(function(e) {
            i(e.media).matches && (t = e)
          }), t ? t.name : "(not set)"
        }, r.prototype.addChangeListeners = function(r) {
          r.items.forEach(function(e) {
            var t = i(e.media),
              n = o(function() {
                this.handleChanges(r)
              }.bind(this), this.opts.mediaQueryChangeTimeout);
            t.addListener(n), this.changeListeners.push({
              mql: t,
              fn: n
            })
          }.bind(this))
        }, r.prototype.handleChanges = function(e) {
          var t = this.getMatchName(e),
            n = this.tracker.get("dimension" + e.dimensionIndex);
          t !== n && (this.tracker.set("dimension" + e.dimensionIndex, t), this.tracker.send("event", e.name, "change", this.opts.mediaQueryChangeTemplate(n, t)))
        }, r.prototype.remove = function() {
          for (var e, t = 0; e = this.changeListeners[t]; t++) e.mql.removeListener(e.fn);
          this.changeListeners = null, this.tracker = null, this.opts = null
        }, r.prototype.changeTemplate = function(e, t) {
          return e + " => " + t
        }, l("mediaQueryTracker", r)
      }, {
        "../provide": 8,
        "../utilities": 9,
        debounce: 12
      }],
      4: [function(e, t, n) {
        function r(e, t) {
          window.addEventListener && (this.opts = i(t, {
            shouldTrackOutboundForm: this.shouldTrackOutboundForm
          }), this.tracker = e, this.delegate = o(document, "form", "submit", this.handleFormSubmits.bind(this)))
        }
        var i = e("../utilities").defaults,
          o = e("delegate"),
          a = e("../provide"),
          s = e("../utilities");
        r.prototype.handleFormSubmits = function(e) {
          var t = e.delegateTarget,
            n = t.getAttribute("action"),
            r = {
              transport: "beacon"
            };
          this.opts.shouldTrackOutboundForm(t) && (navigator.sendBeacon || (e.preventDefault(), r.hitCallback = s.withTimeout(function() {
            t.submit()
          })), this.tracker.send("event", "Outbound Form", "submit", n, r))
        }, r.prototype.shouldTrackOutboundForm = function(e) {
          var t = e.getAttribute("action");
          return t && 0 === t.indexOf("http") && t.indexOf(location.hostname) < 0
        }, r.prototype.remove = function() {
          this.delegate.destroy(), this.delegate = null, this.tracker = null, this.opts = null
        }, a("outboundFormTracker", r)
      }, {
        "../provide": 8,
        "../utilities": 9,
        delegate: 13
      }],
      5: [function(e, t, n) {
        function r(e, t) {
          window.addEventListener && (this.opts = i(t, {
            shouldTrackOutboundLink: this.shouldTrackOutboundLink
          }), this.tracker = e, this.delegate = o(document, "a", "click", this.handleLinkClicks.bind(this)))
        }
        var i = e("../utilities").defaults,
          o = e("delegate"),
          a = e("../provide");
        r.prototype.handleLinkClicks = function(e) {
          var t = e.delegateTarget;
          this.opts.shouldTrackOutboundLink(t) && (navigator.sendBeacon || (t.target = "_blank"), this.tracker.send("event", "Outbound Link", "click", t.href, {
            transport: "beacon"
          }))
        }, r.prototype.shouldTrackOutboundLink = function(e) {
          return e.hostname != location.hostname && 0 === e.protocol.indexOf("http")
        }, r.prototype.remove = function() {
          this.delegate.destroy(), this.delegate = null, this.tracker = null, this.opts = null
        }, a("outboundLinkTracker", r)
      }, {
        "../provide": 8,
        "../utilities": 9,
        delegate: 13
      }],
      6: [function(e, t, n) {
        function r(e, t) {
          if (window.addEventListener) {
            this.opts = i(t, {
              attributePrefix: "data-"
            }), this.tracker = e;
            var n = this.opts.attributePrefix,
              r = "[" + n + "social-network][" + n + "social-action][" + n + "social-target]";
            this.handleSocialClicks = this.handleSocialClicks.bind(this), this.addWidgetListeners = this.addWidgetListeners.bind(this), this.addTwitterEventHandlers = this.addTwitterEventHandlers.bind(this), this.handleTweetEvents = this.handleTweetEvents.bind(this), this.handleFollowEvents = this.handleFollowEvents.bind(this), this.handleLikeEvents = this.handleLikeEvents.bind(this), this.handleUnlikeEvents = this.handleUnlikeEvents.bind(this), this.delegate = o(document, r, "click", this.handleSocialClicks), "complete" != document.readyState ? window.addEventListener("load", this.addWidgetListeners) : this.addWidgetListeners()
          }
        }
        var i = e("../utilities").defaults,
          o = e("delegate"),
          a = e("../provide");
        r.prototype.addWidgetListeners = function() {
          window.FB && this.addFacebookEventHandlers(), window.twttr && this.addTwitterEventHandlers()
        }, r.prototype.handleSocialClicks = function(e) {
          var t = e.delegateTarget,
            n = this.opts.attributePrefix;
          this.tracker.send("social", {
            socialNetwork: t.getAttribute(n + "social-network"),
            socialAction: t.getAttribute(n + "social-action"),
            socialTarget: t.getAttribute(n + "social-target")
          })
        }, r.prototype.addTwitterEventHandlers = function() {
          try {
            twttr.ready(function() {
              twttr.events.bind("tweet", this.handleTweetEvents), twttr.events.bind("follow", this.handleFollowEvents)
            }.bind(this))
          } catch (e) {}
        }, r.prototype.removeTwitterEventHandlers = function() {
          try {
            twttr.ready(function() {
              twttr.events.unbind("tweet", this.handleTweetEvents), twttr.events.unbind("follow", this.handleFollowEvents)
            }.bind(this))
          } catch (e) {}
        }, r.prototype.addFacebookEventHandlers = function() {
          try {
            FB.Event.subscribe("edge.create", this.handleLikeEvents), FB.Event.subscribe("edge.remove", this.handleUnlikeEvents)
          } catch (e) {}
        }, r.prototype.removeFacebookEventHandlers = function() {
          try {
            FB.Event.unsubscribe("edge.create", this.handleLikeEvents), FB.Event.unsubscribe("edge.remove", this.handleUnlikeEvents)
          } catch (e) {}
        }, r.prototype.handleTweetEvents = function(e) {
          if ("tweet" == e.region) {
            var t = e.data.url || e.target.getAttribute("data-url") || location.href;
            this.tracker.send("social", "Twitter", "tweet", t)
          }
        }, r.prototype.handleFollowEvents = function(e) {
          if ("follow" == e.region) {
            var t = e.data.screen_name || e.target.getAttribute("data-screen-name");
            this.tracker.send("social", "Twitter", "follow", t)
          }
        }, r.prototype.handleLikeEvents = function(e) {
          this.tracker.send("social", "Facebook", "like", e)
        }, r.prototype.handleUnlikeEvents = function(e) {
          this.tracker.send("social", "Facebook", "unlike", e)
        }, r.prototype.remove = function() {
          window.removeEventListener("load", this.addWidgetListeners), this.removeFacebookEventHandlers(), this.removeTwitterEventHandlers(), this.delegate.destroy(), this.delegate = null, this.tracker = null, this.opts = null, this.handleSocialClicks = null, this.addWidgetListeners = null, this.addTwitterEventHandlers = null, this.handleTweetEvents = null, this.handleFollowEvents = null, this.handleLikeEvents = null, this.handleUnlikeEvents = null
        }, a("socialTracker", r)
      }, {
        "../provide": 8,
        "../utilities": 9,
        delegate: 13
      }],
      7: [function(e, t, n) {
        function r(e, t) {
          history.pushState && window.addEventListener && (this.opts = o(t, {
            shouldTrackUrlChange: this.shouldTrackUrlChange
          }), this.tracker = e, this.path = i(), this.updateTrackerData = this.updateTrackerData.bind(this), this.originalPushState = history.pushState, history.pushState = function(e, t) {
            a(e) && t && (e.title = t), this.originalPushState.apply(history, arguments), this.updateTrackerData()
          }.bind(this), this.originalReplaceState = history.replaceState, history.replaceState = function(e, t) {
            a(e) && t && (e.title = t), this.originalReplaceState.apply(history, arguments), this.updateTrackerData(!1)
          }.bind(this), window.addEventListener("popstate", this.updateTrackerData))
        }

        function i() {
          return location.pathname + location.search
        }
        var o = e("../utilities").defaults,
          a = e("../utilities").isObject,
          s = e("../provide");
        r.prototype.updateTrackerData = function(n) {
          n = !1 !== n, setTimeout(function() {
            var e = this.path,
              t = i();
            e != t && this.opts.shouldTrackUrlChange.call(this, t, e) && (this.path = t, this.tracker.set({
              page: t,
              title: a(history.state) && history.state.title || document.title
            }), n && this.tracker.send("pageview"))
          }.bind(this), 0)
        }, r.prototype.shouldTrackUrlChange = function(e, t) {
          return e && t
        }, r.prototype.remove = function() {
          window.removeEventListener("popstate", this.updateTrackerData), history.replaceState = this.originalReplaceState, history.pushState = this.originalPushState, this.tracker = null, this.opts = null, this.path = null, this.updateTrackerData = null, this.originalReplaceState = null, this.originalPushState = null
        }, s("urlChangeTracker", r)
      }, {
        "../provide": 8,
        "../utilities": 9
      }],
      8: [function(e, t, n) {
        var r = e("./constants"),
          i = e("./utilities");
        (window.gaDevIds = window.gaDevIds || []).push(r.DEV_ID), t.exports = function(e, t) {
          var n = window.GoogleAnalyticsObject || "ga";
          window[n] = window[n] || function() {
            (window[n].q = window[n].q || []).push(arguments)
          }, window[n]("provide", e, t), window.gaplugins = window.gaplugins || {}, window.gaplugins[i.capitalize(e)] = t
        }
      }, {
        "./constants": 1,
        "./utilities": 9
      }],
      9: [function(e, t, n) {
        var r = {
          withTimeout: function(e, t) {
            var n = !1;
            return setTimeout(e, t || 2e3),
              function() {
                n || (n = !0, e())
              }
          },
          defaults: function(e, t) {
            var n = {};
            for (var r in "object" != typeof e && (e = {}), "object" != typeof t && (t = {}), t) t.hasOwnProperty(r) && (n[r] = e.hasOwnProperty(r) ? e[r] : t[r]);
            return n
          },
          capitalize: function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
          },
          isObject: function(e) {
            return "object" == typeof e && null !== e
          },
          isArray: Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
          },
          toArray: function(e) {
            return r.isArray(e) ? e : [e]
          }
        };
        t.exports = r
      }, {}],
      10: [function(e, t, n) {
        var i = e("matches-selector");
        t.exports = function(e, t, n) {
          for (var r = n ? e : e.parentNode; r && r !== document;) {
            if (i(r, t)) return r;
            r = r.parentNode
          }
        }
      }, {
        "matches-selector": 14
      }],
      11: [function(e, t, n) {
        t.exports = Date.now || function() {
          return (new Date).getTime()
        }
      }, {}],
      12: [function(e, t, n) {
        var u = e("date-now");
        t.exports = function(t, n, r) {
          function i() {
            var e = u() - c;
            e < n && 0 < e ? o = setTimeout(i, n - e) : (o = null, r || (l = t.apply(s, a), o || (s = a = null)))
          }
          var o, a, s, c, l;
          return null == n && (n = 100),
            function() {
              s = this, a = arguments, c = u();
              var e = r && !o;
              return o || (o = setTimeout(i, n)), e && (l = t.apply(s, a), s = a = null), l
            }
        }
      }, {
        "date-now": 11
      }],
      13: [function(e, t, n) {
        var a = e("closest");
        t.exports = function(e, t, n, r, i) {
          var o = function(t, n, e, r) {
            return function(e) {
              e.delegateTarget = a(e.target, n, !0), e.delegateTarget && r.call(t, e)
            }
          }.apply(this, arguments);
          return e.addEventListener(n, o, i), {
            destroy: function() {
              e.removeEventListener(n, o, i)
            }
          }
        }
      }, {
        closest: 10
      }],
      14: [function(e, t, n) {
        var r = Element.prototype,
          i = r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector;
        t.exports = function(e, t) {
          if (i) return i.call(e, t);
          for (var n = e.parentNode.querySelectorAll(t), r = 0; r < n.length; ++r)
            if (n[r] == e) return !0;
          return !1
        }
      }, {}],
      15: [function(e, t, n) {
        e("./event-tracker"), e("./media-query-tracker"), e("./outbound-form-tracker"), e("./outbound-link-tracker"), e("./social-tracker"), e("./url-change-tracker"), e("../provide")("autotrack", function(e, t) {
          var n = window[window.GoogleAnalyticsObject || "ga"],
            r = e.get("name");
          n(r + ".require", "eventTracker", t), n(r + ".require", "mediaQueryTracker", t), n(r + ".require", "outboundFormTracker", t), n(r + ".require", "outboundLinkTracker", t), n(r + ".require", "socialTracker", t), n(r + ".require", "urlChangeTracker", t)
        })
      }, {
        "../provide": 8,
        "./event-tracker": 2,
        "./media-query-tracker": 3,
        "./outbound-form-tracker": 4,
        "./outbound-link-tracker": 5,
        "./social-tracker": 6,
        "./url-change-tracker": 7
      }]
    }, {}, [15]), Element.prototype.addClass = function(e) {
      this.classList ? this.classList.add(e) : this.className += " " + e
    }, Element.prototype.removeClass = function(e) {
      this.classList ? this.classList.remove(e) : this.className = this.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }, Element.prototype.toggleClass = function(e) {
      if (this.classList) this.classList.toggle(e);
      else {
        var t = this.className.split(" "),
          n = t.indexOf(e);
        0 <= n ? t.splice(n, 1) : t.push(e), this.className = t.join(" ")
      }
    };
  var o = function(e, t) {
      var n = e.match("[?&]" + t + "=([^&]+)");
      return n ? n[1] : void 0
    },
    a = function(e, t) {
      return -1 !== e.indexOf(t)
    },
    c = function(e, t, n) {
      return n ? e + (a(e, "?") ? "&" : "?") + t + "=" + encodeURIComponent(n) : e
    },
    r = function(t) {
      var n = function(e) {
        e.stopPropagation(), t && (t.removeClass("visible"), window.removeEventListener("click", n))
      };
      t && t.addEventListener("click", function(e) {
        e.stopPropagation(), t && (t.classList.contains("visible") ? window.removeEventListener("click", n) : window.addEventListener("click", n), t.toggleClass("visible"))
      })
    },
    p = function() {
      return a(document.cookie, "_ab=b") ? "b" : "a"
    },
    f = "",
    g = "",
    e = function() {
      var e = o(window.location.href, "gclid");
      if (e) m("ref", f = "gclid=" + e, 172800);
      else if (document.referrer) {
        var t = "";
        try {
          t = new URL(document.referrer).host || ""
        } catch (e) {}
        var n = window.location.host;
        t && -1 === t.indexOf(n, t.length - n.length) && (f = "url=" + document.referrer.split(/[?#]/)[0], m("ref", f, 172800))
      }
    },
    n = function() {
      var e = o(window.location.href, "cjevent");
      e && m("_af", g = "cjevent=" + e, 3888e3)
    },
    v = function() {
      document.cookie && (f || (f = y("ref")), g || (g = y("_af")))
    },
    m = function(e, t, n) {
      if (e && t && !(2048 < t.length) && n) {
        var r = e + "=" + t + ";domain=." + window.location.host + ";max-age=" + n + ";path=/;secure";
        document.cookie = r
      }
    },
    y = function(e) {
      var t = ("; " + document.cookie).split("; " + e + "=");
      if (2 !== t.length) return "";
      var n = t.pop();
      return n && n.split(";").shift() || ""
    },
    w = "",
    b = function() {
      var e = o(window.location.href, "c");
      if (e) {
        try {
          var t = new Date;
          t.setHours(t.getHours() + 48), localStorage.setItem("couponId", e), localStorage.setItem("couponExpiry", t.valueOf().toString())
        } catch (e) {
          console.warn("Unable to save coupon in local storage.")
        }
        return e
      }
    },
    k = function() {
      try {
        var e = localStorage.getItem("couponId");
        if (e) {
          var t = localStorage.getItem("couponExpiry");
          if (t && !((new Date).valueOf() > Number(t))) return e;
          localStorage.removeItem("couponId"), localStorage.removeItem("couponExpiry")
        }
      } catch (e) {
        console.warn("Unable to check for coupon in local storage.")
      }
    },
    E = function() {
      var f, e = document.querySelectorAll(".scroller"),
        g = "active",
        v = function(e, t) {
          e.setAttribute("style", "transform: translateX(-" + t + "px)")
        },
        m = function(u, d, h) {
          var e, p = "timer" + h;
          (e = {})[p] = setTimeout(function() {
            t()
          }, d), f = e;
          var t = function() {
            var e = u.querySelector(".scroller-tracker"),
              t = e.querySelector(".slide").getBoundingClientRect().width,
              n = e.style.transform,
              r = 0,
              i = 0,
              o = 0,
              a = 0,
              s = u.querySelector("nav ul"),
              c = s.querySelector(".active"),
              l = c.getAttribute("data-index");
            (n && (r = parseFloat(n.replace(/[^\d.]/g, ""))), l) && ((o = parseFloat(l)) !== s.childElementCount - 1 && (i = Math.abs(-1 * r - t), a = o + 1), c.classList.remove(g), v(e, i), y(s.querySelectorAll("li")[a]));
            clearTimeout(f[p]), m(u, d, h)
          }
        },
        y = function(e) {
          e.classList.add(g)
        };
      E && Array.prototype.forEach && Array.prototype.slice.call(e).forEach(function(e, t) {
        var a = e.querySelector("nav"),
          s = e.querySelector(".scroller-tracker"),
          c = e.getAttribute("data-auto"),
          n = e.getAttribute("data-auto-interval"),
          l = e.querySelectorAll(".slide"),
          u = a.querySelectorAll("li"),
          d = "timer" + t,
          r = 3e3,
          h = 0;
        u[0].classList.add(g), n && (r = parseFloat(n)), c && m(e, r, t), window.addEventListener("resize", function() {
          var e, t, n, r;
          s.hasAttribute("style") && (e = s, n = (t = a).querySelector("li.active"), r = t.querySelector("li"), n && r && (r.classList.remove(g), n.classList.remove(g), r.classList.add(g)), e.removeAttribute("style"))
        }), Array.prototype.slice.call(u).forEach(function(e, o) {
          e.setAttribute("data-index", o.toString()), e.addEventListener("click", function(e) {
            e.preventDefault(), h = o;
            var t = a.querySelector("li.active"),
              n = a.querySelector("li"),
              r = l[h].getBoundingClientRect().width,
              i = h * r;
            t.classList.remove(g), n.classList.remove(g), y(u[h]), v(s, i), c && clearTimeout(f[d])
          })
        })
      })
    },
    S = function(e, t) {
      return (S = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    };

  function x(e, t) {
    function n() {
      this.constructor = e
    }
    S(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  }
  var C, T, L, O = function(e) {
      e = e.toLowerCase();
      var t = R(e),
        n = t ? t.name : "Browser",
        r = t ? _(e, t.versionRegex) : "",
        i = q(e);
      return {
        name: n,
        version: r,
        osName: i ? i.name : "",
        osVersion: i ? _(e, i.versionRegex) : ""
      }
    },
    _ = function(e, t) {
      if (!t) return "";
      var n = t.exec(e);
      return n && 2 === n.length ? n[1].replace(/_/g, ".") : ""
    },
    R = function(e) {
      for (var t = 0, n = A; t < n.length; t++) {
        var r = n[t];
        if (a(e, r.term)) return r
      }
    },
    A = [{
      term: "msie",
      name: "Internet Explorer",
      versionRegex: /msie ([\d\.]+)/
    }, {
      term: "trident",
      name: "Internet Explorer",
      versionRegex: /rv:([\d\.]+)/
    }, {
      term: "edge",
      name: "Microsoft Edge",
      versionRegex: /edge\/([\d\.]+)/
    }, {
      term: "opr",
      name: "Opera",
      versionRegex: /opr\/([\d\.]+)/
    }, {
      term: "opera mobi",
      name: "Opera",
      versionRegex: /version\/([\d\.]+)/
    }, {
      term: "opios",
      name: "Opera",
      versionRegex: /opios\/([\d\.]+)/
    }, {
      term: "vivaldi",
      name: "Vivaldi",
      versionRegex: /vivaldi\/([\d\.]+)/
    }, {
      term: "chromium",
      name: "Chromium",
      versionRegex: /chromium\/([\d\.]+)/
    }, {
      term: "firefox",
      name: "Firefox",
      versionRegex: /firefox\/([\d\.]+)/
    }, {
      term: "fxios",
      name: "Firefox",
      versionRegex: /fxios\/([\d\.]+)/
    }, {
      term: "chrome",
      name: "Chrome",
      versionRegex: /chrome\/([\d\.]+)/
    }, {
      term: "crios",
      name: "Chrome",
      versionRegex: /crios\/([\d\.]+)/
    }, {
      term: "android",
      name: "Android Browser"
    }, {
      term: "safari",
      name: "Safari",
      versionRegex: /version\/([\d\.]+)/
    }],
    q = function(e) {
      for (var t = 0, n = I; t < n.length; t++) {
        var r = n[t];
        if (a(e, r.term)) return r
      }
    },
    I = [{
      term: "iphone",
      name: "iOS",
      versionRegex: /os ([\d\_\.]+)/
    }, {
      term: "ipad",
      name: "iOS",
      versionRegex: /os ([\d\_\.]+)/
    }, {
      term: "ipod",
      name: "iOS",
      versionRegex: /os ([\d\_\.]+)/
    }, {
      term: "mac os x",
      name: "MacOSX",
      versionRegex: /os x ([\d\_\.]+)/
    }, {
      term: "android;",
      name: "Android",
      versionRegex: /android; ([\d\.]+)/
    }, {
      term: "android",
      name: "Android",
      versionRegex: /android ([\d\.]+)/
    }, {
      term: "linux",
      name: "Linux"
    }, {
      term: "cros",
      name: "ChromeOS"
    }, {
      term: "windows",
      name: "Windows",
      versionRegex: /windows nt ([\d\.]+)/
    }],
    j = O(navigator.userAgent),
    D = j.osName,
    N = j.name,
    F = function(r) {
      document.querySelector(".password-generator") && ("Internet Explorer" !== N && (new X(r).render(), document.querySelectorAll(".generator-display").forEach(function(e) {
        var t = e.getAttribute("data-recipe") || "characters",
          n = U(t);
        new P(r, e, n).render()
      })))
    },
    P = function() {
      function e(e, t, n) {
        this.spgRoot = t, this.spg = e, this.options = n, this.displayField = this.spgRoot.querySelector(".inputfield-container > input"), this.displayFieldOverlay = this.spgRoot.querySelector(".inputfield-container > div")
      }
      return e.prototype.display = function(e) {
        this.displayField.value = e.value;
        for (var t = H(e); this.displayFieldOverlay.firstChild;) this.displayFieldOverlay.removeChild(this.displayFieldOverlay.firstChild);
        for (var n = 0, r = t; n < r.length; n++) {
          var i = r[n];
          this.displayFieldOverlay.appendChild(i)
        }
      }, e.prototype.generate = function() {
        return JSON.parse(this.spg(JSON.stringify(this.options))).result
      }, e.prototype.render = function() {
        this.display(this.generate())
      }, e
    }(),
    U = function(e) {
      switch (void 0 === e && (e = "characters"), e) {
        case "characters":
          return M.characters;
        case "memorable":
          return M.memorable;
        case "pin":
          return M.pin;
        default:
          return M.characters
      }
    },
    M = {
      characters: {
        passwordType: "characters",
        requireDigits: !0,
        requireSymbols: !(window.spgReady = function(e) {
          var t;
          (t = e.iw, Promise.all([fetch("./txt/agwordlist.txt").then(function(e) {
            return e.text()
          }).then(function(e) {
            t("words", e.split("\n"))
          }), fetch("./txt/agsyllables.txt").then(function(e) {
            return e.text()
          }).then(function(e) {
            t("syllables", e.split("\n"))
          })])).then(function() {
            /comp|inter|loaded/.test(document.readyState) ? F(e.spg) : document.addEventListener("DOMContentLoaded", function() {
              F(e.spg)
            })
          })
        }),
        length: 20
      },
      memorable: {
        passwordType: "words",
        length: 4,
        separatorType: "hyphens"
      },
      pin: {
        passwordType: "pin",
        length: 6
      }
    },
    B = function() {
      function e(e, t, n, r, i, o) {
        this.inputElement = r, this.displayElement = i, this.minLength = e, this.maxLength = t, this.defaultLength = n, this.onChange = o, this.reset(), "Internet Explorer" !== N ? this.inputElement.addEventListener("input", this.handleChange.bind(this)) : this.inputElement.addEventListener("change", this.handleChange.bind(this))
      }
      return Object.defineProperty(e.prototype, "value", {
        get: function() {
          return Number(this.inputElement.value)
        },
        set: function(e) {
          if (this.inputElement.value = "" + e, "function" == typeof Event) {
            var t = new Event("submit");
            this.inputElement.dispatchEvent(t)
          } else {
            var n = document.createEvent("Event");
            n.initEvent("submit", !0, !0), this.inputElement.dispatchEvent(n)
          }
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.handleChange = function(e) {
        this.displayElement.innerText = e.target.value, this.onChange(e)
      }, e.prototype.reset = function() {
        this.inputElement.min = "" + this.minLength, this.inputElement.max = "" + this.maxLength, this.value = this.defaultLength
      }, e
    }(),
    $ = function(e, t) {
      var n = document.createElement("span");
      return n.classList.add(e), n.innerText = t, n
    },
    H = function(e) {
      for (var t = 2 === e.tokenIndices[0] ? 55 : 150, n = 0, r = [], i = 0, o = e.tokens; i < o.length; i++) {
        var a = o[i];
        if (!(n + a.value.length < t)) break;
        n += a.value.length, r.push(a)
      }
      return r.map(function(e) {
        return /[a-zA-Z]/.test(e.value) ? $("letter", e.value) : /[0-9]/.test(e.value) ? $("digits", e.value) : $("symbols", e.value)
      })
    },
    G = function() {
      function e(e, t, n, r) {
        var i = this;
        this.recipeRoot = e, this.lengthSlider = new B(t, n, r, this.recipeRoot.querySelector(".slidecontainer input[type='range']"), this.recipeRoot.querySelector(".slidecontainer .slider-value"), this.onLengthChange = function() {
          i.options.length = i.lengthSlider.value, i.onUpdate(i.options)
        }), this.options = U("characters")
      }
      return e.prototype.show = function() {
        this.recipeRoot.classList.add("activerecipe"), this.lengthSlider.reset(), this.onUpdate(this.options)
      }, e.prototype.hide = function() {
        this.recipeRoot.classList.remove("activerecipe")
      }, e
    }(),
    V = function(n) {
      function e(e) {
        var t = n.call(this, e, 3, 15, 5) || this;
        return t.capitalizeCheckbox = t.recipeRoot.querySelector("#capitalize"), t.fullWordsCheckbox = t.recipeRoot.querySelector("#fullWords"), t.options = U("memorable"), t.capitalizeCheckbox.checked = t.options.capitalize, t.fullWordsCheckbox.checked = "words" === t.options.passwordType, t.recipeRoot.addEventListener("change", function(e) {
          switch (e.target) {
            case t.capitalizeCheckbox:
            case t.fullWordsCheckbox:
              t.options.capitalize = t.capitalizeCheckbox.checked, t.options.passwordType = t.fullWordsCheckbox.checked ? "words" : "syllables", t.onUpdate(t.options)
          }
        }), t
      }
      return x(e, n), e
    }(G),
    z = function(r) {
      function e(e) {
        var t = this,
          n = U("pin");
        return (t = r.call(this, e, 3, 12, n.length) || this).options = n, t
      }
      return x(e, r), e
    }(G),
    W = function(n) {
      function e(e) {
        var t = n.call(this, e, 8, 100, 20) || this;
        return t.numbersCheckbox = t.recipeRoot.querySelector("#numbers"), t.symbolsCheckbox = t.recipeRoot.querySelector("#symbols"), t.options = U("characters"), t.numbersCheckbox.checked = t.options.requireDigits, t.symbolsCheckbox.checked = t.options.requireSymbols, t.recipeRoot.addEventListener("change", function(e) {
          switch (e.target) {
            case t.numbersCheckbox:
            case t.symbolsCheckbox:
              t.options.requireDigits = t.numbersCheckbox.checked, t.options.requireSymbols = t.symbolsCheckbox.checked, t.onUpdate(t.options)
          }
        }), t
      }
      return x(e, n), e
    }(G),
    X = function() {
      function e(e) {
        this.spg = e, this.spgRoot = document.querySelector(".password-generator"), this.copyButton = this.spgRoot.querySelector("#copy-secure-password"), this.regenerateButton = this.spgRoot.querySelector("button#refresh-token"), this.copyOverlay = this.spgRoot.querySelector(".overlay"), this.recipes = {
          characters: new W(this.spgRoot.querySelector("#recipe-characters")),
          memorable: new V(this.spgRoot.querySelector("#recipe-memorable")),
          pin: new z(this.spgRoot.querySelector("#recipe-pin"))
        }, this.displayField = this.spgRoot.querySelector(".inputfield-container > input"), this.displayFieldOverlay = this.spgRoot.querySelector(".inputfield-container > div"), this.select = this.spgRoot.querySelector("#random-password"), this.options = U("characters"), this.listen()
      }
      return e.prototype.selectedRecipe = function() {
        return this.select.options[this.select.selectedIndex].value
      }, e.prototype.resetRecipe = function() {
        var t = this;
        this.activeRecipe && this.activeRecipe.hide(), this.activeRecipe = this.recipes[this.selectedRecipe()], this.activeRecipe.onUpdate = function(e) {
          t.options = e, t.render()
        }, this.activeRecipe.show()
      }, e.prototype.listen = function() {
        var t = this;
        this.resetRecipe(), this.spgRoot.addEventListener("change", function(e) {
          switch (e.target) {
            case t.select:
              t.resetRecipe(), t.render()
          }
        }), this.spgRoot.addEventListener("click", function(e) {
          switch (e.target) {
            case t.copyButton:
              t.copy();
              break;
            case t.regenerateButton:
              t.render()
          }
        })
      }, e.prototype.display = function(e) {
        this.displayField.value = e.value;
        for (var t = H(e); this.displayFieldOverlay.firstChild;) this.displayFieldOverlay.removeChild(this.displayFieldOverlay.firstChild);
        for (var n = 0, r = t; n < r.length; n++) {
          var i = r[n];
          this.displayFieldOverlay.appendChild(i)
        }
      }, e.prototype.generate = function() {
        return JSON.parse(this.spg(JSON.stringify(this.options))).result
      }, e.prototype.copy = function() {
        var t = this;
        if ("iOS" === D) {
          this.displayField.readOnly = !0;
          var e = document.createRange();
          e.selectNodeContents(this.displayField);
          var n = window.getSelection();
          n.removeAllRanges(), n.addRange(e), this.displayField.setSelectionRange(0, 999999)
        } else this.displayField.select();
        document.execCommand("copy"), this.copyOverlay.classList.add("show-modal");
        var r = document.querySelector(".modal");
        r && this.copyOverlay.addEventListener("click", function(e) {
          !e.target.classList.contains("modal-close") && r.contains(e.target) || t.copyOverlay.classList.remove("show-modal")
        })
      }, e.prototype.render = function() {
        var e = this.generate();
        this.display(e)
      }, e
    }(),
    Q = O(navigator.userAgent),
    J = "aomjjhallfgjeglblehebfpbcfeobpgk",
    K = "phicbbndgmmpogmijjkbmdhpioaieaha",
    Y = function() {
      if (document.body.getAttribute("data-onepassword-extension-version")) {
        var e = document.querySelector("header.browser-already-installed");
        e && e.removeClass("hidden");
        var t = document.querySelector("header.browser-big-green-install");
        t && t.addClass("hidden");
        var n = document.querySelector("section#other-browsers");
        n && n.addClass("hidden");
        var r = document.querySelector("a#show-install-options-anyway");
        r && r.addEventListener("click", Z)
      }
    },
    Z = function(e) {
      e.preventDefault();
      var t = document.querySelector("a#show-install-options-anyway");
      t && t.addClass("hidden");
      var n = document.querySelector("header.browser-big-green-install");
      n && n.removeClass("hidden");
      var r = document.querySelector("section#other-browsers");
      r && r.removeClass("hidden")
    },
    ee = function(e) {
      var t = document.getElementById("not-using");
      t && ("Safari" === e ? (te(), window.location.href = "https://1password.com/downloads") : "Firefox" === e ? (t.textContent = "Not using Firefox?", te(), ne("firefox")) : "Opera" === e ? (t.textContent = "Not using Opera?", te(), ne("opera")) : "Microsoft Edge" === e && (t.textContent = "Not using Edge?", te(), ne("edge")))
    },
    te = function() {
      var e = document.querySelectorAll(".browser-big-green-install .chrome, .chrome-icon");
      Array.prototype.forEach.call(e, function(e) {
        e.toggleClass("hidden")
      })
    },
    ne = function(e) {
      var t = document.querySelectorAll(".browser-big-green-install ." + e + ", ." + e + "-icon");
      Array.prototype.forEach.call(t, function(e) {
        e.toggleClass("hidden")
      })
    },
    re = function() {
      var e = document.querySelectorAll("#other-browsers a, #other-browsers ul");
      Array.prototype.forEach.call(e, function(e) {
        e.addEventListener("click", ie)
      });
      var t = document.querySelector(".little-beta");
      t && t.addEventListener("click", function(e) {
        return oe(e)
      });
      var n = document.querySelector(".little-beta.disable");
      n && n.addEventListener("click", function(e) {
        return oe(e)
      })
    },
    ie = function(e) {
      e.preventDefault();
      var t = document.getElementById("other-browsers");
      t && t.addClass("hidden");
      var n = document.getElementById("other");
      n && n.removeClass("hidden")
    },
    oe = function(e) {
      e && e.preventDefault();
      var t = document.querySelector(".little-beta"),
        n = document.querySelector(".little-beta.disable");
      t && t.toggleClass("hidden"), n && n.toggleClass("hidden");
      var r = document.querySelectorAll(".browser-big-green-install .big-green, .other-browsers .button");
      Array.prototype.forEach.call(r, function(e) {
        e.toggleClass("beta")
      });
      var i = document.querySelectorAll(".browser-big-green-install .big-green, .other-browsers a");
      Array.prototype.forEach.call(i, function(e) {
        var t = e.getAttribute("href");
        t && (t = a(t, "/beta") ? t.replace("/beta", "") : a(t, J) ? t.replace(J, K) : a(t, K) ? t.replace(K, J) : t.replace(/\/([a-z]+)\/$/, "/beta/$1/"), e.href = t)
      })
    },
    ae = function() {
      var e = document.querySelector("header.browser-big-green-install");
      e && e.addClass("hidden");
      var t = document.querySelector("section#other-browsers");
      t && t.addClass("hidden");
      var n = document.querySelector("section.kaychads-video");
      n && n.addClass("hidden");
      var r = document.querySelector("section.extension-explainer");
      r && r.addClass("hidden")
    },
    se = function(e, t) {
      if ("Safari" === e) {
        var n = document.querySelector(".little-beta");
        n && n.parentNode && n.parentNode.removeChild(n)
      } else if ("Internet Explorer" === e) {
        var r = document.getElementById("message-container");
        r && (r.textContent = "The 1Password browser extension isn’t available for Internet Explorer. We recommend using 1Password with Chrome, Firefox, Edge, or Opera instead.")
      }
      if ("iOS" === t) {
        ae();
        var i = document.querySelector("section.ios-extension");
        i && i.removeClass("hidden")
      } else if ("Android" === t) {
        ae();
        var o = document.querySelector("section.android-extensio");
        o && o.removeClass("hidden")
      }
    },
    ce = function() {
      return a(window.location.pathname, "/eu/") ? "eu" : a(window.location.pathname, "/ca/") ? "ca" : "com"
    },
    le = document.querySelector("#out"),
    ue = document.getElementById("email"),
    de = document.getElementById("coupon-code"),
    he = function() {
      if (ue && ue.value && de && "" !== de.value) {
        var e = document.createElement("div");
        e.id = "sending-msg";
        var t = document.createTextNode("Sending...");
        e.appendChild(t), le && le.appendChild(e);
        var n, r, i, o, a = encodeURIComponent(ue.value),
          s = encodeURIComponent(de.value);
        n = "https://start.1password.com/api/v1/createcoupon/" + s + "?email=" + a, r = pe, i = fe, (o = new XMLHttpRequest).open("GET", n), o.onreadystatechange = function() {
          4 === o.readyState && 200 === o.status ? r(o.responseText) : 4 === o.readyState && 200 !== o.status && (console.error("Failed to get, received error code: " + o.status), i(o.status))
        }, o.send()
      }
    },
    pe = function(e) {
      var t = document.createElement("div");
      t.id = "success-msg";
      var n = document.createTextNode("Success! Check your email for the promotion.");
      if (t.appendChild(n), le) {
        for (; le.firstChild;) le.removeChild(le.firstChild);
        le.appendChild(t)
      }
    },
    fe = function(e) {
      if (!document.getElementById("error-msg")) {
        var t;
        switch (e) {
          case 400:
            t = document.createTextNode("Something went wrong. Please make sure you entered a valid email address.");
            break;
          case 404:
            t = document.createTextNode("Promo not found.");
            break;
          case 410:
            t = document.createTextNode("This email address has already received a trial code.");
            break;
          default:
            t = document.createTextNode("Something went wrong, please check your promotion.")
        }
        var n = document.createElement("div");
        n.id = "error-msg", n.appendChild(t), le && le.appendChild(n);
        var r = document.getElementById("sending-msg");
        r && r.parentNode && r.parentNode.removeChild(r)
      }
    },
    ge = function() {
      var e = document.querySelector(".video-container .video");
      if (e) {
        var t = document.createElement("iframe");
        t.setAttribute("width", "800"), t.setAttribute("height", "480"), t.setAttribute("src", "https://www.youtube-nocookie.com/embed/mcly2-b1W20?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1"), t.setAttribute("frameborder", "0"), t.setAttribute("allowfullscreen", ""), e.appendChild(t)
      }
      var n = document.querySelector(".video-container");
      n && n.toggleClass("visible");
      var r = document.getElementById("play-video");
      r && r.toggleClass("hidden");
      var i = document.querySelector(".video-button");
      i && i.toggleClass("hidden")
    },
    ve = function() {
      var e = document.querySelector(".video-container");
      e && e.toggleClass("visible");
      var t = document.querySelector(".video-container .video");
      if (t)
        for (; t.firstChild;) t.removeChild(t.firstChild)
    };
  (C = {
    gaPropertyId: "UA-435167-16",
    abTestingEnabled: !0
  }).gaPropertyId && function(e, t) {
      if (window.ga = window.ga || function(e) {
          (ga.q = ga.q || []).push(e)
        }, ga.l = +new Date, window.localStorage) {
        var n = localStorage.getItem("ga:clientId");
        n ? ga("create", e, {
          storage: "none",
          clientId: n
        }) : (a(document.cookie, "_ga=") ? ga("create", e, {
          cookieExpires: 1
        }) : ga("create", e, {
          storage: "none"
        }), ga(function(e) {
          e && localStorage.setItem("ga:clientId", e.get("clientId"))
        })), ga("require", "autotrack"), t && ga("set", "dimension1", p()), ga("send", "pageview")
      }
    }(C.gaPropertyId, C.abTestingEnabled),
    function() {
      var e = function() {
          var e = document.querySelector(".burger");
          e && e.toggleClass("visible")
        },
        t = document.getElementById("menu-button");
      t && (t.addEventListener("click", e), t.addEventListener("tap", e));
      var n = document.querySelector(".language-picker");
      r(n)
    }(), e(), n(), v(),
    function() {
      var e = b();
      if (e) w = e;
      else {
        var t = k();
        t && (w = t)
      }
    }(),
    function() {
      var e = document.querySelectorAll("a[href^='https://start.1password.']");
      if (e) {
        var r = y("_ab");
        Array.prototype.forEach.call(e, function(e) {
          if (e.href) {
            var t = e.href,
              n = !a(t, "start.1password.com");
            f && n && (t = c(t, "ref", f)), g && n && (t = c(t, "_af", g)), r && n && (t = c(t, "_ab", r)), w && !o(t, "c") && (t = c(t, "c", w)), e.href = t
          }
        })
      }
    }(), document.querySelector(".scroller") && E(), (T = document.getElementById("download-button")) && (/iPad|iPhone|iPod/i.test(navigator.userAgent) ? (T.href = "https://itunes.apple.com/us/app/1password-password-manager/id568903335?mt=8&uo=4&at=10l4Hf&pt=11798&ct=site", T.setAttribute("target", "_blank"), T.setAttribute("rel", "noopener")) : /Mac/i.test(navigator.userAgent) || (/Android/i.test(navigator.userAgent) ? (T.href = "https://play.google.com/store/apps/details?id=com.agilebits.onepassword", T.setAttribute("target", "_blank"), T.setAttribute("rel", "noopener")) : /Windows/i.test(navigator.userAgent))),
    function() {
      var e = document.getElementById("play-video");
      e && (e.addEventListener("click", ge), e.addEventListener("tap", ge));
      var t = document.getElementById("video-close");
      t && (t.addEventListener("click", ve), t.addEventListener("tap", ve))
    }(), L = document.getElementById("get-trial"), le && L && ue && (L.addEventListener("click", function(e) {
      e.preventDefault(), he()
    }), ue.addEventListener("keypress", function(e) {
      "Enter" === e.key && he()
    })),
    function() {
      if (document.querySelector(".browser-big-green-install")) {
        var e = O(navigator.userAgent),
          t = e.name,
          n = e.osName;
        Y(), ee(t), re(), a(window.location.href, "beta=true") && oe(), se(t, n)
      }
    }(),
    function() {
      var e = document.querySelector(".platform-container"),
        t = document.querySelector(".selected-windows"),
        n = document.querySelector(".selected-android"),
        r = document.querySelector(".selected-linux"),
        i = document.querySelector(".selected-chrome"),
        o = document.querySelector(".selected-cli"),
        a = document.querySelector(".download-button");
      if (a) {
        var s = Q.name;
        window.addEventListener("load", function() {
          n || t ? e.scrollLeft += 180 : r || i ? e.scrollLeft += 380 : o && (e.scrollLeft += 1e3)
        }), /linux/.test(window.location.pathname) && (a.href = "Firefox" === s ? "https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager/?src=search" : "https://chrome.google.com/webstore/detail/1password-x-%E2%80%93-password-ma/aeblfdkhhhdcdjpifhhbdiojplfjncoa")
      }
    }(),
    function() {
      var e = document.getElementById("name"),
        t = document.getElementById("official-email"),
        n = document.getElementById("choose-business"),
        r = document.getElementById("choose-family"),
        i = document.querySelectorAll(".account-type"),
        o = document.querySelector(".submit-btn"),
        a = document.querySelector(".campaign-page-form");
      if (a) {
        var s, c, l, u = a.getAttribute("data-validation"),
          d = document.querySelector(".campaign-title"),
          h = JSON.parse(u),
          p = "Business",
          f = "";
        if (t && o && n && r && i && d) {
          var g = d.innerText;
          n.addEventListener("click", function(e) {
            e.preventDefault(), n.classList.add("selected"), r.classList.contains("selected") && r.classList.remove("selected"), v()
          }), r.addEventListener("click", function(e) {
            e.preventDefault(), r.classList.add("selected"), n.classList.contains("selected") && n.classList.remove("selected"), m()
          }), o.addEventListener("click", function(e) {
            e.preventDefault(), b()
          }), o.addEventListener("keypress", function(e) {
            e.preventDefault(), "Enter" === e.key && b()
          });
          var v = function() {
              return p = "Business"
            },
            m = function() {
              return p = "Family"
            },
            y = function(e) {
              if (void 0 === e && (e = ""), a) {
                var t = document.querySelector(".error-message");
                t.style.marginTop = "20px", t.style.color = "white", t.style.fontWeight = "600", t.innerText = e, t.style.textAlign = "center"
              }
            },
            w = {
              name: "",
              email: "",
              bucket: (/Democracy/.test(g) ? f = "democracy" : /Good/.test(g) ? f = "good" : /Journalism/.test(g) && (f = "journalism"), f),
              subject: g,
              message: ""
            },
            b = function() {
              e && o && t && n && r && u && (c = e.value, l = t.value, w.name = c, w.email = l, w.message = "Request for review - " + p + " account", "" === e.value || "" === t.value ? y(h.emptyForm) : E(w))
            },
            k = function() {
              "Business" === p ? s = "https://start.1password.com/sign-up/business?k=1&e=" + l : "Family" === p && (s = "https://start.1password.com/sign-up/family?k=1&e=" + l), window.location.href = s
            },
            E = function(e) {
              var t = new XMLHttpRequest,
                n = JSON.stringify(e);
              t.open("POST", "https://9gnqx00du4.execute-api.us-east-1.amazonaws.com/prod/contact_us", !0), t.setRequestHeader("Content-Type", "application/json; charset=UTF-8"), t.onload = function() {
                200 === t.status ? (y(h.successResponse), setTimeout(k, 3e3)) : y(h.error)
              }, t.onerror = function() {
                y(h.error)
              }, t.send(n)
            }
        }
      }
    }(),
    function() {
      var l = document.getElementById("cm-subscribe-form"),
        u = document.getElementById("cm-subscribe-email");
      if (l && u) {
        if ("1" === o(window.location.href, "success")) {
          var e = document.getElementById("cm-subscribe-description"),
            t = document.getElementById("cm-subscribe-success");
          if (!t || !e) return;
          return t.addClass("show"), e.addClass("hide"), l.addClass("hide")
        }
        l.addEventListener("submit", function(e) {
          e.preventDefault();
          var t, n, r, i, o, a, s = encodeURIComponent(u.value),
            c = encodeURIComponent(l.getAttribute("data-id") || "");
          s && (t = "https://createsend.com/t/getsecuresubscribelink", n = "email=" + s + "&data=" + c, r = "application/x-www-form-urlencoded", i = function(e) {
            e && (l.action = e), l.submit()
          }, o = function() {
            l.submit()
          }, (a = new XMLHttpRequest).open("POST", t), a.setRequestHeader("Content-type", r), a.onreadystatechange = function() {
            4 === a.readyState && 200 === a.status ? i(a.responseText) : 4 === a.readyState && 200 !== a.status && (console.error("Failed to post, received error code: " + a.status), o(a.status))
          }, a.send(n))
        })
      }
    }(),
    function() {
      if (document.querySelector(".resources-categories")) {
        var e = document.querySelector(".dropdown.resources-categories");
        r(e)
      }
    }(),
    function() {
      if (a(window.location.pathname, "/sign-up/")) {
        var e = "https://start." + window.location.hostname.split(".")[0] + "." + ce(),
          t = document.createElement("link");
        t.href = e, t.rel = "preconnect", document.head && document.head.appendChild(t)
      }
    }()
}();
