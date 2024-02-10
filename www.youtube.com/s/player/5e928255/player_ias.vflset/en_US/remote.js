(function(g) {
    var window = this;
    'use strict';
    var a8 = function(a) {
            g.Gp(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.ob()).toString(36));
            return a
        },
        b8 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Gga(a.B, b, c)
        },
        Qyb = function(a) {
            if (a instanceof g.qt) return a;
            if ("function" == typeof a.Ck) return a.Ck(!1);
            if (g.bb(a)) {
                var b = 0,
                    c = new g.qt;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.L2;
                        if (b in a) return g.rt(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        Ryb = function(a, b, c) {
            if (g.bb(a)) g.bc(a, b, c);
            else
                for (a = Qyb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        Syb = function(a, b) {
            var c = [];
            Ryb(b, function(d) {
                try {
                    var e = g.Nv.prototype.B.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.wla(e) && c.push(d)
            }, a);
            return c
        },
        Tyb = function(a, b) {
            Syb(a, b).forEach(function(c) {
                g.Nv.prototype.remove.call(this, c)
            }, a)
        },
        Uyb = function(a) {
            if (a.ma) {
                if (a.ma.locationOverrideToken) return {
                    locationOverrideToken: a.ma.locationOverrideToken
                };
                if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7) return {
                    latitudeE7: a.ma.latitudeE7,
                    longitudeE7: a.ma.longitudeE7
                }
            }
            return null
        },
        Vyb = function(a, b) {
            g.Gb(a, b) || a.push(b)
        },
        Wyb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Xyb = function(a, b) {
            return g.jd(a, b)
        },
        Yyb = function(a) {
            try {
                return g.Sa.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        c8 = function(a) {
            if (g.Sa.JSON) try {
                return g.Sa.JSON.parse(a)
            } catch (b) {}
            return Yyb(a)
        },
        Zyb = function(a) {
            if (a.Yl && "function" == typeof a.Yl) return a.Yl();
            if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
            if ("string" === typeof a) return a.split("");
            if (g.bb(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return g.fd(a)
        },
        $yb = function(a) {
            if (a.qp && "function" == typeof a.qp) return a.qp();
            if (!a.Yl || "function" != typeof a.Yl) {
                if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
                if (!("undefined" !== typeof Set && a instanceof Set)) {
                    if (g.bb(a) || "string" === typeof a) {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return g.hd(a)
                }
            }
        },
        azb = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (g.bb(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, void 0);
            else
                for (var c = $yb(a), d = Zyb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        },
        bzb = function(a, b, c, d) {
            var e = new g.Lo(null);
            a && g.zp(e, a);
            b && g.Ap(e, b);
            c && g.Bp(e, c);
            d && (e.C = d);
            return e
        },
        czb = function() {
            this.j = d8();
            this.j.Nj("/client_streamz/youtube/living_room/mdx/channel/opened", {
                Xd: 3,
                Wd: "channel_type"
            })
        },
        dzb = function(a, b) {
            a.j.Ll("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        ezb = function() {
            this.j = d8();
            this.j.Nj("/client_streamz/youtube/living_room/mdx/channel/closed", {
                Xd: 3,
                Wd: "channel_type"
            })
        },
        fzb = function(a, b) {
            a.j.Ll("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        gzb = function() {
            this.j = d8();
            this.j.Nj("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                Xd: 3,
                Wd: "channel_type"
            })
        },
        hzb = function(a, b) {
            a.j.Ll("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        izb = function() {
            this.j = d8();
            this.j.Nj("/client_streamz/youtube/living_room/mdx/channel/error", {
                Xd: 3,
                Wd: "channel_type"
            })
        },
        jzb = function(a, b) {
            a.j.Ll("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        kzb = function() {
            this.j = d8();
            this.j.Nj("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        lzb = function() {
            this.j = d8();
            this.j.Nj("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        pzb = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.vv;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type =
                a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", mzb(this, a.capabilities || ""), nzb(this, a.compatibleSenderThemes || ""), ozb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand =
                a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        mzb = function(a, b) {
            a.capabilities.clear();
            g.wt(b.split(","), g.kb(Xyb, qzb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        nzb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.wt(b.split(","), g.kb(Xyb, rzb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        ozb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        e8 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        f8 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        szb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        tzb = function(a) {
            return new e8(a)
        },
        uzb = function(a) {
            return Array.isArray(a) ? g.Lr(a, tzb) : []
        },
        g8 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        vzb = function(a) {
            return Array.isArray(a) ? "[" + g.Lr(a, g8).join(",") + "]" : "null"
        },
        wzb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        xzb = function(a) {
            return g.Lr(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        yzb = function(a, b) {
            return g.Eb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        h8 = function(a, b) {
            return g.Eb(a, function(c) {
                return f8(c, b)
            })
        },
        zzb = function() {
            var a = (0, g.$C)();
            a && Tyb(a, a.j.Ck(!0))
        },
        i8 = function() {
            var a = g.bD("yt-remote-connected-devices") || [];
            g.Zb(a);
            return a
        },
        Azb = function(a) {
            if (0 == a.length) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.Lr(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        Bzb = function(a) {
            g.aD("yt-remote-connected-devices", a, 86400)
        },
        j8 = function() {
            if (Czb) return Czb;
            var a = g.bD("yt-remote-device-id");
            a || (a = wzb(), g.aD("yt-remote-device-id", a, 31536E3));
            for (var b = i8(), c = 1, d = a; g.Gb(b, d);) c++, d = a + "#" + c;
            return Czb = d
        },
        Dzb = function() {
            var a = i8(),
                b = j8();
            g.dD() && g.ac(a, b);
            a = Azb(a);
            if (0 == a.length) try {
                g.epa("remote_sid")
            } catch (c) {} else try {
                g.sC("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        Ezb = function() {
            return g.bD("yt-remote-session-browser-channel")
        },
        Fzb = function() {
            return g.bD("yt-remote-local-screens") || []
        },
        Gzb = function() {
            g.aD("yt-remote-lounge-token-expiration", !0, 86400)
        },
        Hzb = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.Lr(Fzb(), function(d) {
                    return d.loungeToken
                }),
                c = g.Lr(a, function(d) {
                    return d.loungeToken
                });
            g.Mr(c, function(d) {
                return !g.Gb(b, d)
            }) && Gzb();
            g.aD("yt-remote-local-screens", a, 31536E3)
        },
        k8 = function(a) {
            a || (g.cD("yt-remote-session-screen-id"), g.cD("yt-remote-session-video-id"));
            Dzb();
            a = i8();
            g.Jb(a, j8());
            Bzb(a)
        },
        Izb = function() {
            if (!l8) {
                var a = g.Xv();
                a && (l8 = new g.Kv(a))
            }
        },
        Jzb = function() {
            Izb();
            return l8 ? !!l8.get("yt-remote-use-staging-server") : !1
        },
        m8 = function(a, b) {
            g.OE[a] = !0;
            var c = g.ME();
            c && c.publish.apply(c, arguments);
            g.OE[a] = !1
        },
        Kzb = function() {},
        d8 = function() {
            if (!n8) {
                n8 = new g.qg(new Kzb);
                var a = g.OB("client_streamz_web_flush_count", -1); - 1 !== a && (n8.D = a)
            }
            return n8
        },
        Lzb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        Mzb = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        Nzb = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        o8 = function(a) {
            a.length ? Ozb(a.shift(), function() {
                o8(a)
            }) : Pzb()
        },
        Qzb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        Ozb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.oo(d, g.Lw(a));
            (document.head || document.documentElement).appendChild(d)
        },
        Rzb = function() {
            var a = Lzb(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        Pzb = function() {
            var a = Nzb();
            a && a(!1, "No cast extension found")
        },
        Tzb = function() {
            if (Szb) {
                var a = 2,
                    b = Nzb(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                Ozb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", Pzb, c)
            }
        },
        Uzb = function() {
            Tzb();
            var a = Rzb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            o8(a)
        },
        Wzb = function() {
            Tzb();
            var a = Rzb();
            a.push.apply(a, g.oa(Vzb.map(Qzb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            o8(a)
        },
        p8 = function(a, b, c) {
            g.I.call(this);
            this.K = null != c ? (0, g.jb)(a, c) : a;
            this.aj = b;
            this.G = (0, g.jb)(this.A2, this);
            this.j = !1;
            this.B = 0;
            this.C = this.kd = null;
            this.D = []
        },
        q8 = function(a, b, c) {
            g.I.call(this);
            this.D = null != c ? a.bind(c) : a;
            this.aj = b;
            this.C = null;
            this.j = !1;
            this.B = 0;
            this.kd = null
        },
        Xzb = function(a) {
            a.kd = g.gg(function() {
                a.kd = null;
                a.j && !a.B && (a.j = !1, Xzb(a))
            }, a.aj);
            var b = a.C;
            a.C = null;
            a.D.apply(null, b)
        },
        r8 = function() {},
        Yzb = function() {
            g.Bb.call(this, "p")
        },
        Zzb = function() {
            g.Bb.call(this, "o")
        },
        aAb = function() {
            return $zb = $zb || new g.Ld
        },
        bAb = function(a) {
            g.Bb.call(this, "serverreachability", a)
        },
        s8 = function(a) {
            var b = aAb();
            b.dispatchEvent(new bAb(b, a))
        },
        cAb = function(a) {
            g.Bb.call(this, "statevent", a)
        },
        t8 = function(a) {
            var b = aAb();
            b.dispatchEvent(new cAb(b, a))
        },
        dAb = function(a, b, c, d) {
            g.Bb.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        u8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Sa.setTimeout(function() {
                a()
            }, b)
        },
        v8 = function() {},
        w8 = function(a, b, c, d) {
            this.G = a;
            this.D = b;
            this.Kc = c;
            this.dc = d || 1;
            this.Za = new g.Lp(this);
            this.ub = 45E3;
            a = g.CS ? 125 : void 0;
            this.kb = new g.fg(a);
            this.Na = null;
            this.C = !1;
            this.W = this.fb = this.Z = this.Sa = this.Ba = this.Pb = this.ma = null;
            this.oa = [];
            this.j = null;
            this.K = 0;
            this.N = this.Ea = null;
            this.Db = -1;
            this.Ma = !1;
            this.rb = 0;
            this.Xa = null;
            this.Wb = this.Va = this.Mb = this.Ga = !1;
            this.B = new eAb
        },
        eAb = function() {
            this.C = null;
            this.j = "";
            this.B = !1
        },
        gAb = function(a, b, c) {
            a.Sa = 1;
            a.Z = a8(b.clone());
            a.W = c;
            a.Ga = !0;
            fAb(a, null)
        },
        fAb = function(a, b) {
            a.Ba = Date.now();
            x8(a);
            a.fb = a.Z.clone();
            b8(a.fb, "t", a.dc);
            a.K = 0;
            var c = a.G.Sa;
            a.B = new eAb;
            a.j = hAb(a.G, c ? b : null, !a.W);
            0 < a.rb && (a.Xa = new q8((0, g.jb)(a.VS, a, a.j), a.rb));
            a.Za.Ta(a.j, "readystatechange", a.D2);
            b = a.Na ? g.pd(a.Na) : {};
            a.W ? (a.Ea || (a.Ea = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.fb, a.Ea, a.W, b)) : (a.Ea = "GET", a.j.send(a.fb, a.Ea, null, b));
            s8(1)
        },
        iAb = function(a) {
            return a.j ? "GET" == a.Ea && 2 != a.Sa && a.G.Cf : !1
        },
        nAb = function(a, b, c) {
            for (var d = !0, e; !a.Ma && a.K < c.length;)
                if (e = jAb(a, c), e == kAb) {
                    4 == b &&
                        (a.N = 4, t8(14), d = !1);
                    break
                } else if (e == lAb) {
                a.N = 4;
                t8(15);
                d = !1;
                break
            } else mAb(a, e);
            iAb(a) && 0 != a.K && (a.B.j = a.B.j.slice(a.K), a.K = 0);
            4 != b || 0 != c.length || a.B.B || (a.N = 1, t8(16), d = !1);
            a.C = a.C && d;
            d ? 0 < c.length && !a.Wb && (a.Wb = !0, a.G.UP(a)) : (y8(a), z8(a))
        },
        jAb = function(a, b) {
            var c = a.K,
                d = b.indexOf("\n", c);
            if (-1 == d) return kAb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return lAb;
            d += 1;
            if (d + c > b.length) return kAb;
            b = b.slice(d, d + c);
            a.K = d + c;
            return b
        },
        x8 = function(a) {
            a.Pb = Date.now() + a.ub;
            oAb(a, a.ub)
        },
        oAb = function(a, b) {
            if (null != a.ma) throw Error("WatchDog timer not null");
            a.ma = u8((0, g.jb)(a.B2, a), b)
        },
        A8 = function(a) {
            a.ma && (g.Sa.clearTimeout(a.ma), a.ma = null)
        },
        z8 = function(a) {
            a.G.Pg() || a.Ma || pAb(a.G, a)
        },
        y8 = function(a) {
            A8(a);
            g.vb(a.Xa);
            a.Xa = null;
            a.kb.stop();
            a.Za.zf();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        mAb = function(a, b) {
            try {
                var c = a.G;
                if (0 != c.Fh && (c.j == a || qAb(c.B, a)))
                    if (!a.Va && qAb(c.B, a) && 3 == c.Fh) {
                        try {
                            var d = c.Df.j.parse(b)
                        } catch (x) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.Z) {
                                    if (c.j)
                                        if (c.j.Ba + 3E3 < a.Ba) B8(c), C8(c);
                                        else break a;
                                    rAb(c);
                                    t8(18)
                                }
                            }
                            else c.ke = e[1], 0 < c.ke - c.Xa && 37500 > e[2] && c.Va && 0 == c.oa && !c.ma && (c.ma = u8((0, g.jb)(c.E2, c), 6E3));
                            if (1 >= sAb(c.B) && c.md) {
                                try {
                                    c.md()
                                } catch (x) {}
                                c.md = void 0
                            }
                        } else D8(c, 11)
                    } else if ((a.Va || c.j == a) && B8(c), !g.fc(b))
                    for (e = c.Df.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Xa = f[0];
                        f = f[1];
                        if (2 == c.Fh)
                            if ("c" == f[0]) {
                                c.D = f[1];
                                c.Wb = f[2];
                                var h = f[3];
                                null != h && (c.WS = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.Za = 1.5 * l);
                                d = c;
                                var m = a.lO();
                                if (m) {
                                    var n = g.Mn(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.hc(n, "spdy") || g.hc(n, "quic") || g.hc(n, "h2")) && (p.D = p.G, p.j = new Set, p.B && (tAb(p, p.B), p.B = null))
                                    }
                                    if (d.Ga) {
                                        var q = g.Mn(m, "X-HTTP-Session-Id");
                                        q && (d.Ne = q, g.Gp(d.Na, d.Ga, q))
                                    }
                                }
                                c.Fh = 3;
                                c.G && c.G.cT();
                                c.Nc && (c.Qd = Date.now() - a.Ba);
                                d = c;
                                var r = a;
                                d.xd = uAb(d, d.Sa ? d.Wb : null, d.dc);
                                if (r.Va) {
                                    vAb(d.B,
                                        r);
                                    var t = r,
                                        v = d.Za;
                                    v && t.setTimeout(v);
                                    t.ma && (A8(t), x8(t));
                                    d.j = r
                                } else wAb(d);
                                0 < c.C.length && E8(c)
                            } else "stop" != f[0] && "close" != f[0] || D8(c, 7);
                        else 3 == c.Fh && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? D8(c, 7) : c.disconnect() : "noop" != f[0] && c.G && c.G.bT(f), c.oa = 0)
                    }
                s8(4)
            } catch (x) {}
        },
        xAb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        yAb = function(a) {
            this.G = a || 10;
            g.Sa.PerformanceNavigationTiming ? (a = g.Sa.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Sa.chrome && g.Sa.chrome.loadTimes && g.Sa.chrome.loadTimes() && g.Sa.chrome.loadTimes().wasFetchedViaSpdy);
            this.D = a ? this.G : 1;
            this.j = null;
            1 < this.D && (this.j = new Set);
            this.B = null;
            this.C = []
        },
        zAb = function(a) {
            return a.B ? !0 : a.j ? a.j.size >= a.D : !1
        },
        sAb = function(a) {
            return a.B ? 1 : a.j ? a.j.size : 0
        },
        qAb = function(a, b) {
            return a.B ? a.B == b : a.j ? a.j.has(b) : !1
        },
        tAb =
        function(a, b) {
            a.j ? a.j.add(b) : a.B = b
        },
        vAb = function(a, b) {
            a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        AAb = function(a) {
            if (null != a.B) return a.C.concat(a.B.oa);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.C;
                a = g.u(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.oa);
                return b
            }
            return g.Mb(a.C)
        },
        BAb = function(a, b) {
            var c = new v8;
            if (g.Sa.Image) {
                var d = new Image;
                d.onload = g.kb(F8, c, "TestLoadImage: loaded", !0, b, d);
                d.onerror = g.kb(F8, c, "TestLoadImage: error", !1, b, d);
                d.onabort = g.kb(F8, c, "TestLoadImage: abort", !1, b, d);
                d.ontimeout = g.kb(F8, c, "TestLoadImage: timeout", !1, b, d);
                g.Sa.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        CAb = function(a, b) {
            var c = new v8,
                d = new AbortController,
                e = setTimeout(function() {
                    d.abort();
                    F8(c, "TestPingServer: timeout", !1, b)
                }, 1E4);
            fetch(a, {
                signal: d.signal
            }).then(function(f) {
                clearTimeout(e);
                f.ok ? F8(c, "TestPingServer: ok", !0, b) : F8(c, "TestPingServer: server error", !1, b)
            }).catch(function() {
                clearTimeout(e);
                F8(c, "TestPingServer: error", !1, b)
            })
        },
        F8 = function(a, b, c, d, e) {
            try {
                e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c)
            } catch (f) {}
        },
        DAb = function() {
            this.j = new r8
        },
        EAb = function(a, b, c) {
            var d = c || "";
            try {
                azb(a, function(e, f) {
                    var h = e;
                    g.cb(e) && (h = g.Km(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        G8 = function(a, b, c) {
            return c && c.V7 ? c.V7[a] || b : b
        },
        FAb = function(a) {
            this.C = [];
            this.Wb = this.xd = this.Na = this.dc = this.j = this.Ne = this.Ga = this.Ma = this.N = this.Pb = this.W = null;
            this.Qf = this.fb = 0;
            this.Of = G8("failFast", !1, a);
            this.Va = this.ma = this.Z = this.K = this.G = null;
            this.Kc = !0;
            this.ke = this.Xa = -1;
            this.Mb = this.oa = this.Ba = 0;
            this.kh = G8("baseRetryDelayMs", 5E3, a);
            this.Rf = G8("retryDelaySeedMs", 1E4, a);
            this.Pf = G8("forwardChannelMaxRetries", 2, a);
            this.Ce = G8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.De = a && a.Pnb || void 0;
            this.dg = a && a.Lmb || void 0;
            this.Cf = a && a.Lnb || !1;
            this.Za = void 0;
            this.Sa = a && a.xca ||
                !1;
            this.D = "";
            this.B = new yAb(a && a.Tkb);
            this.Df = new DAb;
            this.ub = a && a.llb || !1;
            this.rb = a && a.Zkb || !1;
            this.ub && this.rb && (this.rb = !1);
            this.Sf = a && a.Lkb || !1;
            a && a.nlb && (this.Kc = !1);
            this.Nc = !this.ub && this.Kc && a && a.Xkb || !1;
            this.od = void 0;
            a && a.iY && 0 < a.iY && (this.od = a.iY);
            this.md = void 0;
            this.Qd = 0;
            this.kb = !1;
            this.Db = this.Ea = null
        },
        C8 = function(a) {
            a.j && (GAb(a), a.j.cancel(), a.j = null)
        },
        HAb = function(a) {
            C8(a);
            a.Z && (g.Sa.clearTimeout(a.Z), a.Z = null);
            B8(a);
            a.B.cancel();
            a.K && ("number" === typeof a.K && g.Sa.clearTimeout(a.K), a.K = null)
        },
        E8 = function(a) {
            zAb(a.B) || a.K || (a.K = !0, g.Xf(a.YS, a), a.Ba = 0)
        },
        JAb = function(a, b) {
            if (sAb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
            if (a.K) return a.C = b.oa.concat(a.C), !0;
            if (1 == a.Fh || 2 == a.Fh || a.Ba >= (a.Of ? 0 : a.Pf)) return !1;
            a.K = u8((0, g.jb)(a.YS, a, b), IAb(a, a.Ba));
            a.Ba++;
            return !0
        },
        LAb = function(a, b) {
            var c;
            b ? c = b.Kc : c = a.fb++;
            var d = a.Na.clone();
            g.Gp(d, "SID", a.D);
            g.Gp(d, "RID", c);
            g.Gp(d, "AID", a.Xa);
            H8(a, d);
            a.N && a.W && g.Kp(d, a.N, a.W);
            c = new w8(a, a.D, c, a.Ba + 1);
            null === a.N && (c.Na = a.W);
            b && (a.C = b.oa.concat(a.C));
            b = KAb(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.Ce) + Math.round(.5 * a.Ce * Math.random()));
            tAb(a.B, c);
            gAb(c, d, b)
        },
        H8 = function(a, b) {
            a.Ma && g.ad(a.Ma, function(c, d) {
                g.Gp(b, d, c)
            });
            a.G && azb({}, function(c, d) {
                g.Gp(b, d, c)
            })
        },
        KAb = function(a, b, c) {
            c = Math.min(a.C.length, c);
            var d = a.G ? (0, g.jb)(a.G.F2, a.G, a) : null;
            a: for (var e = a.C, f = -1;;) {
                var h = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        EAb(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            a = a.C.splice(0, c);
            b.oa = a;
            return d
        },
        wAb = function(a) {
            a.j || a.Z || (a.Mb = 1, g.Xf(a.XS, a), a.oa = 0)
        },
        rAb = function(a) {
            if (a.j || a.Z || 3 <= a.oa) return !1;
            a.Mb++;
            a.Z = u8((0, g.jb)(a.XS, a), IAb(a, a.oa));
            a.oa++;
            return !0
        },
        GAb = function(a) {
            null != a.Ea && (g.Sa.clearTimeout(a.Ea), a.Ea = null)
        },
        MAb = function(a) {
            a.j = new w8(a, a.D, "rpc", a.Mb);
            null === a.N && (a.j.Na = a.W);
            a.j.rb = 0;
            var b = a.xd.clone();
            g.Gp(b, "RID", "rpc");
            g.Gp(b, "SID", a.D);
            g.Gp(b, "AID", a.Xa);
            g.Gp(b, "CI", a.Va ? "0" : "1");
            !a.Va && a.od && g.Gp(b, "TO", a.od);
            g.Gp(b, "TYPE", "xmlhttp");
            H8(a, b);
            a.N && a.W && g.Kp(b, a.N, a.W);
            a.Za && a.j.setTimeout(a.Za);
            var c = a.j;
            a = a.Wb;
            c.Sa = 1;
            c.Z = a8(b.clone());
            c.W = null;
            c.Ga = !0;
            fAb(c, a)
        },
        B8 = function(a) {
            null != a.ma && (g.Sa.clearTimeout(a.ma), a.ma = null)
        },
        pAb = function(a, b) {
            var c = null;
            if (a.j == b) {
                B8(a);
                GAb(a);
                a.j = null;
                var d = 2
            } else if (qAb(a.B, b)) c = b.oa, vAb(a.B, b), d = 1;
            else return;
            if (0 != a.Fh)
                if (b.C)
                    if (1 == d) {
                        c = b.W ? b.W.length : 0;
                        b = Date.now() - b.Ba;
                        var e = a.Ba;
                        d = aAb();
                        d.dispatchEvent(new dAb(d, c, b, e));
                        E8(a)
                    } else wAb(a);
            else {
                var f = b.Db;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && JAb(a, b) || 2 == d && rAb(a))) switch (c && 0 < c.length && (b = a.B, b.C = b.C.concat(c)), e) {
                    case 1:
                        D8(a, 5);
                        break;
                    case 4:
                        D8(a, 10);
                        break;
                    case 3:
                        D8(a, 6);
                        break;
                    default:
                        D8(a, 2)
                }
            }
        },
        IAb = function(a, b) {
            var c = a.kh + Math.floor(Math.random() *
                a.Rf);
            a.isActive() || (c *= 2);
            return c * b
        },
        D8 = function(a, b) {
            if (2 == b) {
                var c = (0, g.jb)(a.Dca, a),
                    d = a.dg,
                    e = !d;
                d = new g.Lo(d || "//www.google.com/images/cleardot.gif");
                g.Sa.location && "http" == g.Sa.location.protocol || g.zp(d, "https");
                a8(d);
                e ? BAb(d.toString(), c) : CAb(d.toString(), c)
            } else t8(2);
            a.Fh = 0;
            a.G && a.G.aT(b);
            NAb(a);
            HAb(a)
        },
        NAb = function(a) {
            a.Fh = 0;
            a.Db = [];
            if (a.G) {
                var b = AAb(a.B);
                if (0 != b.length || 0 != a.C.length) g.Ob(a.Db, b), g.Ob(a.Db, a.C), a.B.C.length = 0, g.Mb(a.C), a.C.length = 0;
                a.G.ZS()
            }
        },
        OAb = function(a) {
            if (0 == a.Fh) return a.Db;
            var b = [];
            g.Ob(b, AAb(a.B));
            g.Ob(b, a.C);
            return b
        },
        uAb = function(a, b, c) {
            var d = g.Hp(c);
            "" != d.j ? (b && g.Ap(d, b + "." + d.j), g.Bp(d, d.D)) : (d = g.Sa.location, d = bzb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Ga;
            c = a.Ne;
            b && c && g.Gp(d, b, c);
            g.Gp(d, "VER", a.WS);
            H8(a, d);
            return d
        },
        hAb = function(a, b, c) {
            if (b && !a.Sa) throw Error("Can't create secondary domain capable XhrIo object.");
            b = a.Cf && !a.De ? new g.bn(new g.Ho({
                N_: c
            })) : new g.bn(a.De);
            b.K = a.Sa;
            return b
        },
        PAb = function() {},
        QAb = function() {
            if (g.jf && !g.Tc(10)) throw Error("Environmental error: no available transport.");
        },
        J8 = function(a, b) {
            g.Ld.call(this);
            this.j = new FAb(b);
            this.G = a;
            this.B = b && b.M8 || null;
            a = b && b.L8 || null;
            b && b.Rkb && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.W = a;
            a = b && b.pmb || null;
            b && b.qY && (a ? a["X-WebChannel-Content-Type"] = b.qY : a = {
                "X-WebChannel-Content-Type": b.qY
            });
            b && b.vV && (a ? a["X-WebChannel-Client-Profile"] = b.vV : a = {
                "X-WebChannel-Client-Profile": b.vV
            });
            this.j.Pb = a;
            (a = b && b.omb) && !g.fc(a) && (this.j.N = a);
            this.K = b && b.xca || !1;
            this.D = b && b.knb || !1;
            (b = b && b.Q7) && !g.fc(b) && (this.j.Ga = b, g.id(this.B, b) && (a = this.B,
                b in a && delete a[b]));
            this.C = new I8(this)
        },
        RAb = function(a) {
            Yzb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.ed(b)) ? g.nd(b, this.j) : b : this.data = a
        },
        SAb = function(a) {
            Zzb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        I8 = function(a) {
            this.j = a
        },
        TAb = function(a, b) {
            this.B = a;
            this.j = b
        },
        UAb = function(a) {
            return OAb(a.j).map(function(b) {
                var c = a.B;
                b = b.map;
                "__data__" in b ? (b = b.__data__, c = c.D ? Yyb(b) : b) : c = b;
                return c
            })
        },
        K8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Sa.setTimeout(function() {
                a()
            }, b)
        },
        M8 = function(a) {
            L8.dispatchEvent(new VAb(L8, a))
        },
        VAb = function(a) {
            g.Bb.call(this, "statevent", a)
        },
        N8 = function(a, b, c, d) {
            this.j = a;
            this.D = b;
            this.N = c;
            this.K = d || 1;
            this.B = 45E3;
            this.C = new g.Lp(this);
            this.G = new g.fg;
            this.G.setInterval(250)
        },
        XAb = function(a, b, c) {
            a.Gx = 1;
            a.Nr = a8(b.clone());
            a.Iu = c;
            a.Ga = !0;
            WAb(a, null)
        },
        YAb = function(a, b, c, d, e) {
            a.Gx = 1;
            a.Nr = a8(b.clone());
            a.Iu = null;
            a.Ga = c;
            e && (a.q_ = !1);
            WAb(a, d)
        },
        WAb = function(a, b) {
            a.Fx = Date.now();
            O8(a);
            a.Pr = a.Nr.clone();
            b8(a.Pr, "t", a.K);
            a.rG = 0;
            a.lj = a.j.zL(a.j.OB() ? b : null);
            0 < a.xL && (a.pG = new q8((0, g.jb)(a.dT, a, a.lj), a.xL));
            a.C.Ta(a.lj, "readystatechange", a.H2);
            b = a.Hu ? g.pd(a.Hu) : {};
            a.Iu ? (a.qG = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.lj.send(a.Pr, a.qG, a.Iu, b)) : (a.qG = "GET", a.q_ && !g.Uc && (b.Connection = "close"), a.lj.send(a.Pr, a.qG, null, b));
            a.j.Nn(1)
        },
        aBb = function(a, b) {
            var c = a.rG,
                d = b.indexOf("\n", c);
            if (-1 == d) return ZAb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return $Ab;
            d += 1;
            if (d + c > b.length) return ZAb;
            b = b.slice(d, d + c);
            a.rG = d + c;
            return b
        },
        cBb = function(a, b) {
            a.Fx = Date.now();
            O8(a);
            var c = b ? window.location.hostname : "";
            a.Pr = a.Nr.clone();
            g.Gp(a.Pr, "DOMAIN", c);
            g.Gp(a.Pr, "t", a.K);
            try {
                a.uo = new ActiveXObject("htmlfile")
            } catch (m) {
                P8(a);
                a.Or = 7;
                M8(22);
                Q8(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in R8) f = R8[f];
                        else if (f in bBb) f = R8[f] = bBb[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                R8[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            c = g.ue(d + "</body></html>");
            a.uo.open();
            a.uo.write(g.te(c));
            a.uo.close();
            a.uo.parentWindow.m = (0, g.jb)(a.Faa, a);
            a.uo.parentWindow.d = (0, g.jb)(a.nZ, a, !0);
            a.uo.parentWindow.rpcClose = (0, g.jb)(a.nZ, a, !1);
            c = a.uo.createElement("DIV");
            a.uo.parentWindow.document.body.appendChild(c);
            d = g.ho(a.Pr.toString());
            d = g.Le(g.ke(d));
            d = g.ue('<iframe src="' + d + '"></iframe>');
            g.Lba(c, d);
            a.j.Nn(1)
        },
        O8 = function(a) {
            a.yL = Date.now() + a.B;
            dBb(a, a.B)
        },
        dBb = function(a, b) {
            if (null != a.Hx) throw Error("WatchDog timer not null");
            a.Hx = K8((0, g.jb)(a.G2, a), b)
        },
        eBb = function(a) {
            a.Hx && (g.Sa.clearTimeout(a.Hx), a.Hx = null)
        },
        Q8 = function(a) {
            a.j.Pg() || a.Gu || a.j.sG(a)
        },
        P8 = function(a) {
            eBb(a);
            g.vb(a.pG);
            a.pG = null;
            a.G.stop();
            a.C.zf();
            if (a.lj) {
                var b = a.lj;
                a.lj = null;
                b.abort();
                b.dispose()
            }
            a.uo && (a.uo = null)
        },
        fBb = function(a, b) {
            try {
                a.j.eT(a, b), a.j.Nn(4)
            } catch (c) {}
        },
        hBb = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                gBb(a, b, function(h) {
                    h ? c(!0) : g.Sa.setTimeout(function() {
                        hBb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        gBb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    S8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            g.Sa.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        S8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        iBb = function(a) {
            this.j = a;
            this.B = new r8
        },
        jBb = function(a) {
            var b = T8(a.j, a.BC, "/mail/images/cleardot.gif");
            a8(b);
            hBb(b.toString(), 5E3, (0, g.jb)(a.q5, a), 3, 2E3);
            a.Nn(1)
        },
        kBb = function(a) {
            var b = a.j.K;
            if (null != b) M8(5), b ? (M8(11), U8(a.j, a, !1)) : (M8(12), U8(a.j, a, !0));
            else if (a.Lj = new N8(a), a.Lj.Hu = a.AL, b = a.j, b = T8(b, b.OB() ? a.NB : null, a.BL), M8(5), !g.jf || g.Tc(10)) b8(b, "TYPE", "xmlhttp"), YAb(a.Lj, b, !1, a.NB, !1);
            else {
                b8(b, "TYPE", "html");
                var c = a.Lj;
                a = !!a.NB;
                c.Gx = 3;
                c.Nr = a8(b.clone());
                cBb(c, a)
            }
        },
        lBb = function(a, b, c) {
            this.j = 1;
            this.B = [];
            this.C = [];
            this.G = new r8;
            this.W = a || null;
            this.K = null != b ? b : null;
            this.Z = c || !1
        },
        mBb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        nBb = function(a, b, c, d) {
            g.Bb.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        oBb = function(a) {
            g.Bb.call(this, "serverreachability", a)
        },
        qBb = function(a) {
            a.I2(1, 0);
            a.tG = T8(a, null, a.CL);
            pBb(a)
        },
        rBb = function(a) {
            a.qs && (a.qs.abort(), a.qs = null);
            a.Lg && (a.Lg.cancel(), a.Lg = null);
            a.gq && (g.Sa.clearTimeout(a.gq), a.gq = null);
            V8(a);
            a.Wj && (a.Wj.cancel(), a.Wj = null);
            a.Qr && (g.Sa.clearTimeout(a.Qr), a.Qr = null)
        },
        sBb = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.B.push(new mBb(a.J2++, b));
            2 != a.j && 3 != a.j || pBb(a)
        },
        tBb = function(a) {
            var b = 0;
            a.Lg && b++;
            a.Wj && b++;
            return b
        },
        pBb = function(a) {
            a.Wj || a.Qr || (a.Qr = K8((0, g.jb)(a.iT, a), 0), a.Jx = 0)
        },
        wBb = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.QB = Math.floor(1E5 * Math.random());
                    b = a.QB++;
                    var c = new N8(a, "", b);
                    c.Hu = a.Fo;
                    var d = uBb(a),
                        e = a.tG.clone();
                    g.Gp(e, "RID", b);
                    g.Gp(e, "CVER", "1");
                    W8(a, e);
                    XAb(c, e, d);
                    a.Wj = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? vBb(a, b) : 0 == a.B.length || a.Wj || vBb(a))
        },
        vBb = function(a, b) {
            if (b)
                if (6 < a.Ju) {
                    a.B = a.C.concat(a.B);
                    a.C.length = 0;
                    var c = a.QB - 1;
                    b = uBb(a)
                } else c = b.N, b = b.Iu;
            else c = a.QB++, b = uBb(a);
            var d = a.tG.clone();
            g.Gp(d, "SID", a.D);
            g.Gp(d, "RID", c);
            g.Gp(d, "AID", a.Kx);
            W8(a, d);
            c = new N8(a, a.D, c, a.Jx + 1);
            c.Hu = a.Fo;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Wj = c;
            XAb(c, d, b)
        },
        W8 = function(a, b) {
            a.Pi && (a = a.Pi.mT()) && g.ad(a, function(c, d) {
                g.Gp(b, d, c)
            })
        },
        uBb = function(a) {
            var b = Math.min(a.B.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Ju && 0 < b) {
                var d = a.B[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    lE: void 0
                }, f++) {
                e.lE = a.B[f].j;
                var h = a.B[f].map;
                e.lE = 6 >= a.Ju ? f : e.lE - d;
                try {
                    g.ad(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.lE + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.lE + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.B.splice(0, b));
            return c.join("&")
        },
        xBb = function(a) {
            a.Lg || a.gq || (a.N = 1, a.gq = K8((0, g.jb)(a.hT, a), 0), a.Ix = 0)
        },
        zBb = function(a) {
            if (a.Lg || a.gq || 3 <= a.Ix) return !1;
            a.N++;
            a.gq = K8((0, g.jb)(a.hT, a), yBb(a, a.Ix));
            a.Ix++;
            return !0
        },
        U8 = function(a, b, c) {
            a.WK = null == a.K ? c : !a.K;
            a.Go = b.fq;
            a.Z || qBb(a)
        },
        V8 = function(a) {
            null != a.Ku && (g.Sa.clearTimeout(a.Ku), a.Ku = null)
        },
        yBb = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        X8 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Pi && (c = null);
                var d = (0, g.jb)(a.Cca, a);
                c || (c = new g.Lo("//www.google.com/images/cleardot.gif"), a8(c));
                gBb(c.toString(), 1E4, d)
            } else M8(2);
            ABb(a, b)
        },
        ABb = function(a, b) {
            a.j = 0;
            a.Pi && a.Pi.jT(b);
            BBb(a);
            rBb(a)
        },
        BBb = function(a) {
            a.j = 0;
            a.Go = -1;
            if (a.Pi)
                if (0 == a.C.length && 0 == a.B.length) a.Pi.DL();
                else {
                    var b = g.Mb(a.C),
                        c = g.Mb(a.B);
                    a.C.length = 0;
                    a.B.length = 0;
                    a.Pi.DL(b, c)
                }
        },
        T8 = function(a, b, c) {
            var d = g.Hp(c);
            if ("" != d.j) b && g.Ap(d, b + "." + d.j), g.Bp(d, d.D);
            else {
                var e = window.location;
                d = bzb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.PB && g.ad(a.PB, function(f, h) {
                g.Gp(d, h, f)
            });
            g.Gp(d, "VER", a.Ju);
            W8(a, d);
            return d
        },
        CBb = function() {},
        DBb = function() {
            this.j = [];
            this.B = []
        },
        EBb = function(a) {
            g.Bb.call(this, "channelMessage");
            this.message = a
        },
        FBb = function(a) {
            g.Bb.call(this, "channelError");
            this.error = a
        },
        GBb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        Y8 = function(a, b) {
            g.I.call(this);
            this.j = new g.Xu(this.xaa, 0, this);
            g.N(this, this.j);
            this.aj = 5E3;
            this.B = 0;
            if ("function" === typeof a) b && (a = (0, g.jb)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.jb)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.C = a
        },
        HBb = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.Ba = a;
            this.N = b;
            this.C = new g.Jv;
            this.B = new Y8(this.Rba, this);
            this.j = null;
            this.ma = !1;
            this.K = null;
            this.W = "";
            this.Z = this.G = 0;
            this.D = [];
            this.Sa = c;
            this.oa = d;
            this.Va = e;
            this.Na = new czb;
            this.Ea = new ezb;
            this.Ma = new gzb;
            this.Ga = new izb;
            this.Xa = new kzb;
            this.fb = new lzb
        },
        IBb = function(a) {
            if (a.j) {
                var b = a.oa(),
                    c = a.j.Fo || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Fo = c
            }
        },
        Z8 = function(a) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.B = !0;
            a = a || document.location.href;
            var b = Number(g.Rm(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Sm(a) || "";
            a = g.oc();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.lc(a, "10.0") && (this.B = !1))
        },
        $8 = function(a, b) {
            var c = a.j;
            a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
            return g.Ym(c + b, {})
        },
        JBb = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.kb(a.D, d, !0),
                onError: g.kb(a.C, e),
                onTimeout: g.kb(a.G, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.jC(b, a)
        },
        KBb = function(a, b) {
            g.Ld.call(this);
            var c = this;
            this.Ed = a();
            this.Ed.subscribe("handlerOpened", this.N2, this);
            this.Ed.subscribe("handlerClosed", this.L2, this);
            this.Ed.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Ed.subscribe("handlerMessage", this.M2, this);
            this.j = b
        },
        LBb = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new QAb : e;
            var f = void 0 === f ? new g.Jv : f;
            this.pathPrefix = a;
            this.j = b;
            this.Ba = c;
            this.G = f;
            this.Z = null;
            this.W = this.N = 0;
            this.channel = null;
            this.K = 0;
            this.C = new Y8(function() {
                d.C.isActive();
                var h;
                0 === (null == (h = d.channel) ? void 0 : sAb((new TAb(h, h.j)).j.B)) && d.connect(d.Z, d.N)
            });
            this.D = {};
            this.B = {};
            this.ma = !1;
            this.logger = null;
            this.oa = [];
            this.Fg = void 0;
            this.Na = new czb;
            this.Ea = new ezb;
            this.Ma = new gzb;
            this.Ga = new izb
        },
        MBb = function(a) {
            g.Ad(a.channel, "m", function() {
                a.K = 3;
                a.C.reset();
                a.Z = null;
                a.N = 0;
                for (var b = g.u(a.oa), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.oa = [];
                a.qa("webChannelOpened");
                dzb(a.Na, "WEB_CHANNEL")
            });
            g.Ad(a.channel, "n", function() {
                a.K = 0;
                a.C.isActive() || a.qa("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : UAb(new TAb(b, b.j));
                c && (a.oa = [].concat(g.oa(c)));
                fzb(a.Ea, "WEB_CHANNEL")
            });
            g.Ad(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.C.start(), a.channel && a.channel.close()) : a.qa("webChannelMessage", new GBb(c[0], c[1]));
                a.Fg = b.statusCode;
                hzb(a.Ma, "WEB_CHANNEL")
            });
            g.Ad(a.channel, "o", function() {
                401 === a.Fg || a.C.start();
                a.qa("webChannelError");
                jzb(a.Ga, "WEB_CHANNEL")
            })
        },
        NBb = function(a) {
            var b = a.Ba();
            b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
        },
        OBb = function(a) {
            g.Ld.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.Q2, this);
            this.j.subscribe("webChannelClosed", this.O2, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.P2, this)
        },
        PBb = function(a, b, c, d, e) {
            function f() {
                return new HBb($8(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.NB("enable_mdx_web_channel_desktop") ? new OBb(function() {
                return new LBb($8(a, "/wc"), b, c)
            }) : new KBb(f, e)
        },
        TBb = function() {
            var a = QBb;
            RBb();
            a9.push(a);
            SBb()
        },
        b9 = function(a, b) {
            RBb();
            var c = UBb(a, String(b));
            0 == a9.length ? VBb(c) : (SBb(), g.bc(a9, function(d) {
                d(c)
            }))
        },
        c9 = function(a) {
            b9("CP", a)
        },
        RBb = function() {
            a9 || (a9 = g.Va("yt.mdx.remote.debug.handlers_") || [], g.Ua("yt.mdx.remote.debug.handlers_", a9))
        },
        VBb = function(a) {
            var b = (d9 + 1) % 50;
            d9 = b;
            e9[b] = a;
            f9 || (f9 = 49 == b)
        },
        SBb = function() {
            var a = a9;
            if (e9[0]) {
                var b = f9 ? d9 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = e9[b];
                    g.bc(a, function(d) {
                        d(c)
                    })
                } while (b != d9);
                e9 = Array(50);
                d9 = -1;
                f9 = !1
            }
        },
        UBb = function(a, b) {
            var c = (Date.now() - WBb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g9 = function(a) {
            g.lG.call(this);
            this.K = a;
            this.screens = []
        },
        XBb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        YBb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.wt(a.screens, function(f) {
                return !!yzb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = XBb(a, b[d]) || c;
            return c
        },
        ZBb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.wt(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        $Bb = function(a, b, c, d, e) {
            g.lG.call(this);
            this.C = a;
            this.N = b;
            this.D = c;
            this.K = d;
            this.G = e;
            this.B = 0;
            this.j = null;
            this.kd = NaN
        },
        i9 = function(a) {
            g9.call(this, "LocalScreenService");
            this.B = a;
            this.j = NaN;
            h9(this);
            this.info("Initializing with " + vzb(this.screens))
        },
        aCb = function(a) {
            if (a.screens.length) {
                var b = g.Lr(a.screens, function(d) {
                        return d.id
                    }),
                    c = $8(a.B, "/pairing/get_lounge_token_batch");
                JBb(a.B, c, {
                    screen_ids: b.join(",")
                }, (0, g.jb)(a.n7, a), (0, g.jb)(a.m7, a))
            }
        },
        h9 = function(a) {
            if (g.NB("deprecate_pair_servlet_enabled")) return YBb(a, []);
            var b = uzb(Fzb());
            b = g.wt(b, function(c) {
                return !c.uuid
            });
            return YBb(a, b)
        },
        j9 = function(a, b) {
            Hzb(g.Lr(a.screens, szb));
            b && Gzb()
        },
        cCb = function(a, b) {
            g.lG.call(this);
            this.K = b;
            b = (b = g.bD("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Gb(b, h)
            }
            this.j = c;
            this.G = a;
            this.C = this.D = NaN;
            this.B = null;
            bCb("Initialized with " + g.Km(this.j))
        },
        dCb = function(a, b, c) {
            var d = $8(a.G, "/pairing/get_screen_availability");
            JBb(a.G, d, {
                lounge_token: b.token
            }, (0, g.jb)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c("online" == e[h].status);
                        return
                    }
                c(!1)
            }, a), (0, g.jb)(function() {
                c(!1)
            }, a))
        },
        fCb = function(a, b) {
            a: if (Wyb(b) != Wyb(a.j)) var c = !1;
                else {
                    c = g.hd(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (bCb("Updated online screens: " + g.Km(a.j)), a.j = b, a.qa("screenChange"));eCb(a)
        },
        k9 = function(a) {
            isNaN(a.C) || g.gC(a.C);
            a.C = g.eC((0, g.jb)(a.bR, a), 0 < a.D && a.D < g.ob() ? 2E4 : 1E4)
        },
        bCb = function(a) {
            b9("OnlineScreenService", a)
        },
        gCb = function(a) {
            var b = {};
            g.bc(a.K(), function(c) {
                c.token ? b[c.token] = c.id : this.cg("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        eCb = function(a) {
            a = g.hd(g.bd(a.j, function(b) {
                return b
            }));
            g.Zb(a);
            a.length ? g.aD("yt-remote-online-screen-ids", a.join(","), 60) : g.cD("yt-remote-online-screen-ids")
        },
        l9 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g9.call(this, "ScreenService");
            this.D = a;
            this.N = b;
            this.j = this.B = null;
            this.C = [];
            this.G = {};
            hCb(this)
        },
        jCb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.G[b]);
            var h = a.Mk(),
                l = c ? h8(h, c) : null;
            c && (a.N || l) || (l = h8(h, b));
            if (l) {
                l.uuid = b;
                var m = m9(a, l);
                dCb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? iCb(a, c, (0, g.jb)(function(n) {
                var p = m9(this, new e8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                dCb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        kCb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        lCb = function(a, b, c) {
            dCb(a.j, b, c)
        },
        iCb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.jC($8(a.D, "/pairing/get_lounge_token_batch"), e)
        },
        mCb = function(a) {
            a.screens = a.B.Mk();
            var b = a.G,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + vzb(a.screens))
        },
        hCb = function(a) {
            nCb(a);
            a.B = new i9(a.D);
            a.B.subscribe("screenChange", (0, g.jb)(a.x7, a));
            mCb(a);
            a.N || (a.C = uzb(g.bD("yt-remote-automatic-screen-cache") || []));
            nCb(a);
            a.info("Initializing automatic screens: " + vzb(a.C));
            a.j = new cCb(a.D, (0, g.jb)(a.Mk, a, !0));
            a.j.subscribe("screenChange", (0, g.jb)(function() {
                this.qa("onlineScreenChange")
            }, a))
        },
        m9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = h8(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.N || oCb(a));
            nCb(a);
            a.G[b.uuid] = b.id;
            g.aD("yt-remote-device-id-map", a.G, 31536E3);
            return b
        },
        oCb = function(a) {
            a = g.wt(a.C, function(b) {
                return "shortLived" != b.idType
            });
            g.aD("yt-remote-automatic-screen-cache", g.Lr(a, szb))
        },
        nCb = function(a) {
            a.G = g.bD("yt-remote-device-id-map") || {}
        },
        n9 = function(a, b, c) {
            g.lG.call(this);
            this.Ga = c;
            this.D = a;
            this.B = b;
            this.j = null
        },
        o9 = function(a, b) {
            a.j = b;
            a.qa("sessionScreen", a.j)
        },
        pCb = function(a, b) {
            a.j && (a.j.token = b, m9(a.D, a.j));
            a.qa("sessionScreen", a.j)
        },
        p9 = function(a, b) {
            b9(a.Ga, b)
        },
        q9 = function(a, b, c) {
            n9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.C = null;
            this.oa = (0, g.jb)(this.V2, this);
            this.Ea = (0, g.jb)(this.Naa, this);
            this.ma = g.eC(function() {
                qCb(d, null)
            }, 12E4);
            this.N = this.G = this.K = this.Z = 0;
            this.Ba = !1;
            this.W = "unknown"
        },
        sCb = function(a, b) {
            g.gC(a.N);
            a.N = 0;
            0 == b ? rCb(a) : a.N = g.eC(function() {
                rCb(a)
            }, b)
        },
        rCb = function(a) {
            tCb(a, "getLoungeToken");
            g.gC(a.G);
            a.G = g.eC(function() {
                uCb(a, null)
            }, 3E4)
        },
        tCb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Km());
            var c = {};
            c.type = b;
            a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.jb)(function() {
                p9(this, "Failed to send message: " + b + ".")
            }, a)) : p9(a, "Sending yt message without session: " + g.Km(c))
        },
        vCb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.GW(b, function(c) {
                o9(a, c)
            }, function() {
                return a.Cj()
            }, 5)) : a.Cj(Error("Waiting for session status timed out."))
        },
        xCb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new e8(b);
            wCb(a, d, function(e) {
                e ? (a.Ba = !0, m9(a.D, d), o9(a, d), a.W = "unknown", sCb(a, c)) : (g.QB(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Cj())
            }, 5)
        },
        qCb = function(a, b) {
            g.gC(a.ma);
            a.ma = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? xCb(a, {
                    name: a.B.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.QB(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), vCb(a, b.screenId))) : (g.QB(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), vCb(a, b.screenId)) :
                vCb(a, b.screenId) : a.Cj(Error("Waiting for session status timed out."))
        },
        uCb = function(a, b) {
            g.gC(a.G);
            a.G = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.W = c, sCb(a, 3E4)) : (pCb(a, b.loungeToken), a.Ba = !1, a.W = "unknown", sCb(a, b.loungeTokenRefreshIntervalMs))
        },
        wCb = function(a, b, c, d) {
            g.gC(a.K);
            a.K = 0;
            lCb(a.D, b, function(e) {
                e || 0 > d ? c(e) : a.K = g.eC(function() {
                    wCb(a, b, c, d - 1)
                }, 300)
            })
        },
        yCb = function(a) {
            g.gC(a.Z);
            a.Z = 0;
            g.gC(a.K);
            a.K = 0;
            g.gC(a.ma);
            a.ma = 0;
            g.gC(a.G);
            a.G = 0;
            g.gC(a.N);
            a.N = 0
        },
        r9 = function(a, b, c, d) {
            n9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.C = this.Z = null;
            this.Ea = "";
            this.Sa = c;
            this.Na = null;
            this.ma = function() {};
            this.W = NaN;
            this.Ma = (0, g.jb)(this.W2, this);
            this.G = function() {};
            this.N = this.K = 0;
            this.oa = !1;
            this.Ba = "unknown"
        },
        s9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.C) ? 0 : b.getDialAppInfo))
        },
        zCb = function(a) {
            a.G = a.D.oT(a.Ea, a.B.label, a.B.friendlyName, s9(a), function(b, c) {
                a.G = function() {};
                a.oa = !0;
                o9(a, b);
                "shortLived" == b.idType && 0 < c && t9(a, c)
            }, function(b) {
                a.G = function() {};
                a.Cj(b)
            })
        },
        ACb = function(a) {
            var b = {};
            b.pairingCode = a.Ea;
            b.theme = a.Sa;
            Jzb() && (b.env_useStageMdx = 1);
            return g.Xm(b)
        },
        BCb = function(a) {
            return new Promise(function(b) {
                a.Ea = wzb();
                if (a.Na) {
                    var c = new chrome.cast.DialLaunchResponse(!0, ACb(a));
                    b(c);
                    zCb(a)
                } else a.ma = function() {
                    g.gC(a.W);
                    a.ma = function() {};
                    a.W = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, ACb(a));
                    b(d);
                    zCb(a)
                }, a.W = g.eC(function() {
                    a.ma()
                }, 100)
            })
        },
        DCb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new e8(b);
            return (new Promise(function(e) {
                CCb(a, d, function(f) {
                    f ? (a.oa = !0, m9(a.D, d), o9(a, d), t9(a, c)) : g.QB(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : BCb(a)
            })
        },
        ECb = function(a, b) {
            var c = a.Z.receiver.label,
                d = a.B.friendlyName;
            return (new Promise(function(e) {
                jCb(a.D, c, b, d, function(f) {
                    f && f.token && o9(a, f);
                    e(f)
                }, function(f) {
                    p9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : BCb(a)
            })
        },
        CCb = function(a, b, c, d) {
            g.gC(a.K);
            a.K = 0;
            lCb(a.D, b, function(e) {
                e || 0 > d ? c(e) : a.K = g.eC(function() {
                    CCb(a, b, c, d - 1)
                }, 300)
            })
        },
        t9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            s9(a) && (g.gC(a.N), a.N = 0, 0 == b ? FCb(a) : a.N = g.eC(function() {
                FCb(a)
            }, b))
        },
        FCb = function(a) {
            s9(a) && a.C.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Ba = c, t9(a, 3E4)) : (a.oa = !1, a.Ba = "unknown", pCb(a, b.loungeToken), t9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Ba = "noLoungeTokenResponse";
                t9(a, 3E4)
            })
        },
        GCb = function(a) {
            g.gC(a.K);
            a.K = 0;
            g.gC(a.N);
            a.N = 0;
            a.G();
            a.G = function() {};
            g.gC(a.W)
        },
        u9 = function(a, b) {
            n9.call(this, a, b, "ManualSession");
            this.C = g.eC((0, g.jb)(this.Nz, this, null), 150)
        },
        v9 = function(a, b) {
            g.lG.call(this);
            this.config_ = b;
            this.B = a;
            this.Z = b.appId || "233637DE";
            this.D = b.theme || "cl";
            this.W = b.disableCastApi || !1;
            this.K = b.forceMirroring || !1;
            this.j = null;
            this.N = !1;
            this.C = [];
            this.G = (0, g.jb)(this.G$, this)
        },
        HCb = function(a, b) {
            return b ? g.Eb(a.C, function(c) {
                return f8(b, c.label)
            }, a) : null
        },
        w9 = function(a) {
            b9("Controller", a)
        },
        QBb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        x9 = function(a) {
            return a.N || !!a.C.length || !!a.j
        },
        y9 = function(a, b, c) {
            b != a.j && (g.vb(a.j), (a.j = b) ? (c ? a.qa("yt-remote-cast2-receiver-resumed",
                b.B) : a.qa("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.jb)(a.lZ, a, b)), b.subscribe("sessionFailed", function() {
                return ICb(a, b)
            }), b.j ? a.qa("yt-remote-cast2-session-change", b.j) : c && a.j.Nz(null)) : a.qa("yt-remote-cast2-session-change", null))
        },
        ICb = function(a, b) {
            a.j == b && a.qa("yt-remote-cast2-session-failed")
        },
        JCb = function(a) {
            var b = a.B.nT(),
                c = a.j && a.j.B;
            a = g.Lr(b, function(d) {
                c && f8(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = HCb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        QCb = function(a, b, c, d) {
            d.disableCastApi ? z9("Cannot initialize because disabled by Mdx config.") : KCb() ? LCb(b, d) && (MCb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? NCb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? NCb(a, c) : (A9("Failed to load cast API: " + f), OCb(!1), MCb(!1), g.cD("yt-remote-cast-available"), g.cD("yt-remote-cast-receiver"),
                    PCb(), c(!1))
            }, d.loadCastApiSetupScript ? g.dta("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= Lzb() && Uzb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? Pzb() : 89 <= Lzb() ? Wzb() : (Tzb(), o8(Vzb.map(Qzb))))) : z9("Cannot initialize because not running Chrome")
        },
        PCb = function() {
            z9("dispose");
            var a = B9();
            a && a.dispose();
            g.Ua("yt.mdx.remote.cloudview.instance_", null);
            RCb(!1);
            g.RE(SCb);
            SCb.length = 0
        },
        C9 = function() {
            return !!g.bD("yt-remote-cast-installed")
        },
        TCb = function() {
            var a = g.bD("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        UCb = function() {
            z9("clearCurrentReceiver");
            g.cD("yt-remote-cast-receiver")
        },
        VCb = function() {
            return C9() ? B9() ? B9().getCastSession() : (A9("getCastSelector: Cast is not initialized."), null) : (A9("getCastSelector: Cast API is not installed!"), null)
        },
        WCb = function() {
            C9() ? B9() ? D9() ? (z9("Requesting cast selector."), B9().requestSession()) : (z9("Wait for cast API to be ready to request the session."), SCb.push(g.QE("yt-remote-cast2-api-ready", WCb))) : A9("requestCastSelector: Cast is not initialized.") : A9("requestCastSelector: Cast API is not installed!")
        },
        E9 = function(a, b) {
            D9() ? B9().setConnectedScreenStatus(a, b) : A9("setConnectedScreenStatus called before ready.")
        },
        KCb = function() {
            var a = 0 <= g.oc().search(/ (CrMo|Chrome|CriOS)\//);
            return g.XK || a
        },
        XCb = function(a, b) {
            B9().init(a, b)
        },
        LCb = function(a, b) {
            var c = !1;
            B9() || (a = new v9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.aD("yt-remote-cast-available", d);
                m8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                z9("onReceiverSelected: " + d.friendlyName);
                g.aD("yt-remote-cast-receiver", d);
                m8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                z9("onReceiverResumed: " + d.friendlyName);
                g.aD("yt-remote-cast-receiver", d);
                m8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                z9("onSessionChange: " + g8(d));
                d || g.cD("yt-remote-cast-receiver");
                m8("yt-remote-cast2-session-change", d)
            }), g.Ua("yt.mdx.remote.cloudview.instance_", a), c = !0);
            z9("cloudview.createSingleton_: " + c);
            return c
        },
        B9 = function() {
            return g.Va("yt.mdx.remote.cloudview.instance_")
        },
        NCb = function(a, b) {
            OCb(!0);
            MCb(!1);
            XCb(a, function(c) {
                c ? (RCb(!0), g.SE("yt-remote-cast2-api-ready")) : (A9("Failed to initialize cast API."), OCb(!1), g.cD("yt-remote-cast-available"), g.cD("yt-remote-cast-receiver"), PCb());
                b(c)
            })
        },
        z9 = function(a) {
            b9("cloudview", a)
        },
        A9 = function(a) {
            b9("cloudview", a)
        },
        OCb = function(a) {
            z9("setCastInstalled_ " + a);
            g.aD("yt-remote-cast-installed", a)
        },
        D9 = function() {
            return !!g.Va("yt.mdx.remote.cloudview.apiReady_")
        },
        RCb = function(a) {
            z9("setApiReady_ " + a);
            g.Ua("yt.mdx.remote.cloudview.apiReady_", a)
        },
        MCb = function(a) {
            g.Ua("yt.mdx.remote.cloudview.initializing_", a)
        },
        F9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.K = this.N = 0;
            this.trackData = null;
            this.Pk = this.yp = !1;
            this.Z = this.G = this.j = this.D = 0;
            this.C = NaN;
            this.B = !1;
            this.reset(a)
        },
        YCb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.yp = !1;
            a.Pk = !1;
            a.N = 0;
            a.K = g.ob();
            a.D = 0;
            a.j = 0;
            a.G = 0;
            a.Z = 0;
            a.C = NaN;
            a.B = !1
        },
        G9 = function(a) {
            return a.isPlaying() ? (g.ob() - a.K) / 1E3 : 0
        },
        H9 = function(a, b) {
            a.N = b;
            a.K = g.ob()
        },
        I9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.ob() - a.K) / 1E3 + a.N;
                case -1E3:
                    return 0
            }
            return a.N
        },
        J9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && YCb(a)
        },
        ZCb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.qd(a.trackData);
            b.hasPrevious = a.yp;
            b.hasNext = a.Pk;
            b.playerTime = a.N;
            b.playerTimeAt = a.K;
            b.seekableStart = a.D;
            b.seekableEnd = a.j;
            b.duration = a.G;
            b.loadedTime = a.Z;
            b.liveIngestionTime = a.C;
            return b
        },
        L9 = function(a, b) {
            g.lG.call(this);
            var c = this;
            this.C = 0;
            this.D = a;
            this.K = [];
            this.G = new DBb;
            this.B = this.j = null;
            this.W = (0, g.jb)(this.w9, this);
            this.N = (0, g.jb)(this.vE, this);
            this.Z = (0, g.jb)(this.v9, this);
            this.ma = (0, g.jb)(this.z9, this);
            var d = 0;
            a ? (d = a.getProxyState(), 3 != d && (a.subscribe("proxyStateChange", this.yR, this), $Cb(this))) : d = 3;
            0 != d && (b ? this.yR(d) : g.eC(function() {
                c.yR(d)
            }, 0));
            (a = VCb()) && K9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.ma)
        },
        M9 = function(a) {
            return new F9(a.D.getPlayerContextData())
        },
        $Cb = function(a) {
            g.bc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.K.push(this.D.subscribe(b, g.kb(this.E$, b), this))
            }, a)
        },
        aDb = function(a) {
            g.bc(a.K, function(b) {
                this.D.unsubscribeByKey(b)
            }, a);
            a.K.length = 0
        },
        N9 = function(a) {
            return 1 == a.getState()
        },
        O9 = function(a, b) {
            var c = a.G;
            50 > c.j.length + c.B.length && a.G.B.push(b)
        },
        bDb = function(a, b, c) {
            var d = M9(a);
            H9(d, c); - 1E3 != d.playerState && (d.playerState = b);
            P9(a, d)
        },
        Q9 = function(a, b, c) {
            a.D.sendMessage(b, c)
        },
        P9 = function(a, b) {
            aDb(a);
            a.D.setPlayerContextData(ZCb(b));
            $Cb(a)
        },
        K9 = function(a, b) {
            a.B && (a.B.removeUpdateListener(a.W), a.B.removeMediaListener(a.N), a.vE(null));
            a.B = b;
            a.B && (c9("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.W), a.B.addMediaListener(a.N), a.B.media.length && a.vE(a.B.media[0]))
        },
        cDb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = M9(a);
                b.contentId != d.videoId && c9("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                H9(d, a.j.getEstimatedTime());
                P9(a, d)
            } else c9("No cast media video. Ignoring state update.")
        },
        R9 = function(a, b, c) {
            return (0, g.jb)(function(d) {
                this.cg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.cg("Retrying " + b + " using MDx browser channel."), Q9(this, b, c))
            }, a)
        },
        U9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.lG.call(this);
            var e = this;
            this.K = NaN;
            this.Ea = !1;
            this.W = this.Z = this.oa = this.Ba = NaN;
            this.ma = [];
            this.G = this.N = this.D = this.j = this.B = null;
            this.Na = a;
            this.Ma = d;
            this.ma.push(g.SC(window, "beforeunload", function() {
                e.Vy(2)
            }));
            this.C = [];
            this.j = new F9;
            this.Sa = b.id;
            this.Ga = b.idType;
            this.B = PBb(this.Na, c, this.sT, "shortLived" == this.Ga, this.Sa);
            this.B.Ta("channelOpened", function() {
                dDb(e)
            });
            this.B.Ta("channelClosed", function() {
                S9("Channel closed");
                isNaN(e.K) ? k8(!0) : k8();
                e.dispose()
            });
            this.B.Ta("channelError", function(f) {
                k8();
                isNaN(e.xD()) ? (1 == f && "shortLived" == e.Ga && e.qa("browserChannelAuthError", f), S9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Ea = !0, S9("Channel error: " + f + " with reconnection in " + e.xD() + " ms"), T9(e, 2))
            });
            this.B.Ta("channelMessage", function(f) {
                eDb(e, f)
            });
            this.B.yr(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.dD() && g.aD("yt-remote-session-video-id", f)
            })
        },
        fDb = function(a) {
            return g.Eb(a.C, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        S9 = function(a) {
            b9("conn", a)
        },
        T9 = function(a, b) {
            a.qa("proxyStateChange", b)
        },
        gDb = function(a) {
            a.K = g.eC(function() {
                S9("Connecting timeout");
                a.Vy(1)
            }, 2E4)
        },
        hDb = function(a) {
            g.gC(a.K);
            a.K = NaN
        },
        iDb = function(a) {
            g.gC(a.Ba);
            a.Ba = NaN
        },
        kDb = function(a) {
            jDb(a);
            a.oa = g.eC(function() {
                V9(a, "getNowPlaying")
            }, 2E4)
        },
        jDb = function(a) {
            g.gC(a.oa);
            a.oa = NaN
        },
        dDb = function(a) {
            S9("Channel opened");
            a.Ea && (a.Ea = !1, iDb(a), a.Ba = g.eC(function() {
                S9("Timing out waiting for a screen.");
                a.Vy(1)
            }, 15E3))
        },
        mDb = function(a, b) {
            var c = null;
            if (b) {
                var d = fDb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ua("yt.mdx.remote.remoteClient_", c);
            b && (hDb(a), iDb(a));
            c = a.B.Dz() && isNaN(a.K);
            b == c ? b && (T9(a, 1), V9(a, "getSubtitlesTrack")) : b ? (a.zW() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), lDb(a)) : a.Vy(1)
        },
        nDb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.ld(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.qa("remotePlayerChange"))
        },
        oDb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            J9(a.j, d, e);
            a.qa("remoteQueueChange", c)
        },
        qDb = function(a, b) {
            b.params = b.params || {};
            oDb(a, b, "NOW_PLAYING_MAY_CHANGE");
            pDb(a, b);
            a.qa("autoplayDismissed")
        },
        pDb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            H9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.Z = isNaN(c) ? 0 : c;
            a.j.jl(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.C = d;
            c.B = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.D = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? kDb(a) : jDb(a);
            a.qa("remotePlayerChange")
        },
        rDb = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                H9(a.j, isNaN(b) ? 0 : b);
                a.qa("remotePlayerChange")
            }
        },
        sDb = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.qa("remotePlayerChange")
        },
        tDb = function(a, b) {
            a.N = b.params.videoId;
            a.qa("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        uDb = function(a, b) {
            a.N = b.params.videoId || null;
            a.qa("autoplayUpNext", a.N)
        },
        vDb = function(a, b) {
            a.G = b.params.autoplayMode;
            a.qa("autoplayModeChange", a.G);
            "DISABLED" == a.G && a.qa("autoplayDismissed")
        },
        wDb = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.yp = "true" == b.params.hasPrevious;
            a.j.Pk = c;
            a.qa("previousNextChange")
        },
        eDb = function(a, b) {
            b = b.message;
            b.params ? S9("Received: action=" + b.action + ", params=" + g.Km(b.params)) : S9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = c8(b.params.devices);
                    a.C = g.Lr(b, function(d) {
                        return new pzb(d)
                    });
                    b = !!g.Eb(a.C, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    mDb(a, b);
                    b = a.EX("mlm");
                    a.qa("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Kb(a.C, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    mDb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new pzb(c8(b.params.device));
                    g.Eb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    }) || Vyb(a.C, c);
                    break;
                case "remoteDisconnected":
                    c = new pzb(c8(b.params.device));
                    g.Kb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    oDb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    qDb(a, b);
                    break;
                case "onStateChange":
                    pDb(a, b);
                    break;
                case "onAdStateChange":
                    rDb(a, b);
                    break;
                case "onVolumeChanged":
                    sDb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    nDb(a, b);
                    break;
                case "nowAutoplaying":
                    tDb(a, b);
                    break;
                case "autoplayDismissed":
                    a.qa("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    uDb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    vDb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    wDb(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.qa("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.qa("loopModeChange", b.params.loopMode);
                    break;
                default:
                    S9("Unrecognized action: " + b.action)
            }
        },
        lDb = function(a) {
            g.gC(a.W);
            a.W = g.eC(function() {
                a.Vy(1)
            }, 864E5)
        },
        V9 = function(a, b, c) {
            c ? S9("Sending: action=" + b + ", params=" + g.Km(c)) : S9("Sending: action=" + b);
            a.B.sendMessage(b, c)
        },
        xDb = function(a) {
            g9.call(this, "ScreenServiceProxy");
            this.dh = a;
            this.j = [];
            this.j.push(this.dh.$_s("screenChange", (0, g.jb)(this.b3, this)));
            this.j.push(this.dh.$_s("onlineScreenChange", (0, g.jb)(this.m$, this)))
        },
        CDb = function(a, b) {
            Izb();
            if (!l8 || !l8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.LB("MDX_CONFIG") || b;
                zzb();
                Dzb();
                W9 || (W9 = new Z8(b ? b.loungeApiHost : void 0), Jzb() && (W9.j = "/api/loungedev"));
                X9 || (X9 = g.Va("yt.mdx.remote.deferredProxies_") || [], g.Ua("yt.mdx.remote.deferredProxies_", X9));
                yDb();
                var c = Y9();
                if (!c) {
                    var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ua("yt.mdx.remote.screenService_", d);
                    c = Y9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ua("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    QCb(a, d, function(f) {
                        f ? Z9() && E9(Z9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            m8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Va("yt.mdx.remote.initialized_") && (g.Ua("yt.mdx.remote.initialized_", !0), $9("Initializing: " + g.Km(b)),
                    a$.push(g.QE("yt-remote-cast2-api-ready", function() {
                        m8("yt-remote-api-ready")
                    })), a$.push(g.QE("yt-remote-cast2-availability-change", function() {
                        m8("yt-remote-receiver-availability-change")
                    })), a$.push(g.QE("yt-remote-cast2-receiver-selected", function() {
                        b$(null);
                        m8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), a$.push(g.QE("yt-remote-cast2-receiver-resumed", function() {
                        m8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), a$.push(g.QE("yt-remote-cast2-session-change", zDb)), a$.push(g.QE("yt-remote-connection-change", function(f) {
                        f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), UCb())
                    })), a$.push(g.QE("yt-remote-cast2-session-failed", function() {
                        m8("yt-remote-connection-failed")
                    })), a = ADb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.NB("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), $9(" -- with channel params: " + g.Km(a)), a ? (g.aD("yt-remote-session-app", a.app), g.aD("yt-remote-session-name", a.name)) : (g.cD("yt-remote-session-app"), g.cD("yt-remote-session-name")), g.Ua("yt.mdx.remote.channelParams_", a), c.start(), Z9() || BDb())
            }
        },
        DDb = function() {
            var a = Y9().dh.$_gos();
            var b = d$();
            b && e$() && (yzb(a, b) || a.push(b));
            return xzb(a)
        },
        FDb = function() {
            var a = EDb();
            !a && C9() && TCb() && (a = {
                key: "cast-selector-receiver",
                name: TCb()
            });
            return a
        },
        EDb = function() {
            var a = DDb(),
                b = d$();
            b || (b = c$());
            return g.Eb(a, function(c) {
                return b && f8(b, c.key) ? !0 : !1
            })
        },
        d$ = function() {
            var a = Z9();
            if (!a) return null;
            var b = Y9().Mk();
            return h8(b, a)
        },
        zDb = function(a) {
            $9("remote.onCastSessionChange_: " + g8(a));
            if (a) {
                var b = d$();
                if (b && b.id == a.id) {
                    if (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) f$ && (f$.token = a), (b = e$()) && b.yr(a)
                } else b && g$(), h$(a, 1)
            } else e$() && g$()
        },
        g$ = function() {
            D9() ? B9().stopSession() : A9("stopSession called before API ready.");
            var a = e$();
            a && (a.disconnect(1), GDb(null))
        },
        HDb = function() {
            var a = e$();
            return !!a && 3 != a.getProxyState()
        },
        $9 = function(a) {
            b9("remote", a)
        },
        Y9 = function() {
            if (!IDb) {
                var a = g.Va("yt.mdx.remote.screenService_");
                IDb = a ? new xDb(a) : null
            }
            return IDb
        },
        Z9 = function() {
            return g.Va("yt.mdx.remote.currentScreenId_")
        },
        JDb = function(a) {
            g.Ua("yt.mdx.remote.currentScreenId_", a)
        },
        KDb = function() {
            return g.Va("yt.mdx.remote.connectData_")
        },
        b$ = function(a) {
            g.Ua("yt.mdx.remote.connectData_", a)
        },
        e$ = function() {
            return g.Va("yt.mdx.remote.connection_")
        },
        GDb = function(a) {
            var b = e$();
            b$(null);
            a || JDb("");
            g.Ua("yt.mdx.remote.connection_", a);
            X9 && (g.bc(X9, function(c) {
                c(a)
            }), X9.length = 0);
            b && !a ? m8("yt-remote-connection-change", !1) : !b && a && m8("yt-remote-connection-change", !0)
        },
        c$ = function() {
            var a = g.dD();
            if (!a) return null;
            var b = Y9();
            if (!b) return null;
            b = b.Mk();
            return h8(b, a)
        },
        h$ = function(a, b) {
            Z9();
            d$() && d$();
            if (i$) f$ = a;
            else {
                JDb(a.id);
                var c = g.Va("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new U9(W9, a, ADb(), c);
                a.connect(b, KDb());
                a.subscribe("beforeDisconnect", function(d) {
                    m8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    e$() && (e$(), GDb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = d$();
                    d && "shortLived" == d.idType && (D9() ? B9().handleBrowserChannelAuthError() : A9("refreshLoungeToken called before API ready."))
                });
                GDb(a)
            }
        },
        BDb = function() {
            var a = c$();
            a ? ($9("Resume connection to: " + g8(a)), h$(a, 0)) : (k8(), UCb(), $9("Skipping connecting because no session screen found."))
        },
        yDb = function() {
            var a = ADb();
            if (g.ld(a)) {
                a = j8();
                var b = g.bD("yt-remote-session-name") || "",
                    c = g.bD("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.LB("SESSION_INDEX", "0"));
                (b = g.LB("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Ua("yt.mdx.remote.channelParams_", a)
            }
        },
        ADb = function() {
            return g.Va("yt.mdx.remote.channelParams_") || {}
        },
        NDb = function(a, b, c) {
            g.I.call(this);
            var d = this;
            this.module = a;
            this.J = b;
            this.Gc = c;
            this.events = new g.ZK(this);
            this.W = this.events.T(this.J, "onVolumeChange", function(e) {
                LDb(d, e)
            });
            this.D = !1;
            this.G = new g.NL(64);
            this.j = new g.Xu(this.J_, 500, this);
            this.B = new g.Xu(this.K_, 1E3, this);
            this.N = new p8(this.bda, 0, this);
            this.C = {};
            this.Z = new g.Xu(this.C0, 1E3, this);
            this.K = new q8(this.seekTo, 1E3, this);
            g.N(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.X9);
            this.events.T(b, "captionschanged", this.t9);
            this.events.T(b, "captionssettingschanged", this.S_);
            this.events.T(b, "videoplayerreset", this.CJ);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Gc.NV()
            });
            b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                MDb(d.module) || j$(d) || k$(d, 0)
            });
            a = this.Gc;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.iZ, this);
            a.subscribe("remotePlayerChange", this.BE, this);
            a.subscribe("remoteQueueChange", this.CJ, this);
            a.subscribe("previousNextChange", this.fZ, this);
            a.subscribe("nowAutoplaying", this.aZ, this);
            a.subscribe("autoplayDismissed", this.FY, this);
            g.N(this, this.j);
            g.N(this, this.B);
            g.N(this, this.N);
            g.N(this, this.Z);
            g.N(this, this.K);
            this.S_();
            this.CJ();
            this.BE()
        },
        LDb = function(a, b) {
            if (j$(a)) {
                a.Gc.unsubscribe("remotePlayerChange", a.BE, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = M9(a.Gc);
                if (c !== d.volume || b !== d.muted) a.Gc.setVolume(c, b), a.Z.start();
                a.Gc.subscribe("remotePlayerChange", a.BE, a)
            }
        },
        ODb = function(a) {
            a.Mc(0);
            a.j.stop();
            a.Dc(new g.NL(64))
        },
        PDb = function(a, b) {
            if (j$(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.J.getSubtitlesUserSettings()
                }, g.rd(c, b));
                a.Gc.rT(a.J.getVideoData(1).videoId, c);
                a.C = M9(a.Gc).trackData
            }
        },
        k$ = function(a, b) {
            var c = a.J.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.J.getVideoData(1);
            a.Gc.playVideo(c.videoId, b, d, e, c.playerParams, c.oa, Uyb(c));
            a.Dc(new g.NL(1))
        },
        QDb = function(a, b) {
            if (b) {
                var c = a.J.getOption("captions", "tracklist", {
                    sX: 1
                });
                c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0)
            } else a.J.setOption("captions", "track", {})
        },
        j$ = function(a) {
            return M9(a.Gc).videoId === a.J.getVideoData(1).videoId
        },
        l$ = function() {
            g.V.call(this, {
                I: "div",
                S: "ytp-mdx-popup-dialog",
                Y: {
                    role: "dialog"
                },
                V: [{
                    I: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    V: [{
                        I: "div",
                        S: "ytp-mdx-popup-title",
                        ya: "You're signed out"
                    }, {
                        I: "div",
                        S: "ytp-mdx-popup-description",
                        ya: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        I: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        V: [{
                            I: "button",
                            La: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            ya: "Cancel"
                        }, {
                            I: "button",
                            La: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            ya: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.VG(this, 250);
            this.cancelButton = this.Ha("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ha("ytp-mdx-privacy-popup-confirm");
            g.N(this, this.j);
            this.T(this.cancelButton, "click", this.B);
            this.T(this.confirmButton, "click", this.C)
        },
        m$ = function(a) {
            g.V.call(this, {
                I: "div",
                S: "ytp-remote",
                V: [{
                    I: "div",
                    S: "ytp-remote-display-status",
                    V: [{
                        I: "div",
                        S: "ytp-remote-display-status-icon",
                        V: [g.dwa()]
                    }, {
                        I: "div",
                        S: "ytp-remote-display-status-text",
                        ya: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.VG(this, 250);
            g.N(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.Ec(a.Ub())
        },
        n$ = function(a, b) {
            g.NX.call(this, "Play on", 1, a, b);
            this.J = a;
            this.Qt = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        RDb = function(a) {
            g.TV.call(this, a);
            this.Fp = {
                key: wzb(),
                name: "This computer"
            };
            this.Ml = null;
            this.subscriptions = [];
            this.GQ = this.Gc = null;
            this.Qt = [this.Fp];
            this.xs = this.Fp;
            this.Je = new g.NL(64);
            this.QX = 0;
            this.Rh = -1;
            this.TE = !1;
            this.RE = this.KA = null;
            if (!g.pS(this.player.U()) && !g.sH(this.player.U())) {
                a = this.player;
                var b = g.sU(a);
                b && (b = b.tp()) && (b = new n$(a, b), g.N(this, b));
                b = new m$(a);
                g.N(this, b);
                g.EU(a, b.element, 4);
                this.KA = new l$;
                g.N(this, this.KA);
                g.EU(a, this.KA.element, 4);
                this.TE = !!c$()
            }
        },
        o$ = function(a) {
            a.RE && (a.player.removeEventListener("presentingplayerstatechange",
                a.RE), a.RE = null)
        },
        SDb = function(a, b, c) {
            a.Je = c;
            a.player.qa("presentingplayerstatechange", new g.aH(c, b))
        },
        p$ = function(a, b) {
            if (b.key !== a.xs.key)
                if (b.key === a.Fp.key) g$();
                else if (MDb(a) && TDb(a), a.xs = b, !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.sH(a.player.U())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.getLength(); l++) h[l] = g.QV(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.oa,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = Uyb(d)) && (a.locationInfo = d);
                    d = a
                }
                $9("Connecting to: " + g.Km(b));
                "cast-selector-receiver" == b.key ? (b$(d || null), b = d || null, D9() ? B9().setLaunchParams(b) : A9("setLaunchParams called before ready.")) : !d && HDb() && Z9() == b.key ? m8("yt-remote-connection-change", !0) : (g$(), b$(d || null), d = Y9().Mk(), (b = h8(d, b.key)) && h$(b, 1))
            }
        },
        MDb = function(a) {
            var b = a.player.U();
            return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.TE || !a.KA ? !1 : g.zS(b) || g.BS(b)
        },
        TDb = function(a) {
            a.player.Ub().isPlaying() ? a.player.pauseVideo() : (a.RE = function(b) {
                !a.TE && g.dH(b, 8) && (a.player.pauseVideo(), o$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.RE));
            a.KA && a.KA.rd();
            e$() || (i$ = !0)
        };
    g.Ry.prototype.Ks = g.ea(0, function() {
        return g.Tj(this, 6)
    });
    var bBb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        R8 = {
            "'": "\\'"
        },
        qzb = {
            xoa: "atp",
            n5a: "ska",
            H1a: "que",
            UTa: "mus",
            m5a: "sus",
            eFa: "dsp",
            v3a: "seq",
            wSa: "mic",
            Yva: "dpa",
            Spa: "cds",
            KTa: "mlm",
            Mva: "dsdtr",
            uUa: "ntb",
            Wgb: "vsp",
            Nwa: "scn",
            V1a: "rpe",
            Jva: "dcn",
            Kva: "dcp",
            jZa: "pas",
            Lva: "drq"
        },
        rzb = {
            C4: "u",
            CLASSIC: "cl",
            l4: "k",
            J1: "i",
            q1: "cr",
            r4: "m",
            G1: "g",
            CU: "up"
        },
        Czb = "",
        l8 = null;
    Kzb.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.NB("enable_client_streamz_web")) {
            a = g.u(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.Mea(c.value), c = {
                serializedIncrementBatch: g.tg(c.j())
            }, g.uD("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var n8, Szb = Mzb("loadCastFramework") || Mzb("loadCastApplicationFramework"),
        Vzb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.pb(p8, g.I);
    g.k = p8.prototype;
    g.k.z2 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.kd ? this.C = g.ob() + this.aj : this.kd = g.gg(this.G, this.aj)
    };
    g.k.stop = function() {
        this.kd && (g.Sa.clearTimeout(this.kd), this.kd = null);
        this.C = null;
        this.j = !1;
        this.D = []
    };
    g.k.pause = function() {
        ++this.B
    };
    g.k.resume = function() {
        this.B && (--this.B, !this.B && this.j && (this.j = !1, this.K.apply(null, this.D)))
    };
    g.k.xa = function() {
        this.stop();
        p8.Nf.xa.call(this)
    };
    g.k.A2 = function() {
        this.kd && (g.Sa.clearTimeout(this.kd), this.kd = null);
        this.C ? (this.kd = g.gg(this.G, this.C - g.ob()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D))
    };
    g.w(q8, g.I);
    g.k = q8.prototype;
    g.k.wL = function(a) {
        this.C = arguments;
        this.kd || this.B ? this.j = !0 : Xzb(this)
    };
    g.k.stop = function() {
        this.kd && (g.Sa.clearTimeout(this.kd), this.kd = null, this.j = !1, this.C = null)
    };
    g.k.pause = function() {
        this.B++
    };
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.kd || (this.j = !1, Xzb(this))
    };
    g.k.xa = function() {
        g.I.prototype.xa.call(this);
        this.stop()
    };
    r8.prototype.stringify = function(a) {
        return g.Sa.JSON.stringify(a, void 0)
    };
    r8.prototype.parse = function(a) {
        return g.Sa.JSON.parse(a, void 0)
    };
    g.pb(Yzb, g.Bb);
    g.pb(Zzb, g.Bb);
    var $zb = null;
    g.pb(bAb, g.Bb);
    g.pb(cAb, g.Bb);
    g.pb(dAb, g.Bb);
    v8.prototype.debug = function() {};
    v8.prototype.info = function() {};
    v8.prototype.warning = function() {};
    var lAb = {},
        kAb = {};
    g.k = w8.prototype;
    g.k.setTimeout = function(a) {
        this.ub = a
    };
    g.k.D2 = function(a) {
        a = a.target;
        var b = this.Xa;
        b && 3 == g.en(a) ? b.wL() : this.VS(a)
    };
    g.k.VS = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.en(this.j),
                    c = this.j.B,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.CS || this.j && (this.B.B || g.Kn(this.j) || g.Ln(this.j)))) {
                    this.Ma || 4 != b || 7 == c || (8 == c || 0 >= d ? s8(3) : s8(2));
                    A8(this);
                    var e = this.j.getStatus();
                    this.Db = e;
                    b: if (iAb(this)) {
                        var f = g.Ln(this.j);
                        a = "";
                        var h = f.length,
                            l = 4 == g.en(this.j);
                        if (!this.B.C) {
                            if ("undefined" === typeof TextDecoder) {
                                y8(this);
                                z8(this);
                                var m = "";
                                break b
                            }
                            this.B.C = new g.Sa.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.B.B = !0, a += this.B.C.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        });
                        f.length = 0;
                        this.B.j += a;
                        this.K = 0;
                        m = this.B.j
                    } else m = g.Kn(this.j);
                    if (this.C = 200 == e) {
                        if (this.Mb && !this.Va) {
                            b: {
                                if (this.j) {
                                    var n = g.Mn(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.fc(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Va = !0,
                            mAb(this, e);
                            else {
                                this.C = !1;
                                this.N = 3;
                                t8(12);
                                y8(this);
                                z8(this);
                                break a
                            }
                        }
                        this.Ga ? (nAb(this, b, m), g.CS && this.C && 3 == b && (this.Za.Ta(this.kb, "tick", this.C2), this.kb.start())) : mAb(this, m);
                        4 == b && y8(this);
                        this.C && !this.Ma && (4 == b ? pAb(this.G, this) : (this.C = !1, x8(this)))
                    } else g.Cfa(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.N = 3, t8(12)) : (this.N = 0, t8(13)), y8(this), z8(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.k.C2 = function() {
        if (this.j) {
            var a = g.en(this.j),
                b = g.Kn(this.j);
            this.K < b.length && (A8(this), nAb(this, a, b), this.C && 4 != a && x8(this))
        }
    };
    g.k.cancel = function() {
        this.Ma = !0;
        y8(this)
    };
    g.k.B2 = function() {
        this.ma = null;
        var a = Date.now();
        0 <= a - this.Pb ? (2 != this.Sa && (s8(3), t8(17)), y8(this), this.N = 2, z8(this)) : oAb(this, this.Pb - a)
    };
    g.k.getLastError = function() {
        return this.N
    };
    g.k.lO = function() {
        return this.j
    };
    yAb.prototype.cancel = function() {
        this.C = AAb(this);
        if (this.B) this.B.cancel(), this.B = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = FAb.prototype;
    g.k.WS = 8;
    g.k.Fh = 1;
    g.k.connect = function(a, b, c, d) {
        t8(0);
        this.dc = a;
        this.Ma = b || {};
        c && void 0 !== d && (this.Ma.OSID = c, this.Ma.OAID = d);
        this.Va = this.Kc;
        this.Na = uAb(this, null, this.dc);
        E8(this)
    };
    g.k.disconnect = function() {
        HAb(this);
        if (3 == this.Fh) {
            var a = this.fb++,
                b = this.Na.clone();
            g.Gp(b, "SID", this.D);
            g.Gp(b, "RID", a);
            g.Gp(b, "TYPE", "terminate");
            H8(this, b);
            a = new w8(this, this.D, a);
            a.Sa = 2;
            a.Z = a8(b.clone());
            b = !1;
            if (g.Sa.navigator && g.Sa.navigator.sendBeacon) try {
                b = g.Sa.navigator.sendBeacon(a.Z.toString(), "")
            } catch (c) {}!b && g.Sa.Image && ((new Image).src = a.Z, b = !0);
            b || (a.j = hAb(a.G, null), a.j.send(a.Z));
            a.Ba = Date.now();
            x8(a)
        }
        NAb(this)
    };
    g.k.Pg = function() {
        return 0 == this.Fh
    };
    g.k.getState = function() {
        return this.Fh
    };
    g.k.YS = function(a) {
        if (this.K)
            if (this.K = null, 1 == this.Fh) {
                if (!a) {
                    this.fb = Math.floor(1E5 * Math.random());
                    a = this.fb++;
                    var b = new w8(this, "", a),
                        c = this.W;
                    this.Pb && (c ? (c = g.pd(c), g.rd(c, this.Pb)) : c = this.Pb);
                    null !== this.N || this.rb || (b.Na = c, c = null);
                    var d;
                    if (this.ub) a: {
                        for (var e = d = 0; e < this.C.length; e++) {
                            b: {
                                var f = this.C[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.C.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = KAb(this, b, d);
                    e = this.Na.clone();
                    g.Gp(e, "RID", a);
                    g.Gp(e, "CVER", 22);
                    this.Ga && g.Gp(e, "X-HTTP-Session-Id", this.Ga);
                    H8(this, e);
                    c && (this.rb ? d = "headers=" + g.Je(g.Hga(c)) + "&" + d : this.N && g.Kp(e, this.N, c));
                    tAb(this.B, b);
                    this.Sf && g.Gp(e, "TYPE", "init");
                    this.ub ? (g.Gp(e, "$req", d), g.Gp(e, "SID", "null"), b.Mb = !0, gAb(b, e, null)) : gAb(b, e, d);
                    this.Fh = 2
                }
            } else 3 == this.Fh && (a ? LAb(this, a) : 0 == this.C.length || zAb(this.B) || LAb(this))
    };
    g.k.XS = function() {
        this.Z = null;
        MAb(this);
        if (this.Nc && !(this.kb || null == this.j || 0 >= this.Qd)) {
            var a = 2 * this.Qd;
            this.Ea = u8((0, g.jb)(this.s9, this), a)
        }
    };
    g.k.s9 = function() {
        this.Ea && (this.Ea = null, this.Va = !1, this.kb = !0, t8(10), C8(this), MAb(this))
    };
    g.k.UP = function(a) {
        this.j == a && this.Nc && !this.kb && (GAb(this), this.kb = !0, t8(11))
    };
    g.k.E2 = function() {
        null != this.ma && (this.ma = null, C8(this), rAb(this), t8(19))
    };
    g.k.Dca = function(a) {
        a ? t8(2) : t8(1)
    };
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    };
    g.k = PAb.prototype;
    g.k.cT = function() {};
    g.k.bT = function() {};
    g.k.aT = function() {};
    g.k.ZS = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.F2 = function() {};
    g.pb(J8, g.Ld);
    J8.prototype.open = function() {
        this.j.G = this.C;
        this.K && (this.j.Sa = !0);
        this.j.connect(this.G, this.B || void 0)
    };
    J8.prototype.close = function() {
        this.j.disconnect()
    };
    J8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.Km(a), a = c);
        b.C.push(new xAb(b.Qf++, a));
        3 == b.Fh && E8(b)
    };
    J8.prototype.xa = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        J8.Nf.xa.call(this)
    };
    g.pb(RAb, Yzb);
    g.pb(SAb, Zzb);
    g.pb(I8, PAb);
    I8.prototype.cT = function() {
        this.j.dispatchEvent("m")
    };
    I8.prototype.bT = function(a) {
        this.j.dispatchEvent(new RAb(a))
    };
    I8.prototype.aT = function(a) {
        this.j.dispatchEvent(new SAb(a))
    };
    I8.prototype.ZS = function() {
        this.j.dispatchEvent("n")
    };
    var L8 = new g.Ld;
    g.w(VAb, g.Bb);
    g.k = N8.prototype;
    g.k.Hu = null;
    g.k.eq = !1;
    g.k.Hx = null;
    g.k.yL = null;
    g.k.Fx = null;
    g.k.Gx = null;
    g.k.Nr = null;
    g.k.Pr = null;
    g.k.Iu = null;
    g.k.lj = null;
    g.k.rG = 0;
    g.k.uo = null;
    g.k.qG = null;
    g.k.Or = null;
    g.k.MB = -1;
    g.k.q_ = !0;
    g.k.Gu = !1;
    g.k.xL = 0;
    g.k.pG = null;
    var $Ab = {},
        ZAb = {};
    g.k = N8.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.H2 = function(a) {
        a = a.target;
        var b = this.pG;
        b && 3 == g.en(a) ? b.wL() : this.dT(a)
    };
    g.k.dT = function(a) {
        try {
            if (a == this.lj) a: {
                var b = g.en(this.lj),
                    c = this.lj.B,
                    d = this.lj.getStatus();
                if (g.jf && !g.Tc(10) || g.Uc && !g.Rc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Kn(this.lj)) break a;this.Gu || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Nn(3) : this.j.Nn(2));eBb(this);
                var e = this.lj.getStatus();this.MB = e;
                var f = g.Kn(this.lj);
                if (this.eq = 200 == e) {
                    4 == b && P8(this);
                    if (this.Ga) {
                        for (a = !0; !this.Gu && this.rG < f.length;) {
                            var h = aBb(this, f);
                            if (h == ZAb) {
                                4 == b && (this.Or = 4, M8(15), a = !1);
                                break
                            } else if (h == $Ab) {
                                this.Or = 4;
                                M8(16);
                                a = !1;
                                break
                            } else fBb(this, h)
                        }
                        4 == b && 0 == f.length && (this.Or = 1, M8(17), a = !1);
                        this.eq = this.eq && a;
                        a || (P8(this), Q8(this))
                    } else fBb(this, f);
                    this.eq && !this.Gu && (4 == b ? this.j.sG(this) : (this.eq = !1, O8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Or = 3, M8(13)) : (this.Or = 0, M8(14)),
                P8(this),
                Q8(this)
            }
        } catch (l) {} finally {}
    };
    g.k.Faa = function(a) {
        K8((0, g.jb)(this.Eaa, this, a), 0)
    };
    g.k.Eaa = function(a) {
        this.Gu || (eBb(this), fBb(this, a), O8(this))
    };
    g.k.nZ = function(a) {
        K8((0, g.jb)(this.Daa, this, a), 0)
    };
    g.k.Daa = function(a) {
        this.Gu || (P8(this), this.eq = a, this.j.sG(this), this.j.Nn(4))
    };
    g.k.cancel = function() {
        this.Gu = !0;
        P8(this)
    };
    g.k.G2 = function() {
        this.Hx = null;
        var a = Date.now();
        0 <= a - this.yL ? (2 != this.Gx && this.j.Nn(3), P8(this), this.Or = 2, M8(18), Q8(this)) : dBb(this, this.yL - a)
    };
    g.k.getLastError = function() {
        return this.Or
    };
    g.k = iBb.prototype;
    g.k.AL = null;
    g.k.Lj = null;
    g.k.ZJ = !1;
    g.k.L_ = null;
    g.k.DH = null;
    g.k.gP = null;
    g.k.BL = null;
    g.k.Jl = null;
    g.k.fq = -1;
    g.k.NB = null;
    g.k.BC = null;
    g.k.connect = function(a) {
        this.BL = a;
        a = T8(this.j, null, this.BL);
        M8(3);
        this.L_ = Date.now();
        var b = this.j.W;
        null != b ? (this.NB = b[0], (this.BC = b[1]) ? (this.Jl = 1, jBb(this)) : (this.Jl = 2, kBb(this))) : (b8(a, "MODE", "init"), this.Lj = new N8(this), this.Lj.Hu = this.AL, YAb(this.Lj, a, !1, null, !0), this.Jl = 0)
    };
    g.k.q5 = function(a) {
        if (a) this.Jl = 2, kBb(this);
        else {
            M8(4);
            var b = this.j;
            b.Go = b.qs.fq;
            X8(b, 9)
        }
        a && this.Nn(2)
    };
    g.k.zL = function(a) {
        return this.j.zL(a)
    };
    g.k.abort = function() {
        this.Lj && (this.Lj.cancel(), this.Lj = null);
        this.fq = -1
    };
    g.k.Pg = function() {
        return !1
    };
    g.k.eT = function(a, b) {
        this.fq = a.MB;
        if (0 == this.Jl)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Go = this.fq;
                    X8(a, 2);
                    return
                }
                this.NB = c[0];
                this.BC = c[1]
            } else a = this.j, a.Go = this.fq, X8(a, 2);
        else if (2 == this.Jl)
            if (this.ZJ) M8(7), this.gP = Date.now();
            else if ("11111" == b) {
            if (M8(6), this.ZJ = !0, this.DH = Date.now(), a = this.DH - this.L_, !g.jf || g.Tc(10) || 500 > a) this.fq = 200, this.Lj.cancel(), M8(12), U8(this.j, this, !0)
        } else M8(8), this.DH = this.gP = Date.now(), this.ZJ = !1
    };
    g.k.sG = function() {
        this.fq = this.Lj.MB;
        if (this.Lj.eq) 0 == this.Jl ? this.BC ? (this.Jl = 1, jBb(this)) : (this.Jl = 2, kBb(this)) : 2 == this.Jl && ((!g.jf || g.Tc(10) ? !this.ZJ : 200 > this.gP - this.DH) ? (M8(11), U8(this.j, this, !1)) : (M8(12), U8(this.j, this, !0)));
        else {
            0 == this.Jl ? M8(9) : 2 == this.Jl && M8(10);
            var a = this.j;
            this.Lj.getLastError();
            a.Go = this.fq;
            X8(a, 2)
        }
    };
    g.k.OB = function() {
        return this.j.OB()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.Nn = function(a) {
        this.j.Nn(a)
    };
    g.k = lBb.prototype;
    g.k.Fo = null;
    g.k.PB = null;
    g.k.Wj = null;
    g.k.Lg = null;
    g.k.CL = null;
    g.k.tG = null;
    g.k.fT = null;
    g.k.uG = null;
    g.k.QB = 0;
    g.k.J2 = 0;
    g.k.Pi = null;
    g.k.Qr = null;
    g.k.gq = null;
    g.k.Ku = null;
    g.k.qs = null;
    g.k.WK = null;
    g.k.Kx = -1;
    g.k.gT = -1;
    g.k.Go = -1;
    g.k.Jx = 0;
    g.k.Ix = 0;
    g.k.Ju = 8;
    g.pb(nBb, g.Bb);
    g.pb(oBb, g.Bb);
    g.k = lBb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        M8(0);
        this.CL = b;
        this.PB = c || {};
        d && void 0 !== e && (this.PB.OSID = d, this.PB.OAID = e);
        this.Z ? (K8((0, g.jb)(this.xV, this, a), 100), qBb(this)) : this.xV(a)
    };
    g.k.disconnect = function() {
        rBb(this);
        if (3 == this.j) {
            var a = this.QB++,
                b = this.tG.clone();
            g.Gp(b, "SID", this.D);
            g.Gp(b, "RID", a);
            g.Gp(b, "TYPE", "terminate");
            W8(this, b);
            a = new N8(this, this.D, a);
            a.Gx = 2;
            a.Nr = a8(b.clone());
            (new Image).src = a.Nr.toString();
            a.Fx = Date.now();
            O8(a)
        }
        BBb(this)
    };
    g.k.xV = function(a) {
        this.qs = new iBb(this);
        this.qs.AL = this.Fo;
        this.qs.B = this.G;
        this.qs.connect(a)
    };
    g.k.Pg = function() {
        return 0 == this.j
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.iT = function(a) {
        this.Qr = null;
        wBb(this, a)
    };
    g.k.hT = function() {
        this.gq = null;
        this.Lg = new N8(this, this.D, "rpc", this.N);
        this.Lg.Hu = this.Fo;
        this.Lg.xL = 0;
        var a = this.fT.clone();
        g.Gp(a, "RID", "rpc");
        g.Gp(a, "SID", this.D);
        g.Gp(a, "CI", this.WK ? "0" : "1");
        g.Gp(a, "AID", this.Kx);
        W8(this, a);
        if (!g.jf || g.Tc(10)) g.Gp(a, "TYPE", "xmlhttp"), YAb(this.Lg, a, !0, this.uG, !1);
        else {
            g.Gp(a, "TYPE", "html");
            var b = this.Lg,
                c = !!this.uG;
            b.Gx = 3;
            b.Nr = a8(a.clone());
            cBb(b, c)
        }
    };
    g.k.eT = function(a, b) {
        if (0 != this.j && (this.Lg == a || this.Wj == a))
            if (this.Go = a.MB, this.Wj == a && 3 == this.j)
                if (7 < this.Ju) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.gq) {
                                if (this.Lg)
                                    if (this.Lg.Fx + 3E3 < this.Wj.Fx) V8(this), this.Lg.cancel(), this.Lg = null;
                                    else break a;
                                zBb(this);
                                M8(19)
                            }
                        }
                    else this.gT = a[1], 0 < this.gT - this.Kx && 37500 > a[2] && this.WK && 0 == this.Ix && !this.Ku && (this.Ku = K8((0, g.jb)(this.K2, this), 6E3));
                    else X8(this, 11)
                } else null != b && X8(this, 11);
        else if (this.Lg ==
            a && V8(this), !g.fc(b))
            for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.Kx = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.D = c[1], this.uG = c[2], c = c[3], null != c ? this.Ju = c : this.Ju = 6, this.j = 3, this.Pi && this.Pi.lT(), this.fT = T8(this, this.OB() ? this.uG : null, this.CL), xBb(this)) : "stop" == c[0] && X8(this, 7) : 3 == this.j && ("stop" == c[0] ? X8(this, 7) : "noop" != c[0] && this.Pi && this.Pi.kT(c), this.Ix = 0)
    };
    g.k.K2 = function() {
        null != this.Ku && (this.Ku = null, this.Lg.cancel(), this.Lg = null, zBb(this), M8(20))
    };
    g.k.sG = function(a) {
        if (this.Lg == a) {
            V8(this);
            this.Lg = null;
            var b = 2
        } else if (this.Wj == a) this.Wj = null, b = 1;
        else return;
        this.Go = a.MB;
        if (0 != this.j)
            if (a.eq)
                if (1 == b) {
                    b = a.Iu ? a.Iu.length : 0;
                    a = Date.now() - a.Fx;
                    var c = L8;
                    c.dispatchEvent(new nBb(c, b, a, this.Jx));
                    pBb(this);
                    this.C.length = 0
                } else xBb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Go)) {
                if (d = 1 == b) this.Wj || this.Qr || 1 == this.j || 2 <= this.Jx ? d = !1 : (this.Qr = K8((0, g.jb)(this.iT, this, a), yBb(this, this.Jx)), this.Jx++, d = !0);
                d = !(d || 2 == b && zBb(this))
            }
            if (d) switch (c) {
                case 1:
                    X8(this,
                        5);
                    break;
                case 4:
                    X8(this, 10);
                    break;
                case 3:
                    X8(this, 6);
                    break;
                case 7:
                    X8(this, 12);
                    break;
                default:
                    X8(this, 2)
            }
        }
    };
    g.k.I2 = function(a) {
        if (!g.Gb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.Cca = function(a) {
        a ? M8(2) : (M8(1), ABb(this, 8))
    };
    g.k.zL = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.bn;
        a.K = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Pi && this.Pi.isActive(this)
    };
    g.k.Nn = function(a) {
        var b = L8;
        b.dispatchEvent(new oBb(b, a))
    };
    g.k.OB = function() {
        return !(!g.jf || g.Tc(10))
    };
    g.k = CBb.prototype;
    g.k.lT = function() {};
    g.k.kT = function() {};
    g.k.jT = function() {};
    g.k.DL = function() {};
    g.k.mT = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = DBb.prototype;
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.B.length
    };
    g.k.clear = function() {
        this.j = [];
        this.B = []
    };
    g.k.contains = function(a) {
        return g.Gb(this.j, a) || g.Gb(this.B, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.mgb)(b, a);
        0 <= c ? (g.Ib(b, c), b = !0) : b = !1;
        return b || g.Jb(this.B, a)
    };
    g.k.Yl = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.B.length;
        for (b = 0; b < c; ++b) a.push(this.B[b]);
        return a
    };
    g.w(EBb, g.Bb);
    g.w(FBb, g.Bb);
    g.pb(Y8, g.I);
    g.k = Y8.prototype;
    g.k.xaa = function() {
        this.aj = Math.min(3E5, 2 * this.aj);
        this.C();
        this.B && this.start()
    };
    g.k.start = function() {
        var a = this.aj + 15E3 * Math.random();
        g.ev(this.j, a);
        this.B = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.aj = 5E3
    };
    g.pb(HBb, CBb);
    g.k = HBb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    };
    g.k.Eh = function(a) {
        return this.C.Eh(a)
    };
    g.k.qa = function(a, b) {
        return this.C.qa.apply(this.C, arguments)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.vb(this.C), this.disconnect(), g.vb(this.B), this.B = null, this.oa = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.W = "";
            this.B.stop();
            this.K = a || null;
            this.G = b || 0;
            a = this.Ba + "/test";
            b = this.Ba + "/bind";
            var d = new lBb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Sa),
                e = this.j;
            e && (e.Pi = null);
            d.Pi = this;
            this.j = d;
            IBb(this);
            if (this.j) {
                d = g.LB("ID_TOKEN");
                var f = this.j.Fo || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Fo = f
            }
            e ? (3 != e.getState() && 0 == tBb(e) || e.getState(), this.j.connect(a, b, this.N, e.D, e.Kx)) : c ? this.j.connect(a,
                b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N)
        }
    };
    g.k.disconnect = function(a) {
        this.Z = a || 0;
        this.B.stop();
        IBb(this);
        this.j && (3 == this.j.getState() && wBb(this.j), this.j.disconnect());
        this.Z = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.rd(a, b);
        this.B.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.D.push(a) : this.Dz() && (IBb(this), sBb(this.j, a))
    };
    g.k.lT = function() {
        this.B.reset();
        this.K = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b) sBb(this.j, a[b])
        }
        this.qa("handlerOpened");
        dzb(this.Na, "BROWSER_CHANNEL")
    };
    g.k.jT = function(a) {
        var b = 2 == a && 401 == this.j.Go;
        4 == a || b || this.B.start();
        this.qa("handlerError", a, b);
        jzb(this.Ga, "BROWSER_CHANNEL")
    };
    g.k.DL = function(a, b) {
        if (!this.B.isActive()) this.qa("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.D.push(e)
            }
        fzb(this.Ea, "BROWSER_CHANNEL");
        a && this.Xa.j.EL("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.fb.j.EL("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.mT = function() {
        var a = {
            v: 2
        };
        this.W && (a.gsessionid = this.W);
        0 != this.G && (a.ui = "" + this.G);
        0 != this.Z && (a.ui = "" + this.Z);
        this.K && g.rd(a, this.K);
        return a
    };
    g.k.kT = function(a) {
        "S" == a[0] ? this.W = a[1] : "gracefulReconnect" == a[0] ? (this.B.start(), this.j.disconnect()) : this.qa("handlerMessage", new GBb(a[0], a[1]));
        hzb(this.Ma, "BROWSER_CHANNEL")
    };
    g.k.Dz = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.k.yr = function(a) {
        (this.N.loungeIdToken = a) || this.B.stop();
        if (this.Va && this.j) {
            var b = this.j.Fo || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Fo = b
        }
    };
    g.k.Ks = function() {
        return this.N.id
    };
    g.k.Ps = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    };
    g.k.Tw = function() {
        var a = this.B;
        g.fv(a.j);
        a.start()
    };
    g.k.Rba = function() {
        this.B.isActive();
        0 == tBb(this.j) && this.connect(this.K, this.G)
    };
    Z8.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    Z8.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    Z8.prototype.G = function(a) {
        a(Error("request timed out"))
    };
    g.w(KBb, g.Ld);
    g.k = KBb.prototype;
    g.k.connect = function(a, b, c) {
        this.Ed.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Ed.disconnect(a)
    };
    g.k.Tw = function() {
        this.Ed.Tw()
    };
    g.k.Ks = function() {
        return this.Ed.Ks()
    };
    g.k.Ps = function() {
        return this.Ed.Ps()
    };
    g.k.Dz = function() {
        return this.Ed.Dz()
    };
    g.k.N2 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Ed,
            b = this.j;
        g.aD("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.WK,
            sessionId: a.j.D,
            arrayId: a.j.Kx
        });
        g.aD("yt-remote-session-screen-id", b);
        a = i8();
        b = j8();
        g.Gb(a, b) || a.push(b);
        Bzb(a);
        Dzb()
    };
    g.k.L2 = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.M2 = function(a) {
        this.dispatchEvent(new EBb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new FBb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Ed.sendMessage(a, b)
    };
    g.k.yr = function(a) {
        this.Ed.yr(a)
    };
    g.k.dispose = function() {
        this.Ed.dispose()
    };
    g.k = LBb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.K && (this.C.stop(), this.Z = a, this.N = b, NBb(this), (a = g.LB("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.H8 && (this.B.mdxVersion = "" + this.j.H8), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.G5 && (this.B.cst = this.j.G5),
            this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), 0 !== this.N ? this.B.ui = "" + this.N : delete this.B.ui, Object.assign(this.B, this.Z), this.channel = new J8(this.pathPrefix, {
            Q7: "gsessionid",
            L8: this.D,
            M8: this.B
        }), this.channel.open(), this.K = 2, MBb(this))
    };
    g.k.disconnect = function(a) {
        this.W = void 0 === a ? 0 : a;
        this.C.stop();
        NBb(this);
        this.channel && (0 !== this.W ? this.B.ui = "" + this.W : delete this.B.ui, this.channel.close());
        this.W = 0
    };
    g.k.Ps = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    };
    g.k.Tw = function() {
        var a = this.C;
        g.fv(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (NBb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.yr = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    };
    g.k.Ks = function() {
        return this.j ? this.j.id : ""
    };
    g.k.qa = function(a) {
        return this.G.qa.apply(this.G, [a].concat(g.oa(g.Ia.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    };
    g.k.Eh = function(a) {
        return this.G.Eh(a)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.vb(this.G), this.disconnect(), g.vb(this.C), this.Ba = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.w(OBb, g.Ld);
    g.k = OBb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.Tw = function() {
        this.j.Tw()
    };
    g.k.Ks = function() {
        return this.j.Ks()
    };
    g.k.Ps = function() {
        return this.j.Ps()
    };
    g.k.Dz = function() {
        return 3 === this.j.K
    };
    g.k.Q2 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.O2 = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.P2 = function(a) {
        this.dispatchEvent(new EBb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new FBb(401 === this.j.Fg ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.yr = function(a) {
        this.j.yr(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var WBb = Date.now(),
        a9 = null,
        e9 = Array(50),
        d9 = -1,
        f9 = !1;
    g.pb(g9, g.lG);
    g9.prototype.Mk = function() {
        return this.screens
    };
    g9.prototype.contains = function(a) {
        return !!yzb(this.screens, a)
    };
    g9.prototype.get = function(a) {
        return a ? h8(this.screens, a) : null
    };
    g9.prototype.info = function(a) {
        b9(this.K, a)
    };
    g.w($Bb, g.lG);
    g.k = $Bb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.kd) && this.GZ()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.kd) || (g.gC(this.kd), this.kd = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.lG.prototype.xa.call(this)
    };
    g.k.GZ = function() {
        this.kd = NaN;
        this.j = g.jC($8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.N
            },
            timeout: 5E3,
            onSuccess: (0, g.jb)(this.S2, this),
            onError: (0, g.jb)(this.R2, this),
            onTimeout: (0, g.jb)(this.T2, this)
        })
    };
    g.k.S2 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.K;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.qa("pairingComplete", new e8(a), b)
    };
    g.k.R2 = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.B >= UDb.length ? this.qa("pairingFailed", Error("DIAL polling timed out")) : (a = UDb[this.B], this.kd = g.eC((0, g.jb)(this.GZ, this), a), this.B++) : this.qa("pairingFailed", Error("Server error " + a.status))
    };
    g.k.T2 = function() {
        this.j = null;
        this.qa("pairingFailed", Error("Server not responding"))
    };
    var UDb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.pb(i9, g9);
    g.k = i9.prototype;
    g.k.start = function() {
        h9(this) && this.qa("screenChange");
        !g.bD("yt-remote-lounge-token-expiration") && aCb(this);
        g.gC(this.j);
        this.j = g.eC((0, g.jb)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        h9(this);
        XBb(this, a);
        j9(this, !1);
        this.qa("screenChange");
        b(a);
        a.token || aCb(this)
    };
    g.k.remove = function(a, b) {
        var c = h9(this);
        ZBb(this, a) && (j9(this, !1), c = !0);
        b(a);
        c && this.qa("screenChange")
    };
    g.k.VK = function(a, b, c, d) {
        var e = h9(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, j9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.qa("screenChange")
    };
    g.k.xa = function() {
        g.gC(this.j);
        i9.Nf.xa.call(this)
    };
    g.k.n7 = function(a) {
        h9(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        j9(this, !b);
        b && b9(this.K, "Missed " + b + " lounge tokens.")
    };
    g.k.m7 = function(a) {
        b9(this.K, "Requesting lounge tokens failed: " + a)
    };
    g.w(cCb, g.lG);
    g.k = cCb.prototype;
    g.k.start = function() {
        var a = parseInt(g.bD("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.ob() - 144E5 < a ? 0 : a) ? k9(this): (this.D = g.ob() + 3E5, g.aD("yt-remote-fast-check-period", this.D), this.bR())
    };
    g.k.isEmpty = function() {
        return g.ld(this.j)
    };
    g.k.update = function() {
        bCb("Updating availability on schedule.");
        var a = this.K(),
            b = g.bd(this.j, function(c, d) {
                return c && !!h8(a, d)
            }, this);
        fCb(this, b)
    };
    g.k.xa = function() {
        g.gC(this.C);
        this.C = NaN;
        this.B && (this.B.abort(), this.B = null);
        g.lG.prototype.xa.call(this)
    };
    g.k.bR = function() {
        g.gC(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = gCb(this);
        if (Wyb(a)) {
            var b = $8(this.G, "/pairing/get_screen_availability");
            this.B = JBb(this.G, b, {
                lounge_token: g.hd(a).join(",")
            }, (0, g.jb)(this.aaa, this, a), (0, g.jb)(this.Z$, this))
        } else fCb(this, {}), k9(this)
    };
    g.k.aaa = function(a, b) {
        this.B = null;
        var c = g.hd(gCb(this));
        if (g.$b(c, g.hd(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
            fCb(this, c);
            k9(this)
        } else this.cg("Changing Screen set during request."), this.bR()
    };
    g.k.Z$ = function(a) {
        this.cg("Screen availability failed: " + a);
        this.B = null;
        k9(this)
    };
    g.k.cg = function(a) {
        b9("OnlineScreenService", a)
    };
    g.pb(l9, g9);
    g.k = l9.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.qa("screenChange"), this.j.isEmpty() || this.qa("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    };
    g.k.VK = function(a, b, c, d) {
        this.B.contains(a) ? this.B.VK(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, b9(this.K, a), d(Error(a)))
    };
    g.k.Mk = function(a) {
        return a ? this.screens : g.Lb(this.screens, g.wt(this.C, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.nT = function() {
        return g.wt(this.Mk(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.oT = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new $Bb(this.D, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.vb(l);
            e(m9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.vb(l);
            f(m)
        });
        l.start();
        return (0, g.jb)(l.stop, l)
    };
    g.k.U2 = function(a, b, c, d) {
        g.jC($8(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.jb)(function(e, f) {
                e = new e8(f.screen || {});
                if (!e.name || kCb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); kCb(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(m9(this, e))
            }, this),
            onError: (0, g.jb)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.jb)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.vb(this.B);
        g.vb(this.j);
        l9.Nf.xa.call(this)
    };
    g.k.x7 = function() {
        mCb(this);
        this.qa("screenChange");
        this.j.update()
    };
    l9.prototype.dispose = l9.prototype.dispose;
    g.pb(n9, g.lG);
    g.k = n9.prototype;
    g.k.Cj = function(a) {
        this.isDisposed() || (a && (p9(this, "" + a), this.qa("sessionFailed")), this.j = null, this.qa("sessionScreen", null))
    };
    g.k.info = function(a) {
        b9(this.Ga, a)
    };
    g.k.pT = function() {
        return null
    };
    g.k.tR = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.jb)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.jb)(function() {
            p9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.tR("");
        n9.Nf.xa.call(this)
    };
    g.w(q9, n9);
    g.k = q9.prototype;
    g.k.rR = function(a) {
        if (this.C) {
            if (this.C == a) return;
            p9(this, "Overriding cast session with new session object");
            yCb(this);
            this.Ba = !1;
            this.W = "unknown";
            this.C.removeUpdateListener(this.oa);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea)
        }
        this.C = a;
        this.C.addUpdateListener(this.oa);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea);
        tCb(this, "getMdxSessionStatus")
    };
    g.k.Nz = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Km(a))
    };
    g.k.stop = function() {
        this.C ? this.C.stop((0, g.jb)(function() {
            this.Cj()
        }, this), (0, g.jb)(function() {
            this.Cj(Error("Failed to stop receiver app."))
        }, this)) : this.Cj(Error("Stopping cast device without session."))
    };
    g.k.tR = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        yCb(this);
        this.C && (this.C.removeUpdateListener(this.oa), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea));
        this.C = null;
        n9.prototype.xa.call(this)
    };
    g.k.Naa = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = c8(b), g.cb(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Km(b)), a) {
                    case "mdxSessionStatus":
                        qCb(this, b);
                        break;
                    case "loungeToken":
                        uCb(this, b);
                        break;
                    default:
                        p9(this, "Unknown youtube message: " + a)
                } else p9(this, "Unable to parse message.");
                else p9(this, "No data in message.")
    };
    g.k.GW = function(a, b, c, d) {
        g.gC(this.Z);
        this.Z = 0;
        jCb(this.D, this.B.label, a, this.B.friendlyName, (0, g.jb)(function(e) {
            e ? b(e) : 0 <= d ? (p9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.Z = g.eC((0, g.jb)(this.GW, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.pT = function() {
        return this.C
    };
    g.k.V2 = function(a) {
        this.isDisposed() || a || (p9(this, "Cast session died."), this.Cj())
    };
    g.w(r9, n9);
    g.k = r9.prototype;
    g.k.rR = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.Ma)
    };
    g.k.Nz = function(a) {
        this.Na = a;
        this.ma()
    };
    g.k.stop = function() {
        GCb(this);
        this.C ? this.C.stop((0, g.jb)(this.Cj, this, null), (0, g.jb)(this.Cj, this, "Failed to stop DIAL device.")) : this.Cj()
    };
    g.k.xa = function() {
        GCb(this);
        this.C && this.C.removeUpdateListener(this.Ma);
        this.C = null;
        n9.prototype.xa.call(this)
    };
    g.k.W2 = function(a) {
        this.isDisposed() || a || (p9(this, "DIAL session died."), this.G(), this.G = function() {}, this.Cj())
    };
    g.w(u9, n9);
    u9.prototype.stop = function() {
        this.Cj()
    };
    u9.prototype.rR = function() {};
    u9.prototype.Nz = function() {
        g.gC(this.C);
        this.C = NaN;
        var a = h8(this.D.Mk(), this.B.label);
        a ? o9(this, a) : this.Cj(Error("No such screen"))
    };
    u9.prototype.xa = function() {
        g.gC(this.C);
        this.C = NaN;
        n9.prototype.xa.call(this)
    };
    g.w(v9, g.lG);
    g.k = v9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.Z, [chrome.cast.Capability.AUDIO_OUT]);
        this.W || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.jb)(this.J$, this);
        c = new chrome.cast.ApiConfig(c, (0, g.jb)(this.jZ, this), e, d, a);
        c.customDialLaunchCallback = (0, g.jb)(this.G9, this);
        chrome.cast.initialize(c, (0, g.jb)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.G), TBb(), this.B.subscribe("onlineScreenChange", (0, g.jb)(this.qT, this)), this.C = JCb(this), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.jb)(function(f) {
                this.cg("Failed to set initial custom receivers: " + g.Km(f))
            }, this)), this.qa("yt-remote-cast2-availability-change", x9(this)), b(!0))
        }, this), (0, g.jb)(function(f) {
            this.cg("Failed to initialize API: " + g.Km(f));
            b(!1)
        }, this))
    };
    g.k.aca = function(a, b) {
        w9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) w9("Unsetting old screen status: " + this.j.B.friendlyName), y9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                a = h8(this.B.Mk(), a);
                if (!a) {
                    w9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == a.idType) {
                    w9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                c = HCb(this, a);
                c || (w9("setConnectedScreenStatus: Connected receiver not custom..."), c = new chrome.cast.Receiver(a.uuid ?
                    a.uuid : a.id, a.name), c.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(c), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.jb)(function(d) {
                    this.cg("Failed to set initial custom receivers: " + g.Km(d))
                }, this)));
                w9("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
                y9(this, new u9(this.B, c), !0)
            }
            this.j.tR(b)
        } else w9("setConnectedScreenStatus: no screen.")
    };
    g.k.dca = function(a) {
        this.isDisposed() ? this.cg("Setting connection data on disposed cast v2") : this.j ? this.j.Nz(a) : this.cg("Setting connection data without a session")
    };
    g.k.Y2 = function() {
        this.isDisposed() ? this.cg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), y9(this, null)) : w9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.jb)(this.jZ, this), (0, g.jb)(this.daa, this))
    };
    g.k.xa = function() {
        this.B.unsubscribe("onlineScreenChange", (0, g.jb)(this.qT, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = QBb,
            b = g.Va("yt.mdx.remote.debug.handlers_");
        g.Jb(b || [], a);
        g.vb(this.j);
        g.lG.prototype.xa.call(this)
    };
    g.k.cg = function(a) {
        b9("Controller", a)
    };
    g.k.lZ = function(a, b) {
        this.j == a && (b || y9(this, null), this.qa("yt-remote-cast2-session-change", b))
    };
    g.k.G$ = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), w9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label) w9("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();
                        else {
                            w9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.qa("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            y9(this,
                                new u9(this.B, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            y9(this, new r9(this.B, a, this.D, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            y9(this, new q9(this.B, a, this.config_));
                            break;
                        default:
                            this.cg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.cg("Stopping receiver w/o session: " + a.friendlyName)
            } else this.cg("onReceiverAction_ called without receiver.")
    };
    g.k.G9 = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.cg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label) return this.cg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return w9("Reselecting dial screen."),
                this.qa("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.cg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            y9(this, new r9(this.B, b, this.D, this.config_))
        }
        b = this.j;
        b.Z = a;
        b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {}, c = a.screenId || null, s9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = DCb(b, {
                name: b.B.friendlyName,
                screenId: a.screenId,
                loungeToken: a.loungeToken,
                dialId: b.Z.receiver.label,
                screenIdType: "shortLived"
            },
            a.loungeTokenRefreshIntervalMs) : (g.QB(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = ECb(b, c)) : a = ECb(b, c)) : a = BCb(b);
        return a
    };
    g.k.jZ = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.K) {
            w9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) w9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), y9(this, new q9(this.B, c, this.config_), !0);
                    else {
                        this.cg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B,
                    e = h8(this.B.Mk(),
                        d.label);
                e && f8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (w9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.vb(this.j), this.j = new q9(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.jb)(this.lZ, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return ICb(b, b.j)
                }), this.j.Nz(null));
                this.j.rR(a)
            }
        }
    };
    g.k.X2 = function() {
        return this.j ? this.j.pT() : null
    };
    g.k.daa = function(a) {
        this.isDisposed() || (this.cg("Failed to estabilish a session: " + g.Km(a)), a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null), this.qa("yt-remote-cast2-session-failed"))
    };
    g.k.J$ = function(a) {
        w9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = x9(this);
            this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            x9(this) != b && this.qa("yt-remote-cast2-availability-change", x9(this))
        }
    };
    g.k.qT = function() {
        this.isDisposed() || (this.C = JCb(this), w9("Updating custom receivers: " + g.Km(this.C)), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.jb)(function() {
            this.cg("Failed to set custom receivers.")
        }, this)), this.qa("yt-remote-cast2-availability-change", x9(this)))
    };
    v9.prototype.setLaunchParams = v9.prototype.dca;
    v9.prototype.setConnectedScreenStatus = v9.prototype.aca;
    v9.prototype.stopSession = v9.prototype.Y2;
    v9.prototype.getCastSession = v9.prototype.X2;
    v9.prototype.requestSession = v9.prototype.requestSession;
    v9.prototype.init = v9.prototype.init;
    v9.prototype.dispose = v9.prototype.dispose;
    var SCb = [];
    g.k = F9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        YCb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.yp = a.hasPrevious, this.Pk = a.hasNext, this.N = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.Z = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C))
    };
    g.k.isPlaying = function() {
        return 1 == this.playerState
    };
    g.k.jl = function(a) {
        this.G = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.B ? this.G + G9(this) : this.G
    };
    g.k.clone = function() {
        return new F9(ZCb(this))
    };
    g.w(L9, g.lG);
    g.k = L9.prototype;
    g.k.getState = function() {
        return this.C
    };
    g.k.Ps = function() {
        return this.D.getReconnectTimeout()
    };
    g.k.Tw = function() {
        this.D.reconnect()
    };
    g.k.play = function() {
        N9(this) ? (this.j ? this.j.play(null, g.Sd, R9(this, "play")) : Q9(this, "play"), bDb(this, 1, I9(M9(this))), this.qa("remotePlayerChange")) : O9(this, this.play)
    };
    g.k.pause = function() {
        N9(this) ? (this.j ? this.j.pause(null, g.Sd, R9(this, "pause")) : Q9(this, "pause"), bDb(this, 2, I9(M9(this))), this.qa("remotePlayerChange")) : O9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (N9(this)) {
            if (this.j) {
                var b = M9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Sd, R9(this, "seekTo", {
                    newTime: a
                }))
            } else Q9(this, "seekTo", {
                newTime: a
            });
            bDb(this, 3, a);
            this.qa("remotePlayerChange")
        } else O9(this, g.kb(this.seekTo, a))
    };
    g.k.stop = function() {
        if (N9(this)) {
            this.j ? this.j.stop(null, g.Sd, R9(this, "stopVideo")) : Q9(this, "stopVideo");
            var a = M9(this);
            a.index = -1;
            a.videoId = "";
            YCb(a);
            P9(this, a);
            this.qa("remotePlayerChange")
        } else O9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0, g.jb)(function() {
                        c9("set receiver volume: " + d)
                    }, this), (0, g.jb)(function() {
                        this.cg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0, g.jb)(function() {
                    c9("set receiver muted: " + b)
                }, this), (0, g.jb)(function() {
                    this.cg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                Q9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            P9(this, c)
        } else O9(this, g.kb(this.setVolume, a, b))
    };
    g.k.rT = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Km(b.style), g.rd(a, c.trackData));
            Q9(this, "setSubtitlesTrack", a);
            P9(this, c)
        } else O9(this, g.kb(this.rT, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        N9(this) ? (b = b.getLanguageInfo().getId(), Q9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = M9(this), a.audioTrackId = b, P9(this, a)) : O9(this, g.kb(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = M9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        J9(l, a, c || 0);
        void 0 !== b && (H9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Km(h));
        Q9(this, "setPlaylist", m);
        d || P9(this, l)
    };
    g.k.TJ = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "previous")
        } else O9(this, g.kb(this.TJ, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "next")
        } else O9(this, g.kb(this.nextVideo, a, b))
    };
    g.k.XG = function() {
        if (N9(this)) {
            Q9(this, "clearPlaylist");
            var a = M9(this);
            a.reset();
            P9(this, a);
            this.qa("remotePlayerChange")
        } else O9(this, this.XG)
    };
    g.k.NV = function() {
        N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.NV)
    };
    g.k.dispose = function() {
        if (3 != this.C) {
            var a = this.C;
            this.C = 3;
            this.qa("proxyStateChange", a, this.C)
        }
        g.lG.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        aDb(this);
        this.D = null;
        this.G.clear();
        K9(this, null);
        g.lG.prototype.xa.call(this)
    };
    g.k.yR = function(a) {
        if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
            var b = this.C;
            this.C = a;
            this.qa("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.G.isEmpty();) b = a = this.G, 0 === b.j.length && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.E$ = function(a, b) {
        this.qa(a, b)
    };
    g.k.w9 = function(a) {
        if (!a) this.vE(null), K9(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = M9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, P9(this, b)
        }
    };
    g.k.vE = function(a) {
        c9("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.Z);
        if (this.j = a) this.j.addUpdateListener(this.Z), cDb(this), this.qa("remotePlayerChange")
    };
    g.k.v9 = function(a) {
        a ? (cDb(this), this.qa("remotePlayerChange")) : this.vE(null)
    };
    g.k.WR = function() {
        Q9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.z9 = function() {
        var a = VCb();
        a && K9(this, a)
    };
    g.k.cg = function(a) {
        b9("CP", a)
    };
    g.w(U9, g.lG);
    g.k = U9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Ma && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            H9(this.j,
                n);
            this.G = "UNSUPPORTED";
            c = this.Ma ? "setInitialState" : "setPlaylist";
            S9("Connecting with " + c + " and params: " + g.Km(m));
            this.B.connect({
                method: c,
                params: g.Km(m)
            }, a, Ezb())
        } else S9("Connecting without params"), this.B.connect({}, a, Ezb());
        gDb(this)
    };
    g.k.yr = function(a) {
        this.B.yr(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Ua("yt.mdx.remote.remoteClient_", null), this.qa("beforeDispose"), T9(this, 3));
        g.lG.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        hDb(this);
        jDb(this);
        iDb(this);
        g.gC(this.Z);
        this.Z = NaN;
        g.gC(this.W);
        this.W = NaN;
        this.D = null;
        g.TC(this.ma);
        this.ma.length = 0;
        this.B.dispose();
        g.lG.prototype.xa.call(this);
        this.G = this.N = this.C = this.j = this.B = null
    };
    g.k.EX = function(a) {
        if (!this.C || 0 === this.C.length) return !1;
        for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.T6 = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.xD()) ? this.B.Dz() && isNaN(this.K) && (a = 1) : a = 2);
        return a
    };
    g.k.Vy = function(a) {
        S9("Disconnecting with " + a);
        g.Ua("yt.mdx.remote.remoteClient_", null);
        hDb(this);
        this.qa("beforeDisconnect", a);
        1 == a && k8();
        this.B.disconnect(a);
        this.dispose()
    };
    g.k.O6 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(), J9(a, this.D, a.index));
        return ZCb(a)
    };
    g.k.fca = function(a) {
        var b = this,
            c = new F9(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.gC(this.Z), this.Z = g.eC(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && V9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && I9(this.j) == I9(c) && g.Km(this.j.trackData) == g.Km(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.bc(d, function(e) {
            this.qa(e)
        }, this)
    };
    g.k.zW = function() {
        var a = this.B.Ks(),
            b = g.Eb(this.C, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.xD = function() {
        return this.B.Ps()
    };
    g.k.x6 = function() {
        return this.G || "UNSUPPORTED"
    };
    g.k.y6 = function() {
        return this.N || ""
    };
    g.k.Z2 = function() {
        !isNaN(this.xD()) && this.B.Tw()
    };
    g.k.Yba = function(a, b) {
        V9(this, a, b);
        lDb(this)
    };
    g.k.sT = function() {
        var a = g.tC("SID", "") || "",
            b = g.tC("SAPISID", "") || "",
            c = g.tC("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.tg(g.sg(a), 2);
        b = g.tg(g.sg(b), 2);
        c = g.tg(g.sg(c), 2);
        return g.tg(g.sg(a + "," + b + "," + c), 2)
    };
    U9.prototype.subscribe = U9.prototype.subscribe;
    U9.prototype.unsubscribeByKey = U9.prototype.Eh;
    U9.prototype.getProxyState = U9.prototype.T6;
    U9.prototype.disconnect = U9.prototype.Vy;
    U9.prototype.getPlayerContextData = U9.prototype.O6;
    U9.prototype.setPlayerContextData = U9.prototype.fca;
    U9.prototype.getOtherConnectedRemoteId = U9.prototype.zW;
    U9.prototype.getReconnectTimeout = U9.prototype.xD;
    U9.prototype.getAutoplayMode = U9.prototype.x6;
    U9.prototype.getAutoplayVideoId = U9.prototype.y6;
    U9.prototype.reconnect = U9.prototype.Z2;
    U9.prototype.sendMessage = U9.prototype.Yba;
    U9.prototype.getXsrfToken = U9.prototype.sT;
    U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.EX;
    g.w(xDb, g9);
    g.k = xDb.prototype;
    g.k.Mk = function(a) {
        return this.dh.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.dh.$_c(a)
    };
    g.k.get = function(a) {
        return this.dh.$_g(a)
    };
    g.k.start = function() {
        this.dh.$_st()
    };
    g.k.add = function(a, b, c) {
        this.dh.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.dh.$_r(a, b, c)
    };
    g.k.VK = function(a, b, c, d) {
        this.dh.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.dh.$_ubk(this.j[a]);
        this.j.length = 0;
        this.dh = null;
        g9.prototype.xa.call(this)
    };
    g.k.b3 = function() {
        this.qa("screenChange")
    };
    g.k.m$ = function() {
        this.qa("onlineScreenChange")
    };
    l9.prototype.$_st = l9.prototype.start;
    l9.prototype.$_gspc = l9.prototype.U2;
    l9.prototype.$_gsppc = l9.prototype.oT;
    l9.prototype.$_c = l9.prototype.contains;
    l9.prototype.$_g = l9.prototype.get;
    l9.prototype.$_a = l9.prototype.add;
    l9.prototype.$_un = l9.prototype.VK;
    l9.prototype.$_r = l9.prototype.remove;
    l9.prototype.$_gs = l9.prototype.Mk;
    l9.prototype.$_gos = l9.prototype.nT;
    l9.prototype.$_s = l9.prototype.subscribe;
    l9.prototype.$_ubk = l9.prototype.Eh;
    var f$ = null,
        i$ = !1,
        W9 = null,
        X9 = null,
        IDb = null,
        a$ = [];
    g.w(NDb, g.I);
    g.k = NDb.prototype;
    g.k.xa = function() {
        g.I.prototype.xa.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Gc;
        a.unsubscribe("proxyStateChange", this.iZ, this);
        a.unsubscribe("remotePlayerChange", this.BE, this);
        a.unsubscribe("remoteQueueChange", this.CJ, this);
        a.unsubscribe("previousNextChange", this.fZ, this);
        a.unsubscribe("nowAutoplaying", this.aZ, this);
        a.unsubscribe("autoplayDismissed", this.FY, this);
        this.Gc = this.module = null
    };
    g.k.Ok = function(a) {
        var b = g.Ia.apply(1, arguments);
        if (2 != this.Gc.C)
            if (j$(this)) {
                if (1081 != M9(this.Gc).playerState || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        M9(this.Gc).isPlaying() ? this.Gc.pause() : this.Gc.play();
                        break;
                    case "control_play":
                        this.Gc.play();
                        break;
                    case "control_pause":
                        this.Gc.pause();
                        break;
                    case "control_seek":
                        this.K.wL(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        PDb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.J.getCurrentTime();
                    k$(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    k$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    PDb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.t9 = function(a) {
        this.N.z2(a)
    };
    g.k.bda = function(a) {
        this.Ok("control_subtitles_set_track", g.ld(a) ? null : a)
    };
    g.k.S_ = function() {
        var a = this.J.getOption("captions", "track");
        g.ld(a) || PDb(this, a)
    };
    g.k.Mc = function(a) {
        this.module.Mc(a, this.J.getVideoData().lengthSeconds)
    };
    g.k.X9 = function() {
        g.ld(this.C) || QDb(this, this.C);
        this.D = !1
    };
    g.k.iZ = function(a, b) {
        this.B.stop();
        2 === b && this.K_()
    };
    g.k.BE = function() {
        if (j$(this)) {
            this.j.stop();
            var a = M9(this.Gc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.Rh = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.Rh = 0;
                    break;
                default:
                    this.module.Rh = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Dc(new g.NL(8));
                    this.J_();
                    break;
                case 1085:
                case 3:
                    this.Dc(new g.NL(9));
                    break;
                case 1083:
                case 0:
                    this.Dc(new g.NL(2));
                    this.K.stop();
                    this.Mc(this.J.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Dc(new g.NL(4));
                    break;
                case 2:
                    this.Dc(new g.NL(4));
                    this.Mc(I9(a));
                    break;
                case -1:
                    this.Dc(new g.NL(64));
                    break;
                case -1E3:
                    this.Dc(new g.NL(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        xH: 2
                    }))
            }
            a = M9(this.Gc).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, QDb(this, a));
            a = M9(this.Gc); - 1 === a.volume || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.C0()
        } else ODb(this)
    };
    g.k.fZ = function() {
        this.J.qa("mdxpreviousnextchange")
    };
    g.k.CJ = function() {
        j$(this) || ODb(this)
    };
    g.k.aZ = function(a) {
        isNaN(a) || this.J.qa("mdxnowautoplaying", a)
    };
    g.k.FY = function() {
        this.J.qa("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        j$(this) && this.Gc.setAudioTrack(this.J.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === M9(this.Gc).playerState ? k$(this, a) : b && this.Gc.seekTo(a)
    };
    g.k.C0 = function() {
        var a = this;
        if (j$(this)) {
            var b = M9(this.Gc);
            this.events.Pc(this.W);
            b.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(b.volume);
            this.W = this.events.T(this.J, "onVolumeChange", function(c) {
                LDb(a, c)
            })
        }
    };
    g.k.J_ = function() {
        this.j.stop();
        if (!this.Gc.isDisposed()) {
            var a = M9(this.Gc);
            a.isPlaying() && this.Dc(new g.NL(8));
            this.Mc(I9(a));
            this.j.start()
        }
    };
    g.k.K_ = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Gc.Ps();
        2 == this.Gc.C && !isNaN(a) && this.B.start()
    };
    g.k.Dc = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.FCa(b, a)) {
            var c = g.bH(a, 2);
            c !== g.bH(this.G, 2) && this.J.eB(c);
            this.G = a;
            SDb(this.module, b, a)
        }
    };
    g.w(l$, g.V);
    l$.prototype.rd = function() {
        this.j.show()
    };
    l$.prototype.Qb = function() {
        this.j.hide()
    };
    l$.prototype.B = function() {
        m8("mdx-privacy-popup-cancel");
        this.Qb()
    };
    l$.prototype.C = function() {
        m8("mdx-privacy-popup-confirm");
        this.Qb()
    };
    g.w(m$, g.V);
    m$.prototype.onStateChange = function(a) {
        this.Ec(a.state)
    };
    m$.prototype.Ec = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.bH(a, 128) ? g.sK("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.sK("Playing on $RECEIVER_NAME", b) : g.sK("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.w(n$, g.NX);
    n$.prototype.D = function() {
        var a = this.J.getOption("remote", "receivers");
        a && 1 < a.length && !this.J.getOption("remote", "quickCast") ? (this.Qt = g.cc(a, this.j, this), g.OX(this, g.Lr(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Mj(a), this.enable(!0)) : this.enable(!1)
    };
    n$.prototype.j = function(a) {
        return a.key
    };
    n$.prototype.Bk = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.Qt[a].name
    };
    n$.prototype.jh = function(a) {
        g.NX.prototype.jh.call(this, a);
        this.J.setOption("remote", "currentReceiver", this.Qt[a]);
        this.Gb.Qb()
    };
    g.w(RDb, g.TV);
    g.k = RDb.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.oS(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
        };
        CDb(b, a);
        this.subscriptions.push(g.QE("yt-remote-before-disconnect", this.r9, this));
        this.subscriptions.push(g.QE("yt-remote-connection-change", this.K$, this));
        this.subscriptions.push(g.QE("yt-remote-receiver-availability-change", this.hZ,
            this));
        this.subscriptions.push(g.QE("yt-remote-auto-connect", this.I$, this));
        this.subscriptions.push(g.QE("yt-remote-receiver-resumed", this.H$, this));
        this.subscriptions.push(g.QE("mdx-privacy-popup-confirm", this.mba, this));
        this.subscriptions.push(g.QE("mdx-privacy-popup-cancel", this.lba, this));
        this.hZ()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.TV.prototype.load.call(this);
        this.Ml = new NDb(this, this.player, this.Gc);
        var a = (a = KDb()) ? a.currentTime : 0;
        var b = HDb() ? new L9(e$(), void 0) : null;
        0 == a && b && (a = I9(M9(b)));
        0 !== a && this.Mc(a);
        SDb(this, this.Je, this.Je);
        this.player.Sp(6)
    };
    g.k.unload = function() {
        this.player.qa("mdxautoplaycanceled");
        this.xs = this.Fp;
        g.wb(this.Ml, this.Gc);
        this.Gc = this.Ml = null;
        g.TV.prototype.unload.call(this);
        this.player.Sp(5);
        o$(this)
    };
    g.k.xa = function() {
        g.RE(this.subscriptions);
        g.TV.prototype.xa.call(this)
    };
    g.k.xE = function(a) {
        var b = g.Ia.apply(1, arguments);
        this.loaded && this.Ml.Ok.apply(this.Ml, [a].concat(g.oa(b)))
    };
    g.k.getAdState = function() {
        return this.Rh
    };
    g.k.yp = function() {
        return this.Gc ? M9(this.Gc).yp : !1
    };
    g.k.Pk = function() {
        return this.Gc ? M9(this.Gc).Pk : !1
    };
    g.k.Mc = function(a, b) {
        this.QX = a || 0;
        this.player.qa("progresssync", a, b);
        this.player.yc("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.QX
    };
    g.k.getProgressState = function() {
        var a = M9(this.Gc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: 1081 != a.playerState && this.player.Qh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + G9(a) : a.C,
            isAtLiveHead: 1 >= (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime(),
            loaded: a.Z,
            seekableEnd: a.B ? a.j + G9(a) : a.j,
            seekableStart: 0 < a.D ? a.D + G9(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.k.nextVideo = function() {
        this.Gc && this.Gc.nextVideo()
    };
    g.k.TJ = function() {
        this.Gc && this.Gc.TJ()
    };
    g.k.r9 = function(a) {
        1 === a && (this.GQ = this.Gc ? M9(this.Gc) : null)
    };
    g.k.K$ = function() {
        var a = HDb() ? new L9(e$(), void 0) : null;
        if (a) {
            var b = this.xs;
            this.loaded && this.unload();
            this.Gc = a;
            this.GQ = null;
            b.key !== this.Fp.key && (this.xs = b, this.load())
        } else g.vb(this.Gc), this.Gc = null, this.loaded && (this.unload(), (a = this.GQ) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, I9(a)));
        this.player.qa("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.hZ = function() {
        var a = [this.Fp],
            b = a.concat,
            c = DDb();
        C9() && g.bD("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Qt = b.call(a, c);
        a = FDb() || this.Fp;
        p$(this, a);
        this.player.yc("onMdxReceiversChange")
    };
    g.k.I$ = function() {
        var a = FDb();
        p$(this, a)
    };
    g.k.H$ = function() {
        this.xs = FDb()
    };
    g.k.mba = function() {
        this.TE = !0;
        o$(this);
        i$ = !1;
        f$ && h$(f$, 1);
        f$ = null
    };
    g.k.lba = function() {
        this.TE = !1;
        o$(this);
        p$(this, this.Fp);
        this.xs = this.Fp;
        i$ = !1;
        f$ = null;
        this.player.playVideo()
    };
    g.k.Gh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Qt;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? WCb() : p$(this, b)), this.loaded ? this.xs : this.Fp;
            case "quickCast":
                return 2 === this.Qt.length && "cast-selector-receiver" === this.Qt[1].key ? (b && WCb(), !0) : !1
        }
    };
    g.k.WR = function() {
        this.Gc.WR()
    };
    g.k.ll = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.k.isLoggedIn = function() {
        var a, b;
        return void 0 !== (null == (a = g.LB("PLAYER_CONFIG")) ? void 0 : null == (b = a.args) ? void 0 : b.authuser) ? !0 : !(!g.LB("SESSION_INDEX") && !g.LB("LOGGED_IN"))
    };
    g.SV("remote", RDb);
})(_yt_player);