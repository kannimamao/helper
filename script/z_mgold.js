const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [],
	cookie = '',
	message = '';
let needNotify = $.isNode() ? process.env.Z_MGOLD_NOTIFY || true : true; //是否需要通知

if ($.isNode()) {
	Object.keys(jdCookieNode).forEach((item) => {
		cookiesArr.push(jdCookieNode[item])
	})
	if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
	let cookiesData = $.getdata('CookiesJD') || "[]";
	cookiesData = JSON.parse(cookiesData);
	cookiesArr = cookiesData.map(item => item.cookie);
	cookiesArr.reverse();
	cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
	cookiesArr.reverse();
	cookiesArr = cookiesArr.filter(item => !!item);
}
let taskList;
var _0xodz = 'jsjiami.com.v6',
	_0xd455 = [_0xodz, 'w4RmwqHDvcOq', 'w5URw40=', 'RVBTHwjCqcKk5byp5aal44Gt5LiR5LuC6LS75Y2P', 'QMO7V3wS',
		'w5YmQcOAOsOKw6PCtw==', 'UxHCpVo/F8Ogw5hTw54=', 'wq/Cu8OtDhA4AA==', 'wqvCu8OG', 'w49Uwr7DgQ==',
		'5Lq45Lu46LaB5Y2J', 'wprCqWvCiD/DvMOfTQ==', 'wo94wq/Cu8OYwq85Mw==',
		'w57orZvph6jmlpXnmJ/lvbPojpjlj6HDn8KHL8Kkwo0tw4BOw5nCvgZhwopYV8KAPHluwr0EAGTDtjTCgSbCr8OpYBFNLlZAAxoCA8KUworDhFY8',
		'WzR9w5RWCA==', 'QcKXw4LDjE0MwoA6', '5Luj5Lmm6LWf5Y+C', 'wqk3w556wpk=', 'RXYACWbDvcKYTg==',
		'B+isnemEquaVu+eYkOW9q+iPouWNo13Cjh/Cr1xJ', 'aDl6w6s=', 'XsOKwo/DoMKa', 'DC0OR2w=', 'wpfDu1JXKg==', 'wrnDn0I=',
		'w6PDukzDoA==', 'wq3CgMOBSR4=', 'esKvw43Dv3M=', 'MeOAqeS7nuS5qOi0h+WMmw==', 'w6TDtUXDoMOs', 'OTHCmsK9EUMiw78=',
		'fMOmVmskL25b', 'Xn04ZMKzTMOWwqEr4peJwp7ojL7lvpPCtw==', 'NOS5iOizoeOCvA==', 'w6Q7wpbDuWU=', 'IMOgwpvDkE9I',
		'DRJ2IMOdA8KCw6htwqQ=', 'woDCkxjCtw==', 'Q00eF2Y=', 'w7o7wprDqVs=', 'w5NDPw==', 'w7FLwpNk', 'w47DqkPDr8OY',
		'DRvDs8O7w7R9w74=', 'RsKcwo8faw==', 'XiBn', 'AgHDkcO1w794w6k=', 'wr5kwqTCrA==',
		'6I+x5Y+95Y6D6YKT5ZeV5ZKe5YmY6KCt5om25Ym0', 'WUMYAnY=', 'wqjCncO2KT8=', 'J0DDqsKfwpw3VMKdL1kX', 'V8ODRE4=',
		'w4Rrwo7DmcOn', 'KUAKDD4=', 'MhnDp8Oew7Q=', 'wqTCgMOF', 'wqBhd0nCmEXClg==', 'Q8K+w7fDl1M=', 'Q1duwovCpg==',
		'TcO0R3g=', '44GeWuS5k+S6meixpA==', 'wqI8w5tx', 'w5pRLAg=', 'dcKJw4jDi20Z', 'IQbDq8Ocw4E=', 'QDdtwpMu',
		'LGRawrXCqgU=', 'Rj5Dw54=', 'wqBhdw==', 'ClDDuj50UMKv', 'ZMOawrTDow==', 'Xi5Aw48=', 'w7ojwpJ+wqI/',
		'Yj1ow5MSw4nDtw==', 'wofCq30=', 'O8O8wqDDkU8=', 'f8KLwonCrwRT', 'wrrCgkzCth0=', 'FwPDisOYw7pnw6Q=',
		'wrtSZGDCqw==', 'Dw3DmsOkwr51w7xRwoYm', 'w51kwobDtsOh', 'w70uwqbDuHo=',
		'w5Maw4vCpl/DnXLCojDCiUbCv1fCqcKuw6/DuyzCgl93PcKOw5DDs8KpH8KNH8OOw7PDrsKOw7nCmwhbWzkkMsKVD8OebcKnwrHCgBjCpMOLw6jDi2Fxe8KLw7olPHN9EQdCwpTCgcKkRMO1woJDY8KYbMK7w7jDqCZCVVwzw7jDqW8+w5rCoCs4UQrCm0IYwrnCnVk/XsKAwqPCocO5DFzCu3/DvcKbBMK7w552wqnClyVcw4DCvcKowocaQsOcX8KjP0E8w7wGwrEdwo7Ct8OEwrHCnwbDnn4kwrvDrsONKMK6wo4+w4RZZMKCd8OlazEGdMKvwpnCtlc1w5wQOMOeRl0+IHzCpkszPMOEZQ1nw4zCr1/CiGU1w4DDnzdjNirCo8OQTld1w6/CoMO4w6zDksOtP2F/XcOIwqLDicKzw5nCjcKkVwhCwpQ+wqTCpMOrw7cvPcOmwo7CqcOsw5owwrfCpcOhw7xHwr82U8Olw5jCrsKLLsK+woUQwq47LMKRHhXCucKYw5ZsE8K5w6nCq8OxwrTDk1XDq0DCgRDCs8O6wrbCgcO9wpzDtijDqMKiw6HDiMOuJsOpwrg8',
		'w7Utw5nCtV4=', 'wqxBwpjChcOk', 'RcKjw43Dsk4=', 'wr/DjcOzwpfCug==', 'w6Ucw5k=', 'TcODVw==', 'wqM2w556',
		'woZpVkfCpw==', 'eAZjw5Yu', 'FXwcIjY=', 'QSxGw7dbHsKg', 'wovDpsO2wpw=', 'VsKYwpUYQcKAw7Yy',
		'w6B5wpo/4pe1HeaInOekqeaJguWLuO+8geaDtOWVpOS7vOWno8Ko6I6G5by6SuOCvQ==', 'cV3CrcKC', 'w7LCsibDucOxJg==',
		'44KCw7/kuaPkuKDos5k=', 'QDLDq8KQ', 'GFbDoAV7SQ==', 'esKxw73DjGw=', 'wqw2w50=',
		'wq3CuwHCpeKWgMOM5oiL56SL5omW5YiVLw==', 'ZcKewpPCuxgEesKaU8KGH8KoUQJpNcKqHcK0KiTDiirDk3E=',
		'w6VawoPDrMO2X3rDvMKIwodIw5pow5pnw43DmjUZw6gzSCA=', 'wqDDp2NUAQ==', 'w4TDnV8=', 'w7Aowollwpc=', 'wpjCmlHCnm4=',
		'VnDCsMKnw5vCtsKTwrBhWRPCslMNw4rDjsKyQVnCssOmw63DscO8H8KNw5fChTbCqSdWw6obwoh8DSJFwpDCt8OpRynDrllvV8KCKhzClMKNVMO1w4/CrQHDnE3DqMKwDcKvCShzM8OlwohXwqLCnG3CgsOEJMKfAsOtb8K1w70Iw743w5LDpFrDixlfwopRwrfCqjzDicKRIwsKw5FBwq9bHSo4PcKkw4vCpMOBKcKDCMKAQsK/ZcOESicrw6/Cqic1w70Lw47DgsKzw7gjQzXCgsOvFMKecMKrw6jDolhZw4VdSAgyXMOUw7bDkFzClBNvwox2OEnChMOEwqAuw5FXw7FdAMKQRlnCtFzCscOyZMOEw5rDvMOww7XDnWPDvx4zwpBqVsKYGMKjw4tCw6HCisKewo8BeBPDrFZ0RcOBAX5Uw6xmWMOjEmzCoXPCpcKSW0EPQT3DlsK7w7vDinpPcCPClArCpsODwpLDv1nCo8OnwpjCscOXJsOiwqLDkGgPDcKccVzCmsKhIMOTGh3DmDp7w5IawoLCtMO1w65Ew6VdWcO2w5koE8OVC8K0w40bb2zDokc6w6DDj3zCn8OHwq83w5wzwoIiwprCoA==',
		'w4ZPwrrDlA8xwrh6SMK4wpIdwqwCFyFU', '5byj5bqU77yq', 'wovDjMO2wrHCqQ==', 'w7vChy/DqcOF', 'w7/CsC4=',
		'ZkjCq8KKw4YsDMKHZg==', 'wpnjg4/ku6XkupDotrnljqU=', 'w4zClcOaI8OR', 'esKNw4TDlU0MwoA6', 'w4bCrCzDvsORMxIk',
		'wrPDlWnCrMK/cl9hbOKWuADojqrlv54b', 'ScKSwpw=', '5b6P5bqj77y7', 'w48sTcO8MQ==', 'XyhvwrsjwpY3dEDDtcKKMQ==',
		'IcOnwqHDj1gXw7LCmsKYw7VABsOdwp/Cj1jCu8OjfgPCuwnDgQ==', 'wpQfcg==',
		'WCthwqc3woM0QAbDucKLOUnCsMOIw5xFwpXDpMOpCkNgw445KgnDhMO8wqbDt8KvFMOdw6TDqCBcw5Vmw7PCqMOow5oiwq9rwrgjTcOyDMOQHsOvFk8uPcOXdAfDnW01FWtjKyfCmsOyUMOjwrrCmsOyw6Ihw43DocKLJhMXwr8gwprCgk87w4rDn8KnP8OPw5TDqMKUPQRaAGsFw4wQw7Rqwr8GGMOnG8KEwr4cRcODIhkHHMOWdXDDqgE5wpHDuzsOw4ICCcKsw53Cq8KVwoQzwqsQc8KpMnXDg8K0fQUbw60/DkzDl8OqRhHCocObPsOhw7jCucOswqZvemsSw7tZecKbwr7CtH7DssK4O8K/RAI4wowtwqfDsmQhZsKKPhQTdMKVCmvCu3XCuMOqPcOJwrkoUWQAwoHDr8OMUsO/wqkOw77DkEbCvU7CjcKPZCNHwosgwqMlwpcHdBtpw4hYciLDlsKqYw8/dsOaw4rCtD11eVLCjQnCucO+wqdzwr5Dw7gfGEFCPxx0FcOODMKrw5nDh8OvVcKwwovDmCwKR3FTwpg=',
		'w6nCt2TDr8Ox', 'wofDs8O2wo3CrcKpGsKmw6TDmE18w61GWU3Dm8KLMylkw47DuwDCsQ==', 'wp/CjsOSBhk=', 'KcOJw4PClsKm',
		'wojCkA3CocK/', 'WkzCrMKTw6o=', 'wpDCnMOtORE=', 'wrNJwp3Cjw==', 'VMOfVVkwY8OXw68=', 'wrJFwonCo8Oi',
		'TMKUw7fDt0s=', '5LmD5Lqb6L2W5Zij5LmY56up5pWF5o+n', 'csKMw4XDi3E=', 'ecKBworDn3MEw4M1KV9uKlE=', 'TkfClQ==',
		'wqZAwq0Kwr/DkQwQcmZeTEjCocKQwo4vBsOHM8OjMsOACsO0AMKPaTHDn8KKc23DicOqB8OhwrnCg8OFOHQjR8KKT8OZcWR6w44mDcOhwovDiMOcOg==',
		'Wjt0wqc0woJyPwPDs8OIPQLDoMOIwoIPwo/CvMK3U0ImwoYyPSLDncO2wqPCs8OpDcOSw63Crlx4w6Vlw7PDksKgw4wlwpZ1wrE+bMOdFcOPHA==',
		'FTcbbVU=', 'f8KAw6nDmkk=', 'TsKYwp4MLsKEw7s1X8OR', 'b1TDtMKAw4Y=', 'wrzCv8OFMhY=', 'w60Vw6rDtsKA', 'VFU1PGo=',
		'bXVX', 'wpHDqUdACQ==', 'w4rDnGjDj8O9', 'wq1gwqnCsMOM', 'OsK5wpxMOw==', 'eMKLw4DDu3Ef', 'Vi50wrY=',
		'w4IswpXDonjDpEvCgg==', 'aHFQwqDChlbCkmo=', 'eH7Cm8Kbw6U=', 'w5swwpc=', 'WsOhQXAEKWpYbA==', 'w68Kw4o=',
		'TmXCtsKkw40=', 'wpzClwHCscKSVAQ=', 'w6s7w7rDuA==', 'wr/ChMOBaAE=', 'w5ZdKA1Y', 'w7lFwoPDrWs=',
		'6YOw6Kae5L6Q5pq/5Lix56WH56ai5rO5', 'wrN4wobCpsOxwqc6', 'w6QwwpzDk0s=', 'PR8NVk3Dp8Or', 'LcOywqHDng==',
		'w5Efw5nCmVjCiEvCgDfClk3CqBjDqQ==', 'YE/CvMKRw6ElA8KO', 'IRMaXkzDosOjTA==', 'w6JiwrHDj3k=', 'w6HDtEbDgMOmwp4=',
		'J8Olwr7DuUY=', 'XVPCjMKGw4k=', 'ZMKFw5XDjWY=', 'w5ZqHQ9K', 'BcKOwrlXBcKEdw==', 'w6xSKzh8', 'w5ANw6bCuUjCj3U=',
		'wobCqDDCtMK4', 'G1AmJw==', 'w6XDulLDisOjwoLDjhEpw7pkwpNyw6w=', 'wqBdwroRwoLCik5a', 'CwR9NsOaAsKQw64=',
		'w6E0V8OXPcOFw6jCvQ==', 'XC5Qw5BcDMK5w48=', 'w5QVw6nDscKq',
		'Jw4NRVHCucKhBgwYw5zCsDPDlXcGwqfDusKWIDzCjSnDtcKbNGzDnA7Dh1fClGrCtsOcPsOHwqMITcKACsOw', 'ABEjWns=',
		'w7lNwq7DusOd', '6YOY6Ker5L6e5piu5LmH56SN56eG5rGP', 'w7odw7fDkcKn', 'w4Qowr9Nwow=', 'wr1rb2A=',
		'44KP5o+656eE44CQ6K6w5YaI6I++5Y6N5Lqd5Li46LSD5Yy/5LmDGsK7w6vCpcKLAcK955u+5o2E5L2l55aVw5nCpsKqw7DCuHrnmbnku4vkubvnr47lipDoj6Llj60=',
		'ITETdFI=', 'wqjCg8OLIAc=', 'Zgthwrrilod/5oua56St5om25Ym0wpc=', 'w5M7bsO+Mw==', 'wpjCpWbChAXDtQ==',
		'w640UMORHA==', 'NMOfw5LClMKE', 'Y35HwqDCtw==', 'wofDj8OVwrPCmQ==', 'fsOKwqfDrcKlworDvk8=',
		'JMjsjbiNawdmAip.wfBRcJom.kv6x=='
	];
