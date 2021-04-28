/*
答题赢京豆
活动入口：https://grassy.m.jd.com/#/home?activityId=349
活动时间：2021-03-22 - 2021-03-25

更新地址：https://raw.githubusercontent.com/i-chenzhe/qx/main/z_grassy.js
已支持IOS双京东账号, Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, 小火箭，JSBox, Node.js
============Quantumultx===============
[task_local]
#答题赢京豆
5 1 23-25 3 * https://raw.githubusercontent.com/i-chenzhe/qx/main/z_grassy.js, tag=答题赢京豆, enabled=true
================Loon==============
[Script]
cron "5 1 23-25 3 *" script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_grassy.js, tag=答题赢京豆
===============Surge=================
答题赢京豆 = type=cron,cronexp="5 1 23-25 3 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_grassy.js
============小火箭=========
答题赢京豆 = type=cron,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_grassy.js, cronexpr="5 1 23-25 3 *", timeout=3600, enable=true
 */

const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [],
	cookie = '',
	message = '',
	assistList = [];
let questionNo,rAnswer,answerNo;
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
	cookiesArr = cookiesArr.filter(item => item !== "" && item !== null && item !== undefined);
}
var _0xodA = 'jsjiami.com.v6',
	_0x1f43 = [_0xodA, 'w4sKw4TDqsOd', 'SsK9wr7Cnyo=', 'wqbDrsOmwqVE', 'w77Du8K5wrY=', 'R8O0wofDhMKM',
		'w5HCgsKxw77DhA==', 'w6Q2w7w=', '5b+f5bis77+p', 'Q2tPw4DCkA==', 'w5TClQsMwqQ=', 'csOBwqzDkw==', 'woBvw40tw7c=',
		'Hml8wpPCoQ==', 'wrMvXsKrwoE+wqtdw4M=', 'w6gawoBkw6M=', 'wrHCmMKJLcKl', 'CFd4wpHCpw==', 'wq7Dt8Ojwqo=',
		'w7LDtCPCrcK6wrIY', 'dMOdwoRqw4MATw==', 'w4RnwqASSm/CtG8ewp3DlsK9w7dx', 'wq4yT8KpwqE4wq9e', 'w4ZXbsOD',
		'wpB5w74Tw487NUs=', 'wpXDmcOPwqJcw4/CswY=', 'woLDqFbDlsOJABNv', 'w7DCpxXDllA=', 'EzDCiw==', 'w7LCtMK0',
		'44CR5o2Z56a+44OI6Kyc5Yav6I6C5YyQ5Lit5Lul6LSr5Yys5LuKcCDDnMKMw6DCgEPnm6vmjYfkv77nl4A+wq5swpITQOeYpuS6u+S7qeesruWLouiPnuWOjg==',
		'wojCkcOcwqU=', 'wrMPwoTCrS4=', 'wogqT8KBwrk=',
		'VDDDjsOu4pSVeOS5hOixiOWFu+WJn+WHqOW9h+++t+aZqOeFt+S9oeadh+aZreS6qw==', 'w7nCqMK/w7fDvsOC', 'w7nCqC7Dol4=',
		'R8KcRy87NMOQR01VHQ==', 'woMAZjN7bMK4', '5LiD5Li26Lyi5Zmf5LmX5Liz5q6n56uB5pW15oy5', 'wpghRApZ', 'wrbDscOIwoVW',
		'wpTCm8KABcK1', 'w5rCqCcGwqc=', 'wooMUcOLwo4=', 'YsOLwqbDksKWecO7CsOYw7/DpA==', 'w7LCjQI5wos=', 'fnNaw4rCrw==',
		'Y8OIw6fCrcK+wpVZwpXDpMKXacKRwqN9KMOxwoLDqMKL', 'wpxew70vw40=', 'F8KPwpRJRg==', 'Gml7wpPCnw==', 'aQY0w4/DiQ==',
		'NHsMwq3Dhw==', 'wrtXwrrCoQI=', 'w4McwoJKw4U=', 'L8OEYsKeHQ==', 'w6nDn8K2w4rCgQ==', 'w7zDohs=', 'a25qw5nCsg==',
		'GH1YwobCjg==', 'w4XDksKRw5LCgg==', 'woDChcOnwqEC', 'V8KGwrHChcKf', 'G3l8wp3ClQ==', 'w69CwqAyRQ==',
		'w6x8wovCrA==', 'w5NDf8ORw7zChDHCim4=', 'Gz7CmAU=', 'DirCiRcnak8RLQ==', 'w7fCpsKgw53DuMObwrvDjsOYwoACwq0=',
		'woXCnsOBwrA=', 'wonCnsOGwpc5wrZjwpg0w70HNQ==', 'S8KIwqQ=', 'wrBnwpQ=', 'wrfCsMOgwqQD', 'R8Ohwp3Dg8KH',
		'w7vCpsKnw7o=', 'w7ZuJ1/Dg1FnwrbCgMOkwqVQ', 'O0sTwqjDtg==', 'aMK/wpo=',
		'5Lui5LqJ6IaQ5pyA6buU6YWR5bG377+i5YK455+Z56ea57GT6aO25YqN44C3', 'w7NhIEk=', 'dsKPTMKHQGhCw5bCsHHDsg==',
		'44OI5LuI5LmL6LC6', 'w612wo7Cpw==', 'w4lkH8KR', 'w7PDphzCjcKqwrUmXsKhwrDCi8KFN3o=', 'dMKMT8KMSQ==',
		'w5dvQMOMw4E=', 'FFghwrXDrw==', 'w5Iyw6k=', 'w5BVNmPilIA+', 'w4cawog=', '5L2H55mj5re45Yme5YmT5YmA56Ca5Lm444OF',
		'wrF7wpQ=', 'PlkZwqE=', 'b8KDTMKEYGhCw5bCsHHDsg==', 'wocRd8OjwqQ=',
		'wo0lS8OQ4pevYumji+W4qOmEgOeZmOevpeahn+WnvuWBmOacqOeCquWFrOmVlemjjO+8uuitkOiDi+ezseS+teiAmOaZp+aXsg==',
		'wovCi2/DozQ=', 'w50yw6rDug==', 'IcKpwqTDueKXv8OH', '5L6555mm5rec5YuU5YmG5Yu156OE5LqU44Oc', 'bcOmw6M=',
		'YMOnw7fCrsKOwpV9wqPDrcKJXsK+wqR3BcOawonDrsKnLH7CjA==', 'VH1Ww5TCgw==', 'w6INw5MK', 'w5J4VMOLw4k=',
		'dsO2wr5gw60=', 'B3jCj8K8ZBvCh2pWI8OJwqPDjw==', 'wojDoEHDnA==',
		'5Lux5Lit6Ia+5pyh6bmi6Yey5bG/77+O5YKW556b56SI57Gu6aKr5Yum44Cj', 'w4gMwo5F', 'L1kWwqvDgsKaw5XDnzkbwrA=',
		'wpcRwqU=', 'w7RuQ8Ogw74=', 'w6DDhQ5o', 'w5Y8w73DkMO6H8KYwqLCgMKnOwB+wpI=', 'MFMf',
		'KsK1WnzilbTDt+WGveWOvOeAqemuieiOqOW+quS7suOArQ==', 'w7fDgRRtUsOlXcKAwoHCp28=', '44KH5LuM5LuI6LCF',
		'RcKCwqLCmA==', 'w73DgMKHw6zCkw==', 'wqzCl0Q=', 'w7pzMw==', 'w5Myw60nw6o=', 'HDDCiAE=',
		'w79hJ2fDkU1kwrDCjsOgwrVRWcKv', 'w5fDjcKtw4bCkk7CvcKswr5fw5k=', 'MsOzQMKlAA==', 'UMOwwrFmw7Q=', 'woDDrlI=',
		'w4zDssKew5zilbw26I2Y5byT5Luo44Gn', 'XcKXQD8qJMOBWWxSBA==', 'w6bCnj7Crw==', 'wq0cXcOJwqUAwp3DlMOCw7PDjA==',
		'wqh5wrvCk+KVtkblpZfliqzjg70=', 'w7/DphvCow==', 'wovClsObwrYywr1xwp4fw6wr', 'wphtwqXCozU=', 'w77DuMKNwqcw',
		'ScK+woDCncKY', 'wp0GcQ==', 'wrDCg8KOO8Ko', 'wrXDvMOQwpJC', 'wrQ5acK6wpg=', 'QMObCCkT', 'TcKdSj4=',
		'wqw9YcOswrA=', 'w5rCl8KVw6nDlA==', 'wp/CusOfwo4NX8KL', 'woXDocOTwqtb', 'w51uwqTDgMKG', 'w5TCvh3Dlw==',
		'woUiesKRwoE=', 'YMO+wpFHw78=', 'w7UOw4bDj8OH', 'woJDEw==', 'w4HDhg9jXQ==', 'aMKZRQ==', 'w7PCqMK0',
		'KnMrwqPDhg==', 'wrbCt3DDix0=', 'AFhSwoLCmDsrFQ==', 'w5h2DsKCwrIsNcOU', 'w73CpsKgw77DmMObwq7DiQ==',
		'XHghEVMgw79zw7HChw==',
		'w4U2w6HDmg4KYDLDmMKFwrTCpcO8wqxmXDQtc38kwoXCv8K0w7R4W8O7w65CZwjDiUzChBPCulcZwoDChFs/TUHDpA15MC7DicOUwqfDlhLCgTLDn23CrMKJYcOCDGMcwo45Umtjw4sFw4XCjcOPTcOZM0bCmiDCvcO0woHDvXXDv8KswqdJwp3DthvDpTxeOMONw51nIMK6wrIAwoLDo8KvwpbDlMKFwqXDjGvDoSYMDMO1d8ODITTCmcOlwoPCvMKVwqbCrsKJNC4OI2vCgQ==',
		'w4VMc8OSwqTDjTrCgXvDtsKtwpnCp3tzwptd', 'GMKGwqDCgsKTwq1yNsKsIlcc', 'w5wWw78=', 'w6YHw4M7w7NPcw==',
		'w7g1w5EGw7Q=', 'wo3DkMKRwqR7', 'wpkUfQ5O', 'w7fCpRDCi8Kd', 'w7HDiBPClg==', 'ccKjwpjCgisgNcK8', 'w6PCpA3DhUM=',
		'wpo3RBd+', 'w7DDhgDCt8K1', 'w5M4wqPDvsO9GMOmwrrCi8O5PR1n', 'wrXDqMO5',
		'BkVFwpnCpWBpX8OwX8OYdGvDtsOUAC7DqFjCksOow4zDhiXDvXHDsw/Dox5fYsOPw53DrUp8T8ObwoULwqBiwqvCrMOWUMKgNCjDrMOnMcOnN8O1An0=',
		'RMKNwqDCssKZ', 'SsKAaz8c', 'w6/DgR95PcOhUMKHwrnCtw==', 'wonCocKiEMKj', 'w61oeUvDiA==', 'wq4xwpvCtgg=',
		'PX/ChcKKUw==', 'wpcQYg==', 'BQ7Cgzw6', 'w61RO3DDjw==', 'w7rCiQMGwqDDrg==', 'w4RiwpPDiMKZ', 'wpxnwrjCoRU=',
		'ccOow7bCqsKO', 'w6/CpsKhw6jDtA==', 'w7wYwp9Ew5w=', 'UcKZQ8KVcA==', 'R8KBYjQPKMOO', 'w51PwoLDosK+V3c=',
		'w7LChxAi', 'wqxEwoPCqBQ=', 'wpTCh8OUwrsj', 'aMORwpNiw6IFRz4=', 'wqsKVsOfwq4LwprDlQ==', 'wpvCscOVbw1zwoLDpQ==',
		'w7lpN0PDiEJZwqc=', 'w63DlzZmd8OpUg==', 'cmdOw53CpA==', 'w59jwqc5XHXChQ==', 'wp57wpzCmzLDv3XDnQ==',
		'w7LDrglOYA==', 'w45ZfQ==', 'H8K8wr1LRGVnwrzDrQ==', 'LUkdwrzDtMKWw5vDnwQ=', 'wrV1woDCtjLDtEzDsRnDnsOewoQ=',
		'woDDrlLDuMOVEw==', 'w4jDh8Kk', 'EyodwpPil6Eb5Liw6LK35YaW5Yuz5Yal5b+O772j5puI54ec5L6g5p2/5pil5Lmo',
		'6Ia45pya54mS5p6OwqjCm27Dii7CkOaYuOaVneaUtOmWo2nDix/DuizCpSEYREUjesKpfQJrZsKR5LuZ5bm177y/w6o5UsOgw7nDkXB9H07CrcOJw7rDujlzw6fDkcKIw7HCnWhYJcKdw6jDq0VBw59ZSBcUGw==',
		'5aOb6ZmV6Zih5Zu96IqX5p+o5YWq5L+45qOu6IyZ57yz5aWO6Z6+5Luf5LuJ5o6O6I2b776v',
		'57m95piEZMOia3Xpq6XkvZ/lrJTok6rnipTogpnmnLPnmo3okJHniKTniZ7mn5Lmmoflpaflsrrvva0=', 'NMKnwrQ=',
		'w4BDwr/ChsOuw4rCt8KJPA==', '5ZyG5p6g5out5b6+5ay255eX5pWj6IqBPV/DreeYl+S7seW6n+aZg+Wlu+WxrjXCpGc45raX5puu77yY',
		'GXVcwqfDp8Kvw5nDvOa2k+aapg==', '6IGE6Iet6Iel6IOW5qCv5rSl6K275aap',
		'5Lqt5YmA6L2RZ8Kkw5vnmJfkvrbpnqzll6Tljbvmm4nlpbnlsYzoiIPlraXnmInvvYk=', 'w4bCiuiJjeWsvw==', 'w64gw4o=',
		'44O85oyC56aE44Ot6K6f5YWe6I2Y5Y2S5LuC5Lmr6Lam5Y+i5LqIOMO6wpIeaMKzG+ealuaPvOS9g+eUmUFEQsK+TMK455iK5Lis5LqF56+k5Yq66I+L5Y+Z',
		'w4Idwptbw6bDk8K8w5c9BsO3wohNMMOcw7fDqXjCnEDDrsKb', 'w7ZsGFjDoA==', 'w6l8UMOLw78=', 'UsKzUQ==', 'wrwseDFD',
		'w4kQwrhew6M=', 'LFJJwovCuQ==', 'w5DDj+S/uA==',
		'5LmM6bqy56646IWs5p+xw4pNw7Zcw7jDvsKmwqp75p2O5YWO5qyN5LuJ5Lmv5oyU5pOX5aWo772e', 'QMOrw4XCg8KJ', 'w5MNw4LDm8Oe',
		'w4tQwpHDkMK/', 'WMO9w5XCn8K8', 'wp9gwqrCqis=',
		'w44yw6cg5p6a6L+z5Lic57qN55u75LiI5YmD6Zup5Zmc6IK15pyB5ZKK56aW5piv772V', 'XFBXw4HChw==', 'wqrCtcKvFcKX',
		'5ae/5L6s556v5L6d6Ie256aVUynnmofkua/liJLlkZznpYbmmZPkurDkuqnvvJw=', 'wqp9JGM6',
		'5pmy5a2Y5Zi0wpIcwpgzwq7DpMONAeaWvOaMr2fCocKFw4znq5bmiKHmn5XlmYDlkZbvv4Q=', 'acOJwqdkw4k=', 'w6N1TsO9w4HCqQ==',
		'SsOMwoFBw7g=', 'w6FywoLCrA==', 'EBrCohA4', 'w64nw7kbw7E=', 'w4PCvgjDmE8=', 'wrLCucOMfwg=', 'wrvDslfDtcOy',
		'w4XDhMKPw5LClg==', 'NH1Twr/Cvw==', 'wrnCocObwo4md8KCw6E=', 'wp0UYiB8', 'wozCnsOBwrI4', 'wpXCqMOeRRE=',
		'XWNew5jCu1rDscKU', 'dsO5wpnDmsKs', 'w67CkC0=', 'w6rDjRliXsOhUcKL', 'w7dFf8OQw4bCjDPCgQ==', 'wot5Mngp',
		'woDCvcOZ', 'X3/DjETilYcj5Yea5Yyp54Cr6a6Y6IyP5b6l5Lio44GT', 'wopNAHU=', 'w7s8w7XDlyADYHPCo8Oew6k=', 'wq3Ci0Q=',
		'44CB5o2+56ey44Knwrdzw7UPw7/Dr+W1u+WkseaUlQ==', '5Lik5LmF6La95Y2E', 'wpMMwqbCvyI=', 'w7XDrgzCqcKTwrobSQ==',
		'w6LCohzDgGnDvcKNw5Q=', 'wqfor7LphqbmlYDnmoDlvJfoj6Tlja3DhsK0w4Vjw7PDpBs8fMOZMVfDicKxZ8OHd8O3bMOLQMO+Pw==',
		'YsOhDiwTw61ow4U+wq5+U1pQw4bCgcKGHsOQwr0wwpU=', 'w6zCosK9w7/Dn8OawrzDj8Obwp0=', 'w6Y4w7bDlg==',
		'w7jDqADCqcK0wr7ltoTlpJ3mlobDoMODw5c=', '5Lqm5LqJ6LWc5Y6r', 'wqnClkfDgiM=', 'wrB5w74Tw4g0PkE=', 'wovCkUnDkhc=',
		'OnhEwobCgw==', 'wpoycMOfwrQ=', 'w6XCjgUxwrfDlcO3', 'w6tywpvCqA==', 'w404w7rDu8OsBcKp', 'LcKmwrdTWWlCwpY=',
		'wrvCh8KGEg==', 'OcOEecKxLA==', 'wq7CgMOfwpkJ', 'w7TCgwUt', 'w7VDwpXDqsKf', 'QMKewrbCvQ4=', 'wrLCmsOsYzM=',
		'W3Ij', 'wqphw7UAw4g=', 'TsKJwqfCk8KC', 'TsODw7gYECwow7LCvuKVgsOd6I6v5byjAA==', 'wqLkuZPosIzjg4w=',
		'w43Dm8KNw43CtE4=', 'WCQCw7PDqMKOw77DnMK0w5E=', 'w6rDhRds', 'w5Muw6k=', 'wp4UeyY=', 'GHnCi8KdbQ==',
		'F3HCmsKtaQ==', 'wollw7w=', 'woLCs8OTwpk=', 'wojCiOWnsui2h8OxC+WNg+WYosOKCg==', 'w73DrgHCo8KxwrcP', 'Cl5fwow=',
		'woXDr1zDiQ==', 'w6xow4fCjGnDpg/DpU8=', 'wr9VwpDChA7DqFPDihnDlMO7wp/CqnYgw6xWwrsb', 'w7PChBfDm2o8fwPDmA==',
		'A3YOw4/DgUfCrcKNw6w=', 'wrx6woDChz7DqH7DtxjDvMOwwrnCr3cw', '5pyB5Z2p6aO05biE5LqL5oqf5Yq656+h5qKa',
		'wr8XQMOawoIXwrTDn8Ogw7bDssKkBiLCm1PDlMKILxhew5Y=', 'esKdYA0G', 'VMKSwrPChsKVwqlv', 'wp7DlsOVwrNGw5TCpRlwLTU=',
		'w4XDlSNMZA==', 'GxLCjhcc', 'H0RUwprCojMpHsOr', 'Al5W', 'w7DCocKww4rDpg==', 'w53DkTnClMKn', 'w5kZwoNCw6E=',
		'wrXCjcKA', '5rej6KeO5ZaV5ZKc5aWA5YOO5p+t6LGb5ayh', 'GMOjZ8KdAA==', 'SMK4wq1dQ3hhwr3DsBjCkiU=',
		'wojCpcODeTB0wovDpMOFw7Y=', '5YW55rG95but6ZKm5aSd5YCY5p2O6LKs5ayM', 'w7nCjxUowrw=', 'w6LDixZlf8O3', 'AMOrf8KC',
		'w5VXc8OW', 'Si8fw6DDg8KTw5nDgcKzw5zDiGs=', 'w5fDmMKvw4vCpA==',
		'5Z6E6aKe5bmA5Lmw5omD5Yix5Lmi5q2+56Cf56655qO7w7U=', 'w7R1wqISbw==', 'w6k3w6jDhAcUcg==', 'OlUUwrvDpcKN',
		'wqHCllDDkD4y', 'a8O7CSsFwqUJwoU=', 'wqrCiVbDnjY=', 'wqjpl5jpooLvvrg=', 'wrEuScKxwpswwq1V',
		'YMObwq3DhcKgdcO1CsOaw6PDunQ=', 'CFhdwp3Csyg=', 'w5NDf8ORw7zChDHCig==', 'wrhXwpnCvTI=', 'GVBYwp0=',
		'BMOid8KEC8KYd8OsBCLCoxct', 'wrIWVA==', '5b6f5aSM5Lup5Yiy5YiK5rOV55eg5oqR5YiU5Ym/', 'EzrCggMnaw==', 'dFsQFws=',
		'w5bCkATCmMKa', 'w7nCpMK3w6nDoA==', 'aCgmw5XDjQ==', 'UcO5fsKXHMK+UcOsXA==', 'w7fDjBt7dcODU8KKwqo=', 'fcO0Eyg=',
		'wpTCo8OB', 'wq9dLVEe', 'w5/CsArDtE7DssKTw5nDg2IYwqU=', 'QMO4w53CnMKf', 'VG5uw4LChA==', 'w5Fee8OQw63CpDo=',
		'5oyO5Lud5Yqa5Yi256Om', 'w7hhOH7Djg==', 'w45iwqjCj8Ok', 'wpN9w4w5w4c=', 'w6xBwp/Dt8K4', 'wp3ChsOrZwA=',
		'QMKhwrrCoMKU', 'w6XCmj4=',
		'YsOhDiwTw61ow4U9wrt2EwYPwprCisKbHsOQwr0wwpVmJ1piwqjDscKgwr7DjMKlw7hyeyTCjsKMEjrDt8KddEE=', 'woXCiGTDgB8=',
		'Y3JRw6fChQ==', 'wqR7w5wnw4k=', 'w6N8wojCjMOZw5Y=', '5byI5bqt772g', 'wokWwrDCszRTwqMtwqg=', 'w6bChxYwwrc=',
		'w7JILUfDvA==', 'wrPCkELDlT4DIhvCjXvCpMOZfQ==', 'wpwacQ==', 'w7fDkAhgfsOnVcKIwrY=', 'SMKzaz8r', 'c8KddcK7Qw==',
		'fSY9w4LDlQ==', 'UMO2wrtrw50=', 'wpbDiMOMwqt8w4LCtB12MC92woJRw5XCoA==',
		'bMKkwonCgBF0fMO8QcKEL8KKwpXDhXfDkWgdGjgVHsOjwqHCtkLDt8KIT1/DncOuw4dVw7HDiVnCqg==', 'wpLCi8OHwrg+wr95wpYo',
		'wrcgdAjilrID6aKs5bmR6YSt55iU566E5qGr5aWQ5YCZ5py654OE5YS/6ZeS6aKu772U6K286IG357Gt5L266ICN5pum5paK',
		'hqfRfjKsjiaVmMi.cFAXom.LJlHgv6=='
	];
