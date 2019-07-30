
var OGVDecoderVideoTheoraW = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(OGVDecoderVideoTheoraW) {
  OGVDecoderVideoTheoraW = OGVDecoderVideoTheoraW || {};

var a;a||(a=typeof OGVDecoderVideoTheoraW !== 'undefined' ? OGVDecoderVideoTheoraW : {});var m=a;a.memoryLimit&&(a.TOTAL_MEMORY=m.memoryLimit);var n={},r;for(r in a)a.hasOwnProperty(r)&&(n[r]=a[r]);a.arguments=[];a.thisProgram="./this.program";a.quit=function(b,c){throw c;};a.preRun=[];a.postRun=[];var t=!1,u=!1,v=!1,aa=!1,w=!1;t="object"===typeof window;u="function"===typeof importScripts;v=(aa="object"===typeof process&&"function"===typeof require)&&!t&&!u;w=!t&&!v&&!u;var x="";
if(v){x=__dirname+"/";var z,A;a.read=function(b,c){z||(z=require("fs"));A||(A=require("path"));b=A.normalize(b);b=z.readFileSync(b);return c?b:b.toString()};a.readBinary=function(b){b=a.read(b,!0);b.buffer||(b=new Uint8Array(b));b.buffer||B("Assertion failed: undefined");return b};1<process.argv.length&&(a.thisProgram=process.argv[1].replace(/\\/g,"/"));a.arguments=process.argv.slice(2);process.on("unhandledRejection",B);a.quit=function(b){process.exit(b)};a.inspect=function(){return"[Emscripten Module object]"}}else if(w)"undefined"!=
typeof read&&(a.read=function(b){return read(b)}),a.readBinary=function(b){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(b));b=read(b,"binary");"object"===typeof b||B("Assertion failed: undefined");return b},"undefined"!=typeof scriptArgs?a.arguments=scriptArgs:"undefined"!=typeof arguments&&(a.arguments=arguments),"function"===typeof quit&&(a.quit=function(b){quit(b)});else if(t||u)u?x=self.location.href:document.currentScript&&(x=document.currentScript.src),_scriptDir&&(x=_scriptDir),
0!==x.indexOf("blob:")?x=x.substr(0,x.lastIndexOf("/")+1):x="",a.read=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.send(null);return c.responseText},u&&(a.readBinary=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),a.readAsync=function(b,c,d){var e=new XMLHttpRequest;e.open("GET",b,!0);e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?c(e.response):d()};e.onerror=
d;e.send(null)},a.setWindowTitle=function(b){document.title=b};var ba=a.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),C=a.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ba);for(r in n)n.hasOwnProperty(r)&&(a[r]=n[r]);n=void 0;"object"!==typeof WebAssembly&&C("no native wasm support detected");var E,ca=!1;"undefined"!==typeof TextDecoder&&new TextDecoder("utf8");
"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function F(b){0<b%65536&&(b+=65536-b%65536);return b}var buffer,G,J,K;function da(){a.HEAP8=G=new Int8Array(buffer);a.HEAP16=new Int16Array(buffer);a.HEAP32=K=new Int32Array(buffer);a.HEAPU8=J=new Uint8Array(buffer);a.HEAPU16=new Uint16Array(buffer);a.HEAPU32=new Uint32Array(buffer);a.HEAPF32=new Float32Array(buffer);a.HEAPF64=new Float64Array(buffer)}var L=a.TOTAL_MEMORY||16777216;
5242880>L&&C("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+L+"! (TOTAL_STACK=5242880)");a.wasmMemory?E=a.wasmMemory:E=new WebAssembly.Memory({initial:L/65536});E&&(buffer=E.buffer);L=buffer.byteLength;da();K[904]=5246528;function M(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c();else{var d=c.s;"number"===typeof d?void 0===c.m?a.dynCall_v(d):a.dynCall_vi(d,c.m):d(void 0===c.m?null:c.m)}}}var ea=[],fa=[],ha=[],ia=[];function ja(){var b=a.preRun.shift();ea.unshift(b)}
var N=0,O=null,P=null;a.preloadedImages={};a.preloadedAudios={};function ka(){var b=Q;return String.prototype.startsWith?b.startsWith("data:application/octet-stream;base64,"):0===b.indexOf("data:application/octet-stream;base64,")}var Q="ogv-decoder-video-theora-wasm.wasm";if(!ka()){var ra=Q;Q=a.locateFile?a.locateFile(ra,x):x+ra}
function sa(){try{if(a.wasmBinary)return new Uint8Array(a.wasmBinary);if(a.readBinary)return a.readBinary(Q);throw"both async and sync fetching of the wasm failed";}catch(b){B(b)}}function ta(){return a.wasmBinary||!t&&!u||"function"!==typeof fetch?new Promise(function(b){b(sa())}):fetch(Q,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+Q+"'";return b.arrayBuffer()}).catch(function(){return sa()})}
function ua(b){function c(b){a.asm=b.exports;N--;a.monitorRunDependencies&&a.monitorRunDependencies(N);0==N&&(null!==O&&(clearInterval(O),O=null),P&&(b=P,P=null,b()))}function d(b){c(b.instance)}function e(b){return ta().then(function(b){return WebAssembly.instantiate(b,h)}).then(b,function(b){C("failed to asynchronously prepare wasm: "+b);B(b)})}var h={env:b};N++;a.monitorRunDependencies&&a.monitorRunDependencies(N);if(a.instantiateWasm)try{return a.instantiateWasm(h,c)}catch(k){return C("Module.instantiateWasm callback failed with error: "+
k),!1}(function(){if(a.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||ka()||"function"!==typeof fetch)return e(d);fetch(Q,{credentials:"same-origin"}).then(function(b){return WebAssembly.instantiateStreaming(b,h).then(d,function(b){C("wasm streaming compile failed: "+b);C("falling back to ArrayBuffer instantiation");e(d)})})})();return{}}a.asm=function(b,c){c.memory=E;c.table=new WebAssembly.Table({initial:9,maximum:9,element:"anyfunc"});return ua(c)};fa.push({s:function(){va()}});
function wa(){a.___errno_location&&(K[a.___errno_location()>>2]=12)}function xa(b){b=F(b);var c=buffer.byteLength;try{return-1!==E.grow((b-c)/65536)?(buffer=E.buffer,!0):!1}catch(d){return!1}}
var ya=a.asm({},{b:function(b,c,d){J.set(J.subarray(c,c+d),b)},c:function(b,c,d,e,h,k,l,p,D,g,y,H,S,T,la,ma){function U(b,c,e,d,h,k,p,l){b=za.subarray(b,b+c*e);var f=b.buffer;"function"===typeof f.slice?(b=f.slice(b.byteOffset,b.byteOffset+b.byteLength),b=new Uint8Array(b)):b=new Uint8Array(b);var g,q;for(g=q=0;g<h;g++,q+=c)for(f=0;f<c;f++)b[q+f]=l;for(;g<h+p;g++,q+=c){for(f=0;f<d;f++)b[q+f]=l;for(f=d+k;f<c;f++)b[q+f]=l}for(;g<e;g++,q+=c)for(f=0;f<c;f++)b[q+f]=l;return b}var za=a.HEAPU8,I=a.videoFormat,
na=(S&-2)*D/l,oa=(T&-2)*g/p,pa=y*D/l,qa=H*g/p;y===I.cropWidth&&H===I.cropHeight&&(la=I.displayWidth,ma=I.displayHeight);a.frameBuffer={format:{width:l,height:p,chromaWidth:D,chromaHeight:g,cropLeft:S,cropTop:T,cropWidth:y,cropHeight:H,displayWidth:la,displayHeight:ma},y:{bytes:U(b,c,p,S,T,y,H,0),stride:c},u:{bytes:U(d,e,g,na,oa,pa,qa,128),stride:e},v:{bytes:U(h,k,g,na,oa,pa,qa,128),stride:k}}},d:function(b,c,d,e,h,k,l,p,D,g,y){a.videoFormat={width:b,height:c,chromaWidth:d,chromaHeight:e,cropLeft:p,
cropTop:D,cropWidth:k,cropHeight:l,displayWidth:g,displayHeight:y,fps:h};a.loadedMetadata=!0},a:function(b){b|=0;var c=G.length|0;var d=K[904]|0;var e=d+b|0;if(0<(b|0)&(e|0)<(d|0)|0>(e|0))return B("OOM"),0,wa(),-1;if(b=(e|0)>(c|0)){b=e|0;if(2147418112<b)b=!1;else{for(c=Math.max(G.length,16777216);c<b;)536870912>=c?c=F(2*c):c=Math.min(F((3*c+2147483648)/4),2147418112);xa(c)?(da(),b=!0):b=!1}b=!(b|0)}if(b)return wa(),-1;K[904]=e|0;return d|0}},buffer);a.asm=ya;
var va=a.___wasm_call_ctors=function(){return a.asm.e.apply(null,arguments)};a._ogv_video_decoder_init=function(){return a.asm.f.apply(null,arguments)};a._ogv_video_decoder_async=function(){return a.asm.g.apply(null,arguments)};a._ogv_video_decoder_process_header=function(){return a.asm.h.apply(null,arguments)};a._ogv_video_decoder_process_frame=function(){return a.asm.i.apply(null,arguments)};a._ogv_video_decoder_destroy=function(){return a.asm.j.apply(null,arguments)};
a._malloc=function(){return a.asm.k.apply(null,arguments)};a._free=function(){return a.asm.l.apply(null,arguments)};a.asm=ya;a.then=function(b){if(a.calledRun)b(a);else{var c=a.onRuntimeInitialized;a.onRuntimeInitialized=function(){c&&c();b(a)}}return a};function R(b){this.name="ExitStatus";this.message="Program terminated with exit("+b+")";this.status=b}R.prototype=Error();R.prototype.constructor=R;P=function Aa(){a.calledRun||V();a.calledRun||(P=Aa)};
function V(){function b(){if(!a.calledRun&&(a.calledRun=!0,!ca)){M(fa);M(ha);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var b=a.postRun.shift();ia.unshift(b)}M(ia)}}if(!(0<N)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)ja();M(ea);0<N||a.calledRun||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);b()},1)):b())}}
a.run=V;function B(b){if(a.onAbort)a.onAbort(b);void 0!==b?(ba(b),C(b),b='"'+b+'"'):b="";ca=!0;throw"abort("+b+"). Build with -s ASSERTIONS=1 for more info.";}a.abort=B;if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();a.noExitRuntime=!0;V();var W,X,Y;Y="undefined"===typeof performance||"undefined"===typeof performance.now?Date.now:performance.now.bind(performance);function Z(b){var c=Y();b=b();a.cpuTime+=Y()-c;return b}a.loadedMetadata=!!m.videoFormat;
a.videoFormat=m.videoFormat||null;a.frameBuffer=null;a.cpuTime=0;Object.defineProperty(a,"processing",{get:function(){return!1}});a.init=function(b){Z(function(){a._ogv_video_decoder_init()});b()};a.processHeader=function(b,c){var d=Z(function(){var c=b.byteLength;W&&X>=c||(W&&a._free(W),X=c,W=a._malloc(X));var d=W;a.HEAPU8.set(new Uint8Array(b),d);return a._ogv_video_decoder_process_header(d,c)});c(d)};a.o=[];
a.processFrame=function(b,c){function d(b){a._free(k);c(b)}var e=a._ogv_video_decoder_async(),h=b.byteLength,k=a._malloc(h);e&&a.o.push(d);var l=Z(function(){a.HEAPU8.set(new Uint8Array(b),k);return a._ogv_video_decoder_process_frame(k,h)});e||d(l)};a.close=function(){};a.sync=function(){a._ogv_video_decoder_async()&&(a.o.push(function(){}),Z(function(){a._ogv_video_decoder_process_frame(0,0)}))};


  return OGVDecoderVideoTheoraW
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = OGVDecoderVideoTheoraW;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return OGVDecoderVideoTheoraW; });
    else if (typeof exports === 'object')
      exports["OGVDecoderVideoTheoraW"] = OGVDecoderVideoTheoraW;
    