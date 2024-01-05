import{J as Ye,S as xe,i as Ee,s as Te,k as M,a as W,q as V,l as I,m as R,c as $,r as q,h as T,n as D,b as J,G as k,K as ve,g as be,u as ye,H as B,I as ue,L as _e,M as ei,N as ii,O as ti,P as si,y as Oe,z as Ne,A as Me,d as Ie,Q as ri,B as Re}from"../chunks/index.ea66d81e.js";import{w as Ve,r as ai}from"../chunks/index.bbb73291.js";var oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Le={exports:{}};(function(w,i){(function(b,r){var m="1.0.37",o="",c="?",d="function",v="undefined",f="object",p="string",x="major",t="model",a="name",e="type",s="vendor",l="version",P="architecture",z="console",n="mobile",u="tablet",g="smarttv",N="wearable",L="embedded",te=500,G="Amazon",X="Apple",ae="ASUS",de="BlackBerry",j="Browser",Z="Chrome",C="Edge",U="Firefox",O="Google",we="Huawei",Q="LG",oe="Microsoft",me="Motorola",K="Opera",se="Samsung",pe="Sharp",ee="Sony",ne="Xiaomi",le="Zebra",qe="Facebook",ze="Chromium OS",Be="Mac OS",Ke=function(y,A){var _={};for(var S in y)A[S]&&A[S].length%2===0?_[S]=A[S].concat(y[S]):_[S]=y[S];return _},Ae=function(y){for(var A={},_=0;_<y.length;_++)A[y[_].toUpperCase()]=y[_];return A},Ge=function(y,A){return typeof y===p?fe(A).indexOf(fe(y))!==-1:!1},fe=function(y){return y.toLowerCase()},Je=function(y){return typeof y===p?y.replace(/[^\d\.]/g,o).split(".")[0]:r},Pe=function(y,A){if(typeof y===p)return y=y.replace(/^\s\s*/,o),typeof A===v?y:y.substring(0,te)},he=function(y,A){for(var _=0,S,ie,F,E,h,Y;_<A.length&&!h;){var De=A[_],Fe=A[_+1];for(S=ie=0;S<De.length&&!h&&De[S];)if(h=De[S++].exec(y),h)for(F=0;F<Fe.length;F++)Y=h[++ie],E=Fe[F],typeof E===f&&E.length>0?E.length===2?typeof E[1]==d?this[E[0]]=E[1].call(this,Y):this[E[0]]=E[1]:E.length===3?typeof E[1]===d&&!(E[1].exec&&E[1].test)?this[E[0]]=Y?E[1].call(this,Y,E[2]):r:this[E[0]]=Y?Y.replace(E[1],E[2]):r:E.length===4&&(this[E[0]]=Y?E[3].call(this,Y.replace(E[1],E[2])):r):this[E]=Y||r;_+=2}},Ue=function(y,A){for(var _ in A)if(typeof A[_]===f&&A[_].length>0){for(var S=0;S<A[_].length;S++)if(Ge(A[_][S],y))return _===c?r:_}else if(Ge(A[_],y))return _===c?r:_;return y},Qe={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},He={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},je={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[l,[a,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[l,[a,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[a,l],[/opios[\/ ]+([\w\.]+)/i],[l,[a,K+" Mini"]],[/\bopr\/([\w\.]+)/i],[l,[a,K]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[l,[a,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[a,l],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[l,[a,"UC"+j]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[l,[a,"WeChat"]],[/konqueror\/([\w\.]+)/i],[l,[a,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[l,[a,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[l,[a,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[l,[a,"Smart Lenovo "+j]],[/(avast|avg)\/([\w\.]+)/i],[[a,/(.+)/,"$1 Secure "+j],l],[/\bfocus\/([\w\.]+)/i],[l,[a,U+" Focus"]],[/\bopt\/([\w\.]+)/i],[l,[a,K+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[l,[a,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[l,[a,"Dolphin"]],[/coast\/([\w\.]+)/i],[l,[a,K+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[l,[a,"MIUI "+j]],[/fxios\/([-\w\.]+)/i],[l,[a,U]],[/\bqihu|(qi?ho?o?|360)browser/i],[[a,"360 "+j]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[a,/(.+)/,"$1 "+j],l],[/samsungbrowser\/([\w\.]+)/i],[l,[a,se+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],l],[/metasr[\/ ]?([\d\.]+)/i],[l,[a,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[a,"Sogou Mobile"],l],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[a,l],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[a],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[a,qe],l],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[a,l],[/\bgsa\/([\w\.]+) .*safari\//i],[l,[a,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[l,[a,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[l,[a,Z+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[a,Z+" WebView"],l],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[l,[a,"Android "+j]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[a,l],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[l,[a,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[l,a],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[a,[l,Ue,Qe]],[/(webkit|khtml)\/([\w\.]+)/i],[a,l],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[a,"Netscape"],l],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[l,[a,U+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[a,l],[/(cobalt)\/([\w\.]+)/i],[a,[l,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[P,"amd64"]],[/(ia32(?=;))/i],[[P,fe]],[/((?:i[346]|x)86)[;\)]/i],[[P,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[P,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[P,"armhf"]],[/windows (ce|mobile); ppc;/i],[[P,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[P,/ower/,o,fe]],[/(sun4\w)[;\)]/i],[[P,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[P,fe]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[t,[s,se],[e,u]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[t,[s,se],[e,n]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[t,[s,X],[e,n]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[t,[s,X],[e,u]],[/(macintosh);/i],[t,[s,X]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[t,[s,pe],[e,n]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[t,[s,we],[e,u]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[t,[s,we],[e,n]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[t,/_/g," "],[s,ne],[e,n]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[t,/_/g," "],[s,ne],[e,u]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[t,[s,"OPPO"],[e,n]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[t,[s,"Vivo"],[e,n]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[t,[s,"Realme"],[e,n]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[t,[s,me],[e,n]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[t,[s,me],[e,u]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[t,[s,Q],[e,u]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[t,[s,Q],[e,n]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[t,[s,"Lenovo"],[e,u]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[t,/_/g," "],[s,"Nokia"],[e,n]],[/(pixel c)\b/i],[t,[s,O],[e,u]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[t,[s,O],[e,n]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[t,[s,ee],[e,n]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[t,"Xperia Tablet"],[s,ee],[e,u]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[t,[s,"OnePlus"],[e,n]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[t,[s,G],[e,u]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[t,/(.+)/g,"Fire Phone $1"],[s,G],[e,n]],[/(playbook);[-\w\),; ]+(rim)/i],[t,s,[e,u]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[t,[s,de],[e,n]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[t,[s,ae],[e,u]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[t,[s,ae],[e,n]],[/(nexus 9)/i],[t,[s,"HTC"],[e,u]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[s,[t,/_/g," "],[e,n]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[t,[s,"Acer"],[e,u]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[t,[s,"Meizu"],[e,n]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[t,[s,"Ulefone"],[e,n]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[s,t,[e,n]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[s,t,[e,u]],[/(surface duo)/i],[t,[s,oe],[e,u]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[t,[s,"Fairphone"],[e,n]],[/(u304aa)/i],[t,[s,"AT&T"],[e,n]],[/\bsie-(\w*)/i],[t,[s,"Siemens"],[e,n]],[/\b(rct\w+) b/i],[t,[s,"RCA"],[e,u]],[/\b(venue[\d ]{2,7}) b/i],[t,[s,"Dell"],[e,u]],[/\b(q(?:mv|ta)\w+) b/i],[t,[s,"Verizon"],[e,u]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[t,[s,"Barnes & Noble"],[e,u]],[/\b(tm\d{3}\w+) b/i],[t,[s,"NuVision"],[e,u]],[/\b(k88) b/i],[t,[s,"ZTE"],[e,u]],[/\b(nx\d{3}j) b/i],[t,[s,"ZTE"],[e,n]],[/\b(gen\d{3}) b.+49h/i],[t,[s,"Swiss"],[e,n]],[/\b(zur\d{3}) b/i],[t,[s,"Swiss"],[e,u]],[/\b((zeki)?tb.*\b) b/i],[t,[s,"Zeki"],[e,u]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[s,"Dragon Touch"],t,[e,u]],[/\b(ns-?\w{0,9}) b/i],[t,[s,"Insignia"],[e,u]],[/\b((nxa|next)-?\w{0,9}) b/i],[t,[s,"NextBook"],[e,u]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[s,"Voice"],t,[e,n]],[/\b(lvtel\-)?(v1[12]) b/i],[[s,"LvTel"],t,[e,n]],[/\b(ph-1) /i],[t,[s,"Essential"],[e,n]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[t,[s,"Envizen"],[e,u]],[/\b(trio[-\w\. ]+) b/i],[t,[s,"MachSpeed"],[e,u]],[/\btu_(1491) b/i],[t,[s,"Rotor"],[e,u]],[/(shield[\w ]+) b/i],[t,[s,"Nvidia"],[e,u]],[/(sprint) (\w+)/i],[s,t,[e,n]],[/(kin\.[onetw]{3})/i],[[t,/\./g," "],[s,oe],[e,n]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[t,[s,le],[e,u]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[t,[s,le],[e,n]],[/smart-tv.+(samsung)/i],[s,[e,g]],[/hbbtv.+maple;(\d+)/i],[[t,/^/,"SmartTV"],[s,se],[e,g]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[s,Q],[e,g]],[/(apple) ?tv/i],[s,[t,X+" TV"],[e,g]],[/crkey/i],[[t,Z+"cast"],[s,O],[e,g]],[/droid.+aft(\w+)( bui|\))/i],[t,[s,G],[e,g]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[t,[s,pe],[e,g]],[/(bravia[\w ]+)( bui|\))/i],[t,[s,ee],[e,g]],[/(mitv-\w{5}) bui/i],[t,[s,ne],[e,g]],[/Hbbtv.*(technisat) (.*);/i],[s,t,[e,g]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[s,Pe],[t,Pe],[e,g]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[e,g]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[s,t,[e,z]],[/droid.+; (shield) bui/i],[t,[s,"Nvidia"],[e,z]],[/(playstation [345portablevi]+)/i],[t,[s,ee],[e,z]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[t,[s,oe],[e,z]],[/((pebble))app/i],[s,t,[e,N]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[t,[s,X],[e,N]],[/droid.+; (glass) \d/i],[t,[s,O],[e,N]],[/droid.+; (wt63?0{2,3})\)/i],[t,[s,le],[e,N]],[/(quest( 2| pro)?)/i],[t,[s,qe],[e,N]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[s,[e,L]],[/(aeobc)\b/i],[t,[s,G],[e,L]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[t,[e,n]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[t,[e,u]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[e,u]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[e,n]],[/(android[-\w\. ]{0,9});.+buil/i],[t,[s,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[l,[a,C+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[l,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[a,l],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[l,a]],os:[[/microsoft (windows) (vista|xp)/i],[a,l],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[a,[l,Ue,He]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,Ue,He],[a,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[l,/_/g,"."],[a,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[a,Be],[l,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[l,a],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[a,l],[/\(bb(10);/i],[l,[a,de]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[l,[a,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[l,[a,U+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[l,[a,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[l,[a,"watchOS"]],[/crkey\/([\d\.]+)/i],[l,[a,Z+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[a,ze],l],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[a,l],[/(sunos) ?([\w\.\d]*)/i],[[a,"Solaris"],l],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[a,l]]},H=function(y,A){if(typeof y===f&&(A=y,y=r),!(this instanceof H))return new H(y,A).getResult();var _=typeof b!==v&&b.navigator?b.navigator:r,S=y||(_&&_.userAgent?_.userAgent:o),ie=_&&_.userAgentData?_.userAgentData:r,F=A?Ke(je,A):je,E=_&&_.userAgent==S;return this.getBrowser=function(){var h={};return h[a]=r,h[l]=r,he.call(h,S,F.browser),h[x]=Je(h[l]),E&&_&&_.brave&&typeof _.brave.isBrave==d&&(h[a]="Brave"),h},this.getCPU=function(){var h={};return h[P]=r,he.call(h,S,F.cpu),h},this.getDevice=function(){var h={};return h[s]=r,h[t]=r,h[e]=r,he.call(h,S,F.device),E&&!h[e]&&ie&&ie.mobile&&(h[e]=n),E&&h[t]=="Macintosh"&&_&&typeof _.standalone!==v&&_.maxTouchPoints&&_.maxTouchPoints>2&&(h[t]="iPad",h[e]=u),h},this.getEngine=function(){var h={};return h[a]=r,h[l]=r,he.call(h,S,F.engine),h},this.getOS=function(){var h={};return h[a]=r,h[l]=r,he.call(h,S,F.os),E&&!h[a]&&ie&&ie.platform!="Unknown"&&(h[a]=ie.platform.replace(/chrome os/i,ze).replace(/macos/i,Be)),h},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return S},this.setUA=function(h){return S=typeof h===p&&h.length>te?Pe(h,te):h,this},this.setUA(S),this};H.VERSION=m,H.BROWSER=Ae([a,l,x]),H.CPU=Ae([P]),H.DEVICE=Ae([t,s,e,z,n,g,u,N,L]),H.ENGINE=H.OS=Ae([a,l]),w.exports&&(i=w.exports=H),i.UAParser=H;var ce=typeof b!==v&&(b.jQuery||b.Zepto);if(ce&&!ce.ua){var Se=new H;ce.ua=Se.getResult(),ce.ua.get=function(){return Se.getUA()},ce.ua.set=function(y){Se.setUA(y);var A=Se.getResult();for(var _ in A)ce.ua[_]=A[_]}}})(typeof window=="object"?window:oi)})(Le,Le.exports);var ni=Le.exports;const li=ai(!1,w=>{var r;let i=new ni.UAParser,b=i.getResult().device.type?(r=i.getResult().device)==null?void 0:r.type:"desktop";w(b!="desktop")}),ge=Ve(!0);let ke=Ve(0);const Ce=Ve(localStorage.getItem("best_score")||"0");Ce.subscribe(w=>localStorage.best_score=w);function ci(w){const i=w-1;return i*i*i+1}function bi(w,{delay:i=0,duration:b=400,easing:r=ci,x:m=0,y:o=0,opacity:c=0}={}){const d=getComputedStyle(w),v=+d.opacity,f=d.transform==="none"?"":d.transform,p=v*(1-c),[x,t]=Ye(m),[a,e]=Ye(o);return{delay:i,duration:b,easing:r,css:(s,l)=>`
			transform: ${f} translate(${(1-s)*x}${t}, ${(1-s)*a}${e});
			opacity: ${v-p*l}`}}function ui(w){let i,b,r;return{c(){i=M("div"),b=V("+"),r=V(w[1]),this.h()},l(m){i=I(m,"DIV",{class:!0});var o=R(i);b=q(o,"+"),r=q(o,w[1]),o.forEach(T),this.h()},h(){D(i,"class","delta-score text hidden svelte-1wrlr68")},m(m,o){J(m,i,o),k(i,b),k(i,r)},p(m,o){o&2&&ye(r,m[1])},i:B,o:B,d(m){m&&T(i)}}}function di(w){let i,b,r,m;return{c(){i=M("div"),b=V("+"),r=V(w[1]),this.h()},l(o){i=I(o,"DIV",{class:!0});var c=R(i);b=q(c,"+"),r=q(c,w[1]),c.forEach(T),this.h()},h(){D(i,"class","delta-score text svelte-1wrlr68")},m(o,c){J(o,i,c),k(i,b),k(i,r)},p(o,c){w=o,c&2&&ye(r,w[1])},i(o){m||ei(()=>{m=ii(i,bi,{delay:0,duration:Ze,x:0,y:80}),m.start()})},o:B,d(o){o&&T(i)}}}function wi(w){let i,b,r,m,o,c,d,v,f,p,x,t,a,e,s,l,P,z,n,u,g,N,L,te,G,X,ae,de;function j(U,O){return U[2]?di:ui}let Z=j(w),C=Z(w);return{c(){i=M("div"),C.c(),b=W(),r=M("div"),m=V("2048"),o=W(),c=M("div"),d=M("span"),v=V("SCORE"),f=W(),p=M("span"),x=V(w[0]),t=W(),a=M("div"),e=M("span"),s=V("BEST"),l=W(),P=M("span"),z=V(w[3]),n=W(),u=M("div"),g=V("Join the numbers and get to the "),N=M("b"),L=V("2048 tile!"),te=W(),G=M("button"),X=V("New Game"),this.h()},l(U){i=I(U,"DIV",{class:!0});var O=R(i);C.l(O),b=$(O),r=I(O,"DIV",{class:!0});var we=R(r);m=q(we,"2048"),we.forEach(T),o=$(O),c=I(O,"DIV",{class:!0});var Q=R(c);d=I(Q,"SPAN",{class:!0});var oe=R(d);v=q(oe,"SCORE"),oe.forEach(T),f=$(Q),p=I(Q,"SPAN",{class:!0});var me=R(p);x=q(me,w[0]),me.forEach(T),Q.forEach(T),t=$(O),a=I(O,"DIV",{class:!0});var K=R(a);e=I(K,"SPAN",{class:!0});var se=R(e);s=q(se,"BEST"),se.forEach(T),l=$(K),P=I(K,"SPAN",{class:!0});var pe=R(P);z=q(pe,w[3]),pe.forEach(T),K.forEach(T),n=$(O),u=I(O,"DIV",{class:!0});var ee=R(u);g=q(ee,"Join the numbers and get to the "),N=I(ee,"B",{});var ne=R(N);L=q(ne,"2048 tile!"),ne.forEach(T),ee.forEach(T),te=$(O),G=I(O,"BUTTON",{class:!0});var le=R(G);X=q(le,"New Game"),le.forEach(T),O.forEach(T),this.h()},h(){D(r,"class","title text svelte-1wrlr68"),D(d,"class","cell-score-title svelte-1wrlr68"),D(p,"class","cell-score-value svelte-1wrlr68"),D(c,"class","cell-score score text svelte-1wrlr68"),D(e,"class","cell-score-title svelte-1wrlr68"),D(P,"class","cell-score-value svelte-1wrlr68"),D(a,"class","cell-score best text svelte-1wrlr68"),D(u,"class","subtitle text svelte-1wrlr68"),D(G,"class","new text svelte-1wrlr68"),D(i,"class","controller svelte-1wrlr68")},m(U,O){J(U,i,O),C.m(i,null),k(i,b),k(i,r),k(r,m),k(i,o),k(i,c),k(c,d),k(d,v),k(c,f),k(c,p),k(p,x),k(i,t),k(i,a),k(a,e),k(e,s),k(a,l),k(a,P),k(P,z),k(i,n),k(i,u),k(u,g),k(u,N),k(N,L),k(i,te),k(i,G),k(G,X),ae||(de=ve(G,"click",w[4]),ae=!0)},p(U,[O]){Z===(Z=j(U))&&C?C.p(U,O):(C.d(1),C=Z(U),C&&(C.c(),be(C,1),C.m(i,b))),O&1&&ye(x,U[0]),O&8&&ye(z,U[3])},i(U){be(C)},o:B,d(U){U&&T(i),C.d(),ae=!1,de()}}}const Ze=500;function mi(w,i,b){let r,m,o;ue(w,ge,x=>b(5,r=x)),ue(w,ke,x=>b(6,m=x)),ue(w,Ce,x=>b(3,o=x));let c=0,d=0,v=!1;function f(x){b(2,v=!0),setTimeout(()=>{b(2,v=!1),b(0,c+=d),c>o&&_e(Ce,o=c,o)},x)}ke.subscribe(x=>{b(1,d=x-c),d>0&&f(Ze)});function p(){_e(ke,m=0,m),b(1,d=0),b(0,c=0),_e(ge,r=!0,r)}return[c,d,v,o,p]}class pi extends xe{constructor(i){super(),Ee(this,i,mi,wi,Te,{})}}function fi(w){let i,b;return{c:B,l:B,m(r,m){i||(b=[ve(window,"keydown",w[0]),ve(window,"touchstart",w[1]),ve(window,"touchmove",w[2]),ve(window,"touchend",w[3])],i=!0)},p:B,i:B,o:B,d(r){i=!1,ti(b)}}}const We=25;function hi(w,i,b){let r;ue(w,li,p=>b(5,r=p));const m=si();let o={start:!1,_angle:0,x_start:0,y_start:0,x_end:0,y_end:0,_calc_angle(){this._angle=Math.atan(Math.abs(this.y_end-this.y_start)/Math.abs(this.x_end-this.x_start))*180/Math.PI},get_swipe(){return this._calc_angle(),this._angle>=90-We&&this._angle<=90?this.y_end<this.y_start?"UP":"DOWN":this._angle>=0&&this._angle<=We?this.x_end>this.x_start?"RIGHT":"LEFT":"INVALID"}};function c(p){r||["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"].includes(p.key)&&m("move",p.key.substring(5).toUpperCase())}function d(p){r&&(o.start=!0,o.x_start=p.touches[0].screenX,o.y_start=p.touches[0].screenY)}function v(p){r&&o.start&&(o.x_end=p.touches[0].screenX,o.y_end=p.touches[0].screenY)}function f(){if(r){o.start=!1;let p=o.get_swipe();p!="INVALID"&&m("move",p)}}return[c,d,v,f]}class vi extends xe{constructor(i){super(),Ee(this,i,hi,fi,Te,{})}}function $e(w,i,b){const r=w.slice();return r[16]=i[b],r}function Xe(w){let i,b=(w[16]==0?"":w[16])+"",r,m;return{c(){i=M("div"),r=V(b),this.h()},l(o){i=I(o,"DIV",{class:!0});var c=R(i);r=q(c,b),c.forEach(T),this.h()},h(){D(i,"class",m="casella tile-"+w[16]+" svelte-mvmopq")},m(o,c){J(o,i,c),k(i,r)},p(o,c){c&1&&b!==(b=(o[16]==0?"":o[16])+"")&&ye(r,b),c&1&&m!==(m="casella tile-"+o[16]+" svelte-mvmopq")&&D(i,"class",m)},d(o){o&&T(i)}}}function _i(w){let i,b,r,m,o=w[0],c=[];for(let d=0;d<o.length;d+=1)c[d]=Xe($e(w,o,d));return r=new vi({}),r.$on("move",w[1]),{c(){i=M("div");for(let d=0;d<c.length;d+=1)c[d].c();b=W(),Oe(r.$$.fragment),this.h()},l(d){i=I(d,"DIV",{class:!0});var v=R(i);for(let f=0;f<c.length;f+=1)c[f].l(v);v.forEach(T),b=$(d),Ne(r.$$.fragment,d),this.h()},h(){D(i,"class","griglia svelte-mvmopq")},m(d,v){J(d,i,v);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(i,null);J(d,b,v),Me(r,d,v),m=!0},p(d,[v]){if(v&1){o=d[0];let f;for(f=0;f<o.length;f+=1){const p=$e(d,o,f);c[f]?c[f].p(p,v):(c[f]=Xe(p),c[f].c(),c[f].m(i,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=o.length}},i(d){m||(be(r.$$.fragment,d),m=!0)},o(d){Ie(r.$$.fragment,d),m=!1},d(d){d&&T(i),ri(c,d),d&&T(b),Re(r,d)}}}const re=0,gi=16,ki=200;function yi(w,i,b){let r,m;ue(w,ge,n=>b(3,r=n)),ue(w,ke,n=>b(4,m=n));let o=Array(gi).fill(re),c=0;const d=(n,u)=>Math.floor(Math.random()*(1+u-n)+n),v=()=>{let n=[];return o.forEach((u,g)=>{u===re&&n.push(g)}),n[Math.floor(Math.random()*n.length)]},f=(n,u)=>{for(let g=0;g<4;g++){let N=z(n=="LEFT"?e(g):e(g).reverse());s(g,n=="LEFT"?N:N.reverse())}},p=(n,u)=>{for(let g=0;g<4;g++){let N=z(n=="UP"?l(g):l(g).reverse());P(g,n=="UP"?N:N.reverse())}},x=n=>{switch(n){case"LEFT":case"RIGHT":f(n);break;case"UP":case"DOWN":p(n);break}_e(ke,m+=c,m),c=0,b(0,o=[...o])},t=()=>d(1,100)<80?2:4;function a(n){x(n.detail),setTimeout(()=>b(0,o[v()]=t(),o),ki)}const e=n=>o.slice(n*4,n*4+4),s=(n,u)=>{o.splice(n*4,4,...u)},l=n=>o.filter((u,g)=>(g-n)%4==0),P=(n,u)=>{for(let g=0;g<4;g++)o.splice(n+g*4,1,u[g])},z=n=>{for(let u=0;u<3;u++){let g=!1,N=3-u;for(;N>0;){N--;let L=n.splice(u+1,1)[0];if(L==n[u]||n[u]==re||L==re)g?n.splice(u+1,0,L):(n[u]==L&&L!=re&&(g=!0,c+=L*2),n[u]+=L,n.push(re));else{n.splice(u+1,0,L);break}}}return n};return ge.subscribe(n=>{r&&(b(0,o=o.map(u=>re)),b(0,o[v()]=2,o),b(0,o[v()]=2,o),c=0,_e(ge,r=!1,r))}),[o,a]}class xi extends xe{constructor(i){super(),Ee(this,i,yi,_i,Te,{})}}function Ei(w){let i,b,r,m,o;return{c(){i=M("div"),b=M("p"),r=V(`Ops....
	`),m=M("p"),o=V("Per cortesia gira il tuo device"),this.h()},l(c){i=I(c,"DIV",{class:!0});var d=R(i);b=I(d,"P",{});var v=R(b);r=q(v,`Ops....
	`),v.forEach(T),m=I(d,"P",{});var f=R(m);o=q(f,"Per cortesia gira il tuo device"),f.forEach(T),d.forEach(T),this.h()},h(){D(i,"class","disclaimer svelte-1l90lst")},m(c,d){J(c,i,d),k(i,b),k(b,r),k(i,m),k(m,o)},p:B,i:B,o:B,d(c){c&&T(i)}}}class Ti extends xe{constructor(i){super(),Ee(this,i,null,Ei,Te,{})}}function Ai(w){let i,b,r,m,o,c,d,v,f;return i=new Ti({}),o=new pi({}),v=new xi({}),{c(){Oe(i.$$.fragment),b=W(),r=M("div"),m=M("div"),Oe(o.$$.fragment),c=W(),d=M("div"),Oe(v.$$.fragment),this.h()},l(p){Ne(i.$$.fragment,p),b=$(p),r=I(p,"DIV",{class:!0});var x=R(r);m=I(x,"DIV",{class:!0});var t=R(m);Ne(o.$$.fragment,t),t.forEach(T),c=$(x),d=I(x,"DIV",{class:!0});var a=R(d);Ne(v.$$.fragment,a),a.forEach(T),x.forEach(T),this.h()},h(){D(m,"class","game-controller"),D(d,"class","game-board"),D(r,"class","game-container svelte-1blty5u")},m(p,x){Me(i,p,x),J(p,b,x),J(p,r,x),k(r,m),Me(o,m,null),k(r,c),k(r,d),Me(v,d,null),f=!0},p:B,i(p){f||(be(i.$$.fragment,p),be(o.$$.fragment,p),be(v.$$.fragment,p),f=!0)},o(p){Ie(i.$$.fragment,p),Ie(o.$$.fragment,p),Ie(v.$$.fragment,p),f=!1},d(p){Re(i,p),p&&T(b),p&&T(r),Re(o),Re(v)}}}class Ni extends xe{constructor(i){super(),Ee(this,i,null,Ai,Te,{})}}export{Ni as component};
