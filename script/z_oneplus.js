/*
一加盲盒
活动入口：https://h5.m.jd.com/babelDiy/Zeus/3qVnShbmGAKipDcgUEZGZk9Mqeyj/index.html
活动时间：2021-03-17 - 2021-03-30
后续发布脚本均有加密
因为我介意别人把我脚本里的助力改了。
如果不愿意助力，可以直接下载脚本到本地，通过修改helpAhtor这个参数来关闭助力请求。
请不要修改我的助力。
脚本内置了一个给作者任务助力的网络请求，默认开启，如介意请自行关闭。
助力活动链接： https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html
参数 helpAuthor = false
更新地址：https://raw.githubusercontent.com/i-chenzhe/qx/main/z_oneplus.js
已支持IOS双京东账号, Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, 小火箭，JSBox, Node.js
============Quantumultx===============
[task_local]
#一加盲盒
11 12 17-30 3 * https://raw.githubusercontent.com/i-chenzhe/qx/main/z_oneplus.js, tag=一加盲盒, enabled=true
================Loon==============
[Script]
cron "11 12 17-30 3 *" script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_oneplus.js, tag=一加盲盒
===============Surge=================
一加盲盒 = type=cron,cronexp="11 12 17-30 3 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_oneplus.js
============小火箭=========
一加盲盒 = type=cron,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_oneplus.js, cronexpr="11 12 17-30 3 *", timeout=3600, enable=true
 */
const jdCookieNode = '';
const notify = '';
const path = '';
let cookiesArr = [],
	cookie = '',
	originCookie = '',
	newCookie = '',
	message = '';
