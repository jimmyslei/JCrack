var hexcase = 0
  , b64pad = ""
  , chrsz = 8;
function hex_md5(d) {
    return binl2hex(core_md5(str2binl(d), d.length * chrsz))
}
function b64_md5(d) {
    return binl2b64(core_md5(str2binl(d), d.length * chrsz))
}
function hex_hmac_md5(d, _) {
    return binl2hex(core_hmac_md5(d, _))
}
function b64_hmac_md5(d, _) {
    return binl2b64(core_hmac_md5(d, _))
}
function calcMD5(d) {
    return binl2hex(core_md5(str2binl(d), d.length * chrsz))
}
function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
}
function core_md5(d, _) {
    d[_ >> 5] |= 128 << _ % 32,
    d[14 + (_ + 64 >>> 9 << 4)] = _;
    for (var m = 1732584193, r = -271733879, n = -1732584194, h = 271733878, f = 0; f < d.length; f += 16) {
        var i = m
          , c = r
          , e = n
          , t = h
          , m = md5_ff(m, r, n, h, d[f + 0], 7, -680876936)
          , h = md5_ff(h, m, r, n, d[f + 1], 12, -389564586)
          , n = md5_ff(n, h, m, r, d[f + 2], 17, 606105819)
          , r = md5_ff(r, n, h, m, d[f + 3], 22, -1044525330);
        m = md5_ff(m, r, n, h, d[f + 4], 7, -176418897),
        h = md5_ff(h, m, r, n, d[f + 5], 12, 1200080426),
        n = md5_ff(n, h, m, r, d[f + 6], 17, -1473231341),
        r = md5_ff(r, n, h, m, d[f + 7], 22, -45705983),
        m = md5_ff(m, r, n, h, d[f + 8], 7, 1770035416),
        h = md5_ff(h, m, r, n, d[f + 9], 12, -1958414417),
        n = md5_ff(n, h, m, r, d[f + 10], 17, -42063),
        r = md5_ff(r, n, h, m, d[f + 11], 22, -1990404162),
        m = md5_ff(m, r, n, h, d[f + 12], 7, 1804603682),
        h = md5_ff(h, m, r, n, d[f + 13], 12, -40341101),
        n = md5_ff(n, h, m, r, d[f + 14], 17, -1502002290),
        m = md5_gg(m, r = md5_ff(r, n, h, m, d[f + 15], 22, 1236535329), n, h, d[f + 1], 5, -165796510),
        h = md5_gg(h, m, r, n, d[f + 6], 9, -1069501632),
        n = md5_gg(n, h, m, r, d[f + 11], 14, 643717713),
        r = md5_gg(r, n, h, m, d[f + 0], 20, -373897302),
        m = md5_gg(m, r, n, h, d[f + 5], 5, -701558691),
        h = md5_gg(h, m, r, n, d[f + 10], 9, 38016083),
        n = md5_gg(n, h, m, r, d[f + 15], 14, -660478335),
        r = md5_gg(r, n, h, m, d[f + 4], 20, -405537848),
        m = md5_gg(m, r, n, h, d[f + 9], 5, 568446438),
        h = md5_gg(h, m, r, n, d[f + 14], 9, -1019803690),
        n = md5_gg(n, h, m, r, d[f + 3], 14, -187363961),
        r = md5_gg(r, n, h, m, d[f + 8], 20, 1163531501),
        m = md5_gg(m, r, n, h, d[f + 13], 5, -1444681467),
        h = md5_gg(h, m, r, n, d[f + 2], 9, -51403784),
        n = md5_gg(n, h, m, r, d[f + 7], 14, 1735328473),
        m = md5_hh(m, r = md5_gg(r, n, h, m, d[f + 12], 20, -1926607734), n, h, d[f + 5], 4, -378558),
        h = md5_hh(h, m, r, n, d[f + 8], 11, -2022574463),
        n = md5_hh(n, h, m, r, d[f + 11], 16, 1839030562),
        r = md5_hh(r, n, h, m, d[f + 14], 23, -35309556),
        m = md5_hh(m, r, n, h, d[f + 1], 4, -1530992060),
        h = md5_hh(h, m, r, n, d[f + 4], 11, 1272893353),
        n = md5_hh(n, h, m, r, d[f + 7], 16, -155497632),
        r = md5_hh(r, n, h, m, d[f + 10], 23, -1094730640),
        m = md5_hh(m, r, n, h, d[f + 13], 4, 681279174),
        h = md5_hh(h, m, r, n, d[f + 0], 11, -358537222),
        n = md5_hh(n, h, m, r, d[f + 3], 16, -722521979),
        r = md5_hh(r, n, h, m, d[f + 6], 23, 76029189),
        m = md5_hh(m, r, n, h, d[f + 9], 4, -640364487),
        h = md5_hh(h, m, r, n, d[f + 12], 11, -421815835),
        n = md5_hh(n, h, m, r, d[f + 15], 16, 530742520),
        m = md5_ii(m, r = md5_hh(r, n, h, m, d[f + 2], 23, -995338651), n, h, d[f + 0], 6, -198630844),
        h = md5_ii(h, m, r, n, d[f + 7], 10, 1126891415),
        n = md5_ii(n, h, m, r, d[f + 14], 15, -1416354905),
        r = md5_ii(r, n, h, m, d[f + 5], 21, -57434055),
        m = md5_ii(m, r, n, h, d[f + 12], 6, 1700485571),
        h = md5_ii(h, m, r, n, d[f + 3], 10, -1894986606),
        n = md5_ii(n, h, m, r, d[f + 10], 15, -1051523),
        r = md5_ii(r, n, h, m, d[f + 1], 21, -2054922799),
        m = md5_ii(m, r, n, h, d[f + 8], 6, 1873313359),
        h = md5_ii(h, m, r, n, d[f + 15], 10, -30611744),
        n = md5_ii(n, h, m, r, d[f + 6], 15, -1560198380),
        r = md5_ii(r, n, h, m, d[f + 13], 21, 1309151649),
        m = md5_ii(m, r, n, h, d[f + 4], 6, -145523070),
        h = md5_ii(h, m, r, n, d[f + 11], 10, -1120210379),
        n = md5_ii(n, h, m, r, d[f + 2], 15, 718787259),
        r = md5_ii(r, n, h, m, d[f + 9], 21, -343485551),
        m = safe_add(m, i),
        r = safe_add(r, c),
        n = safe_add(n, e),
        h = safe_add(h, t)
    }
    return Array(m, r, n, h)
}
function md5_cmn(d, _, m, r, n, h) {
    return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(r, h)), n), m)
}
function md5_ff(d, _, m, r, n, h, f) {
    return md5_cmn(_ & m | ~_ & r, d, _, n, h, f)
}
function md5_gg(d, _, m, r, n, h, f) {
    return md5_cmn(_ & r | m & ~r, d, _, n, h, f)
}
function md5_hh(d, _, m, r, n, h, f) {
    return md5_cmn(_ ^ m ^ r, d, _, n, h, f)
}
function md5_ii(d, _, m, r, n, h, f) {
    return md5_cmn(m ^ (_ | ~r), d, _, n, h, f)
}
function core_hmac_md5(d, _) {
    var m = str2binl(d);
    16 < m.length && (m = core_md5(m, d.length * chrsz));
    for (var r = Array(16), n = Array(16), h = 0; h < 16; h++)
        r[h] = 909522486 ^ m[h],
        n[h] = 1549556828 ^ m[h];
    var f = core_md5(r.concat(str2binl(_)), 512 + _.length * chrsz);
    return core_md5(n.concat(f), 640)
}
function safe_add(d, _) {
    var m = (65535 & d) + (65535 & _);
    return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m
}
function bit_rol(d, _) {
    return d << _ | d >>> 32 - _
}
function str2binl(d) {
    for (var _ = Array(), m = (1 << chrsz) - 1, r = 0; r < d.length * chrsz; r += chrsz)
        _[r >> 5] |= (d.charCodeAt(r / chrsz) & m) << r % 32;
    return _
}
function binl2hex(d) {
    for (var _ = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", m = "", r = 0; r < 4 * d.length; r++)
        m += _.charAt(d[r >> 2] >> r % 4 * 8 + 4 & 15) + _.charAt(d[r >> 2] >> r % 4 * 8 & 15);
    return m
}
function binl2b64(d) {
    for (var _ = "", m = 0; m < 4 * d.length; m += 3)
        for (var r = (d[m >> 2] >> m % 4 * 8 & 255) << 16 | (d[m + 1 >> 2] >> (m + 1) % 4 * 8 & 255) << 8 | d[m + 2 >> 2] >> (m + 2) % 4 * 8 & 255, n = 0; n < 4; n++)
            8 * m + 6 * n > 32 * d.length ? _ += b64pad : _ += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r >> 6 * (3 - n) & 63);
    return _
}