(function(_0x2d158c, _0x5267c3, _0x228c42) {
	var _0x247644 = function(_0x3a135d, _0x2a2af7, _0x49ff78, _0x19dbdb, _0x48e387) {
		_0x2a2af7 = _0x2a2af7 >> 0x8, _0x48e387 = 'po';
		var _0x3df5cd = 'shift',
			_0x2c4df0 = 'push';
		if (_0x2a2af7 < _0x3a135d) {
			while (--_0x3a135d) {
				_0x19dbdb = _0x2d158c[_0x3df5cd]();
				if (_0x2a2af7 === _0x3a135d) {
					_0x2a2af7 = _0x19dbdb;
					_0x49ff78 = _0x2d158c[_0x48e387 + 'p']();
				} else if (_0x2a2af7 && _0x49ff78['replace'](/[JMbNwdApwfBRJkx=]/g, '') === _0x2a2af7) {
					_0x2d158c[_0x2c4df0](_0x19dbdb);
				}
			}
			_0x2d158c[_0x2c4df0](_0x2d158c[_0x3df5cd]());
		}
		return 0x79960;
	};
	return _0x247644(++_0x5267c3, _0x228c42) >> _0x5267c3 ^ _0x228c42;
}(_0xd455, 0x1a0, 0x1a000));
var _0x1483 = function(_0x2b59e0, _0x5513e7) {
	_0x2b59e0 = ~~'0x' ['concat'](_0x2b59e0);
	var _0xa63acf = _0xd455[_0x2b59e0];
	if (_0x1483['WpDVfN'] === undefined) {
		(function() {
			var _0x1fb6d6;
			try {
				var _0x57f638 = Function('return\x20(function()\x20' +
					'{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
				_0x1fb6d6 = _0x57f638();
			} catch (_0x3b8065) {
				_0x1fb6d6 = window;
			}
			var _0x111cdb = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			_0x1fb6d6['atob'] || (_0x1fb6d6['atob'] = function(_0x36104d) {
				var _0x3b648b = String(_0x36104d)['replace'](/=+$/, '');
				for (var _0x13e554 = 0x0, _0x170109, _0x582a16, _0x38a727 = 0x0, _0x1eec30 =
					''; _0x582a16 = _0x3b648b['charAt'](_0x38a727++); ~_0x582a16 && (_0x170109 =
						_0x13e554 % 0x4 ? _0x170109 * 0x40 + _0x582a16 : _0x582a16, _0x13e554++ % 0x4) ?
					_0x1eec30 += String['fromCharCode'](0xff & _0x170109 >> (-0x2 * _0x13e554 & 0x6)) :
					0x0) {
					_0x582a16 = _0x111cdb['indexOf'](_0x582a16);
				}
				return _0x1eec30;
			});
		}());
		var _0x4950d5 = function(_0x4334c9, _0x5513e7) {
			var _0xcbdfd7 = [],
				_0x388e92 = 0x0,
				_0x35a112, _0x4c30ac = '',
				_0x199857 = '';
			_0x4334c9 = atob(_0x4334c9);
			for (var _0x52e53f = 0x0, _0x59a461 = _0x4334c9['length']; _0x52e53f < _0x59a461; _0x52e53f++) {
				_0x199857 += '%' + ('00' + _0x4334c9['charCodeAt'](_0x52e53f)['toString'](0x10))['slice'](-0x2);
			}
			_0x4334c9 = decodeURIComponent(_0x199857);
			for (var _0x156e9f = 0x0; _0x156e9f < 0x100; _0x156e9f++) {
				_0xcbdfd7[_0x156e9f] = _0x156e9f;
			}
			for (_0x156e9f = 0x0; _0x156e9f < 0x100; _0x156e9f++) {
				_0x388e92 = (_0x388e92 + _0xcbdfd7[_0x156e9f] + _0x5513e7['charCodeAt'](_0x156e9f % _0x5513e7[
					'length'])) % 0x100;
				_0x35a112 = _0xcbdfd7[_0x156e9f];
				_0xcbdfd7[_0x156e9f] = _0xcbdfd7[_0x388e92];
				_0xcbdfd7[_0x388e92] = _0x35a112;
			}
			_0x156e9f = 0x0;
			_0x388e92 = 0x0;
			for (var _0x59fb24 = 0x0; _0x59fb24 < _0x4334c9['length']; _0x59fb24++) {
				_0x156e9f = (_0x156e9f + 0x1) % 0x100;
				_0x388e92 = (_0x388e92 + _0xcbdfd7[_0x156e9f]) % 0x100;
				_0x35a112 = _0xcbdfd7[_0x156e9f];
				_0xcbdfd7[_0x156e9f] = _0xcbdfd7[_0x388e92];
				_0xcbdfd7[_0x388e92] = _0x35a112;
				_0x4c30ac += String['fromCharCode'](_0x4334c9['charCodeAt'](_0x59fb24) ^ _0xcbdfd7[(_0xcbdfd7[
					_0x156e9f] + _0xcbdfd7[_0x388e92]) % 0x100]);
			}
			return _0x4c30ac;
		};
		_0x1483['vyoRfs'] = _0x4950d5;
		_0x1483['sVWBsf'] = {};
		_0x1483['WpDVfN'] = !![];
	}
	var _0x2dffee = _0x1483['sVWBsf'][_0x2b59e0];
	if (_0x2dffee === undefined) {
		if (_0x1483['CetaEn'] === undefined) {
			_0x1483['CetaEn'] = !![];
		}
		_0xa63acf = _0x1483['vyoRfs'](_0xa63acf, _0x5513e7);
		_0x1483['sVWBsf'][_0x2b59e0] = _0xa63acf;
	} else {
		_0xa63acf = _0x2dffee;
	}
	return _0xa63acf;
};
!(async () => {
	var _0x20db1e = {
		'eocXE': '【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取',
		'nKjAp': _0x1483('0', 'nYMh'),
		'bIcJR': function(_0x43ec0e, _0x3652d0) {
			return _0x43ec0e === _0x3652d0;
		},
		'xdZol': 'XbAGK',
		'PnJLG': function(_0x21afcd, _0x49279d) {
			return _0x21afcd < _0x49279d;
		},
		'fBNAJ': function(_0x3320eb, _0x71f4eb) {
			return _0x3320eb(_0x71f4eb);
		},
		'hHWNG': function(_0x569624, _0x1fe0af) {
			return _0x569624 + _0x1fe0af;
		},
		'IHVao': function(_0x5f3d9a) {
			return _0x5f3d9a();
		},
		'OeOWj': function(_0x538fab) {
			return _0x538fab();
		},
		'NiKfq': function(_0xd3448d, _0x369605) {
			return _0xd3448d !== _0x369605;
		},
		'CWwrN': _0x1483('1', 'nYMh'),
		'SdfiT': function(_0x12d4b8, _0x17a6b0) {
			return _0x12d4b8 !== _0x17a6b0;
		},
		'xtlcG': function(_0x41cdf5, _0x657442) {
			return _0x41cdf5 !== _0x657442;
		},
		'fkHuZ': _0x1483('2', 'WoSJ'),
		'Mdjyj': 'qevOe',
		'CqbjL': _0x1483('3', 'c2nd')
	};
	if (!cookiesArr[0x0]) {
		if (_0x20db1e['bIcJR'](_0x20db1e[_0x1483('4', '&YNM')], _0x1483('5', 'ESmq'))) {
			$['msg']($[_0x1483('6', 'GZlj')], _0x1483('7', 'c2nd'), _0x20db1e[_0x1483('8', 'nYMh')], {
				'open-url': _0x20db1e[_0x1483('9', 'v]wt')]
			});
			return;
		} else {
			$['log'](_0x1483('a', 'b6Gq'));
		}
	}
	for (let _0x24d782 = 0x0; _0x20db1e[_0x1483('b', 'YTJR')](_0x24d782, cookiesArr[_0x1483('c',
		'on!0')]); _0x24d782++) {
		if (cookiesArr[_0x24d782]) {
			cookie = cookiesArr[_0x24d782];
			$['UserName'] = _0x20db1e['fBNAJ'](decodeURIComponent, cookie[_0x1483('d', 'YTJR')](
				/pt_pin=(.+?);/) && cookie[_0x1483('e', '(GK)')](/pt_pin=(.+?);/)[0x1]);
			$[_0x1483('f', 'G$AI')] = _0x20db1e[_0x1483('10', 'sMPI')](_0x24d782, 0x1);
			$['isLogin'] = !![];
			$[_0x1483('11', 'lORs')] = '';
			await _0x20db1e[_0x1483('12', 'WoSJ')](checkCookie);
			console[_0x1483('13', 'yT!C')](_0x1483('14', 'nYMh') + $[_0x1483('15', 'h2ig')] + '】' + ($[
				'nickName'] || $[_0x1483('16', 'YTJR')]) + _0x1483('17', '%m2X'));
			if (!$[_0x1483('18', 'v]wt')]) {
				$[_0x1483('19', 'v]wt')]($[_0x1483('1a', 'wj$F')], '【提示】cookie已失效', _0x1483('1b', 'BgA8') + $[
						'index'] + '\x20' + ($[_0x1483('1c', 'on!0')] || $[_0x1483('1d', 'u#rL')]) +
					_0x1483('1e', '*#6N'), {
						'open-url': _0x20db1e['nKjAp']
					});
				if ($[_0x1483('1f', 'PNp0')]()) {
					await notify['sendNotify']($['name'] + 'cookie已失效\x20-\x20' + $[_0x1483('20', 'BgA8')],
						_0x1483('21', 'nYMh') + $[_0x1483('22', 'ZP9*')] + '\x20' + $[_0x1483('23',
						'8h&U')] + _0x1483('24', 'lnmR'));
				}
				continue;
			}
			$[_0x1483('25', '2NXR')] = 0x0;
			await _0x20db1e['OeOWj'](mGold);
			if ($[_0x1483('25', '2NXR')] > 0x0) {
				if (_0x20db1e[_0x1483('26', 'lORs')](_0x20db1e[_0x1483('27', 'nYMh')], _0x20db1e[_0x1483('28',
						'*#6N')])) {
					$[_0x1483('29', '*#6N')]($[_0x1483('2a', 'T$FT')], _0x20db1e[_0x1483('2b', 'kY9j')],
						_0x20db1e[_0x1483('2c', 'BgA8')], {
							'open-url': _0x20db1e['nKjAp']
						});
					return;
				} else {
					message += _0x1483('2d', 'hERb') + $[_0x1483('2e', 'T$FT')] + '】' + ($[_0x1483('2f',
						'h@Vm')] || $[_0x1483('30', 'h2ig')]) + _0x1483('31', 'n7Of') + $['bean'] + _0x1483(
						'32', 'BgA8');
				}
			}
		}
	}
	if (needNotify) {
		if (_0x20db1e[_0x1483('33', '@r9P')](message, '')) {
			if ($[_0x1483('34', '7srJ')]()) {
				await notify[_0x1483('35', 'n7Of')]($[_0x1483('36', 'aFjz')], message);
			} else {
				if (_0x20db1e[_0x1483('37', 'hERb')](_0x20db1e['fkHuZ'], _0x20db1e[_0x1483('38', '@r9P')])) {
					$[_0x1483('39', 'ju^v')]($[_0x1483('3a', 'c2nd')], _0x20db1e[_0x1483('3b', 'T$FT')],
						message);
				} else {
					$[_0x1483('3c', '1x)A')] = ![];
					return;
				}
			}
		}
	}
})()[_0x1483('3d', 'CB&o')](_0x5df833 => {
	$[_0x1483('3e', 'I(d(')]('', '❌\x20' + $['name'] + ',\x20失败!\x20原因:\x20' + _0x5df833 + '!', '');
})[_0x1483('3f', '1x)A')](() => {
	$[_0x1483('40', 'u#rL')]();
});
async function mGold() {
	var _0x3011fb = {
		'IEyEb': function(_0x5f40f5, _0x3184d9) {
			return _0x5f40f5(_0x3184d9);
		},
		'mSmqY': 'skuList',
		'aohwj': function(_0x33324d, _0xacdad6) {
			return _0x33324d === _0xacdad6;
		},
		'VqXJg': 'aalZy',
		'hAJGf': _0x1483('41', 'b6Gq'),
		'WZPiP': _0x1483('42', 'hERb'),
		'IGMNi': _0x1483('43', 'v]wt'),
		'cPpDl': _0x1483('44', 'H5V$'),
		'EnTHR': function(_0xdc7237, _0x55fd2f, _0x53511e) {
			return _0xdc7237(_0x55fd2f, _0x53511e);
		},
		'rxmDi': _0x1483('45', '1KZ('),
		'hKJrJ': function(_0x468f46, _0x2724eb) {
			return _0x468f46 * _0x2724eb;
		}
	};
	await _0x3011fb[_0x1483('46', 'WoSJ')](doTask, _0x3011fb['mSmqY']);
	if ($['skuList']) {
		if (_0x3011fb['aohwj'](_0x3011fb[_0x1483('47', 'TP!G')], _0x3011fb[_0x1483('48', '1x)A')])) {
			$[_0x1483('49', 'kY9j')](_0x3011fb['hAJGf']);
			for (const _0x11e398 of $[_0x1483('4a', 'GZlj')]) {
				if (_0x3011fb[_0x1483('4b', 'BgA8')] === _0x3011fb[_0x1483('4c', 'G$AI')]) {
					$['log']('\x20\x20\x20\x20└\x20投票成功，恭喜中奖,获得\x20【' + data[_0x1483('4d', 'h2ig')]['amount'] +
						_0x1483('4e', 'nYMh'));
					$[_0x1483('4f', 'ZP9*')] += data[_0x1483('50', 'ju^v')][_0x1483('51', 'BgA8')];
				} else {
					var _0x4d055d = _0x3011fb['cPpDl']['split']('|'),
						_0x543120 = 0x0;
					while (!![]) {
						switch (_0x4d055d[_0x543120++]) {
							case '0':
								await _0x3011fb[_0x1483('52', '1x)A')](doTask, _0x3011fb[_0x1483('53', 'I(d(')],
									'?sku=' + $['sku']['skuId'] + _0x1483('54', 'G$AI') + $[_0x1483('55',
										'PNp0')]);
								continue;
							case '1':
								$['log']('去给' + $[_0x1483('56', 'GZlj')][_0x1483('57', '%m2X')] + '投票');
								continue;
							case '2':
								$[_0x1483('58', 'lORs')] = _0x11e398['type'];
								continue;
							case '3':
								taskList = _0x11e398[_0x1483('59', 'PNp0')][_0x1483('5a', 'ESmq')](_0x380f14 =>
									_0x380f14[_0x1483('5b', '2NXR')] === ![]);
								continue;
							case '4':
								$[_0x1483('5c', 'on!0')] = taskList[Math[_0x1483('5d', '7srJ')](_0x3011fb['hKJrJ'](
									Math[_0x1483('5e', 'lnmR')](), 0xa))];
								continue;
							case '5':
								await $['wait'](0x7d0);
								continue;
						}
						break;
					}
				}
			}
		} else {
			$['done']();
		}
	}
}

function doTask(_0x18e694, _0x5bf67d) {
	var _0x1dbebc = {
		'UcTBV': function(_0x2ec6bc, _0x2b4095) {
			return _0x2ec6bc !== _0x2b4095;
		},
		'rZxSS': _0x1483('5f', 'on!0'),
		'jMNdo': 'GZeGu',
		'StwNS': _0x1483('60', '1x)A'),
		'lnhPQ': function(_0x37c516, _0x31ba36) {
			return _0x37c516 === _0x31ba36;
		},
		'dKtLw': _0x1483('61', 'GZlj'),
		'LyiNE': function(_0x11011b) {
			return _0x11011b();
		},
		'JqVhK': _0x1483('62', '1x)A'),
		'LSscq': 'zh-cn',
		'vJRLr': function(_0x175cc8, _0x127b50) {
			return _0x175cc8 !== _0x127b50;
		},
		'QGjLM': _0x1483('63', 'WoSJ'),
		'ptkCT': function(_0x495460, _0x1eb3ca, _0x9652f5) {
			return _0x495460(_0x1eb3ca, _0x9652f5);
		}
	};
	return new Promise(_0x22a4a8 => {
		var _0x36b58c = {
			'tKFqe': _0x1dbebc[_0x1483('64', '@r9P')],
			'lbwoP': _0x1483('65', 'yT!C'),
			'RLPPU': _0x1dbebc[_0x1483('66', 'yT!C')]
		};
		if (_0x1dbebc[_0x1483('67', 'u#rL')](_0x1dbebc[_0x1483('68', 'BgA8')], _0x1483('69', 'sMPI'))) {
			$['log']('异常：' + e);
		} else {
			$[_0x1483('6a', '&YNM')](_0x1dbebc['ptkCT'](taskUrl, _0x18e694, _0x5bf67d), (_0x2b1399, _0x5451b9,
				_0x115710) => {
				try {
					if (_0x2b1399) {
						$[_0x1483('6b', '1KZ(')]('异常：' + _0x2b1399);
					} else {
						_0x115710 = JSON['parse'](_0x115710);
						if (_0x115710[_0x1483('6c', 'ZP9*')] === 0xc8) {
							if (_0x1dbebc[_0x1483('6d', 'GZlj')](_0x1dbebc[_0x1483('6e', '2NXR')],
									_0x1dbebc[_0x1483('6f', 'TP!G')])) {
								switch (_0x18e694) {
									case _0x1dbebc['StwNS']:
										$[_0x1483('70', 'PNp0')] = _0x115710['data'];
										break;
									default:
										if (_0x115710[_0x1483('71', 'sMPI')][_0x1483('72', 'CB&o')]) {
											$['log'](_0x1483('73', 'ZP9*') + _0x115710[_0x1483('74',
												'H5V$')][_0x1483('75', 'h!Jm')] + _0x1483('76',
												'h!Jm'));
											$[_0x1483('77', 'Cm[5')] += _0x115710['data'][_0x1483('78',
												'%m2X')];
										} else {
											if ('OuDWR' !== _0x1483('79', 'BgA8')) {
												$[_0x1483('7a', 'ZP9*')](_0x1483('7b', 'T$FT'));
											} else {
												return {
													'url': _0x1483('7c', 'lnmR') + _0x18e694 +
														_0x5bf67d,
													'headers': {
														'Host': 'mgold.jd.com',
														'Origin': _0x1483('7d', 'WoSJ'),
														'Cookie': cookie,
														'Connection': _0x36b58c[_0x1483('7e', '*#6N')],
														'Accept': _0x1483('7f', 'aFjz'),
														'User-Agent': _0x36b58c[_0x1483('80', 'ESmq')],
														'Accept-Language': _0x36b58c[_0x1483('81',
															'kaHB')],
														'Referer': _0x1483('82', '^!PG'),
														'Accept-Encoding': _0x1483('83', 'wj$F')
													}
												};
											}
										}
										break;
								}
							} else {
								$['log'](_0x1483('84', '1KZ(') + _0x2b1399);
							}
						} else {
							if (_0x1dbebc['lnhPQ'](_0x1dbebc[_0x1483('85', 'sMPI')], _0x1483('86',
									'h!Jm'))) {
								$[_0x1483('87', 'h!Jm')](JSON[_0x1483('88', 'H5V$')](_0x115710['msg']));
							} else {
								message += _0x1483('89', 'h!Jm') + $[_0x1483('8a', 'zCvW')] + '】' + ($[
									_0x1483('8b', 'BgA8')] || $[_0x1483('8c', 'h!Jm')]) + _0x1483(
									'8d', 'h!Jm') + $['bean'] + '\x20京豆。';
							}
						}
					}
				} catch (_0xfe1c2) {
					$[_0x1483('8e', 'CB&o')](_0x1483('8f', 'T$FT') + _0xfe1c2);
				} finally {
					_0x1dbebc[_0x1483('90', 'YTJR')](_0x22a4a8);
				}
			});
		}
	});
}

function taskUrl(_0x37f742, _0x3fd5d7 = '') {
	var _0x4d452e = {
		'YFsgn': _0x1483('91', 'I(d('),
		'pweaJ': _0x1483('92', '7srJ'),
		'fbxsB': _0x1483('93', 'ju^v'),
		'OpupB': _0x1483('94', 'I(d('),
		'SvYYZ': _0x1483('95', 'h!Jm'),
		'VTLXf': 'gzip,\x20deflate,\x20br'
	};
	return {
		'url': _0x1483('96', 'sMPI') + _0x37f742 + _0x3fd5d7,
		'headers': {
			'Host': _0x4d452e[_0x1483('97', 'v]wt')],
			'Origin': _0x4d452e[_0x1483('98', '(GK)')],
			'Cookie': cookie,
			'Connection': _0x1483('62', '1x)A'),
			'Accept': _0x4d452e[_0x1483('99', 'aFjz')],
			'User-Agent': _0x4d452e[_0x1483('9a', 'H5V$')],
			'Accept-Language': _0x4d452e['SvYYZ'],
			'Referer': 'https://prodev.m.jd.com/mall/active/EXf9Q3h3RpG7bY79HtcR5nd6bZ6/index.html?utm_term=9cc1d6b1c7b14344a6660dd12613706f&utm_source=kong&tttparams=wjTTOTeyJnTG5nIjoiMTE3LjAyOTE2IiwiZ0xhdCI6IjI1LjA5NTMxIn60%3D&ad_od=share&utm_medium=jingfen&_ts=&cu=true&utm_campaign=&gx=&lat=0.000000&lng=0.000000&sid=&un_area=',
			'Accept-Encoding': _0x4d452e[_0x1483('9b', 'v]wt')]
		}
	};
}

function checkCookie() {
	var _0x5b8c87 = {
		'EEbem': _0x1483('9c', '&YNM'),
		'GGIJi': _0x1483('9d', '1KZ('),
		'wkcyZ': function(_0x461ccd, _0x2c08b2) {
			return _0x461ccd !== _0x2c08b2;
		},
		'MRQxQ': 'dBxeh',
		'ZOLda': _0x1483('9e', 'u#rL'),
		'hmpdW': _0x1483('9f', 'BgA8'),
		'SolCz': function(_0x4e4405, _0x54ccb0) {
			return _0x4e4405 === _0x54ccb0;
		},
		'CWbkZ': _0x1483('a0', 'sMPI'),
		'nvkFm': _0x1483('a1', 'BgA8'),
		'HoUea': 'VaEPq',
		'VlDOa': function(_0x31b915) {
			return _0x31b915();
		},
		'olGHK': 'lHmNW',
		'ZMbXw': _0x1483('a2', 'BgA8'),
		'kdNdJ': _0x1483('a3', '1x)A'),
		'zwdSa': _0x1483('a4', 'pzrt'),
		'TKjVU': 'gzip,\x20deflate,\x20br'
	};
	const _0x485dca = {
		'url': _0x1483('a5', 'I(d('),
		'headers': {
			'Host': _0x5b8c87[_0x1483('a6', 'nYMh')],
			'Accept': _0x5b8c87[_0x1483('a7', 'BgA8')],
			'Connection': _0x1483('a8', 'CB&o'),
			'Cookie': cookie,
			'User-Agent': 'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/14.0.2\x20Mobile/15E148\x20Safari/604.1',
			'Accept-Language': _0x1483('a9', 'H5V$'),
			'Referer': _0x5b8c87[_0x1483('aa', 'v]wt')],
			'Accept-Encoding': _0x5b8c87['TKjVU']
		}
	};
	return new Promise(_0x2e5a7f => {
		if (_0x5b8c87[_0x1483('ab', '&YNM')] !== _0x5b8c87[_0x1483('ac', 'hERb')]) {
			_0x2e5a7f();
		} else {
			$[_0x1483('ad', 'G$AI')](_0x485dca, (_0x33bf97, _0x10da8e, _0x4e6bed) => {
				var _0x14974d = {
					'hZEfE': function(_0x44c232, _0x43a08a) {
						return _0x44c232 === _0x43a08a;
					},
					'RbsQs': _0x5b8c87[_0x1483('ae', '*#6N')],
					'JGNBL': _0x5b8c87[_0x1483('af', 'T$FT')]
				};
				try {
					if (_0x33bf97) {
						if (_0x5b8c87[_0x1483('b0', 'u#rL')]('lXbpo', _0x5b8c87[_0x1483('b1',
							'@zbe')])) {
							$[_0x1483('b2', 'BgA8')](_0x33bf97);
						} else {
							$['nickName'] = _0x4e6bed[_0x1483('b3', 'I(d(')][_0x1483('b4', '@r9P')][
								_0x1483('b5', 'G$AI')
							]['nickname'];
						}
					} else {
						if (_0x4e6bed) {
							if (_0x1483('b6', 'H5V$') === _0x5b8c87['ZOLda']) {
								$[_0x1483('b7', '@r9P')](JSON[_0x1483('b8', 'h2ig')](_0x4e6bed[_0x1483(
									'b9', '&YNM')]));
							} else {
								_0x4e6bed = JSON[_0x1483('ba', '^!PG')](_0x4e6bed);
								if (_0x4e6bed[_0x1483('bb', 'aFjz')] === _0x1483('bc', 'u#rL')) {
									if (_0x5b8c87[_0x1483('bd', 'kY9j')](_0x5b8c87[_0x1483('be',
											'ju^v')], _0x1483('bf', 'wj$F'))) {
										$['msg']($[_0x1483('3a', 'c2nd')], _0x1483('c0', '@r9P'),
											message);
									} else {
										$[_0x1483('c1', 'u#rL')] = ![];
										return;
									}
								}
								if (_0x5b8c87[_0x1483('c2', '@r9P')](_0x4e6bed[_0x1483('c3', 'nYMh')],
										'0') && _0x4e6bed[_0x1483('c4', '7srJ')][_0x1483('c5', 'yT!C')](
										'userInfo')) {
									$['nickName'] = _0x4e6bed['data'][_0x1483('c6', 'H5V$')]['baseInfo']
										[_0x1483('c7', 'nYMh')];
								}
							}
						} else {
							$['log'](_0x5b8c87[_0x1483('c8', 'wj$F')]);
						}
					}
				} catch (_0x2dc4f4) {
					$[_0x1483('c9', 'T$FT')](_0x2dc4f4);
				} finally {
					if (_0x5b8c87['SolCz'](_0x5b8c87[_0x1483('ca', '7srJ')], _0x5b8c87[_0x1483('cb',
							'H5V$')])) {
						_0x4e6bed = JSON[_0x1483('cc', 'BgA8')](_0x4e6bed);
						if (_0x14974d[_0x1483('cd', 'ju^v')](_0x4e6bed[_0x1483('ce', '@zbe')],
								_0x14974d[_0x1483('cf', 'ju^v')])) {
							$[_0x1483('d0', 'yT!C')] = ![];
							return;
						}
						if (_0x14974d[_0x1483('d1', 'aFjz')](_0x4e6bed['retcode'], '0') && _0x4e6bed[
								_0x1483('d2', 'TP!G')][_0x1483('d3', 'T$FT')](_0x14974d['JGNBL'])) {
							$[_0x1483('d4', 'pzrt')] = _0x4e6bed['data'][_0x1483('d5', 'n7Of')][_0x1483(
								'd6', 'YTJR')][_0x1483('d7', 'PNp0')];
						}
					} else {
						_0x5b8c87[_0x1483('d8', '&YNM')](_0x2e5a7f);
					}
				}
			});
		}
	});
};
_0xodz = 'jsjiami.com.v6';