let helpAuthor = false; //为作者助力的开关
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') that.log = () => { };
} else {
    let cookiesData = $.getdata('CookiesJD') || "[]";
    cookiesData = JSON.parse(cookiesData);
    cookiesArr = cookiesData.map(item => item.cookie);
    cookiesArr.reverse();
    cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
    cookiesArr.reverse();
    cookiesArr = cookiesArr.filter(item => !!item);
}
let waitTime=0;
let taskList=[];
let times=0;
var _0xodp = 'jsjiami.com.v6',
	_0x1958 = [_0xodp, 'w6NDw5jDjw==', 'w5TCgnAbwrfCvw==', 'wroEMMKmfcOaNEg=', 'e+OAgOS7lOS6j+i3m+WMrQ==',
		'w6lLw4/DhcOFwpFuTA==',
		'w5TDl8KYI0bDo8KPw5Fb4pSTw5PkuojlpYTkurPvvpPkupPlpqfnsLLln7Hmlb/ms5vlib/mlLnjgJ3lpoLmnLrmlrHkvrPorI7miI3kvpfmgJvlj5fpgIznuIHohpDmna3kv5nogKHov4LooLDlrpHllprjgLTCkcKEwqLCnQwAwqzDv+KUu2A=',
		'w53DosOYNyJCY8Ogwpg=', 'CzUcWUcL', 'w5vDpcOPLA1Sa8O0woXCoifCgsOnwpDDhcOgOMKH', 'UMKXLXEE', 'JhjDhkx1',
		'wp3CrsO2bALCpg==', 'FEzDicO2GA==', 'woQ3TMOuLA==', 'bcO6w5Flw4TDhMK5QsKWw6A=', 'M1XCr8Ks', 'csOww5g=',
		'w77DnTXDp340OW0=', '6YOl6KeA5L285pqj5LmP56Wh56ec5rGx', 'UcKTTQ==', 'WsKlX8O5', 'wpLCtMOWYgrCr8OW', 'JSbDp2U=',
		'XWUgw69w', 'w6nDt8KERkDCsMON', 'w4ZAPCrCgQ==', 'asK9Y8OcUg==', 'csKZbMO5cw==',
		'5rez5Yul5Lu75YqA56Cn5Ymz5pyT5Z2c5Yi75YmV5rKG', '5b6i5aW65oqM5aSj', 'XMK+wpbDhsKb', 'w5nDt8ODKg==', 'Impo',
		'SUFuwotB', 'TMKiSMOwwos=', 'w7MnwrRLTg==', 'fcKywpbDscKE', 'w65vwr9iw6XCpQ==', 'w7wPXMKIb8Ovw6VNByLDpkA=',
		'fyQAXWI2TQ3DpsKnwonDnA==', 'V1dkwpBPew==', 'w6RiwpoUw70=', 'HEHCpsO/bg==', 'wqR1LDZdUcOmfQ==', 'wq3Cth9zbg==',
		'AEoaw7bCkg==', 'V8KbwoPDhQ==', 'EhvCmXHChcK0', 'CcOlwr/DosKv', 'FT8I',
		'PsK/wp8h4paewovlrYHmiLvkuIvliLjvvovojajlv7Bt', 'wpXlia7ms4blgp4=', 'w4h5BA==', 'w7LDjl7DkcKf',
		'Y2hYw4LCs0HCtMO0MsKISTouDB/CkcKTXcOLwp4=', 'wowXKMOZwpDDlTk=', 'w4NVPBbCthE6w5HCtQ==', 'w7ZhwqtMw57Csw==',
		'w5PDrkbDgg==', 'N8OBwp/DvMKBwphaDWh8w4IGw6JfbMOAw7DDncOJNcKRWcOlw57DkMK0Gg==', 'FhQOTn8=', 'fCQaQm8n',
		'w5nCoRg=', '5beP57iz5a6m5oq6Cg==', 'wr8YPMKteg==', 'w5vlv7jlpILmiaToo4cz', 'w54uwopNQQfDkMKt',
		'w6phwqpKw7jCuUPCk8KAYsK4w69LM8Kaw4TCtsKyUGw=', 'w5IWD8OpwpM=', 'woIeAFodwq3Coj3DqivCmyo=',
		'f2hZw4TCiEDCpsOOPw==', 'wrnCmcK7bsOkfcKaS3jDgsOwwrtAHn/DksKHAzQw', 'fcKgMnM/EWpuB8KJOAQ=', 'wqzDtsKqGUZO',
		'X8KVwpA=', '5beI57iR5ayj5ouBcw==', 'w7NDw5/DhcOFwpFuTA==', 'wpwXMMK8QQ==', 'DR/CklDCgMKtwoTCsw==',
		'wqzDvsK0F3w=', 'WMKrVQ==', 'SOW9v+Wnh+aIgeiigX4=', 'aQlUwqd3C8Ogwo0=',
		'w65hwoMew6JZKD7CssO0WMOBw5xFF8OEHcKRCw==', 'AGnDp8OOAMKJ', 'K8OFwo3Du8Khwp9ILGc=', 'QMKlQcO3woAe',
		'w7bCpsOFw5TDrA==', 'wpsKwr90WB/Dig==', 'Nh5/DcKEOg==', 'BXELw7jCs8K7w4ga', 'wo/DoR1PF19zwqw=', 'TsK3w4LCtCA=',
		'wrY6F0sD', 'TigkUWw=', 'G3jDqsOKJcKVwobCrw==', 'HXUWw7TCicKy', 'wpflvInlpKfmiInoo54Q', 'w4HCrwzDiUTCl8O6wqo=',
		'G3jDp8OWAcKSwpDCmVo4F8KBw7JsISzCrw8OwqUsQw==', 'wqZQNQBg', 'W8KfwpvDlMKfw4HDm8KA', 'WMKNQsO7wqM=',
		'w5Z1a8OuLQ==', 'w7o0F8KaXsOKNw==', 'w59RIw3CshE+w4Y=', 'wrXCsBU=', 'SsK9w4LClR8=', 'w4rDlF0FwoA5HcKi',
		'IDrDumlrBcOLwro7axQyw6PDpGTDisOUHg==', 'w5DDrlzDncKoDEvDg8OZ', '5baF57il5a2h5ouUwpY=', 'wrEOdsOoEsKaJsKb',
		'ECZfDMKk', 'U8KQTMOjeg==', 'HHEAw4fClMK3w4AM', 'wr19OQdH', 'cQdA', 'w5Zgb8OnAcONPgA=',
		'TcKORcOOXzTDhQnCm8OgS8O3NcKa', 'w4J/D8OFwqBi', 'DTbCmn3Cow==', 'LjkJfG4=', 'wrcFCX0r', 'w6tNw4s=',
		'5LmQ5ZCc5ZWp5qyU5aaA6I685aSM5Lq65ZS75q6N5L2I772P', 'w4nCo2IMwo8=', 'wpQNHEY6wqfCmjDDqw==', 'aQlUwqdwDg==',
		'TcK/w4bCpQ==', 'Rmc9w7B6wqMhw4LCq8Kkw49Gw4nCmcOBZykZwrzCmA==', 'woDCvMOLaDLCrMOEwpQV', 'w4Ygwp4=', 'PBQtS2M=',
		'TsKaYsOJRg==', 'wrzCmcKxV8OifsKGZw==', 'FBfCh2HCmg==', 'wq7lvo/lp6Tmi5HoorBD', 'w5bDkEIewp43H8K1',
		'G8Kjwp3Co8Oc', 'w7Vowp4Dw71ePwbCkMO4QMOEw49PF8OuKMKRCkY=', 'HlQZw7HCqQ==',
		'eGBHw5/CsErCn8OOMsKIVzICAQ3CrcKmXQ==', 'w4LCrxbDlg==', '5ba757uU5a2b5oqoJg==', 'w4kzHcOgwpHDgz0=',
		'w5PClGYcwpLCpcOWaA==', 'w5gqwopTYxI=', 'FQ3Cj3bCoMKuwofCrw==', 'wpcWB0o+', 'AMKQwoXCo8Om', 'JcO2wpvDow==',
		'JcK9woLCnMO7', 'HX8f', 'wp/Dk8OsDBtcfQ==', 'w7dzwr1Vw57CuVzCow==', 'w5PCocOzw6LDvQQWwqM9', 'VsKxw4g=',
		'5b+x5Yu85YqR5rOM5YOs772M', 'aBtCwr5qCcOiwpo4', 'NDrDrHJRH8O5wrQ=', 'P8KawppEwpPDmsOQw4XDq8OAXGXDp8KcWA==',
		'w7sAwpNpWw==', 'E3DCo8OXfg==', 'wq3DgcKnZl7Cp8Ocw44=', 'wqLCm8KmccOuQ8KGZlfDgsOowqNAD3I=', 'Ayl5AMKE',
		'w4xYwpwPw58=', 'UsK7w47CvScawrsMBWnCg3lDw5fCpSkLA8Olw5YbwpdUJEBfwq0=', 'w5dyecO+DsObMhfDmgHDqMK4eBoeR3MT',
		'AwIbXn8=', 'w61xL8OLwo4=', 'woxtMwVk', 'T1paw4TCpg==', 'KSjDu213H8OmwoQrbzw7w7LDpnnDtcOhHj41', 'w4zDqFYhwoQ=',
		'PFDClsOKSQ==', 'w5DCpW45wqg=', 'wo3DpsKvFXU=', 'f8KAYcO3wp8=', 'wpvCvsKrc8Oz', 'wp/CscORVgM=', 'CT8cWA==',
		'6YCY6KWl5L6e5pq/5Lu156S956as5rGd', 'KxFoA8K1', 'Jm7Do8OIO8KbwoTCuA==', 'wrgFI8KhZ8OUKVfDqA==', 'MyzDunV0BQ==',
		'LSbDrg==', 'eH1Yw4bCskjCpMONKA==', 'woh1OyBF', 'a8O6w6ZOw4g=', 'w5VJwrdKw7M=', 'XcK3fsOzwq4Tw5M=',
		'AXEKw6DCmA==', 'wqEOccOi', 'AmUbw7DCmMKpw5Y=', 'wrEOdsOoCsKUOA==', 'wq8QJcKp', 'w5Zgb8OnGcODIA==',
		'wq3DpMK8AEZEcEk=', 'RsKhQcOpwqUO', 'w4ghC8O5wo7DgijClw==', 'w4VTX8OANw==', 'O37CpMONalk=',
		'IXrCpMO3cUPDl8OZAsOZEAbCiUo=', 'wrYMasOxOQ==', 'wqkAYg==', 'wqrCnGbCrOKUpHXlr5jmiJjkurnliqbvvJPojr7lvJ3DiQ==',
		'Jh54Bw==', 'BMKJwoLCtsOT', 'w7Rqwq1Gw5g=', 'w5HDhFIWwrUlAQ==', 'w4fCqwzDl2bCgg==',
		'w47Cs8Olw5/DmQkpwqM3E1TDhB8k', 'KCgAT34=', 'wrkUIsK9ZcOH', 'DCMKXmoIY8OpRcKDR8OpRw9rwqhqPQ==',
		'dQlUwoNOBMOdwpoywovDhSLCoMKR', 'O8OCwpLDoMKw', 'w5tbKA==', 'wobDhyNO4pePw6vmg53llpvvv6DojIblv4YTEQ==',
		'LcOBwo3DpcKZwoQ=', 'PGjCssOKR1rDpsOZCcOaNhXCnlvCuDl8Bw==', 'wpEZDkMawqHChSw=', 'w6jDruS5leS4juixjA==',
		'aWxLw4E=', 'w5PCocOzw6LDrxAYwqM8EHLDlwg1wprCgRty', 'SXRywppoXgR/wqY+WsO0', 'w4TCux7DjH7Cn8OjwrY=',
		'w5Q8GsOuwrXDjS3CjMKEbcKTbcOoPMOeVcKlMMKFw6AOw64TZgl7wqgId2fDoCLCn8OI', 'w5kzGsOq', 'KmR7aA==',
		'N8OFwo3Dn8KCwp5zO2Z1w7gTw7NS', 'BB/CnmU=', 'AsKZwojCtsO3wqjCicOeJsKSw4Ewwo/DgMOYb8OMwp0=',
		'w69Dw5/DocO8wp5TW3rDngnCpMKdw5w=', 'wq8XPcK4TA==', 'UVNkwo5qaw==', 'w5/Do8OLMDhMfsO/', 'EyXkuKXkuqXos54=',
		'w4gqwphI', 'LXrCo8OZ', 'fnpPw53CnVjCrMOZNcKUZjcoBw7ChsKEXQ==', 'wqNWMQNafcO0b8ObHXhb', 'w7PCmhXDoXI=',
		'w4/jgb/kuqnkup/otbrljIw=', 'IHXCs8Odfg==',
		'PWIHw6wZSsKtw4h94pevwoDkub3lpoLkua7vvozku73lpI/nsLvlnpzmlrHmsajli7/mlIHjgJTlpKjmnobmlKXkvrzorr7mibvkvqXmg4/lj7DpgpnnuYroh77mnIXkvbHogYLov6roorblrYnllrvjgKAZwqzCtsKpKkpIwo3ilJ7Dtw==',
		'wpHDtBdyEFV/wrnCiw==', 'O8OFworDsQ==', 'wpUfCl8vwr/CkCfDoSjCjiQhfX/DusO0w5c=', 'w6lDw4HDiw==', 'QUAow5p4',
		'ZwY4QXw=', 'w75jIgrCoQ==', '5bSG57iS5ay05oiTRg==', 'w5E9CQ==', '5Lqf5Lum6Lyj5Zm65LmJ5Lqu5qyB56qI5pat5o6I',
		'w4jCiUo5wpA=', 'wp/Ci8KCSMOp', 'Z2ZN', 'w7RWw57Dh8OlwpdqT2w=', 'w5xKwoc6w5s=',
		'w6p0wqxXw6TDrRXDo8KCfcK9wq1DfsKEw7PDu8K+TWTDh8KTTsKIwrTCq8KIwqt0RMKxwojDo8Oq', 'GCAGAkZRaMO/D8KTa8Ol',
		'w7DDlGvDr14=', 'a8K9e8OecA==', 'BA7CrmLCiA==', 'H8KewpnCtMOFw6XDh8KDKsOUwqw8w4LDgsOZBcObwp1u',
		'wpPCp8ORc0rDo8OLwpQda8KSw5F3GcK/w5zCgw==', 'KRppFsOgP39Qwqtx',
		'w4rDhUUFwqNsXcO/w5HDjsOCSMOXI2fCgcOmwrvDi8OUe8OMLcOTwqrCmWIYw5rDuRLCpMKqw7Qxw6DDtcK4SMKOw57CgSXCl8OBw43CtFbCmhhuDTAYWcO0U33DpixOw5bDicOcfHXCkxPCkMOeZEHCiMOGcz5MwrxkwqsreC7CrcK5wr5AUgQGYS9RAVbDnCoYw7bCpsKIw4PDl8K+aDdEQj7DpcOZwohHWsKoHG5pfcK/bsOD',
		'w5snAMOowrPDhSHClsKSfcOL', 'wpswAcOvwr7CkQ==', 'w4RAPRTCjBk4w5LCog==',
		'wqFBw4DDh8Ouwp53FGLDhlnDsMKKw4nDgSfDmTEHQ3VzwofDtsOyHmPDokTDpgs=', 'LFPCg8KPwro=',
		'5Liu5Lqo6L2W5Zqz5LuY56qJ5pe65o2l', 'BE/DtsOWIQ==', 'I8K6wrfCjsOv', 'wojCnhs=', 'w4EqwpxWIgfDkcKhecOP',
		'ZwAKwq9X', 'wr7CpRtmMRfCkcKyGsKoMMKWY1sYMMK/',
		'w6p0wqxXw6TDrRXDo8KOaMO5w6JeOcOAw73CscOzQWbChcOfV8KSwrTCt8Kjw6twUMOqwojDosOiW8KuScOqex0dN8KZS8KwAzLCryhvTUTCoEk=',
		'w6pGeMOFOQ==', 'LX7CrcKBwoY=', 'NxVPEsKC', 'wpMlI8K8Yg==', 'fMK1PFUA', 'wpTDoxxpGQ==', 'wrbCncK9',
		'wowDCGgcwro=', 'w5R3EcOCwqA=', 'w7DDkcO2DjHCl8Ov', 'EsKgwonCocO7', 'w7R6wqABw7VZKA==', 'w7VHw5jDjcOkwpRm',
		'wrzDtsKtEw==', 'wqF1Jy1DUsOTfMOGCUtGwpHCqQ==', 'LGHCpcKcwpM=', 'fcKcwoPDqMKn', 'w5PClMOdw5/DoQ==',
		'w77DsBzDilw=', 'w5vCpxzDiUTCl8O6wqo=', 'w4bDkEUU', 'TGc8w7hcwqM+w7I=', 'w7Ngwo8Fw7xRKzw=', 'T1lw',
		'SMO1w6tpw4A=', 'a8Knw73CgyA=', 'ZBUReGc=', 'wr3Cl8KuRsO5YQ==', 'woEcBgMDw6bCmzHCqzjCoig=', 'CMK0wpd1wrg=',
		'w5UmGsO7wrTClmHDl8K6acKfLsOqYsONQMK5QcKBw6oXwo0WdlN8wrsDQmPDujnDnMOVM1bDs8Kh', 'w7t7ecOpBw==', 'WnJBwpFn',
		'w4TCqsOsw4TDtg==', 'PsOUwo7DvMKcwpNCPWBqw7NOw78GV8OYw7PChMOKKMKaZsKtw5jDl8K0C0RRBcKYMcON',
		'GWQMw6PCjsOgwopQHcKRCsONcsKWwq1Te8KuUA==', 'wrrCncKsc8KmcsKPfW3DiA==',
		'L3V/ZcOxwp0QEsK2ZsOXacOrB1PDp8Kvw4Mvw4s9wo/CqsKiw77CrsKmMsK3bzIdOQ==', 'c8Kkw6fCkjQ=',
		'44OV5o6/56S/44KS6K6r5Yaz6I+85Yyo5Li/5LmI6LeW5Y2r5LqhfVrDqsKtwpRGPOeageaOueS9jueWqUfClznCsGxX55mD5Lqm5Lm056+S5Yix6IyM5Y24',
		'NUDCtsK5wqHCkDxmdmXDkSUMPmjDkMOkwpLClcKEwoswJMOGw5R6w4lmTwUnwpoOw4M+UTHCq2k2IyBR', 'w7bDlsOaJRY=',
		'w6M6QMKkWQ==', 'ICLDp3ds', 'JmBjecOIwpEeFA==', 'ZnpN', 'FzECSQ==', 'w5smCMOzwp0=', 'wq/DpMKeCHo=',
		'VcKVUMOewoU=', 'w6DCvRrDkETCl8O6wqo=', 'wo7Dp8KjP0M=', 'V8K/w5vCsjs=', 'wovDrgF+Bg==', 'OsOrwozDuMKt',
		'U8Ktw6PCvjQbwqw=', 'wogqw7INwr3DvRDlv4zlpKjjgJ3kubjkup/otIjljqc=', 'wqB6MAdM', 'ECMjQ0wWbA==',
		'44Ky5o+R56Sm44KdLMODPA7DlxfltZnlp6jmlZM=', 'w4Mhwp1Ddw==', 'ccK7Pm8CFVRj', 'HGjCssOKSEzDqsOO',
		'w5vorI/phITmlrPnm7DlvYbojZTlj4IRw4XDqMKjVQ4xwq7Diw4jNH3DpV9FwqE1w7ZVQsO0GsKteVQIwo1oc8KLwqLCscObJyFyZW/CvlAFw6cf',
		'JcKKwrtZwpLDrw==', 'AnUWw7fCs8K1w5EWE8Od', 'ZWhHw4o=', 'w5RbIBbCixvltqPlpoXmlpPCumbDtw==', 'wpxnMRB6XcOuaw==',
		'5LiO5Lid6LS65Y27', 'GcKKwpBEwrjDq8OYw5I=', 'aiAIRw==', 'dkVywolIfh57', 'woDDpQR1', 'GuS5suizqeODkw==',
		'wo0+PsKpaw==', 'w47Cs3Y2wqk=', 'woIrYMOwLA==', 'wqJxMRIZXcOvZ8OfHA==', 'AhXCrV7CjA==', 'HMOFwrLDocKj',
		'ZcKWwrzDlcKN', 'w6dDRcO4Ow==', 'w6oeRcKQQsO5w7ZYGiTDpwHDjXvDoMK7w6/DnjU4aUwMwrsmNHnCt0/CrQd3w4s=',
		'w7rDvsOBJjE=', 'EsOxwqjDuMKi', 'w69yIsOkwrM=', 'wr7CmghiRA==', 'eg1T', 'Hmchw6HCmw==', 'wrDCkMOaQCg=',
		'FsOtwp3Dp8Ks', 'w5bCs8Okw6PDiw==',
		'w6rDgMO2HS3DicKlJMOfw6wwwovCr8KXf8Okwp0BwoHDlsKtLsKaf8OzS8OmYcK+RR7CucKfwpY=', 'K8OSwpDDqcK8', 'w6U/wrZUew==',
		'Q8KXwpXDocKk', 'ZEc9w69E',
		'wrPCuxNmbQzCnMKHFMKrP8KHPU4WZsOjw6PDuwzCrFFhw7VqKXDDt8K5YMKWbVV+wqILDcKvwqXDncKKSxnCuVPCmwoQZhXDnsOiw6hzw5fDjjDDvATCnVvCrU1wccOCCMKIwr7DisKyWHUYbMO1w7dNS8K9Oh5ycmTCk19Bw7AOwqbCsG7Drh92DVLCoMOCwpnDusKAw4/DpxkTFX1qwo1awqbDh8KNw7TDgMOXYMOXIMK4YMKtAsKzwqkHL07Cq1TDvB3DqBcfw6XCsMOUwoXDvsKDGcKAw7ZvH8KxC8K6w7nCh8K2w7xzw7nCsQkZEMKXwp7DocOwc8KHPCJvGMKIGMKeSsOzwrjDlMKWPsKgwqgKw6/DqwzDq8KOw6PDoAMqO8Kqw5oAw6liw5PCucKJwp3Dq8OIfsKCREoBwokjw7IuPmYZDBMjwoLDqsKgdjrDmMKRwrXCtMOLMwFtwoLDvsKkw5o4w6QOw4BXw4FVwo3CnlLDssKhw77CkMOqw4tffMOYLcK7GEgBUE/CjMKoPsKNwq/DhgVhVSE4w4NOw6zClBrCm8OMU8KVKCZeLgNaShM=',
		'GWQMw6PCjsOgwopQHcKRCsONcsKWwq1Te8KuUMK+w5ZMwpZ8wqRNw7nCigwfw6zDlsOpMy3DrUBlw5rCksO4P07CvwTDuU7DhcOqOyxCw45mwpbDvSIiw50QEMKJSMOLHiogwqfDkMK5DgBIw6zDsEMfw4TDh0LCvsKQCsKTw6xvw6Qqwr5Jwqofb8KGwo8GwqjDqcKKw6DCisK1w6Aqw4oIw5w=',
		'woTDvsK0w6XDnQILwp85DlTClFF/w53DqU17OQbDrnkUwq8NwojDu3BzaMKwwoMUeMOCw6nDgCLDsH0=',
		'w73DmsK8cMOuYcKzfXjCj8Kmw7UHAC3DosKIBSM7Z8O2RQPDvnfCu1pEw7xbwrtKUBTDkXJ1woLDscOJwptzajo=', 'b8K9LnA=',
		'NsKrwpBF', 'PcKLwqzCocOi', 'EDjDoFRf', 'wowDCA==', 'wqV7Mw==', '5bS357qg5a6J5oqTfA==', 'Sj0MX00=',
		'w6TDucO5PC8=', 'w7tGwpogw5g=', 'wpDDlMK3PWo=',
		'w6LDiDLDvENveycjd3Ynw6fDh1zCpkpnw67CjwXDuS4Ywoocw6BQw7TCs8KWwoTDucKz', 'w6vDjC/Col17PmxsZHBk', 'OTHDokNq',
		'RsKeRcOWwp8=', 'w4/DjsOENi8=', 'dMOWw4d4w4M=', 'R0hHw6jCjA==',
		'N8OQworDoMKGw4oMZmEwwrMMwqlBRMKBw6fDhsOBaMKKasOiw4jDicKcB1MdMMKZIcOaT8Kjwo99C8OKw5YMKm/Ctilhwq0NdRrDv8KxwrsOH8KeN8KYwpfDgMOzPMO7WcK/LB/DrnnDplLClkTCncKlw4c0ecOjw7gDwrHCkBtrbkwsw6bDqjpROl0xJVwyw7YswrHDh8OaVsO0M1Y=',
		'Zz7DqHklQcK5wrcmZ21xw7vDpHnCm8KkAiU0w7ETwqnDrkMQRkpPew==', 'w5FYRMOVGw==',
		'w4jDo8OEPThMZcOowqjCtVnCgMOxwozDsMOWJcKLL1TDssOqJ8OUwo/DqUx5eCEbw4lPw54Ew6ZLwo8Kw6LDvHUrHHRs',
		'DxRiwohjbSN3wrd4NsK5w7nDvkIHwoFbMR5Fw4rDnyjDsTvCiw8dGDJAPBXCsETCoCrClVfDn8K2wobCgcOK', 'wqvCqCBZUw==',
		'A8KxwoF6wrQ=', 'Pmp8fQ==', 'w4jCgMOGw5/Dtw==', 'w6PDlATDiUA=', 'wrvDugB+Ng==', 'wrTDuMK+',
		'5bW457mz5a+K5oqcEA==', 'w7E8UMKP', 'PMKYwodFwpM=', 'LhBr', 'w7BlwqtSw7vCow==', 'bgtIwr5c', 'w7HliZjmsbDlgL8=',
		'w6VXwrFTw78=', 'GAvDkE1b', 'TF5Vwrxo', 'wqQfdcOvNcKYKsKKw7o7wp7Cs8OLbVrDqw==', 'w6tjwpUDw4U=', 'OsKfwp3Cr8Os',
		'wqPCjRdl', 'Q8KbwoXDl8Kq', 'wpUVf8OuMw==', 'w5NGGsOwwqM=', 'wrl7JxY=', 'w55EBsOC', 'w5JgbsO/Kg==',
		'w7fCqWkrwpI=', 'w4DCuwbDmls=', 'cU1Lw5vCvQ==', 'wrTDssK3FXtC', 'w71mw43DmsOq', 'JSjDvWE=', 'wqkKa8OkKMKT',
		'wqLDtsKjYHY=', 'w4DDrlvDlw==', 'wrnDtMKtAUZu', 'KMOFwpfDpA==', 'wovCugE=', 'wrbCr8Kgd8Oj', 'XsKNw7vCiRI=',
		'wrrCq8K/b8Oh', 'w5dowqsew7U=', 'wojCusKQTsOI', 'FXEMw7I=', 'a8Osw5pzw4vDnMKsWcKUw6rDhMK+BCXDjGfCuEE=',
		'wqMQIsKHfsOdEEPDvsO5wp/CqifDrg==', 'wpfCmCBUcw==', 'w6cBUg==', 'f8KEw57CsOKXocOQ5oGO5ZeV77yF6I6y5byKQcOc',
		'E8KLwpnCpQ==', 'w5TCt8Olw6XDghM=', 'wojDggB6EHNhwr7CgMO7w7sm', 'QsKPwpbDisK7w4fDgMKL', 'EcOZ5Luf5Lqa6LKw',
		'fMO6w55v', 'jObPBsjiami.cpoGIm.zv6geBNbuk=='
	];