(function(_0x4f487a, _0x1ba50a, _0x4014a0) {
	var _0x533711 = function(_0x2c24dd, _0x166655, _0x5df994, _0xfded70, _0x3aeb4a) {
		_0x166655 = _0x166655 >> 0x8, _0x3aeb4a = 'po';
		var _0x5abebd = 'shift',
			_0x94689a = 'push';
		if (_0x166655 < _0x2c24dd) {
			while (--_0x2c24dd) {
				_0xfded70 = _0x4f487a[_0x5abebd]();
				if (_0x166655 === _0x2c24dd) {
					_0x166655 = _0xfded70;
					_0x5df994 = _0x4f487a[_0x3aeb4a + 'p']();
				} else if (_0x166655 && _0x5df994['replace'](/[hqfRfKVMFAXLJlHg=]/g, '') === _0x166655) {
					_0x4f487a[_0x94689a](_0xfded70);
				}
			}
			_0x4f487a[_0x94689a](_0x4f487a[_0x5abebd]());
		}
		return 0x7aa50;
	};
	return _0x533711(++_0x1ba50a, _0x4014a0) >> _0x1ba50a ^ _0x4014a0;
}(_0x1f43, 0xde, 0xde00));
var _0x4482 = function(_0x58b3db, _0x328986) {
	_0x58b3db = ~~'0x' ['concat'](_0x58b3db);
	var _0x8849d5 = _0x1f43[_0x58b3db];
	if (_0x4482['sKPAQR'] === undefined) {
		(function() {
			var _0xe90f49;
			try {
				var _0x57f638 = Function('return\x20(function()\x20' +
					'{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
				_0xe90f49 = _0x57f638();
			} catch (_0x3b8065) {
				_0xe90f49 = window;
			}
			var _0x14a191 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			_0xe90f49['atob'] || (_0xe90f49['atob'] = function(_0x64ac5c) {
				var _0x3efaf9 = String(_0x64ac5c)['replace'](/=+$/, '');
				for (var _0x179cb0 = 0x0, _0x2e6e18, _0x2f5c06, _0x413050 = 0x0, _0xcf4fbc =
						''; _0x2f5c06 = _0x3efaf9['charAt'](_0x413050++); ~_0x2f5c06 && (_0x2e6e18 =
						_0x179cb0 % 0x4 ? _0x2e6e18 * 0x40 + _0x2f5c06 : _0x2f5c06, _0x179cb0++ % 0x4) ?
					_0xcf4fbc += String['fromCharCode'](0xff & _0x2e6e18 >> (-0x2 * _0x179cb0 & 0x6)) :
					0x0) {
					_0x2f5c06 = _0x14a191['indexOf'](_0x2f5c06);
				}
				return _0xcf4fbc;
			});
		}());
		var _0x14722c = function(_0xa41aa2, _0x328986) {
			var _0x23b2d1 = [],
				_0x54b72c = 0x0,
				_0x2faa95, _0x224032 = '',
				_0x47fd52 = '';
			_0xa41aa2 = atob(_0xa41aa2);
			for (var _0x3544cc = 0x0, _0x558ca2 = _0xa41aa2['length']; _0x3544cc < _0x558ca2; _0x3544cc++) {
				_0x47fd52 += '%' + ('00' + _0xa41aa2['charCodeAt'](_0x3544cc)['toString'](0x10))['slice'](-0x2);
			}
			_0xa41aa2 = decodeURIComponent(_0x47fd52);
			for (var _0x48c6da = 0x0; _0x48c6da < 0x100; _0x48c6da++) {
				_0x23b2d1[_0x48c6da] = _0x48c6da;
			}
			for (_0x48c6da = 0x0; _0x48c6da < 0x100; _0x48c6da++) {
				_0x54b72c = (_0x54b72c + _0x23b2d1[_0x48c6da] + _0x328986['charCodeAt'](_0x48c6da % _0x328986[
					'length'])) % 0x100;
				_0x2faa95 = _0x23b2d1[_0x48c6da];
				_0x23b2d1[_0x48c6da] = _0x23b2d1[_0x54b72c];
				_0x23b2d1[_0x54b72c] = _0x2faa95;
			}
			_0x48c6da = 0x0;
			_0x54b72c = 0x0;
			for (var _0x15435c = 0x0; _0x15435c < _0xa41aa2['length']; _0x15435c++) {
				_0x48c6da = (_0x48c6da + 0x1) % 0x100;
				_0x54b72c = (_0x54b72c + _0x23b2d1[_0x48c6da]) % 0x100;
				_0x2faa95 = _0x23b2d1[_0x48c6da];
				_0x23b2d1[_0x48c6da] = _0x23b2d1[_0x54b72c];
				_0x23b2d1[_0x54b72c] = _0x2faa95;
				_0x224032 += String['fromCharCode'](_0xa41aa2['charCodeAt'](_0x15435c) ^ _0x23b2d1[(_0x23b2d1[
					_0x48c6da] + _0x23b2d1[_0x54b72c]) % 0x100]);
			}
			return _0x224032;
		};
		_0x4482['cgeVDS'] = _0x14722c;
		_0x4482['JchPdA'] = {};
		_0x4482['sKPAQR'] = !![];
	}
	var _0x428ae2 = _0x4482['JchPdA'][_0x58b3db];
	if (_0x428ae2 === undefined) {
		if (_0x4482['yOasbI'] === undefined) {
			_0x4482['yOasbI'] = !![];
		}
		_0x8849d5 = _0x4482['cgeVDS'](_0x8849d5, _0x328986);
		_0x4482['JchPdA'][_0x58b3db] = _0x8849d5;
	} else {
		_0x8849d5 = _0x428ae2;
	}
	return _0x8849d5;
};
!(async () => {
	var _0x24ef1e = {
		'ZLbVi': '京东返回了一段空数据',
		'OknaN': _0x4482('0', 'r@tS'),
		'LYnrW': _0x4482('1', '2&S^'),
		'cyWuv': '云麦筋膜枪Pro\x20Basic有几款专业按摩头？',
		'Bcxbo': _0x4482('2', '@]H%'),
		'AbAZb': '恩科EW19是否支持降噪和开盖弹窗？',
		'mPLDS': '爱普生\x20TW740的色彩亮度是多少？',
		'dzgQn': '3300流明\x20支持侧',
		'YtQFW': _0x4482('3', 'c)66'),
		'BtYZp': _0x4482('4', 'DkqX'),
		'oZjrr': _0x4482('5', 'LG[r'),
		'sWHix': _0x4482('6', 'BKVz'),
		'uoOmY': _0x4482('7', '@]H%'),
		'DQPwP': _0x4482('8', 'l00R'),
		'xqSUK': '支持竖拍',
		'joaDf': _0x4482('9', 'N5U#'),
		'oqWme': _0x4482('a', '3wA('),
		'LtqHT': _0x4482('b', 'CGs&'),
		'FwJJz': _0x4482('c', '5cv('),
		'oENtk': _0x4482('d', 'N5U#'),
		'toqjh': function(_0x4dff19, _0x454606) {
			return _0x4dff19 < _0x454606;
		},
		'KijuL': function(_0x1439b0, _0x52e73e) {
			return _0x1439b0 !== _0x52e73e;
		},
		'WsbHU': _0x4482('e', 'TJE5'),
		'rXlCR': function(_0x3b9c46, _0x1e4c91) {
			return _0x3b9c46(_0x1e4c91);
		},
		'lxxOU': function(_0x544204, _0x41c826) {
			return _0x544204 + _0x41c826;
		},
		'gWQlx': function(_0x2b1467) {
			return _0x2b1467();
		},
		'DKCrS': 'TIuoU',
		'NNoGB': function(_0x8ea636) {
			return _0x8ea636();
		},
		'BRaea': function(_0x5df933, _0x1a85a8) {
			return _0x5df933 > _0x1a85a8;
		},
		'ZickN': function(_0x3611de, _0x21282a) {
			return _0x3611de !== _0x21282a;
		},
		'DNKMl': _0x4482('f', '2&S^'),
		'lieSl': '有点东西进账'
	};
	$[_0x4482('10', 'DDXF')](_0x24ef1e[_0x4482('11', '3Oz*')]);
	$['questionList'] = [{
		'q': _0x24ef1e[_0x4482('12', 'N5U#')],
		'a': '4款'
	}, {
		'q': _0x24ef1e[_0x4482('13', 'y$E)')],
		'a': _0x4482('14', 'Laz4')
	}, {
		'q': _0x4482('15', 'CGs&'),
		'a': '4款'
	}, {
		'q': _0x24ef1e[_0x4482('16', 'DkqX')],
		'a': '支持'
	}, {
		'q': _0x24ef1e[_0x4482('17', '2ZbN')],
		'a': _0x24ef1e[_0x4482('18', '*vyq')]
	}, {
		'q': _0x24ef1e[_0x4482('19', 'DkqX')],
		'a': _0x24ef1e[_0x4482('1a', 'CGs&')]
	}, {
		'q': _0x4482('1b', 'c2qz'),
		'a': _0x24ef1e[_0x4482('1c', 'r@tS')]
	}, {
		'q': _0x24ef1e[_0x4482('1d', 'l00R')],
		'a': _0x24ef1e['uoOmY']
	}, {
		'q': _0x4482('1e', 'LkTa'),
		'a': _0x24ef1e[_0x4482('1f', 'O#LB')]
	}, {
		'q': _0x4482('20', 'S$hl'),
		'a': _0x24ef1e['xqSUK']
	}, {
		'q': _0x24ef1e['joaDf'],
		'a': _0x24ef1e[_0x4482('21', 'pkl)')]
	}];
	$[_0x4482('22', '2&S^')] = _0x24ef1e[_0x4482('23', 'pkl)')];
	if (!cookiesArr[0x0]) {
		$['msg']($[_0x4482('24', 'LG[r')], _0x24ef1e['FwJJz'], _0x24ef1e[_0x4482('25', ')N40')], {
			'open-url': _0x24ef1e[_0x4482('26', 'c2qz')]
		});
		return;
	}
	for (let _0x2ef2b6 = 0x0; _0x24ef1e[_0x4482('27', 'KhBK')](_0x2ef2b6, cookiesArr['length']); _0x2ef2b6++) {
		if (_0x24ef1e[_0x4482('28', 'k99]')](_0x24ef1e[_0x4482('29', 'ETq4')], _0x4482('2a', 'UR2!'))) {
			$['log'](_0x24ef1e[_0x4482('2b', 'y$E)')]);
		} else {
			if (cookiesArr[_0x2ef2b6]) {
				cookie = cookiesArr[_0x2ef2b6];
				$[_0x4482('2c', '5cv(')] = _0x24ef1e['rXlCR'](decodeURIComponent, cookie[_0x4482('2d', '3Oz*')](
					/pt_pin=(.+?);/) && cookie[_0x4482('2e', 'Laz4')](/pt_pin=(.+?);/)[0x1]);
				$['index'] = _0x24ef1e[_0x4482('2f', 'k99]')](_0x2ef2b6, 0x1);
				$['isLogin'] = !![];
				$[_0x4482('30', 'r@tS')] = '';
				await _0x24ef1e[_0x4482('31', 'Wj%P')](checkCookie);
				console[_0x4482('32', 'LkTa')]('\x0a******开始【京东账号' + $['index'] + '】' + ($[_0x4482('33',
					'y3b8')] || $[_0x4482('34', '2&S^')]) + '*********\x0a');
				if (!$['isLogin']) {
					if ('xDzjT' === _0x4482('35', 'O#LB')) {
						$[_0x4482('36', '5cv(')](_0x4482('37', ')N40') + data[_0x4482('38', 'O#LB')][
							'sendBeanNum'
						] + '】个京豆');
						$['bean'] += data['data'][_0x4482('39', 'GnP4')];
					} else {
						$[_0x4482('3a', 'c)66')]($['name'], _0x4482('3b', 'Wj%P'), _0x4482('3c', 'GnP4') + $[
							_0x4482('3d', 'F@Zy')] + '\x20' + ($[_0x4482('3e', 'NJR#')] || $[_0x4482(
							'3f', 'KhBK')]) + _0x4482('40', 'uns8'), {
							'open-url': _0x4482('41', 'Keac')
						});
						if ($['isNode']()) {
							await notify[_0x4482('42', '@!$d')]($[_0x4482('43', 'GnP4')] + _0x4482('44',
									'NJR#') + $['UserName'], _0x4482('45', 'Keac') + $[_0x4482('46',
									'c)66')] +
								'\x20' + $[_0x4482('47', 'jW$J')] + '\x0a请重新登录获取cookie');
						} else {
							if (_0x24ef1e[_0x4482('48', 'c)66')](_0x4482('49', 'y$E)'), _0x24ef1e[_0x4482('4a',
									'T[2x')])) {
								$[_0x4482('4b', '7S#a')] = data[_0x4482('4c', 'LG[r')]['shareId'];
							} else {
								$[_0x4482('4d', '2ZbN')]('', _0x4482('4e', '!*l*') + (_0x2ef2b6 ? _0x2ef2b6 +
									0x1 : ''));
							}
						}
						continue;
					}
				}
				$[_0x4482('4f', 'l00R')] = 0x0;
				await _0x24ef1e[_0x4482('50', '(T(A')](getShareCodeList);
				await grassy();
				if (_0x24ef1e[_0x4482('51', '5cv(')]($[_0x4482('52', '7S#a')], 0x0)) {
					if (_0x24ef1e[_0x4482('53', '*vyq')](_0x24ef1e[_0x4482('54', 'CTj)')], _0x4482('55',
							'k99]'))) {
						$[_0x4482('56', 'daAl')](_0x24ef1e[_0x4482('57', 'jW$J')]);
					} else {
						message += '\x0a【京东账号' + $[_0x4482('58', 'Qh[G')] + '】' + ($['nickName'] || $[
							'UserName']) + _0x4482('59', '!*l*') + $['bean'] + _0x4482('5a', 'LkTa');
					}
				}
			}
		}
	}
	if (message !== '') {
		if ($[_0x4482('5b', 'UR2!')]()) {
			await notify[_0x4482('5c', '@]H%')]($[_0x4482('5d', 'y3b8')], message);
		} else {
			$[_0x4482('5e', '2ZbN')]($[_0x4482('5f', '3Oz*')], _0x24ef1e[_0x4482('60', '1B5n')], message);
		}
	}
})()[_0x4482('61', '1B5n')](_0x3169a4 => {
	$[_0x4482('62', 'jW$J')]('', '❌\x20' + $[_0x4482('63', '5cv(')] + _0x4482('64', 'UR2!') + _0x3169a4 + '!', '');
})[_0x4482('65', 'NJR#')](() => {
	$[_0x4482('66', 'y$E)')]();
});
async function grassy() {
	var _0x175c6b = {
		'AqYEt': function(_0x5b2bc2, _0xe619f8) {
			return _0x5b2bc2(_0xe619f8);
		},
		'dMbsO': _0x4482('67', 'ETq4'),
		'ofcQw': '获取活动参数成功',
		'FVVVz': _0x4482('68', 'CGs&'),
		'oiqkn': function(_0x5c9223, _0x4ea67d, _0x333c78) {
			return _0x5c9223(_0x4ea67d, _0x333c78);
		},
		'RkmmX': _0x4482('69', 'CGs&'),
		'gMUjI': _0x4482('6a', 'c)66'),
		'KhCsz': _0x4482('6b', 'r@tS'),
		'XsqOR': _0x4482('6c', 'CGs&'),
		'jquym': _0x4482('6d', '@]H%'),
		'eCjMi': _0x4482('6e', 'T[2x'),
		'CFTvu': _0x4482('6f', 'jre%'),
		'fcdrq': function(_0x4cafe6, _0x5035c9, _0x517977) {
			return _0x4cafe6(_0x5035c9, _0x517977);
		},
		'CiJBk': _0x4482('70', 'Qh[G'),
		'gdSqq': _0x4482('71', '3wA('),
		'oalVh': function(_0x15158f, _0x2e0550) {
			return _0x15158f(_0x2e0550);
		}
	};
	await _0x175c6b[_0x4482('72', 'y3b8')](doTask, _0x175c6b[_0x4482('73', ')N40')]);
	if ($[_0x4482('74', 'y$E)')]) {
		$[_0x4482('75', 'y$E)')](_0x175c6b[_0x4482('76', '@!$d')]);
		for (const _0x43eba2 of $['questions']) {
			var _0x2d90ee = _0x175c6b[_0x4482('77', 'NJR#')][_0x4482('78', 'N5U#')]('|'),
				_0x54a78a = 0x0;
			while (!![]) {
				switch (_0x2d90ee[_0x54a78a++]) {
					case '0':
						if (!_0x43eba2['bactUrlJingBean']) {
							$[_0x4482('79', 'l00R')](_0x4482('7a', '!9DK'));
							await _0x175c6b[_0x4482('7b', '(T(A')](doTask, _0x175c6b['RkmmX'], _0x4482('7c',
								'!*l*') + questionNo);
							await $['wait'](0x3e8);
						}
						continue;
					case '1':
						questionNo = _0x43eba2[_0x4482('7d', 'k99]')];
						continue;
					case '2':
						if (!_0x43eba2['hasFollowSendBean']) {
							$['log'](_0x4482('7e', 'Keac'));
							await _0x175c6b[_0x4482('7f', '7S#a')](doTask, _0x4482('80', 'y3b8'), '&questionNo=' +
								questionNo + '&followType=2');
							await $[_0x4482('81', '(T(A')](0x3e8);
						}
						continue;
					case '3':
						await $[_0x4482('82', '2&S^')](0x3e8);
						continue;
					case '4':
						if (!_0x43eba2[_0x4482('83', '@]H%')]) {
							var _0x244c2e = _0x175c6b['gMUjI'][_0x4482('84', 'UR2!')]('|'),
								_0x16f8b1 = 0x0;
							while (!![]) {
								switch (_0x244c2e[_0x16f8b1++]) {
									case '0':
										if (rAnswer) {
											var _0x4138e1 = _0x175c6b['KhCsz']['split']('|'),
												_0x38fda3 = 0x0;
											while (!![]) {
												switch (_0x4138e1[_0x38fda3++]) {
													case '0':
														$['log'](_0x4482('85', '!9DK') + rAnswer[0x0]['a']);
														continue;
													case '1':
														await doTask(_0x175c6b[_0x4482('86', '!9DK')],
															'&questionNo=' + questionNo + '&answerNo=' +
															answerNo);
														continue;
													case '2':
														await $['wait'](0x3e8);
														continue;
													case '3':
														answerNo = _0x43eba2[_0x4482('87', 'GnP4')][_0x4482('88',
															'BKVz')](_0x425e48 => _0x425e48[_0x4482('89',
															'c)66')] === rAnswer[0x0]['a'])[0x0][_0x4482('8a',
															'Keac')];
														continue;
													case '4':
														$['log'](answerNo);
														continue;
												}
												break;
											}
										} else {
											$['log'](_0x175c6b[_0x4482('8b', 'c)66')]);
										}
										continue;
									case '1':
										$['log'](_0x4482('8c', '2&S^') + _0x43eba2[_0x4482('8d', 'r9Uf')]);
										continue;
									case '2':
										rAnswer = $[_0x4482('8e', 'Wj%P')][_0x4482('8f', 'y$E)')](_0x50e7f8 =>
											_0x50e7f8['q'] === _0x43eba2[_0x4482('90', '2&S^')]);
										continue;
									case '3':
										await doTask(_0x175c6b[_0x4482('91', 'CGs&')], '&questionNo=' + questionNo);
										continue;
									case '4':
										await $[_0x4482('92', 'y$E)')](0x3e8);
										continue;
								}
								break;
							}
						}
						continue;
				}
				break;
			}
		}
	}
	if ($[_0x4482('93', '(T(A')]) {
		$[_0x4482('94', 'T[2x')](_0x4482('95', '@!$d'));
		for (let _0x4c7a12 = 0x0; _0x4c7a12 < $['shareCodeList'][_0x4482('96', ')N40')]; _0x4c7a12++) {
			if (_0x175c6b[_0x4482('97', 'daAl')] === _0x4482('98', 'LkTa')) {
				await _0x175c6b[_0x4482('99', '@!$d')](doTask, _0x175c6b[_0x4482('9a', '@]H%')], _0x4482('9b',
					'(T(A') + $['shareCodeList'][_0x4c7a12][_0x4482('9c', 'y3b8')]);
				await $[_0x4482('9d', 'Keac')](0x3e8);
			} else {
				$['log'](data[_0x4482('9e', 'k99]')]);
			}
		}
	}
	await _0x175c6b[_0x4482('9f', 'O#LB')](doTask, _0x175c6b['dMbsO']);
	if ($[_0x4482('a0', 'KhBK')]) {
		await _0x175c6b[_0x4482('a1', 'DkqX')](doTask, _0x175c6b[_0x4482('a2', 'r@tS')]);
		if ($[_0x4482('a3', '2&S^')]) {
			$[_0x4482('56', 'daAl')](_0x4482('a4', 'T[2x'));
			await _0x175c6b[_0x4482('a5', 'TJE5')](submitShareCode, $['shareId']);
		}
	}
}

function getShareCodeList() {
	var _0x34af08 = {
		'EpGgD': function(_0x550eb6) {
			return _0x550eb6();
		},
		'fAEdC': function(_0x3c5089, _0x384685) {
			return _0x3c5089 !== _0x384685;
		},
		'PxlTp': _0x4482('a6', 'LG[r'),
		'eHyoZ': function(_0x186cee, _0x3897ce) {
			return _0x186cee === _0x3897ce;
		},
		'WhyEi': _0x4482('a7', 'jW$J'),
		'HHlYX': '\x20\x20\x20\x20└\x20京豆先到先得，显然你来晚了',
		'QMseZ': function(_0x1e910b, _0x13a511) {
			return _0x1e910b !== _0x13a511;
		},
		'dVMmD': _0x4482('a8', '*vyq'),
		'gFyVn': 'riWjc'
	};
	return new Promise(_0x3af25a => {
		if (_0x34af08['QMseZ'](_0x34af08[_0x4482('a9', 'k99]')], _0x34af08[_0x4482('aa', 'Qh[G')])) {
			$[_0x4482('ab', 'LkTa')]({
				'url': _0x4482('ac', 'Keac')
			}, (_0x14d8f8, _0x3440f3, _0x5e2455) => {
				var _0x1c5a52 = {
					'VgQUs': function(_0x5e1d97) {
						return _0x34af08[_0x4482('ad', 'c)66')](_0x5e1d97);
					}
				};
				try {
					if (_0x34af08['fAEdC'](_0x34af08[_0x4482('ae', 'r@tS')], _0x4482('af', 'jW$J'))) {
						$[_0x4482('b0', 'LG[r')](e);
					} else {
						if (_0x14d8f8) {
							$['log'](_0x4482('b1', 'Keac') + JSON[_0x4482('b2', 'F@Zy')](_0x14d8f8));
						} else {
							_0x5e2455 = JSON[_0x4482('b3', '7S#a')](_0x5e2455);
							if (_0x34af08[_0x4482('b4', 'TJE5')](_0x5e2455['code'], 0xc8)) {
								$[_0x4482('b5', 'c)66')] = _0x5e2455['data'];
							}
						}
					}
				} catch (_0x3f18f0) {
					$[_0x4482('b6', '3Oz*')]('异常：' + JSON[_0x4482('b7', 'y3b8')](_0x3f18f0));
				} finally {
					if (_0x34af08[_0x4482('b8', 'jre%')](_0x34af08['WhyEi'], _0x4482('b9', 'JT57'))) {
						_0x1c5a52[_0x4482('ba', '@]H%')](_0x3af25a);
					} else {
						_0x34af08['EpGgD'](_0x3af25a);
					}
				}
			});
		} else {
			$[_0x4482('b6', '3Oz*')](_0x34af08['HHlYX']);
		}
	});
}

function submitShareCode(_0x533c55) {
	var _0x1a43d8 = {
		'hWDDg': 'ZqmIP',
		'QVZbQ': _0x4482('bb', 'pkl)'),
		'KZAvb': _0x4482('bc', '3wA(')
	};
	let _0x5dc3ca = {
		'url': _0x4482('bd', 'CTj)'),
		'headers': {
			'Content-Type': _0x1a43d8['KZAvb']
		},
		'body': JSON[_0x4482('be', 'Laz4')]({
			'shareCode': _0x533c55,
			'ptPin': cookie[_0x4482('2e', 'Laz4')](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]
		})
	};
	return new Promise(_0x4f8cfb => {
		var _0x382858 = {
			'pXMzw': _0x4482('bf', 'TJE5'),
			'VZOrX': _0x4482('c0', '2ZbN'),
			'NEbeU': _0x4482('c1', 'CTj)'),
			'BsoOv': function(_0x4e3e72, _0x21cbf7) {
				return _0x4e3e72 === _0x21cbf7;
			},
			'hznQJ': _0x1a43d8['hWDDg'],
			'FdbCJ': _0x1a43d8[_0x4482('c2', '3wA(')],
			'Gvldw': function(_0x2e1bad) {
				return _0x2e1bad();
			}
		};
		$[_0x4482('c3', 'S$hl')](_0x5dc3ca, (_0x3bf941, _0x4e5e3e, _0x1eba0b) => {
			var _0x759601 = {
				'ffIxq': function(_0x5d0200, _0x3938f1) {
					return _0x5d0200 === _0x3938f1;
				}
			};
			if (_0x382858[_0x4482('c4', 'Wj%P')] !== _0x382858[_0x4482('c5', '@!$d')]) {
				try {
					if (_0x3bf941) {
						$[_0x4482('c6', 'GnP4')](_0x4482('c7', 'CGs&') + JSON['stringify'](_0x3bf941));
					} else {
						_0x1eba0b = JSON[_0x4482('c8', 'r@tS')](_0x1eba0b);
						if (_0x382858[_0x4482('c9', '7S#a')](_0x1eba0b[_0x4482('ca', 'Wj%P')], 0xc8)) {
							$['log']('\x20\x20\x20\x20└\x20' + _0x1eba0b['msg']);
							$[_0x4482('32', 'LkTa')]('你的活动助力码为【' + _0x533c55 + '】');
						}
					}
				} catch (_0x3103be) {
					if ('eeVLq' !== _0x4482('cb', 'jW$J')) {
						$['log'](_0x382858[_0x4482('cc', 'y$E)')]);
					} else {
						$['log']('异常：' + JSON[_0x4482('cd', 'r9Uf')](_0x3103be));
					}
				} finally {
					if (_0x382858[_0x4482('ce', 'N5U#')](_0x382858[_0x4482('cf', 'l00R')], _0x382858[
							'FdbCJ'])) {
						_0x1eba0b = JSON['parse'](_0x1eba0b);
						if (_0x759601[_0x4482('d0', 'y$E)')](_0x1eba0b['retcode'], _0x4482('d1',
								'@!$d'))) {
							$[_0x4482('d2', 'NJR#')] = ![];
							return;
						}
						if (_0x1eba0b[_0x4482('d3', 'pkl)')] === '0' && _0x1eba0b['data'][_0x4482('d4',
								'!9DK')]('userInfo')) {
							$[_0x4482('d5', 'r9Uf')] = _0x1eba0b[_0x4482('d6', '2&S^')][_0x4482('d7',
								'jW$J')][_0x4482('d8', '3wA(')][_0x4482('d9', 'ETq4')];
						}
					} else {
						_0x382858[_0x4482('da', 'KhBK')](_0x4f8cfb);
					}
				}
			} else {
				$[_0x4482('db', ')N40')](_0x1eba0b[_0x4482('dc', '@!$d')]);
			}
		});
	});
}

function doTask(_0x2f5899, _0x16d039) {
	var _0x2ebb8a = {
		'MygyZ': function(_0x64e9d4, _0x166aaa) {
			return _0x64e9d4 === _0x166aaa;
		},
		'hTRIM': _0x4482('dd', 'DkqX'),
		'AItBC': _0x4482('de', 'Laz4'),
		'KDZgK': _0x4482('df', 'F@Zy'),
		'YQWRP': _0x4482('e0', 'r9Uf'),
		'AmOSK': 'jingbeanNum',
		'LNCEu': _0x4482('e1', '1B5n'),
		'Tubfi': 'XFpiR',
		'dkfzY': _0x4482('e2', '@!$d'),
		'yTfNK': function(_0x341d33, _0x3ce12a) {
			return _0x341d33 !== _0x3ce12a;
		},
		'Mbyqe': _0x4482('e3', 'KhBK'),
		'nPYPe': _0x4482('e4', 'jre%'),
		'NfrEf': function(_0x4774e4, _0x32c3e0) {
			return _0x4774e4 === _0x32c3e0;
		},
		'fCIQY': _0x4482('e5', '3Oz*'),
		'XNths': _0x4482('e6', '*vyq'),
		'XdWjG': function(_0x5645e4, _0x1b5b2d, _0x169903) {
			return _0x5645e4(_0x1b5b2d, _0x169903);
		}
	};
	return new Promise(_0x4c7f76 => {
		var _0x2f1597 = {
			'bDPtZ': function(_0x2d9b7a) {
				return _0x2d9b7a();
			},
			'CDsox': function(_0x2d3bc0, _0x34d7e5) {
				return _0x2ebb8a['MygyZ'](_0x2d3bc0, _0x34d7e5);
			},
			'vLioX': _0x2ebb8a[_0x4482('e7', '3Oz*')],
			'DOoUX': function(_0x39dc1f, _0x56b471) {
				return _0x39dc1f !== _0x56b471;
			},
			'uHMtC': _0x2ebb8a[_0x4482('e8', '3wA(')],
			'gwkgv': function(_0x3aa40c, _0x4bfc96) {
				return _0x2ebb8a[_0x4482('e9', 'l00R')](_0x3aa40c, _0x4bfc96);
			},
			'VOUuS': _0x2ebb8a['KDZgK'],
			'TQgKv': _0x2ebb8a['YQWRP'],
			'qfmoK': _0x2ebb8a['AmOSK'],
			'uYZnI': function(_0x855ef8, _0x2e900f) {
				return _0x855ef8 !== _0x2e900f;
			},
			'HdYzo': 'DVrbA',
			'YhDNC': _0x2ebb8a[_0x4482('ea', '7S#a')],
			'pNNiA': _0x2ebb8a[_0x4482('eb', 'T[2x')],
			'AOwFH': _0x4482('ec', 'Wj%P'),
			'VXYBv': _0x2ebb8a[_0x4482('ed', '7S#a')],
			'kazry': function(_0x490923, _0x2b4e94) {
				return _0x2ebb8a[_0x4482('ee', 'r@tS')](_0x490923, _0x2b4e94);
			},
			'RPZHp': _0x4482('ef', 'DkqX'),
			'EyVSn': function(_0x3873fb, _0x3ccd72) {
				return _0x2ebb8a[_0x4482('f0', 'jW$J')](_0x3873fb, _0x3ccd72);
			},
			'VHAoX': _0x4482('f1', '!*l*'),
			'RAsyp': _0x2ebb8a['Mbyqe'],
			'plGee': _0x4482('f2', 'y$E)'),
			'nYCkb': _0x4482('f3', '@]H%'),
			'tbExw': _0x2ebb8a['nPYPe'],
			'JNrus': function(_0x4cf681, _0x14f512) {
				return _0x2ebb8a['NfrEf'](_0x4cf681, _0x14f512);
			},
			'rDRAW': function(_0x294311, _0x424e06) {
				return _0x294311 === _0x424e06;
			},
			'EPFrE': _0x4482('f4', 'BKVz'),
			'rYolN': _0x2ebb8a[_0x4482('f5', 'CGs&')],
			'KSHPJ': _0x4482('f6', 'N5U#'),
			'EbujM': _0x2ebb8a[_0x4482('f7', '(T(A')],
			'vOSlF': _0x4482('f8', 'UR2!')
		};
		$[_0x4482('f9', 'NJR#')](_0x2ebb8a[_0x4482('fa', 'r@tS')](taskUrl, _0x2f5899, _0x16d039), (_0xfbc6a1,
			_0x4e5566, _0x4c1c27) => {
			var _0x5b8302 = {
				'KsLDo': function(_0x33f0aa, _0x233e79) {
					return _0x2f1597['CDsox'](_0x33f0aa, _0x233e79);
				},
				'iaiGG': _0x2f1597[_0x4482('fb', 'y$E)')],
				'BDlUW': 'https://bean.m.jd.com/'
			};
			try {
				if (_0xfbc6a1) {
					$['log']('请求异常：' + _0xfbc6a1);
				} else {
					if (_0x2f1597['DOoUX'](_0x4482('fc', 'UR2!'), _0x4482('fd', 'Laz4'))) {
						$['done']();
					} else {
						if (_0x4c1c27) {
							_0x4c1c27 = JSON[_0x4482('fe', 'Qh[G')](_0x4c1c27);
							switch (_0x2f5899) {
								case _0x2f1597[_0x4482('ff', 'y$E)')]:
									if (_0x2f1597[_0x4482('100', '!9DK')](_0x4c1c27[_0x4482('101',
											'LG[r')], 0xc8)) {
										$[_0x4482('102', '2&S^')] = _0x4c1c27[_0x4482('103', ')N40')][
											_0x4482('104', ')N40')
										];
										$[_0x4482('105', '@!$d')] = _0x4c1c27[_0x4482('106', 'Laz4')][
											_0x4482('107', 'Laz4')
										];
									} else {
										$[_0x4482('108', 'Qh[G')](_0x4c1c27[_0x4482('109', 'CGs&')]);
									}
									break;
								case 'answerAndFollow':
									if (_0x2f1597['CDsox'](_0x4c1c27['code'], 0xc8)) {
										if (_0x2f1597['gwkgv'](_0x2f1597[_0x4482('10a', 'Laz4')],
												_0x2f1597[_0x4482('10b', 'Wj%P')])) {
											if (_0x4c1c27[_0x4482('10c', '@!$d')][_0x4482('10d',
													'TJE5')] === 0x1) {
												if (_0x2f1597[_0x4482('10e', 'BKVz')](_0x2f1597[
														'TQgKv'], 'aOodX')) {
													$[_0x4482('10f', 'CTj)')](_0x4482('110', 'y3b8') +
														_0x4c1c27[_0x4482('111', 'TJE5')][_0x4482(
															'112', 'JT57')] + _0x4482('113', 'l00R')
													);
													$[_0x4482('114', 'LG[r')] += _0x4c1c27[_0x4482(
														'111', 'TJE5')]['sendBeanNum'];
												} else {
													$['log']('\x20\x20\x20\x20├\x20回答正确');
													if (_0x4c1c27[_0x4482('115', 'uns8')][_0x4482('116',
															'NJR#')](_0x2f1597[_0x4482('117',
															'JT57')])) {
														if (_0x2f1597[_0x4482('118', '2&S^')](_0x2f1597[
																_0x4482('119', 'BKVz')], 'DVrbA')) {
															$[_0x4482('11a', '2ZbN')](_0x4482('11b',
																'3Oz*') + _0x4c1c27[_0x4482(
																'11c', 'N5U#')]);
															$['log'](_0x4482('11d', 'Qh[G') +
																shareCode + '】');
														} else {
															$[_0x4482('11e', 'CGs&')](
																'\x20\x20\x20\x20└\x20奖励【' +
																_0x4c1c27['data']['jingbeanNum'] +
																'】个京豆');
															$[_0x4482('11f', 'BKVz')] += _0x4c1c27[
																'data'][_0x4482('120', 'JT57')];
														}
													} else {
														$['log'](_0x2f1597[_0x4482('121', 'T[2x')]);
													}
												}
											} else {
												$[_0x4482('94', 'T[2x')](_0x4482('122', 'uns8'));
											}
										} else {
											_0x4c1c27 = JSON['parse'](_0x4c1c27);
											if (_0x5b8302[_0x4482('123', 'c)66')](_0x4c1c27[_0x4482(
													'124', '2ZbN')], 0xc8)) {
												$['log'](_0x4482('125', 'DkqX') + _0x4c1c27['msg']);
												$['log'](_0x4482('126', 'l00R') + shareCode + '】');
											}
										}
									} else {
										$[_0x4482('127', 'DkqX')](_0x4c1c27['msg']);
									}
									break;
								case _0x4482('128', 'DkqX'):
									if (_0x2f1597[_0x4482('129', 'r@tS')](_0x4c1c27[_0x4482('12a',
											'c2qz')], 0xc8)) {
										if (_0x2f1597[_0x4482('12b', '2&S^')] !== _0x2f1597[_0x4482(
												'12c', 'pkl)')]) {
											$[_0x4482('12d', '1B5n')] = _0x4c1c27[_0x4482('12e',
												'ETq4')];
										} else {
											if (_0x4c1c27[_0x4482('115', 'uns8')]['hasOwnProperty'](
													_0x2f1597['AOwFH'])) {
												$['log'](_0x4482('12f', 'TJE5') + _0x4c1c27[_0x4482(
													'111', 'TJE5')]['sendBeanNum'] + '】个京豆');
												$[_0x4482('130', 'N5U#')] += _0x4c1c27['data'][_0x4482(
													'131', 'BKVz')];
											}
										}
									} else {
										$['log'](_0x4c1c27[_0x4482('132', 'F@Zy')]);
									}
									break;
								case _0x2f1597[_0x4482('133', '2&S^')]:
									if (_0x2f1597['kazry'](_0x4c1c27['code'], 0xc8)) {
										if (_0x4c1c27[_0x4482('134', 'y3b8')][_0x4482('135', '2ZbN')](
												_0x2f1597['AOwFH'])) {
											$[_0x4482('136', 'BKVz')](_0x4482('137', 'Keac') +
												_0x4c1c27['data'][_0x4482('138', 'y3b8')] + _0x4482(
													'139', '7S#a'));
											$[_0x4482('13a', 'Qh[G')] += _0x4c1c27[_0x4482('111',
												'TJE5')]['sendBeanNum'];
										} else {
											$['log'](_0x2f1597[_0x4482('13b', 'UR2!')]);
										}
									} else {
										$[_0x4482('13c', 'c)66')](_0x4c1c27[_0x4482('13d', 'TJE5')]);
									}
									break;
								case _0x2f1597[_0x4482('13e', 'c2qz')]:
									if (_0x2f1597['kazry'](_0x4c1c27[_0x4482('13f', ')N40')], 0xc8)) {
										if (_0x4c1c27[_0x4482('38', 'O#LB')][_0x4482('140', 'TJE5')](
												_0x4482('141', 'UR2!'))) {
											if (_0x2f1597[_0x4482('142', '(T(A')](_0x2f1597[_0x4482(
													'143', 'pkl)')], _0x2f1597['RAsyp'])) {
												$[_0x4482('144', 'ETq4')](_0x4482('145', '5cv(') +
													_0x4c1c27['data'][_0x4482('146', 'jre%')] +
													'】个京豆');
												$['bean'] += _0x4c1c27[_0x4482('147', 'LkTa')][_0x4482(
													'148', 'T[2x')];
											} else {
												$[_0x4482('10f', 'CTj)')](_0x4482('149', 'GnP4') +
													_0x4c1c27[_0x4482('14a', 'NJR#')][_0x4482('14b',
														'Laz4')] + '】个京豆');
												$['bean'] += _0x4c1c27[_0x4482('111', 'TJE5')][
													'jingbeanNum'
												];
											}
										} else {
											$[_0x4482('75', 'y$E)')](
												'\x20\x20\x20\x20└\x20估计看到‘脏东西’了，居然不送豆子');
										}
									} else {
										if (_0x2f1597[_0x4482('14c', 'CGs&')](_0x2f1597[_0x4482('14d',
												'S$hl')], _0x2f1597[_0x4482('14e', 'Qh[G')])) {
											$['log'](_0x4c1c27[_0x4482('14f', '3Oz*')]);
										} else {
											$['msg']($['name'], _0x5b8302[_0x4482('150', 'l00R')],
												_0x5b8302[_0x4482('151', '3wA(')], {
													'open-url': _0x5b8302['BDlUW']
												});
											return;
										}
									}
									break;
								case _0x2f1597[_0x4482('152', 'r9Uf')]:
									if (_0x2f1597[_0x4482('153', 'Keac')](_0x4c1c27[_0x4482('154',
											'jre%')], 0xc8)) {
										if (_0x2f1597[_0x4482('155', 'T[2x')]('hGtbG', _0x2f1597[
												_0x4482('156', '@!$d')])) {
											$[_0x4482('157', '5cv(')] = _0x4c1c27[_0x4482('10c',
												'@!$d')]['shareId'];
										} else {
											_0x2f1597['bDPtZ'](_0x4c7f76);
										}
									}
									break;
								case _0x2f1597[_0x4482('158', '3wA(')]:
									if (_0x2f1597[_0x4482('159', '*vyq')](_0x4c1c27[_0x4482('15a',
											'KhBK')], 0xc8)) {
										$['log']('\x20\x20\x20\x20└\x20' + _0x4c1c27['msg']);
									}
									break;
								default:
									break;
							}
						} else {
							if (_0x2f1597[_0x4482('15b', 'r9Uf')](_0x4482('15c', 'pkl)'), _0x2f1597[
									_0x4482('15d', '2ZbN')])) {
								$[_0x4482('15e', 'O#LB')](_0x2f1597[_0x4482('15f', 'y3b8')]);
							} else {
								$[_0x4482('10f', 'CTj)')](_0x4c1c27[_0x4482('160', 'JT57')]);
							}
						}
					}
				}
			} catch (_0x233b6f) {
				$[_0x4482('161', '@!$d')]('Promise异常：' + _0x233b6f);
			} finally {
				if (_0x2f1597[_0x4482('162', 'BKVz')] === _0x2f1597[_0x4482('163', 'c)66')]) {
					_0x4c7f76();
				} else {
					$[_0x4482('164', 'y$E)')] = _0x4c1c27['data'][_0x4482('165', 'uns8')][_0x4482('166',
						'@!$d')]['nickname'];
				}
			}
		});
	});
}

function taskUrl(_0x2df0f7, _0x56436f = '') {
	var _0xd31654 = {
		'yWfin': _0x4482('167', 'daAl'),
		'MJlOk': _0x4482('168', 'GnP4'),
		'HYByH': 'https://grassy.m.jd.com/',
		'iakMZ': _0x4482('169', '2&S^')
	};
	return {
		'url': 'https://grassy.m.jd.com/followProduct/' + _0x2df0f7 + _0x4482('16a', 'Qh[G') + $['ACT_ID'] + _0x56436f +
			_0x4482('16b', 'F@Zy') + new Date()[_0x4482('16c', 'c2qz')](),
		'headers': {
			'Host': 'grassy.m.jd.com',
			'Accept': 'application/json,\x20text/plain,\x20*/*',
			'Connection': _0xd31654[_0x4482('16d', 'c2qz')],
			'Cookie': cookie,
			'User-Agent': _0xd31654['MJlOk'],
			'Accept-Language': _0x4482('16e', '3wA('),
			'Referer': _0xd31654['HYByH'],
			'Accept-Encoding': _0xd31654[_0x4482('16f', '3Oz*')]
		}
	};
}

function checkCookie() {
	var _0x4c25a5 = {
		'zmQOo': function(_0x368dc7, _0x242425) {
			return _0x368dc7 === _0x242425;
		},
		'zQoXi': 'TrTPf',
		'syKTg': function(_0x20e4bb, _0x474f0c) {
			return _0x20e4bb === _0x474f0c;
		},
		'AsKQN': _0x4482('170', 'LkTa'),
		'VqpoI': function(_0x35630b, _0x2f947a) {
			return _0x35630b === _0x2f947a;
		},
		'Tsavr': _0x4482('171', 'c)66'),
		'qPpXO': _0x4482('172', 'CTj)'),
		'xUjGK': function(_0x52ad81, _0x4b261e) {
			return _0x52ad81 !== _0x4b261e;
		},
		'nyYrA': _0x4482('173', 'KhBK'),
		'fAHTR': 'KjjvQ',
		'AmsnQ': _0x4482('174', '3Oz*'),
		'hawhF': '京东返回了空数据',
		'vtTfy': function(_0x4bcb4c) {
			return _0x4bcb4c();
		},
		'TSYlR': _0x4482('175', 'NJR#'),
		'IokDR': 'KILmT',
		'cjcDc': 'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion',
		'raYhx': _0x4482('176', '2ZbN'),
		'drEdt': _0x4482('177', '@!$d'),
		'PCElL': 'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/14.0.2\x20Mobile/15E148\x20Safari/604.1',
		'WflTM': _0x4482('178', 'y$E)')
	};
	const _0x296389 = {
		'url': _0x4c25a5[_0x4482('179', 'Qh[G')],
		'headers': {
			'Host': _0x4c25a5['raYhx'],
			'Accept': _0x4c25a5[_0x4482('17a', 'jre%')],
			'Connection': _0x4482('17b', 'y3b8'),
			'Cookie': cookie,
			'User-Agent': _0x4c25a5[_0x4482('17c', 'l00R')],
			'Accept-Language': _0x4482('17d', 'TJE5'),
			'Referer': _0x4c25a5['WflTM'],
			'Accept-Encoding': 'gzip,\x20deflate,\x20br'
		}
	};
	return new Promise(_0x30d86f => {
		var _0x427b57 = {
			'vJsGp': function(_0x2583da, _0x45f865) {
				return _0x2583da + _0x45f865;
			},
			'MmfMs': _0x4c25a5['hawhF']
		};
		if (_0x4c25a5[_0x4482('17e', 'F@Zy')] !== _0x4c25a5[_0x4482('17f', '1B5n')]) {
			$[_0x4482('180', '3Oz*')](_0x296389, (_0x2dbc37, _0x4e36e0, _0xe30817) => {
				try {
					if (_0x4c25a5['zmQOo'](_0x4c25a5[_0x4482('181', ')N40')], _0x4c25a5[_0x4482('182',
							'TJE5')])) {
						if (_0x2dbc37) {
							$[_0x4482('183', '7S#a')](_0x2dbc37);
						} else {
							if (_0x4c25a5['syKTg'](_0x4482('184', '*vyq'), _0x4c25a5[_0x4482('185',
									'CGs&')])) {
								_0xe30817 = JSON[_0x4482('186', 'DkqX')](_0xe30817);
								if (_0xe30817['code'] === 0xc8) {
									$['shareCodeList'] = _0xe30817['data'];
								}
							} else {
								if (_0xe30817) {
									_0xe30817 = JSON[_0x4482('187', '@!$d')](_0xe30817);
									if (_0x4c25a5[_0x4482('188', 'N5U#')](_0xe30817['retcode'],
											_0x4c25a5[_0x4482('189', 'JT57')])) {
										$[_0x4482('18a', 'jre%')] = ![];
										return;
									}
									if (_0xe30817[_0x4482('18b', '*vyq')] === '0' && _0xe30817[_0x4482(
											'18c', '7S#a')]['hasOwnProperty'](_0x4c25a5[_0x4482('18d',
											'CGs&')])) {
										if (_0x4c25a5[_0x4482('18e', '5cv(')](_0x4c25a5['nyYrA'],
												_0x4c25a5['fAHTR'])) {
											$[_0x4482('18f', 'pkl)')] = _0xe30817['data'][_0x4482('190',
												'T[2x')][_0x4482('191', 'k99]')][_0x4482('192',
												'TJE5')];
										} else {
											$[_0x4482('193', 'y3b8')] = ![];
											return;
										}
									}
								} else {
									if (_0x4c25a5['VqpoI']('pxTmI', _0x4c25a5[_0x4482('194',
											'r@tS')])) {
										$[_0x4482('195', '!9DK')]('', _0x4482('196', 'CGs&') + (i ?
											_0x427b57[_0x4482('197', 'y3b8')](i, 0x1) : ''));
									} else {
										$[_0x4482('198', '2&S^')](_0x4c25a5['hawhF']);
									}
								}
							}
						}
					} else {
						$[_0x4482('199', '!*l*')] = _0xe30817['data'][_0x4482('19a', 'BKVz')];
						$['hasFinshedAQ'] = _0xe30817['data'][_0x4482('19b', 'CGs&')];
					}
				} catch (_0x2d2a6b) {
					$[_0x4482('19c', 'ETq4')](_0x2d2a6b);
				} finally {
					_0x4c25a5['vtTfy'](_0x30d86f);
				}
			});
		} else {
			$[_0x4482('19d', 'UR2!')](_0x427b57['MmfMs']);
		}
	});
};
_0xodA = 'jsjiami.com.v6';
