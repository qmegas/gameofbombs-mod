function app() {
	var Eb = ''
		, Fb = 0
		, Gb = 'gwt.codesvr='
		, Hb = 'gwt.hosted='
		, Ib = 'gwt.hybrid'
		, Jb = 'app'
		, Kb = '__gwt_marker_app'
		, Lb = '<script id="'
		, Mb = '"><\/script>'
		, Nb = 'SCRIPT'
		, Ob = '#'
		, Pb = '?'
		, Qb = '/'
		, Rb = 1
		, Sb = 'base'
		, Tb = 'img'
		, Ub = 'clear.cache.gif'
		, Vb = 'meta'
		, Wb = 'name'
		, Xb = 'gwt:property'
		, Yb = 'content'
		, Zb = '='
		, $b = 'gwt:onPropertyErrorFn'
		, _b = 'Bad handler "'
		, ac = '" for "gwt:onPropertyErrorFn"'
		, bc = 'gwt:onLoadErrorFn'
		, cc = '" for "gwt:onLoadErrorFn"'
		, dc = 'Single-script hosted mode not yet implemented. See issue '
		, ec = 'http://code.google.com/p/google-web-toolkit/issues/detail?id=2079'
		, fc = 'CE1EBE077BAB541A33F5703094E5F629'
		, gc = ':'
		, hc = 'DOMContentLoaded'
		, ic = 50
		, jc = 'spriteManager.nocache.js'
		, kc = '<script language="javascript" src="'
		, lc = 'spriteManager.nocache.js"><\/script>'
		, mc = 'effect.js'
		, nc = 'effect.js"><\/script>'
		, oc = 'effect2.js'
		, pc = 'effect2.js"><\/script>'
		, qc = 'effectManager.js'
		, rc = 'effectManager.js"><\/script>'
		, sc = 'perlin.js'
		, tc = 'perlin.js"><\/script>'
		, uc = 'spine.js'
		, vc = 'spine.js"><\/script>'
		, wc = 'client.nocache.js'
		, xc = 'client.nocache.js"><\/script>'
		, yc = 'webgl-debug.js'
		, zc = 'webgl-debug.js"><\/script>';
	var k = Eb
		, l = Fb
		, m = Gb
		, n = Hb
		, o = Ib
		, p = Jb
		, q = Kb
		, r = Lb
		, s = Mb
		, t = Nb
		, u = Ob
		, v = Pb
		, w = Qb
		, A = Rb
		, B = Sb
		, C = Tb
		, D = Ub
		, F = Vb
		, G = Wb
		, H = Xb
		, I = Yb
		, J = Zb
		, K = $b
		, L = _b
		, M = ac
		, N = bc
		, O = cc
		, P = dc
		, Q = ec
		, R = fc
		, S = gc
		, T = hc
		, U = ic
		, V = jc
		, W = kc
		, X = lc
		, Y = mc
		, Z = nc
		, $ = oc
		, _ = pc
		, ab = qc
		, bb = rc
		, cb = sc
		, db = tc
		, eb = uc
		, fb = vc
		, gb = wc
		, hb = xc
		, ib = yc
		, jb = zc;
	var kb = window, lb = document, mb, nb, ob = k, pb = {}, qb = [], rb = [], sb = [], tb = l, ub, vb;
	if (!kb.__gwt_stylesLoaded) {
		kb.__gwt_stylesLoaded = {}
	}
	if (!kb.__gwt_scriptsLoaded) {
		kb.__gwt_scriptsLoaded = {}
	}
	function wb() {
		var b = false;
		try {
			var c = kb.location.search;
			return (c.indexOf(m) != -1 || (c.indexOf(n) != -1 || kb.external && kb.external.gwtOnLoad)) && c.indexOf(o) == -1
		} catch (a) {}
		wb = function() {
			return b
		}
		;
		return b
	}
	function xb() {
		if (mb && nb) {
			mb(ub, p, ob, tb)
		}
	}
	function yb() {
		var e, f = q, g;
		lb.write(r + f + s);
		g = lb.getElementById(f);
		e = g && g.previousSibling;
		while (e && e.tagName != t) {
			e = e.previousSibling
		}
		function h(a) {
			var b = a.lastIndexOf(u);
			if (b == -1) {
				b = a.length
			}
			var c = a.indexOf(v);
			if (c == -1) {
				c = a.length
			}
			var d = a.lastIndexOf(w, Math.min(c, b));
			return d >= l ? a.substring(l, d + A) : k
		}
		;if (e && e.src) {
			ob = h(e.src)
		}
		if (ob == k) {
			var i = lb.getElementsByTagName(B);
			if (i.length > l) {
				ob = i[i.length - A].href
			} else {
				ob = h(lb.location.href)
			}
		} else if (ob.match(/^\w+:\/\//)) {} else {
			var j = lb.createElement(C);
			j.src = ob + D;
			ob = h(j.src)
		}
		if (g) {
			g.parentNode.removeChild(g)
		}
	}
	function zb() {
		var b = document.getElementsByTagName(F);
		for (var c = l, d = b.length; c < d; ++c) {
			var e = b[c], f = e.getAttribute(G), g;
			if (f) {
				if (f == H) {
					g = e.getAttribute(I);
					if (g) {
						var h, i = g.indexOf(J);
						if (i >= l) {
							f = g.substring(l, i);
							h = g.substring(i + A)
						} else {
							f = g;
							h = k
						}
						pb[f] = h
					}
				} else if (f == K) {
					g = e.getAttribute(I);
					if (g) {
						try {
							vb = eval(g)
						} catch (a) {
							alert(L + g + M)
						}
					}
				} else if (f == N) {
					g = e.getAttribute(I);
					if (g) {
						try {
							ub = eval(g)
						} catch (a) {
							alert(L + g + O)
						}
					}
				}
			}
		}
	}
	__gwt_isKnownPropertyValue = function(a, b) {
		return b in qb[a]
	}
	;
	__gwt_getMetaProperty = function(a) {
		var b = pb[a];
		return b == null ? null : b
	}
	;
	app.onScriptLoad = function(a) {
		app = null;
		mb = a;
		xb()
	}
	;
	if (wb()) {
		alert(P + Q);
		return
	}
	yb();
	zb();
	try {
		var Ab;
		Ab = R;
		var Bb = Ab.indexOf(S);
		if (Bb != -1) {
			tb = Number(Ab.substring(Bb + A))
		}
	} catch (a) {
		return
	}
	var Cb;
	function Db() {
		if (!nb) {
			nb = true;
			xb();
			if (lb.removeEventListener) {
				lb.removeEventListener(T, Db, false)
			}
			if (Cb) {
				clearInterval(Cb)
			}
		}
	}
	if (lb.addEventListener) {
		lb.addEventListener(T, function() {
			Db()
		}, false)
	}
	var Cb = setInterval(function() {
		if (/loaded|complete/.test(lb.readyState)) {
			Db()
		}
	}, U);
	if (!__gwt_scriptsLoaded[V]) {
		__gwt_scriptsLoaded[V] = true;
		document.write(W + ob + X)
	}
	if (!__gwt_scriptsLoaded[Y]) {
		__gwt_scriptsLoaded[Y] = true;
		document.write(W + ob + Z)
	}
	if (!__gwt_scriptsLoaded[$]) {
		__gwt_scriptsLoaded[$] = true;
		document.write(W + ob + _)
	}
	if (!__gwt_scriptsLoaded[ab]) {
		__gwt_scriptsLoaded[ab] = true;
		document.write(W + ob + bb)
	}
	if (!__gwt_scriptsLoaded[cb]) {
		__gwt_scriptsLoaded[cb] = true;
		document.write(W + ob + db)
	}
	if (!__gwt_scriptsLoaded[eb]) {
		__gwt_scriptsLoaded[eb] = true;
		document.write(W + ob + fb)
	}
	if (!__gwt_scriptsLoaded[gb]) {
		__gwt_scriptsLoaded[gb] = true;
		document.write(W + ob + hb)
	}
	if (!__gwt_scriptsLoaded[ib]) {
		__gwt_scriptsLoaded[ib] = true;
		document.write(W + ob + jb)
	}
}
app();
(function() {
		var $gwt_version = "2.8.0";
		var $wnd = window;
		var $doc = $wnd.document;
		var $moduleName, $moduleBase;
		var $stats = $wnd.__gwtStatsEvent ? function(a) {
				$wnd.__gwtStatsEvent(a)
			}
			: null;
		var $strongName = 'CE1EBE077BAB541A33F5703094E5F629';
		var cheatBombSize = false;
		var cheatBombView = false;

		function J() {}
		function wd() {}
		function Oe() {}
		function $f() {}
		function uk() {}
		function Zn() {}
		function Zv() {}
		function vv() {}
		function xv() {}
		function Pv() {}
		function qp() {}
		function sp() {}
		function au() {}
		function qu() {}
		function qx() {}
		function wx() {}
		function Cx() {}
		function Wx() {}
		function cw() {}
		function hw() {}
		function pw() {}
		function Ow() {}
		function Uw() {}
		function _w() {}
		function dy() {}
		function iy() {}
		function gz() {}
		function sz() {}
		function Pz() {}
		function PF() {}
		function cF() {}
		function jF() {}
		function tF() {}
		function DF() {}
		function YF() {}
		function oB() {}
		function fC() {}
		function VC() {}
		function OE() {}
		function dG() {}
		function kG() {}
		function pG() {}
		function GG() {}
		function KG() {}
		function $G() {}
		function cH() {}
		function sJ() {}
		function tJ() {}
		function uJ() {}
		function vJ() {}
		function wJ() {}
		function zJ() {}
		function AJ() {}
		function BJ() {}
		function CJ() {}
		function DJ() {}
		function GJ() {}
		function HJ() {}
		function IJ() {}
		function KJ() {}
		function LJ() {}
		function MJ() {}
		function aM() {}
		function SM() {}
		function SV() {}
		function JV() {}
		function dN() {}
		function CU() {}
		function FU() {}
		function IU() {}
		function LU() {}
		function OU() {}
		function u$() {}
		function K$() {}
		function R$() {}
		function u1() {}
		function F1() {}
		function U1() {}
		function Ahb() {}
		function xhb() {}
		function Qhb() {}
		function gjb() {}
		function ijb() {}
		function Pjb() {}
		function Rjb() {}
		function ekb() {}
		function Akb() {}
		function lmb() {}
		function Hmb() {}
		function inb() {}
		function iqb() {}
		function sqb() {}
		function srb() {}
		function lrb() {}
		function jsb() {}
		function Uxb() {}
		function UAb() {}
		function pAb() {}
		function tAb() {}
		function vAb() {}
		function RAb() {}
		function XAb() {}
		function $Ab() {}
		function ayb() {}
		function Yyb() {}
		function bBb() {}
		function eBb() {}
		function hBb() {}
		function kBb() {}
		function nBb() {}
		function FCb() {}
		function Thb(a) {}
		function Jo(a) {}
		function ML(a) {}
		function MF() {
			KF()
		}
		function gF() {
			fF()
		}
		function AF() {
			zF()
		}
		function VF() {
			UF()
		}
		function aG() {
			_F()
		}
		function hG() {
			gG()
		}
		function DG() {
			CG()
		}
		function UG() {
			TG()
		}
		function VH() {
			TH()
		}
		function gH() {
			fH()
		}
		function sH() {
			pH()
		}
		function BH() {
			AH()
		}
		function LH() {
			KH()
		}
		function hI() {
			gI()
		}
		function oI() {
			nI()
		}
		function vI() {
			uI()
		}
		function CI() {
			BI()
		}
		function QJ() {
			PJ()
		}
		function YJ() {
			XJ()
		}
		function eK() {
			cK()
		}
		function FK() {
			EK()
		}
		function NK() {
			MK()
		}
		function UK() {
			TK()
		}
		function _K() {
			$K()
		}
		function hL() {
			gL()
		}
		function pL() {
			oL()
		}
		function FL() {
			EL()
		}
		function Yk() {
			Pd(R)
		}
		function Im() {
			Wd(R)
		}
		function Km() {
			Zd(R)
		}
		function Mm() {
			$d(R)
		}
		function bn() {
			Qd(R)
		}
		function cn() {
			_d(R)
		}
		function fn() {
			Rd(R)
		}
		function Kn() {
			de(R)
		}
		function gn() {
			Re(R.D)
		}
		function Pm() {
			op(R.b)
		}
		function Jm(a) {
			Xd(R, a)
		}
		function Gn(a) {
			Vq(a)
		}
		function XD(a) {
			WD(a)
		}
		function QZ(a) {
			PZ = a
		}
		function Qm(a) {
			gb = a != 0
		}
		function wL(a) {
			a.b = []
		}
		function ve(a, b) {
			a.c = b
		}
		function Ag(a, b) {
			a.$ = b
		}
		function bv(a, b) {
			a.q = b
		}
		function Gy(a, b) {
			a.d = b
		}
		function uM(a, b) {
			a.o = b
		}
		function SO(a, b) {
			a.M = b
		}
		function TO(a, b) {
			a.N = b
		}
		function UO(a, b) {
			a.S = b
		}
		function FP(a, b) {
			a.a = b
		}
		function CQ(a, b) {
			a.a = b
		}
		function hQ(a, b) {
			a.n = b
		}
		function DQ(a, b) {
			a.c = b
		}
		function FR(a, b) {
			a.B = b
		}
		function GR(a, b) {
			a.F = b
		}
		function HR(a, b) {
			a.H = b
		}
		function IR(a, b) {
			a.I = b
		}
		function jS(a, b) {
			a.n = b
		}
		function HS(a, b) {
			a.f = b
		}
		function $T(a, b) {
			a.q = b
		}
		function _T(a, b) {
			a.n = b
		}
		function AY(a, b) {
			a.e = b
		}
		function CY(a, b) {
			a.g = b
		}
		function m1(a, b) {
			a.d = b
		}
		function o1(a, b) {
			a.a = b
		}
		function p1(a, b) {
			a.b = b
		}
		function Pib(a) {
			dib()
		}
		function vib() {
			uib()
		}
		function Kmb() {
			Jmb()
		}
		function rc(a) {
			this.a = a
		}
		function fe(a) {
			this.a = a
		}
		function he(a) {
			this.a = a
		}
		function le(a) {
			this.a = a
		}
		function ye(a) {
			this.a = a
		}
		function Ae(a) {
			this.a = a
		}
		function Ce(a) {
			this.a = a
		}
		function Ee(a) {
			this.a = a
		}
		function Ge(a) {
			this.a = a
		}
		function Ie(a) {
			this.a = a
		}
		function Ke(a) {
			this.a = a
		}
		function Me(a) {
			this.a = a
		}
		function Ze(a) {
			this.a = a
		}
		function jm(a) {
			this.a = a
		}
		function $n(a) {
			this.a = a
		}
		function Ho(a) {
			this.a = a
		}
		function Wo(a) {
			this.a = a
		}
		function ip(a) {
			this.a = a
		}
		function up(a) {
			this.a = a
		}
		function kq(a) {
			this.a = a
		}
		function nq(a) {
			this.a = a
		}
		function qq(a) {
			this.a = a
		}
		function sq(a) {
			this.a = a
		}
		function Jq(a) {
			this.a = a
		}
		function Xq(a) {
			this.a = a
		}
		function Zq(a) {
			this.a = a
		}
		function cr(a) {
			this.a = a
		}
		function vr(a) {
			this.a = a
		}
		function xr(a) {
			this.a = a
		}
		function Cr(a) {
			this.a = a
		}
		function Er(a) {
			this.a = a
		}
		function Gr(a) {
			this.a = a
		}
		function Ir(a) {
			this.a = a
		}
		function as(a) {
			this.a = a
		}
		function os(a) {
			this.a = a
		}
		function Js(a) {
			this.a = a
		}
		function Ls(a) {
			this.a = a
		}
		function qA(a) {
			this.a = a
		}
		function bI(a) {
			this.a = a
		}
		function xJ(a) {
			this.a = a
		}
		function EJ(a) {
			this.a = a
		}
		function IM(a) {
			this.a = a
		}
		function lW(a) {
			this.a = a
		}
		function nW(a) {
			this.a = a
		}
		function pN(a) {
			this.e = a
		}
		function qZ(a) {
			this.g = a
		}
		function FZ(a) {
			this.g = a
		}
		function z$(a) {
			this.a = a
		}
		function B$(a) {
			this.a = a
		}
		function D1() {
			this.a = {}
		}
		function hg() {
			this.e = []
		}
		function pp() {
			this.c = []
		}
		function $o(a) {
			a.b = !a.b
		}
		function ht(a, b) {
			a.ob = b
		}
		function tG(a, b) {
			a.rb = b
		}
		function vG(a, b) {
			a.rb = b
		}
		function DN(a, b) {
			a.hb = b
		}
		function Dhb(a, b) {
			a.a = b
		}
		function Ehb(a, b) {
			a.b = b
		}
		function cqb(a, b) {
			a.b = b
		}
		function bqb(a, b) {
			a.d = b
		}
		function dqb(a, b) {
			a.c = b
		}
		function fqb(a, b) {
			a.e = b
		}
		function hqb(a, b) {
			a.f = b
		}
		function hrb(a, b) {
			a.e = b
		}
		function frb(a, b) {
			a.b = b
		}
		function grb(a, b) {
			a.c = b
		}
		function irb(a, b) {
			a.f = b
		}
		function jrb(a, b) {
			a.g = b
		}
		function ojb(a, b) {
			a.a = b
		}
		function vBb(a, b) {
			a.b = b
		}
		function DBb(a, b) {
			a.b = b
		}
		function hc(a, b) {
			a.N.k = b
		}
		function Hn(a, b) {
			Wq(b, a)
		}
		function d_(b, a) {
			b.src = a
		}
		function bkb(a) {
			this.c = a
		}
		function ukb(a) {
			this.a = a
		}
		function ykb(a) {
			this.a = a
		}
		function Mhb(a) {
			this.a = a
		}
		function Shb(a) {
			this.a = a
		}
		function Yhb(a) {
			this.a = a
		}
		function Wlb(a) {
			this.a = a
		}
		function Unb(a) {
			this.a = a
		}
		function gsb(a) {
			this.a = a
		}
		function ksb(a) {
			this.a = a
		}
		function Xtb(a) {
			this.a = a
		}
		function Ztb(a) {
			this.a = a
		}
		function Kub(a) {
			this.a = a
		}
		function qwb(a) {
			this.a = a
		}
		function Nwb(a) {
			this.a = a
		}
		function Rwb(a) {
			this.a = a
		}
		function Gwb(a) {
			this.c = a
		}
		function xxb(a) {
			this.c = a
		}
		function lyb(a) {
			this.b = a
		}
		function zyb(a) {
			this.b = a
		}
		function Jyb(a) {
			this.b = a
		}
		function Lyb(a) {
			this.a = a
		}
		function Oyb(a) {
			this.a = a
		}
		function PBb(a) {
			this.a = a
		}
		function vmb() {
			this.a = []
		}
		function Rmb() {
			this.a = []
		}
		function Grb() {
			this.a = []
		}
		function BM(a) {
			this.c = a.a
		}
		function OZ() {
			this.a = XZ()
		}
		function z1() {
			this.c = ++w1
		}
		function Xy(a) {
			a.i = a.j = 0
		}
		function ll(b, a) {
			b.rank = a
		}
		function Fl(b, a) {
			b.name = a
		}
		function ol(b, a) {
			b.type = a
		}
		function tl(b, a) {
			b.myId = a
		}
		function etb(b, a) {
			b.id = a
		}
		function Tl(b, a) {
			b.push(a)
		}
		function Vl(b, a) {
			b.push(a)
		}
		function Rn(b, a) {
			b.push(a)
		}
		function V$(b, a) {
			b.send(a)
		}
		function W$(b, a) {
			b.send(a)
		}
		function Hq(a) {
			a.g && Gq(a)
		}
		function js(a) {
			a.g && is(a)
		}
		function nzb() {
			hwb(this)
		}
		function fnb(a) {
			this.a = a.e
		}
		function dhb(a) {
			return a.e
		}
		function Fsb(a) {
			return a * a
		}
		function dn() {
			return R.D.a
		}
		function hn() {
			return !!R.G
		}
		function Bn() {
			return !!R.G
		}
		function Om() {
			return Td(R)
		}
		function Em() {
			return gb ? 1 : 0
		}
		function qF() {
			oF();
			new oxb
		}
		function ug() {
			hg.call(this)
		}
		function cB() {
			hg.call(this)
		}
		function $A() {
			XA.call(this)
		}
		function XC() {
			VC.call(this)
		}
		function yD() {
			VC.call(this)
		}
		function HD() {
			VC.call(this)
		}
		function JD() {
			VC.call(this)
		}
		function LD() {
			VC.call(this)
		}
		function ND() {
			VC.call(this)
		}
		function xE() {
			VC.call(this)
		}
		function GE() {
			VC.call(this)
		}
		function IE() {
			VC.call(this)
		}
		function _G() {
			$G.call(this)
		}
		function aH() {
			_G.call(this)
		}
		function mH() {
			_G.call(this)
		}
		function xH() {
			_G.call(this)
		}
		function HH() {
			_G.call(this)
		}
		function QH() {
			_G.call(this)
		}
		function _H() {
			_G.call(this)
		}
		function jI() {
			$G.call(this)
		}
		function kI() {
			jI.call(this)
		}
		function rI() {
			jI.call(this)
		}
		function yI() {
			_G.call(this)
		}
		function HI() {
			_G.call(this)
		}
		function UJ() {
			jI.call(this)
		}
		function _J() {
			jI.call(this)
		}
		function iK() {
			jI.call(this)
		}
		function sK() {
			jI.call(this)
		}
		function nK() {
			lK();
			mK(this)
		}
		function xK() {
			vK();
			wK(this)
		}
		function BK() {
			jI.call(this)
		}
		function JK() {
			jI.call(this)
		}
		function QK() {
			jI.call(this)
		}
		function XK() {
			jI.call(this)
		}
		function dL() {
			jI.call(this)
		}
		function lL() {
			jI.call(this)
		}
		function sL() {
			jI.call(this)
		}
		function BL() {
			jI.call(this)
		}
		function IL() {
			jI.call(this)
		}
		function xL() {
			vL();
			wL(this)
		}
		function NL() {
			LL();
			ML(this)
		}
		function SL() {
			jI.call(this)
		}
		function rO() {
			_N.call(this)
		}
		function sP() {
			XO.call(this)
		}
		function GP() {
			$G.call(this)
		}
		function HP() {
			GP.call(this)
		}
		function SQ() {
			GP.call(this)
		}
		function cR() {
			GP.call(this)
		}
		function wR() {
			GP.call(this)
		}
		function yS() {
			GP.call(this)
		}
		function RS() {
			GP.call(this)
		}
		function cT() {
			GP.call(this)
		}
		function mT() {
			GP.call(this)
		}
		function zT() {
			GP.call(this)
		}
		function PT() {
			GP.call(this)
		}
		function AU() {
			GP.call(this)
		}
		function rV() {
			GP.call(this)
		}
		function BV() {
			GP.call(this)
		}
		function jW() {
			GP.call(this)
		}
		function FW() {
			GP.call(this)
		}
		function HW() {
			GP.call(this)
		}
		function JW() {
			GP.call(this)
		}
		function VW() {
			GP.call(this)
		}
		function gX() {
			GP.call(this)
		}
		function nX() {
			GP.call(this)
		}
		function AX() {
			GP.call(this)
		}
		function GX() {
			GP.call(this)
		}
		function WS() {
			rO.call(this)
		}
		function fY() {
			rO.call(this)
		}
		function SY() {
			GP.call(this)
		}
		function cZ() {
			WY.call(this)
		}
		function gZ() {
			cZ.call(this)
		}
		function kZ() {
			GP.call(this)
		}
		function oZ() {
			GP.call(this)
		}
		function Wn(b, a) {
			b.length = a
		}
		function Atb(b, a) {
			b.font = a
		}
		function nl(b, a) {
			b.status = a
		}
		function htb(b, a) {
			b.width = a
		}
		function Ftb(b, a) {
			b.value = a
		}
		function C1(a, b) {
			a.a[aHb] = b
		}
		function xs(a, b) {
			gxb(a.b, b)
		}
		function CC(a, b) {
			gxb(a.k, b)
		}
		function Qf(a, b) {
			onb(a.a, b)
		}
		function $h(a, b) {
			setCtxAlpha(a.f, b)
		}
		function _z(a, b) {
			emb(a.X, b)
		}
		function smb(a, b) {
			Rn(a.a, b)
		}
		function Ymb(a, b) {
			Rn(a.b, b)
		}
		function Ss(a, b) {
			a.a = b;
			Rs(a)
		}
		function Mc(a) {
			a.A = a.B = false
		}
		function WE(a) {
			a.p = [];
			a.j = []
		}
		function mK(a) {
			a.a = (jC(),
				iC)
		}
		function mjb() {
			mjb = xhb;
			L0()
		}
		function Gm() {
			!!R.G && Wb(R.c)
		}
		function Lm() {
			!!R.c && bc(R.c)
		}
		function Hm() {
			!!R.b && np(R.b)
		}
		function Tm() {
			return R.g.c.b
		}
		function v$(a) {
			return a.xf()
		}
		function F$(a) {
			E$();
			D$.yf(a)
		}
		function Qib(a) {
			dib();
			return
		}
		function dib() {
			dib = xhb;
			Mib()
		}
		function Cjb() {
			Cjb = xhb;
			Gjb()
		}
		function zjb(a, b) {
			kjb(a.a, b)
		}
		function onb(a, b) {
			gxb(a.a, b)
		}
		function Ylb(a, b) {
			gxb(a.b, b)
		}
		function ml(b, a) {
			b.squadId = a
		}
		function Gl(b, a) {
			b.ownerId = a
		}
		function _sb(b, a) {
			b.zIndex = a
		}
		function gtb(b, a) {
			b.height = a
		}
		function Qlb() {
			GP.call(this)
		}
		function Dmb() {
			GP.call(this)
		}
		function Zrb() {
			GP.call(this)
		}
		function Omb() {
			jI.call(this)
		}
		function hob() {
			XA.call(this)
		}
		function iob() {
			XA.call(this)
		}
		function aub() {
			XA.call(this)
		}
		function Gub() {
			XA.call(this)
		}
		function Iub() {
			XA.call(this)
		}
		function $ub() {
			XA.call(this)
		}
		function Fvb() {
			XA.call(this)
		}
		function bzb() {
			XA.call(this)
		}
		function xAb() {
			XA.call(this)
		}
		function Tpb() {
			hg.call(this)
		}
		function nb(a) {
			U.call(this, a)
		}
		function rf(a) {
			U.call(this, a)
		}
		function iz(a) {
			U.call(this, a)
		}
		function Tmb() {
			Rmb.call(this)
		}
		function Umb() {
			Rmb.call(this)
		}
		function Xmb() {
			Rmb.call(this)
		}
		function aB() {
			this.a = new iqb
		}
		function xe() {
			this.d = new oxb
		}
		function pnb() {
			this.a = new oxb
		}
		function rzb() {
			this.a = new nzb
		}
		function tBb() {
			this.a = new nzb
		}
		function SZ() {
			SZ = xhb;
			RZ = new J
		}
		function Dn(a) {
			console.log(a)
		}
		function ud(a) {
			tc.call(this, a)
		}
		function xd(a) {
			tc.call(this, a)
		}
		function Lf(a) {
			tc.call(this, a)
		}
		function sm(b, a) {
			b.emit(EEb, a)
		}
		function Am(b, a) {
			b.emit(QDb, a)
		}
		function Bm(b, a) {
			b.emit(RDb, a)
		}
		function xtb(b, a) {
			b.rotate(a)
		}
		function Tn(b, a) {
			b.splice(a, 1)
		}
		function kl(b, a) {
			b.nickname = a
		}
		function Yg(a, b, c) {
			a.j = b;
			a.k = c
		}
		function Oq(a, b, c) {
			a.r = b;
			a.s = c
		}
		function lF(a, b) {
			return b * a.i
		}
		function XL(a) {
			return a.b + a.d
		}
		function YL(a) {
			return a.e + a.f
		}
		function oP(a) {
			return a.d - a.b
		}
		function oe(a) {
			a.a = false;
			a.b = 0
		}
		function dz(a, b, c) {
			a.f = b;
			a.e = c
		}
		function fz(a, b, c) {
			a.u = b;
			a.t = c
		}
		function Xz(a, b) {
			return a.Z[b]
		}
		function _q(a) {
			nb.call(this, a)
		}
		function _v(a) {
			jt.call(this, a)
		}
		function xt(a) {
			jt.call(this, a)
		}
		function ew(a) {
			jt.call(this, a)
		}
		function Kw(a) {
			jt.call(this, a)
		}
		function Zx(a) {
			jt.call(this, a)
		}
		function fy(a) {
			jt.call(this, a)
		}
		function Kr(a) {
			tc.call(this, a)
		}
		function cs(a) {
			tc.call(this, a)
		}
		function hC() {
			hC = xhb;
			Tsb(true)
		}
		function jC() {
			jC = xhb;
			iC = new yC
		}
		function BC() {
			BC = xhb;
			AC = new XC
		}
		function WB() {
			WB = xhb;
			VB = new fC
		}
		function fB() {
			fB = xhb;
			eB = new oB
		}
		function fF() {
			fF = xhb;
			eF = new jF
		}
		function oF() {
			oF = xhb;
			nF = new tF
		}
		function zF() {
			zF = xhb;
			yF = new DF
		}
		function KF() {
			KF = xhb;
			JF = new PF
		}
		function UF() {
			UF = xhb;
			TF = new YF
		}
		function _F() {
			_F = xhb;
			$F = new dG
		}
		function gG() {
			gG = xhb;
			fG = new kG
		}
		function nG() {
			nG = xhb;
			mG = new pG
		}
		function CG() {
			CG = xhb;
			BG = new GG
		}
		function TG() {
			TG = xhb;
			SG = new aH
		}
		function TH() {
			TH = xhb;
			SH = new _H
		}
		function fH() {
			fH = xhb;
			eH = new mH
		}
		function pH() {
			pH = xhb;
			oH = new xH
		}
		function AH() {
			AH = xhb;
			zH = new HH
		}
		function KH() {
			KH = xhb;
			JH = new QH
		}
		function gI() {
			gI = xhb;
			fI = new kI
		}
		function nI() {
			nI = xhb;
			mI = new rI
		}
		function uI() {
			uI = xhb;
			tI = new yI
		}
		function BI() {
			BI = xhb;
			AI = new HI
		}
		function PJ() {
			PJ = xhb;
			OJ = new UJ
		}
		function XJ() {
			XJ = xhb;
			WJ = new _J
		}
		function cK() {
			cK = xhb;
			bK = new iK
		}
		function lK() {
			lK = xhb;
			kK = new sK
		}
		function vK() {
			vK = xhb;
			uK = new BK
		}
		function EK() {
			EK = xhb;
			DK = new JK
		}
		function MK() {
			MK = xhb;
			LK = new QK
		}
		function TK() {
			TK = xhb;
			SK = new XK
		}
		function $K() {
			$K = xhb;
			ZK = new dL
		}
		function gL() {
			gL = xhb;
			fL = new lL
		}
		function oL() {
			oL = xhb;
			nL = new sL
		}
		function vL() {
			vL = xhb;
			uL = new BL
		}
		function EL() {
			EL = xhb;
			DL = new IL
		}
		function LL() {
			LL = xhb;
			KL = new SL
		}
		function $M() {
			$M = xhb;
			ZM = new dN
		}
		function CM(a) {
			this.Xd(true, a)
		}
		function KM(a) {
			BM.call(this, a)
		}
		function LM(a) {
			CM.call(this, a)
		}
		function pM(a) {
			return a.c != a.e
		}
		function gJ(a, b) {
			return a.c[b]
		}
		function hJ(a, b) {
			return a.e[b]
		}
		function mN(a, b) {
			return a.e[b]
		}
		function SD(a, b) {
			return a.d[b]
		}
		function LG(a, b) {
			return a.b[b]
		}
		function VM(a, b, c) {
			hN(a.a, b, c)
		}
		function VQ() {
			VQ = xhb;
			UQ = new cR
		}
		function rR() {
			rR = xhb;
			qR = new wR
		}
		function PR() {
			PR = xhb;
			OR = new yS
		}
		function KS() {
			KS = xhb;
			JS = new RS
		}
		function $S() {
			$S = xhb;
			ZS = new cT
		}
		function fT() {
			fT = xhb;
			eT = new mT
		}
		function pT() {
			pT = xhb;
			oT = new zT
		}
		function CT() {
			CT = xhb;
			BT = new PT
		}
		function yP() {
			yP = xhb;
			xP = new HP
		}
		function WP() {
			WP = xhb;
			VP = new JW
		}
		function EV() {
			EV = xhb;
			DV = new JV
		}
		function gV() {
			gV = xhb;
			fV = new rV
		}
		function uV() {
			uV = xhb;
			tV = new BV
		}
		function MV() {
			MV = xhb;
			LV = new SV
		}
		function VV() {
			VV = xhb;
			UV = new jW
		}
		function VY() {
			VY = xhb;
			UY = new kZ
		}
		function rY() {
			rY = xhb;
			qY = new oZ
		}
		function qW() {
			qW = xhb;
			pW = new HW
		}
		function m$() {
			m$ = xhb;
			l$ = new u$
		}
		function OX(a) {
			LX.call(this, a)
		}
		function QX(a) {
			LX.call(this, a)
		}
		function TX(a) {
			LX.call(this, a)
		}
		function VX(a) {
			LX.call(this, a)
		}
		function XX(a) {
			LX.call(this, a)
		}
		function $X(a) {
			LX.call(this, a)
		}
		function bY(a) {
			LX.call(this, a)
		}
		function BZ(a) {
			qZ.call(this, a)
		}
		function IZ(a) {
			qZ.call(this, a)
		}
		function X1(a) {
			V1.call(this, a)
		}
		function Fnb(a) {
			tnb(a);
			Zl(a.b)
		}
		function Tjb(a, b) {
			Wjb(a, b, a.c)
		}
		function Zlb(a, b) {
			fxb(a.b, 0, b)
		}
		function EBb(a, b) {
			!!b && (a.d = b)
		}
		function B1(a, b) {
			return a.a[b]
		}
		function xg(a) {
			return dib(),
				a.$
		}
		function $d(a) {
			!!a.G && dq(a.c.j)
		}
		function Wd(a) {
			!!a.G && vy(a.c.B)
		}
		function tn(a) {
			!!R.G && ec(R.c, a)
		}
		function Jn(a) {
			!!R.G && _b(R.c, a)
		}

		function Fm(a) {
			if (a === 49) {
				cheatBombSize = !cheatBombSize;
			}
			if (a === 50) {
				cheatBombView = !cheatBombView;
			}

			!!R.c && $b(R.c, a);
		}

		function Sm(a) {
			!!R.c && (R.c.b = a)
		}
		function Vh(a, b, c) {
			stb(a.f, b, c)
		}
		function Wh(a, b, c) {
			utb(a.f, b, c)
		}
		function QM(a, b, c) {
			PM(a, b.rb, c)
		}
		function ZT(a, b, c) {
			a.o[c] = yk(b)
		}
		function lb(a, b) {
			a.playEvent(b)
		}
		function TE(a, b) {
			a.e = b;
			return a
		}
		function NP(a, b) {
			a.r = b;
			a.q |= qDb
		}
		function gqb(a, b, c) {
			a.e = b;
			a.f = c
		}
		function hlb(a, b) {
			return a.d[b]
		}
		function Jl(b, a) {
			b.whatCanIdo = a
		}
		function setFillStyle(ctx, fillStyleVal) {
			ctx.fillStyle = fillStyleVal;
		}
		function ejb(a) {
			X1.call(this, a)
		}
		function bub(a) {
			YA.call(this, a)
		}
		function Hub(a) {
			YA.call(this, a)
		}
		function Jub(a) {
			YA.call(this, a)
		}
		function Zub(a) {
			YA.call(this, a)
		}
		function _ub(a) {
			YA.call(this, a)
		}
		function Gvb(a) {
			YA.call(this, a)
		}
		function xlb() {
			pN.call(this, [])
		}
		function qB() {
			U.call(this, null)
		}
		function pCb() {
			pCb = xhb;
			iub(Wgb)
		}
		function njb() {
			njb = xhb;
			new nzb
		}
		function Rb() {
			Rb = xhb;
			Qb = new Osb
		}
		function Et() {
			Et = xhb;
			Ct = new Psb
		}
		function Nq() {
			Nq = xhb;
			Mq = new nzb
		}
		function nsb(a) {
			Gxb(a, a.length)
		}
		function Dxb(a) {
			Gxb(a, a.length)
		}
		function dCb(a) {
			_Bb(a);
			return a
		}
		function my(a) {
			a.e = 0.25;
			return a
		}
		function cz(a) {
			a.c = a.d = a.a = a.b = 0
		}
		function gt(a, b) {
			a.kb = b;
			a.nb = b.W
		}
		function zg(a, b) {
			Ag(a, (dib(),
				b))
		}
		function Il(b, a) {
			b.visibleName = a
		}
		function Wub(a) {
			return a < 0 ? -a : a
		}
		function yp(a) {
			this.e = a;
			wp(this)
		}
		function Is(a) {
			this.f = a;
			Gs(this)
		}
		function uD() {
			tD();
			oD.call(this)
		}
		function jD() {
			hD();
			bD.call(this)
		}
		function oD() {
			nD();
			jD.call(this)
		}
		function bD() {
			$C();
			GC.call(this)
		}
		function _S() {
			$S();
			WS.call(this)
		}
		function LS() {
			KS();
			rO.call(this)
		}
		function zP() {
			yP();
			rO.call(this)
		}
		function qU() {
			mU();
			rO.call(this)
		}
		function HT() {
			CT();
			XO.call(this)
		}
		function gT() {
			fT();
			sP.call(this)
		}
		function vV() {
			uV();
			sP.call(this)
		}
		function uE() {
			tE();
			oE.call(this)
		}
		function DE() {
			AE();
			oD.call(this)
		}
		function rW() {
			qW();
			WS.call(this)
		}
		function BW() {
			zW();
			rW.call(this)
		}
		function QW() {
			PW();
			kQ.call(this)
		}
		function EX() {
			DX();
			kQ.call(this)
		}
		function IX() {
			WP();
			kQ.call(this)
		}
		function DY() {
			rY();
			tY.call(this)
		}
		function NY() {
			JY();
			DY.call(this)
		}
		function WY() {
			VY();
			fY.call(this)
		}
		function mZ() {
			$Y();
			cZ.call(this)
		}
		function Uhb(a) {
			Thb.call(this, a)
		}
		function Hib(a, b) {
			a.__listener = b
		}
		function f2(a, b) {
			return tub(a, b)
		}
		function wjb(a) {
			return dib(),
				a.$
		}
		function Wqb(a) {
			return a.g + a.b / 2
		}
		function krb(a) {
			return a.g - a.b / 2
		}
		function arb(a) {
			return a.f - a.e / 2
		}
		function crb(a) {
			return a.f + a.e / 2
		}
		function Xub(a, b) {
			return a > b ? a : b
		}
		function Yub(a, b) {
			return a < b ? a : b
		}
		function ytb(c, a, b) {
			c.scale(a, b)
		}
		function XU(a, b, c) {
			a.e[c] = b.Xc()
		}
		function hN(a, b, c) {
			iN(a, b, c, a.d)
		}
		function jN(a, b, c) {
			kN(a, b, c, a.d)
		}
		function mn() {
			!!R.G && dc(R.c, 0, 0)
		}
		function qn() {
			!!R.G && dc(R.c, 2, 0)
		}
		function aU() {
			throw dhb(new Fvb)
		}
		function a$() {
			a$ = xhb;
			!!(E$(),
				D$)
		}
		function Izb() {
			Izb = xhb;
			Hzb = Kzb()
		}
		function Avb() {
			Ztb.call(this, '')
		}
		function bvb(a) {
			Hub.call(this, a)
		}
		function Cvb(a) {
			bub.call(this, a)
		}
		function cub(a) {
			bub.call(this, a)
		}
		function Vyb(a) {
			oyb.call(this, a)
		}
		function QBb(a) {
			PBb.call(this, a)
		}
		function rBb(a, b) {
			fwb(a.a, b.c, b)
		}
		function Hg(a, b) {
			!!a.Y && K1(a.Y, b)
		}
		function ln(a) {
			!!R.G && dc(R.c, 3, a)
		}
		function nn(a) {
			!!R.G && dc(R.c, 8, a)
		}
		function on(a) {
			!!R.G && dc(R.c, 1, a)
		}
		function sn(a) {
			!!R.G && dc(R.c, 6, a)
		}
		function En() {
			!!R.G && cc(R.c, true)
		}
		function YB(a, b) {
			return vF(a.k, b)
		}
		function OG(a, b) {
			return a.re() == b
		}
		function YI(a, b) {
			return SD(a.a, b)
		}
		function Ry(a) {
			return a.c - a.a / a.s
		}
		function Sy(a) {
			return a.d - a.b / a.s
		}
		function AM(a) {
			return a.c == a.we()
		}
		function VT(a) {
			return YT(a, a.V.C)
		}
		function zZ(a) {
			return bP(a.b, a.c)
		}
		function uz(a) {
			return a >= 16 && a < 23
		}
		function rd(a, b) {
			wc();
			return a >> b
		}
		function jub(a) {
			iub(a);
			return a.j
		}
		function Of(a) {
			a.c.length = 0;
			++a.b
		}
		function fN(a) {
			a.e.length = 0;
			a.f = 0
		}
		function xF(a) {
			this.a = [];
			this.b = a
		}
		function M_() {
			K_.call(this, rDb, 0)
		}
		function Cib() {
			L1.call(this, null)
		}
		function uib() {
			uib = xhb;
			tib = new z1
		}
		function GC() {
			BC();
			this.k = new oxb
		}
		function bN() {
			$M();
			this.c = new oxb
		}
		function k$() {
			YZ != 0 && (YZ = 0);
			_Z = -1
		}
		function L2(a) {
			return a.l | a.m << 22
		}
		function rpb(a, b) {
			return b.d == a.d
		}
		function Vpb(a, b, c) {
			a.e += b;
			a.f += c
		}
		function $pb(a, b, c) {
			a.e += b;
			a.f += c
		}
		function MBb(a, b, c) {
			a.splice(b, c)
		}
		function stb(c, a, b) {
			c.lineTo(a, b)
		}
		function utb(c, a, b) {
			c.moveTo(a, b)
		}
		function Stb(b, a) {
			b.useProgram(a)
		}
		function Ctb(b, a) {
			b.strokeStyle = a
		}

		function setCtxAlpha(ctx, val) {
			ctx.globalAlpha = val < 0.3 ? 0.3 : val;
		}

		function Rl(b, a) {
			b.maxSquadSize = a
		}
		function oyb(a) {
			this.b = a;
			this.a = a
		}
		function zd(a, b) {
			this.d = a;
			this.e = b
		}
		function uq(a, b) {
			this.a = a;
			this.b = b
		}
		function wq(a, b) {
			this.a = a;
			this.b = b
		}
		function ju(a, b) {
			this.a = a;
			this.b = b
		}
		function $B(a, b) {
			this.c = a;
			this.d = b
		}
		function Nx(a, b) {
			ju.call(this, a, b)
		}
		function Ny(a, b) {
			zd.call(this, a, b)
		}
		function bF() {
			VE.call(this, new cF)
		}
		function kC(a) {
			a.j = new oxb;
			new oxb
		}
		function $s() {
			this.a = new Zjb(this)
		}
		function JJ(a, b) {
			this.a = a;
			this.b = b
		}
		function RU(a, b) {
			this.a = a;
			this.b = b
		}
		function LX(a) {
			this.b = a;
			this.c = a.b
		}
		function Ib(a) {
			return Fb(a) == a.H.b
		}
		function pP(a) {
			return a.b < bob(a.c)
		}
		function tm(b, a) {
			return b.__loc(a)
		}
		function UU(a, b) {
			return a.e[b] & 255
		}
		function q$(a) {
			return !!a.a || !!a.f
		}
		function en() {
			return R.d ? 0 : Se(R.D)
		}
		function rhb() {
			phb == null && (phb = [])
		}
		function qO(a, b, c) {
			a.V = b;
			VN(a, b, c)
		}
		function q0(a, b) {
			zd.call(this, a, b)
		}
		function g0(a, b) {
			zd.call(this, a, b)
		}
		function B0(a, b) {
			zd.call(this, a, b)
		}
		function M0(a, b) {
			zd.call(this, a, b)
		}
		function k_(a, b) {
			zd.call(this, a, b)
		}
		function K_(a, b) {
			zd.call(this, a, b)
		}
		function a1(a, b) {
			zd.call(this, a, b)
		}
		function c1() {
			a1.call(this, 'PX', 0)
		}
		function f1() {
			a1.call(this, 'EX', 3)
		}
		function e1() {
			a1.call(this, 'EM', 2)
		}
		function j1() {
			a1.call(this, 'CM', 7)
		}
		function k1() {
			a1.call(this, 'MM', 8)
		}
		function g1() {
			a1.call(this, 'PT', 4)
		}
		function h1() {
			a1.call(this, 'PC', 5)
		}
		function i1() {
			a1.call(this, 'IN', 6)
		}
		function d2(a, b) {
			zd.call(this, a, b)
		}
		function Bg(a, b) {
			Eg((dib(),
				a.$), b)
		}
		function xf(a, b) {
			Am(Iy, b);
			a.e = true
		}
		function _mb(a, b) {
			return bm(a.a, b)
		}
		function Gnb(a, b) {
			return bm(a.a, b)
		}
		function urb(a, b) {
			return bm(a.a, b)
		}
		function qrb(a, b) {
			erb(a, b);
			a.a = b.a
		}
		function Pnb(a) {
			_l(a.a, new Unb(a))
		}
		function rnb() {
			rnb = xhb;
			qnb = new wnb
		}
		function Khb() {
			Khb = xhb;
			Jhb = new Qhb
		}
		function Okb() {
			Okb = xhb;
			Nkb = new Qlb
		}
		function imb() {
			imb = xhb;
			hmb = new lmb
		}
		function Amb() {
			Amb = xhb;
			zmb = new Dmb
		}
		function Jmb() {
			Jmb = xhb;
			Imb = new Omb
		}
		function Trb() {
			Trb = xhb;
			Srb = new Zrb
		}
		function Qxb() {
			Qxb = xhb;
			Pxb = new Uxb
		}
		function _xb() {
			_xb = xhb;
			$xb = new ayb
		}
		function Xyb() {
			Xyb = xhb;
			Wyb = new Yyb
		}
		function BCb() {
			BCb = xhb;
			ACb = new FCb
		}
		function Bmb() {
			Amb();
			_N.call(this)
		}
		function Urb() {
			Trb();
			_N.call(this)
		}
		function Nt(a) {
			Et();
			jt.call(this, a)
		}
		function eu(a) {
			Et();
			Nt.call(this, a)
		}
		function lw(a) {
			kw();
			Nt.call(this, a)
		}
		function Qw(a) {
			Et();
			Nt.call(this, a)
		}
		function Ww(a) {
			Et();
			Nt.call(this, a)
		}
		function sx(a) {
			Et();
			Nt.call(this, a)
		}
		function Ix(a) {
			Hx();
			eu.call(this, a)
		}
		function bc(a) {
			gxb(a.R, new qL(a.S))
		}
		function Cg(a, b) {
			hib((dib(),
				a.$), b)
		}
		function Yz(a, b) {
			return Gnb(a.cb, b)
		}
		function iwb(a) {
			return a.a.c + a.b.c
		}
		function Uy(a) {
			return (a.e / 2 | 0) + a.b
		}
		function Ty(a) {
			return (a.f / 2 | 0) + a.a
		}
		function zn() {
			return !!R.G && !!R.G.t
		}
		function Cn() {
			return !!R.G && !!R.G.t
		}
		function kg() {
			this.e = [];
			this.a = gm()
		}
		function tD() {
			tD = xhb;
			nD();
			sD = new yD
		}
		function nD() {
			nD = xhb;
			hD();
			mD = new JD
		}
		function hD() {
			hD = xhb;
			$C();
			gD = new ND
		}
		function BD() {
			BD = xhb;
			BC();
			AD = new HD
		}
		function $C() {
			$C = xhb;
			BC();
			ZC = new LD
		}
		function nE() {
			nE = xhb;
			nD();
			mE = new IE
		}
		function AE() {
			AE = xhb;
			nD();
			zE = new GE
		}
		function tE() {
			tE = xhb;
			nE();
			sE = new xE
		}
		function HQ() {
			HQ = xhb;
			WP();
			GQ = new SQ
		}
		function zW() {
			zW = xhb;
			qW();
			yW = new FW
		}
		function PW() {
			PW = xhb;
			WP();
			OW = new VW
		}
		function YW() {
			YW = xhb;
			WP();
			XW = new gX
		}
		function jX() {
			jX = xhb;
			WP();
			iX = new nX
		}
		function qX() {
			qX = xhb;
			WP();
			pX = new AX
		}
		function DX() {
			DX = xhb;
			WP();
			CX = new GX
		}
		function JY() {
			JY = xhb;
			rY();
			IY = new SY
		}
		function Jh(a, b, c, d) {
			setFillText(a.f, b, c, d)
		}
		function zh(a, b, c) {
			itb(a.f, 0, 0, b, c)
		}
		function sG(a, b) {
			return PE(a.q, b).g
		}
		function wG(a, b) {
			return PE(a.q, b).s
		}
		function eW(a, b) {
			VV();
			return b.c == a
		}
		function DS(a, b) {
			ES(a, b, a.d[a.e] + 1)
		}
		function anb(a, b) {
			_l(a.a, new jm(b))
		}
		function vjb(a, b) {
			this.a = a;
			this.b = b
		}
		function omb(a, b) {
			this.a = a;
			this.b = b
		}
		function Z$(a, b) {
			a.dispatchEvent(b)
		}
		function j$(a) {
			$wnd.clearTimeout(a)
		}
		function ZJ(a) {
			XJ();
			NJ.call(this, a)
		}
		function OK(a) {
			MK();
			NJ.call(this, a)
		}
		function d1() {
			a1.call(this, 'PCT', 1)
		}
		function El(b, a) {
			b.canDisableName = a
		}
		function Vtb(b, a) {
			b.clearTimeout(a)
		}
		function Exb(a, b) {
			Hxb(a, a.length, b)
		}
		function Ozb(a, b) {
			return a.a.get(b)
		}
		function pzb(a, b) {
			return awb(a.a, b)
		}
		function GBb(a) {
			return sBb(uBb(), a)
		}
		function b3(a) {
			return a == null ? null : a
		}
		function Gb(a) {
			return a.G ? a.G.f : null
		}
		function sh(a) {
			return sprites.get(a)
		}
		function KBb(a, b, c) {
			a.splice(b, 0, c)
		}
		function aq(a, b, c) {
			Cl(b, sl(a.e, c.a))
		}
		function Or(a, b) {
			mo(a, new Wr(a,b), 0)
		}
		function bt(a, b) {
			Xs(a, b, (dib(),
				a.$))
		}
		function Qrb(a, b) {
			this.a = a;
			this.b = b
		}
		function vsb(a, b) {
			this.a = a;
			this.b = b
		}
		function $wb(a, b) {
			this.a = a;
			this.b = b
		}

		function getSpriteByName(a) {
			this.d = sprites.get(a);
		}

		function rM(a) {
			a.p = 0;
			VD(a.a);
			VD(a.s)
		}
		function pO(a, b) {
			a.V = b;
			WN(a, b);
			XN(a)
		}
		function vO(a, b, c) {
			WO(a, b, c) && a.Xe()
		}
		function jR(a, b) {
			return Hqb(b, a.r) & 7
		}
		function YT(a, b) {
			return b ? a.o[b.f] : 0
		}
		function WV(a, b) {
			return (b.e & a.g) != 0
		}
		function KY(a, b) {
			return oqb(MY(a), b)
		}
		function sT(a) {
			return !!a.b && pF(a.b)
		}
		function oM(a) {
			return !!a.d && dS(a.d)
		}
		function Pqb(a) {
			Gqb();
			return Bqb[a]
		}
		function Qqb(a) {
			Gqb();
			return Cqb[a]
		}
		function Rqb(a) {
			Gqb();
			return Eqb[a]
		}
		function Sqb(a) {
			Gqb();
			return Fqb[a]
		}
		function Mzb() {
			Izb();
			return new Hzb
		}
		function ZE() {
			OE.call(this);
			WE(this)
		}
		function Z_() {
			K_.call(this, 'MOVE', 4)
		}
		function m_() {
			k_.call(this, 'NONE', 0)
		}
		function k0() {
			g0.call(this, 'NONE', 2)
		}
		function i0() {
			g0.call(this, 'LEFT', 0)
		}
		function Q0() {
			M0.call(this, 'LEFT', 2)
		}
		function v0() {
			q0.call(this, 'AUTO', 3)
		}
		function W_() {
			K_.call(this, 'AUTO', 1)
		}
		function Znb(a, b) {
			$nb.call(this, a, b)
		}
		function Etb(c, a, b) {
			c.translate(a, b)
		}
		function Ptb(c, a, b) {
			c.uniform1f(a, b)
		}
		function hhb(a, b) {
			return fhb(a, b) == 0
		}
		function Esb(a) {
			return a >> 31 | -a >>> 31
		}
		function um(b, a) {
			return b.__locMsg(a)
		}
		function An() {
			return !!R.G && !!Gb(R.c)
		}
		function rn(a) {
			!!R.G && dc(R.c, 7, a ? 0 : 2)
		}
		function Rm(a) {
			!!R.c && (R.c.b = a ? 1 : -1)
		}
		function eA(a) {
			jmb(a.$, a.cb.e, a.cb.f)
		}
		function Yh(a, b, c) {
			Atb(a.f, $i(0, c, b))
		}
		function dd(a, b) {
			a.T = new jqb(b,0,0,0)
		}
		function sM(a, b) {
			a.d = b;
			!!b && AR(b, a.c)
		}
		function _$(a, b) {
			a.textContent = b || ''
		}
		function $$(a, b) {
			return a.contains(b)
		}
		function cS(a) {
			return a.J == 1 || a.B == 16
		}
		function fW(a, b) {
			VV();
			return b.a == a.r
		}
		function yvb(a, b) {
			a.a += '' + b;
			return a
		}
		function zvb(a, b) {
			a.a += '' + b;
			return a
		}
		function Utb(b, a) {
			b.clearInterval(a)
		}
		function lCb() {
			lCb = xhb;
			iCb = {};
			kCb = {}
		}
		function MG() {
			VE.call(this, (gG(),
				fG))
		}
		function q_() {
			k_.call(this, 'SOLID', 4)
		}
		function S_() {
			K_.call(this, 'WAIT', 14)
		}
		function R_() {
			K_.call(this, 'TEXT', 13)
		}
		function T_() {
			K_.call(this, 'HELP', 15)
		}
		function j0() {
			g0.call(this, 'RIGHT', 1)
		}
		function R0() {
			M0.call(this, 'RIGHT', 3)
		}
		function G0() {
			B0.call(this, 'FIXED', 3)
		}
		function wnb() {
			rnb();
			pN.call(this, [])
		}
		function qL(a) {
			oL();
			this.f = a;
			this.g = 0
		}
		function GL(a) {
			EL();
			this.f = a;
			this.g = 0
		}
		function L1(a) {
			this.a = new T1;
			this.b = a
		}
		function q2(a) {
			return r2(a.l, a.m, a.h)
		}
		function kib(a) {
			return Eib((dib(),
				a))
		}
		function Xib(a, b) {
			Xs(a, b, (dib(),
				a.$))
		}
		function Snb(a, b) {
			dm(a.a, b.ib, Sub(1))
		}
		function kkb(a, b) {
			aA(a.rb, b);
			b.Y = null
		}
		function Oxb(a, b) {
			Lxb(a, 0, a.length, b)
		}
		function qsb(a, b, c) {
			osb(a.Xc(), c * 8, b)
		}
		function Gtb(c, a, b) {
			c.bindBuffer(a, b)
		}
		function lvb(a, b) {
			return a.indexOf(b)
		}
		function jvb(a, b) {
			return _Bb(a),
			a === b
		}
		function Xvb(a) {
			return !a ? null : a.jg()
		}
		function zAb(a) {
			return a != null ? P(a) : 0
		}
		function qob(a) {
			a.d = 0;
			a.c = 0;
			a.e = false
		}
		function Dk(a) {
			if (a.a != 0) {
				a.a = 0;
				++a.f
			}
		}
		function _k(a) {
			$wnd.sprites.skinList = a
		}
		function Czb(a) {
			this.a = Mzb();
			this.b = a
		}
		function Rzb(a) {
			this.a = Mzb();
			this.b = a
		}
		function HCb() {
			GCb();
			Evb();
			ihb(NBb())
		}
		function DCb() {
			DCb = xhb;
			pCb();
			iub(Ygb)
		}
		function Kob() {
			Kob = xhb;
			sBb(uBb(), zHb)
		}
		function Epb() {
			Fpb.call(this, 64, 64, 0)
		}
		function UBb() {
			PBb.call(this, 'UTF-8')
		}
		function zp(a) {
			tc.call(this, a);
			new nzb
		}
		function KA(a) {
			this.b = a;
			this.a = new iqb
		}
		function NJ(a) {
			this.f = a.ib;
			this.g = a.kb
		}
		function Dy(a) {
			eAb(a.b);
			eAb(a.e);
			a.f = 0
		}
		function wK(a) {
			a.b = 0;
			a.a = 0;
			a.c = 0;
			a.d = 0
		}
		function uo(a, b, c, d) {
			a.M = b;
			a.L = c;
			a.N = d
		}
		function cd(a, b) {
			a.pb = b;
			ve(a.c.s, b == 0)
		}
		function nP(a, b) {
			return _nb(a.e, a.b + b)
		}
		function eS(a) {
			return a.I > 0 || a.e > a.Y._
		}
		function pF(a) {
			return a.a == 11 || a.a == 13
		}
		function bS(a) {
			return a.O.f >= 3 || a.N <= 0
		}
		function bm(b, a) {
			return b.arr[a] || null
		}
		function rT(a) {
			return !!a.b && a.b.a == 11
		}
		function Y$(a) {
			return new WebSocket(a)
		}
		function Qn(b, a) {
			b.push(a);
			return true
		}
		function zc(a, b) {
			dg(jg(a.ob, b.mb.c), b)
		}
		function zv(a) {
			a.j = j2(w5, PCb, 80, 8, 0, 1)
		}
		function n_() {
			k_.call(this, 'DOTTED', 1)
		}
		function o_() {
			k_.call(this, 'DASHED', 2)
		}
		function p_() {
			k_.call(this, 'HIDDEN', 3)
		}
		function t0() {
			q0.call(this, 'HIDDEN', 1)
		}
		function u0() {
			q0.call(this, 'SCROLL', 2)
		}
		function D0() {
			B0.call(this, 'STATIC', 0)
		}
		function O0() {
			M0.call(this, 'CENTER', 0)
		}
		function Tnb() {
			this.b = gm();
			this.a = gm()
		}
		function U(a) {
			this.sb = new rmb;
			this.rb = a
		}
		function t1() {
			t1 = xhb;
			s1 = new A1(new u1)
		}
		function lib(a) {
			dib();
			Fib();
			Oib(a, AEb)
		}
		function iib(a, b) {
			dib();
			Fib();
			Oib(a, b)
		}
		function ABb(a, b) {
			BBb(a, (MAb(), IAb), b)
		}
		function Qkb(a, b) {
			a.Gf();
			WN(a, b);
			XN(a)
		}
		function pn(a, b) {
			!!R.G && dc(R.c, b ? 5 : 4, a)
		}
		function unb(a, b) {
			Ssb(b);
			return b.$ == a
		}
		function ly(a, b, c) {
			a.c = b;
			a.b = c;
			return a
		}
		function Qc(a, b, c) {
			a.A = true;
			a.u = b;
			a.v = c
		}
		function iV(a, b, c) {
			VN(a, b, c);
			jV(a, a.c)
		}
		function ZG(a, b) {
			Tsb(a.b < 0 && b >= 0);
			a.b = b
		}
		function hH(a, b) {
			fH();
			this.b = a;
			this.a = b
		}
		function _N() {
			this.fb = new iqb;
			this.X = []
		}
		function _Y(a, b, c) {
			a.c = new kqb(b);
			a.d = c
		}
		function Hl(c, a, b) {
			c.size = a;
			c.maxSize = b
		}
		function al(a) {
			$wnd.sprites.staticURL = a
		}
		function Ul(a) {
			while (a.length > 0)
				a.pop()
		}
		function zR(a) {
			return a.v.r > 0 ? a.v.r : a.K
		}
		function hzb(a) {
			return a < 10 ? '0' + a : '' + a
		}
		function vvb(a) {
			return wvb(a, a.length)
		}
		function Rob(a, b, c) {
			return a.a[b + a.p * c]
		}
		function r2(a, b, c) {
			return {
				l: a,
				m: b,
				h: c
			}
		}
		function Krb(a, b, c) {
			return a.a[c] = yk(b)
		}
		function Irb(a, b) {
			return msb(a.a, b, a.d)
		}
		function Dsb(a, b) {
			return a >> 31 | b - a >>> 31
		}

		function setFillText(ctx, a, b, c) {
			ctx.fillText(a, b, c);
		}

		function drawRect(ctx, a, b, c, d) {
			ctx.rect(a, b, c, d);
		}

		function Ntb(c, a, b) {
			c.shaderSource(a, b)
		}
		function mxb(a, b) {
			Nxb(a.a, a.a.length, b)
		}
		function Z2(a, b) {
			return a != null && W2(a, b)
		}
		function Lub(a, b) {
			return a < b ? -1 : a > b ? 1 : 0
		}
		function Xh(a, b, c) {
			htb(a.b, b);
			gtb(a.b, c)
		}
		function LA(a) {
			a.j = j2(Cfb, PCb, 83, 0, 0, 1)
		}
		function P0() {
			M0.call(this, 'JUSTIFY', 1)
		}
		function s0() {
			q0.call(this, 'VISIBLE', 0)
		}
		function Y_() {
			K_.call(this, 'POINTER', 3)
		}
		function Sjb() {
			Ljb.call(this, $doc.body)
		}
		function yqb() {
			this.i = new iqb;
			this.a = []
		}
		function rib() {
			if (!nib) {
				Wib();
				nib = true
			}
		}
		function Fib() {
			if (!Dib) {
				Nib();
				Dib = true
			}
		}
		function Zk(a) {
			Nu(),
				Cu = true;
			Nq(),
				Lq = true
		}
		function cj(a, b) {
			return PE(a.i.q, b).q == 2
		}
		function Ys(a, b) {
			return Zs(a, Ujb(a.a, b))
		}
		function ZD(a, b) {
			return TD(a, b) || QD(a, b)
		}
		function mM(a, b) {
			return (a.n & 1 << b - 16) != 0
		}
		function Yl(a) {
			return Y2(a) ? a.gd() : Xl(a)
		}
		function Pn(a) {
			return Y2(a) ? a.nd() : Mn(a)
		}
		function hB(a) {
			return a.d == 2 ? a.c - a.e : KCb
		}
		function CO(a) {
			return a.O.f == 3 ? yZ(a.O) : 0
		}
		function DO(a) {
			return a.O.f == 3 ? zZ(a.O) : 0
		}
		function MO(a) {
			return a.O.f == 3 && a.O.a == 0
		}
		function $P(a) {
			return a.O.f < 3 && 2 * a.N <= 40
		}
		function T$(a) {
			return new ArrayBuffer(a)
		}
		function a_(b, a) {
			return b.appendChild(a)
		}
		function b_(b, a) {
			return b.removeChild(a)
		}
		function gx(a, b, c) {
			if (c.e)
				return;
			fx(a, b)
		}
		function Yy(a, b, c) {
			ez(a, b + a.i, c + a.j, a.s)
		}
		function oN(a, b) {
			setObjectParam(a.e, b, null);
			a.g = true
		}
		function OO(a, b) {
			a.N != b && (a.hb |= 4);
			a.N = b
		}
		function gQ(a, b) {
			a.N != b && (a.hb |= 4);
			a.N = b
		}
		function Zl(a) {
			a.size = 0;
			a.arr = {};
			a.gen = 0
		}
		function oh(c, a, b) {
			c.frames[a].pattern = b
		}
		function $k(a) {
			$wnd.sprites.dynamicURL = a
		}
		function $_() {
			K_.call(this, 'E_RESIZE', 5)
		}
		function b0() {
			K_.call(this, 'N_RESIZE', 8)
		}
		function E0() {
			B0.call(this, 'RELATIVE', 1)
		}
		function F0() {
			B0.call(this, 'ABSOLUTE', 2)
		}
		function zpb(a, b, c) {
			upb.call(this, a, b, c)
		}
		function ltb(d, a, b, c) {
			d.drawImage(a, b, c)
		}
		function Qtb(d, a, b, c) {
			d.uniform2f(a, b, c)
		}
		function Msb(a, b, c) {
			a.a = b ^ 1502;
			a.b = c ^ FHb
		}
		function gvb(a, b) {
			return a.charCodeAt(b)
		}
		function bob(a) {
			return a.a[a.a.length - 1]
		}
		function cob(a) {
			return a.b[a.b.length - 1]
		}
		function Fob(a) {
			return a.a[a.b % 20] != null
		}
		function ih(b, a) {
			return b.childs[a] || null
		}
		function eCb(a, b) {
			return a == b ? 0 : a < b ? -1 : 1
		}
		function Hqb(a, b) {
			Gqb();
			return zqb[a][b]
		}
		function $2(a) {
			return typeof a === 'number'
		}
		function a3(a) {
			return typeof a === 'string'
		}
		function Yu(a) {
			return Al(a.J, a.A, a.B, a.C)
		}
		function im(a) {
			return Y2(a) ? a.kd() : a.size
		}
		function Kc(a) {
			return a.G ? a.G.c : (Jd(),
				Fd)
		}
		function Vb(a) {
			return !!a.G && (a.G.g & 1) == 0
		}
		function gM(a, b) {
			return b ? SD(a.s, b.u).c : 0
		}
		function ZV(a, b) {
			return PD(a.d, new lW(b))
		}
		function FF(a, b) {
			return (mU(),
				fU)[a.c[b]]
		}
		function Um() {
			return Sl((Jd(),
				Ed).c, Ed.a)
		}
		function yZ(a) {
			return Xub(a.d, a.g.cb ? 0 : 1)
		}
		function mj() {
			this.n = j2(ahb, uEb, 7, 9, 16, 1)
		}
		function N_() {
			K_.call(this, 'SE_RESIZE', 9)
		}
		function P_() {
			K_.call(this, 'S_RESIZE', 11)
		}
		function Q_() {
			K_.call(this, 'W_RESIZE', 12)
		}
		function __() {
			K_.call(this, 'NE_RESIZE', 6)
		}
		function a0() {
			K_.call(this, 'NW_RESIZE', 7)
		}
		function X_() {
			K_.call(this, 'CROSSHAIR', 2)
		}
		function nA() {
			oA.call(this, new xG, new qB)
		}
		function pz(a) {
			U.call(this, a.rb);
			this.a = a
		}
		function Ljb(a) {
			$ib.call(this, a);
			Ig(this)
		}
		function _W() {
			YW();
			kQ.call(this);
			this.a = 3
		}
		function rX() {
			qX();
			kQ.call(this);
			this.a = 5
		}
		function oG() {
			nG();
			OE.call(this);
			new oxb
		}
		function XA() {
			LA(this);
			NA(this);
			this.Wd()
		}
		function T1() {
			this.d = new nzb;
			this.c = false
		}
		function Cl(b, a) {
			b.pendingPlayers.push(a)
		}
		function btb(b, a) {
			return b.appendChild(a)
		}
		function ctb(b, a) {
			return b.removeChild(a)
		}
		function ttb(b, a) {
			return b.measureText(a)
		}
		function mvb(a, b) {
			return a.lastIndexOf(b)
		}
		function spb(a, b, c) {
			return a.e == b && a.f == c
		}
		function atb(a, b, c, d) {
			return Xsb(a, b, c, d)
		}
		function Jtb(d, a, b, c) {
			d.drawArrays(a, b, c)
		}
		function Htb(d, a, b, c) {
			d.bufferData(a, b, c)
		}
		function qzb(a, b) {
			return gwb(a.a, b) != null
		}
		function hCb(a) {
			return a.$H || (a.$H = ++gCb)
		}
		function A2(a) {
			return a.l + a.m * gHb + a.h * hHb
		}
		function ng(a) {
			return a.d.o * 23917 + Zpb(a.f)
		}
		function fub(a) {
			return a >= 56320 && a <= 57343
		}
		function Rib(a) {
			a.preventDefault();
			Sib(a)
		}
		function Pl(b, a) {
			b.mySquadId = a;
			b.onJoin(a)
		}
		function vb(a, b) {
			a.W = true;
			a.rb._ = b;
			fN(a.M)
		}
		function Bvb(a) {
			Ztb.call(this, (_Bb(a),
				a))
		}
		function vyb(a) {
			lyb.call(this, a);
			this.a = a
		}
		function kz(a) {
			iz.call(this, a.rb);
			this.a = a
		}
		function Ef(a) {
			rf.call(this, a.rb);
			this.d = a
		}
		function sN() {
			pN.call(this, []);
			this.d = this
		}
		function kQ() {
			WP();
			XO.call(this);
			this.N = 40
		}
		function CD() {
			BD();
			GC.call(this);
			this.g |= 4
		}
		function oE() {
			nE();
			oD.call(this);
			this.g |= 4
		}
		function uT() {
			pT();
			rO.call(this);
			this.bb = 1
		}
		function tY() {
			rY();
			fY.call(this);
			this.k = -5
		}
		function O_() {
			K_.call(this, 'SW_RESIZE', 10)
		}
		function ECb(a) {
			DCb();
			this.a = sBb(uBb(), a)
		}
		function Bhb() {
			jib();
			Khb();
			Lhb();
			new T;
			S()
		}
		function mkb(a, b) {
			_l(b, new jm(new ykb(a)))
		}
		function Sl(a, b) {
			return {
				width: a,
				height: b
			}
		}
		function gm() {
			return {
				size: 0,
				arr: {},
				gen: 0
			}
		}
		function jhb(a) {
			return typeof a === 'number'
		}
		function hh(a) {
			$wnd.sprites.demand(a.name)
		}
		function Crb(a) {
			this.c = a;
			this.a = a.d.length
		}
		function oxb() {
			this.a = j2(Afb, PCb, 1, 0, 5, 1)
		}
		function Job() {
			this.a = j2(Afb, PCb, 1, 20, 5, 1)
		}
		function rmb() {
			this.b = j2(h3, XCb, 7, 32, 15, 1)
		}
		function Qsb(a) {
			if (!a) {
				throw dhb(new Gub)
			}
		}
		function Tsb(a) {
			if (!a) {
				throw dhb(new Iub)
			}
		}
		function VBb(a) {
			if (!a) {
				throw dhb(new Gub)
			}
		}
		function ZBb(a) {
			if (!a) {
				throw dhb(new xAb)
			}
		}
		function iub(a) {
			if (a.j != null) {
				return
			}
			xub(a)
		}
		function wrb(a, b) {
			Qsb(b >= 0);
			a.b = b;
			return a
		}
		function prb(a, b) {
			drb(a, b);
			a.a = Jqb(b.Uf())
		}
		function eY(a, b) {
			a.Y ? (a.k = a.Y._ + b) : (a.k = b)
		}
		function ms(a, b) {
			if (a.t != b) {
				a.g = true;
				a.t = b
			}
		}
		function Ns(a, b) {
			Bg(a, b.length > 0);
			_$(a.a, b)
		}
		function mo(a, b, c) {
			lo(a, b);
			no(a, c);
			return b
		}
		function qCb(a, b, c) {
			rCb(a, (yCb(),
				wCb), b, c)
		}
		function qvb(a, b, c) {
			return a.substr(b, c - b)
		}
		function iR(a, b, c) {
			return c == (Hqb(b, a.r) & 7)
		}
		function I$(a) {
			E$();
			return parseInt(a) || -1
		}
		function Se(a) {
			return !a.c ? 3 : a.c.readyState
		}
		function Gv(a) {
			return a.b < pDb || a.s + 6 < a.kb._
		}
		function Xm(a) {
			$wnd.cancelAnimationFrame(a)
		}
		function nm(b, a) {
			b.emit('gameEventAdmin', a)
		}
		function mb(a, b, c, d, e) {
			a.playEvent(b, c, d, e)
		}

		function ctxFillRect(ctx, a, b, c, d) {
			ctx.fillRect(a, b, c, d);
		}
		
		function Ttb(e, a, b, c, d) {
			e.viewport(a, b, c, d)
		}
		function fCb(b, c, d) {
			try {
				b[c] = d
			} catch (a) {}
		}
		function Dnb(a, b) {
			snb(a, b);
			dm(a.a, b.Ge(), b)
		}
		function orb(a, b) {
			Tqb(a, b);
			a.a = Hqb(b.c, a.a)
		}
		function sCb(a, b) {
			rCb(a, (yCb(),
				xCb), b, null)
		}
		function azb(a) {
			var b;
			b = a[KHb] | 0;
			a[KHb] = b + 1
		}
		function Psb() {
			Jsb();
			this.a = 1502;
			this.b = FHb
		}
		function JQ() {
			HQ();
			kQ.call(this);
			this.N = 100
		}
		function WQ() {
			VQ();
			XO.call(this);
			JO(this, 4)
		}
		function Qr(a) {
			zo.call(this, a, 5);
			this.c = jl()
		}
		function cb(a) {
			U.call(this, a);
			this.f = new nzb
		}
		function U_() {
			K_.call(this, 'COL_RESIZE', 16)
		}
		function V_() {
			K_.call(this, 'ROW_RESIZE', 17)
		}
		function X2(a) {
			return String.fromCharCode(a)
		}
		function Xu(a) {
			return vl(a.J, a.A, a.C, ~~a.eb)
		}
		function hm(a) {
			return Y2(a) ? a.jd() : a.size == 0
		}
		function kA(a) {
			return !!a && (a.g & 1) != 0 && a.k < 3
		}
		function iM(a, b) {
			return !!b && SD(a.s, b.u).c > 0
		}
		function hM(a, b) {
			return b ? SD(a.s, b.u).we() : 0
		}
		function ej(a, b, c) {
			return b.k == PE(a.i.q, c).k
		}
		function b$(a, b, c) {
			return a.apply(b, c);
			var d
		}
		function J1(a, b, c) {
			return N1(a.a, b, c),
				new U1
		}
		function $p(a, b) {
			return a.j = a.j | !sl(a.e, b.c)
		}
		function DC(a, b, c) {
			a.i = b;
			a.j = 255;
			a.ke(c, a.j)
		}
		function QA(a, b) {
			a.e = b;
			b != null && fCb(b, TFb, a)
		}
		function t$(a, b) {
			a.a = w$(a.a, [b, false]);
			r$(a)
		}
		function rrb(a, b) {
			a.d = (Gqb(),
			b & 7);
			a.a = Jqb(b)
		}
		function Itb(d, a, b, c) {
			d.bufferSubData(a, b, c)
		}
		function itb(e, a, b, c, d) {
			e.clearRect(a, b, c, d)
		}
		function Fxb(a, b) {
			XBb(b, a.length);
			Hxb(a, b, 0)
		}
		function Bjb(a) {
			Ajb.call(this);
			kjb(this.a, a)
		}
		function TI(a) {
			U.call(this, a);
			this.c = a.Q.d.i
		}
		function pJ(a) {
			U.call(this, a);
			this.b = new oxb
		}
		function kX() {
			jX();
			kQ.call(this);
			this.a = true
		}
		function fsb() {
			this.a = gm();
			this.c = 2;
			this.b = 0
		}
		function Do(a, b, c) {
			this.r = a;
			this.t = b;
			this.p = c
		}
		function gmb() {
			this.b = new oxb;
			this.a = new nzb
		}
		function kp() {
			this.d = new di;
			Ag(this, this.d.b)
		}
		function dzb(a) {
			this.a = new $wnd.Date(lhb(a))
		}
		function Qz(a, b, c) {
			this.c = a;
			this.a = b;
			this.b = c
		}
		function lE(a, b) {
			_D.call(this, a, b);
			$D(this, 8)
		}
		function RM(a, b, c) {
			zk(c);
			c.$c(null);
			PM(a, b, c)
		}
		function pm(c, a, b) {
			c.emit('gameEventLog', a, b)
		}
		function mm(b, a) {
			b.emit('forceChangeRoom', a)
		}
		function Ol(b, a) {
			b.mySquadId = a;
			b.onCreate(a)
		}

		function setObjectParam(obj, param, newVal) {
			var oldVal = obj[param];
			obj[param] = newVal;
			return oldVal;
		}

		function jn() {
			if (R.G)
				return R.G.k;
			return null
		}
		function Yp(a) {
			if (!a.rb)
				return;
			gr(a.f.e, a.rb)
		}
		function ypb(a) {
			return Rob(a.d, a.e >> 8, a.f >> 8)
		}
		function WT(a) {
			return YT(a, a.V.D) + YT(a, a.V.B)
		}
		function nvb(a, b, c) {
			return a.lastIndexOf(b, c)
		}
		function Oqb(a, b) {
			Gqb();
			return zqb[a][Kqb(b)]
		}
		function Wm(a, b) {
			(Jd(),
				Ed).c = a;
			Ed.a = b;
			ae(R, Ed)
		}
		function Kh(a, b, c, d, e, f, g) {
			Gi(a.f, b, c, d, e, f, g)
		}
		function Dtb(e, a, b, c, d) {
			e.strokeRect(a, b, c, d)
		}
		function kB(a, b) {
			fB();
			this.a = a;
			jB(this, true, b)
		}
		function wj(a) {
			this.D = new uk;
			this.d = a;
			sj(this)
		}
		function qj(a) {
			rj(a);
			a.k = 1;
			a.i = 1;
			a.g = 1;
			a.f = a.q
		}
		function oC(a, b) {
			if (a.k == b)
				return;
			a.g |= 4;
			a.k = b
		}
		function pC(a, b) {
			if (a.n == b)
				return;
			a.g |= 4;
			a.n = b
		}
		function qC(a, b) {
			if (a.o == b)
				return;
			a.g |= 8;
			a.o = b
		}
		function tC(a, b) {
			if (a.u == b)
				return;
			a.g |= 8;
			a.u = b
		}
		function sC(a, b) {
			if (a.s != b)
				return;
			a.g |= 4;
			a.s = b
		}
		function fQ(a, b, c) {
			if (!a.e || !b) {
				a.e = b;
				a.f = c % 8
			}
		}
		function ZL(a, b) {
			a.b = b.ad(null);
			a.e = b.ad(null)
		}
		function _A(a) {
			a.c = null;
			a.b = null;
			bqb(a.a, null)
		}
		function Pc(a) {
			a.pb = 0;
			ve(a.c.s, true);
			a.J = true
		}
		function Ml(b, a) {
			b.squadModified = true;
			b.del(a)
		}
		function _tb() {
			YA.call(this, 'divide by zero')
		}
		function aL(a, b) {
			$K();
			NJ.call(this, a);
			this.a = b
		}
		function yL(a) {
			vL();
			wL(this);
			this.f = a;
			this.g = 0
		}
		function OV(a, b) {
			MV();
			this.b = b;
			NV(this, true, a)
		}
		function sY(a, b) {
			a.V = b;
			WN(a, b);
			XN(a);
			eY(a, a.k)
		}
		function H1(a) {
			var b;
			if (E1) {
				b = new F1;
				K1(a, b)
			}
		}
		function O1(a, b, c, d) {
			var e;
			e = Q1(a, b, c);
			fm(e, d)
		}
		function Nlb(a, b, c) {
			zd.call(this, a, b);
			this.a = c
		}
		function hpb(a, b, c) {
			this.b = a;
			this.c = b;
			this.a = c
		}
		function upb(a, b, c) {
			this.e = b;
			this.f = c;
			this.d = a
		}
		function Ktb(b, a) {
			b.enableVertexAttribArray(a)
		}
		function Djb(b, a) {
			Cjb();
			b.__gwt_resolve = Ejb(a)
		}
		function qqb(a, b) {
			rqb(a, b.d, b.e >> 5, b.f >> 5, 1, 1)
		}
		function je(a) {
			a.b ? Utb($wnd, a.c) : Vtb($wnd, a.c)
		}
		function _R(a) {
			if (a.p > 0)
				return a.o;
			return a.fb
		}
		function XT(a, b) {
			if (b < 0)
				return 0;
			return a.o[b]
		}
		function Td(a) {
			if (!a.G)
				return -1;
			return a.c.N.k
		}
		function BR(a) {
			if (a.B == 0)
				return;
			a.B = 0;
			a.hb |= 32
		}
		function CR(a) {
			if (a.C == 0)
				return;
			a.C = 0;
			a.hb |= 32
		}
		function LW(a, b) {
			b < 0 && (b = 0);
			return a.a[b].of()
		}
		function ec(a, b) {
			gxb(a.R, new PL(a.rb.W.Fb(),b))
		}
		function Zp(a, b) {
			Wp(a, b) ? Qn(a.g, b) : rl(a.e, b.ib)
		}
		function Uz(a) {
			cmb(a.X);
			dmb(a.X);
			++a._;
			bmb(a.X)
		}
		function On(a) {
			return Y2(a) ? a.md() : a.pos + 1 < a.sz
		}
		function $l(b, a) {
			return b.arr.hasOwnProperty(a)
		}
		function lm(c, a, b) {
			c.emit('achievementGet', a, b)
		}
		function tO(a, b) {
			!a.R && (a.R = new oxb);
			gxb(a.R, b)
		}
		function NO(a, b) {
			if (b == a.M)
				return;
			a.hb |= 2;
			a.M = b
		}
		function MP(a, b) {
			if (a.s == b)
				return;
			a.hb |= 1;
			a.s = b
		}
		function QO(a, b) {
			if (a.S == b)
				return;
			a.S = b;
			a.hb |= 2
		}
		function US(a, b) {
			if (a.n == b)
				return;
			a.n = b;
			a.hb |= 4
		}
		function Kt(a, b, c, d) {
			a.$ = c;
			a.Z = d;
			a.Y = b;
			a.X = null
		}
		function Xzb(a, b, c) {
			this.a = a;
			this.b = b;
			this.c = c
		}
		function jAb(a, b, c) {
			this.d = a;
			this.b = c;
			this.a = b
		}
		function SF() {
			VE.call(this, (KF(),
				JF));
			this.a = []
		}
		function M1(a, b) {
			!a.a && (a.a = new oxb);
			gxb(a.a, b)
		}
		function Enb(a, b) {
			return !$l(a.a, b) && !$l(a.b, b)
		}
		function dS(a) {
			return !!a.Y && ZI(a.V.O, a).a.b == 3
		}
		function pU(a) {
			return !!a.f && YV(a.f, a) ? a.f : null
		}
		function VU(a, b) {
			return a.e[b + 11 + (b >> 3 << 1)] & 255
		}
		function WU(a, b, c) {
			return a.e[b + 5 + (c + 5) * 10] & 255
		}
		function ktb(c, a, b) {
			return c.createPattern(a, b)
		}
		function gxb(a, b) {
			a.a[a.a.length] = b;
			return true
		}
		function xrb(a, b) {
			this.a = gm();
			this.c = a;
			this.d = b
		}
		function $W(a, b) {
			if (a.a == b)
				return;
			a.a = b;
			a.hb |= 4
		}
		function wW(a, b) {
			if (a.e == b)
				return;
			a.hb |= 8;
			a.e = b
		}
		function Jc(a) {
			if (!a.F)
				return null;
			return a.F.pb
		}
		function Rsb(a, b) {
			if (!a) {
				throw dhb(new Hub(b))
			}
		}
		function Rkb(a, b, c) {
			HN(a, c);
			a.Gf();
			VN(a, b, null)
		}
		function LBb(a, b, c) {
			JBb(c, 0, a, b, c.length, false)
		}
		function bA(a, b) {
			return cpb(a.d, a.e >> 5, a.f >> 5, b)
		}
		function lC(a) {
			return (a.k & 129) == 1 && (a.e & 512) == 0
		}
		function wC(a) {
			if (!jvb(a.q, a.p)) {
				a.g |= 2;
				a.q = a.p
			}
		}
		function Jb(a) {
			a.K || gxb(a.R, new GL(a.rb.W.Fb()))
		}
		function Ik(a) {
			Jk.call(this, a, new Uint8Array(a))
		}
		function ei(a) {
			this.b = a;
			this.f = a.getContext('2d')
		}
		function VE(a) {
			this.c = new nzb;
			this.b = [];
			this.d = a
		}
		function djb() {
			djb = xhb;
			bjb = new gjb;
			cjb = new ijb
		}
		function sAb() {
			sAb = xhb;
			qAb = new tAb;
			rAb = new vAb
		}
		function GCb() {
			GCb = xhb;
			Evb();
			ihb(NBb());
			new nzb
		}
		function GM(a) {
			return a.g == 1 ? new BM(a) : new KM(a)
		}
		function VS(a, b) {
			return a.p == 255 || b == a.p && a.p != 0
		}
		function ilb(a, b, c) {
			return a.d[(b & 7) + ((c & 7) << 3)]
		}
		function dsb(a, b, c) {
			esb(a, b.d, b.e >> 5, b.f >> 5, 0, c)
		}
		function mtb(f, a, b, c, d, e) {
			f.drawImage(a, b, c, d, e)
		}
		function otb(f, a, b, c, d, e) {
			f.drawImage(a, b, c, d, e)
		}
		function Rtb(f, a, b, c, d, e) {
			f.uniform4f(a, b, c, d, e)
		}
		function Nxb(a, b, c) {
			XBb(b, a.length);
			Lxb(a, 0, b, c)
		}
		function _zb(a, b) {
			aAb(a, b, a.c.b, a.c);
			return true
		}
		function pub(a, b) {
			var c;
			c = mub(a, b);
			c.e = 2;
			return c
		}
		function Ic(a, b) {
			var c;
			c = a.e[b];
			return c ? c : a.e[1]
		}
		function Gxb(a, b) {
			var c;
			for (c = 0; c < b; ++c) {
				a[c] = 0
			}
		}
		function $N(a, b) {
			if (a.Y)
				throw dhb(new ymb);
			a.W = b
		}
		function DR(a, b) {
			if (a.I == b)
				return;
			a.I = b;
			a.hb |= 32
		}
		function zN(a) {
			if (a.Ce())
				return a.eb;
			return null
		}
		function lh(b, a) {
			return b.frames[a].pattern || null
		}
		function ul(a) {
			return a.animCount * a.animCountSide
		}
		function dj(a, b, c) {
			return a.k[(b << 3) + ((c & 14) >> 1)]
		}
		function rm(d, a, b, c) {
			d.emit('gameNecroLog', a, b, c)
		}
		function xm(a) {
			a.emit('gamePerksChange', a.perks)
		}
		function fM(a) {
			a.f.a = j2(Afb, PCb, 1, 0, 5, 1);
			hE(a.a)
		}
		
		function getSmallBombSkin(a) {
			getSpriteByName.call(this, 'bomb32x32');
			this.a = a;
		}
		
		function $ib(a) {
			$s.call(this);
			Ag(this, (dib(),
				a))
		}
		function bnb(a) {
			this.a = gm();
			this.b = [];
			this.c = a.b
		}
		function OP(a, b) {
			if (a.gb)
				throw dhb(new ymb);
			a.s = b
		}
		function PP(a, b) {
			if (a.gb)
				throw dhb(new ymb);
			a.t = b
		}
		function tT(a, b) {
			if (a.gb)
				throw dhb(new ymb);
			a.e = b
		}
		function jY(a, b) {
			if (a.gb)
				throw dhb(new ymb);
			a.i = b
		}
		function kY(a, b) {
			if (a.gb)
				throw dhb(new ymb);
			a.j = b
		}
		function zY(a, b) {
			if (a.gb)
				throw dhb(new ymb);
			a.d = b
		}
		function BY(a, b) {
			if (a.gb)
				throw dhb(new ymb);
			a.f = b
		}
		function dY(a) {
			if (a.Y)
				return a.k - a.Y._;
			return a.k
		}
		function vC(a) {
			if ((a.k & 2) != 0)
				return 16;
			return a.n
		}
		function ixb(a, b) {
			$Bb(b, a.a.length);
			return a.a[b]
		}
		function to(a, b) {
			vo(a, !a.T);
			b.a.stopPropagation()
		}
		function rl(b, a) {
			b.del(a);
			b.playersModified = true
		}
		function gpb(a, b) {
			return b.e >> 8 == a.b && b.f >> 8 == a.c
		}
		function Qob(a, b, c) {
			return a.a[(b >> 3) + a.p * (c >> 3)]
		}
		function IG(a, b, c) {
			return a.a[(b << 3) + ((c & 14) >> 1)]
		}
		function h2(a, b, c, d, e, f) {
			return i2(a, b, c, d, e, 0, f)
		}
		function CN(a, b, c) {
			fqb(a.fb, b);
			hqb(a.fb, c);
			a.hb |= 2
		}
		function sw(a, b) {
			if (b == a.pb)
				return;
			a.g = true;
			a.pb = b
		}
		function uC(a, b) {
			if (jvb(a.A, b))
				return;
			a.g |= 1;
			a.A = b
		}
		function EN(a, b) {
			if (a.gb)
				throw dhb(new ymb);
			a.ib = b
		}
		function HN(a, b) {
			if (a.gb)
				throw dhb(new ymb);
			a.kb = b
		}
		function hv(a, b) {
			a.B = (2 + b) % 8;
			a.A = (2 + Jqb(b)) % 8 / 2 | 0
		}
		function bZ(a, b, c) {
			a.k = b.k;
			FN(a, c);
			a.c = b.c;
			a.d = b.d
		}
		function Ew(a) {
			vw(a);
			!!a.pb && Dw(a, a.r.b.b, a.r.b.d)
		}
		function WD(a) {
			if (!a.e) {
				a.e = true;
				!!a.f && a.f.ce(a)
			}
		}
		function iB(a) {
			if (a.d == 2)
				return a.c - a.e;
			return a.c
		}
		function mh(a) {
			if (a.skin)
				return a.skin;
			return null
		}
		function mhb(a) {
			if (jhb(a)) {
				return a | 0
			}
			return L2(a)
		}
		function Iqb(a, b) {
			Gqb();
			return a == 0 ? b : Aqb[a >> 1][b]
		}
		function Asb(a, b, c, d, e) {
			return b + (d - b) * (e - a) / (c - a)
		}
		function $sb(a, b, c, d) {
			a.removeEventListener(b, c, d)
		}
		function fxb(a, b, c) {
			bCb(b, a.a.length);
			KBb(a.a, b, c)
		}
		function w$(a, b) {
			!a && (a = []);
			a[a.length] = b;
			return a
		}
		function Nzb(a, b) {
			return !(a.a.get(b) === undefined)
		}
		function Tb(a) {
			return !!a.rb.R.a && (a.rb.R.a.k & 4) != 0
		}
		function Ub(a) {
			return !!a.rb.R.a && (a.rb.R.a.k & 2) != 0
		}
		function ZR(a) {
			return uz(a.B) && !mM(a.G, a.B) ? a.B : 0
		}
		function l2(a) {
			return Array.isArray(a) && a.og === Ahb
		}
		function Y2(a) {
			return !Array.isArray(a) && a.og === Ahb
		}
		function Pd(a) {
			a.r = true;
			(getConfigParam(uDb, true) || a.d) && _d(a)
		}
		function nh(a) {
			if (a.frames)
				return true;
			return false
		}
		function mg(a) {
			a.e = null;
			a.d = null;
			a.i = null;
			a.c = false
		}
		function FV(a) {
			EV();
			this.a = a._c(null);
			this.b = yk(a)
		}
		function Lmb(a, b) {
			Jmb();
			this.a = b;
			this.f = a;
			this.g = 0
		}
		function Po(a, b) {
			if (a.a != b) {
				a.a = b;
				Co(a);
				a.e.u = true
			}
		}
		function Dw(a, b, c) {
			if (a.a != b || c != b) {
				a.g = true;
				a.a = b
			}
		}
		function fl(b, a) {
			b.lag != a && (b.changed = true);
			b.lag = a
		}
		function el(b, a) {
			b.fps != a && (b.changed = true);
			b.fps = a
		}
		function $y(a, b) {
			return (b - ((a.f / 2 | 0) + a.a)) / a.s + a.c
		}
		function _y(a, b) {
			return (b - ((a.e / 2 | 0) + a.b)) / a.s + a.d
		}
		function Zz(a) {
			return llb(Rob(a.d, a.e >> 8, a.f >> 8), a)
		}
		function Ln(a, b, c) {
			return {
				alive: a,
				tileX: b,
				tileY: c
			}
		}
		function C2(a, b) {
			return r2(a.l & b.l, a.m & b.m, a.h & b.h)
		}
		function N2(a, b) {
			return r2(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h)
		}
		function dc(a, b, c) {
			gxb(a.R, new OL(a.rb.W.Fb(),b,c))
		}
		function _M(a, b) {
			a.d = b.ad(null);
			a.f = wk(b);
			a.b = wk(b)
		}
		function PL(a, b) {
			LL();
			OL.call(this, a, 9, -1);
			this.a = b
		}
		function jqb(a, b, c, d) {
			upb.call(this, a, b, c);
			this.c = d
		}
		function ljb(a) {
			this.a = a;
			this.b = Z1(a);
			this.c = this.b
		}
		function YA(a) {
			LA(this);
			this.g = a;
			NA(this);
			this.Wd()
		}
		function zC(a) {
			jC();
			var b;
			b = new xC;
			nC(b, a);
			return b
		}
		function Nqb(a) {
			Gqb();
			if (a < 8)
				return a;
			return 16 - a & 7
		}
		function nhb(a) {
			if (jhb(a)) {
				return '' + a
			}
			return M2(a)
		}
		function Chb(a) {
			if (a.b) {
				return a.b
			}
			return MAb(),
				DAb
		}
		function Ltb(c, a, b) {
			return c.getAttribLocation(a, b)
		}
		function hvb(a, b) {
			return eCb((_Bb(a),
				a), (_Bb(b),
				b))
		}
		function qf(a) {
			return pvb(a.rb.Q.j.i, 'tutor') && !!a.n
		}
		function FC(a) {
			if (a.j != (a.j | 2)) {
				a.j = a.j | 2;
				XD(a.i.a)
			}
		}
		function XR(a) {
			if (!!a.d && !a.cb)
				return a.i;
			return a.M
		}
		function ST(a) {
			if (a.V.r)
				return a.o[a.V.r.f];
			return 0
		}
		function TT(a) {
			if (a.V.t)
				return a.o[a.V.t.f];
			return 0
		}
		function UT(a) {
			if (a.V.A)
				return a.o[a.V.A.f];
			return 0
		}
		function $I(a, b) {
			var c;
			c = b.o;
			return SD(a.a, c >= 0 ? c : 0)
		}
		function Hxb(a, b, c) {
			var d;
			for (d = 0; d < b; ++d) {
				a[d] = c
			}
		}
		function Nh(a, b, c, d, e) {
			setFillStyle(a.f, a.e);
			ctxFillRect(a.f, b, c, d, e)
		}
		function vtb(e, a, b, c, d) {
			e.quadraticCurveTo(a, b, c, d)
		}
		function Uub() {
			Uub = xhb;
			Tub = j2(ufb, PCb, 120, 256, 0, 1)
		}
		function Zjb(a) {
			this.b = a;
			this.a = j2(cdb, PCb, 29, 4, 0, 1)
		}
		function FBb(a) {
			this.c = a;
			this.e = true;
			this.a = new oxb
		}
		function $E() {
			OE.call(this);
			WE(this);
			this.v = 'player'
		}
		function f0() {
			f0 = xhb;
			c0 = new i0;
			e0 = new j0;
			d0 = new k0
		}
		function KI() {
			KI = xhb;
			JI = (DCb(),
				CCb((iub(_7),
					_7.j)))
		}
		function Mjb(a) {
			Kjb();
			try {
				a._b()
			} finally {
				qzb(Jjb, a)
			}
		}
		function awb(a, b) {
			return a3(b) ? dwb(a, b) : !!zzb(a.a, b)
		}
		function pvb(a, b) {
			return jvb(a.substr(0, b.length), b)
		}
		function Mtb(c, a, b) {
			return c.getUniformLocation(a, b)
		}
		function c_(b, a) {
			return b[a] == null ? null : String(b[a])
		}
		function mib(a) {
			return Math.floor(Math.random() * a) | 0
		}
		function qpb(a) {
			return (a.f >> 5 << 1) - ((a.f & 31) == 0 ? 1 : 0)
		}
		function ppb(a) {
			return (a.e >> 5 << 1) - ((a.e & 31) == 0 ? 1 : 0)
		}
		function usb(a, b) {
			a[b >> 3] = (a[b >> 3] | 1 << (b & 7)) << 24 >> 24
		}
		function drb(a, b) {
			a.f = b.e;
			a.g = b.f;
			a.c = b.d;
			a.d = b.Uf()
		}
		function Lz(a, b) {
			a.f -= b;
			a.g += b;
			a.i -= b;
			a.j += b;
			return a
		}
		function Fz(a, b) {
			var c;
			c = bsb(a.i, b, 1);
			return (c & 2) != 0
		}
		function Nl(b, a) {
			b.squadModified = true;
			return b.get(a)
		}
		function il(b, a) {
			b.time != a && (b.changed = true);
			b.time = a
		}
		function Ve(a) {
			this.f = [];
			this.e = new Ze(this);
			this.b = a
		}
		function Uq() {
			this.a = new Xq(this);
			this.d = new Zq(this)
		}
		function hZ(a, b) {
			$Y();
			cZ.call(this);
			this.a = a;
			this.b = b
		}
		function _o(a) {
			tc.call(this, a);
			this.a = [];
			this.b = false
		}
		function Whb(a) {
			Uhb.call(this, new Thb(null));
			this.a = a
		}
		function de(a) {
			a.g.c == (Jd(),
				Ed) ? Xg(a.g, Hd) : Xg(a.g, Ed)
		}
		function _b(a, b) {
			gxb(a.R, new oK(a.rb.W.Fb(),b,a.b,0))
		}
		function npb(a, b) {
			return opb(a, (Gqb(),
				Bqb[b]), Cqb[b])
		}
		function bsb(a, b, c) {
			return asb(a, b.d, b.e >> 5, b.f >> 5, c)
		}
		function cA(a) {
			return plb(Rob(a.d, a.e >> 8, a.f >> 8), a, 0)
		}
		function dA(a) {
			return plb(Rob(a.d, a.e >> 8, a.f >> 8), a, 1)
		}
		function Vub(a, b) {
			return fhb(a, b) < 0 ? -1 : fhb(a, b) > 0 ? 1 : 0
		}
		function pib(a) {
			rib();
			return qib(E1 ? E1 : (E1 = new z1), a)
		}
		function uU(a, b, c, d) {
			mU();
			return a != b ? b - a : ST(c) - ST(d)
		}
		function un(a, b, c) {
			!!R.G && dc(R.c, b ? c ? 13 : 12 : c ? 10 : 11, a)
		}
		function rG(a, b) {
			var c;
			c = cwb(a.q.c, b);
			return c ? c.u : -1
		}
		function ozb(a, b) {
			var c;
			c = ewb(a.a, b, a);
			return c == null
		}
		function IBb(a, b) {
			var c;
			c = a.slice(0, b);
			return n2(c, a)
		}
		function mub(a, b) {
			var c;
			c = new kub;
			c.f = a;
			c.d = b;
			return c
		}
		function nub(a, b, c) {
			var d;
			d = mub(a, b);
			Bub(c, d);
			return d
		}
		function $D(a, b) {
			a.c = true;
			Wn(a.d, b);
			Wl(a.b, b);
			return a
		}
		function _D(a, b) {
			this.d = [];
			this.b = [];
			this.f = a;
			this.g = b
		}
		function Ip(a, b) {
			this.b = a;
			Eo.call(this, a, a.I);
			this.a = b
		}
		function YM() {
			this.b = j2(Ffb, PCb, 2, 5, 6, 1);
			this.a = new sN
		}
		function trb() {
			mrb.call(this, (Gqb(),
				0));
			this.a = Jqb(0)
		}
		function h$(a) {
			$wnd.setTimeout(function() {
				throw a
			}, 0)
		}
		function _I(a, b) {
			var c;
			c = b.d.o;
			return SD(a.a, c >= 0 ? c : 0)
		}
		function gE(a, b) {
			var c;
			c = iE(a, b.a);
			c >= 0 && CC(a.d[c], b)
		}
		function dI(a, b) {
			oob(b, a.re().b);
			nob(b, a.g);
			nob(b, a.f)
		}
		function jlb(a, b) {
			if (!a.Y)
				return 0;
			return VU(glb(a), b)
		}
		function th(b, a) {
			if (b.gl != a)
				return null;
			return b.glTex
		}
		function FO(a) {
			if (Z2(a.O, 219))
				return a.O.a;
			return null
		}
		function cQ(a) {
			if (!!a.o && !!a.o.Y) {
				WL(a.o.G.b, a);
				a.p = 1
			}
		}
		function Zd(a) {
			!!a.G && !!a.c.I && gxb(a.c.R, new OK(a.c.I))
		}
		function ac(a, b, c) {
			gxb(a.R, new oK(a.rb.W.Fb(),b,a.b,c))
		}
		function Otb(g, a, b, c, d, e, f) {
			g.texImage2D(a, b, c, d, e, f)
		}
		function Csb(a, b, c, d, e) {
			return b + ((d - b) * (e - a) / (c - a) | 0)
		}
		function hA(a, b) {
			if (b <= 0)
				return null;
			return Gnb(a.cb, b)
		}
		function sl(b, a) {
			b.playersModified = true;
			return b.get(a)
		}
		function Wl(b, a) {
			while (b.length < a)
				b.push(0);
			b.length = a
		}
		function xvb(a, b) {
			a.a += String.fromCharCode(b);
			return a
		}
		function Lo(a, b) {
			this.n = a;
			Do.call(this, a, b, 20);
			Jo(this)
		}
		function fAb() {
			this.a = new pAb;
			this.c = new pAb;
			eAb(this)
		}
		function Aq(a) {
			tc.call(this, a);
			this.b = new nzb;
			this.a = 48
		}
		function qjb(a) {
			njb();
			pjb.call(this, (aib(),
				new Yhb(a)))
		}
		function rlb(a, b, c) {
			Okb();
			qlb.call(this, new hpb(b,c,a))
		}
		function Evb() {
			Evb = xhb;
			new Uhb(null);
			Dvb = new Uhb(null)
		}
		function LE(a, b) {
			b.ed(a.u & CEb, null);
			Ck(b, a.v);
			Ck(b, a.t)
		}
		function OM(a) {
			a.c = -1;
			a.e = -1;
			if (a.a) {
				gN(a.a.a);
				XM(a.a)
			}
		}
		function vqb(a) {
			a.j = null;
			a.c = null;
			a.b = null;
			a.a.length = 0
		}
		function fS(a) {
			GO(a);
			!!a.G && (a.G.d = null);
			!!a.H && wC(a.H)
		}
		function rg(a) {
			var b;
			for (b = 0; b < a.f; b++)
				mg(a.e[b]);
			a.f = 0
		}
		function bB(a) {
			var b;
			for (b = 0; b < a.f; b++)
				_A(a.e[b]);
			a.f = 0
		}
		function Opb(a, b) {
			var c;
			for (c = 0; c < a.f; c++)
				xqb(a.e[c], b)
		}
		function qub(a, b) {
			var c;
			c = mub('', a);
			c.i = b;
			c.e = 1;
			return c
		}
		function _Bb(a) {
			if (a == null) {
				throw dhb(new $ub)
			}
			return a
		}
		function Tz(a, b) {
			var c;
			c = new bnb(b);
			a.bb[b.b] = c;
			return c
		}
		function mzb(a, b) {
			return b3(a) === b3(b) || a != null && L(a, b)
		}
		function yAb(a, b) {
			return b3(a) === b3(b) || a != null && L(a, b)
		}
		function bwb(a, b) {
			return a3(b) ? cwb(a, b) : Xvb(zzb(a.a, b))
		}
		function YV(a, b) {
			return a.d.d.length > 0 && a.d.d[0].c == b.ib
		}
		function ewb(a, b, c) {
			return a3(b) ? fwb(a, b, c) : Azb(a.a, b, c)
		}
		function CBb(a, b, c, d) {
			b.lg() >= zBb(a).lg() && xBb(a, b, c, d)
		}
		function brb(a, b, c) {
			a.f += b * (Gqb(),
				Bqb[c]);
			a.g += b * Cqb[c]
		}
		function pqb(a, b, c, d, e, f) {
			a.j = b;
			a.k = c;
			a.n = e;
			a.o = d;
			a.p = f
		}
		function BBb(a, b, c) {
			b.lg() >= zBb(a).lg() && xBb(a, b, c, null)
		}
		function yzb(a, b) {
			var c;
			c = a.a.get(b);
			return c == null ? [] : c
		}
		function Wz(a, b) {
			if (!b)
				return a.U;
			return Rob(b.a, b.b, b.c)
		}
		function BN(a, b) {
			if (b == a.fb.c)
				return;
			a.hb |= 2;
			dqb(a.fb, b)
		}
		function _yb(a, b) {
			if (b[KHb] != a[KHb]) {
				throw dhb(new bzb)
			}
		}
		function oCb() {
			if (jCb == 256) {
				iCb = kCb;
				kCb = {};
				jCb = 0
			}
			++jCb
		}
		function xC() {
			jC();
			kC(this);
			this.A = this.i = VFb;
			this.q = 'default'
		}
		function GK(a, b, c) {
			EK();
			NJ.call(this, a);
			this.b = b;
			this.a = c
		}
		function yjb(a) {
			Ag(this, (dib(),
				a));
			this.a = new ljb(this.$)
		}
		function csb(a, b) {
			anb(b.T, new ksb(a));
			Ymb(b.T, new gsb(a))
		}
		function UN(a, b) {
			!!a.Y && NG(b);
			a.hb |= 128;
			Qn(a.X, b);
			b.te(a)
		}
		function ZI(a, b) {
			var c;
			c = b.jb.d.o;
			return SD(a.a, c >= 0 ? c : 0)
		}
		function ai(a) {
			Ctb(a.f, a.e);
			a.f.lineWidth = 2;
			a.f.stroke()
		}
		function gkb(a) {
			if (a.o != a.k.f) {
				a.o = a.k.f;
				a.d = 1
			}
			return a.d
		}
		function If(a, b) {
			if (b >= qDb)
				return a.j[b - qDb];
			return a.k[b]
		}
		function cvb(a, b, c) {
			this.a = VFb;
			this.d = a;
			this.b = b;
			this.c = c
		}
		function ftb(a, b, c, d) {
			this.b = a;
			this.c = b;
			this.a = c;
			this.d = d
		}
		function tj(a, b, c, d, e) {
			sk(a.u, a.b + 2, b, c, d, e);
			a.b += 24;
			rj(a)
		}
		function Mh(a, b, c, d) {
			Ch(a, 0, 0, b, c, 0);
			setFillStyle(a.f, d);
			a.f.fill()
		}
		function _p(a, b, c) {
			Dl(b, sl(a.e, c.c), (c.a & 1) != 0, (c.a & 2) != 0)
		}
		function Oz(a, b) {
			return a.f < b.g && b.f < a.g && a.i < b.j && b.i < a.j
		}
		function YE(a, b) {
			return a.p.length > 0 ? a.p[b % a.p.length] : 'default'
		}
		function bAb(a) {
			return a.b == 0 ? null : (ZBb(a.b != 0),
				a.a.a.c)
		}
		function qib(a, b) {
			return J1((!oib && (oib = new Cib),
				oib), a, b)
		}
		function tvb(a) {
			return String.fromCharCode.apply(null, a)
		}
		function job(a) {
			YA.call(this, 'String size = ' + a + ' bytes')
		}
		function ymb() {
			YA.call(this, "can't modify constant field")
		}
		function fkb(a, b, c) {
			this.a = a;
			this.d = b;
			this.c = null;
			this.b = c
		}
		function Gpb(a) {
			Fpb.call(this, a._c(null), a._c(null), xk(a))
		}
		function Wob(a, b, c) {
			return ilb(a.a[(b >> 3) + a.p * (c >> 3)], b, c)
		}
		function Hnb(a, b) {
			vnb(a, b);
			em(a.a, b.Ge());
			dm(a.b, b.Ge(), b)
		}
		function _ob(a) {
			var b;
			for (b = 0; b < 8; b++) {
				bpb(a, a, b, (b + 4) % 8)
			}
		}
		function Iob(a, b) {
			var c;
			a.b = b;
			for (c = 0; c < 20; c++)
				a.a[c] = null
		}
		function aqb(a, b) {
			a.d = b;
			a.e = 0;
			a.f = 0;
			a.c = 0;
			a.b = -1;
			a.a = false
		}
		function eAb(a) {
			a.a.a = a.c;
			a.c.b = a.a;
			a.a.b = a.c.a = null;
			a.b = 0
		}
		function NA(a) {
			if (a.n) {
				a.e !== SFb && a.Wd();
				a.j = null
			}
			return a
		}
		function Kqb(a) {
			Gqb();
			if ((a & 8) != 0)
				return a & 15;
			return 8 - a & 7
		}
		function hl(b, a) {
			b.slowMo != a && (b.changed = true);
			b.slowMo = a
		}
		function iJ(a, b, c) {
			var d;
			for (d = 1; d <= a.b; d++)
				c[d] = b.$c(null)
		}
		function XM(a) {
			var b;
			for (b = 0; b < a.a.e.length; b++) {
				mN(a.a, b)
			}
		}
		function VR(a) {
			a.ib == a.Y.W.Fb() && !a.G && (a.G = jz(a.V.f, a.ib))
		}
		function $Y() {
			$Y = xhb;
			VY();
			ZY = (DCb(),
				CCb((iub(Qab),
					Qab.j)))
		}
		function E$() {
			E$ = xhb;
			var a, b;
			b = !J$();
			a = new R$;
			D$ = b ? new K$ : a
		}
		function Kjb() {
			Kjb = xhb;
			Hjb = new Pjb;
			Ijb = new nzb;
			Jjb = new rzb
		}
		function Inb() {
			rnb();
			wnb.call(this);
			this.a = gm();
			this.b = gm()
		}
		function aJ(a) {
			U.call(this, a);
			this.a = new _D(this,(WB(),
				VB))
		}
		function iL(a, b, c) {
			gL();
			this.f = a;
			this.g = 0;
			this.b = b;
			this.a = c
		}
		function fpb(a, b) {
			if (a.b != b.b)
				return a.b - b.b;
			return a.c - b.c
		}
		function dwb(a, b) {
			return b == null ? !!zzb(a.a, null) : Nzb(a.b, b)
		}
		function Yn(a, b) {
			return Y2(a) ? a.yb(b) : (a.push(b),
				undefined)
		}
		function h0() {
			f0();
			return m2(f2(Lbb, 1), PCb, 89, 0, [c0, e0, d0])
		}
		function Oy() {
			My();
			return m2(f2(g6, 1), PCb, 134, 0, [Ly, Jy, Ky])
		}
		function CCb(a) {
			BCb();
			return !ACb && (ACb = new FCb),
				new ECb(a)
		}
		function Mqb(a, b) {
			Gqb();
			return (b + 8 - a) % 8 <= 4 ? (a + 1) % 8 : (a + 7) % 8
		}
		function Wq(a, b) {
			Nq();
			var c;
			c = bwb(Mq, a);
			if (!c)
				return;
			Sq(c, b)
		}
		function RA(a, b) {
			var c;
			c = jub(a.mg);
			return b == null ? c : c + ': ' + b
		}
		function hf(a, b) {
			var c;
			for (c = 0; c < a.a.length; c++)
				cf(a.a[c], b)
		}
		function Dm(c, a, b) {
			c.emit('viewportEventChangeMode', a, b)
		}
		function ZW(a, b) {
			if (!a.cb)
				return;
			b &= 7;
			a.N > a.b.n && OO(a, a.b.n)
		}
		function VL(a, b) {
			_D.call(this, a, b.M);
			$D(this, b.Q.k.b.length)
		}
		function ct() {
			$s.call(this);
			zg(this, $doc.createElement(kEb))
		}
		function XQ(a) {
			VQ();
			WQ.call(this);
			this.a = a;
			this.e = (a.q & 2) != 0
		}
		function kob(a, b) {
			a.d + b > a.b && (a.a = Axb(a.a, Xub(a.d + b, a.b * 2)))
		}
		function Spb(a) {
			var b;
			for (b = 0; b < a.f; b++) {
				a.e[b].d = null
			}
			a.f = 0
		}
		function cu(a) {
			var b;
			b = a.g;
			(a.pb.q & 16) != 0 && (b /= 1.5);
			return b
		}
		function ts(a) {
			a['background-color'] = iFb;
			a['border-radius'] = '6px';
			a['border'] = '1px solid black';
			a['color'] = lFb
		}
		function ws(a) {
			a['list-style'] = bEb;
			a[sFb] = '12px';
			a['padding'] = '0px'
		}
		function Axb(a, b) {
			YBb(b);
			return Cxb(a, j2(d3, BEb, 7, b, 15, 1), b)
		}
		function Bxb(a, b) {
			YBb(b);
			return Cxb(a, j2(h3, XCb, 7, b, 15, 1), b)
		}
		function Txb(a) {
			Qxb();
			return Z2(a, 328) ? new Vyb(a) : new oyb(a)
		}
		function e2() {
			c2();
			return m2(f2(wcb, 1), PCb, 136, 0, [b2, a2, _1])
		}
		function Ld() {
			Jd();
			return m2(f2(r3, 1), PCb, 92, 0, [Gd, Fd, Hd, Ed])
		}
		function Fhb() {
			Dhb(this, new Shb(true));
			Ehb(this, (MAb(),
				DAb))
		}
		function Ezb(a) {
			this.e = a;
			this.b = this.e.a.entries();
			this.a = []
		}
		function hz(a) {
			if (!a.d) {
				a.d = new wM(a.rb,0);
				kM(a.d)
			}
			return a.d
		}
		function of(a) {
			if (!!a.n && !!a.n.a)
				return UM(a.n.a);
			return null
		}
		function rh() {
			var a = new Sprite;
			a.texture = new Texture;
			return a
		}
		function cm(c) {
			var a = [];
			for (var b in c.arr)
				a.push(b);
			return a
		}
		
		function toInt(val) {
			return Math.max(Math.min(val, 2147483647), -2147483648) | 0;
		}
		
		function XE(a, b) {
			return a.j.length > 0 ? a.j[b % a.j.length] : 'nyan'
		}
		function Zsb(a, b) {
			Y2(a) ? a.Pb(b) : (a.handleEvent(b),
				undefined)
		}
		function kjb(a, b) {
			_$(a.a, b);
			if (a.c != a.b) {
				a.c = a.b;
				$1(a.a, a.b)
			}
		}
		function kM(a) {
			a.t = a.j.O.a.d[0];
			UL(a.s);
			a.c = a.e = PE(a.j.Q.b, 0)
		}
		function Pkb(a) {
			a.i = new wnb;
			a.f = new wnb;
			new rob(a.g ? 4096 : xEb)
		}
		function p0() {
			p0 = xhb;
			o0 = new s0;
			m0 = new t0;
			n0 = new u0;
			l0 = new v0
		}
		function A0() {
			A0 = xhb;
			z0 = new D0;
			y0 = new E0;
			w0 = new F0;
			x0 = new G0
		}
		function L0() {
			L0 = xhb;
			H0 = new O0;
			I0 = new P0;
			J0 = new Q0;
			K0 = new R0
		}
		function Hhb() {
			Dhb(this, new Shb(false));
			Ehb(this, (MAb(),
				DAb))
		}
		function wBb(a, b) {
			this.a = a;
			this.d = b;
			this.c = (Evb(),
				ihb(NBb()))
		}
		function gob(a) {
			this.c = a.ad(null);
			this.a = Hkb(a);
			this.b = Hkb(a)
		}
		function cAb(a) {
			return a.b == 0 ? null : (ZBb(a.b != 0),
				dAb(a, a.a.a))
		}
		function Wtb(c, a, b) {
			return c.setInterval(ICb(a.Vf).bind(a), b)
		}
		function ivb(a, b) {
			return hvb(a.toLowerCase(), b.toLowerCase())
		}
		function uqb(a, b, c) {
			return a <= b && a <= c && c < b || a >= b && (c >= a || c < b)
		}
		function rqb(a, b, c, d, e, f) {
			pqb(a, b, c << 5, d << 5, c + e << 5, d + f << 5)
		}
		function Lkb(a, b) {
			var c;
			oob(a, (c = b.a,
				b.d != null ? b.d : '' + b.e,
				c))
		}
		function tmb(a, b) {
			var c;
			for (c = 0; c < a.a.length; c++)
				a.a[c].wd(b)
		}
		function umb(a, b) {
			var c;
			for (c = 0; c < a.a.length; c++)
				a.a[c].xd(b)
		}
		function gc(a, b) {
			var c;
			c = jA(a.rb, b);
			!!c && Kb(a, c.ib) && bq(a.j, 0)
		}
		function _P(a, b) {
			a.n == -2 && (a.n = a.ib);
			aQ(a);
			a.V = b;
			WN(a, b);
			XN(a)
		}
		function ZA(a, b) {
			LA(this);
			this.f = b;
			this.g = a;
			NA(this);
			this.Wd()
		}
		function jf(a) {
			tc.call(this, a);
			this.a = [];
			this.c = new pN(this.a)
		}
		function sR() {
			rR();
			_N.call(this);
			this.t = new iqb;
			this.k = new Ppb
		}
		function yhb(a) {
			function b() {}
			;b.prototype = a || {};
			return new b
		}
		function ci(a) {
			if (!a.a) {
				a.a = new Texture;
				vh(a.a, a.b)
			}
			return a.a
		}
		function Frb(a, b) {
			Tsb(b.a < 0);
			b.a = a.a.length;
			Qn(a.a, b);
			return a
		}
		function pwb(a, b) {
			if (Z2(b, 118)) {
				return Svb(a.a, b)
			}
			return false
		}
		function Yib(a, b) {
			var c;
			c = Zs(a, b);
			c && _ib((dib(),
				b.$));
			return c
		}
		function tub(a, b) {
			var c = a.a = a.a || [];
			return c[b] || (c[b] = a.Wf(b))
		}
		function Uvb(a, b) {
			return b === a ? '(this Map)' : b == null ? wFb : zhb(b)
		}
		function cwb(a, b) {
			return b == null ? Xvb(zzb(a.a, null)) : Ozb(a.b, b)
		}
		function jtb(e, a, b, c, d) {
			return e.createLinearGradient(a, b, c, d)
		}
		function r0() {
			p0();
			return m2(f2(Qbb, 1), PCb, 70, 0, [o0, m0, n0, l0])
		}
		function C0() {
			A0();
			return m2(f2(Vbb, 1), PCb, 71, 0, [z0, y0, w0, x0])
		}
		function N0() {
			L0();
			return m2(f2($bb, 1), PCb, 72, 0, [H0, I0, J0, K0])
		}
		function it(a) {
			irb(a.lb, 0);
			jrb(a.lb, 12);
			hrb(a.lb, 0);
			frb(a.lb, 0)
		}
		function ig(a) {
			var b;
			for (b = 0; b < a.f; b++)
				eg(a.e[b]);
			Zl(a.a);
			a.f = 0
		}
		function dQ(a) {
			if (!!a.o && !!a.o.Y && a.p == 1) {
				$L(a.o.G.b, a);
				a.p = 2
			}
		}
		function Mz(a, b, c) {
			a.f = b - 14;
			a.i = c - 14;
			a.g = b + 14;
			a.j = c + 14;
			return a
		}
		function Nz(a, b, c) {
			a.f = b - 12;
			a.i = c - 12;
			a.g = b + 12;
			a.j = c + 12;
			return a
		}
		function _pb(a, b) {
			a.e = b.e;
			a.f = b.f;
			a.d = b.d;
			a.c = b.Uf();
			a.b = b.Tf()
		}
		function Nhb(a) {
			a.a = sBb(uBb(), '');
			a.a.e = false;
			Phb(a.a);
			Ohb(a.a)
		}

		function _ib(a) {
			a.style['left'] = '';
			a.style['top'] = '';
			a.style['position'] = '';
		}

		function ss(a) {
			a['font-size'] = '16px';
			a['font-weight'] = 'bold';
			a['color'] = 'rgb(255,204,0)';
		}

		function Ql(b) {
			var a = b.mySquadId;
			b.mySquadId = null;
			b.onLeave(a)
		}
		function wk(a) {
			var b;
			b = a._c(null);
			(b & AEb) != 0 && (b -= FDb);
			return b
		}
		function xk(a) {
			var b;
			b = a.ad(null);
			(b & 128) != 0 && (b -= 256);
			return b
		}
		function zf(a) {
			if (a.j) {
				a.b = false;
				Fs(a.k);
				a.i = a.rb._ + 6;
				a.j = false
			}
		}
		function Iv(a) {
			if (a.s == -1) {
				a.s = a.kb._;
				a.o = a.o | wG(a.kb.Q, a.u) == 0
			}
		}
		function CE(a, b, c) {
			if ((a.g & 256) != 0)
				return b;
			return Vob(b.d, b, c)
		}
		function fwb(a, b, c) {
			return b == null ? Azb(a.a, null, c) : Pzb(a.b, b, c)
		}
		function opb(a, b, c) {
			return Xob(a.d, (a.e >> 5) + b, (a.f >> 5) + c, false)
		}
		function Ez(a, b) {
			return wG(a.b, llb(Rob(b.d, b.e >> 8, b.f >> 8), b)) == 4
		}
		function xl(b, a) {
			return a % 2 ? b.idleAnimCountSide : b.idleAnimCount
		}
		function gib(a) {
			dib();
			return a.__gwt_resolve ? a.__gwt_resolve() : a
		}
		function Vmb(a) {
			var b;
			b = a.re().a;
			if (b)
				return b.Qd(a);
			return null
		}
		function vF(a, b) {
			var c;
			c = b - a.b.e;
			return c < a.a.length ? a.a[c] : null
		}
		function zO(a, b, c) {
			var d;
			d = uO(a, b, c);
			(d & 1) != 0 ? wO(a, b, c, d) : a.We()
		}
		function Xs(a, b, c) {
			Kg(b);
			Tjb(a.a, b);
			dib();
			a_(c, gib(b.$));
			Mg(b, a)
		}
		function cCb(a, b) {
			if (a > b || a < 0) {
				throw dhb(new Cvb(VHb + a + WHb + b))
			}
		}
		function Ssb(a) {
			if (!a) {
				throw dhb(new Hub("Unit can't be null"))
			}
		}
		function Ppb() {
			this.e = [];
			this.b = new Tpb;
			this.c = [];
			this.d = new iqb
		}
		function Wf(a, b) {
			U.call(this, a);
			this.a = new pnb;
			this.c = [];
			this.d = b
		}
		function ys(a) {
			tc.call(this, a);
			this.b = new oxb;
			this.c = -1;
			this.d = -1
		}
		function Wt(a) {
			Et();
			Nt.call(this, a);
			this.d = new iqb;
			this.g = new $f
		}
		function lS() {
			PR();
			XO.call(this);
			this.r = new Rz(7);
			this.o = new iqb
		}
		function co(b, a) {
			b.state.update(a / GDb);
			b.state.apply(b.skeleton)
		}
		function oo(a) {
			var b;
			b = a.A[a.A.length - 1];
			a.s = b.q;
			a.t = b.s;
			a.v = true
		}
		function $u(a) {
			var b;
			b = a.pb.B == 20 ? 0.75 : 1;
			if (a.I)
				return -b;
			return b
		}
		function MW(a, b, c) {
			var d;
			d = a.a[b].pf(c);
			EN(d, c.ib);
			d.o = c;
			return d
		}
		function Bo(a, b) {
			a.qd() && a.rd();
			b.a.stopPropagation();
			Mc(a.r.q.q)
		}
		function Sq(a, b) {
			if (b == null)
				return;
			a.p = b;
			if (!a.b)
				return;
			rC(a.f, b)
		}
		function lM(a) {
			if (a.d)
				return (a.d.D & 4) != 0;
			return (a.o.q.k & 128) != 0
		}
		function IQ(a) {
			if (a.N <= 99)
				return;
			if (a.b != 0) {
				a.a = 0;
				a.b = 0;
				a.hb |= 32
			}
		}
		function ky(a) {
			return a.a >= 0 ? a.a : Ksb((Rb(),
				Qb), a.d.frames.length)
		}
		function ehb(a, b) {
			return ghb(C2(jhb(a) ? khb(a) : a, jhb(b) ? khb(b) : b))
		}
		function ohb(a, b) {
			return ghb(N2(jhb(a) ? khb(a) : a, jhb(b) ? khb(b) : b))
		}
		function l_() {
			j_();
			return m2(f2(obb, 1), PCb, 60, 0, [h_, f_, e_, g_, i_])
		}
		function ex() {
			ex = xhb;
			bx = m2(f2(h3, 1), XCb, 7, 15, [0, 16, 32, 48, 64, 80])
		}
		function ntb(j, a, b, c, d, e, f, g, h, i) {
			j.drawImage(a, b, c, d, e, f, g, h, i)
		}
		function ptb(j, a, b, c, d, e, f, g, h, i) {
			j.drawImage(a, b, c, d, e, f, g, h, i)
		}
		function _h(a, b, c, d, e, f) {
			Ch(a, b, c, d, e, 0.5);
			Ctb(a.f, f);
			a.f.stroke()
		}
		function eqb(a, b, c, d) {
			a.e = (b << 5) + 16;
			a.f = (c << 5) + 16;
			a.d = d;
			a.a = false
		}
		function erb(a, b) {
			a.f = b.f;
			a.g = b.g;
			a.c = b.c;
			a.d = b.d;
			a.e = b.e;
			a.b = b.b
		}
		function wxb(a) {
			ZBb(a.a < a.c.a.length);
			a.b = a.a++;
			return a.c.a[a.b]
		}
		function Ohb(a) {
			var b, c;
			b = new Fhb;
			gxb(a.a, b);
			c = new Hhb;
			gxb(a.a, c)
		}
		function tsb(a, b, c, d) {
			var e;
			e = c ? b > 31 ? -1 : (1 << b) - 1 : vk(a, b);
			psb(e, d)
		}
		function oub(a, b, c, d) {
			var e;
			e = mub(a, b);
			Bub(c, e);
			e.e = d ? 8 : 0;
			return e
		}
		function WN(a, b) {
			a.cb = true;
			a.Ge() == 0 && HN(a, b.W.Eb());
			a.W = b._;
			a.Y = b
		}
		function RT(a, b) {
			a.o == null && (a.o = j2(h3, XCb, 7, b.Q.k.a.length, 15, 1))
		}
		function Vib(a, b) {
			for (var c in a) {
				a.hasOwnProperty(c) && b(c, a[c])
			}
		}
		function Gib(a) {
			var b = a.__listener;
			return !_2(b) && Z2(b, 34) ? b : null
		}
		function Tib(a) {
			var b;
			b = a.currentTarget || $wnd;
			b[tHb] = a.type;
			Sib(a)
		}
		function Re(a) {
			(!a.c ? 3 : a.c.readyState) <= 1 && (a.c.close(),
				undefined)
		}
		function Ll(a) {
			a.squadModified && a.onUpdate();
			a.squadModified = false
		}
		function Bl(c, a, b) {
			return c.animMirrorLeft && (c.diagonal ? b >= 5 : a >= 3)
		}
		function Dl(d, a, b, c) {
			a.hasExtraSize = b;
			a.extraSizeActive = c;
			d.add(a)
		}
		function RJ(a, b, c) {
			PJ();
			NJ.call(this, a);
			this.b = b;
			this.a = c;
			Jqb(a.M)
		}
		function Kd(a, b, c, d, e) {
			zd.call(this, a, b);
			this.b = c;
			this.c = d;
			this.a = e
		}
		function Jwb(a, b) {
			this.a = a;
			Gwb.call(this, a);
			bCb(b, a.kd());
			this.b = b
		}
		function Eo(a, b) {
			this.r = a;
			this.t = b.frameWidth;
			this.p = b.frameHeight
		}
		function Ujb(a, b) {
			if (b < 0 || b >= a.c) {
				throw dhb(new aub)
			}
			return a.a[b]
		}
		function TA(b) {
			if (!('stack'in b)) {
				try {
					throw b
				} catch (a) {}
			}
			return b
		}
		function fA(a, b) {
			if (b <= 0)
				return null;
			return Qnb(a.db, b, (UB(),
				IB).b)
		}
		function gA(a, b) {
			if (b <= 0)
				return null;
			return Qnb(a.db, b, (UB(),
				BB).b)
		}
		function AR(a, b) {
			if (a.v == b)
				return;
			a.v = b;
			a.A = b.u;
			OO(a, a.v.i);
			a.hb |= 1
		}
		function ab(a, b, c) {
			dwb(a.f, b) || fwb(a.f, b, new oxb);
			gxb(cwb(a.f, b), c)
		}
		function zzb(a, b) {
			var c;
			return xzb(b, yzb(a, b == null ? 0 : (c = P(b),
			c | 0)))
		}
		function lhb(a) {
			var b;
			if (jhb(a)) {
				b = a;
				return b == -0. ? 0 : b
			}
			return K2(a)
		}
		function MN(a) {
			var b;
			b = a - 16 - (a & -32);
			b >= 1 && --b;
			b <= -1 && ++b;
			return a - b
		}
		function Us(a) {
			var b;
			b = new bkb(a.a);
			while (b.b < b.c.c) {
				_jb(b);
				akb(b)
			}
		}
		function Zu(a) {
			var b;
			b = a.pb.B == 20 ? 0.75 : 1;
			return Bl(a.J, a.A, a.B) ? -b : b
		}
		function IO(a) {
			a.hb |= 12;
			a.cb && !!a.O && a.O.vf();
			a.O = rZ(0, a);
			return a.O
		}
		function In(a) {
			return $wnd.requestAnimationFrame(ICb(a.Qb).bind(a))
		}
		function tpb(a) {
			return 'plane=' + a.d.o + ' x=' + (a.e >> 5) + ' y=' + (a.f >> 5)
		}
		function aib() {
			aib = xhb;
			new RegExp('%5B','g');
			new RegExp('%5D','g')
		}
		function Fjb() {
			throw 'A PotentialElement cannot be resolved twice.'
		}
		function Njb() {
			Kjb();
			try {
				fjb(Jjb, Hjb)
			} finally {
				hwb(Jjb.a);
				hwb(Ijb)
			}
		}
		function xBb(a, b, c, d) {
			var e;
			e = new wBb(b,c);
			e.e = d;
			vBb(e, a.c);
			yBb(a, e)
		}
		function bi(a, b, c, d, e) {
			Ctb(a.f, a.e);
			a.f.lineWidth = 2;
			Dtb(a.f, b, c, d, e)
		}
		function $lb(a, b, c) {
			awb(a.a, b) || ewb(a.a, b, new oxb);
			gxb(bwb(a.a, b), c)
		}
		function Mp(a, b) {
			this.b = a;
			Eo.call(this, a, a.I);
			this.a = cwb(a.C.Q.k.c, b)
		}
		function Op(a, b) {
			this.b = a;
			Eo.call(this, a, a.G);
			this.a = cwb(a.C.Q.k.c, b)
		}
		function OL(a, b, c) {
			LL();
			ML(this);
			this.f = a;
			this.g = 0;
			this.c = b;
			this.b = c
		}
		function Th(a, b, c, d) {
			if (!!b && !!b.b)
				return false;
			Dh(a, c, d);
			return true
		}
		function ZP(a) {
			if ((a.q & 4) != 0)
				return 3;
			if ((a.q & 8) != 0)
				return 2;
			return 1
		}
		function LY(a) {
			if (a.c)
				return a.V.Q.d.a;
			if (a.a)
				return ZP(a.a);
			return 1
		}
		function YR(a) {
			if (a.d)
				return Yob(a.o.d, a.o.e, a.o.f, false);
			return a.jb
		}
		function vy(a) {
			if (a.d.I) {
				!!a.f && (a.e = false);
				gxb(a.d.R, new ZJ(a.d.I))
			}
		}
		function oqb(a, b) {
			return b.d == a.j && uqb(a.k, a.n, b.e) && uqb(a.o, a.p, b.f)
		}
		function tnb(a) {
			var b;
			gN(a);
			for (b = 0; b < a.e.length; b++) {
				a.Rf(a.e[b], b)
			}
		}
		function Hb(a) {
			var b;
			b = Fb(a);
			return b == a.H.b && !!b.d && !!b.d.Y && b.d.N > 0
		}
		function tg(a) {
			var b;
			b = sg(a);
			if (b != a.a) {
				a.a = b;
				return true
			}
			return false
		}
		function ql(a) {
			a.playersModified && a.onChange();
			a.playersModified = false
		}
		function gl(b, a) {
			b.playersCount != a && (b.changed = true);
			b.playersCount = a
		}
		function dl(c, a, b) {
			(c.cx != a || c.cy != b) && (c.changed = true);
			c.cx = a;
			c.cy = b
		}
		function PO(a, b) {
			if (a.O == b)
				return;
			a.hb |= 12;
			a.cb && !!a.O && a.O.vf();
			a.O = b
		}
		function JO(a, b) {
			a.cb && !!a.O && a.O.vf();
			a.hb |= 12;
			a.O = rZ(b, a);
			return a.O
		}
		function vub(a) {
			if (a._f()) {
				return null
			}
			var b = a.i;
			var c = uhb[b];
			return c
		}
		function YBb(a) {
			if (a < 0) {
				throw dhb(new Zub('Negative array size: ' + a))
			}
		}
		function HBb(a, b, c, d) {
			Array.prototype.splice.apply(a, [b, c].concat(d))
		}
		function wm(e, a, b, c, d) {
			e.perks.all.push({
				id: b,
				name: a,
				unit: c,
				flags: d
			})
		}
		function ff(a, b, c, d, e, f, g) {
			Qn(a.a, new df(a.rb._,g ? a.e : a.d,b,c,d,e,f,1))
		}
		function ef(a, b, c, d, e, f, g) {
			Qn(a.a, new df(a.rb._,ih(a.b, b),c,d,e,0,f,g))
		}
		function AS(a, b, c, d) {
			a.i = 0;
			a.e = 0;
			a.g = 1;
			_pb(a.a[0], b);
			a.b[0] = c;
			a.d[0] = d
		}
		function fK(a, b, c, d) {
			cK();
			this.f = a;
			this.g = 0;
			this.b = c;
			this.a = b;
			this.e = d
		}
		function rob(a) {
			this.a = j2(d3, BEb, 7, a, 15, 1);
			this.b = a;
			this.d = 0;
			this.c = 0
		}
		function Mrb() {
			this.a = j2(h3, XCb, 7, 8, 15, 1);
			this.c = j2(d3, BEb, 7, 1, 15, 1)
		}
		function f$(a) {
			a && o$((m$(),
				l$));
			--YZ;
			if (a) {
				if (_Z != -1) {
					j$(_Z);
					_Z = -1
				}
			}
		}
		function vM(a) {
			if (!!a.d && !!a.d.Y && a.d.N > 0 && a.d.O.f != 4) {
				kE(a.a);
				_L(a.b)
			}
		}
		function Lob(a, b, c) {
			a.k = b;
			a.q = b.c;
			a.j = b.a;
			a.p = b.c / 8 | 0;
			a.i = b.a / 8 | 0;
			a.f = c
		}
		function KE(a, b) {
			a.u = wk(b);
			a.v = zk(b);
			a.t = zk(b);
			a.t.length == 0 && (a.t = a.v)
		}
		function vnb(a, b) {
			Ssb(b);
			Rsb(a.Pf(b) == a, xHb);
			oN(a, a.Of(b));
			a.Sf(b, null)
		}
		function vwb(a) {
			var b;
			_yb(a.d, a);
			ZBb(a.b);
			b = Pn(a.a);
			a.b = uwb(a);
			return b
		}
		function iA(a, b) {
			var c;
			c = bm(a.S, b);
			if (!c) {
				c = new xC;
				dm(a.S, b, c)
			}
			return c
		}
		function GT(a) {
			var b;
			b = a.N;
			if (b == 70)
				return 2;
			if (b >= 20)
				return 1;
			return 0
		}
		function qm(c, a) {
			var b = c.emit('gameEventSendChat', a);
			return b != null ? b : a
		}
		function wl(a) {
			return Math.max(a.animCountSide, a.animCount) / a.animSpeed
		}
		function Ejb(a) {
			return function() {
				this.__gwt_resolve = Fjb;
				return a.Vb()
			}
		}
		function Tzb(a) {
			this.d = a;
			this.b = this.d.a.entries();
			this.a = this.b.next()
		}
		function Sr(a, b) {
			this.d = a;
			Lo.call(this, a, 72);
			this.b = b;
			this.f = 15;
			this.k = 1
		}
		function zCb(a, b, c) {
			yCb();
			this.a = (MAb(),
				FAb);
			this.b = a;
			this.c = b;
			this.a = c
		}
		function _f(a) {
			tc.call(this, a);
			this.c = [];
			this.a = [];
			this.b = new pN(this.a)
		}
		function Yjb(a, b) {
			var c;
			c = Vjb(a, b);
			if (c == -1) {
				throw dhb(new xAb)
			}
			Xjb(a, c)
		}
		function aAb(a, b, c, d) {
			var e;
			e = new pAb;
			e.c = b;
			e.b = c;
			e.a = d;
			d.b = c.a = e;
			++a.b
		}
		function akb(a) {
			if (!a.a) {
				throw dhb(new Iub)
			}
			a.c.b.Ad(a.a);
			--a.b;
			a.a = null
		}
		function gB(a, b) {
			if (a.d == 4)
				return a.c >= (b.e.d * b.Q.d.i / GDb | 0);
			return true
		}
		function XZ() {
			if (Date.now) {
				return Date.now()
			}
			return (new Date).getTime()
		}
		function d$(b) {
			a$();
			return function() {
				return e$(b, this, arguments);
			}
		}
		function Dv(a, b) {
			a.kb = b;
			a.r = b._;
			a.c = true;
			a.j = j2(w5, PCb, 80, 8, 0, 1);
			return a
		}
		function sg(a) {
			var b, c;
			b = 0;
			for (c = 0; c < a.f; c++) {
				b = 31 * b + ng(a.e[c])
			}
			return b
		}
		function Xg(a, b) {
			var c;
			c = a.c;
			a.c = b;
			a.hc(a.c.c, a.c.a);
			c != b && Dm(Iy, c.b, b.b)
		}
		function vw(a) {
			if (!a.pb)
				return;
			a.r = a.nb.H.c;
			a.g = a.g | a.r.p != 0;
			tw(a);
			a.Td()
		}
		function Cs(a) {
			(dib(),
				a.$).style['left'] = -(a.$.clientWidth | 0) - 20 + (_0(),
				'px')
		}
		function Fs(a) {
			(dib(),
				a.$).style['left'] = -(a.$.clientWidth | 0) - 20 + (_0(),
				'px')
		}
		function Ng(a, b) {
			a.X == -1 ? iib((dib(),
				a.$), b | (a.$.__eventBits || 0)) : (a.X |= b)
		}
		function rC(a, b) {
			b == null && (b = 'default');
			if (jvb(a.q, b))
				return;
			a.g |= 2;
			a.q = b;
			a.p = b
		}
		function Qmb(a, b) {
			ZG(b, a.a.length);
			Qn(a.a, b);
			Tsb(b.ue().re() == b);
			return a
		}
		function Smb(a, b, c) {
			var d, e;
			e = c.ad(null);
			d = a.a[e].ue();
			d.se(b, c);
			return d
		}
		function p2(a) {
			var b, c, d;
			b = a & dHb;
			c = a >> 22 & dHb;
			d = a < 0 ? eHb : 0;
			return r2(b, c, d)
		}
		function RD(a, b) {
			var c, d;
			for (c = 0; c < a.d.length; c++) {
				d = a.d[c];
				!!d && b.yd(d)
			}
		}
		function vk(a, b) {
			var c, d;
			d = 0;
			c = 0;
			while (b > c) {
				d |= a.ad(null) << c;
				c += 8
			}
			return d
		}
		function hwb(a) {
			var b;
			a.a = new Czb(a);
			a.b = new Rzb(a);
			b = a[KHb] | 0;
			a[KHb] = b + 1
		}
		function og() {
			this.f = new iqb;
			this.a = new lrb;
			this.g = new iqb;
			this.b = new lrb
		}
		function BAb(a, b) {
			this.b = ', ';
			this.d = a;
			this.e = b;
			this.c = this.d + ('' + this.e)
		}
		function di() {
			this.b = $doc.createElement('canvas');
			this.f = this.b.getContext('2d')
		}
		function IF() {
			this.c = m2(f2(h3, 1), XCb, 7, 15, [1, 2, 4, 1]);
			Tsb(this.c.length == 4)
		}
		function tc(a) {
			U.call(this, a.rb);
			this.qb = a;
			$lb(this.rb.X, b4, new $n(this))
		}
		function _B(a, b, c) {
			WB();
			$B.call(this, a.f.be(), b);
			this.i = a;
			XB(this, true, c)
		}
		function RE(a, b) {
			var c;
			c = Ak(b, a.b.length);
			return c != a.b.length ? a.b[c] : null
		}
		function PE(a, b) {
			if (b < a.e || b >= a.e + a.b.length)
				return null;
			return a.b[b - a.e]
		}
		function jM(a) {
			var b;
			for (b = 0; b < 4; b++)
				if (SD(a.a, b))
					return true;
			return false
		}
		function kxb(a, b) {
			var c;
			c = ($Bb(b, a.a.length),
				a.a[b]);
			MBb(a.a, b, 1);
			return c
		}
		function AAb(a, b) {
			!a.a ? (a.a = new Bvb(a.d)) : zvb(a.a, a.b);
			yvb(a.a, b);
			return a
		}
		function gwb(a, b) {
			return a3(b) ? b == null ? Bzb(a.a, null) : Qzb(a.b, b) : Bzb(a.a, b)
		}
		function az(a, b) {
			ez(a, a.c, a.d, $wnd.Math.min(a.t, $wnd.Math.max(a.u, a.s + b)))
		}
		function bz(a, b) {
			ez(a, a.c, a.d, $wnd.Math.min(a.t, $wnd.Math.max(a.u, a.s * b)))
		}
		function bM(a) {
			if (!!a.d && a.d.B == 1)
				return false;
			return !lM(a) || (a.c.f & 32) != 0
		}
		function NBb() {
			if (Date.now) {
				return Date.now()
			}
			return (new Date).getTime()
		}
		function olb(a, b, c, d) {
			if (!a.Y)
				return null;
			b &= 7;
			c &= 7;
			return a.a[b + c * 8 + d * 64]
		}
		function Sh(a, b, c, d) {
			if (!!b && !!b.element)
				return false;
			Dh(a, c, d);
			return true
		}
		function sy(a, b, c) {
			this.e = new iqb;
			this.b = new iqb;
			this.d = a;
			this.i = b;
			this.f = c
		}
		function mrb(a) {
			this.c = null;
			this.f = 0;
			this.g = 0;
			this.e = 32;
			this.b = 32;
			this.d = a
		}
		function kqb(a) {
			upb.call(this, a.d, a.e, a.f);
			this.b = a.b;
			this.c = a.c;
			this.a = a.a
		}
		function Qo(a, b, c, d, e) {
			this.e = a;
			Lo.call(this, a, b);
			this.d = c;
			this.c = d;
			this.b = e
		}
		function j2(a, b, c, d, e, f) {
			var g;
			g = k2(e, d);
			e != 10 && m2(f2(a, f), b, c, e, g);
			return g
		}
		function Onb(a, b) {
			var c;
			c = bm(a.b, b.ib);
			if (!c) {
				c = [];
				dm(a.b, b.ib, c)
			}
			c.push(b)
		}
		function Vjb(a, b) {
			var c;
			for (c = 0; c < a.c; ++c) {
				if (a.a[c] == b) {
					return c
				}
			}
			return -1
		}
		function Ak(a, b) {
			var c;
			Qsb(b >= 0);
			c = 0;
			while (b > 0) {
				c |= a.ad(null);
				b >>= 8
			}
			return c
		}
		function ed(a) {
			var b, c;
			if (!a.T) {
				b = Fb(a.qb);
				c = b ? b.t : a.rb.O.a.d[0];
				dd(a, c.e)
			}
		}
		function Sb(a) {
			var b, c;
			c = (b = a.q.C.c, b ? b.o : -1);
			return c >= 0 ? SD(a.rb.O.a, c) : null
		}
		function Pf(a, b, c) {
			var d;
			d = nnb(a.a);
			d.k = b;
			d.i = c;
			d.d = 2;
			d.o = -1;
			d.n = a.d;
			return d
		}
		function Bh(a, b, c, d, e) {
			a.f.beginPath();
			drawRect(a.f, b, c, d, e);
			a.f.save();
			a.f.clip()
		}
		function om(i, a, b, c, d, e, f, g, h) {
			return i.emit('gameEventChat', a, b, c, d, e, f, g, h)
		}
		function jz(a, b) {
			if (b == a.a.S)
				return a.b;
			if (b == a.a.T.k)
				return a.c;
			return hz(a)
		}
		function bCb(a, b) {
			if (a < 0 || a > b) {
				throw dhb(new bub('Index: ' + a + ', Size: ' + b))
			}
		}
		function eo(a) {
			if (!a.V) {
				throw dhb(new Jub('initWidget() is not called yet'))
			}
		}
		function T() {
			DCb();
			BCb();
			!ACb && (ACb = new FCb);
			new ECb('Web Application')
		}
		function wc() {
			wc = xhb;
			vc = (DCb(),
				BCb(),
			!ACb && (ACb = new FCb),
				new ECb('Renderer'))
		}
		function j_() {
			j_ = xhb;
			h_ = new m_;
			f_ = new n_;
			e_ = new o_;
			g_ = new p_;
			i_ = new q_
		}
		function Clb() {
			Clb = xhb;
			Blb = new Xmb;
			zlb = new Tmb;
			Alb = new Umb;
			ylb = (Okb(),
				Nkb)
		}
		function OBb() {
			OBb = xhb;
			new UBb;
			new QBb('ISO-LATIN-1');
			new QBb('ISO-8859-1')
		}
		function c2() {
			c2 = xhb;
			b2 = new d2('RTL',0);
			a2 = new d2('LTR',1);
			_1 = new d2(rDb,2)
		}
		function b1() {
			_0();
			return m2(f2(icb, 1), PCb, 45, 0, [$0, Y0, T0, U0, Z0, X0, V0, S0, W0])
		}
		function fm(a, b) {
			return Y2(a) ? a.hd(b) : (a.size++,
				a.arr[a.gen] = b,
				a.gen++,
				true)
		}
		function jV(a, b) {
			var c;
			if (a.Y) {
				c = b + a.Y._;
				if (c != a.c) {
					a.hb |= 4;
					a.c = c
				}
			} else
				a.c = b
		}
		function Jkb(a, b) {
			var c;
			Bk(a, b.length);
			for (c = 0; c < b.length; c++)
				nob(a, b[c] & CEb)
		}
		function Cxb(a, b, c) {
			var d, e;
			e = a.length;
			d = c < e ? c : e;
			JBb(a, 0, b, 0, d, true);
			return b
		}
		function Uob(a, b, c, d, e) {
			var f;
			Npb(a.d, b, e);
			f = Mpb(a.d, b, c, d);
			Hpb(a.d);
			return f
		}
		function msb(a, b, c) {
			var d;
			for (d = 0; d < c; d++)
				if (a[d] == b)
					return true;
			return false
		}
		function td(a, b, c) {
			var d;
			d = jE(a.qb.H.c.a);
			(d ? d.b : 0) > 0 ? Yo(a.qb.a, b, c) : undefined
		}
		function yR(a) {
			var b;
			b = ZB(ZI(a.V.O, a), a.v.r > 0 ? a.v.r : a.K, a.v.f);
			return b <= 4 ? b : 0
		}
		function FT(a) {
			var b;
			b = a.N;
			if (b < 20)
				return 0;
			if (b == 70)
				return 1;
			return (b - 20) / 50
		}
		function TD(a, b) {
			if (b <= a.d.length)
				return false;
			Wn(a.d, b);
			Wl(a.b, b);
			return true
		}
		function hV(a) {
			if (a.Y) {
				if (a.c < a.Y._)
					return -1;
				return a.c - a.Y._
			} else
				return a.c
		}
		function YN(a) {
			a.gb = false;
			if (a.eb) {
				a.Ne();
				vnb(a.eb.Kf(), a)
			}
			aA(a.Y, a);
			a.Y = null
		}
		function uj(a, b) {
			b != a.a && vj(a, b);
			if ($wnd.Math.abs(a.r - a.q) > pDb) {
				rj(a);
				a.r = a.q
			}
		}
		function n2(a, b) {
			g2(b) != 10 && m2(N(b), b.ng, b.__elementTypeId$, g2(b), a);
			return a
		}
		function fib(b) {
			dib();
			try {
				return !!b && !!b.__gwt_resolve
			} catch (a) {
				return false
			}
		}
		function vf(a) {
			if (!a.e || !a.a)
				return false;
			Iy.emit(QDb, '');
			a.e = false;
			return true
		}
		function Mob(a, b, c) {
			b && Lob(a, new Gpb(c), yk(c));
			a.f >= 0 && (a.g = yk(c));
			return true
		}
		function sb(a, b, c) {
			a.P = b;
			Uz(a.rb);
			qob(c);
			Ckb(a, c, a.R);
			a.R.a = j2(Afb, PCb, 1, 0, 5, 1)
		}
		function Ds(a, b, c) {
			zjb(a.d, b);
			zjb(a.a, c);
			(dib(),
				a.$).style['left'] = (_0(),
				'-4.0px')
		}
		function pjb(a) {
			ojb(this, new xjb(this,a));
			(dib(),
				this.$).className = 'gwt-Image'
		}
		function jt(a) {
			this.pb = a;
			this.mb = new trb;
			this.lb = new srb;
			!!a && prb(this.mb, a.fb)
		}
		function Hy(a) {
			sBb(uBb(), PFb);
			this.b = new fAb;
			this.e = new fAb;
			this.c = a;
			this.d = 100
		}
		function LI(a) {
			KI();
			U.call(this, a);
			this.a = new oxb;
			this.c = new oxb;
			this.b = new oxb
		}
		function Skb() {
			Okb();
			_N.call(this);
			this.i = (rnb(),
				rnb(),
				qnb);
			this.f = (null,
				qnb)
		}
		function oK(a, b, c, d) {
			lK();
			mK(this);
			this.f = a;
			this.g = d;
			this.c = b;
			this.b = c << 24 >> 24
		}
		function Mpb(a, b, c, d) {
			if (a.f == 0 || b.d != a.e[0].j)
				return false;
			return Lpb(a, b, c, d)
		}
		function Lxb(a, b, c, d) {
			var e;
			d = (Xyb(),
				!d ? Wyb : d);
			e = a.slice(b, c);
			Mxb(e, a, b, c, -b, d)
		}
		function dtb(a, b) {
			var c;
			c = Ysb(b);
			!!c && (a.removeEventListener(IDb, c),
				undefined)
		}
		function Sib(a) {
			var b;
			b = Uib(a);
			if (!b) {
				return
			}
			eib(a, b.nodeType != 1 ? null : b, Gib(b))
		}
		function Lhb() {
			var a;
			Nhb(Jhb);
			if (!PZ) {
				a = GBb((iub(Bcb),
					Bcb.j));
				QZ(new Mhb(a))
			}
		}
		function Hpb(a) {
			var b;
			for (b = 0; b < a.f; b++)
				vqb(a.e[b]);
			Spb(a.b);
			a.c.length = 0;
			a.f = 0
		}
		function Yb(a) {
			var b, c;
			c = a.V;
			for (b = 0; b < c.length; b++)
				c[b].Cd();
			emb(a.rb.X, new Zn)
		}
		function lN(a, b) {
			var c, d;
			for (d = 0; d < a.e.length; d++) {
				c = a.e[d];
				c != null && lA(b.a, c)
			}
		}
		function Jk(a, b) {
			this.c = a;
			this.i = b;
			this.e = this.c.byteLength;
			this.g = true;
			this.f = 0
		}
		function vh(b, a) {
			b.element = a;
			b.width = a.width;
			b.height = a.height;
			b.glModified = true
		}
		function $Bb(a, b) {
			if (a < 0 || a >= b) {
				throw dhb(new bub('Index: ' + a + ', Size: ' + b))
			}
		}
		function aCb(a) {
			if (!a) {
				throw dhb(new _ub('Cannot suppress a null exception.'))
			}
		}
		function sib() {
			var a;
			if (nib) {
				a = new vib;
				!!oib && K1(oib, a);
				return null
			}
			return null
		}
		function jxb(a, b, c) {
			for (; c < a.a.length; ++c) {
				if (yAb(b, a.a[c])) {
					return c
				}
			}
			return -1
		}
		function Wzb(a) {
			if (a.a.d != a.c) {
				return Ozb(a.a, a.b.value[0])
			}
			return a.b.value[1]
		}
		function Kl(c, a, b) {
			c.squadModified = true;
			c.add({
				id: a,
				ownerId: b
			});
			return c.get(a)
		}
		function _C(a, b, c) {
			EC(a, b, c);
			c == 255 && (a.e = b._c(null));
			(c & 4) != 0 && (a.f = b._c(null))
		}
		function iD(a, b, c) {
			_C(a, b, c);
			c == 255 && (a.c = b._c(null));
			(c & 8) != 0 && (a.d = b.$c(null))
		}
		function vW(a, b, c, d, e) {
			TS(a, b, c, d, e);
			if ((e & 8) != 0) {
				a.e = d.ad(null);
				a.g = d.ad(null)
			}
		}
		function nf(a) {
			return pvb(a.rb.Q.j.i, 'tutor') && !!a.n && !!a.n && !!a.n.d ? a.n.d.a : null
		}
		function mf(a) {
			return pvb(a.rb.Q.j.i, 'tutor') && !!a.n && !!a.n && !!a.n.d ? a.n.d.b : null
		}
		function g2(a) {
			return a.__elementTypeCategory$ == null ? 10 : a.__elementTypeCategory$
		}
		function Fub(a, b) {
			return a3(a) ? hvb(a, b) : $2(a) ? Eub((_Bb(a),
				a), (_Bb(b),
				b)) : a.Ob(b)
		}
		function Fc(a, b) {
			bqb(a.T, b.d);
			fqb(a.T, 0);
			hqb(a.T, 0);
			ez(a._, b.e, b.f, a._.s);
			Py(a._)
		}
		function Nd(a) {
			qob(a.H);
			Lkb(a.H, (Mlb(),
				Elb));
			mob(a.H, 2014120418);
			Ue(a.D, -1, a.H)
		}
		function Fy(a) {
			if (a.b.b >= 20) {
				while (a.b.b > 0) {
					dCb(cAb(a.e));
					Od(a.c, cAb(a.b), true)
				}
			}
		}
		function _jb(a) {
			if (a.b >= a.c.c) {
				throw dhb(new xAb)
			}
			a.a = a.c.a[a.b];
			++a.b;
			return a.a
		}
		function WBb(a) {
			if (!a) {
				throw dhb(new Hub('Exception can not suppress itself.'))
			}
		}
		function nM(a) {
			if ((a.g & 256) != 0 && a.d.B != 22)
				return true;
			return a.d.B == 1 && a.d.v.i == 1
		}
		function Jqb(a) {
			Gqb();
			var b;
			b = a & 7;
			if ((b & 1) == 0)
				return b;
			return (a & 8) != 0 ? b - 1 : b + 1 & 7
		}
		function Lrb(a, b, c) {
			var d;
			d = yk(c);
			Jrb(a, d);
			a.d = d;
			return ssb(c, a.d, b, new Qrb(a,c))
		}
		function Mkb(a, b) {
			var c;
			Bk(a, b.length);
			for (c = 0; c < b.length; c++)
				a.ed(b[c] & CEb, null)
		}
		function UL(a) {
			var b, c;
			b = a.f.be();
			for (c = 0; c < a.d.length; c++)
				YD(a, c, GM(b.Q.k.b[c]))
		}
		function Vf(a, b) {
			var c;
			while (b <= Date.now()) {
				if (!(c = Rf(a),
				!!c && Uf(a, c),
					!!c))
					break
			}
		}
		function psb(a, b) {
			var c, d;
			d = a;
			c = 0;
			while (d != 0) {
				(d & 1) != 0 && ZT(b.a, b.b, c);
				d >>>= 1;
				++c
			}
		}
		function osb(a, b, c) {
			var d, e;
			e = a & 255;
			d = b;
			while (e != 0) {
				(e & 1) != 0 && c.nf(d);
				e >>>= 1;
				++d
			}
		}
		function Wu(a, b, c, d, e) {
			var f, g;
			f = Ju / tu % 1 * su;
			while (f < d) {
				g = c + f * e;
				a.uc(Hu, b, g);
				f += su
			}
		}
		function Bv(a, b) {
			if (!a.f)
				return;
			vh(a.q.texture, a.f.buffer);
			b.uc(a.q, a.lb.f, a.lb.g)
		}
		function BE(a, b) {
			return Iz(a.i.j.g, b) && (a.a < 0 || llb(Rob(b.d, b.e >> 8, b.f >> 8), b) != a.a)
		}
		function Uf(a, b) {
			b.c = 0;
			hkb(b);
			ikb(b);
			ij(a.d, b, b.d == 1 && b.b.length > b.c);
			b.c = 0;
			b.d = 0
		}
		function lob(a, b) {
			a.d + 1 > a.b && (a.a = Axb(a.a, Xub(a.d + 1, a.b * 2)));
			a.a[a.d++] = b;
			a.c = a.d
		}
		function fJ(a, b) {
			if (b.ad(null) != 0) {
				a.a = a.rb._;
				iJ(a, b, a.d);
				iJ(a, b, a.e);
				iJ(a, b, a.c)
			}
		}
		function ER(a) {
			var b;
			a.v = PE(a.V.Q.b, a.A);
			b = (a.v.f & 2) != 0 ? a.v.u : a.ib;
			HR(a, iA(a.V, b))
		}
		function hE(a) {
			var b, c;
			for (c = 0; c < 8; c++) {
				b = a.d[c];
				!!b && (b.k.a = j2(Afb, PCb, 1, 0, 5, 1))
			}
		}
		function jE(a) {
			var b;
			for (b = 0; b < 8; b++)
				if (Z2(a.d[b], 154)) {
					return a.d[b]
				}
			return null
		}
		function oU(a) {
			if (a.V.F) {
				if (a.b)
					return gM(a.b, a.V.F);
				return XT(a, a.V.F.f)
			}
			return 0
		}
		function K2(a) {
			if (D2(a, (S2(),
				R2)) < 0) {
				return -A2(F2(a))
			}
			return a.l + a.m * gHb + a.h * hHb
		}
		function gR(a, b, c) {
			var d, e;
			d = (b >> 5) - a.n;
			e = (c >> 5) - a.p;
			return (d | e) >= 0 && d < a.v && e < a.u
		}
		function Vq(a) {
			Nq();
			var b;
			b = bwb(Mq, a);
			if (b) {
				!!b.b && dtb(b.b, b.d);
				b.b = null;
				gwb(Mq, a)
			}
		}
		function av(a, b) {
			var c;
			if (!!b && !!b.db) {
				c = b.db;
				c != a.T && (a.S = c.a);
				a.T = c
			} else
				a.T = null
		}
		function WL(a, b) {
			!a.a && (a.a = []);
			++a.d;
			(b.q & 4) != 0 && ++a.f;
			(b.q & 1) != 0 && ++a.c;
			Qn(a.a, b)
		}
		function FN(a, b) {
			if (a.gb)
				throw dhb(new ymb);
			!!b && eqb(a.fb, b.e >> 5, b.f >> 5, b.d);
			a.jb = b
		}
		function Nsb(a, b) {
			Msb(a, mhb(ehb(ghb(H2(jhb(b) ? khb(b) : b, 24)), GHb)), mhb(ehb(b, GHb)))
		}
		function n$(a) {
			var b, c;
			if (a.b) {
				c = null;
				do {
					b = a.b;
					a.b = null;
					c = x$(b, c)
				} while (a.b);a.b = c
			}
		}
		function o$(a) {
			var b, c;
			if (a.c) {
				c = null;
				do {
					b = a.c;
					a.c = null;
					c = x$(b, c)
				} while (a.c);a.c = c
			}
		}
		function Bib() {
			var a;
			a = $wnd.location.search;
			if (!zib || !jvb(yib, a)) {
				zib = Aib(a);
				yib = a
			}
		}
		function Xqb(a, b, c) {
			return $wnd.Math.abs(a.f - b) * 2 <= a.e && $wnd.Math.abs(a.g - c) * 2 <= a.b
		}
		function rvb(a, b) {
			return b == (sAb(),
				sAb(),
				rAb) ? a.toLocaleUpperCase() : a.toUpperCase()
		}
		function snb(a, b) {
			Ssb(b);
			Rsb(!a.Pf(b), xHb);
			Qn(a.e, b);
			a.Sf(b, a);
			a.Rf(b, a.e.length - 1)
		}
		function no(a, b) {
			a.s != 0 && (a.P = Xub(a.s + a.N, a.P));
			a.t = a.Q + a.O + b;
			a.Q = Xub(a.t, a.Q);
			a.s = 0
		}
		function ke(a) {
			a.b ? Utb($wnd, a.c) : Vtb($wnd, a.c);
			a.b = true;
			a.c = Wtb($wnd, new Xtb(a), 200)
		}
		function Jz(a) {
			U.call(this, a);
			this.g = [];
			this.a = [];
			this.e = new Pz;
			this.c = a;
			this.b = a.Q
		}
		function fg() {
			this.e = [];
			this.b = [];
			this.a = [];
			this.c = [];
			this.g = [];
			this.f = [];
			this.d = []
		}
		function yC() {
			kC(this);
			this.t = 'admintoken';
			this.i = 'ADMIN';
			this.A = 'ADMIN';
			this.q = ''
		}
		function Mo(a, b, c, d, e) {
			this.n = a;
			Do.call(this, a, b, 20 + c + e);
			Jo(this);
			this.i = c;
			this.g = d
		}
		function hr(a) {
			this.j = m2(f2(V9, 1), hFb, 93, 0, []);
			this.o = j2(V9, hFb, 93, 15, 0, 1);
			this.a = a
		}
		function Plb() {
			Mlb();
			return m2(f2(wdb, 1), PCb, 65, 0, [Glb, Jlb, Dlb, Flb, Hlb, Klb, Elb, Ilb])
		}
		function Npb(a, b, c) {
			c *= 32;
			Hpb(a);
			Kpb(a, b.d, null, null, b.e - c, b.f - c, b.e + c, b.f + c, true, 4)
		}
		function Qp(a, b, c) {
			this.b = a;
			Mo.call(this, a, 69, 5, 5, 5);
			this.j = c;
			this.a = cwb(a.C.Q.k.c, b)
		}
		function $b(a, b) {
			if (a.S <= 0 || a.T.p)
				return;
			sM(a.H.b, a.I);
			uM(a.H.b, a.G);
			!!a.o && zq(a.o, b)
		}
		function VO(a, b) {
			var c;
			c = a.fb.c;
			return WO(a, a.fb.e + (Gqb(),
			Bqb[c] * b), a.fb.f + Cqb[c] * b)
		}
		function yg(a, b) {
			var c = a.parentNode;
			if (!c) {
				return
			}
			c.insertBefore(b, a);
			c.removeChild(a)
		}
		function Dz(a) {
			var b;
			if (a.g.length == 0)
				return new Pz;
			b = a.g.pop();
			b.a = 0;
			b.e = 0;
			return b
		}
		function _i(a, b) {
			var c;
			c = a.i.q.b[b];
			if (c.q == 2)
				return -1;
			if (c.r != -1)
				return c.r;
			return 0
		}
		function _lb(a, b) {
			var c, d;
			for (c = 0; c < a.b.a.length; c++) {
				d = ixb(a.b, c);
				Z2(d, 50) && d.Hb(b)
			}
		}
		function amb(a, b) {
			var c, d;
			for (c = 0; c < a.b.a.length; c++) {
				d = ixb(a.b, c);
				Z2(d, 50) && d.Ib(b)
			}
		}
		function SE(a, b) {
			var c;
			b.ed(a.b.length & CEb, null);
			for (c = 0; c < a.b.length; c++)
				a.b[c].pe(b)
		}
		function YD(a, b, c) {
			var d;
			d = a.d[b];
			if (d != c) {
				!!d && d.Zd(null);
				setObjectParam(a.d, b, c);
				a.b[b] = 1;
				WD(a)
			}
		}
		function dAb(a, b) {
			var c;
			c = b.c;
			b.a.b = b.b;
			b.b.a = b.a;
			b.a = b.b = null;
			b.c = null;
			--a.b;
			return c
		}
		function Kkb(a, b) {
			if (!b) {
				oob(a, 255)
			} else {
				oob(a, b.d.o & 255);
				nob(a, b.e >> 5);
				nob(a, b.f >> 5)
			}
		}
		function Y1(a) {
			if (null == a) {
				throw dhb(new _ub('encodedURLComponent cannot be null'))
			}
		}
		function NG(a) {
			if (a.re().b < 0)
				throw dhb(new YA('Builder is not registered: ' + zhb(a)))
		}
		function Ti() {
			Zg.call(this);
			Vg(this);
			this.b = new ei(this.e[0]);
			this.d = new ei(this.e[1])
		}
		function et() {
			ct.call(this);
			zg(this, $doc.createElement('ul'));
			ws((dib(),
				this.$).style)
		}
		function yl(a) {
			return Math.max(a.idleAnimCountSide, a.idleAnimCount) / a.idleAnimSpeed
		}
		function _2(a) {
			return a != null && (typeof a === 'object' || typeof a === 'function') && !(a.og === Ahb)
		}
		function SR(a) {
			return !(a.O.f != 0 || a.N <= 0) && !(a.I > 0 || a.e > a.Y._) && gM(a.G, a.V.p) > XL(a.G.b)
		}
		function Wc(a, b, c) {
			if (!a.L)
				return;
			it(a.L);
			uw(a.L, b);
			getConfigParam('showHUD', true) && Aw(a.L, a.G.gc())
		}
		function klb(a, b, c) {
			if (!a.Y)
				return 0;
			return WU(glb(a), b - ((a.g.b << 3) + 4), c - ((a.g.c << 3) + 4))
		}
		function Bub(a, b) {
			var c;
			if (!a) {
				return
			}
			b.i = a;
			var d = vub(b);
			if (!d) {
				uhb[a] = [b];
				return
			}
			d.mg = b
		}
		function PD(a, b) {
			var c;
			for (c = 0; c < a.d.length; c++)
				if (b.Sd(a.d[c]))
					return true;
			return false
		}
		function Nc(a, b) {
			var c;
			for (c = 0; c < a.H.length; c++)
				if (gpb(a.H[c], b))
					return true;
			return false
		}
		function Cz(a) {
			var b;
			for (b = 0; b < a.a.length; b++) {
				a.a[b].b = null;
				Qn(a.g, a.a[b])
			}
			a.a.length = 0
		}
		function qhb() {
			rhb();
			var a = phb;
			for (var b = 0; b < arguments.length; b++) {
				a.push(arguments[b])
			}
		}
		function S2() {
			S2 = xhb;
			O2 = r2(dHb, dHb, 524287);
			P2 = r2(0, 0, fHb);
			Q2 = p2(1);
			p2(2);
			R2 = p2(0)
		}
		function My() {
			My = xhb;
			Ly = new Ny('NONE',0);
			Jy = new Ny('BOLD',1);
			Ky = new Ny('ITALIC',2)
		}
		function thb(a, b) {
			typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][a] = b)
		}
		function aA(a, b) {
			var c;
			Hnb(a.cb, b);
			Snb(a.db, b);
			c = a.bb[b.re().b];
			!!c && $mb(c, b);
			umb(a.ab, b)
		}
		function Vy(a, b) {
			irb(b, (b.f - a.o) * a.s);
			jrb(b, (b.g - a.q) * a.s);
			hrb(b, b.e * a.s);
			frb(b, b.b * a.s)
		}
		function Py(a) {
			$wnd.Math.abs(a.s - a.t) < pDb ? Qy(a, a.t) : $wnd.Math.abs(a.s - a.u) < pDb && Qy(a, a.u)
		}
		function np(a) {
			var b;
			b = R;
			if (!b.G)
				return;
			a.e && (a.b.style.display = '',
				undefined);
			a.a.focus()
		}
		function p$(a) {
			var b;
			if (a.a) {
				b = a.a;
				a.a = null;
				!a.f && (a.f = []);
				x$(b, a.f)
			}
			!!a.f && (a.f = s$(a.f))
		}
		function SI(a, b) {
			var c;
			c = b.ad(null);
			(c & 1) != 0 && (a.d = b.$c(null));
			(c & 2) != 0 && (a.b = b.$c(null))
		}
		function WM(a, b, c) {
			var d;
			a.c = c.ad(null);
			for (d = 0; d < a.b.length; d++)
				a.b[d] = zk(c);
			jN(a.a, b, c)
		}
		function yK(a, b, c, d, e) {
			vK();
			NJ.call(this, a);
			wK(this);
			this.b = b;
			this.a = c;
			this.d = d;
			this.c = e
		}
		function Ih(a, b, c, d, e, f, g, h, i, j) {
			if (Sh(a, b, g, h))
				return;
			ptb(a.f, b.element, c, d, e, f, g, h, i, j)
		}
		function Hob(a, b, c) {
			if (b < a.b || b > a.b + 20 - 1)
				return;
			if (a.a[a.b % 20] != null)
				return;
			a.a[a.b % 20] = c
		}
		function iE(a, b) {
			var c, d;
			for (d = 7; d >= 0; d--) {
				c = a.d[d];
				if (!!c && c.n.b.u == b)
					return d
			}
			return -1
		}
		function Uib(a) {
			var b;
			b = a.currentTarget || $wnd;
			while (!!b && !Gib(b)) {
				b = b.parentNode
			}
			return b
		}
		function chb(a) {
			var b;
			if (Z2(a, 17)) {
				return a
			}
			b = a && a[TFb];
			if (!b) {
				b = new UZ(a);
				F$(b)
			}
			return b
		}
		function Qub(a) {
			var b, c;
			if (a == 0) {
				return 32
			} else {
				c = 0;
				for (b = 1; (b & a) == 0; b <<= 1) {
					++c
				}
				return c
			}
		}
		function lA(a, b) {
			var c;
			if (Z2(b, 93)) {
				c = b;
				!!c && (c.g & 1) != 0 && c.k < 3 && (a.a[a.a.length] = c,
					true)
			}
		}
		function pf(a) {
			var b;
			b = a.rb.W;
			return !b.I && !jM(b.H.b) && !!a.n && !!a.n.a && a.n.a.b[3].length > 0
		}
		function XN(a) {
			var b;
			Sz(a.Y, a);
			b = Vz(a.Y, a);
			if (b) {
				a.Ie(b);
				snb(a.eb.Kf(), a);
				a.Ue()
			}
			a.gb = true
		}
		function GS(a, b) {
			var c;
			c = a.i;
			while (c != a.e) {
				c = (c + 1) % a.c;
				a.b[c] = Hqb(b, a.b[c] & 15) | a.b[c] & -16
			}
		}
		function H$(a) {
			var b = /function(?:\s+([\w$]+))?\s*\(/;
			var c = b.exec(a);
			return c && c[1] || PGb
		}
		function xpb(a, b) {
			if (a.d != b.d)
				return a.d.o - b.d.o;
			if (a.e != b.e)
				return a.e - b.e;
			return a.f - b.f
		}
		function dM(a, b, c) {
			if (!c && !!a.d && a.d.B == 1 && (b.b & 1) != 0)
				return false;
			return !AM(SD(a.s, b.u))
		}
		function Uh(a, b, c, d, e) {
			if (!!b && nh(b) && c < b.frames.length)
				return false;
			Dh(a, d, e);
			return true
		}
		function kh(b, a) {
			if (b.childIdxByName.hasOwnProperty(a))
				return b.childIdxByName[a];
			return -1
		}
		function Ajb() {
			yjb.call(this, $doc.createElement(kEb));
			(dib(),
				this.$).className = 'gwt-Label'
		}
		function qlb(a) {
			Skb.call(this);
			this.d = j2(Beb, PCb, 112, 64, 0, 1);
			this.b = a.a;
			this.g = a;
			elb(this)
		}
		function VN(a, b, c) {
			a.cb = false;
			a.Ge() == 0 && HN(a, b.W.Eb());
			!!c && a.Ie(c);
			a.W = b._;
			a.Y = b;
			Sz(b, a)
		}
		function ad(a, b, c) {
			var d;
			d = new iqb;
			Ypb(d, b);
			c && Cc(a, d);
			Wpb(d, a.T);
			_pb(a.T, d);
			a.T.b = -1;
			Tc(a)
		}
		function JP(a) {
			var b;
			b = a.fb.d;
			xO(a);
			if (b != a.fb.d) {
				a.V.d.d && (a.q |= 2);
				MP(a, Yub(a.s, a.V.d.e))
			}
		}
		function rH(a) {
			var b, c;
			c = a.d;
			hGb != c ? (b = c + ' {' + hGb + '}' + ': ' + a.c) : (b = 'SYSTEM: ' + a.c);
			return b
		}
		function Gkb(a) {
			var b, c, d;
			d = yk(a);
			b = j2(h3, XCb, 7, d, 15, 1);
			for (c = 0; c < d; c++)
				b[c] = wk(a);
			return b
		}
		function U$(b) {
			var a = b.timeStamp;
			a == 0 && (a = Date.now());
			a >= 10000000000000 && (a = a / GDb);
			return a
		}
		function gg(a) {
			var b;
			if (a.f >= a.e.length) {
				b = a.Ub();
				Qn(a.e, b);
				++a.f;
				return b
			}
			return a.e[a.f++]
		}
		function Hk(a) {
			if (!a.g)
				throw dhb(new Iub);
			if (a.f + 1 > a.e)
				throw dhb(new iob);
			return a.i[a.f++]
		}
		function Yqb(a, b, c) {
			return $wnd.Math.abs(a.f - b) * 2 <= a.e + 64 && $wnd.Math.abs(a.g - c) * 2 <= a.b + 64
		}
		function $z(a, b) {
			return klb(Rob(a.d, a.e >> 8, a.f >> 8), (a.e >> 5) + (Gqb(),
				Bqb[b]), (a.f >> 5) + Cqb[b])
		}
		function rz(a, b, c) {
			var d, e;
			e = c.$c(null);
			a.b = [];
			for (d = 0; d < e; d++)
				Qn(a.b, Dkb(b, c));
			a.a = Ekb(b, c)
		}
		function Ekb(a, b) {
			var c;
			c = xk(b);
			if (c < 0)
				return null;
			return Wob(a.Z[c], b._c(null), b._c(null))
		}
		function Xsb(e, a, b, c) {
			var d = !b ? null : Ysb(b);
			e.addEventListener(a, d, c);
			return new ftb(e,a,d,c)
		}
		function cl(a, b, c, d, e, f, g) {
			var h = $wnd.effects.createEffect2(a);
			h.init(b, c, d, e, f, g);
			return h
		}
		function pl(d, a, b) {
			d.playersModified = true;
			var c = {
				id: a,
				nickname: b,
				status: 0
			};
			d.add(c);
			return c
		}
		function ph(c, a) {
			c.frames.length = a;
			for (var b = 0; b < a; b++) {
				c.frames[b] = {
					x: 0,
					y: 0,
					pattern: null
				}
			}
		}
		function jl() {
			return {
				cx: 0,
				cy: 0,
				playersCount: 0,
				fps: 0,
				lag: 0,
				slowMo: 0,
				time: 0,
				changed: false
			}
		}
		function Vm(a) {
			ae(R, (Jd(),
			Id == null && (Id = m2(f2(r3, 1), PCb, 92, 0, [Gd, Fd, Hd, Ed])),
				Jd(),
				Id)[a])
		}
		function _V() {
			VV();
			rO.call(this);
			this.d = new _D(this,(MV(),
				LV));
			this.c = new _D(this,(EV(),
				DV))
		}
		function ik() {
			Zg.call(this);
			new uk;
			Vg(this);
			this.b = new wj(this.e[0]);
			this.d = new ei(this.e[1])
		}
		function mu(a) {
			Et();
			Nt.call(this, a);
			$wnd.Math.random() < 0.5 && (this.c = -this.c);
			this.a = Ksb(Ct, 7)
		}
		function Zg() {
			this.g = new gz;
			this.c = (Jd(),
				Fd);
			Ag(this, (dib(),
				this.i = $doc.createElement(kEb)))
		}
		function xn(a, b) {
			return angular.element(document.body).injector().get('storage').getItem(a, b)
		}
		function ty(a, b) {
			var c;
			cQ(b);
			$N(b, a.rb._);
			c = Vmb((Clb(),
				b));
			c.Dd();
			c.Bd(a.rb);
			b.db = c;
			Qn(a.c, b)
		}
		function _u(a, b) {
			var c;
			c = b.c;
			c.length > 23 && (c = c.substr(0, 20) + '...');
			Kt(a, c, b.f + 100, (b.a & 6) >> 1)
		}
		function $ob(a) {
			var b, c;
			for (c = 0; c < 8; c += 2) {
				bpb(a, a, c, (c + 4) % 8 + 8)
			}
			for (b = 1; b < 8; b += 2)
				bpb(a, a, b, b)
		}
		function Bf(a) {
			var b;
			b = a.n.a;
			if (b.c == 1) {
				gxb(a.d.R, new iL(a.d.S,b.d,1))
			} else {
				a.b = !a.b;
				a.c = true
			}
		}
		function TS(a, b, c, d, e) {
			AN(a, c, d, e);
			if ((e & 4) != 0) {
				a.n = d.ad(null);
				a.o = d.ad(null);
				a.p = d.ad(null)
			}
		}
		function Bsb(a, b, c, d, e) {
			Tsb(a < c);
			if (e <= a)
				return b;
			if (e >= c)
				return d;
			return b + (d - b) * (e - a) / (c - a)
		}
		function Sob(a, b, c) {
			if (b < 0 || c < 0 || b >= a.k.c || c >= a.k.a)
				return null;
			return a.a[(b >> 3) + a.p * (c >> 3)]
		}

		function getConfigParam(paramName, defaultVal) {
			if ($wnd.config && $wnd.config.hasOwnProperty(paramName))
				return $wnd.config[paramName];
			return defaultVal;
		}

		function dm(c, a, b) {
			if (typeof c.arr[a] === 'undefined') {
				c.size++;
				c.gen <= a && (c.gen = a + 1)
			}
			c.arr[a] = b
		}
		function Nn(a) {
			if (a.type == 1)
				delete a.arr[a.indices[a.pos]];
			else {
				a.arr.splice(a.pos--, 1);
				a.sz--
			}
		}
		function gf(a) {
			a.d = sprites.get('smoke');
			a.e = sprites.get('smokeBlack');
			a.b = sprites.get('blast')
		}
		function Eg(a, b) {
			a.style.display = b ? '' : bEb;
			b ? a.removeAttribute(cEb) : a.setAttribute(cEb, 'true')
		}
		function Vz(a, b) {
			switch (b.Oe()) {
				case 0:
					return null;
				case 1:
					return a.U;
				default:
					return ypb(b.jb);
			}
		}
		function kS(a, b) {
			var c;
			if (a.I >= 5)
				return;
			if (a.O.f >= 3 || a.N <= 0)
				return;
			c = a.B;
			if (c == 1)
				return;
			DR(a, b)
		}
		function vj(a, b) {
			rj(a);
			if (a.a == b)
				return;
			a.a = b;
			++a.c;
			Qtb(a.p, a.o, 1 / b.width, 1 / b.height);
			wh(b, a.p)
		}
		function mlb(a, b, c, d) {
			if (!a.Y)
				return;
			ZU(glb(a), b - ((a.g.b << 3) + 4) + 5 + (c - ((a.g.c << 3) + 4) + 5) * 10, d)
		}
		function eib(a, b, c) {
			dib();
			var d;
			d = bib;
			bib = a;
			b == cib && Eib(a.type) == 8192 && (cib = null);
			c.$b(a);
			bib = d
		}
		function $mb(a, b) {
			var c;
			Tsb(b.re().b == a.c);
			em(a.a, b.Ge());
			for (c = 0; c < a.b.length; c++)
				a.b[c].xd(b)
		}
		function QE(a, b) {
			var c, d, e;
			d = wk(b);
			for (c = 0; c < d; c++) {
				e = a.d.qe();
				e.oe(b);
				Rn(a.b, e);
				fwb(a.c, e.v, e)
			}
		}
		function Dkb(a, b) {
			var c;
			c = xk(b);
			if (c < 0)
				return null;
			return new hpb(b._c(null),b._c(null),a.Z[c])
		}
		function tjb(a, b) {
			var c;
			c = c_((dib(),
				b.$), tHb);
			jvb(oHb, c) && (a.a = new vjb(a,b),
				t$((m$(),
					l$), a.a))
		}
		function hib(a, b) {
			var c, d;
			dib();
			Fib();
			c = Iib;
			d = c[b] || c['_default_'];
			a.addEventListener(b, d, false)
		}
		function Sn(c, a) {
			for (var b = 0; b < c.length; b++)
				if (c[b] == a) {
					c.splice(b, 1);
					return true
				}
			return false
		}
		function UM(a) {
			var b;
			for (b = 1; b < a.a.e.length; b++) {
				if (mN(a.a, b).d <= 0)
					return mN(a.a, b)
			}
			return null
		}
		function XV(a, b) {
			var c;
			for (c = 0; c < a.c.d.length; c++)
				if (SD(a.c, c).b >= b)
					return SD(a.c, c);
			return null
		}
		function Rh(a, b, c, d) {
			if (!!b && !!b.texture && !!b.texture.element)
				return false;
			Dh(a, c, d);
			return true
		}
		function RO(a, b) {
			if (!!a.R && !lxb(a.R, b)) {
				throw dhb(new Hub('No such entity in passenger list'))
			}
		}
		function DT(a, b) {
			!!b && (Z2(b, 107) ? b.Cd() : Z2(b, 147) ? _z(a.Y, new IJ) : Z2(b, 37) ? _z(a.Y, new GJ) : b.Cd())
		}
		function jg(a, b) {
			var c, d;
			d = bm(a.a, b.o);
			if (d)
				return a.e[d.a];
			dm(a.a, b.o, Sub(a.f));
			c = gg(a);
			return c
		}

		function getPulsationY(a) {
			var b;
			b = a.g;
			(a.pb.q & 32) != 0 && (b = a.e.b + a.e.c - b);
			(a.pb.q & 16) != 0 && (b /= 1.5);
			return b;
		}

		function Hkb(a) {
			var b, c, d;
			d = yk(a);
			b = j2(h3, XCb, 7, d, 15, 1);
			for (c = 0; c < d; c++)
				b[c] = a.$c(null);
			return b
		}
		function uBb() {
			var a;
			if (!qBb) {
				qBb = new tBb;
				a = new FBb('');
				DBb(a, (MAb(),
					IAb));
				rBb(qBb, a)
			}
			return qBb
		}
		function nU(a, b) {
			var c;
			UN(a, b);
			if (Z2(b, 94)) {
				b.te(a);
				!a.e && (a.e = new oxb);
				gxb(a.e, b);
				c = a.X;
				c.pop()
			}
		}
		function Zmb(a, b) {
			var c;
			Tsb(b.re().b == a.c);
			dm(a.a, b.Ge(), b);
			for (c = 0; c < a.b.length; c++)
				a.b[c].wd(b)
		}
		function Vob(a, b, c) {
			var d, e;
			d = b.e >> 5;
			e = b.f >> 5;
			d += (Gqb(),
				Bqb[c]);
			e += Cqb[c];
			return Xob(a, d, e, true)
		}
		function bP(a, b) {
			var c;
			c = (a < 0 ? -a : a) > (b < 0 ? -b : b) ? a < 0 ? -a : a : b < 0 ? -b : b;
			return 32 + ((6 < c - 1 ? 6 : c - 1) * 32 / 2 | 0)
		}
		function Lt(a, b) {
			irb(a.mb, (a.gb - a.bb) * b + a.bb);
			jrb(a.mb, (a.hb - a.cb) * b + a.cb);
			a.jb = (a.ib - a.db) * b + a.db
		}
		function Jrb(a, b) {
			if (a.a.length < b) {
				a.a = Bxb(a.a, Xub(a.a.length * 2, b));
				a.c = Axb(a.c, a.a.length + 7 >> 3)
			}
		}
		function Ey(a, b) {
			if (a.b.b == 0)
				return;
			if (dCb(bAb(a.e)) > b)
				return;
			dCb(cAb(a.e));
			Od(a.c, cAb(a.b), false)
		}
		function UR(a) {
			var b;
			if (a.I >= 5)
				return;
			if (a.O.f >= 3 || a.N <= 0)
				return;
			b = a.B;
			if (b == 1)
				return;
			a.e = a.Y._ + 5
		}
		function ghb(a) {
			var b;
			b = a.h;
			if (b == 0) {
				return a.l + a.m * gHb
			}
			if (b == eHb) {
				return a.l + a.m * gHb - hHb
			}
			return a
		}
		function plb(a, b, c) {
			var d, e;
			if (!a.Y)
				return null;
			d = b.e >> 5;
			e = b.f >> 5;
			d &= 7;
			e &= 7;
			return a.a[d + e * 8 + c * 64]
		}
		function kV(a, b, c) {
			!a.a && (a.a = a.Y.Q);
			return wG(a.a, a.e[b - 4 + 5 + (c - 4 + 5) * 10] & 255) == 0 && a.b[b + (c << 3)] > 0
		}
		function ZU(a, b, c) {
			if (c == (a.e[b] & 255))
				return;
			a.e[b] = c << 24 >> 24;
			if ((a.hb & 1) == 0) {
				a.hb |= 8;
				usb(a.d, b)
			}
		}
		function Qy(a, b) {
			var c, d;
			c = toInt($wnd.Math.round(a.c / b)) * b;
			d = toInt($wnd.Math.round(a.d / b)) * b;
			ez(a, c, d, b)
		}
		function y$(b, c) {
			m$();
			function d() {
				var a = ICb(v$)(b);
				a && $wnd.setTimeout(d, c)
			}
			$wnd.setTimeout(d, c)
		}
		function OY(a) {
			JY();
			DY.call(this);
			this.Y ? (this.k = this.Y._ + 5) : (this.k = 5);
			this.a = a;
			EN(this, a.ib)
		}
		function Wr(a, b) {
			this.b = a;
			Mo.call(this, a, 72, (b.a.a & 4) != 0 ? 13 : 0, 0, 0);
			this.a = b;
			this.f = 15;
			this.k = 7
		}
		function bq(a, b) {
			Iy.hasMethod(EEb) ? sm(Iy, b) : !!a.f && (b == 0 ? Eg(xg(a.f.i), false) : a.b == 0 && Xp(a));
			a.b = b
		}
		function r$(a) {
			if (!a.i) {
				a.i = true;
				!a.e && (a.e = new z$(a));
				y$(a.e, 1);
				!a.g && (a.g = new B$(a));
				y$(a.g, 50)
			}
		}
		function YU(a, b, c, d, e) {
			AN(a, c, d, e);
			++a.f;
			(e & 1) != 0 ? d.Yc(a.e, null) : (e & 8) != 0 && rsb(d, 100, new omb(a,d))
		}
		function pj(a, b, c, d, e, f, g, h, i, j) {
			uj(a, b);
			a.b + 24 > a.u.length && rj(a);
			rk(a.u, a.b, g, h, i, j);
			tj(a, c, d, e, f)
		}
		function zsb(a, b, c, d, e, f, g) {
			var h;
			h = (d - b) / (c - a);
			return b + h * (g - a) + ((f - d) / (e - c) - h) / (e - a) * (g - a) * (g - c)
		}
		function Lh(a, b, c, d, e) {
			d /= 2;
			e /= 2;
			utb(a.f, b - d, c - e);
			stb(a.f, b + d, c + e);
			utb(a.f, b - d, c + e);
			stb(a.f, b + d, c - e)
		}
		function ssb(a, b, c, d) {
			var e;
			if (c) {
				for (e = 0; e < b; e++)
					Krb(d.a, d.b, e);
				return true
			} else
				return rsb(a, b, d)
		}
		function ZN(a, b, c) {
			var d, e;
			e = yk(c);
			for (d = 0; d < e; d++) {
				c.Vc(vGb);
				a.Ke(Smb((Clb(),
					zlb), b, c));
				c.Wc(vGb)
			}
		}
		function Mvb(a, b) {
			var c, d;
			_Bb(b);
			for (d = Yl(b); On(d); ) {
				c = Pn(d);
				if (!a.ag(c)) {
					return false
				}
			}
			return true
		}
		function em(b, a) {
			if (typeof b.arr[a] === 'undefined')
				return false;
			b.size--;
			delete b.arr[a];
			return true
		}
		function uwb(a) {
			if (On(a.a)) {
				return true
			}
			if (a.a != a.c) {
				return false
			}
			a.a = new Ezb(a.d.a);
			return On(a.a)
		}
		function EO(a, b) {
			if (!!a.O && a.O.f == b)
				return a.O;
			a.hb |= 12;
			a.cb && !!a.O && a.O.vf();
			a.O = rZ(b, a);
			return a.O
		}
		function Px(a, b) {
			!a.a[b >> 1] && (a.a[b >> 1] = Pf(a.nb.v, (a.pb.eb.Jf(),
				glb(zN(a.pb))), b));
			return a.a[b >> 1]
		}
		function khb(a) {
			var b, c, d, e;
			e = a;
			d = 0;
			if (e < 0) {
				e += hHb;
				d = eHb
			}
			c = toInt(e / gHb);
			b = toInt(e - c * gHb);
			return r2(b, c, d)
		}
		function Rxb(a) {
			Qxb();
			var b, c, d;
			d = 0;
			for (c = a.gd(); On(c); ) {
				b = Pn(c);
				d = d + (b != null ? P(b) : 0);
				d = d | 0
			}
			return d
		}
		function Gob(a) {
			var b;
			if (a.a[a.b % 20] == null)
				return null;
			b = a.a[a.b % 20];
			a.a[a.b % 20] = null;
			++a.b;
			return b
		}
		function Wp(a, b) {
			if ((b.i.f & 2) != 0)
				return false;
			if (a.rb.e.d <= 0 && (b.q.k & 128) != 0)
				return false;
			return true
		}
		function llb(a, b) {
			if (!a.Y)
				return 0;
			return WU(glb(a), (b.e >> 5) - ((a.g.b << 3) + 4), (b.f >> 5) - ((a.g.c << 3) + 4))
		}
		function mA(a, b) {
			$lb(a.X, r8, new EJ(a));
			tG(a.Q, a);
			a.U = (Clb(),
				new Skb);
			a.W.Gb() && Qkb(a.U, a);
			fmb(a.X, b)
		}
		function GO(a) {
			var b;
			YN(a);
			if (a.cb) {
				a.O.vf();
				if (a.R)
					for (b = 0; b < a.R.a.length; b++) {
						IO(ixb(a.R, b).O.g)
					}
			}
		}
		function VD(a) {
			var b;
			if (a.e) {
				a.e = false;
				for (b = 0; b < a.d.length; b++) {
					a.d[b] != null && a.d[b].Yd();
					a.b[b] = 0
				}
			}
		}
		function Hv(a, b, c) {
			var d;
			if (a.o) {
				a.b -= b / 600;
				a.b < 0 && (a.b = 0);
				for (d = 0; d < 8; d++)
					!!a.j[d] && Hv(a.j[d], b, c)
			}
		}
		function Fq(a, b, c) {
			var d, e;
			if (c < 6 || c >= 38)
				return;
			e = (b - 6) / 35 | 0;
			d = (b - 6) % 35;
			if (d >= 32)
				return;
			$b(a.d, e + 49)
		}
		function J2(a, b) {
			var c, d, e;
			c = a.l - b.l;
			d = a.m - b.m + (c >> 22);
			e = a.h - b.h + (d >> 22);
			return r2(c & dHb, d & dHb, e & eHb)
		}
		function aS(a, b) {
			var c;
			c = a.Y._;
			c &= -256;
			c |= b & 255;
			c >= a.Y._ + 128 && (c -= 256);
			c < a.Y._ - 128 && (c += 256);
			return c
		}
		function Qzb(a, b) {
			var c;
			c = a.a.get(b);
			if (c === undefined) {
				++a.d
			} else {
				a.a[PHb](b);
				--a.c;
				azb(a.b)
			}
			return c
		}
		function Ysb(b) {
			var c = b.handler;
			if (!c) {
				c = ICb(function(a) {
					Zsb(b, a)
				});
				c.listener = b;
				b.handler = c
			}
			return c
		}
		function zBb(a) {
			var b, c;
			if (a.b) {
				return a.b
			}
			c = a.d;
			while (c) {
				b = c.b;
				if (b) {
					return b
				}
				c = c.d
			}
			return MAb(),
				IAb
		}
		function Eub(a, b) {
			if (a < b) {
				return -1
			}
			if (a > b) {
				return 1
			}
			if (a == b) {
				return 0
			}
			return isNaN(a) ? isNaN(b) ? 0 : 1 : -1
		}
		function lxb(a, b) {
			var c;
			c = jxb(a, b, 0);
			if (c == -1) {
				return false
			}
			$Bb(c, a.a.length);
			MBb(a.a, c, 1);
			return true
		}
		function xzb(a, b) {
			var c, d, e;
			for (d = 0,
				     e = b.length; d < e; ++d) {
				c = b[d];
				if (mzb(a, c.ig())) {
					return c
				}
			}
			return null
		}
		function m2(a, b, c, d, e) {
			e.mg = a;
			e.ng = b;
			e.og = Ahb;
			e.__elementTypeId$ = c;
			e.__elementTypeCategory$ = d;
			return e
		}

		function setRgbaValue(obj, rVal, gVal, bVal, aVal) {
			var b, g, r;
			r = ~~(rVal * 256);
			g = ~~(gVal * 256);
			b = ~~(bVal * 256);
			obj.e = 'rgba(' + r + ',' + g + ',' + b + ',' + aVal + ')';
		}

		function hp(a, b, c, d) {
			var e;
			e = Zh(a, (My(),
				Ly), 13, 0, d.c, 30);
			Kh(a, d.c, b, c, e == 13 ? '255,255,255,0.85' : '255,255,255,1', e == 13 ? '0,0,0,0.85' : '0,0,0,1', 1);
		}
		
		function kw() {
			kw = xhb;
			Et();
			jw = new Znb(m2(f2(g3, 1), uEb, 7, 15, [0, eDb, 1]),m2(f2(g3, 1), uEb, 7, 15, [1, 0.75, nDb]));
		}
		
		function Hx() {
			Hx = xhb;
			Et();
			Ex = m2(f2(g3, 1), uEb, 7, 15, [6, 6, 5.5]);
			Fx = m2(f2(g3, 1), uEb, 7, 15, [-14, -12, -10])
		}
		function Rz(a) {
			this.e = new oxb;
			this.f = new oxb;
			this.g = j2(h3, XCb, 7, a + 1, 15, 1);
			this.i = j2(h3, XCb, 7, a + 1, 15, 1)
		}
		function Zo(a) {
			if (a.b) {
				if (!a.c) {
					a.c = new gp(a.qb);
					bt(R.v, a.c)
				}
				fp(a.c)
			} else if (a.c) {
				Zs(R.v, a.c);
				a.c = null
			}
		}
		function wqb(a, b) {
			irb(b, (a.k + a.n) / 2);
			jrb(b, (a.o + a.p) / 2);
			hrb(b, a.n - a.k);
			frb(b, a.p - a.o);
			grb(b, a.j);
			b.d = 0
		}
		function wN(a) {
			var b;
			b = a.fb.e - 16 - (a.fb.e & -32);
			b >= 1 && --b;
			b <= -1 && ++b;
			if (b != 0) {
				a.hb |= 2;
				fqb(a.fb, a.fb.e - b)
			}
		}
		function xN(a) {
			var b;
			b = a.fb.f - 16 - (a.fb.f & -32);
			b >= 1 && --b;
			b <= -1 && ++b;
			if (b != 0) {
				a.hb |= 2;
				hqb(a.fb, a.fb.f - b)
			}
		}
		function aQ(a) {
			var b;
			if (!!a.o && !!a.o.Y) {
				b = a.o.G.b;
				b.b += 1;
				Tsb(b.b >= 0);
				(a.q & 4) != 0 && (b.e += 1,
					Tsb(b.e >= 0))
			}
		}
		function TR(a) {
			if (a.B == 1)
				return false;
			if (a.C == 511)
				return false;
			if ((a.v.f & 8) != 0)
				return false;
			return true
		}
		function jh(b, a) {
			if (b.childIdxByName.hasOwnProperty(a))
				return b.childs[b.childIdxByName[a]];
			return null
		}
		function ce(b) {
			if (b.G) {
				try {
					Yb(b.c)
				} catch (a) {
					a = chb(a);
					if (!Z2(a, 25))
						throw dhb(a)
				}
				b.c = null
			}
			Dy(b.B);
			b.G = null
		}
		function Dh(a, b, c) {
			setRgbaValue(a, 1, 0, 0, 1);
			a.f.beginPath();
			drawRect(a.f, b - 16, c - 16, 32, 32);
			Lh(a, b, c, 32, 32);
			ai(a);
			a.e = null
		}
		function md(a, b, c) {
			wc();
			tc.call(this, a);
			xc(this);
			this.lb = c;
			this.G = b;
			Wsb();
			$lb(this.rb.X, r8, new EJ(this))
		}
		function xy(a) {
			U.call(this, a);
			this.c = [];
			this.a = [];
			this.g = new pN(this.c);
			this.b = new pN(this.a);
			this.d = a.W
		}
		function kub() {
			++hub;
			this.j = null;
			this.g = null;
			this.f = null;
			this.d = null;
			this.b = null;
			this.i = null;
			this.a = null
		}
		function Qx(a) {
			jt.call(this, a);
			this.a = j2(kdb, PCb, 223, 8, 0, 1);
			prb(this.mb, a.fb);
			this.mb.e = 256;
			this.mb.b = 256
		}
		function kmb() {
			imb();
			var a;
			this.b = j2(Zfb, PCb, 23, 10, 0, 1);
			this.a = false;
			for (a = 0; a < 10; a++)
				this.b[a] = new oxb
		}
		function XO() {
			rO.call(this);
			this.T = new iqb;
			this.U = new iqb;
			this.P = new iqb;
			this.O = rZ(0, this);
			this.L = new iqb
		}
		function eg(a) {
			a.a.length = 0;
			a.c.length = 0;
			a.g.length = 0;
			a.f.length = 0;
			a.b.length = 0;
			a.e.length = 0;
			a.d.length = 0
		}
		function emb(a, b) {
			var c, d;
			d = bwb(a.a, N(b));
			if (d)
				for (c = 0; c < d.a.length; c++) {
					$Bb(c, d.a.length);
					Yn(d.a[c], b)
				}
		}
		function kE(a) {
			var b, c, d;
			c = a.f.be().e.c;
			for (d = 0; d < a.d.length; d++) {
				b = a.d[d];
				if (b) {
					b.le(c);
					a.a = a.a | b.je()
				}
			}
		}
		function Ixb(a) {
			var b, c, d, e;
			e = 1;
			for (c = 0,
				     d = a.length; c < d; ++c) {
				b = a[c];
				e = 31 * e + (b != null ? P(b) : 0);
				e = e | 0
			}
			return e
		}
		function Sxb(a) {
			Qxb();
			var b, c, d;
			d = 1;
			for (c = a.gd(); On(c); ) {
				b = Pn(c);
				d = 31 * d + (b != null ? P(b) : 0);
				d = d | 0
			}
			return d
		}
		function F2(a) {
			var b, c, d;
			b = ~a.l + 1 & dHb;
			c = ~a.m + (b == 0 ? 1 : 0) & dHb;
			d = ~a.h + (b == 0 && c == 0 ? 1 : 0) & eHb;
			return r2(b, c, d)
		}
		function x2(a) {
			var b, c, d;
			b = ~a.l + 1 & dHb;
			c = ~a.m + (b == 0 ? 1 : 0) & dHb;
			d = ~a.h + (b == 0 && c == 0 ? 1 : 0) & eHb;
			a.l = b;
			a.m = c;
			a.h = d
		}
		function bQ(a) {
			var b;
			if (!!a.o && !!a.o.Y) {
				b = a.o.G.b;
				b.b += -1;
				Tsb(b.b >= 0);
				(a.q & 4) != 0 && (b.e += -1,
					Tsb(b.e >= 0))
			}
		}
		function EA(a) {
			var b;
			if (!a.f)
				throw dhb(new $A);
			bB(a.i);
			for (b = 0; b < 16; b++) {
				a.c[b] = null;
				a.t[b] = null
			}
			a.f = false
		}
		function aN(a, b, c) {
			var d, e;
			a.e = zk(c);
			a.a = xk(c);
			d = c.ad(null);
			for (e = 0; e < d; e++)
				gxb(a.c, Ekb(b.Bb(), c));
			_M(a, c)
		}
		function wo(a, b, c, d, e) {
			b += d / 2 | 0;
			c += e / 2 | 0;
			d = toInt(d * 0.75);
			e = toInt(e * 0.75);
			a.o.f.beginPath();
			Lh(a.o, b, c, d, e);
			ai(a.o)
		}
		function u2(a, b, c, d, e) {
			var f;
			f = H2(a, b);
			c && x2(f);
			if (e) {
				a = w2(a, b);
				d ? (o2 = F2(a)) : (o2 = r2(a.l, a.m, a.h))
			}
			return f
		}
		function y2(a) {
			var b, c;
			c = Pub(a.h);
			if (c == 32) {
				b = Pub(a.m);
				return b == 32 ? Pub(a.l) + 32 : b + 20 - 10
			} else {
				return c - 12
			}
		}
		function yk(a) {
			var b;
			b = a.ad(null);
			if (b < 253)
				return b;
			if (b == 255)
				return -1;
			return b == 253 ? a._c(null) : a.$c(null)
		}
		function mpb(a, b) {
			var c;
			if (!Z2(b, 73))
				return false;
			c = b;
			return c.d == a.d && a.e == c.e && a.f == c.f && a.Uf() == c.Uf()
		}
		function Lg(a, b) {
			a.W && (dib(),
				a.$.__listener = null,
				undefined);
			!!a.$ && yg(a.$, b);
			a.$ = b;
			a.W && (dib(),
				Hib(a.$, a))
		}
		function qT(a, b) {
			var c;
			c = a.e;
			a.b = PE(b.Q.f, a.e);
			!!a.b && (c = a.b.b);
			c >= 0 && (a.d = YB(ZI(b.O, a), c));
			a.c = PE(b.Q.g, c)
		}
		function RF(a) {
			var b, c;
			for (b = 0; b < a.b.length; b++) {
				c = a.b[b];
				if (c.g == 1 && (c.b & 2) == 0) {
					c.f = a.a.length;
					Qn(a.a, c)
				}
			}
		}
		function kn(a) {
			var b, c;
			b = R;
			if (!b.G)
				return false;
			c = _mb(b.G.N, a);
			return !!c && c.d.d[0].c == b.c.S && lC(b.c.rb.R.a)
		}
		function Kb(a, b) {
			if (!a.K) {
				if (a.I)
					return false;
				a.K || gxb(a.R, new GL(a.rb.W.Fb()));
				a.L = true
			}
			a.N.k = b;
			return true;
		}
		function wf(a) {
			if (!a.j || !a.a)
				return false;
			Iy.emit(RDb, '');
			a.d.j.b == 7 && bq(a.d.j, 0);
			a.j = false;
			a.i = 0;
			return true;
		}

		function Qh(a) {
			if (!a.c) {
				a.c = $doc.createElement('canvas');
				a.c.width = 258;
				a.c.height = 258;
				a.d = a.c.getContext('2d');
			}
		}

		function pob(a) {
			var b, c;
			a.e || (a.d = 0, a.e = true);
			c = new Avb;
			for (b = 0; b < a.c; b++) {
				xvb(c, a.a[b] & 255 & CEb);
			}
			return c.a;
		}
		function Un(a, b) {
			var c, d;
			d = false;
			for (c = a.length - 1; c >= 0; c--) {
				if (Nu(),
					!a[c].j) {
					a.splice(c, 1);
					d = true
				}
			}
			return d
		}
		function Sf(a, b) {
			if (b.g != a.b) {
				b.e = SCb;
				b.g = a.b;
				Qn(a.c, b)
			}
			b.e = -1;
			if (gkb(b) != 0) {
				Uf(a, b);
				return true
			}
			return false
		}
		function Jf(a, b) {
			if (b < 0)
				return null;
			if (b >= qDb) {
				return a.u[b - qDb]
			}
			if (b >= 512) {
				return a.t[b - 512]
			}
			return a.v[b]
		}
		function ZB(a, b, c) {
			switch (a.a.b) {
				case 0:
					return b > 4 ? b : 0;
				case 1:
					return b > 4 || (c & 128) != 0 ? b : 3;
				default:
					return b;
			}
		}
		function Mn(a) {
			if (a.pos + 1 >= a.sz)
				throw 'end of list';
			return a.type == 1 ? a.arr[a.indices[++a.pos]] : a.arr[++a.pos]
		}
		function fp(a) {
			var b;
			b = a.d.q.C.c;
			if (b) {
				a.o = a.o | (a.n != b.f || a.i != b.g);
				a.n = b.f;
				a.i = b.g
			}
			if (a.o) {
				dp(a);
				a.o = false
			}
		}
		function ZX(a) {
			var b;
			b = new kX;
			b.q |= 512;
			b.g = 3;
			b.r = 3;
			b.q |= qDb;
			OP(b, a.c.Q.d.u);
			gQ(b, a.c.Q.d.v);
			b.a = false;
			return b
		}
		function KO(a) {
			var b, c;
			c = a.T;
			if (!(!c.a && c.e == 0 && c.f == 0 && c.c == 0)) {
				_pb(a.L, c);
				b = c.c;
				aqb(c, a.fb.d);
				b != 0 && a._e(b)
			}
		}
		function po(a) {
			var b, c;
			for (c = Xl(a.A); c.pos + 1 < c.sz; ) {
				b = Mn(c);
				!!b.o && Yib(a.R, b.o)
			}
			a.A.length = 0;
			a.s = a.P = a.t = a.Q = 0
		}
		function wwb(a) {
			var b;
			this.d = a;
			this.c = new Tzb(this.d.b);
			this.a = this.c;
			this.b = uwb(this);
			b = a[KHb];
			this[KHb] = b
		}
		function jJ(a) {
			U.call(this, a);
			this.e = j2(h3, XCb, 7, 7, 15, 1);
			this.d = j2(h3, XCb, 7, 7, 15, 1);
			this.c = j2(h3, XCb, 7, 7, 15, 1)
		}
		function L_() {
			J_();
			return m2(f2(Hbb, 1), PCb, 27, 0, [u_, r_, t_, B_, x_, v_, y_, z_, A_, D_, E_, F_, I_, G_, H_, w_, s_, C_])
		}
		function N(a) {
			return a3(a) ? Ffb : $2(a) ? ofb : Y2(a) ? a.mg : l2(a) ? a.mg : a.mg || Array.isArray(a) && f2(_ab, 1) || _ab
		}
		function Zqb(a, b) {
			return a.f - a.e / 2 <= b.f - b.e / 2 && b.f + b.e / 2 <= a.f + a.e / 2 && a.g - a.b / 2 <= b.g - b.b / 2 && b.g + b.b / 2 <= a.g + a.b / 2
		}
		function _qb(a, b, c) {
			var d, e, f, g;
			g = c + (a.e + b.e) / 2;
			f = c + (a.b + b.b) / 2;
			d = a.f - b.f;
			e = a.g - b.g;
			return d < g && -d < g && e < f && -e < f
		}
		function tb(a) {
			var b, c;
			gN(a.M);
			Fnb(a.rb.cb);
			Pnb(a.rb.db);
			for (c = Xl(a.rb.cb.e); c.pos + 1 < c.sz; ) {
				b = Mn(c);
				!!b && b.Ue()
			}
		}
		function qH(a, b) {
			a.f = b.$c(null);
			a.g = b.$c(null);
			a.e = b.$c(null);
			a.b = b.$c(null);
			a.d = zk(b);
			a.c = zk(b);
			a.a = b.ad(null)
		}
		function MA(a, b) {
			aCb(b);
			WBb(b != a);
			if (a.i) {
				return
			}
			a.k == null ? (a.k = m2(f2(Gfb, 1), PCb, 17, 0, [b])) : (a.k[a.k.length] = b)
		}
		function hj(a, b, c) {
			var d, e;
			d = a.gc().f;
			if (!b) {
				return
			} else {
				e = b.a
			}
			if (!e)
				return;
			mtb(d, e, c.f - c.e / 2, c.g - c.b / 2, c.e, c.b)
		}
		function Zpb(a) {
			if (!a.d)
				return hCb(a);
			if (a.a)
				return a.d.o * 1000000009;
			return a.e * 239 + a.f * 177777 + a.c * 839201 + a.d.o
		}
		function Xnb(a, b, c, d) {
			if (a.a.length > 2 && (a.c & 16) != 0)
				return Ynb(a, b, c, d);
			return Asb(a.a[b], a.b[b], a.a[c], a.b[c], d)
		}
		function dob(a, b, c, d) {
			if (a.a.length > 2 && (a.c & 16) != 0)
				return fob(a, b, c, d);
			return Asb(a.a[b], a.b[b], a.a[c], a.b[c], d)
		}
		function iY(a, b, c, d, e) {
			var f;
			AN(a, c, d, e);
			if ((e & 1) != 0) {
				eY(a, xk(d));
				f = d._c(null);
				kY(a, f & 32767);
				jY(a, (f & AEb) != 0)
			}
		}
		function Zh(a, b, c, d, e, f) {
			var g;
			g = (c + 1) / 2 | 0;
			for (; ; ) {
				Atb(a.f, $i(d, c, b));
				if (c <= g || ttb(a.f, e).width <= f)
					return c;
				--c
			}
		}
		function HA(a, b, c, d, e, f) {
			a.j = b;
			a.v = c;
			a.A = d;
			a.b = e;
			a.a = f;
			if (e > 25 || f > 25)
				throw dhb(new $A);
			if (a.f)
				throw dhb(new $A)
		}
		function Nm(b) {
			var c;
			try {
				!!R.c && gc(R.c, b)
			} catch (a) {
				a = chb(a);
				if (Z2(a, 25)) {
					c = a;
					Dn(RA(c, c.Vd()))
				} else
					throw dhb(a)
			}
		}
		function zr(a, b) {
			var c;
			c = pU(a.q.G);
			if (XV(c, a.f) != a.b || a.b.b < a.f)
				return;
			a.f = a.b.b + 1;
			dc(a.q, b, a.b.a);
			a.e = Date.now()
		}
		function KP(a, b) {
			var c;
			if (!yO(a, b))
				return false;
			c = b;
			if (a.s != c.s)
				return false;
			if (a.q != c.q)
				return false;
			return true
		}
		function hY(a, b) {
			var c;
			if (!yN(a, b))
				return false;
			c = b;
			if (a.j != c.j)
				return false;
			if (a.i != c.i)
				return false;
			return true
		}
		function Xjb(a, b) {
			var c;
			if (b < 0 || b >= a.c) {
				throw dhb(new aub)
			}
			--a.c;
			for (c = b; c < a.c; ++c) {
				a.a[c] = a.a[c + 1]
			}
			a.a[a.c] = null
		}
		function cmb(a) {
			var b, c, d;
			for (b = 0; b < a.b.a.length; b++) {
				c = ixb(a.b, b);
				d = Date.now();
				c.Ab();
				d = Date.now() - d;
				c.tb = toInt(d)
			}
		}
		function ihb(a) {
			if (-17592186044416 < a && a < hHb) {
				return a < 0 ? $wnd.Math.ceil(a) : $wnd.Math.floor(a)
			}
			return ghb(E2(a))
		}
		function zhb(a) {
			if (Array.isArray(a) && a.og === Ahb) {
				return jub(N(a)) + '@' + (P(a) >>> 0).toString(16)
			}
			return a.toString()
		}
		function i$(a) {
			a$();
			var b;
			b = PZ;
			if (b) {
				if (b == ZZ) {
					return
				}
				CBb(b.a, (MAb(),
					KAb), a.Vd(), a);
				return
			}
			h$(Z2(a, 119) ? a.wf() : a)
		}
		function ry(a, b) {
			a.g = Yz(a.d.kb, a.i);
			if (b) {
				_pb(a.e, b);
				a.j = true
			} else if (a.g) {
				_pb(a.e, a.g.fb);
				a.j = true
			} else
				a.j = false
		}
		function rw(a, b) {
			a.kb = b;
			a.nb = b.W;
			a.v = a.kb.Q.k.b;
			a.t = j2(h3, XCb, 7, a.v.length, 15, 1);
			a.u = j2(h3, XCb, 7, a.v.length, 15, 1)
		}
		function Ue(a, b, c) {
			W$(a.c, pob(c));
			b >= 0 && a.f.length > 0 && a.f[b % a.f.length].readyState == 1 && W$(a.f[b % a.f.length], pob(c))
		}
		function hxb(a, b) {
			var c, d;
			c = IBb(b.a, b.a.length);
			d = c.length;
			if (d == 0) {
				return false
			}
			LBb(a.a, a.a.length, c);
			return true
		}
		function wvb(a, b) {
			var c, d, e;
			cCb(b, a.length);
			e = '';
			for (d = 0; d < b; ) {
				c = d + SCb < b ? d + SCb : b;
				e += tvb(a.slice(d, c));
				d = c
			}
			return e
		}
		function rsb(a, b, c) {
			var d, e, f, g;
			g = (b + 7) / 8 | 0;
			e = 0;
			for (f = 0; f < g; f += 8) {
				d = a.Xc();
				e |= d;
				osb(d, f, new vsb(a,c))
			}
			return e != 0
		}
		function Q1(a, b, c) {
			var d, e;
			e = bwb(a.d, b);
			if (!e) {
				e = new nzb;
				ewb(a.d, b, e)
			}
			d = e.Mf(c);
			if (!d) {
				d = new oxb;
				e.Nf(c, d)
			}
			return d
		}
		function wz(a, b, c) {
			var d;
			d = bsb(a.i, b, 1);
			if ((d & 1) != 0) {
				if ((d & 2) != 0 || Z2(c, 75) && (c.v.f & 512) != 0)
					return false
			}
			return true
		}
		function glb(a) {
			var b;
			if (!a.e) {
				if (a.i.e.length == 0)
					return null;
				b = a.i.e[0];
				if (!Z2(b, 124))
					return null;
				a.e = b
			}
			return a.e
		}
		function g$() {
			a$();
			var a = '__gwtDevModeHook:' + $moduleName + ':moduleBase';
			var b = $wnd || self;
			return b[a] || $moduleBase
		}
		function Lvb(a, b) {
			var c, d;
			for (d = a.gd(); On(d); ) {
				c = Pn(d);
				if (b3(b) === b3(c) || b != null && L(b, c)) {
					return true
				}
			}
			return false
		}
		function fhb(a, b) {
			var c;
			if (jhb(a) && jhb(b)) {
				c = a - b;
				if (!isNaN(c)) {
					return c
				}
			}
			return D2(jhb(a) ? khb(a) : a, jhb(b) ? khb(b) : b)
		}
		function CS(a, b) {
			if (b == a.d[a.e] + 1) {
				return
			}
			if (b < a.d[a.i]) {
				return
			}
			while (a.i != a.e && a.d[a.i] < b) {
				--a.g;
				a.i = (a.i + 1) % a.c
			}
		}
		function oob(a, b) {
			if (a.e)
				throw dhb(new Iub);
			a.d + 1 > a.b && (a.a = Axb(a.a, Xub(a.d + 1, a.b * 2)));
			a.a[a.d++] = b << 24 >> 24;
			a.c = a.d
		}
		function XBb(a, b) {
			if (0 > a) {
				throw dhb(new Hub('fromIndex: 0 > toIndex: ' + a))
			}
			if (a > b) {
				throw dhb(new cub(VHb + a + WHb + b))
			}
		}
		function Kxb(a, b, c, d, e, f, g, h) {
			var i;
			i = c;
			while (f < g) {
				i >= d || b < c && h.mf(a[b], a[i]) <= 0 ? (e[f++] = a[b++]) : (e[f++] = a[i++])
			}
		}
		
		function qs(a) {
			a['position'] = (A0(), 'absolute');
			a['border'] = '1px solid black';
			a['background-color'] = 'rgba(61,61,61,0.85)';
			a['border-radius'] = '6px';
			a['padding'] = '10px';
			a['color'] = 'rgb(250,231,155)';
		}
		
		function vs(a) {
			a['background-color'] = 'rgba(0,0,0,0.5)';
			a['margin-bottom'] = '1px';
			a['width'] = '179px';
			a['height'] = '16px';
			a['padding'] = '5px 7px 5px 14px';
			a['color'] = 'rgb(180,180,180)';
		}
		
		function _0() {
			_0 = xhb;
			$0 = new c1;
			Y0 = new d1;
			T0 = new e1;
			U0 = new f1;
			Z0 = new g1;
			X0 = new h1;
			V0 = new i1;
			S0 = new j1;
			W0 = new k1
		}
		function GF(a, b) {
			a.i = zk(b);
			a.k = zk(b);
			a.f = wk(b);
			a.e = wk(b);
			a.d = wk(b);
			a.b = Hk(b);
			a.a = Hk(b);
			a.j = Hk(b);
			a.g = Hk(b);
			Ek(b, a.c)
		}
		function uG(a, b) {
			HF(a.j, b);
			SE(a.q, b);
			SE(a.o, b);
			SE(a.c, b);
			SE(a.e, b);
			SE(a.k, b);
			SE(a.f, b);
			SE(a.g, b);
			SE(a.b, b);
			SE(a.n, b)
		}
		function Fb(a) {
			var b;
			if (a.I) {
				sM(a.H.b, a.I);
				return a.H.b
			}
			b = a.H.c;
			(!b.d || b.d.ib != a.T.k) && sM(b, gA(a.rb, a.T.k));
			return b
		}
		function yO(a, b) {
			var c;
			if (!yN(a, b))
				return false;
			c = b;
			if (a.M != c.M)
				return false;
			if (a.O.f != c.O.f)
				return false;
			return true
		}
		function Gk(a) {
			var b;
			if (!a.g)
				throw dhb(new Iub);
			if (a.f + 2 > a.e)
				throw dhb(new iob);
			b = a.i[a.f++];
			b |= a.i[a.f++] << 8;
			return b
		}
		function we(a) {
			var b, c;
			for (c = new xxb(a.d); c.a < c.c.a.length; ) {
				b = wxb(c);
				$sb(b.b, b.c, b.a, b.d)
			}
			a.d.a = j2(Afb, PCb, 1, 0, 5, 1)
		}
		function lV() {
			gV();
			_N.call(this);
			this.e = j2(d3, BEb, 7, 100, 15, 1);
			this.d = j2(d3, BEb, 7, 13, 15, 1);
			this.b = j2(h3, XCb, 7, 64, 15, 1)
		}
		function Br(a) {
			zo.call(this, a, 0);
			this.b = null;
			this.d = null;
			this.a = j2(f4, PCb, 101, 4, 0, 1);
			this.f = 0;
			this.e = 0;
			this.c = false
		}
		function jv(a) {
			Nu();
			Nt.call(this, a);
			this.o = [];
			this.D = new $f;
			this.F = new $f;
			ht(this, sprites.get('default'));
			this.J = mh(this.ob)
		}
		function nkb(a) {
			U.call(this, a);
			sBb(uBb(), 'Decoder');
			this.d = new ukb(this);
			this.b = new ukb(this);
			this.c = gm();
			this.a = gm()
		}
		function df(a, b, c, d, e, f, g, h) {
			this.k = 0;
			this.j = a;
			this.i = b;
			this.e = c;
			this.n = d;
			this.o = e;
			this.p = f;
			this.c = 0;
			this.d = g;
			this.a = h
		}
		function hx(a, b, c, d, e, f, g, h) {
			a.Oc(b, e);
			a.Nc(c, e);
			a.Nc(c, g);
			a.Nc(d, g);
			a.Nc(d, h);
			a.Nc(c, h);
			a.Nc(c, f);
			a.Nc(b, f);
			a.Nc(b, e)
		}
		function ix(a, b, c, d, e, f, g, h) {
			a.Oc(e, b);
			a.Nc(e, c);
			a.Nc(g, c);
			a.Nc(g, d);
			a.Nc(h, d);
			a.Nc(h, c);
			a.Nc(f, c);
			a.Nc(f, b);
			a.Nc(e, b)
		}
		function Jxb(a, b, c, d) {
			var e, f, g;
			for (e = b + 1; e < c; ++e) {
				for (f = e; f > b && d.mf(a[f - 1], a[f]) > 0; --f) {
					g = a[f];
					a[f] = a[f - 1];
					a[f - 1] = g
				}
			}
		}
		function dmb(a) {
			var b, c, d;
			for (b = 0; b < a.b.a.length; b++) {
				c = ixb(a.b, b);
				d = Date.now();
				c.Cb();
				d = Date.now() - d;
				c.tb = toInt(c.tb + d)
			}
		}
		function R1(a, b) {
			var c, d;
			d = bwb(a.d, b);
			if (!d) {
				return Qxb(),
					Qxb(),
					Pxb
			}
			c = d.Mf(null);
			if (!c) {
				return Qxb(),
					Qxb(),
					Pxb
			}
			return c
		}
		function Z1(a) {
			var b;
			b = c_(a, 'dir');
			if (kvb('rtl', b)) {
				return c2(),
					b2
			} else if (kvb('ltr', b)) {
				return c2(),
					a2
			}
			return c2(),
				_1
		}
		function Sub(a) {
			var b, c;
			if (a > -129 && a < 128) {
				b = a + 128;
				c = (Uub(),
					Tub)[b];
				!c && (c = Tub[b] = new Kub(a));
				return c
			}
			return new Kub(a)
		}
		function jA(a, b) {
			var c, d, e;
			e = a.cb.e;
			for (c = 0; c < e.length; c++) {
				if (Z2(e[c], 93)) {
					d = e[c];
					if (kvb(d.q.A, b))
						return d
				}
			}
			return null
		}
		function qe(a, b) {
			var c;
			b.detail != 0 ? (c = b.detail) : (c = -b.wheelDelta / 40 | 0);
			a.c && bz(a.g, $wnd.Math.pow(1.0199999809265137, -c))
		}
		function Jg(a, b) {
			var c;
			switch (dib(),
				Eib(b.type)) {
				case 16:
				case 32:
					c = b.relatedTarget;
					if (!!c && $$(a.$, c)) {
						return
					}
			}
			q1(b, a, a.$)
		}
		function P(a) {
			return a3(a) ? nCb(a) : $2(a) ? toInt((_Bb(a),
				a)) : Y2(a) ? a.wb() : l2(a) ? hCb(a) : !!a && !!a.hashCode ? a.hashCode() : hCb(a)
		}
		function Xk() {
			$wnd.sprites.loadStatic(function() {
				$wnd.sprites.loadSkinTypes(ICb(Yk))
			});
			$wnd.sprites.loadAsync()
		}
		function yn(a) {
			if ($wnd.lang && $wnd.lang.old_client && $wnd.lang.hasOwnProperty(a))
				return $wnd.lang.old_client[a];
			return a
		}
		function zl(c) {
			if (c.idlePauseMax) {
				var a = c.idlePauseMin || 0;
				var b = c.idlePauseMax || 0;
				return Math.random() * (b - a) + a
			}
			return 0
		}
		function BO(a, b, c) {
			var d;
			if (a.O.f == 3 || b == 0 && c == 0)
				return false;
			d = uO(a, b, c);
			if ((d & 1) == 0)
				return false;
			wO(a, b, c, d);
			return true
		}
		function TU(a, b) {
			var c, d;
			if (!yN(a, b))
				return false;
			d = b;
			for (c = 0; c < a.e.length; c++)
				if (a.e[c] !== d.e[c])
					return false;
			return true
		}
		function nnb(a) {
			var b;
			if (a.a.a.length == 0) {
				return new jkb
			} else {
				b = ixb(a.a, a.a.a.length - 1);
				kxb(a.a, a.a.a.length - 1);
				return b
			}
		}
		function S1(a) {
			var b, c;
			if (a.a) {
				try {
					for (c = new xxb(a.a); c.a < c.c.a.length; ) {
						b = wxb(c);
						O1(b.a, b.d, b.c, b.b)
					}
				} finally {
					a.a = null
				}
			}
		}
		function A1(a) {
			var b;
			z1.call(this);
			this.a = a;
			!n1 && (n1 = new D1);
			b = n1.a[aHb];
			if (!b) {
				b = new oxb;
				C1(n1, b)
			}
			fm(b, this);
			this.b = aHb
		}
		function jb(a) {
			cb.call(this, a.rb);
			this.c = a;
			this.e = angular.element(document.body).injector().get('Sounds') || null;
			gb = !!this.e
		}
		function Zib() {
			$ib.call(this, (dib(),
				$doc.createElement(kEb)));
			this.$.style['position'] = 'relative';
			this.$.style[MEb] = 'hidden'
		}
		function epb(a) {
			Kob();
			this.e = new zpb(this,0,0);
			this.n = [];
			this.o = a;
			this.b = j2(Ieb, PCb, 73, 8, 0, 1);
			this.c = new iqb;
			this.d = new Ppb
		}
		function Osb() {
			var a, b, c;
			Jsb();
			a = Isb++ + NBb();
			b = toInt($wnd.Math.floor(a * CFb)) & GHb;
			c = toInt(a - b * qHb);
			this.a = b ^ 1502;
			this.b = c ^ FHb
		}
		function elb(a) {
			var b, c;
			for (c = 0; c < 8; c++)
				for (b = 0; b < 8; b++) {
					a.d[b + c * 8] = new zpb(a.b,((a.g.b << 3) + b) * 32 + 16,((a.g.c << 3) + c) * 32 + 16)
				}
		}
		function Ou(a, b, c, d) {
			var e, f;
			for (f = 0; f < a.o.length; f++)
				if (a.o[f].i == b) {
					ry(a.o[f], c);
					return
				}
			e = new sy(a,b,d);
			ry(e, c);
			Qn(a.o, e)
		}
		function eob(a, b, c, d) {
			if (a.a.length > 2 && (a.c & 16) != 0)
				return toInt(0.001 + fob(a, b, c, d));
			return Csb(a.a[b], a.b[b], a.a[c], a.b[c], d)
		}
		function qP(a, b, c, d, e) {
			HO(a, b, c, d, e);
			if ((e & 1) != 0) {
				a.e = new gob(d);
				a.c = new gob(d);
				a.d = d.ad(null)
			}
			a.f = d._c(null);
			a.b = d.ad(null)
		}
		function LP(a, b, c, d, e) {
			HO(a, b, c, d, e);
			if ((e & 1) != 0) {
				OP(a, d.ad(null));
				a.q = d._c(null);
				a.t = a.q >> 12;
				a.r = (a.q & qDb) != 0 ? d.ad(null) : 0
			}
		}
		function Bk(a, b) {
			if (b < 253) {
				a.fd(b & 255, null)
			} else if (b <= CEb) {
				a.fd(253, null);
				a.ed(b, null)
			} else {
				a.fd(254, null);
				a.dd(b, null)
			}
		}
		function aD(a) {
			if ((a.g & 8) != 0 || (a.g & 4) != 0 && oM(a.i))
				return;
			if (a.f > 0) {
				--a.f;
				(a.f % 10 == 0 || a.e <= 100 && a.f % 2 == 0) && _z(a.i.j, new uJ)
			}
		}
		function AZ(a) {
			if (Bz(a.g.V.g, a.g, a.g.fb.e, a.g.fb.f) && !cA(a.g.jb)) {
				NO(a.g, a.g.M & 15);
				IO(a.g);
				a.g.Ue();
				return true
			}
			return false
		}
		function Pzb(a, b, c) {
			var d;
			d = a.a.get(b);
			a.a.set(b, c === undefined ? null : c);
			if (d === undefined) {
				++a.c;
				azb(a.b)
			} else {
				++a.d
			}
			return d
		}
		function lkb(a, b, c) {
			var d, e, f;
			e = c.Kf().e;
			for (d = 0; d < e.length; d++) {
				f = e[d];
				if (f) {
					unb(a.rb.cb, f) && dm(b, f.Ge(), f);
					vnb(c.Kf(), f)
				}
			}
		}
		function dt(a, b, c) {
			var d;
			while (a.a.c < c - 1) {
				bt(a, new Ts)
			}
			while (a.a.c > c - 1)
				Ys(a, a.a.c - 1);
			for (d = 1; d < c; d++)
				Ss(Ujb(a.a, d - 1), b[d])
		}
		function _rb(a, b) {
			var c, d;
			if (b.g) {
				c = new jsb;
				c.a = j2(h3, XCb, 7, a.c << 6, 15, 1);
				for (d = 0; d < c.a.length; d++)
					c.a[d] = a.b;
				dm(a.a, b.kb, c)
			}
		}
		function ev(a, b) {
			a.g += a.i;
			if (a.g > b) {
				a.g = $wnd.Math.max(0, 2 * b - a.g);
				a.i = -a.i
			}
			if (a.g < 0) {
				a.g = $wnd.Math.min(b, -a.g);
				a.i = -a.i
			}
			a.c = 1
		}
		function dv(a, b, c) {
			a.a += a.b;
			if (a.a > c) {
				a.a = $wnd.Math.max(b, 2 * c - a.a);
				a.b = -a.b
			}
			if (a.a < b) {
				a.a = $wnd.Math.min(c, 2 * b - a.a);
				a.b = -a.b
			}
		}
		function lf(a, b) {
			a.o = b.ad(null);
			switch (a.o) {
				case 2:
					a.n = null;
					break;
				case 3:
					a.n = new SM;
					RM(a.n, a.rb, b);
					break;
				case 1:
					QM(a.n, a, b);
			}
		}
		function Xn(c, a) {
			var b = GwtUtils.javaFunctionToJs(a, 2);
			b == null ? console.log("ERROR: can't sort NativeList") : c.sort(b)
		}
		function vm(g, a, b, c, d, e, f) {
			g.perks.available.push({
				id: b,
				name: a,
				unit: c,
				flags: d,
				quantity: e,
				selected: false,
				canActivate: f
			})
		}
		function esb(a, b, c, d, e, f) {
			var g, h;
			g = Sob(b, c, d);
			if (!g || !g.Y)
				return;
			h = bm(a.a, g.kb);
			if (!h)
				return;
			h.a[(c & 7) + ((d & 7) << 3) + (e << 6)] = f
		}
		function mU() {
			mU = xhb;
			lU = new AU;
			iU = new CU;
			kU = new FU;
			jU = new IU;
			gU = new LU;
			hU = new OU;
			fU = m2(f2(kgb, 1), PCb, 104, 0, [iU, kU, jU, gU, hU])
		}
		function t2(a, b) {
			if (a.h == fHb && a.m == 0 && a.l == 0) {
				b && (o2 = r2(0, 0, 0));
				return q2((S2(),
					Q2))
			}
			b && (o2 = r2(a.l, a.m, a.h));
			return r2(0, 0, 0)
		}
		function RR(a) {
			var b;
			if (a.O.f >= 3 || a.N <= 0 || (a.G.g & 64) != 0)
				return false;
			b = a.B;
			if (b == 1 || (a.D & 2) != 0 || b == 22)
				return false;
			return true
		}
		function am(d, a) {
			var b = GwtUtils.javaFunctionToJs(a, 2);
			if (b == null)
				return false;
			for (var c in d.arr)
				b.call(a, c, d.arr[c]);
			return true
		}
		function vhb() {
			uhb = {};
			!Array.isArray && (Array.isArray = function(a) {
					return Object.prototype.toString.call(a) === '[object Array]'
				}
			)
		}
		function L(a, b) {
			return a3(a) ? jvb(a, b) : $2(a) ? (_Bb(a),
			a === b) : Y2(a) ? a.ub(b) : l2(a) ? a === b : !!a && !!a.equals ? a.equals(b) : b3(a) === b3(b)
		}
		function Cy(a, b, c) {
			a.f <= 50 && (a.a = b - a.d);
			++a.f;
			_zb(a.b, c);
			a.a = b + $wnd.Math.min(a.d * 5, (a.a - b + a.d) * 0.995);
			a.a < b && (a.a = b);
			_zb(a.e, a.a)
		}
		function rj(a) {
			if (a.b == 0)
				return;
			Rtb(a.p, a.j, a.k, a.i, a.g, a.r);
			Itb(a.p, 34962, 0, a.u);
			Jtb(a.p, 4, 0, a.b / 4 | 0);
			a.s += (a.b / 24 | 0) - 1;
			a.b = 0
		}
		function UZ(a) {
			SZ();
			LA(this);
			NA(this);
			this.e = a;
			a != null && fCb(a, TFb, this);
			this.g = a == null ? wFb : zhb(a);
			this.a = '';
			this.b = a;
			this.a = ''
		}
		function eq(a) {
			tc.call(this, a);
			this.e = Iy.players || null;
			this.i = Iy.squads || null;
			this.g = [];
			this.d = [];
			this.c = true;
			this.a = -1;
			this.k = -1
		}
		function yx(a) {
			Et();
			Nt.call(this, a);
			this.f = mib(4) + 9;
			this.e = mib(3) + 3;
			this.b = $wnd.Math.random();
			this.c = ($wnd.Math.random() - 0.5) / GDb
		}
		function Rf(a) {
			var b, c, d, e;
			b = -1;
			d = null;
			for (c = 0; c < a.c.length; c++) {
				e = a.c[c];
				if (gkb(e) != 0 && e.e > 0 && (e.e < b || !d)) {
					d = e;
					b = e.e
				}
			}
			return d
		}
		function gN(a) {
			var b, c;
			if (a.g) {
				c = 0;
				for (b = 0; b < a.e.length; b++) {
					a.e[b] != null && setObjectParam(a.e, c++, a.e[b])
				}
				Wn(a.e, c);
				a.g = false
			}
			a.f = a.e.length
		}
		function fmb(a, b) {
			var c, d, e;
			for (e = new xxb(a.b); e.a < e.c.a.length; ) {
				c = wxb(e);
				c.Db(b)
			}
			for (d = new xxb(a.b); d.a < d.c.a.length; ) {
				wxb(d)
			}
		}
		function Xpb(a, b, c) {
			var d, e;
			d = 0;
			for (; ; ) {
				e = Zob(a.d, a.e, a.f, c);
				if (!e)
					return d;
				if (++d > 10) {
					a.a = true;
					return -1
				}
				Ypb(a, e);
				!!b && Ypb(b, e)
			}
		}
		function Xob(a, b, c, d) {
			eqb(a.c, b, c, a);
			if (Xpb(a.c, null, d) < 0)
				return null;
			b = a.c.e >> 5;
			c = a.c.f >> 5;
			return ilb(Rob(a.c.d, b >> 3, c >> 3), b, c)
		}
		function ks(a, b, c, d) {
			var e, f, g, h;
			g = b.frames[c].x;
			h = b.frames[c].y;
			f = b.frameWidth;
			e = b.frameHeight;
			Ih(a.b, b.texture, g, h, f, e, d, 0, f, e)
		}
		function me(a, b) {
			var c, d, e;
			c = a.i.getBoundingClientRect();
			d = b.pageX - c.left;
			e = b.pageY - c.top;
			if (b.button != 0)
				return;
			a.a = true;
			a.e = d;
			a.f = e
		}
		function te(a, b) {
			var c;
			if (b.touches.length != 1) {
				a.a = false;
				return
			}
			a.a = true;
			b.preventDefault();
			c = b.touches[0];
			a.e = c.pageX;
			a.f = c.pageY
		}
		function Phb(a) {
			var b, c, d;
			c = (Bib(),
				d = zib.Mf('logLevel'),
				!d ? null : d.cg(im(d) - 1));
			b = c == null ? null : PAb(c);
			b ? (a.b = b) : DBb(a, (MAb(),
				IAb))
		}
		function Uu(a, b, c, d, e, f) {
			var g, h, i;
			g = (Ju / tu + d / 2) % 1 * su;
			while (g < d) {
				h = b + g * f;
				i = c + 32 * e * e * ((g / d - 0.5) * (g / d - 0.5) - 0.25);
				a.uc(Hu, h, i);
				g += su
			}
		}
		function rP(a) {
			PO(a, a.O.uf());
			a.cb && a.O.tf();
			++a.b;
			if (a.b > a.d) {
				GO(a);
				return
			}
			a.S = aob(a.c, a.b) - a.f;
			a.f += a.S;
			a.S != 0 && VO(a, a.S) && xO(a)
		}
		function xZ(a) {
			a.g.$e();
			if (!a.g.Y)
				return;
			Wub(a.b) >= Wub(a.c) ? a.b >= 2 ? --a.b : a.b <= -2 && ++a.b : a.c >= 2 ? --a.c : a.c <= -2 && ++a.c;
			zO(a.g, a.b, a.c)
		}
		function Ps(a, b) {
			b.length > 0 && !jh(a.b, b) && (b = 'unknown');
			Eh(a.d, jh(a.b, 'frame'), a.c / 2, a.a / 2);
			b.length > 0 && Eh(a.d, jh(a.b, b), a.c / 2, a.a / 2)
		}
		function MAb() {
			MAb = xhb;
			DAb = new RAb;
			EAb = new UAb;
			FAb = new XAb;
			GAb = new $Ab;
			HAb = new bBb;
			IAb = new eBb;
			JAb = new hBb;
			KAb = new kBb;
			LAb = new nBb
		}
		function It(a) {
			var b, c, d, e;
			d = CO(a.pb);
			if (d > 0) {
				c = a.pb.O.b;
				e = DO(a.pb);
				b = MO(a.pb) ? 0 : e;
				return a.pb.fb.e - (d - b) * c / e * 32
			}
			return a.pb.Ye().e
		}
		function Qnb(a, b, c) {
			var d, e, f;
			e = bm(a.b, b);
			if (!e)
				return null;
			for (d = 0; d < e.length; d++) {
				f = e[d];
				if (f.Qe() && f.re().b == c)
					return f
			}
			return null
		}
		function Aub(a, b) {
			var c = 0;
			while (!b[c] || b[c] == '') {
				c++
			}
			var d = b[c++];
			for (; c < b.length; c++) {
				if (!b[c] || b[c] == '') {
					continue
				}
				d += a + b[c]
			}
			return d
		}
		function Wy(a, b, c, d, e) {
			var f;
			f = c - b;
			$wnd.Math.abs(f) > d && (a.g = true);
			if (f < 0)
				return b + $wnd.Math.min(0, f + e);
			return b + $wnd.Math.max(0, f - e)
		}
		function asb(a, b, c, d, e) {
			var f, g;
			f = Sob(b, c, d);
			if (!f || !f.Y)
				return a.b;
			g = bm(a.a, f.kb);
			if (!g)
				return a.b;
			return g.a[(c & 7) + ((d & 7) << 3) + (e << 6)]
		}
		function Iz(a, b) {
			if (wG(a.b, llb(Rob(b.d, b.e >> 8, b.f >> 8), b)) >= 4)
				return false;
			if (plb(Rob(b.d, b.e >> 8, b.f >> 8), b, 0))
				return false;
			return true
		}
		function jB(a, b, c) {
			if (b) {
				a.b = RE(a.a.be().Q.g, c);
				a.d = c.ad(null)
			}
			if (a.d != 0) {
				a.c = c.$c(null);
				a.d == 2 && (a.e = c.$c(null));
				return true
			}
			return b
		}
		function c$() {
			var a;
			if (YZ != 0) {
				a = XZ();
				if (a - $Z > 2000) {
					$Z = a;
					_Z = $wnd.setTimeout(k$, 10)
				}
			}
			if (YZ++ == 0) {
				n$((m$(),
					l$));
				return true
			}
			return false
		}
		function J$() {
			if (Error.stackTraceLimit > 0) {
				$wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
				return true
			}
			return 'stack'in new Error
		}
		function bmb(a) {
			var b, c, d;
			for (b = 0; b < a.b.a.length; b++) {
				c = ixb(a.b, b);
				d = Date.now();
				c.zb();
				d = Date.now() - d;
				c.tb = toInt(c.tb + d);
				qmb(c.sb, c.tb)
			}
		}
		function ub(a) {
			var b, c;
			if (a.W) {
				a.W = false;
				return
			}
			eA(a.rb);
			for (c = Xl(a.rb.cb.e); c.pos + 1 < c.sz; ) {
				b = Mn(c);
				!!b && b.Ne()
			}
			a.O.a = j2(Afb, PCb, 1, 0, 5, 1)
		}
		function ysb(a, b, c, d, e, f, g) {
			var h, i, j, k, l, m;
			k = c - a;
			m = (d - b) / k;
			l = 0.5 * ((f - d) / (e - c) + m);
			h = (l - m) / k;
			i = l - 2 * h * c;
			j = b - (h * a + i) * a;
			return (h * g + i) * g + j
		}
		function Hs(a, b, c, d, e, f) {
			zjb(a.i, b);
			zjb(a.a, c);
			Ps(a.b, '');
			dt(a.d, f, f.length);
			Ns(a.c, d);
			Ns(a.g, e);
			(dib(),
				a.$).style['left'] = (_0(),
				'-4.0px')
		}
		function WO(a, b, c) {
			var d;
			_pb(a.P, a.fb);
			if (spb(a.fb, b, c))
				return true;
			gqb(a.P, b, c);
			aqb(a.U, a.fb.d);
			d = Xpb(a.P, a.U, true);
			a.Q = d > 0;
			return d >= 0
		}
		function lo(a, b) {
			a.v ? (a.v = false) : (a.s += a.s == 0 ? a.M : a.L);
			b.q = a.s;
			a.s += b.t;
			a.P = Xub(a.s, a.P);
			b.s = a.t;
			a.Q = Xub(b.s + b.p, a.Q);
			Qn(a.A, b);
			return b
		}
		function $L(a, b) {
			var c;
			if (!a.a)
				return;
			for (c = 0; c < a.a.length; c++)
				if (a.a[c] === b) {
					--a.d;
					(b.q & 4) != 0 && --a.f;
					(b.q & 1) != 0 && --a.c;
					Tn(a.a, c);
					return
				}
		}
		function Rnb(a, b) {
			var c, d, e, f;
			e = bm(a.b, b);
			if (e) {
				d = 0;
				for (c = 0; c < e.length; c++) {
					f = e[c];
					f.Qe() && setObjectParam(e, d++, f)
				}
				e.length = d;
				e.length == 0 && em(a.b, b)
			}
		}
		function PA(a, b, c) {
			var d, e, f, g, h;
			for (e = (a.j == null && (a.j = (E$(),
				h = D$.zf(a),
				G$(h))),
				a.j),
				     f = 0,
				     g = e.length; f < g; ++f) {
				d = e[f];
				b.Ef(c + '\tat ' + d)
			}
		}
		function lj(a, b) {
			if (b == a.o)
				return;
			sCb((wc(),
				vc), "set tileset='" + b.name + "'");
			a.o = b;
			a.a = b;
			a.d = a.a.texture.element;
			a.f = a.a.frameWidth;
			gj(a)
		}
		function dub(a, b, c) {
			var d, e;
			d = gvb(a, b++);
			if (d >= 55296 && d <= 56319 && b < c && fub(e = a.charCodeAt(b))) {
				return FDb + ((d & 1023) << 10) + (e & 1023)
			}
			return d
		}
		function Tvb(a, b) {
			var c, d, e;
			for (d = new wwb((new qwb(a)).a); d.b; ) {
				c = vwb(d);
				e = c.ig();
				if (b3(b) === b3(e) || b != null && L(b, e)) {
					return c
				}
			}
			return null
		}
		function Ck(a, b) {
			var c, d, e;
			if (b == null) {
				Bk(a, 0);
				return
			}
			c = TBb((d = b,
				OBb(),
				d));
			e = c.length;
			if (e > qDb)
				throw dhb(new job(e));
			Bk(a, e);
			a.bd(c, null)
		}
		function kvb(a, b) {
			_Bb(a);
			if (b == null) {
				return false
			}
			if (jvb(a, b)) {
				return true
			}
			return a.length == b.length && jvb(a.toLowerCase(), b.toLowerCase())
		}
		function nCb(a) {
			lCb();
			var b, c, d;
			c = ':' + a;
			d = kCb[c];
			if (!(d === undefined)) {
				return d
			}
			d = iCb[c];
			b = d === undefined ? mCb(a) : d;
			oCb();
			kCb[c] = b;
			return b
		}
		function ur(a) {
			nr();
			this.n = [];
			this.k = [];
			this.c = m2(f2(Ffb, 1), PCb, 2, 6, ['First', 'Prev', '', 'Next', 'Last']);
			this.b = a;
			this.e = new hr(a);
			tr(this)
		}
		function Kv(a) {
			jt.call(this, a);
			zv(this);
			this.e = a.j >> 8;
			this.u = a.j & 255;
			this.k = a.jb;
			this.o = getConfigParam(JFb, false);
			this.n = 0;
			this.j = j2(w5, PCb, 80, 8, 0, 1)
		}
		function Os() {
			zg(this, $doc.createElement(kEb));
			ts((dib(),
				this.$).style);
			this.a = $doc.createElement(kEb);
			us(this.a.style);
			a_(this.$, this.a)
		}
		function fv(a, b, c) {
			a.e += b;
			a.f += c;
			a.e = $wnd.Math.max(a.e, -96);
			a.e = $wnd.Math.min(a.e, 96);
			a.f = $wnd.Math.max(a.f, -96);
			a.f = $wnd.Math.min(a.f, 96)
		}
		function V1(a) {
			var b, c, d;
			ZA.call(this, W1(a), hm(a) ? null : Pn(Yl(a)));
			this.a = a;
			d = 0;
			for (c = Yl(a); On(c); ) {
				b = Pn(c);
				if (d++ == 0) {
					continue
				}
				MA(this, b)
			}
		}
		function Rd(a) {
			if (a.G) {
				ABb(a.A, 'detach()');
				ce(a);
				Re(a.D)
			}
			we(a.s);
			Us(a.t);
			Kg(a.t);
			if (a.k) {
				Xm(a.k);
				a.k = null;
				je(a.j)
			}
			a.t = null;
			a.v = null;
			mp(a.b)
		}
		function nob(a, b) {
			if (a.e)
				throw dhb(new Iub);
			a.d + 2 > a.b && (a.a = Axb(a.a, Xub(a.d + 2, a.b * 2)));
			a.a[a.d++] = b << 24 >> 24;
			a.a[a.d++] = b >> 8 << 24 >> 24;
			a.c = a.d
		}
		function Lc(a, b) {
			var c, d;
			d = new iqb;
			if (!a.bb.d || !Uob(a.bb.d, a.bb, b, d, a._.f / 48 | 0))
				return null;
			Wpb(d, a.T);
			c = new lrb;
			drb(c, d);
			Vy(a._, c);
			return c
		}
		function QD(a, b) {
			var c;
			if (b >= a.d.length)
				return false;
			for (c = b; c < a.d.length; c++) {
				a.d[c] != null && a.d[c].Zd(null)
			}
			Wn(a.d, b);
			Wl(a.b, b);
			return true
		}
		function _L(a) {
			var b, c;
			if (!a.a)
				return;
			for (c = a.a.length - 1; c >= 0; c--) {
				b = a.a[c];
				if (b.p == 2) {
					--a.d;
					(b.q & 4) != 0 && --a.f;
					(b.q & 1) != 0 && --a.c;
					Tn(a.a, c)
				}
			}
		}
		function bf(a, b, c, d) {
			if (a.f >= 1)
				return;
			a.a != 1 && b.Tc(a.a);
			a.c >= 0 ? b.Cc(a.i, a.c, c, d - a.p, a.g, a.g) : b.Bc(a.i, c, d - a.p, a.g, a.g);
			a.a != 1 && b.Tc(1);
			++a.b
		}
		function rs(a) {
			a['position'] = (A0(),
				'absolute');
			a['border'] = '1px solid rgb(255,204,0)';
			a['border-radius'] = '6px';
			a['margin'] = '2px';
			a['left'] = '0';
			a['right'] = '0';
			a['bottom'] = '0';
			a['top'] = '0'
		}
		function GN(a, b) {
			var c, d, e, f, g;
			f = ppb(a.fb);
			g = qpb(a.fb);
			c = f & 1;
			d = g & 1;
			if (c != 0 || d != 0) {
				e = Lqb(c, d, b);
				f += c * e;
				g += d * e
			}
			a.jb = Xob(a.fb.d, f >> 1, g >> 1, false)
		}
		function hR(a, b, c) {
			fqb(b, a.fb.e + ((a.v * (1 + Pqb(a.r + c & 15)) - 1) * 32 / 2 | 0));
			hqb(b, a.fb.f + ((a.u * (1 + Qqb(a.r + c & 15)) - 1) * 32 / 2 | 0));
			bqb(b, a.fb.d);
			dqb(b, a.r)
		}
		function ym(d, a, b, c) {
			d.perks.all = [];
			d.perks.available = [];
			d.perks.active = [];
			d.perks.slots_limit = a;
			d.perks.respawned = b;
			d.perks.clientCanChange = c
		}
		function Jt(a) {
			var b, c, d, e, f;
			d = CO(a.pb);
			if (d > 0) {
				c = a.pb.O.c;
				f = DO(a.pb);
				e = f / 2 / 32;
				b = MO(a.pb) ? 0 : f;
				return a.pb.fb.f - (d - b) * c / f * 32
			}
			return a.pb.Ye().f
		}

		function rZ(a, b) {
			var c;
			switch (a) {
				case 3:
					c = new BZ(b);
					break;
				case 5:
					c = new IZ(b);
					break;
				case 1:
					c = new FZ(b);
					break;
				default:
					c = new qZ(b);
			}
			c.f = a;
			return c;
		}

		function $1(a, b) {
			switch (b.e) {
				case 0:
					a['dir'] = 'rtl';
					break;
				case 1:
					a['dir'] = 'ltr';
					break;
				case 2:
					Z1(a) != (c2(), _1) && (a['dir'] = '', undefined);
					break;
			}
		}
		
		function Wmb(a, b, c, d, e, f) {
			var g, h, i;
			h = 0;
			g = -1;
			f ? (g = e.ad(null)) : (h = e.ad(null));
			if (d) {
				d.He(b, c, e, g);
				return d
			}
			i = a.a[h].ue();
			i.He(b, c, e, -1);
			return i
		}
		function LF(a, b) {
			KE(a, b);
			a.g = b.ad(null);
			a.i = b.ad(null);
			a.b = b.ad(null);
			if (a.g == 0) {
				a.a = b.ad(null);
				a.c = b.ad(null);
				a.d = b.ad(null);
				a.e = b.$c(Sub(a.e))
			}
		}
		function nxb(a, b) {
			var c, d, e;
			e = a.a.length;
			b.length < e && (b = (d = new Array(e),
				n2(d, b)));
			for (c = 0; c < e; ++c) {
				b[c] = a.a[c]
			}
			b.length > e && (b[e] = null);
			return b
		}
		
		function bd(a, b) {
			var c;
			c = b.f - Ry(a._);
			c %= 1;
			c <= -0.5 && (c += 1);
			c > 0.5 && (c -= 1);
			irb(b, b.f - c);
			c = b.g - Sy(a._);
			c %= 1;
			c <= -0.5 && (c += 1);
			c > 0.5 && (c -= 1);
			jrb(b, b.g - c);
		}
		
		function Cm(e, a, b, c) {
			var d = a * GDb;
			b == 1 ? (e.gameChatReadOnlyExpires = d) : (e.gameUncensChatReadOnlyExpires = d);
			c && e.emit('gameChatEventCensReadOnly', b)
		}
		function rCb(a, b, c, d) {
			var e;
			new HCb;
			e = new Avb;
			e.a += c;
			if ('[]'.length > 2 || '{}'.length > 2) {
				e.a += '\t';
				e.a += '[]';
				e.a += '\t';
				e.a += '{}'
			}
			CBb(a.a, b.a, e.a, d)
		}
		function ez(a, b, c, d) {
			a.c = b;
			a.d = c;
			a.s = d;
			a.n = a.f / d;
			a.k = a.e / d;
			a.o = a.c - a.a / a.s - a.n / 2;
			a.q = a.d - a.b / a.s - a.k / 2;
			a.p = a.c - a.a / a.s + a.n / 2;
			a.r = a.d - a.b / a.s + a.k / 2
		}
		function Sz(a, b) {
			var c, d;
			NG(b);
			c = Gnb(a.cb, b.Ge());
			if (c) {
				Hnb(a.cb, c);
				Snb(a.db, c)
			}
			Dnb(a.cb, b);
			Onb(a.db, b);
			d = a.bb[b.re().b];
			!!d && Zmb(d, b);
			tmb(a.ab, b)
		}
		function kN(a, b, c, d) {
			var e, f, g;
			!a.c && (a.c = []);
			c.Vc('listNew');
			e = c._c(null);
			for (f = 0; f < e; f++) {
				g = d.ye(b, c);
				!!g && Rn(a.e, g);
				a.c.push(3)
			}
			c.Wc('listNew')
		}
		function Lqb(a, b, c) {
			Gqb();
			var d;
			d = Bqb[c] * a + Cqb[c] * b;
			if (d > 0)
				return 1;
			if (d < 0)
				return -1;
			d = Eqb[c] * a + Fqb[c] * b;
			if (d > 0)
				return 1;
			if (d < 0)
				return -1;
			return 0
		}
		function Jd() {
			Jd = xhb;
			Gd = new Kd('FULLSCREEN',0,0,qDb,768);
			Fd = new Kd(rDb,1,1,640,480);
			Hd = new Kd('MEDIUM',2,2,800,600);
			Ed = new Kd('CUSTOM',3,3,640,480)
		}
		function Ksb(a, b) {
			var c, d;
			VBb(b > 0);
			if ((b & -b) == b) {
				return toInt(b * Lsb(a, 31) * 4.6566128730773926E-10)
			}
			do {
				c = Lsb(a, 31);
				d = c % b
			} while (c - d + (b - 1) < 0);return toInt(d)
		}
		function ic(a) {
			var b, c, d;
			if (!a.K)
				return;
			b = 0;
			for (d = Xl(a.rb.cb.e); d.pos + 1 < d.sz; ) {
				c = Mn(d);
				Z2(c, 75) && c.ib > a.N.k && (b == 0 ? (b = c.ib) : (b = Yub(c.ib, b)))
			}
			a.N.k = b
		}
		function Gg(a, b, c) {
			var d;
			d = kib(c.b);
			d == -1 ? Cg(a, c.b) : a.X == -1 ? iib((dib(),
				a.$), d | (a.$.__eventBits || 0)) : (a.X |= d);
			return J1(!a.Y ? (a.Y = new L1(a)) : a.Y, c, b)
		}
		function Ckb(a, b, c) {
			var d, e;
			Lkb(b, (Mlb(),
				Dlb));
			mob(b, a.rb.V);
			mob(b, a.rb._);
			oob(b, c.a.length);
			for (e = new xxb(c); e.a < e.c.a.length; ) {
				d = wxb(e);
				d.ve(a, b)
			}
		}
		function qmb(a, b) {
			var c, d;
			a.c = (a.c + 1) % a.b.length;
			a.b[a.c] = b;
			c = 0;
			for (d = 0; d < a.b.length; d++)
				a.a < a.b[d] && ++c;
			c > (a.b.length / 4 | 0) ? ++a.a : c <= 3 && a.a > 0 && --a.a
		}
		function JBb(a, b, c, d, e, f) {
			var g, h, i;
			if (a === c) {
				a = a.slice(b, b + e);
				b = 0
			}
			for (h = b,
				     i = b + e; h < i; ) {
				g = h + SCb < i ? h + SCb : i;
				e = g - h;
				HBb(c, d, f ? e : 0, a.slice(h, g));
				h = g;
				d += e
			}
		}
		function Qs() {
			kp.call(this);
			this.b = null;
			this.b = sprites.get('quest-icons');
			this.c = this.b.frameWidth;
			this.a = this.b.frameHeight;
			Xh(this.d, this.c, this.a)
		}
		function kx(a) {
			ex();
			jt.call(this, a);
			irb(this.mb, a.fb.e + ((a.v - 1) * 32 / 2 | 0));
			jrb(this.mb, a.fb.f + ((a.u - 1) * 32 / 2 | 0));
			hrb(this.mb, a.v << 5);
			frb(this.mb, a.u << 5)
		}
		function Ikb(a, b, c) {
			var d, e, f, g;
			Tsb(c == 1 || c == 2 || c == 4 || c == 8);
			g = 0;
			d = 8;
			f = 255 >> 8 - c;
			for (e = 0; e < a.length; e++) {
				if (d >= 8) {
					g = b.ad(null);
					d = 0
				}
				a[e] = g & f;
				g >>= c;
				d += c
			}
		}
		function gub(a, b, c) {
			VBb(a >= 0 && a <= 1114111);
			if (a >= FDb) {
				b[c++] = 55296 + (a - FDb >> 10 & 1023) & CEb;
				b[c] = 56320 + (a - FDb & 1023) & CEb;
				return 2
			} else {
				b[c] = a & CEb;
				return 1
			}
		}
		function bb(a) {
			var b, c, d, e;
			for (d = (e = new wwb((new qwb((new Nwb(a.f)).a)).a),
				new Rwb(e)); d.a.b; ) {
				c = (b = vwb(d.a),
					b.ig());
				cwb(a.f, c).a = j2(Afb, PCb, 1, 0, 5, 1)
			}
		}
		function qh(b, a) {
			b.renderWidth = b.frameWidth = a.ww;
			b.renderHeight = b.frameHeight = a.hh;
			b.renderShiftX = -a.sx + (a.ww - a.w) / 2;
			b.renderShiftY = -a.sy + (a.hh - a.h) / 2
		}
		function sBb(a, b) {
			var c, d, e, f;
			c = cwb(a.a, b);
			if (!c) {
				d = new FBb(b);
				e = d.c;
				f = qvb(e, 0, Xub(0, mvb(e, uvb(46))));
				EBb(d, sBb(a, f));
				fwb(a.a, d.c, d);
				return d
			}
			return c
		}
		function Nu() {
			Nu = xhb;
			Et();
			sBb(uBb(), 'Character View');
			Lu = new nzb;
			Mu = new nzb;
			zu = $doc.createElement('canvas');
			zu.width = 128;
			zu.height = 128;
			Au = zu.getContext('2d')
		}
		function Av(a, b) {
			var c;
			c = a.lb.d;
			if (c != a.n) {
				!a.j[c / 2 | 0] && (a.j[c / 2 | 0] = new Jv(a,c));
				Av(a.j[c / 2 | 0], b);
				return
			}
			a.v == -1 && (a.o ? Fv(a) : Ev(a));
			a.o ? Cv(a, b) : Bv(a, b)
		}
		function $R(a) {
			var b;
			b = 0;
			switch (a.B) {
				case 20:
					b |= 1;
					break;
				case 17:
					b |= 2;
					break;
				case 16:
				case 4:
					b |= 4;
			}
			a.J == 4 ? (b |= 8) : (a.J == 1 || Ez(a.V.g, a.jb)) && (b |= 4);
			return b
		}
		function k2(a, b) {
			var c = new Array(b);
			var d;
			switch (a) {
				case 14:
				case 15:
					d = 0;
					break;
				case 16:
					d = false;
					break;
				default:
					return c;
			}
			for (var e = 0; e < b; ++e) {
				c[e] = d
			}
			return c
		}
		function w2(a, b) {
			var c, d, e;
			if (b <= 22) {
				c = a.l & (1 << b) - 1;
				d = e = 0
			} else if (b <= 44) {
				c = a.l;
				d = a.m & (1 << b - 22) - 1;
				e = 0
			} else {
				c = a.l;
				d = a.m;
				e = a.h & (1 << b - 44) - 1
			}
			return r2(c, d, e)
		}
		function GA(a, b, c) {
			var d, e;
			if (b < 0 || b >= a.b || c < 0 || c >= a.a)
				return 0;
			b += a.d;
			c += a.e;
			d = (b >> 3) + (c >> 3) * 4;
			e = (Okb(),
			b & 7 | (c & 7) << 3);
			e = Iqb(a.s[d], e);
			return jlb(a.c[d], e)
		}
		function svb(a) {
			var b, c, d;
			c = a.length;
			d = 0;
			while (d < c && a.charCodeAt(d) <= 32) {
				++d
			}
			b = c;
			while (b > d && a.charCodeAt(b - 1) <= 32) {
				--b
			}
			return d > 0 || b < c ? a.substr(d, b - d) : a
		}
		function Af(a) {
			var b, c;
			if (!a.n || !a.n.a)
				return;
			b = a.n.a;
			c = -1;
			a.b ? (c = 1) : b.c == 4 ? gxb(a.d.R, new yL(a.d.S)) : (c = 0);
			c != -1 && gxb(a.d.R, new iL(a.d.S,b.d,c));
			a.c = true
		}
		function flb(a, b, c, d, e) {
			var f;
			b -= a.g.b << 3;
			c -= a.g.c << 3;
			if (b < 0 || c < 0 || b >= 8 || c >= 8)
				return false;
			f = b + c * 8 + e * 64;
			if (a.a[f] != d)
				return false;
			a.a[f] = null;
			return true
		}
		function yN(a, b) {
			var c;
			if (a === b)
				return true;
			if (b == null || a.mg != N(b))
				return false;
			c = b;
			if (!mpb(a.fb, c.fb))
				return false;
			if (a.ib != c.ib)
				return false;
			return true
		}
		function QR(a) {
			var b, c;
			c = a.B;
			if (0 == c && 0 <= a.C)
				return false;
			if (c == 1)
				return false;
			if (c == 22)
				return false;
			b = $R(a);
			BR(a);
			CR(a);
			b != $R(a) && DN(a, a.hb | 8);
			return true
		}
		function Fk(a) {
			var b;
			if (!a.g)
				throw dhb(new Iub);
			if (a.f + 4 > a.e)
				throw dhb(new iob);
			b = a.i[a.f++];
			b |= a.i[a.f++] << 8;
			b |= a.i[a.f++] << 16;
			b |= a.i[a.f++] << 24;
			return b
		}
		function LO(a, b) {
			var c, d, e, f, g;
			a.M = Hqb(b, a.M & 15) | a.M & -16;
			if (a.O.f == 3 && a.cb) {
				g = a.O;
				c = g.b;
				e = g.c;
				d = (Gqb(),
				Bqb[b] * c + Eqb[b] * e);
				f = Cqb[b] * c + Fqb[b] * e;
				g.b = d;
				g.c = f
			}
		}
		function Vd(a, b, c) {
			ce(a);
			if (c != null && c.length > 0) {
				ABb(a.A, ADb + b + ', message: ' + c);
				nm(Iy, c)
			} else {
				ABb(a.A, ADb + b);
				Iy.emit('gameEventNetDisconnect')
			}
			Iy.emit(BDb)
		}
		function eh(a, b, c) {
			var d, e;
			d = a.renderWidth;
			e = a.renderHeight;
			ptb(b, a.texture.element, a.frames[c].x, a.frames[c].y, a.frameWidth, a.frameHeight, 8 - d / 2, 8 - e / 2, d, e)
		}
		function jkb() {
			this.f = j2(h3, XCb, 7, 64, 15, 1);
			this.j = j2(h3, XCb, 7, 64, 15, 1);
			this.p = j2(h3, XCb, 7, 100, 15, 1);
			this.q = j2(h3, XCb, 7, 100, 15, 1);
			this.b = j2(h3, XCb, 7, 8, 15, 1)
		}
		function zk(a) {
			var b, c, d;
			d = yk(a);
			if (d == 0)
				return '';
			if (d > qDb)
				throw dhb(new job(d));
			b = j2(d3, BEb, 7, d, 15, 1);
			a.Yc(b, null);
			return vvb(RBb(b, (c = b.length,
				OBb(),
				c)))
		}
		function Tob(a, b, c) {
			if ((b | c) < 0)
				return null;
			if (b >= a.p << 8) {
				if (b > a.p << 8)
					return null;
				--b
			}
			if (c >= a.i << 8) {
				if (c > a.i << 8)
					return null;
				--c
			}
			return a.a[(b >> 8) + a.p * (c >> 8)]
		}
		function B2(a, b) {
			var c, d, e;
			e = a.h - b.h;
			if (e < 0) {
				return false
			}
			c = a.l - b.l;
			d = a.m - b.m + (c >> 22);
			e += d >> 22;
			if (e < 0) {
				return false
			}
			a.l = c & dHb;
			a.m = d & dHb;
			a.h = e & eHb;
			return true
		}
		function FA(a, b, c) {
			var d, e;
			if (b < 0 || b >= a.b || c < 0 || c >= a.a)
				return null;
			b += a.d;
			c += a.e;
			d = (b >> 3) + (c >> 3) * 4;
			e = (Okb(),
			b & 7 | (c & 7) << 3);
			e = Iqb(a.s[d], e);
			return hlb(a.c[d], e)
		}
		function q1(a, b, c) {
			var d, e, f, g, h;
			if (n1) {
				h = B1(n1, a.type);
				if (h) {
					for (g = Yl(h); On(g); ) {
						f = Pn(g);
						d = f.a.a;
						e = f.a.b;
						o1(f.a, a);
						p1(f.a, c);
						Hg(b, f.a);
						o1(f.a, d);
						p1(f.a, e)
					}
				}
			}
		}
		function N1(a, b, c) {
			var d;
			if (!b) {
				throw dhb(new _ub('Cannot add a handler with a null type'))
			}
			a.b > 0 ? M1(a, new fkb(a,b,c)) : (d = Q1(a, b, null),
				fm(d, c));
			return new ekb
		}
		function tCb() {
			tCb = xhb;
			new zCb(50000,'FATAL',(MAb(),
				KAb));
			new zCb(40000,'ERROR',KAb);
			new zCb(30000,'WARN',LAb);
			new zCb(20000,QHb,IAb);
			new zCb(SCb,'DEBUG',FAb)
		}
		function wF(a, b) {
			var c, d, e, f, g, h;
			h = yk(b);
			g = Ak(b, h);
			a.a.length = 0;
			for (e = 0; e < h; e++)
				Qn(a.a, a.b.b[e]);
			for (d = 0; d < g; d++) {
				f = Ak(b, h - 1);
				c = a.b.d.qe();
				LF(c, b);
				setObjectParam(a.a, f, c)
			}
		}
		function W2(a, b) {
			if (a3(a)) {
				return !!V2[b]
			} else if (a.ng) {
				return !!a.ng[b]
			} else if ($2(a)) {
				return !!U2[b]
			} else if (typeof a === 'boolean') {
				return !!T2[b]
			}
			return false
		}
		function jc(a) {
			var b, c, d;
			if (!a.K)
				return;
			b = 0;
			for (d = Xl(a.rb.cb.e); d.pos + 1 < d.sz; ) {
				c = Mn(d);
				Z2(c, 75) && (c.ib < a.N.k || a.N.k <= 0) && (b == 0 ? (b = c.ib) : (b = Xub(c.ib, b)))
			}
			a.N.k = b
		}
		function bl(a, b, c, d, e, f) {
			var g = $wnd.effects.createEffect1(a);
			var h = c + 1 >> 1 << 1
				, i = d + 1 >> 1 << 1;
			g.init0(h, i, e, f).getContext('2d').drawImage(b, 0, 0);
			g.init1(0, 0);
			return g
		}
		function $i(a, b, c) {
			var d;
			switch (a) {
				case 0:
					d = 'Tahoma, Kalimati, Arial';
					break;
				default:
					d = 'sans-serif';
			}
			return (c != (My(),
				Ly) ? (c.d != null ? c.d : '' + c.e) + ' ' : '') + b + 'px ' + d
		}
		function zm(d, a) {
			var b = d.perks;
			for (var c = 0; c < b.available.length; c++) {
				if (b.available[c].id == a) {
					b.available[c].selected = true;
					b.active.push(b.available[c]);
					return
				}
			}
		}
		function px(a) {
			ex();
			var b, c, d, e;
			e = $doc.createElement('canvas');
			ph(a, 52);
			for (b = 0; b < 4; b++) {
				for (c = 0; c < 3; c++) {
					for (d = 0; d < 4; d++) {
						(c != 1 || d != 1) && lx(a, e, b, c, d)
					}
				}
				lx(a, e, b, 0, 4)
			}
		}
		function Fpb(a, b, c) {
			if (a % 8 != 0) {
				throw dhb(new Hub('widthTiles(' + a + BHb + 8 + ')'))
			}
			if (b % 8 != 0) {
				throw dhb(new Hub('heightTiles(' + b + BHb + 8 + ')'))
			}
			this.c = a;
			this.a = b;
			this.b = c
		}
		function Ek(a, b) {
			var c, d;
			if (!a.g) {
				throw dhb(new Iub)
			}
			a.b && Dk(a);
			if (a.f + b.length > a.e) {
				throw dhb(new iob)
			}
			for (c = 0,
				     d = a.f; c < b.length; ++c,
				     d++)
				b[c] = a.i[d];
			a.f += b.length
		}
		function IA() {
			this.c = j2(pdb, PCb, 753, 16, 0, 1);
			this.t = j2(Ieb, PCb, 73, 16, 0, 1);
			this.s = j2(h3, XCb, 7, 16, 15, 1);
			this.k = new Ppb;
			this.u = new KA(this);
			this.i = new cB;
			this.f = false
		}

		function Oh(a, b, c, d, e, f, g, h, i) {
			if (Uh(a, b, c, d, e) || Rh(a, b, d, e))
				return;
			setFillStyle(a.f, Ph(a, b, c));
			a.f.save();
			Etb(a.f, d - h, e - i);
			ctxFillRect(a.f, h, i, f, g);
			a.f.restore();
			a.f.fillStyle = 'black';
		}

		function D2(a, b) {
			var c, d, e, f, g, h, i, j;
			i = a.h >> 19;
			j = b.h >> 19;
			if (i != j) {
				return j - i
			}
			e = a.h;
			h = b.h;
			if (e != h) {
				return e - h
			}
			d = a.m;
			g = b.m;
			if (d != g) {
				return d - g
			}
			c = a.l;
			f = b.l;
			return c - f
		}
		function eub(a, b) {
			if (b < 2 || b > 36) {
				return -1
			}
			if (a >= 48 && a < 48 + (b < 10 ? b : 10)) {
				return a - 48
			}
			if (a >= 97 && a < b + 97 - 10) {
				return a - 97 + 10
			}
			if (a >= 65 && a < b + 65 - 10) {
				return a - 65 + 10
			}
			return -1
		}
		function _l(a, b) {
			var c, d;
			if (a.size == 0)
				return;
			if (am(a, b))
				return;
			console.log('forEachNativeHack() failed');
			d = cm(a);
			for (c = 0; c < d.length; c++)
				b.ld(d[c], a.arr[d[c]] || null)
		}
		function UH(a, b) {
			var c;
			if (b == null || !Z2(b, 187))
				return false;
			c = b;
			if (!jvb(a.e, c.e))
				return false;
			if (!jvb(a.d, c.d))
				return false;
			if (!jvb(a.c, c.c))
				return false;
			return true
		}
		function NV(a, b, c) {
			var d;
			if (b) {
				d = 255;
				a.c = c._c(null)
			} else {
				d = c.ad(null)
			}
			(d & 1) != 0 && (a.e = wk(c));
			(d & 2) != 0 && (a.d = Ekb(a.b.f.be(), c));
			(d & 2) != 0 && (a.a = c.ad(null));
			return d != 0
		}
		function qk(a, b, c, d, e, f, g, h, i, j) {
			a[b++] = c;
			a[b++] = d;
			b += 2;
			a[b++] = e;
			a[b++] = f;
			b += 2;
			a[b++] = g;
			a[b++] = h;
			b += 2;
			a[b++] = g;
			a[b++] = h;
			b += 2;
			a[b++] = e;
			a[b++] = f;
			b += 2;
			a[b++] = i;
			a[b++] = j
		}
		function Jsb() {
			Jsb = xhb;
			var a, b, c, d;
			Gsb = j2(f3, uEb, 7, 25, 15, 1);
			Hsb = j2(f3, uEb, 7, 33, 15, 1);
			d = zEb;
			for (b = 32; b >= 0; b--) {
				Hsb[b] = d;
				d *= 0.5
			}
			c = 1;
			for (a = 24; a >= 0; a--) {
				Gsb[a] = c;
				c *= 0.5
			}
		}
		function Kg(a) {
			if (!a.Z) {
				Kjb();
				pzb(Jjb, a) && Mjb(a)
			} else if (Z2(a.Z, 117)) {
				a.Z.Ad(a)
			} else if (a.Z) {
				throw dhb(new Jub("This widget's parent does not implement HasWidgets"))
			}
		}

		function us(a) {
			a['position'] = 'absolute';
			a['margin'] = '1px';
			a['border-radius'] = '6px';
			a['border'] = '1px solid rgb(85,85,85)';
			a['padding'] = '4px';
			a['text-align'] = 'center';
			a['left'] = '0';
			a['right'] = '0';
			a['bottom'] = '0';
			a['top'] = '0';
		}
		
		function mC(a, b) {
			uC(a, b.A);
			rC(a, b.q);
			pC(a, b.n);
			oC(a, b.k);
			sC(a, b.s);
			qC(a, b.o);
			tC(a, b.u);
			a.b = b.b;
			a.c = b.c;
			a.a = b.a;
			a.v = b.v;
			a.f = b.f;
			a.t = b.t;
			a.j = b.j;
			a.r = b.r;
			a.g |= 16;
			a.d = b.d
		}
		function vo(a, b) {
			var c;
			a.T = b;
			a.u = true;
			xg(a.R).style['right'] = (b ? 0 : ((a.B & 1) != 0 ? 5 : 0) - a.o.b.width) + (_0(),
				'px');
			if ((a.B & 1) != 0) {
				c = a.D.d;
				Fh(c, a.H, b ? 0 : 1, c.b.width / 2, c.b.height / 2)
			}
		}
		function Olb(a) {
			Mlb();
			var b;
			Llb == null && (Llb = m2(f2(wdb, 1), PCb, 65, 0, [Glb, Jlb, Dlb, Flb, Hlb, Klb, Elb, Ilb]));
			for (b = 0; b < Llb.length; b++)
				if (Llb[b].a == a)
					return Llb[b];
			return null
		}
		function Zs(a, b) {
			var c, d;
			if (b.Z != a) {
				return false
			}
			try {
				Mg(b, null)
			} finally {
				c = (dib(),
					b.$);
				b_((null,
					d = c.parentNode,
				(!d || d.nodeType != 1) && (d = null),
					d), c);
				Yjb(a.a, b)
			}
			return true
		}
		function HF(a, b) {
			Ck(b, a.i);
			Ck(b, a.k);
			b.ed(a.f & CEb, null);
			b.ed(a.e & CEb, null);
			b.ed(a.d & CEb, null);
			b.fd(a.b, null);
			b.fd(a.a, null);
			b.fd(a.j, null);
			b.fd(a.g, null);
			b.cd(a.c, null)
		}
		function $V(a, b) {
			var c;
			if (ZV(a, b.r))
				return 2;
			if (PD(a.c, new nW(b)))
				return 3;
			if (a.e == 0 || (c = a.V.L.j + a.a,
			(b.g & 512) != 0 && ++c,
			a.d.d.length >= c) || Irb(b.i, a.kb))
				return 0;
			return 1
		}
		function Wpb(a, b) {
			var c, d, e, f;
			d = b.Uf();
			e = (Gqb(),
			Bqb[d] * a.e + Eqb[d] * a.f + b.e);
			f = Cqb[d] * a.e + Fqb[d] * a.f + b.f;
			!!b.d && (a.d = b.d);
			c = b.Tf();
			c > 0 && (a.b = c);
			a.c = Hqb(d, a.c);
			a.e = e;
			a.f = f
		}
		function hb(a) {
			if (!!a.c.I && !!a.rb.K) {
				a.a && !a.b && (a.c.I.D & 2) != 0 && (dwb(a.f, RCb) || fwb(a.f, RCb, new oxb),
					gxb(cwb(a.f, RCb), null));
				a.b = (a.c.I.D & 2) != 0
			} else {
				a.b = false
			}
			a.a = !!a.c.I
		}
		function cp(a, b, c) {
			var d, e, f;
			d = b / a.B | 0;
			f = c / a.B | 0;
			e = a.u;
			a.u = f * a.e + d;
			if (a.u < 0 || a.u >= a.g) {
				a.u = -1;
				a.v = -1;
				a.q = null
			} else {
				a.v = a.u;
				a.u = a.t[a.u];
				a.q = PE(a.j.Q.q, a.u)
			}
			e != a.u && dp(a)
		}
		function EC(a, b, c) {
			var d;
			(c & 1) != 0 && (a.g = b._c(null));
			if ((c & 2) != 0) {
				if ((a.g & 1) != 0) {
					if (c == 255) {
						d = b._c(null);
						a.n = urb(a.i.q, d)
					}
				} else {
					c == 255 ? (a.n = new kB(a,b)) : jB(a.n, false, b)
				}
			}
		}
		function G$(a) {
			var b, c, d, e;
			b = 'F$';
			c = 'VA';
			e = Yub(a.length, 5);
			for (d = e - 1; d >= 0; d--) {
				if (jvb(a[d].d, b) || jvb(a[d].d, c)) {
					a.length >= d + 1 && (a.splice(0, d + 1),
						undefined);
					break
				}
			}
			return a
		}
		function i2(a, b, c, d, e, f, g) {
			var h, i, j, k, l;
			k = e[f];
			j = f == g - 1;
			h = j ? d : 0;
			l = k2(h, k);
			d != 10 && m2(f2(a, g - f), b[f], c[f], h, l);
			if (!j) {
				++f;
				for (i = 0; i < k; ++i) {
					l[i] = i2(a, b, c, d, e, f, g)
				}
			}
			return l
		}
		function shb(b, c, d, e) {
			rhb();
			var f = phb;
			$moduleName = c;
			$moduleBase = d;
			bhb = e;
			function g() {
				for (var a = 0; a < f.length; a++) {
					f[a]()
				}
			}
			if (b) {
				try {
					ICb(g)()
				} catch (a) {
					b(c, a)
				}
			} else {
				ICb(g)()
			}
		}
		function Xl(c) {
			if (c instanceof Array) {
				return {
					pos: -1,
					type: 0,
					sz: c.length,
					arr: c
				}
			}
			var a = [];
			for (var b in c.arr)
				a.push(b | 0);
			return {
				pos: -1,
				type: 1,
				sz: a.length,
				indices: a,
				arr: c.arr
			}
		}
		function Gmb(a, b) {
			mob(b, a.k);
			mob(b, a.f);
			nob(b, a.j & CEb);
			nob(b, a.a & CEb);
			nob(b, a.b & CEb);
			nob(b, a.n & CEb);
			nob(b, a.e);
			nob(b, a.d);
			nob(b, a.i);
			nob(b, a.g);
			oob(b, a.p ? 1 : 0);
			oob(b, a.o ? 1 : 0)
		}
		function Jv(a, b) {
			jt.call(this, null);
			zv(this);
			this.e = a.e;
			this.n = b;
			this.u = R.c.q.lb.k[a.u * 8 + ((b & 14) >> 1)];
			this.c = a.c;
			this.k = a.k;
			this.o = a.o;
			this.lb = a.lb;
			this.kb = a.kb;
			ht(this, a.ob)
		}
		function Lv(a, b) {
			jt.call(this, null);
			zv(this);
			irb(this.mb, (a.e >> 5 << 5) + 16);
			jrb(this.mb, (a.f >> 5 << 5) + 16);
			grb(this.mb, a.d);
			this.k = a;
			this.u = b;
			this.o = true;
			this.j = j2(w5, PCb, 80, 8, 0, 1)
		}
		function x$(b, c) {
			var d, e, f, g;
			for (e = 0,
				     f = b.length; e < f; e++) {
				g = b[e];
				try {
					g[1] ? g[0].xf() && (c = w$(c, g)) : ujb(g[0])
				} catch (a) {
					a = chb(a);
					if (Z2(a, 17)) {
						d = a;
						i$(d)
					} else
						throw dhb(a)
				}
			}
			return c
		}
		function xjb(a, b) {
			Lg(a, $doc.createElement('img'));
			lib((dib(),
				a.$));
			a.X == -1 ? iib(a.$, 133398655 | (a.$.__eventBits || 0)) : (a.X |= 133398655);
			!!a.a && (a.$[tHb] = '',
				undefined);
			d_(a.$, b.a)
		}
		function Fkb(a, b, c, d) {
			var e;
			e = wk(b);
			if (e == -1)
				return c;
			!c && (c = new iqb);
			if (e == -2) {
				aqb(c, d);
				return c
			}
			c.e = e;
			hqb(c, wk(b));
			dqb(c, b.ad(null));
			bqb(c, Xz(a, xk(b)));
			cqb(c, wk(b));
			return c
		}
		function Yob(a, b, c, d) {
			var e, f;
			gqb(a.c, b, c);
			bqb(a.c, a);
			if (Xpb(a.c, null, d) < 0)
				return null;
			e = a.c.e >> 5;
			f = a.c.f >> 5;
			e == a.k.c && --e;
			f == a.k.a && --f;
			return ilb(a.a[(e >> 3) + a.p * (f >> 3)], e, f)
		}
		function Nvb(a) {
			var b, c, d;
			d = new BAb('[',']');
			for (c = a.gd(); On(c); ) {
				b = Pn(c);
				AAb(d, b === a ? '(this Collection)' : b == null ? wFb : zhb(b))
			}
			return !d.a ? d.c : d.e.length == 0 ? d.a.a : d.a.a + ('' + d.e)
		}
		function Az(a, b, c, d, e) {
			var f, g, h;
			b = b / 32 | 0;
			c = c / 32 | 0;
			h = GA(a.d, b, c);
			if (wG(a.b, h) != 2)
				return true;
			g = sG(a.b, h);
			f = (Gqb(),
			Bqb[d] * Bqb[g] + Cqb[d] * Cqb[g]);
			if ((e & 2) != 0)
				return f <= 0;
			return f >= 0
		}
		function Sd(a) {
			var b, c;
			a.g.bc();
			c = sprites.get('splash');
			if (!!c && c.loaded > 0) {
				b = a.g.cc(1);
				b.kc(0, 0, 0, 1);
				b.Kc(0, 0, a.g.g.f, a.g.g.e);
				b.Jc();
				b.uc(c, a.g.g.f / 2, a.g.g.e / 2);
				a.g.fc()
			}
			a.g.ec()
		}
		function e$(b, c, d) {
			var e, f;
			e = c$();
			try {
				if (PZ) {
					try {
						return b$(b, c, d)
					} catch (a) {
						a = chb(a);
						if (Z2(a, 17)) {
							f = a;
							i$(f);
							return undefined
						} else
							throw dhb(a)
					}
				} else {
					return b$(b, c, d)
				}
			} finally {
				f$(e)
			}
		}
		function Kzb() {
			function b() {
				try {
					return (new Map).entries().next().done
				} catch (a) {
					return false
				}
			}
			if (typeof Map === 'function' && Map.prototype.entries && b()) {
				return Map
			} else {
				return Lzb()
			}
		}
		function $nb(a, b) {
			var c;
			Rsb(a.length == b.length, 'Curve: not px.length == py.length');
			for (c = 0; c < a.length - 1; c++)
				Rsb(a[c] < a[c + 1], 'Curve: not px[i] < px[i+1]');
			this.a = a;
			this.b = b;
			this.c = 0
		}
		function FS(a) {
			var b, c, d;
			d = a.i;
			while (d != a.e) {
				c = a.a[d];
				d = (d + 1) % a.c;
				b = a.b[d];
				a.k = Hz(a.n.V.g, a.d[d], c, a.n, b, a.f, a.k);
				fqb(a.a[d], a.k.g[a.k.a]);
				hqb(a.a[d], a.k.i[a.k.a]);
				bqb(a.a[d], a.k.b)
			}
		}
		function nlb(a, b, c, d, e) {
			var f;
			if (!a.Y)
				return false;
			b -= a.g.b << 3;
			c -= a.g.c << 3;
			if (b < 0 || c < 0 || b >= 8 || c >= 8)
				return false;
			f = b + c * 8 + e * 64;
			if (!!a.a[f] && a.a[f] != d)
				return false;
			a.a[f] = d;
			return false
		}
		function Zob(a, b, c, d) {
			var e, f, g;
			e = Dsb(b, a.p << 8);
			f = Dsb(c, a.i << 8);
			if ((e | f) != 0)
				return a.b[Gqb(),
					Dqb[e + 3 * f + 4]];
			if (d && a.n.length > 0) {
				g = Tob(a, b, c).c;
				if (!!g && gR(g, b, c))
					return g.t
			}
			return null
		}
		function Fmb(a, b) {
			a.k = b.$c(null);
			a.f = b.$c(null);
			a.j = wk(b);
			a.a = wk(b);
			a.b = wk(b);
			a.n = wk(b);
			a.e = b._c(null);
			a.d = b._c(null);
			a.i = b._c(null);
			a.g = b._c(null);
			a.p = b.ad(null) != 0;
			a.o = b.ad(null) != 0
		}
		function Ypb(a, b) {
			var c, d, e, f;
			a.e -= b.e;
			a.f -= b.f;
			d = Kqb(b.Uf());
			e = (Gqb(),
			Bqb[d] * a.e + Eqb[d] * a.f);
			f = Cqb[d] * a.e + Fqb[d] * a.f;
			!!b.d && (a.d = b.d);
			c = b.Tf();
			c > 0 && (a.b = c);
			a.c = Hqb(d, a.c);
			a.e = e;
			a.f = f
		}
		function gd(a, b) {
			var c, d, e, f, g, h, i;
			c = new lrb;
			e = false;
			g = b.i.e;
			d = b.b;
			i = b.g;
			for (f = 0; f < g.length; f++) {
				h = g[f];
				_qb(d, h.mb, 0) ? Sf(a.qb.v, Px(h, i.c)) && (e = true) : Tf(a.qb.v, Px(h, i.c), c, b.b)
			}
			return e
		}
		function qo(a, b, c, d) {
			var e, f, g, h, i, j, k, l;
			f = b.frameWidth;
			e = b.frameHeight;
			l = 0;
			for (j = 0; j <= 2; j++) {
				g = j == 1 ? d - 2 * e : e;
				k = 0;
				for (i = 0; i <= 2; i++) {
					h = i == 1 ? c - 2 * f : f;
					Oh(a.o, b, i + j * 3, k, l, h, g, 0, 0);
					k += h
				}
				l += g
			}
		}
		function X$(d, b) {
			if (!b) {
				d.onopen = null;
				d.onclose = null;
				d.onmessage = null;
				return
			}
			var c = d;
			d.onopen = function(a) {
				b.Tb(c, a)
			}
			;
			d.onclose = function(a) {
				b.Rb(c, a)
			}
			;
			d.onmessage = function(a) {
				b.Sb(c, a)
			}
		}
		function ujb(a) {
			var b, c;
			if (a.b.a != a.a || a != a.a.a) {
				return
			}
			a.a.a = null;
			if (!a.b.W) {
				wjb(a.b)[tHb] = oHb;
				return
			}
			b = (c = $doc.createEvent('HTMLEvents'),
				c.initEvent(oHb, false, false),
				c);
			Z$(wjb(a.b), b)
		}
		function uy(a, b) {
			var c, d;
			for (d = Xl(a.c); d.pos + 1 < d.sz; ) {
				c = Mn(d);
				if (mpb(c.jb, b.jb)) {
					try {
						if (c.ib == b.ib && c.df().b == b.df().b) {
							!!c.db && (c.db.pb = b);
							return c.db
						}
					} finally {
						dQ(c);
						Nn(d)
					}
				}
			}
			return null
		}
		function Nib() {
			Kib = ICb(Sib);
			Lib = ICb(Tib);
			var c = Vib;
			var d = Iib;
			c(d, function(a, b) {
				d[a] = ICb(b)
			});
			var e = Jib;
			c(e, function(a, b) {
				e[a] = ICb(b)
			});
			c(e, function(a, b) {
				$wnd.addEventListener(a, b, true)
			})
		}
		function uvb(a) {
			var b, c;
			if (a >= FDb) {
				b = 55296 + (a - FDb >> 10 & 1023) & CEb;
				c = 56320 + (a - FDb & 1023) & CEb;
				return String.fromCharCode(b) + ('' + String.fromCharCode(c))
			} else {
				return String.fromCharCode(a & CEb)
			}
		}
		function hd(a, b) {
			var c;
			if (!a.f)
				return;
			a.J = true;
			a.o && (b = -b);
			a.g += b;
			erb(a.j, a.i);
			c = $wnd.Math.pow(2.5, a.g * jDb);
			hrb(a.j, a.i.e * c);
			frb(a.j, a.i.b * c);
			(a.g < 0 || a.g >= 5000 || Zqb(a.j, a.ab)) && (a.f = null)
		}
		function Xp(b) {
			Eg(xg(b.f.i), true);
			Yp(b);
			try {
				Iy.emit('showScoreboardEvent')
			} catch (a) {
				a = chb(a);
				if (Z2(a, 25)) {
					BBb(R.A, (MAb(),
						LAb), 'NI.impl.showScoreboardEvent() exception')
				} else
					throw dhb(a)
			}
		}
		function br(a, b) {
			var c, d;
			if (!b.g)
				return;
			c = b;
			d = new lV;
			snb(c.i, d);
			c.e = d;
			CN(d, (c.g.b << 8) + 128, (c.g.c << 8) + 128);
			iV(d, a.a.g, c);
			d.cb = true;
			!d.eb.Jf() ? (d.jb = null) : GN(d, (ppb(d.fb),
				qpb(d.fb),
				d.fb.c))
		}
		function iS(a, b, c) {
			var d;
			a.i = qS(a.i, a.j, b, c);
			d = (b & 32) != 0;
			if ((a.j & 32) != 0 != d) {
				if (d) {
					if (iM(a.G, a.V.o) && a.c <= a.b && !(a.O.f != 0 || a.N <= 0)) {
						a.g |= 1;
						a.c = a.V._
					}
				} else {
					if (a.c > a.b) {
						a.g |= 2;
						a.b = a.c
					}
				}
			}
			a.j = b
		}
		function $c(a, b) {
			var c, d, e, f, g, h;
			d = b.b;
			h = b.g;
			f = b.i.f;
			c = new srb;
			for (e = 0; e < f.length; e++) {
				g = f[e];
				if (_qb(d, g.mb, 32)) {
					qrb(c, g.mb);
					Tqb(c, h);
					c.a = Hqb(h.c, c.a);
					Vy(a._, c);
					qrb(g.lb, c);
					g.Gd(a.G.gc())
				}
			}
		}
		function yf(a) {
			var b, c;
			c = a.n ? a.n.a : null;
			if (!c)
				return '';
			if (!a.d.I) {
				if (c.b[3].length > 0 && !jM(a.d.H.b))
					return c.b[3];
				else {
					b = c.b[2];
					if (b.length > 0)
						return b
				}
			}
			return c.b[1].length != 0 ? c.b[1] : c.b[0]
		}
		function mob(a, b) {
			if (a.e)
				throw dhb(new Iub);
			a.d + 4 > a.b && (a.a = Axb(a.a, Xub(a.d + 4, a.b * 2)));
			a.a[a.d++] = b << 24 >> 24;
			a.a[a.d++] = b >> 8 << 24 >> 24;
			a.a[a.d++] = b >> 16 << 24 >> 24;
			a.a[a.d++] = b >> 24 << 24 >> 24;
			a.c = a.d
		}
		function xsb(a, b, c, d, e, f, g, h, i) {
			var j, k, l, m, n, o, p;
			j = e - c;
			p = (f - d) / j;
			k = 0.5 * (p + (d - b) / (c - a));
			l = 0.5 * ((h - f) / (g - e) + p);
			m = (i - c) / j;
			n = m * m;
			o = n * m;
			return (2 * o - 3 * n + 1) * d + (o - 2 * n + m) * j * k + (-2 * o + 3 * n) * f + (o - n) * j * l
		}
		function Vt(a, b) {
			a.o += b * a.p;
			(a.pb.q & 64) != 0 && (a.o += b * a.p);
			if (a.o < eDb) {
				a.o = $wnd.Math.min(1.600000023841858 - a.o, EFb);
				a.p = -a.p
			}
			if (a.o > EFb) {
				a.o = $wnd.Math.max(eDb, 2.4000000953674316 - a.o);
				a.p = -a.p
			}
		}
		function Od(b, c, d) {
			var e, f;
			!!b.F && (b.F.C = d);
			try {
				e = c;
				sb(b.F, e, b.H);
				Ue(b.D, b.G._, b.H)
			} catch (a) {
				a = chb(a);
				if (Z2(a, 17)) {
					f = a;
					CBb(b.A, (MAb(),
						LAb), 'Error in processTick', f);
					Re(b.D)
				} else
					throw dhb(a)
			}
		}
		function IS(a) {
			var b;
			this.k = new Rz(8);
			this.j = new iqb;
			this.c = 20;
			this.a = j2(Feb, PCb, 22, 20, 0, 1);
			for (b = 0; b < 20; b++)
				this.a[b] = new iqb;
			this.d = j2(h3, XCb, 7, 20, 15, 1);
			this.b = j2(h3, XCb, 7, 20, 15, 1);
			this.n = a
		}
		function Rpb(a, b, c, d, e, f, g, h) {
			var i, j, k, l, m, n, o, p, q;
			i = c - a;
			k = e - g;
			m = e - a;
			j = d - b;
			l = f - h;
			n = f - b;
			o = i * l - j * k;
			if (o == 0)
				return false;
			p = m * l - n * k;
			q = i * n - j * m;
			if (o < 0) {
				o = -o;
				p = -p;
				q = -q
			}
			return 0 <= p && p <= o && 0 <= q && q <= o
		}
		function lzb() {
			lzb = xhb;
			jzb = m2(f2(Ffb, 1), PCb, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
			kzb = m2(f2(Ffb, 1), PCb, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
		}
		function jj(a, b, c, d, e, f) {
			var g, h, i;
			g = c * a.g;
			h = d * a.g;
			i = (d + 1) * a.g;
			if ((e & 24) == 24) {
				drawRect(b, g, h, f, a.g)
			} else if ((e & 24) == 16) {
				b.moveTo(g + f, h);
				b.lineTo(g, h);
				b.lineTo(g, i);
				b.lineTo(g + f, i - f);
				b.lineTo(g + f, h)
			}
		}
		function rk(a, b, c, d, e, f) {
			var g = c;
			var h = d;
			var i = c + e;
			var j = d + f;
			a[b++] = g;
			a[b++] = h;
			b += 2;
			a[b++] = i;
			a[b++] = h;
			b += 2;
			a[b++] = g;
			a[b++] = j;
			b += 2;
			a[b++] = g;
			a[b++] = j;
			b += 2;
			a[b++] = i;
			a[b++] = h;
			b += 2;
			a[b++] = i;
			a[b++] = j
		}
		function Mg(a, b) {
			var c;
			c = a.Z;
			if (!b) {
				try {
					!!c && c.Yb() && a._b()
				} finally {
					a.Z = null
				}
			} else {
				if (c) {
					throw dhb(new Jub('Cannot set a new parent without first clearing the old parent'))
				}
				a.Z = b;
				b.Yb() && a.Zb()
			}
		}
		function G2(a, b) {
			var c, d, e;
			b &= 63;
			if (b < 22) {
				c = a.l << b;
				d = a.m << b | a.l >> 22 - b;
				e = a.h << b | a.m >> 22 - b
			} else if (b < 44) {
				c = 0;
				d = a.l << b - 22;
				e = a.m << b - 22 | a.l >> 44 - b
			} else {
				c = 0;
				d = 0;
				e = a.l << b - 44
			}
			return r2(c & dHb, d & dHb, e & eHb)
		}
		function fjb(b, c) {
			djb();
			var d, e, f, g;
			d = null;
			for (g = Yl(b); On(g); ) {
				f = Pn(g);
				try {
					c.Ff(f)
				} catch (a) {
					a = chb(a);
					if (Z2(a, 17)) {
						e = a;
						!d && (d = new rzb);
						ewb(d.a, e, d)
					} else
						throw dhb(a)
				}
			}
			if (d) {
				throw dhb(new ejb(d))
			}
		}
		function ep(a, b, c, d, e) {
			a.f.fillStyle = YDb;
			Jh(a.b, d, b, c + 3);
			a.f.fillStyle = ZDb;
			Jh(a.b, d, b, c + 2);
			a.f.fillStyle = $Db;
			Jh(a.b, d, b, c - 1);
			Jh(a.b, d, b + 1, c);
			Jh(a.b, d, b, c + 1);
			Jh(a.b, d, b - 1, c);
			setFillStyle(a.f, e);
			Jh(a.b, d, b, c)
		}
		function Aw(a, b) {
			var c, d;
			if (!a.pb)
				return;
			if (a.g || !a.f) {
				Bw(a);
				a.g = false
			}
			!a.nb.e && b.Hc(a.f, arb(a.lb), krb(a.lb), a.f.width, a.f.height);
			for (c = 0; c < a.i; c++) {
				d = If(a.nb.t, a.j[c]);
				!!d && b.uc(d, a.n[c], a.p[c])
			}
		}
		function Svb(a, b) {
			var c, d, e;
			c = b.ig();
			e = b.jg();
			d = a3(c) ? cwb(a, c) : Xvb(zzb(a.a, c));
			if (!(b3(e) === b3(d) || e != null && L(e, d))) {
				return false
			}
			if (d == null && !(a3(c) ? dwb(a, c) : !!zzb(a.a, c))) {
				return false
			}
			return true
		}
		function vn() {
			var a, b, c, d, e, f;
			if (!R.G)
				return null;
			a = R.G;
			c = R.c.I;
			f = R.c.H.b;
			d = c ? Ln(c.N > 0, c.fb.e >> 5, c.fb.f >> 5) : Ln(false, -1, -1);
			for (b = 0; b < a.Q.k.b.length; b++) {
				e = a.Q.k.b[b];
				d[e.v] = e ? SD(f.s, e.u).c : 0
			}
			return d
		}
		function qv(a, b) {
			switch (a) {
				case 5:
					return 'langolier';
				default:
				case 2:
					return b;
				case 3:
					return 'slowpoke';
				case 4:
					if (jvb(b, 'default')) {
						return 'jetpack'
					}
					return b;
				case 1:
					if (jvb(b, 'default')) {
						return 'default2'
					}
					return b;
			}
		}
		function TZ(a) {
			var b;
			if (a.c == null) {
				b = b3(a.b) === b3(RZ) ? null : a.b;
				a.d = b == null ? wFb : _2(b) ? b == null ? null : b.name : a3(b) ? 'String' : jub(N(b));
				a.a = a.a + ': ' + (_2(b) ? b == null ? null : b.message : b + '');
				a.c = '(' + a.d + ') ' + a.a
			}
		}
		function J_() {
			J_ = xhb;
			u_ = new M_;
			r_ = new W_;
			t_ = new X_;
			B_ = new Y_;
			x_ = new Z_;
			v_ = new $_;
			y_ = new __;
			z_ = new a0;
			A_ = new b0;
			D_ = new N_;
			E_ = new O_;
			F_ = new P_;
			I_ = new Q_;
			G_ = new R_;
			H_ = new S_;
			w_ = new T_;
			s_ = new U_;
			C_ = new V_
		}
		function re(a, b) {
			var c, d, e, f, g;
			if (b.touches.length != 1) {
				a.a = false;
				return
			}
			e = b.touches[0];
			f = e.pageX;
			g = e.pageY;
			if (a.a) {
				b.preventDefault();
				c = f - a.e;
				d = g - a.f;
				ez(a.g, a.g.c - c / a.g.s, a.g.d - d / a.g.s, a.g.s)
			}
			a.a = false
		}
		function se(a, b) {
			var c, d, e, f, g;
			if (b.touches.length != 1) {
				a.a = false;
				return
			}
			e = b.touches[0];
			f = e.pageX;
			g = e.pageY;
			if (a.a) {
				b.preventDefault();
				c = f - a.e;
				d = g - a.f;
				ez(a.g, a.g.c - c / a.g.s, a.g.d - d / a.g.s, a.g.s)
			}
			a.e = f;
			a.f = g
		}
		function Al(e, a, b, c) {
			if (e.diagonal) {
				var d = e.lookLut[b];
				!c && e.idleAnim && (d += e.animMirrorLeft ? 5 : 8);
				return d
			} else {
				var d = e.lookLut[a];
				e.row && (d = e.row[d]);
				!c && e.idleAnim && (d += e.animMirrorLeft ? 3 : 4);
				return d
			}
		}
		function wM(a, b) {
			this.b = new aM;
			this.f = new oxb;
			this.i = new Mrb;
			this.k = j2(h3, XCb, 7, 4, 15, 1);
			this.j = a;
			this.s = new VL(this,a);
			this.r = b;
			this.q = wrb(new xrb(this,(fB(),
				eB)), a.Q.g.e);
			this.a = new lE(this,(UB(),
				vB))
		}
		function I2(a, b) {
			var c, d, e, f;
			b &= 63;
			c = a.h & eHb;
			if (b < 22) {
				f = c >>> b;
				e = a.m >> b | c << 22 - b;
				d = a.l >> b | a.m << 22 - b
			} else if (b < 44) {
				f = 0;
				e = c >>> b - 22;
				d = a.m >> b - 22 | a.h << 44 - b
			} else {
				f = 0;
				e = 0;
				d = c >>> b - 44
			}
			return r2(d & dHb, e & dHb, f & eHb)
		}
		function OA(a, b, c, d) {
			var e, f, g, h, i;
			b.Ef(d + c + a);
			PA(a, b, d);
			for (f = (a.k == null && (a.k = j2(Gfb, PCb, 17, 0, 0, 1)),
				a.k),
				     g = 0,
				     h = f.length; g < h; ++g) {
				e = f[g];
				OA(e, b, 'Suppressed: ', '\t' + d)
			}
			i = a.f;
			!!i && OA(i, b, 'Caused by: ', d)
		}
		function PM(a, b, c) {
			a.b = b;
			a.c = xk(c);
			switch (a.c) {
				case 3:
					a.a = new YM;
					WM(a.a, a, c);
					break;
				case 1:
					VM(a.a, a, c);
					break;
				case 2:
					a.a = null;
			}
			a.e = xk(c);
			switch (a.e) {
				case 3:
					a.d = new sz;
					rz(a.d, a.b, c);
					break;
				case 2:
					a.d = null;
			}
		}
		function K1(b, c) {
			var d, e;
			!c.c || (c.c = false,
				c.d = null);
			e = c.d;
			m1(c, b.b);
			try {
				P1(b.a, c)
			} catch (a) {
				a = chb(a);
				if (Z2(a, 110)) {
					d = a;
					throw dhb(new X1(d.a))
				} else
					throw dhb(a)
			} finally {
				e == null ? (c.c = true,
					c.d = null) : (c.d = e)
			}
		}
		function fx(a, b) {
			var c, d, e, f, g;
			f = _I(a.kb.O, a.pb.t);
			e = (f.a.a & 4) != 0 ? f.g : null;
			g = null;
			d = false;
			c = a.nb.I;
			if (c) {
				(c.D & 64) != 0 && (g = a.nb.t.r);
				d = (c.v.f & 512) != 0
			}
			dx = a.kb._;
			ox(b, a.pb.s, a.lb, jR(a.pb, a.lb.d), a.pb.a, e, g, d)
		}
		function ib(a, b) {
			var c;
			c = PE(a.rb.Q.k, b.b);
			if (!c)
				return;
			c == a.rb.G ? (dwb(a.f, 'COIN') || fwb(a.f, 'COIN', new oxb),
				gxb(cwb(a.f, 'COIN'), null)) : (dwb(a.f, 'BONUS') || fwb(a.f, 'BONUS', new oxb),
				gxb(cwb(a.f, 'BONUS'), null))
		}
		function cM(a, b) {
			if (b.a < 0)
				return true;
			switch (b.a) {
				case 13:
					return !lM(a) && !!a.d && dS(a.d);
				case 11:
					return !lM(a) && (a.c == a.e || a.j.e.d <= 0);
				case 10:
					return !a.d || a.d.J != 2;
				case 7:
					return !!a.d && TR(a.d);
			}
			return true
		}
		function W1(a) {
			var b, c, d, e, f;
			c = im(a);
			if (c == 0) {
				return null
			}
			b = new Bvb(c == 1 ? 'Exception caught: ' : c + ' exceptions caught: ');
			d = true;
			for (f = Yl(a); On(f); ) {
				e = Pn(f);
				d ? (d = false) : (b.a += '; ',
					b);
				zvb(b, e.Vd())
			}
			return b.a
		}
		function Xc(a, b) {
			var c, d, e, f, g, h;
			d = a.qb.n.a;
			e = b.b;
			h = b.g;
			c = new lrb;
			c.e = 32;
			c.b = 32;
			for (f = 0; f < d.length; f++) {
				g = d[f];
				if (g.e != b.d)
					continue;
				if (Yqb(e, g.n, g.o)) {
					irb(c, g.n);
					jrb(c, g.o);
					Tqb(c, h);
					bf(g, a.G.gc(), c.f, c.g)
				}
			}
		}
		function Yd(a, b, c) {
			var d, e;
			Md(a, b, c);
			e = Date.now();
			d = e - a.o;
			a.f > 0 && d > 300 && ABb(a.A, 'Server message #' + a.f + ': ' + nhb(ihb($wnd.Math.round(d))) + ' ms., (' + nhb(ihb($wnd.Math.round(c - a.p))) + ' ms.)');
			++a.f;
			a.p = c;
			a.o = e
		}
		function Eh(a, b, c, d) {
			var e, f;
			if (Rh(a, b, c, d))
				return;
			e = b.renderWidth / a.g;
			f = b.renderHeight / a.g;
			ptb(a.f, b.texture.element, b.x, b.y, b.frameWidth, b.frameHeight, c + b.renderShiftX / a.g - e / 2, d + b.renderShiftY / a.g - f / 2, e, f)
		}
		function Azb(a, b, c) {
			var d, e, f, g, h;
			h = b == null ? 0 : (g = P(b),
			g | 0);
			e = (d = a.a.get(h),
				d == null ? [] : d);
			if (e.length == 0) {
				a.a.set(h, e)
			} else {
				f = xzb(b, e);
				if (f) {
					return f.kg(c)
				}
			}
			e[e.length] = new $wb(b,c);
			++a.c;
			azb(a.b);
			return null
		}
		function Zc(a, b, c) {
			var d;
			a.hb = b / a.cb[0] | 0;
			a.ib = c / a.cb[0] | 0;
			a.hb %= a.jb.frameWidth;
			a.ib %= a.jb.frameHeight;
			a.db < 0 && (a.db = 0);
			a.eb = a.db;
			d = a.G.gc();
			d.nc(0, 0, 0, 1);
			if (a.db > hDb) {
				d.Tc(a.db);
				d.rc(a.jb, a.hb, a.ib);
				d.Tc(1)
			}
		}
		function sk(a, b, c, d, e, f) {
			var g = c + zEb;
			var h = d + zEb;
			var i = c + e - zEb;
			var j = d + f - zEb;
			a[b++] = g;
			a[b++] = h;
			b += 2;
			a[b++] = i;
			a[b++] = h;
			b += 2;
			a[b++] = g;
			a[b++] = j;
			b += 2;
			a[b++] = g;
			a[b++] = j;
			b += 2;
			a[b++] = i;
			a[b++] = h;
			b += 2;
			a[b++] = i;
			a[b++] = j
		}
		function Yx(a, b) {
			var c, d, e, f, g;
			if (a.a < 0)
				return;
			c = a.lb.d * kDb / 4;
			b.Tc(0.5);
			for (e = -1; e <= 1; e++) {
				d = c + a.a * e;
				f = a.lb.f + 25 * $wnd.Math.cos(d);
				g = a.lb.g + 25 * $wnd.Math.sin(d);
				b.yc(a.nb.t.b, (AA(),
					yA)[a.pb.p], f, g, d + BFb)
			}
			b.Tc(1)
		}
		function eM(a, b) {
			var c;
			if (!b)
				return 0;
			if (!!b.b && !cM(a, b.b))
				return 0;
			if (!!b.c && !bM(a))
				return 0;
			if (b.d) {
				if (dM(a, b.d, false))
					return 1;
				if (a.o) {
					c = a.o.f;
					if (!(!!a.d && dS(a.d)) && !!c && WV(c, b.d))
						return 2
				}
				return 0
			}
			return 1
		}
		function Tqb(a, b) {
			var c, d, e, f;
			c = b.c;
			if (c % 2 != 0) {
				throw dhb(new Hub(CHb))
			}
			e = (Gqb(),
			Bqb[c] * a.f + Eqb[c] * a.g + b.e);
			f = Cqb[c] * a.f + Fqb[c] * a.g + b.f;
			if (c % 4 == 2) {
				d = a.e;
				a.e = a.b;
				a.b = d
			}
			!!b.d && (a.c = b.d);
			a.d = Hqb(c, a.d);
			a.f = e;
			a.g = f
		}
		function ae(a, b) {
			var c, d;
			if (!a.t)
				return;
			d = xg(a.t).clientWidth | 0;
			c = xg(a.t).clientHeight | 0;
			if (d >= 10 || c >= 10) {
				(Jd(),
					Gd).c = d;
				Gd.a = c;
				xg(a.v).style['width'] = d + (_0(),
					'px');
				xg(a.v).style['height'] = c + 'px'
			}
			Xg(a.g, b);
			!!a.G && Pc(a.c.q)
		}
		function Qq(a, b, c) {
			gv(a.t, b, c);
			Rq(a) && ltb(a.e, a.c, 0, 0);
			if (!a.t.ob || !(a.t.ob.loaded > 0))
				return;
			hv(a.t, a.i.M);
			gh(a.t.ob, a.e, Xu(a.t), Yu(a.t), a.t.mb.f, a.t.mb.g, Zu(a.t) * a.t.ob.renderWidth, $u(a.t) * a.t.ob.renderHeight)
		}
		function Mxb(a, b, c, d, e, f) {
			var g, h, i, j;
			g = d - c;
			if (g < 7) {
				Jxb(b, c, d, f);
				return
			}
			i = c + e;
			h = d + e;
			j = i + (h - i >> 1);
			Mxb(b, a, i, j, -e, f);
			Mxb(b, a, j, h, -e, f);
			if (f.mf(a[j - 1], a[j]) <= 0) {
				while (c < d) {
					b[c++] = a[i++]
				}
				return
			}
			Kxb(a, i, j, h, b, c, d, f)
		}
		function mCb(a) {
			var b, c, d, e;
			b = 0;
			d = a.length;
			e = d - 4;
			c = 0;
			while (c < e) {
				b = a.charCodeAt(c + 3) + 31 * (a.charCodeAt(c + 2) + 31 * (a.charCodeAt(c + 1) + 31 * (a.charCodeAt(c) + 31 * b)));
				b = b | 0;
				c += 4
			}
			while (c < d) {
				b = b * 31 + gvb(a, c++)
			}
			b = b | 0;
			return b
		}
		function cf(a, b) {
			a.b = 0;
			a.f += b / a.d;
			if (a.f >= 1)
				return;
			switch (a.k) {
				case 0:
					a.c = ~~(a.f * a.i.frames.length);
					break;
				case 1:
					a.a = $wnd.Math.sqrt(1 - a.f);
					a.g = 1 + 0.5 * a.f;
					break;
				default:
					throw dhb(new Jub('unknown particle type'));
			}
		}
		function rr(a, b, c, d) {
			var e, f, g, h, i;
			if (a.n.length == 0)
				return;
			i = 0;
			for (g = 0; g < a.n.length; g++) {
				i += a.n[g].frameWidth
			}
			c -= i / 2 | 0;
			for (f = 0; f < a.n.length; f++) {
				h = a.n[f];
				e = a.k[f];
				Fh(b, h, e, c + (h.frameWidth / 2 | 0), d);
				c += h.frameWidth
			}
		}
		function NW(a) {
			this.a = j2(Bab, PCb, 49, 7, 0, 1);
			this.b = a;
			this.a[0] = new QX(this);
			this.a[1] = new $X(this);
			this.a[2] = new VX(this);
			this.a[3] = new XX(this);
			this.a[4] = new TX(this);
			this.a[5] = new OX(this);
			this.a[6] = new bY(this)
		}
		function Ah(a, b, c, d, e) {
			a.f.beginPath();
			utb(a.f, b, c);
			while (d < e) {
				stb(a.f, b + $wnd.Math.cos(d) * 40, c + $wnd.Math.sin(d) * 40);
				d += 0.5
			}
			stb(a.f, b + $wnd.Math.cos(e) * 40, c + $wnd.Math.sin(e) * 40);
			a.f.closePath();
			a.f.save();
			a.f.clip()
		}
		function Wjb(a, b, c) {
			var d, e, f;
			if (c < 0 || c > a.c) {
				throw dhb(new aub)
			}
			if (a.c == a.a.length) {
				f = j2(cdb, PCb, 29, a.a.length * 2, 0, 1);
				for (e = 0; e < a.a.length; ++e) {
					f[e] = a.a[e]
				}
				a.a = f
			}
			++a.c;
			for (d = a.c - 1; d > c; --d) {
				a.a[d] = a.a[d - 1]
			}
			a.a[c] = b
		}
		function uh(b, a) {
			if (!b.pattern2d) {
				temp = document.createElement('canvas');
				temp.width = b.width;
				temp.height = b.height;
				temp.getContext('2d').drawImage(b.element, 0, 0);
				b.pattern2d = a.createPattern(temp, qEb)
			}
			a.fillStyle = b.pattern2d
		}
		function yq(a, b) {
			var c, d, e, f;
			d = a.qb.H.b.a;
			if (b >= a.a + 1 && b <= a.a + 8) {
				c = SD(d, b - a.a - 1);
				if (c)
					return c
			} else {
				for (e = d.d.length - 1; e >= 0; e--) {
					c = d.d[e];
					if (!c)
						continue;
					f = cwb(a.b, c.n.b.v);
					if (!f || b != f.a)
						continue;
					return c
				}
			}
			return null
		}
		function ld(a) {
			var b;
			b = a._.s;
			a.fb = toInt($wnd.Math.round(-Ry(a._) * b));
			a.gb = toInt($wnd.Math.round(-Sy(a._) * b));
			a.J = a.J || a.U != a.fb || a.V != a.gb || a.W != a.T.d || b != a.Y || a.db != a.eb;
			if (a.J) {
				a.U = a.fb;
				a.V = a.gb;
				a.W = a.T.d;
				a.Y = b;
				a.eb = a.db
			}
		}
		function iN(a, b, c, d) {
			var e, f, g;
			c.Vc(pGb);
			nN(a, c);
			for (e = 0; e < a.c.length; e++) {
				switch (a.c[e]) {
					case 1:
						d.ze(b, c, a.e[e]);
						break;
					case 2:
						f = a.e[e];
						if (f != null) {
							d.Ae(b, f);
							a.xe(e)
						}
						break;
					case 3:
						g = d.ye(b, c);
						!!g && Rn(a.e, g);
				}
			}
			c.Wc(pGb)
		}
		function wO(a, b, c, d) {
			var e, f, g;
			a.Ne();
			e = JO(a, 3);
			e.b = b;
			e.c = c;
			e.d = (g = (b < 0 ? -b : b) > (c < 0 ? -c : c) ? b < 0 ? -b : b : c < 0 ? -c : c,
			32 + ((6 < g - 1 ? 6 : g - 1) * 32 / 2 | 0));
			e.e = (d & 4) != 0;
			if ((d & 2) != 0) {
				f = AO(a, b, c, e.d);
				e.a = Xub(e.d - f, 9)
			} else {
				a.Xe();
				wN(a);
				xN(a)
			}
		}
		function Rhb(a, b) {
			var c, d, e;
			c = new Avb;
			zvb(c, (d = new dzb(b.c),
				e = new Avb,
				zvb(e, czb(d)),
				e.a += ' ',
				zvb(e, b.b),
				e.a += '\n',
				zvb(e, b.a.Yf()),
				e.a += ': ',
				e.a));
			zvb(c, b.d);
			if (a.a && !!b.e) {
				c.a += '\n';
				OA(b.e, new Whb(c), '', '')
			}
			return c.a
		}
		function Ojb() {
			Kjb();
			var a, b;
			b = cwb(Ijb, TEb);
			if (!(a = $doc.getElementById(TEb))) {
				return null
			}
			if (b) {
				if (!a || (dib(),
				b.$ == a)) {
					return b
				}
			}
			iwb(Ijb) == 0 && pib(new Rjb);
			!a ? (b = new Sjb) : (b = new Ljb(a));
			fwb(Ijb, TEb, b);
			ozb(Jjb, b);
			return b
		}
		function Ud(a) {
			a.g = null;
			if (getConfigParam('webgl', true)) {
				if ($doc.createElement('canvas').getContext(zDb)) {
					a.g = new ik;
					ABb(R.A, 'Found webgl-experimental')
				} else {
					ABb(R.A, 'Webgl not present, using 2d context')
				}
			}
			!a.g && (a.g = new Ti);
			a.u = a.g.dc()
		}
		function sd(a, b) {
			var c;
			toInt(arb(b.lb));
			toInt(krb(b.lb));
			toInt(b.lb.e);
			toInt(b.lb.b);
			if (Z2(b, 96)) {
				return true
			}
			c = jE(a.qb.H.b.a);
			if ((c ? c.b : 0) == 0) {
				if (Z2(b, 229)) {
					return true
				}
				if (Z2(b, 228)) {
					return true
				}
			}
			if (Z2(b, 139)) {
				return true
			}
			return false
		}
		function cv(a) {
			var b, c, d, e;
			e = a.pb.S;
			b = a.gb - a.bb;
			c = a.hb - a.cb;
			if ($wnd.Math.abs(b) > e * 5 || $wnd.Math.abs(c) > e * 5) {
				a.bb = a.gb;
				a.cb = a.hb;
				a.ab = a.fb
			} else {
				d = e * 1.25;
				b > d && (b = d);
				b < -d && (b = -d);
				c > d && (c = d);
				c < -d && (c = -d);
				a.gb = a.bb + b;
				a.hb = a.cb + c
			}
		}
		function BS(a, b, c, d) {
			if (d == a.d[a.e] + 1) {
				return false
			}
			if (d < a.d[a.i]) {
				return false
			}
			_pb(a.j, b);
			while (a.i != a.e && a.d[a.i] < d) {
				--a.g;
				a.i = (a.i + 1) % a.c
			}
			if (!mpb(a.a[a.i], a.j)) {
				_pb(a.a[a.i], a.j);
				a.b[a.i] = c;
				FS(a);
				return true
			}
			return false
		}
		function Qe(a, b) {
			a.d = getConfigParam('lagVersion', 0) == 1 ? Yub(getConfigParam('antilag', 0), 5) : 0;
			if ((!a.c ? 3 : a.c.readyState) == 2 && pvb(a.g, 'wss')) {
				X$(a.c, null);
				a.c = null
			}
			if ((!a.c ? 3 : a.c.readyState) == 3) {
				a.g = b;
				a.c = new WebSocket(b);
				X$(a.c, a);
				a.c.binaryType = NDb
			}
		}
		function tk(a, b) {
			var c, d, e;
			e = b.createShader(35633);
			Ntb(b, e, a.a);
			b.compileShader(e);
			c = b.createShader(35632);
			Ntb(b, c, a.b);
			b.compileShader(c);
			d = b.createProgram();
			b.attachShader(d, e);
			b.attachShader(d, c);
			b.linkProgram(d);
			return d
		}
		function Uqb(a, b) {
			var c, d, e, f;
			c = Kqb(b.c);
			if (c % 2 != 0) {
				throw dhb(new Hub(CHb))
			}
			a.f -= b.e;
			a.g -= b.f;
			e = (Gqb(),
			Bqb[c] * a.f + Eqb[c] * a.g);
			f = Cqb[c] * a.f + Fqb[c] * a.g;
			if (c % 4 == 2) {
				d = a.e;
				a.e = a.b;
				a.b = d
			}
			!!b.d && (a.c = b.d);
			a.d = Hqb(c, a.d);
			a.f = e;
			a.g = f
		}
		function Vqb(a, b) {
			var c, d, e, f;
			c = Kqb(b.d);
			if (c % 2 != 0) {
				throw dhb(new Hub(CHb))
			}
			a.f -= b.f;
			a.g -= b.g;
			e = (Gqb(),
			Bqb[c] * a.f + Eqb[c] * a.g);
			f = Cqb[c] * a.f + Fqb[c] * a.g;
			if (c % 4 == 2) {
				d = a.e;
				a.e = a.b;
				a.b = d
			}
			!!b.c && (a.c = b.c);
			a.d = Hqb(c, a.d);
			a.f = e;
			a.g = f
		}
		function mF() {
			new Znb(m2(f2(g3, 1), uEb, 7, 15, [0, 4, 8]),m2(f2(g3, 1), uEb, 7, 15, [0, cDb, 3]));
			new Znb(m2(f2(g3, 1), uEb, 7, 15, [0, 50, 200]),m2(f2(g3, 1), uEb, 7, 15, [0, cDb, 3]));
			new Znb(m2(f2(g3, 1), uEb, 7, 15, [0, 100]),m2(f2(g3, 1), uEb, 7, 15, [0, 3]))
		}
		function Xd(a, b) {
			var c;
			if (!a.G)
				return;
			c = (b & 16) != 0;
			c && (b = 0);
			!!a.c.I && iS(a.c.I, b, Kqb(a.c.q.T.c));
			if (a.G) {
				if (a.c.K) {
					(b & 4) != 0 && jc(a.c);
					(b & 1) != 0 && ic(a.c);
					(b & 2) != 0 && az(a.c.q._, 0.25);
					(b & 8) != 0 && az(a.c.q._, -0.25)
				} else {
					cd(a.c.q, c ? 2 : 1)
				}
			}
		}
		function Fw() {
			jt.call(this, null);
			this.k = j2(g3, uEb, 7, 40, 15, 1);
			this.o = j2(h3, XCb, 7, 40, 15, 1);
			this.q = j2(h3, XCb, 7, 40, 15, 1);
			this.n = j2(h3, XCb, 7, 40, 15, 1);
			this.p = j2(h3, XCb, 7, 40, 15, 1);
			this.j = j2(h3, XCb, 7, 40, 15, 1);
			this.s = j2(g3, uEb, 7, 40, 15, 1)
		}
		function Ec(a, b, c, d, e, f) {
			var g, h, i, j, k, l, m;
			g = a.G.gc();
			k = Hqb(d, b.c);
			l = (Gqb(), k + 1 & 7);
			m = k + 7 & 7;
			if (f) {
				l = k + 2 & 7;
				m = k + 6 & 7
			}
			h = c.f;
			i = c.g;
			j = c.e / 2;
			g.kc(1, 1, 0, e ? 1 : cDb);
			g.lc();
			g.Oc(h + j * Bqb[l], i + j * Cqb[l]);
			g.Nc(h + j * Bqb[m], i + j * Cqb[m]);
			g.Uc();
			g.Jc()
		}
		function xo(a) {
			var b, c, d;
			if ((a.B & 2) != 0) {
				d = Fb(a.q).t.d;
				a.u = a.u | a.S != d;
				a.S = d;
			}
			if ((a.B & 4) != 0) {
				d = (c = a.q.q.C.c, c ? c.o : -1);
				a.u = a.u | a.U != d;
				a.U = d;
			}
			if ((a.B & 8) != 0) {
				b = Fb(a.q);
				uM(b, a.q.G);
				a.u = a.u | a.K != b;
				a.K = b;
			}
			if (a.u && a.k != null) {
				a.u = false;
				so(a);
			}
		}
		function Pub(a) {
			var b, c, d;
			if (a < 0) {
				return 0
			} else if (a == 0) {
				return 32
			} else {
				d = -(a >> 16);
				b = d >> 16 & 16;
				c = 16 - b;
				a = a >> b;
				d = a - 256;
				b = d >> 16 & 8;
				c += b;
				a <<= b;
				d = a - 4096;
				b = d >> 16 & 4;
				c += b;
				a <<= b;
				d = a - xEb;
				b = d >> 16 & 2;
				c += b;
				a <<= b;
				d = a >> 14;
				b = d & ~(d >> 1);
				return c + 2 - b
			}
		}
		function fo(a, b) {
			var c;
			if (a.V) {
				throw dhb(new Jub('Composite.initWidget() may only be called once.'))
			}
			if (!b) {
				throw dhb(new _ub('widget cannot be null'))
			}
			Z2(b, 66) && b;
			Kg(b);
			c = (dib(),
				b.$);
			Ag(a, c);
			(Cjb(),
				fib(c)) && Djb(c, a);
			a.V = b;
			Mg(b, a)
		}
		function tw(a) {
			var b, c, d, e;
			for (c = 0; c < a.r.f.a.length; c++) {
				if (Z2(ixb(a.r.f, c), 129)) {
					b = ixb(a.r.f, c);
					d = b.b;
					if (a.i < 40) {
						a.k[a.i] = 0;
						e = Lc(a.nb.q, b.a);
						if (e) {
							a.o[a.i] = toInt(e.f);
							a.q[a.i] = toInt(e.g);
							a.s[a.i] = $wnd.Math.random() * 2 - 1;
							a.j[a.i++] = d
						}
					}
				}
			}
		}
		function Fh(a, b, c, d, e) {
			var f, g;
			if (Uh(a, b, c, d, e))
				return;
			f = b.renderWidth / a.g;
			g = b.renderHeight / a.g;
			ptb(a.f, b.texture.element, b.frames[c].x, b.frames[c].y, b.frameWidth, b.frameHeight, d + b.renderShiftX / a.g - f / 2, e + b.renderShiftY / a.g - g / 2, f, g)
		}
		function Vc(a, b) {
			var c, d, e, f, g, h, i;
			c = new srb;
			d = b.b;
			i = b.g;
			g = b.i.e;
			e = ($I(a.rb.O, b.d).b & 1) != 0;
			for (f = 0; f < g.length; f++) {
				h = g[f];
				if (_qb(d, h.mb, 0)) {
					qrb(c, h.mb);
					Tqb(c, i);
					c.a = Hqb(i.c, c.a);
					bd(a, c);
					qrb(h.lb, c);
					hj(a.G, Px(h, i.c), c);
					e && Dc(a, h, i, c)
				}
			}
		}
		function Rs(a) {
			if (a.a) {
				_$(a.b, a.a.e);
				_$(a.c, a.a.f + '/' + a.a.b);
				a.a.d > 0 ? ((dib(),
					a.$).style['color'] = 'rgb(55,193,58)',
					undefined) : ((dib(),
					a.$).style['color'] = 'rgb(180,180,180)',
					undefined)
			} else {
				a.b.textContent = wFb;
				a.c.textContent = '0/0';
				(dib(),
					a.$).style['color'] = 'rgb(180,180,180)'
			}
		}
		function Uc(a, b) {
			var c, d, e, f, g, h;
			c = new lrb;
			d = b.b;
			h = b.g;
			f = b.i.e;
			a.G.gc().kc(0, 0, 0, cDb);
			for (e = 0; e < f.length; e++) {
				g = f[e];
				if (_qb(d, g.mb, 0) && !Nc(a, g.pb.jb)) {
					erb(c, g.mb);
					Tqb(c, h);
					bd(a, c);
					a.G.gc().Kc(c.f - c.e / 2, c.g - c.b / 2, c.e, c.b)
				}
			}
			a.G.gc().Jc()
		}
		function ne(a, b) {
			var c, d, e, f, g;
			c = a.i.getBoundingClientRect();
			f = b.pageX - c.left;
			g = b.pageY - c.top;
			if (a.a) {
				d = f - a.e;
				e = g - a.f;
				if (d != 0 || e != 0) {
					a.b = toInt(a.b + ($wnd.Math.abs(d) + $wnd.Math.abs(e)));
					ez(a.g, a.g.c - d / a.g.s, a.g.d - e / a.g.s, a.g.s)
				}
			}
			a.e = f;
			a.f = g
		}
		function Ch(a, b, c, d, e, f) {
			var g, h;
			b += f;
			c += f;
			d -= 2 * f;
			e -= 2 * f;
			h = b + d;
			g = c + e;
			a.f.beginPath();
			utb(a.f, b + 6, c);
			stb(a.f, h - 6, c);
			vtb(a.f, h, c, h, c + 6);
			stb(a.f, h, c + e - 6);
			vtb(a.f, h, g, h - 6, g);
			stb(a.f, b + 6, g);
			vtb(a.f, b, g, b, g - 6);
			stb(a.f, b, c + 6);
			vtb(a.f, b, c, b + 6, c)
		}
		function Ts() {
			zg(this, $doc.createElement('li'));
			vs((dib(),
				this.$).style);
			this.b = $doc.createElement('span');
			this.c = $doc.createElement('span');
			this.b.style['float'] = 'left';
			this.c.style['float'] = 'right';
			a_(this.$, this.b);
			a_(this.$, this.c);
			Rs(this)
		}
		function ET(a, b) {
			var c, d, e;
			if (llb(Rob(b.d, b.e >> 8, b.f >> 8), b) == a.a || llb(Rob(b.d, b.e >> 8, b.f >> 8), b) == a.e)
				return 0;
			c = 0;
			for (d = 0; d < 4; d++) {
				e = Vob(a.fb.d, b, d * 2);
				(llb(Rob(e.d, e.e >> 8, e.f >> 8), e) == a.a || llb(Rob(b.d, b.e >> 8, b.f >> 8), b) == a.e) && ++c
			}
			return c
		}
		function Bzb(a, b) {
			var c, d, e, f, g, h;
			g = b == null ? 0 : (f = P(b),
			f | 0);
			d = (c = a.a.get(g),
				c == null ? [] : c);
			for (h = 0; h < d.length; h++) {
				e = d[h];
				if (mzb(b, e.ig())) {
					if (d.length == 1) {
						d.length = 0;
						a.a[PHb](g)
					} else {
						d.splice(h, 1)
					}
					--a.c;
					azb(a.b);
					return e.jg()
				}
			}
			return null
		}
		function lx(a, b, c, d, e) {
			var f, g, h;
			f = b.getContext('2d');
			h = bx[d + 1] - bx[d];
			g = bx[e + 1] - bx[e];
			b.width = h;
			b.height = g;
			itb(f, 0, 0, b.width, b.height);
			ptb(f, a.texture.element, c * bx[3] + a.x + bx[d], a.y + bx[e], h, g, 0, 0, h, g);
			oh(a, c * 13 + e * 3 + d, f.createPattern(b, qEb))
		}
		function zz(a, b, c, d, e) {
			var f, g, h, i;
			for (h = 0; h < a.a.length; h++) {
				a.a[h].c = 0
			}
			yz(a, b, c);
			xz(a, b.f + ((b.g - b.f) / 2 | 0), b.i + ((b.j - b.i) / 2 | 0), c);
			i = 0;
			for (g = 0; g < a.a.length; g++) {
				f = a.a[g];
				if (!d || f.c > f.d) {
					!f.b ? (i += 5 * f.c) : (i += f.c);
					i += f.c
				}
				e && (f.d = f.c)
			}
			return i
		}
		function Vu(a, b, c, d, e, f) {
			var g, h, i;
			i = f ? Wqb(a.lb) : krb(a.lb) - a.lb.b / 2;
			g = f ? a.lb.b / 4 : a.lb.b / 6;
			i -= a.jb;
			h = arb(a.lb);
			!!e && (h += 10);
			b.kc(KFb, KFb, KFb, 1);
			b.Kc(h - 0.5, i - 0.5, a.lb.e, g);
			b.kc(d.e, d.c, d.a, 1);
			b.Kc(h, i, a.lb.e * c, g);
			b.Jc();
			!!e && b.uc(e, h - 10, i + 5)
		}
		function MY(a) {
			var b, c, d, e, f, g, h;
			if (!a.b) {
				a.b = new sqb;
				b = a.f;
				if (b == 1) {
					qqb(a.b, a.jb)
				} else {
					c = Pqb(a.fb.c) * (b - 1);
					d = Qqb(a.fb.c) * (b - 1);
					e = a.jb.e >> 5;
					g = a.jb.f >> 5;
					f = e;
					h = g;
					c < 0 ? (e += c) : (f += c);
					d < 0 ? (g += d) : (h += d);
					rqb(a.b, a.jb.d, e, g, f - e + 1, h - g + 1)
				}
			}
			return a.b
		}
		function Ipb(a, b, c, d, e, f, g, h, i, j, k) {
			var l, m, n;
			m = gg(a.b);
			m.d = b;
			m.e = (f + h) / 2 | 0;
			m.f = (g + i) / 2 | 0;
			Ypb(m, e);
			n = h - f;
			l = i - g;
			if (e.Uf() % 4 == 2) {
				n = i - g;
				l = h - f
			}
			f = m.e - (n / 2 | 0);
			g = m.f - (l / 2 | 0);
			h = m.e + (n / 2 | 0);
			i = m.f + (l / 2 | 0);
			_pb(m, e);
			Wpb(m, d);
			Kpb(a, b, c, m, f, g, h, i, j, k - 1)
		}
		function Pu(a) {
			var b, c;
			if (!a.pb.G)
				return;
			uu = gM(a.pb.G, a.kb.o);
			wu = 1 + (a.kb._ - a.pb.c) * (uu + 1) / 30;
			wu > uu + 1 && (wu = uu + 1);
			xu = wu;
			c = ~~wu;
			b = Yob(a.ab, toInt($wnd.Math.floor(a.bb)), toInt($wnd.Math.floor(a.cb)), false);
			(b.e >> 5) + Pqb(a.mb.a) * c;
			(b.f >> 5) + Qqb(a.mb.a) * c
		}
		function HO(a, b, c, d, e) {
			var f;
			AN(a, c, d, e);
			if ((e & 2) != 0) {
				SO(a, d.ad(null));
				UO(a, d.ad(null))
			}
			if ((e & 8) != 0) {
				f = d.ad(null);
				EO(a, f);
				a.O.oe(d);
				!!a.Y && a.O.Te()
			}
			(e & 4) != 0 && TO(a, d.ad(null));
			if ((e & 64) != 0) {
				a.T = Fkb(b, d, a.T, a.fb.d);
				if (a.T) {
					a.U = new iqb;
					KO(a)
				}
			}
		}
		function Rc(a) {
			var b, c, d, e, f;
			c = a.T.d;
			if (!c)
				return;
			a.B = false;
			if (a.qb.K) {
				a.C.k = -1;
				a.F = null
			}
			e = ~~toInt($wnd.Math.round(a.t.f));
			f = ~~toInt($wnd.Math.round(a.t.g));
			d = a.t.d;
			b = Yob(a.t.c, e, f, false);
			IG(a.rb.Q.i, llb(Rob(b.d, b.e >> 8, b.f >> 8), b), d);
			td(a.qb.d, b, d);
		}

		function ro(a, b, c, d, e) {
			setFillStyle(a.r, 'rgba(' + e + ',.1)');
			setFillText(a.r, b, c, d + 3);
			setFillStyle(a.r, 'rgba(' + e + ',.2)');
			setFillText(a.r, b, c, d + 2);
			setFillStyle(a.r, 'rgba(' + e + ',.5)');
			setFillText(a.r, b, c, d - 1);
			setFillText(a.r, b, c + 1, d);
			setFillText(a.r, b, c, d + 1);
			setFillText(a.r, b, c - 1, d);
			a.r.fillStyle = 'rgba(255,255,255,1)';
			setFillText(a.r, b, c, d);
		}

		function H2(a, b) {
			var c, d, e, f, g;
			b &= 63;
			c = a.h;
			d = (c & fHb) != 0;
			d && (c |= -1048576);
			if (b < 22) {
				g = c >> b;
				f = a.m >> b | c << 22 - b;
				e = a.l >> b | a.m << 22 - b
			} else if (b < 44) {
				g = d ? eHb : 0;
				f = c >> b - 22;
				e = a.m >> b - 22 | c << 44 - b
			} else {
				g = d ? eHb : 0;
				f = d ? dHb : 0;
				e = c >> b - 44
			}
			return r2(e & dHb, f & dHb, g & eHb)
		}
		function WR(a) {
			var b, c;
			if (a.B == 5)
				return 0;
			b = a.J == 1 || a.B == 16;
			if (a.J == 4)
				return 3;
			else if (Ez(a.V.g, a.jb) && !b)
				return 2;
			if (a.I > 0 || a.e > a.Y._)
				return a.v.q;
			c = a.v.c + gM(a.G, a.V.J);
			b ? (c = a.v.k) : (uz(a.B) && !mM(a.G, a.B) ? a.B : 0) == 18 && (c = a.v.e);
			QO(a, c);
			return c
		}
		function Ig(a) {
			var b;
			if (a.Yb()) {
				throw dhb(new Jub("Should only call onAttach when the widget is detached from the browser's document"))
			}
			a.W = true;
			dib();
			Hib(a.$, a);
			b = a.X;
			a.X = -1;
			b > 0 && (a.X == -1 ? iib(a.$, b | (a.$.__eventBits || 0)) : (a.X |= b));
			a.Wb();
			a.ac()
		}
		function Wnb(a, b) {
			var c, d, e;
			if (a.a.length == 1)
				return a.b[0];
			if (b <= a.a[0])
				return (a.c & 4) != 0 ? Xnb(a, 0, 1, b) : a.b[0];
			e = a.a.length - 1;
			if (b >= a.a[e])
				return (a.c & 8) != 0 ? Xnb(a, e - 1, e, b) : a.b[e];
			c = 0;
			while (e - c > 1) {
				d = e + c >> 1;
				b < a.a[d] ? (e = d) : (c = d)
			}
			return Xnb(a, c, e, b)
		}
		function _nb(a, b) {
			var c, d, e;
			if (a.a.length == 1)
				return a.b[0];
			if (b <= a.a[0])
				return (a.c & 4) != 0 ? dob(a, 0, 1, b) : a.b[0];
			e = a.a.length - 1;
			if (b >= a.a[e])
				return (a.c & 8) != 0 ? dob(a, e - 1, e, b) : a.b[e];
			c = 0;
			while (e - c > 1) {
				d = e + c >> 1;
				b < a.a[d] ? (e = d) : (c = d)
			}
			return dob(a, c, e, b)
		}
		function aob(a, b) {
			var c, d, e;
			if (a.a.length == 1)
				return a.b[0];
			if (b <= a.a[0])
				return (a.c & 4) != 0 ? eob(a, 0, 1, b) : a.b[0];
			e = a.a.length - 1;
			if (b >= a.a[e])
				return (a.c & 8) != 0 ? eob(a, e - 1, e, b) : a.b[e];
			c = 0;
			while (e - c > 1) {
				d = e + c >> 1;
				b < a.a[d] ? (e = d) : (c = d)
			}
			return eob(a, c, e, b)
		}
		function yCb() {
			yCb = xhb;
			tCb();
			new zCb(KCb,'OFF',(MAb(),
				JAb));
			new zCb(50000,'FATAL',KAb);
			wCb = new zCb(40000,'ERROR',KAb);
			new zCb(30000,'WARN',LAb);
			xCb = new zCb(20000,QHb,IAb);
			new zCb(SCb,'DEBUG',FAb);
			new zCb(5000,'TRACE',GAb);
			new zCb(WFb,'ALL',DAb)
		}
		function Hc(a) {
			var b, c, d, e, f, g;
			if (!a.T)
				return;
			a.I = null;
			Xy(a._);
			b = new iqb;
			c = toInt($wnd.Math.round(a.ab.f));
			d = toInt($wnd.Math.round(a.ab.g));
			b.e = c;
			b.f = d;
			Ypb(b, a.T);
			g = new iqb;
			e = Xpb(b, g, false);
			if (e > 0) {
				f = new iqb;
				Ypb(f, g);
				Wpb(f, a.T);
				_pb(a.T, f);
				Tc(a)
			}
			Py(a._)
		}
		function Bz(a, b, c, d) {
			var e, f, g, h, i, j;
			g = (c >> 5) - 2;
			h = (d >> 5) - 2;
			c -= g << 5;
			d -= h << 5;
			j = b.fb.d;
			HA(a.d, j, g, h, 5, 5);
			DA(a.d);
			f = Z2(b, 37);
			f ? Mz(a.e, c, d) : Nz(a.e, c, d);
			vz(a, f, true, 4, a.e, b, -1);
			e = true;
			for (i = 0; i < a.a.length; i++)
				e = e & !Oz(a.a[i], a.e);
			Cz(a);
			EA(a.d);
			return e
		}
		function Yo(a, b, c) {
			var d, e, f, g;
			for (g = Xl(a.a); g.pos + 1 < g.sz; ) {
				f = Mn(g);
				if (mpb(f.k, b)) {
					return
				}
			}
			if (!a.c)
				return;
			e = a.c.u;
			if (e == -1)
				return;
			e = IG(a.rb.Q.i, e, c);
			d = new fK(a.rb.W.Fb(),b,e,a.rb);
			if (!dK(d, a.qb.G))
				return;
			gxb(a.qb.R, d);
			Qn(a.a, Dv(new Lv(b,e), a.rb))
		}
		function Xb(a, b, c) {
			var d, e, f;
			if (b.g <= 0) {
				e = fA(a.rb, b.e);
				b.c = om(Iy, b.d, b.c, b.g == -1, (a.rb._ - b.f) / 10 | 0, !!e && e.k == 2, c, b.b, (b.a & 6) >> 1);
				if (!c && b.c != '') {
					d = gA(a.rb, b.e);
					!!d && _u(d.db, b)
				}
			} else {
				f = Yz(a.rb, b.g);
				!!f && Z2(f.db, 42) && Kt(f.db, b.c, b.f + 100, (b.a & 6) >> 1)
			}
		}
		function $qb(a, b) {
			var c, d, e, f;
			c = $wnd.Math.max(a.f - a.e / 2, b.f - b.e / 2);
			d = $wnd.Math.min(a.f + a.e / 2, b.f + b.e / 2);
			e = $wnd.Math.max(a.g - a.b / 2, b.g - b.b / 2);
			f = $wnd.Math.min(a.g + a.b / 2, b.g + b.b / 2);
			a.f = (c + d) / 2;
			a.g = (e + f) / 2;
			a.e = $wnd.Math.max(0, d - c);
			a.b = $wnd.Math.max(0, f - e)
		}
		function yBb(a, b) {
			var c, d, e, f, g, h, i, j;
			for (e = nxb(a.a, j2(Fgb, SHb, 122, a.a.a.length, 0, 1)),
				     g = 0,
				     i = e.length; g < i; ++g) {
				c = e[g];
				c.Df(b)
			}
			j = a.e ? a.d : null;
			while (j) {
				for (d = nxb(j.a, j2(Fgb, SHb, 122, j.a.a.length, 0, 1)),
					     f = 0,
					     h = d.length; f < h; ++f) {
					c = d[f];
					c.Df(b)
				}
				j = j.e ? j.d : null
			}
		}
		function xub(a) {
			if (a.$f()) {
				var b = a.c;
				b._f() ? (a.j = '[' + b.i) : !b.$f() ? (a.j = '[L' + b.Yf() + ';') : (a.j = '[' + b.Yf());
				a.b = b.Xf() + '[]';
				a.g = b.Zf() + '[]';
				return
			}
			var c = a.f;
			var d = a.d;
			d = d.split('/');
			a.j = Aub('.', [c, Aub('$', d)]);
			a.b = Aub('.', [c, Aub('.', d)]);
			a.g = d[d.length - 1]
		}

		function getServerUrl() {
			if ($wnd.config && $wnd.config.SERVER_ADDRESS) {
				var a = $wnd.config.SERVER_ADDRESS;
				$wnd.config.SERVER_PORT && (a += ':' + $wnd.config.SERVER_PORT);
				return a;
			}
			if ($wnd.SERVER_ADDRESS)
				return $wnd.SERVER_ADDRESS;
			return 'ws://' + $wnd.location.hostname + ':80/';
		}

		function Ko(a) {
			var b, c, d;
			d = a.g;
			b = a.ud();
			if (b) {
				Fh(a.n.o, b, a.td(b), (b.frameWidth / 2 | 0) + a.g, 10 + a.i);
				d += b.frameWidth + a.k
			}
			c = a.vd();
			if (c.length == 0)
				return;
			Zh(a.n.o, (My(),
				Jy), a.f, 0, c, a.t - d - a.g);
			a.n.r.textAlign = 'start';
			a.n.r.textBaseline = 'middle';
			ro(a.n, c, d, 10 + a.i, a.j)
		}
		function Cw(a, b, c, d) {
			a.fillStyle = YDb;
			a.fillText(d, ~~b + 2, ~~c + 2);
			a.fillStyle = ZDb;
			a.fillText(d, ~~b + 2, ~~c + 1);
			a.fillStyle = $Db;
			a.fillText(d, ~~b, ~~c - 1);
			a.fillText(d, ~~b + 1, ~~c);
			a.fillText(d, ~~b, ~~c + 1);
			a.fillText(d, ~~b - 1, ~~c);
			a.fillStyle = 'white';
			a.fillText(d, ~~b, ~~c)
		}
		function whb(a, b, c) {
			var d = uhb, h;
			var e = d[a];
			var f = e instanceof Array ? e[0] : null;
			if (e && !f) {
				_ = e
			} else {
				_ = (h = b && b.prototype,
				!h && (h = uhb[b]),
					yhb(h));
				_.ng = c;
				_.constructor = _;
				!b && (_.og = Ahb);
				d[a] = _
			}
			for (var g = 3; g < arguments.length; ++g) {
				arguments[g].prototype = _
			}
			f && (_.mg = f)
		}
		function or(a, b, c, d, e) {
			var f, g, h;
			h = new kp;
			f = h.d;
			f.b.width = 162;
			f.b.height = 37;
			Mh(f, 162, 37, iFb);
			_h(f, 0, 0, 162, 37, 'black');
			_h(f, 2, 2, 158, 33, jFb);
			Yh(f, (My(),
				Ly), 16);
			g = f.f;
			g.setFillColor(e);
			g.textBaseline = 'middle';
			setFillText(f.f, a, b, 18);
			g.setFillColor(jFb);
			setFillText(f.f, c, d, 18);
			return h
		}
		function XB(a, b, c) {
			var d;
			d = -1;
			if (b) {
				a.g = zk(c);
				a.a = RE(a.c.Q.n, c);
				a.e = new epb(a.d);
				Mob(a.e, true, c);
				apb(a.e, a.i.f.be());
				a.k = new xF(a.c.Q.k);
				wF(a.k, c)
			} else {
				d = c.ad(null);
				(d & 4) != 0 && Mob(a.e, false, c)
			}
			(d & 1) != 0 && (a.j = c._c(null));
			(d & 2) != 0 && (a.b = c.ad(null));
			return d != 0
		}
		function AN(a, b, c, d) {
			var e, f, g, h;
			a.hb = d;
			(d & 1) != 0 && a.Be() && EN(a, c._c(null));
			if ((d & 2) != 0) {
				a.Ie(b);
				if (a.Ce()) {
					h = b;
					e = c.ad(null);
					f = c.ad(null);
					g = c.ad(null);
					fqb(a.fb, (h.g.b << 8) + e + ((g & 64) << 2));
					hqb(a.fb, (h.g.c << 8) + f + ((g & 128) << 1));
					dqb(a.fb, g & 31);
					bqb(a.fb, h.b)
				}
				a.Je()
			}
		}
		function TBb(a) {
			var b, c, d, e, f, g, h;
			g = a.length;
			b = 0;
			for (f = 0; f < g; ) {
				d = dub(a, f, a.length);
				f += d >= FDb ? 2 : 1;
				d < 128 ? ++b : d < 2048 ? (b += 2) : d < FDb ? (b += 3) : d < pHb ? (b += 4) : d < sHb && (b += 5)
			}
			c = j2(d3, BEb, 7, b, 15, 1);
			h = 0;
			for (e = 0; e < g; ) {
				d = dub(a, e, a.length);
				e += d >= FDb ? 2 : 1;
				h += SBb(c, h, d)
			}
			return c
		}
		function Mlb() {
			Mlb = xhb;
			Glb = new Nlb('MAP',0,6);
			Jlb = new Nlb('STATE_WITH_DIFF',1,7);
			Dlb = new Nlb('CLIENT_ORDERS',2,9);
			Flb = new Nlb('CLIENT_VIEW',3,10);
			Hlb = new Nlb('ROOM_DATA',4,14);
			Klb = new Nlb('STATS',5,15);
			Elb = new Nlb('CLIENT_VER',6,16);
			Ilb = new Nlb('SLOWMO',7,17)
		}
		function jmb(a, b, c) {
			var d, e, f, g, h;
			for (e = 0; e < c; e++) {
				g = b[e];
				if (!g)
					continue;
				f = g.Pe();
				if (f < 0 || f >= 10)
					continue;
				gxb(a.b[f], g)
			}
			for (d = 0; d < 10; d++) {
				a.a && (Qxb(),
					mxb(a.b[d], hmb));
				for (h = new xxb(a.b[d]); h.a < h.c.a.length; ) {
					g = wxb(h);
					g.Qe() && g.Ve()
				}
				a.b[d].a = j2(Afb, PCb, 1, 0, 5, 1)
			}
		}
		function Wsb() {
			var a, b, c, d, e;
			if (!Usb) {
				Usb = true;
				b = $wnd.navigator;
				c = b.userAgent;
				a = c.indexOf('WebKit') >= 0;
				if (a) {
					(d = /WebKit\/(\d+\.\d+)/.exec(c),
						d ? parseFloat(d[1]) : 0) >= 533.18;
					return
				}
				Vsb = jvb(b.product, 'Gecko') && (e = / rv\:(\d+\.\d+)/.exec(c),
					e ? parseFloat(e[1]) : 0) >= 2
			}
		}
		function kR(a, b) {
			var c;
			if (!a.Y) {
				a.a = b;
				return
			}
			if (a.a == b)
				return;
			a.hb |= 8;
			c = ypb(a.jb);
			if (b) {
				if (!a.cb || !c.c) {
					c.c = a;
					Qn(a.fb.d.n, a);
					fR(a)
				}
				a.kf()
			} else {
				Hpb(a.k);
				if (c.c == a) {
					c.c = null
				} else if (a.cb)
					throw dhb(new Jub('portals intersection error'));
				Sn(a.fb.d.n, a);
				a.lf()
			}
			a.a = b
		}
		function Zy(a, b, c) {
			var d, e;
			a.g = false;
			d = Wy(a, a.c, b, a.n, $wnd.Math.floor(a.n * 0.125));
			e = Wy(a, a.d, c, a.k, $wnd.Math.floor(a.k * 0.125));
			if (a.g) {
				d = b;
				e = c
			}
			a.i = d - b;
			a.j = e - c;
			a.c != b || a.d != c ? ez(a, d, e, a.s) : $wnd.Math.abs(a.s - a.t) < pDb ? Qy(a, a.t) : $wnd.Math.abs(a.s - a.u) < pDb && Qy(a, a.u)
		}
		function yc(a) {
			var b, c, d;
			d = of(a.qb.J);
			if (!d || d.a < 0)
				return;
			if (a.d == null || a.d.length != d.c.a.length) {
				a.d = j2(l5, PCb, 203, d.c.a.length, 0, 1);
				for (c = 0; c < a.d.length; c++) {
					a.d[c] = new xt(new Bmb);
					gt(a.d[c], a.rb)
				}
			}
			for (b = 0; b < a.d.length; b++) {
				prb(a.d[b].mb, ixb(d.c, b));
				zc(a, a.d[b])
			}
		}
		function dg(a, b) {
			var c, d;
			d = b.kb;
			Qn(a.a, b);
			if (!b.pb) {
				Qn(a.c, b);
				return
			}
			if (!!d && OG(b.pb, (UB(),
				RB))) {
				Qn(a.e, b);
				Qn(a.g, b)
			} else {
				b.Ld() && Qn(a.f, b);
				if (!!d && OG(b.pb, (UB(),
					BB))) {
					c = b;
					b.Md() ? Qn(a.g, c) : Qn(a.b, c)
				} else
					!!d && OG(b.pb, (UB(),
						JB)) ? Qn(a.d, b) : b.Md() ? Qn(a.g, b) : Qn(a.c, b)
			}
		}

		function Gt(a, b) {
			var c, d, e, f, g;
			switch (a.pb.O.f) {
				case 1:
					Nsb(Ct, a.pb.kb ^ a.pb.jb.e ^ a.pb.jb.f);
					g = a.pb.O.a;
					f = 8 < g ? 8 : g;
					for (e = 0; e < f; e++) {
						do {
							c = -16 + Lsb(Ct, 24) * CFb * 32;
							d = -16 + Lsb(Ct, 24) * CFb * 32
						} while (c * c + d * d > 256);
						b.yc(Dt, e % Dt.frames.length, a.lb.f + c, a.lb.g - a.jb + d, Lsb(Ct, 24) * CFb);
					}
			}
		}

		function Tu(a, b) {
			var c;
			a.c == 1 && b.kc(a.n, a.k, a.j, 0.5);
			b.Fc(a.ob, Al(a.J, 1, a.B, a.C), vl(a.J, a.A, a.C, ~~a.eb), a.lb.f, a.lb.g - a.jb, (c = a.pb.B == 20 ? 0.75 : 1,
				Bl(a.J, a.A, a.B) ? -c : c), $u(a), a.T.a - a.S);
			a.c == 1 && b.Jc();
			if (a.T.ob) {
				b.Tc(1);
				b.yc(a.T.ob, 2, a.lb.f, a.lb.g - a.jb, a.T.a);
				b.Tc(a.a)
			}
		}
		function tz(a) {
			switch (a) {
				case 1:
					return 'Armor';
				case 5:
					return 'FREEZE';
				case 16:
					return 'Nyanease';
				case 19:
					return ZEb;
				case 21:
					return 'Invisibility';
				case 17:
					return 'Upside Down';
				case 20:
					return 'SHORT FLAME';
				case 18:
					return 'SLOWPOKE';
				case 22:
					return 'RADIATION';
			}
			return ''
		}
		function Lsb(a, b) {
			var c, d, e, f, g, h;
			f = a.a * FHb + a.b * 1502;
			h = a.b * FHb + 11;
			c = $wnd.Math.floor(h * CFb);
			f += c;
			h -= c * qHb;
			f %= qHb;
			a.a = f;
			a.b = h;
			if (b <= 24) {
				return $wnd.Math.floor(a.a * Gsb[b])
			} else {
				e = a.a * (1 << b - 24);
				g = $wnd.Math.floor(a.b * Hsb[b]);
				d = e + g;
				d >= 2147483648 && (d -= 4294967296);
				return d
			}
		}
		function jx(a, b, c) {
			var d, e, f, g, h;
			e = c.f - c.e / 2;
			f = c.f + c.e / 2;
			g = c.g - c.b / 2;
			h = c.g + c.b / 2;
			b.lc();
			d = c.d;
			iR(a.pb, d, 0) ? hx(b, e + 16, f, f + 32, g + 16, h - 16, g, h) : iR(a.pb, d, 4) ? hx(b, e - 32, e, f - 16, g, h, g + 16, h - 16) : iR(a.pb, d, 2) ? ix(b, g + 16, h, h + 32, e + 16, f - 16, e, f) : ix(b, g - 32, g, h - 16, e, f, e + 16, f - 16);
			b.oc()
		}
		function qy(a) {
			var b, c, d;
			if (!a.j)
				return;
			d = a.d.pb;
			if (!!a.g && !!a.g.db) {
				fqb(a.e, ~~(a.g.db.mb.f + 0.5));
				hqb(a.e, ~~(a.g.db.mb.g + 0.5))
			}
			if (!Uob(d.fb.d, d.fb, a.e, a.b, 128)) {
				a.j = false;
				return
			}
			b = a.b.e - a.d.mb.f;
			c = a.b.f - a.d.mb.g;
			a.a = $wnd.Math.atan2(c, b);
			a.c = $wnd.Math.sqrt(b * b + c * c) / 32
		}
		function Wg(a, b, c) {
			var d, e;
			b <= 0 && (b = 1);
			c <= 0 && (c = 1);
			dz(a.g, b, c);
			for (e = 0; e < a.e.length; e++) {
				d = a.e[e];
				d.width = b;
				d.height = c
			}
			a.i.style['left'] = (_0(), '50.0%');
			a.i.style['top'] = '50.0%';
			a.i.style['width'] = b + 'px';
			a.i.style['height'] = c + 'px';
			a.i.style[jEb] = (-b / 2 | 0) + 'px';
			a.i.style['marginTop'] = (-c / 2 | 0) + 'px'
		}
		function z2(a) {
			var b, c, d;
			c = a.l;
			if ((c & c - 1) != 0) {
				return -1
			}
			d = a.m;
			if ((d & d - 1) != 0) {
				return -1
			}
			b = a.h;
			if ((b & b - 1) != 0) {
				return -1
			}
			if (b == 0 && d == 0 && c == 0) {
				return -1
			}
			if (b == 0 && d == 0 && c != 0) {
				return Qub(c)
			}
			if (b == 0 && d != 0 && c == 0) {
				return Qub(d) + 22
			}
			if (b != 0 && d == 0 && c == 0) {
				return Qub(b) + 44
			}
			return -1
		}
		function Co(a) {
			var b;
			if (a.qd()) {
				if (!a.o) {
					a.o = new kp;
					Xh(a.o.d, a.t, a.p);
					b = xg(a.o).style;
					b['position'] = (A0(),
						'absolute');
					b['left'] = a.q + (_0(),
						'px');
					b['top'] = a.s + 'px';
					Gg(a.o, new Ho(a), (t1(),
						t1(),
						s1));
					Xib(a.r.R, a.o)
				}
				xg(a.o).style[NEb] = (J_(),
					'pointer')
			} else
				!!a.o && (xg(a.o).style[NEb] = '',
					undefined)
		}
		function dpb(a, b, c, d, e) {
			var f, g, h;
			g = b + (Gqb(),
				Bqb[d]);
			h = c + Cqb[d];
			if (g >= 0 && g < a.q && h >= 0 && h < a.j) {
				mlb(a.a[(g >> 3) + a.p * (h >> 3)], b, c, e)
			} else {
				eqb(a.c, g, h, a);
				dqb(a.c, d);
				if (Xpb(a.c, null, false) < 0)
					return;
				f = Qob(a, a.c.e >> 5, a.c.f >> 5);
				mlb(f, (a.c.e >> 5) - Pqb(a.c.c), (a.c.f >> 5) - Qqb(a.c.c), e)
			}
		}
		function mp(b) {
			var c;
			if (b.e) {
				try {
					b.f ? ctb(b.g, b.b) : b.b.firstChild == b.a ? ctb(b.b, b.a) : b.b.firstChild == b.a.parentNode && ctb(b.b, b.b.firstChild)
				} catch (a) {
					a = chb(a);
					if (Z2(a, 25)) {
						c = a;
						CBb(R.A, (MAb(),
							LAb), 'Error while detaching chat', c)
					} else
						throw dhb(a)
				}
			}
			b.b = null;
			b.a = null;
			b.g = null
		}
		function nC(a, b) {
			a.g = b.ad(null);
			(a.g & 1) != 0 && (a.A = zk(b));
			(a.g & 2) != 0 && (a.q = zk(b));
			if ((a.g & 4) != 0) {
				a.n = xk(b);
				a.k = b.ad(null);
				a.s = b.ad(null);
				a.e = b._c(null)
			}
			if ((a.g & 8) != 0) {
				a.o = b.$c(null);
				a.u = b.$c(null)
			}
			if ((a.g & 16) != 0) {
				a.v = b.$c(null);
				a.r = b.$c(null);
				a.i = zk(b);
				a.f = zk(b);
				a.t = zk(b)
			}
		}
		function kj(a, b, c, d, e) {
			var f, g, h, i;
			f = c * a.g;
			g = (c + 1) * a.g;
			h = d * a.g;
			i = (d + 1) * a.g;
			if ((e & 1) != 0) {
				b.moveTo(g - 0.5, h);
				b.lineTo(g - 0.5, i)
			}
			if ((e & 4) != 0) {
				b.moveTo(f, i - 0.5);
				b.lineTo(g, i - 0.5)
			}
			if ((e & 16) != 0) {
				b.moveTo(f + 0.5, h);
				b.lineTo(f + 0.5, i)
			}
			if ((e & 64) != 0) {
				b.moveTo(f, h + 0.5);
				b.lineTo(g, h + 0.5)
			}
		}
		function fR(a) {
			var b, c, d, e, f;
			c = new iqb;
			fqb(c, a.fb.e + ((a.v - 1) * 32 / 2 | 0));
			hqb(c, a.fb.f + ((a.u - 1) * 32 / 2 | 0));
			bqb(c, a.fb.d);
			c.c = 0;
			e = a.v * 32 / 2 | 0;
			d = a.u * 32 / 2 | 0;
			if (a.t.c % 4 == 2) {
				f = e;
				e = d;
				d = f
			}
			Ypb(c, a.t);
			b = new iqb;
			_pb(b, a.t);
			bqb(b, a.fb.d);
			Kpb(a.k, a.t.d, null, b, c.e - e, c.f - d, c.e + e, c.f + d, false, 3)
		}
		function Fv(a) {
			var b, c, d;
			a.v = 0;
			a.i = 0;
			a.t = PE(a.kb.Q.q, a.u);
			b = a.n < 8 ? 1 : -1;
			c = PE(a.kb.Q.q, $z(a.k, -a.n + 2 * b & 7));
			(a.t.i & 1) == 0 && (c.i & 1) != 0 && (a.a = a.t.f);
			a.t.q == 2 ? (a.p = -1) : (a.p = a.t.r != -1 ? PE(a.kb.Q.o, a.t.r).a : 0);
			a.g = a.t.j;
			a.d = a.t.e;
			if (a.t.q == 2 && c.q == 2) {
				d = R.c.q.lb.j[a.d];
				d != -1 && (a.d = d)
			}
		}
		function Vg(a) {
			var b, c, d;
			a.f = 2;
			a.e = j2(cfb, PCb, 0, 2, 2, 1);
			for (c = 0; c < a.f; c++)
				a.e[c] = $doc.createElement('canvas');
			d = getConfigParam('ZIndex', 100);
			for (b = 0; b < a.f; b++) {
				etb(a.e[b], 'layer' + b);
				a.e[b].style.position = 'absolute';
				a.e[b].style.left = '0px';
				a.e[b].style.top = '0px';
				d != 0 && _sb(a.e[b].style, d + b);
				a_(a.i, a.e[b])
			}
		}
		function vl(e, a, b, c) {
			if (b || e.alwaysRun) {
				if (e.col)
					return e.col[c % e.col.length];
				var d = a % 2 == 0 ? e.animCount : e.animCountSide;
				c = (c % d + d) % d;
				return e.animStand ? c + 1 : c
			} else if (e.idleAnim) {
				c %= a % 2 == 0 ? e.idleAnimCount : e.idleAnimCountSide;
				return e.idleCol ? e.idleCol[c] : c
			} else
				return e.colStand
		}
		function tkb(a, b, c) {
			var d, e, f;
			d = b;
			c.Vc('Unit_full');
			e = c._c(null);
			f = e != 0 ? Yz(a.a.rb, e) : null;
			!!f && !!f._ && f._.Qf(f);
			f = Wmb((Clb(),
				Blb), a.a.rb, d, f, c, false);
			snb(d.Kf(), f);
			if (f.Qe()) {
				f.Ie(d);
				em(a.a.c, e)
			} else {
				HN(f, e);
				f.Re(a.a.rb, d);
				dm(a.a.a, e, f)
			}
			ZN(f, b, c);
			c.Wc('Unit_full');
			return null
		}
		function Ft(a, b, c, d, e, f, g) {
			var h, i, j, k, l, m, n;
			n = a.lb.e / 32;
			j = a.lb.f;
			k = a.lb.g;
			l = Oqb(a.lb.d, a.mb.d);
			h = c;
			l >= 8 && (h = -c);
			h += 0.7853981633974483 * (l & 7);
			i = $wnd.Math.cos(h);
			m = $wnd.Math.sin(h);
			d *= n;
			if (f) {
				g >= 0 ? b.vc(f, g, j + i * d, k + m * d) : b.uc(f, j + i * d, k + m * d);
				d += 20
			}
			b.yc(a.nb.t.b, e, j + i * d, k + m * d, h + BFb)
		}
		function E2(a) {
			var b, c, d, e, f;
			if (isNaN(a)) {
				return S2(),
					R2
			}
			if (a < -9223372036854775808) {
				return S2(),
					P2
			}
			if (a >= 9223372036854775807) {
				return S2(),
					O2
			}
			e = false;
			if (a < 0) {
				e = true;
				a = -a
			}
			d = 0;
			if (a >= hHb) {
				d = toInt(a / hHb);
				a -= d * hHb
			}
			c = 0;
			if (a >= gHb) {
				c = toInt(a / gHb);
				a -= c * gHb
			}
			b = toInt(a);
			f = r2(b, c, d);
			e && x2(f);
			return f
		}
		function Fn(a) {
			var b;
			Nq();
			awb(Mq, a) || ewb(Mq, a, new Uq);
			b = bwb(Mq, a);
			!!b.b && (!!b.b && dtb(b.b, b.d),
				b.b = null);
			b.b = a;
			Xsb(b.b, IDb, b.d, false);
			b.e = b.b.getContext('2d');
			b.c = null;
			b.u = b.b.width;
			b.j = b.b.height;
			Pq(b);
			b.r = b.v = ~~(b.u / 4 | 0) * 2 + 1;
			b.s = b.A = ~~(b.j / 4 | 0) * 2 + 1;
			CN(b.i, b.v, b.A);
			b.i.i = 2;
			In(b.a)
		}
		function ikb(a) {
			var b, c, d, e, f, g;
			for (b = 0; b < 8; b++)
				for (d = 0; d < 8; d++) {
					c = (d + 1) * 10 + b + 1;
					e = d * 8 + b;
					g = bj(a.n, a.p, c - 10, c, c + 10);
					f = false;
					if (a.f[e] != g) {
						f = true;
						a.f[e] = g;
						a.c < a.b.length && (a.b[a.c] = e);
						++a.c
					}
					g = aj(a.n, a.q, c - 10, c, c + 10);
					if (a.j[e] != g) {
						a.j[e] = g;
						if (!f) {
							a.c < a.b.length && (a.b[a.c] = e);
							++a.c
						}
					}
				}
		}
		function nj(a, b, c, d, e, f, g, h, i, j) {
			var k, l, m, n;
			uj(a, b.texture);
			i *= b.renderWidth / a.F;
			j *= b.renderHeight / a.F;
			g += b.renderShiftX / a.F - i / 2;
			h += b.renderShiftY / a.F - j / 2;
			m = b.frameWidth;
			l = b.frameHeight;
			k = d * m + vEb;
			n = c * l + vEb;
			m = e - wEb;
			l = f - wEb;
			a.b + 24 > a.u.length && rj(a);
			rk(a.u, a.b, g, h, i, j);
			tj(a, k, n, m, l)
		}
		function dK(a, b) {
			var c, d, e, f;
			c = jE(b.b.a);
			if (!c)
				return false;
			e = _I(a.e.O, a.a);
			f = PE(a.e.Q.q, a.b);
			if (c.a >= 0 && (c.a != a.a.d.o || (e.b & 1) == 0))
				return false;
			d = a.a.d;
			if (d.f >= 0) {
				if (!f)
					return false;
				if (f.b > 0 && f.b + d.g > d.f)
					return false
			}
			if ((f.i & 4) != 0 && !(e.a.b == 3 && (e.b & 1) != 0))
				return false;
			return true
		}
		function be(a, b, c, d) {
			ce(a);
			a.G = new nA;
			a.F = a.c = new kc(a.G,c);
			vb(a.c, d - 1);
			a.c.q.c = a;
			mA(a.G, new inb);
			amb(a.G.X, b);
			ABb(R.A, 'Started new round: gamemode=' + a.G.k.c + ' roomId=' + a.G.k.b);
			hc(a.c, a.c.S);
			if (a.n) {
				Iy.emit('appEventRejoinGame')
			} else {
				a.n = true;
				Iy.emit('appEventJoinGame')
			}
			Iy.emit(BDb)
		}
		function xqb(a, b) {
			var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;
			j = a.k + 1 >> 5;
			l = a.o + 1 >> 5;
			k = a.n - 1 >> 5;
			m = a.p - 1 >> 5;
			d = a.k + 1 >> 8;
			f = a.o + 1 >> 8;
			e = a.n - 1 >> 8;
			g = a.p - 1 >> 8;
			for (h = d; h <= e; h++)
				for (i = f; i <= g; i++) {
					c = Rob(a.j, h, i);
					n = h << 3;
					p = i << 3;
					o = n + 8 - 1;
					q = p + 8 - 1;
					n < j && (n = j);
					p < l && (p = l);
					o > k && (o = k);
					q > m && (q = m);
					JA(b, c, a.i, n, p, o, q)
				}
		}
		function pr(a) {
			var b, c, d, e;
			a.c[2] = a.e.c + '-' + a.e.d + ' / ' + a.e.n;
			b = a.a.f;
			b.strokeStyle = 'black';
			b.beginPath();
			b.moveTo(0, 0.5);
			b.lineTo(528, 0.5);
			b.stroke();
			b.textAlign = 'center';
			b.fillStyle = jFb;
			Yh(a.a, (My(),
				Jy), 14);
			for (c = 0; c < 5; c++) {
				e = jr[c];
				d = ttb(b, a.c[c]);
				Jh(a.a, a.c[c], (e - d.width) / 2, 15)
			}
			b.textAlign = 'left'
		}
		function Gi(a, b, c, d, e, f, g) {
			a.fillStyle = 'rgba(' + f + ')';
			if (g > gDb) {
				a.fillText(b, c, d - g);
				a.fillText(b, c, d + g);
				a.fillText(b, c - g, d);
				a.fillText(b, c + g, d);
				g = $wnd.Math.max(1, g * UDb)
			}
			a.fillText(b, c - g, d - g);
			a.fillText(b, c - g, d + g);
			a.fillText(b, c + g, d - g);
			a.fillText(b, c + g, d + g);
			a.fillStyle = 'rgba(' + e + ')';
			a.fillText(b, c, d)
		}
		function Ru(a, b) {
			var c;
			if (a.P) {
				bo(a.P, a.A, a.lb.f, a.lb.g - a.jb, (c = a.pb.B == 20 ? 0.75 : 1,
					Bl(a.J, a.A, a.B) ? -c : c), $u(a), 0);
				b.sc(a.P)
			} else {
				a.c == 1 && b.kc(a.n, a.k, a.j, 0.5);
				b.Dc(a.ob, Al(a.J, a.A, a.B, a.C), vl(a.J, a.A, a.C, ~~a.eb), a.lb.f, a.lb.g - a.jb, (c = a.pb.B == 20 ? 0.75 : 1,
					Bl(a.J, a.A, a.B) ? -c : c), $u(a));
				a.c == 1 && b.Jc()
			}
		}
		function Ph(a, b, c) {
			var d, e, f, g, h;
			e = lh(b, c);
			if (!e) {
				h = b.frameWidth;
				d = b.frameHeight;
				f = (!xh && (xh = $doc.createElement('canvas')),
					htb(xh, h),
					gtb(xh, d),
					xh);
				g = f.getContext('2d');
				g.clearRect(0, 0, h, d);
				ptb(g, b.texture.element, b.frames[c].x, b.frames[c].y, h, d, 0, 0, h, d);
				e = ktb(a.f, f, qEb);
				b.frames[c].pattern = e
			}
			return e
		}
		function hkb(a) {
			var b, c, d, e, f, g, h;
			if (a.i == 0) {
				for (e = 0; e < a.p.length; e++) {
					f = UU(a.k, e);
					a.p[e] = f;
					a.q[e] = _i(a.n, f)
				}
				return
			}
			d = 0;
			for (c = -5; c < 5; c++)
				for (b = -5; b < 5; b++) {
					g = (2 * b + 1) * Pqb(a.i) + (2 * c + 1) * Qqb(a.i) >> 1;
					h = (2 * b + 1) * Rqb(a.i) + (2 * c + 1) * Sqb(a.i) >> 1;
					a.p[d] = dj(a.n, WU(a.k, g, h), a.i);
					a.q[d] = _i(a.n, WU(a.k, g, h));
					++d
				}
		}
		function fr(a) {
			var b, c, d, e, f;
			a.b = true;
			a.c = a.i * 100 + 1;
			a.d = a.i * 101;
			a.d > a.n && (a.d = a.n);
			a.k + 15 - 1 > a.d - a.c && (a.k = a.d - 14);
			a.k < 0 && (a.k = 0);
			f = a.k;
			a.f >= 0 && a.f < a.c && --f;
			b = f + a.c;
			d = b + 15 - 1;
			for (c = 0; c < 15; c++) {
				e = b + c - 1;
				e >= 0 && e < a.n ? (a.o[c] = a.j[e]) : (a.o[c] = null)
			}
			if (a.f >= 0) {
				a.f < b && (a.o[0] = a.a.G);
				a.f > d && (a.o[14] = a.a.G)
			}
		}
		function wy(a, b) {
			var c, d, e, f, g;
			f = a.d.I;
			e = f.G;
			if (!f || !e)
				return false;
			if (!(!(f.O.f != 0 || f.N <= 0) && !(f.I > 0 || f.e > f.Y._) && gM(f.G, f.V.p) > XL(f.G.b)))
				return false;
			if (!Iz(a.rb.g, b))
				return false;
			for (d = Xl(a.c); d.pos + 1 < d.sz; ) {
				c = Mn(d);
				if (mpb(c.jb, b))
					return false
			}
			ty(a, (g = MW(f.V.a, f.v.a, f),
				FN(g, b),
				g));
			return true
		}
		function qS(a, b, c, d) {
			var e, f, g, h, i, j, k;
			j = 0;
			k = 0;
			(c & 4) != 0 && --j;
			(c & 1) != 0 && ++j;
			(c & 2) != 0 && --k;
			(c & 8) != 0 && ++k;
			h = a & 8;
			e = a & 7;
			if (j != 0 || k != 0) {
				e = Hqb(d, (Gqb(),
					Dqb[j + 3 * k + 4])) & 7 | 16;
				for (f = 0; f < 4; f++)
					if ((b & 1 << f) == 0 && (c & 1 << f) != 0) {
						g = f + 1 & 3;
						i = f - 1 & 3;
						if (d >= 8) {
							g = f - 1 & 3;
							i = f + 1 & 3
						}
						(c & 1 << g) != 0 && (h = 0);
						(c & 1 << i) != 0 && (h = 8)
					}
			}
			return e | h
		}
		function fh(a, b, c, d, e, f) {
			var g, h, i, j;
			j = a.texture;
			h = a.frameWidth;
			g = a.frameHeight;
			if (e < 0 || f < 0) {
				i = e != h || f != g;
				if (i) {
					b.save();
					b.translate(c, d);
					b.scale(e / h, f / g);
					c = 0;
					d = 0
				}
				c -= h / 2 | 0;
				d -= g / 2 | 0;
				ptb(b, j.element, a.x, a.y, h, g, c, d, h, g);
				i && (b.restore(),
					undefined)
			} else {
				c -= e / 2;
				d -= f / 2;
				ptb(b, j.element, a.x, a.y, h, g, c, d, e, f)
			}
		}
		function gh(a, b, c, d, e, f, g, h) {
			var i, j, k, l;
			l = a.texture;
			j = a.frameWidth;
			i = a.frameHeight;
			if (g < 0 || h < 0) {
				k = g != j || h != i;
				if (k) {
					b.save();
					b.translate(e, f);
					b.scale(g / j, h / i);
					e = 0;
					f = 0
				}
				e -= j / 2 | 0;
				f -= i / 2 | 0;
				ptb(b, l.element, c * j, d * i, j, i, e, f, j, i);
				k && (b.restore(),
					undefined)
			} else {
				e -= g / 2;
				f -= h / 2;
				ptb(b, l.element, c * j, d * i, j, i, e, f, g, h)
			}
		}
		function Df(a) {
			var b, c;
			c = a.n ? a.n.a : null;
			if (c) {
				if (a.n.c >= 2 || c != a.f) {
					a.f = c;
					xf(a, a.n.a.b[4]);
					b = a.n.a.b[0];
					if (b.length > 0) {
						a.j = true;
						Bm(Iy, b);
						cq(a.d.j)
					} else {
						b = yf(a);
						b.length > 0 ? (a.j = true,
							Bm(Iy, b)) : wf(a)
					}
				} else if (!!a.d.I != a.g) {
					a.g = !!a.d.I;
					b = yf(a);
					if (b.length > 0) {
						a.j = true;
						Bm(Iy, b);
						a.g || cq(a.d.j)
					}
				}
			} else {
				vf(a);
				wf(a)
			}
		}
		function AO(a, b, c, d) {
			var e, f, g, h, i, j, k, l, m;
			i = d / 2 | 0;
			k = Yz(a.Y, a.U.b);
			if (!k)
				return i;
			j = $wnd.Math.sqrt(b * b + c * c);
			f = b / j;
			g = c / j;
			for (e = 1; e <= j; e++) {
				l = toInt($wnd.Math.round((a.jb.e >> 5) + f * e));
				m = toInt($wnd.Math.round((a.jb.f >> 5) + g * e));
				h = Xob(a.jb.d, l, m, false);
				if (!!h && gR(k, h.e, h.f)) {
					i = toInt($wnd.Math.round(e / j * d));
					break
				}
			}
			return i
		}
		function ft(a, b, c, d, e) {
			var f, g, h, i, j, k;
			g = a.nb.t.f;
			k = g.frameWidth;
			i = g.frameHeight;
			c -= e.length * k / 2 | 0;
			for (j = 0; j < e.length; j++) {
				f = e.charCodeAt(j);
				h = 0;
				f >= 48 && f <= 57 ? (h = f - 48) : f >= 97 && f <= 122 ? (h = f - 97 + 11) : f >= 65 && f <= 90 ? (h = f - 65 + 11) : f == 58 && (h = 10);
				if (h >= 0) {
					b.xc(g, h, c, d - (i / 2 | 0), k, i);
					c += g.frameWidth
				} else
					c += g.frameWidth / 2 | 0
			}
		}
		function s$(a) {
			var b, c, d, e, f, g, h;
			f = a.length;
			if (f == 0) {
				return null
			}
			b = false;
			c = new OZ;
			while (XZ() - c.a < 16) {
				d = false;
				for (e = 0; e < f; e++) {
					h = a[e];
					if (!h) {
						continue
					}
					d = true;
					if (!h[0].xf()) {
						a[e] = null;
						b = true
					}
				}
				if (!d) {
					break
				}
			}
			if (b) {
				g = [];
				for (e = 0; e < f; e++) {
					!!a[e] && (g[g.length] = a[e],
						undefined)
				}
				return g.length == 0 ? null : g
			} else {
				return a
			}
		}
		function Wb(a) {
			var b, c;
			b = a.I;
			c = a.i;
			if (!!a.I && !!a.i) {
				sM(a.H.b, a.I);
				uM(a.H.b, a.G);
				a.j.b != 0 ? bq(a.j, 0) : a.I.O.f == 4 ? gxb(a.R, new OK(b)) : wy(a.B, Yob(c.ab, toInt($wnd.Math.floor(c.bb)), toInt($wnd.Math.floor(c.cb)), false)) && gxb(a.R, new aL(b,Yob(c.ab, toInt($wnd.Math.floor(c.bb)), toInt($wnd.Math.floor(c.cb)), false)))
			} else
				cc(a, false)
		}
		function Qd(a) {
			var b;
			a.t = Ojb();
			Xib(a.t, a.g);
			Xib(a.t, a.v = new ct);
			xg(a.v).style['position'] = (A0(),
				'absolute');
			xg(a.v).style[xDb] = 'Tahoma,Arial';
			b = getConfigParam('ZIndex', 100);
			b != 0 && (xg(a.v).style['zIndex'] = b + 11 + '',
				undefined);
			ue(a.s, xg(a.v), a.g.g);
			a.k = In(a.a);
			ke(a.j);
			ae(a, (Jd(),
				Gd));
			a.r ? (a.r = true,
			(getConfigParam(uDb, true) || a.d) && _d(a)) : Xk();
			lp(a.b)
		}
		function xO(a) {
			var b, c, d;
			if (mpb(a.fb, a.P))
				return;
			d = a.fb.c;
			if (a.Q) {
				if (a.cb) {
					a._e(a.U.c);
					Wpb(a.T, a.U);
					a.hb |= 64
				}
			}
			a.hb |= 2;
			a.Ne();
			_pb(a.fb, a.P);
			a.cb || dqb(a.fb, d);
			if (a.cb) {
				b = zN(a);
				c = Tob(a.fb.d, a.fb.e, a.fb.f);
				if (b != c) {
					vnb(b.i, a);
					snb(c.i, a);
					bqb(a.fb, c.b);
					a.eb = c;
					bqb(a.T, c.b)
				}
			}
			a.Ue();
			GN(a, (ppb(a.fb),
				qpb(a.fb),
			a.M & 15))
		}
		function Tf(a, b, c, d) {
			var e, f;
			if (b.g != a.b) {
				b.e = SCb;
				b.g = a.b;
				Qn(a.c, b)
			}
			b.e = $wnd.Math.min(b.e, (e = 0,
				f = 0,
				c.f + c.e / 2 < d.f - d.e / 2 ? (e = d.f - d.e / 2 - (c.f + c.e / 2)) : c.f - c.e / 2 > d.f + d.e / 2 && (e = c.f - c.e / 2 - (d.f + d.e / 2)),
				c.g + c.b / 2 < d.g - d.b / 2 ? (f = d.g - d.b / 2 - (c.g + c.b / 2)) : c.g - c.b / 2 > d.g + d.b / 2 && (f = c.g - c.b / 2 - (d.g + d.b / 2)),
				$wnd.Math.sqrt(e * e + f * f)))
		}
		function Tq(a) {
			var b, c, d;
			b = a.r - a.v;
			c = a.s - a.A;
			d = 0;
			if (b > (a.q / 2 | 0)) {
				d |= 1;
				b = 1
			} else if (b < (-a.q / 2 | 0)) {
				d |= 4;
				b = -1
			} else
				b = 0;
			if (c > (a.q / 2 | 0)) {
				d |= 8;
				c = 1
			} else if (c < (-a.q / 2 | 0)) {
				d |= 2;
				c = -1
			} else
				c = 0;
			jS(a.i, b != 0 || c != 0);
			iS(a.i, d, 0);
			SO(a.i, a.i.i);
			UO(a.i, a.q);
			a.v += b * a.q;
			a.A += c * a.q;
			CN(a.i, a.v, a.A);
			Nu();
			Cu = Cu | Lq;
			iv(a.t);
			Lq = false;
			a.f.g = 0
		}
		function Gjb() {
			var c = function() {};
			c.prototype = {
				className: '',
				clientHeight: 0,
				clientWidth: 0,
				dir: '',
				getAttribute: function(a, b) {
					return this[a]
				},
				href: '',
				id: '',
				lang: '',
				nodeType: 1,
				removeAttribute: function(a, b) {
					this[a] = undefined
				},
				setAttribute: function(a, b) {
					this[a] = b
				},
				src: '',
				style: {},
				title: ''
			};
			$wnd.GwtPotentialElementShim = c
		}
		function Ynb(a, b, c, d) {
			if (a.a.length == 3)
				return zsb(a.a[0], a.b[0], a.a[1], a.b[1], a.a[2], a.b[2], d);
			if (b == 0)
				return ysb(a.a[0], a.b[0], a.a[1], a.b[1], a.a[2], a.b[2], d);
			if (c == a.a.length - 1)
				return ysb(a.a[c], a.b[c], a.a[b], a.b[b], a.a[b - 1], a.b[b - 1], d);
			return xsb(a.a[b - 1], a.b[b - 1], a.a[b], a.b[b], a.a[c], a.b[c], a.a[c + 1], a.b[c + 1], d)
		}
		function fob(a, b, c, d) {
			if (a.a.length == 3)
				return zsb(a.a[0], a.b[0], a.a[1], a.b[1], a.a[2], a.b[2], d);
			if (b == 0)
				return ysb(a.a[0], a.b[0], a.a[1], a.b[1], a.a[2], a.b[2], d);
			if (c == a.a.length - 1)
				return ysb(a.a[c], a.b[c], a.a[b], a.b[b], a.a[b - 1], a.b[b - 1], d);
			return xsb(a.a[b - 1], a.b[b - 1], a.a[b], a.b[b], a.a[c], a.b[c], a.a[c + 1], a.b[c + 1], d)
		}
		function fc(a) {
			var b, c, d, e, f, g, h;
			ym(Iy, Yub(a.rb.R.a.r, 4), !!a.G && (a.G.g & 1) != 0, !!a.G && (a.G.g & 2) != 0);
			h = a.rb.Q.g.b;
			for (e = 0; e < h.length; e++) {
				f = h[e];
				wm(Iy, f.v, f.u, f.b, f.a)
			}
			for (g = Xl(a.H.b.q.a); g.pos + 1 < g.sz; ) {
				f = Mn(g);
				vm(Iy, f.b.v, f.b.u, f.d, f.b.a, iB(f), gB(f, a.rb))
			}
			c = a.H.b.a;
			for (d = 0; d < 4; d++) {
				b = c.d[d];
				!!b && zm(Iy, b.n.b.u)
			}
			xm(Iy)
		}
		function Uv(a) {
			var b, c, d;
			jt.call(this, a);
			this.g = a.fb.c;
			this.n = a.j;
			this.e = a.f;
			d = this.e << 5;
			this.g % 4 == 0 ? hrb(this.mb, d) : frb(this.mb, d);
			prb(this.mb, a.fb);
			brb(this.mb, (d - 32) / 2 | 0, this.g);
			if (this.n == 2 || this.n == 3) {
				b = (a.jb.e >> 5) + Pqb(this.g) * (this.e - 1);
				c = (a.jb.f >> 5) + Qqb(this.g) * (this.e - 1);
				this.b = Xob(a.jb.d, b, c, true)
			}
			this.a = a.d
		}
		function ee() {
			this.H = new rob(FDb);
			this.A = sBb(uBb(), 'GameApp');
			this.B = new Hy(this);
			this.C = new Job;
			this.I = 100;
			this.s = new xe;
			new fe(this);
			this.d = false;
			this.i = new oxb;
			this.k = null;
			this.e = 0;
			this.a = new he(this);
			this.j = new le(this);
			this.r = false;
			this.n = false;
			this.f = 0;
			this.p = 0;
			this.o = 0;
			this.D = new Ve(this);
			Ud(this);
			this.b = new pp
		}
		function Cf(a) {
			var b, c, d;
			d = a.n ? a.n.a : null;
			if (d) {
				if (a.n.c >= 2) {
					zf(a)
				} else {
					b = '';
					c = '';
					if (a.b) {
						b = 'Yes';
						c = 'No'
					} else
						switch (d.c) {
							case 0:
								c = 'Abort';
								break;
							case 1:
								b = 'Yes';
								c = 'No';
								break;
							case 2:
								b = 'Hurray!';
								break;
							case 3:
								b = 'Proceed';
								break;
							case 4:
								b = 'Respawn';
						}
					Hs(a.k, d.b[4], d.b[1].length != 0 ? d.b[1] : d.b[0], b, c, d.a.e);
					a.j = true
				}
			} else
				zf(a)
		}
		function iQ(a) {
			var b;
			if ((a.O.f == 3 ? yZ(a.O) : 0) > 0) {
				return false
			}
			b = a.M;
			if (b < 16 && a.fb.e - 16 - (a.fb.e & -32) <= 1 && a.fb.f - 16 - (a.fb.f & -32) <= 1)
				return false;
			if ((a.q & 32) != 0 && a.j + 10 <= a.Y._) {
				a.j = a.Y._;
				UN(a, new hH('BOUNCE',a.jb));
				NO(a, (b + 4) % 8 | 16);
				return false
			}
			if (a.k + 5 < a.Y._) {
				a.k = a.Y._;
				UN(a, new hH('BOMBSTOP',a.jb))
			}
			NO(a, b & 15);
			return true
		}
		function czb(a) {
			var b, c, d;
			d = -a.a.getTimezoneOffset();
			b = (d >= 0 ? '+' : '') + (d / 60 | 0);
			c = (d < 0 ? -d : d) % 60 < 10 ? '0' + (d < 0 ? -d : d) % 60 : '' + (d < 0 ? -d : d) % 60;
			return (lzb(),
				jzb)[a.a.getDay()] + ' ' + kzb[a.a.getMonth()] + ' ' + hzb(a.a.getDate()) + ' ' + hzb(a.a.getHours()) + ':' + hzb(a.a.getMinutes()) + ':' + hzb(a.a.getSeconds()) + ' GMT' + b + c + ' ' + a.a.getFullYear()
		}
		function cpb(a, b, c, d) {
			var e, f;
			e = a.a[(b >> 3) + a.p * (c >> 3)];
			f = klb(e, b, c);
			if (f == d)
				return false;
			mlb(e, b, c, d);
			if ((b & 7) == 0) {
				dpb(a, b, c, 4, d);
				(c & 7) == 0 ? dpb(a, b, c, 5, d) : (c & 7) == 7 && dpb(a, b, c, 3, d)
			} else if ((b & 7) == 7) {
				dpb(a, b, c, 0, d);
				(c & 7) == 0 ? dpb(a, b, c, 7, d) : (c & 7) == 7 && dpb(a, b, c, 1, d)
			}
			(c & 7) == 0 ? dpb(a, b, c, 6, d) : (c & 7) == 7 && dpb(a, b, c, 2, d);
			return true
		}
		function Jzb() {
			if (!Object.create || !Object.getOwnPropertyNames) {
				return false
			}
			var a = '__proto__';
			var b = Object.create(null);
			if (b[a] !== undefined) {
				return false
			}
			var c = Object.getOwnPropertyNames(b);
			if (c.length != 0) {
				return false
			}
			b[a] = 42;
			if (b[a] !== 42) {
				return false
			}
			if (Object.getOwnPropertyNames(b).length == 0) {
				return false
			}
			return true
		}
		function op(a) {
			var b, c, d, e, f;
			b = R;
			d = b.c;
			c = d.b;
			if (!!b.G && c >= 0) {
				e = a.a.value;
				e = qm(Iy, e);
				if (e.length > 0) {
					f = d.q;
					(a.c.length == 0 || !jvb(a.c[a.c.length - 1], e)) && Qn(a.c, e);
					Jc(f) ? ac(d, e, Jc(f).Ge()) : (d.H.b.c.f & 2) != 0 && !!f.D ? ac(d, e, f.D.kb) : gxb(d.R, new oK(d.rb.W.Fb(),e,d.b,0))
				}
			}
			a.a.value = '';
			a.a.blur();
			a.e && (a.b.style.display = bEb,
				undefined)
		}
		function Mib() {
			Mib = xhb;
			Iib = {
				_default_: Sib,
				dragenter: Rib,
				dragover: Rib
			};
			Jib = {
				click: Qib,
				dblclick: Qib,
				mousedown: Qib,
				mouseup: Qib,
				mousemove: Qib,
				mouseover: Qib,
				mouseout: Qib,
				mousewheel: Qib,
				keydown: Pib,
				keyup: Pib,
				keypress: Pib,
				touchstart: Qib,
				touchend: Qib,
				touchmove: Qib,
				touchcancel: Qib,
				gesturestart: Qib,
				gestureend: Qib,
				gesturechange: Qib
			}
		}
		function PAb(a) {
			MAb();
			var b;
			b = rvb(a, (sAb(),
				qAb));
			switch (b) {
				case 'ALL':
					return DAb;
				case 'CONFIG':
					return EAb;
				case 'FINE':
					return FAb;
				case 'FINER':
					return GAb;
				case 'FINEST':
					return HAb;
				case QHb:
					return IAb;
				case 'OFF':
					return JAb;
				case 'SEVERE':
					return KAb;
				case 'WARNING':
					return LAb;
				default:
					throw dhb(new Hub('Invalid level "' + a + '"'));
			}
		}
		function ES(a, b, c) {
			var d;
			c > a.d[a.e] + (a.c / 2 | 0) && AS(a, a.a[a.e], b, c - 1);
			while (c > a.d[a.e] + 1) {
				ES(a, a.b[a.e], a.d[a.e] + 1)
			}
			if (c <= a.d[a.e]) {
				return
			}
			a.g < a.c ? ++a.g : (a.i = (a.i + 1) % a.c);
			d = a.a[a.e];
			a.e = (a.e + 1) % a.c;
			a.b[a.e] = b;
			a.k = Hz(a.n.V.g, c, d, a.n, b, a.f, a.k);
			fqb(a.a[a.e], a.k.g[a.k.a]);
			hqb(a.a[a.e], a.k.i[a.k.a]);
			bqb(a.a[a.e], a.k.b);
			a.d[a.e] = c
		}
		function pe(a, b) {
			var c, d, e, f, g;
			c = a.i.getBoundingClientRect();
			f = b.pageX - c.left;
			g = b.pageY - c.top;
			if (a.a && b.button == 0) {
				d = f - a.e;
				e = g - a.f;
				if (d != 0 || e != 0) {
					a.b = toInt(a.b + ($wnd.Math.abs(d) + $wnd.Math.abs(e)));
					ez(a.g, a.g.c - d / a.g.s, a.g.d - e / a.g.s, a.g.s)
				}
			}
			b.button == 0 && a.a && a.b < 5 && !b.cancelBubble && !!R.G && Qc(R.c.q, f, g);
			a.e = f;
			a.f = g;
			a.b = 0;
			a.a = false
		}
		function Gp(a) {
			zo.call(this, a, 10);
			this.a = m2(f2(h3, 1), XCb, 7, 15, [0, 0]);
			this.b = m2(f2(h3, 1), XCb, 7, 15, [0, 0]);
			this.i = -1;
			this.d = sprites.get('perks-slot-amount');
			this.f = sprites.get('perks-slot-number');
			this.e = sprites.get('perks-slot-locked');
			this.g = sprites.get('perks-slot-unknown');
			this.c = sprites.get('perks-slot-add');
			sprites.get(bFb)
		}
		function M2(a) {
			var b, c, d, e, f;
			if (a.l == 0 && a.m == 0 && a.h == 0) {
				return '0'
			}
			if (a.h == fHb && a.m == 0 && a.l == 0) {
				return '-9223372036854775808'
			}
			if (a.h >> 19 != 0) {
				return '-' + M2(F2(a))
			}
			c = a;
			d = '';
			while (!(c.l == 0 && c.m == 0 && c.h == 0)) {
				e = p2(1000000000);
				c = s2(c, e, true);
				b = '' + L2(o2);
				if (!(c.l == 0 && c.m == 0 && c.h == 0)) {
					f = 9 - b.length;
					for (; f > 0; f--) {
						b = '0' + b
					}
				}
				d = b + d
			}
			return d
		}

		function UB() {
			UB = xhb;
			IB = (mU(), lU);
			xB = (HQ(), GQ);
			PB = (VV(), UV);
			JB = (rR(), qR);
			BB = (PR(), OR);
			RB = (gV(), fV);
			CB = (JY(), IY);
			FB = (pT(), oT);
			OB = qY;
			HB = (CT(), BT);
			TB = (qW(), pW);
			wB = (yP(), xP);
			yB = (VQ(), UQ);
			NB = (uV(), tV);
			EB = (fT(), eT);
			LB = (KS(), JS);
			DB = ($S(), ZS);
			SB = (zW(), yW);
			zB = VP;
			QB = (DX(), CX);
			KB = (jX(), iX);
			AB = (PW(), OW);
			MB = (qX(), pX);
			GB = (YW(), XW);
			vB = new Grb;
		}

		function Pr(a) {
			if (a.k == null) {
				no(a, 4);
				uo(a, 8, 0, 3);
				a.O = 2;
				a.e = mo(a, new Sr(a,'players'), 0);
				a.g = mo(a, new Sr(a,'time'), 0);
				a.a = mo(a, new Sr(a,'coords'), 0);
				a.f = mo(a, new Sr(a,''), 0);
				a.d = mo(a, new Sr(a,'ping'), 0);
				a.b = mo(a, new Sr(a,'slowmo'), 0);
				a.b.f = 14;
				no(a, 1);
				if (a.C.O.a.d.length > 1) {
					no(a, 2);
					a.O = 6;
					RD(a.C.O.a, new as(a))
				}
				yo(a, true, false)
			}
			xo(a)
		}
		function gr(a, b) {
			var c, d, e, f;
			if (a.e > 0 && a.e + 50 >= b._)
				return;
			a.j = (f = new oxb,
				lN(b.U.i, new qA(f)),
				nxb(f, m2(f2(V9, 1), hFb, 93, 0, [])));
			a.n = a.j.length;
			e = Sb(a.a);
			d = e ? e.a.b : 0;
			Oxb(a.j, FF(b.Q.j, d));
			a.f = -1;
			for (c = 0; c < a.j.length; c++) {
				a.j[c].d = c + 1;
				a.j[c].ib == a.a.S && (a.f = c + 1)
			}
			a.e = b._;
			a.g = (a.n + 100 - 1) / 100 | 0;
			a.g == 0 && (a.g = 1);
			a.i >= a.g && (a.i = a.g - 1);
			fr(a)
		}
		function Rq(a) {
			var b, c, d, e, f, g;
			if (a.c)
				return true;
			b = sprites.get('tiles');
			if (!(b.loaded > 0)) {
				hh(b);
				return false
			}
			b = b.childs[0] || null;
			a.c = $doc.createElement('canvas');
			htb(a.c, a.u);
			gtb(a.c, a.j);
			c = a.c.getContext('2d');
			g = b.frameWidth;
			d = b.frameHeight;
			for (e = 0; e < a.u; e += g)
				for (f = 0; f < a.j; f += d) {
					ptb(c, b.texture.element, b.x, b.y, g, d, e, f, g, d)
				}
			return true
		}
		function DA(a) {
			a.d = a.v & 7;
			a.e = a.A & 7;
			if (a.f)
				throw dhb(new $A);
			a.g == null || a.g.length < a.b * a.a ? (a.g = j2(h3, XCb, 7, a.a * a.b, 15, 1)) : Fxb(a.g, a.b * a.a);
			a.f = true;
			if (a.o != a.j.o || a.q != a.v || a.r != a.A || a.p != a.b || a.n != a.a) {
				Hpb(a.k);
				Kpb(a.k, a.j, null, null, a.v << 5, a.A << 5, a.v + a.b << 5, a.A + a.a << 5, true, 3);
				a.q = a.v;
				a.r = a.A;
				a.p = a.b;
				a.n = a.a;
				a.o = a.j.o
			}
			Opb(a.k, a.u)
		}
		function py(a, b) {
			var c, d, e;
			if (!a.j)
				return;
			d = a.f == 5 ? 6 : 2;
			c = Bsb(d, 0, d + 4, 1, a.c);
			if (c < 0.01)
				return;
			c < 1 && b.Tc(c);
			jrb(a.d.lb, a.d.lb.g - 4);
			if (a.f == 0)
				Ft(a.d, b, a.a, 40, a.f, a.d.nb.t.q, -1);
			else if (a.f == 5) {
				if (a.d.nb.q.pb == 2) {
					e = Bsb(16, 100, 48, 300, a.c);
					Ft(a.d, b, a.a, e, a.f, null, 0)
				}
			} else
				Ft(a.d, b, a.a, 40, a.f, a.d.nb.t.s, 1);
			jrb(a.d.lb, a.d.lb.g + 4);
			c < 1 && b.Tc(1)
		}
		function xp(a) {
			var b, c;
			if (!!a.e.I && a.e.I.B > 0) {
				b = a.e.I.B;
				zjb(a.k, tz(b));
				c = a.e.I.C;
				xg(a.f).style['left'] = (_0(),
					'85.0px');
				if (c != 511) {
					zjb(a.n, ((a.e.I.C + 9) / 10 | 0) + '');
					xg(a.j).style[LEb] = 'right linear ' + R.I + 'ms';
					xg(a.j).style['right'] = a.d - Yub(a.d / a.c | 0, c) * a.c + 'px'
				} else {
					zjb(a.n, '');
					xg(a.j).style['right'] = a.d + 'px'
				}
			} else {
				xg(a.f).style['left'] = (_0(),
					'-200.0px')
			}
		}
		function nr() {
			nr = xhb;
			mr = m2(f2(Ffb, 1), PCb, 2, 6, ['tbtitle_scoreboard', 'tbtitle_youdied', 'tbtitle_newround', 'tbtitle_roundended', 'tbtitle_observing']);
			ir = m2(f2(h3, 1), XCb, 7, 15, [120, 40, 190, 80, 80, 18]);
			kr = m2(f2(Ffb, 1), PCb, 2, 6, ['Special', 'Place', '', 'Kills', 'Deaths']);
			lr = m2(f2(h3, 1), XCb, 7, 15, [32, 0, 0, 0, 0]);
			jr = m2(f2(h3, 1), XCb, 7, 15, [80, 80, 208, 80, 80])
		}
		function Gc(a, b, c) {
			var d, e, f, g, h, i;
			if (c) {
				e = b.L;
				!e.a && e.e == 0 && e.f == 0 && e.c == 0 || ad(a, e, true)
			}
			b.fb.d != a.T.d && bqb(a.T, b.fb.d);
			g = b.db;
			if (b != a.I) {
				a.I = b;
				Xy(a._)
			}
			f = new srb;
			qrb(f, g.mb);
			orb(f, a.T);
			h = f.f;
			i = f.g;
			d = null;
			if (Z2(g, 96)) {
				d = g;
				if (d.pb.B == 21) {
					d = null;
					Xy(a._)
				} else {
					h += d.e;
					i += d.f
				}
			} else
				Xy(a._);
			qrb(g.lb, f);
			d ? Zy(a._, h, i) : Yy(a._, h, i);
			b.M >> 4 == 0 && Py(a._)
		}
		function qr(a) {
			var b;
			a.e.b && (a.e.b = false,
				b = a.a.f,
				zh(a.a, 550, 460),
				Mh(a.a, 550, 460, kFb),
				_h(a.a, 0, 0, 550, 460, 'black'),
				Yh(a.a, (My(),
					Jy), 20),
				b.setFillColor(lFb),
				b.textBaseline = 'middle',
				setFillText(b, tm(Iy, mr[a.b.j.b]), 33, 22),
				b.save(),
				b.translate(5, 5),
				_h(a.a, 0, 0, 540, 450, lFb),
				b.save(),
				b.translate(6, 36),
				sr(a),
				b.translate(0, 5),
				pr(a),
				b.restore(),
				b.restore(),
				undefined)
		}
		function Cv(a, b) {
			var c;
			a.c ? b.Tc(eDb) : b.Tc($wnd.Math.sqrt(a.b));
			if (a.a >= 0) {
				c = ih(a.ob, a.a);
				b.wc(c, arb(a.lb), Wqb(a.lb), a.lb.e, a.lb.b)
			}
			if (a.p >= 0) {
				c = ih(a.ob, a.p);
				b.wc(c, arb(a.lb), krb(a.lb), a.lb.e, a.lb.b)
			}
			if (a.g >= 0) {
				c = ih(a.ob, a.g);
				b.wc(c, arb(a.lb), krb(a.lb), a.lb.e, a.lb.b)
			}
			if (a.d >= 0) {
				c = ih(a.ob, a.d);
				b.wc(c, arb(a.lb), krb(a.lb), a.lb.e, a.lb.b)
			}
			b.Tc(1)
		}
		function P1(b, c) {
			var d, e, f, g, h, i;
			if (!c) {
				throw dhb(new _ub('Cannot fire null event'))
			}
			try {
				++b.b;
				h = (e = R1(b, c.Cf()),
					e);
				d = null;
				i = b.c ? h.eg(im(h)) : h.dg();
				while (b.c ? i.gg() : On(i)) {
					g = b.c ? i.hg() : Pn(i);
					try {
						c.Bf(g)
					} catch (a) {
						a = chb(a);
						if (Z2(a, 17)) {
							f = a;
							!d && (d = new rzb);
							ewb(d.a, f, d)
						} else
							throw dhb(a)
					}
				}
				if (d) {
					throw dhb(new V1(d))
				}
			} finally {
				--b.b;
				b.b == 0 && S1(b)
			}
		}
		function Sc(a, b, c) {
			var d, e;
			e = false;
			if (!a.qb.I) {
				if (Z2(c, 96)) {
					Kb(a.qb, c.pb.ib);
					ad(a, b, false);
					a.F = null;
					e = true
				} else if (Z2(c, 42)) {
					Kb(a.qb, -1);
					a.F = c;
					ad(a, b, false);
					e = true
				}
			}
			if (Z2(c, 224)) {
				d = c.lb;
				a.B = true;
				irb(a.t, a.u);
				jrb(a.t, a.v);
				a.t.d = 0;
				grb(a.t, d.c);
				Vqb(a.t, d);
				grb(a.t, c.pb.Ce());
				irb(a.t, a.t.f + c.mb.f);
				jrb(a.t, a.t.g + c.mb.g)
			} else
				e = e | sd(a.qb.d, c);
			return e
		}
		function UD(a, b, c) {
			var d;
			c.Vc(_Fb);
			if (b) {
				a.c || ZD(a, yk(c));
				Ikb(a.b, c, 1)
			} else {
				if (c.ad(null) == 0) {
					c.Wc(_Fb);
					return false
				}
				a.c || ZD(a, yk(c));
				Ikb(a.b, c, 2)
			}
			for (d = 0; d < a.d.length; d++) {
				switch (a.b[d]) {
					case 1:
						a.d[d] != null && a.d[d].Zd(null);
						setObjectParam(a.d, d, a.g.$d(a, c, d));
						break;
					case 2:
						a.d[d].Zd(null);
						setObjectParam(a.d, d, null);
						break;
					case 3:
						a.d[d].Xd(false, c);
				}
			}
			c.Wc(_Fb);
			return true
		}
		function Wib() {
			var d = $wnd.onbeforeunload;
			var e = $wnd.onunload;
			$wnd.onbeforeunload = function(a) {
				var b, c;
				try {
					b = ICb(sib)()
				} finally {
					c = d && d(a)
				}
				if (b != null) {
					return b
				}
				if (c != null) {
					return c
				}
			}
			;
			$wnd.onunload = ICb(function(a) {
				try {
					nib && H1((!oib && (oib = new Cib),
						oib))
				} finally {
					e && e(a);
					$wnd.onresize = null;
					$wnd.onscroll = null;
					$wnd.onbeforeunload = null;
					$wnd.onunload = null
				}
			})
		}
		function Tc(a) {
			var b, c;
			a.J = true;
			c = a.jb.frameWidth * 100;
			if (a.T.e > c) {
				b = a.T.e / c | 0;
				fqb(a.T, a.T.e - c * b);
				ez(a._, a._.c - c * b, a._.d, a._.s)
			}
			if (a.T.e < -c) {
				b = -a.T.e / c | 0;
				fqb(a.T, a.T.e + c * b);
				ez(a._, a._.c + c * b, a._.d, a._.s)
			}
			if (a.T.f > c) {
				b = a.T.f / c | 0;
				hqb(a.T, a.T.f - c * b);
				ez(a._, a._.c, a._.d - c * b, a._.s)
			}
			if (a.T.f < -c) {
				b = -a.T.f / c | 0;
				hqb(a.T, a.T.f + c * b);
				ez(a._, a._.c, a._.d + c * b, a._.s)
			}
		}
		function hS(a) {
			var b, c, d;
			a.p = 0;
			if (!a.d) {
				a.d = new IS(a);
				AS(a.d, a.fb, a.M, a.Y._);
				_pb(a.o, a.fb)
			}
			b = a.Y.W.T.f;
			a.F < b && (a.i & 16) == 0 && (a.F = b);
			c = a.i;
			DS(a.d, c);
			if (a.k != a.F) {
				a.k = a.F;
				HS(a.d, $R(a));
				(a.hb & 8) != 0 ? BS(a.d, _R(a), a.M, a.k) : CS(a.d, a.k)
			}
			d = a.d.k;
			fqb(a.o, d.g[d.a]);
			hqb(a.o, d.i[d.a]);
			bqb(a.o, d.b);
			a.p = 1;
			a.n = d.a > 0;
			gxb(a.Y.W.R, new yK(a,c,a.g,a.fb.c,a.d.k.a));
			a.g = 0
		}
		function Eb(a) {
			var b, c, d;
			rb(a);
			a.S < 0 ? (a.G = null) : (a.G = fA(a.rb, a.S));
			d = a.K;
			!!a.I && (a.L = false);
			a.K = a.L;
			if (!!a.G && a.G.k == 2) {
				a.K = true;
				a.L = false
			}
			(a.K != d || (a.D == -1 && (a.D = a.rb._),
			a.D == a.rb._)) && a.Lb();
			a.K ? a.N.k == a.S && (a.N.k = -1) : (a.N.k = a.S);
			if (a.K) {
				c = a.I;
				a.I = null;
				c != a.I && a.Kb()
			} else {
				b = gA(a.rb, a.S);
				if (b != a.I || (a.D == -1 && (a.D = a.rb._),
				a.D == a.rb._)) {
					a.I = b;
					a.Kb()
				}
			}
		}
		function uO(a, b, c) {
			var d, e, f, g, h, i, j, k;
			e = 0;
			g = a.fb.e;
			i = a.fb.f;
			h = g + b * 32;
			j = i + c * 32;
			if (!WO(a, h, j))
				return 0;
			if (a.U.b < 0) {
				return 1
			}
			f = Yz(a.Y, a.U.b);
			if (!f || !Z2(f, 123))
				return 0;
			d = f;
			e |= 2;
			if (!(Z2(a, 75) || Z2(a, 147) || Rpb(d.f, d.i, d.g, d.j, g, i, h, j))) {
				e |= 4;
				(aqb(a.U, a.fb.d),
					_pb(a.P, a.fb),
					fqb(a.P, h),
					hqb(a.P, j),
					k = Xpb(a.P, a.U, false),
					a.Q = k > 0,
				k >= 0) && (e |= 1);
				return e
			}
			return e | 1
		}
		function cc(a, b) {
			var c, d, e, f, g, h, i, j, k;
			if (!a.G || !!a.I && !!a.i)
				return;
			i = new yL(a.rb.W.Fb());
			b && (i.a |= 1);
			a.q.F = null;
			if ((a.G.g & 2) != 0) {
				k = Iy.perksSelected || null;
				if (k) {
					d = false;
					for (f = 0; f < k.length; f++) {
						j = PE(a.rb.Q.g, k[f]);
						g = j ? j.u : -1;
						c = SD(a.H.b.a, f);
						h = c ? c.n.b.u : -1;
						if (g != h) {
							d = true;
							break
						}
					}
					if (d) {
						for (e = 0; e < k.length; e++) {
							j = PE(a.rb.Q.g, k[e]);
							Tl(i.b, j ? j.u : -1)
						}
					}
				}
			}
			gxb(a.R, i)
		}
		function ls(a, b, c, d, e, f) {
			var g, h, i, j;
			h = lh(b, c);
			if (!h) {
				!a.s && (a.s = $doc.createElement('canvas'));
				j = b.frameWidth;
				g = b.frameHeight;
				htb(a.s, j);
				gtb(a.s, g);
				i = a.s.getContext('2d');
				i.clearRect(0, 0, j, g);
				ptb(i, b.texture.element, b.frames[c].x, b.frames[c].y, b.frameWidth, b.frameHeight, 0, 0, j, g);
				h = ktb(a.e, a.s, qEb);
				b.frames[c].pattern = h
			}
			setFillStyle(a.e, h);
			Nh(a.b, d, 0, e, f);
			a.e.fillStyle = 'black'
		}
		function so(a) {
			var b, c, d, e, f, g, h;
			zh(a.o, a.o.b.width, a.o.b.height);
			for (e = 0; e < 2; e++) {
				for (c = 0; c < 2; c++) {
					Oh(a.o, a.F, a.j + c + e * 3, a.k[c], a.n[e], a.k[c + 1] - a.k[c], a.n[e + 1] - a.n[e], 0, 0)
				}
			}
			h = xg(a.R).style;
			b = h['left'].length > 0 ? 0 : 5;
			d = h['top'].length > 0 ? 0 : 5;
			Etb(a.r, b, d);
			a.od();
			Etb(a.r, -b, -d);
			for (g = 0; g < a.A.length; g++) {
				f = a.A[g];
				Etb(a.r, f.q + b, f.s + d);
				Co(f);
				f.pd();
				Etb(a.r, -f.q - b, -f.s - d)
			}
		}
		function zq(a, b) {
			var c, d, e, f;
			c = yq(a, b);
			if (!c || !c.ie())
				return;
			f = a.qb.i;
			if (Z2(c, 154)) {
				$o(a.qb.a)
			} else if (c.de(Yob(f.ab, toInt($wnd.Math.floor(f.bb)), toInt($wnd.Math.floor(f.cb)), false))) {
				c.ee(Yob(f.ab, toInt($wnd.Math.floor(f.bb)), toInt($wnd.Math.floor(f.cb)), false));
				d = a.qb.I;
				e = a.rb.W;
				gxb(e.R, new RJ(d,Yob(f.ab, toInt($wnd.Math.floor(f.bb)), toInt($wnd.Math.floor(f.cb)), false),c.n.b.u))
			}
		}
		function vrb(a, b, c) {
			var d, e, f, g, h, i, j, k, l, m, n, o;
			c.Vc(DHb);
			i = (d = c.ad(null),
				d > 0 ? 1 << d - 1 : 0);
			j = Ak(c, i);
			m = b ? 0 : Ak(c, i);
			n = b ? 0 : Ak(c, i);
			for (f = 0; f < j; f++) {
				k = new kB(a,c);
				l = b ? null : bm(a.a, k.b.u);
				if (l) {
					l.a = null;
					em(a.a, k.b.u)
				}
				dm(a.a, k.b.u, k)
			}
			for (g = 0; g < m; g++) {
				h = Ak(c, i) + a.b;
				bm(a.a, h).Xd(false, c)
			}
			for (e = 0; e < n; e++) {
				h = Ak(c, i) + a.b;
				o = bm(a.a, h);
				if (o) {
					o.a = null;
					em(a.a, h)
				}
			}
			c.Wc(DHb);
			return i > 0
		}
		function gj(a) {
			var b, c, d, e;
			e = $doc.createElement('canvas');
			htb(e, a.f);
			gtb(e, a.f);
			a.b = j2(h3, XCb, 7, a.o.childs.length, 15, 1);
			a.c = j2(h3, XCb, 7, a.o.childs.length, 15, 1);
			b = e.getContext('2d');
			a.e = j2(dfb, PCb, 0, a.o.childs.length, 2, 1);
			for (c = 0; c < a.o.childs.length; c++) {
				itb(b, 0, 0, a.f, a.f);
				d = ih(a.o, c);
				a.b[c] = d.x;
				a.c[c] = d.y;
				ptb(b, a.d, d.x, d.y, a.f, a.f, 0, 0, a.f, a.f);
				a.e[c] = b.createPattern(e, qEb)
			}
		}
		function eR(a) {
			a.n = a.fb.e >> 5;
			a.p = a.fb.f >> 5;
			a.o = a.n - 1 + a.v;
			a.q = a.p - 1 + a.u;
			a.b = a.n;
			a.d = a.p;
			a.c = a.o;
			a.e = a.q;
			switch (a.r % 8) {
				case 0:
					++a.c;
					break;
				case 2:
					++a.e;
					break;
				case 4:
					--a.b;
					break;
				case 6:
					--a.d;
			}
			a.f = a.fb.e + ((a.v * (1 + Pqb(a.r + 1 & 15)) - 1) * 32 / 2 | 0);
			a.i = a.fb.f + ((a.u * (1 + Qqb(a.r + 1 & 15)) - 1) * 32 / 2 | 0);
			a.g = a.fb.e + ((a.v * (1 + Pqb(a.r - 1 & 15)) - 1) * 32 / 2 | 0);
			a.j = a.fb.f + ((a.u * (1 + Qqb(a.r - 1 & 15)) - 1) * 32 / 2 | 0)
		}
		function xz(a, b, c, d) {
			var e, f;
			for (f = 0; f < a.a.length; f++) {
				e = a.a[f];
				if (b >= e.f - 2 && b <= e.g + 2 && c >= e.i - 2 && c <= e.j + 2) {
					if (!e.b) {
						b - e.f + (c - e.i) >= e.e && e.g - b + (c - e.i) >= e.e && b - e.f + (e.j - c) >= e.e && e.g - b + (e.j - c) >= e.e && (e.c |= 2)
					} else {
						if (Z2(e.b.b, 37)) {
							e.e = 4;
							if (b - e.f + (c - e.i) >= e.e && e.g - b + (c - e.i) >= e.e && b - e.f + (e.j - c) >= e.e && e.g - b + (e.j - c) >= e.e) {
								e.c |= 2;
								e.a = Xub(e.a, d)
							}
						} else {
							a.f && (e.c |= 2);
							e.a = Xub(e.a, d)
						}
					}
				}
			}
		}
		function yz(a, b, c) {
			var d, e;
			for (e = 0; e < a.a.length; e++) {
				d = a.a[e];
				if (d.f < b.g && b.f < d.g && d.i < b.j && b.i < d.j) {
					if (!d.b) {
						d.f + d.i + d.e < b.g + b.j && b.f + b.i + d.e < d.g + d.j && d.f - d.j + d.e < b.g - b.i && b.f - b.j + d.e < d.g - d.i && (d.c |= 1)
					} else {
						if (Z2(d.b.b, 37)) {
							d.e = 2;
							if (d.f + d.i + d.e < b.g + b.j && b.f + b.i + d.e < d.g + d.j && d.f - d.j + d.e < b.g - b.i && b.f - b.j + d.e < d.g - d.i) {
								d.c |= 1;
								d.a = Xub(d.a, c)
							}
						} else {
							a.f && (d.c |= 1);
							d.a = Xub(d.a, c)
						}
					}
				}
			}
		}
		function v2(a, b, c, d, e, f) {
			var g, h, i, j, k, l, m;
			j = y2(b) - y2(a);
			g = G2(b, j);
			i = r2(0, 0, 0);
			while (j >= 0) {
				h = B2(a, g);
				if (h) {
					j < 22 ? (i.l |= 1 << j,
						undefined) : j < 44 ? (i.m |= 1 << j - 22,
						undefined) : (i.h |= 1 << j - 44,
						undefined);
					if (a.l == 0 && a.m == 0 && a.h == 0) {
						break
					}
				}
				k = g.m;
				l = g.h;
				m = g.l;
				g.h = l >>> 1;
				g.m = k >>> 1 | (l & 1) << 21;
				g.l = m >>> 1 | (k & 1) << 21;
				--j
			}
			c && x2(i);
			if (f) {
				if (d) {
					o2 = F2(a);
					e && (o2 = J2(o2, (S2(),
						Q2)))
				} else {
					o2 = r2(a.l, a.m, a.h)
				}
			}
			return i
		}
		function Te(a, b) {
			var c, d, e, f, g;
			if (b.data instanceof ArrayBuffer) {
				Yd(a.b, new Ik(b.data), U$(b))
			} else {
				e = b.data;
				c = T$(e.length);
				f = new Uint8Array(c);
				for (d = 0; d < f.length; d++) {
					f[d] = e.charCodeAt(d) & 255 & 255
				}
				Yd(a.b, new Jk(c,f), U$(b))
			}
			if (a.f.length > a.d) {
				a.f[0].close();
				a.f.splice(0, 1)
			}
			if (a.f.length < a.d) {
				g = Y$(a.g + '&slave');
				ABb(R.A, 'Spawning slave #' + a.f.length);
				X$(g, a.e);
				g.binaryType = NDb;
				Qn(a.f, g);
			}
		}

		function Yf(a) {
			var b, ctx, d, e, f;
			b = new ei($doc.createElement('canvas'));
			ctx = b.f;
			ctx.font = '11px Tahoma, Arial';
			d = ctx.measureText(a);
			e = ~~(d.width + 0.9);
			f = e + 9;
			htb(b.b, f);
			b.b.height = 20;
			ctx.font = '11px tahoma';
			ctx.strokeStyle = 'black';
			ctx.fillStyle = 'white';
			ctx.lineWidth = 1;
			ctx.globalAlpha = 0.7;
			ctx.beginPath();
			ctx.rect(0.5, 0.5, f - 1, 19);
			ctx.fill();
			ctx.globalAlpha = 1;
			ctx.stroke();
			ctx.fillStyle = 'black';
			ctx.textAlign = 'center';
			ctx.fillText(a, f / 2 | 0, 14);
			return b;
		}

		function JG(a, b) {
			var c, d, e, f, g, h, i, j, k, l, m, n, o;
			o = b.q.b;
			a.a = j2(h3, XCb, 7, o.length * 8, 15, 1);
			for (g = 0; g < a.a.length; g++)
				a.a[g] = g / 8 | 0;
			e = b.e.b;
			for (f = 0; f < e.length; f++) {
				d = e[f];
				for (h = 0; h < d.c.length; h++) {
					k = PE(b.q, d.c[h]);
					if (d.a) {
						for (j = 1; j < 8; j++) {
							m = -1;
							n = -1;
							c = Hqb(j * 2, k.g) & 7;
							for (i = 0; i < d.c.length; i++) {
								l = PE(b.q, d.c[i]);
								l.g == c && (m = l.u);
								l.g % 4 == c % 4 && (n = l.u)
							}
							m != -1 ? (a.a[k.u * 8 + j] = m) : n != -1 && (a.a[k.u * 8 + j] = n)
						}
					}
				}
			}
		}
		function rb(a) {
			var b, c, d, e, f, g, h;
			_lb(a.rb.X, a.P);
			for (g = Xl(a.rb.cb.e); g.pos + 1 < g.sz; ) {
				e = Mn(g);
				if (e) {
					e.Le();
					b = e.X;
					for (d = 0; d < b.length; d++)
						gxb(a.O, b[d])
				}
			}
			for (c = 0; c < a.V.length; c++) {
				h = a.V[c];
				if (!h.pb.Qe()) {
					h.Cd();
					oN(a.Q, c)
				}
			}
			gN(a.Q);
			for (f = Xl(a.rb.cb.e); f.pos + 1 < f.sz; ) {
				e = Mn(f);
				if (!!e && !e.db && e.Me()) {
					h = Vmb((Clb(),
						e));
					if (h) {
						h.Bd(a.rb);
						e.db = h;
						Qn(a.V, h)
					}
				}
			}
			tb(a);
			a.N.f = a.rb._;
			fxb(a.R, 0, new Lmb(a.S,a.N))
		}
		function jQ(a) {
			var b, c, d, e, f;
			PO(a, a.O.uf());
			a.cb && a.O.tf();
			if (!a.Y)
				return;
			if (a.O.f >= 3)
				return;
			a.M >> 4 != 0 && eQ(a, a.cb);
			if (a.M >> 4 == 0) {
				b = a.fb.e - 16 - (a.fb.e & -32);
				c = a.fb.f - 16 - (a.fb.f & -32);
				if ((b < 0 ? -b : b) > 1 || (c < 0 ? -c : c) > 1) {
					e = MN(a.fb.e);
					f = MN(a.fb.f);
					if (Bz(a.V.g, a, e, f)) {
						wN(a);
						xN(a)
					}
				}
			}
			d = a.N;
			if (d > 0 && a.gf()) {
				--d;
				(a.q & 64) != 0 && d > 0 && --d;
				a.N = d;
				if (d == 0) {
					if (a.cb) {
						a.af()
					} else {
						_z(a.Y, new hH('EXPLOSION',a.jb));
						a.Ne()
					}
				}
			}
		}
		function Dub(a, b) {
			var c, d, e, f, g;
			if (a == null) {
				throw dhb(new bvb(wFb))
			}
			if (b < 2 || b > 36) {
				throw dhb(new bvb('radix ' + b + ' out of range'))
			}
			e = a.length;
			f = e > 0 && (a.charCodeAt(0) == 45 || a.charCodeAt(0) == 43) ? 1 : 0;
			for (c = f; c < e; c++) {
				if (eub(a.charCodeAt(c), b) == -1) {
					throw dhb(new bvb(IHb + a + '"'))
				}
			}
			g = parseInt(a, b);
			d = g < WFb;
			if (isNaN(g)) {
				throw dhb(new bvb(IHb + a + '"'))
			} else if (d || g > KCb) {
				throw dhb(new bvb(IHb + a + '"'))
			}
			return g
		}
		function Ev(a) {
			var b, c, d, e, f, g;
			a.t = PE(a.kb.Q.q, a.u);
			g = a.t.e;
			b = a.n < 8 ? 1 : -1;
			if (a.t.q == 2) {
				d = PE(a.kb.Q.q, $z(a.k, -a.n + 2 * b & 7));
				if (d.q == 2) {
					f = R.c.q.lb.j[g];
					f != -1 && (g = f)
				}
			}
			if (g < 0) {
				sCb((wc(),
					vc), "ceiling is not set for tile '" + a.t.v + "'");
				return
			}
			c = (Gqb(),
			4 - ((Hqb(a.n, (4 - a.e & 3) << 1) & 6) >> 1) & 3);
			a.v = a.ob.frameWidth;
			a.i = a.ob.frameWidth;
			e = ih(a.ob, g);
			a.f = cl(600, a.ob.texture.element, e.x, e.y, a.v, a.i, c);
			a.q = rh();
			qh(a.q, a.f)
		}
		function Cc(a, b) {
			var c, d, e;
			if (!a.T)
				return;
			c = b.b;
			if (c <= 0)
				return;
			if (!a.R || a.R.pb.kb != c) {
				e = Yz(a.rb, c);
				if (!!e && Z2(e, 123)) {
					a.R = e.db;
					erb(a.S, a.R.mb);
					Tqb(a.S, a.T)
				}
			}
			if (!a.R || a.R.pb.kb != c)
				return;
			if (!!a.f && a.f == b.d) {
				_pb(a.kb, a.q);
				Wpb(a.kb, b);
				if (mpb(a.kb, b.d.e)) {
					a.f = a.T.d;
					a.o = !a.o;
					_pb(a.p, a.T);
					_pb(a.q, b);
					return
				}
			}
			a.o = false;
			d = a.R.pb;
			a.f = a.T.d;
			_pb(a.p, a.T);
			_pb(a.q, b);
			erb(a.i, a.S);
			a.g = 0;
			a.k = d.s;
			a.n = jR(a.R.pb, a.T.c)
		}
		function ue(a, b, c) {
			a.i = b;
			a.g = c;
			gxb(a.d, atb(b, IDb, new ye(a), false));
			gxb(a.d, atb(b, 'mousemove', new Ae(a), false));
			gxb(a.d, atb(b, 'mouseup', new Ce(a), false));
			gxb(a.d, atb(b, 'mouseout', new Ee(a), false));
			gxb(a.d, atb(b, (Wsb(),
				Vsb ? JDb : KDb), new Ge(a), false));
			gxb(a.d, atb(b, LDb, new Ie(a), false));
			gxb(a.d, atb(b, 'touchmove', new Ke(a), false));
			gxb(a.d, atb(b, 'touchend', new Me(a), false));
			gxb(a.d, atb(b, MDb, new Oe, false))
		}
		function xc(a) {
			a.s = new zpb(null,16,16);
			a.nb = new nzb;
			a.e = [];
			a.M = null;
			a.jb = null;
			a.t = new lrb;
			a.ob = new kg;
			a.D = null;
			a.F = null;
			a.ab = new lrb;
			a.T = null;
			a.H = null;
			a.P = new ug;
			a.Q = new Ppb;
			a.S = new lrb;
			a.r = new ug;
			a.p = new iqb;
			a.q = new iqb;
			a.i = new lrb;
			a.j = new lrb;
			a.g = 0;
			a.o = false;
			a.kb = new iqb;
			a.b = new lrb;
			a.a = false;
			a.db = 0;
			a.eb = -1;
			a.cb = m2(f2(h3, 1), XCb, 7, 15, [4, 7, 17]);
			a.bb = new iqb;
			a.Z = 1;
			a.$ = 0;
			a.O = 0;
			a.N = false;
			a.J = true;
			a.I = null
		}
		function oj(a, b, c, d, e, f, g, h, i, j, k) {
			var l, m, n, o, p, q, r, s, t, u;
			uj(a, b.texture);
			i *= b.renderWidth / a.F;
			j *= b.renderHeight / a.F;
			g += b.renderShiftX / a.F - i / 2;
			h += b.renderShiftY / a.F - j / 2;
			o = b.frameWidth;
			n = b.frameHeight;
			l = d * o + vEb;
			p = c * n + vEb;
			o = e - wEb;
			n = f - wEb;
			m = $wnd.Math.cos(k);
			q = $wnd.Math.sin(k);
			i /= 2;
			j /= 2;
			r = i * m - j * q;
			t = i * q + j * m;
			s = i * m + j * q;
			u = i * q - j * m;
			a.b + 24 > a.u.length && rj(a);
			qk(a.u, a.b, g - r, h - t, g + s, h + u, g - s, h - u, g + r, h + t);
			tj(a, l, p, o, n)
		}
		function Pq(a) {
			var b, c, d;
			a.g = new nA;
			a.g.W = new _q(a.g);
			Ymb(a.g.T, new cr(a));
			d = new epb(-1);
			Lob(d, new Epb, -1);
			apb(d, a.g);
			c = new hG;
			c.v = 'grass';
			c.u = 0;
			b = new $E;
			Qn(a.g.Q.q.b, c);
			fwb(a.g.Q.q.c, c.v, c);
			Qn(a.g.Q.b.b, b);
			fwb(a.g.Q.b.c, b.v, b);
			new Lb(a.g,1);
			a.i = (UB(),
				new lS);
			FN(a.i, Xob(d, 0, 0, true));
			UO(a.i, a.q);
			!!a.f && HR(a.i, a.f);
			EN(a.i, 1);
			qO(a.i, a.g, d.a[0]);
			a.i.N = 1;
			ER(a.i);
			a.t = new jv(a.i);
			gt(a.t, a.g);
			a.f = a.i.H;
			rC(a.f, a.p)
		}
		function Md(a, b, c) {
			var d, e, f;
			c = Date.now();
			b.f = 0;
			b.a = 0;
			b.g = true;
			d = Fk(b);
			while (b.g && b.f + 1 <= b.e) {
				f = (e = Olb(Hk(b)),
					e);
				switch (f.e) {
					case 0:
						be(a, b, Fk(b), Fk(b));
						Iob(a.C, a.G._ + 1);
						a.G.V = d;
						break;
					case 1:
						if (!a.G) {
							throw dhb(new Jub('gameState is not initialized'))
						}
						if (d != a.G.V)
							return;
						Hob(a.C, Fk(b), b);
						while (Fob(a.C)) {
							Cy(a.B, c, Gob(a.C))
						}
						return;
					case 7:
						a.I = wk(b);
						Gy(a.B, a.I);
						break;
					default:
						throw dhb(new Jub('invalid opcode'));
				}
			}
		}
		function ovb(a, b, c) {
			var d, e, f, g, h, i, j;
			d = new $wnd.RegExp(b,'g');
			i = j2(Ffb, PCb, 2, 0, 6, 1);
			e = 0;
			j = a;
			g = null;
			while (true) {
				h = d.exec(j);
				if (h == null || j == '' || e == c - 1 && c > 0) {
					i[e] = j;
					break
				} else {
					i[e] = qvb(j, 0, h.index);
					j = qvb(j, h.index + h[0].length, j.length);
					d.lastIndex = 0;
					if (g == j) {
						i[e] = j.substr(0, 1);
						j = j.substr(1, j.length - 1)
					}
					g = j;
					++e
				}
			}
			if (c == 0 && a.length > 0) {
				f = i.length;
				while (f > 0 && i[f - 1] == '') {
					--f
				}
				f < i.length && (i.length = f,
					undefined)
			}
			return i
		}
		function Tv(a, b) {
			var c, d, e;
			if (a.n == 3 && !a.c)
				return;
			a.f += b;
			d = a.e * 2;
			a.n == 3 && --d;
			while (a.k < d && a.k * Rv <= a.f) {
				if (a.n >= 5 && a.k == 1) {
					e = a.n == 6 ? 1 : 2;
					for (c = 0; c < 8; c += e) {
						ef(a.nb.n, a.a % 9, a.pb.fb.d, a.pb.fb.e + (a.k * (Gqb(),
							Bqb[c]) * 32 / 2 | 0), a.pb.fb.f + (a.k * Cqb[c] * 32 / 2 | 0), Sv, a.pb.e && !a.pb.c ? 0.5 : 1)
					}
				} else
					ef(a.nb.n, a.a % 9, a.pb.fb.d, a.pb.fb.e + (a.k * Pqb(a.pb.fb.c) * 32 / 2 | 0), a.pb.fb.f + (a.k * Qqb(a.pb.fb.c) * 32 / 2 | 0), Sv, a.pb.e && !a.pb.c ? 0.5 : 1);
				++a.k
			}
		}
		function Ac(a, b, c, d) {
			var e, f, g, h, i, j, k, l, m, n, o;
			erb(a.b, a.ab);
			f = new lrb;
			erb(f, a.ab);
			$qb(f, b);
			g = new lrb;
			erb(g, a.ab);
			d && Vy(a._, g);
			h = g.f - g.e / 2;
			l = g.g - g.b / 2;
			i = g.f + g.e / 2;
			m = g.g + g.b / 2;
			erb(g, f);
			d && Vy(a._, g);
			j = g.f - g.e / 2;
			n = g.g - g.b / 2;
			k = g.f + g.e / 2;
			o = g.g + g.b / 2;
			e = a.G.gc();
			if (c) {
				e.lc();
				e.Oc(h, l);
				e.Nc(i, l);
				e.Nc(i, m);
				e.Nc(h, m);
				e.Nc(h, n);
				e.Nc(j, n);
				e.Nc(j, o);
				e.Nc(k, o);
				e.Nc(k, n);
				e.Nc(h, n);
				e.Nc(h, l);
				e.oc()
			} else {
				erb(a.ab, f);
				e.qc(j, n, k - j, o - n)
			}
		}
		function Iq(a) {
			var b, c;
			this.d = a;
			this.i = a.rb;
			this.k = sprites.get('perks');
			this.a = sprites.get('perks-bar');
			jh(this.k, gFb);
			this.o = this.a.frameWidth;
			this.j = this.a.frameHeight;
			this.f = this.o / 2 | 0;
			b = new kp;
			fo(this, b);
			this.b = b.d;
			this.c = this.b.b;
			Xh(this.b, this.f, this.j);
			this.c.id = 'perksWnd';
			c = (dib(),
				b.$).style;
			c['position'] = (A0(),
				'absolute');
			c['bottom'] = (_0(),
				KEb);
			c['left'] = KEb;
			this.e = this.b.f;
			Yh(this.b, (My(),
				Jy), 11);
			Xsb(this.c, IDb, new Jq(this), false)
		}
		function kd(a, b) {
			var c;
			a.N = false;
			if (a.D) {
				VR(a.D);
				!!a.D.G && (a.N = ZR(a.D) == 17)
			}
			c = a.Z;
			if (a.N) {
				a.Z == 1 && (a.O = toInt($wnd.Math.random() * 3));
				if (a.Z != -1) {
					a.$ += b * 0.015;
					if (a.$ >= kDb) {
						a.Z = -1;
						a.$ = lDb
					} else
						a.Z = $wnd.Math.cos(a.$)
				}
			} else {
				if (a.Z != 1) {
					a.$ += b * 0.015;
					if (a.$ >= mDb) {
						a.Z = 1;
						a.$ = 0
					} else
						a.Z = $wnd.Math.cos(a.$)
				}
			}
			a.Z >= 0 && a.Z <= nDb ? (a.Z = nDb) : a.Z < 0 && a.Z >= oDb && (a.Z = oDb);
			a.O == 0 ? Yg(a.G, a.Z, 1) : a.O == 1 ? Yg(a.G, 1, a.Z) : Yg(a.G, a.Z, a.Z);
			c != a.Z && (a.J = true)
		}
		function Ht(a, b) {
			var c, d, e, f, g, h, i;
			getConfigParam('debugDirection', false) && (g = a.lb.d,
				b.kc(1, 0, 0, eDb),
				h = a.lb.f,
				i = a.lb.g,
				b.lc(),
				b.Oc(h, i),
				b.Nc(h + (Gqb(),
				Bqb[g] * 32), i + Cqb[g] * 32),
				b.Uc(),
				b.Jc(),
				b.kc(0, 1, 0, eDb),
				b.lc(),
				b.Oc(h, i),
				b.Nc(h + Eqb[g] * 32, i + Fqb[g] * 32),
				b.Uc(),
				b.Jc(),
				undefined);
			Gt(a, b);
			if (a.Y != null && (a.Z == 0 || a.Z == a.nb.b)) {
				!a.X && (a.X = Yf(a.Y));
				d = a.X.b.width;
				c = a.X.b.height;
				e = ~~(a.lb.f - (d / 2 | 0) + 0.5);
				f = ~~(Wqb(a.lb) + 5 + 0.5);
				b.Gc(a.X, e, f + a._ * c, d, c)
			}
		}
		function uw(a, b) {
			var c, d, e, f, g, h, i, j, k;
			f = 0;
			for (e = 0; e < a.i; e++) {
				a.k[e] += b / 700;
				g = a.k[e];
				h = ($wnd.Math.pow(2, -4 * (1 - g)) - 0.0625) * 16 / 15;
				i = 1 - (0.5 - g) * (0.5 - g) * 4;
				if (a.k[e] < 1) {
					if (a.j[e] < qDb) {
						j = a.t[a.j[e]] + arb(a.lb);
						k = a.u[a.j[e]] + krb(a.lb)
					} else {
						j = 0;
						k = Kc(a.nb.q).a
					}
					c = a.o[e] - j;
					d = a.q[e] - k;
					a.n[f] = ~~(-c * h + a.o[e] + i * a.s[e] * d / 5 + 0.5);
					a.p[f] = ~~(-d * h + a.q[e] - i * a.s[e] * c / 5 + 0.5);
					if (e != f) {
						a.o[f] = a.o[e];
						a.q[f] = a.q[e];
						a.s[f] = a.s[e];
						a.j[f] = a.j[e];
						a.k[f] = a.k[e]
					}
					++f
				}
			}
			a.i = f
		}
		function JA(a, b, c, d, e, f, g) {
			var h, i, j, k, l, m, n, o, p, q;
			o = b.b;
			q = b.i.e;
			for (i = 0; i < q.length; i++)
				if (q[i] != null) {
					p = q[i];
					m = p.Ee();
					n = p.Fe();
					if (m >= d && m <= f && n >= e && n <= g) {
						l = gg(a.b.i);
						l.c = p;
						l.b = Z2(p, 39) ? p : null;
						Kqb(c.c);
						_pb(l.a, p.fb);
						Wpb(l.a, c);
						$pb(l.a, -a.b.v << 5, -a.b.A << 5)
					}
				}
			if (c.b <= 0) {
				bqb(a.a, o);
				fqb(a.a, (b.g.b << 8) + 128);
				hqb(a.a, (b.g.c << 8) + 128);
				Wpb(a.a, c);
				j = (a.a.e >> 5) - a.b.v + a.b.d;
				k = (a.a.f >> 5) - a.b.A + a.b.e;
				h = (j >> 3) + (k >> 3) * 4;
				a.b.c[h] = b;
				a.b.t[h] = c;
				a.b.s[h] = c.c
			}
		}
		function bpb(a, b, c, d) {
			var e, f, g, h, i, j, k, l, m;
			if (c % 2 != d % 2)
				throw dhb(new Hub('cant link corner with side'));
			g = a.p << 8;
			e = a.i << 8;
			if (c % 2 == 0) {
				h = c % 4 == 0 ? g : e;
				i = d % 4 == 0 ? b.p << 8 : b.i << 8;
				if (h != i)
					throw dhb(new Hub('window size doesnt match'))
			}
			j = ((a.p << 8) / 2 | 0) * (Gqb(),
			1 + Bqb[c]);
			l = ((a.i << 8) / 2 | 0) * (1 + Cqb[c]);
			k = ((a.p << 8) / 2 | 0) * (1 + Bqb[d]);
			m = ((a.i << 8) / 2 | 0) * (1 + Cqb[d]);
			f = Kqb(Hqb(d, Kqb(c) ^ 4));
			j -= k * Bqb[f] + m * Eqb[f];
			l -= k * Cqb[f] + m * Fqb[f];
			return a.b[Nqb(c)] = new jqb(b,j,l,f)
		}
		function Es() {
			var a, b, c;
			fo(this, this.c = new ct);
			qs((dib(),
				this.$).style);
			a = $doc.createElement(kEb);
			rs(a.style);
			a_(this.$, a);
			b = this.$.style;
			b['width'] = (_0(),
				'206.0px');
			b['height'] = '100.0px';
			b['left'] = '-250.0px';
			b['bottom'] = '350.0px';
			b[LEb] = vFb;
			this.b = new qjb(g$() + '../img/notify00.png');
			(c = xg(this.b).style,
				f0(),
				c)['cssFloat'] = 'right';
			bt(this.c, this.b);
			this.d = new Ajb;
			ss(xg(this.d).style);
			bt(this.c, this.d);
			this.a = new Ajb;
			xg(this.a).style[sFb] = '12px';
			bt(this.c, this.a)
		}
		function Aib(b) {
			var c, d, e, f, g, h, i, j, k, l, m, n, o;
			k = new nzb;
			if (b != null && b.length > 1) {
				l = b.substr(1, b.length - 1);
				for (h = ovb(l, '&', 0),
					     i = 0,
					     j = h.length; i < j; ++i) {
					g = h[i];
					f = ovb(g, '=', 2);
					e = f[0];
					if (e.length == 0) {
						continue
					}
					m = f.length > 1 ? f[1] : '';
					try {
						m = (Y1(m),
							o = /\+/g,
							decodeURIComponent(m.replace(o, '%20')))
					} catch (a) {
						a = chb(a);
						if (!Z2(a, 119))
							throw dhb(a)
					}
					n = k.Mf(e);
					if (!n) {
						n = new oxb;
						k.Nf(e, n)
					}
					fm(n, m)
				}
			}
			for (d = Yl(k.Lf()); On(d); ) {
				c = Pn(d);
				c.kg(Txb(c.jg()))
			}
			k = (Qxb(),
				new zyb(k));
			return k
		}
		function wh(a, b) {
			var c;
			c = th(a, b);
			if (!c || a.glModified) {
				if (!c) {
					c = b.createTexture();
					b.bindTexture(rEb, c);
					if (a.glRepeat) {
						b.texParameteri(rEb, 10242, 10497);
						b.texParameteri(rEb, 10243, 10497)
					} else {
						b.texParameteri(rEb, 10242, 33071);
						b.texParameteri(rEb, 10243, 33071)
					}
					b.texParameteri(rEb, 10241, 9729);
					b.texParameteri(rEb, 10240, 9729)
				} else {
					b.bindTexture(rEb, c)
				}
				Otb(b, rEb, a.glLevel, 6408, 6408, 5121, a.element);
				a.glTex = c;
				a.gl = b;
				a.glModified = false
			} else {
				b.bindTexture(rEb, c)
			}
			return c
		}
		function nN(a, b) {
			var c, d, e;
			b.Vc(qGb);
			!a.c && (a.c = []);
			Wl(a.c, a.f);
			for (c = 0; c < (a.f & -4); c += 4) {
				d = b.ad(null);
				a.c[c] = d & 3;
				a.c[c + 1] = d >> 2 & 3;
				a.c[c + 2] = d >> 4 & 3;
				a.c[c + 3] = d >> 6 & 3
			}
			while (true) {
				d = b.ad(null);
				e = d & 3;
				if (c < a.f) {
					a.c[c] = e
				} else if (e > 0)
					Vl(a.c, e);
				else
					break;
				d >>= 2;
				++c;
				e = d & 3;
				if (c < a.f) {
					a.c[c] = e
				} else if (e > 0)
					Vl(a.c, e);
				else
					break;
				d >>= 2;
				++c;
				e = d & 3;
				if (c < a.f) {
					a.c[c] = e
				} else if (e > 0)
					Vl(a.c, e);
				else
					break;
				d >>= 2;
				++c;
				e = d & 3;
				if (c < a.f) {
					a.c[c] = e
				} else if (e > 0)
					Vl(a.c, e);
				else
					break;
				++c
			}
			b.Wc(qGb)
		}
		function _d(a) {
			var b, c, d, e;
			if (!a.r) {
				a.d = true;
				return false
			}
			a.d = false;
			b = $wnd.location;
			e = getServerUrl();
			if (e.indexOf('?') != -1)
				e += '&';
			else {
				d = '/'.length;
				jvb(e.substr(e.length - d, d), '/') || (e += '/');
				e += '?'
			}
			e += 'play&auth=' + getConfigParam('auth', 'b') + '&version=' + getConfigParam('version', 'tip');
			c = e + '&...';
			getConfigParam('sendToken', false) && (e += '&token=' + getConfigParam('token', ''));
			(jvb('watch', getConfigParam('mode', 'play')) || jvb(b.search, '?watch')) && (e += '&watch');
			Qe(a.D, e);
			Se(a.D) == 0 && ABb(a.A, 'connect send to: ' + c);
			Iy.emit(BDb);
			return true
		}
		function gS(a) {
			var b, c, d;
			if (a.k != a.F) {
				c = a.p;
				a.p = 0;
				a.n = !mpb(a.o, a.fb);
				_pb(a.o, a.fb);
				d = c + 1 + a.k - a.F;
				d < 0 ? (c = 0) : d < c && (c = d);
				a.k = a.F;
				if (a.M == a.q && a.ib != a.Y.W.Fb()) {
					for (b = 0; b < c; b++) {
						a.r = Hz(a.V.g, -1, a.o, a, a.M, $R(a), a.r);
						fqb(a.o, a.r.g[a.r.a]);
						hqb(a.o, a.r.i[a.r.a]);
						bqb(a.o, a.r.b);
						a.n = a.r.a > 0;
						if (a.n)
							++a.p;
						else
							break
					}
				}
				a.q = a.M
			} else {
				if (a.p < 7) {
					a.r = Hz(a.V.g, -1, a.o, a, a.M, $R(a), a.r);
					fqb(a.o, a.r.g[a.r.a]);
					hqb(a.o, a.r.i[a.r.a]);
					bqb(a.o, a.r.b);
					a.n = a.r.a > 0;
					a.n && ++a.p
				} else
					a.n = false
			}
		}
		function BA(a) {
			this.g = a.toLocaleUpperCase();
			if (pvb(this.g, '#')) {
				this.f = Dub(this.g.substr(1, 2), 16);
				this.d = Dub(this.g.substr(3, 2), 16);
				this.b = Dub(this.g.substr(5, 2), 16)
			} else if (pvb(this.g, 'RGB')) {
				ovb(this.g, '[(),]+', 0);
				this.f = Dub(this.g.substr(1, 2), 10);
				this.d = Dub(this.g.substr(3, 2), 16);
				this.b = Dub(this.g.substr(5, 2), 16)
			} else
				jvb(this.g, 'BLACK') ? (this.f = this.d = this.b = 0) : jvb(this.g, 'WHITE') && (this.f = this.d = this.b = 255);
			this.e = this.f / 256;
			this.c = this.d / 256;
			this.a = this.b / 256
		}
		function hs(a) {
			var b, c, d, e, f, g, h, i, j;
			i = 0;
			a.f = a.k.P.b;
			a.o = 0;
			for (c = 1; c <= a.f; c++) {
				i += a.q[c] = hJ(a.k.P, c);
				a.o = Xub(a.o, a.q[c]);
				a.j[c] = gJ(a.k.P, c)
			}
			if (i == 0) {
				for (d = 1; d <= a.f; d++)
					a.u[d] = (a.a / a.f | 0) + (a.a % a.f >= d ? 1 : 0);
				return
			}
			for (e = 1; e <= a.f; e++)
				a.u[e] = a.v * a.q[e] / i | 0;
			j = a.v;
			for (f = 1; f <= a.f; f++)
				if (a.u[f] <= a.p) {
					a.u[f] = a.p;
					i -= a.q[f];
					j -= a.p
				}
			for (g = 1; g <= a.f; g++)
				a.u[g] > a.p && (a.u[g] = j * a.q[g] / i | 0);
			i = 0;
			for (h = 1; h <= a.f; h++)
				i += a.u[h];
			for (b = 1; b <= a.f; b++)
				a.u[b] += ((a.a - i) / a.f | 0) + ((a.a - i) % a.f >= b ? 1 : 0)
		}
		function Vp(a) {
			var b, c, d, e, f;
			c = a.qb.H.b;
			b = c.g & 512;
			for (f = Xl(a.rb.N.a); f.pos + 1 < f.sz; ) {
				e = Mn(f);
				if (e.hb != 0 || a.a != b || a.k != a.qb.rb.R.a.e) {
					a.j = false;
					RD(e.d, new sq(a));
					if (a.j)
						continue;
					d = Nl(a.i, e.kb);
					d.delAll();
					RD(e.d, new uq(a,d));
					RD(e.c, new wq(a,d));
					d['private'] = e.e == 0;
					Jl(d, $V(e, c));
					Hl(d, e.d.d.length, e.V.L.j + e.a);
					El(d, (e.b & 4) != 0 && Ub(a.qb));
					Fl(d, e.f);
					Il(d, e.j);
					Gl(d, e.d.d[0].c);
					d['team'] = e.i;
					d['teamColor'] = (AA(),
						zA)[0][e.i].g
				}
			}
			Rl(a.i, a.rb.Q.j.j);
			Ll(a.i);
			a.a = b;
			a.k = a.qb.rb.R.a.e
		}
		function Lb(a, b) {
			nb.call(this, a);
			this.T = new Hmb;
			this.N = new Hmb;
			this.R = new oxb;
			this.M = new xlb;
			this.O = new oxb;
			this.V = [];
			this.Q = new pN(this.V);
			this.rb.W = this;
			Zlb(this.rb.X, new nkb(a));
			Zlb(this.rb.X, this);
			this.S = b;
			this.N.k = b;
			this.C = false;
			this.D = -1;
			this.L = false;
			this.I = null;
			vG(this.rb.Q, a);
			Ylb(this.rb.X, this.rb.O = new aJ(this.rb));
			Ylb(this.rb.X, this.rb.f = this.H = new kz(this));
			Ylb(this.rb.X, this.rb.e = this.F = new TI(a));
			Ylb(this.rb.X, this.J = this.Jb());
			Ylb(this.rb.X, this.B = new xy(a))
		}
		function Kpb(a, b, c, d, e, f, g, h, i, j) {
			var k, l, m, n, o, p, q, r, s, t;
			if (!d) {
				d = gg(a.b);
				d.d = b
			}
			p = b.p << 8;
			m = b.i << 8;
			q = e;
			s = f;
			r = g;
			t = h;
			e < 0 && (q = 0);
			f < 0 && (s = 0);
			g > p && (r = p);
			h > m && (t = m);
			(e < p || f < m || g > 0 || h > 0) && Jpb(a, b, c, d, q, s, r, t, i, j);
			if (e >= 0 && f >= 0 && g <= p && h <= m)
				return;
			if (j == 0)
				return;
			for (n = 0; n < 8; n++) {
				o = b.b[n];
				if (!o)
					continue;
				k = (Gqb(),
					Bqb[n]);
				l = Cqb[n];
				q = e;
				s = f;
				r = g;
				t = h;
				k >= 0 && (q = e > k * p ? e : k * p);
				l >= 0 && (s = f > l * m ? f : l * m);
				k <= 0 && (r = g < (k + 1) * p ? g : (k + 1) * p);
				l <= 0 && (t = h < (l + 1) * m ? h : (l + 1) * m);
				q < r && s < t && Ipb(a, b, c, d, o, q, s, r, t, i, j)
			}
		}
		function lp(a) {
			a.g = $doc.getElementById(TEb);
			a.e = false;
			a.a = $doc.getElementById('msgText');
			a.b = null;
			if (!a.a) {
				a.e = true;
				a.f = false;
				a.b = $doc.getElementById('chatmsg');
				if (!a.b) {
					a.b = $doc.createElement(kEb);
					a.b.id = 'chyat-msg';
					a.f = true;
					btb(a.g, a.b)
				}
				a.a = $doc.createElement('input');
				a.a.type = 'text';
				a.a.maxLength = 140;
				a.a.placeholder = 'Message to chat (ENTER - send)';
				Xsb(a.a, 'focus', new qp, false);
				Xsb(a.a, 'blur', new sp, false);
				a.b.style.display = bEb;
				btb(a.b, a.a)
			}
			Xsb(a.a, 'keydown', new up(a), false)
		}
		function Gz(a, b, c, d, e, f, g, h, i) {
			var j, k, l, m, n, o, p, q, r, s, t;
			s = c.e;
			t = c.f;
			r = c.d;
			m = (s >> 5) - 2;
			n = (t >> 5) - 2;
			s -= m << 5;
			t -= n << 5;
			HA(a.d, r, m, n, 5, 5);
			DA(a.d);
			Lz(Mz(a.e, s, t), f);
			vz(a, g, h, 0, a.e, b, -1);
			Mz(a.e, s, t);
			zz(a, a.e, 1, false, true);
			k = f;
			o = (Gqb(),
				Dqb[d + 3 * e + 4]);
			for (q = 0; q < f; q++) {
				if (!Az(a, s, t, o, 0)) {
					k = q;
					break
				}
				s += d;
				t += e;
				Mz(a.e, s, t);
				if (zz(a, a.e, 2, true, true) > 0) {
					k = q;
					break
				}
			}
			if (i)
				for (p = 0; p < a.a.length; p++) {
					j = a.a[p];
					if (j.a > 0 && !!j.b.b) {
						l = new Qz(j.b.b,j.b.a.e - s,j.b.a.f - t);
						i.a[i.a.length] = l
					}
				}
			Cz(a);
			EA(a.d);
			return k
		}
		function Yc(a, b, c) {
			var d, e, f, g, h;
			d = c >= 2 && c <= 4;
			for (e = 0; e < b.f; e++) {
				g = b.e[e];
				erb(g.b, g.a);
				a.a = g.c;
				if (!_qb(g.a, a.ab, 1))
					continue;
				h = false;
				if (!g.e) {
					erb(g.b, a.ab);
					Uqb(g.b, g.g)
				} else {
					if (c == 1)
						continue;
					erb(g.b, g.a);
					$qb(g.b, a.ab);
					Uqb(g.b, g.g);
					if (d) {
						h = true;
						if (c == 3) {
							f = new lrb;
							erb(f, g.a);
							Vy(a._, f);
							jx(g.e, a.G.gc(), f)
						} else
							jx(g.e, a.G.gc(), g.a)
					}
				}
				switch (c) {
					case 0:
						gd(a, g) && (a.J = true);
						break;
					case 1:
						Vc(a, g);
						break;
					case 2:
						_c(a, g);
						break;
					case 3:
						$c(a, g);
						break;
					case 4:
						Xc(a, g);
						break;
					case 5:
						Uc(a, g);
				}
				h && a.G.gc().pc()
			}
		}
		function apb(a, b) {
			var c, d, e;
			a.a = j2(pdb, PCb, 753, a.p * a.i, 0, 1);
			for (d = 0; d < a.p; d++)
				for (e = 0; e < a.i; e++) {
					c = new rlb(a,d,e);
					a.a[d + a.p * e] = c;
					b.W.Gb() && Qkb(c, b)
				}
			switch (a.k.b) {
				case 0:
					_ob(a);
					break;
				case 1:
					bpb(a, a, 0, 2);
					bpb(a, a, 2, 0);
					bpb(a, a, 4, 6);
					bpb(a, a, 6, 4);
					bpb(a, a, 1, 1);
					bpb(a, a, 5, 5);
					bpb(a, a, 3, 3);
					bpb(a, a, 7, 7);
					break;
				case 2:
					$ob(a);
					break;
				case 3:
					bpb(a, a, 0, 4);
					bpb(a, a, 1, 15);
					bpb(a, a, 2, 14);
					bpb(a, a, 3, 13);
					bpb(a, a, 4, 0);
					bpb(a, a, 5, 11);
					bpb(a, a, 6, 10);
					bpb(a, a, 7, 9);
					break;
				default:
					throw dhb(new Iub);
			}
			Rn(b.Z, a);
			tmb(b.Y, a)
		}
		function xG() {
			var a, b;
			U.call(this, null);
			this.q = new MG;
			this.k = new SF;
			this.g = new VE((zF(),
				yF));
			this.b = new bF;
			this.e = new VE((CG(),
				BG));
			this.a = new VE((nG(),
				mG));
			this.f = new VE((oF(),
				nF));
			this.c = new VE((fF(),
				eF));
			this.o = new VE((_F(),
				$F));
			this.n = new VE((UF(),
				TF));
			this.d = new mF;
			this.j = new IF;
			TE(this.q, 0);
			TE(this.e, 512);
			TE(this.a, 1536);
			TE(this.k, 0);
			TE(this.f, 512);
			TE(this.g, qDb);
			TE(this.c, 0);
			TE(this.o, 0);
			a = new oG;
			a.u = -2;
			a.v = 'next';
			fwb(this.a.c, 'next', a);
			b = new oG;
			b.u = -1;
			b.v = bEb;
			fwb(this.a.c, bEb, b)
		}
		function eQ(a, b) {
			var c, d, e, f, g, h, i, j, k, l, m, n;
			k = Pqb(a.M & 15);
			l = Qqb(a.M & 15);
			m = a.fb.e;
			n = a.fb.f;
			i = a.fb.e >> 5;
			j = a.fb.f >> 5;
			h = a.cf();
			a.ff() || b && Z2(a, 127) ? !a.i ? (a.i = new oxb) : (a.i.a = j2(Afb, PCb, 1, 0, 5, 1)) : (a.i = null);
			g = Gz(a.V.g, a, a.fb, k, l, h, !a.ff(), a.bf(), a.i);
			m += k * g;
			n += l * g;
			WO(a, m, n);
			d = m >> 5;
			e = n >> 5;
			if (b) {
				if (i != d || j != e) {
					f = Xob(a.jb.d, d, e, true);
					if (plb(Rob(f.d, f.e >> 8, f.f >> 8), f, 0)) {
						a.jf();
						return
					}
					c = plb(Rob(f.d, f.e >> 8, f.f >> 8), f, 1);
					Z2(c, 150) && a.ib == a.n && !!a.o && !!a.o.Y && _z(a.Y, new MJ)
				}
			}
			WO(a, m, n) && JP(a);
			g < h && a.jf()
		}
		function Jpb(a, b, c, d, e, f, g, h, i, j) {
			var k, l, m, n, o, p, q, r, s, t, u, v, w, A, B;
			u = gg(a);
			u.i = d;
			pqb(u, b, e, f, g, h);
			u.b = c;
			if (i && j > 0) {
				m = e + 1 >> 8;
				o = f + 1 >> 8;
				n = g - 1 >> 8;
				p = h - 1 >> 8;
				for (q = m; q <= n; q++)
					for (r = o; r <= p; r++) {
						k = b.a[q + b.p * r];
						l = k.c;
						if (l) {
							v = l.fb.e - 16;
							A = l.fb.f - 16;
							w = v + (l.v << 5);
							B = A + (l.u << 5);
							v < e && (v = e);
							A < f && (A = f);
							w > g && (w = g);
							B > h && (B = h);
							if (v < w && A < B) {
								t = new yqb;
								pqb(t, b, v, A, w, B);
								t.c = l;
								s = gg(a.b);
								hR(l, s, -1);
								Wpb(s, d);
								t.d = s.e;
								t.f = s.f;
								hR(l, s, 1);
								Wpb(s, d);
								t.e = s.e;
								t.g = s.f;
								t.i = d;
								t.b = c;
								Qn(a.c, t);
								Ipb(a, l.t.d, t, d, l.t, v, A, w, B, false, j)
							}
						}
					}
			}
		}
		function cq(a) {
			a.qb.I ? qf(a.qb.J) ? (Iy.hasMethod(EEb) ? (Iy.emit(EEb, 7),
				undefined) : !!a.f && a.b == 0 && Xp(a),
				a.b = 7) : (Iy.hasMethod(EEb) ? (Iy.emit(EEb, 1),
				undefined) : !!a.f && a.b == 0 && Xp(a),
				a.b = 1) : qf(a.qb.J) ? pf(a.qb.J) ? (Iy.hasMethod(EEb) ? (Iy.emit(EEb, 6),
				undefined) : !!a.f && a.b == 0 && Xp(a),
				a.b = 6) : (Iy.hasMethod(EEb) ? (Iy.emit(EEb, 5),
				undefined) : !!a.f && a.b == 0 && Xp(a),
				a.b = 5) : Vb(a.qb) ? (Iy.hasMethod(EEb) ? (Iy.emit(EEb, 3),
				undefined) : !!a.f && a.b == 0 && Xp(a),
				a.b = 3) : (Iy.hasMethod(EEb) ? (Iy.emit(EEb, 2),
				undefined) : !!a.f && a.b == 0 && Xp(a),
				a.b = 2)
		}
		function oA(a, b) {
			this.cb = new Inb;
			this.db = new Tnb;
			this.ab = new vmb;
			this.bb = j2(deb, PCb, 196, (Clb(),
				Blb).a.length, 0, 1);
			this.T = Tz(this, (Okb(),
				Nkb));
			this.Z = [];
			this.Y = new vmb;
			new Wlb(this);
			this.$ = new kmb;
			this.X = new gmb;
			Fnb(this.cb);
			this._ = 0;
			this.S = gm();
			this.i = Tz(this, (UB(),
				IB));
			Tz(this, xB);
			this.N = Tz(this, PB);
			this.j = new Osb;
			Ylb(this.X, this.k = b);
			Ylb(this.X, this.Q = a);
			Ylb(this.X, this.c = new LI(this));
			Ylb(this.X, this.R = new pJ(this));
			Ylb(this.X, this.P = new jJ(this));
			Ylb(this.X, this.g = new Jz(this));
			this.M = new IM(a.k.b)
		}
		function Bc(a, b, c, d) {
			var e, f, g, h, i, j, k, l, m, n, o;
			rg(b);
			i = c.d;
			if (!i)
				return;
			Hpb(a.Q);
			l = toInt(a._.o) - 32;
			n = toInt(a._.q) - 32;
			m = toInt(a._.p) + 32;
			o = toInt(a._.r) + 32;
			Ipb(a.Q, i, null, i.e, c, l, n, m, o, true, 4);
			e = false;
			f = null;
			if (!!a.I && d) {
				e = true;
				a.R = null;
				f = a.I.db.lb
			}
			for (g = 0; g < a.Q.f; g++) {
				j = a.Q.e[g];
				k = gg(b);
				k.d = j.j;
				k.c = g == 0 && d;
				k.i = jg(a.ob, k.d);
				_pb(k.g, j.i);
				_pb(k.f, c);
				Ypb(k.f, j.i);
				h = j.b;
				if (!!h && !!h.c) {
					k.c = k.c | !d;
					k.e = h.c.db;
					erb(k.a, k.e.mb);
					Tqb(k.a, h.i);
					if (e && _qb(k.a, f, 0)) {
						a.R = k.e;
						erb(a.S, k.a)
					}
				} else {
					wqb(j, k.a);
					Tqb(k.a, k.g)
				}
			}
			tg(b) && (a.J = true)
		}
		function Up(a) {
			var b, c, d, e, f, g, h, i, j;
			j = a.rb.Q.k.a;
			for (c = 0; c < a.d.length; c++) {
				d = a.d[c];
				Wp(a, d) && pl(a.e, d.ib, d.q.A)
			}
			a.d.length = 0;
			a.g.length = 0;
			anb(a.rb.i, new qq(a));
			i = Sb(a.qb);
			h = i ? i.a.b : 0;
			Xn(a.g, FF(a.rb.Q.j, h));
			for (b = 0; b < a.g.length; b++) {
				g = a.g[b];
				f = sl(a.e, g.ib);
				if (!f)
					continue;
				(g.q.g & 15) != 0 && (g.hb |= 4);
				if (g.hb != 0) {
					ml(f, g.n);
					ol(f, g.k);
					ll(f, g.q.n);
					for (e = 0; e < j.length; e++) {
						f[j[e].v] = XT(g, j[e].f)
					}
					f['kills_pvp'] = YT(g, g.V.D) + YT(g, g.V.B);
					nl(f, g.k);
					kl(f, g.q.A)
				}
				f.sortedIndex = b
			}
			ql(a.e);
			if (a.b > 0 && (a.rb._ % 50 == 0 || a.c)) {
				a.e.updateIndex();
				a.c = false
			}
		}
		function bh(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
			b = a.border || 0;
			g = a.texture.element;
			r = a.frameWidth;
			j = a.frameHeight;
			d = $doc.createElement('canvas');
			d.width = 512;
			d.height = 512;
			e = d.getContext('2d');
			h = 512 / (r + 2 * b) | 0;
			i = (a.childs.length / h | 0) + 1;
			for (k = 0; k < a.childs.length; k++) {
				p = k % h;
				q = k / h | 0;
				c = a.childs[k] || null;
				n = c.x;
				o = c.y;
				l = p * (r + 2 * b) + b;
				m = q * (r + 2 * b) + b;
				e.drawImage(g, n, o, r, j, l, m, r, j);
				c.x = l;
				c.y = m
			}
			f = e.getImageData(0, 0, 512, 512);
			dh(f, r, j, h, i, 512);
			e.putImageData(f, 0, 0);
			e.globalAlpha = cDb;
			e.fillStyle = 'black';
			e.fillRect(512 - r, 512 - j, r, j);
			e.globalAlpha = 1;
			vh(a.texture, d)
		}
		function bo(o, a, b, c, d, e, f) {
			var g = o.data;
			var h = o.skeleton;
			a = a & g.dirs - 1;
			var i = ++o.marker;
			var j = o.skeleton.bones;
			h.x = b;
			h.y = c;
			j[0].updateWorldTransform();
			for (var k = 0, l = j.length; k < l; k++) {
				var m = j[k];
				if (m.data.name == o.data.dirRoots[a]) {
					m.parent = null;
					m.marker = i;
					h.x -= m.data.x;
					h.y -= -m.data.y;
					m.scaleX = d * (o.data.scaleX || 1);
					m.scaleY = e * (o.data.scaleY || 1);
					m.rotation = f;
					m.updateWorldTransform()
				}
			}
			var n = true;
			while (n) {
				n = false;
				for (var k = 0, l = j.length; k < l; k++) {
					var m = j[k];
					if (m.marker != i && m.parent && m.parent.marker == i) {
						m.marker = i;
						n = true;
						m.updateWorldTransform()
					}
				}
			}
		}
		function ns(a) {
			var b, c, d;
			this.q = j2(h3, XCb, 7, 5, 15, 1);
			this.j = j2(h3, XCb, 7, 5, 15, 1);
			this.u = j2(h3, XCb, 7, 5, 15, 1);
			this.d = a;
			this.k = a.rb;
			this.i = sprites.get('teambar-edges');
			this.r = j2(_ab, PCb, 0, 5, 2, 1);
			for (b = 1; b <= 4; b++)
				this.r[b] = sh('teambar-' + (AA(),
					vA)[xA[b]]);
			this.v = 600;
			this.a = this.v - 2 * this.i.frameWidth;
			this.n = this.i.frameHeight;
			c = new kp;
			fo(this, c);
			this.b = c.d;
			this.c = this.b.b;
			Xh(this.b, this.v, this.n);
			this.c.id = 'teamWnd';
			d = (dib(),
				c.$).style;
			d['position'] = (A0(),
				'absolute');
			d['top'] = (_0(),
				$Eb);
			d['left'] = '50.0%';
			d[jEb] = (-this.v / 2 | 0) + 'px';
			this.e = this.b.f;
			Xsb(this.c, IDb, new os(this), false)
		}
		function bj(a, b, c, d, e) {
			var f, g, h, i, j, k, l;
			l = PE(a.i.q, b[d]);
			g = -1;
			if ((l.i & 1) != 0) {
				k = PE(a.i.q, b[c]);
				(k.i & 1) != 0 || (g = k.f)
			}
			f = l.e;
			if (l.n >= 0) {
				h = 0;
				cj(a, b[c]) && (h |= 1);
				cj(a, b[d + 1]) && (h |= 2);
				cj(a, b[e]) && (h |= 4);
				cj(a, b[d - 1]) && (h |= 8);
				h == 15 && (f = l.n)
			}
			l.q == 2 && cj(a, b[e]) && f != -1 && a.j[f] != -1 && (f = a.j[f]);
			if (l.s == 9) {
				h = 0;
				ej(a, l, b[d + 1]) && (h |= 1);
				ej(a, l, b[e]) && (h |= 2);
				ej(a, l, b[d - 1]) && (h |= 4);
				ej(a, l, b[c]) && (h |= 8);
				f = l.p[h]
			}
			i = g & 255 | (l.j & 255) << 8 | (f & 255) << 16;
			if (l.q != 2) {
				j = 0;
				cj(a, b[d + 1]) && (j |= 1);
				cj(a, b[e]) && (j |= 4);
				cj(a, b[e - 1]) && (j |= 8);
				cj(a, b[d - 1]) && (j |= 16);
				cj(a, b[c]) && (j |= 64);
				i |= j << 24
			}
			return i
		}
		function sj(a) {
			var b;
			a.p = a.d.getContext(zDb, {
				antialias: true
			});
			Ttb(a.p, 0, 0, a.d.width, a.d.height);
			b = $doc.createElement('canvas');
			b.width = 4;
			b.height = 4;
			a.t = new Texture;
			vh(a.t, b);
			a.B = tk(a.D, a.p);
			a.v = a.p.createBuffer();
			a.u = new Float32Array(32);
			a.n = Mtb(a.p, a.B, 'u_display');
			a.e = Mtb(a.p, a.B, 'u_center');
			a.G = Mtb(a.p, a.B, 'u_zoom');
			a.C = Mtb(a.p, a.B, 'u_scale');
			a.j = Mtb(a.p, a.B, 'u_color');
			Gtb(a.p, 34962, a.v);
			Htb(a.p, 34962, a.u, 35048);
			a.A = Ltb(a.p, a.B, 'a_position');
			Ktb(a.p, a.A);
			a.o = Mtb(a.p, a.B, 'u_frame');
			Stb(a.p, a.B);
			a.p.enable(3042);
			a.p.blendFuncSeparate(770, 771, 1, 1);
			a.p.clearColor(0, 0, 0, 1)
		}
		function s2(a, b, c) {
			var d, e, f, g, h, i;
			if (b.l == 0 && b.m == 0 && b.h == 0) {
				throw dhb(new _tb)
			}
			if (a.l == 0 && a.m == 0 && a.h == 0) {
				c && (o2 = r2(0, 0, 0));
				return r2(0, 0, 0)
			}
			if (b.h == fHb && b.m == 0 && b.l == 0) {
				return t2(a, c)
			}
			i = false;
			if (b.h >> 19 != 0) {
				b = F2(b);
				i = true
			}
			g = z2(b);
			f = false;
			e = false;
			d = false;
			if (a.h == fHb && a.m == 0 && a.l == 0) {
				e = true;
				f = true;
				if (g == -1) {
					a = q2((S2(),
						O2));
					d = true;
					i = !i
				} else {
					h = H2(a, g);
					i && x2(h);
					c && (o2 = r2(0, 0, 0));
					return h
				}
			} else if (a.h >> 19 != 0) {
				f = true;
				a = F2(a);
				d = true;
				i = !i
			}
			if (g != -1) {
				return u2(a, g, i, f, c)
			}
			if (D2(a, b) < 0) {
				c && (f ? (o2 = F2(a)) : (o2 = r2(a.l, a.m, a.h)));
				return r2(0, 0, 0)
			}
			return v2(d ? a : r2(a.l, a.m, a.h), b, i, f, e, c)
		}
		
		function Hh(a, b, c, d, e, f, g, h, i, j, k) {
			if (Rh(a, b, g, h))
				return;
			i *= b.renderWidth / a.g;
			j *= b.renderHeight / a.g;
			a.f.save();
			Etb(a.f, g, h);
			xtb(a.f, k);
			if (i < 0) {
				a.f.scale(-1, 1);
				i = -i
			}
			if (j < 0) {
				a.f.scale(1, -1);
				j = -j
			}
			g = 0;
			h = 0;
			g += b.renderShiftX / a.g;
			h += b.renderShiftY / a.g;
			if (a.e == null) {
				ptb(a.f, b.texture.element, d * b.frameWidth, c * b.frameHeight, e, f, g - i / 2, h - j / 2, i, j)
			} else {
				Qh(a);
				itb(a.d, 0, 0, e, f);
				ptb(a.d, b.texture.element, d * b.frameWidth, c * b.frameHeight, e, f, 0, 0, e, f);
				a.d.globalCompositeOperation = 'source-atop';
				setFillStyle(a.d, a.e);
				ctxFillRect(a.d, 0, 0, e, f);
				a.d.globalCompositeOperation = 'source-over';
				ntb(a.f, a.c, 0, 0, e, f, g - i / 2, h - j / 2, i, j)
			}
			a.f.restore();
		}
		
		function dh(a, b, c, d, e, f) {
			var g;
			g = new Uint32Array(a.data);
			console.log(d + ' ' + e);
			for (var h = 0; h < d; h++)
				for (var i = 0; i < e; i++) {
					var j = h * (b + 2)
						, k = i * (c + 2);
					g[j + k * f] = g[j + 1 + (k + 1) * f];
					for (var l = 0; l < b; l++) {
						g[j + (l + 1) + k * f] = g[j + (l + 1) + (k + 1) * f]
					}
					g[j + (b + 1) + k * f] = g[j + b + (k + 1) * f];
					for (var m = 0; m < c; m++) {
						g[j + (k + m + 1) * f] = g[j + 1 + (k + m + 1) * f]
					}
					j += b + 1;
					for (var m = 0; m < c; m++) {
						g[j + (k + m + 1) * f] = g[j - 1 + (k + m + 1) * f]
					}
					j -= b + 1;
					k += c + 1;
					g[j + k * f] = g[j + 1 + (k - 1) * f];
					for (var l = 0; l < b; l++) {
						g[j + (l + 1) + k * f] = g[j + (l + 1) + (k - 1) * f]
					}
					g[j + (b + 1) + k * f] = g[j + b + (k - 1) * f];
					k -= c + 1;
					k += b + 1;
					for (var l = 0; l < b; l++) {
						g[j + (l + 1) + k * f] == 0 && (g[j + (l + 1) + k * f] = g[j + (l + 1) + (k - 1) * f])
					}
					k -= b + 1
				}
		}
		function tr(a) {
			var b, c, d;
			d = new kp;
			a.a = d.d;
			Xh(a.a, 550, 460);
			a.j = sprites.get('signs');
			a.d = sprites.get('icons-medals');
			a.i = new Zib;
			fo(a, a.i);
			c = xg(a.i).style;
			c['position'] = (A0(),
				'absolute');
			c['left'] = (_0(),
				'50.0%');
			c['top'] = '50.0%';
			c[jEb] = '-275.0px';
			c['marginTop'] = '-230.0px';
			c['width'] = '550.0px';
			c['height'] = '460.0px';
			Xib(a.i, d);
			a.g = or('Respawn', 22, '(space)', 90, lFb);
			a.f = or('Observe', 34, '(tab)', 97, 'rgb(250,231,155)');
			b = a.g;
			c = (dib(),
				b.$).style;
			c['position'] = 'absolute';
			c['left'] = '73.0px';
			c['bottom'] = '11.0px';
			Gg(b, new vr(a), (t1(),
				t1(),
				s1));
			Xib(a.i, b);
			b = a.f;
			c = b.$.style;
			c['position'] = 'absolute';
			c['right'] = '73.0px';
			c['bottom'] = '11.0px';
			Gg(b, new xr(a), (null, s1));
			Xib(a.i, b);
			Eg(xg(a.i), false)
		}
		function aZ(b, c) {
			var d, e, f, g, h, i, j, k, l;
			l = null;
			i = b.c.e - b.d >> 8;
			g = b.c.e + b.d >> 8;
			j = b.c.f - b.d >> 8;
			h = b.c.f + b.d >> 8;
			k = new iqb;
			for (d = i; d <= g; d++) {
				for (e = j; e <= h; e++) {
					_pb(k, b.c);
					Vpb(k, d - (b.c.e >> 8) << 8, e - (b.c.f >> 8) << 8);
					if (Xpb(k, null, false) < 0)
						continue;
					try {
						l = !l ? b : b.rf();
						l.sf(b, Yob(k.d, k.e, k.f, true))
					} catch (a) {
						a = chb(a);
						if (Z2(a, 25)) {
							f = a;
							qCb(ZY, 'Exception in ServerCircularAreaEffectUnit #1 (it happened again...)', f)
						} else
							throw dhb(a)
					}
					if (!l.jb || !l.jb.d)
						continue;
					try {
						pO(l, c)
					} catch (a) {
						a = chb(a);
						if (Z2(a, 25)) {
							f = a;
							qCb(ZY, 'Exception in ServerCircularAreaEffectUnit # 2(it happened again...)', f)
						} else
							throw dhb(a)
					}
				}
			}
		}
		function Mt(a) {
			var b, c, d, e;
			rrb(a.mb, a.pb.M & 15);
			grb(a.mb, a.pb.fb.d);
			if (a.Y != null) {
				if (a.$ < a.kb._) {
					a.Y = null;
					a.X = null
				}
			}
			if (!a.pb.Y) {
				a.gb = a.pb.fb.e;
				a.hb = a.pb.fb.f;
				a.fb = a.pb.jb.d;
				a.bb = a.gb;
				a.cb = a.hb;
				a.ab = a.fb;
				a.eb = 0;
				return
			}
			a.bb = a.gb;
			a.cb = a.hb;
			a.db = a.ib;
			a.ab = a.fb;
			if (a.W || a.eb == -1) {
				a.gb = It(a);
				a.hb = Jt(a);
				a.ib = a.Pd();
				a.fb = a.pb.jb.d
			}
			if (a.eb == -1) {
				a.eb = 0;
				a.bb = a.gb;
				a.cb = a.hb;
				a.db = a.ib;
				a.ab = a.fb
			} else {
				c = a.pb.L;
				if (!(!c.a && c.e == 0 && c.f == 0 && c.c == 0)) {
					b = c.c;
					d = (Gqb(),
					Bqb[b] * a.bb + Eqb[b] * a.cb + c.e);
					e = Cqb[b] * a.bb + Fqb[b] * a.cb + c.f;
					a.bb = d;
					a.cb = e;
					!!c.d && (a.ab = c.d)
				}
			}
			irb(a.mb, a.bb);
			jrb(a.mb, a.cb);
			CO(a.pb) % 16 >= 8 && a.Od()
		}
		function SBb(a, b, c) {
			if (c < 128) {
				a[b] = (c & 127) << 24 >> 24;
				return 1
			} else if (c < 2048) {
				a[b++] = (c >> 6 & 31 | 192) << 24 >> 24;
				a[b] = (c & 63 | 128) << 24 >> 24;
				return 2
			} else if (c < FDb) {
				a[b++] = (c >> 12 & 15 | 224) << 24 >> 24;
				a[b++] = (c >> 6 & 63 | 128) << 24 >> 24;
				a[b] = (c & 63 | 128) << 24 >> 24;
				return 3
			} else if (c < pHb) {
				a[b++] = (c >> 18 & 7 | 240) << 24 >> 24;
				a[b++] = (c >> 12 & 63 | 128) << 24 >> 24;
				a[b++] = (c >> 6 & 63 | 128) << 24 >> 24;
				a[b] = (c & 63 | 128) << 24 >> 24;
				return 4
			} else if (c < sHb) {
				a[b++] = (c >> 24 & 3 | 248) << 24 >> 24;
				a[b++] = (c >> 18 & 63 | 128) << 24 >> 24;
				a[b++] = (c >> 12 & 63 | 128) << 24 >> 24;
				a[b++] = (c >> 6 & 63 | 128) << 24 >> 24;
				a[b] = (c & 63 | 128) << 24 >> 24;
				return 5
			}
			throw dhb(new Hub('Character out of range: ' + c))
		}
		function YP(a) {
			var b, c, d, e, f, g, h;
			_z(a.Y, new HJ);
			c = new OY(a);
			d = 1;
			AY(c, (a.q & 2) != 0);
			a.t > 0 ? (d = (AA(),
				xA)[a.t]) : (a.q & 4) != 0 ? (d = 5) : ((a.q & 128) != 0 || (a.q & 8) != 0) && (d = ((a.jb.e >> 5) + (a.jb.f >> 5) * 4) % 7);
			d == 0 && (a.q & 1) != 0 && (d = 0);
			a.g >= 0 && (d = a.g);
			FN(c, a.jb);
			kY(c, (a.q & 512) != 0 ? 6 : 5);
			BY(c, 1);
			zY(c, d);
			CY(c, a.t);
			f = 1;
			(a.q & 8) != 0 ? (f = 2) : (a.q & 4) != 0 && (f = 3);
			h = (a.q & 512) != 0 ? 1 : 2;
			for (e = 0; e < 8; e += h) {
				if (!!a.e && a.f == (e + 4) % 8 || (e % 2 == 0 ? a.s : (hC(),
				(a.s * GDb + 414) / 1414 | 0)) <= 0)
					continue;
				b = new XQ(a);
				b.b = d;
				b.d = f;
				FN(b, a.jb);
				b.f = e % 2 == 0 ? a.s : (hC(),
				(a.s * GDb + 414) / 1414 | 0);
				dqb(b.fb, e);
				pO(b, a.Y)
			}
			g = a.Y;
			(a.q & 128) != 0 && Ksb(a.V.j, 3) == 1 && _z(a.Y, new KJ);
			bQ(a);
			GO(a);
			c.V = g;
			WN(c, g);
			XN(c);
			eY(c, c.k)
		}
		function RBb(a, b) {
			var c, d, e, f, g, h, i, j;
			e = 0;
			for (i = 0; i < b; ) {
				++e;
				d = a[i];
				if ((d & 192) == 128) {
					throw dhb(new Hub(UHb))
				} else if ((d & 128) == 0) {
					++i
				} else if ((d & 224) == 192) {
					i += 2
				} else if ((d & 240) == 224) {
					i += 3
				} else if ((d & 248) == 240) {
					i += 4
				} else {
					throw dhb(new Hub(UHb))
				}
				if (i > b) {
					throw dhb(new bub(UHb))
				}
			}
			f = j2(e3, uEb, 7, e, 15, 1);
			j = 0;
			g = 0;
			for (h = 0; h < b; ) {
				d = a[h++];
				if ((d & 128) == 0) {
					g = 1;
					d &= 127
				} else if ((d & 224) == 192) {
					g = 2;
					d &= 31
				} else if ((d & 240) == 224) {
					g = 3;
					d &= 15
				} else if ((d & 248) == 240) {
					g = 4;
					d &= 7
				} else if ((d & 252) == 248) {
					g = 5;
					d &= 3
				}
				while (--g > 0) {
					c = a[h++];
					if ((c & 192) != 128) {
						throw dhb(new Hub('Invalid UTF8 sequence at ' + (h - 1) + ', byte=' + (c >>> 0).toString(16)))
					}
					d = d << 6 | c & 63
				}
				j += gub(d, f, j)
			}
			return f
		}
		function ao(q, a) {
			var b = q.skeleton
				, c = b.drawOrder;
			for (var d = 0, e = c.length; d < e; d++) {
				var f = c[d];
				var g = f.attachment;
				if (!(g instanceof spine.RegionAttachment))
					continue;
				var h = f.bone;
				if (h.marker != q.marker)
					continue;
				var i = b.x + h.worldX + g.x * h.m00 + g.y * h.m01;
				var j = b.y + h.worldY + g.x * h.m10 + g.y * h.m11;
				var k = (h.worldFlipX ? -h.worldScaleX : h.worldScaleX) * g.scaleX;
				var l = (h.worldFlipY ? -h.worldScaleY : h.worldScaleY) * g.scaleY;
				var m = -(h.worldRotation + g.rotation) * Math.PI / 180;
				var n = g.width
					, o = g.height;
				a.save();
				a.translate(i, j);
				a.rotate(m);
				var p = g.rendererObject;
				(k != 1 || l != 1) && a.scale(k, l);
				a.drawImage(q.data.element, p.x, p.y, p.width, p.height, -n / 2, -o / 2, n, o);
				a.restore()
			}
		}
		function N$(a, b) {
			var c, d, e, f, g, h, i, j, k;
			if (b.length == 0) {
				return a.Af(VFb, PGb, -1, -1)
			}
			k = svb(b);
			jvb(k.substr(0, 3), 'at ') && (k = k.substr(3, k.length - 3));
			k = k.replace(/\[.*?\]/g, '');
			g = k.indexOf('(');
			if (g == -1) {
				g = k.indexOf('@');
				if (g == -1) {
					j = k;
					k = ''
				} else {
					j = svb(k.substr(g + 1, k.length - (g + 1)));
					k = svb(k.substr(0, g))
				}
			} else {
				c = k.indexOf(')', g);
				j = k.substr(g + 1, c - (g + 1));
				k = svb(k.substr(0, g))
			}
			g = lvb(k, uvb(46));
			g != -1 && (k = k.substr(g + 1, k.length - (g + 1)));
			(k.length == 0 || jvb(k, 'Anonymous function')) && (k = PGb);
			h = mvb(j, uvb(58));
			e = nvb(j, uvb(58), h - 1);
			i = -1;
			d = -1;
			f = VFb;
			if (h != -1 && e != -1) {
				f = j.substr(0, e);
				i = I$(j.substr(e + 1, h - (e + 1)));
				d = I$(j.substr(h + 1, j.length - (h + 1)))
			}
			return a.Af(f, k, i, d)
		}
		function qM(a, b) {
			var c, d, e, f, g;
			f = a.p = b.ad(null);
			f == 255 && (a.e = RE(a.j.Q.b, b));
			(f & 1) != 0 && vrb(a.q, f == 255, b) && _z(a.j, new zJ);
			if ((f & 2) != 0) {
				for (d = 0; d < 4; d++) {
					a.k[d] = SD(a.a, d) ? SD(a.a, d).n.b.u : -1
				}
				UD(a.a, f == 255, b);
				_z(a.j, new uJ);
				if ((f & 1) == 0) {
					for (e = 0; e < 4; e++) {
						if (a.k[e] != (SD(a.a, e) ? SD(a.a, e).n.b.u : -1)) {
							_z(a.j, new zJ);
							break
						}
					}
				}
			}
			(f & 8) != 0 && UD(a.s, f == 255, b) && _z(a.j, new AJ);
			if ((f & 4) != 0) {
				a.v = Ekb(a.j, b);
				a.A = b.ad(null);
				a.u = b._c(null)
			}
			(f & 16) != 0 && (a.c = RE(a.j.Q.b, b));
			if ((f & 32) != 0) {
				a.t = YI(a.j.O, b.ad(null));
				a.n = b.ad(null);
				a.g = b._c(null)
			}
			(f & 64) != 0 && Lrb(a.i, f == 255, b);
			a.f.a = j2(Afb, PCb, 1, 0, 5, 1);
			g = yk(b);
			for (c = 0; c < g; c++) {
				gxb(a.f, Smb((Clb(),
					zlb), a, b))
			}
			ZL(a.b, b);
			return f != 0
		}
		function dq(a) {
			if (a.b > 0) {
				if (!a.qb.I) {
					if (qf(a.qb.J) && !a.qb.K)
						return;
					Jb(a.qb)
				}
				Iy.hasMethod(EEb) ? (Iy.emit(EEb, 0),
					undefined) : !!a.f && Eg(xg(a.f.i), false);
				a.b = 0
			} else {
				a.qb.I ? qf(a.qb.J) ? (Iy.hasMethod(EEb) ? (Iy.emit(EEb, 7),
					undefined) : !!a.f && a.b == 0 && Xp(a),
					a.b = 7) : (Iy.hasMethod(EEb) ? (Iy.emit(EEb, 1),
					undefined) : !!a.f && a.b == 0 && Xp(a),
					a.b = 1) : qf(a.qb.J) ? pf(a.qb.J) ? (Iy.hasMethod(EEb) ? (Iy.emit(EEb, 6),
					undefined) : !!a.f && a.b == 0 && Xp(a),
					a.b = 6) : (Iy.hasMethod(EEb) ? (Iy.emit(EEb, 5),
					undefined) : !!a.f && a.b == 0 && Xp(a),
					a.b = 5) : Vb(a.qb) ? (Iy.hasMethod(EEb) ? (Iy.emit(EEb, 3),
					undefined) : !!a.f && a.b == 0 && Xp(a),
					a.b = 3) : (Iy.hasMethod(EEb) ? (Iy.emit(EEb, 2),
					undefined) : !!a.f && a.b == 0 && Xp(a),
					a.b = 2)
			}
		}
		function Zb(a, b) {
			var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;
			if (qf(a.J))
				return;
			p = b.i;
			g = p.v;
			q = (g.f & 2) != 0 ? g.u : p.ib;
			l = p.ib == a.S || !!a.k && ZV(a.k, p.ib);
			o = fA(a.rb, q);
			if (!o)
				return;
			k = new oxb;
			n = false;
			e = b.b;
			for (i = 0; i < e.length; i++) {
				e[i] == a.S && (l = true);
				!!a.k && ZV(a.k, e[i]) && (l = true);
				if (e[i] == q)
					n = true;
				else {
					d = fA(a.rb, e[i]);
					!!d && (k.a[k.a.length] = d,
						true)
				}
			}
			m = new Avb;
			if (k.a.length > 0) {
				zvb(m, o.q.A + ' was killed by ');
				for (j = 0; j < k.a.length; j++) {
					j > 0 && (m.a += ', ',
						m);
					zvb(m, ($Bb(j, k.a.length),
						k.a[j]).q.A)
				}
			} else
				n ? zvb(m, o.q.A + ' killed himself') : zvb(m, o.q.A + ' was destroyed my matrix');
			pm(Iy, 'kill', m.a);
			c = [];
			for (h = 0; h < k.a.length; h++) {
				c[h] = ($Bb(h, k.a.length),
					k.a[h]).q.A
			}
			f = [];
			f[0] = o.q.A;
			rm(Iy, c, f, l)
		}
		function Gh(a, b, c, d, e, f, g, h, i, j) {
			var k;
			if (Rh(a, b, g, h))
				return;
			i *= b.renderWidth / a.g;
			j *= b.renderHeight / a.g;
			k = false;
			if (i < 0 || j < 0) {
				a.f.save();
				Etb(a.f, g, h);
				if (i < 0) {
					a.f.scale(-1, 1);
					i = -i
				}
				if (j < 0) {
					a.f.scale(1, -1);
					j = -j
				}
				g = 0;
				h = 0;
				k = true
			}
			g += b.renderShiftX / a.g;
			h += b.renderShiftY / a.g;
			if (a.e == null) {
				ptb(a.f, b.texture.element, d * b.frameWidth, c * b.frameHeight, e, f, g - i / 2, h - j / 2, i, j)
			} else {
				Qh(a);
				e > a.c.width && (e = a.c.width);
				f > a.c.height && (f = a.c.height);
				itb(a.d, 0, 0, e, f);
				ptb(a.d, b.texture.element, d * b.frameWidth, c * b.frameHeight, e, f, 0, 0, e, f);
				a.d.globalCompositeOperation = 'source-atop';
				setFillStyle(a.d, a.e);
				ctxFillRect(a.d, 0, 0, e, f);
				a.d.globalCompositeOperation = 'source-over';
				ntb(a.f, a.c, 0, 0, e, f, g - i / 2, h - j / 2, i, j)
			}
			k && (a.f.restore(),
				undefined)
		}
		function Qu(a) {
			var b, c, d, e;
			b = 0;
			a.pb.J == 4 ? (b = 5) : cS(a.pb) ? (b = 2) : a.pb.B == 18 ? (b = 3) : CO(a.pb) > 0 ? (b = 4) : a.G == 1 && (b = 1);
			if (a.L != b || a.K != a.pb.v.u || !a.ob || Cu) {
				a.L = b;
				a.K = a.pb.v.u;
				if (b == 2) {
					c = XE(a.pb.v, a.pb.ib)
				} else {
					c = a.pb.v.p.length > 0 ? YE(a.pb.v, a.pb.ib) : a.pb.H.q;
					c != null && c.length > 0 && c.charCodeAt(0) == 63 && (c += '' + a.pb.H.A)
				}
				ht(a, sprites.get(c));
				if (!!a.ob && !!mh(a.ob)) {
					if (!(a.ob.loaded > 0)) {
						hh(a.ob);
						c = 'default'
					}
				} else
					c = 'default';
				c = qv(a.L, c);
				ht(a, sprites.get(c));
				a.J = mh(a.ob);
				d = a.ob.spine || null;
				d ? (!a.P || d != a.P.data) && (a.P = (e = {
					data: d,
					skeleton: new spine.Skeleton(d.skeleton),
					state: new spine.AnimationState(d.animation),
					marker: 0
				},
					e.state.setAnimationByName(0, e.data.anims['idle'].name, true),
					e)) : (a.P = null)
			}
		}
		function Lpb(a, b, c, d) {
			var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, A;
			a.a = 100000;
			u = b.e;
			w = b.f;
			for (n = 0; n < a.f; n++) {
				t = a.e[n];
				if (t.j != c.d)
					continue;
				if (!t.b) {
					_pb(a.d, c);
					Wpb(a.d, t.i);
					v = a.d.e;
					A = a.d.f;
					h = v - u < 0 ? -(v - u) : v - u;
					k = A - w < 0 ? -(A - w) : A - w;
					g = $wnd.Math.sqrt(h * h + k * k);
					if (g < a.a) {
						a.a = g;
						_pb(d, a.d)
					}
				}
				if (t.b) {
					_pb(a.d, c);
					Wpb(a.d, t.i);
					v = a.d.e;
					A = a.d.f;
					p = t.b.d;
					r = t.b.f;
					q = t.b.e;
					s = t.b.g;
					e = (p + q) / 2 | 0;
					f = (r + s) / 2 | 0;
					o = Rpb(p, r, q, s, u, w, v, A);
					if (o) {
						h = v - u < 0 ? -(v - u) : v - u;
						k = A - w < 0 ? -(A - w) : A - w;
						g = $wnd.Math.sqrt(h * h + k * k)
					} else {
						i = e - u < 0 ? -(e - u) : e - u;
						l = f - w < 0 ? -(f - w) : f - w;
						j = e - v < 0 ? -(e - v) : e - v;
						m = f - A < 0 ? -(f - A) : f - A;
						g = $wnd.Math.sqrt(i * i + l * l);
						g += $wnd.Math.sqrt(j * j + m * m)
					}
					if (g < a.a) {
						a.a = g;
						_pb(d, a.d);
						if (!o) {
							d.e = e;
							d.f = f
						}
					}
				}
			}
			return a.a < 100000
		}
		function gp(a) {
			var b, c, d, e, f, g;
			this.a = j2(h3, XCb, 7, 9, 15, 1);
			this.d = a;
			this.j = a.rb;
			this.r = sprites.get('stars');
			this.s = a.q.lb.o;
			this.B = this.s.frameWidth;
			e = (b = jE(a.H.b.a),
				b ? b.b : 0);
			this.g = 0;
			f = this.j.Q.q.b;
			for (d = 0; d < f.length; d++)
				f[d].d <= e && ++this.g;
			this.t = j2(h3, XCb, 7, this.g, 15, 1);
			this.g = 0;
			for (c = 0; c < f.length; c++)
				f[c].d <= e && (this.t[this.g++] = c);
			this.e = (Jd(),
				Gd).c < 1200 ? 10 : 12;
			this.p = (this.g + this.e - 1) / this.e | 0;
			this.A = this.e * this.B;
			this.k = this.p * this.B;
			g = new kp;
			fo(this, g);
			this.b = g.d;
			this.c = this.b.b;
			Xh(this.b, this.A, this.k);
			this.c.id = 'layerBuild';
			this.c.style.position = 'absolute';
			this.c.style.bottom = '10px';
			this.c.style.right = '10px';
			this.c.style.zIndex = 110;
			this.f = this.b.f;
			Xsb(this.c, IDb, new ip(this), false)
		}
		function Ar(a) {
			var b, c, d, e, f, g;
			b = false;
			if (a.k == null) {
				d = a.q.t.n;
				uo(a, 4, 4, 4);
				lo(a, a.g = new Qo(a,256,'',null,null));
				no(a, 2);
				lo(a, a.a[0] = new Qo(a,128,Iy.__loc('accept'),jh(d, 'yes'),new Cr(a)));
				lo(a, a.a[1] = new Qo(a,128,Iy.__loc('reject'),jh(d, 'no'),new Er(a)));
				no(a, 7);
				lo(a, a.a[2] = new Qo(a,128,Iy.__loc('remember'),jh(d, 'yes_yes'),new Gr(a)));
				lo(a, a.a[3] = new Qo(a,128,Iy.__loc('remember'),sprites.get('no_no'),new Ir(a)));
				no(a, 4);
				yo(a, true, true);
				b = true
			}
			f = a.e + 500 >= Date.now();
			g = pU(a.q.G);
			if (a.d != g) {
				a.d = g;
				a.f = 0
			}
			e = g ? XV(g, a.f) : null;
			if (a.b != e || a.c != f || b) {
				a.b = e;
				a.c = f;
				for (c = 0; c < a.a.length; c++)
					Po(a.a[c], !f);
				Po(a.g, !f);
				if (e) {
					a.g.d = bm(a.C.S, e.a).A + ' ' + Iy.__loc('wants_to_join_squad');
					vo(a, true)
				} else
					vo(a, false)
			}
			xo(a)
		}
		function is(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n;
			a.g = false;
			j = Fb(a.d);
			uM(j, a.d.G);
			zh(a.b, a.v, a.n);
			if (!a.t)
				return;
			hs(a);
			a.e.textBaseline = 'middle';
			l = 0;
			ks(a, a.i, 0, 0);
			l += a.i.frameWidth;
			for (b = 1; b <= a.f; b++) {
				k = a.u[b];
				c = a.r[b];
				f = c.frameWidth;
				m = l;
				d = a.q[b] + '';
				e = ' +' + a.j[b];
				Yh(a.b, (My(),
					Jy), 12);
				h = ~~ttb(a.e, d).width;
				Yh(a.b, Jy, 10);
				i = ~~toInt(ttb(a.e, e).width);
				g = h + i;
				ks(a, c, 0, l);
				m += f;
				if (a.o == a.q[b] && a.o > 0) {
					n = l + (k / 2 | 0) - (g / 2 | 0) - f - f;
					ls(a, c, 1, m, n - m, a.n);
					m = n;
					ks(a, c, 2, n);
					m += f;
					ls(a, c, 3, m, g + f * 2, a.n);
					m += g + f * 2;
					ks(a, c, 4, m);
					m += f;
					n = l + k - f;
					ls(a, c, 1, m, n - m, a.n)
				} else {
					ls(a, c, 1, m, k - f * 2, a.n)
				}
				m = l + k - f;
				ks(a, c, 5, m);
				g = h + i;
				m = l + (k / 2 | 0) - (g / 2 | 0);
				a.e.fillStyle = 'white';
				Yh(a.b, Jy, 12);
				Jh(a.b, d, m, a.n / 2 | 0);
				m += h;
				Yh(a.b, Jy, 10);
				Jh(a.b, e, m, a.n / 2 | 0);
				l += k
			}
			ks(a, a.i, 1, l)
		}
		function an() {
			bombermine.service('Game', ['localize', function(b) {
				var c = Iy;
				c.__loc = function(a) {
					return b.getString(a)
				}
				;
				c.__locMsg = function(a) {
					return b.getStringMsg(a)
				}
				;
				return c
			}
			]);
			$wnd.requestAnimationFrame = function() {
				return $wnd.requestAnimationFrame || $wnd.webkitRequestAnimationFrame || $wnd.mozRequestAnimationFrame || $wnd.oRequestAnimationFrame || $wnd.msRequestAnimationFrame || function(a, b) {
					return $wnd.setTimeout(function() {
						a((new Date).getTime())
					}, 16.666666666666668)
				}
			}();
			$wnd.cancelAnimationFrame = function() {
				return $wnd.cancelAnimationFrame || $wnd.webkitCancelAnimationFrame || $wnd.mozCancelAnimationFrame || $wnd.oCancelAnimationFrame || $wnd.msCancelAnimationFrame || function(a) {
					return $wnd.cancelTimeout(a)
				}
			}()
		}
		function aj(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p;
			k = b[d];
			o = a.i.o.b;
			if (k == -1)
				return -1;
			p = o[k];
			if (k == a.i.j.e || p.b == 2)
				return p.a;
			l = b[c - 1];
			a.n[0] = l != k && l != -1 && o[l].b != 2;
			l = b[c];
			a.n[1] = l != k && l != -1 && o[l].b != 2;
			l = b[c + 1];
			a.n[2] = l != k && l != -1 && o[l].b != 2;
			l = b[d - 1];
			a.n[3] = l != k && l != -1 && o[l].b != 2;
			l = b[d + 1];
			a.n[5] = l != k && l != -1 && o[l].b != 2;
			l = b[e - 1];
			a.n[6] = l != k && l != -1 && o[l].b != 2;
			l = b[e];
			a.n[7] = l != k && l != -1 && o[l].b != 2;
			l = b[e + 1];
			a.n[8] = l != k && l != -1 && o[l].b != 2;
			if (!a.n[0] && !a.n[1] && !a.n[2] && !a.n[3] && !a.n[5] && !a.n[6] && !a.n[7] && !a.n[8])
				return p.a;
			n = p.a;
			if (n == -1)
				return -1;
			for (j = 0; j < 4; j++) {
				f = j & 1;
				h = j >> 1;
				g = f * 2 - 1;
				i = h * 2 - 1;
				a.n[4 + g] ? a.n[4 + i * 3] ? (m = 2) : (m = 13 - g * 2) : a.n[4 + i * 3] ? (m = 13 - i * 8) : a.n[4 + g + i * 3] ? (m = 13 - g * 2 - i * 8) : (m = 0);
				m += f + h * 4;
				n |= m << 8 + j * 6
			}
			return n
		}
		function yo(a, b, c) {
			var d, e, f, g, h;
			h = Xub(16, a.P + 5);
			e = Xub(16, a.Q + 5);
			Xh(a.o, h, e);
			d = a.p.style;
			d.removeProperty('top');
			d.removeProperty('bottom');
			d.removeProperty('left');
			d.removeProperty('right');
			g = xg(a.R).style;
			g['width'] = h + (_0(),
				'px');
			g['height'] = e + 'px';
			g['top'] = '';
			g['bottom'] = '';
			g['left'] = '';
			g['right'] = '';
			f = null;
			if ((a.B & 1) != 0) {
				f = xg(a.D).style;
				f['top'] = '';
				f['bottom'] = ''
			}
			a.j = 0;
			if (b) {
				d.right = '0px';
				!!g && (g['right'] = KEb,
					undefined);
				a.k = m2(f2(h3, 1), XCb, 7, 15, [0, 8, h])
			} else {
				d.left = '0px';
				!!g && (g['left'] = KEb,
					undefined);
				a.k = m2(f2(h3, 1), XCb, 7, 15, [0, h - 8, h]);
				++a.j
			}
			if (c) {
				d.bottom = '0px';
				g['bottom'] = KEb;
				!!f && (f['top'] = '5.0px',
					undefined);
				a.n = m2(f2(h3, 1), XCb, 7, 15, [0, 8, e])
			} else {
				d.top = '0px';
				g['top'] = KEb;
				!!f && (f['bottom'] = '5.0px',
					undefined);
				a.n = m2(f2(h3, 1), XCb, 7, 15, [0, e - 8, e]);
				a.j += 3
			}
			vo(a, a.T);
			a.u = true
		}
		function Fp(a, b) {
			var c;
			po(a);
			no(a, 4);
			uo(a, 2, 2, 2);
			a.O = -1;
			mo(a, new Qp(a,'fun','180,180,180'), 0);
			mo(a, new Qp(a,'money','180,180,0'), 0);
			mo(a, new Qp(a,'kills','255,134,134'), 0);
			oo(a);
			mo(a, new Qp(a,'kills_mob','134,255,134'), 0);
			mo(a, new Qp(a,_Eb,'0,174,255'), 0);
			oo(a);
			mo(a, new Qp(a,aFb,'0,174,255'), 5);
			uo(a, 10, 10, 10);
			a.O = 4;
			mo(a, new Op(a,'bomb'), 0);
			mo(a, new Op(a,'power'), 0);
			mo(a, new Op(a,'scate'), 0);
			mo(a, new Op(a,'bat'), 0);
			uo(a, 3, 3, 3);
			a.O = 3;
			lo(a, new Mp(a,'kick'));
			mo(a, new Mp(a,'jelly'), 0);
			lo(a, new Mp(a,'key'));
			mo(a, new Mp(a,'detonator'), 0);
			mo(a, new Mp(a,'plutonium'), 5);
			for (c = 0; c < 8; c++) {
				lo(a, new Ip(a,c));
				c % 2 == 1 && no(a, c == 3 ? 4 : 0)
			}
			!b && (b = {
				'alignX': 'left',
				'alignY': 'top'
			});
			yo(a, jvb('right', b.alignX.toLowerCase()), jvb('bottom', b.alignY.toLowerCase()))
		}
		function Gs(a) {
			var b, c, d, e;
			fo(a, a.e = new ct);
			qs((dib(),
				a.$).style);
			b = $doc.createElement(kEb);
			rs(b.style);
			a_(a.$, b);
			e = a.$.style;
			e['width'] = (_0(),
				'206.0px');
			e['height'] = '220.0px';
			e['left'] = '-250.0px';
			e['bottom'] = '100.0px';
			e[LEb] = vFb;
			c = new ct;
			a.b = new Qs;
			(d = xg(a.b).style,
				f0(),
				d)['cssFloat'] = 'right';
			bt(c, a.b);
			a.i = new Ajb;
			ss(xg(a.i).style);
			bt(c, a.i);
			a.a = new Ajb;
			xg(a.a).style[sFb] = '12px';
			bt(c, a.a);
			c.$.style['min-height'] = '64px';
			bt(a.e, c);
			a.d = new et;
			bt(a.e, a.d);
			a.c = new Os;
			e = xg(a.c).style;
			e['position'] = (A0(),
				'absolute');
			e['left'] = '22.0px';
			e['bottom'] = '12.0px';
			e['width'] = '78.0px';
			e['height'] = '28.0px';
			bt(a.e, a.c);
			a.g = new Os;
			e = xg(a.g).style;
			e['position'] = 'absolute';
			e['right'] = '22.0px';
			e['bottom'] = '12.0px';
			e['width'] = '78.0px';
			e['height'] = '28.0px';
			bt(a.e, a.g);
			Gg(a.c, new Js(a), (t1(),
				t1(),
				s1));
			Gg(a.g, new Ls(a), (null,
				s1))
		}
		function Eib(a) {
			switch (a) {
				case 'blur':
					return 4096;
				case qGb:
					return qDb;
				case aHb:
					return 1;
				case 'dblclick':
					return 2;
				case 'focus':
					return 2048;
				case 'keydown':
					return 128;
				case 'keypress':
					return 256;
				case 'keyup':
					return 512;
				case oHb:
					return AEb;
				case 'losecapture':
					return 8192;
				case IDb:
					return 4;
				case 'mousemove':
					return 64;
				case 'mouseout':
					return 32;
				case 'mouseover':
					return 16;
				case 'mouseup':
					return 8;
				case 'scroll':
					return xEb;
				case 'error':
					return FDb;
				case JDb:
				case KDb:
					return 131072;
				case MDb:
					return 262144;
				case 'paste':
					return fHb;
				case LDb:
					return 1048576;
				case 'touchmove':
					return pHb;
				case 'touchend':
					return gHb;
				case 'touchcancel':
					return 8388608;
				case 'gesturestart':
					return qHb;
				case 'gesturechange':
					return rHb;
				case 'gestureend':
					return sHb;
				default:
					return -1;
			}
		}
		function _c(a, b) {
			var c, d, e, f, g, h, i, j, k, l, m, n, o;
			f = a.G.gc();
			c = new srb;
			e = b.b;
			o = b.g;
			k = b.i.c;
			for (h = 0; h < k.length; h++) {
				n = k[h];
				if (_qb(e, n.mb, 32)) {
					qrb(c, n.mb);
					Tqb(c, o);
					c.a = Hqb(o.c, c.a);
					qrb(n.lb, c);
					a.A && Xqb(c, a.u, a.v) && (a.A = a.A & !Sc(a, b.f, n));
					n.Ed(f)
				}
			}
			d = b.i.b;
			for (i = 0; i < d.length; i++) {
				n = d[i];
				if (_qb(e, n.mb, 32)) {
					qrb(c, n.mb);
					Tqb(c, o);
					c.a = Hqb(o.c, c.a);
					qrb(n.lb, c);
					a.A && Xqb(c, a.u, a.v) && (a.A = a.A & !Sc(a, b.f, n));
					n.Ed(f)
				}
			}
			m = b.i.g;
			for (j = 0; j < m.length; j++) {
				n = m[j];
				if (_qb(e, n.mb, 32)) {
					qrb(c, n.mb);
					Tqb(c, o);
					c.a = Hqb(o.c, c.a);
					qrb(n.lb, c);
					a.A && Xqb(c, a.u, a.v) && Xqb(b.a, a.u, a.v) && (a.A = a.A & !Sc(a, b.f, n));
					n.Fd(f, b)
				}
			}
			l = b.i.d;
			for (g = 0; g < l.length; g++) {
				n = l[g];
				if (_qb(e, n.mb, 32)) {
					qrb(c, n.mb);
					Tqb(c, o);
					c.a = Hqb(o.c, c.a);
					qrb(n.lb, c);
					a.A && Xqb(c, a.u, a.v) && (a.A = a.A & !Sc(a, b.f, n));
					gx(n, f, b)
				}
			}
		}
		function zo(a, b) {
			var c, d, e, f, g;
			this.A = [];
			this.B = b;
			this.q = a;
			this.C = a.rb;
			g = new kp;
			this.o = g.d;
			Xh(this.o, 0, 0);
			this.p = this.o.b;
			c = this.p.style;
			c.position = 'absolute';
			c.top = '0px';
			c.left = '0px';
			this.r = this.o.f;
			this.G = sprites.get('hud-circle');
			this.J = sprites.get('hud-underscore');
			this.I = sprites.get('hud-slot');
			this.F = sprites.get('hud-border');
			this.H = sprites.get('hud-hide');
			this.R = new Zib;
			fo(this, this.R);
			Xib(this.R, g);
			f = xg(this.R).style;
			f['position'] = (A0(),
				'absolute');
			f['top'] = (_0(),
				KEb);
			f['left'] = KEb;
			f['width'] = KEb;
			f['height'] = KEb;
			f[LEb] = 'right ease-in 0.3s';
			f[MEb] = (p0(),
				'visible');
			if ((b & 1) != 0) {
				this.D = new kp;
				e = 10 + this.H.frameWidth;
				Xh(this.D.d, e, 10 + this.H.frameHeight);
				d = xg(this.D).style;
				d[NEb] = (J_(),
					'pointer');
				d['position'] = 'absolute';
				d['left'] = 5 - e + 'px';
				Gg(this.D, new Wo(this), (t1(),
					t1(),
					s1));
				Xib(this.R, this.D)
			}
		}
		function fd(a, b) {
			var c, d, e, f, g, h, i, j, k;
			ed(a);
			c = a.T.d;
			grb(a.ab, c);
			irb(a.ab, Ry(a._));
			jrb(a.ab, Sy(a._));
			hrb(a.ab, a._.n);
			frb(a.ab, a._.k);
			fqb(a.bb, toInt(Ry(a._)));
			hqb(a.bb, toInt(Sy(a._)));
			Ypb(a.bb, a.T);
			e = new lrb;
			erb(e, a.ab);
			Uqb(e, a.T);
			f = toInt($wnd.Math.floor((e.f - e.e / 2) / 32 - 1));
			g = toInt($wnd.Math.ceil((e.f + e.e / 2) / 32 + 1));
			h = toInt($wnd.Math.floor((e.g - e.b / 2) / 32 - 1));
			i = toInt($wnd.Math.ceil((e.g + e.b / 2) / 32 + 1));
			a.C.c = c;
			a.C.j = c ? c.o : -1;
			a.C.a = (g + f) / 2 | 0;
			a.C.b = (i + h) / 2 | 0;
			a.C.e = (g - f + 2) / 2 | 0;
			a.C.d = (i - h + 2) / 2 | 0;
			a.C.n = a.I ? a.I.kb : -1;
			a.C.i = ((a._.f / 24 | 0) + 8) / 2 | 0;
			a.C.g = ((a._.e / 24 | 0) + 8) / 2 | 0;
			if (a.T.c % 4 == 2) {
				d = a.C.i;
				a.C.i = a.C.g;
				a.C.g = d
			}
			a.C.i = Xub(a.C.i, a.C.e);
			a.C.g = Xub(a.C.g, a.C.d);
			j = ~~(a.bb.e + 0.5);
			k = ~~(a.bb.f + 0.5);
			a.s = Yob(c, j, k, false);
			if (!a.s) {
				if (b) {
					cz(a._);
					fd(a, false)
				} else
					a.s = new zpb(null,16,16)
			}
		}
		function vz(a, b, c, d, e, f, g) {
			var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
			a.f = b;
			p = a.c._;
			for (s = 0; s < a.d.b; s++)
				for (u = 0; u < a.d.a; u++) {
					q = wG(a.b, GA(a.d, s, u));
					m = FA(a.d, s, u);
					f.cb && q >= 4 && dsb(a.i, m, p);
					if (!wz(a, m, f) || q > 4 || q == 4 && c && (d & 4) == 0 || f.cb && g != -1 && q < 4 && bsb(a.i, m, 0) >= g) {
						if (q != 6 || (d & 1) == 0) {
							h = Dz(a);
							h.f = s * 32;
							h.i = u * 32;
							h.g = s * 32 + 32;
							h.j = u * 32 + 32;
							h.e = 10;
							Qn(a.a, h)
						}
					}
				}
			o = a.d.i.f;
			k = a.d.i.e;
			for (j = 0; j < o; j++) {
				l = k[j];
				if (l.c == f)
					continue;
				n = null;
				if (!!l.b && !l.b.Ze() && !OG(l.b, (UB(),
					AB)) && (g == -1 || l.b.W < g)) {
					n = (v = 12,
					Z2(l.b, 37) && (v += 2),
						w = Dz(a),
						w.f = l.a.e - v,
						w.i = l.a.f - v,
						w.g = l.a.e + v,
						w.j = l.a.f + v,
						w.b = l,
						w)
				} else {
					r = l.a.e;
					t = l.a.f;
					if (OG(l.c, (UB(),
						OB))) {
						f.cb && esb(a.i, l.a.d, l.a.e >> 5, l.a.f >> 5, 0, p);
						n = Dz(a);
						n.f = r - 16;
						n.i = t - 16;
						n.g = r + 16;
						n.j = t + 16
					} else if (OG(l.c, DB)) {
						i = l.c;
						if ((d & 4) == 0 && (!VS(i, f.De()) || !OG(f, BB))) {
							n = Dz(a);
							n.f = r - 16;
							n.i = t - 16;
							n.g = r + 16;
							n.j = t + 16
						}
					}
				}
				!!n && Qn(a.a, n)
			}
		}

		function Zf(nicknameCache, playersName, c, d, e) {
			var ctx, g, h, i, textMetrics, k, nameLen, m;
			if (!!nicknameCache.b && jvb(nicknameCache.c, playersName) && nicknameCache.d == d && nicknameCache.e == c && nicknameCache.i == e) {
				return nicknameCache.j;
			}
			if (!nicknameCache.b) {
				nicknameCache.b = $doc.createElement('canvas');
				nicknameCache.j = new Texture();
			}
			nicknameCache.d = d;
			nicknameCache.e = c;
			nicknameCache.c = playersName;
			nicknameCache.i = e;
			ctx = nicknameCache.b.getContext('2d');
			ctx.font = 'bold 11px Tahoma, Arial';
			textMetrics = ctx.measureText(playersName);
			k = 0;
			if (c >= 0) {
				k = 16;
				++k;
			}
			h = 1;
			i = 0;
			nameLen = toInt($wnd.Math.round(textMetrics.width));
			if (d >= 1) {
				h += 4;
				i += 4
			}
			nicknameCache.f = (nameLen / 2 | 0) + (k * 3 / 4 | 0) + h;
			nicknameCache.g = 22;
			htb(nicknameCache.b, k + h + nameLen + i + 1);
			nicknameCache.b.height = 16;
			nicknameCache.a = 16;
			ctx.font = 'bold 11px Tahoma, Arial';
			ctx.fillStyle = 'black';
			if (d >= 1) {
				ctx.globalAlpha = 0.4;
				ctx.fillRect(k, 0, h + nameLen + i, 16);
				ctx.globalAlpha = 1;
			}
			c >= 0 && eh(Xf, ctx, c < 16 ? c + 2 : c - 16);
			m = k + h;
			d >= 1 ? e >= 1 && e <= 4 ? (g = (AA(), zA)[1][e].g) : d == 1 ? (g = '#FFCC00') : (g = '#7AFF4D') : (g = (AA(), zA)[0][e].g);
			ctx.fillStyle = 'rgba(0,0,0,.1)';
			ctx.fillText(playersName, m, 15);
			ctx.fillStyle = 'rgba(0,0,0,.2)';
			ctx.fillText(playersName, m, 14);
			ctx.fillStyle = 'rgba(0,0,0,.5)';
			ctx.fillText(playersName, m, 11);
			ctx.fillText(playersName, m + 1, 12);
			ctx.fillText(playersName, m, 13);
			ctx.fillText(playersName, m - 1, 12);
			ctx.fillStyle = g;
			ctx.fillText(playersName, m, 12);
			vh(nicknameCache.j, nicknameCache.b);
			return nicknameCache.j;
		}

		function ox(a, b, c, d, e, f, g, h) {
			ex();
			var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, A, B, C;
			a.Tc(1);
			s = d != 0 || h;
			i = d != 2 || h;
			q = d != 4 || h;
			t = d != 6 || h;
			v = c.f - c.e / 2;
			w = c.f + c.e / 2;
			B = c.g - c.b / 2;
			C = c.g + c.b / 2;
			m = v + 16;
			n = w - 16;
			o = B + 16;
			p = C - 16;
			j = a.f;
			if (e) {
				if (g) {
					u = c.e;
					l = c.b;
					j.globalAlpha = XDb;
					k = dx % g.frameWidth;
					switch (d) {
						case 0:
							a.Mc(g, 0, w - 16, B, 16, l, k, 0);
							break;
						case 4:
							a.Mc(g, 0, v, B, 16, l, k, 0);
							break;
						case 6:
							a.Mc(g, 0, v, B, u, 16, k, 0);
							break;
						case 2:
							a.Mc(g, 0, v, C - 16, u, 16, k, 0);
					}
					j.globalAlpha = 1
				}
				r = b * 13;
				s && a.Lc(cx, r + 5, n, o, 16, p - o);
				q && a.Lc(cx, r + 3, v, o, 16, p - o);
				t && a.Lc(cx, r + 1, m, B, n - m, 16);
				i && a.Lc(cx, r + 7, m, p, n - m, 16);
				a.Lc(cx, r + (q & t ? 0 : q ? 9 : 10), v, B, 16, 16);
				a.Lc(cx, r + (s & t ? 2 : s ? 9 : 11), n, B, 16, 16);
				a.Lc(cx, r + (q & i ? 6 : q ? 12 : 10), v, p, 16, 16);
				a.Lc(cx, r + (s & i ? 8 : s ? 12 : 11), n, p, 16, 16)
			}
			if (f != null) {
				a.Sc((My(),
					Jy), 13, 0, f, n - m);
				j.textAlign = 'center';
				j.textBaseline = 'middle';
				A = t ? B + 8 : C - 8;
				Gi(a.f, f, (m + n) / 2, A + -1, '255,255,255,1', '0,0,0,1', 1.5)
			}
			j.fillStyle = 'black'
		}
		function Lzb() {
			function e() {
				this.obj = this.createObject()
			}
			;e.prototype.createObject = function(a) {
				return Object.create(null)
			}
			;
			e.prototype.get = function(a) {
				return this.obj[a]
			}
			;
			e.prototype.set = function(a, b) {
				this.obj[a] = b
			}
			;
			e.prototype[PHb] = function(a) {
				delete this.obj[a]
			}
			;
			e.prototype.keys = function() {
				return Object.getOwnPropertyNames(this.obj)
			}
			;
			e.prototype.entries = function() {
				var b = this.keys();
				var c = this;
				var d = 0;
				return {
					next: function() {
						if (d >= b.length)
							return {
								done: true
							};
						var a = b[d++];
						return {
							value: [a, c.get(a)],
							done: false
						}
					}
				}
			}
			;
			if (!Jzb()) {
				e.prototype.createObject = function() {
					return {}
				}
				;
				e.prototype.get = function(a) {
					return this.obj[':' + a]
				}
				;
				e.prototype.set = function(a, b) {
					this.obj[':' + a] = b
				}
				;
				e.prototype[PHb] = function(a) {
					delete this.obj[':' + a]
				}
				;
				e.prototype.keys = function() {
					var a = [];
					for (var b in this.obj) {
						b.charCodeAt(0) == 58 && a.push(b.substring(1))
					}
					return a
				}
			}
			return e
		}
		function Su(a, b) {
			var c, d, e, f, g, h, i, j, k;
			if (!getConfigParam(JFb, false)) {
				if (a.s == null) {
					a.s = j2(_ab, PCb, 0, 4, 2, 1);
					a.u = rh()
				}
				e = Oqb(a.lb.a, a.mb.a);
				d = (Gqb(),
				4 - ((e & 6) >> 1) & 3);
				if (!a.s[d]) {
					c = Hqb(e, (4 - a.pb.a & 3) << 1) & 7;
					f = 0;
					c == 0 && (f = 1);
					c == 4 && (f = -1);
					i = a.ob.renderWidth * (h = a.pb.B == 20 ? 0.75 : 1,
						Bl(a.J, a.A, a.B) ? -h : h);
					g = a.ob.renderHeight * $u(a);
					Ku = $wnd.Math.abs(i);
					Bu = $wnd.Math.abs(g);
					Eu = ~~$wnd.Math.ceil(Ku);
					Du = ~~$wnd.Math.ceil(Bu);
					zu.height < Du && gtb(zu, Du);
					j = Au;
					itb(j, 0, 0, Eu, Du);
					gh(a.ob, j, vl(a.J, a.A, a.C, ~~a.eb), Al(a.J, a.A, a.B, a.C), Ku / 2, Bu / 2, i, g);
					a.s[d] = bl(2000, zu, Eu, Du, 2, f)
				}
				if (!(a.s[d].ready(),
					undefined)) {
					a.t = a.s[d];
					qh(a.u, a.s[d]);
					vh(a.u.texture, a.s[d].buffer);
					b.uc(a.u, a.lb.f, a.lb.g)
				}
			}
			a.J.hasSoul && (k = a.a,
			k != 1 && b.Tc(k),
				b.Ec(a.ob, (a.J.animMirrorLeft ? 3 : 4) * (a.J.idleAnim ? 2 : 1), 0, a.J.soulWidth, a.J.frameHeight, a.lb.f, a.lb.g - a.N + a.ob.renderShiftY, a.J.soulWidth / a.J.frameWidth, 1),
			k != 1 && b.Tc(1),
				undefined)
		}
		
		function loadSprites(BmRenderer) {
			var explosionSprite;
			ewb(BmRenderer.nb, Sub((UB(), BB).b), sprites.get('default'));
			ewb(BmRenderer.nb, Sub(xB.b), sprites.get('ball'));
			ewb(BmRenderer.nb, Sub(MB.b), sprites.get('snowball'));

			explosionSprite = sprites.get('explosion');
			if (!explosionSprite.flag) {
				ah(explosionSprite);
				explosionSprite.flag = true
			}
			ewb(BmRenderer.nb, Sub(CB.b), explosionSprite);

			ewb(BmRenderer.nb, Sub(RB.b), sprites.get('regen'));
			BmRenderer.M = sprites.get('icons');
			ewb(BmRenderer.nb, Sub(FB.b), sprites.get('items'));
			ewb(BmRenderer.nb, Sub(HB.b), sprites.get('langolier'));
			ewb(BmRenderer.nb, Sub(TB.b), sprites.get('font'));
			ewb(BmRenderer.nb, Sub(SB.b), sprites.get('turret'));
			ewb(BmRenderer.nb, Sub(EB.b), sprites.get('gammaProjectile'));
			BmRenderer.e.length = 6;
			setObjectParam(BmRenderer.e, 1, new getSmallBombSkin(4));
			setObjectParam(BmRenderer.e, 0, ly(new getSpriteByName('bomb64x64'), 0.8, 1.5));
			setObjectParam(BmRenderer.e, 2, ly(new getSmallBombSkin(1), 0.9, 1.1));
			setObjectParam(BmRenderer.e, 3, ly(new getSmallBombSkin(2), 0.9, 1.1));
			setObjectParam(BmRenderer.e, 4, my(new getSmallBombSkin(3)));
			setObjectParam(BmRenderer.e, 5, ly(new getSmallBombSkin(5), 0.9, 1.1));
			ewb(BmRenderer.nb, Sub(AB.b), sprites.get('sweets'));
			ewb(BmRenderer.nb, Sub(GB.b), sprites.get('mine'));
			Nu();
			Gu = sprites.get('shield');
			Xf = sprites.get('signs');
			BmRenderer.jb = sprites.get('stars');
		}

		function AA() {
			AA = xhb;
			tA = new BA('#ffffff');
			wA = m2(f2(v6, 1), QFb, 32, 0, [new BA('#ff4b4b'), new BA('#ff7914'), new BA('#f6f63f'), new BA('#26d526'), new BA('#2ee4e2'), new BA('#0000ff'), new BA('#d83dff'), new BA('#000000'), tA]);
			zA = m2(f2(v6, 2), PCb, 329, 0, [m2(f2(v6, 1), QFb, 32, 0, [tA, new BA('#fc6f6f'), new BA('#4984ff'), new BA('#fcfe62'), new BA('#ca7afd'), tA, tA]), m2(f2(v6, 1), QFb, 32, 0, [new BA('#ffcc00'), new BA('#fd3939'), new BA('#286cfc'), new BA('#ffe63d'), new BA('#c262ff'), tA, tA])]);
			sA = gm();
			uA = new BA('#00ff00');
			dm(sA, -3, new BA(RFb));
			dm(sA, -1, new BA('#ffff00'));
			dm(sA, -6, new BA('#ffff00'));
			dm(sA, -2, new BA('#00ffff'));
			dm(sA, -4, new BA(RFb));
			dm(sA, -3, new BA(RFb));
			vA = m2(f2(Ffb, 1), PCb, 2, 6, ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'purple', 'black', 'white']);
			xA = m2(f2(h3, 1), XCb, 7, 15, [8, 0, 5, 2, 6, 1, 3]);
			yA = m2(f2(h3, 1), XCb, 7, 15, [1, 1, 4, 2, 5, 1, 1]);
			Tsb(xA.length == 7 && yA.length == 7 && zA[0].length == 7 && zA[1].length == 7)
		}
		function Dc(a, b, c, d) {
			var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, A, B;
			h = b.pb.eb.Jf();
			q = b.pb.eb.Ce();
			f = a.G.gc();
			p = d.e / 8;
			o = (Gqb(),
			c.c + 1 & 7);
			s = Bqb[o] * p;
			t = Cqb[o] * p;
			i = d.f;
			j = d.g;
			if (h.b == 0 && h.c == 0) {
				v = i - 3.5 * s;
				A = j - 3.5 * t;
				w = i + 3.5 * s;
				B = j + 3.5 * t;
				f.kc(1, 1, 0, 0.5);
				f.lc();
				f.Oc(v, A);
				f.Nc(v, B);
				f.Nc(v - s / 3, B - t);
				f.Oc(v, B);
				f.Nc(v + s / 3, B - t);
				f.Oc(v, A);
				f.Nc(w, A);
				f.Nc(w - s, A + t / 3);
				f.Oc(w, A);
				f.Nc(w - s, A - t / 3);
				f.Uc();
				f.Jc()
			}
			u = q.k.c;
			h.b << 3 == 0 && Ec(a, c, d, 4, true, false);
			h.b << 3 == u - 8 && Ec(a, c, d, 0, true, false);
			h.b << 3 <= (u / 2 | 0) && (h.b << 3) + 8 > (u / 2 | 0) && Ec(a, c, d, 4, false, h.b << 3 != (u / 2 | 0));
			n = q.k.a;
			h.c << 3 == 0 && Ec(a, c, d, 6, true, false);
			h.c << 3 == n - 8 && Ec(a, c, d, 2, true, false);
			h.c << 3 <= (n / 2 | 0) && (h.c << 3) + 8 > (n / 2 | 0) && Ec(a, c, d, 6, false, h.c << 3 != (n / 2 | 0));
			if (c.c == 0 && Z2(f, 98)) {
				e = f;
				g = e.f;
				g.textAlign = 'center';
				g.textBaseline = 'middle';
				for (l = -4; l < 4; l++)
					for (k = -4; k < 4; k++) {
						r = LG(a.rb.Q.q, WU(b.pb, k, l));
						r.c != null && (m = Zh(e, (My(),
							Ly), 13, 0, r.c, 30),
							Kh(e, r.c, i + (k + 0.5) * p, j + (l + 0.5) * p, m == 13 ? '255,255,255,0.85' : '255,255,255,1', m == 13 ? '0,0,0,0.85' : '0,0,0,1', 1))
					}
			}
		}
		function Gqb() {
			Gqb = xhb;
			var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o;
			Bqb = m2(f2(h3, 1), XCb, 7, 15, [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1]);
			Cqb = m2(f2(h3, 1), XCb, 7, 15, [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1]);
			Eqb = m2(f2(h3, 1), XCb, 7, 15, [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1]);
			Fqb = m2(f2(h3, 1), XCb, 7, 15, [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1]);
			zqb = h2(h3, [PCb, XCb], [11, 7], 15, [16, 16], 2);
			for (h = 0; h < 16; h++) {
				Exb(zqb[h], -1);
				for (j = 0; j < 16; j++) {
					a = Esb(Bqb[h] * Bqb[j] + Eqb[h] * Cqb[j]);
					b = Esb(Cqb[h] * Bqb[j] + Fqb[h] * Cqb[j]);
					c = Esb(Bqb[h] * Eqb[j] + Eqb[h] * Fqb[j]);
					d = Esb(Cqb[h] * Eqb[j] + Fqb[h] * Fqb[j]);
					zqb[h][j] = -1;
					for (k = 0; k < 16; k++) {
						if (Bqb[k] == a && Cqb[k] == b && Eqb[k] == c && Fqb[k] == d) {
							zqb[h][j] = k;
							break
						}
					}
				}
			}
			Aqb = h2(h3, [PCb, XCb], [11, 7], 15, [8, 64], 2);
			for (l = 0; l < 16; l += 2) {
				m = Aqb[l >> 1];
				for (j = 0; j < 8; j++)
					for (i = 0; i < 8; i++) {
						e = 2 * i + 1 - 8;
						f = 2 * j + 1 - 8;
						n = e * Bqb[l] + f * Cqb[l];
						o = e * Eqb[l] + f * Fqb[l];
						n += 8;
						o += 8;
						n = n / 2 | 0;
						o = o / 2 | 0;
						m[i + j * 8] = n + o * 8
					}
			}
			Dqb = j2(h3, XCb, 7, 9, 15, 1);
			for (g = 0; g < 8; g++)
				Dqb[Bqb[g] + Cqb[g] * 3 + 4] = g;
			Dqb[4] = 8
		}
		function sr(a) {
			var b, c, d, e, f, g, h, i, j, k, l;
			b = a.a.f;
			Mh(a.a, 528, 365, iFb);
			_h(a.a, 0, 0, 528, 365, 'black');
			Yh(a.a, (My(),
				Jy), 14);
			b.setFillColor(jFb);
			b.textBaseline = 'middle';
			k = 0;
			for (d = 0; d < kr.length; d++) {
				kr[d].length > 0 && Jh(a.a, kr[d], k + lr[d], 17);
				k += ir[d]
			}
			b.setFillColor(kFb);
			for (e = 0; e < 15; e += 2) {
				l = 35 + e * 20;
				b.fillRect(1, l, 526, 20)
			}
			for (f = 0; f < 15; f++)
				if (!!a.e.o[f] && a.e.o[f].ib == a.b.H.c.r) {
					b.setFillColor('rgb(119,113,88)');
					l = 35 + f * 20;
					b.fillRect(1, l, 526, 20)
				}
			Yh(a.a, Ly, 12);
			b.setFillColor('rgb(203,203,203)');
			for (g = 0; g < 15; g++) {
				i = a.e.o[g];
				if (!i)
					continue;
				l = 35 + g * 20;
				h = l + 10;
				k = 0;
				a.n.length = 0;
				Ul(a.k);
				if (oU(i) > 0) {
					Qn(a.n, a.d);
					Tl(a.k, oU(i) - 1)
				}
				rr(a, a.a, ir[0] / 2 | 0, h);
				k += ir[0];
				b.textAlign = 'center';
				Jh(a.a, i.d + '', k + (ir[1] / 2 | 0), h);
				b.textAlign = 'left';
				k += ir[1] + ir[2];
				Jh(a.a, UT(i) + '', k, h);
				k += ir[3];
				Jh(a.a, ST(i) + '', k, h)
			}
			Yh(a.a, Ly, 11);
			for (c = 0; c < 15; c++) {
				i = a.e.o[c];
				if (!i)
					continue;
				l = 35 + c * 20;
				h = l + 10;
				k = ir[0] + ir[1];
				j = i.q.n;
				j != 0 && Fh(a.a, a.j, j - 1, k + (a.j.frameWidth / 2 | 0), h);
				k += a.j.frameWidth + 5;
				Jh(a.a, i.q.A, k, l + 10)
			}
		}

		function iv(a) {
			var b, c, d, e, f, g, h, i;
			a.p = a.pb.N <= 0 || a.q >= 0 && a.q >= a.kb.W.T.f;
			a.W = !a.p;
			Mt(a);
			a.pb.O.f == 5 && !!FO(a.pb) ? av(a, FO(a.pb)) : av(a, null);
			h = XR(a.pb);
			rrb(a.mb, h);
			a.O = a.pb.S;
			a.r = a.pb.B;
			if (a.p) {
				a.M = false;
				a.G == 1 && (wu = 0)
			} else if (bS(a.pb)) {
				a.M = false;
				a.C = false;
				a.G == 1 && (wu = 0)
			} else {
				a.C = a.pb.n;
				a.M && cv(a);
				a.M = true;
				a.G == 1 && (a.pb.c > a.pb.b && a.kb._ >= a.pb.c + 3 ? Pu(a) : (wu = 0))
			}
			if (getConfigParam('showRanks', true)) {
				a.H = a.pb.v.n;
				a.H == -1 && (a.H = vC(a.pb.H))
			} else
				a.H = -1;
			a.pb.O.f == 4 && (a.eb = 0);
			for (c = 0; c < a.o.length; c++)
				a.o[c].j = false;
			if (!a.p) {
				d = a.pb.G;
				if (a.G == 1 && !!d) {
					d.u > 0 && Ou(a, d.u, d.v, d.A);
					if (!!d.o && !!d.o.f) {
						i = d.o.f;
						for (b = 0; b < i.d.d.length; b++) {
							e = SD(i.d, b);
							if (e.c == a.pb.ib)
								continue;
							f = e.d;
							if (!f)
								continue;
							Ou(a, e.e, f, 5)
						}
					}
				}
				a.R = (a.pb.D & 2) != 0;
				a.d = !!a.kb && wG(a.kb.Q, Zz(a.pb.jb)) == 3;
				a.pb.H.g != 0 && (a.ob = null);
				Qu(a)
			}
			Un(a.o, new xv);
			a.V = 0;
			a._ = 0;
			if (a.pb.O.f == 4 || a.pb.O.f == 5) {
				g = a.pb.jb;
				awb(Lu, g) && (a.V = bwb(Lu, g).a + 1);
				ewb(Lu, g, Sub(a.V));
				if (a.Y != null) {
					a._ = 0;
					awb(Mu, g) && (a._ = bwb(Mu, g).a + 1);
					ewb(Mu, g, Sub(a._))
				}
			}
		}

		function jib() {
			var a, b, c;
			b = $doc.compatMode;
			a = m2(f2(Ffb, 1), PCb, 2, 6, [mHb]);
			for (c = 0; c < a.length; c++) {
				if (jvb(a[c], b)) {
					return
				}
			}
			a.length == 1 && jvb(mHb, a[0]) && jvb('BackCompat', b) ? "GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + b + '"/&gt;' : "Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + b + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings."
		}
		function wp(a) {
			var b;
			a.f = new Zib;
			b = xg(a.f).style;
			b['position'] = (A0(),
				'absolute');
			b['left'] = (_0(),
				'-200.0%');
			b['top'] = '20.0px';
			b['width'] = a.d + 'px';
			b['height'] = a.b + 'px';
			b[UEb] = (j_(),
				'solid');
			b[VEb] = '1.0px';
			b[WEb] = 'rgba(0,0,0,.4)';
			a.g = new Zib;
			b = xg(a.g).style;
			b['position'] = 'absolute';
			b['top'] = KEb;
			b['left'] = KEb;
			b['right'] = KEb;
			b['bottom'] = KEb;
			b[UEb] = 'solid';
			b[VEb] = '2.0px';
			b[WEb] = 'rgb(114,114,114)';
			b['backgroundColor'] = 'rgba(51,51,51,.9)';
			a.i = new Zib;
			b = xg(a.i).style;
			b['position'] = 'absolute';
			b['top'] = KEb;
			b['left'] = KEb;
			b['width'] = a.d - 4 + 'px';
			b['bottom'] = KEb;
			b[UEb] = 'solid';
			b[VEb] = '2.0px';
			b[WEb] = 'rgb(255,210,31)';
			a.j = new Zib;
			b = xg(a.j).style;
			b['position'] = 'absolute';
			b['top'] = KEb;
			b['left'] = KEb;
			b['right'] = '30.0px';
			b['bottom'] = KEb;
			b[MEb] = (p0(),
				'hidden');
			Xib(a.f, a.g);
			Xib(a.f, a.j);
			Xib(a.j, a.i);
			b = xg(a.g).style;
			b[xDb] = "'Tahoma', 'Arial'";
			b['fontSize'] = a.a + 'px';
			b['color'] = 'rgb(250,231,155)';
			a.k = new Bjb(ZEb);
			b = xg(a.k).style;
			b['position'] = 'absolute';
			b['top'] = '1.0px';
			b['left'] = $Eb;
			a.n = new Bjb('15');
			b = xg(a.n).style;
			b['position'] = 'absolute';
			b['top'] = '1.0px';
			b['right'] = $Eb;
			Xib(a.g, a.k);
			Xib(a.g, a.n);
			xg(a.f).style[LEb] = 'left ease-in 0.3s';
			fo(a, a.f);
			xp(a)
		}
		function Hz(a, b, c, d, e, f, g) {
			var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
			r = d.S;
			(!g || g.g.length < r + 1) && (g = new Rz(r));
			g.e.a = j2(Afb, PCb, 1, 0, 5, 1);
			g.f.a = j2(Afb, PCb, 1, 0, 5, 1);
			g.a = 0;
			g.c = 0;
			g.d = 0;
			g.g[0] = c.e;
			g.i[0] = c.f;
			v = c.e;
			w = c.f;
			g.b = c.d;
			if ((e & 16) == 0)
				return g;
			if ((f & 8) != 0) {
				t = (Gqb(),
					Bqb[e & 7]);
				u = Cqb[e & 7];
				g.g[1] = v + t * r;
				g.i[1] = w + u * r;
				g.a = 1;
				return g
			}
			k = (v >> 5) - 2;
			l = (w >> 5) - 2;
			v -= k << 5;
			w -= l << 5;
			HA(a.d, c.d, k, l, 5, 5);
			DA(a.d);
			Lz(Nz(a.e, v, w), r);
			vz(a, false, true, f, a.e, d, b);
			m = j2(h3, XCb, 7, 4, 15, 1);
			m[0] = e & 7;
			q = 1;
			(e & 8) != 0 && (q = -1);
			m[1] = m[0] + q & 7;
			m[2] = m[0] - q & 7;
			n = false;
			for (s = 0; s < r; s++) {
				i = 3;
				e % 2 != 0 && (m[i++] = m[1] + q & 7);
				Nz(a.e, v, w);
				zz(a, a.e, 2, false, true);
				n = false;
				for (p = 0; p < i; p++) {
					if (!Az(a, v, w, m[p], f))
						continue;
					t = (Gqb(),
						Bqb[m[p]]);
					u = Cqb[m[p]];
					Nz(a.e, v + t, w + u);
					if (zz(a, a.e, 1, true, false) == 0) {
						v += t;
						w += u;
						t != 0 && u != 0 ? ++g.c : ++g.d;
						n = true;
						break
					}
				}
				if (!n)
					break;
				++g.a;
				g.g[g.a] = v + (k << 5);
				g.i[g.a] = w + (l << 5)
			}
			if (n) {
				Nz(a.e, v, w);
				zz(a, a.e, 2, false, false)
			}
			for (o = 0; o < a.a.length; o++) {
				h = a.a[o];
				if (h.a > 0 && !!h.b.b) {
					j = new Qz(h.b.b,h.b.a.e - v,h.b.a.f - w);
					h.a == 2 && gxb(g.e, j);
					gxb(g.f, j)
				}
			}
			Cz(a);
			EA(a.d);
			return g
		}
		function AW(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o;
			!a.a && (a.a = new IA);
			a.b == null && (a.b = j2(h3, XCb, 7, 8, 15, 1));
			a.c == null && (a.c = j2(h3, XCb, 7, 8, 15, 1));
			HA(a.a, a.fb.d, a.fb.e >> 5, a.fb.f >> 5, 1, 1);
			DA(a.a);
			j = a.a.i.f;
			l = a.a.i.e;
			Exb(a.b, 1);
			Exb(a.c, 1);
			for (e = 0; e < j; e++) {
				f = l[e];
				n = f.a.e >> 5;
				o = f.a.f >> 5;
				if (Z2(f.c, 75)) {
					c = f.c;
					if (c.B != 21 && !(c.O.f >= 3 || c.N <= 0) && !(VS(a, c.v.r > 0 ? c.v.r : c.K) || c.ib == a.ib))
						if (n != 0 || o != 0)
							if (n == 0 || o == 0 || (n < 0 ? -n : n) == (o < 0 ? -o : o)) {
								h = (Gqb(),
									(n < 0 ? -n : n) * 2 <= (o < 0 ? -o : o) ? o >= 0 ? 2 : 6 : (o < 0 ? -o : o) * 2 <= (n < 0 ? -n : n) ? n > 0 ? 0 : 4 : o > 0 ? n > 0 ? 1 : 3 : n > 0 ? 7 : 5);
								a.b[h] = Yub(a.b[h], (n < 0 ? -n : n) > (o < 0 ? -o : o) ? n < 0 ? -n : n : o < 0 ? -o : o)
							}
				} else if (Z2(f.c, 126)) {
					if (n == 0 || o == 0 || (n < 0 ? -n : n) == (o < 0 ? -o : o)) {
						h = (Gqb(),
							(n < 0 ? -n : n) * 2 <= (o < 0 ? -o : o) ? o >= 0 ? 2 : 6 : (o < 0 ? -o : o) * 2 <= (n < 0 ? -n : n) ? n > 0 ? 0 : 4 : o > 0 ? n > 0 ? 1 : 3 : n > 0 ? 7 : 5);
						a.c[h] = Yub(a.c[h], (n < 0 ? -n : n) > (o < 0 ? -o : o) ? n < 0 ? -n : n : o < 0 ? -o : o)
					}
				}
			}
			d = 1;
			b = -1;
			p: for (i = 0; i < 8; i++) {
				if (a.b[i] >= a.c[i])
					continue;
				for (k = 1; k <= a.b[i]; k++) {
					m = GA(a.a, k * (Gqb(),
						Bqb[i]), k * Cqb[i]);
					if (wG(a.V.Q, m) > 4) {
						continue p
					}
				}
				if (d > a.b[i]) {
					d = a.b[i];
					b = i
				}
			}
			EA(a.a);
			if (b != -1) {
				a.f = b;
				g = a.fb.c & 7;
				g == a.f ? wW(a, a.g) : BN(a, Mqb(g, a.f))
			}
		}
		function S() {
			if (vd)
				return;
			vd = new wd;
			UB();
			Clb();
			Qmb(Qmb(Qmb(Blb, (Amb(),
				zmb)), (Trb(),
				Srb)), ylb);
			Qmb(Alb, (Jmb(),
				Imb));
			Qmb(Qmb(Qmb(Qmb(Blb, IB), xB), PB), JB);
			Qmb(Qmb(Qmb(Qmb(Blb, BB), RB), CB), FB);
			Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Blb, OB), HB), TB), wB), yB), NB), EB), LB), (VY(),
				UY));
			Qmb(Qmb(Blb, DB), SB);
			Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Blb, zB), QB), KB), AB), MB), GB);
			Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(zlb, (KH(),
				JH)), (BI(),
				AI)), (AH(),
				zH)), (pH(),
				oH)), (TH(),
				SH)), (TG(),
				SG)), (fH(),
				eH)), (uI(),
				tI));
			Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Qmb(Alb, (vL(),
				uL)), (vK(),
				uK)), ($K(),
				ZK)), (MK(),
				LK)), (lK(),
				kK)), (XJ(),
				WJ)), (EL(),
				DL)), (EK(),
				DK)), (TK(),
				SK)), (nI(),
				mI)), (LL(),
				KL)), (cK(),
				bK)), (gI(),
				fI)), (oL(),
				nL)), (PJ(),
				OJ)), (gL(),
				fL));
			Frb(Frb(Frb(Frb(vB, (BC(),
				AC)), ($C(),
				ZC)), (hD(),
				gD)), (nD(),
				mD));
			Frb(Frb(Frb(Frb(Frb(vB, (tD(),
				sD)), (BD(),
				AD)), (nE(),
				mE)), (tE(),
				sE)), (AE(),
				zE));
			R = new ee;
			Iy = _m(2);
			an();
			al(g$() + '../img/');
			$k(getConfigParam('assets', 'img/') + 'skins/');
			_k(getConfigParam('assets', '') + ('' + getConfigParam('assetsFile', 'assets.json')));
			$wnd.sprites.onLoad = ICb(Zk);
			$wnd.loadSprites();
			Iy.emit('gameReady')
		}
		function ah(a) {
			var b, c, d, e, f, g, h, i, j;
			d = a.texture.element;
			j = a.frameWidth;
			b = $doc.createElement('canvas');
			b.width = j * 9;
			b.height = j * 30;
			c = b.getContext('2d');
			c.scale(j, j);
			c.save();
			for (i = 0; i < 2; i++) {
				for (f = 0; f < 7; f++) {
					for (h = 0; h < 9; h++) {
						c.drawImage(d, j, 0, j, j, h, f, 1, 1);
						if (f != 1) {
							c.globalCompositeOperation = 'source-atop';
							setFillStyle(c, (AA(), wA)[f].g);
							c.fillRect(h, f, 1, 1);
							c.globalCompositeOperation = 'source-over';
							c.drawImage(d, j, j, j, j, h, f, 1, 1)
						}
					}
				}
				c.translate(0, 16);
				c.rotate(nEb)
			}
			c.restore();
			for (g = 0; g < 7; g++) {
				for (h = 0; h < 8; h++) {
					c.save();
					c.translate(0.5 + h, 16.5 + g);
					c.rotate(nEb * (h % 4));
					c.drawImage(d, (2 + (h / 4 | 0)) * j, 0, j, j, -0.5, -0.5, 1, 1);
					if (g != 1) {
						c.globalCompositeOperation = 'source-atop';
						setFillStyle(c, (AA(), wA)[g].g);
						c.fillRect(-0.5, -0.5, 1, 1);
						c.globalCompositeOperation = 'source-over';
						c.drawImage(d, (2 + (h / 4 | 0)) * j, j, j, j, -0.5, -0.5, 1, 1)
					}
					c.restore()
				}
			}
			for (e = 0; e < 7; e++) {
				for (h = 0; h < 4; h++) {
					c.save();
					c.translate(0.5 + h, 23.5 + e);
					c.rotate(1.5707963705062866 * h);
					c.drawImage(d, 0, 0, j, j, -0.5, -0.5, 1, 1);
					if (e != 1) {
						c.globalCompositeOperation = 'source-atop';
						setFillStyle(c, (AA(),
							wA)[e].g);
						c.fillRect(-0.5, -0.5, 1, 1);
						c.globalCompositeOperation = 'source-over';
						c.drawImage(d, 0, j, j, j, -0.5, -0.5, 1, 1)
					}
					c.restore()
				}
			}
			vh(a.texture, b)
		}
		function Oib(a, b) {
			var c = (a.__eventBits || 0) ^ b;
			a.__eventBits = b;
			if (!c)
				return;
			c & 1 && (a.onclick = b & 1 ? Kib : null);
			c & 2 && (a.ondblclick = b & 2 ? Kib : null);
			c & 4 && (a.onmousedown = b & 4 ? Kib : null);
			c & 8 && (a.onmouseup = b & 8 ? Kib : null);
			c & 16 && (a.onmouseover = b & 16 ? Kib : null);
			c & 32 && (a.onmouseout = b & 32 ? Kib : null);
			c & 64 && (a.onmousemove = b & 64 ? Kib : null);
			c & 128 && (a.onkeydown = b & 128 ? Kib : null);
			c & 256 && (a.onkeypress = b & 256 ? Kib : null);
			c & 512 && (a.onkeyup = b & 512 ? Kib : null);
			c & 1024 && (a.onchange = b & 1024 ? Kib : null);
			c & 2048 && (a.onfocus = b & 2048 ? Kib : null);
			c & 4096 && (a.onblur = b & 4096 ? Kib : null);
			c & 8192 && (a.onlosecapture = b & 8192 ? Kib : null);
			c & xEb && (a.onscroll = b & xEb ? Kib : null);
			c & AEb && (a.onload = b & AEb ? Lib : null);
			c & FDb && (a.onerror = b & FDb ? Kib : null);
			c & 131072 && (a.onmousewheel = b & 131072 ? Kib : null);
			c & 262144 && (a.oncontextmenu = b & 262144 ? Kib : null);
			c & fHb && (a.onpaste = b & fHb ? Kib : null);
			c & 1048576 && (a.ontouchstart = b & 1048576 ? Kib : null);
			c & pHb && (a.ontouchmove = b & pHb ? Kib : null);
			c & gHb && (a.ontouchend = b & gHb ? Kib : null);
			c & 8388608 && (a.ontouchcancel = b & 8388608 ? Kib : null);
			c & qHb && (a.ongesturestart = b & qHb ? Kib : null);
			c & rHb && (a.ongesturechange = b & rHb ? Kib : null);
			c & sHb && (a.ongestureend = b & sHb ? Kib : null)
		}
		function kc(a, b) {
			Rb();
			var c;
			Lb.call(this, a, b);
			this.b = 1;
			this.f = -1;
			this.g = -1;
			this.i = null;
			this.k = null;
			this.u = -1;
			this.s = false;
			this.p = 0;
			this.r = 0;
			this.c = false;
			Ylb(this.rb.X, new jb(this));
			Ylb(this.rb.X, this.j = new eq(this));
			Ylb(this.rb.X, new xd(this));
			Ylb(this.rb.X, new pz(this));
			Ylb(this.rb.X, this.v = new Wf(this.rb,R.u));
			Ylb(this.rb.X, this.A = new _f(this));
			Ylb(this.rb.X, this.t = new Lf(this));
			Ylb(this.rb.X, this.n = new jf(this));
			Ylb(this.rb.X, this.d = new ud(this));
			Ylb(this.rb.X, this.a = new _o(this));
			Ylb(this.rb.X, new cs(this));
			Ylb(this.rb.X, this.o = new Aq(this));
			jvb(xn(UCb, '1'), '1') && Ylb(this.rb.X, this.e = new zp(this));
			Ylb(this.rb.X, new Kr(this));
			Ylb(this.rb.X, this.q = new md(this,R.g,R.u));
			Ylb(this.rb.X, new ys(this));
			this.s = false;
			FP((UB(),
				xB), new au);
			FP(BB, new vv);
			FP(CB, new Zv);
			FP(FB, new Ow);
			FP(OB, new Pv);
			FP(RB, new Wx);
			FP(HB, new _w);
			FP(SB, new dy);
			FP(NB, new Cx);
			FP(EB, new pw);
			FP(LB, new cw);
			FP(TB, new iy);
			FP(DB, new hw);
			FP(MB, new wx);
			c = new ju(this.B,this.q);
			FP(zB, c);
			FP(QB, new Nx(this.B,this.q));
			FP(KB, c);
			FP(AB, new qu);
			FP(GB, new Uw);
			FP(JB, new qx);
			this.rb.a = new NW(this.rb);
			$lb(this.rb.X, l8, new xJ(this))
		}
		function Kf(a) {
			var b, c, d;
			a.o = sprites.get('items');
			a.n = sprites.get('icons');
			a.f = sprites.get('font');
			a.b = sprites.get('arrows');
			a.d = sprites.get('big_arrow');
			a.s = sprites.get('signs');
			a.p = sprites.get('perks');
			a.i = sprites.get('hpbar');
			Nu();
			Fu = sprites.get('bomb64x64');
			Hu = sprites.get('glyph-bomb');
			Iu = sprites.get('stun');
			yu = sprites.get('boost-anim');
			Hx();
			Gx = sprites.get('wick');
			Dt = sprites.get('tangled');
			ex();
			cx = sprites.get('portal');
			px(cx);
			Jw = sprites.get('squad_pick');
			a.g = jh(a.p, 'generic');
			d = a.rb.Q.f.b;
			a.t = j2(i6, PCb, 0, d.length, 2, 1);
			for (b = 0; b < d.length; b++)
				a.t[b] = jh(a.o, d[b].t);
			d = a.rb.Q.k.b;
			a.v = j2(i6, PCb, 0, d.length, 2, 1);
			for (c = 0; c < d.length; c++)
				a.v[c] = jh(a.o, d[c].t);
			a.k = j2(i6, PCb, 0, d.length, 2, 1);
			for (b = 0; b < d.length; b++)
				a.k[b] = jh(a.n, d[b].t);
			d = a.rb.Q.g.b;
			a.u = j2(i6, PCb, 0, d.length, 2, 1);
			for (c = 0; c < d.length; c++) {
				a.u[c] = jh(a.p, d[c].t);
				!a.u[c] && (a.u[c] = jh(a.o, d[c].t))
			}
			a.j = j2(i6, PCb, 0, d.length, 2, 1);
			for (b = 0; b < d.length; b++)
				a.j[b] = jh(a.n, d[b].t);
			!!a.rb.n && (a.c = If(a, a.rb.n.u));
			a.a = jh(a.n, 'arena_cup');
			!!a.rb.H && (a.q = If(a, a.rb.H.u));
			a.e = jh(a.n, 'disease');
			m2(f2(i6, 1), PCb, 0, 2, [jh(a.n, 'players'), jh(a.n, 'time'), jh(a.n, 'coords'), jh(a.n, 'ping'), jh(a.n, 'slowmo'), null]);
			a.r = sprites.get('portal_strips_items')
		}
		function Gq(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;
			p = Fb(a.d);
			uM(p, a.d.G);
			h = p.a;
			a.g = false;
			o = a.o / 2 | 0;
			f = 3;
			for (e = 4; e < 8; e++) {
				!!h.d[e] && (f = e)
			}
			f == 7 ? (o = a.o) : f >= 4 && (o += 8 + (f - 3) * (a.n + 32));
			if (o != a.f) {
				Xh(a.b, o, a.j);
				a.f = o
			}
			Yh(a.b, (My(),
				Jy), 9);
			zh(a.b, a.o, a.j);
			Eh(a.b, a.a, a.o / 2 | 0, a.j / 2 | 0);
			for (d = 0; d < 8; d++) {
				q = 6 + (a.n + 32) * d;
				d >= 4 && (q += 11);
				b = h.d[d];
				l = null;
				if (b) {
					l = Jf(a.d.t, b.n.b.u);
					!l && (l = jh(a.k, 'generic'))
				} else
					d < 4 && d >= Yub(a.i.R.a.r, 4) && (l = jh(a.k, gFb));
				!!l && Ih(a.b, l.texture, l.x, l.y, l.frameWidth, l.frameHeight, q, 6, l.frameWidth, l.frameHeight);
				if (!b)
					continue;
				if (b.he() >= 0) {
					l = jh(a.k, 'slot-amount');
					Ih(a.b, l.texture, l.x, l.y, l.frameWidth, l.frameHeight, q, 6, l.frameWidth, l.frameHeight);
					a.e.fillStyle = 'white';
					a.e.textAlign = 'center';
					a.e.textBaseline = 'top';
					Jh(a.b, Yub(99, b.he()) + '', q + 16, 32)
				}
				i = b.ge();
				if (i > 0) {
					k = (b.g & 2) != 0;
					k && Yh(a.b, Jy, 12);
					c = k ? 1 : nDb + i * eDb / b.fe();
					setFillStyle(a.e, k ? cFb : 'rgba(0,0,0,0.5)');
					Nh(a.b, q, 6, 32, c * 32);
					a.e.textAlign = 'center';
					a.e.textBaseline = 'top';
					m = (i + 999) / GDb | 0;
					Kh(a.b, m + '', q + 16, 6 + (k ? 8 : 4), k ? '0,255,0,1' : '255,255,255,1', '0,0,0,0.7', 1);
					Yh(a.b, Jy, 9)
				}
				j = d + 1;
				if (b.ie()) {
					l = jh(a.k, 'slot-number');
					Ih(a.b, l.texture, l.x, l.y, l.frameWidth, l.frameHeight, q, 6, l.frameWidth, l.frameHeight);
					a.e.fillStyle = 'white';
					a.e.textAlign = 'left';
					a.e.textBaseline = 'top';
					n = j + '';
					g = cwb(a.d.o.b, b.n.b.v);
					!!g && (n = X2(g.a & CEb) + '');
					Jh(a.b, n, q, 5)
				}
			}
		}
		function Bw(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
			if (!a.f) {
				a.b = $doc.createElement('canvas');
				a.b.width = 256;
				gtb(a.b, 32 * (a.v.length + 6));
				a.c = a.b.getContext('2d');
				a.f = new Texture;
				a.c.font = 'bold 15px  Tahoma, Arial';
				a.c.fillStyle = 'white';
				a.c.textAlign = 'left';
				a.c.textBaseline = 'middle'
			}
			itb(a.c, 0, 0, a.b.width, a.b.height);
			g = 0;
			h = !!a.pb && (a.pb.Y.Q.j.g & 1) != 0;
			for (f = 0; f < a.v.length; f++) {
				j = a.v[f];
				if (j.i == 0)
					continue;
				o = a.v[f].g;
				c = gM(a.r, j);
				if ((c > 0 || (j.i & 4) != 0) && (o != 0 || !!a.pb)) {
					l = (j.i & 1) != 0;
					k = If(a.nb.t, f);
					if (!k)
						continue;
					p = k.frameWidth;
					e = k.frameHeight;
					a.t[f] = 18 + (p / 2 | 0);
					a.u[f] = g + 12;
					i = l ? c + '' : '1';
					b = 18 + (p * 3 / 2 | 0) + toInt($wnd.Math.ceil(ttb(a.c, i).width));
					a.c.fillStyle = 'rgba(0,0,0,0.5)';
					d = jtb(a.c, 0, 0, b, 0);
					d.addColorStop(0, 'rgba(0,0,0,0.5)');
					d.addColorStop(1, NFb);
					setFillStyle(a.c, d);
					ctxFillRect(a.c, 0, g, b, 24);
					!!k && fh(k, a.c, a.t[f], a.u[f], p, e);
					l && Cw(a.c, a.t[f] + (p / 2 | 0), a.u[f], i);
					if (j.g == 1 && h) {
						a.c.lineWidth = 2;
						a.c.strokeStyle = 'rgba(255, 0, 0, 0.7)';
						a.c.beginPath();
						utb(a.c, a.t[f], a.u[f] - 10);
						stb(a.c, b, a.u[f] + 10);
						utb(a.c, a.t[f], a.u[f] + 10);
						stb(a.c, b, a.u[f] - 10);
						a.c.stroke()
					}
					g += 30
				}
			}
			if (a.e.length > 0) {
				m = 18;
				n = g + 12;
				k = null;
				a.d && (k = a.nb.t.e);
				d = a.c.createLinearGradient(0, 0, 150, 0);
				d.addColorStop(0, 'rgba(0,0,0,0.5)');
				d.addColorStop(1, NFb);
				setFillStyle(a.c, d);
				ctxFillRect(a.c, 0, g, 150, 24);
				if (k) {
					p = k.frameWidth;
					e = k.frameHeight;
					fh(k, a.c, m + (p / 2 | 0), n, p, e);
					m += p
				}
				i = a.e;
				Cw(a.c, m, n, i)
			}
			vh(a.f, a.b)
		}
		function dp(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
			a.f.fillStyle = 'black';
			Nh(a.b, 0, 0, a.A, a.k);
			for (e = 0; e < a.A; e += a.r.frameWidth)
				for (f = 0; f < a.k; f += a.r.frameHeight) {
					Eh(a.b, a.r, e, f)
				}
			r = a.j.Q.q.b;
			n = a.j.Q.o.b;
			h = a.d.q.lb;
			for (d = 0; d < a.g; d++) {
				Yh(a.b, (My(),
					Jy), 11);
				i = d / a.e | 0;
				b = d % a.e;
				s = b * a.B;
				t = i * a.B;
				if (i >= a.p) {
					return
				}
				p = r[a.t[d]];
				a.a[4] = a.t[d];
				g = bj(h, a.a, 1, 4, 7);
				m = _i(h, a.t[d]);
				q = g & 255;
				if (q != 255) {
					l = ih(a.s, q);
					!l ? sCb((wc(),
						vc), SEb + p.v) : Ih(a.b, a.s.texture, l.x, l.y, a.B, a.B, s, t, a.B, a.B)
				}
				if (m != -1) {
					j = n[m];
					if (j.a >= 0) {
						l = ih(a.s, j.a);
						!l ? sCb((wc(),
							vc), SEb + p.v) : Ih(a.b, a.s.texture, l.x, l.y, a.B, a.B, s, t, a.B, a.B)
					}
				}
				q = g >> 8 & 255;
				if (q != 255) {
					l = ih(a.s, q);
					!l ? sCb((wc(),
						vc), SEb + p.v) : Ih(a.b, a.s.texture, l.x, l.y, a.B, a.B, s, t, a.B, a.B)
				}
				q = g >> 16 & 255;
				if (q != 255) {
					l = ih(a.s, q);
					!l ? sCb((wc(),
						vc), SEb + p.v) : Ih(a.b, a.s.texture, l.x, l.y, a.B, a.B, s, t, a.B, a.B)
				}
				if (a.n >= 0 && p.b > 0) {
					c = a.i + p.b > a.n ? 'red' : 'white';
					ep(a, s, t + 10, '' + p.b, c)
				}
				(p.i & 4) != 0 && ep(a, s + 23, t + 31, 'A', 'yellow');
				if (p.c != null) {
					a.f.textAlign = 'center';
					hp(a.b, s + 16, t + 20, p);
					a.f.textAlign = 'left'
				}
			}
			a.f.strokeStyle = 'white';
			a.f.lineWidth = 2;
			if (a.v >= 0) {
				i = a.v / a.e | 0;
				b = a.v % a.e;
				s = b * a.B;
				t = i * a.B;
				bi(a.b, s - 1, t - 1, a.B + 1, a.B + 1)
			}
			bi(a.b, 0, 0, a.A, a.k);
			o = !a.q ? 'Selected: none' : 'Selected: ' + a.q.v;
			ep(a, 5, 12, o, 'white');
			if (a.n >= 0) {
				k = a.q ? a.q.b : 0;
				c = a.i + k > a.n ? 'red' : 'white';
				ep(a, 5, 25, 'Total value: ' + a.i + ' / ' + a.n, c)
			}
		}
		function jd(a, b, c) {
			var d, e, f, g, h, i, j, k;
			a.G.bc();
			a.J = a.J | Z2(a.G, 155);
			g = (b - a.X) * 100 / R.I;
			if (a.X == 0) {
				a.J = true;
				g = 0
			}
			a.X = b;
			h = b - c;
			h /= R.I;
			h = $wnd.Math.max(h, 0);
			h = $wnd.Math.min(h, 1);
			a.pb == 1 ? bz(a._, gDb) : a.pb == 2 && bz(a._, 0.9090908893868948);
			for (i = 0; i < a.ob.f; i++) {
				d = a.ob.e[i].a;
				for (j = 0; j < d.length; j++)
					d[j].Nd(g, h)
			}
			hf(a.qb.n, g);
			if (!!nf(a.qb.J) && a.G.c.c >= 700 && a.G.c.a >= 700)
				Fc(a, nf(a.qb.J));
			else if (a.D) {
				k = FO(a.D);
				k ? Gc(a, k, false) : Gc(a, a.D, false)
			} else
				!!a.F && Gc(a, a.F.pb, false);
			if (a.A) {
				a.u = $y(a._, a.u);
				a.v = _y(a._, a.v)
			}
			hd(a, g);
			kd(a, g);
			fd(a, true);
			Z2(a.G, 195) || (a.J = true);
			Of(a.qb.v);
			Yc(a, a.P, 0);
			!!a.r && Yc(a, a.r, 0);
			ld(a);
			if (a.J) {
				f = a.G.cc(0);
				Zc(a, -a.fb, -a.gb);
				f.jc(a._);
				if (!a.f) {
					Yc(a, a.P, 1)
				} else {
					Ac(a, a.j, !a.o, false);
					Yc(a, a.r, 1);
					erb(a.ab, a.b);
					a.G.gc().pc();
					Ac(a, a.j, a.o, false);
					Yc(a, a.P, 1);
					erb(a.ab, a.b);
					a.G.gc().pc()
				}
				f.Qc();
				a.G.fc()
			}
			e = a.G.cc(1);
			e.jc(a._);
			if (!a.f) {
				Yc(a, a.P, 2);
				Yc(a, a.P, 4);
				e.Qc();
				Yc(a, a.P, 3);
				a.H = mf(a.qb.J);
				if (!!a.H && a.H.length > 0) {
					e.jc(a._);
					Yc(a, a.P, 5);
					e.Qc()
				}
			} else {
				Ac(a, a.j, !a.o, false);
				Yc(a, a.r, 2);
				Yc(a, a.r, 4);
				erb(a.ab, a.b);
				a.G.gc().pc();
				Ac(a, a.j, a.o, false);
				Yc(a, a.P, 2);
				Yc(a, a.P, 4);
				erb(a.ab, a.b);
				a.G.gc().pc();
				e.Qc();
				Ac(a, a.j, !a.o, true);
				Yc(a, a.r, 3);
				erb(a.ab, a.b);
				a.G.gc().pc();
				Ac(a, a.j, a.o, true);
				Yc(a, a.P, 3);
				erb(a.ab, a.b);
				a.G.gc().pc();
				e.jc(a._);
				ox(a.G.gc(), a.k, a.j, a.n, true, null, null, false);
				e.Qc()
			}
			Wc(a, g, h);
			a.G.fc();
			a.J = false;
			a.G.ec();
			if (a.A) {
				a.B && Rc(a);
				a.A = false;
				a.B = false
			}
		}
		function fj(a, b) {
			var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, A, B, C, D, F, G, H, I;
			a.i = b.Q;
			I = a.i.q.b;
			c = a.i.c.b;
			B = a.i.o.b;
			a.k = j2(h3, XCb, 7, I.length * 8, 15, 1);
			for (i = 0; i < a.k.length; i++)
				a.k[i] = i / 8 | 0;
			g = a.i.e.b;
			for (j = 0; j < g.length; j++) {
				l = -1;
				f = g[j];
				for (n = 0; n < f.c.length; n++) {
					C = PE(a.i.q, f.c[n]);
					A = kh(a.o, C.t);
					A != -1 && (l = A);
					C.o = l;
					if (f.a) {
						for (t = 1; t < 8; t++) {
							F = -1;
							G = -1;
							H = -1;
							d = Hqb(t * 2, C.g) & 15;
							for (o = 0; o < f.c.length; o++) {
								D = PE(a.i.q, f.c[o]);
								D.g == d && (F = D.u);
								D.g % 8 == d % 8 && (G = D.u);
								D.g % 4 == d % 4 && (H = D.u)
							}
							F != -1 ? (a.k[C.u * 8 + t] = F) : G != -1 ? (a.k[C.u * 8 + t] = G) : H != -1 && (a.k[C.u * 8 + t] = H)
						}
					}
				}
			}
			a.j = j2(h3, XCb, 7, a.o.childs.length, 15, 1);
			for (k = 0; k < a.o.childs.length; k++) {
				a.j[k] = kh(a.o, ih(a.o, k).shortName + '-plain')
			}
			for (p = 0; p < I.length; p++) {
				C = I[p];
				C.o == -1 && (C.o = kh(a.o, C.t))
			}
			for (q = 0; q < c.length; q++) {
				C = c[q];
				C.a == -1 && (C.a = kh(a.o, C.t))
			}
			for (r = 0; r < B.length; r++) {
				C = B[r];
				C.a == -1 && (C.a = kh(a.o, C.t))
			}
			PE(a.i.q, a.i.j.f);
			for (s = 0; s < I.length; s++) {
				C = I[s];
				C.n != -1 && (C.n = I[C.n].o);
				C.f != -1 && (C.f = c[C.f].a);
				C.j != -1 && (C.j = I[C.j].o);
				C.e != -1 && (C.e = I[C.e].o);
				if (C.o != -1) {
					switch (C.q) {
						case 0:
							C.j == -1 && (C.j = C.o);
							break;
						case 1:
						case 2:
							C.e == -1 && (C.e = C.o);
					}
				}
			}
			e = m2(f2(e3, 1), uEb, 7, 15, [101, 115, 119, 110]);
			for (m = 0; m < I.length; m++) {
				C = I[m];
				if (C.s != 9)
					continue;
				C.p = j2(h3, XCb, 7, 16, 15, 1);
				C.p[0] = C.o;
				A = new Avb;
				zvb(A, C.t);
				A.a += '-';
				u = A.a.length;
				for (v = 1; v < 16; v++) {
					w = A.a.length;
					u < w ? (A.a = qvb(A.a, 0, u)) : u > w && (A.a += vvb(j2(e3, uEb, 7, u - w, 15, 1)));
					for (h = 0; h < 4; h++)
						(v & 1 << h) != 0 && xvb(A, e[h]);
					C.p[v] = kh(a.o, A.a)
				}
			}
		}
		function ij(a, b, c) {
			var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, A;
			if (!b.a) {
				e = $doc.createElement('canvas');
				htb(e, 8 * a.g);
				gtb(e, 8 * a.g);
				b.a = e
			}
			j = b.f;
			r = b.j;
			f = b.b;
			s = b.c;
			d = b.a;
			g = d.getContext('2d');
			h = getConfigParam('debugTiles', false);
			c || (s = 64);
			for (n = 0; n < s; n++) {
				l = c ? f[n] : n;
				i = l % 8;
				k = l / 8 | 0;
				u = j[l] & 255;
				itb(g, i * a.g, k * a.g, a.g, a.g);
				if (u != 255) {
					setFillStyle(g, a.e[u]);
					ctxFillRect(g, i * a.g, k * a.g, a.g, a.g)
				}
				u = r[l] & 255;
				if (u != 255) {
					v = r[l] >>> 8;
					if (v != 0) {
						w = (v & 3) * a.f / 2 | 0;
						A = ((v & 63) >> 2) * a.f / 2 | 0;
						ptb(g, a.d, a.b[u] + w, a.c[u] + A, a.f / 2 | 0, a.f / 2 | 0, i * a.g, k * a.g, a.g / 2 | 0, a.g / 2 | 0);
						v >>>= 6;
						w = (v & 3) * a.f / 2 | 0;
						A = ((v & 63) >> 2) * a.f / 2 | 0;
						ptb(g, a.d, a.b[u] + w, a.c[u] + A, a.f / 2 | 0, a.f / 2 | 0, i * a.g + (a.g / 2 | 0), k * a.g, a.g / 2 | 0, a.g / 2 | 0);
						v >>>= 6;
						w = (v & 3) * a.f / 2 | 0;
						A = ((v & 63) >> 2) * a.f / 2 | 0;
						ptb(g, a.d, a.b[u] + w, a.c[u] + A, a.f / 2 | 0, a.f / 2 | 0, i * a.g, k * a.g + (a.g / 2 | 0), a.g / 2 | 0, a.g / 2 | 0);
						v >>>= 6;
						w = (v & 3) * a.f / 2 | 0;
						A = ((v & 63) >> 2) * a.f / 2 | 0;
						ptb(g, a.d, a.b[u] + w, a.c[u] + A, a.f / 2 | 0, a.f / 2 | 0, i * a.g + (a.g / 2 | 0), k * a.g + (a.g / 2 | 0), a.g / 2 | 0, a.g / 2 | 0)
					} else {
						setFillStyle(g, a.e[u]);
						ctxFillRect(g, i * a.g, k * a.g, a.g, a.g)
					}
				}
				u = j[l] >> 8 & 255;
				if (u != 255) {
					setFillStyle(g, a.e[u]);
					ctxFillRect(g, i * a.g, k * a.g, a.g, a.g)
				}
			}
			if (!c && h) {
				g.lineWidth = 4;
				g.strokeStyle = 'rgba(0,255,255,0.5)';
				Dtb(g, 0, 0, a.g * 8, a.g * 8)
			}
			g.fillStyle = 'black';
			g.globalAlpha = cDb;
			g.beginPath();
			t = a.f / 8;
			for (o = 0; o < s; o++) {
				l = c ? f[o] : o;
				i = l % 8;
				k = l / 8 | 0;
				q = j[l] >>> 24;
				q != 0 && q != 255 && jj(a, g, i, k, q, t)
			}
			g.fill();
			g.strokeStyle = 'black';
			g.globalAlpha = XDb;
			g.beginPath();
			for (p = 0; p < s; p++) {
				l = c ? f[p] : p;
				i = l % 8;
				k = l / 8 | 0;
				q = j[l] >>> 24;
				q != 0 && q != 255 && kj(a, g, i, k, q)
			}
			g.stroke();
			g.globalAlpha = 1;
			for (m = 0; m < s; m++) {
				l = c ? f[m] : m;
				i = l % 8;
				k = l / 8 | 0;
				u = j[l] >> 16 & 255;
				if (u != 255) {
					setFillStyle(g, a.e[u]);
					ctxFillRect(g, i * a.g, k * a.g, a.g, a.g)
				}
				if (c && h) {
					g.fillStyle = 'rgba(255,0,255,0.2)';
					ctxFillRect(g, i * a.g, k * a.g, a.g, a.g)
				}
			}
		}
		function XP(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, A, B, C, D, F, G, H;
			if ((a.q & 256) != 0) {
				YP(a);
				return
			}
			B = a.s;
			f = a.V.Q;
			_z(a.Y, new HJ);
			d = new OY(a);
			e = 1;
			AY(d, (a.q & 2) != 0);
			a.t > 0 && ((a.q & 128) == 0 || a.t < 4) ? (e = (AA(),
				xA)[a.t]) : (a.q & 4) != 0 ? (e = 5) : ((a.q & 128) != 0 || (a.q & 8) != 0) && (e = ((a.jb.e >> 5) + (a.jb.f >> 5) * 4) % 7);
			e == 0 && (a.q & 1) != 0 && (e = 0);
			FN(d, a.jb);
			kY(d, 0);
			CY(d, a.t);
			BY(d, 1);
			zY(d, e);
			ZP(a);
			s = new iqb;
			t = new iqb;
			for (i = 0; i < 8; i += 2) {
				if (!!a.e && a.f == (i + 4) % 8)
					continue;
				m = 0;
				G = false;
				H = false;
				n = B;
				_pb(s, a.fb);
				s.c = i;
				for (l = 1; l <= n; l++) {
					s.e += 32 * Pqb(s.c);
					s.f += 32 * Qqb(s.c);
					if (Xpb(s, null, false) < 0)
						break;
					j = Fz(a.V.g, Yob(s.d, s.e, s.f, false));
					if (Xpb(s, null, true) < 0)
						break;
					q = Yob(s.d, s.e, s.f, true);
					r = s.c;
					Gqb();
					D = plb(Rob(q.d, q.e >> 8, q.f >> 8), q, 0);
					if (D) {
						if (Z2(D, 37)) {
							c = D;
							w = c.t == 0 || c.t > 4 || c.t == a.t;
							A = a.t == 0 || a.t > 4 || c.t == a.t;
							c.hf(a, A || c.ef() ? r : 1);
							if (w && !Z2(c, 127)) {
								if ((c.q & 8192) != 0 || (c.q & 4096) == 0 && c.t == a.t)
									break;
								m = l;
								G = true;
								break
							}
						} else if (Z2(D, 85) && (a.q & 2) == 0) {
							b = new HJ;
							_z(a.Y, b);
							m = l;
							G = true;
							break
						} else if (Z2(D, 126) && (VS(D, a.t) || (a.q & 8) != 0))
							;
						else
							break
					}
					F = llb(Rob(q.d, q.e >> 8, q.f >> 8), q);
					if (Z2(D, 85)) {
						b = new HJ;
						_z(a.Y, b)
					}
					C = PE(f.q, F).s;
					(C == 3 || C == 5) && (n -= (n - l + 1) / 2 | 0);
					if (j) {
						m = l - 1;
						H = true;
						break
					} else if (C >= 7) {
						m = l;
						G = true;
						break
					} else {
						rpb(s, a.jb) || (n = Yub(n, l + a.V.d.g - 1))
					}
					m = l
				}
				_pb(s, a.fb);
				s.c = i;
				u = 0;
				g = null;
				for (k = 1; k <= m; k++) {
					s.e += 32 * Pqb(s.c);
					s.f += 32 * Qqb(s.c);
					Xpb(s, null, true);
					s.b = -1;
					r = s.c;
					q = Yob(s.d, s.e, s.f, true);
					!g && (g = q);
					_pb(t, s);
					t.e += 32 * Pqb(t.c);
					t.f += 32 * Qqb(t.c);
					o = (q.e >> 5) % 8 + (Gqb(),
						Bqb[r]);
					p = (q.f >> 5) % 8 + Cqb[r];
					if (k == m || o < 0 || p < 0 || o >= 8 || p >= 8 || Xpb(t, null, true) > 0) {
						h = new OY(a);
						zY(h, e);
						AY(h, (a.q & 2) != 0);
						H ? kY(h, 1) : k >= n || k == m && G ? kY(h, 2) : kY(h, 1);
						FN(h, g);
						g = null;
						dqb(h.fb, r);
						BY(h, k - u);
						CY(h, a.t);
						sY(h, a.Y);
						u = k
					}
				}
			}
			v = a.Y;
			bQ(a);
			GO(a);
			d.V = v;
			WN(d, v);
			XN(d);
			eY(d, d.k)
		}
		function _m(c) {
			function d() {
				this.perks = {
					all: [],
					available: [],
					active: [],
					slots_limit: 0
				};
				this.players = new Players;
				this.squads = new Squads;
				this.methods = {};
				this.emit = function(a) {
					return this.methods.hasOwnProperty(a) && this.methods[a].apply(this, Array.prototype.slice.call(arguments, 1))
				}
				;
				this.hasMethod = function(a) {
					return this.methods.hasOwnProperty(a)
				}
				;
				this.on = function(a, b) {
					this.methods[a] = b
				}
				;
				this.VERSION = c
			}
			d.prototype = {
				viewportGetDisplayMode: ICb(Tm),
				viewportSetDisplayMode: ICb(Vm),
				toggleFullScreen: ICb(Kn),
				gameSetViewportSize: ICb(Wm),
				gameGetViewportSize: ICb(Um),
				viewportGetAudioMode: ICb(Em),
				viewportSetAudioMode: ICb(Qm),
				appSendChatMsg: ICb(Pm),
				previewAttach: ICb(Fn),
				previewDetach: ICb(Gn),
				previewSetSkin: ICb(Hn),
				gameAttach: ICb(bn),
				gameDetach: ICb(fn),
				gameConnect: ICb(cn),
				gameDisconnect: ICb(gn),
				gameRoom: function() {
					var a = jn();
					if (a == null)
						return null;
					return {
						id: a.ae(),
						gamemode: a._d()
					}
				},
				gameIsRunning: ICb(hn),
				gameConnectionStatus: ICb(en),
				gameConnectionCloseMessage: ICb(dn),
				isTeamplay: ICb(Cn),
				hasFlags: ICb(zn),
				appSetChatChannelOpt: ICb(Sm),
				appSetChatBubblesVisible: ICb(Rm),
				appInputKeys: ICb(Jm),
				appInputBomb: ICb(Gm),
				orderRespawnAway: ICb(En),
				appInputAbility: ICb(Fm),
				appInputDetonation: ICb(Im),
				appInputTab: ICb(Mm),
				appInputChat: ICb(Hm),
				appInputPause: ICb(Km),
				appInputRejoin: ICb(Lm),
				appObserverWatchPlayer: ICb(Nm),
				appObserverWatchingPlayer: ICb(Om),
				appObserverMode: function(a) {
					if (a === undefined)
						return R.c.K;
					else {
						Jb(R.c)
					}
				},
				sendChatMsg: ICb(Jn),
				gameSquadCreate: ICb(mn),
				gameSquadLeave: ICb(qn),
				gameSquadRename: ICb(tn),
				gameSquadCanRename: ICb(kn),
				gameSquadDisableName: ICb(nn),
				gameSquadKick: ICb(pn),
				gameSquadPromote: ICb(sn),
				gameSquadRespond: ICb(un),
				gameSquadCancelRequest: ICb(ln),
				gameSquadJoin: ICb(on),
				gameSquadPrivate: ICb(rn),
				hasSquad: ICb(An),
				isPlaying: ICb(Bn),
				getPlayerInfo: ICb(vn)
			};
			return new d
		}
		function gv(a, b, c) {
			var d, e, f, g, h, i;
			!!a.P && co(a.P, b);
			for (g = 0; g < a.o.length; g++)
				qy(a.o[g]);
			if (a.p) {
				if (a.J.hasSoul) {
					a.a -= b / 3000;
					a.a < 0 && (a.a = 0);
					a.N += b / 15
				}
			} else {
				if (eS(a.pb)) {
					a.Q += b / 100;
					a.Q %= 3
				}
				Lt(a, c);
				a.v = $wnd.Math.min(a.v, a.J.idlePauseMax || 0);
				if (a.T) {
					irb(a.mb, a.T.mb.f);
					jrb(a.mb, a.T.mb.g);
					a.jb = a.T.jb;
					a.C = false;
					a.eb = 0
				} else if (a.C) {
					if (a.J.rolls && a.A >= 2) {
						a.eb -= b * wl(a.J) * a.O / 2;
						a.O < 0 && (a.O += ul(a.J))
					} else
						a.eb += b * wl(a.J) * a.O / 2;
					a.U = true
				} else if (a.J.alwaysRun) {
					if (a.J.rolls && a.A >= 2) {
						a.eb -= b * yl(a.J) * 4;
						a.O < 0 && (a.O += ul(a.J))
					} else
						a.eb += b * yl(a.J) * 4
				} else if (a.J.idleAnim) {
					if (a.U) {
						a.eb = 0;
						a.v = a.J.idlePauseAfterMoving ? zl(a.J) : 0;
						a.U = false
					}
					f = b;
					if (b < a.v) {
						a.v -= b;
						f = 0
					} else {
						f -= a.v;
						a.v = 0
					}
					a.eb += f * yl(a.J) * 4;
					if (a.eb >= xl(a.J, a.A)) {
						a.v = zl(a.J);
						a.eb = a.v > 0 ? 0 : a.eb % xl(a.J, a.A)
					}
				} else {
					a.J.rolls || (a.eb = 0)
				}
				a.eb < -720720 ? (a.eb += 720720) : a.eb > 720720 && (a.eb -= 720720);
				if (a.G == 1) {
					if (a.pb.B == 21) {
						a.e = a.f = 0
					} else if (a.C) {
						h = Hqb(Kqb(Kqb(a.nb.q.T.c)), a.pb.M & 15);
						fv(a, b / 250 * (Gqb(),
							Bqb[h]) * 32, b / 250 * Cqb[h] * 32)
					} else {
						d = $wnd.Math.min($wnd.Math.abs(a.e), b * 32 / 500);
						a.e > 0 && (d = -d);
						e = $wnd.Math.min($wnd.Math.abs(a.f), b * 32 / 500);
						a.f > 0 && (e = -e);
						fv(a, d, e)
					}
				}
				a.c = 0;
				if (a.pb.O.f == 4) {
					a.nb.q.D != a.pb ? (a.a = 0) : (a.a = 0.5)
				} else if (a.r != 0) {
					if (a.r == 21) {
						R.c.K ? (a.a = 0.5) : a.G == 1 ? ZR(a.pb) != 21 ? (a.a = 0.5) : dv(a, -0.800000011920929, XDb) : (a.a = 0)
					} else if (a.r == 1) {
						a.pb.O.f != 3 ? dv(a, KFb, LFb) : (a.a = 1)
					} else if (a.r == 19) {
						ev(a, cDb);
						a.n = a.g * 2 + XDb;
						a.k = 0;
						a.j = (cDb - a.g) * 2 + XDb
					} else if (a.r == 22) {
						ev(a, LFb);
						a.n = a.g + XDb;
						a.k = 1;
						a.j = a.g + XDb
					} else if (a.r == 5) {
						ev(a, LFb);
						a.n = a.g + XDb;
						a.k = a.g + XDb;
						a.j = 1
					}
				}
				if (a.d) {
					a.b > 0 && (a.b = -a.b);
					a.a > 0 && (a.a = $wnd.Math.max(0, a.a + a.b));
					a.G == 1 && a.a < 0.5 && (a.a = 0.5)
				} else {
					a.b < 0 && (a.b = -a.b);
					a.a < 1 && (a.a = $wnd.Math.min(1, a.a + a.b))
				}
			}
			if (a.G == 1 && wu > 0) {
				xu = wu - 0.5;
				Ju += b;
				wu < uu + 1 && (xu += uu * c / 30);
				i = xu * 0.5 + 0.5;
				i < 4 ? (vu = i) : (vu = 4)
			}
			a.I = a.pb.B == 17;
			a.G == 1 && a.nb.q.N && a.nb.q.O == 0 && (a.I = false);
			!!a.ob && (a.ob.lastAccessTime = Date.now(),
				undefined)
		}
		var KCb = 2147483647
			, LCb = 'java.lang'
			, MCb = 'com.bm.gwt.client'
			, NCb = {
			20: 1,
			8: 1,
			16: 1
		}
			, OCb = 'com.mmorts.core.shared'
			, PCb = {
			3: 1,
			4: 1,
			5: 1
		}
			, QCb = 'com.bm.model.shared.layer'
			, RCb = 'SHIELD'
			, SCb = 10000
			, TCb = 'com.bm.model.shared'
			, UCb = 'hudVersion'
			, VCb = 'gameEventRoundEnd'
			, WCb = {
			20: 1
		}
			, XCb = {
			11: 1,
			3: 1,
			4: 1
		}
			, cDb = 0.30000001192092896
			, eDb = 0.800000011920929
			, fDb = 0.8999999761581421
			, gDb = 1.100000023841858
			, hDb = 0.05000000074505806
			, jDb = 0.003000000026077032
			, kDb = 3.141592653589793
			, lDb = 3.1415927410125732
			, mDb = 6.283185307179586
			, nDb = 0.10000000149011612
			, oDb = -0.10000000149011612
			, pDb = 0.009999999776482582
			, qDb = 1024
			, rDb = 'DEFAULT'
			, sDb = 'com.mmorts.core.client'
			, tDb = 'com.bm.model.client'
			, uDb = 'connectOnAttach'
			, xDb = 'font-family'
			, zDb = 'experimental-webgl'
			, ADb = 'Disconnected, code '
			, BDb = 'gameConnectionChanged'
			, FDb = 65536
			, GDb = 1000
			, HDb = 'elemental.util'
			, IDb = 'mousedown'
			, JDb = 'DOMMouseScroll'
			, KDb = 'mousewheel'
			, LDb = 'touchstart'
			, MDb = 'contextmenu'
			, NDb = 'arraybuffer'
			, ODb = {
			20: 1,
			8: 1,
			16: 1,
			50: 1
		}
			, PDb = 'com.bm.model.client.layer'
			, QDb = 'questContext'
			, RDb = 'questMessage'
			, UDb = 0.699999988079071
			, WDb = 'bold 11px Tahoma, Arial'
			, XDb = 0.4000000059604645
			, YDb = 'rgba(0,0,0,.1)'
			, ZDb = 'rgba(0,0,0,.2)'
			, $Db = 'rgba(0,0,0,.5)'
			, _Db = 'com.bm.gwt.client.collections'
			, aEb = 'com.mmorts.core.shared.collections'
			, bEb = 'none'
			, cEb = 'aria-hidden'
			, dEb = 'com.google.gwt.user.client.ui'
			, eEb = {
			35: 1,
			31: 1,
			34: 1,
			33: 1,
			36: 1,
			30: 1,
			29: 1
		}
			, jEb = 'marginLeft'
			, kEb = 'div'
			, nEb = -1.5707963705062866
			, oEb = 'com.google.gwt.core.client'
			, pEb = 'com.bm.model.client.gl'
			, qEb = 'repeat'
			, rEb = 3553
			, tEb = 'com.bm.gwt.client.gl.c2d'
			, uEb = {
			3: 1,
			4: 1
		}
			, vEb = 0.00390625
			, wEb = 0.0078125
			, xEb = 16384
			, yEb = 'com.bm.gwt.client.gl.webgl'
			, zEb = 1.52587890625E-5
			, AEb = 32768
			, BEb = {
			142: 1,
			3: 1,
			4: 1
		}
			, CEb = 65535
			, DEb = 'com.mmorts.core.shared.io'
			, EEb = 'gameShowMenu'
			, FEb = 'com.bm.gwt.client.messages'
			, GEb = {
			35: 1,
			31: 1,
			34: 1,
			33: 1,
			66: 1,
			36: 1,
			30: 1,
			29: 1
		}
			, KEb = '0.0px'
			, LEb = 'transition'
			, MEb = 'overflow'
			, NEb = 'cursor'
			, OEb = 'com.bm.gwt.client.ui'
			, PEb = {
			54: 1
		}
			, QEb = {
			171: 1,
			144: 1
		}
			, REb = {
			54: 1,
			81: 1
		}
			, SEb = 'BuildWindow tile not found: '
			, TEb = 'viewport'
			, UEb = 'borderStyle'
			, VEb = 'borderWidth'
			, WEb = 'borderColor'
			, ZEb = 'Fast Explosion'
			, $Eb = '10.0px'
			, _Eb = 'team_capture'
			, aFb = 'football_goals'
			, bFb = 'perks-generic'
			, cFb = 'rgba(255,255,255,0.5)'
			, eFb = 6.2831854820251465
			, fFb = {
			143: 1
		}
			, gFb = 'slot-locked'
			, hFb = {
			752: 1,
			3: 1,
			4: 1,
			5: 1
		}
			, iFb = 'rgb(38,38,38)'
			, jFb = 'rgb(85,85,85)'
			, kFb = 'rgb(61,61,61)'
			, lFb = 'rgb(255,204,0)'
			, mFb = 'subrooms-editing'
			, sFb = 'font-size'
			, uFb = 'com.bm.gwt.client.ui.notifications'
			, vFb = 'left ease-in 0.5s'
			, wFb = 'null'
			, xFb = {
			35: 1,
			31: 1,
			34: 1,
			33: 1,
			117: 1,
			36: 1,
			30: 1,
			29: 1,
			24: 1
		}
			, yFb = {
			26: 1,
			38: 1
		}
			, AFb = 0.15000000596046448
			, BFb = 1.5707963267948966
			, CFb = 5.9604644775390625E-8
			, DFb = {
			42: 1,
			26: 1,
			38: 1
		}
			, EFb = 1.2000000476837158
			, FFb = 2.0000000596046448
			, GFb = 5.000000237487257E-4
			, HFb = 0.0010000000474974513
			, IFb = {
			139: 1,
			42: 1,
			26: 1,
			38: 1
		}
			, JFb = 'fastEffects'
			, KFb = 0.20000000298023224
			, LFb = 0.6000000238418579
			, MFb = 0.014999999664723873
			, NFb = 'rgba(0,0,0,0.2)'
			, OFb = 1.149999976158142
			, PFb = 'GameTickQueue'
			, QFb = {
			329: 1,
			3: 1,
			4: 1,
			5: 1
		}
			, RFb = '#ff0000'
			, SFb = '__noinit__'
			, TFb = '__java$exception'
			, UFb = {
			3: 1,
			25: 1,
			17: 1
		}
			, VFb = 'Unknown'
			, WFb = -2147483648
			, XFb = {
			58: 1,
			41: 1
		}
			, YFb = 'com.bm.model.shared.abilities'
			, ZFb = {
			59: 1
		}
			, $Fb = 'com.mmorts.core.shared.savable'
			, _Fb = 'savableList'
			, aGb = {
			41: 1,
			24: 1
		}
			, bGb = 'com.mmorts.core.shared.conf'
			, cGb = 'com.bm.model.shared.conf'
			, dGb = {
			24: 1
		}
			, eGb = 'com.bm.model.shared.event'
			, fGb = {
			13: 1
		}
			, gGb = 'com.mmorts.core.shared.builder'
			, hGb = 'SYSTEM'
			, iGb = {
			9: 1,
			6: 1,
			44: 1
		}
			, jGb = {
			6: 1
		}
			, kGb = 'com.bm.model.shared.message'
			, lGb = 'com.bm.model.shared.order'
			, mGb = 'com.bm.model.shared.privates'
			, nGb = {
			113: 1,
			9: 1,
			6: 1,
			41: 1
		}
			, oGb = 'com.bm.model.shared.quest'
			, pGb = 'listPartial'
			, qGb = 'change'
			, rGb = 'Unit{uid='
			, sGb = ', playerUid='
			, tGb = ', coords='
			, uGb = ', modified='
			, vGb = 'Unit_event'
			, wGb = {
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}
			, xGb = {
			19: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}
			, yGb = 'com.bm.model.shared.unit'
			, zGb = {
			19: 1,
			39: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}
			, AGb = {
			13: 1,
			14: 1
		}
			, BGb = 'com.bm.model.shared.unit.bombs'
			, CGb = {
			19: 1,
			39: 1,
			63: 1,
			37: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}
			, DGb = {
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1,
			123: 1
		}
			, EGb = 'com.mmorts.core.shared.unit'
			, FGb = 'java.util'
			, GGb = {
			104: 1
		}
			, HGb = {
			9: 1,
			6: 1,
			8: 1,
			124: 1,
			235: 1,
			15: 1,
			18: 1
		}
			, IGb = {
			19: 1,
			85: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}
			, JGb = {
			49: 1
		}
			, KGb = 'com.bm.model.shared.unit.bombs.factory'
			, LGb = 'com.bm.model.shared.unit.explosions'
			, MGb = 'Sprite{countDown='
			, NGb = 'com.bm.model.shared.unit.mover'
			, OGb = 'com.google.gwt.core.client.impl'
			, PGb = 'anonymous'
			, QGb = 'fnStack'
			, RGb = {
			60: 1,
			21: 1,
			3: 1,
			12: 1,
			10: 1
		}
			, SGb = 'com.google.gwt.dom.client'
			, TGb = {
			27: 1,
			21: 1,
			3: 1,
			12: 1,
			10: 1
		}
			, UGb = {
			89: 1,
			21: 1,
			3: 1,
			12: 1,
			10: 1
		}
			, VGb = {
			21: 1,
			70: 1,
			3: 1,
			12: 1,
			10: 1
		}
			, WGb = {
			21: 1,
			71: 1,
			3: 1,
			12: 1,
			10: 1
		}
			, XGb = {
			21: 1,
			72: 1,
			3: 1,
			12: 1,
			10: 1
		}
			, YGb = {
			45: 1,
			3: 1,
			12: 1,
			10: 1
		}
			, ZGb = 'com.google.web.bindery.event.shared'
			, $Gb = 'com.google.gwt.event.shared'
			, _Gb = 'com.google.gwt.event.dom.client'
			, aHb = 'click'
			, bHb = {
			110: 1,
			3: 1,
			25: 1,
			17: 1
		}
			, cHb = 'UmbrellaException'
			, dHb = 4194303
			, eHb = 1048575
			, fHb = 524288
			, gHb = 4194304
			, hHb = 17592186044416
			, iHb = 'java.util.logging'
			, jHb = 'com.google.gwt.logging.client'
			, kHb = 'com.google.gwt.logging.impl'
			, lHb = 'java.io'
			, mHb = 'CSS1Compat'
			, nHb = 'com.google.gwt.user.client'
			, oHb = 'load'
			, pHb = 2097152
			, qHb = 16777216
			, rHb = 33554432
			, sHb = 67108864
			, tHb = '__gwtLastUnhandledEvent'
			, uHb = {
			35: 1,
			31: 1,
			34: 1,
			33: 1,
			117: 1,
			36: 1,
			161: 1,
			30: 1,
			29: 1,
			24: 1
		}
			, vHb = {
			41: 1
		}
			, wHb = {
			170: 1
		}
			, xHb = 'Unit belongs to other list'
			, yHb = 'com.mmorts.core.shared.curves'
			, zHb = 'PlaneModel'
			, AHb = 'com.mmorts.core.shared.map'
			, BHb = ') must be dividable by CHUNK_SIZE('
			, CHb = 'cant rotate AABB by 45 degrees'
			, DHb = 'savableIdMap'
			, EHb = 'com.mmorts.core.shared.utils'
			, FHb = 15525485
			, GHb = 16777215
			, HHb = 'elemental.html'
			, IHb = 'For input string: "'
			, JHb = {
			12: 1,
			105: 1
		}
			, KHb = '_gwt_modCount'
			, LHb = {
			24: 1,
			68: 1,
			55: 1,
			145: 1
		}
			, MHb = {
			24: 1,
			68: 1,
			131: 1,
			55: 1,
			116: 1
		}
			, NHb = {
			118: 1
		}
			, OHb = {
			24: 1,
			55: 1,
			145: 1
		}
			, PHb = 'delete'
			, QHb = 'INFO'
			, RHb = {
			3: 1
		}
			, SHb = {
			3: 1,
			4: 1,
			5: 1,
			790: 1
		}
			, THb = 'javaemul.internal'
			, UHb = 'Invalid UTF8 sequence'
			, VHb = 'fromIndex: 0, toIndex: '
			, WHb = ', length: '
			, XHb = 'org.apache.log4j'
			, YHb = 'org.apache.log4j.spi';
		var _, uhb, phb, bhb = -1;
		vhb();
		whb(1, null, {}, J);
		_.ub = function K(a) {
			return this === a
		}
		;
		_.vb = function M() {
			return this.mg
		}
		;
		_.wb = function O() {
			return hCb(this)
		}
		;
		_.xb = function Q() {
			return jub(N(this)) + '@' + (P(this) >>> 0).toString(16)
		}
		;
		_.equals = function(a) {
			return this.ub(a)
		}
		;
		_.hashCode = function() {
			return this.wb()
		}
		;
		_.toString = function() {
			return this.xb()
		}
		;
		var T2, U2, V2;
		whb(236, 1, {}, kub);
		_.Wf = function lub(a) {
			var b;
			b = new kub;
			b.e = 4;
			a > 1 ? (b.c = tub(this, a - 1)) : (b.c = this);
			return b
		}
		;
		_.Xf = function rub() {
			iub(this);
			return this.b
		}
		;
		_.Yf = function uub() {
			return jub(this)
		}
		;
		_.Zf = function wub() {
			iub(this);
			return this.g
		}
		;
		_.$f = function yub() {
			return (this.e & 4) != 0
		}
		;
		_._f = function zub() {
			return (this.e & 1) != 0
		}
		;
		_.xb = function Cub() {
			return ((this.e & 2) != 0 ? 'interface ' : (this.e & 1) != 0 ? '' : 'class ') + (iub(this),
				this.j)
		}
		;
		_.e = 0;
		var hub = 1;
		var Afb = nub(LCb, 'Object', 1);
		var nfb = nub(LCb, 'Class', 236);
		whb(330, 1, {}, T);
		var R;
		var i3 = nub(MCb, 'App', 330);
		whb(16, 1, NCb);
		_.yb = function V(a) {}
		;
		_.zb = function W() {}
		;
		_.Ab = function X() {}
		;
		_.Bb = function Y() {
			return this.rb
		}
		;
		_.Cb = function Z() {}
		;
		_.Db = function $(a) {}
		;
		_.tb = 0;
		var Edb = nub(OCb, 'GameStep', 16);
		whb(476, 16, NCb);
		_.yb = function db(a) {
			var b;
			b = a;
			ab(this, b.b, b.a)
		}
		;
		_.zb = function eb() {
			bb(this)
		}
		;
		_.Db = function fb(a) {
			$lb(this.rb.X, I7, this)
		}
		;
		var a8 = nub(QCb, 'ClientMessagesLayer', 476);
		whb(477, 476, NCb, jb);
		_.zb = function kb() {
			var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;
			if (!gb || this.c.C) {
				bb(this);
				return
			}
			for (g = new xxb(this.c.O); g.a < g.c.a.length; ) {
				f = wxb(g);
				if (Z2(f, 130)) {
					m = f.a;
					dwb(this.f, 'GOAL') || fwb(this.f, 'GOAL', new oxb);
					gxb(cwb(this.f, 'GOAL'), m)
				} else
					Z2(f, 87) ? ab(this, f.b, f.a) : Z2(f, 129) && ib(this, f)
			}
			hb(this);
			j = this.f;
			for (i = (k = new wwb((new qwb((new Nwb(j)).a)).a),
				new Rwb(k)); i.a.b; ) {
				h = (e = vwb(i.a),
					e.ig());
				o = h == null ? Xvb(zzb(j.a, null)) : Ozb(j.b, h);
				if (o.a.length == 0)
					continue;
				b = SCb;
				c = 0;
				d = 0;
				for (n = new xxb(o); n.a < n.c.a.length; ) {
					m = wxb(n);
					if (!m) {
						lb(this.e, h);
						break
					}
					l = Lc(this.c.q, m);
					if (!l)
						continue;
					p = l.f - Ty(this.c.q._);
					q = l.g - Uy(this.c.q._);
					p /= this.d;
					q /= this.d;
					a = p * p + q * q;
					if (a < b) {
						b = a;
						c = p;
						d = q
					}
					mb(this.e, h, p, q, 0)
				}
				b < SCb && mb(this.e, h + '_NEAREST', c, d, 0)
			}
			bb(this)
		}
		;
		_.a = false;
		_.b = false;
		_.d = 32;
		var gb = true;
		var j3 = nub(MCb, 'AudioManager', 477);
		whb(269, 16, NCb);
		_.Eb = function ob() {
			++this.X;
			this.X > 65000 && (this.X = 1);
			while (!Enb(this.rb.cb, this.X)) {
				++this.X;
				this.X > 65000 && (this.X = 1)
			}
			return this.X
		}
		;
		_.Fb = function pb() {
			return 0
		}
		;
		_.Gb = function qb() {
			return false
		}
		;
		_.X = 0;
		var Adb = nub(OCb, 'GameHost', 269);
		whb(157, 269, {
			20: 1,
			8: 1,
			157: 1,
			16: 1,
			50: 1
		});
		_.zb = function wb() {
			rb(this)
		}
		;
		_.Ab = function xb() {
			var a, b;
			for (b = Xl(this.rb.cb.e); b.pos + 1 < b.sz; ) {
				a = Mn(b);
				!!a && a.Se()
			}
		}
		;
		_.Hb = function yb(a) {
			Fmb(this.T, a)
		}
		;
		_.Ib = function zb(a) {
			Fmb(this.T, a)
		}
		;
		_.Eb = function Ab() {
			return this.U++
		}
		;
		_.Fb = function Bb() {
			return this.S
		}
		;
		_.Cb = function Cb() {
			ub(this)
		}
		;
		_.Db = function Db(a) {}
		;
		_.S = 0;
		_.U = 1000000;
		_.W = false;
		var Cdb = nub(OCb, 'GameStateClient', 157);
		whb(158, 157, {
			158: 1,
			20: 1,
			8: 1,
			157: 1,
			16: 1,
			50: 1
		}, Lb);
		_.zb = function Mb() {
			Eb(this)
		}
		;
		_.Jb = function Nb() {
			return new rf(this.rb)
		}
		;
		_.Kb = function Ob() {}
		;
		_.Lb = function Pb() {}
		;
		_.C = false;
		_.D = 0;
		_.K = false;
		_.L = false;
		var o6 = nub(TCb, 'BmClientStub', 158);
		whb(271, 158, {
			271: 1,
			158: 1,
			20: 1,
			8: 1,
			157: 1,
			16: 1,
			50: 1
		}, kc);
		_.zb = function lc() {
			var a, b, c, d, e, f, g, h, i, j, k, l, m;
			Eb(this);
			if (!!this.G && (this.G.g & 1) != 0 && this.r == 0) {
				++this.r;
				++this.p
			}
			if (this.p != 0) {
				fc(this);
				this.p = 0
			}
			if (!!this.G && this.G.f != this.k) {
				this.k = this.G.f;
				this.u = this.rb._
			}
			this.F.d == 0 && bq(this.j, 4);
			if (!this.s && (this.F.b >= 0 || this.F.d < -100)) {
				this.s = true;
				kA(this.G) ? (Iy.emit(VCb, 'test'),
					undefined) : (Iy.emit(VCb, null),
					undefined)
			}
			for (e = 0; e < this.O.a.length; e++) {
				b = ixb(this.O, e);
				Z2(b, 128) && Zb(this, b)
			}
			j = this.rb.R.a;
			k = j.o;
			if (this.f != k) {
				c = this.f != -1 && k > this.f;
				this.f = k;
				Cm(Iy, k, 1, c)
			}
			m = j.u;
			if (this.g != m) {
				c = this.g != -1 && m > this.g;
				this.g = m;
				Cm(Iy, m, 2, c)
			}
			if (this.c) {
				for (f = 0; f < this.rb.c.b.a.length; f++)
					Xb(this, ixb(this.rb.c.b, f), false);
				this.c = false
			}
			for (g = 0; g < this.rb.c.c.a.length; g++)
				Xb(this, ixb(this.rb.c.c, g), false);
			for (h = 0; h < this.rb.R.b.a.length; h++) {
				a = ixb(this.rb.R.b, h);
				if (Z2(a, 95)) {
					l = jvb(a.c, '');
					Xb(this, a, l)
				} else if (Z2(a, 189)) {
					i = Fb(this);
					if (!(i == this.H.b && !!i.d && !!i.d.Y && i.d.N > 0)) {
						hc(this, this.S);
						dd(this.q, YI(this.rb.O, a.a).e);
						this.a.b = true
					}
				} else
					_z(this.rb, a)
			}
			for (d = 0; d < this.H.b.f.a.length; d++) {
				a = ixb(this.H.b.f, d);
				Z2(a, 95) && Xb(this, a, false)
			}
		}
		;
		_.Jb = function mc() {
			return new Ef(this)
		}
		;
		_.Cb = function nc() {
			ub(this)
		}
		;
		_.Kb = function oc() {
			this.K ? bq(this.j, 0) : this.I ? bq(this.j, 0) : cq(this.j);
			!!this.I == (this.q.pb == 0) && cd(this.q, this.I ? 1 : 0);
			!this.I ? (this.i = null) : (this.i = this.I.db);
			_z(this.rb, new vJ)
		}
		;
		_.Lb = function pc() {
			this.K ? bq(this.j, 0) : this.I ? bq(this.j, 0) : cq(this.j);
			!!this.I == (this.q.pb == 0) && cd(this.q, this.I ? 1 : 0)
		}
		;
		_.Db = function qc(a) {
			$lb(this.rb.X, m8, new rc(this))
		}
		;
		_.b = 0;
		_.c = false;
		_.f = 0;
		_.g = 0;
		_.p = 0;
		_.r = 0;
		_.s = false;
		_.u = 0;
		var Qb;
		var l3 = nub(MCb, 'BmClient', 271);
		whb(485, 1, WCb, rc);
		_.yb = function sc(a) {
			var b;
			++(b = this,
				a,
				b).a.p
		}
		;
		var k3 = nub(MCb, 'BmClient/1', 485);
		whb(56, 16, NCb);
		_.Mb = function uc(a) {}
		;
		var q3 = nub(MCb, 'ClientLayer', 56);
		whb(560, 56, NCb, md);
		_.zb = function nd() {
			var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o;
			ed(this);
			this.C.f = this.rb._ + 1;
			this.c.q = Date.now();
			this._.a = 0;
			this._.b = 0;
			if (this.qb.e) {
				b = this.qb.e.a.o.b.width;
				a = this.qb.e.a.o.b.height;
				this.G.c == (Jd(),
					Ed) && this._.e < a * 3 && (this._.a += b / 2 | 0)
			}
			if (!!this.qb.a && !!this.qb.a.c) {
				b = this.qb.a.c.A;
				a = this.qb.a.c.k;
				this.G.c == (Jd(),
					Ed) && this._.e < a * 3 && (this._.a -= b / 2 | 0)
			}
			hwb((Nu(),
				Lu));
			hwb(Mu);
			ig(this.ob);
			for (m = Xl(this.qb.A.a); m.pos + 1 < m.sz; ) {
				k = Mn(m);
				ht(k, this.mb);
				dg(jg(this.ob, k.mb.c), k)
			}
			for (l = Xl(this.qb.a.a); l.pos + 1 < l.sz; ) {
				k = Mn(l);
				ht(k, this.mb);
				dg(jg(this.ob, k.mb.c), k)
			}
			for (d = Xl(this.qb.B.c); d.pos + 1 < d.sz; ) {
				c = Mn(d);
				k = c.db;
				!k.ob && ht(k, bwb(this.nb, Sub(k.pb.re().b)));
				dg(jg(this.ob, k.mb.c), k)
			}
			yc(this);
			o = false;
			n = false;
			g = this.qb.V;
			for (f = 0; f < g.length; f++) {
				k = g[f];
				i = k.pb;
				!k.ob && ht(k, bwb(this.nb, Sub(i.re().b)));
				k.Dd();
				k == this.F && (o = true);
				if (Z2(k, 96)) {
					e = k;
					i.ib == this.C.k ? (e.G = 1) : !!this.qb.k && ZV(this.qb.k, i.ib) ? (e.G = 2) : (e.G = 0);
					if (e.G == 1) {
						this.D = i;
						n = true;
						jvb(this.D.H.q, 'ditzy')
					}
				}
				dg(jg(this.ob, k.mb.c), k)
			}
			o || (this.F = null);
			n || (this.D = null);
			Cu = false;
			h = this.qb.F.d;
			this.db = $wnd.Math.min(eDb, $wnd.Math.max(0, pDb * (350 - h)));
			if (!this.L) {
				this.L = new Fw;
				this.K = jl();
				rw(this.L, this.rb);
				ht(this.L, this.M)
			}
			this.rb._ % 10 == 0 && el(this.K, R.i.a.length);
			gl(this.K, this.rb.k.a);
			hl(this.K, ~~(SCb / R.I + 0.5));
			fl(this.K, Yub((this.rb._ - this.qb.T.f) * R.I, 2000));
			this.D ? dl(this.K, this.D.jb.e >> 5, this.D.jb.f >> 5) : dl(this.K, this.s.e >> 5, this.s.f >> 5);
			il(this.K, Xub(0, (this.rb.e.d + 9) / 10 | 0));
			sw(this.L, this.D);
			Ew(this.L);
			if (!!nf(this.qb.J) && this.G.c.c >= 700 && this.G.c.a >= 700)
				Fc(this, nf(this.qb.J));
			else if (this.D) {
				j = FO(this.D);
				j ? Gc(this, j, true) : Gc(this, this.D, true)
			} else
				this.F ? Gc(this, this.F.pb, true) : Hc(this);
			this.f ? Bc(this, this.r, this.p, false) : rg(this.r);
			Bc(this, this.P, this.T, true)
		}
		;
		_.Nb = function od(a) {
			this.mb = sh(this.rb.Q.j.k);
			if (!this.mb.flag && Z2(this.G, 155)) {
				bh(this.mb);
				this.mb.flag = true
			}
			ewb(this.nb, Sub((UB(),
				OB).b), this.mb);
			lj(this.lb, this.mb);
			fj(this.lb, this.rb)
		}
		;
		_.Mb = function pd(a) {}
		;
		_.Db = function qd(a) {
			var b, c;
			loadSprites(this);
			this._ = this.G.g;
			c = getConfigParam('zoomMin', 16) / 32;
			b = getConfigParam('zoomMax', 32) / 32;
			ez(this._, 0, 0, b);
			fz(this._, c, b);
			this.C = this.qb.N;
			this.X = 0;
			this.db = 1
		}
		;
		_.a = false;
		_.g = 0;
		_.k = 0;
		_.n = 0;
		_.o = false;
		_.u = 0;
		_.v = 0;
		_.A = false;
		_.B = false;
		_.J = false;
		_.N = false;
		_.O = 0;
		_.U = 0;
		_.V = 0;
		_.X = 0;
		_.Y = 0;
		_.Z = 0;
		_.$ = 0;
		_.db = 0;
		_.eb = 0;
		_.fb = 0;
		_.gb = 0;
		_.hb = 0;
		_.ib = 0;
		_.pb = 0;
		var vc;
		var m3 = nub(MCb, 'BmRenderer', 560);
		whb(636, 56, NCb, ud);
		var n3 = nub(MCb, 'ClickManager', 636);
		whb(769, 1, {});
		var vd;
		var odb = nub(OCb, 'AgileFactory', 769);
		whb(336, 769, {}, wd);
		var o3 = nub(MCb, 'ClientAgileFactory', 336);
		whb(663, 56, NCb, xd);
		_.zb = function yd() {
			var a, b, c, d, e;
			if (this.qb.F.d <= 0)
				return;
			a = this.qb.I;
			b = this.qb.i;
			if (!b || b.p || !RR(a))
				return;
			for (e = Xl(this.rb.cb.e); e.pos + 1 < e.sz; ) {
				d = Mn(e);
				if (Z2(d, 76)) {
					c = d;
					if (c.W == this.rb._)
						continue;
					if (!c.e && KY(c, YR(a))) {
						if (c.c && (a.G.g & 32) != 0) {
							UR(a)
						} else if (c.g > 0 && c.g == ZB(ZI(a.V.O, a), a.v.r > 0 ? a.v.r : a.K, a.v.f)) {
							UR(a)
						} else if (a.N <= LY(c)) {
							bv(b, this.rb._);
							a.a = (Gqb(),
							4 - ((c.fb.c & 6) >> 1) & 3);
							console.log('-');
							gxb(this.qb.R, new GK(a,this.rb._,YR(a)))
						}
						return
					}
				}
			}
		}
		;
		var p3 = nub(MCb, 'ClientDeathLayer', 663);
		whb(10, 1, {
			3: 1,
			12: 1,
			10: 1
		});
		_.Ob = function Ad(a) {
			return this.e - a.e
		}
		;
		_.ub = function Bd(a) {
			return this === a
		}
		;
		_.wb = function Cd() {
			return hCb(this)
		}
		;
		_.xb = function Dd() {
			return this.d != null ? this.d : '' + this.e
		}
		;
		_.e = 0;
		var pfb = nub(LCb, 'Enum', 10);
		whb(92, 10, {
			92: 1,
			3: 1,
			12: 1,
			10: 1
		}, Kd);
		_.a = 0;
		_.b = 0;
		_.c = 0;
		var Ed, Fd, Gd, Hd, Id;
		var r3 = oub(MCb, 'DisplayMode', 92, Ld);
		whb(349, 1, {});
		_.F = null;
		_.G = null;
		_.I = 0;
		var ldb = nub(sDb, 'ClientApp', 349);
		whb(350, 349, {});
		var e6 = nub(tDb, 'GameApp', 350);
		whb(337, 350, {}, ee);
		_.d = false;
		_.e = 0;
		_.f = 0;
		_.n = false;
		_.o = 0;
		_.p = 0;
		_.q = 0;
		_.r = false;
		var v3 = nub(MCb, 'GWTApp', 337);
		whb(351, 1, {}, fe);
		_.Pb = function ge(a) {
			ae(this.a, this.a.g.c)
		}
		;
		var s3 = nub(MCb, 'GWTApp/1', 351);
		whb(352, 1, {}, he);
		_.Qb = function ie(b) {
			var c, d, e, f, g;
			b = Date.now();
			while (this.a.i.a.length > 0 && dCb(ixb(this.a.i, 0)) <= b - GDb)
				kxb(this.a.i, 0);
			gxb(this.a.i, b);
			Iy.emit('renderEventBegin');
			try {
				Ey(this.a.B, b)
			} catch (a) {
				a = chb(a);
				if (Z2(a, 17)) {
					f = a;
					CBb(this.a.A, (MAb(),
						LAb), 'error in processMessage', f)
				} else
					throw dhb(a)
			}
			try {
				this.a.G ? jd(this.a.c.q, b, this.a.q) : Sd(this.a)
			} catch (a) {
				a = chb(a);
				if (Z2(a, 17)) {
					f = a;
					CBb(this.a.A, (MAb(),
						LAb), 'error in render', f)
				} else
					throw dhb(a)
			}
			g = b + 12;
			$wnd.effects.update(1, g);
			!!this.a.G && Vf(this.a.c.v, g);
			Iy.emit('renderEventEnd');
			this.a.k = In(this);
			if (this.a.e > 0) {
				e = Date.now();
				c = e - b;
				c > 100 && ABb(this.a.A, 'Frame #' + this.a.e + ': ' + nhb(ihb($wnd.Math.round(c))) + ' ms.');
				d = e - this.a.o;
				this.a.e % 100 == 0 && this.a.f > 0 && d > 300 && ABb(this.a.A, 'Frame #' + this.a.e + ': since server message #' + this.a.f + ' ' + nhb(ihb($wnd.Math.round(d))) + ' ms.')
			}
			++this.a.e;
			return true
		}
		;
		var t3 = nub(MCb, 'GWTApp/2', 352);
		whb(770, 1, {});
		_.b = false;
		_.c = 0;
		var gfb = nub(HDb, 'Timer', 770);
		whb(353, 770, {}, le);
		var u3 = nub(MCb, 'GWTApp/3', 353);
		whb(466, 1, {}, xe);
		_.a = false;
		_.b = 0;
		_.c = false;
		_.e = 0;
		_.f = 0;
		var F3 = nub(MCb, 'MouseController', 466);
		whb(467, 1, {}, ye);
		_.Pb = function ze(a) {
			me(this.a, a);
			a.preventDefault()
		}
		;
		var w3 = nub(MCb, 'MouseController/1', 467);
		whb(468, 1, {}, Ae);
		_.Pb = function Be(a) {
			ne(this.a, a);
			a.preventDefault()
		}
		;
		var x3 = nub(MCb, 'MouseController/2', 468);
		whb(469, 1, {}, Ce);
		_.Pb = function De(a) {
			pe(this.a, a);
			a.preventDefault()
		}
		;
		var y3 = nub(MCb, 'MouseController/3', 469);
		whb(470, 1, {}, Ee);
		_.Pb = function Fe(a) {
			var b;
			oe((b = this.a,
				a,
				b))
		}
		;
		var z3 = nub(MCb, 'MouseController/4', 470);
		whb(471, 1, {}, Ge);
		_.Pb = function He(a) {
			qe(this.a, a);
			a.preventDefault()
		}
		;
		var A3 = nub(MCb, 'MouseController/5', 471);
		whb(472, 1, {}, Ie);
		_.Pb = function Je(a) {
			te(this.a, a)
		}
		;
		var B3 = nub(MCb, 'MouseController/6', 472);
		whb(473, 1, {}, Ke);
		_.Pb = function Le(a) {
			se(this.a, a)
		}
		;
		var C3 = nub(MCb, 'MouseController/7', 473);
		whb(474, 1, {}, Me);
		_.Pb = function Ne(a) {
			re(this.a, a)
		}
		;
		var D3 = nub(MCb, 'MouseController/8', 474);
		whb(475, 1, {}, Oe);
		_.Pb = function Pe(a) {
			a.preventDefault();
			a.stopPropagation()
		}
		;
		var E3 = nub(MCb, 'MouseController/9', 475);
		whb(441, 1, {}, Ve);
		_.Rb = function We(a, b) {
			var c;
			this.a = b.reason;
			Vd(this.b, b.code, b.reason);
			for (c = 0; c < this.f.length; c++) {
				this.f[c].close()
			}
		}
		;
		_.Sb = function Xe(a, b) {
			Te(this, b)
		}
		;
		_.Tb = function Ye(b, c) {
			var d, e, f, g;
			f = false;
			try {
				g = new Uint8Array(8);
				for (e = 0; e < 8; e++) {
					g[e] = 0 & 255
				}
				V$(this.c, g.buffer);
				f = true
			} catch (a) {
				a = chb(a);
				if (Z2(a, 25)) {
					d = a;
					CBb(R.A, (MAb(),
						LAb), 'websockets err', d)
				} else
					throw dhb(a)
			}
			f || ABb(R.A, 'Browser does not support binary websockets');
			Nd(this.b);
			Iy.emit(BDb)
		}
		;
		_.a = '';
		_.d = 0;
		_.g = '';
		var H3 = nub(MCb, 'MyWebSocket', 441);
		whb(442, 1, {}, Ze);
		_.Rb = function $e(a, b) {
			Sn(this.a.f, a)
		}
		;
		_.Sb = function _e(a, b) {
			Te(this.a, b)
		}
		;
		_.Tb = function af(a, b) {}
		;
		var G3 = nub(MCb, 'MyWebSocket/1', 442);
		whb(222, 1, {
			222: 1
		}, df);
		_.a = 1;
		_.b = -1;
		_.c = -1;
		_.d = GDb;
		_.f = 0;
		_.g = 1;
		_.j = 0;
		_.k = 0;
		_.n = 0;
		_.o = 0;
		_.p = 0;
		var J3 = nub(MCb, 'Particle', 222);
		whb(620, 56, NCb, jf);
		_.zb = function kf() {
			var a, b;
			for (a = 0; a < this.a.length; a++) {
				b = this.a[a];
				(b.f >= 1 || b.j >= this.rb._ + 50 || b.b == 0) && oN(this.c, a)
			}
			gN(this.c)
		}
		;
		var I3 = nub(MCb, 'ParticleManager', 620);
		whb(293, 16, ODb, rf);
		_.Ab = function sf() {
			!!this.n && OM(this.n)
		}
		;
		_.Hb = function tf(a) {
			lf(this, a)
		}
		;
		_.Ib = function uf(a) {
			lf(this, a)
		}
		;
		_.o = 0;
		var m6 = nub(PDb, 'ClientQuestLayer', 293);
		whb(705, 293, ODb, Ef);
		_.zb = function Ff() {
			if (this.a) {
				Df(this)
			} else {
				if (this.i != -1) {
					if (this.i > this.rb._)
						return;
					this.i = -1;
					!!this.n && Cf(this)
				}
				(this.o != -1 || this.c) && Cf(this);
				this.c = false
			}
		}
		;
		_.Mb = function Gf(a) {
			Zs(R.v, this.k)
		}
		;
		_.Db = function Hf(a) {
			TG();
			$lb(this.rb.X, G7, new cH);
			bt(R.v, this.k = new Is(this));
			$lb(this.rb.X, b4, new $n(this));
			this.a = Iy.hasMethod(RDb);
			Iy.emit(QDb, '');
			Iy.emit(RDb, '')
		}
		;
		_.a = false;
		_.b = false;
		_.c = false;
		_.e = false;
		_.f = null;
		_.g = false;
		_.i = -1;
		_.j = false;
		var K3 = nub(MCb, 'QuestManager', 705);
		whb(661, 56, ODb, Lf);
		_.Hb = function Mf(a) {}
		;
		_.Ib = function Nf(a) {
			Kf(this);
			gf(this.qb.n)
		}
		;
		var L3 = nub(MCb, 'SpriteManager', 661);
		whb(604, 16, NCb);
		_.b = 0;
		var mdb = nub(sDb, 'GameStateLazyView', 604);
		whb(605, 604, NCb, Wf);
		var M3 = nub(MCb, 'TerrainView', 605);
		var Xf;
		whb(221, 1, {}, $f);
		_.a = 0;
		_.d = 0;
		_.e = 0;
		_.f = 0;
		_.g = 0;
		_.i = 0;
		var N3 = nub(MCb, 'TextRenderer/NicknameCache', 221);
		whb(665, 56, NCb, _f);
		_.yb = function ag(a) {
			Qn(this.c, a)
		}
		;
		_.zb = function bg() {
			var a, b, c, d, e;
			for (c = Xl(this.c); c.pos + 1 < c.sz; ) {
				b = Mn(c);
				if (wG(this.rb.Q, Zz(b.a)) == 4) {
					d = new Lv(b.a,b.b);
					gt(d, this.rb);
					Qn(this.a, d)
				}
			}
			this.c.length = 0;
			for (e = Xl(this.a); e.pos + 1 < e.sz; ) {
				d = Mn(e);
				Iv(d)
			}
			for (a = 0; a < this.a.length; a++)
				Gv(this.a[a]) && oN(this.b, a);
			gN(this.b)
		}
		;
		_.Db = function cg(a) {
			$lb(this.rb.X, v8, this)
		}
		;
		var O3 = nub(MCb, 'TileEffectManager', 665);
		whb(296, 1, {
			296: 1
		}, fg);
		var Q3 = nub(_Db, 'PlaneUnitList', 296);
		whb(137, 1, {});
		_.f = 0;
		var geb = nub(aEb, 'ListPool', 137);
		whb(619, 137, {}, kg);
		_.Ub = function lg() {
			return new fg
		}
		;
		var P3 = nub(_Db, 'PlaneUnitList/Pool', 619);
		whb(297, 1, {
			297: 1
		}, og);
		_.ub = function pg(a) {
			if (a == null)
				return false;
			return mpb(this.f, a.f)
		}
		;
		_.wb = function qg() {
			return ng(this)
		}
		;
		_.c = false;
		var S3 = nub(_Db, 'PlaneView', 297);
		whb(298, 137, {}, ug);
		_.Ub = function vg() {
			return new og
		}
		;
		_.wb = function wg() {
			return sg(this)
		}
		;
		_.a = 0;
		var R3 = nub(_Db, 'PlaneView/Pool', 298);
		whb(30, 1, {
			33: 1,
			30: 1
		});
		_.Vb = function Dg() {
			throw dhb(new Fvb)
		}
		;
		_.xb = function Fg() {
			if (!this.$) {
				return '(null handle)'
			}
			return (dib(),
				this.$).outerHTML
		}
		;
		var _cb = nub(dEb, 'UIObject', 30);
		whb(29, 30, eEb);
		_.Wb = function Og() {}
		;
		_.Xb = function Pg() {}
		;
		_.Yb = function Qg() {
			return this.W
		}
		;
		_.Zb = function Rg() {
			Ig(this)
		}
		;
		_.$b = function Sg(a) {
			Jg(this, a)
		}
		;
		_._b = function Tg() {
			if (!this.Yb()) {
				throw dhb(new Jub("Should only call onDetach when the widget is attached to the browser's document"))
			}
			try {
				this.Xb()
			} finally {
				dib();
				this.$.__listener = null;
				this.W = false
			}
		}
		;
		_.ac = function Ug() {}
		;
		_.W = false;
		_.X = 0;
		var cdb = nub(dEb, 'Widget', 29);
		whb(267, 29, eEb);
		_.ac = function $g() {
			this.i.style['position'] = (A0(),
				'absolute')
		}
		;
		_.hc = function _g(a, b) {
			Wg(this, a, b)
		}
		;
		_.f = 0;
		_.j = 0;
		_.k = 0;
		var T3 = nub('com.bm.gwt.client.gl', 'CanvasDrawer', 267);
		var _ab = nub(oEb, 'JavaScriptObject$', 0);
		var i6 = pub(pEb, 'Sprite');
		whb(98, 1, {
			98: 1
		}, di, ei);
		_.ic = function fi(a, b) {
			this.f.save();
			Etb(this.f, this.b.width / 2 | 0, this.b.height / 2 | 0);
			ytb(this.f, a, b);
			Etb(this.f, -this.b.width / 2 | 0, -this.b.height / 2 | 0)
		}
		;
		_.jc = function gi(a) {
			this.f.save();
			Etb(this.f, (a.f / 2 | 0) + a.a, (a.e / 2 | 0) + a.b);
			ytb(this.f, a.s, a.s);
			Etb(this.f, -a.c, -a.d)
		}
		;
		_.kc = function hi(a, b, c, d) {
			setRgbaValue(this, a, b, c, d)
		}
		;
		_.lc = function ii() {
			this.f.beginPath()
		}
		;
		_.mc = function ji() {
			itb(this.f, 0, 0, this.b.width, this.b.height)
		}
		;
		_.nc = function ki(a, b, c, d) {
			setRgbaValue(this, a, b, c, d);
			setFillStyle(this.f, this.e);
			ctxFillRect(this.f, 0, 0, this.b.width, this.b.height);
			this.e = null
		}
		;
		_.oc = function li() {
			this.f.save();
			this.f.clip()
		}
		;
		_.pc = function mi() {
			this.f.restore()
		}
		;
		_.qc = function ni(a, b, c, d) {
			Bh(this, a, b, c, d)
		}
		;
		_.rc = function oi(a, b, c) {
			uh(a.texture, this.f);
			this.f.save();
			Etb(this.f, -b, -c);
			ctxFillRect(this.f, b, c, this.b.width, this.b.height);
			this.f.restore()
		}
		;
		_.sc = function pi(a) {
			ao(a, this.f)
		}
		;
		_.tc = function qi(a, b, c, d, e) {
			var f, g;
			if (Rh(this, a, d, e))
				return;
			f = a.renderWidth / this.g;
			g = a.renderHeight / this.g;
			ptb(this.f, a.texture.element, c * a.frameWidth, b * a.frameHeight, a.frameWidth, a.frameHeight, d - f / 2, e - g / 2, f, g)
		}
		;
		_.uc = function ri(a, b, c) {
			Eh(this, a, b, c)
		}
		;
		_.vc = function si(a, b, c, d) {
			Fh(this, a, b, c, d)
		}
		;
		_.wc = function ti(a, b, c, d, e) {
			var f, g, h, i;
			if (Rh(this, a, b, c))
				return;
			h = a.x;
			i = a.y;
			g = a.frameWidth;
			f = a.frameHeight;
			if (this.e == null) {
				ptb(this.f, a.texture.element, h, i, g, f, b, c, d, e)
			} else {
				Qh(this);
				itb(this.d, 0, 0, g, f);
				ptb(this.d, a.texture.element, h, i, g, f, 0, 0, g, f);
				this.d.globalCompositeOperation = 'source-atop';
				setFillStyle(this.d, this.e);
				ctxFillRect(this.d, 0, 0, g, f);
				this.d.globalCompositeOperation = 'source-over';
				ntb(this.f, this.c, 0, 0, g, f, b, c, d, e)
			}
		}
		;
		_.xc = function ui(a, b, c, d, e, f) {
			var g, h, i, j;
			if (Uh(this, a, b, c, d))
				return;
			i = a.frames[b].x;
			j = a.frames[b].y;
			h = a.frameWidth;
			g = a.frameHeight;
			if (this.e == null) {
				ptb(this.f, a.texture.element, i, j, h, g, c, d, e, f)
			} else {
				Qh(this);
				itb(this.d, 0, 0, h, g);
				ptb(this.d, a.texture.element, i, j, h, g, 0, 0, h, g);
				this.d.globalCompositeOperation = 'source-atop';
				setFillStyle(this.d, this.e);
				ctxFillRect(this.d, 0, 0, h, g);
				this.d.globalCompositeOperation = 'source-over';
				ntb(this.f, this.c, 0, 0, h, g, c, d, e, f)
			}
		}
		;
		_.yc = function vi(a, b, c, d, e) {
			var f, g;
			if (Uh(this, a, b, c, d))
				return;
			f = a.renderWidth / this.g;
			g = a.renderHeight / this.g;
			this.f.save();
			Etb(this.f, c, d);
			xtb(this.f, e);
			ptb(this.f, a.texture.element, a.frames[b].x, a.frames[b].y, a.frameWidth, a.frameHeight, -f / 2, -g / 2, f, g);
			this.f.restore()
		}
		;
		_.zc = function wi(a, b, c, d, e, f) {
			var g, h;
			if (Uh(this, a, b, c, d))
				return;
			g = a.renderWidth / this.g;
			h = a.renderHeight / this.g;
			g *= f;
			h *= f;
			this.f.save();
			Etb(this.f, c, d);
			xtb(this.f, e);
			ptb(this.f, a.texture.element, a.frames[b].x, a.frames[b].y, a.frameWidth, a.frameHeight, -g / 2, -h / 2, g, h);
			this.f.restore()
		}
		;
		_.Ac = function xi(a, b, c, d, e, f, g) {
			var h, i;
			if (Uh(this, a, b, c, d))
				return;
			h = a.renderWidth / this.g;
			i = a.renderHeight / this.g;
			h *= f;
			i *= g;
			this.f.save();
			Etb(this.f, c, d);
			xtb(this.f, e);
			ptb(this.f, a.texture.element, a.frames[b].x, a.frames[b].y, a.frameWidth, a.frameHeight, -h / 2, -i / 2, h, i);
			this.f.restore()
		}
		;
		_.Bc = function yi(a, b, c, d, e) {
			var f, g, h, i, j;
			if (Rh(this, a, b, c))
				return;
			d *= a.renderWidth / this.g;
			e *= a.renderHeight / this.g;
			j = false;
			if (d < 0 || e < 0) {
				this.f.save();
				Etb(this.f, b, c);
				if (d < 0) {
					this.f.scale(-1, 1);
					d = -d
				}
				if (e < 0) {
					this.f.scale(1, -1);
					e = -e
				}
				b = 0;
				c = 0;
				j = true
			}
			b += a.renderShiftX / this.g;
			c += a.renderShiftY / this.g;
			h = a.x;
			i = a.y;
			g = a.frameWidth;
			f = a.frameHeight;
			if (this.e == null) {
				ptb(this.f, a.texture.element, h, i, g, f, b - d / 2, c - e / 2, d, e)
			} else {
				Qh(this);
				itb(this.d, 0, 0, g, f);
				ptb(this.d, a.texture.element, h, i, g, f, 0, 0, g, f);
				this.d.globalCompositeOperation = 'source-atop';
				setFillStyle(this.d, this.e);
				ctxFillRect(this.d, 0, 0, g, f);
				this.d.globalCompositeOperation = 'source-over';
				ntb(this.f, this.c, 0, 0, g, f, b - d / 2, c - e / 2, d, e)
			}
			j && (this.f.restore(),
				undefined)
		}
		;
		_.Cc = function zi(a, b, c, d, e, f) {
			var g, h, i, j, k;
			if (Uh(this, a, b, c, d))
				return;
			e *= a.renderWidth / this.g;
			f *= a.renderHeight / this.g;
			k = false;
			if (e < 0 || f < 0) {
				this.f.save();
				Etb(this.f, c, d);
				if (e < 0) {
					this.f.scale(-1, 1);
					e = -e
				}
				if (f < 0) {
					this.f.scale(1, -1);
					f = -f
				}
				c = 0;
				d = 0;
				k = true
			}
			c += a.renderShiftX / this.g;
			d += a.renderShiftY / this.g;
			i = a.frames[b].x;
			j = a.frames[b].y;
			h = a.frameWidth;
			g = a.frameHeight;
			if (this.e == null) {
				ptb(this.f, a.texture.element, i, j, h, g, c - e / 2, d - f / 2, e, f)
			} else {
				Qh(this);
				itb(this.d, 0, 0, h, g);
				ptb(this.d, a.texture.element, i, j, h, g, 0, 0, h, g);
				this.d.globalCompositeOperation = 'source-atop';
				setFillStyle(this.d, this.e);
				ctxFillRect(this.d, 0, 0, h, g);
				this.d.globalCompositeOperation = 'source-over';
				ntb(this.f, this.c, 0, 0, h, g, c - e / 2, d - f / 2, e, f)
			}
			k && (this.f.restore(),
				undefined)
		}
		;
		_.Dc = function Ai(a, b, c, d, e, f, g) {
			if (Rh(this, a, d, e))
				return;
			Gh(this, a, b, c, a.frameWidth, a.frameHeight, d, e, f, g)
		}
		;
		_.Ec = function Bi(a, b, c, d, e, f, g, h, i) {
			Gh(this, a, b, c, d, e, f, g, h, i)
		}
		;
		_.Fc = function Ci(a, b, c, d, e, f, g, h) {
			if (Rh(this, a, d, e))
				return;
			Hh(this, a, b, c, a.frameWidth, a.frameHeight, d, e, f, g, h)
		}
		;
		_.Gc = function Di(a, b, c, d, e) {
			if (Th(this, a, b, c))
				return;
			mtb(this.f, a.b, b, c, d, e)
		}
		;
		_.Hc = function Ei(a, b, c, d, e) {
			if (Sh(this, a, b, c))
				return;
			otb(this.f, a.element, b, c, a.width, a.height)
		}
		;
		_.Ic = function Fi(a, b, c, d, e, f, g, h, i) {
			Ih(this, a, b, c, d, e, f, g, h, i)
		}
		;
		_.Jc = function Hi() {
			this.e = null
		}
		;
		_.Kc = function Ii(a, b, c, d) {
			Nh(this, a, b, c, d)
		}
		;
		_.Lc = function Ji(a, b, c, d, e, f) {
			Oh(this, a, b, c, d, e, f, 0, 0)
		}
		;
		_.Mc = function Ki(a, b, c, d, e, f, g, h) {
			Oh(this, a, b, c, d, e, f, g, h)
		}
		;
		_.Nc = function Li(a, b) {
			Vh(this, a, b)
		}
		;
		_.Oc = function Mi(a, b) {
			Wh(this, a, b)
		}
		;
		_.Pc = function Ni() {
			this.f.restore()
		}
		;
		_.Qc = function Oi() {
			this.f.restore()
		}
		;
		_.Rc = function Pi(a, b) {
			Xh(this, a, b)
		}
		;
		_.Sc = function Qi(a, b, c, d, e) {
			return Zh(this, a, b, c, d, e)
		}
		;
		_.Tc = function Ri(a) {
			$h(this, a)
		}
		;
		_.Uc = function Si() {
			ai(this)
		}
		;
		_.e = null;
		_.g = 1;
		var xh = null;
		var U3 = nub(tEb, 'C2DCanvas', 98);
		whb(195, 267, {
			195: 1,
			35: 1,
			31: 1,
			34: 1,
			33: 1,
			36: 1,
			30: 1,
			29: 1
		}, Ti);
		_.bc = function Ui() {}
		;
		_.cc = function Vi(a) {
			a == 0 ? (this.a = this.b) : (this.a = this.d);
			this.a.mc();
			this.a.ic(this.j, this.k);
			return this.a
		}
		;
		_.dc = function Wi() {
			return new mj
		}
		;
		_.ec = function Xi() {}
		;
		_.fc = function Yi() {
			this.a.Pc();
			this.a = null
		}
		;
		_.gc = function Zi() {
			return this.a
		}
		;
		var V3 = nub(tEb, 'C2DDrawer', 195);
		whb(589, 1, {});
		var j6 = nub(pEb, 'TileRenderer', 589);
		whb(292, 589, {}, mj);
		_.f = 0;
		_.g = 32;
		var W3 = nub(tEb, 'C2DTileRenderer', 292);
		whb(506, 1, {}, wj);
		_.ic = function xj(a, b) {
			rj(this);
			Qtb(this.p, this.C, a, b)
		}
		;
		_.jc = function yj(a) {
			rj(this);
			Qtb(this.p, this.e, a.c - a.a / a.s, a.d - a.b / a.s);
			Ptb(this.p, this.G, a.s)
		}
		;
		_.kc = function zj(a, b, c, d) {
			rj(this);
			this.k = a;
			this.i = b;
			this.g = c;
			this.f = d * this.q
		}
		;
		_.lc = function Aj() {}
		;
		_.mc = function Bj() {
			this.c = 0;
			this.s = 0;
			this.a = null;
			this.q = 1;
			Qtb(this.p, this.n, this.d.width, this.d.height);
			this.p.clear(xEb);
			qj(this)
		}
		;
		_.nc = function Cj(a, b, c, d) {}
		;
		_.oc = function Dj() {}
		;
		_.pc = function Ej() {}
		;
		_.qc = function Fj(a, b, c, d) {}
		;
		_.rc = function Gj(a, b, c) {
			vj(this, a.texture);
			Rtb(this.p, this.j, this.k, this.i, this.g, this.f);
			rk(this.u, 0, 0, 0, this.d.width, this.d.height);
			sk(this.u, 2, b, c, this.d.width, this.d.height);
			Itb(this.p, 34962, 0, this.u);
			this.p.drawArrays(4, 0, 6)
		}
		;
		_.sc = function Hj(a) {}
		;
		_.tc = function Ij(a, b, c, d, e) {
			var f, g, h, i;
			uj(this, a.texture);
			h = a.renderWidth / this.F;
			i = a.renderHeight / this.F;
			d += a.renderShiftX / this.F - h / 2;
			e += a.renderShiftY / this.F - i / 2;
			g = a.frameWidth;
			f = a.frameHeight;
			this.b + 24 > this.u.length && rj(this);
			rk(this.u, this.b, d, e, h, i);
			tj(this, c * g, b * f, g, f)
		}
		;
		_.uc = function Jj(a, b, c) {
			var d, e;
			e = a.renderWidth / this.F;
			d = a.renderHeight / this.F;
			pj(this, a.texture, a.x, a.y, a.frameWidth, a.frameHeight, b - e / 2 + a.renderShiftX / this.F, c - d / 2 + a.renderShiftY / this.F, e, d)
		}
		;
		_.vc = function Kj(a, b, c, d) {
			var e, f;
			uj(this, a.texture);
			e = a.renderWidth / this.F;
			f = a.renderHeight / this.F;
			c += a.renderShiftX / this.F - e / 2;
			d += a.renderShiftY / this.F - f / 2;
			this.b + 24 > this.u.length && rj(this);
			rk(this.u, this.b, c, d, e, f);
			tj(this, a.frames[b].x, a.frames[b].y, a.frameWidth, a.frameHeight)
		}
		;
		_.wc = function Lj(a, b, c, d, e) {
			uj(this, a.texture);
			this.b + 24 > this.u.length && rj(this);
			rk(this.u, this.b, b, c, d, e);
			tj(this, a.x, a.y, a.frameWidth, a.frameHeight)
		}
		;
		_.xc = function Mj(a, b, c, d, e, f) {
			uj(this, a.texture);
			this.b + 24 > this.u.length && rj(this);
			rk(this.u, this.b, c, d, e, f);
			tj(this, a.frames[b].x, a.frames[b].y, a.frameWidth, a.frameHeight)
		}
		;
		_.yc = function Nj(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m;
			uj(this, a.texture);
			f = $wnd.Math.cos(e);
			i = $wnd.Math.sin(e);
			g = a.renderWidth / this.F / 2;
			h = a.renderHeight / this.F / 2;
			j = g * f - h * i;
			l = g * i + h * f;
			k = g * f + h * i;
			m = g * i - h * f;
			this.b + 24 > this.u.length && rj(this);
			qk(this.u, this.b, c - j, d - l, c + k, d + m, c - k, d - m, c + j, d + l);
			tj(this, a.frames[b].x, a.frames[b].y, a.frameWidth, a.frameHeight)
		}
		;
		_.zc = function Oj(a, b, c, d, e, f) {
			var g, h, i, j, k, l, m, n;
			uj(this, a.texture);
			g = $wnd.Math.cos(e);
			j = $wnd.Math.sin(e);
			h = a.renderWidth / this.F / 2;
			i = a.renderHeight / this.F / 2;
			h *= f;
			i *= f;
			k = h * g - i * j;
			m = h * j + i * g;
			l = h * g + i * j;
			n = h * j - i * g;
			this.b + 24 > this.u.length && rj(this);
			qk(this.u, this.b, c - k, d - m, c + l, d + n, c - l, d - n, c + k, d + m);
			tj(this, a.frames[b].x, a.frames[b].y, a.frameWidth, a.frameHeight)
		}
		;
		_.Ac = function Pj(a, b, c, d, e, f, g) {
			var h, i, j, k, l, m, n, o;
			uj(this, a.texture);
			h = $wnd.Math.cos(e);
			k = $wnd.Math.sin(e);
			i = a.renderWidth / this.F / 2;
			j = a.renderHeight / this.F / 2;
			i *= f;
			j *= g;
			l = i * h - j * k;
			n = i * k + j * h;
			m = i * h + j * k;
			o = i * k - j * h;
			this.b + 24 > this.u.length && rj(this);
			qk(this.u, this.b, c - l, d - n, c + m, d + o, c - m, d - o, c + l, d + n);
			tj(this, a.frames[b].x, a.frames[b].y, a.frameWidth, a.frameHeight)
		}
		;
		_.Bc = function Qj(a, b, c, d, e) {
			uj(this, a.texture);
			d *= a.renderWidth / this.F;
			e *= a.renderHeight / this.F;
			b += a.renderShiftX / this.F - d / 2;
			c += a.renderShiftY / this.F - e / 2;
			this.b + 24 > this.u.length && rj(this);
			rk(this.u, this.b, b, c, d, e);
			tj(this, a.x, a.y, a.frameWidth, a.frameHeight)
		}
		;
		_.Cc = function Rj(a, b, c, d, e, f) {
			uj(this, a.texture);
			e *= a.renderWidth / this.F;
			f *= a.renderHeight / this.F;
			c += a.renderShiftX / this.F - e / 2;
			d += a.renderShiftY / this.F - f / 2;
			this.b + 24 > this.u.length && rj(this);
			rk(this.u, this.b, c, d, e, f);
			tj(this, a.frames[b].x, a.frames[b].y, a.frameWidth, a.frameHeight)
		}
		;
		_.Dc = function Sj(a, b, c, d, e, f, g) {
			nj(this, a, b, c, a.frameWidth, a.frameHeight, d, e, f, g)
		}
		;
		_.Ec = function Tj(a, b, c, d, e, f, g, h, i) {
			nj(this, a, b, c, d, e, f, g, h, i)
		}
		;
		_.Fc = function Uj(a, b, c, d, e, f, g, h) {
			oj(this, a, b, c, a.frameWidth, a.frameHeight, d, e, f, g, h)
		}
		;
		_.Gc = function Vj(a, b, c, d, e) {
			var f;
			f = ci(a);
			uj(this, f);
			this.b + 24 > this.u.length && rj(this);
			rk(this.u, this.b, b, c, d, e);
			tj(this, 0, 0, f.width, f.height)
		}
		;
		_.Hc = function Wj(a, b, c, d, e) {
			uj(this, a);
			this.b + 24 > this.u.length && rj(this);
			rk(this.u, this.b, b, c, d, e);
			tj(this, 0, 0, a.width, a.height)
		}
		;
		_.Ic = function Xj(a, b, c, d, e, f, g, h, i) {
			pj(this, a, b, c, d, e, f, g, h, i)
		}
		;
		_.Jc = function Yj() {
			qj(this)
		}
		;
		_.Kc = function Zj(a, b, c, d) {
			vj(this, this.t);
			Rtb(this.p, this.j, this.k, this.i, this.g, this.f);
			rk(this.u, 0, a, b, c, d);
			rk(this.u, 2, 1, 1, 1, 1);
			Itb(this.p, 34962, 0, this.u);
			this.p.drawArrays(4, 0, 6)
		}
		;
		_.Lc = function $j(a, b, c, d, e, f) {}
		;
		_.Mc = function _j(a, b, c, d, e, f, g, h) {}
		;
		_.Nc = function ak(a, b) {}
		;
		_.Oc = function bk(a, b) {}
		;
		_.Pc = function ck() {
			rj(this);
			Qtb(this.p, this.C, 1, 1)
		}
		;
		_.Qc = function dk() {
			rj(this);
			Qtb(this.p, this.e, this.d.width, this.d.height);
			Ptb(this.p, this.G, 1)
		}
		;
		_.Rc = function ek(a, b) {
			htb(this.d, a);
			gtb(this.d, b);
			Ttb(this.p, 0, 0, a, b)
		}
		;
		_.Sc = function fk(a, b, c, d, e) {
			return b
		}
		;
		_.Tc = function gk(a) {
			this.f = this.q = a
		}
		;
		_.Uc = function hk() {}
		;
		_.a = null;
		_.b = 0;
		_.c = 0;
		_.f = 0;
		_.g = 0;
		_.i = 0;
		_.k = 0;
		_.q = 0;
		_.r = 0;
		_.s = 0;
		_.A = 0;
		_.F = 1;
		var X3 = nub(yEb, 'GLCanvas', 506);
		whb(155, 267, {
			155: 1,
			35: 1,
			31: 1,
			34: 1,
			33: 1,
			36: 1,
			30: 1,
			29: 1
		}, ik);
		_.bc = function jk() {}
		;
		_.cc = function kk(a) {
			a == 0 ? (this.a = this.b) : (this.a = this.d);
			this.a.mc();
			this.a.ic(this.j, this.k);
			return this.a
		}
		;
		_.dc = function lk() {
			return new mj
		}
		;
		_.ec = function mk() {}
		;
		_.fc = function nk() {
			this.a.Pc()
		}
		;
		_.gc = function ok() {
			return this.a
		}
		;
		_.hc = function pk(a, b) {
			a &= -2;
			b &= -2;
			a <= 0 && (a = 2);
			b <= 0 && (b = 2);
			Wg(this, a, b);
			this.b.Rc(a, b)
		}
		;
		var Y3 = nub(yEb, 'GLDrawer', 155);
		whb(266, 1, {}, uk);
		_.a = 'attribute vec4 a_position;uniform vec2 u_display, u_center;uniform float u_zoom;uniform vec2 u_frame;uniform vec2 u_scale;varying vec2 v_texCoord;void main() {   vec2 canvasPosition = (a_position.xy-u_center)*u_zoom;   gl_Position = vec4(canvasPosition/u_display*vec2(2.0, -2.0)*u_scale, 0, 1);   v_texCoord = a_position.zw * u_frame;}';
		_.b = 'precision mediump float;uniform sampler2D u_image;uniform vec4 u_color;varying vec2 v_texCoord;void main() {   gl_FragColor = texture2D(u_image, v_texCoord) * u_color;}';
		var Z3 = nub(yEb, 'GLUtils', 266);
		whb(206, 1, {
			206: 1
		});
		var web = nub(DEb, 'BitBuffer', 206);
		whb(218, 206, {
			206: 1
		}, Ik, Jk);
		_.Vc = function Kk(a) {}
		;
		_.Wc = function Lk(a) {}
		;
		_.Xc = function Mk() {
			if (this.f + 1 > this.e)
				throw dhb(new iob);
			return this.i[this.f++]
		}
		;
		_.Yc = function Nk(a, b) {
			var c, d;
			if (!this.g) {
				throw dhb(new Iub)
			}
			this.b && Dk(this);
			if (this.f + a.length > this.e) {
				throw dhb(new iob)
			}
			for (c = 0,
				     d = this.f; c < a.length; ++c,
				     d++)
				a[c] = this.i[d] << 24 >> 24;
			this.f += a.length
		}
		;
		_.Zc = function Ok(a, b) {
			Ek(this, a)
		}
		;
		_.$c = function Pk(a) {
			return Fk(this)
		}
		;
		_._c = function Qk(a) {
			return Gk(this)
		}
		;
		_.ad = function Rk(a) {
			return Hk(this)
		}
		;
		_.bd = function Sk(a, b) {
			var c, d;
			if (this.g) {
				throw dhb(new Iub)
			}
			this.b && Dk(this);
			if (this.f + a.length > this.d) {
				throw dhb(new iob)
			}
			for (c = 0,
				     d = this.f; c < a.length; ++c,
				     d++) {
				this.i[d] = a[c] & 255 & 255
			}
			this.f += a.length;
			this.e = this.f
		}
		;
		_.cd = function Tk(a, b) {
			var c, d;
			if (this.g) {
				throw dhb(new Iub)
			}
			this.b && Dk(this);
			if (this.f + a.length > this.d) {
				throw dhb(new iob)
			}
			for (c = 0,
				     d = this.f; c < a.length; ++c,
				     d++) {
				this.i[d] = a[c] & 255
			}
			this.f += a.length;
			this.e = this.f
		}
		;
		_.dd = function Uk(a, b) {
			if (this.g)
				throw dhb(new Iub);
			if (this.f + 4 > this.d)
				throw dhb(new hob);
			this.i[this.f++] = a & 255;
			this.i[this.f++] = a >> 8 & 255;
			this.i[this.f++] = a >> 16 & 255;
			this.i[this.f++] = a >> 24 & 255;
			this.e = this.f
		}
		;
		_.ed = function Vk(a, b) {
			if (this.g)
				throw dhb(new Iub);
			if (this.f + 2 > this.d)
				throw dhb(new hob);
			this.i[this.f++] = a & 255;
			this.i[this.f++] = a >> 8 & 255
		}
		;
		_.fd = function Wk(a, b) {
			if (this.g)
				throw dhb(new Iub);
			if (this.f >= this.d)
				throw dhb(new hob);
			this.i[this.f++] = a & 255;
			this.e = this.f
		}
		;
		_.a = 0;
		_.b = false;
		_.c = null;
		_.d = 0;
		_.e = 0;
		_.f = 0;
		_.g = false;
		_.i = null;
		var $3 = nub('com.bm.gwt.client.io', 'NativeBitBuffer', 218);
		whb(174, 1, {}, jm);
		_.ld = function km(a, b) {
			this.a.yd(b)
		}
		;
		var _3 = nub('com.bm.gwt.client.js', 'NativeIntMap/lambda$0$Type', 174);
		var ieb = pub(aEb, 'MyList');
		whb(277, 1, {
			277: 1,
			6: 1
		}, Zn);
		var b4 = nub(FEb, 'ClientDestroyMessage', 277);
		whb(278, 1, WCb, $n);
		_.yb = function _n(a) {
			this.a.Mb(a)
		}
		;
		var a4 = nub(FEb, 'ClientDestroyMessage/Adapter', 278);
		whb(786, 29, GEb);
		_.Yb = function go() {
			if (this.V) {
				return this.V.Yb()
			}
			return false
		}
		;
		_.Zb = function ho() {
			eo(this);
			if (this.X != -1) {
				Ng(this.V, this.X);
				this.X = -1
			}
			this.V.Zb();
			dib();
			this.$.__listener = this
		}
		;
		_.$b = function io(a) {
			Jg(this, a);
			this.V.$b(a)
		}
		;
		_._b = function jo() {
			this.V._b()
		}
		;
		_.Vb = function ko() {
			zg(this, this.V.Vb());
			return dib(),
				this.$
		}
		;
		var Ncb = nub(dEb, 'Composite', 786);
		whb(230, 786, GEb);
		_.od = function Ao() {}
		;
		_.j = 0;
		_.s = 0;
		_.t = 0;
		_.u = true;
		_.v = false;
		_.B = 0;
		_.L = 0;
		_.M = 0;
		_.N = 0;
		_.O = 0;
		_.P = 0;
		_.Q = 0;
		_.S = -1;
		_.T = true;
		_.U = -1;
		var h4 = nub(OEb, 'BaseWindow', 230);
		whb(54, 1, PEb);
		_.qd = function Fo() {
			return false
		}
		;
		_.rd = function Go() {}
		;
		_.p = 0;
		_.q = 0;
		_.s = 0;
		_.t = 0;
		var d4 = nub(OEb, 'BaseWindow/Element', 54);
		whb(717, 1, QEb, Ho);
		_.sd = function Io(a) {
			Bo(this.a, a)
		}
		;
		var c4 = nub(OEb, 'BaseWindow/Element/lambda$0$Type', 717);
		whb(81, 54, REb);
		_.pd = function No() {
			Ko(this)
		}
		;
		_.td = function Oo(a) {
			return 0
		}
		;
		_.f = 14;
		_.g = 0;
		_.i = 0;
		_.j = '0,0,0';
		_.k = 3;
		var e4 = nub(OEb, 'BaseWindow/IconTextElement', 81);
		whb(101, 81, {
			54: 1,
			81: 1,
			101: 1
		}, Qo);
		_.pd = function Ro() {
			this.a || $h(this.e.o, 0.5);
			Ko(this);
			this.a || $h(this.e.o, 1)
		}
		;
		_.ud = function So() {
			return this.c
		}
		;
		_.vd = function To() {
			return this.d
		}
		;
		_.qd = function Uo() {
			return !!this.b && this.a
		}
		;
		_.rd = function Vo() {
			this.b.zd()
		}
		;
		_.a = true;
		var f4 = nub(OEb, 'BaseWindow/StaticIconTextElement', 101);
		whb(718, 1, QEb, Wo);
		_.sd = function Xo(a) {
			to(this.a, a)
		}
		;
		var g4 = nub(OEb, 'BaseWindow/lambda$0$Type', 718);
		whb(592, 56, NCb, _o);
		_.Cb = function ap() {
			var a, b, c;
			b = this.rb._ - 10;
			for (a = Xl(this.a); a.pos + 1 < a.sz; ) {
				c = Mn(a);
				c.r < b ? Nn(a) : Zz(c.k) == c.u && Nn(a)
			}
			Zo(this);
			this.b && !jE(this.qb.G.b.a) && (this.b = false)
		}
		;
		_.Mb = function bp(a) {
			if (this.c) {
				Zs(R.v, this.c);
				this.c = null
			}
		}
		;
		_.b = false;
		var i4 = nub(OEb, 'BuildLayer', 592);
		whb(659, 786, GEb, gp);
		_.e = 8;
		_.g = 0;
		_.i = 0;
		_.k = 0;
		_.n = 0;
		_.o = true;
		_.p = 0;
		_.u = -1;
		_.v = -1;
		_.A = 0;
		_.B = 0;
		var k4 = nub(OEb, 'BuildWindow', 659);
		whb(660, 1, {}, ip);
		_.Pb = function jp(a) {
			var b, c, d, e;
			c = a;
			b = this.a.c.getBoundingClientRect();
			d = c.pageX - b.left;
			e = c.pageY - b.top;
			cp(this.a, ~~(d + 0.5), ~~(e + 0.5));
			a.stopPropagation()
		}
		;
		var j4 = nub(OEb, 'BuildWindow/1', 660);
		whb(82, 29, eEb, kp);
		var l4 = nub(OEb, 'CanvasWidget', 82);
		whb(772, 1, {});
		var b5 = nub(OEb, 'Window', 772);
		whb(443, 772, {}, pp);
		_.d = 0;
		_.e = false;
		_.f = false;
		var p4 = nub(OEb, 'ChatWindow', 443);
		whb(444, 1, {}, qp);
		_.Pb = function rp(a) {
			Iy.emit('appEventOpenChat')
		}
		;
		var m4 = nub(OEb, 'ChatWindow/1', 444);
		whb(445, 1, {}, sp);
		_.Pb = function tp(a) {
			Iy.emit('appEventCloseChat')
		}
		;
		var n4 = nub(OEb, 'ChatWindow/2', 445);
		whb(446, 1, {}, up);
		_.Pb = function vp(a) {
			var b;
			b = a;
			if (b.keyCode == 13) {
				b.stopPropagation();
				b.preventDefault();
				op(this.a);
				this.a.d = this.a.c.length
			}
			if (b.keyCode == 27) {
				b.preventDefault();
				this.a.a.blur();
				this.a.e && (this.a.b.style.display = bEb,
					undefined);
				this.a.d = this.a.c.length
			}
			if (!(Iy.emit('isMentionsOpened') || false) && !!R.c && Tb(R.c)) {
				if (b.keyCode == 40) {
					++this.a.d;
					this.a.d == this.a.c.length ? (this.a.a.value = '',
						undefined) : this.a.d > this.a.c.length ? (this.a.d = this.a.c.length) : Ftb(this.a.a, this.a.c[this.a.d]);
					b.stopPropagation();
					b.preventDefault()
				}
				if (b.keyCode == 38) {
					--this.a.d;
					this.a.d < 0 && (this.a.d = 0);
					this.a.c.length > 0 && Ftb(this.a.a, this.a.c[this.a.d]);
					b.stopPropagation();
					b.preventDefault()
				}
			}
		}
		;
		var o4 = nub(OEb, 'ChatWindow/3', 446);
		whb(719, 786, GEb, yp);
		_.a = 16;
		_.b = 30;
		_.c = 2;
		_.d = 160;
		var q4 = nub(OEb, 'HudEffectList', 719);
		whb(668, 56, NCb, zp);
		_.yb = function Ap(a) {
			this.a.u = true
		}
		;
		_.zb = function Bp() {
			xp(this.b);
			xo(this.a)
		}
		;
		_.Nb = function Cp(a) {
			Fp(this.a, Iy.hudConfig || null)
		}
		;
		_.Mb = function Dp(a) {
			if (this.a) {
				Zs(R.v, this.a);
				this.a = null;
				Zs(R.v, this.b);
				this.b = null
			}
		}
		;
		_.Db = function Ep(a) {
			$lb(this.rb.X, i8, this);
			$lb(this.rb.X, n8, this);
			$lb(this.rb.X, o8, this);
			$lb(this.rb.X, j8, this);
			bt(R.v, this.a = new Gp(this.qb));
			bt(R.v, this.b = new yp(this.qb));
			$lb(this.rb.X, r8, new EJ(this))
		}
		;
		var r4 = nub(OEb, 'HudManager', 668);
		whb(715, 230, GEb, Gp);
		_.od = function Hp() {
			var a;
			this.i = -1;
			if (Ib(this.q)) {
				for (a = 0; a < 4; a++) {
					if (!SD(this.K.a, a)) {
						this.i = a;
						break
					}
				}
			}
		}
		;
		_.i = 0;
		var w4 = nub(OEb, 'HudWindow2', 715);
		whb(716, 54, PEb, Ip);
		_.pd = function Jp() {
			var a, b, c, d, e, f, g, h, i, j;
			a = SD(this.b.K.a, this.a);
			i = this.t / 2 | 0;
			j = this.p / 2 | 0;
			f = null;
			Yh(this.b.o, (My(),
				Jy), 9);
			Fh(this.b.o, this.b.I, 0, i, j);
			if (a) {
				f = Jf(this.b.q.t, a.n.b.u);
				!f && (f = sprites.get(bFb))
			} else
				this.a == this.b.i ? (f = this.b.c) : this.a >= 4 ? (f = this.b.g) : this.a >= Yub(this.b.C.R.a.r, 4) && (f = this.b.e);
			if (f) {
				Bh(this.b.o, i - 16 + 2, j - 16 + 2, 28, 28);
				Eh(this.b.o, f, i, j);
				this.b.o.f.restore()
			}
			$h(this.b.o, cDb);
			Fh(this.b.o, this.b.I, 1, i, j);
			$h(this.b.o, 1);
			if (!a)
				return;
			this.b.r.textAlign = 'center';
			this.b.r.textBaseline = 'top';
			if (a.he() >= 0) {
				f = this.b.d;
				Eh(this.b.o, f, i, j);
				this.b.r.fillStyle = 'white';
				Jh(this.b.o, Yub(99, a.he()) + '', i, j + 16 - 6)
			}
			d = a.ge();
			if (d > 0) {
				e = (a.g & 2) != 0;
				e && Yh(this.b.o, Jy, 12);
				b = e ? 1 : nDb + d * eDb / a.fe();
				setFillStyle(this.b.r, e ? cFb : 'rgba(0,0,0,0.5)');
				Nh(this.b.o, i - 16, j - 16, 32, b * 32);
				g = (d + 999) / GDb | 0;
				Kh(this.b.o, g + '', i, j - 16 + (e ? 8 : 4), e ? '0,255,0,1' : '255,255,255,1', '0,0,0,0.7', 1);
				Yh(this.b.o, Jy, 9)
			} else if ((a.g & 8) != 0 || (a.g & 4) != 0 && oM(a.i)) {
				this.b.r.fillStyle = 'rgba(0,0,0,0.5)';
				Nh(this.b.o, i - 16, j - 16, 32, 32)
			}
			if (a.ie()) {
				f = this.b.f;
				Eh(this.b.o, f, i, j);
				this.b.r.fillStyle = 'white';
				this.b.r.textAlign = 'left';
				h = this.a + 1 + '';
				c = cwb(this.b.q.o.b, a.n.b.v);
				!!c && (h = X2(c.a & CEb) + '');
				Jh(this.b.o, h, i - 16, j - 16 - 1)
			}
		}
		;
		_.qd = function Kp() {
			var a;
			if (this.b.K != this.b.q.H.b)
				return false;
			a = SD(this.b.K.a, this.a);
			return !!a || this.a < 4
		}
		;
		_.rd = function Lp() {
			var a;
			if (this.b.K != this.b.q.H.b)
				return;
			a = SD(this.b.K.a, this.a);
			a ? $b(this.b.q, this.a + 49) : this.a < 4 && bq(this.b.q.j, 8)
		}
		;
		_.a = 0;
		var s4 = nub(OEb, 'HudWindow2/AbilityElement', 716);
		whb(141, 54, PEb, Mp);
		_.pd = function Np() {
			var a, b, c;
			if (!this.a)
				return;
			b = this.t / 2 | 0;
			c = this.p / 2 | 0;
			Fh(this.b.o, this.b.I, 0, b, c);
			a = gM(this.b.K, this.a);
			if (a > 0) {
				Bh(this.b.o, b - 16 + 2, c - 16 + 2, 28, 28);
				Eh(this.b.o, Jf(this.b.q.t, this.a.u), b, c);
				this.b.o.f.restore()
			}
			$h(this.b.o, cDb);
			Fh(this.b.o, this.b.I, 1, b, c);
			$h(this.b.o, 1);
			if (a > 1) {
				Eh(this.b.o, this.b.d, b, c);
				Yh(this.b.o, (My(),
					Jy), 9);
				this.b.r.fillStyle = 'white';
				this.b.r.textAlign = 'center';
				this.b.r.textBaseline = 'top';
				Jh(this.b.o, (99 < a ? 99 : a) + '', b, c + 16 - 6)
			}
			if (this.a.g == 1 && (this.b.C.Q.j.g & 1) != 0) {
				setRgbaValue(this.b.o, 1, 0, 0, UDb);
				wo(this.b, 0, 0, this.t, this.p);
				this.b.o.e = null
			}
		}
		;
		var t4 = nub(OEb, 'HudWindow2/ItemElement', 141);
		whb(168, 54, PEb, Op);
		_.pd = function Pp() {
			var a, b, c, d, e, f, g, h, i, j;
			if (!this.a)
				return;
			i = this.t / 2 | 0;
			j = this.p / 2 | 0;
			c = this.b.G.frameHeight;
			Fh(this.b.o, this.b.G, 0, i, j);
			this.b.a[0] = gM(this.b.K, this.a);
			this.b.b[0] = this.b.b[1] = this.b.a[1] = 0;
			h = hM(this.b.K, this.a);
			if (this.a == this.b.C.p) {
				this.b.a[1] = Yub(gM(this.b.K, this.b.C.q), this.b.a[0])
			} else if (this.a == this.b.C.I && gM(this.b.K, this.b.C.q) > 0) {
				++h;
				this.b.b[1] = this.b.a[0];
				this.b.a[1] = 1
			}
			h = h < 50 ? h : 50;
			this.b.a[0] = Yub(this.b.a[0], 50);
			this.b.a[1] = Yub(this.b.a[1], 50);
			this.b.b[1] = Yub(this.b.b[1], 50);
			if (h > 0) {
				for (e = 0; e < 2; e++)
					if (this.b.a[e] > 0) {
						g = lDb * (1.5 + 2 * this.b.b[e] / h);
						b = g + eFb * this.b.a[e] / h;
						Ah(this.b.o, i, j, g, b);
						Fh(this.b.o, this.b.G, 1 + e, i, j);
						this.b.o.f.restore()
					}
				setRgbaValue(this.b.o, 0, 0, 0, 1);
				f = (c / 2 | 0) - 2;
				for (d = 0; d < h; d++) {
					a = 4.71238911151886 + eFb * d / h;
					this.b.o.f.beginPath();
					Wh(this.b.o, i, j);
					Vh(this.b.o, i + $wnd.Math.cos(a) * f, j + $wnd.Math.sin(a) * f);
					ai(this.b.o)
				}
				this.b.o.e = null
			}
			Eh(this.b.o, sh('main-' + this.a.t), i, j)
		}
		;
		var u4 = nub(OEb, 'HudWindow2/PieElement', 168);
		whb(115, 81, REb, Qp);
		_.pd = function Rp() {
			if (!this.a)
				return;
			if (this.a == this.b.C.u && Fb(this.b.q).t.a.b == 2)
				return;
			if (this.a == this.b.C.t && Fb(this.b.q).t.a.b != 2)
				return;
			if (this.a == this.b.C.A && Fb(this.b.q).t.a.b == 1)
				return;
			if (this.a == this.b.C.C && Fb(this.b.q).t.a.b != 1)
				return;
			qo(this.b, this.b.J, this.t, this.p);
			Ko(this);
			if (this.a.g == 1 && (this.b.C.Q.j.g & 1) != 0) {
				setRgbaValue(this.b.o, 1, 0, 0, UDb);
				wo(this.b, 0, 0, this.t, this.p);
				this.b.o.e = null
			}
		}
		;
		_.ud = function Sp() {
			return If(this.b.q.t, this.a.u)
		}
		;
		_.vd = function Tp() {
			return gM(this.b.K, this.a) + ((this.a.i & 128) != 0 ? '%' : '')
		}
		;
		var v4 = nub(OEb, 'HudWindow2/StatElement', 115);
		whb(562, 56, ODb, eq);
		_.zb = function fq() {
			var a;
			!!this.f && !Iy.hasMethod(EEb) && qr(this.f);
			if (!this.e && !this.i)
				return;
			if (this.i) {
				if (this.qb.u == this.rb._) {
					if (!this.qb.k)
						Ql(this.i);
					else {
						a = this.qb.k.kb;
						this.qb.k.d.d.length == 1 ? Ol(this.i, a) : Pl(this.i, a)
					}
				}
			}
		}
		;
		_.Hb = function gq(a) {
			if (!Iy.hasMethod(EEb)) {
				this.rb._ % 10 == 0 && this.b > 0 && Yp(this);
				return
			}
			Up(this);
			Vp(this)
		}
		;
		_.Ib = function hq(a) {}
		;
		_.Mb = function iq(a) {
			Iy.hasMethod(EEb) ? (Iy.emit(EEb, 0),
				undefined) : !!this.f && Eg(xg(this.f.i), false);
			this.b = 0;
			!!this.f && Zs(R.v, this.f)
		}
		;
		_.Db = function jq(a) {
			if (Iy.hasMethod(EEb)) {
				this.e.delAll();
				tl(this.e, this.qb.S);
				Ymb(this.rb.i, new kq(this));
				this.i.delAll();
				Ymb(this.rb.N, new nq(this))
			} else {
				this.f = new ur(this.qb);
				bt(R.v, this.f)
			}
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = false;
		_.j = false;
		_.k = 0;
		var D4 = nub(OEb, 'MenuManager', 562);
		whb(563, 1, fFb, kq);
		_.wd = function lq(a) {
			Qn(this.a.d, a)
		}
		;
		_.xd = function mq(a) {
			rl(this.a.e, a.ib)
		}
		;
		var x4 = nub(OEb, 'MenuManager/1', 563);
		whb(564, 1, fFb, nq);
		_.wd = function oq(a) {
			Kl(this.a.i, a.kb, a.d.d[0].c)
		}
		;
		_.xd = function pq(a) {
			Ml(this.a.i, a.kb)
		}
		;
		var y4 = nub(OEb, 'MenuManager/2', 564);
		whb(565, 1, {}, qq);
		_.yd = function rq(a) {
			Zp(this.a, a)
		}
		;
		var z4 = nub(OEb, 'MenuManager/lambda$0$Type', 565);
		whb(566, 1, {}, sq);
		_.yd = function tq(a) {
			$p(this.a, a)
		}
		;
		var A4 = nub(OEb, 'MenuManager/lambda$1$Type', 566);
		whb(567, 1, {}, uq);
		_.yd = function vq(a) {
			_p(this.a, this.b, a)
		}
		;
		var B4 = nub(OEb, 'MenuManager/lambda$2$Type', 567);
		whb(568, 1, {}, wq);
		_.yd = function xq(a) {
			aq(this.a, this.b, a)
		}
		;
		var C4 = nub(OEb, 'MenuManager/lambda$3$Type', 568);
		whb(572, 56, NCb, Aq);
		_.yb = function Bq(a) {
			!!this.c && (this.c.g = true)
		}
		;
		_.zb = function Cq() {
			!!this.c && Hq(this.c)
		}
		;
		_.Mb = function Dq(a) {
			if (this.c) {
				Zs(R.v, this.c);
				this.c = null
			}
		}
		;
		_.Db = function Eq(a) {
			$lb(this.rb.X, i8, this);
			$lb(this.rb.X, o8, this);
			$lb(this.rb.X, j8, this);
			if (jvb(xn(UCb, '1'), '0')) {
				this.c = new Iq(this.qb);
				bt(R.v, this.c)
			}
			fwb(this.b, 'jetpack', Sub(70));
			fwb(this.b, 'autojetpack', Sub(70));
			fwb(this.b, 'pumpkin_bomb', Sub(82));
			fwb(this.b, 'mine_bomb', Sub(71));
			fwb(this.b, 'mine_bomb_c', Sub(71))
		}
		;
		_.a = 0;
		var E4 = nub(OEb, 'PerksManager', 572);
		whb(713, 786, GEb, Iq);
		_.a = null;
		_.f = 0;
		_.g = true;
		_.j = 0;
		_.k = null;
		_.n = 3;
		_.o = 0;
		var G4 = nub(OEb, 'PerksWindow', 713);
		whb(714, 1, {}, Jq);
		_.Pb = function Kq(a) {
			var b, c, d, e;
			c = a;
			b = this.a.c.getBoundingClientRect();
			d = c.pageX - b.left;
			e = c.pageY - b.top;
			Fq(this.a, ~~(d + 0.5), ~~(e + 0.5))
		}
		;
		var F4 = nub(OEb, 'PerksWindow/1', 714);
		whb(268, 772, {
			268: 1
		}, Uq);
		_.j = 0;
		_.k = -1;
		_.n = -1;
		_.o = 100;
		_.p = 'default';
		_.q = 8;
		_.r = 0;
		_.s = 0;
		_.u = 0;
		_.v = 0;
		_.A = 0;
		var Lq = false, Mq;
		var L4 = nub(OEb, 'PreviewWindow', 268);
		whb(478, 1, {}, Xq);
		_.Qb = function Yq(a) {
			var b;
			if (!this.a.b)
				return false;
			a = Date.now();
			if (this.a.k == -1) {
				this.a.k = a;
				this.a.n = a - this.a.o * 3
			}
			b = a - this.a.k;
			this.a.k = a;
			if (this.a.n + this.a.o < a) {
				Tq(this.a);
				this.a.n += this.a.o;
				this.a.n + this.a.o < a && (this.a.n = a)
			}
			Qq(this.a, b, (a - this.a.n) / this.a.o);
			In(this);
			return true
		}
		;
		var H4 = nub(OEb, 'PreviewWindow/1', 478);
		whb(479, 1, {}, Zq);
		_.Pb = function $q(a) {
			var b, c, d, e;
			c = a;
			b = this.a.b.getBoundingClientRect();
			d = c.pageX - b.left;
			e = c.pageY - b.top;
			Oq(this.a, ~~(d + 0.5), ~~(e + 0.5))
		}
		;
		var I4 = nub(OEb, 'PreviewWindow/2', 479);
		whb(480, 269, NCb, _q);
		_.Gb = function ar() {
			return true
		}
		;
		var J4 = nub(OEb, 'PreviewWindow/3', 480);
		whb(481, 1, fFb, cr);
		_.wd = function dr(a) {
			br(this, a)
		}
		;
		_.xd = function er(a) {}
		;
		var K4 = nub(OEb, 'PreviewWindow/4', 481);
		whb(637, 1, {}, hr);
		_.b = true;
		_.c = 0;
		_.d = 0;
		_.e = -1;
		_.f = -1;
		_.g = 1;
		_.i = 0;
		_.k = 0;
		_.n = 0;
		var M4 = nub(OEb, 'ScoreboardModel', 637);
		whb(608, 786, GEb, ur);
		var ir, jr, kr, lr, mr;
		var P4 = nub(OEb, 'ScoreboardWindow', 608);
		whb(609, 1, QEb, vr);
		_.sd = function wr(a) {
			Wb(this.a.b)
		}
		;
		var N4 = nub(OEb, 'ScoreboardWindow/1', 609);
		whb(610, 1, QEb, xr);
		_.sd = function yr(a) {
			dq(this.a.b.j)
		}
		;
		var O4 = nub(OEb, 'ScoreboardWindow/2', 610);
		whb(723, 230, GEb, Br);
		_.c = false;
		_.e = 0;
		_.f = 0;
		var U4 = nub(OEb, 'SquadHud', 723);
		whb(724, 1, {}, Cr);
		_.zd = function Dr() {
			zr(this.a, 12)
		}
		;
		var Q4 = nub(OEb, 'SquadHud/lambda$0$Type', 724);
		whb(725, 1, {}, Er);
		_.zd = function Fr() {
			zr(this.a, 11)
		}
		;
		var R4 = nub(OEb, 'SquadHud/lambda$1$Type', 725);
		whb(726, 1, {}, Gr);
		_.zd = function Hr() {
			zr(this.a, 13)
		}
		;
		var S4 = nub(OEb, 'SquadHud/lambda$2$Type', 726);
		whb(727, 1, {}, Ir);
		_.zd = function Jr() {
			zr(this.a, 10)
		}
		;
		var T4 = nub(OEb, 'SquadHud/lambda$3$Type', 727);
		whb(670, 56, NCb, Kr);
		_.zb = function Lr() {
			this.rb._ % 10 == 0 && el(this.b.c, R.i.a.length);
			gl(this.b.c, this.rb.k.a);
			hl(this.b.c, ~~(SCb / R.I + 0.5));
			fl(this.b.c, Yub((this.rb._ - this.qb.T.f) * R.I, 2000));
			this.qb.I ? dl(this.b.c, this.qb.I.jb.e >> 5, this.qb.I.jb.f >> 5) : dl(this.b.c, this.qb.q.s.e >> 5, this.qb.q.s.f >> 5);
			il(this.b.c, Xub(0, (this.rb.e.d + 9) / 10 | 0));
			if (this.b.c.changed) {
				this.b.u = true;
				this.b.c.changed = false
			}
			Pr(this.b);
			Ar(this.a)
		}
		;
		_.Mb = function Mr(a) {
			if (this.b) {
				Zs(R.v, this.b);
				this.b = null;
				Zs(R.v, this.a);
				this.a = null
			}
		}
		;
		_.Db = function Nr(a) {
			this.b = new Qr(this.qb);
			bt(R.v, this.b);
			this.a = new Br(this.qb);
			bt(R.v, this.a)
		}
		;
		var V4 = nub(OEb, 'StatusManager', 670);
		whb(720, 230, GEb, Qr);
		_.od = function Rr() {
			var a, b, c;
			this.e.c = '' + this.c.playersCount;
			c = this.c.time;
			a = c / 60 | 0;
			b = c % 60;
			this.g.c = a + (b >= 10 ? ':' : ':0') + b;
			jvb(this.g.c, '3:14') && (this.g.c = 'PI');
			this.a.c = this.c.cx + ', ' + this.c.cy;
			this.d.c = this.c.lag + '';
			this.d.a = Yub(Xub(0, this.c.lag / 150 | 0), 2);
			this.b.c = this.c.fps + ' FPS';
			this.f.c = this.c.slowMo < 99 || this.c.slowMo > 101 ? this.c.slowMo + ' speed' : ''
		}
		;
		var Z4 = nub(OEb, 'StatusWindow', 720);
		whb(102, 81, {
			54: 1,
			81: 1,
			102: 1
		}, Sr);
		_.td = function Tr(a) {
			return this.a
		}
		;
		_.ud = function Ur() {
			return jh(this.d.q.t.n, this.b)
		}
		;
		_.vd = function Vr() {
			return this.c
		}
		;
		_.a = 0;
		_.c = '';
		var W4 = nub(OEb, 'StatusWindow/StatusElement', 102);
		whb(721, 81, REb, Wr);
		_.pd = function Xr() {
			var a, b;
			Ko(this);
			if ((this.a.a.a & 4) != 0) {
				b = this.a.g;
				if (b.length == 0)
					return;
				Zh(this.b.o, (My(),
					Ly), 12, 0, b, this.t);
				this.b.r.textAlign = 'start';
				this.b.r.textBaseline = 'bottom';
				Kh(this.b.o, b, 0, 10, '255,255,255,1', this.j + ',1', 1)
			}
			if (this.b.U == this.a.d) {
				this.b.r.strokeStyle = 'rgba(255,220,220,1)';
				this.b.r.lineWidth = 3;
				a = sh((this.a.b & 1) != 0 ? mFb : this.a.a.t);
				!!a && bi(this.n.o, this.g, ((20 - a.frameHeight) / 2 | 0) + this.i, a.frameWidth, a.frameHeight)
			}
		}
		;
		_.ud = function Yr() {
			return sh((this.a.b & 1) != 0 ? mFb : this.a.a.t)
		}
		;
		_.vd = function Zr() {
			return this.a.j + ''
		}
		;
		_.qd = function $r() {
			return !Hb(this.b.q) && this.b.U != this.a.d
		}
		;
		_.rd = function _r() {
			if (!(!Hb(this.b.q) && this.b.U != this.a.d))
				return;
			hc(this.b.q, this.b.q.S);
			dd(this.b.q.q, this.a.e)
		}
		;
		var X4 = nub(OEb, 'StatusWindow/SubRoomElement', 721);
		whb(722, 1, {}, as);
		_.yd = function bs(a) {
			Or(this.a, a)
		}
		;
		var Y4 = nub(OEb, 'StatusWindow/lambda$0$Type', 722);
		whb(666, 56, NCb, cs);
		_.yb = function ds(a) {
			!!this.a && (this.a.g = true)
		}
		;
		_.zb = function es() {
			var a;
			a = Fb(this.qb).t.a.b == 2;
			if (a) {
				if (!this.a) {
					this.a = new ns(this.qb);
					bt(R.v, this.a)
				}
			} else {
				if (!this.a)
					return
			}
			ms(this.a, a);
			js(this.a)
		}
		;
		_.Mb = function fs(a) {
			!!this.a && Zs(R.v, this.a)
		}
		;
		_.Db = function gs(a) {
			$lb(this.rb.X, p8, this)
		}
		;
		var $4 = nub(OEb, 'TeamManager', 666);
		whb(711, 786, GEb, ns);
		_.a = 0;
		_.f = 0;
		_.g = true;
		_.n = 0;
		_.o = 0;
		_.p = 80;
		_.t = false;
		_.v = 0;
		var a5 = nub(OEb, 'TeamWindow', 711);
		whb(712, 1, {}, os);
		_.Pb = function ps(a) {
			var b, c, d, e;
			c = a;
			b = this.a.c.getBoundingClientRect();
			d = c.pageX - b.left;
			e = c.pageY - b.top
		}
		;
		var _4 = nub(OEb, 'TeamWindow/1', 712);
		whb(671, 56, NCb, ys);
		_.zb = function zs() {
			var a;
			if (this.a) {
				if (this.a.a != -1 && this.c < this.rb._ || this.a.a == -1 && this.b.a.length > 0) {
					Cs(this.e);
					this.d = this.rb._ + 5;
					this.a = null
				}
			} else if (this.d < this.rb._) {
				while (this.b.a.length > 0) {
					a = ixb(this.b, 0).d;
					if (a.length == 0)
						kxb(this.b, 0);
					else if (jvb(a.substr(0, 10), 'changeroom')) {
						mm(Iy, a.substr(11, a.length - 11));
						kxb(this.b, 0)
					} else if (a.indexOf('cantPlay') != -1 && a.indexOf('utorial') != -1) {
						Iy.emit('showRooms');
						break
					} else
						break
				}
				if (this.b.a.length > 0) {
					this.a = ixb(this.b, 0);
					while (this.b.a.length > 0 && UH(ixb(this.b, 0), this.a))
						kxb(this.b, 0);
					this.c = this.rb._ + this.a.a;
					Ds(this.e, um(Iy, this.a.e), um(Iy, this.a.d))
				}
			}
		}
		;
		_.Mb = function As(a) {
			Zs(R.v, this.e)
		}
		;
		_.Db = function Bs(a) {
			this.e = new Es;
			bt(R.v, this.e);
			TH();
			$lb(this.rb.X, R7, new bI(this))
		}
		;
		_.c = 0;
		_.d = 0;
		var c5 = nub(uFb, 'NotificationManager', 671);
		whb(729, 786, GEb, Es);
		var d5 = nub(uFb, 'NotificationZone', 729);
		whb(734, 786, GEb, Is);
		var k5 = nub(uFb, 'QuestWindow', 734);
		whb(737, 1, QEb, Js);
		_.sd = function Ks(a) {
			Af(this.a.f)
		}
		;
		var e5 = nub(uFb, 'QuestWindow/1', 737);
		whb(738, 1, QEb, Ls);
		_.sd = function Ms(a) {
			Bf(this.a.f)
		}
		;
		var f5 = nub(uFb, 'QuestWindow/2', 738);
		whb(320, 29, eEb, Os);
		var g5 = nub(uFb, 'QuestWindow/QuestButton', 320);
		whb(736, 82, eEb, Qs);
		_.a = 0;
		_.c = 0;
		var h5 = nub(uFb, 'QuestWindow/QuestImage', 736);
		whb(319, 29, {
			319: 1,
			35: 1,
			31: 1,
			34: 1,
			33: 1,
			36: 1,
			30: 1,
			29: 1
		}, Ts);
		var i5 = nub(uFb, 'QuestWindow/QuestItem', 319);
		whb(781, 29, xFb);
		_.Wb = function Vs() {
			fjb(this, (djb(),
				bjb))
		}
		;
		_.Xb = function Ws() {
			fjb(this, (djb(),
				cjb))
		}
		;
		var Wcb = nub(dEb, 'Panel', 781);
		whb(275, 781, xFb);
		_.gd = function _s() {
			return new bkb(this.a)
		}
		;
		_.Ad = function at(a) {
			return Zs(this, a)
		}
		;
		var Mcb = nub(dEb, 'ComplexPanel', 275);
		whb(111, 275, xFb, ct);
		var Pcb = nub(dEb, 'FlowPanel', 111);
		whb(735, 111, xFb, et);
		var j5 = nub(uFb, 'QuestWindow/QuestList', 735);
		whb(38, 1, {
			38: 1
		});
		var ndb = nub(sDb, 'VisualUnit', 38);
		whb(26, 38, yFb);
		_.Ed = function kt(a) {
			if (!this.ob)
				return;
			a.Dc(this.ob, this.Id(), this.Hd(), this.lb.f, this.lb.g, this.Jd(), this.Kd())
		}
		;
		_.Fd = function lt(a, b) {
			this.Ed(a)
		}
		;
		_.Gd = function mt(a) {}
		;
		_.Hd = function nt() {
			return 0
		}
		;
		_.Id = function ot() {
			return 0
		}
		;
		_.Jd = function pt() {
			return 1
		}
		;
		_.Kd = function qt() {
			return 1
		}
		;
		_.Ld = function rt() {
			return false
		}
		;
		_.Bd = function st(a) {
			gt(this, a)
		}
		;
		_.Cd = function tt() {}
		;
		_.Md = function ut() {
			return false
		}
		;
		_.Nd = function vt(a, b) {}
		;
		_.Dd = function wt() {}
		;
		var $5 = nub('com.bm.gwt.client.unit', 'BmUnitView', 26);
		whb(203, 26, {
			203: 1,
			26: 1,
			38: 1
		}, xt);
		_.Ed = function yt(a) {}
		;
		_.Gd = function zt(a) {
			a.vc(this.nb.t.d, 0, this.lb.f, this.lb.g + this.b)
		}
		;
		_.Ld = function At() {
			return true
		}
		;
		_.Nd = function Bt(a, b) {
			this.a += a;
			this.b = ($wnd.Math.sin(this.a / 300) * AFb - 1) * this.mb.b
		}
		;
		_.a = 0;
		_.b = 0;
		var l5 = nub('com.bm.gwt.client.unit', 'BmArrowView', 203);
		whb(42, 26, DFb);
		_.Od = function Ot() {
			ff(this.nb.n, this.ab, this.bb, this.cb, this.db, 400, false)
		}
		;
		_.Gd = function Pt(a) {
			Ht(this, a)
		}
		;
		_.Pd = function Qt() {
			var a, b, c, d;
			a = CO(this.pb);
			if (a == 0)
				return 0;
			c = DO(this.pb);
			b = c / 2 / 32;
			d = a / 32 - b;
			return (b * b - d * d) * 32
		}
		;
		_.Ld = function Rt() {
			return this.Y != null
		}
		;
		_.Md = function St() {
			return CO(this.pb) > 0
		}
		;
		_.Nd = function Tt(a, b) {
			Lt(this, b)
		}
		;
		_.Dd = function Ut() {
			Mt(this)
		}
		;
		_.W = true;
		_.Z = 0;
		_.$ = 0;
		_._ = 0;
		_.bb = 0;
		_.cb = 0;
		_.db = 0;
		_.eb = -1;
		_.gb = 0;
		_.hb = 0;
		_.ib = 0;
		_.jb = 0;
		var Ct, Dt;
		var L5 = nub('com.bm.gwt.client.unit', 'BmMovableView', 42);
		whb(228, 42, {
			228: 1,
			42: 1,
			26: 1,
			38: 1
		}, Wt);
		_.Ed = function Xt(a) {
			var b;
			b = this.lb.g - this.jb;
			if ((this.pb.q & 32) != 0) {
				a.Ac(this.ob, 0, this.lb.f, b, this.j, this.o, FFb - this.o);
				a.Cc(this.ob, 1, this.lb.f, b, this.o, FFb - this.o)
			} else {
				a.yc(this.ob, 0, this.lb.f, b, this.j);
				a.vc(this.ob, 1, this.lb.f, b)
			}
		}
		;
		_.Gd = function Yt(a) {
			var b, c, d, e;
			Ht(this, a);
			if (this.n) {
				this.b < 1 && a.Tc(this.b);
				Ft(this, a, this.c, 24, 3, null, -1);
				this.b < 1 && a.Tc(1)
			}
			e = this.lb.g - this.jb - this.lb.b / 2;
			if (this.i.length != 0) {
				e -= this.g.g;
				c = Zf(this.g, this.i, -1, 0, 0);
				a.Hc(c, ~~(this.lb.f - this.g.f + 0.5), ~~(e + 0.5), c.width, c.height)
			} else
				e -= 4;
			if (this.a > 0) {
				d = 0.5 * (1 + this.a);
				b = this.nb.t.c;
				a.Bc(b, this.lb.f, e - 2 - d * b.renderHeight / 2, d, d)
			}
		}
		;
		_.Ld = function Zt() {
			return this.Y != null || this.i.length != 0 || this.a != 0
		}
		;
		_.Nd = function $t(a, b) {
			var c, d, e;
			Lt(this, b);
			this.j += a * this.k;
			if (this.n) {
				d = this.e - this.mb.f;
				e = this.f - this.mb.g;
				this.c = $wnd.Math.atan2(e, d);
				c = $wnd.Math.sqrt(d * d + e * e);
				c < 64 ? (this.b = 0) : c < 192 ? (this.b = (c / 32 - 2) / 4) : (this.b = 1)
			}
			(this.pb.q & 32) != 0 && Vt(this, a)
		}
		;
		_.Dd = function _t() {
			var a, b, c, d;
			Mt(this);
			this.a = 0;
			if (this.pb.N <= 100) {
				++this.a;
				if (this.pb.N <= 99) {
					++this.a;
					c = (this.pb.N / 10 | 0) + '';
					this.pb.N < 10 && (c = 'have a nice day');
					Kt(this, c, this.pb.V._ + 100, 0)
				}
			}
			b = this.pb.c;
			this.n = !!b;
			if (this.n) {
				if (Uob(this.pb.fb.d, this.pb.fb, b, this.d, 40)) {
					this.e = this.d.e;
					this.f = this.d.f
				} else
					this.n = false
			}
			a = this.pb.M;
			a >= 16 ? a >= 24 ? (this.k = GFb * this.pb.V.Q.j.a) : (this.k = -5.000000237487257E-4 * this.pb.V.Q.j.a) : (this.k = 0);
			this.i = '';
			if (this.pb.b != 0) {
				d = fA(this.pb.V, this.pb.b);
				!!d && (this.i = d.q.A)
			}
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = 0;
		_.e = 0;
		_.f = 0;
		_.i = '';
		_.j = 0;
		_.k = 0;
		_.n = false;
		_.o = 1;
		_.p = HFb;
		var n5 = nub('com.bm.gwt.client.unit', 'BmBallView', 228);
		whb(672, 1, {}, au);
		_.Qd = function bu(a) {
			return new Wt(a)
		}
		;
		var m5 = nub('com.bm.gwt.client.unit', 'BmBallView/Builder', 672);
		whb(139, 42, IFb, eu);
		_.Ed = function fu(a) {
			var b;
			this.pb.Ge() == 0 && a.Tc(0.5);
			b = this.lb.g - this.jb;
			this.d == 0 ? a.Cc(this.ob, this.f, this.lb.f, b, cu(this), getPulsationY(this)) : a.Ac(this.ob, this.f, this.lb.f, this.lb.g - this.jb, this.d, cu(this), getPulsationY(this));
			this.pb.Ge() == 0 && a.Tc(1)
		}
		;
		_.Jd = function gu() {
			return cu(this)
		}
		;
		_.Kd = function hu() {
			return getPulsationY(this)
		}
		;
		_.Nd = function iu(a, b) {
			var c;
			Lt(this, b);
			if (this.pb.O.f >= 3)
				return;
			if (this.e.c != this.e.b) {
				this.g += a * this.i;
				(this.pb.q & 64) != 0 && (this.g += a * this.i);
				if (this.g < this.e.c) {
					this.g = $wnd.Math.min(this.e.c * 2 - this.g, this.e.b);
					this.i = -this.i
				}
				if (this.g > this.e.b) {
					this.g = $wnd.Math.max(this.e.c, this.e.b * 2 - this.g);
					this.i = -this.i
				}
			}
			if (this.e.e != 0 && this.pb.N < this.e.f) {
				c = (this.e.f - this.pb.N - b) / this.e.f * 1.5;
				this.d = $wnd.Math.sin(c * c * 10) * this.e.e * (1 + c) / 2
			}
		}
		;
		_.d = 0;
		_.e = null;
		_.f = 0;
		_.g = 1;
		_.i = HFb;
		var p5 = nub('com.bm.gwt.client.unit', 'BmBombView', 139);
		whb(316, 1, {}, ju);
		_.Rd = function ku(a) {
			return new eu(a)
		}
		;
		_.Qd = function lu(a) {
			var b, c, d;
			c = uy(this.a, a);
			if (c)
				return c;
			b = a;
			d = this.Rd(a);
			d.e = Ic(this.b, b.r);
			ht(d, d.e.d);
			d.f = ky(d.e);
			return d
		}
		;
		var o5 = nub('com.bm.gwt.client.unit', 'BmBombView/Builder', 316);
		whb(692, 42, DFb, mu);
		_.Od = function nu() {}
		;
		_.Ed = function ou(a) {
			a.yc(this.ob, this.a, this.lb.f, this.lb.g - this.jb, this.b)
		}
		;
		_.Nd = function pu(a, b) {
			Lt(this, b);
			CO(this.pb) > 0 && (this.b += a * this.c)
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = 0.012000000104308128;
		var r5 = nub('com.bm.gwt.client.unit', 'BmCandyView', 692);
		whb(693, 1, {}, qu);
		_.Qd = function ru(a) {
			return new mu(a)
		}
		;
		var q5 = nub('com.bm.gwt.client.unit', 'BmCandyView/Builder', 693);
		whb(96, 42, {
			96: 1,
			42: 1,
			26: 1,
			38: 1
		}, jv);

		//Render player
		_.Ed = function kv(a) {
			var b, c, d, e, f, g, h, i;
			g = this.lb.a;
			this.B = (2 + this.lb.d) % 8;
			this.A = (2 + g) % 8 / 2 | 0;
			if (this.p) {
				Su(this, a);
				//return;
			} else {
				this.s = null;
				this.t = null;
			}
			this.ob.loaded > 0 || (this.L = 0);

			// if (this.a <= 0) {
			// 	return;
			// }

			this.a != 1 && a.Tc(this.a);
			e = this.lb.f;
			f = this.lb.g - this.jb;
			(this.pb.D & 16) != 0 && !!yu && a.Cc(yu, this.kb._ % yu.frames.length, e, f, (i = this.pb.B == 20 ? 0.75 : 1,
			1.4500000476837158 * (Bl(this.J, this.A, this.B) ? -i : i)), 1.2999999523162842 * $u(this));
			this.T ? Tu(this, a) : Ru(this, a);
			if (this.R) {
				d = this.pb.v;
				d.o > 0 ? a.Dc(Gu, 0, 0, e, f + this.ob.renderShiftY, d.o * pDb, d.o * pDb) : a.tc(Gu, 0, 0, e, f + this.ob.renderShiftY)
			}
			this.a != 1 && a.Tc(1);
			if (this.nb.q.a && this.G == 1 && getConfigParam('debugCam', false)) {
				a.kc(UDb, 1, 1, LFb);
				a.Tc(0.5);
				a.tc(Gu, 0, 0, this.lb.f + this.e, this.lb.g + this.f);
				a.Tc(1);
				a.Jc();
			}
			if (this.nb.q.a && this.G == 1 && wu > 0) {
				if (wu >= 2) {
					Yob(this.ab, toInt($wnd.Math.floor(this.bb)), toInt($wnd.Math.floor(this.cb)), false);
					h = ~~wu;
					b = rd(this.lb.f, 5);
					c = rd(this.lb.g, 5);
					b += (Gqb(), Bqb[g] * h);
					c += Cqb[g] * h;
					b <<= 5;
					c <<= 5;
					b += 16;
					c += 16;
					a.Tc(0.550000011920929);
					a.uc(Fu, b, c);
					a.Tc(1);
				}
				!!Hu && (Gqb(), Bqb[g] == 0 ? Wu(a, e, f, xu, Cqb[g] * 32) : Uu(a, e, f, xu, vu, Bqb[g] * 32));
			}
		};

		//Draw player's nick
		_.Gd = function lv(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
			l = this.G == 1 && this.nb.q.a;
			o = this.G;
			o == 1 && !this.nb.q.a && (o = 0);
			m = l ? this.F : this.D;
			// if (!Ym('shownick', true)) {
			// 	return
			// }
			// if (!this.p && (this.pb.B == 21 || this.d)) {
			// 	if (!R.c.K)
			// 		return
			// }
			b = 1;
			if (this.t) {
				b = 2 * (1 - this.t.progress);
				b > 1 && (b = 1);
				b < 0 && (b = 0)
			}
			b != 1 && a.Tc(b);
			Ht(this, a);
			if (this.pb.t != 0) {
				g = this.pb.s;
				k = this.pb.u;
				n = (k - this.pb.t) / k;
				j = k >= 0 ? If(this.nb.t, g) : null;
				if (g == -4) {
					h = (AA(),
						zA)[0][zR(this.pb)]
				} else {
					h = bm((AA(), sA), g);
					!h && (h = uA)
				}
				Vu(this, a, n, h, j, true)
			}
			if (this.pb.v.i > 1) {
				n = this.pb.N / this.pb.v.i;
				h = n > 0.67 ? (AA(),
					wA)[3] : n > 0.34 ? (AA(),
					wA)[2] : (AA(),
					wA)[0];
				Vu(this, a, n, h, null, false)
			}
			r = krb(this.lb) - this.jb * this.nb.q._.s;
			!!this.ob && (r += this.ob.renderShiftY);
			d = this.pb.v.b;
			if (d == 0 || d == 3) {
				e = Zf(m, this.pb.H.A, this.H, o, yR(this.pb));
				r -= m.g;
				(this.pb.O.f == 4 || this.pb.O.f == 5) && (r -= this.V * m.a);
				a.Hc(e, ~~(this.lb.f - m.f + 0.5), ~~(r + 0.5), e.width, e.height)
			} else if (d == 2) {
				f = this.pb.v.d;
				f = tm(Iy, f);
				e = Zf(m, f, this.H, o, zR(this.pb));
				r -= m.g;
				(this.pb.O.f == 4 || this.pb.O.f == 5) && (r -= this.V * m.a);
				a.Hc(e, ~~(this.lb.f - m.f + 0.5), ~~(r + 0.5), e.width, e.height)
			}
			this.p || eS(this.pb) && a.vc(Iu, ~~this.Q, this.lb.f, r);
			if ((this.pb.D & 1) != 0) {
				q = this.pb.B == 16 ? 1.5 : this.pb.B == 20 ? 0.5 : 1;
				c = this.nb.t.c;
				a.Bc(c, this.lb.f, r - 2 - q / 2 * c.renderHeight, q, q)
			}
			if ((this.pb.D & 32) != 0) {
				p = this.nb.t.a;
				a.uc(p, this.lb.f, r - 2 - p.renderHeight / 2)
			}
			b != 1 && a.Tc(1);
			if (this.nb.q.a) {
				for (i = 0; i < this.o.length; i++)
					py(this.o[i], a)
			}
		};

		_.Hd = function mv() {
			return Xu(this)
		}
		;
		_.Id = function nv() {
			return Yu(this)
		}
		;
		_.Jd = function ov() {
			return Zu(this)
		}
		;
		_.Kd = function pv() {
			return $u(this)
		}
		;
		_.Ld = function rv() {
			return true
		}
		;
		_.Md = function sv() {
			return this.p && this.J.hasSoul || this.J.alwaysOnTop
		}
		;
		_.Nd = function tv(a, b) {
			gv(this, a, b)
		}
		;
		_.Dd = function uv() {
			iv(this)
		}
		;
		_.a = 1;
		_.b = MFb;
		_.c = 0;
		_.d = false;
		_.e = 0;
		_.f = 0;
		_.g = 0;
		_.i = MFb;
		_.j = 0;
		_.k = 0;
		_.n = 0;
		_.p = false;
		_.q = -2;
		_.r = 0;
		_.s = null;
		_.t = null;
		_.u = null;
		_.v = 0;
		_.A = 0;
		_.B = 0;
		_.C = false;
		_.G = 0;
		_.H = 0;
		_.I = false;
		_.K = -1;
		_.L = -1;
		_.M = false;
		_.N = 0;
		_.O = 0;
		_.Q = 0;
		_.R = false;
		_.S = -666;
		_.T = null;
		_.U = false;
		_.V = 0;
		var su = UDb, tu = 400, uu = 0, vu = 0, wu = 0, xu = 0, yu, zu, Au, Bu = 0, Cu = false, Du = 0, Eu = 0, Fu, Gu, Hu, Iu, Ju = 0, Ku = 0, Lu, Mu;
		var u5 = nub('com.bm.gwt.client.unit', 'BmCharacterView', 96);
		whb(493, 1, {}, vv);
		_.Qd = function wv(a) {
			return new jv(a)
		}
		;
		var s5 = nub('com.bm.gwt.client.unit', 'BmCharacterView/Builder', 493);
		whb(494, 1, {}, xv);
		_.Sd = function yv(a) {
			return Nu(),
				!a.j
		}
		;
		var t5 = nub('com.bm.gwt.client.unit', 'BmCharacterView/lambda$0$Type', 494);
		whb(80, 26, {
			80: 1,
			26: 1,
			38: 1
		}, Jv, Kv, Lv);
		_.Ed = function Mv(a) {
			Av(this, a)
		}
		;
		_.Nd = function Nv(a, b) {
			Hv(this, a, b)
		}
		;
		_.Dd = function Ov() {
			Iv(this)
		}
		;
		_.a = -1;
		_.b = 1;
		_.c = false;
		_.d = -1;
		_.e = 0;
		_.g = -1;
		_.i = -1;
		_.n = 0;
		_.o = false;
		_.p = 0;
		_.r = 0;
		_.s = -1;
		_.u = 0;
		_.v = -1;
		var w5 = nub('com.bm.gwt.client.unit', 'BmDestroyView', 80);
		whb(662, 1, {}, Pv);
		_.Qd = function Qv(a) {
			return new Kv(a)
		}
		;
		var v5 = nub('com.bm.gwt.client.unit', 'BmDestroyView/Builder', 662);
		whb(673, 26, yFb, Uv);

		//Draw Explosion
		_.Ed = function Vv(a) {
			var b, c, d, e, f, g, h, i, j;
			if (this.n >= 3)
				return;
			this.pb.e && a.Tc(0.5);
			b = this.a;
			h = this.ob.frameWidth;
			if (this.n == 0) {
				i = this.lb.f;
				j = this.lb.g;
				a.Dc(this.ob, 23 + b, this.g, i, j, 1, this.j);
				a.Dc(this.ob, 23 + b, (this.g + 1) % 4, i, j, this.j, 1);
			} else {
				this.g = this.lb.d;
				c = (Gqb(), 4 - ((this.g & 6) >> 1) & 3);
				f = this.e;
				g = 0;
				d = this.i % 1 * h;
				e = ~~(this.i * 2 % 2) * 4 + c;
				if (this.n == 2) {
					--f;
					++g;
				}
				switch (this.g % 8) {
					case 0:
						f != 0 && a.Ic(this.ob.texture, d, b * h, h * f, h, arb(this.lb), this.lb.g - this.j * 16, f * 32, this.j * 32);
						this.c && a.Dc(this.ob, 16 + b, e, crb(this.lb) - 16, this.lb.g, 1, this.j);
						break;
					case 4:
						f != 0 && a.Ic(this.ob.texture, h - d, b * h, h * f, h, arb(this.lb) + 32 * g, this.lb.g - 16 * this.j, f * 32, this.j * 32);
						this.c && a.Dc(this.ob, 16 + b, e, arb(this.lb) + 16, this.lb.g, 1, this.j);
						break;
					case 2:
						f != 0 && a.Ic(this.ob.texture, b * h, 7 * h + d, h, h * f, this.lb.f - this.j * 16, krb(this.lb), this.j * 32, f * 32);
						this.c && a.Dc(this.ob, 16 + b, e, this.lb.f, Wqb(this.lb) - 16, this.j, 1);
						break;
					case 6:
						f != 0 && a.Ic(this.ob.texture, b * h, 8 * h - d, h, h * f, this.lb.f - 16 * this.j, krb(this.lb) + 32 * g, this.j * 32, f * 32);
						this.c && a.Dc(this.ob, 16 + b, e, this.lb.f, krb(this.lb) + 16, this.j, 1);
				}
			}
			this.pb.e && a.Tc(1);
		};

		_.Hd = function Wv() {
			if (this.n == 2)
				return 2 + ~~(this.i * 2 % 2);
			return this.n
		}
		;
		_.Nd = function Xv(a, b) {
			this.n >= 3 && Tv(this, a);
			this.i += a * pDb;
			this.d ? (this.j = $wnd.Math.min(1, this.j + a * 0.004999999888241291)) : (this.j = $wnd.Math.max(nDb, this.j - a * jDb))
		}
		;
		_.Dd = function Yv() {
			this.n == 0 && (this.g = (this.g + 1) % 4);
			(this.n == 2 || this.n == 3) && (this.c = wG(this.kb.Q, Zz(this.b)) != 7);
			this.d = dY(this.pb) > 2
		}
		;
		_.a = 0;
		_.c = false;
		_.d = false;
		_.e = 0;
		_.f = 0;
		_.g = 0;
		_.i = 0;
		_.j = 0;
		_.k = 0;
		_.n = 0;
		var Rv = 50
			, Sv = 500;
		var y5 = nub('com.bm.gwt.client.unit', 'BmExplosionView', 673);
		whb(674, 1, {}, Zv);
		_.Qd = function $v(a) {
			return new Uv(a)
		}
		;
		var x5 = nub('com.bm.gwt.client.unit', 'BmExplosionView/Builder', 674);
		whb(684, 26, yFb, _v);
		_.Ed = function aw(a) {}
		;
		_.Nd = function bw(a, b) {
			switch (this.pb.c) {
				case 0:
					ff(this.nb.n, this.pb.fb.d, this.mb.f, this.mb.g, 0, 500, this.pb.a == 1);
					break;
				case 1:
					ef(this.nb.n, this.pb.a, this.pb.fb.d, this.mb.f, this.mb.g, 500, 1);
			}
		}
		;
		var A5 = nub('com.bm.gwt.client.unit', 'BmEyeCandyView', 684);
		whb(685, 1, {}, cw);
		_.Qd = function dw(a) {
			return new _v(a)
		}
		;
		var z5 = nub('com.bm.gwt.client.unit', 'BmEyeCandyView/Builder', 685);
		whb(688, 26, yFb, ew);
		_.Ed = function fw(a) {
			var b;
			if (this.pb.p != 255) {
				b = (AA(),
					wA)[xA[this.pb.p]];
				a.kc(b.e, b.c, b.a, this.a + $wnd.Math.sin(this.b) * hDb)
			} else {
				a.Tc(this.a + $wnd.Math.sin(this.b) * hDb)
			}
			a.Kc(arb(this.lb), krb(this.lb), this.lb.e, this.lb.b);
			this.pb.p != 255 ? a.Jc() : a.Tc(1)
		}
		;
		_.Nd = function gw(a, b) {
			var c;
			this.b += a / GDb;
			c = cDb + 0.19999998807907104 * this.pb.n / this.pb.o;
			if (this.a > c) {
				this.a -= a / GDb;
				this.a < c && (this.a = c)
			} else if (this.a < c) {
				this.a += a / GDb;
				this.a > c && (this.a = c)
			}
		}
		;
		_.a = 0;
		_.b = 0;
		var C5 = nub('com.bm.gwt.client.unit', 'BmForceFieldView', 688);
		whb(689, 1, {}, hw);
		_.Qd = function iw(a) {
			return new ew(a)
		}
		;
		var B5 = nub('com.bm.gwt.client.unit', 'BmForceFieldView/Builder', 689);
		whb(682, 42, DFb, lw);
		_.Ed = function mw(a) {
			var b, c, d, e;
			c = this.lb.f;
			d = this.lb.g;
			e = this.lb.d & 7;
			b = e * 0.7853981852531433;
			a.Tc(this.a);
			a.Ac(this.ob, this.b, c, d, b, this.c, this.d / 32);
			a.Tc(1)
		}
		;
		_.Nd = function nw(a, b) {
			var c, d;
			Lt(this, b);
			this.d = nP(this.pb, b);
			c = this.ob.frames.length;
			d = this.kb._ % (c * 2);
			this.b = d % c;
			this.c = (d / c | 0) != 0 ? 1 : -1;
			this.a = Wnb(jw, (this.pb.b + b) / this.pb.d)
		}
		;
		_.Dd = function ow() {
			Mt(this);
			rrb(this.mb, this.pb.fb.c)
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = 0;
		_.d = 0;
		var jw;
		var E5 = nub('com.bm.gwt.client.unit', 'BmGammaProjectileView', 682);
		whb(683, 1, {}, pw);
		_.Qd = function qw(a) {
			return new lw(a)
		}
		;
		var D5 = nub('com.bm.gwt.client.unit', 'BmGammaProjectileView/Builder', 683);
		whb(634, 26, yFb);
		_.Bd = function ww(a) {
			rw(this, a)
		}
		;
		_.Td = function xw() {}
		;
		_.Nd = function yw(a, b) {
			uw(this, a)
		}
		;
		_.Dd = function zw() {
			vw(this)
		}
		;
		_.g = false;
		_.i = 0;
		var F5 = nub('com.bm.gwt.client.unit', 'BmHudViewBase', 634);
		whb(728, 634, yFb, Fw);
		_.Ed = function Gw(a) {
			Aw(this, a)
		}
		;
		_.Td = function Hw() {
			var a, b;
			if (!this.pb) {
				this.e = '';
				return
			}
			this.d = false;
			uz(this.pb.B) && (this.d = true);
			a = tz(this.pb.B);
			if (a.length != 0) {
				a = yn(a);
				if (this.pb.C != 511) {
					b = (this.pb.C + 9) / 10 | 0;
					b == 0 ? (a = '') : (a += ' ' + b + ' ' + yn('SECONDS'))
				}
			}
			jvb(this.e, a) || (this.g = true);
			this.e = a
		}
		;
		_.Dd = function Iw() {
			Ew(this)
		}
		;
		_.a = 0;
		_.d = false;
		_.e = '';
		var G5 = nub('com.bm.gwt.client.unit', 'BmHudView', 728);
		whb(229, 26, {
			229: 1,
			26: 1,
			38: 1
		}, Kw);
		_.Ed = function Lw(a) {
			var b;
			if (this.pb.a >= this.kb._)
				return;
			if (this.c) {
				a.Tc(0.5);
				rT(this.pb) ? a.kc(eDb, 1, eDb, 1) : a.kc(1, 1, LFb, 1);
				b = EFb + $wnd.Math.sin(this.d / 500) * nDb;
				a.Bc(this.e, this.lb.f, this.lb.g + this.i, b, b);
				a.Jc();
				a.Tc(1)
			}
			!this.e && (this.e = this.nb.t.g);
			this.b != 1 && a.Tc(this.b);
			a.uc(this.e, this.lb.f, this.lb.g + this.i);
			this.f && a.uc(Jw, this.lb.f + (this.lb.e - Jw.frameWidth) / 2, this.lb.g + (this.lb.b - Jw.frameHeight) / 2 + this.i);
			this.b != 1 && a.Tc(1)
		}
		;
		_.Nd = function Mw(a, b) {
			this.d += a;
			this.g ? (this.i = $wnd.Math.sin(this.d / 300) * AFb * this.mb.b) : (this.i = 0);
			if (this.a) {
				this.b < XDb && (this.b = $wnd.Math.max(XDb, this.b + a / 300));
				this.b > XDb && (this.b = $wnd.Math.min(XDb, this.b - a / 300))
			} else {
				this.b = $wnd.Math.min(1, this.b + a / 300)
			}
		}
		;
		_.Dd = function Nw() {
			var a, b, c, d;
			c = this.pb.d;
			b = this.pb.c;
			if (!this.e) {
				this.e = Jf(this.nb.t, this.pb.e);
				!this.e && !!c && (this.e = Jf(this.nb.t, c.u));
				!this.e && !!b && (this.e = Jf(this.nb.t, b.u))
			}
			this.c = sT(this.pb);
			this.i = this.pb.fb.f;
			this.g = true;
			d = Fb(this.nb);
			a = eM(d, this.pb);
			this.f = a == 2;
			this.a = !!d.d && a == 0
		}
		;
		_.a = false;
		_.b = 0;
		_.c = false;
		_.d = 0;
		_.f = false;
		_.g = false;
		_.i = 0;
		var Jw;
		var I5 = nub('com.bm.gwt.client.unit', 'BmItemView', 229);
		whb(675, 1, {}, Ow);
		_.Qd = function Pw(a) {
			return new Kw(a)
		}
		;
		var H5 = nub('com.bm.gwt.client.unit', 'BmItemView/Builder', 675);
		whb(694, 42, DFb, Qw);
		_.Ed = function Rw(a) {
			var b, c, d;
			if (!this.ob || !(this.ob.loaded > 0))
				return;
			b = vl(mh(this.ob), this.b, this.c, ~~this.eb);
			c = this.b % 2;
			d = this.lb.g - this.jb;
			a.Dc(this.ob, c, b, this.lb.f, d, this.d, this.d);
			a.Dc(this.ob, c + 2 * (this.a + 1), b, this.lb.f, d, this.d, this.d)
		}
		;
		_.Nd = function Sw(a, b) {
			Lt(this, b);
			if (!this.ob)
				return;
			if (this.c) {
				a = a / mh(this.ob).animSpeed * mh(this.ob).animCount * this.pb.V.Q.j.b;
				this.b < 2 ? (this.eb += a) : (this.eb -= a)
			} else {
				this.d += a * this.e;
				(this.pb.q & 64) != 0 && (this.d += a * this.e);
				if (this.d < fDb) {
					this.d = $wnd.Math.min(1.7999999523162842 - this.d, OFb);
					this.e = -this.e
				}
				if (this.d > OFb) {
					this.d = $wnd.Math.max(fDb, 2.299999952316284 - this.d);
					this.e = -this.e
				}
			}
		}
		;
		_.Dd = function Tw() {
			var a;
			Mt(this);
			a = Jqb(this.lb.d);
			this.b = (2 + a) % 8 / 2 | 0;
			this.c = this.pb.M >= 16;
			this.a = this.pb.a
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = false;
		_.d = 1;
		_.e = GFb;
		var K5 = nub('com.bm.gwt.client.unit', 'BmMineView', 694);
		whb(695, 1, {}, Uw);
		_.Qd = function Vw(a) {
			return new Qw(a)
		}
		;
		var J5 = nub('com.bm.gwt.client.unit', 'BmMineView/Builder', 695);
		whb(676, 42, DFb, Ww);
		_.Ed = function Xw(a) {
			if (this.d == 0)
				return;
			this.a != 1 && a.Tc(this.a);
			this.c = (this.lb.d + 2) % 8 / 2 | 0;
			a.tc(this.ob, this.c, this.b, this.lb.f, this.lb.g);
			this.a != 1 && a.Tc(1)
		}
		;
		_.Md = function Yw() {
			return true
		}
		;
		_.Nd = function Zw(a, b) {
			Lt(this, b);
			this.eb += a / 400 * this.pb.S;
			this.b = ~~this.eb;
			this.b %= 6;
			this.b >= 4 && (this.b = 6 - this.b);
			this.d == 1 && (this.a += a / 5000)
		}
		;
		_.Dd = function $w() {
			Mt(this);
			this.d = GT(this.pb);
			this.a = FT(this.pb)
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = 0;
		_.d = 0;
		var N5 = nub('com.bm.gwt.client.unit', 'BmPacmanView', 676);
		whb(677, 1, {}, _w);
		_.Qd = function ax(a) {
			return new Ww(a)
		}
		;
		var M5 = nub('com.bm.gwt.client.unit', 'BmPacmanView/Builder', 677);
		whb(304, 26, {
			304: 1,
			26: 1,
			38: 1
		}, kx);
		_.Ed = function mx(a) {
			fx(this, a)
		}
		;
		_.Fd = function nx(a, b) {
			gx(this, a, b)
		}
		;
		var bx, cx, dx = 0;
		var P5 = nub('com.bm.gwt.client.unit', 'BmPortalView', 304);
		whb(633, 1, {}, qx);
		_.Qd = function rx(a) {
			return new kx(a)
		}
		;
		var O5 = nub('com.bm.gwt.client.unit', 'BmPortalView/Builder', 633);
		whb(302, 42, {
			42: 1,
			302: 1,
			26: 1,
			38: 1
		}, sx);
		_.Ed = function tx(a) {
			var b;
			b = this.lb.g - this.jb;
			a.zc(this.ob, 0, this.lb.f, b, this.a, this.c);
			a.Cc(this.ob, 1, this.lb.f, b, this.c, this.c)
		}
		;
		_.Nd = function ux(a, b) {
			Lt(this, b);
			this.a += a * this.b
		}
		;
		_.Dd = function vx() {
			var a;
			Mt(this);
			a = this.pb.M;
			a >= 16 ? a >= 24 ? (this.b = HFb * this.pb.V.Q.j.a) : (this.b = -0.0010000000474974513 * this.pb.V.Q.j.a) : (this.b = 0);
			this.pb.c != this.pb.d ? (this.c = (this.pb.N - this.pb.d) * 0.5 / (this.pb.c - this.pb.d) + 0.5) : (this.c = 1)
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = 0;
		var R5 = nub('com.bm.gwt.client.unit', 'BmSnowballView', 302);
		whb(632, 1, {}, wx);
		_.Qd = function xx(a) {
			return new sx(a)
		}
		;
		var Q5 = nub('com.bm.gwt.client.unit', 'BmSnowballView/Builder', 632);
		whb(680, 42, DFb, yx);
		_.Ed = function zx(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
			f = this.lb.f;
			g = this.lb.g - this.jb;
			d = mDb / this.f;
			a.kc(fDb, fDb, fDb, this.a);
			a.lc();
			for (n = 0; n < this.f; n++) {
				j = this.d * 1.0700000524520874;
				c = n * d + this.b;
				a.Oc(f, g);
				a.Nc(f + j * $wnd.Math.cos(c), g + j * $wnd.Math.sin(c))
			}
			for (l = 0; l < this.e; l++) {
				j = this.d * (l + 1) / this.e;
				c = this.b;
				a.Oc(f + j * $wnd.Math.cos(c), g + j * $wnd.Math.sin(c));
				for (m = 0; m < this.f; m++) {
					p = 1 + toInt(j * d * $wnd.Math.abs(-1.2000000476837158) / 5);
					for (o = 1; o <= p; o++) {
						c = (m + o / p) * d + this.b;
						h = $wnd.Math.cos(c);
						i = $wnd.Math.sin(c);
						b = (o / p - 0.5) * d;
						k = $wnd.Math.cos(b) - $wnd.Math.cos(d / 2);
						e = j * (1 + -2.200000047683716 * k);
						a.Nc(f + e * h, g + e * i)
					}
				}
			}
			a.Uc();
			a.Jc()
		}
		;
		_.Pd = function Ax() {
			var a, b;
			a = cob(this.pb.c);
			b = a * 0.25;
			return b * (1 - Fsb((2 * this.pb.f - a) / a))
		}
		;
		_.Nd = function Bx(a, b) {
			Lt(this, b);
			this.d = nP(this.pb, b);
			pP(this.pb) && (this.b += this.c * a);
			this.a = eDb * $wnd.Math.min(1, $wnd.Math.max(0, (oP(this.pb) - b) / 3))
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = 0;
		_.d = 0;
		_.e = 0;
		_.f = 0;
		var T5 = nub('com.bm.gwt.client.unit', 'BmSpiderWebView', 680);
		whb(681, 1, {}, Cx);
		_.Qd = function Dx(a) {
			return new yx(a)
		}
		;
		var S5 = nub('com.bm.gwt.client.unit', 'BmSpiderWebView/Builder', 681);
		whb(690, 139, IFb, Ix);

		//Draw bomb
		_.Ed = function Jx(a) {
			var b, c, d, e, f, g;
			var isGreyBomb = false;

			this.pb.Ge() == 0 && a.Tc(0.5); //Transparency set
			g = this.lb.g - this.jb;
			c = cu(this); //Scale (pulsing) by X
			d = getPulsationY(this); //Scale (pulsing) by Y
			a.Cc(this.ob, this.f, this.lb.f, g, c, d); //Base bomb render
			this.c >= 0 && a.Cc(Gx, this.c, this.lb.f + Ex[this.a] * c, g + Fx[this.a] * d, c, d); //Wick render
			f = getConfigParam('bombSkin', -1); //Get skin id
			//console.log(Object.assign({}, this.pb));
			if (f >= 0) {
				e = sprites.get('bomb_skin');
				if (f < e.frames.length)
					a.Cc(e, f, this.lb.f, g, c, d);
				else {
					f -= e.frames.length;
					e = sprites.get('bomb_skin2');
					f < e.frames.length && a.Cc(e, f, this.lb.f, g, c, d)
				}
			}

			//Grey or nyan bomb
			if ((this.pb.q & 128) == 0 && (this.pb.q & 14) != 0) {
				b = (this.pb.q & 2) != 0 ? 8 : (this.pb.q & 8) != 0 ? 6 : 7;
				isGreyBomb = (b === 8);

				a.Cc(this.ob, b, this.lb.f, g, c, d);
			}

			if (cheatBombSize) {
				a.f.fillStyle = 'white';
				a.f.fillText(this.pb.s + '', this.lb.f, g);
			}

			if (cheatBombView && !isGreyBomb) {
				a.f.fillStyle = 'rgba(255, 255, 0, 0.2)';
				a.f.fillRect(this.lb.f - 16 - this.pb.s * 32, g - 16, this.pb.s * 32, 32);
				a.f.fillRect(this.lb.f - 16 + 32, g - 16, this.pb.s * 32, 32);
				a.f.fillRect(this.lb.f - 16, g - 16 - this.pb.s * 32, 32, this.pb.s * 32);
				a.f.fillRect(this.lb.f - 16, g + 16, 32, this.pb.s * 32);
			}

			this.pb.t > 0 && a.Cc(this.ob, 13 + this.pb.t, this.lb.f, g, c, d); //Team dot addition drawing
			this.pb.Ge() == 0 && a.Tc(1); //Transparency return
		};

		//Draw remote explosion message
		_.Gd = function Kx(a) {
			var sprite, posX, posY;
			Ht(this, a);
			if (this.b) {
				sprite = sprites.get('btn_shift');
				posX = ~~(this.lb.f + 0.5);
				posY = ~~(Wqb(this.lb) + 12 + 0.5);
				a.uc(sprite, posX, posY);
			}
		};

		_.Ld = function Lx() {
			return this.b || this.Y != null;
		};

		_.Dd = function Mx() {
			Mt(this);
			if ((this.pb.q & 128) != 0) {
				this.f <= 0 && (this.f = 9 + Ksb((Rb(), Qb), 5));
				this.c = -1;
				return;
			}
			if ((this.pb.q & 1) != 0) {
				$P(this.pb) && (this.eb = (this.eb + 1) % 9);
				this.b = !!this.kb && this.nb.B.f == this.pb;
			} else {
				this.eb = (this.eb + 1) % 3;
			}
			this.a = (40 - this.pb.N) / 13 | 0;
			this.a < 0 ? (this.a = 0) : this.a > 2 && (this.a = 2);
			if ((this.pb.q & 1) != 0) {
				this.f = ~~$wnd.Math.min(this.eb, 8 - this.eb) + 1;
				this.c = -1;
			} else {
				this.f = 0;
				this.c = ~~this.eb;
			}
		};

		_.a = 0;
		_.b = false;
		_.c = 0;
		var Ex, Fx, Gx;
		var V5 = nub('com.bm.gwt.client.unit', 'BmStandardBombView', 690);
		whb(691, 316, {}, Nx);
		_.Rd = function Ox(a) {
			return new Ix(a)
		}
		;
		var U5 = nub('com.bm.gwt.client.unit', 'BmStandardBombView/Builder', 691);
		whb(224, 26, {
			224: 1,
			26: 1,
			38: 1
		}, Qx);
		_.Ed = function Rx(a) {
			var b, c, d, e, f, g, h, i, j;
			if (this.b != 0) {
				b = $wnd.Math.min(UDb, this.b * 1.5);
				a.Tc(b);
				c = ~~(this.b * 80) % this.ob.frames.length;
				f = this.lb.d;
				for (d = 0; d < 8; d++)
					for (e = 0; e < 8; e++) {
						g = 2 * d - 8 + 1;
						i = 2 * e - 8 + 1;
						if (f != 0) {
							h = (Gqb(),
							Bqb[f] * g + Eqb[f] * i);
							j = Cqb[f] * g + Fqb[f] * i;
							g = h;
							i = j
						}
						g = (g - 1) / 2 | 0;
						i = (i - 1) / 2 | 0;
						kV(this.pb, d, e) && a.xc(this.ob, c, this.lb.f + g * 32, this.lb.g + i * 32, 32, 32)
					}
				a.Tc(1)
			}
		}
		;
		_.Cd = function Sx() {
			var a;
			for (a = 0; a < 8; a++) {
				!!this.a[a] && Qf(this.nb.v, this.a[a])
			}
		}
		;
		_.Md = function Tx() {
			return true
		}
		;
		_.Nd = function Ux(a, b) {
			this.c += a;
			this.b != 0 && (this.b += a / 6000)
		}
		;
		_.Dd = function Vx() {
			var a, b, c, d;
			this.c = $wnd.Math.max(this.c, this.d + 100);
			this.d = this.c;
			hV(this.pb) > 0 ? this.b == 0 && (this.b = (60 - hV(this.pb)) / 60) : (this.b = 0);
			if (hV(this.pb) == 2) {
				for (a = 0; a < 8; a++)
					for (b = 0; b < 8; b++)
						if (kV(this.pb, a, b)) {
							c = a + ($wnd.Math.random() - 0.5) / 2 + 0.5 - 4;
							d = b + ($wnd.Math.random() - 0.5) / 2 + 0.5 - 4;
							c *= 32;
							d *= 32;
							c = ~~(c + 0.5) + this.pb.fb.e;
							d = ~~(d + 0.5) + this.pb.fb.f;
							ff(this.nb.n, this.pb.fb.d, c, d, 0, 500, false)
						}
			}
		}
		;
		_.b = 0;
		_.c = 0;
		_.d = 0;
		var X5 = nub('com.bm.gwt.client.unit', 'BmTerrainView', 224);
		whb(649, 1, {}, Wx);
		_.Qd = function Xx(a) {
			return new Qx(a)
		}
		;
		var W5 = nub('com.bm.gwt.client.unit', 'BmTerrainView/Builder', 649);
		whb(678, 26, yFb, Zx);
		_.Ed = function $x(a) {
			this.pb.n >= this.pb.j && a.vc(this.ob, (this.lb.d & 7) + 8 * this.pb.d, this.lb.f, this.lb.g);
			Yx(this, a)
		}
		;
		_.Gd = function _x(a) {
			var b, c, d, e, f, g, h, i, j, k, l;
			f = this.lb.f - 13;
			b = krb(this.lb) - 3 - 6;
			j = this.nb.t.i;
			d = this.pb.n / 2 | 0;
			g = this.nb.S;
			h = this.nb.G.p;
			c = this.pb.ib == g || VS(this.pb, h) ? 2 : 1;
			i = 1 > ((d + 5 - 1) / 5 | 0) ? 1 : (d + 5 - 1) / 5 | 0;
			k = 5;
			if (i > 2) {
				b += 5 * (i - 2) / 2 | 0;
				--k
			}
			d %= 5;
			d == 0 && (d = 5);
			for (e = i - 1; e >= 0; e--) {
				l = d * 5 + 1;
				d == 5 && ++l;
				d == 0 && --l;
				d != 0 && a.Ic(j.texture, j.frames[c].x, j.frames[c].y, l, 6, f, b - k * e, l, 6);
				d != 5 && a.Ic(j.texture, j.frames[0].x + l, j.frames[0].y, 26 - l, 6, f + l, b - k * e, 26 - l, 6);
				d = 5
			}
		}
		;
		_.Ld = function ay() {
			return (this.pb.n / 2 | 0) > 0
		}
		;
		_.Nd = function by(a, b) {
			this.pb.e > 0 ? (this.a = (this.pb.e - b) / this.pb.g) : (this.a = -1)
		}
		;
		_.Dd = function cy() {
			rrb(this.mb, this.pb.fb.c)
		}
		;
		_.a = 0;
		var Z5 = nub('com.bm.gwt.client.unit', 'BmTowerView', 678);
		whb(679, 1, {}, dy);
		_.Qd = function ey(a) {
			return new Zx(a)
		}
		;
		var Y5 = nub('com.bm.gwt.client.unit', 'BmTowerView/Builder', 679);
		whb(686, 26, yFb, fy);
		_.Ed = function gy(a) {
			ft(this, a, this.lb.f, this.lb.g, this.a)
		}
		;
		_.Dd = function hy() {
			this.a = (this.pb.n / 2 | 0) + ''
		}
		;
		_.a = '';
		var a6 = nub('com.bm.gwt.client.unit', 'BmVaultView', 686);
		whb(687, 1, {}, iy);
		_.Qd = function jy(a) {
			return new fy(a)
		}
		;
		var _5 = nub('com.bm.gwt.client.unit', 'BmVaultView/Builder', 687);
		whb(91, 1, {
			91: 1
		}, getSpriteByName, getSmallBombSkin);
		_.a = 0;
		_.b = 1;
		_.c = 1;
		_.e = 0;
		_.f = 20;
		var b6 = nub('com.bm.gwt.client.unit', 'BombSkin', 91);
		whb(303, 1, {
			303: 1
		}, sy);
		_.a = 0;
		_.c = 0;
		_.f = 0;
		_.i = 0;
		_.j = false;
		var c6 = nub('com.bm.gwt.client.unit', 'Compass', 303);
		whb(569, 16, {
			20: 1,
			8: 1,
			16: 1,
			143: 1
		}, xy);
		_.wd = function zy(a) {
			a.ib == this.d.S && Z2(a, 37) && Qn(this.a, a)
		}
		;
		_.xd = function Ay(a) {}
		;
		_.zb = function yy() {
			var a, b, c, d;
			for (c = 0; c < this.c.length; c++) {
				a = this.c[c];
				if (a.W + 1 < this.d.T.f) {
					dQ(a);
					oN(this.g, c)
				}
			}
			gN(this.g);
			for (d = 0; d < this.a.length; d++) {
				a = this.a[d];
				(a.ib != this.d.S || !a.Y) && oN(this.b, d)
			}
			gN(this.b);
			if (this.e) {
				!!this.f && !this.f.Y && (this.f = null);
				if (!this.f) {
					for (b = 0; b < this.a.length; b++) {
						a = this.a[b];
						if ((a.q & 1) != 0 && a.O.f < 3 && 2 * a.N <= 40 && a.kb > 0) {
							this.f = a;
							break
						}
					}
				}
			} else {
				this.f = null
			}
		}
		;
		_.Db = function By(a) {
			smb(this.rb.ab, this)
		}
		;
		_.e = true;
		_.f = null;
		var d6 = nub(tDb, 'BombManager', 569);
		whb(354, 1, {}, Hy);
		_.a = 0;
		_.d = 0;
		_.f = 0;
		var f6 = nub(tDb, PFb, 354);
		var Iy = null;
		whb(134, 10, {
			134: 1,
			3: 1,
			12: 1,
			10: 1
		}, Ny);
		var Jy, Ky, Ly;
		var g6 = oub(pEb, 'Canvas/Font/Type', 134, Oy);
		whb(561, 1, {}, gz);
		_.a = 0;
		_.b = 0;
		_.c = 0;
		_.d = 0;
		_.e = 0;
		_.f = 0;
		_.g = false;
		_.i = 0;
		_.j = 0;
		_.k = 0;
		_.n = 0;
		_.o = 0;
		_.p = 0;
		_.q = 0;
		_.r = 0;
		_.s = 0;
		_.t = 0;
		_.u = 0;
		var h6 = nub(pEb, 'ScreenView', 561);
		whb(488, 16, NCb);
		var c8 = nub(QCb, 'InventoryLayer', 488);
		whb(489, 488, ODb, kz);
		_.Ab = function lz() {
			rM(this.b);
			fM(this.b)
		}
		;
		_.Hb = function mz(a) {
			qM(this.b, a);
			if (this.a.T.p) {
				this.a.T.o && (this.c = new wM(this.rb,this.a.T.k));
				qM(this.c, a)
			} else
				this.c = this.b;
			this.a.T.o && _z(this.rb, new BJ)
		}
		;
		_.Ib = function nz(a) {
			this.b = new wM(this.rb,this.a.S);
			qM(this.b, a);
			if (this.a.T.p) {
				this.c = new wM(this.rb,this.a.T.k);
				qM(this.c, a)
			} else
				this.c = this.b
		}
		;
		_.Db = function oz(a) {}
		;
		var k6 = nub(PDb, 'ClientInventoryLayer', 489);
		whb(664, 16, NCb, pz);
		_.zb = function qz() {
			var a, b, c, d;
			if (this.a.F.d <= 0)
				return;
			a = this.a.I;
			if (!a)
				return;
			if (a.O.f >= 3 || a.N <= 0)
				return;
			d = dA(YR(a));
			if (!!d && Z2(d, 150)) {
				c = d;
				b = Fb(this.a);
				eM(b, c) > 0 && !(!!c.b && pF(c.b)) && c.a < this.rb._ && (c.a = this.rb._ + 5)
			}
		}
		;
		var l6 = nub(PDb, 'ClientItemLayer', 664);
		whb(740, 1, {}, sz);
		var n6 = nub('com.bm.model.client.quest', 'ClientQuestStructure', 740);
		whb(590, 16, NCb, Jz);
		_.Db = function Kz(a) {
			this.i = new fsb;
			csb(this.i, this.rb);
			this.d = new IA
		}
		;
		_.f = false;
		var s6 = nub(TCb, 'BmPhysics', 590);
		whb(211, 1, {
			211: 1
		}, Pz);
		_.a = 0;
		_.c = 0;
		_.d = 0;
		_.e = 0;
		_.f = 0;
		_.g = 0;
		_.i = 0;
		_.j = 0;
		var p6 = nub(TCb, 'BmPhysics/AABB', 211);
		whb(209, 1, {
			209: 1
		}, Qz);
		_.a = 0;
		_.b = 0;
		var q6 = nub(TCb, 'BmPhysics/Collision', 209);
		whb(210, 1, {}, Rz);
		_.a = 0;
		_.c = 0;
		_.d = 0;
		var r6 = nub(TCb, 'BmPhysics/Trajectory', 210);
		whb(482, 1, {});
		_.V = 0;
		_._ = 0;
		var Ddb = nub(OCb, 'GameState', 482);
		whb(156, 482, {
			156: 1
		}, nA);
		_.Nb = function pA(a) {
			this.d = this.Q.d;
			this.L = this.Q.j;
			cwb(this.Q.k.c, 'fun');
			cwb(this.Q.k.c, 'minions');
			this.A = cwb(this.Q.k.c, 'kills');
			this.C = cwb(this.Q.k.c, 'kills_mob');
			this.B = cwb(this.Q.k.c, 'kills_bot');
			this.D = cwb(this.Q.k.c, 'kills_player');
			this.r = cwb(this.Q.k.c, 'deaths');
			cwb(this.Q.k.c, 'suicides');
			this.G = cwb(this.Q.k.c, 'money');
			this.u = cwb(this.Q.k.c, aFb);
			this.F = cwb(this.Q.k.c, 'medal');
			cwb(this.Q.k.c, 'medal_rules');
			cwb(this.Q.k.c, 'arena_wins');
			cwb(this.Q.k.c, 'arena_loses');
			cwb(this.Q.k.c, 'score');
			this.p = cwb(this.Q.k.c, 'bomb');
			this.I = cwb(this.Q.k.c, 'power');
			this.J = cwb(this.Q.k.c, 'scate');
			cwb(this.Q.k.c, 'kick');
			cwb(this.Q.k.c, 'key');
			this.v = cwb(this.Q.k.c, 'jelly');
			this.s = cwb(this.Q.k.c, 'detonator');
			this.q = cwb(this.Q.k.c, 'bomb_super');
			this.o = cwb(this.Q.k.c, 'bat');
			this.n = cwb(this.Q.k.c, 'atomic');
			this.K = cwb(this.Q.k.c, 'shield');
			this.A = cwb(this.Q.k.c, 'kills');
			this.r = cwb(this.Q.k.c, 'deaths');
			this.G = cwb(this.Q.k.c, 'money');
			this.H = cwb(this.Q.k.c, 'plutonium');
			this.t = cwb(this.Q.k.c, _Eb);
			cwb(this.Q.f.c, 'muffin');
			cwb(this.Q.f.c, 'surprise');
			cwb(this.Q.f.c, 'detonator_pack');
			this.b = cwb(this.Q.q.c, 'cactus');
			rG(this.Q, 'metal');
			cwb(this.Q.e.c, 'portal')
		}
		;
		var u6 = nub(TCb, 'BmState', 156);
		whb(484, 1, {}, qA);
		_.yd = function rA(a) {
			lA(this.a, a)
		}
		;
		var t6 = nub(TCb, 'BmState/lambda$0$Type', 484);
		whb(32, 1, {
			32: 1
		}, BA);
		_.xb = function CA() {
			return this.g
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = 0;
		_.d = 0;
		_.e = 0;
		_.f = 0;
		var sA, tA, uA, vA, wA, xA, yA, zA;
		var v6 = nub(TCb, 'Colors', 32);
		whb(313, 1, {
			235: 1
		}, IA);
		_.a = 0;
		_.b = 0;
		_.d = 0;
		_.e = 0;
		_.f = false;
		_.n = -1;
		_.o = 0;
		_.p = -1;
		_.q = 0;
		_.r = 0;
		_.v = 0;
		_.A = 0;
		var A6 = nub(TCb, 'LocalBuffer', 313);
		whb(658, 1, {}, KA);
		var w6 = nub(TCb, 'LocalBuffer/1', 658);
		whb(17, 1, {
			3: 1,
			17: 1
		});
		_.Ud = function SA(a) {
			return new $wnd.Error(a)
		}
		;
		_.Vd = function UA() {
			return this.g
		}
		;
		_.Wd = function VA() {
			var a, b, c;
			c = this.g == null ? null : this.g.replace(new $wnd.RegExp('\n','g'), ' ');
			b = (a = jub(this.mg),
				c == null ? a : a + ': ' + c);
			QA(this, TA(this.Ud(b)));
			F$(this)
		}
		;
		_.xb = function WA() {
			return RA(this, this.Vd())
		}
		;
		_.e = SFb;
		_.i = false;
		_.n = true;
		var Gfb = nub(LCb, 'Throwable', 17);
		whb(25, 17, UFb);
		var qfb = nub(LCb, 'Exception', 25);
		whb(40, 25, UFb, YA);
		var Bfb = nub(LCb, 'RuntimeException', 40);
		whb(167, 40, UFb, $A);
		var x6 = nub(TCb, 'LocalBuffer/LocalBufferException', 167);
		whb(314, 1, {
			314: 1
		}, aB);
		var z6 = nub(TCb, 'LocalBuffer/LocalUnit', 314);
		whb(657, 137, {}, cB);
		_.Ub = function dB() {
			return new aB
		}
		;
		var y6 = nub(TCb, 'LocalBuffer/LocalUnitPool', 657);
		whb(212, 1, {
			212: 1,
			797: 1,
			41: 1
		}, kB);
		_.Xd = function lB(a, b) {
			return jB(this, a, b)
		}
		;
		_.Yd = function mB() {}
		;
		_.Zd = function nB(a) {
			this.a = a
		}
		;
		_.a = null;
		_.c = 0;
		_.d = 0;
		_.e = 0;
		var eB;
		var C6 = nub(TCb, 'PerkInstance', 212);
		whb(591, 1, {}, oB);
		_.$d = function pB(a, b, c) {
			return new kB(a,b)
		}
		;
		var B6 = nub(TCb, 'PerkInstance/1', 591);
		whb(447, 16, ODb, qB);
		_.Hb = function rB(a) {
			this.a = wk(a)
		}
		;
		_.Ib = function sB(a) {
			this.b = zk(a);
			this.c = zk(a);
			this.a = Gk(a);
			Fk(a)
		}
		;
		_._d = function tB() {
			return this.c
		}
		;
		_.ae = function uB() {
			return this.b
		}
		;
		_.a = 0;
		_.c = '';
		var D6 = nub(TCb, 'RoomData', 447);
		var vB, wB, xB, yB, zB, AB, BB, CB, DB, EB, FB, GB, HB, IB, JB, KB, LB, MB, NB, OB, PB, QB, RB, SB, TB;
		whb(217, 1, {
			217: 1,
			41: 1
		}, _B);
		_.be = function aC() {
			return this.c
		}
		;
		_.Xd = function bC(a, b) {
			return XB(this, a, b)
		}
		;
		_.Yd = function cC() {
			this.f = 0
		}
		;
		_.ce = function dC(a) {
			this.f |= 4;
			!!this.i && XD(this.i)
		}
		;
		_.Zd = function eC(a) {
			this.i = a
		}
		;
		_.b = 0;
		_.d = 0;
		_.f = 0;
		_.j = 0;
		var VB;
		var F6 = nub(TCb, 'SubRoom', 217);
		whb(613, 1, {}, fC);
		_.$d = function gC(a, b, c) {
			return new _B(a,c,b)
		}
		;
		var E6 = nub(TCb, 'SubRoom/1', 613);
		whb(159, 1, {
			159: 1
		}, xC, yC);
		_.a = null;
		_.b = WFb;
		_.c = WFb;
		_.d = '';
		_.e = 0;
		_.f = '';
		_.g = 0;
		_.i = '';
		_.k = 0;
		_.n = -2;
		_.o = WFb;
		_.p = 'default';
		_.q = 'default';
		_.r = 3;
		_.s = 0;
		_.t = '';
		_.u = WFb;
		_.v = 0;
		_.A = '';
		var iC;
		var G6 = nub(TCb, 'User', 159);
		whb(58, 1, XFb, GC);
		_.be = function MC() {
			return this.i.j
		}
		;
		_.de = function HC(a) {
			return false
		}
		;
		_.ee = function IC(a) {}
		;
		_.fe = function JC() {
			return -1
		}
		;
		_.ge = function KC() {
			return -1
		}
		;
		_.he = function LC() {
			return -1
		}
		;
		_.ie = function NC() {
			return false
		}
		;
		_.je = function OC() {
			return (this.n.b.a & 16) != 0
		}
		;
		_.ke = function PC(a, b) {
			EC(this, a, b)
		}
		;
		_.Xd = function QC(a, b) {
			return this.j = a ? 255 : b.ad(null),
				this.ke(b, this.j),
			this.j != 0
		}
		;
		_.Yd = function RC() {
			this.j = 0
		}
		;
		_.ce = function SC(a) {
			FC(this)
		}
		;
		_.Zd = function TC(a) {}
		;
		_.le = function UC(a) {}
		;
		_.g = 0;
		_.j = 0;
		var AC;
		var J6 = nub(YFb, 'Ability', 58);
		whb(59, 1, ZFb);
		_.a = -1;
		var Qeb = nub($Fb, 'SavablePolySerializer/Factory', 59);
		whb(77, 59, ZFb);
		_.me = function WC(a, b) {
			var c;
			return c = this.ne(),
				DC(c, a.f, b),
				c
		}
		;
		var I6 = nub(YFb, 'AbilityFactory', 77);
		whb(429, 77, ZFb, XC);
		_.ne = function YC() {
			return new GC
		}
		;
		var H6 = nub(YFb, 'Ability/1', 429);
		whb(260, 58, XFb, bD);
		_.fe = function cD() {
			return lF(this.i.j.Q.d, this.e)
		}
		;
		_.ge = function dD() {
			return lF(this.i.j.Q.d, this.f)
		}
		;
		_.ke = function eD(a, b) {
			_C(this, a, b)
		}
		;
		_.le = function fD(a) {
			aD(this)
		}
		;
		_.e = 0;
		_.f = 0;
		var ZC;
		var R6 = nub(YFb, 'CooldownAbility', 260);
		whb(261, 260, XFb, jD);
		_.he = function kD() {
			if (this.c > 1)
				return this.d;
			if (this.n.d == 2)
				return hB(this.n);
			return -1
		}
		;
		_.ke = function lD(a, b) {
			iD(this, a, b)
		}
		;
		_.c = 1;
		_.d = 0;
		var gD;
		var T6 = nub(YFb, 'CooldownCountAbility', 261);
		whb(153, 261, XFb, oD);
		_.de = function pD(a) {
			var b;
			return b = this.i.d,
			Yub(this.d, hB(this.n)) > 0 && !!b && b.N > 0 && !(b.I > 0 || b.e > b.Y._) && !(b.O.f != 0 || b.N <= 0) && !((this.g & 8) != 0 || (this.g & 4) != 0 && oM(this.i))
		}
		;
		_.ie = function qD() {
			return true
		}
		;
		_.le = function rD(a) {
			aD(this)
		}
		;
		var mD;
		var P6 = nub(YFb, 'CastableAbility', 153);
		whb(433, 153, XFb, uD);
		_.de = function vD(a) {
			var b;
			return b = this.i.d,
			Yub(this.d, hB(this.n)) > 0 && !!b && b.N > 0 && !(b.I > 0 || b.e > b.Y._) && !(b.O.f != 0 || b.N <= 0) && !((this.g & 8) != 0 || (this.g & 4) != 0 && oM(this.i)) && SR(this.i.d)
		}
		;
		_.ee = function wD(a) {
			var b, c, d, e;
			e = this.i.j;
			d = e.W;
			c = this.i.d;
			b = MW(e.a, this.a, c);
			FN(b, a);
			this.b >= 0 && NP(b, this.b);
			ty(d.B, b)
		}
		;
		_.ke = function xD(a, b) {
			iD(this, a, b);
			if (b == 255) {
				this.a = a.ad(null);
				this.b = a.ad(null)
			}
		}
		;
		_.a = 0;
		_.b = -1;
		var sD;
		var L6 = nub(YFb, 'BombAbility', 433);
		whb(434, 77, ZFb, yD);
		_.ne = function zD() {
			return new uD
		}
		;
		var K6 = nub(YFb, 'BombAbility/1', 434);
		whb(154, 58, {
			58: 1,
			154: 1,
			41: 1
		}, CD);
		_.de = function DD(a) {
			return true
		}
		;
		_.ie = function ED() {
			return true
		}
		;
		_.je = function FD() {
			return this.a < 0 && (this.n.b.a & 16) != 0
		}
		;
		_.ke = function GD(a, b) {
			EC(this, a, b);
			b == 255 && (this.b = wk(a));
			(b & 16) != 0 && (this.a = xk(a))
		}
		;
		_.a = -1;
		_.b = 0;
		var AD;
		var N6 = nub(YFb, 'BuilderAbility', 154);
		whb(435, 77, ZFb, HD);
		_.ne = function ID() {
			return new CD
		}
		;
		var M6 = nub(YFb, 'BuilderAbility/1', 435);
		whb(432, 77, ZFb, JD);
		_.ne = function KD() {
			return new oD
		}
		;
		var O6 = nub(YFb, 'CastableAbility/1', 432);
		whb(430, 77, ZFb, LD);
		_.ne = function MD() {
			return new bD
		}
		;
		var Q6 = nub(YFb, 'CooldownAbility/1', 430);
		whb(431, 77, ZFb, ND);
		_.ne = function OD() {
			return new jD
		}
		;
		var S6 = nub(YFb, 'CooldownCountAbility/1', 431);
		whb(135, 1, aGb, _D);
		_.be = function aE() {
			return this.f.be()
		}
		;
		_.gd = function bE() {
			return new Crb(this)
		}
		;
		_.Xd = function cE(a, b) {
			return UD(this, a, b)
		}
		;
		_.Yd = function dE() {
			VD(this)
		}
		;
		_.ce = function eE(a) {
			XD(this)
		}
		;
		_.Zd = function fE(a) {
			this.f = a
		}
		;
		_.c = false;
		_.e = false;
		_.f = null;
		_.g = null;
		var Peb = nub($Fb, 'SavableList', 135);
		whb(280, 135, {
			280: 1,
			41: 1,
			24: 1
		}, lE);
		_.a = false;
		var U6 = nub(YFb, 'FixedAbilityList', 280);
		whb(262, 153, XFb, oE);
		_.de = function pE(a) {
			var b;
			return this.i.c != this.a && (b = this.i.d,
			Yub(this.d, hB(this.n)) > 0 && !!b && b.N > 0 && !(b.I > 0 || b.e > b.Y._) && !(b.O.f != 0 || b.N <= 0) && !((this.g & 8) != 0 || (this.g & 4) != 0 && oM(this.i)))
		}
		;
		_.ie = function qE() {
			return this.i.c != this.a
		}
		;
		_.ke = function rE(a, b) {
			iD(this, a, b);
			b == 255 && (this.a = RE(this.i.j.Q.b, a))
		}
		;
		var mE;
		var $6 = nub(YFb, 'PolymorphAbility', 262);
		whb(437, 262, XFb, uE);
		_.de = function vE(a) {
			var b;
			return !pM(this.i) && this.i.c != this.a && (b = this.i.d,
			Yub(this.d, hB(this.n)) > 0 && !!b && b.N > 0 && !(b.I > 0 || b.e > b.Y._) && !(b.O.f != 0 || b.N <= 0) && !((this.g & 8) != 0 || (this.g & 4) != 0 && oM(this.i)))
		}
		;
		_.ie = function wE() {
			return !pM(this.i) && this.i.c != this.a
		}
		;
		var sE;
		var W6 = nub(YFb, 'MimicAbility', 437);
		whb(438, 77, ZFb, xE);
		_.ne = function yE() {
			return new uE
		}
		;
		var V6 = nub(YFb, 'MimicAbility/1', 438);
		whb(439, 153, XFb, DE);
		_.de = function EE(a) {
			var b;
			return b = this.i.d,
			Yub(this.d, hB(this.n)) > 0 && !!b && b.N > 0 && !(b.I > 0 || b.e > b.Y._) && !(b.O.f != 0 || b.N <= 0) && !((this.g & 8) != 0 || (this.g & 4) != 0 && oM(this.i)) && BE(this, CE(this, a, Jqb(this.i.d.M)))
		}
		;
		_.ke = function FE(a, b) {
			iD(this, a, b);
			b == 255 && (this.a = a.ad(null))
		}
		;
		_.a = -1;
		var zE;
		var Y6 = nub(YFb, 'PlaceBlockSharedAbility', 439);
		whb(440, 77, ZFb, GE);
		_.ne = function HE() {
			return new DE
		}
		;
		var X6 = nub(YFb, 'PlaceBlockSharedAbility/1', 440);
		whb(436, 77, ZFb, IE);
		_.ne = function JE() {
			return new oE
		}
		;
		var Z6 = nub(YFb, 'PolymorphAbility/1', 436);
		whb(53, 1, {
			53: 1
		});
		_.oe = function ME(a) {
			KE(this, a)
		}
		;
		_.pe = function NE(a) {
			LE(this, a)
		}
		;
		_.u = -1;
		var peb = nub(bGb, 'ScriptClass', 53);
		whb(64, 53, {
			53: 1
		});
		var b7 = nub(cGb, 'BmScriptClass', 64);
		whb(199, 64, {
			199: 1,
			53: 1
		});
		var _6 = nub(cGb, 'BmCloneableScriptClass', 199);
		whb(490, 1, dGb);
		_.gd = function UE() {
			return Xl(this.b)
		}
		;
		_.e = 0;
		var oeb = nub(bGb, 'ScriptClassTable', 490);
		whb(69, 490, dGb, VE);
		var a7 = nub(cGb, 'BmSCTable', 69);
		whb(204, 64, {
			204: 1,
			53: 1
		}, ZE, $E);
		_.oe = function _E(a) {
			var b, c, d;
			KE(this, a);
			this.b = xk(a);
			this.n = xk(a);
			this.f = Gk(a);
			this.d = zk(a);
			d = xk(a);
			for (b = 0; b < d; b++) {
				c = zk(a);
				jvb(c.substr(0, 4), 'nyan') ? Qn(this.j, c) : Qn(this.p, c)
			}
			this.c = Hk(a);
			this.g = Hk(a);
			this.k = Hk(a);
			this.e = Hk(a);
			this.q = Hk(a);
			this.a = Hk(a);
			this.i = Hk(a);
			this.r = Hk(a);
			this.o = 2 * xk(a)
		}
		;
		_.pe = function aF(a) {
			var b;
			LE(this, a);
			a.fd(this.b & 255, null);
			a.fd(this.n & 255, null);
			a.ed(this.f, null);
			Ck(a, this.d);
			a.fd(this.p.length & 255, null);
			for (b = 0; b < this.p.length; b++)
				Ck(a, this.p[b]);
			a.fd(this.c, null);
			a.fd(this.g, null);
			a.fd(this.k, null);
			a.fd(this.e, null);
			a.fd(this.q, null);
			a.fd(this.a, null);
			a.fd(this.i, null);
			a.fd(this.r, null);
			a.fd((this.o / 2 | 0) & 255, null)
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = 8;
		_.e = 4;
		_.f = 0;
		_.g = 4;
		_.i = 1;
		_.k = 14;
		_.n = -1;
		_.o = -1;
		_.q = 2;
		_.r = 0;
		var e7 = nub(cGb, 'CharacterClass', 204);
		whb(600, 69, dGb, bF);
		var d7 = nub(cGb, 'CharacterClassTable', 600);
		whb(601, 1, {}, cF);
		_.qe = function dF() {
			return new ZE
		}
		;
		var c7 = nub(cGb, 'CharacterClassTable/1', 601);
		whb(309, 64, {
			309: 1,
			53: 1
		}, gF);
		_.oe = function hF(a) {
			KE(this, a)
		}
		;
		_.pe = function iF(a) {
			LE(this, a)
		}
		;
		_.a = -1;
		var eF;
		var g7 = nub(cGb, 'DeepTile', 309);
		whb(644, 1, {}, jF);
		_.qe = function kF() {
			return new gF
		}
		;
		var f7 = nub(cGb, 'DeepTile/1', 644);
		whb(624, 1, {}, mF);
		_.a = 9;
		_.b = true;
		_.c = true;
		_.d = true;
		_.e = 2;
		_.f = 10;
		_.g = 1;
		_.i = 100;
		_.j = 100;
		_.k = 35;
		_.n = 7;
		_.o = 2;
		_.p = 30;
		_.q = 4;
		_.r = 12;
		_.s = 2;
		_.t = 8;
		_.u = 1;
		_.v = 40;
		_.A = 4;
		_.B = 64;
		_.C = 96;
		_.D = 128;
		_.F = 1;
		_.G = 40;
		var h7 = nub(cGb, 'GameConfig', 624);
		whb(305, 64, {
			305: 1,
			53: 1
		}, qF);
		_.oe = function rF(a) {
			KE(this, a);
			this.b = wk(a);
			this.a = xk(a)
		}
		;
		_.pe = function sF(a) {
			LE(this, a);
			a.ed(this.b & CEb, null);
			a.fd(this.a & 255, null)
		}
		;
		_.a = -1;
		_.b = -1;
		var nF;
		var j7 = nub(cGb, 'Item', 305);
		whb(641, 1, {}, tF);
		_.qe = function uF() {
			return new qF
		}
		;
		var i7 = nub(cGb, 'Item/1', 641);
		whb(653, 1, {}, xF);
		var k7 = nub(cGb, 'LocalSCTable', 653);
		whb(279, 64, {
			279: 1,
			53: 1
		}, AF);
		_.oe = function BF(a) {
			KE(this, a);
			this.b = Hk(a);
			this.a = Hk(a)
		}
		;
		_.pe = function CF(a) {
			LE(this, a);
			a.fd(this.b, null);
			a.fd(this.a, null)
		}
		;
		_.a = 0;
		_.b = 0;
		var yF;
		var m7 = nub(cGb, 'Perk', 279);
		whb(570, 1, {}, DF);
		_.qe = function EF() {
			return new AF
		}
		;
		var l7 = nub(cGb, 'Perk/1', 570);
		whb(614, 1, {}, IF);
		_.a = 8;
		_.b = 10;
		_.d = 0;
		_.e = 0;
		_.f = 0;
		_.g = 0;
		_.i = '';
		_.j = 4;
		_.k = 'tiles';
		var n7 = nub(cGb, 'SharedConfig', 614);
		whb(273, 199, {
			199: 1,
			273: 1,
			53: 1
		}, MF);
		_.oe = function NF(a) {
			LF(this, a)
		}
		;
		_.pe = function OF(a) {
			LE(this, a);
			a.fd(this.g, null);
			a.fd(this.i, null);
			a.fd(this.b, null);
			if (this.g == 0) {
				a.fd(this.a, null);
				a.fd(this.c, null);
				a.fd(this.d, null);
				a.dd(this.e, null)
			}
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = 32767;
		_.d = 0;
		_.e = 0;
		_.f = -1;
		_.g = 0;
		_.i = 0;
		var JF;
		var q7 = nub(cGb, 'Slot', 273);
		whb(487, 1, {}, PF);
		_.qe = function QF() {
			return new MF
		}
		;
		var o7 = nub(cGb, 'Slot/1', 487);
		whb(492, 69, dGb, SF);
		var p7 = nub(cGb, 'SlotTable', 492);
		whb(311, 64, {
			311: 1,
			53: 1
		}, VF);
		_.oe = function WF(a) {
			KE(this, a);
			this.b = Hk(a);
			this.a = Hk(a)
		}
		;
		_.pe = function XF(a) {
			LE(this, a);
			a.fd(this.b, null);
			a.fd(this.a, null)
		}
		;
		_.a = 0;
		_.b = 0;
		var TF;
		var s7 = nub(cGb, 'SubRoomConfig', 311);
		whb(646, 1, {}, YF);
		_.qe = function ZF() {
			return new VF
		}
		;
		var r7 = nub(cGb, 'SubRoomConfig/1', 646);
		whb(310, 64, {
			310: 1,
			53: 1
		}, aG);
		_.oe = function bG(a) {
			KE(this, a);
			this.b = xk(a)
		}
		;
		_.pe = function cG(a) {
			LE(this, a);
			a.fd(this.b & 255, null)
		}
		;
		_.a = -1;
		_.b = -1;
		var $F;
		var u7 = nub(cGb, 'SurfaceTile', 310);
		whb(645, 1, {}, dG);
		_.qe = function eG() {
			return new aG
		}
		;
		var t7 = nub(cGb, 'SurfaceTile/1', 645);
		whb(215, 64, {
			215: 1,
			53: 1
		}, hG);
		_.oe = function iG(a) {
			var b, c, d, e;
			KE(this, a);
			this.k = wk(a);
			this.s = xk(a);
			this.g = xk(a);
			this.d = xk(a);
			this.b = Hk(a);
			this.q = xk(a);
			this.n = (c = Hk(a),
				c == 255 ? -1 : c);
			this.f = wk(a);
			this.r = wk(a);
			this.j = (d = Hk(a),
				d == 255 ? -1 : d);
			this.e = (e = Hk(a),
				e == 255 ? -1 : e);
			b = Hk(a);
			this.i = b >> 3;
			this.a = b & 7;
			(this.i & 8) != 0 && (this.c = zk(a))
		}
		;
		_.pe = function jG(a) {
			LE(this, a);
			a.ed(this.k & CEb, null);
			a.fd(this.s & 255, null);
			a.fd(this.g & 255, null);
			a.fd(this.d & 255, null);
			a.fd(this.b, null);
			a.fd(this.q & 255, null);
			a.fd(this.n, null);
			a.ed(this.f & CEb, null);
			a.ed(this.r & CEb, null);
			a.fd(this.j, null);
			a.fd(this.e, null);
			a.fd((this.a | this.i << 3) & 255, null);
			(this.i & 8) != 0 && Ck(a, this.c)
		}
		;
		_.a = -1;
		_.b = -1;
		_.d = -1;
		_.e = -1;
		_.f = -1;
		_.g = -1;
		_.i = -1;
		_.j = -1;
		_.k = -1;
		_.n = -1;
		_.o = -1;
		_.q = -1;
		_.r = -1;
		_.s = -1;
		var fG;
		var D7 = nub(cGb, 'Tile', 215);
		whb(598, 1, {}, kG);
		_.qe = function lG() {
			return new hG
		}
		;
		var v7 = nub(cGb, 'Tile/1', 598);
		whb(220, 64, {
			53: 1
		}, oG);
		var mG;
		var x7 = nub(cGb, 'TileChange', 220);
		whb(625, 1, {}, pG);
		_.qe = function qG() {
			return new oG
		}
		;
		var w7 = nub(cGb, 'TileChange/1', 625);
		whb(491, 16, ODb, xG);
		_.Hb = function yG(a) {}
		;
		_.Ib = function zG(a) {
			GF(this.j, a);
			QE(this.q, a);
			QE(this.o, a);
			QE(this.c, a);
			QE(this.e, a);
			QE(this.k, a);
			QE(this.f, a);
			QE(this.g, a);
			QE(this.b, a);
			QE(this.n, a);
			RF(this.k);
			this.i = new KG;
			JG(this.i, this);
			_z(this.rb, new DJ)
		}
		;
		_.Cb = function AG() {
			if (!this.p) {
				this.p = new rob(xEb);
				uG(this, this.p)
			}
		}
		;
		var y7 = nub(cGb, 'TileConf', 491);
		whb(308, 64, {
			308: 1,
			53: 1
		}, DG);
		_.oe = function EG(a) {
			KE(this, a);
			this.a = Hk(a) != 0;
			this.c = Gkb(a);
			this.b = Hk(a);
			this.d = Hk(a)
		}
		;
		_.pe = function FG(a) {
			LE(this, a);
			a.fd(this.a ? 1 : 0, null);
			Mkb(a, this.c);
			a.fd(this.b, null);
			a.fd(this.d, null)
		}
		;
		_.a = false;
		_.b = 255;
		_.c = null;
		_.d = 1;
		var BG;
		var A7 = nub(cGb, 'TileGroup', 308);
		whb(643, 1, {}, GG);
		_.qe = function HG() {
			return new DG
		}
		;
		var z7 = nub(cGb, 'TileGroup/1', 643);
		whb(635, 1, {}, KG);
		var B7 = nub(cGb, 'TileRotator', 635);
		whb(599, 69, dGb, MG);
		var C7 = nub(cGb, 'TileTable', 599);
		whb(9, 1, {
			9: 1,
			6: 1
		});
		_.re = function PG() {
			throw dhb(new YA('getBuilder() is undefined: ' + zhb(this)))
		}
		;
		var zdb = nub(OCb, 'GameEvent', 9);
		whb(67, 9, {
			9: 1,
			6: 1,
			67: 1
		});
		_.se = function QG(a, b) {}
		;
		_.te = function RG(a) {
			this.i = a
		}
		;
		var Ndb = nub(OCb, 'UnitEvent', 67);
		whb(94, 67, {
			94: 1,
			9: 1,
			6: 1,
			67: 1
		});
		var S7 = nub(eGb, 'PrivateEvent', 94);
		whb(188, 94, {
			188: 1,
			94: 1,
			9: 1,
			6: 1,
			67: 1
		}, UG);
		_.re = function WG() {
			return SG
		}
		;
		_.ub = function VG(a) {
			var b;
			if (a == null || !Z2(a, 188))
				return false;
			b = a;
			if (!jvb(this.b, b.b))
				return false;
			if (this.a == b.a)
				return false;
			return true
		}
		;
		_.se = function XG(a, b) {
			this.b = zk(b);
			this.a = b.$c(null)
		}
		;
		_.xb = function YG() {
			return this.b + ' level ' + this.a
		}
		;
		_.a = 0;
		var SG;
		var G7 = nub(eGb, 'AchievementEvent', 188);
		whb(13, 1, fGb);
		_.b = -1;
		var Ydb = nub(gGb, 'Builder', 13);
		whb(86, 13, fGb);
		var Zdb = nub(gGb, 'EventBuilder', 86);
		whb(406, 86, fGb, aH);
		_.ue = function bH() {
			return new UG
		}
		;
		var E7 = nub(eGb, 'AchievementEvent/1', 406);
		whb(405, 1, WCb, cH);
		_.yb = function dH(a) {
			lm(Iy, a.b, a.a)
		}
		;
		var F7 = nub(eGb, 'AchievementEvent/Adapter', 405);
		whb(87, 94, {
			87: 1,
			94: 1,
			9: 1,
			6: 1,
			67: 1
		}, gH, hH);
		_.re = function jH() {
			return eH
		}
		;
		_.ub = function iH(a) {
			var b;
			if (a == null || !Z2(a, 130))
				return false;
			b = a;
			return jvb(this.b, b.b) && yAb(this.a, b.a)
		}
		;
		_.se = function kH(a, b) {
			this.b = zk(b);
			this.a = Ekb(a.Bb(), b)
		}
		;
		_.xb = function lH() {
			return 'AudioEvent{type=' + this.b + ', pos=' + this.a + '}'
		}
		;
		var eH;
		var I7 = nub(eGb, 'AudioEvent', 87);
		whb(407, 86, fGb, mH);
		_.ue = function nH() {
			return new gH
		}
		;
		var H7 = nub(eGb, 'AudioEvent/1', 407);
		whb(95, 94, {
			95: 1,
			94: 1,
			9: 1,
			6: 1,
			67: 1
		}, sH);
		_.re = function uH() {
			return oH
		}
		;
		_.ub = function tH(a) {
			var b;
			if (a == null || !Z2(a, 95))
				return false;
			b = a;
			if (this.g != b.g)
				return false;
			if (this.e != b.e)
				return false;
			if (this.a != b.a)
				return false;
			if (!jvb(this.d, b.d))
				return false;
			if (!jvb(this.c, b.c))
				return false;
			return true
		}
		;
		_.se = function vH(a, b) {
			qH(this, b)
		}
		;
		_.xb = function wH() {
			return rH(this)
		}
		;
		_.a = 0;
		_.b = 0;
		_.e = 0;
		_.f = 0;
		_.g = 0;
		var oH;
		var K7 = nub(eGb, 'ChatEvent', 95);
		whb(402, 86, fGb, xH);
		_.ue = function yH() {
			return new sH
		}
		;
		var J7 = nub(eGb, 'ChatEvent/1', 402);
		whb(130, 67, {
			130: 1,
			9: 1,
			6: 1,
			67: 1
		}, BH);
		_.re = function DH() {
			return zH
		}
		;
		_.ub = function CH(a) {
			var b;
			if (a == null || !Z2(a, 130))
				return false;
			b = a;
			return mpb(b.a, this.a)
		}
		;
		_.se = function EH(a, b) {
			this.a = Ekb(a.Bb(), b)
		}
		;
		_.te = function FH(a) {
			this.i = a
		}
		;
		_.xb = function GH() {
			return 'GoalEvent{gatePos=' + this.a + '}'
		}
		;
		var zH;
		var M7 = nub(eGb, 'GoalEvent', 130);
		whb(401, 86, fGb, HH);
		_.ue = function IH() {
			return new BH
		}
		;
		var L7 = nub(eGb, 'GoalEvent/1', 401);
		whb(128, 67, {
			128: 1,
			9: 1,
			6: 1,
			67: 1
		}, LH);
		_.re = function NH() {
			return JH
		}
		;
		_.ub = function MH(a) {
			var b, c;
			if (a == null || !Z2(a, 128))
				return false;
			b = a;
			if (this.b.length != b.b.length)
				return false;
			for (c = 0; c < this.b.length; c++)
				if (this.b[c] != b.b[c])
					return false;
			return true
		}
		;
		_.se = function OH(a, b) {
			var c, d;
			this.a = b.ad(null);
			c = b.ad(null);
			this.b = j2(h3, XCb, 7, c, 15, 1);
			for (d = 0; d < c; d++)
				this.b[d] = wk(b)
		}
		;
		_.xb = function PH() {
			return 'KillEvent{attackers count=' + this.b.length + ' victim=' + this.i + '}'
		}
		;
		_.a = 0;
		var JH;
		var O7 = nub(eGb, 'KillEvent', 128);
		whb(399, 86, fGb, QH);
		_.ue = function RH() {
			return new LH
		}
		;
		var N7 = nub(eGb, 'KillEvent/1', 399);
		whb(187, 94, {
			187: 1,
			94: 1,
			9: 1,
			6: 1,
			67: 1
		}, VH);
		_.re = function XH() {
			return SH
		}
		;
		_.ub = function WH(a) {
			return UH(this, a)
		}
		;
		_.se = function YH(a, b) {
			var c, d;
			this.e = zk(b);
			this.d = zk(b);
			c = wk(b);
			this.b = j2(Ffb, PCb, 2, c, 6, 1);
			for (d = 0; d < c; d++)
				this.b[d] = zk(b);
			this.c = zk(b);
			this.a = wk(b)
		}
		;
		_.xb = function ZH() {
			return this.d + ' (' + this.c + ')'
		}
		;
		_.a = 50;
		var SH;
		var R7 = nub(eGb, 'NotificationEvent', 187);
		whb(404, 86, fGb, _H);
		_.ue = function aI() {
			return new VH
		}
		;
		var P7 = nub(eGb, 'NotificationEvent/1', 404);
		whb(403, 1, WCb, bI);
		_.yb = function cI(a) {
			xs(this.a, a)
		}
		;
		var Q7 = nub(eGb, 'NotificationEvent/Adapter', 403);
		whb(44, 9, iGb);
		_.ve = function eI(a, b) {
			dI(this, b)
		}
		;
		_.f = 0;
		_.g = 0;
		var Gdb = nub(OCb, 'PlayerOrder', 44);
		whb(424, 44, iGb, hI);
		_.re = function iI() {
			return fI
		}
		;
		var fI;
		var U7 = nub(eGb, 'RoundEndEvent', 424);
		whb(47, 13, fGb);
		var _db = nub(gGb, 'OrderBuilder', 47);
		whb(425, 47, fGb, kI);
		_.ue = function lI() {
			return new hI
		}
		;
		var T7 = nub(eGb, 'RoundEndEvent/1', 425);
		whb(420, 44, iGb, oI);
		_.re = function pI() {
			return mI
		}
		;
		_.ve = function qI(a, b) {
			dI(this, b);
			mob(b, this.a)
		}
		;
		_.a = 0;
		var mI;
		var W7 = nub(eGb, 'SetTimeEvent', 420);
		whb(421, 47, fGb, rI);
		_.ue = function sI() {
			return new oI
		}
		;
		var V7 = nub(eGb, 'SetTimeEvent/1', 421);
		whb(189, 94, {
			94: 1,
			189: 1,
			9: 1,
			6: 1,
			67: 1
		}, vI);
		_.re = function wI() {
			return tI
		}
		;
		_.se = function xI(a, b) {
			this.a = b.ad(null)
		}
		;
		_.a = 0;
		var tI;
		var Y7 = nub(eGb, 'SubRoomEvent', 189);
		whb(408, 86, fGb, yI);
		_.ue = function zI() {
			return new vI
		}
		;
		var X7 = nub(eGb, 'SubRoomEvent/1', 408);
		whb(129, 67, {
			129: 1,
			9: 1,
			6: 1,
			67: 1
		}, CI);
		_.re = function EI() {
			return AI
		}
		;
		_.ub = function DI(a) {
			var b;
			if (a == null || !Z2(a, 129))
				return false;
			b = a;
			return mpb(b.a, this.a) && this.b == b.b
		}
		;
		_.se = function FI(a, b) {
			this.b = wk(b);
			this.a = Ekb(a.Bb(), b)
		}
		;
		_.xb = function GI() {
			return 'TakeItemEvent{itemCode=' + this.b + ' itemPos=' + this.a + '}'
		}
		;
		_.b = 0;
		var AI;
		var $7 = nub(eGb, 'TakeItemEvent', 129);
		whb(400, 86, fGb, HI);
		_.ue = function II() {
			return new CI
		}
		;
		var Z7 = nub(eGb, 'TakeItemEvent/1', 400);
		whb(626, 16, ODb, LI);
		_.yb = function MI(a) {
			this.a.a.length < 20 && gxb(this.a, a)
		}
		;
		_.Ab = function NI() {
			var a;
			if (this.c.a.length > 0) {
				if (this.rb.W.Gb())
					for (a = 0; a < this.c.a.length; a++) {
						sCb(JI, rH(ixb(this.c, a)))
					}
				hxb(this.b, this.c)
			}
			while (this.b.a.length > 20)
				kxb(this.b, 0);
			this.c.a = j2(Afb, PCb, 1, 0, 5, 1);
			hxb(this.c, this.a);
			this.a.a = j2(Afb, PCb, 1, 0, 5, 1)
		}
		;
		_.Hb = function OI(a) {
			var b, c, d;
			d = yk(a);
			for (c = 0; c < d; c++) {
				b = new sH;
				a.ad(null);
				qH(b, a);
				gxb(this.c, b)
			}
		}
		;
		_.Ib = function QI(a) {
			var b, c, d;
			d = yk(a);
			for (c = 0; c < d; c++) {
				b = new sH;
				Hk(a);
				qH(b, a);
				gxb(this.b, b)
			}
			emb(this.rb.X, new wJ)
		}
		;
		_.Db = function RI(a) {
			$lb(this.rb.X, K7, this)
		}
		;
		var JI;
		var _7 = nub(QCb, 'ChatLogLayer', 626);
		whb(617, 16, ODb, TI);
		_.Ab = function UI() {}
		;
		_.Hb = function VI(a) {
			SI(this, a)
		}
		;
		_.Ib = function WI(a) {
			SI(this, a);
			++this.d
		}
		;
		_.Cb = function XI() {
			var a;
			--this.d;
			a = Date.now();
			this.a > 0 && (this.c = Yub(GDb, toInt(a - this.a)));
			this.a = a
		}
		;
		_.a = -1;
		_.b = -1;
		_.c = 0;
		_.d = 6000;
		var b8 = nub(QCb, 'GameLoopSharedLayer', 617);
		whb(616, 16, ODb, aJ);
		_.Hb = function bJ(a) {
			UD(this.a, false, a)
		}
		;
		_.Ib = function cJ(a) {
			UD(this.a, true, a)
		}
		;
		_.be = function dJ() {
			return this.rb
		}
		;
		_.ce = function eJ(a) {}
		;
		var d8 = nub(QCb, 'SubRoomsLayer', 616);
		whb(627, 16, ODb, jJ);
		_.zb = function kJ() {
			this.a == this.rb._ && _z(this.rb, new CJ)
		}
		;
		_.Ab = function lJ() {}
		;
		_.Hb = function mJ(a) {
			fJ(this, a)
		}
		;
		_.Ib = function nJ(a) {
			this.b = Fk(a);
			fJ(this, a)
		}
		;
		_.Db = function oJ(a) {}
		;
		_.a = -1;
		_.b = 0;
		var e8 = nub(QCb, 'TeamsLayer', 627);
		whb(576, 16, ODb, pJ);
		_.Hb = function qJ(a) {
			var b, c;
			if (!this.a)
				return;
			nC(this.a, a);
			this.b.a = j2(Afb, PCb, 1, 0, 5, 1);
			b = yk(a);
			for (c = 0; c < b; c++)
				gxb(this.b, Smb((Clb(),
					zlb), this, a))
		}
		;
		_.Ib = function rJ(a) {
			this.a = zC(a);
			this.a.g == 0 && (this.a = null)
		}
		;
		var f8 = nub(QCb, 'UserLayer', 576);
		whb(749, 1, jGb, sJ);
		var g8 = nub(kGb, 'CharacterCastMessage', 749);
		whb(748, 1, jGb, tJ);
		var h8 = nub(kGb, 'CharacterRemovedMessage', 748);
		whb(282, 1, jGb, uJ);
		var i8 = nub(kGb, 'ClientAbilityChangeEvent', 282);
		whb(574, 1, jGb, vJ);
		var j8 = nub(kGb, 'ClientCharacterChangeEvent', 574);
		whb(272, 1, {
			272: 1,
			6: 1
		}, wJ);
		var l8 = nub(kGb, 'ClientChatHistoryMessage', 272);
		whb(486, 1, WCb, xJ);
		_.yb = function yJ(a) {
			var b;
			(b = this,
				a,
				b).a.c = true
		}
		;
		var k8 = nub(kGb, 'ClientChatHistoryMessage/Adapter', 486);
		whb(198, 1, {
			198: 1,
			6: 1
		}, zJ);
		var m8 = nub(kGb, 'ClientPerkListChange', 198);
		whb(669, 1, jGb, AJ);
		var n8 = nub(kGb, 'ClientSlotsChangeEvent', 669);
		whb(573, 1, jGb, BJ);
		var o8 = nub(kGb, 'ClientSpectChangeEvent', 573);
		whb(667, 1, jGb, CJ);
		var p8 = nub(kGb, 'ClientTeamPointChange', 667);
		whb(270, 1, {
			270: 1,
			6: 1
		}, DJ);
		var r8 = nub(kGb, 'ConfigLoadMessage', 270);
		whb(197, 1, WCb, EJ);
		_.yb = function FJ(a) {
			this.a.Nb(a)
		}
		;
		var q8 = nub(kGb, 'ConfigLoadMessage/Adapter', 197);
		whb(327, 1, jGb, GJ);
		var s8 = nub(kGb, 'DetonateBombMessage', 327);
		whb(100, 1, jGb, HJ);
		var t8 = nub(kGb, 'FireBlockMessage', 100);
		whb(326, 1, jGb, IJ);
		var u8 = nub(kGb, 'PacmanEatBallMessage', 326);
		whb(315, 1, {
			315: 1,
			6: 1
		}, JJ);
		_.b = 0;
		var v8 = nub(kGb, 'PacmanEatTileMessage', 315);
		whb(642, 1, jGb, KJ);
		var w8 = nub(kGb, 'PlaceItemMessage', 642);
		whb(750, 1, jGb, LJ);
		var x8 = nub(kGb, 'RegenMessage', 750);
		whb(751, 1, jGb, MJ);
		var y8 = nub(kGb, 'TakeItemMessage', 751);
		whb(771, 44, iGb);
		var D8 = nub(lGb, 'BmOrder', 771);
		whb(109, 771, iGb);
		var G8 = nub(lGb, 'CharacterOrder', 109);
		whb(193, 109, iGb, QJ, RJ);
		_.re = function SJ() {
			return OJ
		}
		;
		_.ve = function TJ(a, b) {
			dI(this, b);
			nob(b, this.a & CEb);
			Kkb(b, this.b)
		}
		;
		_.a = 0;
		var OJ;
		var A8 = nub(lGb, 'AbilityOrder', 193);
		whb(427, 47, fGb, UJ);
		_.ue = function VJ() {
			return new QJ
		}
		;
		var z8 = nub(lGb, 'AbilityOrder/1', 427);
		whb(256, 109, iGb, YJ, ZJ);
		_.re = function $J() {
			return WJ
		}
		;
		var WJ;
		var C8 = nub(lGb, 'ActionOrder', 256);
		whb(415, 47, fGb, _J);
		_.ue = function aK() {
			return new YJ
		}
		;
		var B8 = nub(lGb, 'ActionOrder/1', 415);
		whb(258, 771, iGb, eK, fK);
		_.re = function gK() {
			return bK
		}
		;
		_.ve = function hK(a, b) {
			dI(this, b);
			mob(b, this.b);
			Kkb(b, this.a)
		}
		;
		_.b = 0;
		var bK;
		var F8 = nub(lGb, 'BuildOrder', 258);
		whb(423, 47, fGb, iK);
		_.ue = function jK() {
			return new eK
		}
		;
		var E8 = nub(lGb, 'BuildOrder/1', 423);
		whb(151, 771, iGb, nK, oK);
		_.re = function pK() {
			return kK
		}
		;
		_.ve = function qK(a, b) {
			dI(this, b);
			Ck(b, this.c);
			lob(b, this.b)
		}
		;
		_.xb = function rK() {
			var a;
			a = this.a ? this.a.i : hGb;
			this.d ? (a += ':CMD: ') : (a += ':CHAT: ');
			a += this.c;
			return a
		}
		;
		_.b = 0;
		_.d = false;
		var kK;
		var I8 = nub(lGb, 'ChatMessageOrder', 151);
		whb(414, 47, fGb, sK);
		_.ue = function tK() {
			return new nK
		}
		;
		var H8 = nub(lGb, 'ChatMessageOrder/1', 414);
		whb(254, 109, iGb, xK, yK);
		_.re = function zK() {
			return uK
		}
		;
		_.ve = function AK(a, b) {
			dI(this, b);
			oob(b, this.b);
			oob(b, this.a);
			oob(b, this.d);
			oob(b, this.c)
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = 0;
		_.d = 0;
		var uK;
		var K8 = nub(lGb, 'KeyboardOrder', 254);
		whb(411, 47, fGb, BK);
		_.ue = function CK() {
			return new xK
		}
		;
		var J8 = nub(lGb, 'KeyboardOrder/1', 411);
		whb(257, 109, iGb, FK, GK);
		_.re = function HK() {
			return DK
		}
		;
		_.ve = function IK(a, b) {
			dI(this, b);
			mob(b, this.b);
			Kkb(b, this.a)
		}
		;
		_.b = 0;
		var DK;
		var M8 = nub(lGb, 'KillMeOrder', 257);
		whb(417, 47, fGb, JK);
		_.ue = function KK() {
			return new FK
		}
		;
		var L8 = nub(lGb, 'KillMeOrder/1', 417);
		whb(191, 109, iGb, NK, OK);
		_.re = function PK() {
			return LK
		}
		;
		var LK;
		var O8 = nub(lGb, 'PauseOrder', 191);
		whb(413, 47, fGb, QK);
		_.ue = function RK() {
			return new NK
		}
		;
		var N8 = nub(lGb, 'PauseOrder/1', 413);
		whb(418, 771, iGb, UK);
		_.re = function VK() {
			return SK
		}
		;
		_.ve = function WK(a, b) {
			dI(this, b);
			null.pg()
		}
		;
		var SK;
		var Q8 = nub(lGb, 'PlayerEventOrder', 418);
		whb(419, 47, fGb, XK);
		_.ue = function YK() {
			return new UK
		}
		;
		var P8 = nub(lGb, 'PlayerEventOrder/1', 419);
		whb(255, 109, iGb, _K, aL);
		_.re = function bL() {
			return ZK
		}
		;
		_.ve = function cL(a, b) {
			dI(this, b);
			Kkb(b, this.a)
		}
		;
		var ZK;
		var S8 = nub(lGb, 'PutBombOrder', 255);
		whb(412, 47, fGb, dL);
		_.ue = function eL() {
			return new _K
		}
		;
		var R8 = nub(lGb, 'PutBombOrder/1', 412);
		whb(194, 771, iGb, hL, iL);
		_.re = function jL() {
			return fL
		}
		;
		_.ve = function kL(a, b) {
			dI(this, b);
			oob(b, this.b);
			oob(b, this.a)
		}
		;
		_.a = 0;
		_.b = 0;
		var fL;
		var U8 = nub(lGb, 'QuestOrder', 194);
		whb(428, 47, fGb, lL);
		_.ue = function mL() {
			return new hL
		}
		;
		var T8 = nub(lGb, 'QuestOrder/1', 428);
		whb(259, 771, iGb, pL, qL);
		_.re = function rL() {
			return nL
		}
		;
		var nL;
		var W8 = nub(lGb, 'RejoinOrder', 259);
		whb(426, 47, fGb, sL);
		_.ue = function tL() {
			return new pL
		}
		;
		var V8 = nub(lGb, 'RejoinOrder/1', 426);
		whb(190, 771, iGb, xL, yL);
		_.re = function zL() {
			return uL
		}
		;
		_.ve = function AL(a, b) {
			dI(this, b);
			Jkb(b, this.b);
			oob(b, this.a)
		}
		;
		_.a = 0;
		var uL;
		var Y8 = nub(lGb, 'RespawnOrder', 190);
		whb(410, 47, fGb, BL);
		_.ue = function CL() {
			return new xL
		}
		;
		var X8 = nub(lGb, 'RespawnOrder/1', 410);
		whb(192, 771, iGb, FL, GL);
		_.re = function HL() {
			return DL
		}
		;
		var DL;
		var $8 = nub(lGb, 'SpectatorOrder', 192);
		whb(416, 47, fGb, IL);
		_.ue = function JL() {
			return new FL
		}
		;
		var Z8 = nub(lGb, 'SpectatorOrder/1', 416);
		whb(152, 771, iGb, NL, OL, PL);
		_.re = function QL() {
			return KL
		}
		;
		_.ve = function RL(a, b) {
			dI(this, b);
			oob(b, this.c);
			nob(b, this.b);
			Ck(b, this.a)
		}
		;
		_.a = null;
		_.b = 0;
		_.c = 0;
		var KL;
		var a9 = nub(lGb, 'SquadOrder', 152);
		whb(422, 47, fGb, SL);
		_.ue = function TL() {
			return new NL
		}
		;
		var _8 = nub(lGb, 'SquadOrder/1', 422);
		whb(284, 135, {
			284: 1,
			41: 1,
			24: 1
		}, VL);
		var b9 = nub(mGb, 'FixedSlotList', 284);
		whb(611, 1, {}, aM);
		_.b = 0;
		_.c = 0;
		_.d = 0;
		_.e = 0;
		_.f = 0;
		var c9 = nub(mGb, 'PlayerBombStorage', 611);
		whb(133, 1, {
			133: 1,
			8: 1
		}, wM);
		_.be = function yM() {
			return this.j
		}
		;
		_.Bb = function xM() {
			return this.j
		}
		;
		_.ce = function zM(a) {
			this.p |= a == this.s ? 8 : a == this.q ? 1 : a == this.a ? 2 : 64
		}
		;
		_.g = 0;
		_.n = 0;
		_.p = 0;
		_.r = 0;
		_.u = 0;
		_.A = 0;
		var d9 = nub(mGb, 'PlayerInventory', 133);
		whb(113, 9, nGb, BM, CM);
		_.we = function DM() {
			return 32767
		}
		;
		_.Xd = function EM(a, b) {
			this.c = wk(b);
			return true
		}
		;
		_.Yd = function FM() {
			this.b &= -2
		}
		;
		_.Zd = function HM(a) {}
		;
		_.b = 0;
		_.c = 0;
		var f9 = nub(mGb, 'SlotElement', 113);
		whb(577, 1, {}, IM);
		_.$d = function JM(a, b, c) {
			var d;
			return d = this.a[c],
				d.g == 1 ? new CM(b) : new LM(b)
		}
		;
		var e9 = nub(mGb, 'SlotElement/Serializer', 577);
		whb(321, 113, nGb, KM, LM);
		_.we = function MM() {
			return this.a
		}
		;
		_.Xd = function NM(a, b) {
			this.a = xk(b);
			this.c = xk(b);
			return true
		}
		;
		_.a = 0;
		var g9 = nub(mGb, 'StackSlotElement', 321);
		whb(615, 9, {
			9: 1,
			6: 1,
			8: 1
		}, SM);
		_.Bb = function TM() {
			return this.b
		}
		;
		_.c = -1;
		_.e = 0;
		var m9 = nub(oGb, 'Quest', 615);
		whb(621, 9, {
			9: 1,
			6: 1
		}, YM);
		_.c = 0;
		_.d = 0;
		var l9 = nub(oGb, 'QuestStep', 621);
		whb(731, 13, fGb);
		var h9 = nub(oGb, 'QuestStepBuilder', 731);
		whb(231, 9, {
			231: 1,
			9: 1,
			6: 1
		}, bN);
		_.re = function cN() {
			return ZM
		}
		;
		_.a = -1;
		_.b = 0;
		_.d = 0;
		_.f = 0;
		var ZM;
		var k9 = nub(oGb, 'QuestStepItem', 231);
		whb(732, 731, fGb, dN);
		_.ue = function eN() {
			return new bN
		}
		;
		var i9 = nub(oGb, 'QuestStepItem/1', 732);
		whb(90, 1, dGb, pN);
		_.gd = function qN() {
			return new fnb(this)
		}
		;
		_.xe = function rN(a) {
			oN(this, a)
		}
		;
		_.c = null;
		_.e = null;
		_.f = 0;
		_.g = false;
		var feb = nub(aEb, 'LazyList', 90);
		whb(739, 90, dGb, sN);
		_.ye = function tN(a, b) {
			var c;
			return c = new bN,
				aN(c, a, b),
				c
		}
		;
		_.ze = function uN(a, b, c) {
			_M(c, b)
		}
		;
		_.Ae = function vN(a, b) {}
		;
		var j9 = nub(oGb, 'QuestStepItemList', 739);
		whb(18, 9, {
			9: 1,
			6: 1,
			18: 1
		});
		_.Be = function IN() {
			return true
		}
		;
		_.ub = function JN(a) {
			return yN(this, a)
		}
		;
		_.Ce = function KN() {
			return this.fb.d
		}
		;
		_.De = function LN() {
			return 0
		}
		;
		_.Ee = function NN() {
			return this.fb.e >> 5
		}
		;
		_.Fe = function ON() {
			return this.fb.f >> 5
		}
		;
		_.Ge = function PN() {
			return this.kb
		}
		;
		_.He = function QN(a, b, c, d) {
			AN(this, b, c, d)
		}
		;
		_.Ie = function RN(a) {
			bqb(this.fb, a.Ce());
			this.eb = a
		}
		;
		_.Je = function SN() {
			!this.eb.Jf() ? (this.jb = null) : GN(this, (ppb(this.fb),
				qpb(this.fb),
				this.fb.c))
		}
		;
		_.xb = function TN() {
			return rGb + this.kb + sGb + this.ib + tGb + tpb(this.fb) + uGb + (this.hb >>> 0).toString(2) + '}'
		}
		;
		_.gb = false;
		_.hb = 0;
		_.ib = 0;
		_.kb = 0;
		var Qdb = nub(OCb, 'UnitModel', 18);
		whb(15, 18, wGb);
		_.Ke = function aO(a) {
			UN(this, a)
		}
		;
		_.Le = function bO() {}
		;
		_.Me = function cO() {
			return true
		}
		;
		_.Ne = function dO() {
			var a;
			a = zN(this);
			!!a && flb(a, this.Ee(), this.Fe(), this, this.bb)
		}
		;
		_.Bb = function eO() {
			return this.Y
		}
		;
		_.Oe = function fO() {
			return 2
		}
		;
		_.Pe = function gO() {
			return 5
		}
		;
		_.Qe = function hO() {
			return !!this.Y
		}
		;
		_.wb = function iO() {
			return this.Ge()
		}
		;
		_.Re = function jO(a, b) {
			VN(this, a, b)
		}
		;
		_.Cd = function kO() {
			YN(this)
		}
		;
		_.Se = function lO() {
			this.hb = 0;
			this.X.length > 0 && (this.X.length = 0,
				undefined)
		}
		;
		_.Te = function mO() {}
		;
		_.Ue = function nO() {
			var a;
			a = zN(this);
			!!a && nlb(a, this.Ee(), this.Fe(), this, this.bb)
		}
		;
		_.Ve = function oO() {}
		;
		_.W = 0;
		_.Z = 0;
		_.ab = 0;
		_.bb = 0;
		_.cb = false;
		var Tdb = nub(OCb, 'Unit', 15);
		whb(19, 15, xGb);
		_.Re = function sO(a, b) {
			qO(this, a, b)
		}
		;
		var x9 = nub(yGb, 'BmUnit', 19);
		whb(39, 19, zGb);
		_.We = function YO() {
			this.Cd()
		}
		;
		_.Xe = function ZO() {
			xO(this)
		}
		;
		_.ub = function $O(a) {
			return yO(this, a)
		}
		;
		_.Ne = function _O() {
			var a;
			this.Ze() || (a = zN(this),
			!!a && flb(a, this.fb.e >> 5, this.fb.f >> 5, this, this.bb))
		}
		;
		_.Ye = function aP() {
			return this.fb
		}
		;
		_.Ze = function cP() {
			return this.O.f >= 3
		}
		;
		_.Cd = function dP() {
			GO(this)
		}
		;
		_.He = function eP(a, b, c, d) {
			HO(this, a, b, c, d)
		}
		;
		_.Se = function fP() {
			this.hb = 0;
			this.X.length > 0 && (this.X.length = 0,
				undefined);
			aqb(this.T, this.T.d);
			aqb(this.L, this.L.d)
		}
		;
		_.$e = function gP() {}
		;
		_._e = function hP(a) {
			LO(this, a)
		}
		;
		_.Te = function iP() {
			!!this.O && this.O.Te()
		}
		;
		_.Ie = function jP(a) {
			bqb(this.fb, a.Ce());
			this.eb = a;
			bqb(this.T, a.Ce())
		}
		;
		_.Je = function kP() {
			GN(this, (ppb(this.fb),
				qpb(this.fb),
			this.M & 15))
		}
		;
		_.Ue = function lP() {
			var a;
			this.Ze() || (a = zN(this),
			!!a && nlb(a, this.fb.e >> 5, this.fb.f >> 5, this, this.bb))
		}
		;
		_.Ve = function mP() {
			PO(this, this.O.uf());
			this.cb && this.O.tf()
		}
		;
		_.M = 0;
		_.N = 0;
		_.Q = false;
		_.S = 0;
		var C9 = nub(yGb, 'Entity', 39);
		whb(247, 39, zGb);
		_.Ne = function tP() {}
		;
		_.He = function uP(a, b, c, d) {
			qP(this, a, b, c, d)
		}
		;
		_.Ue = function vP() {}
		;
		_.Ve = function wP() {
			rP(this)
		}
		;
		_.b = 0;
		_.d = 0;
		_.f = 0;
		var n9 = nub(yGb, 'AreaProjectileUnit', 247);
		whb(381, 19, xGb, zP);
		_.re = function CP() {
			return xP
		}
		;
		_.Me = function AP() {
			return false
		}
		;
		_.Ne = function BP() {}
		;
		_.Ue = function DP() {}
		;
		_.Ve = function EP() {
			var a;
			if (!this.cb) {
				return
			}
			this.b == 0 && UN(this, new hH('ATOMIC',null));
			++this.b;
			if (this.b > this.c)
				YN(this);
			else {
				for (a = 0; a < null[this.b].pg(); a++) {
					null[this.b].pg();
					null[this.b].pg().pg();
					this.a || _z(this.Y, new HJ)
				}
			}
		}
		;
		_.a = false;
		_.b = 0;
		_.c = 0;
		var xP;
		var p9 = nub(yGb, 'AtomicUnit', 381);
		whb(14, 13, AGb);
		var beb = nub(gGb, 'UnitBuilder', 14);
		whb(382, 14, AGb, HP);
		_.ue = function IP() {
			return new zP
		}
		;
		var o9 = nub(yGb, 'AtomicUnit/1', 382);
		whb(63, 39, {
			19: 1,
			39: 1,
			63: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		});
		_.Xe = function QP() {
			JP(this)
		}
		;
		_.ub = function RP(a) {
			return KP(this, a)
		}
		;
		_.De = function SP() {
			return this.t
		}
		;
		_.He = function TP(a, b, c, d) {
			LP(this, a, b, c, d)
		}
		;
		_.xb = function UP() {
			return 'Bomb{ strength=' + this.s + ' ' + (rGb + this.kb + sGb + this.ib + tGb + tpb(this.fb) + uGb + (this.hb >>> 0).toString(2) + '}') + ' }'
		}
		;
		_.q = 0;
		_.r = 0;
		_.s = 0;
		_.t = 0;
		var mab = nub(BGb, 'BombModel', 63);
		whb(37, 63, CGb, kQ);
		_.re = function pQ() {
			return this.df()
		}
		;
		_.af = function lQ() {
			XP(this)
		}
		;
		_.bf = function mQ() {
			return false
		}
		;
		_.We = function nQ() {
			var a;
			a = new OY(this);
			FN(a, this.jb);
			BY(a, 1);
			a.e = true;
			a.j = 5;
			sY(a, this.Y);
			bQ(this);
			GO(this)
		}
		;
		_.cf = function oQ() {
			return this.V.Q.j.b
		}
		;
		_.df = function qQ() {
			return VP
		}
		;
		_.Pe = function rQ() {
			return 2
		}
		;
		_.ef = function sQ() {
			return false
		}
		;
		_.ff = function tQ() {
			return false
		}
		;
		_.gf = function uQ() {
			return (this.q & 1) == 0 || !(this.O.f < 3 && 2 * this.N <= 40) || this.N <= 2
		}
		;
		_.Bd = function vQ(a) {
			_P(this, a)
		}
		;
		_.Cd = function wQ() {
			bQ(this);
			GO(this)
		}
		;
		_.hf = function xQ(a, b) {
			_z(this.Y, new GJ);
			fQ(this, a, b)
		}
		;
		_.$e = function yQ() {
			this.cb && UN(this, new hH('FLYBOMB',this.jb))
		}
		;
		_._e = function zQ(a) {
			LO(this, a);
			this.f = Hqb(a, this.f)
		}
		;
		_.jf = function AQ() {
			return iQ(this)
		}
		;
		_.Ve = function BQ() {
			jQ(this)
		}
		;
		_.f = 0;
		_.g = -1;
		_.j = -10;
		_.k = -10;
		_.n = -2;
		_.p = 0;
		var VP;
		var oab = nub(BGb, 'BombUnit', 37);
		whb(181, 37, {
			181: 1,
			19: 1,
			39: 1,
			63: 1,
			37: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		});
		_.ub = function EQ(a) {
			var b;
			if (!KP(this, a))
				return false;
			b = a;
			if (b.a != this.a)
				return false;
			if (b.b != this.b)
				return false;
			if (!this.c && !!b.c)
				return false;
			if (!!this.c && !mpb(this.c, b.c))
				return false;
			return true
		}
		;
		_.He = function FQ(a, b, c, d) {
			LP(this, a, b, c, d);
			if ((d & 32) != 0) {
				this.b = wk(c);
				CQ(this, c.ad(null));
				DQ(this, Ekb(a, c))
			}
		}
		;
		_.a = 0;
		_.b = 0;
		var q9 = nub(yGb, 'BallModel', 181);
		whb(147, 181, {
			181: 1,
			147: 1,
			19: 1,
			39: 1,
			63: 1,
			37: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, JQ);
		_.af = function KQ() {
			_z(this.Y, new IJ)
		}
		;
		_.bf = function LQ() {
			return this.V.Q.d.b
		}
		;
		_.cf = function MQ() {
			return this.V.Q.j.a
		}
		;
		_.df = function NQ() {
			return GQ
		}
		;
		_.ef = function OQ() {
			return true
		}
		;
		_.gf = function PQ() {
			return this.N <= 99
		}
		;
		_.Bd = function QQ(a) {
			_P(this, a)
		}
		;
		_.Ve = function RQ() {
			var a;
			if (this.N > 99) {
				a = this.a;
				if (a > 0) {
					--a;
					this.a = a;
					a == 0 && IQ(this)
				}
			}
			jQ(this)
		}
		;
		var GQ;
		var s9 = nub(yGb, 'BallUnit', 147);
		whb(365, 14, AGb, SQ);
		_.ue = function TQ() {
			return new JQ
		}
		;
		var r9 = nub(yGb, 'BallUnit/1', 365);
		whb(108, 39, zGb, WQ, XQ);
		_.re = function $Q() {
			return UQ
		}
		;
		_.Me = function YQ() {
			return false
		}
		;
		_.Ne = function ZQ() {}
		;
		_.De = function _Q() {
			return this.a.t
		}
		;
		_.Ue = function aR() {}
		;
		_.Ve = function bR() {
			var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
			if (!this.cb)
				return;
			++this.c;
			if (this.c > this.f) {
				GO(this);
				return
			}
			g = this.jb;
			l = npb(this.jb, this.fb.c);
			if (Fz(this.V.g, l))
				return;
			j = this.fb.c;
			if (!WO(this, this.fb.e + (Gqb(),
			Bqb[j] * 32), this.fb.f + Cqb[j] * 32))
				return;
			xO(this);
			i = this.fb.c;
			f = this.jb;
			this.e = this.e | (this.V.d.c && g.d != f.d);
			q = plb(Rob(f.d, f.e >> 8, f.f >> 8), f, 0);
			m = false;
			s = false;
			if (q) {
				if (Z2(q, 37)) {
					b = q;
					n = b.t == 0 || b.t > 4 || b.t == this.a.t;
					o = this.a.t == 0 || this.a.t > 4 || b.t == this.a.t;
					b.hf(this.a, o || this.a.ef() ? i : 1);
					m = n
				} else if (Z2(q, 85)) {
					_z(this.Y, new HJ);
					s = true;
					m = true
				} else if (Z2(q, 126) && !VS(q, this.a.t))
					;
				else
					m = true
			} else {
				r = Zz(this.jb);
				d = this.V.Q;
				p = PE(d.q, r).s;
				(p == 3 || p == 5) && (this.c += (this.f - this.c) / 2 | 0);
				if (p > 6) {
					s = true;
					m = true
				}
			}
			if (this.g && !m) {
				for (k = -2; k <= 2; k += 4) {
					c = i + k & 7;
					a = new XQ(this.a);
					a.b = this.b;
					a.d = this.d;
					a.f = this.f;
					a.e = this.e;
					FN(a, this.jb);
					dqb(a.fb, c);
					h = a.fb.c;
					WO(a, a.fb.e + Bqb[h] * 32, a.fb.f + Cqb[h] * 32);
					pO(a, this.Y)
				}
			}
			e = new OY(this.a);
			(this.a.q & 8) != 0 && (this.b = (this.b + 1) % 7);
			zY(e, this.b);
			AY(e, this.e);
			kY(e, this.c == this.f || s ? 3 : 4);
			FN(e, f);
			dqb(e.fb, i);
			BY(e, 1);
			!!this.a && CY(e, this.a.t);
			e.Y ? (e.k = e.Y._ + 4) : (e.k = 4);
			sY(e, this.Y);
			(this.c == this.f || m) && GO(this)
		}
		;
		_.b = 0;
		_.c = 0;
		_.d = 1;
		_.e = false;
		_.f = 0;
		_.g = false;
		var UQ;
		var u9 = nub(yGb, 'BlastUnit', 108);
		whb(383, 14, AGb, cR);
		_.ue = function dR() {
			return new WQ
		}
		;
		var t9 = nub(yGb, 'BlastUnit/1', 383);
		whb(123, 15, DGb);
		_.kf = function lR() {}
		;
		_.Re = function mR(a, b) {
			VN(this, a, b);
			if (this.a) {
				this.a = false;
				kR(this, true)
			}
			eR(this)
		}
		;
		_.Cd = function nR() {
			kR(this, false);
			YN(this)
		}
		;
		_.He = function oR(a, b, c, d) {
			AN(this, b, c, d);
			if ((d & 1) != 0) {
				this.v = c.ad(null);
				this.u = c.ad(null);
				this.r = c.ad(null);
				this.s = c.ad(null)
			}
			if ((d & 8) != 0) {
				this.t = Fkb(a, c, this.t, this.fb.d);
				kR(this, c.ad(null) != 0)
			}
		}
		;
		_.lf = function pR() {}
		;
		_.a = false;
		_.b = 0;
		_.c = 0;
		_.d = 0;
		_.e = 0;
		_.f = 0;
		_.g = 0;
		_.i = 0;
		_.j = 0;
		_.n = 0;
		_.o = 0;
		_.p = 0;
		_.q = 0;
		_.r = 0;
		_.s = -1;
		_.u = 0;
		_.v = 0;
		var _eb = nub(EGb, 'PortalUnit', 123);
		whb(370, 123, DGb, sR);
		_.re = function uR() {
			return qR
		}
		;
		_.kf = function tR() {
			var a, b, c, d, e, f, g, h, i;
			g = this.Y;
			f = g.g;
			eR(this);
			a = this.n;
			c = this.p;
			b = this.o;
			d = this.q;
			for (h = a; h <= b; h++) {
				for (i = c; i <= d; i++) {
					e = 1;
					(h == this.b && h == this.n || h == this.c && h == this.o || i == this.d && i == this.p || i == this.e && i == this.q) && (e |= 2);
					esb(f.i, this.fb.d, h, i, 1, e)
				}
			}
		}
		;
		_.lf = function vR() {
			var a, b, c, d, e, f, g, h;
			f = this.Y;
			e = f.g;
			eR(this);
			a = this.n;
			c = this.p;
			b = this.o;
			d = this.q;
			for (g = a; g <= b; g++) {
				for (h = c; h <= d; h++) {
					esb(e.i, this.fb.d, g, h, 1, 0)
				}
			}
		}
		;
		var qR;
		var w9 = nub(yGb, 'BmPortalUnit', 370);
		whb(371, 14, AGb, wR);
		_.ue = function xR() {
			return new sR
		}
		;
		var v9 = nub(yGb, 'BmPortalUnit/1', 371);
		whb(148, 39, {
			19: 1,
			148: 1,
			39: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		});
		_.ub = function JR(a) {
			var b;
			if (!Z2(a, 148))
				return false;
			b = a;
			if ((this.F & 255) != (b.F & 255))
				return false;
			return true
		}
		;
		_.De = function KR() {
			return zR(this)
		}
		;
		_.He = function LR(a, b, c, d) {
			var e;
			HO(this, a, b, c, d);
			if ((d & 1) != 0) {
				this.A = wk(c);
				this.K = c.ad(null);
				!!this.Y && ER(this)
			}
			(d & 16) != 0 && GR(this, c.ad(null));
			if ((d & 32) != 0) {
				FR(this, c.ad(null));
				IR(this, c.ad(null));
				e = c._c(null);
				this.C = e & 511;
				e >>= 9;
				this.J = e & 7;
				this.D = c.ad(null)
			}
			if ((d & 4) != 0) {
				this.t = wk(c);
				if (this.t > 0) {
					this.u = wk(c);
					this.s = wk(c)
				}
			}
		}
		;
		_.Te = function MR() {
			ER(this)
		}
		;
		_.xb = function NR() {
			return 'Character{ inputTick=' + this.F + ' ' + (rGb + this.kb + sGb + this.ib + tGb + tpb(this.fb) + uGb + (this.hb >>> 0).toString(2) + '}') + '}'
		}
		;
		_.s = 0;
		_.t = 0;
		_.u = 0;
		_.A = 0;
		_.B = 0;
		_.C = 0;
		_.D = 0;
		_.F = 0;
		_.I = 0;
		_.J = 0;
		_.K = 0;
		var y9 = nub(yGb, 'CharacterModel', 148);
		whb(75, 148, {
			19: 1,
			148: 1,
			75: 1,
			39: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, lS);
		_.re = function pS() {
			return OR
		}
		;
		_.Ke = function mS(a) {
			Z2(a, 128) && (this.a = a.a);
			UN(this, a)
		}
		;
		_.Le = function nS() {
			this.n = false;
			this.ib == this.Y.W.Fb() && !this.G && (this.G = jz(this.V.f, this.ib));
			if (this.O.f != 0 || this.N <= 0) {
				this.c = this.b = -1;
				this.d = null;
				this.p = 0;
				return
			}
			GR(this, aS(this, this.F));
			if (this.ib == this.Y.W.Fb()) {
				UO(this, WR(this));
				hS(this)
			} else
				gS(this)
		}
		;
		_.Ne = function oS() {}
		;
		_.Ye = function rS() {
			return _R(this)
		}
		;
		_.Pe = function sS() {
			return 1
		}
		;
		_.Ze = function tS() {
			return bS(this)
		}
		;
		_.Cd = function uS() {
			fS(this)
		}
		;
		_._e = function vS(a) {
			this.i = Hqb(a, this.i & 15) | this.i & -16;
			LO(this, a);
			!!this.d && GS(this.d, a)
		}
		;
		_.Ue = function wS() {}
		;
		_.Ve = function xS() {
			var a, b, c, d, e;
			(XR(this) & 16) != 0 && this.t > 0 && (this.s == -1 || this.s == -6 || this.s >= 0) && (this.t = 0);
			PO(this, this.O.uf());
			this.cb && this.O.tf();
			if (this.N <= 0 && !!this.Y) {
				if (this.f > 0)
					--this.f;
				else if (this.cb) {
					_z(this.Y, new tJ);
					fS(this)
				}
				return
			}
			a = this.t;
			if (a > 0) {
				--a;
				this.t = a;
				if (this.cb && a == 0) {
					if (this.s < 0) {
						_z(this.Y, new sJ)
					} else {
						d = new RJ(this,this.jb,this.s);
						gE(this.G.a, d)
					}
				}
			}
			e = this.I;
			if (e > 0) {
				--e;
				this.I = e
			}
			if (this.O.f == 4)
				return;
			b = this.C;
			if (!(b == 511 || this.B == 1 && this.O.f == 3)) {
				if (b > 0) {
					--b;
					this.C = b
				} else {
					c = $R(this);
					this.B = 0;
					c != $R(this) && DN(this, this.hb | 8)
				}
			}
			this.cb || vM(jz(this.V.f, this.ib));
			if (!(this.O.f >= 3 || this.N <= 0) && !!this.V.b && Zz(this.jb) == this.V.b.u) {
				if (this.cb) {
					kS(this, this.V.Q.d.G);
					this.B != 0 && this.B != 1 && QR(this)
				} else {
					UR(this)
				}
			}
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = 0;
		_.d = null;
		_.e = -1;
		_.f = 0;
		_.g = 0;
		_.i = 6;
		_.j = 0;
		_.k = -1;
		_.n = false;
		_.p = 0;
		_.q = -1;
		var OR;
		var A9 = nub(yGb, 'CharacterUnit', 75);
		whb(372, 14, AGb, yS);
		_.ue = function zS() {
			return new lS
		}
		;
		var z9 = nub(yGb, 'CharacterUnit/1', 372);
		whb(623, 1, {}, IS);
		_.c = 0;
		_.e = 0;
		_.f = 0;
		_.g = 0;
		_.i = 0;
		var B9 = nub(yGb, 'CyclicBuffer', 623);
		whb(250, 19, {
			19: 1,
			250: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, LS);
		_.re = function NS() {
			return JS
		}
		;
		_.Ne = function MS() {}
		;
		_.He = function OS(a, b, c, d) {
			AN(this, b, c, d);
			if ((d & 1) != 0) {
				this.c = c.ad(null);
				this.a = c.ad(null)
			}
			this.b = c.ad(null)
		}
		;
		_.Ue = function PS() {}
		;
		_.Ve = function QS() {
			--this.b;
			this.b < 0 && YN(this)
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = 0;
		var JS;
		var E9 = nub(yGb, 'EyeCandyUnit', 250);
		whb(386, 14, AGb, RS);
		_.ue = function SS() {
			return new LS
		}
		;
		var D9 = nub(yGb, 'EyeCandyUnit/1', 386);
		whb(246, 19, xGb);
		_.De = function XS() {
			return this.p
		}
		;
		_.He = function YS(a, b, c, d) {
			TS(this, a, b, c, d)
		}
		;
		_.n = 0;
		_.o = 0;
		_.p = 0;
		var jab = nub(yGb, 'VaultModel', 246);
		whb(126, 246, {
			19: 1,
			126: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, _S);
		_.re = function aT() {
			return ZS
		}
		;
		_.Ve = function bT() {
			if (this.cb) {
				if (this.a > 0) {
					--this.a;
					this.a % 10 == 0 && US(this, this.a);
					this.a == 0 && YN(this)
				}
			}
		}
		;
		_.a = 0;
		var ZS;
		var G9 = nub(yGb, 'ForceFieldUnit', 126);
		whb(387, 14, AGb, cT);
		_.ue = function dT() {
			return new _S
		}
		;
		var F9 = nub(yGb, 'ForceFieldUnit/1', 387);
		whb(249, 247, {
			19: 1,
			39: 1,
			249: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, gT);
		_.re = function iT() {
			return eT
		}
		;
		_.Ne = function hT() {}
		;
		_.He = function jT(a, b, c, d) {
			qP(this, a, b, c, d);
			(d & 1) != 0 && c.ad(null)
		}
		;
		_.Ue = function kT() {}
		;
		_.Ve = function lT() {
			var a, b;
			rP(this);
			if (!this.cb || !this.Y)
				return;
			b = toInt(100 * null.pg());
			a = new hZ(this.a,b);
			_Y(a, this.fb, aob(this.e, this.b));
			a.Y ? (a.k = a.Y._) : (a.k = 0);
			aZ(a, this.Y)
		}
		;
		var eT;
		var I9 = nub(yGb, 'GammaProjectileUnit', 249);
		whb(385, 14, AGb, mT);
		_.ue = function nT() {
			return new gT
		}
		;
		var H9 = nub(yGb, 'GammaProjectileUnit/1', 385);
		whb(150, 19, {
			19: 1,
			150: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, uT);
		_.re = function wT() {
			return oT
		}
		;
		_.ub = function vT(a) {
			var b;
			if (!yN(this, a))
				return false;
			b = a;
			if (b.e != this.e)
				return false;
			return true
		}
		;
		_.Re = function xT(a, b) {
			this.V = a;
			VN(this, a, b);
			qT(this, this.V)
		}
		;
		_.He = function yT(a, b, c, d) {
			AN(this, b, c, d);
			(d & 1) != 0 && tT(this, c._c(null))
		}
		;
		_.a = -1;
		_.e = 0;
		var oT;
		var K9 = nub(yGb, 'ItemUnit', 150);
		whb(378, 14, AGb, zT);
		_.ue = function AT() {
			return new uT
		}
		;
		var J9 = nub(yGb, 'ItemUnit/1', 378);
		whb(245, 39, {
			19: 1,
			39: 1,
			245: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, HT);
		_.re = function KT() {
			return BT
		}
		;
		_.Be = function IT() {
			return false
		}
		;
		_.Ne = function JT() {}
		;
		_.wb = function LT() {
			return this.kb
		}
		;
		_.Ue = function MT() {}
		;
		_.Ve = function NT() {
			var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;
			PO(this, this.O.uf());
			this.cb && this.O.tf();
			if (!this.c) {
				this.c = this.Y.Q;
				this.e = rG(this.c, 'wc');
				this.a = rG(this.c, 'abyss')
			}
			e = this.N;
			if (e > 0 && e < 70) {
				++e;
				this.N = e
			}
			if (this.O.f >= 3)
				return;
			p = this.fb.e;
			q = this.fb.f;
			j = this.M;
			k = this.S;
			if (GT(this) >= 1) {
				p += k * (Gqb(),
					Bqb[j]);
				q += k * Cqb[j]
			}
			m = this.fb.e >> 5;
			n = this.fb.f >> 5;
			WO(this, p, q) && xO(this);
			j = this.M & 15;
			if (this.cb) {
				if (m != this.fb.e >> 5 || n != this.fb.f >> 5) {
					a = zN(this);
					m = this.fb.e >> 5;
					n = this.fb.f >> 5;
					if (GT(this) == 2) {
						DT(this, olb(a, m, n, 0));
						DT(this, olb(a, m, n, 1));
						o = Zz(this.jb);
						o != this.e && bA(this.jb, this.a)
					}
				}
				if (Wub(this.fb.e - 16 - (this.fb.e & -32)) < k && Wub(this.fb.f - 16 - (this.fb.f & -32)) < k) {
					if (this.d) {
						if (this.b < 20) {
							this.d = false;
							g = (j + 6) % 8;
							i = (j + 2) % 8;
							d = ET(this, Vob(this.fb.d, this.jb, j));
							f = ET(this, Vob(this.fb.d, this.jb, g));
							h = ET(this, Vob(this.fb.d, this.jb, i));
							c = j;
							b = d;
							if (this.b % 5 != 1) {
								if (f > d) {
									b = f;
									c = g
								}
								if (h > b) {
									b = h;
									c = i
								}
							}
							b <= 1 && this.b < 16 && (this.b % 4 == 0 ? (c = g) : this.b % 4 == 2 && (c = i));
							this.b = (this.b + 1) % 20;
							if (c != j) {
								NO(this, c);
								wN(this);
								xN(this)
							}
						}
					}
				} else
					this.d = true
			} else {
				if (m != this.fb.e >> 5 || n != this.fb.f >> 5 && GT(this) == 2) {
					l = Zz(this.jb);
					l != this.a && _z(this.Y, new JJ(this.jb,l))
				}
			}
		}
		;
		_.xb = function OT() {
			return 'Pacman{' + (rGb + this.kb + sGb + this.ib + tGb + tpb(this.fb) + uGb + (this.hb >>> 0).toString(2) + '}') + '}'
		}
		;
		_.a = 0;
		_.b = 0;
		_.d = false;
		_.e = 0;
		var BT;
		var M9 = nub(yGb, 'PacmanUnit', 245);
		whb(379, 14, AGb, PT);
		_.ue = function QT() {
			return new HT
		}
		;
		var L9 = nub(yGb, 'PacmanUnit/1', 379);
		whb(180, 19, {
			19: 1,
			180: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		});
		_.De = function bU() {
			return this.p
		}
		;
		_.Re = function cU(a, b) {
			this.V = a;
			VN(this, a, b);
			RT(this, this.V)
		}
		;
		_.He = function dU(a, b, c, d) {
			var e, f;
			AN(this, b, c, d);
			e = (d & 1) != 0;
			e ? $T(this, zC(c)) : (d & 4) != 0 && nC(this.q, c);
			e && (this.j = wk(c));
			if ((d & 8) != 0) {
				this.o == null && (this.o = j2(h3, XCb, 7, a.Q.k.a.length, 15, 1));
				tsb(c, this.o.length, e, new RU(this,c))
			}
			if ((d & 4) != 0) {
				f = c.ad(null);
				this.k = f & 7;
				this.g = f >> 3
			}
			(d & 32) != 0 && _T(this, c._c(null))
		}
		;
		_.xb = function eU() {
			return 'PlayerInstance{ player=' + this.q + ' ' + (rGb + this.kb + sGb + this.ib + tGb + tpb(this.fb) + uGb + (this.hb >>> 0).toString(2) + '}') + '}'
		}
		;
		_.g = 2;
		_.j = 0;
		_.k = 0;
		_.n = 0;
		_.p = 0;
		var U9 = nub(yGb, 'PlayerInstanceModel', 180);
		whb(93, 180, {
			19: 1,
			93: 1,
			180: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, qU);
		_.re = function vU() {
			return lU
		}
		;
		_.Ke = function rU(a) {
			nU(this, a)
		}
		;
		_.Le = function sU() {
			this.ib == this.Y.W.Fb() && !this.b && (this.b = jz(this.V.f, this.ib))
		}
		;
		_.Me = function tU() {
			return false
		}
		;
		_.Oe = function wU() {
			return 1
		}
		;
		_.Se = function xU() {
			this.hb = 0;
			this.X.length > 0 && (this.X.length = 0,
				undefined);
			!!this.e && (this.e.a = j2(Afb, PCb, 1, 0, 5, 1));
			this.q.g = 0
		}
		;
		_.Te = function yU() {
			var a, b;
			this.i = PE(this.V.Q.b, this.j);
			a = (this.i.f & 2) != 0 ? this.i.u : this.ib;
			b = bm(this.V.S, a);
			if (!b) {
				b = this.q;
				dm(this.V.S, a, b)
			} else {
				mC(b, this.q);
				this.q = b
			}
		}
		;
		_.Ve = function zU() {
			var a, b, c;
			this.n != (!this.f ? 0 : this.f.kb) && (this.f = hA(this.V, this.n));
			if (!this.cb)
				return;
			if (this.a > 0) {
				++this.a;
				if (this.a > 100) {
					c = gA(this.V, this.ib);
					!!c && c.N > 1 && OO(c, c.N - 1);
					YN(this);
					return
				}
			}
			this.c < 100 && ++this.c;
			if (this.b) {
				b = this.V.Q.k.a;
				for (a = 0; a < b.length; a++) {
					gM(this.b, b[a]);
					aU()
				}
			}
		}
		;
		_.a = 0;
		_.c = 0;
		_.d = 0;
		_.e = null;
		var fU, gU, hU, iU, jU, kU, lU;
		var V9 = nub(yGb, 'PlayerInstance', 93);
		whb(358, 14, AGb, AU);
		_.ue = function BU() {
			return new qU
		}
		;
		var N9 = nub(yGb, 'PlayerInstance/1', 358);
		var kgb = pub(FGb, 'Comparator');
		whb(359, 1, GGb, CU);
		_.ub = function EU(a) {
			return this === a
		}
		;
		_.mf = function DU(a, b) {
			return mU(),
				uU(UT(a), UT(b), a, b)
		}
		;
		var O9 = nub(yGb, 'PlayerInstance/lambda$0$Type', 359);
		whb(360, 1, GGb, FU);
		_.ub = function HU(a) {
			return this === a
		}
		;
		_.mf = function GU(a, b) {
			return mU(),
				uU(WT(a), WT(b), a, b)
		}
		;
		var P9 = nub(yGb, 'PlayerInstance/lambda$1$Type', 360);
		whb(361, 1, GGb, IU);
		_.ub = function KU(a) {
			return this === a
		}
		;
		_.mf = function JU(a, b) {
			return mU(),
				uU(VT(a), VT(b), a, b)
		}
		;
		var Q9 = nub(yGb, 'PlayerInstance/lambda$2$Type', 361);
		whb(362, 1, GGb, LU);
		_.ub = function NU(a) {
			return this === a
		}
		;
		_.mf = function MU(a, b) {
			return mU(),
				uU(TT(a) + UT(a), TT(b) + UT(b), a, b)
		}
		;
		var R9 = nub(yGb, 'PlayerInstance/lambda$3$Type', 362);
		whb(363, 1, GGb, OU);
		_.ub = function QU(a) {
			return this === a
		}
		;
		_.mf = function PU(a, b) {
			return mU(),
				uU(TT(a) + WT(a), TT(b) + WT(b), a, b)
		}
		;
		var S9 = nub(yGb, 'PlayerInstance/lambda$4$Type', 363);
		whb(364, 1, {}, RU);
		_.nf = function SU(a) {
			ZT(this.a, this.b, a)
		}
		;
		var T9 = nub(yGb, 'PlayerInstanceModel/lambda$0$Type', 364);
		whb(124, 15, HGb);
		_.ub = function $U(a) {
			return TU(this, a)
		}
		;
		_.He = function _U(a, b, c, d) {
			YU(this, a, b, c, d)
		}
		;
		_.Se = function aV() {
			(this.hb & 9) != 0 && nsb(this.d);
			this.hb = 0;
			this.X.length > 0 && (this.X.length = 0,
				undefined)
		}
		;
		_.xb = function bV() {
			return 'Terrain{' + (rGb + this.kb + sGb + this.ib + tGb + tpb(this.fb) + uGb + (this.hb >>> 0).toString(2) + '}') + '}'
		}
		;
		_.f = 0;
		var Kdb = nub(OCb, 'TerrainModel', 124);
		whb(373, 124, HGb);
		_.Ne = function cV() {}
		;
		_.Pe = function dV() {
			return 9
		}
		;
		_.Ue = function eV() {}
		;
		var Ldb = nub(OCb, 'TerrainUnit', 373);
		whb(182, 373, {
			182: 1,
			9: 1,
			6: 1,
			8: 1,
			124: 1,
			235: 1,
			15: 1,
			18: 1
		}, lV);
		_.re = function nV() {
			return fV
		}
		;
		_.ub = function mV(a) {
			var b, c;
			if (!TU(this, a))
				return false;
			c = a;
			for (b = 0; b < this.b.length; b++)
				if (this.b[b] != c.b[b])
					return false;
			return true
		}
		;
		_.Re = function oV(a, b) {
			iV(this, a, b)
		}
		;
		_.He = function pV(a, b, c, d) {
			YU(this, a, b, c, d);
			(d & 4) != 0 && jV(this, xk(c));
			(d & 32) != 0 && hV(this) > 0 && c.Zc(this.b, null)
		}
		;
		_.Ve = function qV() {
			if (!this.cb)
				return;
			this.c == this.Y._ && _z(this.Y, new LJ)
		}
		;
		_.c = -1;
		var fV;
		var X9 = nub(yGb, 'RegenTerrainUnit', 182);
		whb(374, 14, AGb, rV);
		_.ue = function sV() {
			return new lV
		}
		;
		var W9 = nub(yGb, 'RegenTerrainUnit/1', 374);
		whb(248, 247, {
			19: 1,
			39: 1,
			248: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, vV);
		_.re = function xV() {
			return tV
		}
		;
		_.Ne = function wV() {}
		;
		_.He = function yV(a, b, c, d) {
			qP(this, a, b, c, d);
			(d & 1) != 0 && (this.a = c.ad(null))
		}
		;
		_.Ue = function zV() {}
		;
		_.Ve = function AV() {
			var a;
			rP(this);
			if (!this.cb || !this.Y || this.b < this.a)
				return;
			a = new mZ;
			_Y(a, this.fb, aob(this.e, this.b));
			a.Y ? (a.k = a.Y._) : (a.k = 0);
			aZ(a, this.Y)
		}
		;
		_.a = 0;
		var tV;
		var Z9 = nub(yGb, 'SpiderWebUnit', 248);
		whb(384, 14, AGb, BV);
		_.ue = function CV() {
			return new vV
		}
		;
		var Y9 = nub(yGb, 'SpiderWebUnit/1', 384);
		whb(299, 1, {
			299: 1,
			41: 1
		}, FV);
		_.Xd = function GV(a, b) {
			return this.a = b._c(null),
				this.b = yk(b),
				true
		}
		;
		_.Yd = function HV() {}
		;
		_.Zd = function IV(a) {}
		;
		_.a = 0;
		_.b = 0;
		var DV;
		var _9 = nub(yGb, 'SquadJoinRequest', 299);
		whb(622, 1, {}, JV);
		_.$d = function KV(a, b, c) {
			return new FV(b)
		}
		;
		var $9 = nub(yGb, 'SquadJoinRequest/1', 622);
		whb(283, 1, {
			283: 1,
			41: 1
		}, OV);
		_.Xd = function PV(a, b) {
			return NV(this, a, b)
		}
		;
		_.Yd = function QV() {}
		;
		_.Zd = function RV(a) {
			this.b = a
		}
		;
		_.a = 0;
		_.c = 0;
		_.e = -1;
		var LV;
		var bab = nub(yGb, 'SquadMember', 283);
		whb(575, 1, {}, SV);
		_.$d = function TV(a, b, c) {
			return new OV(b,a)
		}
		;
		var aab = nub(yGb, 'SquadMember/1', 575);
		whb(243, 19, {
			19: 1,
			243: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, _V);
		_.re = function aW() {
			return UV
		}
		;
		_.Oe = function bW() {
			return 1
		}
		;
		_.De = function cW() {
			return this.i
		}
		;
		_.be = function dW() {
			return this.V
		}
		;
		_.He = function gW(a, b, c, d) {
			var e;
			AN(this, b, c, d);
			e = (d & 1) == 1;
			if ((d & 4) != 0) {
				this.V = a;
				UD(this.d, e, c);
				this.a = yk(c)
			}
			(d & 8) != 0 && UD(this.c, e, c);
			if ((d & 32) != 0) {
				this.e = c.ad(null);
				this.i = c.ad(null)
			}
			if ((d & 16) != 0) {
				this.f = zk(c);
				this.j = zk(c)
			}
			if ((d & 64) != 0) {
				this.g = c.$c(null);
				this.b = c.ad(null)
			}
		}
		;
		_.Se = function hW() {
			this.hb = 0;
			this.X.length > 0 && (this.X.length = 0,
				undefined);
			VD(this.d);
			VD(this.c)
		}
		;
		_.ce = function iW(a) {
			this.hb |= a == this.d ? 4 : 8
		}
		;
		_.a = 0;
		_.b = 0;
		_.e = 2;
		_.f = null;
		_.g = 0;
		_.i = 0;
		var UV;
		var fab = nub(yGb, 'SquadUnit', 243);
		whb(367, 14, AGb, jW);
		_.ue = function kW() {
			return new _V
		}
		;
		var cab = nub(yGb, 'SquadUnit/1', 367);
		whb(368, 1, {}, lW);
		_.Sd = function mW(a) {
			return eW(this.a, a)
		}
		;
		_.a = 0;
		var dab = nub(yGb, 'SquadUnit/lambda$0$Type', 368);
		whb(369, 1, {}, nW);
		_.Sd = function oW(a) {
			return fW(this.a, a)
		}
		;
		var eab = nub(yGb, 'SquadUnit/lambda$1$Type', 369);
		whb(85, 246, IGb, rW);
		_.re = function sW() {
			return this.df()
		}
		;
		_.df = function tW() {
			return pW
		}
		;
		_.Ve = function uW() {}
		;
		var pW;
		var lab = nub(yGb, 'VaultUnit', 85);
		whb(388, 85, IGb);
		_.He = function xW(a, b, c, d) {
			vW(this, a, b, c, d)
		}
		;
		_.e = 0;
		_.f = 0;
		_.g = 0;
		_.i = 0;
		_.j = 0;
		_.k = 0;
		var gab = nub(yGb, 'TowerModel', 388);
		whb(251, 388, {
			19: 1,
			251: 1,
			85: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, BW);
		_.df = function CW() {
			return yW
		}
		;
		_.He = function DW(a, b, c, d) {
			vW(this, a, b, c, d);
			if ((d & 1) != 0) {
				this.j = c.ad(null);
				this.d = c.ad(null)
			}
		}
		;
		_.Ve = function EW() {
			var a, b, c;
			if (!this.cb) {
				this.e > 0 && --this.e;
				return
			}
			if (this.n < this.j) {
				wW(this, 0);
				this.f = this.fb.c;
				this.k = this.i
			} else {
				if (this.fb.c != this.f) {
					a = this.fb.c & 7;
					a == this.f ? wW(this, this.g) : BN(this, Mqb(a, this.f))
				} else if (this.e > 0) {
					--this.e;
					if (this.e == 0) {
						b = new kQ;
						PP(b, this.p);
						FN(b, this.jb);
						EN(b, this.ib);
						b.q |= 256;
						OP(b, 0);
						c = new XQ(b);
						FN(c, this.jb);
						c.b = this.p > 0 ? (AA(), xA)[this.p] : 1;
						c.f = 0;
						c.d = 1;
						BN(c, this.fb.c);
						pO(c, this.Y);
						this.k = this.i
					}
				} else {
					this.k > 0 ? --this.k : AW(this)
				}
			}
		}
		;
		_.d = 0;
		var yW;
		var iab = nub(yGb, 'TowerUnit', 251);
		whb(389, 14, AGb, FW);
		_.ue = function GW() {
			return new BW
		}
		;
		var hab = nub(yGb, 'TowerUnit/1', 389);
		whb(380, 14, AGb, HW);
		_.ue = function IW() {
			return new rW
		}
		;
		var kab = nub(yGb, 'VaultUnit/1', 380);
		whb(366, 14, AGb, JW);
		_.ue = function KW() {
			return new kQ
		}
		;
		var nab = nub(BGb, 'BombUnit/1', 366);
		whb(612, 1, {}, NW);
		var pab = nub(BGb, 'Bombs', 612);
		whb(185, 37, {
			19: 1,
			39: 1,
			63: 1,
			37: 1,
			185: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, QW);
		_.Ne = function RW() {}
		;
		_.df = function SW() {
			return OW
		}
		;
		_.$e = function TW() {
			wG(this.V.Q, Zz(this.jb)) >= 4 && XP(this)
		}
		;
		_.Ue = function UW() {}
		;
		var OW;
		var rab = nub(BGb, 'CandyUnit', 185);
		whb(392, 14, AGb, VW);
		_.ue = function WW() {
			return new QW
		}
		;
		var qab = nub(BGb, 'CandyUnit/1', 392);
		whb(127, 37, {
			19: 1,
			39: 1,
			63: 1,
			37: 1,
			127: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, _W);
		_.df = function aX() {
			return XW
		}
		;
		_.ef = function bX() {
			return true
		}
		;
		_.Bd = function cX(a) {
			_P(this, a);
			this.b = this.V.Q.d;
			TO(this, this.b.j)
		}
		;
		_.He = function dX(a, b, c, d) {
			LP(this, a, b, c, d);
			(d & 4) != 0 && (this.a = c.ad(null))
		}
		;
		_.jf = function eX() {
			var a;
			a = this.M;
			if (!iQ(this))
				return false;
			ZW(this, a);
			return true
		}
		;
		_.Ve = function fX() {
			jQ(this);
			!!this.Y && this.cb && (this.N <= this.b.n ? $W(this, 0) : this.N <= this.b.k ? $W(this, 2) : $W(this, 3))
		}
		;
		_.a = 0;
		var XW;
		var tab = nub(BGb, 'MineBombUnit', 127);
		whb(394, 14, AGb, gX);
		_.ue = function hX() {
			return new _W
		}
		;
		var sab = nub(BGb, 'MineBombUnit/1', 394);
		whb(184, 37, CGb, kX);
		_.af = function lX() {
			var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
			e = this.V.Q.d;
			if (e.r >= e.t && this.a) {
				m = this.V.j;
				d = Ksb(m, e.r - e.t + 1) + e.t;
				l = e.s;
				a = e.q;
				n = 2 * a + 1;
				c = 2 * l - 1;
				r = h2(h3, [PCb, XCb], [11, 7], 15, [n, n], 2);
				for (i = -l + 1; i < l; i++)
					for (j = -l + 1; j < l; j++)
						r[i + a][j + a] = 1;
				p = n * n - c * c;
				for (h = 0; h < d; h++) {
					o = 0;
					for (t = 0; t < n; t++)
						for (v = 0; v < n; v++)
							r[t][v] == 0 && ++o;
					o != p && (Evb(),
						Dvb);
					q = Ksb(m, p);
					k = null;
					f = 0;
					g = 0;
					w: for (s = 0; s < n; s++)
						for (u = 0; u < n; u++) {
							if (r[s][u] == 0) {
								if (q != 0)
									--q;
								else {
									k = Xob(this.fb.d, (this.fb.e >> 5) + s - a, (this.fb.f >> 5) + u - a, true);
									f = s - a;
									g = u - a;
									++r[s][u];
									--p;
									if (s > 0 && r[s - 1][u] == 0) {
										++r[s - 1][u];
										--p
									}
									if (s + 1 < n && r[s + 1][u] == 0) {
										++r[s + 1][u];
										--p
									}
									if (u > 0 && r[s][u - 1] == 0) {
										++r[s][u - 1];
										--p
									}
									if (u + 1 < n && r[s][u + 1] == 0) {
										++r[s][u + 1];
										--p
									}
									break w
								}
							}
						}
					if (!k)
						break;
					b = LW(this.V.a, 5);
					hQ(b, this.ib);
					FN(b, this.jb);
					fQ(b, this, 1);
					PP(b, this.t);
					b.Bd(this.V);
					BO(b, f, g)
				}
			}
			YP(this)
		}
		;
		_.df = function mX() {
			return iX
		}
		;
		_.a = false;
		var iX;
		var vab = nub(BGb, 'PumpkinBombUnit', 184);
		whb(391, 14, AGb, nX);
		_.ue = function oX() {
			return new kX
		}
		;
		var uab = nub(BGb, 'PumpkinBombUnit/1', 391);
		whb(252, 37, {
			19: 1,
			39: 1,
			63: 1,
			37: 1,
			252: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, rX);
		_.cf = function sX() {
			return this.V.Q.j.a
		}
		;
		_.df = function tX() {
			return pX
		}
		;
		_.ef = function uX() {
			return true
		}
		;
		_.ff = function vX() {
			return this.N >= this.b
		}
		;
		_.gf = function wX() {
			return false
		}
		;
		_.Bd = function xX(a) {
			var b;
			_P(this, a);
			b = this.V.Q.d;
			this.d = 0;
			this.c = b.D;
			this.b = b.C;
			TO(this, b.B)
		}
		;
		_.He = function yX(a, b, c, d) {
			LP(this, a, b, c, d);
			if ((d & 1) != 0) {
				this.d = c.ad(null);
				this.c = c.ad(null);
				this.b = c.ad(null)
			}
		}
		;
		_.Ve = function zX() {
			var a, b, c, d, e, f, g;
			g = this.jb;
			c = this.M & 15;
			jQ(this);
			if (!this.Y || !this.cb)
				return;
			if (this.i)
				for (e = 0; e < this.i.a.length; e++) {
					b = ixb(this.i, e);
					if (Z2(b.c, 75)) {
						a = b.c;
						if (!(a.O.f >= 3 || a.N <= 0)) {
							if (b.a * (Gqb(),
								Bqb[c]) + b.b * Cqb[c] > 0) {
								f = JO(a, 5);
								f.a = this;
								f.b = this.kb;
								tO(f.a, f.g)
							}
						}
					}
				}
			this.a > 0 && --this.a;
			d = this.N;
			(this.R ? this.R.a.length : 0) > 0 && (d -= this.V.Q.d.F);
			mpb(this.jb, g) || (d += this.V.Q.d.A);
			d > this.c && (d = this.c);
			d < this.d ? (bQ(this),
				GO(this)) : (this.N != d && (this.hb |= 4),
				this.N = d)
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = 0;
		_.d = 0;
		var pX;
		var xab = nub(BGb, 'SnowballUnit', 252);
		whb(393, 14, AGb, AX);
		_.ue = function BX() {
			return new rX
		}
		;
		var wab = nub(BGb, 'SnowballUnit/1', 393);
		whb(183, 37, CGb, EX);
		_.df = function FX() {
			return CX
		}
		;
		var CX;
		var zab = nub(BGb, 'StandardBombUnit', 183);
		whb(390, 14, AGb, GX);
		_.ue = function HX() {
			return new EX
		}
		;
		var yab = nub(BGb, 'StandardBombUnit/1', 390);
		whb(733, 37, CGb, IX);
		_.af = function JX() {
			var a, b, c, d, e, f;
			f = this.s;
			c = this.t > 0 ? (AA(),
				xA)[this.t] : 1;
			_z(this.Y, new HJ);
			b = new OY(this);
			FN(b, this.jb);
			kY(b, 5);
			BY(b, 1);
			zY(b, c);
			CY(b, this.t);
			for (d = 0; d < 8; d += 2) {
				a = new XQ(this);
				a.b = c;
				FN(a, this.jb);
				a.f = f;
				a.g = true;
				if (a.f == 0)
					continue;
				dqb(a.fb, d);
				pO(a, this.Y)
			}
			e = this.Y;
			b.V = e;
			WN(b, e);
			XN(b);
			eY(b, b.k);
			bQ(this);
			GO(this)
		}
		;
		_.hf = function KX(a, b) {}
		;
		var Aab = nub(BGb, 'UltraBombUnit', 733);
		whb(49, 1, JGb);
		_.of = function MX() {
			return this.b.a[0].of()
		}
		;
		_.pf = function NX(a) {
			return this.of()
		}
		;
		var Bab = nub(KGb, 'BombFactory', 49);
		whb(703, 49, JGb, OX);
		_.of = function PX() {
			var a;
			a = new QW;
			OP(a, this.a);
			a.q |= 256;
			gQ(a, this.c.Q.d.f);
			return a
		}
		;
		_.a = 1;
		var Cab = nub(KGb, 'CandyBombFactory', 703);
		whb(698, 49, JGb, QX);
		_.of = function RX() {
			var a;
			return a = new EX,
				OP(a, 5),
				a.q |= 0,
				a
		}
		;
		_.pf = function SX(a) {
			var b, c, d, e, f, g, h, i;
			d = a.G;
			b = new EX;
			c = 0;
			iM(d, this.c.v) && (c |= 32);
			gM(d, d.j.s) > d.b.c && d.d.J != 2 && (c |= 1);
			(uz(a.B) && !mM(a.G, a.B) ? a.B : 0) == 20 && (c |= 16);
			if (nM(d)) {
				c |= 2;
				c |= a.B == 1 ? 8192 : 4096
			} else if (a.J == 2) {
				(a.v.r > 0 ? a.v.r : a.K) >= 4 && PP(b, a.v.r > 0 ? a.v.r : a.K);
				c |= 128
			} else if (a.J == 1 || a.B == 16) {
				c |= 8
			} else {
				PP(b, ZB(ZI(a.V.O, a), a.v.r > 0 ? a.v.r : a.K, a.v.f));
				gM(d, d.j.q) > YL(d.b) && (c |= 4)
			}
			e = (f = a.G,
				g = a.Y,
				h = (uz(a.B) && !mM(a.G, a.B) ? a.B : 0) == 20,
				i = h ? 1 : gM(f, g.I),
			gM(f, f.j.q) > YL(f.b) && ++i,
				i);
			OP(b, e);
			e <= 1 && (c |= 16);
			(d.g & 1) != 0 && (c |= 256);
			(d.g & 2) != 0 && (c |= 512);
			((d.g & 4) != 0 || d.d.B == 19) && (c |= 64);
			b.q |= c;
			return b
		}
		;
		var Dab = nub(KGb, 'DefaultBombFactory', 698);
		whb(702, 49, JGb, TX);
		_.of = function UX() {
			var a;
			a = new kQ;
			a.r = 4;
			a.q |= qDb;
			a.q |= 4098;
			return a
		}
		;
		var Eab = nub(KGb, 'EggBombFactory', 702);
		whb(700, 49, JGb, VX);
		_.pf = function WX(a) {
			var b, c, d;
			b = new _W;
			OP(b, (c = a.G,
				d = gM(c, a.V.I),
			gM(c, c.j.q) > YL(c.b) && ++d,
				d));
			return b
		}
		;
		var Fab = nub(KGb, 'MineBombFactory', 700);
		whb(701, 49, JGb, XX);
		_.of = function YX() {
			var a;
			a = new kX;
			a.r = 2;
			a.q |= qDb;
			OP(a, this.c.Q.d.o);
			gQ(a, this.c.Q.d.p);
			a.q |= 4608;
			return a
		}
		;
		var Gab = nub(KGb, 'PumpkinBombFactory', 701);
		whb(699, 49, JGb, $X);
		_.of = function _X() {
			return ZX(this)
		}
		;
		_.pf = function aY(a) {
			var b;
			if (nM(a.G))
				return this.b.a[0].pf(a);
			b = ZX(this);
			PP(b, a.v.r > 0 ? a.v.r : a.K);
			return b
		}
		;
		var Hab = nub(KGb, 'SlimeBombFactory', 699);
		whb(704, 49, JGb, bY);
		_.pf = function cY(a) {
			var b;
			b = new IX;
			b.r = 5;
			b.q |= qDb;
			b.q |= 256;
			(a.v.r > 0 ? a.v.r : a.K) > 4 && PP(b, a.v.r > 0 ? a.v.r : a.K);
			return b
		}
		;
		var Iab = nub(KGb, 'UltraBombFactory', 704);
		whb(244, 19, xGb);
		_.Ve = function gY() {
			this.cb && dY(this) <= 0 && YN(this)
		}
		;
		_.k = -1;
		var Jab = nub(LGb, 'AreaEffectUnit', 244);
		whb(125, 244, {
			19: 1,
			125: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		});
		_.Be = function lY() {
			return false
		}
		;
		_.ub = function mY(a) {
			return hY(this, a)
		}
		;
		_.qf = function nY() {
			return this.i
		}
		;
		_.He = function oY(a, b, c, d) {
			iY(this, a, b, c, d)
		}
		;
		_.xb = function pY() {
			return MGb + this.k + ', type=' + this.j + ' solid=' + this.i + ' ' + (rGb + this.kb + sGb + this.ib + tGb + tpb(this.fb) + uGb + (this.hb >>> 0).toString(2) + '}') + '}'
		}
		;
		_.i = false;
		_.j = 0;
		var Sab = nub(LGb, 'SpriteModel', 125);
		whb(107, 125, {
			19: 1,
			125: 1,
			107: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, tY);
		_.re = function vY() {
			return this.df()
		}
		;
		_.Ne = function uY() {
			var a;
			this.qf() && (a = zN(this),
			!!a && flb(a, this.fb.e >> 5, this.fb.f >> 5, this, this.bb))
		}
		;
		_.df = function wY() {
			return qY
		}
		;
		_.Re = function xY(a, b) {
			this.V = a;
			VN(this, a, b);
			eY(this, this.k)
		}
		;
		_.Ue = function yY() {
			var a;
			this.qf() && (a = zN(this),
			!!a && nlb(a, this.fb.e >> 5, this.fb.f >> 5, this, this.bb))
		}
		;
		var qY;
		var Uab = nub(LGb, 'SpriteUnit', 107);
		whb(149, 107, {
			19: 1,
			149: 1,
			125: 1,
			107: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		});
		_.ub = function EY(a) {
			var b;
			if (!hY(this, a))
				return false;
			b = a;
			if (this.f != b.f)
				return false;
			return true
		}
		;
		_.De = function FY() {
			return this.g
		}
		;
		_.He = function GY(a, b, c, d) {
			var e;
			iY(this, a, b, c, d);
			if ((d & 1) != 0) {
				e = c.ad(null);
				BY(this, (e & 7) + 1);
				this.e = (e & 8) != 0;
				this.c = (e & 16) != 0;
				zY(this, e >> 5);
				this.g = c.ad(null)
			}
		}
		;
		_.xb = function HY() {
			return 'Explosion{ length=' + this.f + ' ' + (MGb + this.k + ', type=' + this.j + ' solid=' + this.i + ' ' + (rGb + this.kb + sGb + this.ib + tGb + tpb(this.fb) + uGb + (this.hb >>> 0).toString(2) + '}') + '}') + '}'
		}
		;
		_.c = false;
		_.d = 0;
		_.e = false;
		_.f = 0;
		_.g = 0;
		var Kab = nub(LGb, 'ExplosionModel', 149);
		whb(76, 149, {
			19: 1,
			149: 1,
			76: 1,
			125: 1,
			107: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, NY, OY);
		_.df = function PY() {
			return IY
		}
		;
		_.wb = function QY() {
			return this.kb
		}
		;
		_.qf = function RY() {
			return false
		}
		;
		var IY;
		var Mab = nub(LGb, 'ExplosionUnit', 76);
		whb(376, 14, AGb, SY);
		_.ue = function TY() {
			return new NY
		}
		;
		var Lab = nub(LGb, 'ExplosionUnit/1', 376);
		whb(253, 244, xGb, WY);
		_.re = function YY() {
			return UY
		}
		;
		_.Me = function XY() {
			return false
		}
		;
		var UY;
		var Pab = nub(LGb, 'ServerAreaEffectUnit', 253);
		whb(233, 253, xGb);
		_.Ne = function dZ() {}
		;
		_.sf = function eZ(a, b) {
			bZ(this, a, b)
		}
		;
		_.Ue = function fZ() {}
		;
		_.d = 0;
		var ZY;
		var Qab = nub(LGb, 'ServerCircularAreaEffectUnit', 233);
		whb(234, 233, {
			19: 1,
			234: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, gZ, hZ);
		_.rf = function iZ() {
			return new gZ
		}
		;
		_.sf = function jZ(a, b) {
			var c;
			bZ(this, a, b);
			c = a;
			this.a = c.a;
			this.b = c.b
		}
		;
		_.b = 0;
		var Nab = nub(LGb, 'GammaEffectUnit', 234);
		whb(397, 14, AGb, kZ);
		_.ue = function lZ() {
			return new WY
		}
		;
		var Oab = nub(LGb, 'ServerAreaEffectUnit/1', 397);
		whb(325, 233, xGb, mZ);
		_.rf = function nZ() {
			return new mZ
		}
		;
		var Rab = nub(LGb, 'SpiderWebEffectUnit', 325);
		whb(377, 14, AGb, oZ);
		_.ue = function pZ() {
			return new tY
		}
		;
		var Tab = nub(LGb, 'SpriteUnit/1', 377);
		whb(164, 1, {}, qZ);
		_.tf = function sZ() {}
		;
		_.oe = function tZ(a) {}
		;
		_.uf = function uZ() {
			return this
		}
		;
		_.vf = function vZ() {}
		;
		_.Te = function wZ() {}
		;
		_.f = 0;
		var Vab = nub(NGb, 'EntityMover', 164);
		whb(306, 164, {
			306: 1
		}, BZ);
		_.tf = function CZ() {
			if (this.d == 0) {
				if (this.e) {
					this.g.We();
					return
				}
				AZ(this) ? IO(this.g) : xZ(this)
			} else if (this.d < this.a && this.a > 0) {
				this.a = 0;
				this.g.hb |= 8;
				this.g.Xe();
				wN(this.g);
				xN(this.g)
			}
		}
		;
		_.oe = function DZ(a) {
			this.d = a.ad(null);
			this.a = a.ad(null);
			this.b = xk(a);
			this.c = xk(a)
		}
		;
		_.uf = function EZ() {
			this.d -= 8;
			if (this.d <= 0) {
				this.d = 0;
				this.g.cb || (this.d = 1)
			}
			return this
		}
		;
		_.a = 0;
		_.b = 0;
		_.c = 0;
		_.d = 0;
		_.e = false;
		var Wab = nub(NGb, 'FlyMover', 306);
		whb(307, 164, {
			307: 1
		}, FZ);
		_.tf = function GZ() {
			this.a == 1 && IO(this.g);
			--this.a;
			this.g.hb |= 8
		}
		;
		_.oe = function HZ(a) {
			this.a = a.ad(null)
		}
		;
		_.a = 0;
		var Xab = nub(NGb, 'TangledMover', 307);
		whb(219, 164, {
			219: 1
		}, IZ);
		_.tf = function JZ() {
			this.a.Y ? vO(this.g, this.a.fb.e, this.a.fb.f) : IO(this.g)
		}
		;
		_.oe = function KZ(a) {
			this.b = a._c(null);
			a.ad(null)
		}
		;
		_.uf = function LZ() {
			return this
		}
		;
		_.vf = function MZ() {
			!!this.a.Y && RO(this.a, this.g)
		}
		;
		_.Te = function NZ() {
			this.a = Yz(this.g.V, this.b)
		}
		;
		_.b = 0;
		var Yab = nub(NGb, 'VehicleMover', 219);
		whb(495, 1, {}, OZ);
		_.a = 0;
		var Zab = nub(oEb, 'Duration', 495);
		var PZ = null;
		whb(176, 40, UFb);
		var vfb = nub(LCb, 'JsException', 176);
		whb(343, 176, UFb);
		var bbb = nub(OGb, 'JavaScriptExceptionBase', 343);
		whb(119, 343, {
			119: 1,
			3: 1,
			25: 1,
			17: 1
		}, UZ);
		_.Vd = function VZ() {
			TZ(this);
			return this.c
		}
		;
		_.wf = function WZ() {
			return b3(this.b) === b3(RZ) ? null : this.b
		}
		;
		var RZ;
		var $ab = nub(oEb, 'JavaScriptException', 119);
		whb(754, 1, {});
		var abb = nub(oEb, 'Scheduler', 754);
		var YZ = 0, ZZ, $Z = 0, _Z = -1;
		whb(448, 754, {}, u$);
		_.d = false;
		_.i = false;
		var l$;
		var ebb = nub(OGb, 'SchedulerImpl', 448);
		whb(449, 1, {}, z$);
		_.xf = function A$() {
			this.a.d = true;
			p$(this.a);
			this.a.d = false;
			return this.a.i = q$(this.a)
		}
		;
		var cbb = nub(OGb, 'SchedulerImpl/Flusher', 449);
		whb(450, 1, {}, B$);
		_.xf = function C$() {
			this.a.d && y$(this.a.e, 1);
			return this.a.i
		}
		;
		var dbb = nub(OGb, 'SchedulerImpl/Rescuer', 450);
		var D$;
		whb(766, 1, {});
		var ibb = nub(OGb, 'StackTraceCreator/Collector', 766);
		whb(344, 766, {}, K$);
		_.yf = function L$(a) {
			var b = {}, j;
			var c = [];
			a[QGb] = c;
			var d = arguments.callee.caller;
			while (d) {
				var e = (E$(),
				d.name || (d.name = H$(d.toString())));
				c.push(e);
				var f = ':' + e;
				var g = b[f];
				if (g) {
					var h, i;
					for (h = 0,
						     i = g.length; h < i; h++) {
						if (g[h] === d) {
							return
						}
					}
				}
				(g || (b[f] = [])).push(d);
				d = d.caller
			}
		}
		;
		_.zf = function M$(a) {
			var b, c, d, e;
			d = (E$(),
				a && a[QGb] ? a[QGb] : []);
			c = d.length;
			e = j2(Cfb, PCb, 83, c, 0, 1);
			for (b = 0; b < c; b++) {
				e[b] = new cvb(d[b],null,-1)
			}
			return e
		}
		;
		var fbb = nub(OGb, 'StackTraceCreator/CollectorLegacy', 344);
		whb(767, 766, {});
		_.yf = function O$(a) {}
		;
		_.Af = function P$(a, b, c, d) {
			return new cvb(b,a + '@' + d,c < 0 ? -1 : c)
		}
		;
		_.zf = function Q$(a) {
			var b, c, d, e, f, g, h;
			e = (E$(),
				h = a.e,
				h && h.stack ? h.stack.split('\n') : []);
			f = j2(Cfb, PCb, 83, 0, 0, 1);
			b = 0;
			d = e.length;
			if (d == 0) {
				return f
			}
			g = N$(this, e[0]);
			jvb(g.d, PGb) || (f[b++] = g);
			for (c = 1; c < d; c++) {
				f[b++] = N$(this, e[c])
			}
			return f
		}
		;
		var hbb = nub(OGb, 'StackTraceCreator/CollectorModern', 767);
		whb(345, 767, {}, R$);
		_.Af = function S$(a, b, c, d) {
			return new cvb(b,a,-1)
		}
		;
		var gbb = nub(OGb, 'StackTraceCreator/CollectorModernNoSourceMap', 345);
		whb(60, 10, RGb);
		var e_, f_, g_, h_, i_;
		var obb = oub(SGb, 'Style/BorderStyle', 60, l_);
		whb(522, 60, RGb, m_);
		var jbb = oub(SGb, 'Style/BorderStyle/1', 522, null);
		whb(523, 60, RGb, n_);
		var kbb = oub(SGb, 'Style/BorderStyle/2', 523, null);
		whb(524, 60, RGb, o_);
		var lbb = oub(SGb, 'Style/BorderStyle/3', 524, null);
		whb(525, 60, RGb, p_);
		var mbb = oub(SGb, 'Style/BorderStyle/4', 525, null);
		whb(526, 60, RGb, q_);
		var nbb = oub(SGb, 'Style/BorderStyle/5', 526, null);
		whb(27, 10, TGb);
		var r_, s_, t_, u_, v_, w_, x_, y_, z_, A_, B_, C_, D_, E_, F_, G_, H_, I_;
		var Hbb = oub(SGb, 'Style/Cursor', 27, L_);
		whb(527, 27, TGb, M_);
		var ybb = oub(SGb, 'Style/Cursor/1', 527, null);
		whb(536, 27, TGb, N_);
		var pbb = oub(SGb, 'Style/Cursor/10', 536, null);
		whb(537, 27, TGb, O_);
		var qbb = oub(SGb, 'Style/Cursor/11', 537, null);
		whb(538, 27, TGb, P_);
		var rbb = oub(SGb, 'Style/Cursor/12', 538, null);
		whb(539, 27, TGb, Q_);
		var sbb = oub(SGb, 'Style/Cursor/13', 539, null);
		whb(540, 27, TGb, R_);
		var tbb = oub(SGb, 'Style/Cursor/14', 540, null);
		whb(541, 27, TGb, S_);
		var ubb = oub(SGb, 'Style/Cursor/15', 541, null);
		whb(542, 27, TGb, T_);
		var vbb = oub(SGb, 'Style/Cursor/16', 542, null);
		whb(543, 27, TGb, U_);
		var wbb = oub(SGb, 'Style/Cursor/17', 543, null);
		whb(544, 27, TGb, V_);
		var xbb = oub(SGb, 'Style/Cursor/18', 544, null);
		whb(528, 27, TGb, W_);
		var zbb = oub(SGb, 'Style/Cursor/2', 528, null);
		whb(529, 27, TGb, X_);
		var Abb = oub(SGb, 'Style/Cursor/3', 529, null);
		whb(530, 27, TGb, Y_);
		var Bbb = oub(SGb, 'Style/Cursor/4', 530, null);
		whb(531, 27, TGb, Z_);
		var Cbb = oub(SGb, 'Style/Cursor/5', 531, null);
		whb(532, 27, TGb, $_);
		var Dbb = oub(SGb, 'Style/Cursor/6', 532, null);
		whb(533, 27, TGb, __);
		var Ebb = oub(SGb, 'Style/Cursor/7', 533, null);
		whb(534, 27, TGb, a0);
		var Fbb = oub(SGb, 'Style/Cursor/8', 534, null);
		whb(535, 27, TGb, b0);
		var Gbb = oub(SGb, 'Style/Cursor/9', 535, null);
		whb(89, 10, UGb);
		var c0, d0, e0;
		var Lbb = oub(SGb, 'Style/Float', 89, h0);
		whb(545, 89, UGb, i0);
		var Ibb = oub(SGb, 'Style/Float/1', 545, null);
		whb(546, 89, UGb, j0);
		var Jbb = oub(SGb, 'Style/Float/2', 546, null);
		whb(547, 89, UGb, k0);
		var Kbb = oub(SGb, 'Style/Float/3', 547, null);
		whb(70, 10, VGb);
		var l0, m0, n0, o0;
		var Qbb = oub(SGb, 'Style/Overflow', 70, r0);
		whb(548, 70, VGb, s0);
		var Mbb = oub(SGb, 'Style/Overflow/1', 548, null);
		whb(549, 70, VGb, t0);
		var Nbb = oub(SGb, 'Style/Overflow/2', 549, null);
		whb(550, 70, VGb, u0);
		var Obb = oub(SGb, 'Style/Overflow/3', 550, null);
		whb(551, 70, VGb, v0);
		var Pbb = oub(SGb, 'Style/Overflow/4', 551, null);
		whb(71, 10, WGb);
		var w0, x0, y0, z0;
		var Vbb = oub(SGb, 'Style/Position', 71, C0);
		whb(552, 71, WGb, D0);
		var Rbb = oub(SGb, 'Style/Position/1', 552, null);
		whb(553, 71, WGb, E0);
		var Sbb = oub(SGb, 'Style/Position/2', 553, null);
		whb(554, 71, WGb, F0);
		var Tbb = oub(SGb, 'Style/Position/3', 554, null);
		whb(555, 71, WGb, G0);
		var Ubb = oub(SGb, 'Style/Position/4', 555, null);
		whb(72, 10, XGb);
		var H0, I0, J0, K0;
		var $bb = oub(SGb, 'Style/TextAlign', 72, N0);
		whb(556, 72, XGb, O0);
		var Wbb = oub(SGb, 'Style/TextAlign/1', 556, null);
		whb(557, 72, XGb, P0);
		var Xbb = oub(SGb, 'Style/TextAlign/2', 557, null);
		whb(558, 72, XGb, Q0);
		var Ybb = oub(SGb, 'Style/TextAlign/3', 558, null);
		whb(559, 72, XGb, R0);
		var Zbb = oub(SGb, 'Style/TextAlign/4', 559, null);
		whb(45, 10, YGb);
		var S0, T0, U0, V0, W0, X0, Y0, Z0, $0;
		var icb = oub(SGb, 'Style/Unit', 45, b1);
		whb(513, 45, YGb, c1);
		var _bb = oub(SGb, 'Style/Unit/1', 513, null);
		whb(514, 45, YGb, d1);
		var acb = oub(SGb, 'Style/Unit/2', 514, null);
		whb(515, 45, YGb, e1);
		var bcb = oub(SGb, 'Style/Unit/3', 515, null);
		whb(516, 45, YGb, f1);
		var ccb = oub(SGb, 'Style/Unit/4', 516, null);
		whb(517, 45, YGb, g1);
		var dcb = oub(SGb, 'Style/Unit/5', 517, null);
		whb(518, 45, YGb, h1);
		var ecb = oub(SGb, 'Style/Unit/6', 518, null);
		whb(519, 45, YGb, i1);
		var fcb = oub(SGb, 'Style/Unit/7', 519, null);
		whb(520, 45, YGb, j1);
		var gcb = oub(SGb, 'Style/Unit/8', 520, null);
		whb(521, 45, YGb, k1);
		var hcb = oub(SGb, 'Style/Unit/9', 521, null);
		whb(776, 1, {});
		_.xb = function l1() {
			return 'An event type'
		}
		;
		var fdb = nub(ZGb, 'Event', 776);
		whb(777, 776, {});
		_.c = false;
		var rcb = nub($Gb, 'GwtEvent', 777);
		whb(787, 777, {});
		_.Cf = function r1() {
			return t1(),
				s1
		}
		;
		var n1;
		var lcb = nub(_Gb, 'DomEvent', 787);
		whb(788, 787, {});
		var mcb = nub(_Gb, 'HumanInputEvent', 788);
		whb(789, 788, {});
		var ncb = nub(_Gb, 'MouseEvent', 789);
		whb(742, 789, {}, u1);
		_.Bf = function v1(a) {
			a.sd(this)
		}
		;
		var s1;
		var jcb = nub(_Gb, 'ClickEvent', 742);
		whb(497, 1, {});
		_.wb = function x1() {
			return this.c
		}
		;
		_.xb = function y1() {
			return 'Event type'
		}
		;
		_.c = 0;
		var w1 = 0;
		var ddb = nub(ZGb, 'Event/Type', 497);
		whb(201, 497, {}, z1);
		var qcb = nub($Gb, 'GwtEvent/Type', 201);
		whb(317, 201, {
			317: 1
		}, A1);
		var kcb = nub(_Gb, 'DomEvent/Type', 317);
		whb(741, 1, {}, D1);
		var ocb = nub(_Gb, 'PrivateMap', 741);
		whb(618, 777, {}, F1);
		_.Bf = function G1(a) {
			Njb()
		}
		;
		_.Cf = function I1() {
			return E1
		}
		;
		var E1;
		var pcb = nub('com.google.gwt.event.logical.shared', 'CloseEvent', 618);
		whb(200, 1, {
			31: 1
		}, L1);
		var tcb = nub($Gb, 'HandlerManager', 200);
		whb(778, 1, {});
		var edb = nub(ZGb, 'EventBus', 778);
		whb(498, 778, {});
		_.b = 0;
		_.c = false;
		var idb = nub(ZGb, 'SimpleEventBus', 498);
		whb(499, 498, {}, T1);
		var scb = nub($Gb, 'HandlerManager/Bus', 499);
		whb(648, 1, {}, U1);
		var ucb = nub($Gb, 'LegacyHandlerWrapper', 648);
		whb(110, 40, bHb, V1);
		var jdb = nub(ZGb, cHb, 110);
		whb(276, 110, bHb, X1);
		var vcb = nub($Gb, cHb, 276);
		whb(136, 10, {
			136: 1,
			3: 1,
			12: 1,
			10: 1
		}, d2);
		var _1, a2, b2;
		var wcb = oub('com.google.gwt.i18n.client', 'HasDirection/Direction', 136, e2);
		var o2;
		var O2, P2, Q2, R2;
		whb(122, 1, {
			122: 1
		});
		var Fgb = nub(iHb, 'Handler', 122);
		whb(334, 122, {
			122: 1
		}, Fhb);
		_.Df = function Ghb(a) {
			var b, c;
			if (!window.console || (Chb(this),
			WFb > a.a.lg())) {
				return
			}
			b = Rhb(this.a, a);
			c = a.a.lg();
			c >= (MAb(),
				GDb) ? (window.console.error(b),
				undefined) : c >= 900 ? (window.console.warn(b),
				undefined) : c >= 800 ? (window.console.info(b),
				undefined) : (window.console.log(b),
				undefined)
		}
		;
		var xcb = nub(jHb, 'ConsoleLogHandler', 334);
		whb(335, 122, {
			122: 1
		}, Hhb);
		_.Df = function Ihb(a) {
			return
		}
		;
		var ycb = nub(jHb, 'DevelopmentModeLogHandler', 335);
		var Jhb;
		var Bcb = nub(jHb, 'LogConfiguration', null);
		whb(333, 1, {}, Mhb);
		var zcb = nub(jHb, 'LogConfiguration/1', 333);
		whb(332, 1, {}, Qhb);
		var Acb = nub(jHb, 'LogConfiguration/LogConfigurationImplRegular', 332);
		whb(782, 1, {});
		var Egb = nub(iHb, 'Formatter', 782);
		whb(783, 782, {});
		var Dcb = nub(kHb, 'FormatterImpl', 783);
		whb(286, 783, {}, Shb);
		_.a = false;
		var Ccb = nub(jHb, 'TextLogFormatter', 286);
		whb(768, 1, {});
		var ifb = nub(lHb, 'OutputStream', 768);
		whb(241, 768, {}, Thb);
		var hfb = nub(lHb, 'FilterOutputStream', 241);
		whb(177, 241, {}, Uhb);
		_.Ef = function Vhb(a) {}
		;
		var jfb = nub(lHb, 'PrintStream', 177);
		whb(578, 177, {}, Whb);
		_.Ef = function Xhb(a) {
			zvb(this.a, a);
			zvb(this.a, '\n')
		}
		;
		var Ecb = nub(kHb, 'StackTracePrintStream', 578);
		whb(232, 1, {
			799: 1,
			232: 1
		}, Yhb);
		_.ub = function Zhb(a) {
			if (!Z2(a, 232)) {
				return false
			}
			return jvb(this.a, a.a)
		}
		;
		_.wb = function $hb() {
			return nCb(this.a)
		}
		;
		_.xb = function _hb() {
			return 'safe: "' + this.a + '"'
		}
		;
		var Fcb = nub('com.google.gwt.safehtml.shared', 'SafeUriString', 232);
		var bib = null, cib;
		var nib = false, oib;
		whb(496, 777, {}, vib);
		_.Bf = function wib(a) {
			null.pg()
		}
		;
		_.Cf = function xib() {
			return tib
		}
		;
		var tib;
		var Gcb = nub(nHb, 'Window/ClosingEvent', 496);
		var yib = '', zib;
		whb(274, 200, {
			31: 1
		}, Cib);
		var Hcb = nub(nHb, 'Window/WindowHandlers', 274);
		var Dib = false;
		var Iib, Jib, Kib, Lib;
		whb(88, 275, xFb, Zib);
		_.Ad = function ajb(a) {
			return Yib(this, a)
		}
		;
		var Icb = nub(dEb, 'AbsolutePanel', 88);
		whb(510, 276, bHb, ejb);
		var bjb, cjb;
		var Lcb = nub(dEb, 'AttachDetachException', 510);
		whb(511, 1, {}, gjb);
		_.Ff = function hjb(a) {
			a.Zb()
		}
		;
		var Jcb = nub(dEb, 'AttachDetachException/1', 511);
		whb(512, 1, {}, ijb);
		_.Ff = function jjb(a) {
			a._b()
		}
		;
		var Kcb = nub(dEb, 'AttachDetachException/2', 512);
		whb(743, 1, {}, ljb);
		var Ocb = nub(dEb, 'DirectionalTextHelper', 743);
		whb(322, 29, eEb, qjb);
		_.$b = function rjb(a) {
			dib();
			Eib(a.type) == AEb && !!this.a && (this.$[tHb] = '',
				undefined);
			Jg(this, a)
		}
		;
		_.ac = function sjb() {
			tjb(this.a, this)
		}
		;
		var Tcb = nub(dEb, 'Image', 322);
		whb(744, 1, {});
		_.a = null;
		var Rcb = nub(dEb, 'Image/State', 744);
		whb(745, 1, {}, vjb);
		var Qcb = nub(dEb, 'Image/State/1', 745);
		whb(323, 744, {}, xjb);
		var Scb = nub(dEb, 'Image/UnclippedState', 323);
		whb(318, 29, eEb);
		var Ucb = nub(dEb, 'LabelBase', 318);
		whb(103, 318, eEb, Ajb, Bjb);
		var Vcb = nub(dEb, 'Label', 103);
		whb(161, 88, uHb, Ljb);
		var Hjb, Ijb, Jjb;
		var $cb = nub(dEb, 'RootPanel', 161);
		whb(508, 1, {}, Pjb);
		_.Ff = function Qjb(a) {
			a.Yb() && a._b()
		}
		;
		var Xcb = nub(dEb, 'RootPanel/1', 508);
		whb(509, 1, {
			796: 1,
			144: 1
		}, Rjb);
		var Ycb = nub(dEb, 'RootPanel/2', 509);
		whb(507, 161, uHb, Sjb);
		var Zcb = nub(dEb, 'RootPanel/DefaultRootPanel', 507);
		whb(603, 1, dGb, Zjb);
		_.gd = function $jb() {
			return new bkb(this)
		}
		;
		_.c = 0;
		var bdb = nub(dEb, 'WidgetCollection', 603);
		whb(216, 1, {}, bkb);
		_.nd = function dkb() {
			return _jb(this)
		}
		;
		_.md = function ckb() {
			return this.b < this.c.c
		}
		;
		_.b = 0;
		var adb = nub(dEb, 'WidgetCollection/WidgetIterator', 216);
		whb(500, 1, {}, ekb);
		var gdb = nub(ZGb, 'SimpleEventBus/1', 500);
		whb(501, 1, {
			795: 1
		}, fkb);
		var hdb = nub(ZGb, 'SimpleEventBus/2', 501);
		whb(223, 1, {
			223: 1
		}, jkb);
		_.a = null;
		_.c = 0;
		_.d = 0;
		_.e = 0;
		_.g = 0;
		_.i = 0;
		_.o = 0;
		var kdb = nub(sDb, 'ChunkView', 223);
		var pdb = pub(OCb, 'BoundedChunk');
		whb(629, 16, ODb, nkb);
		_.ye = function qkb(a, b) {
			var c, d, e;
			return b.Vc('Chunk'),
				c = b._c(null),
				d = Dkb(this.rb, b),
				e = Wz(this.rb, d),
				Rkb(e, this.rb, c),
				kN(e.i, e, b, this.d),
				kN(e.f, e, b, this.b),
				b.Wc('Chunk'),
				e
		}
		;
		_.ze = function rkb(a, b, c) {
			b.Vc('ChunkDiff');
			iN(c.Kf(), c, b, this.d);
			iN(c.If(), c, b, this.b);
			b.Wc('ChunkDiff')
		}
		;
		_.Ae = function skb(a, b) {
			lkb(this, this.c, b);
			b.Cd()
		}
		;
		_.Hb = function okb(a) {
			var b, c;
			c = this.rb.W;
			Zl(this.c);
			Zl(this.a);
			a.$c(null);
			b = c.M;
			a.Vc('chunks');
			iN(b, null, a, this);
			a.Wc('chunks');
			mkb(this, this.c);
			_l(this.a, new jm(new Akb))
		}
		;
		_.Ib = function pkb(a) {}
		;
		var tdb = nub(OCb, 'BufferDecoder', 629);
		whb(301, 1, {}, ukb);
		_.ye = function vkb(a, b) {
			return tkb(this, a, b)
		}
		;
		_.ze = function wkb(a, b, c) {
			var d;
			d = a;
			b.Vc('Unit_diff');
			Wmb((Clb(),
				Blb), this.a.rb, d, c, b, true);
			(c.hb & 128) != 0 && ZN(c, a, b);
			b.Wc('Unit_diff')
		}
		;
		_.Ae = function xkb(a, b) {
			!!b && unb(this.a.rb.cb, b) && dm(this.a.c, b.Ge(), b)
		}
		;
		var qdb = nub(OCb, 'BufferDecoder/UnitDecoder', 301);
		whb(630, 1, {}, ykb);
		_.yd = function zkb(a) {
			kkb(this.a, a)
		}
		;
		var rdb = nub(OCb, 'BufferDecoder/lambda$0$Type', 630);
		whb(631, 1, {}, Akb);
		_.yd = function Bkb(a) {
			a.Te()
		}
		;
		var sdb = nub(OCb, 'BufferDecoder/lambda$1$Type', 631);
		whb(132, 15, {
			791: 1,
			132: 1,
			9: 1,
			6: 1,
			8: 1,
			15: 1,
			18: 1
		}, Skb);
		_.re = function Wkb() {
			return Nkb
		}
		;
		_.Ce = function Xkb() {
			return this.fb.d
		}
		;
		_.Ge = function $kb() {
			return this.kb
		}
		;
		_.Qe = function alb() {
			return !!this.Y
		}
		;
		_.Gf = function Tkb() {
			Pkb(this)
		}
		;
		_.Hf = function Ukb() {
			this.i = (rnb(),
				rnb(),
				qnb);
			this.f = (null,
				qnb)
		}
		;
		_.If = function Vkb() {
			return this.f
		}
		;
		_.Jf = function Ykb() {
			return this.g
		}
		;
		_.Oe = function Zkb() {
			return 0
		}
		;
		_.Kf = function _kb() {
			return this.i
		}
		;
		_.Re = function blb(a, b) {
			this.Gf();
			VN(this, a, b)
		}
		;
		_.Cd = function clb() {
			this.Hf();
			YN(this)
		}
		;
		_.Se = function dlb() {
			this.hb = 0;
			this.X.length > 0 && (this.X.length = 0,
				undefined);
			tnb(this.i);
			tnb(this.f)
		}
		;
		var Nkb;
		var ydb = nub(OCb, 'FreeChunk', 132);
		whb(227, 132, {
			753: 1,
			227: 1,
			791: 1,
			132: 1,
			9: 1,
			6: 1,
			8: 1,
			235: 1,
			15: 1,
			18: 1
		}, rlb);
		_.Gf = function slb() {
			Pkb(this);
			this.a = j2(Tdb, PCb, 15, 128, 0, 1)
		}
		;
		_.Hf = function tlb() {
			this.i = (rnb(),
				rnb(),
				qnb);
			this.f = (null,
				qnb);
			this.a = null;
			this.e = null;
			this.c = null
		}
		;
		_.Ce = function ulb() {
			return this.b
		}
		;
		_.Ee = function vlb() {
			return (this.g.b << 3) + 4
		}
		;
		_.Fe = function wlb() {
			return (this.g.c << 3) + 4
		}
		;
		var vdb = nub(OCb, 'Chunk', 227);
		whb(647, 90, dGb, xlb);
		var udb = nub(OCb, 'ChunkList', 647);
		var ylb, zlb, Alb, Blb;
		whb(65, 10, {
			65: 1,
			3: 1,
			12: 1,
			10: 1
		}, Nlb);
		_.a = 0;
		var Dlb, Elb, Flb, Glb, Hlb, Ilb, Jlb, Klb, Llb;
		var wdb = oub(OCb, 'EncoderState', 65, Plb);
		whb(461, 14, AGb, Qlb);
		_.ue = function Rlb() {
			return new Skb
		}
		;
		var xdb = nub(OCb, 'FreeChunk/1', 461);
		whb(774, 1, vHb);
		_.Xd = function Slb(a, b) {
			throw dhb(new Fvb)
		}
		;
		_.Yd = function Tlb() {}
		;
		_.Zd = function Ulb(a) {}
		;
		var Seb = nub($Fb, 'SavableStub', 774);
		whb(775, 774, vHb);
		_.ce = function Vlb(a) {}
		;
		var Meb = nub($Fb, 'SavableContainerStub', 775);
		whb(483, 775, vHb, Wlb);
		_.be = function Xlb() {
			return this.a
		}
		;
		var Bdb = nub(OCb, 'GameState/1', 483);
		whb(606, 1, {}, gmb);
		var Fdb = nub(OCb, 'Pipeline', 606);
		whb(655, 1, {}, kmb);
		_.a = false;
		var hmb;
		var Idb = nub(OCb, 'PriorityUpdater', 655);
		whb(656, 1, GGb, lmb);
		_.mf = function mmb(a, b) {
			return a.Ge() - b.Ge()
		}
		;
		_.ub = function nmb(a) {
			return this === a
		}
		;
		var Hdb = nub(OCb, 'PriorityUpdater/1', 656);
		whb(375, 1, {}, omb);
		_.nf = function pmb(a) {
			XU(this.a, this.b, a)
		}
		;
		var Jdb = nub(OCb, 'TerrainModel/lambda$0$Type', 375);
		whb(654, 1, {}, rmb);
		_.a = 0;
		_.c = 0;
		var Mdb = nub(OCb, 'Ticker', 654);
		whb(300, 1, fFb, vmb);
		_.wd = function wmb(a) {
			tmb(this, a)
		}
		;
		_.xd = function xmb(a) {
			umb(this, a)
		}
		;
		var Odb = nub(OCb, 'UnitListenerList', 300);
		whb(62, 40, UFb, ymb);
		var Pdb = nub(OCb, 'UnitModel/FieldAccessException', 62);
		whb(264, 15, wGb, Bmb);
		_.re = function Cmb() {
			return zmb
		}
		;
		var zmb;
		var Sdb = nub(OCb, 'UnitStub', 264);
		whb(462, 14, AGb, Dmb);
		_.ue = function Emb() {
			return new Bmb
		}
		;
		var Rdb = nub(OCb, 'UnitStub/1', 462);
		whb(281, 1, {}, Hmb);
		_.a = 0;
		_.b = 0;
		_.d = 0;
		_.e = 0;
		_.f = -1;
		_.g = 0;
		_.i = 0;
		_.j = 0;
		_.k = 0;
		_.n = 0;
		_.o = false;
		_.p = false;
		var Udb = nub(OCb, 'VisionOptions', 281);
		whb(265, 44, iGb, Kmb, Lmb);
		_.re = function Mmb() {
			return Imb
		}
		;
		_.ve = function Nmb(a, b) {
			dI(this, b);
			Gmb(this.a, b)
		}
		;
		var Imb;
		var Wdb = nub(OCb, 'VisionOrder', 265);
		whb(465, 47, fGb, Omb);
		_.ue = function Pmb() {
			return new Kmb
		}
		;
		var Vdb = nub(OCb, 'VisionOrder/1', 465);
		whb(186, 1, {});
		var Xdb = nub(gGb, 'BuilderSet', 186);
		whb(398, 186, {}, Tmb);
		var $db = nub(gGb, 'EventFactory', 398);
		whb(409, 186, {}, Umb);
		var aeb = nub(gGb, 'OrderFactory', 409);
		whb(396, 186, {}, Xmb);
		var ceb = nub(gGb, 'UnitFactory', 396);
		whb(196, 1, {
			143: 1,
			196: 1,
			24: 1
		}, bnb);
		_.wd = function cnb(a) {
			Zmb(this, a)
		}
		;
		_.xd = function dnb(a) {
			$mb(this, a)
		}
		;
		_.gd = function enb() {
			return Xl(this.a)
		}
		;
		_.c = 0;
		var deb = nub(gGb, 'UnitTracker', 196);
		whb(593, 1, {}, fnb);
		_.md = function gnb() {
			while (this.b < this.a.length && this.a[this.b] == null)
				++this.b;
			return this.b < this.a.length
		}
		;
		_.nd = function hnb() {
			return this.a[this.b++]
		}
		;
		_.b = 0;
		var eeb = nub(aEb, 'LazyList/SkipNullIterator', 593);
		whb(602, 1, wHb, inb);
		_.Lf = function jnb() {
			return null
		}
		;
		_.Mf = function knb(a) {
			return null
		}
		;
		_.Nf = function lnb(a, b) {
			return null
		}
		;
		_.kd = function mnb() {
			return 0
		}
		;
		var heb = nub(aEb, 'MapStub', 602);
		whb(697, 1, {}, pnb);
		var jeb = nub(aEb, 'Pool', 697);
		whb(162, 90, dGb, wnb);
		_.Of = function xnb(a) {
			return a.ab
		}
		;
		_.Pf = function ynb(a) {
			return a._
		}
		;
		_.xe = function znb(a) {
			this.Sf(this.e[a], null);
			setObjectParam(this.e, a, null);
			this.g = true
		}
		;
		_.Qf = function Anb(a) {
			vnb(this, a)
		}
		;
		_.Rf = function Bnb(a, b) {
			a.ab = b
		}
		;
		_.Sf = function Cnb(a, b) {
			a._ = b
		}
		;
		var qnb;
		var neb = nub(aEb, 'UnitList', 162);
		whb(607, 162, dGb, Inb);
		_.Of = function Jnb(a) {
			return a.Z
		}
		;
		_.Pf = function Knb(a) {
			return a.$
		}
		;
		_.Qf = function Lnb(a) {
			Hnb(this, a)
		}
		;
		_.Rf = function Mnb(a, b) {
			a.Z = b
		}
		;
		_.Sf = function Nnb(a, b) {
			a.$ = b
		}
		;
		var keb = nub(aEb, 'UnitListGlobal', 607);
		whb(639, 1, {}, Tnb);
		var meb = nub(aEb, 'UnitListPlayer', 639);
		whb(640, 1, {}, Unb);
		_.ld = function Vnb(a, b) {
			Rnb(this.a, a)
		}
		;
		var leb = nub(aEb, 'UnitListPlayer/lambda$0$Type', 640);
		whb(696, 1, {});
		_.c = 0;
		var qeb = nub(yHb, 'Curve', 696);
		whb(140, 696, {}, Znb);
		var reb = nub(yHb, 'FloatCurve', 140);
		whb(324, 696, {}, gob);
		var seb = nub(yHb, 'IntCurve', 324);
		whb(179, 40, UFb, hob);
		var teb = nub(DEb, 'BitBuffer/BufferOverflowException', 179);
		whb(52, 40, UFb, iob);
		var ueb = nub(DEb, 'BitBuffer/BufferUnderflowException', 52);
		whb(242, 40, UFb, job);
		var veb = nub(DEb, 'BitBuffer/StringTooBigException', 242);
		whb(207, 206, {
			206: 1
		}, rob);
		_.Vc = function sob(a) {}
		;
		_.Wc = function tob(a) {}
		;
		_.Xc = function uob() {
			if (this.d >= this.c)
				throw dhb(new iob);
			return this.a[this.d++]
		}
		;
		_.Yc = function vob(a, b) {
			var c, d;
			if (!this.e) {
				throw dhb(new Iub)
			}
			if (this.d + a.length > this.c) {
				throw dhb(new iob)
			}
			for (c = 0,
				     d = this.d; c < a.length; ++c,
				     d++)
				a[c] = this.a[d];
			this.d += a.length
		}
		;
		_.Zc = function wob(a, b) {
			var c, d;
			if (!this.e) {
				throw dhb(new Iub)
			}
			if (this.d + a.length > this.c) {
				throw dhb(new iob)
			}
			for (c = 0,
				     d = this.d; c < a.length; ++c,
				     d++)
				a[c] = this.a[d] & 255;
			this.d += a.length
		}
		;
		_.$c = function xob(a) {
			var b;
			if (!this.e)
				throw dhb(new Iub);
			if (this.d + 4 > this.c)
				throw dhb(new iob);
			b = this.a[this.d++] & 255;
			b |= (this.a[this.d++] & 255) << 8;
			b |= (this.a[this.d++] & 255) << 16;
			b |= (this.a[this.d++] & 255) << 24;
			return b
		}
		;
		_._c = function yob(a) {
			var b;
			if (!this.e)
				throw dhb(new Iub);
			if (this.d + 2 > this.c)
				throw dhb(new iob);
			b = this.a[this.d++] & 255;
			b |= (this.a[this.d++] & 255) << 8;
			return b
		}
		;
		_.ad = function zob(a) {
			if (!this.e)
				throw dhb(new Iub);
			if (this.d >= this.c)
				throw dhb(new iob);
			return this.a[this.d++] & 255
		}
		;
		_.bd = function Aob(a, b) {
			var c, d;
			if (this.e) {
				throw dhb(new Iub)
			}
			kob(this, a.length);
			for (c = 0,
				     d = this.d; c < a.length; ++c,
				     d++)
				this.a[d] = a[c];
			this.d += a.length;
			this.c = this.d
		}
		;
		_.cd = function Bob(a, b) {
			var c, d;
			if (this.e) {
				throw dhb(new Iub)
			}
			kob(this, a.length);
			for (c = 0,
				     d = this.d; c < a.length; ++c,
				     d++)
				this.a[d] = a[c] << 24 >> 24;
			this.d += a.length;
			this.c = this.d
		}
		;
		_.dd = function Cob(a, b) {
			mob(this, a)
		}
		;
		_.ed = function Dob(a, b) {
			nob(this, a)
		}
		;
		_.fd = function Eob(a, b) {
			oob(this, a)
		}
		;
		_.b = 0;
		_.c = 0;
		_.d = 0;
		_.e = false;
		var xeb = nub(DEb, 'HeapBitBuffer', 207);
		whb(505, 1, {}, Job);
		_.b = 0;
		var yeb = nub(DEb, 'ReorderingBufferQueue', 505);
		whb(597, 1, vHb);
		_.Xd = function Nob(a, b) {
			return Mob(this, a, b)
		}
		;
		_.Yd = function Oob() {}
		;
		_.Zd = function Pob(a) {}
		;
		_.f = -1;
		_.g = 0;
		_.i = 0;
		_.j = 0;
		_.o = -1;
		_.p = 0;
		_.q = 0;
		var Geb = nub(AHb, zHb, 597);
		whb(214, 597, {
			214: 1,
			41: 1
		}, epb);
		var zeb = nub(AHb, 'ChunkGrid', 214);
		whb(166, 1, {
			166: 1,
			12: 1
		}, hpb);
		_.Ob = function ipb(a) {
			return fpb(this, a)
		}
		;
		_.ub = function jpb(a) {
			var b;
			if (a == null)
				return false;
			if (a === this)
				return true;
			if (Z2(a, 166)) {
				b = a;
				return b.b == this.b && b.c == this.c && b.a == this.a
			}
			return false
		}
		;
		_.wb = function kpb() {
			return this.a.o + (this.b << 8) + (this.c << 16)
		}
		;
		_.xb = function lpb() {
			return '(' + this.b + ', ' + this.c + ')'
		}
		;
		_.b = 0;
		_.c = 0;
		var Aeb = nub(AHb, 'ChunkPosition', 166);
		whb(73, 1, {
			73: 1
		});
		_.ub = function vpb(a) {
			return mpb(this, a)
		}
		;
		_.xb = function wpb() {
			return tpb(this)
		}
		;
		_.e = 0;
		_.f = 0;
		var Ieb = nub(AHb, 'Point', 73);
		whb(112, 73, {
			112: 1,
			73: 1,
			12: 1
		}, zpb);
		_.Ob = function Apb(a) {
			return xpb(this, a)
		}
		;
		_.Tf = function Bpb() {
			return -1
		}
		;
		_.Uf = function Cpb() {
			return 0
		}
		;
		_.wb = function Dpb() {
			return this.e * 239 + this.f * 177777 + this.d.o
		}
		;
		var Beb = nub(AHb, 'ConstPoint', 112);
		whb(163, 1, {}, Epb, Gpb);
		_.a = 0;
		_.b = 0;
		_.c = 0;
		var Ceb = nub(AHb, 'GameMap', 163);
		whb(165, 137, {}, Ppb);
		_.Ub = function Qpb() {
			return new yqb
		}
		;
		_.a = 0;
		var Eeb = nub(AHb, 'LocalAtlas', 165);
		whb(628, 137, {}, Tpb);
		_.Ub = function Upb() {
			return new iqb
		}
		;
		var Deb = nub(AHb, 'LocalAtlas/MutablePointPool', 628);
		whb(22, 73, {
			22: 1,
			73: 1
		}, iqb, jqb, kqb);
		_.Tf = function lqb() {
			return this.b
		}
		;
		_.Uf = function mqb() {
			return this.c
		}
		;
		_.wb = function nqb() {
			return Zpb(this)
		}
		;
		_.a = false;
		_.b = 0;
		_.c = 0;
		var Feb = nub(AHb, 'MutablePoint', 22);
		whb(138, 1, {
			138: 1
		}, sqb);
		_.ub = function tqb(a) {
			var b;
			if (a == null)
				return false;
			if (Z2(a, 138)) {
				b = a;
				return b.j == this.j && this.k == b.k && this.o == b.o && this.n == b.n && this.p == b.p
			}
			return false
		}
		;
		_.j = null;
		_.k = 0;
		_.n = 0;
		_.o = 0;
		_.p = 0;
		var Jeb = nub(AHb, 'Rect', 138);
		whb(226, 138, {
			226: 1,
			138: 1
		}, yqb);
		_.b = null;
		_.c = null;
		_.d = 0;
		_.e = 0;
		_.f = 0;
		_.g = 0;
		var Heb = nub(AHb, 'PlaneViewRect', 226);
		var zqb, Aqb, Bqb, Cqb, Dqb, Eqb, Fqb;
		whb(46, 1, {
			46: 1
		}, lrb);
		_.ub = function nrb(a) {
			var b;
			if (!Z2(a, 46))
				return false;
			b = a;
			if (!this.c != !b.c)
				return false;
			return this.f == b.f && this.g == b.g && (this.c == b.c || this.c.o == b.c.o) && this.d == b.d
		}
		;
		_.b = 0;
		_.d = 0;
		_.e = 0;
		_.f = 0;
		_.g = 0;
		var Leb = nub(AHb, 'Transform', 46);
		whb(114, 46, {
			46: 1
		}, srb, trb);
		_.a = 0;
		var Keb = nub(AHb, 'TransformWithHeading', 114);
		whb(706, 775, aGb, xrb);
		_.be = function yrb() {
			return this.c.j
		}
		;
		_.gd = function zrb() {
			return Xl(this.a)
		}
		;
		_.Xd = function Arb(a, b) {
			return vrb(this, a, b)
		}
		;
		_.Zd = function Brb(a) {
			this.c = a
		}
		;
		_.b = 0;
		_.c = null;
		_.d = null;
		var Neb = nub($Fb, 'SavableIdMap', 706);
		whb(571, 1, {}, Crb);
		_.nd = function Erb() {
			return this.c.d[this.b++]
		}
		;
		_.md = function Drb() {
			while (this.b < this.a && this.c.d[this.b] == null)
				++this.b;
			return this.b < this.a
		}
		;
		_.a = 0;
		_.b = 0;
		var Oeb = nub($Fb, 'SavableList/SkipNullIterator', 571);
		whb(395, 1, {}, Grb);
		_.$d = function Hrb(a, b, c) {
			var d;
			return d = Ak(b, this.a.length - 1),
				this.a[d].me(a, b)
		}
		;
		var Reb = nub($Fb, 'SavablePolySerializer', 395);
		whb(707, 1, vHb, Mrb);
		_.Xd = function Nrb(a, b) {
			return Lrb(this, a, b)
		}
		;
		_.Yd = function Orb() {
			if (this.b) {
				Dxb(this.c);
				this.b = false
			}
		}
		;
		_.Zd = function Prb(a) {}
		;
		_.b = false;
		_.d = 0;
		var Ueb = nub($Fb, 'SavableUintSet', 707);
		whb(708, 1, {}, Qrb);
		_.nf = function Rrb(a) {
			Krb(this.a, this.b, a)
		}
		;
		var Teb = nub($Fb, 'SavableUintSet/lambda$1$Type', 708);
		whb(463, 15, wGb, Urb);
		_.re = function Xrb() {
			return Srb
		}
		;
		_.Hb = function Vrb(a) {}
		;
		_.Ib = function Wrb(a) {}
		;
		_.Oe = function Yrb() {
			return 1
		}
		;
		var Srb;
		var Web = nub(EGb, 'AreaUnit', 463);
		whb(464, 14, AGb, Zrb);
		_.ue = function $rb() {
			return new Urb
		}
		;
		var Veb = nub(EGb, 'AreaUnit/1', 464);
		whb(650, 1, {}, fsb);
		_.b = 0;
		_.c = 0;
		var $eb = nub(EGb, 'GlobalTileMap', 650);
		whb(652, 1, fFb, gsb);
		_.wd = function hsb(a) {
			_rb(this.a, a)
		}
		;
		_.xd = function isb(a) {
			em(this.a.a, a.kb)
		}
		;
		var Xeb = nub(EGb, 'GlobalTileMap/1', 652);
		whb(312, 1, {
			312: 1
		}, jsb);
		var Yeb = nub(EGb, 'GlobalTileMap/Entry', 312);
		whb(651, 1, {}, ksb);
		_.yd = function lsb(a) {
			_rb(this.a, a)
		}
		;
		var Zeb = nub(EGb, 'GlobalTileMap/lambda$0$Type', 651);
		whb(638, 1, {}, vsb);
		_.nf = function wsb(a) {
			qsb(this.a, this.b, a)
		}
		;
		var afb = nub(EHb, 'BitArrays/lambda$1$Type', 638);
		whb(285, 1, {});
		_.a = 0;
		_.b = 0;
		var Gsb, Hsb, Isb = 0;
		var Cgb = nub(FGb, 'Random', 285);
		whb(205, 285, {}, Osb, Psb);
		var bfb = nub(EHb, 'MyRandom', 205);
		var cfb = pub(HHb, 'CanvasElement');
		var dfb = pub(HHb, 'CanvasPattern');
		var Usb = false
			, Vsb = false;
		whb(338, 1, {
			793: 1
		}, ftb);
		_.d = false;
		var efb = nub('elemental.js.dom', 'JsElementalMixinBase/Remover', 338);
		whb(355, 1, {}, Xtb);
		_.Vf = function Ytb() {
			var a;
			Fy((a = this.a.a.B,
				Date.now(),
				a))
		}
		;
		var ffb = nub(HDb, 'Timer/2', 355);
		whb(237, 1, {
			331: 1
		});
		_.xb = function $tb() {
			return this.a
		}
		;
		var kfb = nub(LCb, 'AbstractStringBuilder', 237);
		whb(356, 40, UFb, _tb);
		var lfb = nub(LCb, 'ArithmeticException', 356);
		whb(74, 40, UFb, aub, bub);
		var tfb = nub(LCb, 'IndexOutOfBoundsException', 74);
		whb(747, 74, UFb, cub);
		var mfb = nub(LCb, 'ArrayIndexOutOfBoundsException', 747);
		whb(175, 1, {
			3: 1,
			175: 1
		});
		var zfb = nub(LCb, 'Number', 175);
		U2 = {
			3: 1,
			12: 1,
			339: 1,
			175: 1
		};
		var ofb = nub(LCb, 'Double', 339);
		whb(43, 40, UFb, Gub, Hub);
		var rfb = nub(LCb, 'IllegalArgumentException', 43);
		whb(28, 40, UFb, Iub, Jub);
		var sfb = nub(LCb, 'IllegalStateException', 28);
		whb(120, 175, {
			3: 1,
			12: 1,
			120: 1,
			175: 1
		}, Kub);
		_.Ob = function Mub(a) {
			return Lub(this.a, a.a)
		}
		;
		_.ub = function Nub(a) {
			return Z2(a, 120) && a.a == this.a
		}
		;
		_.wb = function Oub() {
			return this.a
		}
		;
		_.xb = function Rub() {
			return '' + this.a
		}
		;
		_.a = 0;
		var ufb = nub(LCb, 'Integer', 120);
		var Tub;
		whb(730, 40, UFb, Zub);
		var wfb = nub(LCb, 'NegativeArraySizeException', 730);
		whb(106, 176, UFb, $ub, _ub);
		_.Ud = function avb(a) {
			return new $wnd.TypeError(a)
		}
		;
		var xfb = nub(LCb, 'NullPointerException', 106);
		whb(121, 43, UFb, bvb);
		var yfb = nub(LCb, 'NumberFormatException', 121);
		whb(83, 1, {
			3: 1,
			83: 1
		}, cvb);
		_.ub = function dvb(a) {
			var b;
			if (Z2(a, 83)) {
				b = a;
				return this.c == b.c && yAb(this.d, b.d) && yAb(this.a, b.a) && yAb(this.b, b.b)
			}
			return false
		}
		;
		_.wb = function evb() {
			return Ixb(m2(f2(Afb, 1), PCb, 1, 5, [Sub(this.c), this.a, this.d, this.b]))
		}
		;
		_.xb = function fvb() {
			return this.a + '.' + this.d + '(' + (this.b != null ? this.b : 'Unknown Source') + (this.c >= 0 ? ':' + this.c : '') + ')'
		}
		;
		_.c = 0;
		var Cfb = nub(LCb, 'StackTraceElement', 83);
		V2 = {
			3: 1,
			331: 1,
			12: 1,
			2: 1
		};
		var Ffb = nub(LCb, 'String', 2);
		whb(84, 237, {
			331: 1
		}, Avb, Bvb);
		var Dfb = nub(LCb, 'StringBuilder', 84);
		whb(347, 74, UFb, Cvb);
		var Efb = nub(LCb, 'StringIndexOutOfBoundsException', 347);
		whb(914, 1, {});
		var Dvb;
		whb(61, 40, UFb, Fvb, Gvb);
		var Hfb = nub(LCb, 'UnsupportedOperationException', 61);
		whb(105, 1, JHb);
		_.Ob = function Hvb(a) {
			return ivb(this.a, a.a)
		}
		;
		_.ub = function Ivb(a) {
			var b;
			if (a === this) {
				return true
			}
			if (!Z2(a, 105)) {
				return false
			}
			b = a;
			return jvb(this.a, b.a)
		}
		;
		_.wb = function Jvb() {
			return nCb(this.a)
		}
		;
		_.xb = function Kvb() {
			return this.a
		}
		;
		var Ifb = nub('java.nio.charset', 'Charset', 105);
		whb(68, 1, {
			24: 1,
			68: 1,
			55: 1
		});
		_.hd = function Ovb(a) {
			throw dhb(new Gvb('Add not supported on this collection'))
		}
		;
		_.ag = function Pvb(a) {
			return Lvb(this, a)
		}
		;
		_.jd = function Qvb() {
			return this.kd() == 0
		}
		;
		_.xb = function Rvb() {
			return Nvb(this)
		}
		;
		var Jfb = nub(FGb, 'AbstractCollection', 68);
		whb(780, 1, wHb);
		_.ub = function Vvb(a) {
			var b, c, d;
			if (a === this) {
				return true
			}
			if (!Z2(a, 170)) {
				return false
			}
			d = a;
			if (this.a.c + this.b.c != d.kd()) {
				return false
			}
			for (c = Yl(d.Lf()); On(c); ) {
				b = Pn(c);
				if (!Svb(this, b)) {
					return false
				}
			}
			return true
		}
		;
		_.Mf = function Wvb(a) {
			return Xvb(Tvb(this, a))
		}
		;
		_.wb = function Yvb() {
			return Rxb(new qwb(this))
		}
		;
		_.Nf = function Zvb(a, b) {
			throw dhb(new Gvb('Put not supported on this map'))
		}
		;
		_.kd = function $vb() {
			return iwb((new qwb(this)).a)
		}
		;
		_.xb = function _vb() {
			var a, b, c;
			c = new BAb('{','}');
			for (b = new wwb((new qwb(this)).a); b.b; ) {
				a = vwb(b);
				AAb(c, Uvb(this, a.ig()) + '=' + Uvb(this, a.jg()))
			}
			return !c.a ? c.c : c.e.length == 0 ? c.a.a : c.a.a + ('' + c.e)
		}
		;
		var Vfb = nub(FGb, 'AbstractMap', 780);
		whb(504, 780, wHb);
		_.Lf = function jwb() {
			return new qwb(this)
		}
		;
		_.Mf = function kwb(a) {
			return bwb(this, a)
		}
		;
		_.Nf = function lwb(a, b) {
			return fwb(this, a, b)
		}
		;
		_.kd = function mwb() {
			return iwb(this)
		}
		;
		var Mfb = nub(FGb, 'AbstractHashMap', 504);
		whb(779, 68, LHb);
		_.ub = function nwb(a) {
			var b;
			if (a === this) {
				return true
			}
			if (!Z2(a, 145)) {
				return false
			}
			b = a;
			if (im(b) != this.kd()) {
				return false
			}
			return Mvb(this, b)
		}
		;
		_.wb = function owb() {
			return Rxb(this)
		}
		;
		var Xfb = nub(FGb, 'AbstractSet', 779);
		whb(79, 779, LHb, qwb);
		_.ag = function rwb(a) {
			return pwb(this, a)
		}
		;
		_.gd = function swb() {
			return new wwb(this.a)
		}
		;
		_.kd = function twb() {
			return iwb(this.a)
		}
		;
		var Lfb = nub(FGb, 'AbstractHashMap/EntrySet', 79);
		whb(97, 1, {}, wwb);
		_.nd = function ywb() {
			return vwb(this)
		}
		;
		_.md = function xwb() {
			return this.b
		}
		;
		_.b = false;
		var Kfb = nub(FGb, 'AbstractHashMap/EntrySetIterator', 97);
		whb(131, 68, MHb);
		_.bg = function zwb(a, b) {
			throw dhb(new Gvb('Add not supported on this list'))
		}
		;
		_.hd = function Awb(a) {
			this.bg(this.kd(), a);
			return true
		}
		;
		_.ub = function Bwb(a) {
			var b, c, d, e, f;
			if (a === this) {
				return true
			}
			if (!Z2(a, 116)) {
				return false
			}
			f = a;
			if (this.kd() != im(f)) {
				return false
			}
			e = Yl(f);
			for (c = this.gd(); On(c); ) {
				b = Pn(c);
				d = Pn(e);
				if (!(b3(b) === b3(d) || b != null && L(b, d))) {
					return false
				}
			}
			return true
		}
		;
		_.wb = function Cwb() {
			return Sxb(this)
		}
		;
		_.gd = function Dwb() {
			return new Gwb(this)
		}
		;
		_.dg = function Ewb() {
			return this.eg(0)
		}
		;
		_.eg = function Fwb(a) {
			return new Jwb(this,a)
		}
		;
		var Pfb = nub(FGb, 'AbstractList', 131);
		whb(263, 1, {}, Gwb);
		_.md = function Hwb() {
			return this.b < this.c.kd()
		}
		;
		_.nd = function Iwb() {
			ZBb(this.b < this.c.kd());
			return this.c.cg(this.b++)
		}
		;
		_.b = 0;
		var Nfb = nub(FGb, 'AbstractList/IteratorImpl', 263);
		whb(451, 263, {}, Jwb);
		_.fg = function Kwb(a) {
			this.a.bg(this.b, a);
			++this.b
		}
		;
		_.gg = function Lwb() {
			return this.b > 0
		}
		;
		_.hg = function Mwb() {
			ZBb(this.b > 0);
			return this.a.cg(--this.b)
		}
		;
		var Ofb = nub(FGb, 'AbstractList/ListIteratorImpl', 451);
		whb(202, 779, LHb, Nwb);
		_.ag = function Owb(a) {
			return awb(this.a, a)
		}
		;
		_.gd = function Pwb() {
			var a;
			return a = new wwb((new qwb(this.a)).a),
				new Rwb(a)
		}
		;
		_.kd = function Qwb() {
			return iwb(this.a)
		}
		;
		var Rfb = nub(FGb, 'AbstractMap/1', 202);
		whb(160, 1, {}, Rwb);
		_.md = function Swb() {
			return this.a.b
		}
		;
		_.nd = function Twb() {
			var a;
			return a = vwb(this.a),
				a.ig()
		}
		;
		var Qfb = nub(FGb, 'AbstractMap/1/1', 160);
		whb(502, 1, NHb);
		_.ub = function Uwb(a) {
			var b;
			if (!Z2(a, 118)) {
				return false
			}
			b = a;
			return yAb(this.a, b.ig()) && yAb(this.b, b.jg())
		}
		;
		_.ig = function Vwb() {
			return this.a
		}
		;
		_.jg = function Wwb() {
			return this.b
		}
		;
		_.wb = function Xwb() {
			return zAb(this.a) ^ zAb(this.b)
		}
		;
		_.kg = function Ywb(a) {
			var b;
			b = this.b;
			this.b = a;
			return b
		}
		;
		_.xb = function Zwb() {
			return this.a + '=' + this.b
		}
		;
		var Sfb = nub(FGb, 'AbstractMap/AbstractEntry', 502);
		whb(503, 502, NHb, $wb);
		var Tfb = nub(FGb, 'AbstractMap/SimpleEntry', 503);
		whb(784, 1, NHb);
		_.ub = function _wb(a) {
			var b;
			if (!Z2(a, 118)) {
				return false
			}
			b = a;
			return yAb(this.b.value[0], b.ig()) && yAb(Wzb(this), b.jg())
		}
		;
		_.wb = function axb() {
			return zAb(this.b.value[0]) ^ zAb(Wzb(this))
		}
		;
		_.xb = function bxb() {
			return this.b.value[0] + '=' + Wzb(this)
		}
		;
		var Ufb = nub(FGb, 'AbstractMapEntry', 784);
		whb(785, 131, MHb);
		_.bg = function cxb(a, b) {
			var c;
			c = this.eg(a);
			c.fg(b)
		}
		;
		_.cg = function dxb(b) {
			var c;
			c = this.eg(b);
			try {
				return Pn(c)
			} catch (a) {
				a = chb(a);
				if (Z2(a, 99)) {
					throw dhb(new bub("Can't get element " + b))
				} else
					throw dhb(a)
			}
		}
		;
		_.gd = function exb() {
			return this.eg(0)
		}
		;
		var Wfb = nub(FGb, 'AbstractSequentialList', 785);
		whb(23, 131, {
			3: 1,
			4: 1,
			24: 1,
			68: 1,
			131: 1,
			23: 1,
			55: 1,
			116: 1,
			328: 1
		}, oxb);
		_.bg = function pxb(a, b) {
			fxb(this, a, b)
		}
		;
		_.hd = function qxb(a) {
			return gxb(this, a)
		}
		;
		_.ag = function rxb(a) {
			return jxb(this, a, 0) != -1
		}
		;
		_.cg = function sxb(a) {
			return ixb(this, a)
		}
		;
		_.jd = function txb() {
			return this.a.length == 0
		}
		;
		_.gd = function uxb() {
			return new xxb(this)
		}
		;
		_.kd = function vxb() {
			return this.a.length
		}
		;
		var Zfb = nub(FGb, 'ArrayList', 23);
		whb(78, 1, {}, xxb);
		_.md = function yxb() {
			return this.a < this.c.a.length
		}
		;
		_.nd = function zxb() {
			return wxb(this)
		}
		;
		_.a = 0;
		_.b = -1;
		var Yfb = nub(FGb, 'ArrayList/1', 78);
		var Pxb;
		whb(579, 131, {
			3: 1,
			24: 1,
			68: 1,
			131: 1,
			55: 1,
			116: 1,
			328: 1
		}, Uxb);
		_.ag = function Vxb(a) {
			return false
		}
		;
		_.cg = function Wxb(a) {
			$Bb(a, 0);
			return null
		}
		;
		_.gd = function Xxb() {
			return Qxb(),
				_xb(),
				$xb
		}
		;
		_.dg = function Yxb() {
			return Qxb(),
				_xb(),
				$xb
		}
		;
		_.kd = function Zxb() {
			return 0
		}
		;
		var _fb = nub(FGb, 'Collections/EmptyList', 579);
		whb(580, 1, {}, ayb);
		_.fg = function byb(a) {
			throw dhb(new Fvb)
		}
		;
		_.md = function cyb() {
			return false
		}
		;
		_.gg = function dyb() {
			return false
		}
		;
		_.nd = function eyb() {
			throw dhb(new xAb)
		}
		;
		_.hg = function fyb() {
			throw dhb(new xAb)
		}
		;
		var $xb;
		var $fb = nub(FGb, 'Collections/EmptyListIterator', 580);
		whb(287, 1, {
			24: 1,
			55: 1
		});
		_.hd = function gyb(a) {
			throw dhb(new Fvb)
		}
		;
		_.jd = function hyb() {
			return hm(this.b)
		}
		;
		_.gd = function iyb() {
			return new lyb(Yl(this.b))
		}
		;
		_.kd = function jyb() {
			return im(this.b)
		}
		;
		_.xb = function kyb() {
			return zhb(this.b)
		}
		;
		var bgb = nub(FGb, 'Collections/UnmodifiableCollection', 287);
		whb(289, 1, {}, lyb);
		_.md = function myb() {
			return On(this.b)
		}
		;
		_.nd = function nyb() {
			return Pn(this.b)
		}
		;
		var agb = nub(FGb, 'Collections/UnmodifiableCollectionIterator', 289);
		whb(288, 287, {
			24: 1,
			55: 1,
			116: 1
		}, oyb);
		_.ub = function pyb(a) {
			return L(this.a, a)
		}
		;
		_.cg = function qyb(a) {
			return this.a.cg(a)
		}
		;
		_.wb = function ryb() {
			return P(this.a)
		}
		;
		_.jd = function syb() {
			return hm(this.a)
		}
		;
		_.dg = function tyb() {
			return new vyb(this.a.eg(0))
		}
		;
		_.eg = function uyb(a) {
			return new vyb(this.a.eg(a))
		}
		;
		var dgb = nub(FGb, 'Collections/UnmodifiableList', 288);
		whb(290, 289, {}, vyb);
		_.fg = function wyb(a) {
			throw dhb(new Fvb)
		}
		;
		_.gg = function xyb() {
			return this.a.gg()
		}
		;
		_.hg = function yyb() {
			return this.a.hg()
		}
		;
		var cgb = nub(FGb, 'Collections/UnmodifiableListIterator', 290);
		whb(581, 1, wHb, zyb);
		_.Lf = function Ayb() {
			!this.a && (this.a = new Jyb(this.b.Lf()));
			return this.a
		}
		;
		_.ub = function Byb(a) {
			return L(this.b, a)
		}
		;
		_.Mf = function Cyb(a) {
			return this.b.Mf(a)
		}
		;
		_.wb = function Dyb() {
			return P(this.b)
		}
		;
		_.Nf = function Eyb(a, b) {
			throw dhb(new Fvb)
		}
		;
		_.kd = function Fyb() {
			return this.b.kd()
		}
		;
		_.xb = function Gyb() {
			return zhb(this.b)
		}
		;
		var hgb = nub(FGb, 'Collections/UnmodifiableMap', 581);
		whb(582, 287, OHb);
		_.ub = function Hyb(a) {
			return L(this.b, a)
		}
		;
		_.wb = function Iyb() {
			return P(this.b)
		}
		;
		var jgb = nub(FGb, 'Collections/UnmodifiableSet', 582);
		whb(583, 582, OHb, Jyb);
		_.gd = function Kyb() {
			var a;
			a = Yl(this.b);
			return new Lyb(a)
		}
		;
		var ggb = nub(FGb, 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 583);
		whb(586, 1, {}, Lyb);
		_.nd = function Nyb() {
			return new Oyb(Pn(this.a))
		}
		;
		_.md = function Myb() {
			return On(this.a)
		}
		;
		var egb = nub(FGb, 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 586);
		whb(584, 1, NHb, Oyb);
		_.ub = function Pyb(a) {
			return this.a.ub(a)
		}
		;
		_.ig = function Qyb() {
			return this.a.ig()
		}
		;
		_.jg = function Ryb() {
			return this.a.jg()
		}
		;
		_.wb = function Syb() {
			return this.a.wb()
		}
		;
		_.kg = function Tyb(a) {
			throw dhb(new Fvb)
		}
		;
		_.xb = function Uyb() {
			return zhb(this.a)
		}
		;
		var fgb = nub(FGb, 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 584);
		whb(585, 288, {
			24: 1,
			55: 1,
			116: 1,
			328: 1
		}, Vyb);
		var igb = nub(FGb, 'Collections/UnmodifiableRandomAccessList', 585);
		var Wyb;
		whb(709, 1, {
			3: 1,
			104: 1
		}, Yyb);
		_.mf = function Zyb(a, b) {
			return _Bb(a),
				Fub(a, (_Bb(b),
					b))
		}
		;
		_.ub = function $yb(a) {
			return this === a
		}
		;
		var lgb = nub(FGb, 'Comparators/NaturalOrderComparator', 709);
		whb(710, 40, UFb, bzb);
		var mgb = nub(FGb, 'ConcurrentModificationException', 710);
		whb(225, 1, {
			3: 1,
			4: 1,
			12: 1,
			225: 1
		}, dzb);
		_.Ob = function ezb(a) {
			return Vub(ihb(this.a.getTime()), ihb(a.a.getTime()))
		}
		;
		_.ub = function fzb(a) {
			return Z2(a, 225) && hhb(ihb(this.a.getTime()), ihb(a.a.getTime()))
		}
		;
		_.wb = function gzb() {
			var a;
			a = ihb(this.a.getTime());
			return mhb(ohb(a, ghb(I2(jhb(a) ? khb(a) : a, 32))))
		}
		;
		_.xb = function izb() {
			return czb(this)
		}
		;
		var ngb = nub(FGb, 'Date', 225);
		var jzb, kzb;
		whb(48, 504, {
			3: 1,
			4: 1,
			170: 1
		}, nzb);
		var ogb = nub(FGb, 'HashMap', 48);
		whb(208, 779, {
			3: 1,
			4: 1,
			24: 1,
			68: 1,
			55: 1,
			145: 1
		}, rzb);
		_.hd = function szb(a) {
			return ozb(this, a)
		}
		;
		_.ag = function tzb(a) {
			return pzb(this, a)
		}
		;
		_.jd = function uzb() {
			return iwb(this.a) == 0
		}
		;
		_.gd = function vzb() {
			var a;
			return a = new wwb((new qwb((new Nwb(this.a)).a)).a),
				new Rwb(a)
		}
		;
		_.kd = function wzb() {
			return iwb(this.a)
		}
		;
		var pgb = nub(FGb, 'HashSet', 208);
		whb(595, 1, dGb, Czb);
		_.gd = function Dzb() {
			return new Ezb(this)
		}
		;
		_.c = 0;
		var rgb = nub(FGb, 'InternalHashCodeMap', 595);
		whb(294, 1, {}, Ezb);
		_.nd = function Gzb() {
			return this.d = this.a[this.c++],
				this.d
		}
		;
		_.md = function Fzb() {
			var a;
			if (this.c < this.a.length) {
				return true
			}
			a = this.b.next();
			if (!a.done) {
				this.a = a.value[1];
				this.c = 0;
				return true
			}
			return false
		}
		;
		_.c = 0;
		_.d = null;
		var qgb = nub(FGb, 'InternalHashCodeMap/1', 294);
		var Hzb;
		whb(587, 1, dGb, Rzb);
		_.gd = function Szb() {
			return new Tzb(this)
		}
		;
		_.c = 0;
		_.d = 0;
		var ugb = nub(FGb, 'InternalStringMap', 587);
		whb(291, 1, {}, Tzb);
		_.nd = function Vzb() {
			return this.c = this.a,
				this.a = this.b.next(),
				new Xzb(this.d,this.c,this.d.d)
		}
		;
		_.md = function Uzb() {
			return !this.a.done
		}
		;
		var sgb = nub(FGb, 'InternalStringMap/1', 291);
		whb(588, 784, NHb, Xzb);
		_.ig = function Yzb() {
			return this.b.value[0]
		}
		;
		_.jg = function Zzb() {
			return Wzb(this)
		}
		;
		_.kg = function $zb(a) {
			return Pzb(this.a, this.b.value[0], a)
		}
		;
		_.c = 0;
		var tgb = nub(FGb, 'InternalStringMap/2', 588);
		whb(295, 785, {
			3: 1,
			4: 1,
			24: 1,
			68: 1,
			131: 1,
			55: 1,
			116: 1
		}, fAb);
		_.hd = function gAb(a) {
			return _zb(this, a)
		}
		;
		_.eg = function hAb(a) {
			var b, c;
			bCb(a, this.b);
			if (a >= this.b >> 1) {
				c = this.c;
				for (b = this.b; b > a; --b) {
					c = c.b
				}
			} else {
				c = this.a.a;
				for (b = 0; b < a; ++b) {
					c = c.a
				}
			}
			return new jAb(this,a,c)
		}
		;
		_.kd = function iAb() {
			return this.b
		}
		;
		_.b = 0;
		var xgb = nub(FGb, 'LinkedList', 295);
		whb(596, 1, {}, jAb);
		_.fg = function kAb(a) {
			aAb(this.d, a, this.b.b, this.b);
			++this.a;
			this.c = null
		}
		;
		_.md = function lAb() {
			return this.b != this.d.c
		}
		;
		_.gg = function mAb() {
			return this.b.b != this.d.a
		}
		;
		_.nd = function nAb() {
			ZBb(this.b != this.d.c);
			this.c = this.b;
			this.b = this.b.a;
			++this.a;
			return this.c.c
		}
		;
		_.hg = function oAb() {
			ZBb(this.b.b != this.d.a);
			this.c = this.b = this.b.b;
			--this.a;
			return this.c.c
		}
		;
		_.a = 0;
		_.c = null;
		var vgb = nub(FGb, 'LinkedList/ListIteratorImpl', 596);
		whb(213, 1, {}, pAb);
		var wgb = nub(FGb, 'LinkedList/Node', 213);
		whb(765, 1, {});
		var qAb, rAb;
		var Agb = nub(FGb, 'Locale', 765);
		whb(341, 765, {}, tAb);
		_.xb = function uAb() {
			return ''
		}
		;
		var ygb = nub(FGb, 'Locale/1', 341);
		whb(342, 765, {}, vAb);
		_.xb = function wAb() {
			return 'unknown'
		}
		;
		var zgb = nub(FGb, 'Locale/4', 342);
		whb(99, 40, {
			3: 1,
			25: 1,
			17: 1,
			99: 1
		}, xAb);
		var Bgb = nub(FGb, 'NoSuchElementException', 99);
		whb(238, 1, {}, BAb);
		_.xb = function CAb() {
			return !this.a ? this.c : this.e.length == 0 ? this.a.a : this.a.a + ('' + this.e)
		}
		;
		var Dgb = nub(FGb, 'StringJoiner', 238);
		whb(773, 1, RHb);
		_.Yf = function NAb() {
			return 'DUMMY'
		}
		;
		_.lg = function OAb() {
			return -1
		}
		;
		_.xb = function QAb() {
			return this.Yf()
		}
		;
		var DAb, EAb, FAb, GAb, HAb, IAb, JAb, KAb, LAb;
		var Pgb = nub(iHb, 'Level', 773);
		whb(452, 773, RHb, RAb);
		_.Yf = function SAb() {
			return 'ALL'
		}
		;
		_.lg = function TAb() {
			return WFb
		}
		;
		var Ggb = nub(iHb, 'Level/LevelAll', 452);
		whb(453, 773, RHb, UAb);
		_.Yf = function VAb() {
			return 'CONFIG'
		}
		;
		_.lg = function WAb() {
			return 700
		}
		;
		var Hgb = nub(iHb, 'Level/LevelConfig', 453);
		whb(454, 773, RHb, XAb);
		_.Yf = function YAb() {
			return 'FINE'
		}
		;
		_.lg = function ZAb() {
			return 500
		}
		;
		var Igb = nub(iHb, 'Level/LevelFine', 454);
		whb(455, 773, RHb, $Ab);
		_.Yf = function _Ab() {
			return 'FINER'
		}
		;
		_.lg = function aBb() {
			return 400
		}
		;
		var Jgb = nub(iHb, 'Level/LevelFiner', 455);
		whb(456, 773, RHb, bBb);
		_.Yf = function cBb() {
			return 'FINEST'
		}
		;
		_.lg = function dBb() {
			return 300
		}
		;
		var Kgb = nub(iHb, 'Level/LevelFinest', 456);
		whb(457, 773, RHb, eBb);
		_.Yf = function fBb() {
			return QHb
		}
		;
		_.lg = function gBb() {
			return 800
		}
		;
		var Lgb = nub(iHb, 'Level/LevelInfo', 457);
		whb(458, 773, RHb, hBb);
		_.Yf = function iBb() {
			return 'OFF'
		}
		;
		_.lg = function jBb() {
			return KCb
		}
		;
		var Mgb = nub(iHb, 'Level/LevelOff', 458);
		whb(459, 773, RHb, kBb);
		_.Yf = function lBb() {
			return 'SEVERE'
		}
		;
		_.lg = function mBb() {
			return GDb
		}
		;
		var Ngb = nub(iHb, 'Level/LevelSevere', 459);
		whb(460, 773, RHb, nBb);
		_.Yf = function oBb() {
			return 'WARNING'
		}
		;
		_.lg = function pBb() {
			return 900
		}
		;
		var Ogb = nub(iHb, 'Level/LevelWarning', 460);
		whb(357, 1, {}, tBb);
		var qBb;
		var Qgb = nub(iHb, 'LogManager', 357);
		whb(594, 1, RHb, wBb);
		_.b = '';
		_.c = 0;
		_.e = null;
		var Rgb = nub(iHb, 'LogRecord', 594);
		whb(178, 1, {
			178: 1
		}, FBb);
		_.b = null;
		_.e = false;
		var Sgb = nub(iHb, 'Logger', 178);
		whb(239, 105, JHb);
		var Vgb = nub(THb, 'EmulatedCharset', 239);
		whb(240, 239, JHb, QBb);
		var Tgb = nub(THb, 'EmulatedCharset/LatinCharset', 240);
		whb(346, 239, JHb, UBb);
		var Ugb = nub(THb, 'EmulatedCharset/UtfCharset', 346);
		var gCb = 0;
		var iCb, jCb = 0, kCb;
		whb(348, 1, {});
		var Wgb = nub(XHb, 'Category', 348);
		whb(169, 1, {
			169: 1
		});
		_.ub = function uCb(a) {
			var b;
			if (Z2(a, 169)) {
				b = a;
				return this.b == b.b
			} else {
				return false
			}
		}
		;
		_.xb = function vCb() {
			return this.c
		}
		;
		_.b = 0;
		var Zgb = nub(XHb, 'Priority', 169);
		whb(57, 169, {
			3: 1,
			169: 1
		}, zCb);
		var wCb, xCb;
		var Xgb = nub(XHb, 'Level', 57);
		var ACb;
		whb(173, 348, {}, ECb);
		var Ygb = nub(XHb, 'Logger', 173);
		whb(146, 1, {}, FCb);
		var $gb = nub(YHb, 'DefaultRepositorySelector', 146);
		whb(746, 1, RHb, HCb);
		var _gb = nub(YHb, 'LoggingEvent', 746);
		var e3 = qub('char', 'C');
		var h3 = qub('int', 'I');
		var ahb = qub('boolean', 'Z');
		var d3 = qub('byte', 'B');
		var f3 = qub('double', 'D');
		var g3 = qub('float', 'F');
		var ICb = (a$(),
			d$);
		var gwtOnLoad = gwtOnLoad = shb;
		qhb(Bhb);
		thb('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
		if (app)
			app.onScriptLoad(gwtOnLoad);
	}
)();
