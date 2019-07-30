
var OGVDemuxerOggW = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(OGVDemuxerOggW) {
  OGVDemuxerOggW = OGVDemuxerOggW || {};

var a;a||(a=typeof OGVDemuxerOggW !== 'undefined' ? OGVDemuxerOggW : {});var aa=a;a.memoryLimit&&(a.TOTAL_MEMORY=aa.memoryLimit);var f={},g;for(g in a)a.hasOwnProperty(g)&&(f[g]=a[g]);a.arguments=[];a.thisProgram="./this.program";a.quit=function(b,c){throw c;};a.preRun=[];a.postRun=[];var h=!1,k=!1,l=!1,ba=!1,m=!1;h="object"===typeof window;k="function"===typeof importScripts;l=(ba="object"===typeof process&&"function"===typeof require)&&!h&&!k;m=!h&&!l&&!k;var n="";
if(l){n=__dirname+"/";var p,r;a.read=function(b,c){p||(p=require("fs"));r||(r=require("path"));b=r.normalize(b);b=p.readFileSync(b);return c?b:b.toString()};a.readBinary=function(b){b=a.read(b,!0);b.buffer||(b=new Uint8Array(b));b.buffer||t("Assertion failed: undefined");return b};1<process.argv.length&&(a.thisProgram=process.argv[1].replace(/\\/g,"/"));a.arguments=process.argv.slice(2);process.on("unhandledRejection",t);a.quit=function(b){process.exit(b)};a.inspect=function(){return"[Emscripten Module object]"}}else if(m)"undefined"!=
typeof read&&(a.read=function(b){return read(b)}),a.readBinary=function(b){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(b));b=read(b,"binary");"object"===typeof b||t("Assertion failed: undefined");return b},"undefined"!=typeof scriptArgs?a.arguments=scriptArgs:"undefined"!=typeof arguments&&(a.arguments=arguments),"function"===typeof quit&&(a.quit=function(b){quit(b)});else if(h||k)k?n=self.location.href:document.currentScript&&(n=document.currentScript.src),_scriptDir&&(n=_scriptDir),
0!==n.indexOf("blob:")?n=n.substr(0,n.lastIndexOf("/")+1):n="",a.read=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.send(null);return c.responseText},k&&(a.readBinary=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),a.readAsync=function(b,c,d){var e=new XMLHttpRequest;e.open("GET",b,!0);e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?c(e.response):d()};e.onerror=
d;e.send(null)},a.setWindowTitle=function(b){document.title=b};var u=a.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),v=a.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||u);for(g in f)f.hasOwnProperty(g)&&(a[g]=f[g]);f=void 0;"object"!==typeof WebAssembly&&v("no native wasm support detected");var w,x=!1;"undefined"!==typeof TextDecoder&&new TextDecoder("utf8");
"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function y(b){0<b%65536&&(b+=65536-b%65536);return b}var buffer,z,A,C;function D(){a.HEAP8=z=new Int8Array(buffer);a.HEAP16=new Int16Array(buffer);a.HEAP32=C=new Int32Array(buffer);a.HEAPU8=A=new Uint8Array(buffer);a.HEAPU16=new Uint16Array(buffer);a.HEAPU32=new Uint32Array(buffer);a.HEAPF32=new Float32Array(buffer);a.HEAPF64=new Float64Array(buffer)}var E=a.TOTAL_MEMORY||16777216;
5242880>E&&v("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+E+"! (TOTAL_STACK=5242880)");a.wasmMemory?w=a.wasmMemory:w=new WebAssembly.Memory({initial:E/65536});w&&(buffer=w.buffer);E=buffer.byteLength;D();C[1064]=5247168;function F(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c();else{var d=c.A;"number"===typeof d?void 0===c.w?a.dynCall_v(d):a.dynCall_vi(d,c.w):d(void 0===c.w?null:c.w)}}}var G=[],H=[],ca=[],I=[];function da(){var b=a.preRun.shift();G.unshift(b)}
var J=0,K=null,L=null;a.preloadedImages={};a.preloadedAudios={};function M(){var b=N;return String.prototype.startsWith?b.startsWith("data:application/octet-stream;base64,"):0===b.indexOf("data:application/octet-stream;base64,")}var N="ogv-demuxer-ogg-wasm.wasm";if(!M()){var O=N;N=a.locateFile?a.locateFile(O,n):n+O}function P(){try{if(a.wasmBinary)return new Uint8Array(a.wasmBinary);if(a.readBinary)return a.readBinary(N);throw"both async and sync fetching of the wasm failed";}catch(b){t(b)}}
function ea(){return a.wasmBinary||!h&&!k||"function"!==typeof fetch?new Promise(function(b){b(P())}):fetch(N,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+N+"'";return b.arrayBuffer()}).catch(function(){return P()})}
function fa(b){function c(b){a.asm=b.exports;J--;a.monitorRunDependencies&&a.monitorRunDependencies(J);0==J&&(null!==K&&(clearInterval(K),K=null),L&&(b=L,L=null,b()))}function d(b){c(b.instance)}function e(b){return ea().then(function(b){return WebAssembly.instantiate(b,q)}).then(b,function(b){v("failed to asynchronously prepare wasm: "+b);t(b)})}var q={env:b};J++;a.monitorRunDependencies&&a.monitorRunDependencies(J);if(a.instantiateWasm)try{return a.instantiateWasm(q,c)}catch(B){return v("Module.instantiateWasm callback failed with error: "+
B),!1}(function(){if(a.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||M()||"function"!==typeof fetch)return e(d);fetch(N,{credentials:"same-origin"}).then(function(b){return WebAssembly.instantiateStreaming(b,q).then(d,function(b){v("wasm streaming compile failed: "+b);v("falling back to ArrayBuffer instantiation");e(d)})})})();return{}}a.asm=function(b,c){c.memory=w;c.table=new WebAssembly.Table({initial:43,maximum:43,element:"anyfunc"});return fa(c)};H.push({A:function(){ha()}});
var Q=0;function R(){Q+=4;return C[Q-4>>2]}var ia={};function S(){a.___errno_location&&(C[a.___errno_location()>>2]=12)}function ja(b){b=y(b);var c=buffer.byteLength;try{return-1!==w.grow((b-c)/65536)?(buffer=w.buffer,!0):!1}catch(d){return!1}}
var T=a.asm({},{h:function(){},g:function(b,c){Q=c;try{var d=ia.C(),e=R(),q=R();return(void 0).read(d,z,e,q)}catch(B){return t(B),-B.B}},d:function(){},f:function(b,c,d){A.set(A.subarray(c,c+d),b)},b:function(b,c,d,e){a.audioPackets.push({data:a.HEAPU8.buffer.slice?a.HEAPU8.buffer.slice(b,b+c):(new Uint8Array(new Uint8Array(a.HEAPU8.buffer,b,c))).buffer,timestamp:d,discardPadding:e})},e:function(b,c){function d(b){for(var c="",d=a.HEAPU8;0!=d[b];b++)c+=String.fromCharCode(d[b]);return c}b&&(a.videoCodec=
d(b));c&&(a.audioCodec=d(c));b=a._ogv_demuxer_media_duration();a.duration=0<=b?b:NaN;a.loadedMetadata=!0},c:function(b,c,d,e,q){a.videoPackets.push({data:a.HEAPU8.buffer.slice?a.HEAPU8.buffer.slice(b,b+c):(new Uint8Array(new Uint8Array(a.HEAPU8.buffer,b,c))).buffer,timestamp:d,keyframeTimestamp:e,isKeyframe:!!q})},a:function(b){b|=0;var c=z.length|0;var d=C[1064]|0;var e=d+b|0;if(0<(b|0)&(e|0)<(d|0)|0>(e|0))return t("OOM"),0,S(),-1;if(b=(e|0)>(c|0)){b=e|0;if(2147418112<b)b=!1;else{for(c=Math.max(z.length,
16777216);c<b;)536870912>=c?c=y(2*c):c=Math.min(y((3*c+2147483648)/4),2147418112);ja(c)?(D(),b=!0):b=!1}b=!(b|0)}if(b)return S(),-1;C[1064]=e|0;return d|0}},buffer);a.asm=T;var ha=a.___wasm_call_ctors=function(){return a.asm.i.apply(null,arguments)};a._ogv_demuxer_init=function(){return a.asm.j.apply(null,arguments)};a._ogv_demuxer_receive_input=function(){return a.asm.k.apply(null,arguments)};a._ogv_demuxer_process=function(){return a.asm.l.apply(null,arguments)};
a._ogv_demuxer_destroy=function(){return a.asm.m.apply(null,arguments)};a._ogv_demuxer_media_length=function(){return a.asm.n.apply(null,arguments)};a._ogv_demuxer_media_duration=function(){return a.asm.o.apply(null,arguments)};a._ogv_demuxer_seekable=function(){return a.asm.p.apply(null,arguments)};a._ogv_demuxer_keypoint_offset=function(){return a.asm.q.apply(null,arguments)};a._ogv_demuxer_seek_to_keypoint=function(){return a.asm.r.apply(null,arguments)};
a._ogv_demuxer_flush=function(){return a.asm.s.apply(null,arguments)};a._malloc=function(){return a.asm.t.apply(null,arguments)};a._free=function(){return a.asm.u.apply(null,arguments)};a.dynCall_vi=function(){return a.asm.v.apply(null,arguments)};a.asm=T;a.then=function(b){if(a.calledRun)b(a);else{var c=a.onRuntimeInitialized;a.onRuntimeInitialized=function(){c&&c();b(a)}}return a};function U(b){this.name="ExitStatus";this.message="Program terminated with exit("+b+")";this.status=b}U.prototype=Error();
U.prototype.constructor=U;L=function ka(){a.calledRun||V();a.calledRun||(L=ka)};
function V(){function b(){if(!a.calledRun&&(a.calledRun=!0,!x)){F(H);F(ca);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var b=a.postRun.shift();I.unshift(b)}F(I)}}if(!(0<J)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)da();F(G);0<J||a.calledRun||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);b()},1)):b())}}
a.run=V;function t(b){if(a.onAbort)a.onAbort(b);void 0!==b?(u(b),v(b),b='"'+b+'"'):b="";x=!0;throw"abort("+b+"). Build with -s ASSERTIONS=1 for more info.";}a.abort=t;if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();a.noExitRuntime=!0;V();var W,X,Y;Y="undefined"===typeof performance||"undefined"===typeof performance.now?Date.now:performance.now.bind(performance);function Z(b){var c=Y();b=b();c=Y()-c;a.cpuTime+=c;return b}
a.loadedMetadata=!1;a.videoCodec=null;a.audioCodec=null;a.duration=NaN;a.onseek=null;a.cpuTime=0;a.audioPackets=[];Object.defineProperty(a,"hasAudio",{get:function(){return a.loadedMetadata&&a.audioCodec}});Object.defineProperty(a,"audioReady",{get:function(){return 0<a.audioPackets.length}});Object.defineProperty(a,"audioTimestamp",{get:function(){return 0<a.audioPackets.length?a.audioPackets[0].timestamp:-1}});a.videoPackets=[];
Object.defineProperty(a,"hasVideo",{get:function(){return a.loadedMetadata&&a.videoCodec}});Object.defineProperty(a,"frameReady",{get:function(){return 0<a.videoPackets.length}});Object.defineProperty(a,"frameTimestamp",{get:function(){return 0<a.videoPackets.length?a.videoPackets[0].timestamp:-1}});Object.defineProperty(a,"keyframeTimestamp",{get:function(){return 0<a.videoPackets.length?a.videoPackets[0].keyframeTimestamp:-1}});
Object.defineProperty(a,"nextKeyframeTimestamp",{get:function(){for(var b=0;b<a.videoPackets.length;b++){var c=a.videoPackets[b];if(c.isKeyframe)return c.timestamp}return-1}});Object.defineProperty(a,"processing",{get:function(){return!1}});Object.defineProperty(a,"seekable",{get:function(){return!!a._ogv_demuxer_seekable()}});a.init=function(b){Z(function(){a._ogv_demuxer_init()});b()};
a.receiveInput=function(b,c){Z(function(){var c=b.byteLength;W&&X>=c||(W&&a._free(W),X=c,W=a._malloc(X));var e=W;a.HEAPU8.set(new Uint8Array(b),e);a._ogv_demuxer_receive_input(e,c)});c()};a.process=function(b){var c=Z(function(){return a._ogv_demuxer_process()});b(!!c)};a.dequeueVideoPacket=function(b){if(a.videoPackets.length){var c=a.videoPackets.shift().data;b(c)}else b(null)};a.dequeueAudioPacket=function(b){if(a.audioPackets.length){var c=a.audioPackets.shift();b(c.data,c.discardPadding)}else b(null)};
a.getKeypointOffset=function(b,c){var d=Z(function(){return a._ogv_demuxer_keypoint_offset(1E3*b)});c(d)};a.seekToKeypoint=function(b,c){var d=Z(function(){return a._ogv_demuxer_seek_to_keypoint(1E3*b)});d&&(a.audioPackets.splice(0,a.audioPackets.length),a.videoPackets.splice(0,a.videoPackets.length));c(!!d)};a.flush=function(b){Z(function(){a.audioPackets.splice(0,a.audioPackets.length);a.videoPackets.splice(0,a.videoPackets.length);a._ogv_demuxer_flush()});b()};a.close=function(){};


  return OGVDemuxerOggW
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = OGVDemuxerOggW;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return OGVDemuxerOggW; });
    else if (typeof exports === 'object')
      exports["OGVDemuxerOggW"] = OGVDemuxerOggW;
    