(function(_0x50becf, _0x151f82, _0x27a244) {
	var _0xd3ac5e = function(_0x16858c, _0x2a0bfe, _0x1b6ef7, _0x39f5cc, _0x2442b5) {
		_0x2a0bfe = _0x2a0bfe >> 0x8, _0x2442b5 = 'po';
		var _0x5b2f86 = 'shift',
			_0x5bb0bc = 'push';
		if (_0x2a0bfe < _0x16858c) {
			while (--_0x16858c) {
				_0x39f5cc = _0x50becf[_0x5b2f86]();
				if (_0x2a0bfe === _0x16858c) {
					_0x2a0bfe = _0x39f5cc;
					_0x1b6ef7 = _0x50becf[_0x2442b5 + 'p']();
				} else if (_0x2a0bfe && _0x1b6ef7['replace'](/[ObPBpGIzgeBNbuk=]/g, '') === _0x2a0bfe) {
					_0x50becf[_0x5bb0bc](_0x39f5cc);
				}
			}
			_0x50becf[_0x5bb0bc](_0x50becf[_0x5b2f86]());
		}
		return 0x78c99;
	};
	return _0xd3ac5e(++_0x151f82, _0x27a244) >> _0x151f82 ^ _0x27a244;
}(_0x1958, 0x13a, 0x13a00));
var _0x431c = function(_0x14c1a6, _0x59f030) {
	_0x14c1a6 = ~~'0x' ['concat'](_0x14c1a6);
	var _0x2c19ec = _0x1958[_0x14c1a6];
	if (_0x431c['SdrUOI'] === undefined) {
		(function() {
			var _0x30ffeb;
			try {
				var _0x57f638 = Function('return\x20(function()\x20' +
					'{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
				_0x30ffeb = _0x57f638();
			} catch (_0x3b8065) {
				_0x30ffeb = window;
			}
			var _0x5db11c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			_0x30ffeb['atob'] || (_0x30ffeb['atob'] = function(_0x530cb8) {
				var _0x3a1734 = String(_0x530cb8)['replace'](/=+$/, '');
				for (var _0x3a8904 = 0x0, _0x498af9, _0x2d1cde, _0x53e388 = 0x0, _0x43becf =
					''; _0x2d1cde = _0x3a1734['charAt'](_0x53e388++); ~_0x2d1cde && (_0x498af9 =
						_0x3a8904 % 0x4 ? _0x498af9 * 0x40 + _0x2d1cde : _0x2d1cde, _0x3a8904++ % 0x4) ?
					_0x43becf += String['fromCharCode'](0xff & _0x498af9 >> (-0x2 * _0x3a8904 & 0x6)) :
					0x0) {
					_0x2d1cde = _0x5db11c['indexOf'](_0x2d1cde);
				}
				return _0x43becf;
			});
		}());
		var _0x1df896 = function(_0x3066bd, _0x59f030) {
			var _0xeebc3b = [],
				_0x1819fc = 0x0,
				_0x382def, _0x32f8bc = '',
				_0x365d69 = '';
			_0x3066bd = atob(_0x3066bd);
			for (var _0x4cde40 = 0x0, _0x3c9107 = _0x3066bd['length']; _0x4cde40 < _0x3c9107; _0x4cde40++) {
				_0x365d69 += '%' + ('00' + _0x3066bd['charCodeAt'](_0x4cde40)['toString'](0x10))['slice'](-0x2);
			}
			_0x3066bd = decodeURIComponent(_0x365d69);
			for (var _0x3145e9 = 0x0; _0x3145e9 < 0x100; _0x3145e9++) {
				_0xeebc3b[_0x3145e9] = _0x3145e9;
			}
			for (_0x3145e9 = 0x0; _0x3145e9 < 0x100; _0x3145e9++) {
				_0x1819fc = (_0x1819fc + _0xeebc3b[_0x3145e9] + _0x59f030['charCodeAt'](_0x3145e9 % _0x59f030[
					'length'])) % 0x100;
				_0x382def = _0xeebc3b[_0x3145e9];
				_0xeebc3b[_0x3145e9] = _0xeebc3b[_0x1819fc];
				_0xeebc3b[_0x1819fc] = _0x382def;
			}
			_0x3145e9 = 0x0;
			_0x1819fc = 0x0;
			for (var _0x5bb545 = 0x0; _0x5bb545 < _0x3066bd['length']; _0x5bb545++) {
				_0x3145e9 = (_0x3145e9 + 0x1) % 0x100;
				_0x1819fc = (_0x1819fc + _0xeebc3b[_0x3145e9]) % 0x100;
				_0x382def = _0xeebc3b[_0x3145e9];
				_0xeebc3b[_0x3145e9] = _0xeebc3b[_0x1819fc];
				_0xeebc3b[_0x1819fc] = _0x382def;
				_0x32f8bc += String['fromCharCode'](_0x3066bd['charCodeAt'](_0x5bb545) ^ _0xeebc3b[(_0xeebc3b[
					_0x3145e9] + _0xeebc3b[_0x1819fc]) % 0x100]);
			}
			return _0x32f8bc;
		};
		_0x431c['Anmiut'] = _0x1df896;
		_0x431c['PvyJeC'] = {};
		_0x431c['SdrUOI'] = !![];
	}
	var _0x4a5b3c = _0x431c['PvyJeC'][_0x14c1a6];
	if (_0x4a5b3c === undefined) {
		if (_0x431c['CSsyGX'] === undefined) {
			_0x431c['CSsyGX'] = !![];
		}
		_0x2c19ec = _0x431c['Anmiut'](_0x2c19ec, _0x59f030);
		_0x431c['PvyJeC'][_0x14c1a6] = _0x2c19ec;
	} else {
		_0x2c19ec = _0x4a5b3c;
	}
	return _0x2c19ec;
};
!(async () => {
	var _0x2409d2 = {
		'GDesp': _0x431c('0', 'AYy#'),
		'bkGZe': _0x431c('1', 'V(Ah'),
		'VlKqB': _0x431c('2', '8$sX'),
		'JoSbc': _0x431c('3', 'aimA'),
		'fOvNJ': _0x431c('4', 'ycnr'),
		'HCnOe': _0x431c('5', 'c&0b'),
		'xxkCr': _0x431c('6', 'HASC'),
		'rZwJV': _0x431c('7', 'D4^H'),
		'aXnhc': _0x431c('8', 'Q@OA'),
		'jIxyI': _0x431c('9', '5Twr'),
		'LAmGP': 'jdapp;iPhone;9.4.0;14.3;;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1',
		'sYXYT': 'zh-cn',
		'gWith': function(_0x4d5973, _0x376e6b) {
			return _0x4d5973 === _0x376e6b;
		},
		'YBYMC': function(_0x1f5a40) {
			return _0x1f5a40();
		},
		'ohBGn': _0x431c('a', ']Dsm'),
		'NGRBn': 'jBeanAwardVo',
		'OEpuH': function(_0x3a2853) {
			return _0x3a2853();
		},
		'YNwzp': _0x431c('b', 'lB$k'),
		'ftfxZ': _0x431c('c', 'g6h!'),
		'wsGzu': function(_0x59f810, _0x4f2a0a) {
			return _0x59f810 !== _0x4f2a0a;
		},
		'TIQYp': _0x431c('d', 'P7bu'),
		'VpzML': function(_0x49f015, _0x8f60b3) {
			return _0x49f015(_0x8f60b3);
		},
		'eOrhX': function(_0x1940cf, _0x50675a) {
			return _0x1940cf + _0x50675a;
		},
		'FOoab': _0x431c('e', 'DDG0'),
		'QNjEI': function(_0x5ef0b1) {
			return _0x5ef0b1();
		},
		'uuyxQ': function(_0x3d162e, _0x5341d2) {
			return _0x3d162e !== _0x5341d2;
		},
		'NYAoo': function(_0x189ebc, _0x1e7c9e) {
			return _0x189ebc < _0x1e7c9e;
		},
		'JaGpg': function(_0x69f6b9, _0x180a2c, _0x4c4a4a) {
			return _0x69f6b9(_0x180a2c, _0x4c4a4a);
		},
		'dSTXA': function(_0x558e9d, _0x2db4b3) {
			return _0x558e9d === _0x2db4b3;
		},
		'kSvlj': _0x431c('f', 'oPfE'),
		'gQOLm': function(_0x697e21, _0x33bf34) {
			return _0x697e21 !== _0x33bf34;
		},
		'AXImp': 'HCihW'
	};
	$[_0x431c('10', '5Twr')] = [];
	if (!cookiesArr[0x0]) {
		$[_0x431c('11', 'Mt7F')]($[_0x431c('12', 'mx%[')], _0x2409d2['YNwzp'],
			'https://bean.m.jd.com/bean/signIndex.action', {
				'open-url': _0x2409d2[_0x431c('13', '8$sX')]
			});
		return;
	}
	for (let _0x2011d3 = 0x0; _0x2011d3 < cookiesArr['length']; _0x2011d3++) {
		if (_0x2409d2[_0x431c('14', 'XNO@')](_0x431c('15', 'mp#M'), _0x2409d2['TIQYp'])) {
			if (cookiesArr[_0x2011d3]) {
				cookie = cookiesArr[_0x2011d3];
				$[_0x431c('16', 'c9CC')] = _0x2409d2[_0x431c('17', 'XNO@')](decodeURIComponent, cookie[_0x431c(
					'18', ']Dsm')](/pt_pin=(.+?);/) && cookie[_0x431c('18', ']Dsm')](/pt_pin=(.+?);/)[
					0x1]);
				$[_0x431c('19', '3)@c')] = _0x2409d2[_0x431c('1a', 'HASC')](_0x2011d3, 0x1);
				$[_0x431c('1b', ']Dsm')] = !![];
				$['nickName'] = '';
				await checkCookie();
				that['log'](_0x431c('1c', 'bsfr') + $[_0x431c('1d', 'TjHx')] + '】' + ($['nickName'] || $[
					'UserName']) + '*********\x0a');
				if (!$[_0x431c('1e', 'mx%[')]) {
					$[_0x431c('11', 'Mt7F')]($['name'], _0x431c('1f', 'aimA'), '京东账号' + $[_0x431c('20',
						'ZbXD')] + '\x20' + ($[_0x431c('21', '5G8Y')] || $[_0x431c('22', 'axxw')]) +
						_0x431c('23', 'Q@OA'), {
							'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
						});
					if ($[_0x431c('24', 'V(Ah')]()) {
						await notify[_0x431c('25', 'D4^H')]($[_0x431c('26', 'Mt7F')] + _0x431c('27', 'u$sY') +
							$[_0x431c('28', 'TjHx')], _0x431c('29', 'aimA') + $[_0x431c('19', '3)@c')] +
							'\x20' + $[_0x431c('2a', 'V(Ah')] + '\x0a请重新登录获取cookie');
					}
					continue;
				}
				$[_0x431c('2b', 'v44i')] = 0x0;
				await oneplus();
				if ($['bean'] > 0x0) {
					message += '\x0a【京东账号' + $['index'] + '】' + ($['nickName'] || $[_0x431c('2c', 'ycnr')]) +
						'\x20\x0a\x20\x20\x20\x20\x20\x20\x20└\x20获得\x20' + $[_0x431c('2d', '3)@c')] + _0x431c(
							'2e', ']Dsm');
				}
				if (helpAuthor) {
					if (_0x2409d2[_0x431c('2f', 'r9VS')] === _0x431c('30', '^*t0')) {
						function _0xecc0f8() {
							var _0x1221a8 = {
								'EBYtt': _0x2409d2[_0x431c('31', 'lB$k')],
								'xJCKo': _0x431c('32', 'TjHx'),
								'MUVhW': _0x2409d2[_0x431c('33', 'lJ[p')],
								'gEztY': _0x431c('34', 'HASC'),
								'owYrf': _0x2409d2[_0x431c('35', 'p$1^')]
							};
							return new Promise(_0xad610f => {
								var _0x57b84c = {
									'tvnyI': _0x1221a8[_0x431c('36', 'aimA')],
									'OpOrt': _0x431c('37', 'DDG0'),
									'pmbEk': 'https://h5.m.jd.com',
									'ubVBg': _0x1221a8[_0x431c('38', 'P7bu')],
									'JArrQ': 'application/json,\x20text/plain,\x20*/*',
									'IIcwY': _0x1221a8[_0x431c('39', 'HASC')],
									'eAmPL': _0x431c('3a', 'V6%d'),
									'QqiTG': _0x1221a8[_0x431c('3b', '5qxM')],
									'Bxevk': function(_0x4b7c75) {
										return _0x4b7c75();
									}
								};
								$[_0x431c('3c', 'Dsjk')]({
									'url': _0x1221a8[_0x431c('3d', 'D4^H')]
								}, (_0x3f71a4, _0x17b98e, _0x44b851) => {
									try {
										if (_0x44b851) {
											if (_0x431c('3e', 'KPC9') === _0x57b84c[_0x431c(
													'3f', 'HASC')]) {
												$['zData'] = JSON[_0x431c('40', 'c&0b')](
													_0x44b851);
											} else {
												let _0x1902fc = {
													'url': _0x431c('41', 'P7bu'),
													'headers': {
														'Host': _0x57b84c[_0x431c('42',
															'HASC')],
														'Content-Type': _0x57b84c[_0x431c(
															'43', 'ZbXD')],
														'Origin': _0x57b84c[_0x431c('44',
															'p$1^')],
														'Accept-Encoding': 'gzip,\x20deflate,\x20br',
														'Cookie': cookie,
														'Connection': _0x57b84c['ubVBg'],
														'Accept': _0x57b84c[_0x431c('45',
															'4E&2')],
														'User-Agent': _0x431c('46', '5qxM'),
														'Referer': _0x431c('47', 'D4^H') +
															actID +
															'&way=0&lng=&lat=&sid=&un_area=',
														'Accept-Language': 'zh-cn'
													},
													'body': 'functionId=cutPriceByUser&body={\x22activityId\x22:\x22' +
														actID + _0x431c('48', 'c&0b') +
														actsID + _0x431c('49', 'Q@OA')
												};
												return new Promise(_0x5c10c0 => {
													var _0x17fdbe = {
														'JaAeT': function(
														_0x242689) {
															return _0x242689();
														}
													};
													$[_0x431c('4a', '5G8Y')](_0x1902fc,
														(_0x251c55, _0x459ff7,
															_0x28be1c) => {
															if (_0x28be1c) {
																$[_0x431c('4b',
																		'V(Ah')] =
																	JSON['parse'](
																		_0x28be1c);
																_0x17fdbe[_0x431c(
																	'4c',
																	'pUXl')](
																	_0x5c10c0);
															};
														});
												});
											}
										};
									} catch (_0xf5076e) {
										if (_0x57b84c['eAmPL'] !== _0x57b84c[_0x431c('4d',
												'oPfE')]) {
											that[_0x431c('4e', 'AYy#')](_0xf5076e);
										} else {
											$[_0x431c('4f', 'TjHx')](_0x431c('50', 'lB$k') + vo[
												'taskName']);
										}
									} finally {
										_0x57b84c[_0x431c('51', 'v44i')](_0xad610f);
									};
								});
							});
						}

						function _0x564f6a(_0x4cf888, _0x46cad1) {
							var _0x2260fa = {
								'nRPOY': function(_0x5c7ebc, _0x3891eb) {
									return _0x5c7ebc !== _0x3891eb;
								},
								'ihBEp': _0x2409d2[_0x431c('52', 'ZiQM')],
								'rwRON': _0x2409d2[_0x431c('53', 'yxdh')],
								'OHtLB': _0x2409d2[_0x431c('54', 'XNO@')]
							};
							let _0x23f6ac = {
								'url': _0x431c('55', 'y*U@'),
								'headers': {
									'Host': _0x431c('56', 'y*U@'),
									'Content-Type': _0x2409d2[_0x431c('57', 'oPfE')],
									'Origin': _0x2409d2[_0x431c('58', 'mp#M')],
									'Accept-Encoding': 'gzip,\x20deflate,\x20br',
									'Cookie': cookie,
									'Connection': _0x2409d2[_0x431c('59', 'ZiQM')],
									'Accept': _0x2409d2[_0x431c('5a', '1!zm')],
									'User-Agent': _0x2409d2[_0x431c('5b', 'Mt7F')],
									'Referer': _0x431c('5c', 'HASC') + _0x4cf888 + _0x431c('5d', 'oPfE'),
									'Accept-Language': _0x2409d2[_0x431c('5e', 'aimA')]
								},
								'body': _0x431c('5f', 'ZiQM') + _0x4cf888 +
									'\x22,\x22userName\x22:\x22\x22,\x22followShop\x22:1,\x22shopId\x22:' +
									_0x46cad1 + _0x431c('60', 'ycnr')
							};
							return new Promise(_0x1f8876 => {
								if (_0x2260fa[_0x431c('61', '5qxM')] !== _0x2260fa[_0x431c('62',
										'V(Ah')]) {
									$[_0x431c('63', '5Twr')](_0x23f6ac, (_0x6e036d, _0xb78901,
										_0x3b0485) => {
										if (_0x2260fa[_0x431c('64', 'c&0b')](_0x2260fa[_0x431c(
												'65', 'y*U@')], _0x431c('66', '3)@c'))) {
											$[_0x431c('67', 'XNO@')](_0x431c('68', 'y*U@') + vo[
												'taskName']);
										} else {
											if (_0x3b0485) {
												$[_0x431c('69', 'DDG0')] = JSON[_0x431c('6a',
													'V(Ah')](_0x3b0485);
												_0x1f8876();
											};
										}
									});
								} else {
									$[_0x431c('6b', 'YH@7')]('\x20\x20\x20\x20└\x20完成任务，获得\x20' + data[
											'data'][_0x431c('6c', 'bsfr')][_0x431c('6d', 'Dsjk')] +
										_0x431c('6e', 'Q@OA'));
								}
							});
						}

						function _0x40a9f4(_0x4fdc33, _0x928c42) {
							var _0x244006 = {
								'IMybN': function(_0x13a533, _0x1f81b9) {
									return _0x2409d2[_0x431c('6f', 'bsfr')](_0x13a533, _0x1f81b9);
								},
								'wPyAf': function(_0x1ee5ca) {
									return _0x2409d2[_0x431c('70', 'oPfE')](_0x1ee5ca);
								}
							};
							if (_0x2409d2[_0x431c('71', 'ycnr')] === _0x2409d2['ohBGn']) {
								let _0x5e71d3 = {
									'url': 'https://api.r2ray.com/jd.bargain/done',
									'headers': {
										'Content-Type': _0x431c('72', 'lB$k')
									},
									'body': JSON['stringify']({
										'actID': _0x4fdc33,
										'actsID': _0x928c42,
										'done': 0x1
									})
								};
								return new Promise(_0x4c42cf => {
									var _0x58fa50 = {
										'PcqqB': function(_0x136fb7, _0xc49e1) {
											return _0x244006['IMybN'](_0x136fb7, _0xc49e1);
										},
										'MupkZ': 'PoSDt',
										'Pzzmo': function(_0x8d576d) {
											return _0x8d576d();
										}
									};
									$['post'](_0x5e71d3, (_0x4bf11f, _0x56585e, _0x1ce38f) => {
										if (_0x58fa50['PcqqB'](_0x431c('73', 'yxdh'), _0x58fa50[
												_0x431c('74', 'pUXl')])) {
											if (_0x1ce38f) {
												$[_0x431c('75', '5qxM')] = JSON[_0x431c('76',
													'p$1^')](_0x1ce38f);
												_0x4c42cf();
											};
										} else {
											_0x58fa50[_0x431c('77', 'lB$k')](_0x4c42cf);
										}
									});
								});
							} else {
								var _0x1f415d = {
									'DoPDK': function(_0x2d77c1) {
										return _0x244006[_0x431c('78', 'V6%d')](_0x2d77c1);
									}
								};
								$[_0x431c('79', 'TjHx')](opt, (_0x9fb73e, _0x19ebd8, _0x16a996) => {
									if (_0x16a996) {
										$[_0x431c('7a', 'V6%d')] = JSON[_0x431c('7b', 'aimA')](
											_0x16a996);
										_0x1f415d['DoPDK'](resolve);
									};
								});
							}
						}
						await _0x2409d2[_0x431c('7c', '^*t0')](_0xecc0f8);
						if (_0x2409d2[_0x431c('7d', 'c9CC')]($[_0x431c('7e', 'Mt7F')]['data'][_0x431c('7f',
								'XNO@')], 0x0)) {
							for (let _0x2011d3 = 0x0; _0x2409d2['NYAoo'](_0x2011d3, $[_0x431c('80', 'kR%k')][
									_0x431c('81', 'oPfE')
								][_0x431c('82', 'lB$k')]); _0x2011d3++) {
								actID = $['zData']['data'][_0x2011d3]['actID'];
								actsID = $[_0x431c('83', 'sQSb')][_0x431c('84', 'EQn6')][_0x2011d3][_0x431c(
									'85', 'XNO@')];
								await _0x2409d2['JaGpg'](_0x564f6a, actID, actsID);
								await $[_0x431c('86', 'HASC')](0x5dc);
								if ($[_0x431c('87', '5qxM')] && _0x2409d2[_0x431c('88', 'Q@OA')]($['Res'][
										'status'
									], 0x4)) {
									if (_0x2409d2[_0x431c('89', ']Dsm')](_0x2409d2['kSvlj'], _0x2409d2[_0x431c(
											'8a', 'Q@OA')])) {
										await _0x2409d2[_0x431c('8b', 'yxdh')](_0x40a9f4, actID, actsID);
									} else {
										$['post'](opt, (_0x18067b, _0x1c69aa, _0x421586) => {
											_0x2409d2[_0x431c('8c', 'Q@OA')](resolve);
										});
									}
								}
							};
						};
					} else {
						if (data[_0x431c('8d', 'D4^H')]['result'][_0x431c('8e', '1!zm')][_0x431c('8f', 'r9VS')](
								_0x2409d2[_0x431c('90', '5qxM')])) {
							$[_0x431c('91', 'DDG0')](_0x431c('92', 'HASC') + data[_0x431c('93', 'pUXl')][
									_0x431c('94', 'c&0b')
								]['userAwardsCacheDto'][_0x431c('95', '3)@c')][_0x431c('96', 'p$1^')] +
								_0x431c('97', 'V(Ah'));
							$[_0x431c('98', '1!zm')] += parseInt(data[_0x431c('99', 'kR%k')][_0x431c('9a',
								'^*t0')]['userAwardsCacheDto']['jBeanAwardVo'][_0x431c('9b', 'r9VS')]);
						} else {
							message += _0x431c('9c', 'D4^H') + $['index'] + '】' + ($[_0x431c('9d', 'kR%k')] ||
								$['UserName']) + _0x431c('9e', 'KPC9') + JSON[_0x431c('9f', 'ZiQM')](data[
								'data'][_0x431c('a0', 'mx%[')][_0x431c('a1', 'ZiQM')]);
						}
					}
				};
			}
		} else {
			_0x2409d2[_0x431c('a2', '5G8Y')](resolve);
		}
	}
	if (_0x2409d2[_0x431c('a3', 'oPfE')](message, '')) {
		if ($[_0x431c('a4', 'KPC9')]()) {
			if (_0x2409d2[_0x431c('a5', '4&2l')](_0x2409d2[_0x431c('a6', 'lB$k')], 'XENHz')) {
				await notify[_0x431c('a7', '1!zm')]($[_0x431c('a8', 'g6h!')], message);
			} else {
				$[_0x431c('a9', '1!zm')]('已经完成\x20' + vo[_0x431c('aa', 'y*U@')]);
			}
		} else {
			$['msg']($['name'], _0x431c('ab', 'aimA'), message);
		}
	}
})()['catch'](_0x5dde7e => {
	$[_0x431c('ac', 'Y2ua')]('', '❌\x20' + $[_0x431c('ad', 'mp#M')] + ',\x20失败!\x20原因:\x20' + _0x5dde7e + '!', '');
})[_0x431c('ae', 'KPC9')](() => {
	$[_0x431c('af', 'oPfE')]();
});
async function oneplus() {
	var _0x13c236 = {
		'VAArZ': _0x431c('b0', '4E&2'),
		'RWoXM': function(_0x94fbe6) {
			return _0x94fbe6();
		},
		'KXtxo': function(_0x2b8dba, _0x388b66, _0x39aba7) {
			return _0x2b8dba(_0x388b66, _0x39aba7);
		},
		'gKcJQ': 'healthyDay_getHomeData',
		'oDabT': _0x431c('b1', 'sQSb'),
		'seSnV': _0x431c('b2', 'u$sY'),
		'jwypG': '获取活动参数成功',
		'xfzlB': function(_0x3dba33, _0x436820) {
			return _0x3dba33 === _0x436820;
		},
		'YhMmA': _0x431c('b3', 'Y2ua'),
		'ykvzo': function(_0x4e7347, _0x5f67a0) {
			return _0x4e7347 > _0x5f67a0;
		},
		'UZqGh': function(_0x4b190d, _0x479425) {
			return _0x4b190d - _0x479425;
		},
		'iSCHJ': function(_0x2d0667, _0x42ef23) {
			return _0x2d0667 === _0x42ef23;
		},
		'qZbeo': _0x431c('b4', 'Y2ua'),
		'VAqgc': function(_0x169ff3, _0x4379ef, _0x1d3830) {
			return _0x169ff3(_0x4379ef, _0x1d3830);
		},
		'WfatH': function(_0x5af951, _0x498783) {
			return _0x5af951 - _0x498783;
		},
		'PtSDB': function(_0x10b447, _0x360602, _0x4f9246) {
			return _0x10b447(_0x360602, _0x4f9246);
		},
		'ttwbb': 'harmony_collectScore',
		'vJdpb': function(_0x14f3f3, _0x55981b) {
			return _0x14f3f3 > _0x55981b;
		},
		'VVxfm': function(_0x52f950, _0x1dd47f) {
			return _0x52f950 > _0x1dd47f;
		},
		'FmMxJ': function(_0x2e2f29, _0x2d6e6f) {
			return _0x2e2f29 < _0x2d6e6f;
		},
		'lIpgj': function(_0x2bc625, _0x2fa5fe, _0x491dbb) {
			return _0x2bc625(_0x2fa5fe, _0x491dbb);
		},
		'pcmDL': _0x431c('b5', 'v44i'),
		'RYSji': function(_0x9786ca, _0x239943) {
			return _0x9786ca > _0x239943;
		},
		'nlfIP': function(_0x412a23, _0x12eda5) {
			return _0x412a23 - _0x12eda5;
		},
		'mHpyJ': function(_0x1c2228, _0x4a4943) {
			return _0x1c2228 !== _0x4a4943;
		},
		'EDBgH': function(_0x1297d0, _0x3f75ed) {
			return _0x1297d0 > _0x3f75ed;
		},
		'sfHcl': function(_0x5950c0, _0x5f39ae) {
			return _0x5950c0 - _0x5f39ae;
		},
		'wzhgP': 'xQxpC',
		'QOjOT': function(_0x220864, _0x41c050) {
			return _0x220864(_0x41c050);
		},
		'Zktox': function(_0x1df600, _0x27d1b4) {
			return _0x1df600 / _0x27d1b4;
		},
		'hSGdv': _0x431c('b6', 'P]Fw'),
		'rwtbP': function(_0x4dfe02, _0xcdbda3, _0x568ed9) {
			return _0x4dfe02(_0xcdbda3, _0x568ed9);
		},
		'AVufI': 'interact_template_getLotteryResult'
	};
	await _0x13c236['KXtxo'](doTask, _0x13c236['gKcJQ'], {
		'appId': _0x13c236[_0x431c('b7', 'p$1^')],
		'taskToken': '',
		'channelId': 0x1
	});
	await $[_0x431c('b8', 'ZiQM')](0x3e8);
	if ($['taskVos']) {
		if ('qoDzz' !== _0x13c236['seSnV']) {
			$[_0x431c('b9', '5Twr')](_0x13c236[_0x431c('ba', 'ycnr')]);
			for (const _0x1120ce of $['taskVos']) {
				if (_0x13c236[_0x431c('bb', 'mp#M')](_0x13c236[_0x431c('bc', 'ZbXD')], _0x431c('bd', 'p$1^'))) {
					$[_0x431c('be', 'bsfr')](err);
				} else {
					waitTime = _0x1120ce[_0x431c('bf', 'DDG0')] ? _0x1120ce[_0x431c('c0', 'v44i')] * 0x3e8 : 0x1f4;
					switch (_0x1120ce[_0x431c('c1', 'ycnr')]) {
						case 0x1:
							if (_0x13c236[_0x431c('c2', 'yxdh')](_0x13c236[_0x431c('c3', 'axxw')](_0x1120ce[_0x431c(
									'c4', 'TjHx')], _0x1120ce[_0x431c('c5', '5qxM')]), 0x0)) {
								if (_0x13c236['iSCHJ'](_0x13c236[_0x431c('c6', 'D4^H')], 'ZPlWD')) {
									if (data[_0x431c('c7', 'p$1^')][_0x431c('c8', 'lJ[p')]['hasOwnProperty'](
											_0x13c236[_0x431c('c9', 'HASC')])) {
										$[_0x431c('ca', 'mx%[')](_0x431c('cb', '1!zm') + data['data']['result'][
											'score'
										] + _0x431c('cc', 'c9CC'));
									}
								} else {
									$[_0x431c('cd', 'V6%d')]('\x0a开始执行\x20' + _0x1120ce[_0x431c('aa', 'y*U@')]);
									await _0x13c236[_0x431c('ce', 'EQn6')](doTask, _0x431c('cf', 'Mt7F'), {
										'appId': _0x431c('d0', '8$sX'),
										'taskToken': _0x1120ce['productInfoVos'][0x0][_0x431c('d1',
											'u$sY')],
										'taskId': _0x1120ce[_0x431c('d2', 'bsfr')],
										'actionType': '0'
									});
									await $[_0x431c('d3', 'EQn6')](waitTime);
									await doTask(_0x431c('d4', 'HASC'), {
										'appId': _0x13c236[_0x431c('d5', 'mx%[')],
										'taskId': _0x1120ce[_0x431c('d6', 'v44i')]
									});
								}
							} else {
								$[_0x431c('d7', 'c9CC')](_0x431c('d8', 'Y2ua') + _0x1120ce['taskName']);
							}
							break;
						case 0x3:
							if (_0x13c236['ykvzo'](_0x13c236['WfatH'](_0x1120ce['maxTimes'], _0x1120ce[_0x431c('d9',
									'r9VS')]), 0x0)) {
								$[_0x431c('d7', 'c9CC')](_0x431c('da', 'Q@OA') + _0x1120ce[_0x431c('db', 'ZbXD')]);
								await _0x13c236['VAqgc'](doTask, _0x431c('dc', 'bsfr'), {
									'appId': _0x13c236[_0x431c('dd', '8$sX')],
									'taskToken': _0x1120ce[_0x431c('de', 'AYy#')][0x0][_0x431c('df',
										'Mt7F')],
									'taskId': _0x1120ce['taskId'],
									'actionType': '1'
								});
								await $['wait'](waitTime);
								await doTask(_0x431c('e0', 'Q@OA'), {
									'appId': _0x13c236[_0x431c('d5', 'mx%[')],
									'taskToken': _0x1120ce[_0x431c('e1', '5G8Y')][0x0]['taskToken'],
									'taskId': _0x1120ce[_0x431c('e2', 'XNO@')],
									'actionType': '0'
								});
							} else {
								$[_0x431c('e3', 'p$1^')](_0x431c('e4', ']Dsm') + _0x1120ce[_0x431c('e5', 'kR%k')]);
							}
							break;
						case 0x5:
							if (_0x13c236[_0x431c('e6', 'r9VS')](_0x1120ce[_0x431c('e7', 'lJ[p')], _0x1120ce[
									_0x431c('e8', 'XNO@')]) > 0x0) {
								$[_0x431c('e9', 'mp#M')](_0x431c('ea', 'YH@7') + _0x1120ce[_0x431c('eb', 'Dsjk')]);
								taskList = _0x1120ce[_0x431c('ec', 'yxdh')]['filter'](_0x18d0a4 => _0x18d0a4[
									_0x431c('ed', '4&2l')] === 0x1);
								for (const _0x4f7791 of taskList) {
									await _0x13c236['PtSDB'](doTask, _0x13c236['ttwbb'], {
										'appId': '1EFRWyw',
										'taskToken': _0x4f7791[_0x431c('ee', 'HASC')],
										'taskId': _0x1120ce[_0x431c('ef', 'mp#M')],
										'actionType': '1'
									});
									await $['wait'](waitTime);
									await _0x13c236[_0x431c('f0', 'c&0b')](doTask, _0x13c236['ttwbb'], {
										'appId': _0x431c('f1', 'ZbXD'),
										'taskToken': _0x4f7791['taskToken'],
										'taskId': _0x1120ce[_0x431c('f2', 'YH@7')],
										'actionType': '0'
									});
								}
							} else {
								$[_0x431c('6b', 'YH@7')]('已经完成\x20' + _0x1120ce[_0x431c('f3', 'D4^H')]);
							}
							break;
						case 0x6:
							if (_0x13c236['vJdpb'](_0x13c236['WfatH'](_0x1120ce[_0x431c('f4', '3)@c')], _0x1120ce[
									_0x431c('f5', ']Dsm')]), 0x0)) {
								if (_0x13c236[_0x431c('f6', 'AYy#')]($['helpPoor']['length'], 0x0)) {
									for (let _0x1a7afd = 0x0; _0x13c236[_0x431c('f7', 'v44i')](_0x1a7afd, $[_0x431c(
											'f8', '4&2l')][_0x431c('f9', 'D4^H')]); _0x1a7afd++) {
										$['log'](_0x431c('fa', 'yxdh') + _0x1120ce[_0x431c('fb', 'c9CC')]);
										await doTask(_0x431c('fc', '4&2l'), {
											'appId': _0x13c236[_0x431c('fd', 'TjHx')],
											'taskToken': $[_0x431c('fe', 'p$1^')][_0x1a7afd],
											'channelId': 0x1
										});
										await $['wait'](waitTime);
										await _0x13c236[_0x431c('ff', 'mp#M')](doTask, _0x13c236[_0x431c('100',
											'aimA')], {
											'appId': _0x431c('101', 'r9VS'),
											'taskToken': $[_0x431c('102', 'u$sY')][_0x1a7afd],
											'taskId': _0x1120ce['taskId'],
											'actionType': '0'
										});
									}
								}
								$[_0x431c('103', '5qxM')](_0x13c236[_0x431c('104', ']Dsm')]);
								$[_0x431c('105', 'P]Fw')]['push'](_0x1120ce[_0x431c('106', 'oPfE')][_0x431c('107',
									'EQn6')]);
							} else {
								$['log'](_0x431c('108', 'pUXl') + _0x1120ce[_0x431c('109', 'lB$k')]);
							}
							break;
						case 0x7:
							if (_0x13c236[_0x431c('10a', 'YH@7')](_0x13c236[_0x431c('10b', 'Y2ua')](_0x1120ce[
									_0x431c('10c', 'D4^H')], _0x1120ce[_0x431c('10d', 'TjHx')]), 0x0)) {
								$[_0x431c('10e', 'Dsjk')]('\x0a开始执行\x20' + _0x1120ce[_0x431c('10f', 'aimA')]);
								taskList = _0x1120ce[_0x431c('110', 'Y2ua')][_0x431c('111', 'V6%d')](_0x3f0f2f =>
									_0x3f0f2f['status'] === 0x1);
								for (const _0xcd1864 of taskList) {
									if (_0x13c236[_0x431c('112', 'lJ[p')](_0x431c('113', 'mx%['), _0x431c('114',
											'AYy#'))) {
										$[_0x431c('115', 'kR%k')](_0x431c('116', 'V(Ah'));
									} else {
										await doTask(_0x431c('cf', 'Mt7F'), {
											'appId': _0x13c236[_0x431c('117', '^*t0')],
											'taskToken': _0xcd1864[_0x431c('118', 'AYy#')],
											'taskId': _0x1120ce[_0x431c('119', 'Dsjk')],
											'actionType': '1'
										});
										await $[_0x431c('11a', ']Dsm')](waitTime);
										await doTask(_0x431c('11b', '4E&2'), {
											'appId': _0x13c236['oDabT'],
											'taskToken': _0xcd1864[_0x431c('11c', 'KPC9')],
											'taskId': _0x1120ce[_0x431c('d6', 'v44i')],
											'actionType': '0'
										});
									}
								}
							} else {
								$[_0x431c('11d', 'ZbXD')](_0x431c('68', 'y*U@') + _0x1120ce['taskName']);
							}
							break;
						case 0x8:
							if (_0x13c236[_0x431c('11e', 'mx%[')](_0x13c236[_0x431c('11f', 'Y2ua')](_0x1120ce[
									_0x431c('120', 'Q@OA')], _0x1120ce[_0x431c('121', 'lJ[p')]), 0x0)) {
								$['log'](_0x431c('122', 'EQn6') + _0x1120ce[_0x431c('123', 'P]Fw')]);
								await _0x13c236[_0x431c('124', 'pUXl')](doTask, _0x431c('125', 'yxdh'), {
									'appId': _0x13c236[_0x431c('126', 'D4^H')],
									'taskToken': _0x1120ce[_0x431c('127', 'Mt7F')][_0x431c('107', 'EQn6')],
									'taskId': _0x1120ce['taskId'],
									'actionType': '0'
								});
								await $[_0x431c('128', 'c9CC')](waitTime);
							} else {
								$['log'](_0x431c('129', 'axxw') + _0x1120ce['taskName']);
							}
							break;
						default:
							break;
					}
				}
			}
		} else {
			$[_0x431c('12a', '8$sX')] = data['data']['result']['taskVos'];
			$[_0x431c('12b', '^*t0')] = data[_0x431c('81', 'oPfE')][_0x431c('12c', 'ZbXD')][_0x431c('12d', 'lJ[p')];
		}
	} else {
		if (_0x13c236['mHpyJ'](_0x13c236[_0x431c('12e', 'AYy#')], _0x13c236[_0x431c('12f', 'pUXl')])) {
			$[_0x431c('130', 'HASC')] = JSON['parse'](data);
			_0x13c236[_0x431c('131', 'pUXl')](resolve);
		} else {
			$[_0x431c('132', 'D4^H')]('东哥喜欢奶茶妹不喜欢你～');
		}
	}
	await _0x13c236['lIpgj'](doTask, _0x13c236['gKcJQ'], {
		'appId': _0x431c('133', 'ZiQM'),
		'taskToken': '',
		'channelId': 0x1
	});
	if ($['userInfo']) {
		$['userScore'] = parseInt($[_0x431c('134', 'bsfr')][_0x431c('135', 'c&0b')]);
		$[_0x431c('136', ']Dsm')](_0x431c('137', 'P]Fw') + $[_0x431c('138', 'Dsjk')]);
		if ($['userScore'] > $[_0x431c('139', 'oPfE')][_0x431c('13a', 'V(Ah')]) {
			times = _0x13c236[_0x431c('13b', 'ZbXD')](parseInt, _0x13c236[_0x431c('13c', 'axxw')]($['userScore'], $[
				_0x431c('13d', 'sQSb')][_0x431c('13e', 'Q@OA')]));
			for (let _0x429686 = 0x0; _0x429686 < times; _0x429686++) {
				$['log'](_0x13c236['hSGdv']);
				await _0x13c236['rwtbP'](doTask, _0x13c236[_0x431c('13f', 'YH@7')], {
					'appId': _0x431c('d0', '8$sX')
				});
				await $[_0x431c('86', 'HASC')](0x1f4);
			}
		}
	}
}

function doTask(_0xbb1188, _0x2e7dc6) {
	var _0x4fe1c5 = {
		'IgLzK': _0x431c('140', 'yxdh'),
		'DSpkz': 'healthyDay_getHomeData',
		'nYgTT': _0x431c('141', ']Dsm'),
		'uKArO': _0x431c('142', 'aimA'),
		'DaztW': 'jBeanAwardVo',
		'vBmWs': function(_0xc6f8a2, _0x120a2d) {
			return _0xc6f8a2 === _0x120a2d;
		},
		'KDSkV': function(_0x2c3515, _0x4c2e0e) {
			return _0x2c3515 !== _0x4c2e0e;
		},
		'JFbpx': _0x431c('143', 'mx%['),
		'kliUe': function(_0x4a770e) {
			return _0x4a770e();
		}
	};
	return new Promise(_0x1bc343 => {
		var _0x3a435f = {
			'HCnTt': _0x4fe1c5[_0x431c('144', 'V6%d')],
			'AaoBq': function(_0x4d619e, _0x156d45) {
				return _0x4d619e === _0x156d45;
			},
			'ueYOB': _0x431c('145', 'TjHx'),
			'NzPKg': _0x4fe1c5[_0x431c('146', 'Mt7F')],
			'gRCLx': _0x431c('147', 'oPfE'),
			'vjuaO': _0x4fe1c5[_0x431c('148', 'P]Fw')],
			'QxocU': _0x4fe1c5[_0x431c('149', 'axxw')],
			'dflpE': _0x4fe1c5['DaztW'],
			'FTjCx': function(_0x4dcda4, _0x1366d1) {
				return _0x4dcda4 !== _0x1366d1;
			},
			'mDJll': function(_0x592a11, _0x5420d0) {
				return _0x4fe1c5[_0x431c('14a', '^*t0')](_0x592a11, _0x5420d0);
			},
			'oCQhZ': _0x431c('14b', 'XNO@'),
			'nnIWK': function(_0x3781a0, _0x1561ab) {
				return _0x4fe1c5[_0x431c('14c', 'mp#M')](_0x3781a0, _0x1561ab);
			},
			'NsKKb': _0x4fe1c5[_0x431c('14d', 'Q@OA')],
			'ACkTI': function(_0x292650) {
				return _0x4fe1c5[_0x431c('14e', 'KPC9')](_0x292650);
			}
		};
		$[_0x431c('14f', 'mx%[')](postUrl(_0xbb1188, _0x2e7dc6), (_0x29f780, _0x167732, _0x1a8549) => {
			var _0xac62b8 = {
				'oFgGm': _0x431c('150', 'HASC')
			};
			if (_0x3a435f['HCnTt'] !== 'QQpaM') {
				message += '\x0a【京东账号' + $[_0x431c('151', 'YH@7')] + '】' + ($['nickName'] || $[_0x431c(
						'152', '4&2l')]) +
					'\x20\x0a\x20\x20\x20\x20\x20\x20\x20└\x20中奖了，中奖类型无法判断。如果方便请把信息发送给脚本作者进行完善。\x0a\x20\x20\x20\x20\x20\x20\x20└\x20' +
					JSON[_0x431c('153', 'r9VS')](_0x1a8549['data'][_0x431c('154', 'oPfE')][
						'userAwardsCacheDto'
					]);
			} else {
				try {
					if (_0x29f780) {
						$[_0x431c('155', 'oPfE')](JSON[_0x431c('156', 'Mt7F')](_0x29f780));
					} else {
						if (_0x3a435f[_0x431c('157', 'TjHx')](_0x3a435f[_0x431c('158', '1!zm')],
								_0x431c('159', 'bsfr'))) {
							$[_0x431c('15a', 'mp#M')] = ![];
							return;
						} else {
							if (_0x1a8549) {
								_0x1a8549 = JSON[_0x431c('15b', 'D4^H')](_0x1a8549);
								switch (_0xbb1188) {
									case _0x3a435f['NzPKg']:
										if (_0x1a8549[_0x431c('15c', 'lB$k')][_0x431c('15d', 'D4^H')]) {
											$[_0x431c('15e', 'lB$k')] = _0x1a8549[_0x431c('15f',
												'r9VS')]['result'][_0x431c('160', 'aimA')];
											$[_0x431c('161', 'XNO@')] = _0x1a8549['data'][_0x431c('162',
												'mp#M')][_0x431c('163', '8$sX')];
										}
										break;
									case _0x3a435f[_0x431c('164', 'aimA')]:
										if (_0x1a8549['data']['success']) {
											if (_0x1a8549['data'][_0x431c('165', 'axxw')][_0x431c('166',
													'axxw')](_0x431c('167', 'lB$k'))) {
												$[_0x431c('168', 'lB$k')](_0x431c('169', 'y*U@') +
													_0x1a8549[_0x431c('16a', 'YH@7')][_0x431c('154',
														'oPfE')][_0x431c('16b', 'pUXl')] + '\x20加油值'
													);
											}
										}
										break;
									case _0x3a435f[_0x431c('16c', 'bsfr')]:
										if (_0x1a8549['data'][_0x431c('16d', 'P]Fw')]) {
											if (_0x1a8549['data'][_0x431c('16e', 'c9CC')][_0x431c('16f',
													'c&0b')](_0x3a435f[_0x431c('170', 'mx%[')])) {
												if (_0x1a8549[_0x431c('c7', 'p$1^')][_0x431c('171',
														'r9VS')][_0x431c('172', 'mx%[')][_0x431c('173',
														'Dsjk')](_0x3a435f[_0x431c('174', 'HASC')])) {
													$[_0x431c('175', 'u$sY')](_0x431c('176', '^*t0') +
														_0x1a8549['data'][_0x431c('177', 'HASC')][
															_0x431c('178', 'axxw')
														]['jBeanAwardVo'][_0x431c('179', 'AYy#')] +
														_0x431c('17a', 'c9CC'));
													$[_0x431c('17b', 'Mt7F')] += parseInt(_0x1a8549[
														_0x431c('c7', 'p$1^')][_0x431c('16e',
														'c9CC')][_0x431c('17c', 'c&0b')][
														_0x431c('17d', 'ycnr')
													][_0x431c('17e', 'c9CC')]);
												}
											}
										}
										break;
									case _0x431c('17f', '8$sX'):
										if (_0x1a8549[_0x431c('180', '8$sX')][_0x431c('15d', 'D4^H')]) {
											if (_0x1a8549[_0x431c('181', '5Twr')]['result'][_0x431c(
													'182', 'HASC')](_0x3a435f['QxocU'])) {
												if (_0x1a8549[_0x431c('183', 'lJ[p')]['result'][_0x431c(
														'184', 'pUXl')][_0x431c('185', 'kR%k')](
														_0x3a435f[_0x431c('186', 'r9VS')])) {
													$['log']('\x20\x20\x20\x20└\x20恭喜，获得\x20[' +
														_0x1a8549['data'][_0x431c('187', 'ycnr')][
															'userAwardsCacheDto'
														]['jBeanAwardVo'][_0x431c('188', 'ZiQM')] +
														_0x431c('189', '5Twr'));
													$[_0x431c('18a', 'ZbXD')] += parseInt(_0x1a8549[
														_0x431c('18b', 'axxw')]['result'][
														_0x431c('18c', 'Mt7F')
													][_0x431c('18d', 'TjHx')]['quantity']);
												} else {
													if (_0x3a435f[_0x431c('18e', 'c9CC')]('JtRYH',
															'WrHpL')) {
														message += _0x431c('18f', 'lB$k') + $[_0x431c(
															'190', 'axxw')] + '】' + ($[
															'nickName'] || $['UserName']) + _0x431c(
															'191', 'Dsjk') + JSON[_0x431c('192',
															'3)@c')](_0x1a8549[_0x431c('193',
															'HASC')]['result'][_0x431c('194',
															'AYy#')]);
													} else {
														$['msg']($[_0x431c('195', 'kR%k')], _0xac62b8[
															_0x431c('196', '4E&2')], message);
													}
												}
											}
										}
										break;
									default:
										break;
								}
							} else {
								if (_0x3a435f['mDJll'](_0x3a435f[_0x431c('197', 'v44i')], _0x431c('198',
										'u$sY'))) {
									$['log'](_0x431c('199', 'KPC9') + vo[_0x431c('e5', 'kR%k')]);
								} else {
									$[_0x431c('19a', '8$sX')](_0x431c('19b', 'p$1^'));
								}
							}
						}
					}
				} catch (_0x31c1f1) {
					if (_0x3a435f[_0x431c('19c', '^*t0')](_0x3a435f['NsKKb'], _0x3a435f[_0x431c('19d',
							'Q@OA')])) {
						$[_0x431c('19e', 'Mt7F')](JSON['stringify'](_0x31c1f1));
					} else {
						$['log'](JSON[_0x431c('19f', 'kR%k')](_0x31c1f1));
					}
				} finally {
					_0x3a435f[_0x431c('1a0', 'yxdh')](_0x1bc343);
				}
			}
		});
	});
}

function postUrl(_0x4608eb, _0x3b58fd) {
	var _0x3f90ad = {
		'VAQtZ': _0x431c('1a1', 'bsfr'),
		'dpDfa': _0x431c('1a2', 'mx%['),
		'cVhIs': _0x431c('1a3', 'y*U@')
	};
	return {
		'url': _0x3f90ad[_0x431c('1a4', 'Y2ua')],
		'headers': {
			'Host': _0x3f90ad[_0x431c('1a5', 'lJ[p')],
			'Content-Type': 'application/x-www-form-urlencoded',
			'Origin': _0x431c('1a6', 'pUXl'),
			'Accept-Encoding': _0x431c('1a7', 'KPC9'),
			'Cookie': cookie,
			'Connection': _0x431c('1a8', 'YH@7'),
			'Accept': 'application/json,\x20text/plain,\x20*/*',
			'User-Agent': 'jdapp;iPhone;9.4.4;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;addressid/;supportBestPay/0;appBuild/167588;jdSupportDarkMode/0;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1',
			'Referer': _0x431c('1a9', 'P]Fw'),
			'Accept-Language': _0x3f90ad['cVhIs']
		},
		'body': _0x431c('1aa', '8$sX') + _0x4608eb + _0x431c('1ab', '8$sX') + JSON[_0x431c('1ac', 'u$sY')](_0x3b58fd) +
			_0x431c('1ad', 'kR%k')
	};
}

function checkCookie() {
	var _0x8d49a1 = {
		'eJdeM': '1001',
		'hWzXR': function(_0xdb3d51, _0x5c31da) {
			return _0xdb3d51 === _0x5c31da;
		},
		'qUgUA': 'userInfo',
		'NftLh': function(_0x2a6b8d, _0x5eb03e) {
			return _0x2a6b8d !== _0x5eb03e;
		},
		'uFKOO': _0x431c('1ae', 'g6h!'),
		'VjThJ': _0x431c('1af', 'P7bu'),
		'QyRRs': _0x431c('1b0', '4&2l'),
		'lPxQA': _0x431c('1b1', 'pUXl'),
		'fajVv': function(_0x391c30) {
			return _0x391c30();
		},
		'HGdIv': 'me-api.jd.com',
		'pJoHT': _0x431c('1b2', 'P]Fw'),
		'ujCtO': _0x431c('1b3', 'ZbXD'),
		'XTrtk': 'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/14.0.2\x20Mobile/15E148\x20Safari/604.1',
		'cgaQL': _0x431c('1b4', 'Dsjk'),
		'vcyrg': 'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&',
		'iRvTG': _0x431c('1b5', '5qxM')
	};
	const _0x45c485 = {
		'url': _0x431c('1b6', 'bsfr'),
		'headers': {
			'Host': _0x8d49a1[_0x431c('1b7', 'aimA')],
			'Accept': _0x8d49a1[_0x431c('1b8', 'g6h!')],
			'Connection': _0x8d49a1[_0x431c('1b9', 'YH@7')],
			'Cookie': cookie,
			'User-Agent': _0x8d49a1[_0x431c('1ba', 'r9VS')],
			'Accept-Language': _0x8d49a1[_0x431c('1bb', '5G8Y')],
			'Referer': _0x8d49a1[_0x431c('1bc', '3)@c')],
			'Accept-Encoding': _0x8d49a1['iRvTG']
		}
	};
	return new Promise(_0xeab33a => {
		var _0x31dbf5 = {
			'tLZFl': function(_0x3297f1) {
				return _0x8d49a1['fajVv'](_0x3297f1);
			}
		};
		$[_0x431c('1bd', 'Q@OA')](_0x45c485, (_0x1f6249, _0x5e173b, _0x5a77c1) => {
			try {
				if (_0x1f6249) {
					$[_0x431c('1be', 'AYy#')](_0x1f6249);
				} else {
					if (_0x5a77c1) {
						_0x5a77c1 = JSON[_0x431c('1bf', 'V6%d')](_0x5a77c1);
						if (_0x5a77c1[_0x431c('1c0', 'P7bu')] === _0x8d49a1[_0x431c('1c1', 'pUXl')]) {
							$[_0x431c('1c2', 'yxdh')] = ![];
							return;
						}
						if (_0x8d49a1['hWzXR'](_0x5a77c1[_0x431c('1c3', 'kR%k')], '0') && _0x5a77c1[
								_0x431c('1c4', 'XNO@')][_0x431c('1c5', 'TjHx')](_0x8d49a1[_0x431c('1c6',
								'g6h!')])) {
							if (_0x8d49a1[_0x431c('1c7', 'p$1^')](_0x8d49a1[_0x431c('1c8', 'c&0b')],
									_0x8d49a1['uFKOO'])) {
								_0x31dbf5[_0x431c('1c9', 'y*U@')](_0xeab33a);
							} else {
								$[_0x431c('1ca', 'c9CC')] = _0x5a77c1[_0x431c('1cb', 'P]Fw')][
									'userInfo'][_0x431c('1cc', '4E&2')][_0x431c('1cd', 'yxdh')];
							}
						}
					} else {
						$[_0x431c('1ce', 'ycnr')](_0x8d49a1[_0x431c('1cf', '1!zm')]);
					}
				}
			} catch (_0x3f5a8e) {
				if (_0x8d49a1['NftLh'](_0x8d49a1[_0x431c('1d0', ']Dsm')], _0x8d49a1[_0x431c('1d1',
						'v44i')])) {
					$[_0x431c('1d2', 'Q@OA')](_0x3f5a8e);
				} else {
					if (_0x5a77c1) {
						$['zData'] = JSON['parse'](_0x5a77c1);
					};
				}
			} finally {
				_0xeab33a();
			}
		});
	});
};
_0xodp = 'jsjiami.com.v6';
